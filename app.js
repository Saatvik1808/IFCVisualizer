/* IFC Visualizer - Main App */
const SAMPLE_IFC = `ISO-10303-21;
HEADER;
FILE_DESCRIPTION(('ViewDefinition [CoordinationView_V2.0]'),'2;1');
FILE_NAME('SampleBuilding.ifc','2024-01-15T10:30:00',('Architect'),('Studio'),'','BuildingSoft','');
FILE_SCHEMA(('IFC4'));
ENDSEC;
DATA;
#1= IFCPROJECT('2O_G$nDif0qQyR7S1FnPJJ',#2,'Sample Office Building',$,$,$,$,(#15),#9);
#2= IFCOWNERHISTORY(#3,#6,$,.NOCHANGE.,$,$,$,1705312200);
#3= IFCPERSONANDORGANIZATION(#4,#5,$);
#4= IFCPERSON($,'Smith','John',$,$,$,$,$);
#5= IFCORGANIZATION($,'Design Studio Inc.',$,$,$);
#6= IFCAPPLICATION(#5,'3.0','BuildingSoft','BS');
#7= IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);
#8= IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.);
#9= IFCUNITASSIGNMENT((#7,#8));
#10= IFCCARTESIANPOINT((0.,0.,0.));
#11= IFCDIRECTION((0.,0.,1.));
#12= IFCDIRECTION((1.,0.,0.));
#13= IFCAXIS2PLACEMENT3D(#10,#11,#12);
#14= IFCLOCALPLACEMENT($,#13);
#15= IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#13,$);
#20= IFCSITE('3rNg_N55v4CRBpQVbZJoHB',#2,'Default Site',$,$,#14,$,$,.ELEMENT.,$,$,$,$,$);
#21= IFCBUILDING('0yf_M5JZv9QQXly4dq_zvI',#2,'Main Office Building',$,$,#14,$,$,.ELEMENT.,$,$,$);
#22= IFCBUILDINGSTOREY('2GNgSHJ5j9BRUjqT59tVb0',#2,'Ground Floor',$,$,#14,$,$,.ELEMENT.,0.);
#23= IFCBUILDINGSTOREY('1C0mGkf1X3kOwqTkP_kipQ',#2,'First Floor',$,$,#14,$,$,.ELEMENT.,3000.);
#24= IFCSPACE('0BTBFw6f90Nfh9rP1dkfhA',#2,'Reception Area',$,$,#14,$,$,.ELEMENT.,.INTERNAL.,$);
#25= IFCSPACE('1ABCDe6f90Nfh9rP1dkfhB',#2,'Conference Room',$,$,#14,$,$,.ELEMENT.,.INTERNAL.,$);
#30= IFCWALL('3vB2YO$MX4xv5uCqZZG3Hg',#2,'North Wall',$,$,#14,$,$,$);
#31= IFCWALL('1TGeBMKkb8jhS1Ew4XMXGB',#2,'South Wall',$,$,#14,$,$,$);
#32= IFCWALL('2UHfBNLl9AkiT2Fx5YNYH3',#2,'Partition Wall',$,$,#14,$,$,$);
#33= IFCWALLSTANDARDCASE('3VIgDQMlDCkPS3FOqYWhLJ',#2,'East Wall',$,$,#14,$,$,$);
#34= IFCDOOR('0LV8Pid0X3IA3jJLVDPidY',#2,'Main Entrance',$,$,#14,$,$,2100.,900.,$,$);
#35= IFCDOOR('1MWaDQe1Y4JB4kKMWEQjeZ',#2,'Office Door',$,$,#14,$,$,2100.,800.,$,$);
#36= IFCWINDOW('2NXbERf2Z5KC5lLNXFRkf0',#2,'Window W1',$,$,#14,$,$,1200.,1500.,$,$);
#37= IFCWINDOW('3OYcFSg3a6LD6mMOYGSlg1',#2,'Window W2',$,$,#14,$,$,1200.,1500.,$,$);
#38= IFCSLAB('4PZdGTh4b7ME7nNPZHTmh2',#2,'Ground Slab',$,$,#14,$,$,.FLOOR.);
#39= IFCSLAB('5QaeHUi5c8NF8oOQaIUni3',#2,'First Floor Slab',$,$,#14,$,$,.FLOOR.);
#40= IFCROOF('6RbfIVj6d9OG9pPRbJVoj4',#2,'Main Roof',$,$,#14,$,$,$);
#41= IFCCOLUMN('7ScgJWk7e0PH0qQScKWpk5',#2,'Column C1',$,$,#14,$,$,$);
#42= IFCCOLUMN('8TdhKXl8f1QI1rRTdLXql6',#2,'Column C2',$,$,#14,$,$,$);
#43= IFCBEAM('9UeiLYm9g2RJ2sSTeMYrm7',#2,'Beam B1',$,$,#14,$,$,$);
#44= IFCSTAIR('0VfjMZn0h3SK3tTUfNZsn8',#2,'Main Staircase',$,$,#14,$,$,.STRAIGHT_RUN_STAIR.);
#45= IFCFURNISHINGELEMENT('1WgkN0o1i4TL4uUVgO0to9',#2,'Reception Desk',$,$,#14,$,$,$);
#46= IFCWALLTYPE('2XhlO1p2j5UM5vVWhP1up0',#2,'Brick Wall 200mm',$,$,$,$,$,$,.STANDARD.);
#47= IFCDOORTYPE('3YimP2q3k6VN6wWXiQ2vq1',#2,'Single Swing Door',$,$,$,$,$,$,.SINGLE_SWING_LEFT.,$);
#48= IFCWINDOWTYPE('4ZjnQ3r4l7WO7xXYjR3wr2',#2,'Fixed Window',$,$,$,$,$,$,.WINDOW.,$,$);
#50= IFCPROPERTYSET('pset01',#2,'Pset_WallCommon',$,(#60,#61));
#51= IFCPROPERTYSET('pset02',#2,'Pset_DoorCommon',$,(#62));
#60= IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.T.),$);
#61= IFCPROPERTYSINGLEVALUE('FireRating',$,IFCLABEL('REI60'),$);
#62= IFCPROPERTYSINGLEVALUE('IsExternal',$,IFCBOOLEAN(.F.),$);
#70= IFCMATERIAL('Concrete');
#71= IFCMATERIAL('Brick');
#72= IFCMATERIALLAYERSET((#73,#74),'Wall Layers');
#73= IFCMATERIALLAYER(#71,0.1,$);
#74= IFCMATERIALLAYER(#70,0.15,$);
#80= IFCRELAGGREGATES('agg01',#2,$,$,#1,(#20));
#81= IFCRELAGGREGATES('agg02',#2,$,$,#20,(#21));
#82= IFCRELAGGREGATES('agg03',#2,$,$,#21,(#22,#23));
#83= IFCRELAGGREGATES('agg04',#2,$,$,#22,(#24));
#84= IFCRELAGGREGATES('agg05',#2,$,$,#23,(#25));
#85= IFCRELCONTAINEDINSPATIALSTRUCTURE('cnt01',#2,$,$,(#30,#31,#32,#33,#34,#36,#38,#41,#42,#43,#45),#22);
#86= IFCRELCONTAINEDINSPATIALSTRUCTURE('cnt02',#2,$,$,(#35,#37,#39,#40,#44),#23);
#87= IFCRELDEFINESBYPROPERTIES('def01',#2,$,$,(#30,#31),#50);
#88= IFCRELDEFINESBYPROPERTIES('def02',#2,$,$,(#34),#51);
#89= IFCRELDEFINESBYTYPE('typ01',#2,$,$,(#30,#31,#32,#33),#46);
#90= IFCRELDEFINESBYTYPE('typ02',#2,$,$,(#34,#35),#47);
#91= IFCRELASSOCIATESMATERIAL('mat01',#2,$,$,(#30,#31),#72);
#92= IFCRELVOIDSELEMENT('void01',#2,$,$,#30,#34);
ENDSEC;
END-ISO-10303-21;`;

