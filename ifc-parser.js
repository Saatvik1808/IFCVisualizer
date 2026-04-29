// IFC Parser Module
const CATEGORY_MAP = {
  spatial: ['IFCPROJECT','IFCSITE','IFCBUILDING','IFCBUILDINGSTOREY','IFCSPACE','IFCZONE'],
  element: ['IFCWALL','IFCWALLSTANDARDCASE','IFCDOOR','IFCWINDOW','IFCSLAB','IFCCOLUMN','IFCBEAM','IFCSTAIR','IFCROOF','IFCRAILING','IFCRAMP','IFCCURTAINWALL','IFCPLATE','IFCMEMBER','IFCFOOTING','IFCPILE','IFCCOVERING','IFCFURNISHINGELEMENT','IFCBUILDINGELEMENTPROXY','IFCOPENINGELEMENT','IFCFLOWSEGMENT','IFCFLOWTERMINAL','IFCDISTRIBUTIONELEMENT'],
  relationship: ['IFCRELAGGREGATES','IFCRELCONTAINEDINSPATIALSTRUCTURE','IFCRELDEFINESBYPROPERTIES','IFCRELDEFINESBYTYPE','IFCRELASSOCIATESMATERIAL','IFCRELVOIDSELEMENT','IFCRELFILLSELEMENT','IFCRELCONNECTSELEMENTS','IFCRELCONNECTSPATHELEMENTS','IFCRELSPACEBOUNDARY','IFCRELASSIGNS','IFCRELASSIGNSTOGROUP'],
  property: ['IFCPROPERTYSET','IFCPROPERTYSINGLEVALUE','IFCPROPERTYENUMERATEDVALUE','IFCPROPERTYLISTVALUE','IFCPROPERTYBOUNDEDVALUE','IFCELEMENTQUANTITY','IFCQUANTITYLENGTH','IFCQUANTITYAREA','IFCQUANTITYVOLUME','IFCQUANTITYCOUNT'],
  type: ['IFCWALLTYPE','IFCDOORTYPE','IFCWINDOWTYPE','IFCSLABTYPE','IFCCOLUMNTYPE','IFCBEAMTYPE','IFCSTAIRTYPE','IFCROOFTYPE','IFCMEMBERTYPE','IFCBUILDINGELEMENTPROXYTYPE','IFCFURNITURETYPE'],
  geometry: ['IFCSHAPEREPRESENTATION','IFCEXTRUDEDAREASOLID','IFCRECTANGLEPROFILEDEF','IFCCIRCLEPROFILEDEF','IFCARBITRARYCLOSEDPROFILEDEF','IFCAXIS2PLACEMENT3D','IFCAXIS2PLACEMENT2D','IFCCARTESIANPOINT','IFCDIRECTION','IFCLOCALPLACEMENT','IFCGEOMETRICREPRESENTATIONCONTEXT','IFCGEOMETRICREPRESENTATIONSUBCONTEXT','IFCPRODUCTDEFINITIONSHAPE','IFCBOOLEANCLIPPINGRESULT','IFCPOLYLINE','IFCCOMPOSITECURVE','IFCTRIMMEDCURVE','IFCMAPPEDITEM','IFCREPRESENTATIONMAP'],
  material: ['IFCMATERIAL','IFCMATERIALLAYER','IFCMATERIALLAYERSET','IFCMATERIALLAYERSETUSAGE','IFCMATERIALLIST','IFCMATERIALPROFILE','IFCMATERIALPROFILESET','IFCSURFACESTYLE','IFCPRESENTATIONSTYLEASSIGNMENT','IFCSTYLEDITEM','IFCCOLOURRGB']
};
const CAT_COLORS = { spatial:'#2563eb', element:'#f59e0b', relationship:'#8b5cf6', property:'#06b6d4', type:'#ec4899', geometry:'#f97316', material:'#10b981', other:'#94a3b8' };

function getCategory(type) {
  const upper = type.toUpperCase();
  for (const [cat, types] of Object.entries(CATEGORY_MAP)) {
    if (types.includes(upper)) return cat;
  }
  return 'other';
}

