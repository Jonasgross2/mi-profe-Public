import pathlib, time
base=pathlib.Path(__file__).resolve().parent
s=base/'src'
VERSION=time.strftime('%Y%m%d-%H%M')
# ===== Pakete: die Web-App lädt nur, was gebraucht wird (Lernsprache + ggf. Erklärsprache); die Mac-Einzeldateien enthalten alles =====
# Neue Lernsprache: Eintrag hier (Dateien in Ladereihenfolge, Definition defineLang zuletzt). Erklärsprachen: automatisch aus src/tr_<lern>_<ex>.js
PACKS={'es':{'name':'Spanisch','flag':'🇪🇸','files':['c_u0u1.js','c_u2u3.js','c_read03.js','c_u4u5.js','c_u6u8.js','c_u9u10.js','c_extra.js','c_gaps.js','c_a2b.js','c_b1.js','c_b1b.js','c_b2.js','c_b2b.js','c_c1.js','c_c1b.js','c_c2.js','c_vocab_plus.js','c_vocab_freq.js','c_info_tr.js','c_stories.js','c_reading.js','placement.js','levels.js','lang_es.js']}}
TRS=sorted(f.name for f in s.glob('tr_*.js'))   # tr_es_en.js → Erklärsprache en für Lernsprache es
EXMAP={}
for f in TRS:
    _,ln,ex=f[:-3].split('_');EXMAP.setdefault(ln,[]).append(ex)
ALL=['lang.js']+[f for k in PACKS for f in PACKS[k]['files']]+['ui_tr.js']+TRS+['engine.js']
import json as _json
MANIFEST='window.PACKS='+_json.dumps({'learn':[{'code':k,'name':v['name'],'flag':v['flag']} for k,v in PACKS.items()],'ex':EXMAP},ensure_ascii=False)+';'
LOADER='''<script>'''+MANIFEST+'''
/* Lader (ES5): gleiche Logik wie engine.js (App-Sprache → Erklärsprache), lädt das Lernsprachen-Paket und ggf. das Erklärsprachen-Paket synchron */
(function(){var sh=null;try{sh=JSON.parse(localStorage.getItem('mi-profe-shared')||'null');}catch(e){}
var nav=(navigator.language||'de').toLowerCase(),ui=sh&&sh.ui||(sh?'de':nav.indexOf('de')===0?'de':nav.indexOf('es')===0?'es':nav.indexOf('pt')===0?'pt':'en');
var codes=PACKS.learn.map(function(x){return x.code;}),lang=sh&&sh.lang||'es';if(codes.indexOf(lang)<0)lang='es';
var exl=['de'].concat(PACKS.ex[lang]||[]).filter(function(c){return c!==lang;}),ex=sh&&sh.ex,old=!!(sh&&sh.name);
if(exl.indexOf(ex)<0)ex=exl.indexOf(ui)>=0?ui:(ui!=='de'&&!old&&exl.indexOf('en')>=0?'en':'de');
var v='?v='+window.APP_VERSION;document.write('<script src="p/'+lang+'.js'+v+'"><\/script>');if(ex!=='de')document.write('<script src="p/tr-'+lang+'-'+ex+'.js'+v+'"><\/script>');})();</script>
'''
GUARD=r'''<script>/* Sicherheitsnetz (ES5): Wenn die App nicht startet, statt leerem Bildschirm eine Meldung mit Fehlertext, Neu-laden- und Sprache-zurück-Knopf. Fortschritt bleibt unberührt. */
(function(){var err='';window.addEventListener('error',function(e){if(!err)err=((e&&e.message)||'')+(e&&e.lineno?' (Zeile '+e.lineno+':'+e.colno+')':'');});
function fix(){try{if(navigator.serviceWorker)navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(x){x.unregister();});});if(window.caches)caches.keys().then(function(k){k.forEach(function(x){caches.delete(x);});});}catch(e){}setTimeout(function(){location.reload();},800);}
function de(){try{var sh=JSON.parse(localStorage.getItem('mi-profe-shared')||'{}');sh.ui='de';sh.ex='de';localStorage.setItem('mi-profe-shared',JSON.stringify(sh));}catch(e){}location.hash='';location.reload();}
function btn(t,f,bg){var b=document.createElement('button');b.textContent=t;b.style.cssText='display:block;width:100%;font-size:17px;padding:13px;margin-top:10px;border-radius:10px;border:0;background:'+bg+';color:#fff';b.onclick=f;return b;}
var shown=false;function check(){if(shown)return;if(document.readyState!=='complete')return setTimeout(check,1000);var vis=[].some.call(document.body.children,function(e){return!/^(SCRIPT|NOSCRIPT)$/.test(e.tagName)&&e.id!=='boot';});if(vis)return;var bt=document.getElementById('boot');if(bt)bt.parentNode.removeChild(bt);
var d=document.createElement('div');d.style.cssText='font:16px -apple-system,sans-serif;padding:48px 24px;color:#222;background:#fff;min-height:100vh;box-sizing:border-box';
d.innerHTML='<h2 style="margin-top:0">Mi profe startet gerade nicht</h2><p>Dein Fortschritt ist sicher gespeichert.</p><p style="background:#f4f0ea;padding:10px;border-radius:8px;font:13px ui-monospace,Menlo,monospace;word-break:break-word">Fehler: '+(String(err).replace(/</g,'&lt;')||'(keine Meldung)')+'<br>Version: '+(window.APP_VERSION||'?')+'<br>'+navigator.userAgent.replace(/</g,'&lt;')+'</p><p style="font-size:14px;color:#666">Bitte mach einen Screenshot davon.</p>';
d.appendChild(btn('Neueste Version laden',fix,'#c0472f'));d.appendChild(btn('Sprache auf Deutsch zurückstellen',de,'#555'));shown=true;document.body.appendChild(d);}
window.addEventListener('load',function(){setTimeout(check,1500);});setTimeout(check,3000);})();</script>
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
    inl=lambda fs:'\n'.join(f'<script>{(s/f).read_text()}</script>' for f in fs)
    scripts=inl(['lang.js'])+'\n'+LOADER+inl(['ui_tr.js','engine.js']) if pwa else inl(ALL)
    return f'''<!doctype html>