let parsedData = null;
let selectedEntity = null;
let currentInputMode = 'paste';

// DOM refs
const $ = id => document.getElementById(id);
const inputSection = $('inputSection');
const vizSection = $('vizSection');
const parseBtn = $('parseBtn');
const loadSampleBtn = $('loadSampleBtn');
const backBtn = $('backToInput');
const ifcInput = $('ifcInput');
const entitySearch = $('entitySearch');
const categoryFilter = $('categoryFilter');
const fileInput = $('fileInput');
const uploadZone = $('uploadZone');
const urlInput = $('urlInput');
const parseHint = $('parseHint');

// ===== Input Tab Switching =====
document.querySelectorAll('.ws-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    currentInputMode = tab.dataset.mode;
    document.querySelectorAll('.ws-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('.ws-mode').forEach(m => m.classList.remove('active'));
    $(`mode-${currentInputMode}`).classList.add('active');
    parseHint.textContent = '';
  });
});

// ===== Editor Line Numbers =====
const editorGutter = $('editorGutter');
const editorLineCount = $('editorLineCount');
const editorCharCount = $('editorCharCount');

function updateGutter() {
  const lines = ifcInput.value.split('\n').length;
  const chars = ifcInput.value.length;
  let html = '';
  for (let i = 1; i <= Math.max(lines, 15); i++) html += `<span>${i}</span>`;
  editorGutter.innerHTML = html;
  if (editorLineCount) editorLineCount.textContent = `${lines} lines`;
  if (editorCharCount) editorCharCount.textContent = `${chars.toLocaleString()} chars`;
}
ifcInput.addEventListener('input', updateGutter);
ifcInput.addEventListener('scroll', () => { editorGutter.scrollTop = ifcInput.scrollTop; });
updateGutter();

