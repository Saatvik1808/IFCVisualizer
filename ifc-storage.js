// ifc-storage.js — IndexedDB-based storage for large IFC parsed data
// localStorage has a ~5MB limit; IndexedDB can handle 100MB+

const IFC_DB_NAME = 'IFCVisualizerDB';
const IFC_STORE = 'parsedData';
const IFC_DB_VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(IFC_DB_NAME, IFC_DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(IFC_STORE)) {
        db.createObjectStore(IFC_STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function saveIFCData(parsedData) {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IFC_STORE, 'readwrite');
      const store = tx.objectStore(IFC_STORE);
      store.put(parsedData, 'current');
      tx.oncomplete = () => { db.close(); resolve(); };
      tx.onerror = () => { db.close(); reject(tx.error); };
    });
  });
}

function loadIFCData() {
  return openDB().then(db => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IFC_STORE, 'readonly');
      const store = tx.objectStore(IFC_STORE);
      const request = store.get('current');
      request.onsuccess = () => { db.close(); resolve(request.result || null); };
      request.onerror = () => { db.close(); reject(request.error); };
    });
  });
}
