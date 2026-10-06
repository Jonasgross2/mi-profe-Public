import pathlib, time
base=pathlib.Path(__file__).resolve().parent
s=base/'src'
VERSION=time.strftime('%Y%m%d-%H%M')
GUARD=r'''<script>/* Sicherheitsnetz (ES5): Wenn die App nicht startet, statt schwarzem Bildschirm eine Meldung mit Neu-laden/Update-Knopf. Fortschritt im localStorage bleibt unberührt. */
(function(){var err='';window.addEventListener('error',function(e){if(!err)err=(e&&e.message)||'';});
function fix(){try{if(navigator.serviceWorker)navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(x){x.unregister();});});if(window.caches)caches.keys().then(function(k){k.forEach(function(x){caches.delete(x);});});}catch(e){}setTimeout(function(){location.reload();},800);}
window.addEventListener('load',function(){setTimeout(function(){var vis=[].some.call(document.body.children,function(e){return!/^(SCRIPT|NOSCRIPT)$/.test(e.tagName);});if(vis)return;
var d=document.createElement('div');d.style.cssText='font:16px -apple-system,sans-serif;padding:40px 24px;color:#222;background:#fff;min-height:100vh';
d.innerHTML='<h2>Mi profe startet gerade nicht</h2><p>Dein Fortschritt ist sicher gespeichert. Bitte lade die neueste Version.</p><p style="color:#888;font-size:13px">'+String(err).replace(/</g,'&lt;')+'</p>';
var b=document.createElement('button');b.textContent='Neueste Version laden';b.style.cssText='font-size:17px;padding:12px 18px;border-radius:10px;border:0;background:#c0472f;color:#fff';b.onclick=fix;d.appendChild(b);document.body.appendChild(d);},1500);});})();</script>
'''
def page(pwa):
    head_pwa='''<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#c4472b">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Mi profe">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<link rel="icon" href="icon-192.png">
<script>window.PWA=true;window.APP_VERSION="'''+VERSION+'''";</script>''' if pwa else '''<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🇪🇸</text></svg>">'''
    files=['c_u0u1.js','c_u2u3.js','c_read03.js','c_u4u5.js','c_u6u8.js','c_u9u10.js','c_extra.js','c_gaps.js','c_a2b.js','c_b1.js','c_b1b.js','c_b2.js','c_b2b.js','c_c1.js','c_c1b.js','c_c2.js','c_vocab_plus.js','c_vocab_freq.js','c_info_tr.js','c_stories.js','c_reading.js','placement.js','levels.js','lang.js','ui_tr.js']+sorted(f.name for f in s.glob('tr_*.js'))+['engine.js']
    scripts='\n'.join(f'<script>{(s/f).read_text()}</script>' for f in files)
    return f'''<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<title>Mi profe · Spanisch lernen</title>
{head_pwa}
<style>{(s/'app.css').read_text()}</style></head>
<body><noscript>Bitte JavaScript aktivieren.</noscript>
{GUARD}{scripts}
</body></html>'''
d=base/'dist';d.mkdir(exist_ok=True)
(d/'Spanisch-Lehrer.html').write_text(page(False))
w=base.parent/'Spanisch-App-Web';w.mkdir(exist_ok=True)
import shutil
for ic in ['icon-192.png','icon-512.png','apple-touch-icon.png']:
    if (base/ic).exists() and not (w/ic).exists(): shutil.copy(base/ic,w/ic)
(w/'index.html').write_text(page(True))
(w/'manifest.webmanifest').write_text('''{
  "name": "Mi profe – Sprachen lernen",
  "short_name": "Mi profe",
  "lang": "de",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "background_color": "#faf6f1",
  "theme_color": "#c4472b",
  "icons": [
    {"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"},
    {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ]
}''')
(w/'sw.js').write_text('''const CACHE='mi-profe-'''+VERSION+'''';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
  if(e.request.mode==='navigate'){e.respondWith(fetch(e.request.url,{cache:'no-cache',credentials:'same-origin'}).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put('./index.html',c));return r;}).catch(()=>caches.match('./index.html')));return;}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
''')
files=['c_u0u1.js','c_u2u3.js','c_read03.js','c_u4u5.js','c_u6u8.js','c_u9u10.js','c_extra.js','c_gaps.js','c_a2b.js','c_b1.js','c_b1b.js','c_b2.js','c_b2b.js','c_c1.js','c_c1b.js','c_c2.js','c_vocab_plus.js','c_vocab_freq.js','c_info_tr.js','c_stories.js','c_reading.js','placement.js','levels.js','lang.js','ui_tr.js']+sorted(f.name for f in s.glob('tr_*.js'))+['engine.js']
art='<title>Mi profe</title>\n<style>'+(s/'app.css').read_text().replace('.mobile-nav{display:flex;position:sticky;top:0;','.mobile-nav{display:flex;position:sticky;top:env(safe-area-inset-top,0px);')+'</style>\n'+'\n'.join(f'<script>{(s/f).read_text()}</script>' for f in files)
(d/'mi-profe.html').write_text(art)
print('built',VERSION)