function parseIFC(text) {
  // Normalize: join multi-line entities
  const normalized = text.replace(/\r\n/g, '\n').replace(/\n(?!#|\/\*|ISO|HEADER|FILE_|ENDSEC|DATA|END-)/g, ' ');
  const entities = {};
  const headerInfo = {};
  // Header
  const fnMatch = text.match(/FILE_NAME\s*\(\s*'([^']*)'/);
  if (fnMatch) headerInfo.fileName = fnMatch[1];
  const fsMatch = text.match(/FILE_SCHEMA\s*\(\s*\(\s*'([^']*)'/);
  if (fsMatch) headerInfo.schema = fsMatch[1];

  // Entities
  const entityRegex = /^#(\d+)\s*=\s*(\w+)\s*\(([\s\S]*?)\)\s*;/gm;
  let m;
  while ((m = entityRegex.exec(normalized)) !== null) {
    const id = parseInt(m[1]);
    const type = m[2];
    const rawArgs = m[3];
    const args = splitArgs(rawArgs);
    const refs = extractRefs(rawArgs);
    const name = extractName(args, type);
    const cat = getCategory(type);
    entities[id] = { id, type, args, refs, name, category: cat, color: CAT_COLORS[cat] };
  }
  return { entities, headerInfo };
}

function splitArgs(str) {
  const result = []; let depth = 0, inStr = false, cur = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (inStr) { cur += ch; if (ch === "'" && str[i+1] === "'") { cur += "'"; i++; } else if (ch === "'") inStr = false; continue; }
    if (ch === "'") { inStr = true; cur += ch; continue; }
    if (ch === '(') { depth++; cur += ch; continue; }
    if (ch === ')') { depth--; cur += ch; continue; }
    if (ch === ',' && depth === 0) { result.push(cur.trim()); cur = ''; continue; }
    cur += ch;
  }
  if (cur.trim()) result.push(cur.trim());
  return result;
}

function extractRefs(str) {
  const refs = new Set();
  const re = /#(\d+)/g; let m;
  while ((m = re.exec(str)) !== null) refs.add(parseInt(m[1]));
  return [...refs];
}

function extractName(args, type) {
  // IFC entities usually have name at index 2 (after GlobalId and OwnerHistory)
  if (args.length > 2) {
    const n = args[2];
    if (n && n.startsWith("'") && n.endsWith("'")) return n.slice(1, -1);
  }
  return null;
}

function buildHierarchy(entities) {
  // Build spatial tree using IfcRelAggregates and IfcRelContainedInSpatialStructure
  const childMap = {}; // parentId -> [childIds]
  for (const e of Object.values(entities)) {
    const upper = e.type.toUpperCase();
    if (upper === 'IFCRELAGGREGATES') {
      // args: GlobalId, OwnerHistory, Name, Description, RelatingObject, RelatedObjects
      const relatingRef = e.args[4]?.match(/#(\d+)/);
      const relatedStr = e.args[5] || '';
      const relatedRefs = [...relatedStr.matchAll(/#(\d+)/g)].map(m => parseInt(m[1]));
      if (relatingRef) {
        const pid = parseInt(relatingRef[1]);
        if (!childMap[pid]) childMap[pid] = [];
        childMap[pid].push(...relatedRefs);
      }
    }
    if (upper === 'IFCRELCONTAINEDINSPATIALSTRUCTURE') {
      // args: GlobalId, OwnerHistory, Name, Description, RelatedElements, RelatingStructure
      const relatingRef = e.args[5]?.match(/#(\d+)/);
      const relatedStr = e.args[4] || '';
      const relatedRefs = [...relatedStr.matchAll(/#(\d+)/g)].map(m => parseInt(m[1]));
      if (relatingRef) {
        const pid = parseInt(relatingRef[1]);
        if (!childMap[pid]) childMap[pid] = [];
        childMap[pid].push(...relatedRefs);
      }
    }
  }

  // Find root (IfcProject)
  let rootId = null;
  for (const e of Object.values(entities)) {
    if (e.type.toUpperCase() === 'IFCPROJECT') { rootId = e.id; break; }
  }
  if (!rootId) {
    // Fallback: find entity that's a parent but not a child
    const allChildren = new Set(Object.values(childMap).flat());
    for (const pid of Object.keys(childMap).map(Number)) {
      if (!allChildren.has(pid)) { rootId = pid; break; }
    }
  }
  if (!rootId) return null;

  function buildNode(id, depth = 0) {
    const ent = entities[id];
    if (!ent || depth > 15) return null;
    const children = (childMap[id] || []).map(cid => buildNode(cid, depth + 1)).filter(Boolean);
    return { id, name: ent.name || ent.type, type: ent.type, category: ent.category, color: ent.color, children };
  }
  return buildNode(rootId);
}

function buildGraph(entities) {
  // Build a meaningful graph by extracting REAL connections from IFC relationship entities.
  // Instead of dumping all entities, we use IfcRel* to find actual semantic links.
  const links = [];
  const connectedIds = new Set();
  const linkSet = new Set(); // deduplicate

  const REL_TYPES = {
    'IFCRELAGGREGATES': { srcIdx: 4, tgtIdx: 5, label: 'aggregates' },
    'IFCRELCONTAINEDINSPATIALSTRUCTURE': { srcIdx: 5, tgtIdx: 4, label: 'contains' },
    'IFCRELDEFINESBYTYPE': { srcIdx: 4, tgtIdx: 5, label: 'typed by' },
    'IFCRELDEFINESBYPROPERTIES': { srcIdx: 4, tgtIdx: 5, label: 'has properties' },
    'IFCRELASSOCIATESMATERIAL': { srcIdx: 4, tgtIdx: 5, label: 'has material' },
    'IFCRELVOIDSELEMENT': { srcIdx: 4, tgtIdx: 5, label: 'voids' },
    'IFCRELFILLSELEMENT': { srcIdx: 4, tgtIdx: 5, label: 'fills' },
    'IFCRELCONNECTSELEMENTS': { srcIdx: 4, tgtIdx: 5, label: 'connects' },
    'IFCRELSPACEBOUNDARY': { srcIdx: 4, tgtIdx: 5, label: 'bounds' },
  };

  for (const e of Object.values(entities)) {
    const upper = e.type.toUpperCase();
    const relDef = REL_TYPES[upper];
    if (!relDef) continue;

    // Source can be a single ref or list of refs
    const srcStr = e.args[relDef.srcIdx] || '';
    const tgtStr = e.args[relDef.tgtIdx] || '';
    const srcRefs = [...srcStr.matchAll(/#(\d+)/g)].map(m => parseInt(m[1]));
    const tgtRefs = [...tgtStr.matchAll(/#(\d+)/g)].map(m => parseInt(m[1]));

    // Create links: each source → each target
    for (const s of srcRefs) {
      for (const t of tgtRefs) {
        if (s !== t && entities[s] && entities[t]) {
          const key = `${s}-${t}`;
          if (!linkSet.has(key)) {
            linkSet.add(key);
            links.push({ source: s, target: t, label: relDef.label });
            connectedIds.add(s);
            connectedIds.add(t);
          }
        }
      }
    }
  }

  // Cap: if too many connected entities, keep only spatial + elements + types, limit to ~150 nodes
  let finalIds = connectedIds;
  if (connectedIds.size > 150) {
    // Prioritize: spatial first, then elements, then types
    const priority = ['spatial', 'element', 'type', 'property', 'material'];
    const picked = new Set();
    for (const cat of priority) {
      for (const id of connectedIds) {
        if (picked.size >= 150) break;
        if (entities[id]?.category === cat) picked.add(id);
      }
      if (picked.size >= 150) break;
    }
    finalIds = picked;
  }

  // Build node list
  const nodes = [];
  for (const id of finalIds) {
    const e = entities[id];
    if (!e) continue;
    nodes.push({ id: e.id, label: e.name || e.type, type: e.type, category: e.category, color: e.color });
  }

  // Filter links to only include nodes in finalIds
  const filteredLinks = links.filter(l => finalIds.has(l.source) && finalIds.has(l.target));

  return { nodes, links: filteredLinks };
}