// ===== File Upload =====
uploadZone.addEventListener('click', () => fileInput.click());
uploadZone.addEventListener('dragover', (e) => { e.preventDefault(); uploadZone.classList.add('dragover'); });
uploadZone.addEventListener('dragleave', () => uploadZone.classList.remove('dragover'));
uploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadZone.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file) handleFile(file);
});
fileInput.addEventListener('change', () => {
  if (fileInput.files[0]) handleFile(fileInput.files[0]);
});

function handleFile(file) {
  const name = file.name;
  const size = file.size < 1024*1024
    ? (file.size / 1024).toFixed(1) + ' KB'
    : (file.size / (1024*1024)).toFixed(1) + ' MB';
  $('uploadFilename').textContent = name;
  $('uploadSize').textContent = size;
  $('uploadStatus').classList.remove('hidden');
  parseHint.textContent = `${name} loaded`;

  const reader = new FileReader();
  reader.onload = (e) => {
    ifcInput.value = e.target.result;
  };
  reader.readAsText(file);
}

// ===== URL Fetch =====
function fetchFromURL() {
  const url = urlInput.value.trim();
  if (!url) { parseHint.textContent = 'Enter a URL first'; return false; }
  parseHint.textContent = 'Fetching...';
  parseBtn.disabled = true;

  // Use a CORS proxy if needed, or fetch directly
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.text();
    })
    .then(text => {
      ifcInput.value = text;
      parseHint.textContent = `Fetched (${(text.length/1024).toFixed(0)} KB)`;
      parseBtn.disabled = false;
      return true;
    })
    .catch(err => {
      parseHint.textContent = `Error: ${err.message}. Check CORS or URL.`;
      parseBtn.disabled = false;
      return false;
    });
}