<html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
<title>Mi profe · Spanisch lernen</title>
{head_pwa}
<style>{(s/'app.css').read_text()}</style></head>
<body><noscript>Bitte JavaScript aktivieren.</noscript>
<div id="boot"><div class="bootlogo">🇪🇸</div><div class="bootspin"></div></div>
{GUARD}{scripts}
</body></html>'''
d=base/'dist';d.mkdir(exist_ok=True)
(d/'Spanisch-Lehrer.html').write_text(page(False))
w=base.parent/'Spanisch-App-Web';w.mkdir(exist_ok=True)
import shutil
for ic in ['icon-192.png','icon-512.png','apple-touch-icon.png']:
    if (base/ic).exists() and not (w/ic).exists(): shutil.copy(base/ic,w/ic)
(w/'index.html').write_text(page(True))
pk=w/'p';pk.mkdir(exist_ok=True)
for old in pk.glob('*.js'):old.unlink()
PACKFILES=[]
for k,v in PACKS.items():
    (pk/f'{k}.js').write_text(';\n'.join((s/f).read_text() for f in v['files']));PACKFILES.append(f'p/{k}.js')
for f in TRS:
    _,ln,ex=f[:-3].split('_');(pk/f'tr-{ln}-{ex}.js').write_text((s/f).read_text());PACKFILES.append(f'p/tr-{ln}-{ex}.js')
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
const FILES='''+_json.dumps(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png']+['./'+f+'?v='+VERSION for f in PACKFILES])+''';
/* Cache zuerst: App startet sofort aus dem Speicher. Neue Versionen kommen über ein neues sw.js (install lädt frisch), die Seite zeigt dann „Neue Version – tippen“. */
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
  if(e.request.mode==='navigate'){e.respondWith(caches.match('./index.html').then(r=>r||fetch(e.request)));return;}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
''')
files=ALL
art='<title>Mi profe</title>\n<style>'+(s/'app.css').read_text().replace('.mobile-nav{display:flex;position:sticky;top:0;','.mobile-nav{display:flex;position:sticky;top:env(safe-area-inset-top,0px);')+'</style>\n'+'\n'.join(f'<script>{(s/f).read_text()}</script>' for f in files)
(d/'mi-profe.html').write_text(art)
print('built',VERSION)
