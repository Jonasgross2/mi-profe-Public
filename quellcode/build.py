import pathlib, time
base=pathlib.Path(__file__).resolve().parent
s=base/'src'
VERSION=time.strftime('%Y%m%d-%H%M')
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
    files=['c_u0u1.js','c_u2u3.js','c_read03.js','c_u4u5.js','c_u6u8.js','c_u9u10.js','c_extra.js','c_gaps.js','c_a2b.js','c_b1.js','c_stories.js','placement.js','levels.js','lang.js','ui_tr.js','engine.js']
    scripts='\n'.join(f'<script>{(s/f).read_text()}</script>' for f in files)
    return f'''<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<title>Mi profe · Spanisch lernen</title>
{head_pwa}
<style>{(s/'app.css').read_text()}</style></head>
<body><noscript>Bitte JavaScript aktivieren.</noscript>
{scripts}
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
files=['c_u0u1.js','c_u2u3.js','c_read03.js','c_u4u5.js','c_u6u8.js','c_u9u10.js','c_extra.js','c_gaps.js','c_a2b.js','c_b1.js','c_stories.js','placement.js','levels.js','lang.js','ui_tr.js','engine.js']
art='<title>Mi profe</title>\n<style>'+(s/'app.css').read_text().replace('.mobile-nav{display:flex;position:sticky;top:0;','.mobile-nav{display:flex;position:sticky;top:env(safe-area-inset-top,0px);')+'</style>\n'+'\n'.join(f'<script>{(s/f).read_text()}</script>' for f in files)
(d/'mi-profe.html').write_text(art)
print('built',VERSION)