// Init
parseBtn.addEventListener('click', async () => {
  if (currentInputMode === 'url' && !ifcInput.value.trim()) {
    const ok = await fetchFromURL();
    if (!ok) return;
  }
  if (ifcInput.value.trim()) runParse(ifcInput.value);
  else parseHint.textContent = 'No IFC data to parse';
});
loadSampleBtn.addEventListener('click', () => {
  document.querySelector('.ws-tab[data-mode="paste"]').click();
  ifcInput.value = SAMPLE_IFC;
  parseHint.textContent = 'Sample loaded';
  updateGutter();
});
backBtn.addEventListener('click', () => { vizSection.classList.add('hidden'); inputSection.classList.remove('hidden'); backBtn.classList.add('hidden'); });
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    // Open tree and graph in full page — data loaded from IndexedDB
    if (view === 'tree' || view === 'graph') {
      window.open(view === 'tree' ? 'tree.html' : 'graph.html', '_blank');
      return;
    }
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    $(`${view}View`).classList.add('active');
  });
});
entitySearch.addEventListener('input', () => renderEntityList());
categoryFilter.addEventListener('change', () => renderEntityList());

function runParse(text) {
  parsedData = parseIFC(text);
  const ents = parsedData.entities;

  // Store via IndexedDB for full-page views (handles large files)
  saveIFCData(parsedData).then(() => {
    console.log('IFC data saved to IndexedDB');
  }).catch(e => {
    console.warn('Failed to save to IndexedDB:', e);
  });

  inputSection.classList.add('hidden');
  vizSection.classList.remove('hidden');
  backBtn.classList.remove('hidden');

  // Stats
  const cats = {};
  Object.values(ents).forEach(e => { cats[e.category] = (cats[e.category] || 0) + 1; });
  $('statEntities').querySelector('.stat-value').textContent = Object.keys(ents).length;
  $('statTypes').querySelector('.stat-value').textContent = new Set(Object.values(ents).map(e => e.type)).size;
  $('statRelationships').querySelector('.stat-value').textContent = cats.relationship || 0;
  $('statSpatial').querySelector('.stat-value').textContent = cats.spatial || 0;
  $('statBuilding').querySelector('.stat-value').textContent = cats.element || 0;

  renderLegend();
  renderEntityList();
  renderStats();
  renderGuide();
}

function renderLegend() {
  const legend = $('legend');
  const labels = { spatial:'Spatial Structure', element:'Building Elements', relationship:'Relationships', property:'Properties', type:'Type Definitions', geometry:'Geometry', material:'Materials', other:'Other' };
  legend.innerHTML = Object.entries(CAT_COLORS).map(([k,c]) =>
    `<div class="legend-item"><div class="legend-color" style="background:${c}"></div>${labels[k]||k}</div>`
  ).join('');
}

function renderEntityList() {
  if (!parsedData) return;
  const list = $('entityList');
  const search = entitySearch.value.toLowerCase();
  const cat = categoryFilter.value;
  const filtered = Object.values(parsedData.entities).filter(e => {
    if (cat !== 'all' && e.category !== cat) return false;
    if (search && !(e.type.toLowerCase().includes(search) || (e.name||'').toLowerCase().includes(search) || `#${e.id}`.includes(search))) return false;
    return true;
  }).slice(0, 200);

  list.innerHTML = filtered.map(e =>
    `<div class="entity-item" data-id="${e.id}" onclick="selectEntity(${e.id})">
      <div class="entity-dot" style="background:${e.color}"></div>
      <span class="entity-item-type">${e.name || e.type}</span>
      <span class="entity-item-id">#${e.id}</span>
    </div>`
  ).join('');
}

