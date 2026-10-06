const CACHE='mi-profe-20261007-0053';
const FILES=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./p/es.js?v=20261007-0053", "./p/tr-es-en.js?v=20261007-0053"];
/* Cache zuerst: App startet sofort aus dem Speicher. Neue Versionen kommen über ein neues sw.js (install lädt frisch), die Seite zeigt dann „Neue Version – tippen“. */
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
  if(e.request.mode==='navigate'){e.respondWith(caches.match('./index.html').then(r=>r||fetch(e.request)));return;}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