function selectEntity(id) {
  if (!parsedData) return;
  const e = parsedData.entities[id];
  if (!e) return;
  selectedEntity = id;
  document.querySelectorAll('.entity-item').forEach(el => el.classList.toggle('selected', +el.dataset.id === id));

  const panel = $('detailContent');
  const placeholder = panel.previousElementSibling;
  placeholder.classList.add('hidden');
  panel.classList.remove('hidden');

  const refLinks = e.refs.map(r => {
    const re = parsedData.entities[r];
    return `<span class="detail-ref-link" onclick="selectEntity(${r})">#${r} ${re ? re.type : ''}</span>`;
  }).join(' ');

  const argRows = e.args.map((a, i) => `<div class="detail-attr"><span class="detail-attr-key">arg[${i}]</span><span class="detail-attr-val" title="${a}">${a.length > 40 ? a.slice(0,40)+'…' : a}</span></div>`).join('');

  panel.innerHTML = `
    <h3>#${e.id} ${e.name || ''}</h3>
    <div class="detail-type-badge" style="background:${e.color}22;color:${e.color};border:1px solid ${e.color}44">${e.type}</div>
    <div class="detail-section"><h4>Category</h4><p style="font-size:13px;color:var(--text-secondary)">${e.category}</p></div>
    <div class="detail-section"><h4>Arguments (${e.args.length})</h4>${argRows}</div>
    ${e.refs.length ? `<div class="detail-section"><h4>References (${e.refs.length})</h4><div style="display:flex;flex-wrap:wrap;gap:4px">${refLinks}</div></div>` : ''}
    <div class="detail-section"><h4>Referenced By</h4><div style="display:flex;flex-wrap:wrap;gap:4px">${
      Object.values(parsedData.entities).filter(o => o.refs.includes(id)).slice(0,20).map(o =>
        `<span class="detail-ref-link" onclick="selectEntity(${o.id})">#${o.id} ${o.type}</span>`
      ).join(' ') || '<span style="font-size:12px;color:var(--text-muted)">None</span>'
    }</div></div>`;
}

// ===== TREE VIEW =====
function renderTree() {
  const container = $('treeView');
  container.innerHTML = '';
  const hierarchy = buildHierarchy(parsedData.entities);
  if (!hierarchy) { container.innerHTML = '<p style="color:var(--text-muted);padding:40px;text-align:center">No spatial hierarchy found. The IFC data may not contain IfcRelAggregates relationships.</p>'; return; }

  const margin = { top: 30, right: 120, bottom: 30, left: 80 };
  const rect = container.getBoundingClientRect();
  const width = Math.max(rect.width, 600);

  const root = d3.hierarchy(hierarchy);
  const treeHeight = Math.max(root.descendants().length * 28, 400);

  const svg = d3.select(container).append('svg')
    .attr('width', width).attr('height', treeHeight + margin.top + margin.bottom);
  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

  const treeLayout = d3.tree().size([treeHeight, width - margin.left - margin.right - 160]);
  treeLayout(root);

  // Links
  g.selectAll('.tree-link').data(root.links()).join('path')
    .attr('class', 'tree-link')
    .attr('d', d3.linkHorizontal().x(d => d.y).y(d => d.x));

  // Nodes
  const node = g.selectAll('.tree-node').data(root.descendants()).join('g')
    .attr('class', 'tree-node')
    .attr('transform', d => `translate(${d.y},${d.x})`)
    .on('click', (ev, d) => selectEntity(d.data.id));

  node.append('circle').attr('r', d => d.children ? 7 : 5)
    .attr('fill', d => d.data.color).attr('stroke', d => d.data.color).attr('fill-opacity', d => d.children ? 0.2 : 0.8);

  node.append('text').attr('dy', '0.35em').attr('x', d => d.children ? -14 : 14)
    .attr('text-anchor', d => d.children ? 'end' : 'start')
    .text(d => `${d.data.name} [${d.data.type}]`);
}

// ===== GRAPH VIEW =====
let graphSim = null;
function renderGraph() {
  const container = $('graphView');
  container.innerHTML = '';
  if (graphSim) { graphSim.stop(); graphSim = null; }
  const graph = buildGraph(parsedData.entities);
  if (!graph.nodes.length) {
    container.innerHTML = '<p style="color:var(--text-muted);padding:40px;text-align:center">No relationship data found in this IFC file.</p>';
    return;
  }

  // Count connections per node for sizing
  const degreeMap = {};
  graph.links.forEach(l => {
    degreeMap[l.source] = (degreeMap[l.source]||0) + 1;
    degreeMap[l.target] = (degreeMap[l.target]||0) + 1;
  });
  graph.nodes.forEach(n => n.degree = degreeMap[n.id] || 0);

  // Controls toolbar
  const toolbar = document.createElement('div');
  toolbar.className = 'graph-toolbar';
  toolbar.innerHTML = `
    <span class="graph-info">${graph.nodes.length} nodes · ${graph.links.length} links</span>
    <button id="graphZoomFit" class="btn-ghost" title="Zoom to Fit">⊞ Fit</button>
    <button id="graphRelabel" class="btn-ghost" title="Toggle Labels">Aa Labels</button>
  `;
  container.appendChild(toolbar);

  const rect = container.getBoundingClientRect();
  const w = Math.max(rect.width || 800, 500);
  const h = Math.max((rect.height || 600) - 44, 400);

  const svg = d3.select(container).append('svg')
    .attr('width', w).attr('height', h)
    .style('display', 'block');

  // Arrow marker
  svg.append('defs').append('marker')
    .attr('id', 'arrow').attr('viewBox', '0 -5 10 10')
    .attr('refX', 20).attr('refY', 0)
    .attr('markerWidth', 6).attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path').attr('d', 'M0,-4L10,0L0,4').attr('fill', 'rgba(37,99,235,0.2)');

  const g = svg.append('g');

  // Zoom
  const zoom = d3.zoom().scaleExtent([0.05, 5]).on('zoom', e => g.attr('transform', e.transform));
  svg.call(zoom);

  // Links
  const link = g.selectAll('.graph-link').data(graph.links).join('line')
    .attr('class', 'graph-link')
    .attr('stroke-width', 1.2)
    .attr('marker-end', 'url(#arrow)');

  // Link labels
  let showLabels = true;
  const linkLabel = g.selectAll('.graph-link-label').data(graph.links).join('text')
    .attr('class', 'graph-link-label')
    .attr('text-anchor', 'middle')
    .attr('dy', -4)
    .text(d => d.label || '')
    .style('font', '9px Roboto Mono, monospace')
    .style('fill', '#94a3b8')
    .style('pointer-events', 'none');

  // Nodes
  const nodeRadius = d => {
    if (d.category === 'spatial') return Math.max(10, Math.min(20, 8 + d.degree));
    if (d.category === 'element') return Math.max(6, Math.min(14, 5 + d.degree * 0.5));
    return Math.max(5, Math.min(10, 4 + d.degree * 0.3));
  };

  const node = g.selectAll('.graph-node').data(graph.nodes).join('g')
    .attr('class', 'graph-node')
    .on('click', (ev, d) => selectEntity(d.id))
    .on('mouseenter', (ev, d) => highlightConnected(d))
    .on('mouseleave', () => clearHighlight())
    .call(d3.drag()
      .on('start', (e, d) => { if (!e.active) graphSim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
      .on('drag', (e, d) => { d.fx = e.x; d.fy = e.y; })
      .on('end', (e, d) => { if (!e.active) graphSim.alphaTarget(0); d.fx = null; d.fy = null; })
    );

  node.append('circle')
    .attr('r', nodeRadius)
    .attr('fill', d => d.color)
    .attr('fill-opacity', 0.85)
    .attr('stroke', d => d.color)
    .attr('stroke-width', 2)
    .attr('stroke-opacity', 0.4);

  node.append('text')
    .attr('dy', '0.35em')
    .attr('x', d => nodeRadius(d) + 5)
    .text(d => {
      const lbl = d.label || d.type;
      return lbl.length > 22 ? lbl.slice(0, 20) + '…' : lbl;
    })
    .style('font', '11px Roboto Mono, monospace')
    .style('fill', '#475569');

  // Simulation with strong forces to cluster connected nodes
  graphSim = d3.forceSimulation(graph.nodes)
    .force('link', d3.forceLink(graph.links).id(d => d.id).distance(90).strength(0.7))
    .force('charge', d3.forceManyBody().strength(-350).distanceMax(400))
    .force('center', d3.forceCenter(w / 2, h / 2))
    .force('collision', d3.forceCollide(d => nodeRadius(d) + 8))
    .force('x', d3.forceX(w / 2).strength(0.06))
    .force('y', d3.forceY(h / 2).strength(0.06))
    .alphaDecay(0.02)
    .velocityDecay(0.35);

  graphSim.on('tick', () => {
    link
      .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    linkLabel
      .attr('x', d => (d.source.x + d.target.x) / 2)
      .attr('y', d => (d.source.y + d.target.y) / 2);
    node.attr('transform', d => `translate(${d.x},${d.y})`);
  });

  // Highlight connected nodes on hover
  function highlightConnected(d) {
    const connected = new Set();
    connected.add(d.id);
    graph.links.forEach(l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source;
      const tid = typeof l.target === 'object' ? l.target.id : l.target;
      if (sid === d.id) connected.add(tid);
      if (tid === d.id) connected.add(sid);
    });
    node.select('circle').attr('opacity', n => connected.has(n.id) ? 1 : 0.15);
    node.select('text').attr('opacity', n => connected.has(n.id) ? 1 : 0.1);
    link.attr('stroke-opacity', l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source;
      const tid = typeof l.target === 'object' ? l.target.id : l.target;
      return (sid === d.id || tid === d.id) ? 0.9 : 0.05;
    }).attr('stroke', l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source;
      const tid = typeof l.target === 'object' ? l.target.id : l.target;
      return (sid === d.id || tid === d.id) ? d.color : 'rgba(37,99,235,0.05)';
    });
    linkLabel.attr('opacity', l => {
      const sid = typeof l.source === 'object' ? l.source.id : l.source;
      const tid = typeof l.target === 'object' ? l.target.id : l.target;
      return (sid === d.id || tid === d.id) ? 1 : 0;
    });
  }
  function clearHighlight() {
    node.select('circle').attr('opacity', 1);
    node.select('text').attr('opacity', 1);
    link.attr('stroke-opacity', 0.35).attr('stroke', 'rgba(37,99,235,0.12)');
    linkLabel.attr('opacity', showLabels ? 0.7 : 0);
  }

  // Toolbar actions
  $('graphZoomFit').addEventListener('click', () => {
    svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity);
  });
  $('graphRelabel').addEventListener('click', () => {
    showLabels = !showLabels;
    linkLabel.style('display', showLabels ? 'block' : 'none');
  });

  // Initial zoom to fit
  setTimeout(() => {
    const bounds = g.node().getBBox();
    if (bounds.width && bounds.height) {
      const scale = Math.min(w / (bounds.width + 60), h / (bounds.height + 60), 1.5) * 0.85;
      const tx = w / 2 - (bounds.x + bounds.width / 2) * scale;
      const ty = h / 2 - (bounds.y + bounds.height / 2) * scale;
      svg.transition().duration(800).call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
    }
  }, 2500);
}

// ===== STATS VIEW =====
function renderStats() {
  const container = $('statsView');
  const ents = parsedData.entities;

  // Type counts
  const typeCounts = {};
  Object.values(ents).forEach(e => { typeCounts[e.type] = (typeCounts[e.type]||0)+1; });
  const sorted = Object.entries(typeCounts).sort((a,b)=>b[1]-a[1]).slice(0,15);
  const max = sorted[0]?.[1] || 1;

  // Category counts
  const catCounts = {};
  Object.values(ents).forEach(e => { catCounts[e.category] = (catCounts[e.category]||0)+1; });
  const catSorted = Object.entries(catCounts).sort((a,b)=>b[1]-a[1]);
  const catMax = catSorted[0]?.[1] || 1;

  container.innerHTML = `<div class="stats-grid">
    <div class="stats-card"><h3>Top Entity Types</h3><div class="bar-chart">${sorted.map(([t,c])=>{
      const e = Object.values(ents).find(x=>x.type===t);
      return `<div class="bar-row"><div class="bar-label">${t}</div><div class="bar-track"><div class="bar-fill" style="width:${c/max*100}%;background:${e?.color||'#888'}">${c}</div></div></div>`;
    }).join('')}</div></div>
    <div class="stats-card"><h3>By Category</h3><div class="bar-chart">${catSorted.map(([cat,c])=>
      `<div class="bar-row"><div class="bar-label">${cat}</div><div class="bar-track"><div class="bar-fill" style="width:${c/catMax*100}%;background:${CAT_COLORS[cat]||'#888'}">${c}</div></div></div>`
    ).join('')}</div></div>
    <div class="stats-card"><h3>Model Summary</h3><div style="font-size:13px;color:var(--text-secondary);line-height:2">
      <div><strong>File:</strong> ${parsedData.headerInfo.fileName||'N/A'}</div>
      <div><strong>Schema:</strong> ${parsedData.headerInfo.schema||'N/A'}</div>
      <div><strong>Total Entities:</strong> ${Object.keys(ents).length}</div>
      <div><strong>Unique Types:</strong> ${new Set(Object.values(ents).map(e=>e.type)).size}</div>
      <div><strong>Total References:</strong> ${Object.values(ents).reduce((s,e)=>s+e.refs.length,0)}</div>
    </div></div>
  </div>`;
}

// ===== GUIDE VIEW =====
function renderGuide() {
  $('guideView').innerHTML = `<div class="guide-content">
<h2>Understanding IFC Data</h2>
<p>IFC (Industry Foundation Classes) is an open standard (ISO 16739) for describing building and construction data. It enables interoperability between different BIM software.</p>

<h3>📄 STEP File Format</h3>
<p>IFC files use the STEP physical file format (ISO 10303-21). Each entity is written as:</p>
<pre><code>#ID= IFCENTITYTYPE(arg1, arg2, #ref, ...);</code></pre>
<p><code>#ID</code> is a unique integer. Arguments can be strings (<code>'text'</code>), numbers, enums (<code>.ENUM.</code>), references (<code>#123</code>), lists (<code>(#1,#2)</code>), or null (<code>$</code>).</p>

<h3>🏗️ Spatial Hierarchy</h3>
<p>IFC organizes buildings in a strict hierarchy:</p>
<div class="guide-diagram">IfcProject
  └── IfcSite
       └── IfcBuilding
            ├── IfcBuildingStorey (Ground Floor)
            │    ├── IfcSpace (Room)
            │    ├── IfcWall
            │    ├── IfcDoor
            │    └── IfcWindow
            └── IfcBuildingStorey (First Floor)
                 └── ...</div>

<h3>🔗 Relationships</h3>
<p>IFC uses <em>objectified relationships</em> — relationships are entities themselves:</p>
<ul style="color:var(--text-secondary);font-size:14px;line-height:2;padding-left:20px">
<li><strong>IfcRelAggregates</strong> — Defines parent→child in spatial hierarchy</li>
<li><strong>IfcRelContainedInSpatialStructure</strong> — Places elements (walls, doors) into storeys/spaces</li>
<li><strong>IfcRelDefinesByProperties</strong> — Attaches property sets to elements</li>
<li><strong>IfcRelDefinesByType</strong> — Links elements to their type definitions</li>
<li><strong>IfcRelAssociatesMaterial</strong> — Assigns materials to elements</li>
<li><strong>IfcRelVoidsElement</strong> — Creates openings in walls for doors/windows</li>
</ul>

<h3>🧱 Building Elements</h3>
<p>Physical parts of the building: <code>IfcWall</code>, <code>IfcDoor</code>, <code>IfcWindow</code>, <code>IfcSlab</code>, <code>IfcColumn</code>, <code>IfcBeam</code>, <code>IfcStair</code>, <code>IfcRoof</code>, etc.</p>

<h3>📐 Geometry</h3>
<p>Shape is defined via <code>IfcProductDefinitionShape</code> → <code>IfcShapeRepresentation</code> → geometry primitives like <code>IfcExtrudedAreaSolid</code>. Placement uses <code>IfcLocalPlacement</code> with <code>IfcAxis2Placement3D</code>.</p>

<h3>🏷️ Properties & Types</h3>
<p><code>IfcPropertySet</code> groups <code>IfcPropertySingleValue</code> entries. Type definitions (e.g., <code>IfcWallType</code>) define shared characteristics for multiple instances.</p>
</div>`;
}
