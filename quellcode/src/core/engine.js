/* Neustart (Sprachwechsel, Update …): erst Startbildschirm mit Drehsymbol zeigen, dann neu laden – sonst wirkt die App kurz eingefroren */
/* Kurse für die Auswahl; Kurse im Aufbau (PACKS beta) nur nach einmal ?beta=1 (ausschalten: ?beta=0) und immer der gerade gewählte */
function learnPacks(){let beta=false;try{const q=new URLSearchParams(location.search).get('beta');if(q!=null)localStorage.setItem('mi-profe-beta',q==='1'?'1':'');beta=localStorage.getItem('mi-profe-beta')==='1';}catch(e){}
  const cur=window.LANG&&LANG.code;return window.PACKS?PACKS.learn.filter(L=>!L.beta||beta||L.code===cur):Object.values(LANGS).filter(L=>L.course&&L.course.units.length).map(L=>({code:L.code,name:L.name,flag:L.flag}));}
function bootScreen(){let b=document.getElementById('boot');if(!b){/* Flagge der Sprache, die gleich geladen wird */let f='🌍';try{const c=JSON.parse(localStorage.getItem('mi-profe-shared')||'{}').lang;const P=((window.PACKS&&PACKS.learn)||[]).find(x=>x.code===c)||LANGS[c];if(P)f=P.flag;}catch(e){}
  b=document.createElement('div');b.id='boot';b.innerHTML='<div class="bootlogo">'+f+'</div><div class="bootspin"></div>';document.body.appendChild(b);}return b;}
/* Startbildschirm ruhig ausblenden: mindestens 1 s ab dem Öffnen (länger, wenn die App länger braucht) und 0,3 s nach dem Aufbau, dann 0,4 s weiches Ausblenden */
let bootHiding=false,HOMEFIT=null,HOMESTATE=null; /* HOMESTATE: Kompakt-Stufe der Startseite (0–3), einmal pro Sitzung entschieden */function hideBoot(){const bt=document.getElementById('boot');if(!bt||bootHiding)return;bootHiding=true;
  setTimeout(()=>{if(HOMEFIT)HOMEFIT();bt.classList.add('out');setTimeout(()=>{bt.remove();bootHiding=false;},420);},Math.max(300,1000-(Date.now()-(window.__t0||Date.now()))));} /* eigene Stoppuhr (__t0 im Sicherheitsnetz) – performance.now() startet auf iOS zu früh */ 
function reloadApp(){bootScreen();setTimeout(()=>location.reload(),60);}
/* ===== Mi profe · Engine (sprachunabhängig – alles Sprachspezifische steht im Paket LANG, siehe lang.js) ===== */
(function(){
'use strict';
selectLang();
/* Oberflächensprache: T(deutscher Text) liefert die Übersetzung aus UI_TR[ui] oder den deutschen Text */
let UI='de';try{const sh=JSON.parse(localStorage.getItem('mi-profe-shared')||'null');const nav=(navigator.language||'de').toLowerCase();
  UI=sh&&sh.ui||(sh?'de':nav.startsWith('de')?'de':nav.startsWith('es')?'es':nav.startsWith('pt')?'pt':'en');}catch(e){}
if(UI!=='de'&&!(window.UI_TR&&UI_TR[UI]))UI='de';document.documentElement.lang=UI;
const TR=UI==='de'?null:UI_TR[UI];const T=s=>TR&&TR[s]!=null?TR[s]:s;
/* Lob in der Lernsprache (¡Muy bien!, ¡Hola! …): Texte enthalten die spanischen Wendungen; ein anderes Paket ersetzt sie über LANG.praise {'¡Muy bien!':'Sehr gut!', …} */
const TP=k=>{let r=T(k);const P=LANG.praise;if(P)for(const a in P)r=r.split(a).join(P[a]);return r;};
/* Hinweiskästen (.ojo) beginnen mit „¡OJO!“ – in anderen Lernsprachen aus LANG.praise (z. B. 'ACHTUNG!') */
if(LANG.praise&&LANG.praise['¡OJO!'])document.documentElement.style.setProperty('--ojo',JSON.stringify(LANG.praise['¡OJO!']+' '));
for(const L of LEVELS){L.title=T(L.title);L.sub=T(L.sub);}
const UI_LANGS=[['de','🇩🇪','Deutsch'],['en','🇬🇧','English'],['es','🇪🇸','Español'],['pt','🇧🇷','Português']].filter(([c])=>c==='de'||window.UI_TR&&UI_TR[c]);
function setUI(code,withEx){let sh={};try{sh=JSON.parse(localStorage.getItem('mi-profe-shared')||'{}')||{};}catch(e){}sh.ui=code;if(withEx)delete sh.ex;try{localStorage.setItem('mi-profe-shared',JSON.stringify(sh));}catch(e){}reloadApp();}
const fmt=s=>{const r=String(s).replace(/\{L\}/g,T(LANG.name)).replace(/\{INTO\}/g,T(LANG.into||'')).replace(/\{ON\}/g,T(LANG.onLang||'')).replace(/\{EX\}/g,T(EX_NAMES[EX]||EX));return r.charAt(0).toUpperCase()+r.slice(1);};
const KEY=LANG.key;const SHARED='mi-profe-shared';
/* Erklärsprache (unabhängig von der App-Sprache): Sprache der Erklärungen & Übersetzungen im Kurs. Deutsch + alle Sprachen mit COURSE_TR[Lernsprache], nie die Lernsprache selbst. */
const EX_NAMES={de:'Deutsch',en:'Englisch',pt:'Portugiesisch',es:'Spanisch',it:'Italienisch',fr:'Französisch'};
const EX_FLAGS={de:'🇩🇪',en:'🇬🇧',pt:'🇧🇷',es:'🇪🇸',it:'🇮🇹',fr:'🇫🇷'};
/* EX_BASE = Sprache, in der die Erklärungen des Kurses geschrieben sind (LANG.baseEx, Spanischkurs: Deutsch); andere Erklärsprachen kommen aus COURSE_TR */
const EX_BASE=LANG.baseEx||'de';
const EX_LANGS=[EX_BASE].concat(window.PACKS&&PACKS.ex[LANG.code]||Object.keys(window.COURSE_TR&&COURSE_TR[LANG.code]||{})).filter((c,i,a)=>c!==LANG.code&&a.indexOf(c)===i);
let EX=null,EX_SET,exOld=false;try{const sh=JSON.parse(localStorage.getItem(SHARED)||'null');if(sh){EX=EX_SET=sh.ex;exOld=!!sh.name;}}catch(e){}
/* ohne Wahl: wie die App-Sprache; sonst bei neuen Nutzern Englisch, bei bestehenden (bisher immer Deutsch) Deutsch */
if(!EX_LANGS.includes(EX))EX=EX_LANGS.includes(UI)?UI:UI!==EX_BASE&&!exOld&&EX_LANGS.includes('en')?'en':EX_BASE;
function setEX(code){let sh={};try{sh=JSON.parse(localStorage.getItem(SHARED)||'{}')||{};}catch(e){}sh.ex=code;try{localStorage.setItem(SHARED,JSON.stringify(sh));}catch(e){}reloadApp();}
const UW=LANG.unit,UWS=LANG.units;
const _ap=Element.prototype.append;Element.prototype.append=function(...k){return _ap.apply(this,k.flat().filter(x=>x!=null&&x!==false));};
const INTERVALS=[0,1,3,7,14,30,60,120];
const DEFAULT={placement:null,lessons:{},srs:{},streak:{last:null,count:0},stats:{answers:0,correct:0,days:{}},
  settings:{rate:0.9,voice:'',geminiKey:'',geminiModel:'gemini-flash-latest',theme:'auto',showTr:true,ghToken:'',gistId:''},mistakes:[],checks:{},stories:{}};
let S;
function load(){try{S=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){S={}}
  let sh=null;try{sh=JSON.parse(localStorage.getItem(SHARED));}catch(e){}
  if(!sh){let es={};try{es=JSON.parse(localStorage.getItem(LANGS.es&&LANGS.es.key||'espanol-lehrer-v1'))||{};}catch(e){}sh={name:es.name,gender:es.gender,settings:es.settings};}
  if(sh.name)S.name=sh.name;if(sh.surname)S.surname=sh.surname;else if(sh.name)delete S.surname;if(sh.gender)S.gender=sh.gender;if(sh.settings)S.settings=sh.settings;
  S=Object.assign(JSON.parse(JSON.stringify(DEFAULT)),S);S.settings=Object.assign({},DEFAULT.settings,S.settings||{});if(!S.settings.geminiModel||S.settings.geminiModel==='gemini-2.5-flash')S.settings.geminiModel='gemini-flash-latest';}
function saveShared(){try{localStorage.setItem(SHARED,JSON.stringify({lang:LANG.code,ui:UI,ex:EX_SET,name:S.name,surname:S.surname,gender:S.gender,settings:S.settings}));}catch(e){}}
/* Speicher voll? Erst die Zwischenstände (angefangene Übungen) opfern, dann noch einmal – sonst einmal deutlich warnen statt still Fortschritt zu verlieren */
let SAVE_WARNED=false;
function save(noSync){S.updated=Date.now();const js=JSON.stringify(S);try{localStorage.setItem(KEY,js);}catch(e){
    try{Object.keys(localStorage).filter(k=>k.indexOf('mi-profe-pause-')===0).forEach(k=>localStorage.removeItem(k));localStorage.setItem(KEY,js);}
    catch(e2){if(!SAVE_WARNED){SAVE_WARNED=true;setTimeout(()=>toast(T('⚠️ Speicher voll – Fortschritt konnte nicht gespeichert werden. Mehr → Sicherung exportieren.')),0);}}}
  saveShared();if(!noSync&&window.__sync)window.__sync.schedule();}
load();
document.title=fmt(T('Mi profe · {L} lernen'));
/* Name: wird beim ersten Öffnen abgefragt. Die Inhalte sind für „Jonas“ geschrieben – für andere Namen wird er überall ersetzt. */
const NAME=()=>S.name||'';
/* Nachname: steht nie fest im Kurs. Inhalte sind für die Kurs-Person LANG.persona (z. B. „Jonas Gross“) geschrieben: Vor-/Nachname werden aus
   S.name + optional S.surname gebaut; sprachspezifisches (Buchstabieren, señor/señora …) macht das Paket (LANG.personal: test, str, obj). */
const PN=LANG.persona||{name:'Jonas',surname:'Gross'},PERS=LANG.personal||{};
const rxe=x=>String(x).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const RX_FULL=new RegExp('\\b'+rxe(PN.name)+' '+rxe(PN.surname)+'\\b','g'),RX_HERR=new RegExp(', (Herr|Mr) '+rxe(PN.surname),'g'),RX_NAME=new RegExp('\\b'+rxe(PN.name)+'\\b','g');
function persStr(t){if(!(t.indexOf(PN.name)>=0||t.indexOf(PN.surname)>=0||PERS.test&&PERS.test.test(t)))return t;const sur=S.surname||'',f=S.gender==='f',nm=S.name||PN.name;
  const P={nm,sur,g:S.gender,ex:EX};if(PERS.str)t=PERS.str(t,P);
  return t.replace('Deinen Nachnamen buchstabieren',sur?'Deinen Nachnamen buchstabieren':'Deinen Namen buchstabieren').replace('Spelling your surname',sur?'Spelling your surname':'Spelling your name')
   .replace(RX_FULL,nm+(sur?' '+sur:''))
   .replace(RX_HERR,(m,w)=>!sur?'':S.gender==='x'?', '+nm.split(' ')[0]+' '+sur:', '+(w==='Herr'?(f?'Frau':'Herr'):(f?'Ms':'Mr'))+' '+sur).replace(RX_NAME,nm);}
function personalize(o){if(typeof o==='string')return persStr(o);if(Array.isArray(o)){for(let i=0;i<o.length;i++)o[i]=personalize(o[i]);return o;}
  if(o&&typeof o==='object'){if(PERS.obj)PERS.obj(o,{nm:S.name||PN.name,sur:S.surname||'',g:S.gender,ex:EX});
    for(const k of Object.keys(o))o[k]=personalize(o[k]);}return o;}
/* Kursinhalte in der Erklärsprache: COURSE_TR[Lernsprache][EX] = {deutscher Text: Übersetzung}. Fehlt etwas, bleibt Deutsch. */
const CT=EX!==EX_BASE&&window.COURSE_TR&&COURSE_TR[LANG.code]&&COURSE_TR[LANG.code][EX]||null;
const LESEN=EX_BASE==='de'?{en:'Reading: ',pt:'Leitura: ',es:'Lectura: '}[EX]:null;/* „Lesen: …“-Titel (deutsche Kurstexte) */
const trc=s=>!CT||s==null?s:CT[s]!=null?CT[s]:LESEN&&typeof s==='string'&&s.startsWith('Lesen: ')?LESEN+s.slice(7):s;
function trContent(o){if(typeof o==='string')return trc(o);if(Array.isArray(o)){for(let i=0;i<o.length;i++)o[i]=trContent(o[i]);return o;}
  if(o&&typeof o==='object'){for(const k of Object.keys(o))if(k!=='role'&&k!=='id')o[k]=trContent(o[k]);}return o;}
/* deutsche Originalbedeutung jeder Kursvokabel (vor der Übersetzung gemerkt): Karten speichern immer Deutsch, angezeigt wird über trc() in der Erklärsprache */
const VOC_DE={};COURSE.units.forEach(u=>(u.lessons||[]).forEach(l=>l.steps.forEach(s=>{if(s.t==='vocab')(s.items||[]).forEach(w=>{if(VOC_DE[w[0]]==null)VOC_DE[w[0]]=w[1];});})));
/* alte Karten, die in einer anderen Erklärsprache angelegt wurden: wieder auf die deutsche Bedeutung (bei jedem Start, auch nach Sync) */
{let ch=0;Object.values(S.srs||{}).forEach(c=>{if(c&&!String(c.unit).startsWith('my:')&&VOC_DE[c.es]!=null&&c.de!==VOC_DE[c.es]){c.de=VOC_DE[c.es];ch++;}});if(ch)try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
if(CT){trContent(COURSE);trContent(PLACEMENT);trContent(STORIES);if(window.READINGS)trContent(window.READINGS);}
personalize(COURSE);personalize(PLACEMENT);personalize(STORIES);
/* Ansprache: Bei „weiblich“ werden Sätze über die lernende Person selbst (estoy/soy … , ¡Encantado!) in die weibliche Form gesetzt
   und beim Prüfen beide Formen akzeptiert. Vokabeln bleiben unverändert (sie sind Schlüssel im Vokabeltrainer). */
/* Ansprache „weiblich“: Sätze über die lernende Person in die weibliche Form, beim Prüfen beide Formen akzeptieren.
   Die Regeln stehen im Sprachpaket (LANG.gender: first, self, word, npc, named) – ohne sie bleibt der Kurs unverändert. Vokabeln bleiben (Schlüssel im Vokabeltrainer). */
const GEN=LANG.gender||null;
const isF=()=>S.gender==='f'&&!!GEN;
function femCourse(o,inVocab){if(typeof o==='string'){let t=GEN.first(o);if(S.name&&GEN.named)t=GEN.named(t,S.name);return t;}if(Array.isArray(o)){for(let i=0;i<o.length;i++)o[i]=femCourse(o[i],inVocab);return o;}
  if(o&&typeof o==='object'){if(o.t==='vocab')return o;if(o.you&&o.opts)o.opts.forEach(x=>{x.es=GEN.self(x.es);});
    if(o.t==='speak'&&o.es)o.es=GEN.self(o.es);
    if(o.n&&typeof o.es==='string'&&GEN.npc)o.es=GEN.npc(o.es);/* Begrüßung der lernenden Person */for(const k of Object.keys(o))if(k!=='items')o[k]=femCourse(o[k]);}return o;}
if(isF()){femCourse(COURSE);femCourse(PLACEMENT);}
/* Herkunft (Profil): Inhalte gehen von Deutschland/Mannheim aus. S.origin={c:'AT',city:'Wien',other:'…'} ersetzt nur Herkunftsangaben
   (soy alemán, ¿Eres alemán?, Alemania, Mannheim, Hablo alemán, Deutschland/Germany …) – nicht Vokabellisten, nicht die Geschichten (Ben). */
/* Länder für die Herkunft (Profil): [Flagge, Name de (mit Artikel), Name es (mit Artikel), Name en, Adjektiv en, [Deutscher, Deutsche], [aus, in, nach]].
   Namen in de/es/en braucht die Oberfläche; was die Lernsprache braucht (Adjektiv m/f, Landessprache), steht im Paket (LANG.origin.demonyms). */
const ORIGINS={DE:["🇩🇪", "Deutschland", "Alemania", "Germany", "German", ["Deutscher", "Deutsche"], ["aus Deutschland", "in Deutschland", "nach Deutschland"]],
 AT:["🇦🇹", "Österreich", "Austria", "Austria", "Austrian", ["Österreicher", "Österreicherin"], ["aus Österreich", "in Österreich", "nach Österreich"]],
 CH:["🇨🇭", "die Schweiz", "Suiza", "Switzerland", "Swiss", ["Schweizer", "Schweizerin"], ["aus der Schweiz", "in der Schweiz", "in die Schweiz"]],
 LI:["🇱🇮", "Liechtenstein", "Liechtenstein", "Liechtenstein", "Liechtensteiner", ["Liechtensteiner", "Liechtensteinerin"], ["aus Liechtenstein", "in Liechtenstein", "nach Liechtenstein"]],
 LU:["🇱🇺", "Luxemburg", "Luxemburgo", "Luxembourg", "Luxembourgish", ["Luxemburger", "Luxemburgerin"], ["aus Luxemburg", "in Luxemburg", "nach Luxemburg"]],
 NL:["🇳🇱", "die Niederlande", "los Países Bajos", "the Netherlands", "Dutch", ["Niederländer", "Niederländerin"], ["aus den Niederlanden", "in den Niederlanden", "in die Niederlande"]],
 BE:["🇧🇪", "Belgien", "Bélgica", "Belgium", "Belgian", ["Belgier", "Belgierin"], ["aus Belgien", "in Belgien", "nach Belgien"]],
 IT:["🇮🇹", "Italien", "Italia", "Italy", "Italian", ["Italiener", "Italienerin"], ["aus Italien", "in Italien", "nach Italien"]],
 FR:["🇫🇷", "Frankreich", "Francia", "France", "French", ["Franzose", "Französin"], ["aus Frankreich", "in Frankreich", "nach Frankreich"]],
 PL:["🇵🇱", "Polen", "Polonia", "Poland", "Polish", ["Pole", "Polin"], ["aus Polen", "in Polen", "nach Polen"]],
 TR:["🇹🇷", "die Türkei", "Turquía", "Turkey", "Turkish", ["Türke", "Türkin"], ["aus der Türkei", "in der Türkei", "in die Türkei"]],
 GB:["🇬🇧", "Großbritannien", "el Reino Unido", "the UK", "British", ["Brite", "Britin"], ["aus Großbritannien", "in Großbritannien", "nach Großbritannien"]],
 US:["🇺🇸", "die USA", "Estados Unidos", "the USA", "American", ["Amerikaner", "Amerikanerin"], ["aus den USA", "in den USA", "in die USA"]],
 BR:["🇧🇷", "Brasilien", "Brasil", "Brazil", "Brazilian", ["Brasilianer", "Brasilianerin"], ["aus Brasilien", "in Brasilien", "nach Brasilien"]],
 MX:["🇲🇽", "Mexiko", "México", "Mexico", "Mexican", ["Mexikaner", "Mexikanerin"], ["aus Mexiko", "in Mexiko", "nach Mexiko"]],
 PT:["🇵🇹", "Portugal", "Portugal", "Portugal", "Portuguese", ["Portugiese", "Portugiesin"], ["aus Portugal", "in Portugal", "nach Portugal"]],
 IE:["🇮🇪", "Irland", "Irlanda", "Ireland", "Irish", ["Ire", "Irin"], ["aus Irland", "in Irland", "nach Irland"]],
 DK:["🇩🇰", "Dänemark", "Dinamarca", "Denmark", "Danish", ["Däne", "Dänin"], ["aus Dänemark", "in Dänemark", "nach Dänemark"]],
 SE:["🇸🇪", "Schweden", "Suecia", "Sweden", "Swedish", ["Schwede", "Schwedin"], ["aus Schweden", "in Schweden", "nach Schweden"]],
 NO:["🇳🇴", "Norwegen", "Noruega", "Norway", "Norwegian", ["Norweger", "Norwegerin"], ["aus Norwegen", "in Norwegen", "nach Norwegen"]],
 FI:["🇫🇮", "Finnland", "Finlandia", "Finland", "Finnish", ["Finne", "Finnin"], ["aus Finnland", "in Finnland", "nach Finnland"]],
 IS:["🇮🇸", "Island", "Islandia", "Iceland", "Icelandic", ["Isländer", "Isländerin"], ["aus Island", "in Island", "nach Island"]],
 CZ:["🇨🇿", "Tschechien", "Chequia", "Czechia", "Czech", ["Tscheche", "Tschechin"], ["aus Tschechien", "in Tschechien", "nach Tschechien"]],
 SK:["🇸🇰", "die Slowakei", "Eslovaquia", "Slovakia", "Slovak", ["Slowake", "Slowakin"], ["aus der Slowakei", "in der Slowakei", "in die Slowakei"]],
 HU:["🇭🇺", "Ungarn", "Hungría", "Hungary", "Hungarian", ["Ungar", "Ungarin"], ["aus Ungarn", "in Ungarn", "nach Ungarn"]],
 RO:["🇷🇴", "Rumänien", "Rumanía", "Romania", "Romanian", ["Rumäne", "Rumänin"], ["aus Rumänien", "in Rumänien", "nach Rumänien"]],
 BG:["🇧🇬", "Bulgarien", "Bulgaria", "Bulgaria", "Bulgarian", ["Bulgare", "Bulgarin"], ["aus Bulgarien", "in Bulgarien", "nach Bulgarien"]],
 HR:["🇭🇷", "Kroatien", "Croacia", "Croatia", "Croatian", ["Kroate", "Kroatin"], ["aus Kroatien", "in Kroatien", "nach Kroatien"]],
 SI:["🇸🇮", "Slowenien", "Eslovenia", "Slovenia", "Slovenian", ["Slowene", "Slowenin"], ["aus Slowenien", "in Slowenien", "nach Slowenien"]],
 RS:["🇷🇸", "Serbien", "Serbia", "Serbia", "Serbian", ["Serbe", "Serbin"], ["aus Serbien", "in Serbien", "nach Serbien"]],
 BA:["🇧🇦", "Bosnien und Herzegowina", "Bosnia y Herzegovina", "Bosnia and Herzegovina", "Bosnian", ["Bosnier", "Bosnierin"], ["aus Bosnien und Herzegowina", "in Bosnien und Herzegowina", "nach Bosnien und Herzegowina"]],
 ME:["🇲🇪", "Montenegro", "Montenegro", "Montenegro", "Montenegrin", ["Montenegriner", "Montenegrinerin"], ["aus Montenegro", "in Montenegro", "nach Montenegro"]],
 MK:["🇲🇰", "Nordmazedonien", "Macedonia del Norte", "North Macedonia", "Macedonian", ["Nordmazedonier", "Nordmazedonierin"], ["aus Nordmazedonien", "in Nordmazedonien", "nach Nordmazedonien"]],
 AL:["🇦🇱", "Albanien", "Albania", "Albania", "Albanian", ["Albaner", "Albanerin"], ["aus Albanien", "in Albanien", "nach Albanien"]],
 XK:["🇽🇰", "Kosovo", "Kosovo", "Kosovo", "Kosovar", ["Kosovare", "Kosovarin"], ["aus dem Kosovo", "im Kosovo", "in den Kosovo"]],
 GR:["🇬🇷", "Griechenland", "Grecia", "Greece", "Greek", ["Grieche", "Griechin"], ["aus Griechenland", "in Griechenland", "nach Griechenland"]],
 CY:["🇨🇾", "Zypern", "Chipre", "Cyprus", "Cypriot", ["Zyprer", "Zyprerin"], ["aus Zypern", "in Zypern", "nach Zypern"]],
 MT:["🇲🇹", "Malta", "Malta", "Malta", "Maltese", ["Malteser", "Malteserin"], ["aus Malta", "in Malta", "nach Malta"]],
 EE:["🇪🇪", "Estland", "Estonia", "Estonia", "Estonian", ["Este", "Estin"], ["aus Estland", "in Estland", "nach Estland"]],
 LV:["🇱🇻", "Lettland", "Letonia", "Latvia", "Latvian", ["Lette", "Lettin"], ["aus Lettland", "in Lettland", "nach Lettland"]],
 LT:["🇱🇹", "Litauen", "Lituania", "Lithuania", "Lithuanian", ["Litauer", "Litauerin"], ["aus Litauen", "in Litauen", "nach Litauen"]],
 UA:["🇺🇦", "die Ukraine", "Ucrania", "Ukraine", "Ukrainian", ["Ukrainer", "Ukrainerin"], ["aus der Ukraine", "in der Ukraine", "in die Ukraine"]],
 BY:["🇧🇾", "Belarus", "Bielorrusia", "Belarus", "Belarusian", ["Belarusse", "Belarussin"], ["aus Belarus", "in Belarus", "nach Belarus"]],
 MD:["🇲🇩", "Moldau", "Moldavia", "Moldova", "Moldovan", ["Moldauer", "Moldauerin"], ["aus Moldau", "in Moldau", "nach Moldau"]],
 RU:["🇷🇺", "Russland", "Rusia", "Russia", "Russian", ["Russe", "Russin"], ["aus Russland", "in Russland", "nach Russland"]],
 GE:["🇬🇪", "Georgien", "Georgia", "Georgia", "Georgian", ["Georgier", "Georgierin"], ["aus Georgien", "in Georgien", "nach Georgien"]],
 AM:["🇦🇲", "Armenien", "Armenia", "Armenia", "Armenian", ["Armenier", "Armenierin"], ["aus Armenien", "in Armenien", "nach Armenien"]],
 AZ:["🇦🇿", "Aserbaidschan", "Azerbaiyán", "Azerbaijan", "Azerbaijani", ["Aserbaidschaner", "Aserbaidschanerin"], ["aus Aserbaidschan", "in Aserbaidschan", "nach Aserbaidschan"]],
 CA:["🇨🇦", "Kanada", "Canadá", "Canada", "Canadian", ["Kanadier", "Kanadierin"], ["aus Kanada", "in Kanada", "nach Kanada"]],
 AR:["🇦🇷", "Argentinien", "Argentina", "Argentina", "Argentinian", ["Argentinier", "Argentinierin"], ["aus Argentinien", "in Argentinien", "nach Argentinien"]],
 CL:["🇨🇱", "Chile", "Chile", "Chile", "Chilean", ["Chilene", "Chilenin"], ["aus Chile", "in Chile", "nach Chile"]],
 CO:["🇨🇴", "Kolumbien", "Colombia", "Colombia", "Colombian", ["Kolumbianer", "Kolumbianerin"], ["aus Kolumbien", "in Kolumbien", "nach Kolumbien"]],
 PE:["🇵🇪", "Peru", "Perú", "Peru", "Peruvian", ["Peruaner", "Peruanerin"], ["aus Peru", "in Peru", "nach Peru"]],
 VE:["🇻🇪", "Venezuela", "Venezuela", "Venezuela", "Venezuelan", ["Venezolaner", "Venezolanerin"], ["aus Venezuela", "in Venezuela", "nach Venezuela"]],
 EC:["🇪🇨", "Ecuador", "Ecuador", "Ecuador", "Ecuadorian", ["Ecuadorianer", "Ecuadorianerin"], ["aus Ecuador", "in Ecuador", "nach Ecuador"]],
 BO:["🇧🇴", "Bolivien", "Bolivia", "Bolivia", "Bolivian", ["Bolivianer", "Bolivianerin"], ["aus Bolivien", "in Bolivien", "nach Bolivien"]],
 UY:["🇺🇾", "Uruguay", "Uruguay", "Uruguay", "Uruguayan", ["Uruguayer", "Uruguayerin"], ["aus Uruguay", "in Uruguay", "nach Uruguay"]],
 PY:["🇵🇾", "Paraguay", "Paraguay", "Paraguay", "Paraguayan", ["Paraguayer", "Paraguayerin"], ["aus Paraguay", "in Paraguay", "nach Paraguay"]],
 CU:["🇨🇺", "Kuba", "Cuba", "Cuba", "Cuban", ["Kubaner", "Kubanerin"], ["aus Kuba", "in Kuba", "nach Kuba"]],
 DO:["🇩🇴", "die Dominikanische Republik", "República Dominicana", "the Dominican Republic", "Dominican", ["Dominikaner", "Dominikanerin"], ["aus der Dominikanischen Republik", "in der Dominikanischen Republik", "in die Dominikanische Republik"]],
 CR:["🇨🇷", "Costa Rica", "Costa Rica", "Costa Rica", "Costa Rican", ["Costa-Ricaner", "Costa-Ricanerin"], ["aus Costa Rica", "in Costa Rica", "nach Costa Rica"]],
 GT:["🇬🇹", "Guatemala", "Guatemala", "Guatemala", "Guatemalan", ["Guatemalteke", "Guatemaltekin"], ["aus Guatemala", "in Guatemala", "nach Guatemala"]],
 HN:["🇭🇳", "Honduras", "Honduras", "Honduras", "Honduran", ["Honduraner", "Honduranerin"], ["aus Honduras", "in Honduras", "nach Honduras"]],
 SV:["🇸🇻", "El Salvador", "El Salvador", "El Salvador", "Salvadoran", ["Salvadorianer", "Salvadorianerin"], ["aus El Salvador", "in El Salvador", "nach El Salvador"]],
 NI:["🇳🇮", "Nicaragua", "Nicaragua", "Nicaragua", "Nicaraguan", ["Nicaraguaner", "Nicaraguanerin"], ["aus Nicaragua", "in Nicaragua", "nach Nicaragua"]],
 PA:["🇵🇦", "Panama", "Panamá", "Panama", "Panamanian", ["Panamaer", "Panamaerin"], ["aus Panama", "in Panama", "nach Panama"]],
 PR:["🇵🇷", "Puerto Rico", "Puerto Rico", "Puerto Rico", "Puerto Rican", ["Puerto-Ricaner", "Puerto-Ricanerin"], ["aus Puerto Rico", "in Puerto Rico", "nach Puerto Rico"]],
 CN:["🇨🇳", "China", "China", "China", "Chinese", ["Chinese", "Chinesin"], ["aus China", "in China", "nach China"]],
 JP:["🇯🇵", "Japan", "Japón", "Japan", "Japanese", ["Japaner", "Japanerin"], ["aus Japan", "in Japan", "nach Japan"]],
 KR:["🇰🇷", "Südkorea", "Corea del Sur", "South Korea", "South Korean", ["Südkoreaner", "Südkoreanerin"], ["aus Südkorea", "in Südkorea", "nach Südkorea"]],
 IN:["🇮🇳", "Indien", "India", "India", "Indian", ["Inder", "Inderin"], ["aus Indien", "in Indien", "nach Indien"]],
 PK:["🇵🇰", "Pakistan", "Pakistán", "Pakistan", "Pakistani", ["Pakistaner", "Pakistanerin"], ["aus Pakistan", "in Pakistan", "nach Pakistan"]],
 BD:["🇧🇩", "Bangladesch", "Bangladés", "Bangladesh", "Bangladeshi", ["Bangladescher", "Bangladescherin"], ["aus Bangladesch", "in Bangladesch", "nach Bangladesch"]],
 VN:["🇻🇳", "Vietnam", "Vietnam", "Vietnam", "Vietnamese", ["Vietnamese", "Vietnamesin"], ["aus Vietnam", "in Vietnam", "nach Vietnam"]],
 TH:["🇹🇭", "Thailand", "Tailandia", "Thailand", "Thai", ["Thailänder", "Thailänderin"], ["aus Thailand", "in Thailand", "nach Thailand"]],
 PH:["🇵🇭", "die Philippinen", "Filipinas", "the Philippines", "Filipino", ["Philippiner", "Philippinerin"], ["von den Philippinen", "auf den Philippinen", "auf die Philippinen"]],
 ID:["🇮🇩", "Indonesien", "Indonesia", "Indonesia", "Indonesian", ["Indonesier", "Indonesierin"], ["aus Indonesien", "in Indonesien", "nach Indonesien"]],
 MY:["🇲🇾", "Malaysia", "Malasia", "Malaysia", "Malaysian", ["Malaysier", "Malaysierin"], ["aus Malaysia", "in Malaysia", "nach Malaysia"]],
 SG:["🇸🇬", "Singapur", "Singapur", "Singapore", "Singaporean", ["Singapurer", "Singapurerin"], ["aus Singapur", "in Singapur", "nach Singapur"]],
 IR:["🇮🇷", "der Iran", "Irán", "Iran", "Iranian", ["Iraner", "Iranerin"], ["aus dem Iran", "im Iran", "in den Iran"]],
 IQ:["🇮🇶", "der Irak", "Irak", "Iraq", "Iraqi", ["Iraker", "Irakerin"], ["aus dem Irak", "im Irak", "in den Irak"]],
 SY:["🇸🇾", "Syrien", "Siria", "Syria", "Syrian", ["Syrer", "Syrerin"], ["aus Syrien", "in Syrien", "nach Syrien"]],
 LB:["🇱🇧", "der Libanon", "el Líbano", "Lebanon", "Lebanese", ["Libanese", "Libanesin"], ["aus dem Libanon", "im Libanon", "in den Libanon"]],
 IL:["🇮🇱", "Israel", "Israel", "Israel", "Israeli", ["Israeli", "Israelin"], ["aus Israel", "in Israel", "nach Israel"]],
 JO:["🇯🇴", "Jordanien", "Jordania", "Jordan", "Jordanian", ["Jordanier", "Jordanierin"], ["aus Jordanien", "in Jordanien", "nach Jordanien"]],
 SA:["🇸🇦", "Saudi-Arabien", "Arabia Saudí", "Saudi Arabia", "Saudi", ["Saudi-Araber", "Saudi-Araberin"], ["aus Saudi-Arabien", "in Saudi-Arabien", "nach Saudi-Arabien"]],
 AE:["🇦🇪", "die Vereinigten Arabischen Emirate", "los Emiratos Árabes Unidos", "the UAE", "Emirati", ["Emirater", "Emiraterin"], ["aus den Vereinigten Arabischen Emiraten", "in den Vereinigten Arabischen Emiraten", "in die Vereinigten Arabischen Emirate"]],
 AF:["🇦🇫", "Afghanistan", "Afganistán", "Afghanistan", "Afghan", ["Afghane", "Afghanin"], ["aus Afghanistan", "in Afghanistan", "nach Afghanistan"]],
 KZ:["🇰🇿", "Kasachstan", "Kazajistán", "Kazakhstan", "Kazakh", ["Kasache", "Kasachin"], ["aus Kasachstan", "in Kasachstan", "nach Kasachstan"]],
 EG:["🇪🇬", "Ägypten", "Egipto", "Egypt", "Egyptian", ["Ägypter", "Ägypterin"], ["aus Ägypten", "in Ägypten", "nach Ägypten"]],
 MA:["🇲🇦", "Marokko", "Marruecos", "Morocco", "Moroccan", ["Marokkaner", "Marokkanerin"], ["aus Marokko", "in Marokko", "nach Marokko"]],
 DZ:["🇩🇿", "Algerien", "Argelia", "Algeria", "Algerian", ["Algerier", "Algerierin"], ["aus Algerien", "in Algerien", "nach Algerien"]],
 TN:["🇹🇳", "Tunesien", "Túnez", "Tunisia", "Tunisian", ["Tunesier", "Tunesierin"], ["aus Tunesien", "in Tunesien", "nach Tunesien"]],
 NG:["🇳🇬", "Nigeria", "Nigeria", "Nigeria", "Nigerian", ["Nigerianer", "Nigerianerin"], ["aus Nigeria", "in Nigeria", "nach Nigeria"]],
 GH:["🇬🇭", "Ghana", "Ghana", "Ghana", "Ghanaian", ["Ghanaer", "Ghanaerin"], ["aus Ghana", "in Ghana", "nach Ghana"]],
 KE:["🇰🇪", "Kenia", "Kenia", "Kenya", "Kenyan", ["Kenianer", "Kenianerin"], ["aus Kenia", "in Kenia", "nach Kenia"]],
 ET:["🇪🇹", "Äthiopien", "Etiopía", "Ethiopia", "Ethiopian", ["Äthiopier", "Äthiopierin"], ["aus Äthiopien", "in Äthiopien", "nach Äthiopien"]],
 ZA:["🇿🇦", "Südafrika", "Sudáfrica", "South Africa", "South African", ["Südafrikaner", "Südafrikanerin"], ["aus Südafrika", "in Südafrika", "nach Südafrika"]],
 SN:["🇸🇳", "der Senegal", "Senegal", "Senegal", "Senegalese", ["Senegalese", "Senegalesin"], ["aus dem Senegal", "im Senegal", "in den Senegal"]],
 CM:["🇨🇲", "Kamerun", "Camerún", "Cameroon", "Cameroonian", ["Kameruner", "Kamerunerin"], ["aus Kamerun", "in Kamerun", "nach Kamerun"]],
 ER:["🇪🇷", "Eritrea", "Eritrea", "Eritrea", "Eritrean", ["Eritreer", "Eritreerin"], ["aus Eritrea", "in Eritrea", "nach Eritrea"]],
 AU:["🇦🇺", "Australien", "Australia", "Australia", "Australian", ["Australier", "Australierin"], ["aus Australien", "in Australien", "nach Australien"]],
 NZ:["🇳🇿", "Neuseeland", "Nueva Zelanda", "New Zealand", "New Zealander", ["Neuseeländer", "Neuseeländerin"], ["aus Neuseeland", "in Neuseeland", "nach Neuseeland"]]};
/* Herkunft (Profil): Inhalte gehen von der Kurs-Person aus (LANG.persona.country/city, z. B. Deutschland/Mannheim). Ersetzt werden nur Herkunftsangaben:
   Sätze in der Lernsprache macht das Paket (LANG.origin: pre, city), Erklärungen auf Deutsch/Englisch (aus Mannheim, Deutschland, Ich bin Deutscher, Germany) macht die Engine. */
const PCOUNTRY=PN.country||'DE',PCITY=PN.city||'Mannheim',PX=ORIGINS[PCOUNTRY]||ORIGINS.DE,ORG=LANG.origin||{};
/* Namen des Kurs-Landes auf Deutsch/Englisch (Spanischkurs: Deutschland, Deutscher/Deutsche, Germany, German) */
const PB=PX[1].replace(/^(die|der|das) /,''),PDEM=PX[5].slice().sort((a,b)=>b.length-a.length);
const RX_ORG=new RegExp([rxe(PCITY),rxe(PB)].concat(PDEM.map(rxe),[rxe(PX[3]),rxe(PX[4])]).join('|')),RX_CITY=s=>new RegExp(s.replace('CITY',rxe(PCITY)),'g');
function originStr(t){const o=S.origin;if(!o||(!o.c&&!o.other)||(o.c===PCOUNTRY&&!o.city)||typeof t!=='string'||!(RX_ORG.test(t)||ORG.test&&ORG.test.test(t)))return t;
  const f=S.gender==='f',X=o.c&&ORIGINS[o.c],oth=!X&&o.other,D=X&&ORG.demonyms?ORG.demonyms[o.c]:null;const deC=X?X[1]:oth,enC=X?X[3]:oth,city=(o.city||'').trim();
  const deF=X?X[6]:['aus '+oth,'in '+oth,'nach '+oth],bareDe=deC.replace(/^die /,'');const O={X,D,oth,f,city};
  let r=t;if(ORG.pre)r=ORG.pre(r,O);
  if(!city){r=r.replace(RX_CITY(', (aus|in|from) CITY\\b'),'');/* ohne Stadt: „…, aus Mannheim“ weglassen */
    r=r.replace(RX_CITY('\\baus CITY\\b'),deF[0]).replace(RX_CITY('\\bin CITY\\b'),deF[1]).replace(RX_CITY('\\bnach CITY\\b'),deF[2]).replace(RX_CITY('\\bfrom CITY\\b'),'from '+enC);}
  if(city)r=r.replace(RX_CITY('\\bCITY\\b'),city);else if(ORG.city)r=ORG.city(r,O);
  r=r.replace(new RegExp('\\b'+rxe(PX[6][0])+'\\b','g'),deF[0]).replace(new RegExp('\\b'+rxe(PX[6][1])+'\\b','g'),deF[1]).replace(new RegExp('\\b'+rxe(PX[6][2])+'\\b','g'),deF[2]).replace(new RegExp('\\b'+rxe(PB)+'\\b','g'),bareDe);
  r=r.replace(new RegExp('\\b(Ich bin|Du bist|bist du) ('+PDEM.map(rxe).join('|')+')\\b','g'),(m,a)=>X?a+' '+X[5][f?1:0]:a+' aus '+oth);
  r=r.replace(new RegExp('\\b'+rxe(PX[3])+'\\b','g'),enC).replace(new RegExp("\\b(I'm|You're|you're|I am|You are) "+rxe(PX[4])+'\\b','g'),(m,a)=>X?a+' '+X[4]:a+' from '+oth);
  return r;}
function applyOrigin(o){if(typeof o==='string')return originStr(o);if(Array.isArray(o)){for(let i=0;i<o.length;i++)o[i]=applyOrigin(o[i]);return o;}
  if(o&&typeof o==='object'){if(o.t==='vocab')return o;for(const k of Object.keys(o))if(k!=='items')o[k]=applyOrigin(o[k]);}return o;}
applyOrigin(COURSE);applyOrigin(PLACEMENT);


/* ---------- helpers ---------- */
const $=(s,r=document)=>r.querySelector(s);
const h=(tag,attrs={},...kids)=>{const e=document.createElement(tag);
  if((tag==='input'&&(!attrs||!attrs.type||attrs.type==='text'||attrs.type==='password'))||tag==='textarea'){e.setAttribute('autocorrect','off');e.setAttribute('autocapitalize','off');e.setAttribute('autocomplete','off');e.setAttribute('spellcheck','false');}
  for(const[k,v]of Object.entries(attrs||{})){if(v==null||v===false)continue;
    if(k==='class')e.className=v;else if(k==='html')e.innerHTML=v;else if(k.startsWith('on'))e.addEventListener(k.slice(2),v);else e.setAttribute(k,v===true?'':v);}
  for(const k of kids.flat()){if(k==null||k===false)continue;e.append(k.nodeType?k:document.createTextNode(String(k)));}return e;};
const cap=s=>String(s).charAt(0).toUpperCase()+String(s).slice(1);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
const addDays=(ds,n)=>{const d=new Date(ds+'T12:00:00');d.setDate(d.getDate()+n);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function toast(t){const e=h('div',{class:'toast'},t);document.body.append(e);setTimeout(()=>e.remove(),2200);}

/* ---------- answer checking ---------- */
const PRON=LANG.pron||/(?!)/;
function norm(s){s=String(s).toLowerCase();if(LANG.norm)s=LANG.norm(s);/* Schreibvarianten der Lernsprache (Deutsch: ss = ß, ae = ä …) */return s.replace(/[¿?¡!.,;:"“”'«»()…\-–]/g,' ').replace(/\s+/g,' ').trim();}
function strip(s){return s.normalize('NFD').replace(/[̀-ͯ]/g,'');}
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=Array.from({length:n+1},(_,i)=>i);
  for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c;}return p[n];}
/* returns {status:'ok'|'near'|'bad', right, note}. Typo tolerance only for long words with identical ending (grammar endings must be exact) */
function wordCmp(c,x,typo){ // c,x normalized strings
  if(c===x)return 0;const A=c.split(' '),B=x.split(' ');if(A.length!==B.length)return 3;let worst=0;
  for(let i=0;i<A.length;i++){const a=A[i],b=B[i];if(a===b)continue;
    if(strip(a)===strip(b)){worst=Math.max(worst,1);continue;}
    const sa=strip(a),sb=strip(b);
    /* kein „Tippfehler“, wenn nur ein Vokal kurz vor dem Ende anders ist – das ist meist Zeit/Modus (comemos/comimos, hablamos/hablemos) */
    const vowelSwap=sa.length===sb.length&&(()=>{let d=-1;for(let k=0;k<sa.length;k++)if(sa[k]!==sb[k]){d=k;break;}return d>=sb.length-5&&/[aeiou]/.test(sa[d])&&/[aeiou]/.test(sb[d]);})();
    if(typo&&!vowelSwap&&sb.length>=6&&lev(sa,sb)===1&&sa.slice(-2)===sb.slice(-2)){worst=Math.max(worst,2);continue;}
    return 3;}
  return worst;}
function compare(input,answers,opts={}){
  answers=[].concat(answers).flatMap(a=>String(a).split('|'));
  if(isF()||S.gender==='x'&&GEN)answers=answers.flatMap(a=>{const f=a.includes(' ')?GEN.first(a):GEN.word(a);return f===a?[a]:a.includes(' ')?[f,a]:[a,f];});const typo=opts.typo!==false;
  const inp=norm(input);if(!inp)return{status:'bad',right:answers[0],note:T('Keine Antwort.')};
  const cands=[inp];if(opts.pron!==false&&PRON.test(inp))cands.push(inp.replace(PRON,''));
  let best=null;
  for(const a of answers){const na=norm(a);const nas=[na];if(opts.pron!==false&&PRON.test(na))nas.push(na.replace(PRON,''));
    for(const c of cands)for(const x of nas){const r=wordCmp(c,x,typo);
      if(r===0)return{status:'ok',right:a,note:c!==inp?T('Das Subjektpronomen kann man weglassen – meistens sagt man es nur zur Betonung.'):''};
      if(r===1&&(!best||best.rank>1))best={status:'near',right:a,rank:1,note:T(LANG.accentNote||'Fast! Achte auf die Schreibung (Akzente, Sonderzeichen).')};
      if(r===2&&!best)best={status:'near',right:a,rank:2,note:T('Kleiner Tippfehler – fast richtig.')};
    }}
  if(best)return best;
  for(const a of answers){const A=strip(inp).split(' '),B=strip(norm(a)).split(' ');if(A.length!==B.length)continue;const d=A.map((w,i)=>w!==B[i]?i:-1).filter(i=>i>=0);
    if(d.length===1){const x=A[d[0]],y=B[d[0]];let pre=0;while(pre<x.length&&x[pre]===y[pre])pre++;
      if(pre>=3)return{status:'bad',right:a,note:T('Nur die Endung von „')+inp.split(' ')[d[0]]+T('“ stimmt nicht – richtig ist „')+norm(a).split(' ')[d[0]]+T('“. Die Endung zeigt Person, Zeit oder Geschlecht – deshalb zählt das als Fehler.')};}}
  return{status:'bad',right:answers[0],note:''};
}
/* KI-Text sicher anzeigen: HTML-Tags weg, **fett** / *kursiv* aus Markdown umwandeln */
function aiH(t,cls){const x=esc(String(t||'').replace(/<[^>]+>/g,'')).replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>').replace(/\*([^*\n]+)\*/g,'<i>$1</i>');return h('span',cls?{class:cls,html:x}:{html:x});}
function diffHtml(your,right){ // word level diff
  const a=String(your).trim().split(/\s+/),b=String(right).trim().split(/\s+/);
  const out=[];let i=0,j=0;
  while(j<b.length){if(i<a.length&&norm(a[i])===norm(b[j])){out.push(esc(b[j]));i++;j++;}
    else if(i<a.length&&strip(norm(a[i]))===strip(norm(b[j]))){out.push('<del>'+esc(a[i])+'</del> <ins>'+esc(b[j])+'</ins>');i++;j++;}
    else if(i<a.length&&b.slice(j+1).some(w=>norm(w)===norm(a[i]))){out.push('<ins>'+esc(b[j])+'</ins>');j++;}
    else if(i<a.length){out.push('<del>'+esc(a[i])+'</del> <ins>'+esc(b[j])+'</ins>');i++;j++;}
    else{out.push('<ins>'+esc(b[j])+'</ins>');j++;}}
  while(i<a.length){out.push('<del>'+esc(a[i])+'</del>');i++;}
  return '<span class="diff es-t">'+out.join(' ')+'</span>';
}

/* ---------- speech ---------- */
/* iOS meldet dieselbe Stimme mehrfach (einfach / erweitert / premium) – nur die beste je Name+Sprache behalten */
const vQual=v=>/premium/i.test(v.voiceURI||'')?2:/enhanced/i.test(v.voiceURI||'')?1:0;
let voices=[];function loadVoices(){const all=(window.speechSynthesis?speechSynthesis.getVoices():[]).filter(v=>v.lang.toLowerCase().startsWith(LANG.code));const best=new Map();
  for(const v of all){const k=v.name+'|'+v.lang;const o=best.get(k);if(!o||vQual(v)>vQual(o))best.set(k,v);}voices=[...best.values()];}
if(window.speechSynthesis){loadVoices();speechSynthesis.onvoiceschanged=loadVoices;}
function pickVoice(){if(!voices.length)loadVoices();
  return voices.find(v=>v.name===S.settings.voice)||voices.find(v=>/es[-_]ES/i.test(v.lang)&&/m[oó]nica|jorge|paulina|google/i.test(v.name))||voices.find(v=>/es[-_]ES/i.test(v.lang))||voices[0];}
const IS_IOS=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
/* iOS: Ton auch bei Stummschalter – Audio-Session auf "playback" + stilles Audio als Türöffner */
let audioUnlocked=false;
/* Standard „ambient“: Musik anderer Apps (Spotify) läuft weiter, dafür folgt die App dem Stummschalter.
   „playback“: App auch bei Stummschalter hörbar, iOS pausiert dann aber andere Musik. */
/* Mikrofon (Spracherkennung/Aufnahme) geht auf iOS nur im Modus „play-and-record“ – davor umschalten, danach setAudioMode() */
function recMode(){try{if(navigator.audioSession)navigator.audioSession.type='play-and-record';}catch(e){}}
/* iOS: „playback“ = hörbar trotz Stummschalter (andere Musik pausiert); S.settings.mixOnly → „ambient“ (Musik läuft, App nur mit Ton-Schalter).
   Ein Umschalten nur während des Sprechens hat auf dem iPhone nicht gegriffen (Okt. 2026). */
function setAudioMode(){try{if(navigator.audioSession)navigator.audioSession.type=S.settings.mixOnly?'ambient':'playback';}catch(e){}}
/* eigene Aufnahme abspielen (auch hörbar trotz Stummschalter) */
function playRec(url){const a=new Audio(url);a.setAttribute('playsinline','');a.play().catch(()=>{});return a;}
/* stiller Mini-Ton: aktiviert die Audio-Sitzung, damit iOS „playback“ auch für die Sprachausgabe übernimmt – vor jeder Ausgabe (höchstens alle 2 s) */
let silentEl=null,silentT=0;
function primeAudio(){if(Date.now()-silentT<2000)return;silentT=Date.now();setAudioMode();
  try{silentEl=silentEl||new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');silentEl.setAttribute('playsinline','');silentEl.volume=0.01;silentEl.currentTime=0;silentEl.play().catch(()=>{});}catch(e){}}
function unlockAudio(){if(audioUnlocked)return;audioUnlocked=true;primeAudio();}
document.addEventListener('touchend',unlockAudio,{once:true,passive:true});document.addEventListener('click',unlockAudio,{once:true});
function mkUtt(t,rate){primeAudio();const u=new SpeechSynthesisUtterance(t);u.lang=LANG.voice;const v=pickVoice();if(v)u.voice=v;u.rate=rate;return u;}
function say(text,rate){if(!window.speechSynthesis)return toast(T('Sprachausgabe wird von diesem Browser nicht unterstützt'));
  unlockAudio();speechSynthesis.cancel();const t=speakable(String(text).replace(/___/g,'…'))||String(text);const r=rate||S.settings.rate;
  if(rate&&rate<=0.7){ // langsam: zusätzlich Wort für Wort mit kleinen Pausen – hörbar langsamer, auch auf dem iPhone
    const words=t.split(/\s+/).filter(Boolean);
    if(words.length>1&&IS_IOS){words.forEach(w=>speechSynthesis.speak(mkUtt(w,0.8)));return;}
    speechSynthesis.speak(mkUtt(t,IS_IOS?Math.max(0.3,r*0.75):r));return;}
  speechSynthesis.speak(mkUtt(t,r));}
const spk=(text,big)=>h('button',{class:'speak'+(big?' big':''),title:T('Vorlesen'),onclick:e=>{e.stopPropagation();say(text,big==='slow'?0.55:undefined)}},'🔊');

/* ---------- KI: Claude (im claude.ai-Artifact, über dein Abo) oder Gemini ---------- */
let SAMPLE=null;
const AIN=()=>useClaude()?T('Claude'):T('Gemini');
const useClaude=()=>!!SAMPLE&&S.settings.aiProvider!=='gemini';
if(window.claude&&window.claude.use){window.claude.use('sample').then(sm=>{SAMPLE=sm||null;
  if(SAMPLE){const r=curRoute().split('/')[0];if(['home','settings','unit','chat'].includes(r))route();}}).catch(()=>{});}
const CL_ERR={not_granted:T('Du hast der Seite die Nutzung von Claude nicht erlaubt (neu laden, um erneut gefragt zu werden).'),rate_limited:T('Claude-Limit erreicht – bitte später noch einmal probieren.'),session_expired:T('Bitte bei claude.ai neu anmelden.'),sampling_disabled:T('Claude ist für dein Konto hier nicht verfügbar.'),invalid_json:T('Antwort nicht lesbar – bitte noch einmal versuchen.'),refused:T('Claude hat die Anfrage abgelehnt.')};
async function claudeAsk(prompt,{json,history}){
  let input=prompt;
  if(history){input=[{role:'user',content:prompt}];for(const t of history){const c=(t.parts||[]).map(p=>p.text).join('');if(c)input.push({role:t.role==='model'?'assistant':'user',content:c});}
    if(input[input.length-1].role!=='user')input.push({role:'user',content:T('(weiter)')});}
  try{const opt={modelTier:'quick'};if(history)opt.cache=false;
    if(json)return await SAMPLE.json(input,opt);return (await SAMPLE(input,opt)).text;}
  catch(e){throw new Error(CL_ERR[e&&e.code]||(T('Claude: ')+((e&&e.message)||e&&e.code||T('Fehler'))));}}
/* ---------- gemini ---------- */
async function gemini(prompt,{json=true,history=null}={}){if(EX!=='de')prompt=String(prompt)+'\n\nIMPORTANT: The learner wants explanations in '+({en:'English',es:'Spanish',pt:'Brazilian Portuguese',it:'Italian',fr:'French'}[EX])+'. Write ALL explanations, corrections and comments for the learner in that language instead of German (example sentences in the target language stay as they are).';if(S.name)prompt=String(prompt).replace(/\bJonas\b/g,S.name);/* Herkunft aus dem Profil mitgeben, statt eine anzunehmen */if(S.origin&&(S.origin.c||S.origin.other)){const X=S.origin.c&&ORIGINS[S.origin.c];prompt+='\n\n'+(S.name||'Jonas')+' kommt aus '+(X?X[1].replace(/^(die|der) /,''):S.origin.other)+(S.origin.city?' ('+S.origin.city+')':'')+'.';}if(S.gender==='x')prompt+='\n\n'+(S.name||T('Die lernende Person'))+T(' möchte keine Angabe zum Geschlecht machen. Sprich die Person möglichst neutral an und akzeptiere männliche und weibliche Formen, wenn sie über sich spricht.');else if(S.gender)prompt+=S.gender==='f'?T('\n\nWICHTIG: ')+(S.name||T('Die lernende Person'))+T(' ist eine Frau. Sprich sie mit weiblichen Formen an (z. B. „estás cansada“, „bienvenida“) und erwarte von ihr weibliche Formen, wenn sie über sich spricht. Im Deutschen: „sie/ihr“ statt „er/ihm“.'):'\n\n'+(S.name||T('Die lernende Person'))+T(' ist ein Mann – männliche Formen verwenden.');
  if(useClaude())return claudeAsk(prompt,{json,history});
  const key=S.settings.geminiKey;if(!key&&!srvAI())throw new Error(T('Kein Gemini-API-Key hinterlegt (Einstellungen).'));
  const tried=[S.settings.geminiModel||'gemini-flash-latest'];for(const f of FALLBACK)if(!tried.includes(f))tried.push(f);
  let lastErr;
  for(const model of tried){try{const out=await geminiCall(model,key,prompt,{json,history});if(model!==S.settings.geminiModel){S.settings.geminiModel=model;save();}return out;}
    catch(e){lastErr=e;if(!e.modelProblem)throw e;}}
  throw lastErr;}
const FALLBACK=['gemini-flash-latest','gemini-flash-lite-latest','gemini-3-flash-preview','gemini-3.1-flash-lite'];

/* Netzwerk: zuerst "einfache" Anfrage ohne CORS-Preflight (Key in der URL, text/plain) – funktioniert auch aus lokalen Dateien
   und in Safari zuverlässiger. Falls das scheitert, klassische Variante mit Header. */
let GMODE=null;
async function gfetch(url,key,bodyStr){
  const variants=[
    ()=>fetch(url+'?key='+encodeURIComponent(key),{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:bodyStr}),
    ()=>fetch(url,{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':key},body:bodyStr})];
  const order=GMODE===1?[1,0]:[0,1];let last;
  for(const i of order){const ctl=new AbortController();const to=setTimeout(()=>ctl.abort(),45000);
    try{const r=await variants[i]().finally(()=>clearTimeout(to));
      if(i===0&&(r.status===400||r.status===415)&&order.length>1&&order[order.length-1]!==0){const t=await r.clone().text();if(/content.?type|payload|json|parse/i.test(t)&&!/api key/i.test(t)){last=new Error(t.slice(0,120));continue;}}
      GMODE=i;return r;}catch(e){last=e;}}
  const e=new Error(netHelp(last));e.network=true;throw e;}
function netHelp(e){
  return T('Keine Verbindung zu Gemini (')+(e&&e.name==='AbortError'?T('Zeitüberschreitung'):(e&&e.message)||T('Netzwerkfehler'))+T('). Mögliche Ursachen: kein Internet / VPN, ein Werbe- oder Tracking-Blocker (z. B. uBlock, Ghostery, Safari-Inhaltsblocker) blockiert googleapis.com, oder der Browser blockiert Anfragen aus lokalen Dateien. Tipp: In Chrome öffnen oder die Web-App-Version (GitHub Pages) nutzen.');}
async function geminiCall(model,key,prompt,{json,history}){
  const body={contents:history||[{role:'user',parts:[{text:prompt}]}],generationConfig:{temperature:0.4}};
  if(history&&prompt)body.systemInstruction={parts:[{text:prompt}]};
  if(json)body.generationConfig.responseMimeType='application/json';
  const base='https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent';
  /* ohne eigenen Schlüssel: über den Mi-profe-Server mit Einladungscode (text/plain = ohne CORS-Vorabanfrage) */
  const r=key?await gfetch(base,key,JSON.stringify(body)):await fetch(SRV()+'/api/ai',{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify({invite:S.settings.invite,model,body})}).catch(e=>{const x=new Error(T('Keine Verbindung zum Mi-profe-Server.'));x.network=true;throw x;});
  if(!key){const l=r.headers.get('X-AI-Left');if(l!=null)AI_LEFT=+l;}
  const j=await r.json().catch(()=>({}));
  if(!r.ok){const e=new Error((j.error&&j.error.message)||('HTTP '+r.status));e.modelProblem=r.status===404||r.status===503||/no longer available|not found|not supported|deprecated|high demand|overloaded|unavailable/i.test(e.message);/* Modell fehlt oder ist überlastet → nächstes Modell probieren */throw e;}
  const t=(((j.candidates||[])[0]||{}).content||{}).parts?.map(p=>p.text||'').join('')||'';
  if(!json)return t;
  try{return JSON.parse(t.replace(/^```json\s*|```\s*$/g,''));}catch(e){throw new Error(T('Antwort von Gemini nicht lesbar.'));}
}
const hasAI=()=>useClaude()||!!S.settings.geminiKey||srvAI();
/* ---------- Mi-profe-Server (Cloudflare Worker, server/worker.js): Sync per Code + KI per Einladung. Adresse kommt aus build.py (MP_SERVER) ---------- */
const SRV=()=>window.MP_SERVER||'';const srvAI=()=>!!(SRV()&&S.settings.invite);let AI_LEFT=null;
async function srvPost(path,data){let r;try{r=await fetch(SRV()+path,{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify(data)});}catch(e){throw new Error(T('Keine Verbindung zum Mi-profe-Server.'));}
  const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error((j.error&&(j.error.message||j.error))||('HTTP '+r.status));return j;}
const TEACHER=LANG.teacher||T('Du bist ein geduldiger Sprachlehrer.');

/* ---------- progress ---------- */
function bumpDay(correct){const d=today();S.stats.answers++;if(correct)S.stats.correct++;S.stats.days[d]=(S.stats.days[d]||0)+1;
  if(S.streak.last!==d){S.streak.count=(S.streak.last===addDays(d,-1))?S.streak.count+1:1;S.streak.last=d;}save();}
function streakNow(){const d=today();return(S.streak.last===d||S.streak.last===addDays(d,-1))?S.streak.count:0;}
function vkey(es){return es;}
function addVocab(items,unit){let n=0;for(const[es,de,em]of items){const k=vkey(es);if(!S.srs[k]){S.srs[k]={es,de:VOC_DE[es]!=null?VOC_DE[es]:de,unit,box:0,due:today(),t:Date.now()};if(em)S.srs[k].em=em;n++;}}if(n)save();return n;}
/* Eigene Wörter: normale Karten mit unit 'my:<liste>'; gelöscht = del:true (damit der Sync sie nicht zurückholt). Listen in S.mylists {id:{name,daily,t,del}} */
const MY='my:';
function myLists(){return Object.entries(S.mylists||{}).filter(([,l])=>!l.del).map(([id,l])=>Object.assign({id},l)).sort((a,b)=>(a.c||0)-(b.c||0));}
function srsCards(){return Object.values(S.srs).filter(c=>!c.del);}
function myCards(id){return srsCards().filter(c=>c.unit===MY+id);}
/* eigene Wörter ohne ausgeblendete – zum Lernen, für Zähler und Planung */
function myActive(id){return myCards(id).filter(c=>!c.hid);}
/* in der täglichen Wiederholung = Kurswörter + Listen mit Häkchen (Listen ohne Häkchen werden nicht eingeplant) */
function offLists(){return new Set(myLists().filter(l=>l.daily===false).map(l=>MY+l.id));}
function activeCards(){const off=offLists();return srsCards().filter(c=>!off.has(c.unit)&&!c.hid);}
/* ausgeblendete Kurswörter (hid:true, Abgleich über t): nicht in Wiederholung/Statistik, Liste unter #vocab/hidden, jederzeit zurückholbar */
function hiddenCards(){return srsCards().filter(c=>c.hid);}
function hiddenOf(src){return hiddenCards().filter(c=>src==='kurs'?!isMy(c):src==='mine'?isMy(c):true);}
function setHidden(c,on){c.hid=on?true:undefined;if(!on)delete c.hid;c.t=Date.now();save();}
/* neue eigene Wörter dosiert: pro Liste höchstens l.perDay (Standard MY_NEW, 0 = alle) kommen am Tag neu in die Wiederholung (fr = Tag der ersten Bewertung) */
const MY_NEW=10;const isMy=c=>String(c.unit).indexOf(MY)===0;
function dueCards(){const d=today();const due=activeCards().filter(c=>c.due<=d);
  const fresh=due.filter(c=>isMy(c)&&!(c.reps||c.box||c.fr));if(!fresh.length)return due;
  const keep=new Set();myLists().forEach(l=>{const pd=l.perDay==null?MY_NEW:l.perDay;const u=MY+l.id;const f=fresh.filter(c=>c.unit===u).sort((a,b)=>(a.t||0)-(b.t||0));
    const room=pd?Math.max(0,pd-srsCards().filter(c=>c.unit===u&&c.fr===d).length):f.length;f.slice(0,room).forEach(c=>keep.add(c));});
  return due.filter(c=>fresh.indexOf(c)<0||keep.has(c));}
/* neue Liste = erst Entwurf (NEWLIST), gespeichert wird sie mit dem ersten Wort */
let NEWLIST=null;
function myList(id){const l=(S.mylists||{})[id];return l&&!l.del?l:NEWLIST&&NEWLIST.id===id?NEWLIST.l:null;}
function addMyWords(id,pairs){const r={added:0,upd:0,course:[]};const now=Date.now();
  for(const[es0,de0]of pairs){const es=String(es0).trim(),de=String(de0).trim();if(!es||!de)continue;const k=vkey(es),c=S.srs[k];
    if(c&&!c.del&&!String(c.unit).startsWith(MY)){r.course.push(es);continue;}
    if(c&&!c.del){if(c.de!==de||c.unit!==MY+id){c.de=de;c.unit=MY+id;c.t=now;r.upd++;}continue;}
    S.srs[k]={es,de,unit:MY+id,box:0,due:today(),t:now};r.added++;}
  if(r.added+r.upd&&!(S.mylists||{})[id]&&NEWLIST&&NEWLIST.id===id){S.mylists=S.mylists||{};S.mylists[id]=NEWLIST.l;NEWLIST.l.t=now;NEWLIST=null;}
  save();return r;}
/* Liste einfügen / Datei: eine Zeile = ein Wort; Trennzeichen Tab, –, -, =, ;, :, Komma werden erkannt; Seiten werden automatisch getauscht, wenn links Deutsch steht */
/* Wörter der Lernsprache aus dem Kurs (für die Erkennung vertauschter Seiten beim Hinzufügen) */
let COURSE_WORDS=null;const wnorm=t=>String(t).toLowerCase().replace(/[¡!¿?.,;:"]/g,'').trim();
function inCourse(t){if(!COURSE_WORDS){COURSE_WORDS=new Set();COURSE.units.forEach(u=>(u.lessons||[]).forEach(l=>l.steps.forEach(st=>{if(st.t==='vocab')(st.items||[]).forEach(w=>COURSE_WORDS.add(wnorm(w[0])));})));}return COURSE_WORDS.has(wnorm(t));}
const EX_MARK={de:/[äöüßÄÖÜ]|^(der|die|das|ein|eine|sich)\s/i,en:/^(the|to)\s/i,pt:/[ãõçÃÕÇ]|^(o|os|um|uma)\s/i};
function parsePairs(text,swap){const ok=[],bad=[];
  for(let l of String(text).split(/\r?\n/)){l=l.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/^\s*(\d+[.)]|[-•*·])\s+/,'').trim();if(!l)continue;
    let parts=null;const q=l.match(/^"([^"]*)"\s*[,;\t]\s*"([^"]*)"/);if(q)parts=[q[1],q[2]];
    if(!parts)for(const sep of ['\t',' – ',' — ',' - ',' = ','=',';',' : ',',']){const i=l.indexOf(sep);if(i>0&&i<l.length-sep.length){parts=[l.slice(0,i),l.slice(i+sep.length)];break;}}
    if(!parts){bad.push(l);continue;}parts=parts.map(x=>x.trim().replace(/^"|"$/g,''));if(!parts[0]||!parts[1]){bad.push(l);continue;}ok.push(parts);}
  /* Erkennung: Lernsprache über LANG.mark (Steckbrief), Erklärsprache über EX_MARK */
  const de=t=>(EX_MARK[EX]||/(?!)/).test(t),es=t=>(LANG.mark||/(?!)/).test(t)||inCourse(t);
  /* pro Zeile: steht links die Erklärsprache (oder rechts eindeutig die Lernsprache), wird getauscht; „Seiten tauschen“ dreht alles um */
  return{pairs:ok.map(([a,b])=>((de(a)&&!de(b)||es(b)&&!es(a))!==!!swap)?[b,a]:[a,b]),bad};}
/* Wiederholung nach Anki-Art: jede Karte hat Abstand (ivl, Tage) und Leichtigkeit (ease).
   Nochmal → morgen und danach wieder dieselben Stufen wie ein neues Wort · Schwer / Gut / Leicht siehe nextIvl.
   Alte Karten (nur box) werden beim ersten Bewerten übernommen. box bleibt als grobe Stufe für Statistik & Sync. */
const RATE={bad:'again',near:'hard',ok:'good'};
function srsInit(c){if(c.ease==null){c.ease=2.5;c.ivl=c.box?INTERVALS[Math.min(c.box,INTERVALS.length-1)]:0;}return c;}
/* Nochmal = ans Ende der Runde (Termin erst bei der nächsten Bewertung, dann wie neu). Abstände: neu Schwer 1 / Gut 3 / Leicht 5 Tage, danach ×1 / ×1,2 / ×ease / ×ease×1,3 (jeweils mindestens +1 Tag zum vorigen Knopf) */
function nextIvl(c,r){srsInit(c);const i=c.ivl||0;if(r==='again')return 0;
  const hard=i?Math.max(i+1,Math.round(i*1.2)):1,good=i?Math.max(hard+1,Math.round(i*c.ease)):3,easy=i?Math.max(good+1,Math.round(i*c.ease*1.3)):5;
  return r==='hard'?hard:r==='good'?good:easy;}
function grade(card,status,rating){const c=S.srs[vkey(card.es)];if(!c)return;srsInit(c);c.t=Date.now();if(!c.fr)c.fr=today();S.vlog=S.vlog||{};S.vlog[today()]=(S.vlog[today()]||0)+1;const r=rating||RATE[status]||'again';
  if(r==='again'){c.ag=(c.ag||0)+1;if(c.ivl)c.lapses=(c.lapses||0)+1;c.ivl=0;c.ease=2.5;c.due=today();c.box=0;save();return;}/* kommt in dieser Runde gleich wieder */
  const ivl=nextIvl(c,r);if(r==='hard')c.ease=Math.max(1.3,c.ease-0.15);else if(r==='easy')c.ease=Math.min(3.5,c.ease+0.15);
  c.ivl=ivl;c.due=addDays(today(),ivl);c.reps=(c.reps||0)+1;c.box=ivl>=60?6:ivl>=21?5:ivl>=7?3:ivl>=2?1:0;
  c.lr=today();save();}
const vocabGoal=()=>S.vocabGoal||S.settings.vocabGoal||20;
/* heute bewertete Karten: aus den (synchronisierten) Karten selbst gezählt → stimmt auch über mehrere Geräte */
const vocabToday=()=>{const td=today();let n=0;for(const k in S.srs)if(S.srs[k].lr===td)n++;return n;};
const vocabLeft=()=>Math.max(0,Math.min(dueCards().length,vocabGoal()-vocabToday()));/* heute noch fürs Ziel */
/* Karten für eine Runde: überfällige Wiederholungen zuerst, dann neue; Größe = Rest bis zum Tagesziel (danach freiwillig 20) */
function reviewSet(){const due=dueCards();const rest=vocabGoal()-vocabToday();const n=rest>0?rest:20;
  const old=due.filter(c=>c.reps||c.box).sort((a,b)=>a.due<b.due?-1:a.due>b.due?1:0),neu=due.filter(c=>!(c.reps||c.box));
  return shuffle(old.concat(neu).slice(0,n));}
function unitById(id){return COURSE.units.find(u=>u.id===id);}
/* Jede Lektion hat 3 Runden: 1 Lernen → 2 Üben (gleich danach) → 3 Festigen (frühestens am nächsten Tag). Danach Abschlusstest der Einheit. */
const RN=['',T('Lernen'),T('Üben'),T('Festigen')];
const legacyR=x=>!x?0:x.r??(x.done?(x.check?3:1):0);
const rnd=k=>legacyR(S.lessons[k]);
const r3ready=k=>rnd(k)>=2&&!(S.lessons[k].d2&&S.lessons[k].d2>=today());
/* Lektionen mit wenig Übungsmaterial (z. B. reine Lese-Lektionen) brauchen keine Extra-Runden */
const shortLesson=l=>l.steps.filter(s=>['gap','tr','conj','order','listen'].includes(s.t)).length+l.steps.filter(s=>s.t==='vocab').length<3;
function setRound(k,n,score){const p=S.lessons[k]||{};S.lessons[k]=Object.assign(p,{done:true,r:Math.max(rnd(k),n),best:Math.max(p.best||0,score||0),date:today()});if(n===2)S.lessons[k].d2=today();save();}
function lessonPct(u){if(S.checks[u.id]?.pass)return 1;/* Abschlusstest bestanden = Unidad gemeistert */const L=(u.lessons||[]).filter(l=>!l.ab);if(!L.length)return 0;return L.reduce((a,l)=>a+Math.min(3,rnd(u.id+'.'+l.id)),0)/(3*L.length);}
function unitStatus(u){const p=S.placement?.results?.[u.id];if(p==null)return null;return p>=0.8?'sicher':p>=0.5?T('auffrischen'):T('neu');}
/* Kachel-Menüs (jede Kachel öffnet eine eigene Seite) */
const mtile=(ic,t,d,fn,badge)=>h('button',{class:'mtile',onclick:fn},h('span',{class:'mi2'},ic),h('span',{class:'mt'},t),d?h('span',{class:'md'},d):null,badge?h('span',{class:'mb'},badge):null);
const tiles=(...k)=>h('div',{class:'mtiles'},...k);
/* Zurück-Navigation: Verlauf der besuchten Seiten. „Zurück“ führt dorthin, wo man herkam (sonst zur Standardseite r).
   Reiterwechsel auf derselben Seite (Stufe, Lektionen/Extras) ersetzen den Eintrag; ein Tipp auf die Leiste startet neu. */
let NAVSTACK=[],NAVRESET=false;
const PLAYR=['lesson','round','check','mix','reading'];
const pageKey=r=>{const p=r.split('/');return PLAYR.includes(p[0])?'play':p[0]==='units'?'units':p[0]==='unit'?'unit/'+p[1]:p[0]==='ref'&&p[1]?'ref/'+p[1]:p[0]==='ref'?'ref':p[0]==='vocab'&&(p[1]==='stats'||p[1]==='hidden')?'vocab/'+p[1]:r;};
function trackNav(r){NAVBACK=false;if(NAVRESET){NAVSTACK=[r];NAVRESET=false;return;}const n=NAVSTACK.length;
  if(n>=2&&pageKey(NAVSTACK[n-2])===pageKey(r)){NAVSTACK.pop();NAVBACK=true;}
  if(NAVSTACK.length&&pageKey(NAVSTACK[NAVSTACK.length-1])===pageKey(r))NAVSTACK[NAVSTACK.length-1]=r;else NAVSTACK.push(r);
  if(NAVSTACK.length>40)NAVSTACK.shift();}
const prevRoute=()=>{for(let i=NAVSTACK.length-2;i>=0;i--)if(pageKey(NAVSTACK[i])!=='play')return NAVSTACK[i];return null;};
function navLabel(r){const p=r.split('/');const u=p[1]&&unitById(p[1]);
  return p[0]==='home'?T('Start'):p[0]==='units'?T('Kurs'):p[0]==='unit'&&u?UW+' '+u.n:p[0]==='resumen'&&u?T('Resumen · ')+UW+' '+u.n:p[0]==='words'&&u?T('Wortschatz · ')+UW+' '+u.n:
    p[0]==='ref'?({g:T('Grammatik'),s:T('Geschichten'),w:T('Wörterbuch'),r:T('Lesetexte')}[p[1]]||T('Bibliothek')):p[0]==='vocab'?(p[1]==='mine'?(p[2]&&myList(p[2])?myList(p[2]).name:T('Meine Wörter')):p[1]==='stats'?T('Statistik'):p[1]==='hidden'?T('Ausgeblendete Wörter'):T('Vokabeln')):p[0]==='verbs'?T('Verben'):p[0]==='mistakes'?T('Fehler'):
    p[0]==='settings'?T('Mehr'):p[0]==='lang'?T('Sprache & Profil'):p[0]==='placement'?T('Einstufungstest'):null;}
function goBack(r){const pr=prevRoute();go(pr&&pr!==curRoute()?pr:r);}
const backLabel=label=>{const pr=prevRoute();return(pr&&navLabel(pr))||label;};
const backTo=(label,r)=>h('button',{class:'btn ghost small',style:'margin-bottom:6px',onclick:()=>goBack(r)},'← '+backLabel(label));
const curUnit=()=>nextLesson()?.u||COURSE.units[0];
const unitLevel=u=>u.level||LEVEL_OF[u.id]||'A1';
const levelOf=u=>LEVELS.find(L=>L.id===unitLevel(u))||LEVELS[0];
/* Stufen-Reiter: oben A1 … C2 (GER-Stufe = L.label), darunter „Teil 1 | Teil 2“, wenn eine Stufe mehrere Teile hat. cnt(Liste von Teilstufen) → Text unter dem Namen */
const LGROUPS=[...new Set(LEVELS.map(L=>L.label))];
const lastPart={};
function levelTabs(cur,base,cnt){const C=LEVELS.find(L=>L.id===cur)||LEVELS[0];const parts=LEVELS.filter(L=>L.label===C.label);lastPart[C.label]=C.id;
  const top=h('div',{class:'seg',style:'grid-template-columns:repeat('+LGROUPS.length+',1fr)'},LGROUPS.map(g=>{const Ls=LEVELS.filter(L=>L.label===g);
    return h('button',{class:g===C.label?'on':'',onclick:()=>go(base+'/'+Ls[0].id)},h('b',{},g),h('span',{},cnt(Ls)));}));
  return top;}/* Teil 1 / Teil 2 einer Stufe stehen untereinander in einer Liste (Zwischenüberschriften), keine eigenen Reiter mehr */
/* gehören zwei Stufen-Kennungen zur selben GER-Stufe (A2a/A2b → A2)? */
const sameLv=(a,b)=>{const la=LEVELS.find(L=>L.id===a),lb=LEVELS.find(L=>L.id===b);return !!(la&&lb&&la.label===lb.label);};
const lvFirst=id=>{const L=LEVELS.find(x=>x.id===id);return L?LEVELS.find(x=>x.label===L.label).id:id;};
const levelUnits=lv=>COURSE.units.filter(u=>sameLv(unitLevel(u),lv)&&u.status!=='soon');
/* Bild (Emoji) zu einem Wort: ausdrücklich angegeben, sonst aus LANG.emoji (EMOJI), notfalls ohne Artikel (LANG.articles) */
const pic=(es,em)=>{if(em)return em;let k=String(es).toLowerCase().replace(/[¿?¡!]/g,'').replace(/\(.*?\)/g,'').split(' / ')[0].replace(/\s*….*$/,'').trim();
  if(EMOJI[k])return EMOJI[k];k=k.replace(LANG.articles||/^(el|la|los|las|un|una)\s+/,'').trim();return EMOJI[k]||'';};
const picEl=(es,em,cls)=>{const p=pic(es,em);return p?h('span',{class:cls||'pic','aria-hidden':'true'},p):null;};
/* nächster Schritt: Einheiten, die laut Test sitzen, bekommen zuerst einen kurzen Check statt aller Lektionen */
/* Nächste Aufgabe im Kurs. Vorne = ab der am weitesten bearbeiteten Unidad (frontier): dort geht es der Reihe nach weiter.
   Was in früheren Unidades noch offen ist (später ergänzte Lektionen, nicht gefestigte Runden, Abschlusstests), kommt in „Nachholen“ (catchUp),
   damit man nie an den Anfang zurückgeschickt wird. Wer neu anfängt, merkt davon nichts (frontier = 0). */
function nextIn(units,behind){for(const u of units){if(u.status==='soon')continue;const passed=!!S.checks[u.id]?.pass;
  const L=u.lessons.filter(l=>!l.ab);const K=l=>u.id+'.'+l.id;
  if(passed){if(behind)for(const l of L)if(rnd(K(l))<1)return{u,l,n:1};continue;}
  if(S.placement&&unitStatus(u)==='sicher'&&lessonPct(u)<1&&!S.checks[u.id])return{u,check:true};
  for(const l of L){const r=rnd(K(l));if(r<1)return{u,l,n:1};if(r<2)return{u,l,n:2};}
  for(const l of L)if(rnd(K(l))<3&&r3ready(K(l)))return{u,l,n:3};
  if(L.every(l=>rnd(K(l))>=3)&&!passed)return{u,test:true};}
  return null;}
function frontier(){let f=0;COURSE.units.forEach((u,i)=>{if(S.checks[u.id]||u.lessons.some(l=>!l.ab&&rnd(u.id+'.'+l.id)>=1))f=i;});return f;}
function nextLesson(){return nextIn(COURSE.units.slice(frontier()),false);}
function catchUp(){const B=COURSE.units.slice(0,frontier());const nx=nextIn(B,true);if(!nx)return null;
  let n=0;B.forEach(u=>{if(u.status==='soon')return;const passed=!!S.checks[u.id]?.pass;u.lessons.filter(l=>!l.ab).forEach(l=>{const r=rnd(u.id+'.'+l.id);if(passed?r<1:r<3)n++;});});
  return Object.assign(nx,{count:Math.max(1,n),ids:new Set(B.map(u=>u.id))});}
const nxTitle=nx=>nx.check?''+UW+' '+nx.u.n+T(' · Abschlusstest'):nx.test?''+UW+' '+nx.u.n+T(' · Abschlusstest'):''+UW+' '+nx.u.n+' · '+nx.l.title+(nx.n>1?' · '+RN[nx.n]:'');
const nxDesc=nx=>nx.check?T('Laut Test sitzt ')+nx.u.title+T(' – bestehst du den Abschlusstest, ist sie abgehakt.'):nx.test?T('Alle Lektionen gefestigt – zeig, dass du die ')+UW+T(' kannst (ab 80 % bestanden).'):nx.n===2?T('Runde 2 von 3: dieselben Inhalte, neu gemischt und mit Vokabelübungen.'):nx.n===3?T('Runde 3 von 3: nur selbst schreiben & hören – mit einem Tag Abstand.'):nx.l.desc;
const nxRoute=nx=>nx.check||nx.test?'check/'+nx.u.id:nx.n>1?'round/'+nx.u.id+'/'+nx.l.id+'/'+nx.n:'lesson/'+nx.u.id+'/'+nx.l.id;
function logMistake(ref,your){if(!ref)return;S.mistakes=S.mistakes.filter(m=>m.ref!==ref);S.mistakes.unshift({ref,your:String(your||'').slice(0,200),date:today()});S.mistakes=S.mistakes.slice(0,150);save();}
/* Verständnisfrage einer Geschichte → Aufgabe (mc / richtig-falsch / Lücke) */
function storyQ(q){if(q.t==='tf')return{t:'mc',kind:T('Richtig oder falsch?'),q:q.q,opts:['Verdadero','Falso'],a:q.a?0:1,keep:true};
  if(q.t==='gap')return{t:'gap',kind:T('Ergänze'),q:q.q,a:q.a};
  return{t:'mc',kind:T('Hast du es verstanden?'),q:q.q,opts:q.opts,a:q.a};}
function resolveRef(ref){if(ref.startsWith('V|')){const[,uid,w]=ref.split('|');const u=unitById(uid);const it=u&&allUnitWords(u).find(x=>x[0]===w);return it?verbStep(u,w,it[1]):null;}
  if(ref.startsWith('R|')){const[,rid,i]=ref.split('|');const q=(window.READINGS||[]).find(x=>x.id===rid)?.qs[+i];return q?storyQ(q):null;}
  if(ref.startsWith('N|')){const[,k,v]=ref.split('|');try{return numStep(k,v);}catch(e){return null;}}
  if(ref.startsWith('S|')){const[,sid,i]=ref.split('|');const st=STORIES.find(x=>x.id===sid);const q=st?.qs[+i];return q?storyQ(q):null;}
  if(ref.startsWith('W|')){const[,uid,mode,...rest]=ref.split('|');const es=rest.join('|');const u=unitById(uid);const w=u&&allUnitWords(u).find(x=>x[0]===es);return w?vocabStep(u,mode,w[0],w[1],w[2]):null;}
  const[uid,lid,i]=ref.split('|');if(uid==='P')return PLACEMENT[+i];const u=unitById(uid);const l=u?.lessons.find(x=>x.id===lid);return l?.steps[+i];}

/* ---------- layout ---------- */
const NAV=[['home','🏠',T('Start')],['units','📚',T('Kurs')],['vocab','🗂️',T('Vokabeltrainer')],['ref','📖',T('Bibliothek')],['mistakes','✏️',T('Fehlerheft')],['settings','⚙️',T('Einstellungen')]];
function shell(){
  document.documentElement.dataset.theme=S.settings.theme==='auto'?'':S.settings.theme;
  const route=curRoute().split('/')[0];
  const due=vocabLeft();/* Abzeichen: nur was heute fürs Tagesziel noch fehlt */
  const NAVD=NAV;const mini=S.settings.side==='mini';
  const nav=h('div',{class:'nav'},NAVD.map(([r,ic,l])=>h('button',{class:route===r||(r==='units'&&['unit','lesson','resumen','chat','shadow','words','check','round','placement'].includes(route))||(r==='ref'&&['verbs','story'].includes(route))?'active':'',title:l,onclick:()=>{NAVRESET=true;go(r);}},h('span',{class:'ni'},ic),h('span',{class:'nl'},l),r==='vocab'&&due?h('span',{class:'badge'},due):null)));
  const SHORT={home:T('Start'),units:T('Kurs'),vocab:T('Vokabeln'),ref:T('Bibliothek'),mistakes:T('Fehler'),settings:T('Mehr')};
  const mnav=h('nav',{class:'mobile-nav'},NAV.map(([r,ic,l])=>h('button',{class:(route===r||(r==='units'&&['unit','lesson','resumen','chat','shadow','words','check','round','placement'].includes(route))||(r==='ref'&&['verbs','story'].includes(route)))?'active':'',onclick:()=>{NAVRESET=true;go(r);},'aria-label':l},h('span',{class:'mi'},ic),h('span',{class:'ml'},SHORT[r]),r==='vocab'&&due?h('span',{class:'mbadge'},due):null)));
  const main=h('main',{class:'main',id:'main'});
  const tog=h('button',{class:'sidetog',title:mini?T('Leiste ausklappen'):T('Leiste einklappen'),'aria-label':mini?T('Leiste ausklappen'):T('Leiste einklappen'),onclick:()=>{S.settings.side=mini?'':'mini';save(true);go(curRoute());}},mini?'»':'«');
  const app=h('div',{class:'app'+(mini?' mini':'')},h('aside',{class:'side'},h('div',{class:'brand'},h('span',{class:'bt'},T('Mi profe '),h('span',{class:'flag'},LANG.flag)),tog),nav,
    h('div',{class:'foot'},mini?'🔥 '+streakNow():['🔥 '+streakNow()+T(' Tage Serie'),h('br'),h('span',{id:'syncstat'},syncLabel())])),h('div',{},mnav,main));
  const bt=document.getElementById('boot'); /* Startbildschirm überlebt den Seitenaufbau, hideBoot() blendet ihn aus */
  document.body.innerHTML='';document.body.classList.remove('typing');document.body.append(app);if(bt)document.body.append(bt);return main;}
const IN_ARTIFACT=!!(window.claude&&window.claude.use);
let CUR=null;
function curRoute(){if(IN_ARTIFACT)return CUR||'home';return location.hash.slice(1)||'home';}
function go(r){if(IN_ARTIFACT){CUR=r;route();return;}
  /* läuft gerade eine Übung ohne eigene Adresse (Vokabelrunde, Fehlerheft, Zahlen …): erst ihren Verlaufseintrag entfernen, dann weiter */
  if(RUN&&history.state&&history.state.run){RUN.to=r;history.back();return;}
  if(location.hash==='#'+r)route();else location.hash=r;}
if(!IN_ARTIFACT)window.addEventListener('hashchange',route);
/* Übungen, die auf einer Seite starten, bekommen einen eigenen Eintrag im Browser-Verlauf: Zurückwischen (iPhone) / Zurück-Taste
   führt dann immer zu der Seite, auf der sie gestartet wurden – nicht zu der davor */
let RUN=null;
function runEnter(){if(IN_ARTIFACT||RUN)return;try{history.pushState({run:1},'',location.href);RUN={hash:location.hash};}catch(e){}}
if(!IN_ARTIFACT){try{if(history.state&&history.state.run)history.replaceState(null,'',location.href);}catch(e){}
  window.addEventListener('popstate',e=>{if(!RUN||(e.state&&e.state.run))return;const R=RUN;RUN=null;
    if(location.hash!==R.hash)return;/* andere Adresse → hashchange zeigt die Seite */
    if(R.to&&location.hash!=='#'+R.to)location.hash=R.to;else route();});}
function askConfirm(text,okLabel){return new Promise(res=>{const ov=h('div',{class:'overlay'});const close=v=>{ov.remove();res(v);};
  ov.append(h('div',{class:'card',style:'max-width:380px;width:100%'},h('p',{style:'margin-top:0;font-weight:600'},text),h('div',{class:'row',style:'justify-content:flex-end'},h('button',{class:'btn',onclick:()=>close(false)},T('Abbrechen')),h('button',{class:'btn primary',onclick:()=>close(true)},okLabel||'OK'))));
  ov.onclick=e=>{if(e.target===ov)close(false);};document.body.append(ov);});}
/* Erster Start in 2 Schritten: 1) Lernsprache wählen, 2) Name & Ansprache (Beispiel hängt von der Lernsprache ab).
   Gewählt = mi-profe-shared.lang gesetzt (oder in dieser Sitzung bestätigt). Andere Sprache als die geladene → Neustart mit deren Paket. */
function learnChosen(){try{if(sessionStorage.getItem('mp-learn-ok'))return true;}catch(e){}try{const sh=JSON.parse(localStorage.getItem(SHARED)||'null');return!!(sh&&sh.lang);}catch(e){return false;}}
/* „bald“-Kurs antippen: gibt es ihn schon im Aufbau (PACKS beta), kann man ihn nach Rückfrage ausprobieren */
async function betaTry(c,n,pick){const B=window.PACKS&&PACKS.learn.find(L=>L.code===c&&L.beta);if(!B)return toast(T(n)+T(' ist noch in Arbeit'));
  if(!await askConfirm(T(n)+T(' ist noch im Aufbau – es gibt erst die ersten Lektionen. Trotzdem ausprobieren?'),T('Ausprobieren')))return;
  try{localStorage.setItem('mi-profe-beta','1');}catch(e){}pick(c);}
function vLearnPick(){const bt=document.getElementById('boot');document.body.innerHTML='';if(bt){document.body.append(bt);hideBoot();}
  const avail=learnPacks();
  const planned=(window.LANG_PLANNED||[]).filter(([c])=>!avail.some(L=>L.code===c));
  const pick=code=>{try{sessionStorage.setItem('mp-learn-ok','1');}catch(e){}let sh={};try{sh=JSON.parse(localStorage.getItem(SHARED)||'{}')||{};}catch(e){}sh.lang=code;if(!sh.ui)sh.ui=UI;
    try{localStorage.setItem(SHARED,JSON.stringify(sh));}catch(e){}if(code!==LANG.code&&!IN_ARTIFACT)return reloadApp();route();};
  document.body.append(h('div',{class:'welcome'},h('div',{class:'card',style:'max-width:440px;width:100%;text-align:center;padding:32px 24px'},
    UI_LANGS.length>1?h('div',{class:'uisel'},UI_LANGS.map(([c,f,n])=>h('button',{class:c===UI?'on':'',title:n,onclick:()=>{if(c!==UI)setUI(c,true);}},f))):null,
    h('div',{class:'muted small',style:'margin-bottom:6px'},T('Schritt 1 von 2')),h('div',{style:'font-size:44px;margin-bottom:6px'},'🌍'),
    h('h1',{style:'margin:0 0 6px'},T('Was möchtest du lernen?')),h('p',{class:'muted',style:'margin:0 0 18px'},T('Du kannst später jederzeit wechseln – jede Sprache hat ihren eigenen Fortschritt.')),
    h('div',{class:'learngrid'},...avail.map(L=>h('button',{class:'learntile',onclick:()=>pick(L.code)},h('span',{class:'lf'},L.flag),h('b',{},T(L.name)),L.stufen?h('span',{class:'muted small'},L.stufen[0]===L.stufen[1]?L.stufen[0]:T('{A} bis {B}').replace('{A}',L.stufen[0]).replace('{B}',L.stufen[1])):null)),
      ...planned.map(([c,n,f])=>h('button',{class:'learntile soon',onclick:()=>betaTry(c,n,pick)},h('span',{class:'lf'},f),h('b',{},T(n)),h('span',{class:'muted small'},T('bald'))))))));}
function vWelcome(again){if(!again&&!learnChosen())return vLearnPick();const bt=document.getElementById('boot');document.body.innerHTML='';if(bt){document.body.append(bt);hideBoot();}const inp=h('input',{class:'inp',placeholder:T('Dein Vorname'),value:S.name||'',autocomplete:'given-name',autocapitalize:'words',spellcheck:'false',style:'text-align:center;font-size:20px'});
  const inp2=h('input',{class:'inp',placeholder:T('Nachname (optional)'),value:S.surname||'',autocomplete:'family-name',autocapitalize:'words',spellcheck:'false',style:'text-align:center;font-size:16px;margin-top:8px'});
  let g=S.gender||'';const GX=LANG.genderEx||['',''];const gb=[['m',T('👨 männlich'),GX[0]],['f',T('👩 weiblich'),GX[1]],['x',T('🙂 keine Angabe'),T('beide Formen zählen')]].map(([k,l,ex])=>{const b=h('button',{class:'gbtn'+(g===k?' on':''),onclick:()=>{g=k;gb.forEach(x=>x.classList.toggle('on',x===b));}},h('div',{style:'font-size:20px;line-height:1.2'},l.split(' ')[0]),h('b',{},l.split(' ').slice(1).join(' ')),ex?h('span',{},ex):null);return b;});
  const ok=()=>{const v=inp.value.trim().replace(/\s+/g,' ').slice(0,30);if(!v){toast(T('Gib deinen Namen ein'));return;}if(!g&&LANG.genderEx){toast(T('Wähl noch, wie ich dich ansprechen soll'));return;}const v2=inp2.value.trim().replace(/\s+/g,' ').slice(0,40);const changed=v!==S.name||g!==S.gender||v2!==(S.surname||'');S.name=v;S.gender=g;if(v2)S.surname=v2;else delete S.surname;if(changed)S.profT=Date.now();save();
    const back=again?'lang':'home';if(IN_ARTIFACT)CUR=back;else history.replaceState(null,'','#'+back);
    if(changed&&!IN_ARTIFACT)reloadApp();else{if(changed){personalize(COURSE);personalize(PLACEMENT);personalize(STORIES);if(isF()){femCourse(COURSE);femCourse(PLACEMENT);}}route();}};
  inp.onkeydown=inp2.onkeydown=e=>{if(e.key==='Enter')ok();};
  document.body.append(h('div',{class:'welcome'},h('div',{class:'card',style:'max-width:420px;width:100%;text-align:center;padding:32px 24px'},
    UI_LANGS.length>1?h('div',{class:'uisel'},UI_LANGS.map(([c,f,n])=>h('button',{class:c===UI?'on':'',title:n,onclick:()=>{if(c!==UI)setUI(c,true);}},f))):null,
    again?null:h('button',{class:'linkbtn',style:'display:block;margin:0 auto 6px;text-decoration:none;color:var(--muted)',onclick:()=>{try{sessionStorage.removeItem('mp-learn-ok');}catch(e){}vLearnPick();}},T('← Schritt 2 von 2 · ')+LANG.flag+' '+T(LANG.name)),
    h('div',{style:'font-size:48px;margin-bottom:6px'},'👋'),h('h1',{style:'margin:0 0 6px'},again?T('Name ändern'):TP('¡Hola!')),
    h('p',{class:'muted',style:'margin:0 0 18px'},again?T('So begrüße ich dich und so heißt du in den Übungen.'):fmt(T('Ich bin dein Lehrer für {L}. Wie heißt du?'))),
    inp,inp2,LANG.genderEx?h('p',{class:'muted small',style:'margin:16px 0 8px'},T('Wie soll ich dich ansprechen? (wichtig für die Endungen)')):null,LANG.genderEx?h('div',{class:'gsel'},gb):null,
    !again&&LANG.roleNote?h('p',{class:'muted small',style:'margin:14px 0 0'},'🎭 '+T(LANG.roleNote)):null,
    h('button',{class:'btn primary',style:'margin-top:14px;width:100%',onclick:ok},again?T('Speichern'):T('Los geht’s →')),
    again?h('button',{class:'btn ghost',style:'margin-top:6px;width:100%',onclick:()=>go('lang')},T('Abbrechen')):null)));
  setTimeout(()=>inp.focus(),80);}
/* Scroll-Stelle pro Seite merken: beim Zurückgehen (Verlauf, ← Knopf, Wischgeste) steht man wieder an derselben Stelle, sonst oben */
var NAVBACK=false,LASTR=null,SCROLLPOS={};
function route(){if(window.speechSynthesis)speechSynthesis.cancel();READING=false;if(RUN&&!(history.state&&history.state.run))RUN=null;
  {const om=document.querySelector('.main');if(LASTR)SCROLLPOS[LASTR]=Math.max(window.scrollY||0,om?om.scrollTop:0);}
  trackNav(curRoute());const RT=curRoute();LASTR=RT;const parts=curRoute().split('/');
  if(!S.name||!S.gender&&S.name!==T('Jonas')&&LANG.genderEx||parts[0]==='name')return vWelcome(!!S.name&&parts[0]==='name');const m=shell();
  const v={home:vHome,units:vUnits,unit:vUnit,lesson:vLesson,vocab:vVocab,placement:vPlacement,settings:vSettings,mistakes:vMistakes,resumen:vResumen,lang:vLang,origin:vOrigin,check:vCheck,round:vRound,ref:vRef,verbs:vVerbs,story:vStory,chat:vChat,words:vWords,shadow:vShadow,mix:vMix,num:vNum,reading:vReading}[parts[0]]||vHome;
  v(m,...parts.slice(1));autoHead(m,parts[0]);const y=NAVBACK&&SCROLLPOS[RT]||0;window.scrollTo(0,y);m.scrollTop=y;
  if(y)requestAnimationFrame(()=>{if(curRoute()===RT){m.scrollTop=y;window.scrollTo(0,y);}});hideBoot();}

/* Fester Seitenkopf für alle normalen Seiten (alle Kurse): Zurück-Knopf + Überschrift (+ Suchfeld, + Reiter .stick) wandern in einen
   Kopf, der oben stehen bleibt; der Rest (Untertitel, Inhalt) scrollt darunter durch. Nicht auf Start, in Übungen (stickplay) und
   auf der Kurs-Seite (eigener Kopf). Reiter weiter unten auf der Seite (.stick) werden in den Kopf verschoben. */
function autoHead(m,base){if(base==='home'||!m||!m.classList||m.classList.contains('stickplay')||m.classList.contains('stickhead'))return;
  const isBack=e=>e.tagName==='BUTTON'&&/^←/.test(e.textContent.trim());
  const isBackRow=e=>e.classList.contains('row')&&e.firstElementChild&&isBack(e.firstElementChild)&&!e.querySelector('h1');
  const isTitle=e=>e.tagName==='H1'||(e.classList.contains('row')&&!!e.querySelector(':scope > h1'));
  const kids=[...m.children];let i=0,title=false;
  while(i<kids.length){const e=kids[i];
    if(!title&&(isBack(e)||isBackRow(e))){i++;continue;}
    if(!title&&isTitle(e)){title=true;i++;continue;}
    if(title&&e.tagName==='INPUT'&&e.classList.contains('inp')){i++;continue;}
    if(title&&e.classList.contains('seg')){i++;continue;}/* Umschalter direkt unter der Überschrift (z. B. Statistik: Alle | Kurs | Meine Wörter) */
    break;}
  if(!title)return;
  const head=h('div',{class:'ustick phead'});kids.slice(0,i).forEach(e=>head.append(e));
  const st=[...m.children].find(e=>e.classList.contains('stick'));if(st){st.classList.remove('stick');head.append(st);}
  m.prepend(head);m.classList.remove('stickpage');m.classList.add('stickhead');}
/* ---------- views ---------- */
/* Tagesplan: Bausteine mit id; welche täglich dazugehören, stellt man unter Mehr → Mein Tagesplan ein (S.plan, synchronisiert über planT) */
const PLAN_DEF={vocab:true,lesson:true,catchup:true,mix:true,story:true,freq:false,shadow:false,mistakes:false};
const planOn=id=>Object.assign({},PLAN_DEF,S.plan||{})[id];
const doneDay=k=>(S.day||{})[k]===today();
function markDay(k){S.day=S.day||{};S.day[k]=today();save();}
function planItems(){const nx=nextLesson();const done=Object.values(S.lessons).filter(x=>x.done).length;const td=today();
  const ns=nextStory();const storyToday=Object.entries(S.stories||{}).find(([,v])=>v.date===td);const cu=curUnit();const FQ=cu&&cu.lessons.find(l=>l.freq);
  const all=[
    Object.keys(S.srs).length?{id:'vocab',ic:'🗂️',t:T('Vokabeln wiederholen'),d:vocabLeft()?T('Noch ')+vocabLeft()+T(' Karten bis zum Tagesziel (')+vocabGoal()+').':T('Tagesziel erreicht.'),r:'vocab',fn:vocabPick,b:T('Wiederholen →'),min:Math.max(2,Math.round(vocabLeft()/4)),done:!vocabLeft()}:null,
    nx||Object.values(S.lessons).some(x=>x.date===td)?{id:'lesson',ic:nx&&(nx.check||nx.test)?'🏆':'📚',t:nx?nxTitle(nx):T('Lektion'),d:nx?nxDesc(nx):T('Alles fertig!'),r:nx?nxRoute(nx):'units',b:nx&&(nx.check||nx.test)?T('Test starten →'):T('Los geht’s →'),min:10,done:Object.values(S.lessons).some(x=>x.date===td&&!x.freqL)}:null,
    (()=>{const cu2=catchUp();if(!cu2)return null;return{id:'catchup',ic:'↩️',t:T('Nachholen: ')+nxTitle(cu2),d:fmt(T('{N} offene Lektionen in früheren {UNITS} – neu dazugekommen oder noch nicht gefestigt.')).replace('{N}',cu2.count).replace('{UNITS}',LANG.units),r:nxRoute(cu2),b:T('Los geht’s →'),min:10,
      done:Object.entries(S.lessons).some(([k,v])=>v.date===td&&cu2.ids.has(k.split('.')[0]))};})(),
    done>=2?{id:'mix',ic:'🔀',t:T('Gemischte Wiederholung'),d:T('15 Aufgaben quer durch alles, was du schon gelernt hast.'),r:'mix',b:T('Starten →'),min:5,done:S.lastMix===td}:null,
    ns||storyToday?{id:'story',ic:'📖',t:ns&&!storyToday?T('Geschichte: ')+ns.title:T('Geschichte lesen'),d:T('Erst hören, dann lesen – ca. 5 Minuten.'),r:ns?'story/'+ns.id:'ref/s',b:T('Lesen →'),min:5,done:!!storyToday}:null,
    FQ?{id:'freq',ic:'📚',t:T('Häufige Wörter'),d:T('30 Alltagswörter · ')+UW+' '+cu.n,r:'lesson/'+cu.id+'/'+FQ.id,b:T('Üben →'),min:5,done:S.lessons[cu.id+'.'+FQ.id]?.date===td}:null,
    cu?{id:'shadow',ic:'🎧',t:T('Aussprache'),d:T('7 Sätze nachsprechen · ')+UW+' '+cu.n,r:'shadow/'+cu.id,b:T('Starten →'),min:4,done:doneDay('shadow')}:null,
    S.mistakes.length||doneDay('mistakes')?{id:'mistakes',ic:'✏️',t:S.mistakes.length?T('Fehler üben (')+S.mistakes.length+')':T('Fehler üben'),d:T('Falsche Antworten noch einmal.'),r:'mistakes',fn:S.mistakes.length?()=>{RESUME='mistakes';go('mistakes');}:null,b:T('Üben →'),min:5,done:doneDay('mistakes')}:null].filter(Boolean);
  return all;}
function dayPlan(){const plan=planItems().filter(x=>planOn(x.id));
  if(!S.placement)plan.unshift({id:'placement',ic:'🎯',t:T('Einstufungstest machen'),d:T('In Etappen von A1 bis C2, je ca. 5 Minuten. Danach weiß ich, was du schon kannst und wo wir einsteigen.').replace(/A1(.*)C2/,(x,mid)=>{const a=(LEVELS[0]||{}).label||'A1',b=(LEVELS[LEVELS.length-1]||{}).label||'C2';return a===b?a:a+mid+b;}),r:'placement',b:T('Test starten →'),min:15,done:false});
  return plan;}
/* Plan-Eintrag öffnen: Vokabeln fragen erst nach der Art (je nach verfügbarer Zeit) */
function planGo(x){x.fn&&!x.done?x.fn():go(x.r);}
function vocabPick(){const pv=pauseGet('vocab');if(pv)return resumeVocab(Object.assign({key:'vocab'},pv));/* angefangene Runde von heute: direkt weiter */
  const set=reviewSet();if(!set.length)return go('vocab');const n=set.length;
  const ov=h('div',{class:'overlay'});const close=()=>ov.remove();
  const opt=(ic,t,d,sec,mode)=>h('button',{class:'btn pickopt',onclick:()=>{close();runVocab(set,mode,true,{pk:'vocab'});}},h('span',{class:'pic'},ic),h('span',{class:'pt'},h('b',{},t),h('span',{class:'muted small'},d)),h('span',{class:'muted small'},T('ca. ')+Math.max(1,Math.round(n*sec/60))+T(' Min.')));
  ov.append(h('div',{class:'card',style:'max-width:400px;width:100%'},h('div',{class:'kind'},n+T(' Karten')),h('h2',{style:'margin:0 0 12px'},T('Wie möchtest du üben?')),
    h('div',{class:'picklist'},opt('🃏',T('Karten'),T('Aufdecken & selbst bewerten – am schnellsten'),8,'flip'),opt('✍️',T('Tippen'),T('Wort schreiben – am gründlichsten'),18,'type'),opt('🎧',T('Hören'),T('Hören & schreiben'),15,'listen')),
    h('button',{class:'btn ghost',style:'width:100%;margin-top:8px',onclick:close},T('Abbrechen'))));
  ov.onclick=e=>{if(e.target===ov)close();};document.body.append(ov);}
function vHome(m){
  const nx=nextLesson();const due=dueCards().length;const done=Object.values(S.lessons).filter(x=>x.done).length;
  const acc=S.stats.answers?Math.round(100*S.stats.correct/S.stats.answers):0;const td=today();
  const hr=new Date().getHours();const greet=LANG.greet[hr<14?0:hr<20?1:2];
  m.append(h('h1',{},greet+', '+S.name+'!'));
  /* angefangen: die zuletzt unterbrochene Lektion/Runde (weitere als Zahl) */
  const pl=pauseList();if(pl.length){const p=pl[0];const del=h('button',{class:'btn ghost small',title:T('Verwerfen'),onclick:e=>{e.stopPropagation();pauseDel(p.key);route();}},'×');
    /* einzeilig, damit „Deine Woche“ meist noch auf die Startseite passt */
    m.append(h('div',{class:'card resume',onclick:()=>resumeGo(p)},h('div',{class:'row',style:'flex-wrap:nowrap;gap:8px;align-items:center'},
      h('div',{style:'flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis'},h('span',{class:'kind',style:'margin:0 6px 0 0;display:inline'},T('Angefangen')),h('b',{},pauseTitle(p)),h('span',{class:'muted small'},' · '+pauseInfo(p)+(pl.length>1?' · +'+(pl.length-1):''))),
      h('button',{class:'btn primary small',onclick:e=>{e.stopPropagation();resumeGo(p);}},T('▶ Weiter')),del)));}
  /* Tagesplan: feste Bausteine mit Zeitschätzung, die erste offene Aufgabe wird groß angezeigt */
  const plan=dayPlan();
  const nDone=plan.filter(x=>x.done).length,left=plan.filter(x=>!x.done).reduce((a,x)=>a+x.min,0);
  m.append(h('div',{class:'today'},h('div',{class:'row',style:'justify-content:space-between'},h('b',{},T('Heute: ')+nDone+T(' von ')+plan.length+T(' erledigt')),h('span',{class:'muted small'},left?T('noch ca. ')+left+T(' Min.'):T('fertig 🎉'))),
    h('div',{class:'bar',style:'margin-top:6px'},h('i',{style:'width:'+Math.round(100*nDone/Math.max(1,plan.length))+'%'})),
    h('div',{class:'muted small',style:'margin-top:6px'},LANG.flag+' '+T(LANG.name)+' · 🔥 '+streakNow()+' '+(streakNow()===1?T('Tag'):T('Tage'))+T(' in Folge')+(nx?' · '+levelOf(nx.u).title:''))));
  const hero=plan.find(x=>!x.done);
  if(hero)m.append(h('div',{class:'card hero',onclick:()=>planGo(hero)},h('div',{class:'kind'},T('Als Nächstes · ca. ')+hero.min+T(' Min.')),
    h('div',{class:'row',style:'flex-wrap:nowrap;align-items:flex-start'},h('div',{class:'hic'},hero.ic),h('div',{style:'flex:1;min-width:0'},h('h2',{style:'margin:0 0 4px'},hero.t),h('p',{class:'muted',style:'margin:0 0 14px'},hero.d),
      h('button',{class:'btn primary',onclick:e=>{e.stopPropagation();planGo(hero);}},hero.b)))));
  else m.append(h('div',{class:'card hero'},h('h2',{style:'margin:0'},T('Für heute alles erledigt ✓')),h('p',{class:'muted',style:'margin:6px 0 0'},TP('¡Muy bien! Wenn du noch Lust hast: unten gibt es Extras.'))));
  const chip=x=>h('button',{class:'chip'+(x.done?' done':''),onclick:()=>planGo(x)},h('span',{},x.done?'✓':x.ic),h('span',{},x.t));
  const rest=plan.filter(x=>x!==hero),extra=planItems().filter(x=>!planOn(x.id));
  if(rest.length)m.append(h('div',{class:'kind',style:'margin:12px 0 6px'},T('Heute')),h('div',{class:'chips'},rest.map(chip)));
  if(extra.length)m.append(h('div',{class:'kind',style:'margin:12px 0 6px'},T('Extras')),h('div',{class:'chips'},extra.map(chip)));
  const days=[...Array(7)].map((_,i)=>addDays(td,i-6));const mx=Math.max(10,...days.map(d=>S.stats.days[d]||0));
  m.append(h('div',{class:'card weekcard',style:'margin-top:12px'},h('div',{class:'row'},h('div',{class:'kind',style:'flex:1;margin:0'},T('Deine Woche')),h('span',{class:'muted small'},done+(done===1?T(' Lektion'):T(' Lektionen'))+' · '+acc+T(' % richtig'))),
    h('div',{class:'week'},days.map(d=>{const v=S.stats.days[d]||0;
      return h('div',{class:'wd'+(d===td?' now':'')},h('div',{class:'wb'},h('i',{style:'height:'+Math.round(100*v/mx)+'%'})),h('div',{class:'small muted'},[T('So'),T('Mo'),T('Di'),T('Mi'),T('Do'),T('Fr'),T('Sa')][new Date(d+'T12:00:00').getDay()]),h('div',{class:'small'},v||''));}))));
  /* passt es am Handy nicht ganz, wird „Deine Woche“ kompakter (kein Scrollen) */
  /* passt es am Handy nicht ganz (auch 1 px), wird „Deine Woche“ schrittweise kompakter: flach → ganz ausblenden. Mehrfach prüfen (iOS legt Ränder/Höhen verzögert fest) */
  /* Startseite ohne Scrollen: sofort (vor dem ersten Bild) messen; spätere Prüfungen machen nur noch kompakter, nie wieder größer (kein Springen) */
  const fit=reset=>{const mn=m.closest('main')||m,wc=m.querySelector('.weekcard');if(!wc||!wc.isConnected)return;const over=()=>mn.scrollHeight>mn.clientHeight;
    if(reset){m.classList.remove('homecompact');wc.classList.remove('tight');wc.style.display='';}
    let st=0;if(over()){wc.classList.add('tight');st=1;if(over()){wc.style.display='none';st=2;if(over()){m.classList.add('homecompact');st=3;}}}return st;};
  const apply=st=>{const wc=m.querySelector('.weekcard');if(!wc)return;wc.classList.toggle('tight',st>=1);wc.style.display=st>=2?'none':'';m.classList.toggle('homecompact',st>=3);};
  /* Beim App-Start (Startbildschirm sichtbar) vorläufig messen; endgültig kurz vor dem Ausblenden (HOMEFIT) – dann gilt die Stufe für die ganze Sitzung,
     auch beim Zurückwechseln auf die Startseite (iOS meldet beim Aufbau zeitweise falsche Höhen). Neu nur beim Drehen (Breite ändert sich). */
  /* Stufe pro Inhalt merken (mit/ohne „Angefangen“-Karte), sonst wird die Seite zu lang, wenn die Karte später dazukommt.
     Bekannte Stufe anwenden und trotzdem sofort nachprüfen – nur kompakter, nie größer (kein Springen). */
  const sig=(m.querySelector('.card.resume')?'r':'')+(m.querySelector('.card.hero')?'h':'');if(!HOMESTATE||typeof HOMESTATE!=='object')HOMESTATE={};
  const tighten=()=>{const mn=m.closest('main')||m,wc=m.querySelector('.weekcard');if(!wc)return;let st=HOMESTATE[sig]||0;
    while(st<3&&mn.scrollHeight>mn.clientHeight){st++;apply(st);}HOMESTATE[sig]=st;};
  if(HOMESTATE[sig]!=null){apply(HOMESTATE[sig]);tighten();}else fit(true);
  HOMEFIT=()=>{if(m.isConnected)HOMESTATE[sig]=fit(true);};const w0=innerWidth;
  const onRs=()=>{if(!m.isConnected){if(innerWidth!==w0)HOMESTATE=null;return window.removeEventListener('resize',onRs);}if(innerWidth!==w0){HOMESTATE={};HOMESTATE[sig]=fit(true);}else if(document.getElementById('boot'))fit(true);};window.addEventListener('resize',onRs);
}
const stat=(n,l)=>h('div',{class:'card stat'},h('div',{class:'n'},n),h('div',{class:'l'},l));

function unitCard(u){const st=unitStatus(u);const pct=lessonPct(u);const soon=u.status==='soon';const ck=S.checks[u.id];
  const pill=ck?.pass?h('span',{class:'pill ok'},T('gemeistert 🏆')):pct>=1?h('span',{class:'pill acc'},T('Abschlusstest offen')):st?h('span',{class:'pill '+(st==='sicher'?'ok':st===T('auffrischen')?'warn':'new')},st==='sicher'?(ck?T('Test gemacht'):T('sitzt ✓')):st===T('auffrischen')?T('auffrischen'):T('neu lernen')):soon?h('span',{class:'pill'},T('kommt als Nächstes')):null;
  /* Raster: Titel | Status-Pille, Balken | Prozent – Pille und Prozent rechtsbündig untereinander */
  return h('div',{class:'card unit'+(soon?' locked':'')+(ck?.pass?' mastered':''),'data-u':u.id,onclick:()=>{if(!soon)go('unit/'+u.id)}},
    h('div',{class:'num'},u.n),h('div',{class:'ugrid'},h('span',{class:'t'},u.title),h('span',{class:'upill'},pill),
      h('div',{class:'d'},u.sub),soon?h('span'):h('div',{class:'bar ubar'},h('i',{style:'width:'+Math.round(pct*100)+'%'})),
      h('span',{class:'muted small upct'},soon?'':Math.round(pct*100)+'%')));}
let lastLv=null;/* zuletzt angesehene Stufe – beim Zurückkommen auf „Kurs“ wieder dort, beim App-Start dort, wo es weitergeht */
function vUnits(m,lv){
  const cur=nextLesson();lv=lvFirst(LEVELS.find(L=>L.id===lv)?lv:lastLv||(cur?unitLevel(cur.u):'A1'));lastLv=lv;
  const pctOf=Ls=>{const us=COURSE.units.filter(u=>Ls.some(L=>L.id===unitLevel(u))&&u.status!=='soon');return Math.round((us.length?us.reduce((a,u)=>a+lessonPct(u),0)/us.length:0)*100)+'%';};
  /* Kopf (Titel + Stufen-Reiter) bleibt oben stehen, die Unidades scrollen darunter durch */
  const head=h('div',{class:'ustick'},h('div',{class:'row'},h('h1',{style:'margin:0;flex:1'},T('Kurs')),h('button',{class:'btn small',onclick:()=>go('placement')},T('🎯 Test')),h('button',{class:'btn small',onclick:()=>go('ref/g')},T('📄 Grammatik'))),
    levelTabs(lv,'units',pctOf));
  m.classList.add('stickhead');m.append(head);
  /* einmaliger Hinweis: die Kurs-Geschichte ist eine Rolle (Steckbrief LANG.roleNote) */
  if(LANG.roleNote&&!S.settings.roleSeen)m.append(h('div',{class:'card',style:'padding:6px 6px 6px 12px;margin:10px 0 0;display:flex;gap:8px;align-items:center'},h('span',{},'🎭'),h('span',{style:'flex:1;font-size:12.5px;line-height:1.35'},T(LANG.roleNote)),
    h('button',{class:'btn ghost small',style:'flex:none',title:T('Ausblenden'),onclick:e=>{S.settings.roleSeen=1;save();e.currentTarget.parentNode.remove();}},'×')));
  const parts=LEVELS.filter(x=>sameLv(x.id,lv));const us=COURSE.units.filter(u=>sameLv(unitLevel(u),lv));
  parts.forEach(L=>{const pu=us.filter(u=>unitLevel(u)===L.id);if(!pu.length)return;
    if(parts.length>1)m.append(h('div',{class:'kind',style:'margin:14px 0 2px'},L.title));
    m.append(h('p',{class:'muted small',style:'margin:'+(parts.length>1?'0':'10px')+' 0 10px'},L.sub),h('div',{class:'grid',style:'gap:8px'},pu.map(unitCard)));});
  /* beim Öffnen direkt zur ersten noch nicht gemeisterten Unidad der Stufe springen (Fertiges liegt darüber, leicht ausgegraut, erreichbar durch Hochscrollen;
     bei kurzen Listen nur so weit, wie es geht);
     beim Zurückkehren gilt die gemerkte Scroll-Stelle */
  const tgt=us.find(u=>u.status!=='soon'&&!S.checks[u.id]?.pass);
  if(!NAVBACK&&tgt&&tgt!==us[0]){const RT=curRoute();requestAnimationFrame(()=>{if(curRoute()!==RT)return;const c=m.querySelector('[data-u="'+tgt.id+'"]');if(!c)return;
    const sc=[m,m.parentElement].find(e=>e&&/auto|scroll/.test(getComputedStyle(e).overflowY))||document.scrollingElement;
    const need=c.getBoundingClientRect().top-head.getBoundingClientRect().bottom-10;
    sc.scrollTop+=need;});}
}
function vUnit(m,id,tab){const u=unitById(id);if(!u)return vUnits(m);
  const st=unitStatus(u);const ck=S.checks[u.id];const LS=u.lessons.filter(l=>!l.ab),AB=u.lessons.filter(l=>l.ab&&!l.freq&&!l.plus),FQ=u.lessons.find(l=>l.freq),PL=u.lessons.filter(l=>l.plus);const ust=STORIES.filter(x=>x.after===u.id);
  m.append(h('div',{class:'row',style:'margin-bottom:4px'},h('button',{class:'btn ghost small',onclick:()=>goBack('units/'+unitLevel(u))},'← '+backLabel(T('Kurs'))),h('span',{class:'pill acc'},levelOf(u).title)),
    h('h1',{class:'uh1',style:'margin-bottom:4px'},''+UW+' '+u.n+' · '+u.title),
    h('div',{class:'stick'},h('div',{class:'seg two',style:'margin-top:0'},h('button',{class:tab!=='x'?'on':'',onclick:()=>go('unit/'+u.id)},h('b',{},T('Lektionen')),h('span',{},Math.round(lessonPct(u)*100)+'%')),
      h('button',{class:tab==='x'?'on':'',onclick:()=>go('unit/'+u.id+'/x')},h('b',{},T('Extras')),h('span',{},(ust.length?T('Geschichte · '):'')+T('Wörter · Sprechen'))))));
  stickMain(m,'stickpage');
  if(tab==='x'){
    m.append(h('p',{class:'muted small xgoals',style:'margin:12px 0 0'},T('Das lernst du: ')+u.goals.join(' · ')),
      tiles(...ust.map(x=>mtile('📖',T('Geschichte'),x.title,()=>go('story/'+x.id),S.stories?.[x.id]?'✓':T('neu'))),
        mtile('📄',T('Resumen'),T('Alles auf einen Blick'),()=>go('resumen/'+u.id)),mtile('🗂️',T('Wortschatz'),allUnitWords(u).length+T(' Wörter'),()=>go('words/'+u.id)),
        mtile('🎧',T('Shadowing'),T('Sätze nachsprechen'),()=>go('shadow/'+u.id)),
        FQ?mtile('📚',T('Häufige Wörter'),T('30 Alltagswörter'),()=>go('lesson/'+u.id+'/'+FQ.id),S.lessons[u.id+'.'+FQ.id]?.done?'✓':null):null,
        /* freiwillige Zusatzlektionen (plus:true, ab:true): zählen nicht für Fortschritt/Tagesplan, z. B. „Vocabulario A1“ nach dem Plan Curricular */
        ...PL.map(l=>mtile(l.icon||'📗',l.title,l.desc||'',()=>go('lesson/'+u.id+'/'+l.id),S.lessons[u.id+'.'+l.id]?.done?'✓':null)),
        u.situacion?mtile('💬',T('Gespräch'),u.situacion.title+(hasAI()?'':T(' · braucht KI')),()=>go('chat/'+u.id)):null,
        AB.length?mtile('📎',T('Übungsblätter'),AB.length+T(' aus deinem DHBW-Kurs'),()=>go('unit/'+u.id+'/ab')):null));return;}
  if(tab==='ab'){m.innerHTML='';m.append(backTo(''+UW+' '+u.n,'unit/'+u.id),h('h1',{},T('Übungsblätter')),h('p',{class:'sub'},T('Deine Arbeitsblätter aus dem DHBW-Kurs – freiwillig, zum Vertiefen.')),
    h('div',{class:'grid',style:'gap:8px'},AB.map(l=>{const r=S.lessons[u.id+'.'+l.id];return h('div',{class:'lesson'+(r?.done?' done':''),onclick:()=>go('lesson/'+u.id+'/'+l.id)},h('div',{class:'ic'},r?.done?'✓':'📎'),
      h('div',{style:'flex:1'},h('div',{class:'lt'},l.title),h('div',{class:'ld'},l.desc)),r?.done?h('span',{class:'pill ok'},Math.round(r.best*100)+'%'):null);})));return;}
  if(st&&!ck?.pass)m.append(h('p',{class:'muted small',style:'margin:12px 0 0'},T('Einstufung: ')+(st==='sicher'?T('sitzt – mach direkt den Abschlusstest.'):st===T('auffrischen')?T('auffrischen – Erklärungen kannst du überfliegen.'):T('neu lernen – nimm dir Zeit.'))));
  const L=h('div',{class:'grid',style:'gap:8px;margin-top:12px'});
  LS.forEach((l,i)=>{const k=u.id+'.'+l.id;const rr=rnd(k);const nr=rr<1?1:rr<2?2:rr<3?3:2;const wait=nr===3&&!r3ready(k);
    const open=j=>{if(j>1&&rr<j-1){toast(T('Erst „')+RN[j-1]+T('“ abschließen'));return;}if(j===3&&rr<3&&!r3ready(k)){toast(T('„Festigen“ ist ab morgen frei'));return;}go(j===1?'lesson/'+u.id+'/'+l.id:'round/'+u.id+'/'+l.id+'/'+j);};
    L.append(h('div',{class:'lesson lrow'+(rr>=3?' done':''),onclick:()=>open(wait?2:nr)},h('div',{class:'ic'},rr>=3?'✓':i+1),
      h('div',{style:'flex:1;min-width:0'},h('div',{class:'lt'},l.title),h('div',{class:'ld'},l.desc),
        h('div',{class:'rounds'},[1,2,3].map(j=>h('button',{class:'rd'+(rr>=j?' on':''),onclick:e=>{e.stopPropagation();open(j);}},(rr>=j?'✓ ':'')+RN[j])),
          wait&&rr<3?h('span',{class:'muted small'},T('Festigen ab morgen')):null))));});
  m.append(L);
  const allR=LS.every(l=>rnd(u.id+'.'+l.id)>=3);const sug=allR||(st==='sicher'&&!ck);
  m.append(h('div',{class:'card',style:'margin-top:12px;padding:14px 16px'+(sug&&!ck?.pass?';border-color:var(--accent)':'')},h('div',{class:'row',style:'flex-wrap:nowrap'},h('div',{style:'flex:1;min-width:0'},h('div',{class:'lt',style:'font-weight:700'},T('🏆 Abschlusstest')),
    h('div',{class:'muted small'},ck?.pass?T('Bestanden mit ')+Math.round(ck.score*100)+T(' % – gemeistert.'):ck?T('Letztes Mal ')+Math.round(ck.score*100)+T(' % – ab 80 % bestanden.'):T('Ca. 15 Aufgaben, ab 80 % gemeistert – geht jederzeit.'))),
    h('button',{class:'btn'+(sug&&!ck?.pass?' primary':''),onclick:()=>go('check/'+u.id)},ck?.pass?T('Wiederholen'):T('Starten')))));
}
function vResumen(m,id){const u=unitById(id);m.append(backTo(UW+' '+u.n,'unit/'+id),
  h('h1',{},T('Resumen · ')+UW+' '+u.n));const box=h('div',{class:'card info resumen',html:u.resumen});const tb=trToggle(box);if(tb)m.append(h('div',{class:'row',style:'justify-content:flex-end;margin-bottom:6px'},tb));m.append(box);
  m.querySelectorAll('.resumen .es-t, .resumen td.es').forEach(addSpeakTo);}
/* Übersetzungen der spanischen Beispiele in Erklärungen (INFO_TR in c_info_tr.js, Schlüssel = Originaltext mit „Jonas“) */
const infoKey=t=>String(t).replace(S.surname?new RegExp((S.name||'Jonas')+' '+S.surname,'g'):/$^/,'Jonas').replace(new RegExp('\\b'+(S.name||'Jonas').replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','g'),'Jonas').replace(/\s+/g,' ').trim();
function trToggle(box){const TRI=EX===EX_BASE&&window.INFO_TR||null;/* INFO_TR = Beispiele in der Ausgangssprache der Erklärungen */if(!TRI)return null;
  const pop=(e,d)=>{const r=e.getBoundingClientRect();const p=h('div',{class:'glpop trpop'},d);document.body.append(p);
      p.style.left=Math.max(8,Math.min(r.left,window.innerWidth-p.offsetWidth-8))+'px';p.style.top=(r.bottom+6)+'px';
      const close=()=>{p.remove();document.removeEventListener('click',close,true);document.removeEventListener('scroll',close,true);};setTimeout(()=>{document.addEventListener('click',close,true);document.addEventListener('scroll',close,true);},0);};
  const bind=(e,d)=>{e.classList.add('hastr');e.onclick=ev=>{if(ev.target.closest('button'))return;ev.stopPropagation();document.querySelectorAll('.trpop').forEach(x=>x.remove());pop(e,d);};};
  box.querySelectorAll('.es-t').forEach(e=>{const d=TRI[infoKey(e.textContent)];if(!d)return;
    /* Aufzählungen (a, b, c · d / e) mit gleich vielen Teilen in der Übersetzung → jedes Wort einzeln antippbar */
    if(e.children.length===0){for(const sep of [' · ',', ',' / ']){const es=e.textContent.split(sep),de=d.split(sep);
      if(es.length>2&&es.length===de.length){e.textContent='';es.forEach((w,i)=>{const sp=h('span',{},w);bind(sp,de[i]);e.append(sp);if(i<es.length-1)e.append(sep);});return;}}}
    bind(e,d);});
  return null;}
/* Vorlesbarer Teil eines Beispiels: ohne (Klammern), „= Übersetzung“, „+ Präsens“-Angaben, ✓ und deutsche Teile nach „–“ */
/* nicht vorlesen: deutsche oder englische Erklärteile (Erklärsprache) */
const LOOK_W={de:['ich','du','er','wir','ihr','und','der','die','das','ist','bin','nicht','auch','mit','für','oder','aber','doch','sollen','können','kontext'],
  en:['the','you','your','have','had','should','could','would','only','with','and','is','are','was','of','to','it','that','this','what','when','where','why','how'],
  pt:['não','você','vocês','é','está','eu','ele','ela','nós','eles','uma','que','para','com','do','dos','em','no','os','e','mas','também','isso','isto','como','quando','onde','porque','por','muito','sim','obrigado','obrigada','frase','palavra','exemplo','verbo']};
/* „sieht nach Erklärsprache aus“ (dann kein 🔊, beim Vorlesen weggelassen): geprüft werden Ausgangs- und Erklärsprache des Kurses
   (deutsche Kurse: auch Englisch), nie die Lernsprache selbst – im Deutschkurs ist Deutsch ja der Lerntext */
const LOOK_L=['de','en','pt'].filter(l=>l!==LANG.code&&(l===EX_BASE||l===EX||l==='en'&&EX_BASE==='de'));
const LOOKS_W=new Set([].concat(...LOOK_L.map(l=>LOOK_W[l])));
const looksDe=t=>{if(LOOK_L.indexOf('de')>=0&&(/[äöß]/.test(t)||/(^|[^g])ü/.test(t)))return true; /* ohne Lookbehind – ältere iOS-Safari kennen ihn nicht */
  if(LOOK_L.indexOf('pt')>=0&&/[ãõç]/.test(t))return true;
  return t.split(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñÄÖäößãõçâêôàÃÕÇÂÊÔ]+/).some(w=>w==='I'&&LOOK_L.indexOf('en')>=0||LOOKS_W.has(w.toLowerCase()));};
function speakable(t){t=t.replace(/\s*\([^)]*\)/g,'').replace(/\s*=\s*[^·]*/g,' ').replace(/\s*\+\s*[A-ZÄÖÜ][\wäöüß]*\.?(\s+[A-ZÄÖÜ][\wäöüß]*\.?)*/g,'').replace(/✓/g,'');
  t=t.split(/\s+–\s+/).filter(x=>!looksDe(x)).join(' – ').replace(/\s*\+\s*/g,', ');return t.replace(/\s+·\s*$/,'').replace(/\s{2,}/g,' ').trim();}
function addSpeakTo(el){const t=speakable(el.textContent);if(!t||looksDe(t))return;const b=spk(t);b.style.marginLeft='6px';b.style.width='24px';b.style.height='24px';b.style.fontSize='11px';el.append(b);}
/* Artikel in Farbe (nur Kurse mit LANG.artColor, z. B. Deutsch: der blau, die rot, das grün, Plural grau) */
function artW(es){const A=LANG.artColor;const m=A&&String(es).match(/^(\S+)(\s+)([\s\S]*)$/);if(!m||!A[m[1]])return es;
  const cls=/\(Pl\.?\)|\bPl\.$/.test(m[3])?'p':A[m[1]];return [h('span',{class:'art a-'+cls},m[1]),m[2]+m[3]];}
const cleanWord=es=>es.length<=28&&!/[…\/(]/.test(es);
function lessonWords(l){const w=[];for(const s of l.steps)if(s.t==='vocab')w.push(...s.items);return w.filter(x=>cleanWord(x[0]));}
/* Vokabeln mit „/“ in einzelne richtige Formen auflösen: „el / la estudiante“, „el/la becario/a“, „encantado / encantada“, „el ingeniero / la ingeniera“ */
function vocabForms(es){es=String(es).trim().replace(/\s*\(Pl\.?\)$/,'');/* „die Eltern (Pl.)“: Hinweis gehört nicht zur Antwort */if(es.indexOf('/')<0)return[es];const out=[];
  let m=es.match(/^(el|un)\s*\/\s*(la|una)\s+(.+)$/i);if(m){const rest=m[3];const g=rest.match(/^(\S+?)(o|or|e)?\/(a|ora)(\b.*)$/);
    if(g){out.push(m[1]+' '+g[1]+(g[2]||'')+g[4],m[2]+' '+g[1]+(g[3]==='ora'&&!g[2]?'ora':g[2]==='or'?'ora':g[3])+g[4]);}else out.push(m[1]+' '+rest,m[2]+' '+rest);}
  else if(/\s\/\s/.test(es)){es.split(/\s\/\s/).forEach(p=>out.push(p.trim()));}
  else{const w=es.match(/^(.*?)(\S+?)(o|or)\/(a|ora)\b(.*)$/);if(w)out.push(w[1]+w[2]+w[3]+w[5],w[1]+w[2]+(w[3]==='or'?'ora':'a')+w[5]);}
  return out.length?out.concat([es]):[es];}
/* Synonyme: andere Kurswörter mit genau derselben deutschen Bedeutung (ganzer Text inkl. Klammern, damit z. B. ser/estar getrennt bleiben) */
let DE_IDX=null;const deKeys=de=>{const k=norm(de);return k.length>2?[k]:[];};
function synOf(es,de){if(!DE_IDX){DE_IDX={};Object.keys(VOC_DE).forEach(e=>deKeys(VOC_DE[e]).forEach(k=>{(DE_IDX[k]=DE_IDX[k]||[]).push(e);}));}
  if(VOC_DE[es]!=null)de=VOC_DE[es];const out=[];deKeys(de).forEach(k=>(DE_IDX[k]||[]).forEach(x=>{if(norm(x)!==norm(es)&&out.indexOf(x)<0)out.push(x);}));return out;}
function vocabStep(u,mode,es,de,em){const p=pic(es,em);
  if(mode==='mc'){const others=shuffle(allUnitWords(u).map(x=>x[0]).filter(x=>x!==es&&cleanWord(x))).slice(0,2);return{t:'mc',kind:T('Was heißt das?'),q:(p?p+' ':'')+esc(de),opts:[es,...others],a:0};}
  if(mode==='mcde'){const others=shuffle(allUnitWords(u).filter(x=>x[0]!==es&&x[1]!==de).map(x=>x[1])).slice(0,2);return{t:'mc',kind:T('Was bedeutet das?'),q:(p?p+' ':'')+esc(es),opts:[de,...others],a:0};}
  if(mode==='listen')return{t:'listen',es,de};
  return{t:'tr',kind:fmt(T('Wie heißt das {ON}?')),de:(p?p+'  ':'')+de,a:vocabForms(es).concat(synOf(es,de))};}
const vocabItem=(u,w,mode)=>({s:vocabStep(u,mode,w[0],w[1],w[2]),ref:'W|'+u.id+'|'+mode+'|'+w[0]});
function allUnitWords(u){const w=[];for(const l of u.lessons)for(const s of l.steps)if(s.t==='vocab')w.push(...s.items);return w;}
function vWords(m,id){const u=unitById(id);const w=allUnitWords(u);
  m.append(backTo(UW+' '+u.n,'unit/'+id),h('h1',{},T('Wortschatz · ')+UW+' '+u.n),
    h('p',{class:'sub'},w.length+T(' Wörter & Ausdrücke. ')),h('div',{class:'row',style:'margin-bottom:14px'},
      h('button',{class:'btn primary',onclick:()=>{const n=addVocab(w,u.id);toast(n?n+T(' Wörter zum Trainer hinzugefügt'):T('Schon alle im Trainer'));}},T('Alle in den Vokabeltrainer')),
      h('button',{class:'btn',onclick:()=>startCram(w,u)},T('Jetzt abfragen'))),
    h('div',{class:'vlist'},w.map(([es,de,em])=>h('div',{class:'vrow'},spk(es),picEl(es,em),h('span',{class:'es'},artW(es)),h('span',{class:'de'},de)))));}

/* ---------- Abschlusstest (statt ganzer Einheit) ---------- */
function vCheck(m,id){const u=unitById(id);if(!u)return vUnits(m);
  const PROD=['gap','tr','conj','order','listen'];
  const per=u.lessons.filter(l=>!l.ab).map(l=>{const c=l.steps.map((s,i)=>({s,ref:u.id+'|'+l.id+'|'+i,lid:l.id})).filter(x=>PROD.concat('mc').includes(x.s.t));
    return shuffle(c.filter(x=>PROD.includes(x.s.t))).concat(shuffle(c.filter(x=>x.s.t==='mc')));});
  const steps=per.map(a=>a[0]).filter(Boolean);for(const a of per)if(steps.length<11&&a[1])steps.push(a[1]);for(const a of per)if(steps.length<11&&a[2])steps.push(a[2]);
  const words=shuffle(u.lessons.filter(l=>!l.ab).flatMap(lessonWords)).slice(0,4);
  const res={};let weak=[],score=0,pass=false;
  play(m,{title:T('Abschlusstest · ')+UW+' '+u.n+' · '+u.title,steps:shuffle(steps.concat(words.map(w=>vocabItem(u,w,'tr')))),unit:u,noRetry:true,onBack:()=>goBack('unit/'+u.id),
    onAnswer:(it,st)=>{if(it.lid)res[it.lid]=(res[it.lid]??true)&&st!=='bad';},
    onDone:(r)=>{score=r.score;pass=score>=0.8;weak=[];
      for(const l of u.lessons){if(l.ab)continue;const k=u.id+'.'+l.id;if(res[l.id]===false){weak.push(l);if(!pass&&rnd(k)>=3){S.lessons[k].r=2;S.lessons[k].d2=today();}}else if(pass)setRound(k,3,1);}
      const prev=S.checks[u.id];S.checks[u.id]={date:today(),score,pass:pass||!!prev?.pass};save();
      if(weak.length)return{label:T('Lektion „')+weak[0].title+T('“ üben →'),fn:()=>go((rnd(u.id+'.'+weak[0].id)>=1?'round/':'lesson/')+u.id+'/'+weak[0].id+(rnd(u.id+'.'+weak[0].id)>=1?'/2':''))};
      const st=pass&&STORIES.find(x=>x.after===u.id&&!S.stories?.[x.id]);if(st)return{label:T('Belohnung: Geschichte „')+st.title+'“ →',fn:()=>go('story/'+st.id)};
      return{label:T('Weiter →'),fn:()=>go('home')};},
    extraEnd:()=>h('div',{class:'fb '+(pass?'ok':'warn'),style:'text-align:left'},
      h('b',{class:'h'},pass?T('Bestanden – ')+UW+' '+u.n+T(' gemeistert 🏆'):T('Noch nicht bestanden (ab 80 %)')),
      weak.length?h('div',{},(pass?T('Trotzdem noch mal anschauen: '):T('Hier hakt es noch: '))+weak.map(l=>l.title).join(' · ')):null,
      !pass?h('div',{class:'small muted',style:'margin-top:4px'},T('Mach bei diesen Lektionen die Runden „Üben“ und „Festigen“ und versuch es dann noch mal.')):null)});}

/* ---------- lesson player ---------- */
/* Häufige Wörter: beim ersten Mal Wortlisten + Übung, danach jedes Mal 14 neu gemischte Aufgaben aus allen 30 Wörtern */
function freqSteps(u,l){const W=l.steps.filter(s=>s.t==='vocab').flatMap(s=>s.items);const first=!S.lessons[u.id+'.'+l.id]?.done;
  const pick=shuffle(W.slice());const take=n=>pick.splice(0,n);const out=[];
  if(first)l.steps.forEach((s,i)=>{if(s.t==='vocab')out.push({s,ref:u.id+'|'+l.id+'|'+i});});
  const ex=[];for(const k of [0,1]){const ps=shuffle(W.slice()).slice(0,5);ex.push({s:{t:'match',q:T('Was bedeutet …?'),pairs:ps.map(w=>[w[0],w[1]])},ref:u.id+'|'+l.id+'|'+l.steps.findIndex(x=>x.t==='match')});}
  [['mcde',4],['mc',3],['tr',3],['listen',2]].forEach(([mode,n])=>take(n).forEach(w=>ex.push(vocabItem(u,w,mode))));
  return out.concat(shuffle(ex));}
function vLesson(m,uid,lid){const u=unitById(uid);const l=u?.lessons.find(x=>x.id===lid);if(!l)return vUnits(m);
  const steps=l.freq?freqSteps(u,l):l.steps.map((s,i)=>({s,ref:uid+'|'+lid+'|'+i}));
  play(m,{title:''+UW+' '+u.n+' · '+l.title,steps,unit:u,pk:'lesson/'+uid+'/'+lid,onBack:()=>goBack('unit/'+uid),
    onDone:(res)=>{const k=uid+'.'+lid;if(l.ab){const prev=S.lessons[k];S.lessons[k]={done:true,best:Math.max(prev?.best||0,res.score),date:today()};if(l.freq)S.lessons[k].freqL=1;save();return{label:T('Zur ')+UW+' →',fn:()=>go('unit/'+uid)};}
      const was=rnd(k);setRound(k,1,res.score);
      if(was<2&&(res.score>=0.9||shortLesson(l))){setRound(k,shortLesson(l)?3:2,res.score);}
      const nx=nextLesson();const r=rnd(k);
      return r>=2?(nx?{label:T('Weiter: ')+nxTitle(nx)+' →',fn:()=>go(nxRoute(nx))}:{label:T('Zur ')+UW+' →',fn:()=>go('unit/'+uid)}):{label:T('Runde 2: Üben →'),fn:()=>go('round/'+uid+'/'+lid+'/2')};},
    extraEnd:(res)=>{const r=rnd(uid+'.'+lid);return l.ab?null:shortLesson(l)?h('div',{class:'fb ok'},T('Diese Lektion braucht keine Extra-Runden – erledigt ✓')):res.score>=0.9&&r===2&&S.lessons[uid+'.'+lid].d2===today()?h('div',{class:'fb ok'},T('Stark! Über 90 % – „Üben“ überspringst du. „Festigen“ wird morgen frei.')):null;}});}
function roundSteps(u,l,n){const G=l.steps.map((s,i)=>({s,ref:u.id+'|'+l.id+'|'+i}));const words=shuffle(lessonWords(l));
  if(n===2){const ex=shuffle(G.filter(x=>['mc','gap','tr','conj','order','match','listen'].includes(x.s.t))).slice(0,8);
    return shuffle(ex.concat(words.slice(0,6).map((w,i)=>vocabItem(u,w,['mc','tr','listen'][i%3]))));}
  const ex=shuffle(G.filter(x=>['gap','tr','conj','order','listen'].includes(x.s.t))).slice(0,7);
  return shuffle(ex.concat(words.slice(0,5).map((w,i)=>vocabItem(u,w,i%2?'listen':'tr'))));}
function vRound(m,uid,lid,n){n=+n;const u=unitById(uid);const l=u?.lessons.find(x=>x.id===lid);if(!l||!(n===2||n===3))return vUnits(m);
  const k=uid+'.'+lid;let ok=false,fb='';
  play(m,{title:''+UW+' '+u.n+' · '+l.title+T(' · Runde ')+n+T(' von 3: ')+RN[n],steps:roundSteps(u,l,n),unit:u,pk:'round/'+uid+'/'+lid+'/'+n,onBack:()=>goBack('unit/'+uid),
    onDone:(res)=>{ok=res.score>=(n===3?0.8:0.6);fb='';
      if(ok)setRound(k,n,res.score);
      else if(n===3&&res.score>=0.6){S.lessons[k].d2=today();save();fb='fast';}
      else if(n===3){S.lessons[k].r=1;S.lessons[k].d2=today();save();fb='back';}
      const nx=nextLesson();
      return fb?(nx?{label:T('Weiter: ')+nxTitle(nx)+' →',fn:()=>go(nxRoute(nx))}:{label:T('Zur ')+UW+' →',fn:()=>go('unit/'+uid)}):!ok?{label:T('Noch mal →'),fn:()=>{m.innerHTML='';vRound(m,uid,lid,n);}}:nx?{label:T('Weiter: ')+nxTitle(nx)+' →',fn:()=>go(nxRoute(nx))}:{label:T('Zur ')+UW+' →',fn:()=>go('unit/'+uid)};},
    extraEnd:()=>fb==='fast'?h('div',{class:'fb warn'},T('Knapp unter 80 % – morgen kommt noch eine Runde „Festigen“. Wiederholung mit Abstand ist genau das, was hilft.'))
      :fb==='back'?h('div',{class:'fb warn'},T('Das sitzt noch nicht – ich schicke dich zurück zu „Üben“. Danach morgen noch mal „Festigen“.'))
      :!ok?h('div',{class:'fb warn'},T('Unter 60 % – die Runde zählt noch nicht. Versuch es noch einmal oder schau dir die Lektion vorher kurz an.'))
      :n===2?h('div',{class:'fb ok'},T('Runde „Festigen“ wird morgen frei – mit etwas Abstand wiederholen bringt am meisten.')):h('div',{class:'fb ok'},T('Lektion gemeistert ✓'))});}

/* ---------- Zwischenspeichern: angefangene Lektionen/Runden/Vokabelrunden merken sich automatisch, wo du warst ----------
   Nur auf diesem Gerät (localStorage, pro Lernsprache). Lektionen 14 Tage, Vokabel-Wiederholung nur am selben Tag. */
const PKEY=()=>'mi-profe-pause-'+LANG.code;
function pauses(){try{return JSON.parse(localStorage.getItem(PKEY())||'{}')||{};}catch(e){return{};}}
function pauseSave(P){try{localStorage.setItem(PKEY(),JSON.stringify(P));}catch(e){}}
function pauseGet(k){const p=pauses()[k];if(!p)return null;const age=dayDiff(p.d,today());if(p.daily?age>0:age>14){pauseDel(k);return null;}return p;}
function pauseSet(k,v){const P=pauses();v.d=today();v.t=Date.now();P[k]=v;/* höchstens 8 Zwischenstände, älteste fliegen raus */Object.keys(P).sort((a,b)=>(P[b].t||0)-(P[a].t||0)).slice(8).forEach(x=>delete P[x]);pauseSave(P);}
function pauseDel(k){const P=pauses();if(P[k]){delete P[k];pauseSave(P);}}
function pauseList(){return Object.keys(pauses()).map(k=>{const p=pauseGet(k);return p&&Object.assign({key:k},p);}).filter(Boolean).sort((a,b)=>b.t-a.t);}
let RESUME=null;
function resumeGo(p){if(p.cards)return resumeVocab(p);RESUME=p.key;if(curRoute()===p.route)route();else go(p.route);}
function resumeVocab(p){runVocab(p.cards,p.mode,p.srs,{pk:p.key,resume:p,myIds:p.myIds,again:p.myIds?()=>myRun(p.myIds.map(e=>S.srs[vkey(e)]).filter(c=>c&&!c.del)):null});}
const pauseInfo=p=>(p.pos!=null?p.pos+1:p.i+1)+' / '+p.n;
/* Titel immer in der aktuellen Sprache neu bauen (gespeicherter Titel wäre in der Sprache von damals) */
function pauseTitle(p){const k=p.key||'',a=k.split('/');if(p.cards)return p.myIds?T('Meine Wörter'):T('Vokabeln');
  if(a[0]==='lesson'||a[0]==='round'){const u=unitById(a[1]),l=u&&u.lessons.find(x=>x.id===a[2]);if(l)return UW+' '+u.n+' · '+l.title+(a[0]==='round'?T(' · Runde ')+a[3]:'');}
  return {mix:T('Gemischte Wiederholung'),verbs:T('Verben-Trainer'),num:T('Zahlen & Uhrzeit'),mistakes:T('Fehler üben')}[k]||p.title||'';}
function pauseBtn(k,start,label){const p=pauseGet(k);return p?h('button',{class:'btn primary',style:'width:100%;min-height:48px;margin-bottom:8px',onclick:start},T('▶ Weitermachen')+' ('+pauseInfo(p)+')'):null;}
/* Text zu einer Verständnisfrage finden (Fehlerheft, Gemischte Wiederholung): Lektion = letzter Lesetext davor, Geschichte, Lesetext */
function ctxOf(ref){const p=String(ref||'').split('|');
  if(p[0]==='S'){const st=STORIES.find(x=>x.id===p[1]);return st&&st.text?{title:st.title,text:st.text}:null;}
  if(p[0]==='R'){const r=(window.READINGS||[]).find(x=>x.id===p[1]);return r&&r.text?{title:r.title,text:r.text}:null;}
  const u=unitById(p[0]),l=u&&u.lessons.find(x=>x.id===p[1]);const i=+p[2];if(!l||isNaN(i)||!['mc','tf','gap'].includes((l.steps[i]||{}).t))return null;
  for(let k=i-1;k>=0&&k>=i-8;k--){const s=l.steps[k];if(s.t==='read'&&s.text)return{title:s.title||'',text:s.text};if(s.t==='vocab'||s.t==='info')break;}return null;}
function ctxBox(cx){const html=esc(String(cx.text).replace(/\{([^|}]+)\|[^}]*\}/g,'$1')).split(/\n\s*\n/).map(x=>'<p>'+x.replace(/\n/g,'<br>')+'</p>').join('');
  return h('details',{class:'card ctxbox',style:'padding:10px 14px;margin:0 0 12px'},h('summary',{class:'small',style:'cursor:pointer;font-weight:600'},T('📖 Text zum Nachlesen')+(cx.title?' · '+cx.title:'')),h('div',{class:'es-t',style:'margin-top:8px;font-size:15px',html}));}
function play(m,cfg){if(!['lesson','round','check','mix','reading','story','placement'].includes(curRoute().split('/')[0]))runEnter();
  let queue=cfg.steps.slice();let pos=0;let firstTry=new Map();let retried=new Set();let gradeable=cfg.steps.filter(x=>GRADED.has(x.s.t)).length;
  /* ↶ Rückgängig (nur bei Übungen mit Zwischenspeicher, nicht in Tests): Zustand bei jeder Aufgabe merken, zurück = vorige Aufgabe neu */
  const hist=[];const cp=o=>o==null?o:JSON.parse(JSON.stringify(o));
  const undoB=h('button',{class:'btn ghost undo hide',title:T('Rückgängig'),onclick:()=>{if(hist.length<2)return;hist.pop();const h0=hist.pop();
    pos=h0.pos;queue=h0.queue;firstTry=h0.ft;retried=new Set(h0.rt.map(i=>queue[i]).filter(Boolean));S.mistakes=h0.mis;S.stats=h0.stats;S.streak=h0.streak;save();speechSynthesis.cancel();show();}},'↶ '+T('zurück'));
  /* cfg.pk = Schlüssel zum Zwischenspeichern; gespeicherter Stand wird automatisch fortgesetzt (cfg.fresh = neu anfangen) */
  const sv=cfg.pk&&!cfg.fresh&&pauseGet(cfg.pk);
  if(sv){queue=sv.steps;pos=sv.pos;(sv.ft||[]).forEach(([a,b])=>firstTry.set(a,b));retried=new Set((sv.rt||[]).map(i=>queue[i]).filter(Boolean));gradeable=sv.g;}
  const top=h('div',{class:'ptop'},h('button',{class:'btn ghost small',onclick:async()=>{if(cfg.pk&&pos>0){toast(T('Gespeichert – später geht es hier weiter.'));return cfg.onBack();}
    if(await askConfirm(T('Lektion abbrechen? Der Fortschritt dieser Lektion geht verloren.'),T('Abbrechen & zurück')))cfg.onBack();}},'✕'),h('div',{class:'bar'},h('i',{style:'width:0'})),undoB,h('span',{class:'muted small',id:'pcount'}));
  const stage=h('div',{class:'step'});
  /* Leiste (✕, Fortschritt, ↶) klebt oben, „Prüfen/Weiter“ unten (außer bei Lesetexten) – .main.stickplay */
  stickMain(m,'stickplay');
  m.append(h('div',{class:'player'},top,h('div',{class:'muted small ptitle'},cfg.title),stage));
  if(sv)setTimeout(()=>toast(T('Weiter, wo du aufgehört hast')+' · '+(pos+1)+' / '+queue.length),300);
  function upd(){$('.ptop .bar i').style.width=Math.round(100*pos/queue.length)+'%';$('#pcount').textContent=Math.min(pos+1,queue.length)+' / '+queue.length;}
  function next(){pos++;if(pos>=queue.length)return finish();show();}
  function show(){if(cfg.pk){hist.push({pos,queue:queue.slice(),ft:new Map(firstTry),rt:[...retried].map(x=>queue.indexOf(x)),mis:cp(S.mistakes),stats:cp(S.stats),streak:cp(S.streak)});if(hist.length>30)hist.shift();undoB.classList.toggle('hide',hist.length<2);}
    upd();if(!queue[pos])return finish();/* leere Aufgabenliste (z. B. Runde 3 einer Lese-Lektion) */stage.innerHTML='';stage.className='step';void stage.offsetWidth;stage.className='step';
    if(cfg.pk&&pos>0)pauseSet(cfg.pk,{route:curRoute(),title:cfg.title,steps:queue,pos,ft:[...firstTry],rt:[...retried].map(x=>queue.indexOf(x)),g:gradeable,n:queue.length});
    const it=queue[pos];stage.setAttribute('data-t',(it.s||it).t||'');const isRetry=retried.has(it)&&firstTry.has(it.ref);
    if(isRetry)stage.append(h('div',{class:'pill acc',style:'margin-bottom:10px'},T('↻ Noch mal – das war vorhin falsch')));
    /* Verständnisfrage ohne ihren Text (Fehlerheft, Mix): Text zum Aufklappen dazu */
    if(cfg.mistakeMode||cfg.pk==='mix'){const cx=ctxOf(it.ref);if(cx)stage.append(ctxBox(cx));}
    window.__cur=it;const R=RENDER[it.s.t];if(!R){stage.append(T('Unbekannter Schritt ')+it.s.t);return next();}
    R(stage,it.s,{unit:cfg.unit,ref:it.ref,noPrompt:!!cfg.noPrompt,done:(status,your)=>{
      if(GRADED.has(it.s.t)){if(!firstTry.has(it.ref)){firstTry.set(it.ref,status);bumpDay(status!=='bad');}
        if(status==='bad'){logMistake(it.ref,your);if(!cfg.noRetry&&!retried.has(it)){retried.add(it);queue.push(it);}}
        else if(cfg.mistakeMode){S.mistakes=S.mistakes.filter(x=>x.ref!==it.ref);save();}}
      if(cfg.onAnswer)cfg.onAnswer(it,status);},next});}
  function finish(){$('.ptop .bar i').style.width='100%';if(cfg.pk)pauseDel(cfg.pk);undoB.classList.add('hide');
    const vals=[...firstTry.values()];const score=gradeable?vals.filter(v=>v!=='bad').length/Math.max(gradeable,vals.length||1):1;
    const after=cfg.onDone?cfg.onDone({score,firstTry}):null;stage.innerHTML='';
    const pct=Math.round(score*100);
    stage.append(h('div',{class:'card',style:'text-align:center;padding:36px'},h('div',{style:'font-size:48px'},pct>=90?'🏆':pct>=70?'🎉':'💪'),
      h('h1',{},pct>=90?TP('¡Excelente!'):pct>=70?TP('¡Muy bien!'):TP('¡Sigue así!')),
      gradeable?h('p',{class:'sub'},pct+T('% beim ersten Versuch richtig')):h('p',{class:'sub'},T('Lektion abgeschlossen')),
      cfg.extraEnd?cfg.extraEnd({score,firstTry}):null,
      h('div',{class:'endbtns'},after?h('button',{class:'btn primary',onclick:after.fn},after.label):null,
        (()=>{const np=dayPlan().find(x=>!x.done&&x.r!==curRoute());return np?h('button',{class:'btn'+(after?'':' primary'),onclick:()=>{NAVRESET=true;planGo(np);}},'📅 '+T('Nächste Aufgabe: ')+np.t+' →'):null;})(),
        h('button',{class:'btn ghost',onclick:()=>cfg.onBack()},T('Zurück')))));}
  show();
}

/* step UI helpers */
const GRADED=new Set(['mc','gap','tr','conj','order','match','listen','dialog']);
function kind(t){return h('div',{class:'kind'},t);}
let SHIFT=false;
function keys(target){const k=h('div',{class:'keys'});const L=LANG.keys||[];if(!L.length)return null;const btns=[];
  const ins=c=>{const el=target();if(!el)return;const s=el.selectionStart??el.value.length;el.value=el.value.slice(0,s)+c+el.value.slice(el.selectionEnd??s);el.focus();try{el.setSelectionRange(s+c.length,s+c.length);}catch(e){}el.dispatchEvent(new Event('input'));};
  const sh=h('button',{type:'button',tabindex:'-1',class:'kshift',title:T('Großbuchstaben'),onmousedown:e=>e.preventDefault(),onclick:()=>{SHIFT=!SHIFT;draw();}},'⇧');
  const draw=()=>{sh.classList.toggle('on',SHIFT);btns.forEach(([b,c])=>b.textContent=SHIFT?c.toUpperCase():c);};
  for(const c of L){const b=h('button',{type:'button',tabindex:'-1',onmousedown:e=>e.preventDefault(),onclick:()=>{ins(SHIFT?c.toUpperCase():c);if(SHIFT){SHIFT=false;draw();}}},c);btns.push([b,c]);k.append(b);}
  k.append(sh);draw();return k;}
let lastInput=null;document.addEventListener('focusin',e=>{if(e.target.matches&&e.target.matches('input.inp,textarea.inp'))lastInput=e.target;});
const isField=t=>t&&t.matches&&t.matches('input:not([type=checkbox]):not([type=radio]):not([type=range]),textarea,select');
document.addEventListener('focusin',e=>{if(isField(e.target))document.body.classList.add('typing');});
document.addEventListener('focusout',e=>{if(isField(e.target))setTimeout(()=>{if(!isField(document.activeElement))document.body.classList.remove('typing');},50);});
/* feste Leisten: Hauptbereich ohne Innenabstand oben (sonst klebt die Leiste je nach Browser zu tief), den Abstand übernimmt das CSS */
function stickMain(m,cls){const mm=m&&m.closest?m.closest('.main')||m:m;if(mm&&mm.classList)mm.classList.add(cls);}
function actionBar(onCheck,ctx,opts={}){
  const btn=h('button',{class:'btn primary'},opts.label||T('Prüfen'));const bar=h('div',{class:'actions'},opts.extra||null,btn);
  let state='check';
  btn.onclick=()=>{if(state==='next'){cleanup();ctx.next();return;}const r=onCheck();if(r===false)return;state='next';btn.textContent=T('Weiter →');btn.focus();};
  const kh=e=>{if(!btn.isConnected)return cleanup();if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing&&document.activeElement?.tagName!=='TEXTAREA'){e.preventDefault();btn.click();}};
  document.addEventListener('keydown',kh);const cleanup=()=>document.removeEventListener('keydown',kh);
  window.__cleanupStep&&window.__cleanupStep();window.__cleanupStep=cleanup;
  bar.setNext=()=>{state='next';btn.textContent=T('Weiter →');};
  return bar;}
function feedback(el,res,step,your,ctx){
  if(step.noReveal&&res.status==='bad'){const b=h('div',{class:'fb bad'},h('b',{class:'h'},T('Nicht ganz')),h('div',{},T('Die Lösung verrate ich noch nicht – gleich hörst du die Geschichte mit Text und bekommst die Frage noch einmal.')));el.append(b);return b;}
  const box=h('div',{class:'fb '+(res.status==='ok'?'ok':res.status==='near'?'warn':'bad')});
  if(res.status==='ok')box.append(h('b',{class:'h'},pick([TP('¡Correcto! ✓'),TP('¡Muy bien! ✓'),TP('¡Perfecto! ✓'),TP('¡Eso es! ✓')])));
  else if(res.status==='near')box.append(h('b',{class:'h'},T('Fast richtig')),h('div',{html:T('Richtig: ')+(your?diffHtml(your,res.right):'<span class="es-t">'+esc(res.right)+'</span>')}));
  else box.append(h('b',{class:'h'},T('Nicht ganz')),h('div',{html:T('Richtig: <b class="es-t">')+esc(res.right)+'</b>'+(your?T('<br><span class="small muted">Deine Antwort: </span>')+diffHtml(your,res.right):'')}));
  if(res.note)box.append(h('div',{class:'small',style:'margin-top:4px'},res.note));
  if(step.why&&res.status!=='ok')box.append(h('div',{style:'margin-top:6px'},'💡 ',h('span',{html:step.why})));
  if(res.right&&step.t!=='mc')box.append(h('div',{style:'margin-top:6px'},spk(res.right),' ',h('span',{class:'small muted'},T('anhören'))));
  if(res.status==='bad'&&hasAI()&&your&&ctx){const ab=h('button',{class:'btn small',style:'margin-top:10px'},'🤖 '+AIN()+T(': Ist meine Antwort auch richtig? / Warum?'));
    ab.onclick=async()=>{ab.disabled=true;ab.textContent=AIN()+T(' denkt nach…');
      try{const q=step.q||step.de||step.es||'';const r=await gemini(TEACHER+`\n\nAufgabe (Typ ${step.t}): ${q}\nMusterlösung(en): ${[].concat(step.a||res.right).join(' / ')}\nAntwort von Jonas: ${your}\n\nIst die Antwort von Jonas ebenfalls korrekt und passend (auch wenn sie von der Musterlösung abweicht)? Antworte als JSON: {"korrekt": true|false, "erklaerung": "kurze Erklärung auf Deutsch, was falsch ist und warum (max. 3 Sätze)", "korrigiert": "Jonas' Satz korrigiert"}`);
        const ai=h('div',{class:'fb ai'},h('b',{class:'h'},r.korrekt?'🤖 '+AIN()+T(': Deine Antwort ist auch richtig!'):'🤖 '+AIN()+T(' erklärt')),h('div',{},aiH(r.erklaerung)),r.korrigiert&&!r.korrekt?h('div',{class:'es-t',style:'margin-top:4px'},'→ ',aiH(r.korrigiert)):null);
        ab.replaceWith(ai);if(r.korrekt&&ctx.upgrade)ctx.upgrade();}
      catch(e){ab.disabled=false;ab.textContent=T('Fehler: ')+e.message;}};box.append(h('div',{},ab));}
  el.append(box);return box;}
const pick=a=>a[Math.floor(Math.random()*a.length)];
function retryBox(el,title,hint){$('.retry',el)?.remove();const b=h('div',{class:'fb warn retry'},h('b',{class:'h'},'↻ '+title),hint?h('div',{class:'small'},'💡 ',h('span',{html:hint})):null);
  const bar=el.querySelector('.actions');bar?bar.after(b):el.append(b);}
function trHint(your,s){const answers=[].concat(s.a).flatMap(a=>a.split('|'));
  const best=answers.map(a=>({a,d:lev(strip(norm(a)),strip(norm(your)))})).sort((x,y)=>x.d-y.d)[0].a;
  const A=strip(norm(your)).split(' '),B=strip(norm(best)).split(' ');
  const wrong=norm(your).split(' ').filter((w,i)=>!B.includes(strip(w)));
  let msg='';
  if(wrong.length)msg=T('Diese Wörter passen nicht: <b class="es-t">')+wrong.slice(0,4).map(esc).join(', ')+'</b>. ';
  else if(A.length===B.length)msg=T('Alle Wörter passen – aber die <b>Reihenfolge</b> stimmt noch nicht. ');
  if(B.length>A.length)msg+=T('Es fehlt noch mindestens ein Wort. ');
  if(!msg)msg=T('Prüfe Endungen und Akzente. ');
  if(s.hint)msg+=T('Hinweis: ')+s.hint;
  return msg;}


/* ---------- renderers ---------- */
/* Vorleser für längere Texte: Satz für Satz, Pause/Weiter an derselben Stelle, Langsam ab der aktuellen Stelle, Zurücksetzen */
let READING=false; /* Vorleser läuft → angetippte Wörter nur übersetzen, nicht vorlesen (sonst bricht das Vorlesen ab) */
function reader(text){const sent=(String(text).replace(/\s+/g,' ').match(/[^.!?…]+(?:[.!?…]+[»"”]?)?/g)||[String(text)]).map(x=>x.trim()).filter(Boolean);
  let i=0,playing=false,slow=false,tok=0;const info=h('span',{class:'muted small'},'');
  const upd=()=>{pb.textContent=playing?T('⏸ Pause'):(i>0&&i<sent.length?T('▶ Weiter'):T('🔊 Vorlesen'));sb.classList.toggle('on',slow);info.textContent=i>0||playing?(Math.min(i+1,sent.length)+' / '+sent.length):'';};
  const step=my=>{if(my!==tok||!playing)return;if(!document.body.contains(pb)){playing=READING=false;return;}if(i>=sent.length){playing=READING=false;i=0;upd();return;}upd();
    const u=mkUtt(sent[i],slow?(IS_IOS?0.5:0.65):S.settings.rate);u.onend=()=>{if(my!==tok)return;i++;step(my);};speechSynthesis.speak(u);};
  const start=()=>{if(!window.speechSynthesis)return toast(T('Sprachausgabe wird von diesem Browser nicht unterstützt'));unlockAudio();speechSynthesis.cancel();playing=READING=true;tok++;const my=tok;setTimeout(()=>step(my),60);};
  const stop=()=>{playing=READING=false;tok++;speechSynthesis.cancel();upd();};
  const pb=h('button',{class:'btn small',onclick:()=>playing?stop():start()});
  const sb=h('button',{class:'btn small tog',onclick:()=>{slow=!slow;if(playing)start();else upd();}},T('🐢 Langsam'));
  const rb=h('button',{class:'btn small',title:T('Von vorn'),onclick:()=>{const was=playing;stop();i=0;if(was)start();else upd();}},'⏮');
  upd();return[pb,sb,rb,info];}
const RENDER={
info(el,s,ctx){const box=h('div',{class:'info',html:s.html});const tb=trToggle(box);
  el.append(kind(s.kind||T('Erklärung')),h('div',{class:'row',style:'justify-content:space-between;flex-wrap:nowrap;align-items:flex-start'},h('h2',{style:'margin-top:0'},s.title),tb),box);
  el.querySelectorAll('.info .es-t').forEach(addSpeakTo);el.append(actionBar(()=>{ctx.next();return false;},ctx,{label:T('Verstanden →')}));},
vocab(el,s,ctx){const n=addVocab(s.items,ctx.unit?.id);
  el.append(kind(T('Neue Wörter')),h('h2',{style:'margin-top:0'},s.title||T('Wortschatz')),s.note?h('p',{class:'muted'},s.note):null,
    h('div',{class:'vlist'},s.items.map(([es,de,em])=>h('div',{class:'vrow'},spk(es),picEl(es,em),h('span',{class:'es'},artW(es)),h('span',{class:'de'},de)))),
    h('p',{class:'muted small'},n?'✓ '+n+T(' neue Wörter im Vokabeltrainer gespeichert.'):T('Diese Wörter sind schon im Vokabeltrainer.')));
  el.append(actionBar(()=>{ctx.next();return false;},ctx,{label:T('Weiter →')}));},
mc(el,s,ctx){let sel=null;const all=s.opts.map((o,i)=>[o,i]);const opts=s.keep?all:s.keepLast?shuffle(all.slice(0,-1)).concat([all[all.length-1]]):shuffle(all);
  el.append(kind(s.kind||T('Auswählen')),h('p',{class:'q'},h('span',{html:s.q}),s.say?[' ',spk(s.say)]:null));
  if(s.autoSay)setTimeout(()=>say(s.say),300);
  const box=h('div',{class:'opts'});const btns=opts.map(([o,i],k)=>{const b=h('button',{class:'opt'},h('span',{class:'muted small'},(k+1)+'  '),h('span',{class:/[áéíóúñ¿¡]|^[a-z]/i.test(o)?'es-t':''},o));
    b.onclick=()=>{if(box.dataset.done)return;btns.forEach(x=>x.classList.remove('sel'));b.classList.add('sel');sel=i;};return b;});box.append(...btns);el.append(box);
  const nk=e=>{if(!box.isConnected)return document.removeEventListener('keydown',nk);if(document.activeElement?.tagName==='INPUT')return;const k=+e.key;if(k>=1&&k<=btns.length&&!box.dataset.done)btns[k-1].click();};document.addEventListener('keydown',nk);
  el.append(actionBar(()=>{if(sel==null){toast(T('Wähle eine Antwort'));return false;}box.dataset.done=1;document.removeEventListener('keydown',nk);
    const ok=sel===s.a;btns.forEach((b,k)=>{if(opts[k][1]===s.a&&(ok||!s.noReveal))b.classList.add('right');else if(opts[k][1]===sel)b.classList.add('wrong');});
    feedback(el,{status:ok?'ok':'bad',right:s.opts[s.a]},s,null,null);ctx.done(ok?'ok':'bad',s.opts[sel]);},ctx));},
gap(el,s,ctx){el.append(kind(s.kind||T('Lücke füllen')),s.task?h('p',{class:'muted'},s.task):null);
  /* eine Lücke, aber mehrere Lösungen im Inhalt = Varianten (z. B. quien / la que) */
  if((s.q.match(/___/g)||[]).length===1&&s.a.length>1)s=Object.assign({},s,{a:[s.a.join('|')]});
  const parts=s.q.split('___');const inputs=[];const q=h('div',{class:'gapq'});
  parts.forEach((p,i)=>{q.append(h('span',{html:p}));if(i<parts.length-1){const w=Math.max(6,...String(s.a[i]).split('|').map(x=>x.length));const inp=h('input',{class:'inp gapi',style:'width:'+(w*0.75+2)+'em',autocomplete:'off',autocapitalize:'off',spellcheck:'false'});inputs.push(inp);q.append(inp);}});
  el.append(q,s.hint?h('p',{class:'muted small'},T('Hinweis: '),h('span',{html:s.hint})):null,keys(()=>lastInput));setTimeout(()=>inputs[0]?.focus(),50);
  let attempt=1;
  el.append(actionBar(()=>{let worst='ok';const yours=[],rights=[];const res=inputs.map((inp,i)=>compare(inp.value,s.a[i],{pron:false,typo:false}));
    if(attempt===1&&!ctx.noPrompt&&res.some(r=>r.status==='bad')&&inputs.some(i=>i.value.trim())){attempt=2;
      inputs.forEach((inp,i)=>{inp.classList.remove('wrong','right');if(res[i].status==='bad'){inp.classList.add('wrong');}else{inp.classList.add('right');inp.readOnly=true;}});
      retryBox(el,inputs.length>1?T('Die rot markierte Lücke stimmt noch nicht – versuch es noch einmal.'):T('Noch nicht ganz – versuch es noch einmal.'),s.prompt||s.hint||T('Achte auf Person (wer?), Endung, Singular/Plural und männlich/weiblich.'));
      inputs.find(i=>!i.readOnly)?.focus();return false;}
    $('.retry',el)?.remove();
    inputs.forEach((inp,i)=>{const r=res[i];inp.classList.remove('wrong','right');inp.classList.add(r.status==='bad'?'wrong':'right');inp.readOnly=true;yours.push(inp.value);rights.push(r.right);
      if(r.status==='bad')worst='bad';else if(r.status==='near'&&worst==='ok')worst='near';});
    if(attempt===2&&worst==='ok')worst='near';
    const full=s.q.split('___').reduce((a,p,i)=>a+p.replace(/<[^>]+>/g,'')+(rights[i]??''),'');
    feedback(el,{status:worst,right:full.trim(),note:attempt===2&&worst!=='bad'?T('Selbst korrigiert 👍 – genau so lernt man am meisten.'):worst==='near'?T('Fast! Achte auf die Akzente.'):''},s,null,null);
    ctx.done(worst,yours.join(' / '));},ctx));},
tr(el,s,ctx){el.append(kind(s.kind||fmt(T('Übersetze {INTO}'))),h('p',{class:'q'},s.de),s.hint?h('p',{class:'muted small'},T('Hinweis: '),h('span',{html:s.hint})):null);
  const inp=h('input',{class:'inp',autocomplete:'off',spellcheck:'false',placeholder:fmt(T('{ON} …'))});el.append(inp,keys(()=>inp));setTimeout(()=>inp.focus(),50);
  let attempt=1;
  el.append(actionBar(()=>{let r=compare(inp.value,s.a);
    if(r.status==='bad'&&attempt===1&&!ctx.noPrompt&&inp.value.trim()){attempt=2;inp.classList.add('wrong');retryBox(el,T('Noch nicht ganz – versuch es noch einmal.'),trHint(inp.value,s));inp.focus();inp.oninput=()=>inp.classList.remove('wrong');return false;}
    $('.retry',el)?.remove();
    if(attempt===2&&r.status==='ok'){r=Object.assign({},r,{status:'near',note:T('Selbst korrigiert 👍')});}
    inp.readOnly=true;inp.classList.add(r.status==='bad'?'wrong':'right');
    feedback(el,r,s,inp.value,{upgrade:()=>{toast(T('Als richtig gewertet ✓'));}});const alts=[].concat(s.a).flatMap(a=>a.split('|')).filter(a=>norm(a)!==norm(r.right));if(r.status!=='bad'&&alts.length)el.append(h('p',{class:'muted small'},T('Auch möglich: '),h('span',{class:'es-t'},alts.slice(0,3).join(' · '))));
    ctx.done(r.status,inp.value);},ctx));},
conj(el,s,ctx){const P=s.persons||LANG.persons||[T('1. Sg.'),T('2. Sg.'),T('3. Sg.'),T('1. Pl.'),T('2. Pl.'),T('3. Pl.')];
  el.append(kind(T('Konjugieren')),h('p',{class:'q'},h('span',{class:'es-t'},s.verb),s.de?h('span',{class:'muted',style:'font-weight:400'},' – '+s.de):null,s.tense?h('span',{class:'pill',style:'margin-left:8px'},s.tense):null));
  const inputs=[];const t=h('div',{class:'grid',style:'grid-template-columns:auto 1fr;align-items:center;gap:8px 14px;max-width:460px'});
  P.forEach((p,i)=>{if(s.forms[i]==null)return;const inp=h('input',{class:'inp',style:'font-size:17px;padding:8px 12px;flex:1;min-width:0',autocomplete:'off',spellcheck:'false'});inputs.push([inp,i]);t.append(h('span',{class:'muted'},p),h('div',{class:'row',style:'flex-wrap:nowrap;gap:8px'},inp));});
  el.append(t,keys(()=>lastInput));setTimeout(()=>inputs[0][0].focus(),50);
  let attempt=1;
  el.append(actionBar(()=>{let worst='ok';const res=inputs.map(([inp,i])=>compare(inp.value,s.forms[i],{pron:false,typo:false}));
    if(attempt===1&&!ctx.noPrompt&&res.some(r=>r.status==='bad')&&inputs.some(([i])=>i.value.trim())){attempt=2;
      inputs.forEach(([inp],k)=>{inp.classList.remove('wrong','right');if(res[k].status==='bad')inp.classList.add('wrong');else{inp.classList.add('right');inp.readOnly=true;}});
      retryBox(el,T('Die rot markierten Formen stimmen noch nicht – versuch es noch einmal.'),s.prompt||(LANG.conjTip?T(LANG.conjTip):T('Tipp: Stamm + Endung.')));
      inputs.find(([i])=>!i.readOnly)?.[0].focus();return false;}
    $('.retry',el)?.remove();
    inputs.forEach(([inp,i],k)=>{const r=res[k];inp.readOnly=true;inp.classList.remove('wrong','right');inp.classList.add(r.status==='bad'?'wrong':'right');
      if(r.status!=='ok'){const sp=h('span',{class:'small',style:'color:var(--ok);white-space:nowrap;font-weight:600'},'→ '+s.forms[i]);inp.after(sp);}
      if(r.status==='bad')worst='bad';else if(r.status==='near'&&worst==='ok')worst='near';});
    if(attempt===2&&worst==='ok')worst='near';
    feedback(el,{status:worst,right:s.forms.filter(Boolean).join(', '),note:attempt===2&&worst!=='bad'?T('Selbst korrigiert 👍'):''},s,null,null);ctx.done(worst,'');},ctx));},
order(el,s,ctx){const words=s.es.replace(/([¿¡])\s*/g,'$1').split(/\s+/);const pool=shuffle(words.map((w,i)=>({w,i})));
  el.append(kind(T('Satz bauen')),h('p',{class:'q'},s.de||T('Bring die Wörter in die richtige Reihenfolge.')));
  const ans=h('div',{class:'tiles'}),src=h('div',{class:'tiles',style:'border-style:solid;background:var(--surface2)'});let picked=[];let locked=false;
  function draw(){ans.innerHTML='';src.innerHTML='';picked.forEach((p,k)=>ans.append(h('button',{class:'tile',onclick:()=>{if(locked)return;picked.splice(k,1);draw();}},p.w)));
    pool.filter(p=>!picked.includes(p)).forEach(p=>src.append(h('button',{class:'tile',onclick:()=>{if(locked)return;picked.push(p);draw();}},p.w)));}
  draw();el.append(ans,src);
  el.append(actionBar(()=>{if(picked.length<words.length){toast(T('Benutze alle Wörter'));return false;}locked=true;
    const your=picked.map(p=>p.w).join(' ');const r=compare(your,[s.es].concat(s.alt||[]),{pron:false});feedback(el,r,s,your,null);ctx.done(r.status==='near'?'ok':r.status,your);},ctx));},
match(el,s,ctx){el.append(kind(T('Zuordnen')),h('p',{class:'q'},s.q||T('Was gehört zusammen?')));
  const L=shuffle(s.pairs.map((p,i)=>({t:p[0],i}))),Rr=shuffle(s.pairs.map((p,i)=>({t:p[1],i})));let selL=null,selR=null,errors=0,left=s.pairs.length;
  const grid=h('div',{class:'match'});const colL=h('div',{class:'opts'}),colR=h('div',{class:'opts'});grid.append(colL,colR);
  const mk=(x,side)=>{const b=h('button',{class:'opt'},x.t);b.onclick=()=>{if(b.classList.contains('done'))return;
    if(side==='L'){colL.querySelectorAll('.sel').forEach(y=>y.classList.remove('sel'));selL={x,b};if(/[a-zñáéíóú]/i.test(x.t)&&s.sayLeft)say(x.t);}else{colR.querySelectorAll('.sel').forEach(y=>y.classList.remove('sel'));selR={x,b};}
    b.classList.add('sel');if(selL&&selR){/* gleiche Beschriftung zählt auch (z. B. zweimal „+ Indikativ“) */if(selL.x.i===selR.x.i||s.pairs[selL.x.i][1]===selR.x.t||s.pairs[selR.x.i][0]===selL.x.t){selL.b.classList.add('done');selR.b.classList.add('done');selL.b.classList.remove('sel');selR.b.classList.remove('sel');left--;}
      else{errors++;const a=selL.b,c=selR.b;a.classList.add('wrong');c.classList.add('wrong');setTimeout(()=>{a.classList.remove('wrong','sel');c.classList.remove('wrong','sel');},500);}
      selL=selR=null;if(!left){const st=errors===0?'ok':errors<=2?'near':'bad';el.append(h('div',{class:'fb '+(st==='ok'?'ok':st==='near'?'warn':'bad')},st==='ok'?TP('¡Perfecto! Alles beim ersten Versuch.'):errors+T(' Fehlversuch(e) – ')+(st==='near'?T('gut gemacht.'):T('schau dir die Paare noch mal an.'))));ctx.done(st,'');bar.setNext();}}};return b;};
  L.forEach(x=>colL.append(mk(x,'L')));Rr.forEach(x=>colR.append(mk(x,'R')));el.append(grid);
  const bar=actionBar(()=>{if(left){toast(T('Ordne zuerst alle Paare zu'));return false;}},ctx,{label:T('Weiter →')});el.append(bar);},
read(el,s,ctx){const plain=s.text.replace(/\{([^|}]+)\|[^}]+\}/g,'$1');
  const html=esc(s.text).replace(/\{([^|}]+)\|([^}]+)\}/g,(m,w,t)=>'<span class="gl" data-t="'+t+'">'+w+'</span>').replace(/\n\n/g,'</p><p>');
  const tr=h('div',{class:'fb ai hide',style:'margin-top:12px'},h('b',{class:'h'},T('Übersetzung')),h('div',{html:esc(s.de||'').replace(/\n\n/g,'<br><br>')}));
  const pop=h('div',{class:'glpop hide'});
  if(s.hideText){el.append(kind(s.kind||T('Hören')),h('h2',{style:'margin-top:0'},s.title),s.intro?h('p',{class:'muted'},s.intro):null,
      h('div',{class:'row',style:'margin-bottom:10px'},...reader(plain)),h('div',{class:'card reading hidetext'},h('div',{style:'font-size:40px'},'🎧'),h('div',{class:'muted'},T('Text versteckt – erst nur zuhören.'))));
    el.append(actionBar(()=>{speechSynthesis.cancel();ctx.next();return false;},ctx,{label:T('Weiter zu den Fragen →')}));return;}
  el.append(kind(s.kind||T('Lesen & Hören')),h('h2',{style:'margin-top:0'},s.title),s.intro?h('p',{class:'muted'},s.intro):null,
    h('div',{class:'row',style:'margin-bottom:10px'},...reader(plain),
      s.de?h('button',{class:'btn small ghost',onclick:()=>tr.classList.toggle('hide')},T('Übersetzung')):null),
    h('div',{class:'card reading es-t',html:'<p>'+html+'</p>'}),h('p',{class:'muted small'},T('Tipp: Tippe auf unterstrichene Wörter für die Bedeutung. Lies erst ohne Übersetzung – du verstehst mehr, als du denkst.')),tr,pop);
  el.querySelectorAll('.gl').forEach(g=>g.onclick=e=>{e.stopPropagation();pop.textContent=g.textContent+' = '+g.dataset.t;pop.classList.remove('hide');const r=g.getBoundingClientRect();pop.style.left=Math.max(8,r.left)+'px';pop.style.top=(r.bottom+6)+'px';if(!READING)say(g.textContent);});
  if(!window.__glh){window.__glh=1;document.addEventListener('click',()=>document.querySelectorAll('.glpop').forEach(p=>p.classList.add('hide')));}
  el.append(actionBar(()=>{speechSynthesis.cancel();ctx.next();return false;},ctx,{label:T('Weiter zu den Fragen →')}));},
listen(el,s,ctx){el.append(kind(T('Hören & schreiben')),h('p',{class:'q'},s.task||T('Hör zu und schreib, was du hörst.')));
  const inp=h('input',{class:'inp',autocomplete:'off',spellcheck:'false',placeholder:T('Was hörst du?')});
  el.append(h('div',{class:'row',style:'margin-bottom:14px'},spk(s.es,true),h('button',{class:'btn small',onclick:()=>say(s.es,0.55)},T('🐢 Langsam'))),inp,keys(()=>inp));
  setTimeout(()=>{say(s.es);inp.focus();},300);
  el.append(actionBar(()=>{const r=compare(inp.value,[s.es].concat(s.alt||[]),{pron:false});inp.readOnly=true;inp.classList.add(r.status==='bad'?'wrong':'right');
    feedback(el,r,Object.assign({},s,{why:s.why||(s.de?T('Bedeutung: ')+s.de:'')}),inp.value,null);if(r.status==='ok'&&s.de)el.append(h('p',{class:'muted small'},T('Bedeutung: ')+s.de));ctx.done(r.status,inp.value);},ctx));},
speak(el,s,ctx){el.append(kind(T('Nachsprechen')),h('p',{class:'q'},h('span',{class:'es-t',style:'font-size:24px'},s.es)),s.de?h('p',{class:'muted'},s.de):null,s.tip?h('p',{class:'small'},'🗣️ ',h('span',{html:s.tip})):null);
  const out=h('div',{});el.append(h('div',{class:'row'},spk(s.es,true),h('button',{class:'btn small',onclick:()=>say(s.es,0.55)},T('🐢 Langsam'))));
  el.append(recCompare(s.es));
  el.append(out,actionBar(()=>{ctx.next();return false;},ctx,{label:T('Weiter →')}));setTimeout(()=>say(s.es),300);},
dialog(el,s,ctx){el.append(kind(T('Dialog · ')+(s.place||T('Situación'))),h('h2',{style:'margin-top:0'},s.title),s.scene?h('div',{class:'scene',html:'🎬 '+s.scene}):null);
  const chat=h('div',{class:'chat'});const zone=h('div',{});el.append(chat,zone);let i=0,errors=0;const bar=actionBar(()=>{if(i<s.lines.length){toast(T('Führe zuerst den Dialog zu Ende'));return false;}},ctx,{label:T('Weiter →')});
  function npc(L){const tr=h('div',{class:'tr'+(S.settings.showTr?'':' hide')},L.de||'');chat.append(h('div',{class:'msg'},h('div',{class:'who'},L.n),h('div',{class:'row',style:'gap:8px;flex-wrap:nowrap'},spk(L.es),h('span',{class:'es-t'},L.es)),tr,
      !S.settings.showTr&&L.de?h('button',{class:'btn ghost small',style:'padding:2px 0',onclick:e=>{tr.classList.remove('hide');e.target.remove();}},T('Übersetzung')):null));say(L.es);}
  function step(){zone.innerHTML='';if(i>=s.lines.length){const st=errors===0?'ok':errors<=1?'near':'bad';zone.append(h('div',{class:'fb '+(st==='ok'?'ok':'warn')},st==='ok'?TP('¡Genial! Dialog fehlerfrei gemeistert.'):T('Dialog geschafft – mit ')+errors+T(' Fehlversuch(en).')));ctx.done(st==='bad'?'bad':st,'');bar.setNext();return;}
    const L=s.lines[i];if(!L.you){npc(L);i++;setTimeout(step,250);return;}
    zone.append(h('p',{class:'muted small',style:'margin:4px 0 8px'},L.prompt?'👉 '+L.prompt:T('👉 Was antwortest du?')));
    const box=h('div',{class:'opts'});shuffle(L.opts).forEach(o=>{const b=h('button',{class:'opt es-t'},o.es);b.onclick=()=>{if(o.ok){chat.append(h('div',{class:'msg me'},h('div',{class:'who'},T('Du')),h('span',{class:'es-t'},o.es)));say(o.es);i++;setTimeout(step,500);}
      else{errors++;b.classList.add('wrong');b.disabled=true;zone.querySelector('.fb')?.remove();zone.append(h('div',{class:'fb bad'},'💡 ',h('span',{html:o.why||T('Passt hier nicht ganz.')})));}};box.append(b);});zone.append(box);}
  el.append(bar);step();},
free(el,s,ctx){el.append(kind(T('Freies Schreiben')),h('p',{class:'q'},s.task),s.hint?h('p',{class:'muted small'},'💡 ',h('span',{html:s.hint})):null);
  const ta=h('textarea',{class:'inp',spellcheck:'false',placeholder:fmt(T('Schreib {ON} …'))});el.append(ta,keys(()=>ta));const out=h('div');el.append(out);
  const ai=h('button',{class:'btn primary'},hasAI()?T('🤖 Von ')+AIN()+T(' korrigieren lassen'):T('Musterlösung zeigen'));
  ai.onclick=async()=>{if(!ta.value.trim()){toast(T('Schreib zuerst etwas'));return;}
    if(!hasAI()){out.innerHTML='';out.append(h('div',{class:'fb ai'},h('b',{class:'h'},T('Musterlösung')),h('div',{class:'es-t'},s.model),h('p',{class:'small muted'},T('Vergleiche selbst. Mit einem Gemini-Key (Einstellungen) bekommst du hier eine echte Korrektur.'))));return;}
    ai.disabled=true;ai.textContent=AIN()+T(' korrigiert…');
    try{const r=await gemini(TEACHER+`\n\nAufgabe: ${s.task}\nLernziel/Grammatik dieser Lektion: ${s.focus||''}\nText von Jonas:\n"""${ta.value}"""\n\nKorrigiere den Text. Antworte als JSON: {"note": Zahl 1-10, "lob": "1 kurzer Satz, was gut ist", "korrigiert": "vollständig korrigierter Text", "fehler": [{"falsch":"...","richtig":"...","erklaerung":"kurz auf Deutsch"}], "tipp": "1 Tipp zum Weiterlernen"}`);
      out.innerHTML='';out.append(h('div',{class:'fb ai'},h('b',{class:'h'},T('🤖 Note: ')+r.note+'/10 · ',aiH(r.lob)),
        h('div',{class:'es-t',style:'margin:6px 0',html:diffHtmlLong(ta.value,String(r.korrigiert||'').replace(/<[^>]+>/g,''))}),
        (r.fehler||[]).length?h('ul',{style:'margin:6px 0;padding-left:18px'},(r.fehler||[]).map(f=>h('li',{},h('span',{class:'es-t'},h('del',{style:'color:var(--bad)'},aiH(f.falsch)),' → ',h('b',{style:'color:var(--ok)'},aiH(f.richtig))),' – ',aiH(f.erklaerung)))):h('div',{},T('Keine Fehler gefunden 🎉')),
        r.tipp?h('div',{class:'small',style:'margin-top:6px'},'💡 ',aiH(r.tipp)):null,h('details',{style:'margin-top:8px'},h('summary',{class:'small'},T('Musterlösung aus dem Kurs')),h('div',{class:'es-t'},s.model))));}
    catch(e){out.innerHTML='';out.append(h('div',{class:'fb bad'},AIN()+T('-Fehler: ')+e.message),h('div',{class:'fb ai'},h('b',{class:'h'},T('Musterlösung')),h('div',{class:'es-t'},s.model)));}
    ai.disabled=false;ai.textContent=T('🤖 Erneut korrigieren');};
  el.append(h('div',{class:'actions'},ai,h('span',{class:'spacer'}),h('button',{class:'btn',onclick:()=>{window.__cleanupStep&&window.__cleanupStep();ctx.next();}},T('Weiter →'))));}
};
function diffHtmlLong(a,b){return norm(a)===norm(b)?esc(b):diffHtml(a,b);}


/* ---------- shadowing ---------- */
function unitSentences(u){const out=[];const seen=new Set();const add=(es,de)=>{const k=norm(es);if(es&&!seen.has(k)&&es.split(' ').length>=2){seen.add(k);out.push({es,de:de||''});}};
  for(const l of u.lessons)for(const st of l.steps){if(st.t==='dialog')st.lines.forEach(L=>{if(!L.you)add(L.es,L.de);else{const o=L.opts.find(x=>x.ok);if(o)add(o.es,'');}});
    if(st.t==='listen'||st.t==='speak')add(st.es,st.de);if(st.t==='tr')add(String([].concat(st.a)[0]).split('|')[0],st.de);}
  return out;}
/* Aufnehmen & vergleichen (ohne Spracherkennung): Original vorlesen, danach die eigene Aufnahme */
function recCompare(es){const wrap=h('div',{class:'shadowact'});let rec=null,url=null;
  if(!(navigator.mediaDevices&&window.MediaRecorder)){wrap.append(h('p',{class:'muted small',style:'margin:0'},T('Sprich den Satz laut nach – am besten gleichzeitig mit der Stimme.')));return wrap;}
  const play=()=>{if(!url)return;speechSynthesis.cancel();unlockAudio();const ut=mkUtt(es,S.settings.rate);ut.onend=()=>setTimeout(()=>playRec(url),350);speechSynthesis.speak(ut);};
  const draw=()=>{wrap.innerHTML='';const rb=h('button',{class:'btn'+(url?'':' primary')+(rec?' recording':'')},rec?T('⏹ Stopp'):url?T('🎙 Neu'):T('🎙 Aufnehmen'));
    rb.onclick=async()=>{if(rec){rec.stop();return;}speechSynthesis.cancel();try{recMode();const st=await navigator.mediaDevices.getUserMedia({audio:true});const chunks=[];rec=new MediaRecorder(st);rec.ondataavailable=e=>chunks.push(e.data);
      rec.onstop=()=>{st.getTracks().forEach(t=>t.stop());setAudioMode();url=URL.createObjectURL(new Blob(chunks,{type:rec.mimeType}));rec=null;draw();play();};rec.start();draw();}catch(e){setAudioMode();rec=null;toast(T('Mikrofon nicht verfügbar'));}};
    if(url)wrap.append(h('div',{class:'two'},rb,h('button',{class:'btn primary',onclick:play},T('▶ Vergleichen'))));else wrap.append(rb);};
  draw();return wrap;}
/* Shadowing: Runden à 7 Sätze (Fortschritt pro Unidad in S.shadow), eine Ansicht pro Satz:
   anhören → aufnehmen → Original + eigene Aufnahme hintereinander → Selbsteinschätzung (iOS blockiert Spracherkennung in Web-Apps) */
function vShadow(m,id){const u=unitById(id);const all=unitSentences(u);const N=7;
  m.append(backTo(UW+' '+u.n,'unit/'+id),h('h1',{},T('🎧 Shadowing · ')+UW+' '+u.n),
    h('p',{class:'sub'},T('Anhören, selbst aufnehmen, dann Original und dich direkt hintereinander vergleichen.')));
  const box=h('div');m.append(box);
  if(!all.length){box.append(h('div',{class:'card'},T('Keine Sätze vorhanden.')));return;}
  S.shadow=S.shadow||{};let start=(S.shadow[id]||0)%all.length;let list=all.slice(start,start+N);if(list.length<N)list=list.concat(all.slice(0,N-list.length));
  let i=0,hide=true,rec=null,audioUrl=null;const scores=[];const canRec=!!(navigator.mediaDevices&&window.MediaRecorder);
  /* Original vorlesen, danach die eigene Aufnahme abspielen */
  const compare=c=>{if(!audioUrl)return;speechSynthesis.cancel();unlockAudio();
    const ut=mkUtt(c.es,S.settings.rate);ut.onend=()=>setTimeout(()=>playRec(audioUrl),350);speechSynthesis.speak(ut);};
  function draw(){const c=list[i];box.innerHTML='';
    const es=h('div',{class:'es'+(hide?' blur':'')},c.es);es.onclick=()=>es.classList.toggle('blur');
    const card=h('div',{class:'card shadowcard'},h('div',{class:'row',style:'justify-content:space-between'},h('span',{class:'muted small'},T('Satz ')+(i+1)+' / '+list.length),
        h('button',{class:'btn small tog'+(hide?' on':''),onclick:()=>{hide=!hide;draw();}},hide?T('👁 Text zeigen'):T('🙈 Text ausblenden'))),
      es,h('div',{class:'muted'},hide?T('(antippen zum Aufdecken)'):c.de),
      h('div',{class:'row',style:'justify-content:center;margin-top:12px'},spk(c.es,true),h('button',{class:'btn small',onclick:()=>say(c.es,0.6)},T('🐢 Langsam')),h('button',{class:'btn small',onclick:()=>{say(c.es);setTimeout(()=>say(c.es),400+c.es.length*85);}},'🔁 2×')));
    const act=h('div',{class:'shadowact'});
    if(canRec){const rb=h('button',{class:'btn'+(audioUrl?'':' primary')+(rec?' recording':'')},rec?T('⏹ Stopp'):audioUrl?T('🎙 Neu'):T('🎙 Aufnehmen'));
      rb.onclick=async()=>{if(rec){rec.stop();return;}speechSynthesis.cancel();try{recMode();const st=await navigator.mediaDevices.getUserMedia({audio:true});const chunks=[];rec=new MediaRecorder(st);rec.ondataavailable=e=>chunks.push(e.data);
        rec.onstop=()=>{st.getTracks().forEach(t=>t.stop());setAudioMode();audioUrl=URL.createObjectURL(new Blob(chunks,{type:rec.mimeType}));rec=null;draw();compare(c);};rec.start();draw();}catch(e){setAudioMode();rec=null;toast(T('Mikrofon nicht verfügbar'));}};
      if(audioUrl)act.append(h('div',{class:'two'},rb,h('button',{class:'btn primary',onclick:()=>compare(c)},T('▶ Vergleichen'))));else act.append(rb);}
    else act.append(h('p',{class:'muted small',style:'margin:0'},T('Sprich den Satz laut nach – am besten gleichzeitig mit der Stimme.')));
    /* Selbsteinschätzung: weiter zum nächsten Satz (Nochmal bleibt beim Satz) */
    const rate=(v)=>{scores[i]=v;if(v===0){audioUrl=null;draw();setTimeout(()=>say(c.es),150);return;}audioUrl=null;if(i<list.length-1){i++;draw();setTimeout(()=>say(list[i].es),150);}else finish();};
    const rates=(audioUrl||!canRec)?h('div',{},h('div',{class:'muted small',style:'margin:10px 0 6px'},T('Wie war’s?')),h('div',{class:'rates three'},
      [[0,T('Nochmal'),'var(--bad)'],[60,T('Fast'),'var(--gold)'],[100,T('Passt ✓'),'var(--ok)']].map(([v,l,col])=>h('button',{class:'btn rate',style:'color:'+col,onclick:()=>rate(v)},h('b',{},l))))):null;
    card.append(act,rates);
    box.append(card,rates?null:h('div',{class:'actions'},h('button',{class:'btn',disabled:i===0,onclick:()=>{i--;audioUrl=null;draw();}},T('← Zurück')),
      h('button',{class:'btn',onclick:()=>{audioUrl=null;if(i<list.length-1){i++;draw();setTimeout(()=>say(list[i].es),150);}else finish();}},i<list.length-1?T('Überspringen →'):T('Runde beenden ✓'))));}
  function finish(){S.shadow[id]=(start+list.length)%all.length;markDay('shadow');const sc=scores.filter(x=>x!=null);const good=sc.filter(x=>x===100).length;box.innerHTML='';
    box.append(h('div',{class:'card',style:'text-align:center;padding:30px'},h('div',{style:'font-size:44px'},'🎧'),h('h1',{},TP('¡Bien hecho!')),
      h('p',{class:'sub'},list.length+T(' Sätze geübt')+(sc.length?T(' · ')+good+T(' klangen gleich'):'')),
      h('div',{class:'endbtns'},h('button',{class:'btn primary',onclick:()=>{box.innerHTML='';m.innerHTML='';vShadow(m,id);}},T('Nächste 7 Sätze →')),h('button',{class:'btn ghost',onclick:()=>goBack('unit/'+id)},T('Fertig')))));}
  draw();setTimeout(()=>say(list[0].es),300);}

/* ---------- interleaved review ---------- */
/* ---------- Zahlen, Uhrzeit, Datum, Preise: jedes Mal neue Werte (Ref N|typ|wert → im Fehlerheft wiederholbar) ---------- */
/* Zahlen & Uhrzeit: wie man es in der Lernsprache sagt, steht im Paket (LANG.numbers: word, time, date, price, unlock) */
const NUMS=LANG.numbers||null;const numEs=n=>NUMS.word(n);const horaEs=(h,m)=>NUMS.time(h,m);
const rint=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
/* freigeschaltet nach Kursfortschritt: Zahlen ab U1, große Zahlen ab U2 L3, Uhrzeit & Preise ab U4, Datum ab U6 */
/* gelernt = Lektion mindestens einmal gemacht (Runde 1) oder Abschlusstest der Unidad bestanden */
const learnedL=(uid,lid)=>rnd(uid+'.'+lid)>=1||!!S.checks[uid]?.pass;
/* Zahlen-Aufgaben nach gelernten Lektionen: U1 L2 Zahlen 0–10 · U2 L3 bis 20 & große Zahlen · U4 L3 Uhrzeit · U4 L4 Preise · U6 L2 Datum. all = auch Neues */
function numKinds(all){const K=[];if(!NUMS)return K;const UL=NUMS.unlock||{};const L=k=>all||!UL[k]||learnedL(UL[k][0],UL[k][1]);
  if(L('small'))K.push('numw','numl');if(L('big'))K.push('bigw','bigl');if(L('time'))K.push('time','timel');if(L('price'))K.push('price');if(L('date'))K.push('date');return K;}
let NUM_ALL=false;
function numVal(kind){const t20=(NUMS.unlock||{}).to20;if(kind==='numw'||kind==='numl')return rint(0,NUM_ALL||!t20||learnedL(t20[0],t20[1])?20:10)+'';if(kind==='bigw'||kind==='bigl')return(Math.random()<.5?rint(21,99):Math.random()<.6?rint(100,999):rint(1000,2100))+'';
  if(kind==='time'||kind==='timel')return rint(0,23)+':'+String(rint(0,11)*5).padStart(2,'0');if(kind==='date')return rint(1,28)+'.'+rint(1,12);
  return rint(1,40)+','+String(rint(0,19)*5).padStart(2,'0');}
const near=(n,max)=>{const c=new Set([n+10,n-10,n+1,n-1,+String(n).split('').reverse().join(''),n%10===6?n+1:n%10===7?n-1:n+20]);if(Math.floor(n/10)===6)c.add(n+10);if(Math.floor(n/10)===7)c.add(n-10);
  return shuffle([...c].filter(x=>x>=0&&x<=max&&x!==n)).slice(0,2);};
function numStep(kind,v){
  if(kind==='numw'||kind==='bigw')return{t:'tr',kind:T('Zahlen'),de:fmt(T('Schreib die Zahl {ON}: '))+v,a:[numEs(+v)]};
  if(kind==='numl'||kind==='bigl'){const n=+v;return{t:'mc',kind:T('Zahlen hören'),q:T('Welche Zahl hörst du?'),say:numEs(n),autoSay:true,opts:[v,...near(n,n<21?20:2100).map(String)],a:0};}
  const[hh,mm]=v.split(':').map(Number);
  if(kind==='time')return{t:'tr',kind:T('Uhrzeit'),de:T('Wie spät ist es? 🕒 ')+v,a:[horaEs(hh,mm).join('|')]};
  if(kind==='timel'){const o=new Set([v]);while(o.size<3){const d=rint(-1,1)*60+rint(-2,2)*15;const t=((hh*60+mm+d)%1440+1440)%1440;o.add(Math.floor(t/60)+':'+String(t%60).padStart(2,'0'));}
    return{t:'mc',kind:T('Uhrzeit hören'),q:T('Wie spät ist es?'),say:horaEs(hh,mm)[0]+'.',autoSay:true,opts:[...o].map(x=>x.replace(/^(\d+):/,(a,b)=>(+b%12||12)+':')),a:0};}
  if(kind==='date'){const[d,mo]=v.split('.').map(Number);return{t:'tr',kind:T('Datum'),de:T('Wie sagt man das Datum? 📅 ')+d+'. '+[T('Januar'),T('Februar'),T('März'),T('April'),T('Mai'),T('Juni'),T('Juli'),T('August'),T('September'),T('Oktober'),T('November'),T('Dezember')][mo-1],
    a:[NUMS.date(d,mo).join('|')]};}
  const[e,c]=v.split(',').map(Number);const say=NUMS.price(e,c);
  const fmtP=(E,C)=>E+','+String(C).padStart(2,'0')+' €';const o=new Set([fmtP(e,c)]);
  for(const[E,C]of shuffle([[e,(c+50)%100],[e+10,c],[Math.max(1,e-10),c],[e,c===0?5:0],[+String(e).split('').reverse().join('')||e+2,c]]))if(o.size<3)o.add(fmtP(E,C));
  return{t:'mc',kind:T('Preise hören'),q:T('Wie viel kostet es?'),say,autoSay:true,opts:[...o],a:0};}
function numItems(n,all){NUM_ALL=!!all;const K=numKinds(all);if(!K.length)return[];return[...Array(n)].map(()=>{const k=K[Math.floor(Math.random()*K.length)];const v=numVal(k);return{s:numStep(k,v),ref:'N|'+k+'|'+v};});}
/* Umschalter „Nur Gelerntes | Alles“ (Zahlen & Verben), gemerkt in S.settings */
const learnSeg=(key,re)=>h('div',{class:'seg two',style:'margin:4px 0 14px'},[[false,T('Nur Gelerntes')],[true,T('Alles (auch Neues)')]].map(([v,l])=>h('button',{class:!!S.settings[key]===v?'on':'',onclick:()=>{S.settings[key]=v;save();re();}},h('b',{},l))));
function vNum(m){const all=!!S.settings.numAll;m.innerHTML='';m.append(backTo(T('Bibliothek'),'ref'),h('h1',{},T('Zahlen & Uhrzeit')),h('p',{class:'sub'},T('Jedes Mal neue Werte – 15 Aufgaben.')),learnSeg('numAll',()=>vNum(m)));
  const K=numKinds(all);const NAMES=[[['numw','numl'],(()=>{const t=(NUMS&&NUMS.unlock||{}).to20;return !t||learnedL(t[0],t[1])||all;})()?T('Zahlen bis 20'):T('Zahlen bis 10')],[['bigw','bigl'],T('große Zahlen')],[['time','timel'],T('Uhrzeit')],[['price'],T('Preise')],[['date'],T('Datum')]];
  if(!K.length){m.append(h('div',{class:'card'},(()=>{const sm=(NUMS&&NUMS.unlock||{}).small||['',''];const u=unitById(sm[0]);return T('Zahlen kommen in {U}, Lektion {L} – danach geht es hier los. Oder oben „Alles“ wählen.').replace('{U}',UW+' '+(u?u.n:'')).replace('{L}',String(sm[1]).replace(/\D/g,''));})()));return;}
  m.append(h('div',{class:'card',style:'padding:14px 16px'},h('div',{class:'kind',style:'margin:0 0 8px'},T('Dabei')),h('div',{class:'chips'},NAMES.map(([ks,n])=>{const on=ks.some(k=>K.includes(k));return h('span',{class:'chip'+(on?'':' done'),style:on?'':'opacity:.45'},(on?'✓ ':'🔒 ')+n);}))),
    h('div',{style:'margin-top:14px'},pauseBtn('num',()=>goN()),h('button',{class:'btn'+(pauseGet('num')?'':' primary'),style:'width:100%;min-height:48px',onclick:()=>{pauseDel('num');goN();}},T('15 Aufgaben üben →'))));
  function goN(direct){m.innerHTML='';play(m,{title:T('Zahlen & Uhrzeit · jedes Mal neue Werte'),steps:numItems(15,all),pk:'num',onBack:()=>direct===true?goBack('home'):vNum(m),onDone:()=>({label:T('Noch eine Runde →'),fn:goN})});}
  if(RESUME==='num'){RESUME=null;goN(true);}}

/* Gemischte Wiederholung: Aufgaben der letzten 3 Runden werden gemieden (S.mixSeen), dazu ein paar frisch erzeugte Vokabelaufgaben */
function mixSteps(n){const pool=[],words=[];const seen=new Set(S.mixSeen||[]);
  for(const u of COURSE.units)for(const l of u.lessons||[]){const r=S.lessons[u.id+'.'+l.id];if(!r?.done||l.freq)continue;
  const age=Math.max(1,(Date.now()-new Date(r.date+'T12:00:00'))/864e5);
  lessonWords(l).forEach(w=>words.push([u,w]));
  l.steps.forEach((st,i)=>{if(['mc','gap','tr','conj','order','listen'].includes(st.t)){const ref=u.id+'|'+l.id+'|'+i;pool.push({s:st,ref,unit:u,w:Math.random()*Math.log(1+age)+Math.random()-(seen.has(ref)?5:0)});}});}
  const nv=pool.length?Math.min(Math.round(n/5),words.length):Math.min(n,words.length);
  const ex=pool.sort((a,b)=>b.w-a.w).slice(0,n-nv);
  const voc=shuffle(words).filter(([u,w])=>!seen.has('W|'+u.id+'|'+w[0])).concat(shuffle(words)).slice(0,nv).map(([u,w])=>{const it=vocabItem(u,w,['mc','mcde','tr','listen'][Math.floor(Math.random()*4)]);it.unit=u;return it;});
  const out=shuffle(ex.concat(voc).slice(0,n-Math.min(2,numKinds().length?2:0)).concat(numItems(2)));
  S.mixSeen=out.map(x=>x.ref.startsWith('W|')?x.ref.split('|').slice(0,2).concat(x.ref.split('|').slice(3)).join('|'):x.ref).concat(S.mixSeen||[]).slice(0,3*n);
  return out;}
function vMix(m){const steps=mixSteps(15);
  if(steps.length<5){m.append(h('h1',{},T('Gemischte Wiederholung')),h('div',{class:'card'},T('Schließ zuerst ein paar Lektionen ab – dann mische ich hier Aufgaben aus allen bisherigen Lektionen durcheinander.')));return;}
  play(m,{title:T('Gemischte Wiederholung · 15 Aufgaben aus allen ')+UWS+'',steps,pk:'mix',onBack:()=>goBack('home'),onDone:()=>{S.lastMix=today();save();return null;}});}

/* ---------- Nachschlagen: Wörterbuch & Grammatik ---------- */
const storyFor=st=>unitById(st.after);
const storyOpen=st=>{const u=storyFor(st);return !u||lessonPct(u)>0||S.checks[u.id]?.pass||(unitStatus(u)&&unitStatus(u)!==T('neu'));};
function nextStory(){return STORIES.find(st=>storyOpen(st)&&!S.stories?.[st.id]);}
const levelSeg=(cur,base,cnt)=>h('div',{class:'stick',style:'margin-top:4px;margin-bottom:12px'},levelTabs(cur,base,Ls=>Ls.reduce((a,L)=>a+parseInt(cnt(L))||0,0)+String(cnt(Ls[0])).replace(/^\d+/,'')));
const curLevel=()=>{const n=nextLesson();return n?unitLevel(n.u):'A1';};
function vRef(m,tab,lv){lv=lvFirst(LEVELS.find(L=>L.id===lv)?lv:curLevel());
  if(!tab){const nNew=STORIES.filter(st=>storyOpen(st)&&!S.stories?.[st.id]).length;
    m.append(h('h1',{},T('Bibliothek')),h('p',{class:'sub'},T('Lesen, hören, nachschlagen.')),
      tiles(STORIES.length?mtile('📖',T('Geschichten'),LANG.storySeries?T('Serie „')+LANG.storySeries+'“':T('Zum Hören & Lesen'),()=>go('ref/s'),nNew?nNew+T(' neu'):null):null,mtile('🔎',T('Wörterbuch'),T('Alle Wörter suchen'),()=>go('ref/w')),
        mtile('📄',T('Grammatik'),T('Alle Zusammenfassungen'),()=>go('ref/g')),LANG.conjugate?mtile('🔁',T('Verben'),T('Konjugations-Trainer'),()=>go('verbs')):null,NUMS?mtile('🔢',T('Zahlen & Uhrzeit'),T('Jedes Mal neue Werte'),()=>go('num')):null,(window.READINGS||[]).length?mtile('📰',T('Lesetexte'),T('C1 & C2 · ')+(window.READINGS||[]).length+T(' Texte'),()=>go('ref/r')):null));return;}
  stickMain(m,'stickpage');
  m.append(backTo(T('Bibliothek'),'ref'),h('h1',{},{s:T('Geschichten'),w:T('Wörterbuch'),g:T('Grammatik'),r:T('Lesetexte')}[tab]||T('Bibliothek')));
  if(tab==='s'){const S2=S.stories||{};
    m.append(h('p',{class:'sub'},(LANG.storySeries?'„'+LANG.storySeries+'“ – ':'')+(T(LANG.storyIntro||'')||'')+T(' Jede Geschichte nutzt nur Grammatik bis zur angegebenen ')+UW+T('. Tipp: erst nur hören, dann lesen.')));
    m.append(levelSeg(lv,'ref/s',L=>STORIES.filter(st=>unitLevel(storyFor(st))===L.id).length+T(' Gesch.')),h('div',{class:'grid',style:'gap:8px'},STORIES.filter(st=>sameLv(unitLevel(storyFor(st)),lv)).map(st=>{const done=S2[st.id];const open=storyOpen(st);
        return h('div',{class:'lesson'+(done?' done':''),onclick:()=>go('story/'+st.id)},h('div',{class:'ic'},done?'✓':'📖'),h('div',{style:'flex:1;min-width:0'},h('div',{class:'lt'},st.title),h('div',{class:'ld'},st.sub+T(' · ab ')+UW+' '+storyFor(st).n)),
          done?h('span',{class:'pill ok'},Math.round(done.score*100)+' %'):open?h('span',{class:'pill acc'},T('neu')):h('span',{class:'pill'},T('später')));})));return;}
  if(tab==='r'){const D=S.readings||{};const L=lv==='C2'?'C2':'C1';const R=(window.READINGS||[]).filter(r=>r.level===L);
    m.append(h('p',{class:'sub'},T('Verschiedene Textsorten – mit antippbaren Wörtern, Vorleser, Übersetzung und Fragen.')),
      h('div',{class:'seg two'},['C1','C2'].map(x=>h('button',{class:x===L?'on':'',onclick:()=>go('ref/r/'+x)},h('b',{},x),h('span',{},(window.READINGS||[]).filter(r=>r.level===x).length+T(' Texte'))))),
      h('div',{class:'grid',style:'gap:8px;margin-top:12px'},R.map(r=>{const u=unitById(r.after);const done=D[r.id];const open=!u||lessonPct(u)>0||S.checks[u.id]?.pass||(unitStatus(u)&&unitStatus(u)!==T('neu'));
        return h('div',{class:'lesson'+(done?' done':''),onclick:()=>go('reading/'+r.id)},h('div',{class:'ic'},done?'✓':r.level),h('div',{style:'flex:1;min-width:0'},h('div',{class:'lt'},r.title),h('div',{class:'ld'},T(r.kind)+(u?T(' · ab ')+UW+' '+u.n:''))),
          done?h('span',{class:'pill ok'},Math.round(done.score*100)+' %'):open?h('span',{class:'pill acc'},T('neu')):h('span',{class:'pill'},T('später')));})));return;}
  if(tab==='g'){m.append(levelSeg(lv,'ref/g',L=>COURSE.units.filter(u=>unitLevel(u)===L.id).length+T(' Unid.')),h('div',{class:'grid',style:'gap:8px'},COURSE.units.filter(u=>sameLv(unitLevel(u),lv)&&u.resumen).map(u=>
      h('div',{class:'lesson lrow',onclick:()=>go('resumen/'+u.id)},h('div',{class:'ic'},u.n),h('div',{style:'flex:1;min-width:0'},h('div',{class:'lt'},u.title),h('div',{class:'ld'},u.goals.join(' · ')))))));return;}
  const all=[];const seen=new Set();for(const u of COURSE.units)for(const w of allUnitWords(u))if(!seen.has(w[0])){seen.add(w[0]);all.push([w,u]);}
  let mine=!!S.settings.dictMine;
  const inp=h('input',{class:'inp',type:'search',placeholder:fmt(T('Suchen – {L} oder {EX}')),autocomplete:'off',spellcheck:'false',autocorrect:'off',autocapitalize:'off'});
  const tog=h('button',{class:'chip'+(mine?' on':''),onclick:()=>{mine=!mine;S.settings.dictMine=mine;save(true);tog.classList.toggle('on',mine);draw();}},h('span',{},'⭐'),h('span',{},T('Nur meine Wörter')));
  const info=h('div',{class:'muted small',style:'margin:8px 0'});const out=h('div',{class:'vlist'});
  const draw=()=>{const q=strip(inp.value.toLowerCase().trim());out.innerHTML='';
    const hits=all.filter(([w,u])=>(q?strip((w[0]+' '+w[1]).toLowerCase()).includes(q):sameLv(unitLevel(u),lv))&&(!mine||S.srs[w[0]]));
    info.textContent=(q?hits.length+T(' Treffer in allen Stufen'):hits.length+T(' Wörter in ')+LEVELS.find(L=>L.id===lv).label)+(mine?T(' · nur gesammelte'):'');
    out.append(...hits.slice(0,300).map(([w,u])=>h('div',{class:'vrow drow'},spk(w[0]),picEl(w[0],w[2])||h('span',{class:'pic'}),h('div',{class:'dw'},h('div',{class:'es'},artW(w[0])),h('div',{class:'de'},w[1])),h('span',{class:'pill'},'U'+u.n))));
    if(!hits.length)out.append(h('p',{class:'muted'},mine?T('Noch keine gesammelten Wörter hier – sie kommen mit den Lektionen.'):T('Nichts gefunden.')));};
  inp.oninput=draw;
  m.append(inp,levelSeg(lv,'ref/w',L=>{const n=all.filter(([,u])=>unitLevel(u)===L.id).length;return n+T(' W.');}),h('div',{class:'row'},tog),info,out,h('p',{class:'muted small',style:'margin-top:16px'},T('Lektionen „Häufige Wörter“: Häufigkeit aus FrequencyWords (OpenSubtitles, CC BY-SA 4.0), Übersetzungen aus WikDict/Wiktionary (CC BY-SA 3.0), bearbeitet.')));draw();}
/* Geschichte: 1) nur hören (Text versteckt) → Fragen ohne Auflösung; alles richtig = fertig.
   2) sonst mit Text noch mal hören/lesen → nur die falschen Fragen wiederholen (mit Auflösung). */
function vStory(m,id){const st=STORIES.find(x=>x.id===id);if(!st)return vRef(m,'s');const u=storyFor(st);
  if(!storyOpen(st))m.append(h('div',{class:'fb warn',style:'margin-bottom:12px'},T('Diese Geschichte passt ab ')+UW+' '+u.n+T(' – vielleicht kommt dir noch nicht alles bekannt vor. Lies sie trotzdem, wenn du magst!')));
  const qsteps=(idx,hide)=>shuffle(idx).map(i=>({s:Object.assign(storyQ(st.qs[i]),hide?{noReveal:true}:{}),ref:'S|'+st.id+'|'+i}));
  const finish=score=>{S.stories=S.stories||{};const p=S.stories[st.id];S.stories[st.id]={date:today(),score:Math.max(p?.score||0,score)};save();const nx=nextStory();
    return nx?{label:T('Nächste Geschichte →'),fn:()=>go('story/'+nx.id)}:{label:T('Zur Bibliothek →'),fn:()=>go('ref/s')};};
  const wrong=[];let first=1;
  play(m,{title:T('Geschichte · ')+st.title,noRetry:true,noPrompt:true,
    steps:[{s:{t:'read',hideText:true,kind:T('Geschichte · ')+levelOf(u).title,title:st.title,intro:T('Erst nur hören – der Text ist versteckt. Hör so oft du willst, dann kommen Fragen.'),text:st.text},ref:'S|'+st.id+'|r'}].concat(qsteps(st.qs.map((_,i)=>i),true)),
    onAnswer:(it,status)=>{if(status==='bad'){const i=+it.ref.split('|')[2];if(!wrong.includes(i))wrong.push(i);}},
    onBack:()=>goBack('ref/s'),
    onDone:(r)=>{first=r.score;if(!wrong.length)return finish(r.score);
      return{label:T('Mit Text anhören & ')+wrong.length+T(' Fragen wiederholen →'),fn:()=>{m.innerHTML='';
        play(m,{title:T('Geschichte · ')+st.title+T(' · mit Text'),steps:[{s:{t:'read',kind:T('Jetzt mit Text'),title:st.title,intro:T('Hör noch einmal zu und lies mit. Danach kommen die Fragen, die noch nicht geklappt haben.'),text:st.text,de:st.de},ref:'S|'+st.id+'|r'}].concat(qsteps(wrong,false)),
          mistakeMode:true,onBack:()=>goBack('ref/s'),onDone:()=>finish(first)});}};}});}
/* Lesetext C1/C2: lesen (mit Vorleser, antippbaren Wörtern, Übersetzung) → Fragen; Fehler-Ref R|id|i */
function vReading(m,id){const r=(window.READINGS||[]).find(x=>x.id===id);if(!r)return vRef(m,'r');
  const steps=[{s:{t:'read',kind:T(r.kind)+' · '+r.level,title:r.title,intro:r.sub,text:r.text,de:r.de},ref:'R|'+r.id+'|r'}].concat(shuffle(r.qs.map((q,i)=>({s:storyQ(q),ref:'R|'+r.id+'|'+i}))));
  play(m,{title:T('Lesetext · ')+r.title,steps,onBack:()=>goBack('ref/r'),
    onDone:(res)=>{S.readings=S.readings||{};const p=S.readings[r.id];S.readings[r.id]={date:today(),score:Math.max(p?.score||0,res.score)};save();
      const R=window.READINGS||[];const nx=R.find(x=>!S.readings[x.id]);return nx?{label:T('Nächster Text →'),fn:()=>go('reading/'+nx.id)}:{label:T('Zu den Lesetexten →'),fn:()=>go('ref/r')};}});}
/* ---------- Verben-Trainer: Konjugationen aus allen '+UWS+', die du schon angefangen hast ---------- */
/* Verben-Trainer: Präsens zu Verben aus den Vokabellisten angefangener Unidades (Formen bildet LANG.conjugate – man muss die Regel selbst anwenden)
   + andere Zeitformen aus gelernten Lektionen. Fehler-Ref V|unit|infinitiv. „Alles“ = ganzer Kurs. */
const startedU=u=>Object.keys(S.lessons).some(k=>k.startsWith(u.id+'.'))||!!S.checks[u.id]?.pass;
function verbStep(u,inf,de){if(!LANG.conjugate)return null;const r=LANG.conjugate(inf);if(!r)return null;/* Hinweis aus dem Konjugations-Generator stückweise übersetzen (Bausteine in LANG.whyParts) */
  let why=r.why;if(UI!=='de')(LANG.whyParts||[]).forEach(p=>{why=why.split(p).join(T(p));});
  return{t:'conj',verb:inf,de:VOC_DE[inf]!=null?trc(VOC_DE[inf]):de,forms:r.forms,tense:T('Präsens'),why};}
function verbPool(all){const gen=[],seen=new Set(),tables=[];
  for(const u of COURSE.units){const st=all||startedU(u);
    for(const l of u.lessons){if(st&&(!l.freq||all||rnd(u.id+'.'+l.id)>=1))for(const s of l.steps)if(s.t==='vocab')for(const [es,de] of s.items){const w=es.trim();if(seen.has(w)||!(LANG.infinitive||/(?!)/).test(w)||!(LANG.verbMeaning||/n\b/).test(String(de).split(',')[0]))continue;
        const st2=verbStep(u,w,de);if(st2){seen.add(w);gen.push({s:st2,ref:'V|'+u.id+'|'+w});}}
      if(all||learnedL(u.id,l.id))l.steps.forEach((s,i)=>{if(s.t==='conj'&&s.tense)tables.push({s,ref:u.id+'|'+l.id+'|'+i});});}}
  return{gen,tables};}
function verbRound(all){const{gen,tables}=verbPool(all);const t=shuffle(tables).slice(0,gen.length?2:8);return shuffle(shuffle(gen).slice(0,8-t.length).concat(t));}
function vVerbs(m){const all=!!S.settings.verbsAll;m.innerHTML='';m.append(backTo(T('Bibliothek'),'ref'));const{gen,tables}=verbPool(all);
  m.append(h('h1',{},T('Verben-Trainer')),learnSeg('verbsAll',()=>vVerbs(m)),
    h('p',{class:'sub'},(all?T('Verben aus dem ganzen Kurs'):T('Verben aus den Unidades, die du angefangen hast').replace(/Unidades/,LANG.units))+' ('+gen.length+'). '+T(LANG.verbHint||'Du siehst nur den Infinitiv – überleg selbst: -ar, -er oder -ir? Stammwechsel? Bei Fehlern zeige ich das Muster.')+(tables.length?' '+T('Dazu andere Zeitformen aus gelernten Lektionen.'):'')));
  if(!gen.length&&!tables.length){m.append(h('div',{class:'card'},T('Noch keine Verben – fang eine Unidad an. Oder oben „Alles“ wählen.').replace(/Unidade?/,UW)));return;}
  const go8=direct=>{m.innerHTML='';play(m,{title:T('Verben-Trainer · 8 Verben'),steps:verbRound(all),pk:'verbs',onBack:()=>direct===true?goBack('home'):vVerbs(m),onDone:()=>({label:T('Noch 8 Verben →'),fn:go8})});};
  if(RESUME==='verbs'){RESUME=null;return go8(true);}
  m.append(pauseBtn('verbs',go8),h('button',{class:'btn'+(pauseGet('verbs')?'':' primary'),style:'width:100%;min-height:48px',onclick:()=>{pauseDel('verbs');go8();}},T('8 Verben üben →')));}

/* ---------- vocab trainer ---------- */
/* Stand einer Karte: 0 neu · 1 lernend (< 7 Tage) · 2 gefestigt (7–20) · 3 sicher (≥ 21 Tage Abstand) */
const cardStage=c=>{srsInit(c);const iv=c.ivl||0;return!(c.reps||c.box)?0:iv<7?1:iv<21?2:3;};
/* Vokabel-Statistik: fällig in den nächsten 7 Tagen, Stand der Karten, Verlauf (S.vlog), schwierigste Wörter */
function vVocabStats(m,all,src){const td=today();m.append(backTo(T('Vokabeln'),'vocab'),h('h1',{},T('Vokabel-Statistik')));
  /* ausgeblendete Wörter: eigener Knopf am Ende, passend zum Reiter (Alle | Kurs | Meine Wörter) */
  const hidBtn=()=>{const nh=hiddenOf(src).length;m.append(h('button',{class:'btn',style:'width:100%;margin-top:12px',onclick:()=>go('vocab/hidden'+(src?'/'+src:''))},T('Ausgeblendete Wörter')+' ('+nh+')'));};
  /* Umschalter Alle | Kurs | Meine Wörter – nur wenn es eigene Wörter in der Wiederholung gibt */
  if(myLists().length){src=src==='kurs'||src==='mine'?src:'';m.append(h('div',{class:'seg',style:'grid-template-columns:repeat(3,1fr);margin-bottom:12px'},[['',T('Alle')],['kurs',T('Kurs')],['mine',T('Meine Wörter')]].map(([k,l])=>h('button',{class:k===src?'on':'',onclick:()=>go('vocab/stats'+(k?'/'+k:''))},h('span',{},l)))));
    if(src)all=all.filter(c=>src==='mine'?isMy(c):!isMy(c));
    if(src==='mine'){
      /* Übersicht eigene Listen (freies Üben): Stufe pro Wort – neu (nie geübt), wackelig (zuletzt falsch), geübt, sicher (Abstand ≥ 20 Tage) */
      const pst=c=>!c.pl?0:c.pw?1:(c.ps||0)>=3?3:2;const PCOL=['var(--muted)','var(--bad)','var(--gold)','var(--ok)'];const PLAB=[T('neu'),T('wackelig'),T('geübt'),T('sicher')];
      const cnt=cs=>{const r=[0,0,0,0];cs.forEach(c=>r[pst(c)]++);return r;};
      const sbar=r=>{const t=r.reduce((a,b)=>a+b,0)||1;return h('div',{class:'pbar'},r.map((v,i)=>v?h('i',{style:'width:'+(100*v/t)+'%;background:'+PCOL[i]}):null));};
      const Ls=myLists();const tot=cnt(Ls.flatMap(l=>myActive(l.id)));
      m.append(h('div',{class:'stattiles'},tot.map((n,i)=>h('div',{class:'card stat'},h('div',{class:'n',style:'color:'+PCOL[i]},n),h('div',{class:'l'},PLAB[i])))),
        h('p',{class:'muted small',style:'margin:4px 2px 12px'},T('Freies Üben: sicher = nächster Abstand ab 20 Tagen · wackelig = zuletzt falsch')));
      Ls.forEach(l=>{const cs=myActive(l.id);const r=cnt(cs);const due=myDueOf(cs).length;
        m.append(h('div',{class:'card statcard mystat',onclick:()=>go('vocab/mine/'+l.id)},
          h('div',{class:'row',style:'justify-content:space-between;flex-wrap:nowrap;gap:8px'},h('div',{style:'min-width:0'},h('b',{},l.name),
              h('div',{class:'muted small'},cs.length+(cs.length===1?T(' Wort'):T(' Wörter'))+(l.daily===false?T(' · nur gezielt'):T(' · in der Wiederholung')))),
            cs.length?h('button',{class:'btn small primary',style:'flex:none',onclick:e=>{e.stopPropagation();myRun(cs);}},'▶ '+(due?due+T(' dran'):T('Lernen'))):null),
          cs.length?sbar(r):null,
          cs.length?h('div',{class:'plegend'},r.map((v,i)=>h('span',{},h('i',{style:'background:'+PCOL[i]}),v+' '+PLAB[i]))):null,
          h('div',{class:'small',style:'margin-top:6px'},myPractice(cs)||T('Noch nicht frei geübt'))));});
      if(!all.length)return hidBtn();m.append(h('div',{class:'kind',style:'margin:14px 2px 6px'},T('In der täglichen Wiederholung')));}}
  const dueNow=new Set(dueCards());
  if(!all.length){m.append(h('div',{class:'card'},T('Noch keine Wörter gesammelt.')));return hidBtn();}
  const wdn=d=>[T('So'),T('Mo'),T('Di'),T('Mi'),T('Do'),T('Fr'),T('Sa')][new Date(d+'T12:00:00').getDay()];
  const bars=(rows,title,note)=>{const mx=Math.max(1,...rows.map(r=>r.v));
    return h('div',{class:'card statcard'},h('div',{class:'row',style:'justify-content:space-between'},h('div',{class:'kind',style:'margin:0'},title),note?h('span',{class:'muted small'},note):null),
      h('div',{class:'sbars',style:'grid-template-columns:repeat('+rows.length+',1fr)'},rows.map(r=>h('div',{class:'sbar'+(r.now?' now':''),title:r.tip},h('span',{class:'sv'},r.v||''),h('div',{class:'sb'},h('i',{style:'height:'+Math.round(100*r.v/mx)+'%'})),h('span',{class:'sl'},r.l)))));};
  const due7=[...Array(7)].map((_,i)=>{const d=addDays(td,i);const v=all.filter(c=>i===0?dueNow.has(c):c.due===d).length;return{v,l:i===0?T('heute'):i===1?T('morgen'):wdn(d),now:i===0,tip:(i===0?T('heute (inkl. überfällig)'):d)+': '+v+T(' Karten')};});
  const log=S.vlog||{};const days=[...Array(14)].map((_,i)=>addDays(td,i-13));const hist=days.map((d,i)=>({v:log[d]||0,l:i%2===1?wdn(d):'',now:d===td,tip:d+': '+(log[d]||0)+T(' bewertet')}));
  const st=[0,0,0,0];all.forEach(c=>{st[cardStage(c)]++;});
  /* schwierig = mind. 3× „Nochmal“ (ag) oder mind. 2× zurückgefallen (lapses: war schon gelernt, dann wieder auf 0) */
  const hs=c=>(c.ag||0)+2*(c.lapses||0);const hard=all.filter(c=>(c.ag||0)>=3||(c.lapses||0)>=2).sort((a,b)=>hs(b)-hs(a)||((a.ease||2.5)-(b.ease||2.5))).slice(0,4);
  m.append(bars(due7,T('Fällig – nächste 7 Tage'),T('Summe: ')+due7.reduce((a,r)=>a+r.v,0)),
    h('div',{class:'stattiles'},[[st[0],T('neu')],[st[1],T('lernend')],[st[2],T('gefestigt')],[st[3],T('sicher')]].map(([n,l])=>h('div',{class:'card stat'},h('div',{class:'n'},n),h('div',{class:'l'},l)))),
    h('p',{class:'muted small',style:'margin:4px 2px 12px'},T('Abstand: lernend < 7 Tage · gefestigt 7–20 · sicher ≥ 21')),
    Object.keys(log).length?bars(hist,T('Wiederholt – letzte 14 Tage'),T('Ø ')+Math.round(hist.reduce((a,r)=>a+r.v,0)/14)+T(' pro Tag')):null,
    hard.length?h('div',{class:'card statcard'},h('div',{class:'kind',style:'margin:0 0 6px'},T('Schwierigste Wörter')),
      h('div',{class:'hardlist'},hard.map(c=>h('div',{class:'hardrow'},spk(c.es),h('span',{class:'es'},artW(c.es)),h('span',{class:'muted small'},trc(c.de)),h('span',{class:'pill warn'},(c.ag||0)>=(c.lapses||0)?c.ag+'× '+T('Nochmal'):c.lapses+'× '+T('zurückgefallen')))))):null);
  /* ausgeblendete Wörter: eigener Knopf am Ende der Statistik */
  hidBtn();}
function newListId(){return 'l'+Date.now().toString(36);}
/* eigene Wörter üben: zufällige Auswahl (max. 20), pro Wort zufällig Karte (beide Richtungen), Tippen oder Hören – ohne Einfluss auf die Wiederholungsplanung */
/* Auswahl gewichtet: oft falsch, zuletzt falsch, lange nicht oder nie geübt → häufiger dran (gewichtete Zufallsauswahl) */
function myWeight(c){const n=(c.pk||0)+(c.pn||0);const err=((c.pn||0)+1)/(n+2);const age=c.pl?Math.min(1,dayDiff(c.pl,today())/14):1;return 0.3+err*2+(c.pw?1:0)+age;}
/* freier Abstand eigener Wörter: Nochmal gleich, Schwer 1 Tag, Gut nach Stufe 3/5/10/20/40/80 Tage, Leicht eine Stufe weiter */
const PSTEP=[3,5,10,20,40,80];
function pNext(k,r){const ps=k.ps||0;return r==='again'?0:r==='hard'?1:PSTEP[Math.min(PSTEP.length-1,ps+(r==='easy'?1:0))];}
const myDueOf=cards=>cards.filter(c=>!c.pd||c.pd<=today());
function myRun(cards,force){const due=myDueOf(cards);
  if(!due.length&&!force){const nx=cards.map(c=>c.pd).sort()[0];const d=dayDiff(today(),nx);
    return askConfirm(T('Alle Wörter sind gerade geübt – das nächste ist ')+(d===1?T('morgen'):fmt(T('in {N} Tagen')).replace('{N}',d))+T(' wieder dran. Trotzdem üben?'),T('Trotzdem üben')).then(ok=>{if(ok)myRun(cards,true);});}
  const pool=due.length?due:cards;const pick=pool.map(c=>({c,k:Math.pow(Math.random(),1/myWeight(c))})).sort((a,b)=>b.k-a.k).slice(0,20).map(x=>x.c);
  const ids=cards.map(c=>c.es);
  runVocab(shuffle(pick.map(c=>({es:c.es,de:c.de,em:c.em}))),'mix',false,{pk:'my',myIds:ids,again:()=>myRun(ids.map(e=>S.srs[vkey(e)]).filter(c=>c&&!c.del))});}
function myDueText(cards){const n=myDueOf(cards).length;if(n)return Math.min(20,n)+T(' Wörter dran · gemischt: Karteikarten, Tippen, Hören');
  const d=dayDiff(today(),cards.map(c=>c.pd).sort()[0]);return T('Alles geübt ✓ – nächste ')+(d===1?T('morgen'):fmt(T('in {N} Tagen')).replace('{N}',d));}
function dayDiff(a,b){return Math.round((new Date(b+'T12:00:00')-new Date(a+'T12:00:00'))/864e5);}
/* Übungsstand einer Liste: zuletzt geübt · % richtig · wackelig */
function myPractice(cards){const pr=cards.filter(c=>c.pl);if(!pr.length)return null;const last=pr.map(c=>c.pl).sort().pop();const d=dayDiff(last,today());
  const ok=pr.reduce((a,c)=>a+(c.pk||0),0),no=pr.reduce((a,c)=>a+(c.pn||0),0),w=cards.filter(c=>c.pw).length;
  return T('Zuletzt geübt: ')+(d<=0?T('heute'):d===1?T('gestern'):fmt(T('vor {N} Tagen')).replace('{N}',d))+' · '+Math.round(100*ok/Math.max(1,ok+no))+T(' % richtig')+(w?' · '+w+T(' wackelig'):'');}
function vMyLists(m){m.append(backTo(T('Vokabeln'),'vocab'),h('h1',{},T('Meine Wörter')),h('p',{class:'sub'},T('Eigene Listen – sie kommen zusammen mit den Kurswörtern in die tägliche Wiederholung (pro Liste abschaltbar).')));
  myLists().forEach(l=>fixMySwapped(l.id));
  {const now=Date.now();let ch=false;myLists().forEach(l=>{if(!myCards(l.id).length){S.mylists[l.id].del=true;S.mylists[l.id].t=now;ch=true;}});if(ch)save();}
  const L=myLists();const inp=h('input',{class:'inp',placeholder:T('Name der neuen Liste, z. B. Uni-Woche 3'),style:'font-size:16px'});
  const add=()=>{const n=inp.value.trim().slice(0,40)||T('Meine Wörter');const id=newListId();NEWLIST={id,l:{name:n,daily:true,t:Date.now(),c:Date.now()}};go('vocab/mine/'+id);};
  inp.onkeydown=e=>{if(e.key==='Enter')add();};
  const allW=L.flatMap(l=>myActive(l.id));
  if(allW.length)m.append(pauseBtn('my',()=>resumeVocab(Object.assign({key:'my'},pauseGet('my')))),h('button',{class:'btn'+(pauseGet('my')?'':' primary'),style:'width:100%;margin-bottom:6px',onclick:()=>myRun(allW)},L.length>1?T('▶ Alle Listen lernen'):T('▶ Lernen')),
    h('p',{class:'muted small',style:'margin:0 0 14px;text-align:center'},myDueText(allW)));
  if(L.length)m.append(h('div',{class:'mlist',style:'margin-bottom:14px'},L.map(l=>{const n=myActive(l.id).length;return h('div',{class:'mrow',onclick:()=>go('vocab/mine/'+l.id)},h('span',{class:'mq'},h('b',{},l.name),h('br'),
      h('span',{class:'muted small'},n+(n===1?T(' Wort'):T(' Wörter'))+(l.daily===false?T(' · nur gezielt'):'')+(n?' · '+myDueOf(myActive(l.id)).length+T(' dran'):''))),
      h('button',{class:'btn small primary',style:'flex:none',onclick:e=>{e.stopPropagation();myRun(myActive(l.id));}},T('▶ Lernen')),h('span',{class:'mch'},'›'));})));
  m.append(h('div',{class:'card',style:'padding:14px 16px'},h('div',{class:'kind',style:'margin:0 0 8px'},T('Neue Liste')),h('div',{class:'row',style:'flex-wrap:nowrap;gap:8px'},inp,h('button',{class:'btn primary',onclick:add},T('Anlegen')))));}
function importBox(m,id){const ta=h('textarea',{class:'inp',rows:'7',placeholder:T('Eine Zeile pro Wort, z. B.')+'\n'+(LANG.sampleWords||[]).map((w,i)=>w[0]+(i?'; ':' – ')+(w[1][EX]||w[1].de)).join('\n')+'\n'+T('Tab, Strich, =, ; oder : als Trenner'),style:'font-size:15px;width:100%;resize:vertical'});
  let swap=false;const pv=h('div',{class:'muted small',style:'margin-top:8px'});const go2=h('button',{class:'btn primary',style:'width:100%;margin-top:10px',disabled:true},T('Übernehmen'));
  const sw=h('button',{class:'btn small',onclick:()=>{swap=!swap;upd();}},T('⇄ Seiten tauschen'));
  const file=h('input',{type:'file',accept:'.txt,.csv,.tsv,.apkg,.colpkg,text/plain,text/csv',style:'display:none',onchange:()=>{const f=file.files[0];if(!f)return;file.value='';
    if(/\.(apkg|colpkg)$/i.test(f.name)){pv.innerHTML='';pv.append(h('div',{class:'card',style:'margin:0;padding:12px 14px'},h('b',{},T('Anki-Paket (.apkg)')),h('p',{class:'small',style:'margin:6px 0 0'},T('So geht es: In Anki den Stapel auswählen → Datei → Exportieren → „Notizen als Text (.txt)“ → diese .txt-Datei hier wählen.'))));return;}const r=new FileReader();r.onload=()=>{ta.value=String(r.result||'');upd();};r.readAsText(f);}});
  const upd=()=>{const r=parsePairs(ta.value,swap);pv.innerHTML='';go2.disabled=!r.pairs.length;go2.textContent=r.pairs.length+T(' Wörter übernehmen');
    if(!ta.value.trim())return;pv.append(h('div',{},T('Erkannt: ')+r.pairs.length+(r.bad.length?T(' · nicht erkannt: ')+r.bad.length:'')),
      h('div',{class:'mlist',style:'margin-top:6px'},r.pairs.slice(0,6).map(([a,b])=>h('div',{class:'mrow',style:'cursor:default'},h('span',{class:'mq es-t'},a),h('span',{class:'muted small',style:'text-align:right'},b)))),
      r.pairs.length>6?h('div',{style:'margin-top:4px'},'… '+(r.pairs.length-6)+T(' weitere')):null,r.bad.length?h('div',{style:'color:var(--bad);margin-top:4px'},T('Nicht erkannt: ')+r.bad.slice(0,3).join(' · ')):null);};
  ta.oninput=upd;
  go2.onclick=()=>{const r=parsePairs(ta.value,swap);const x=addMyWords(id,r.pairs);toast(x.added+T(' neu')+(x.upd?' · '+x.upd+T(' aktualisiert'):'')+(x.course.length?' · '+x.course.length+T(' schon im Kurs'):''));route();};
  /* zugeklappt: nur ein Knopf – öffnet die Karte mit Textfeld, Datei-Knopf und Vorschau */
  const card=h('div',{class:'card hide',style:'padding:14px 16px'},h('div',{class:'kind',style:'margin:0 0 4px'},T('Mehrere Wörter auf einmal')),h('p',{class:'muted small',style:'margin:0 0 8px'},T('Text einfügen (z. B. aus Notizen, Excel oder Anki) oder eine Datei (.txt, .csv) wählen.')),
    h('div',{class:'row',style:'gap:6px;margin-bottom:8px'},sw,h('button',{class:'btn small',onclick:()=>file.click()},T('📄 Datei wählen'))),ta,file,pv,go2);
  const head=h('button',{class:'btn',style:'width:100%;margin-bottom:12px',onclick:()=>{card.classList.remove('hide');head.classList.add('hide');setTimeout(()=>ta.focus(),50);}},T('📋 Mehrere Wörter auf einmal'));
  return h('div',{},head,card);}
/* eigene Wörter mit vertauschten Seiten (z. B. „Hallo – Hola“): umdrehen; steht das Wort schon im Kurs, wird die eigene Karte entfernt */
/* gibt es das Wort (ohne Groß/klein, ¡!¿?) schon als Kurskarte? */
function courseCard(es){const n=wnorm(es);return srsCards().find(c=>!isMy(c)&&wnorm(c.es)===n);}
function fixMySwapped(id){let n=0;myCards(id).forEach(c=>{if(inCourse(c.de)&&!inCourse(c.es)){n++;swapMy(c,true);}});if(n)save();return n;}
function swapMy(c,quiet){const now=Date.now();c.del=true;c.t=now;
  if(courseCard(c.de)){save();if(!quiet)toast(T('Das Wort ist schon im Kurs – es wird dort schon geübt.'));return;}
  const k=vkey(c.de),o=S.srs[k];if(!(o&&!o.del))S.srs[k]={es:c.de,de:c.es,unit:c.unit,box:0,due:today(),t:now};save();}
function vMyList(m,id){const l=myList(id);if(!l)return go('vocab/mine');{const nf=fixMySwapped(id);if(nf)setTimeout(()=>toast(nf+T(' vertauschte Wörter umgedreht')),300);}const allc=myCards(id).sort((a,b)=>(b.t||0)-(a.t||0));const cards=allc.filter(c=>!c.hid);
  const nm=h('h1',{style:'margin-bottom:4px'},l.name);
  const dl=h('input',{type:'checkbox',checked:l.daily!==false});dl.onchange=()=>{l.daily=dl.checked;l.t=Date.now();save();route();};/* hin und her möglich: Planungsdaten (ivl/due) und Übungsstand (pk/pn) liegen beide an der Karte und bleiben erhalten */
  const es=h('input',{class:'inp',placeholder:fmt(T('{L}')),autocapitalize:'off',spellcheck:'false',style:'font-size:16px'}),de=h('input',{class:'inp',placeholder:EX_NAMES[EX]?T(EX_NAMES[EX]):EX,style:'font-size:16px'});
  const add1=()=>{if(!es.value.trim()||!de.value.trim())return toast(T('Beide Felder ausfüllen'));const pr=parsePairs(es.value+'\t'+de.value).pairs[0]||[es.value,de.value];const sw=pr[0]!==es.value.trim();const x=addMyWords(id,[pr]);if(sw)setTimeout(()=>toast(T('Seiten getauscht: ')+pr[0]+' – '+pr[1]),2300);if(x.course.length)toast(T('Das Wort ist schon im Kurs – es wird dort schon geübt.'));else toast(T('Gespeichert ✓'));es.value='';de.value='';route();setTimeout(()=>{const f=document.querySelector('.myadd input');if(f)f.focus();},50);};
  es.onkeydown=de.onkeydown=e=>{if(e.key==='Enter')add1();};
  if(!cards.length)setTimeout(()=>{const f=document.querySelector('.myadd input');if(f)f.focus();},80);
  m.append(backTo(T('Meine Wörter'),'vocab/mine'),h('div',{class:'row',style:'justify-content:space-between;flex-wrap:nowrap;align-items:baseline'},nm,
      h('button',{class:'linkbtn',style:'text-decoration:none;color:var(--muted)',onclick:()=>{const n=prompt(T('Neuer Name der Liste'),l.name);if(n&&n.trim()){l.name=n.trim().slice(0,40);l.t=Date.now();save();route();}}},T('✎ umbenennen'))),
    h('label',{class:'row',style:'gap:8px;margin:2px 0 12px'},dl,h('span',{class:'small'},T('In der täglichen Wiederholung'))),
    cards.length?null:h('p',{class:'muted small',style:'margin:0 0 12px'},T('Die Liste wird gespeichert, sobald das erste Wort drin ist.')),
    l.daily===false?null:h('div',{class:'row',style:'gap:6px;margin:-4px 0 12px;align-items:center'},h('span',{class:'small'},T('Neue pro Tag:')),
      [5,10,20,0].map(n=>h('button',{class:'chip'+((l.perDay==null?MY_NEW:l.perDay)===n?' on':''),style:'padding:4px 10px',onclick:()=>{l.perDay=n;l.t=Date.now();save();route();}},n?String(n):T('alle')))),
    cards.length&&myPractice(cards)?h('p',{class:'small',style:'margin:-4px 0 6px'},myPractice(cards)):null,
    cards.length?h('p',{class:'muted small',style:'margin:-4px 0 12px'},l.daily===false?T('Nicht in der Wiederholung – wird nicht eingeplant, nur über „Lernen“.'):(()=>{const st=[0,0,0,0];cards.forEach(c=>{st[cardStage(c)]++;});
      return [[st[0],T('neu')],[st[1],T('lernend')],[st[2],T('gefestigt')],[st[3],T('sicher')]].filter(x=>x[0]).map(x=>x[0]+' '+x[1]).join(' · ');})()):null,
    cards.length?h('div',{style:'margin-bottom:12px'},h('button',{class:'btn primary',style:'width:100%',onclick:()=>myRun(cards)},T('▶ Lernen')),
      h('p',{class:'muted small',style:'margin:6px 0 0;text-align:center'},myDueText(cards))):null,
    h('div',{class:'card myadd',style:'padding:14px 16px;margin-bottom:12px'},h('div',{class:'kind',style:'margin:0 0 8px'},T('Wort hinzufügen')),h('div',{class:'grid',style:'grid-template-columns:1fr 1fr;gap:8px'},es,de),
      h('button',{class:'btn',style:'width:100%;margin-top:8px',onclick:add1},T('＋ Hinzufügen'))),
    importBox(m,id));
  const nh=allc.length-cards.length;
  if(allc.length)m.append(h('div',{class:'kind',style:'margin:16px 0 6px'},allc.length+(allc.length===1?T(' Wort'):T(' Wörter'))+(nh?' · '+nh+' '+T('ausgeblendet'):'')),h('div',{class:'mlist'},allc.map(c=>h('div',{class:'mrow'+(c.hid?' hid':''),style:'cursor:default'},h('span',{class:'mq'},c.hid?h('span',{class:'pill',style:'margin-right:6px'},T('ausgeblendet')):null,c.pw&&!c.hid?h('span',{title:T('wackelig'),style:'color:var(--warn,#d97706);margin-right:6px'},'●'):null,h('span',{class:'es-t'},c.es),h('span',{class:'muted'},' – '+c.de)),
    c.hid?h('button',{class:'btn ghost small',title:T('Zurückholen'),onclick:()=>{setHidden(c,false);toast(T('Wieder im Vokabelheft.'));route();}},'↩')
      :h('button',{class:'btn ghost small',title:T('Ausblenden'),onclick:async()=>{if(!await askConfirm(T('„{W}“ ausblenden? Es bleibt in der Liste, kommt aber nicht mehr dran.').replace('{W}',c.es),T('Ausblenden')))return;setHidden(c,true);route();}},T('ausblenden')),
    h('button',{class:'btn ghost small',title:T('Seiten tauschen'),onclick:()=>{swapMy(c);route();}},'⇄'),
    h('button',{class:'btn ghost small',title:T('Löschen'),onclick:async()=>{if(!await askConfirm('„'+c.es+T('“ löschen?'),T('Löschen')))return;c.del=true;c.t=Date.now();save();route();}},'×')))));
  m.append(h('button',{class:'btn ghost',style:'width:100%;margin-top:16px;color:var(--bad)',onclick:async()=>{if(!myCards(id).length){NEWLIST=null;if(S.mylists&&S.mylists[id]){S.mylists[id].del=true;S.mylists[id].t=Date.now();save();}return go('vocab/mine');}if(!await askConfirm(T('Ganze Liste mit allen Wörtern löschen?'),T('Löschen')))return;const now=Date.now();myCards(id).forEach(c=>{c.del=true;c.t=now;});l.del=true;l.t=now;save();go('vocab/mine');}},T('Liste löschen')));}
function vVocab(m,sub,lid){if(sub==='mine')return lid?vMyList(m,lid):vMyLists(m);const due=dueCards();const all=activeCards();const total=all.length;
  const boxes=[0,0,0,0];all.forEach(c=>{boxes[cardStage(c)]++;});
  if(sub==='stats')return vVocabStats(m,all,lid);
  if(sub==='hidden')return vVocabHidden(m,lid);
  if(sub==='units'){m.append(backTo(T('Vokabeln'),'vocab'),h('h1',{},T('Nach ')+UW+T(' üben')),h('p',{class:'sub'},T('Wörter einer ')+UW+T(' abfragen – zählt nicht für die Wiederholungsplanung.')),
    h('div',{class:'grid',style:'gap:8px'},LEVELS.map(L=>{const us=COURSE.units.filter(u=>unitLevel(u)===L.id&&all.some(c=>c.unit===u.id));if(!us.length)return null;
      return h('div',{},h('div',{class:'kind',style:'margin:8px 0 6px'},L.title),h('div',{class:'chips'},us.map(u=>{const w=all.filter(c=>c.unit===u.id);return h('button',{class:'chip',onclick:()=>runVocab(shuffle(w).slice(0,20),'type',false)},h('span',{},'U'+u.n),h('span',{},u.title+' ('+w.length+')'));})));})));
    if(!all.length)m.append(h('div',{class:'card'},T('Noch keine Wörter gesammelt.')));return;}
  m.append(h('h1',{},T('Vokabeln')),h('p',{class:'sub'},total?total+T(' Wörter gesammelt · ')+boxes[3]+T(' sitzen sicher · ')+(boxes[0]+boxes[1])+T(' in Arbeit'):T('Wörter kommen automatisch dazu, sobald du sie in einer Lektion siehst.')));
  m.append(h('div',{class:'card hero',style:'cursor:default'},h('div',{class:'kind'},T('Wiederholung nach Lernkurve')),h('h2',{style:'margin:0 0 '+(due.length>vocabLeft()?'4px':'12px')},vocabLeft()?T('Heute noch ')+vocabLeft()+T(' Karten'):due.length?T('Tagesziel erreicht ✓'):total?T('Für heute alles wiederholt ✓'):T('Noch keine Karten')),
    due.length>vocabLeft()?h('p',{class:'muted small',style:'margin:0 0 12px'},vocabLeft()?due.length+T(' fällig insgesamt · ')+(due.length-vocabLeft())+T(' davon freiwillig'):due.length+T(' weitere Karten sind fällig – freiwillig, sonst kommen sie an den nächsten Tagen.')):null,

    pauseBtn('vocab',()=>resumeVocab(Object.assign({key:'vocab'},pauseGet('vocab')))),
    h('div',{class:'row'},h('button',{class:'btn',disabled:!due.length,onclick:()=>runVocab(reviewSet(),'type',true,{pk:'vocab'})},T('✍️ Tippen')),
      h('button',{class:'btn',disabled:!due.length,onclick:()=>runVocab(reviewSet(),'flip',true,{pk:'vocab'})},T('🃏 Karten')),
      h('button',{class:'btn',disabled:!due.length,onclick:()=>runVocab(reviewSet(),'listen',true,{pk:'vocab'})},T('🎧 Hören'))),
    total?(()=>{const pick=h('div',{class:'goalpick hide'},[10,20,30,50,100].map(n=>h('button',{class:'chip'+(n===vocabGoal()?' on':''),onclick:()=>{S.vocabGoal=n;S.vocabGoalT=Date.now();save();route();}},n+'')));
      return h('div',{class:'goalrow'},h('div',{class:'row',style:'justify-content:space-between;flex-wrap:nowrap;gap:8px'},vocabToday()>=vocabGoal()?h('span',{class:'small',style:'color:var(--ok);font-weight:600'},T('Tagesziel ')+vocabGoal()+' / '+vocabGoal()+' ✓'):h('span',{class:'muted small'},T('Tagesziel ')+vocabToday()+' / '+vocabGoal()),
        h('button',{class:'linkbtn',onclick:()=>pick.classList.toggle('hide')},T('⚙ Ziel ändern'))),pick);})():null));
  m.append(tiles(mtile('📚',T('Nach ')+UW+'',T('Wörter einer ')+UW+T(' üben'),()=>go('vocab/units')),mtile('📊',T('Statistik'),total?T('Morgen fällig: ')+all.filter(c=>c.due===addDays(today(),1)).length:T('Noch keine Karten'),()=>go('vocab/stats')),
    mtile('🎧',T('Aussprache üben'),T('Shadowing · ')+UW+' '+curUnit().n,()=>go('shadow/'+curUnit().id)),mtile('✍️',T('Meine Wörter'),myLists().length?srsCards().filter(c=>String(c.unit).startsWith(MY)).length+T(' eigene Wörter'):T('Eigene Listen anlegen'),()=>go('vocab/mine'))));
}
function vVocabHidden(m,src){src=src==='kurs'||src==='mine'?src:'';
  const back='vocab/stats'+(src?'/'+src:'');
  m.append(backTo(T('Statistik'),back),h('h1',{},T('Ausgeblendete Wörter')),h('p',{class:'sub'},T('Diese Wörter kommen nicht mehr in der Wiederholung dran. Holst du eins zurück, bleibt dein Lernstand erhalten.')));
  const hs=hiddenOf(src);
  if(!hs.length){m.append(h('div',{class:'card',style:'text-align:center'},h('p',{class:'muted',style:'margin:0'},T('Keine ausgeblendeten Wörter.'))));return;}
  /* Abschnitte: Aus dem Kurs, dann je eigene Liste – jeder mit eigenem „Alle zurückholen“ */
  const groups=[];const gi={};hs.forEach(c=>{const k=isMy(c)?String(c.unit):'kurs';if(!gi[k]){gi[k]={k,name:k==='kurs'?T('Aus dem Kurs'):(myList(k.slice(MY.length))||{}).name||T('Meine Wörter'),cs:[]};groups.push(gi[k]);}gi[k].cs.push(c);});
  groups.sort((a,b)=>(a.k==='kurs'?0:1)-(b.k==='kurs'?0:1));
  const nw=n=>n+' '+(n===1?T('Wort'):T('Wörter'));
  groups.forEach(g=>{g.cs.sort((a,b)=>(b.t||0)-(a.t||0));
    const cnt=h('span',{class:'muted small'},nw(g.cs.length));
    const card=h('div',{class:'card hidcard',style:'margin-bottom:12px'});
    const list=h('div',{class:'hidlist'},g.cs.map(c=>h('div',{class:'hidrow'},spk(c.es),h('div',{class:'hw'},h('div',{class:'es'},artW(c.es)),h('div',{class:'muted small'},trc(c.de))),
      h('button',{class:'btn small',onclick:e=>{setHidden(c,false);e.currentTarget.closest('.hidrow').remove();toast(T('Wieder im Vokabelheft.'));
        const left=g.cs.filter(x=>x.hid).length;if(!hiddenOf(src).length)return goBack(back);if(!left)card.remove();else cnt.textContent=nw(left);}},'↩ '+T('Zurückholen')))));
    card.append(h('div',{class:'row',style:'justify-content:space-between;align-items:center;margin-bottom:4px;flex-wrap:nowrap'},h('div',{},h('div',{class:'kind',style:'margin:0'},g.name),cnt),
      g.cs.length>1?h('button',{class:'btn ghost small',style:'flex:none',onclick:async()=>{const cs=g.cs.filter(x=>x.hid);if(!await askConfirm(T('Alle {N} Wörter aus „{G}“ zurück ins Vokabelheft holen?').replace('{N}',cs.length).replace('{G}',g.name),T('Alle zurückholen')))return;
        cs.forEach(c=>setHidden(c,false));toast(T('Wieder im Vokabelheft.'));if(!hiddenOf(src).length)return goBack(back);route();}},'↩ '+T('Alle zurückholen')):null),list);
    m.append(card);});}
function startCram(items,u){addVocab(items,u.id);runVocab(shuffle(items.map(([es,de,em])=>({es,de,em}))).slice(0,20),'type',false);}
/* opt: {again:()=>…} = „Noch eine Runde“ statt Tagesplan (eigene Listen). Zurück (✕ und Ende) = Seite, von der die Runde gestartet wurde. */
function runVocab(cards,mode,srs,opt){opt=opt||{};const from=curRoute();const fromL=navLabel(from)||T('Vokabeln');const m=shell();let q=cards.slice();let i=0,okc=0;const seen=new Set();
  const rs=opt.resume;if(rs){i=rs.i;okc=rs.okc;(rs.seen||[]).forEach(x=>seen.add(x));}
  const undoB=h('button',{class:'btn ghost undo hide',title:T('Rückgängig'),onclick:()=>undo()},'↶ '+T('zurück'));
  const stage=h('div',{class:'step'});
  /* Wort ganz aus dem Vokabelheft nehmen (nur Kurswörter): kommt nicht mehr dran, steht unter Vokabeln → Ausgeblendet */
  const hideB=h('button',{class:'linkbtn vhide',onclick:async()=>{const c=q[i];const k=c&&S.srs[vkey(c.es)];if(!k)return;const at=i;
    if(!await askConfirm((isMy(k)?T('„{W}“ wirklich ausblenden? Es bleibt in deiner Liste, kommt aber nicht mehr dran. Zurückholen kannst du es in der Liste oder unter Vokabeln → Statistik.'):T('„{W}“ wirklich ausblenden? Das Wort kommt dann nicht mehr in der Wiederholung dran. Zurückholen kannst du es unter Vokabeln → Statistik.')).replace('{W}',c.es),T('Ausblenden'))||i!==at)return;
    snap(c);setHidden(k,true);toast(T('Ausgeblendet – mit ↶ zurück machst du es rückgängig.'));nxt();}},T('Wort ausblenden'));
  stickMain(m,'stickplay');runEnter();
  m.append(h('div',{class:'player'},h('div',{class:'ptop'},h('button',{class:'btn ghost small',onclick:()=>{if(opt.pk&&i>0&&i<q.length)toast(T('Gespeichert – später geht es hier weiter.'));go(from);}},'✕'),h('div',{class:'bar'},h('i',{style:'width:0'})),undoB,h('span',{class:'muted small',id:'pc'})),stage,h('div',{class:'vhiderow'},hideB)));
  function upd(){$('.ptop .bar i').style.width=Math.round(100*i/q.length)+'%';$('#pc').textContent=Math.min(i+1,q.length)+' / '+q.length;undoB.classList.toggle('hide',!hist.length);}
  const failed=new Set(rs&&rs.failed||[]);
  /* Rückgängig: Zustand vor jeder Antwort merken (Karte, Zähler, Statistik) und bei ↶ wiederherstellen */
  const hist=[],kinds=rs&&rs.kinds||[];const cp=o=>o==null?o:JSON.parse(JSON.stringify(o));
  function snap(c){const k=vkey(c.es);hist.push({i,ql:q.length,okc,seen:new Set(seen),failed:new Set(failed),k,card:cp(S.srs[k]),stats:cp(S.stats),streak:cp(S.streak),vlog:cp(S.vlog)});if(hist.length>30)hist.shift();}
  function undo(){const h0=hist.pop();if(!h0)return;speechSynthesis.cancel();i=h0.i;q.length=h0.ql;kinds.length=Math.min(kinds.length,h0.ql);okc=h0.okc;seen.clear();h0.seen.forEach(x=>seen.add(x));failed.clear();h0.failed.forEach(x=>failed.add(x));
    if(h0.card)S.srs[h0.k]=h0.card;S.stats=h0.stats;S.streak=h0.streak;S.vlog=h0.vlog;save();show();}
  function res(c,st,rating){snap(c);const first=!seen.has(c.es);if(first){seen.add(c.es);if(st!=='bad')okc++;
      /* freies Üben eigener Wörter: richtig/falsch (pk/pn), zuletzt geübt (pl), zuletzt falsch (pw), eigener Abstand (ps Stufe, pd wieder dran) – ohne Einfluss auf die Planung */
      const k=!srs&&S.srs[vkey(c.es)];if(k&&isMy(k)){const r=rating||(st==='bad'?'again':st==='near'?'hard':'good');const ok=r!=='again';if(ok)k.pk=(k.pk||0)+1;else k.pn=(k.pn||0)+1;k.pw=!ok;k.pl=today();
        const d=pNext(k,r);k.ps=r==='again'?0:r==='hard'?(k.ps||0):r==='easy'?(k.ps||0)+2:(k.ps||0)+1;k.pd=addDays(today(),d);k.t=Date.now();}
      bumpDay(st!=='bad');}
    if(srs){const r=rating||(st==='bad'?'again':failed.has(c.es)?'hard':RATE[st]);grade(c,st,r);}
    if(st==='bad'||rating==='again'){failed.add(c.es);q.push(c);}}
  function nxt(){i++;if(i>=q.length)return end();show();}
  function show(){upd();stage.innerHTML='';const c=q[i];{const k=S.srs[vkey(c.es)];if(k&&k.hid)return nxt();hideB.parentNode.classList.toggle('hide',!k);}
    if(opt.pk&&i>0)pauseSet(opt.pk,{route:from,title:srs?T('Vokabeln'):T('Meine Wörter'),cards:q,i,okc,seen:[...seen],failed:[...failed],kinds:kinds.slice(0,q.length),mode,srs,daily:srs,myIds:opt.myIds||null,n:q.length});
    /* 'mix' (eigene Listen): pro Karte zufällig Karte (beide Richtungen), Tippen oder Hören */
    if(!kinds[i]){const exLike=(EX_MARK[EX]||/(?!)/).test(c.es)&&!(LANG.mark||/(?!)/).test(c.es);/* sieht nach Deutsch aus → nie vorlesen lassen */
      kinds[i]={md:mode==='mix'?(exLike?['flip','type']:['flip','flip','type','listen'])[Math.floor(Math.random()*(exLike?2:4))]:mode,rev:Math.random()<0.5};}/* gemerkt, damit ↶ dieselbe Aufgabe zeigt */
    const md=kinds[i].md;
    if(md==='flip'){let shown=false;const rev=kinds[i].rev; /* Richtung zufällig: Spanisch → Deutsch oder Deutsch → Spanisch */
      const card=rev?h('div',{class:'card flash'},h('div',{class:'big'},(pic(c.es,c.em)?pic(c.es,c.em)+' ':'')+trc(c.de)),h('div',{id:'ans',style:'visibility:hidden'},h('div',{class:'big',style:'font-size:24px;margin-top:6px'},artW(c.es)),spk(c.es)))
        :h('div',{class:'card flash'},h('div',{class:'big'},artW(c.es)),spk(c.es),h('div',{class:'muted',id:'ans',style:'visibility:hidden;font-size:20px'},(pic(c.es,c.em)?pic(c.es,c.em)+'  ':'')+trc(c.de)));
      stage.append(kind(rev?fmt(T('Wie heißt das {ON}?')):T('Was bedeutet das?')),card);if(!rev)setTimeout(()=>say(c.es),200);
      const row=h('div',{class:'actions'});const reveal=h('button',{class:'btn primary'},T('Aufdecken'));
      reveal.onclick=()=>{shown=true;$('#ans').style.visibility='visible';if(rev)say(c.es);row.innerHTML='';row.className='rates';row.append(
        ...[['again','bad',T('Nochmal'),'var(--bad)'],['hard','near',T('Schwer'),'var(--gold)'],['good','ok',T('Gut'),'var(--accent)'],['easy','ok',T('Leicht'),'var(--ok)']].map(([r,st,l,col])=>{
          const sc=S.srs[vkey(c.es)];const d=srs&&sc?nextIvl(Object.assign({},sc),r):sc&&isMy(sc)?pNext(sc,r):(r==='hard'?1:r==='good'?3:5);
          return h('button',{class:'btn rate',style:'color:'+col,onclick:()=>{res(c,st,r);nxt();}},h('b',{},l),h('span',{},r==='again'?T('gleich nochmal'):d===1?T('morgen'):d+T(' Tage')));}));};row.append(reveal);stage.append(row);
      const myI=i;const kh=e=>{if(!stage.isConnected||i!==myI||!row.isConnected)return document.removeEventListener('keydown',kh);if(e.key===' '||e.key==='Enter'){e.preventDefault();if(!shown)reveal.click();}else if(shown&&['1','2','3'].includes(e.key)){document.removeEventListener('keydown',kh);row.children[+e.key-1].click();}};
      document.addEventListener('keydown',kh);return;}
    const inp=h('input',{class:'inp',autocomplete:'off',spellcheck:'false',placeholder:fmt(T('{ON} …'))});
    if(md==='listen'){stage.append(kind(T('Hör zu und schreib das Wort')),h('div',{class:'row',style:'margin-bottom:14px'},spk(c.es,true),h('button',{class:'btn small',onclick:()=>say(c.es,0.55)},T('🐢 Langsam'))),inp,keys(()=>inp));setTimeout(()=>say(c.es),200);}
    else stage.append(kind(fmt(T('Wie heißt das {ON}?'))),picEl(c.es,c.em,'qpic'),h('p',{class:'q',style:'font-size:26px'},trc(c.de)),inp,keys(()=>inp));
    setTimeout(()=>inp.focus(),50);
    stage.append(actionBar(()=>{let r=compare(inp.value,vocabForms(c.es),{pron:false});if(r.status!=='bad')r.right=c.es;
      /* nur der Artikel fehlt (teléfono statt el teléfono) → fast richtig */
      if(r.status==='bad'&&(LANG.articles||/(?!)/).test(c.es)&&vocabForms(c.es).some(f=>compare(inp.value,f.replace(LANG.articles,''),{pron:false}).status!=='bad'))r={status:'near',right:c.es,note:T('Fast – denk an den Artikel: ')+c.es};
      if(r.status==='bad'&&md!=='listen'){const sy=synOf(c.es,c.de);if(sy.length&&compare(inp.value,sy,{pron:false}).status==='ok')r={status:'ok',right:c.es,note:T('Auch richtig ✓ – gesucht war: ')+c.es};}inp.readOnly=true;inp.classList.add(r.status==='bad'?'wrong':'right');
      feedback(stage,r,{t:'v'},inp.value,null);if(md==='listen')stage.append(h('p',{class:'muted'},'= '+trc(c.de)));if(r.status!=='bad')say(c.es);res(c,r.status);},{next:nxt}));}
  function end(){stage.innerHTML='';upd();hideB.parentNode.classList.add('hide');if(opt.pk)pauseDel(opt.pk);const pct=Math.round(100*okc/Math.max(seen.size,1));if(srs&&seen.size){S.vocabDay=today();save();}const np=opt.again?null:dayPlan().find(x=>!x.done&&x.r!=='vocab');const more=srs?reviewSet():[];
    stage.append(h('div',{class:'card',style:'text-align:center;padding:36px'},h('div',{style:'font-size:44px'},'🗂️'),h('h1',{},TP('¡Hecho!')),h('p',{class:'sub'},pct+T('% gewusst · ')+seen.size+T(' Karten')),
      h('div',{class:'endbtns'},more.length?h('button',{class:'btn'+(np?'':' primary'),onclick:()=>runVocab(more,mode,true,{pk:'vocab'})},T('Weiter üben: ')+more.length+T(' Karten')+(vocabLeft()?'':T(' (freiwillig)'))+' →'):null,
        opt.again?h('button',{class:'btn primary',onclick:opt.again},T('Noch eine Runde →')):null,
        np?h('button',{class:'btn primary',onclick:()=>{NAVRESET=true;planGo(np);}},T('Nächste Aufgabe: ')+np.t+' →'):null,
        h('button',{class:'btn ghost',onclick:()=>go(from)},'← '+fromL))));}
  show();}

/* ---------- placement ---------- */
function vPlacement(m){
  if(S.placement&&!m.dataset.restart){m.append(h('h1',{},T('Einstufungstest')),h('p',{class:'sub'},T('Gemacht am ')+S.placement.date+'.'),placementTable(),
    h('div',{class:'row',style:'margin-top:16px'},h('button',{class:'btn',onclick:()=>{m.innerHTML='';m.dataset.restart=1;vPlacement(m);}},T('Neuen Test machen (andere Fragen)')),h('button',{class:'btn primary',onclick:()=>go('units')},T('Zum Kurs →'))));return;}
  m.append(h('h1',{},T('Einstufungstest')),h('p',{class:'sub'},T('Der Test läuft in Etappen: ')+LEVELS.map(L=>L.title).join(' → ')+T('. Pro ')+UW+T(' 3 Fragen, jede Etappe dauert ca. 5 Minuten, bei jedem Durchgang neu gemischt.')),
    h('div',{class:'card',style:'margin-bottom:16px'},h('p',{style:'margin:0'},T('Nach jeder Etappe siehst du dein Zwischenergebnis. Liegt eine Etappe unter 60 %, höre ich dort auf – alles danach lernst du neu. Was „sitzt“, hakst du später mit dem Abschlusstest ab.')),
      h('p',{class:'muted small',style:'margin:8px 0 0'},T('Kein Stress: Wenn du etwas nicht weißt, wähl „Weiß ich nicht“ bzw. lass die Lücke leer – das hilft der Einstufung mehr als Raten.'))),
    h('button',{class:'btn primary',onclick:()=>runStage(m,0,{})},T('Test starten →')));}
function runStage(m,li,results){const L=LEVELS[li];m.innerHTML='';window.scrollTo(0,0);m.scrollTop=0;
  const byU={};PLACEMENT.forEach((s,i)=>{(byU[s.u]=byU[s.u]||[]).push(i);});
  const units=levelUnits(L.id).filter(u=>byU[u.id]);
  const steps=units.flatMap(u=>shuffle(byU[u.id]).slice(0,3)).map(i=>{const s=PLACEMENT[i];return{s:s.t==='mc'&&!s.opts.includes(T('Weiß ich nicht'))?Object.assign({},s,{opts:s.opts.concat([T('Weiß ich nicht')]),keepLast:true}):s,ref:'P||'+i,unit:s.u};});
  const per={};let sc=0,cont=false;const nextL=LEVELS[li+1];
  play(m,{title:T('Einstufungstest · Etappe ')+(li+1)+T(' von ')+LEVELS.length+' · '+L.title,steps:shuffle(steps),noRetry:true,noPrompt:true,onBack:()=>go('placement'),
    onAnswer:(it,st)=>{const u=it.unit;per[u]=per[u]||{n:0,ok:0};per[u].n++;if(st!=='bad')per[u].ok++;},
    onDone:()=>{let n=0,ok=0;for(const u of units){const p=per[u.id];if(p){results[u.id]=p.ok/p.n;n+=p.n;ok+=p.ok;}}
      sc=n?ok/n:0;cont=sc>=0.6&&!!nextL&&levelUnits(nextL.id).some(u=>byU[u.id]);
      S.placement={date:today(),results:Object.assign({},results),ts:Date.now(),upTo:L.id};save();
      return cont?{label:T('Weiter mit ')+nextL.title+' →',fn:()=>runStage(m,li+1,results)}:{label:T('Ergebnis ansehen →'),fn:()=>go('placement')};},
    extraEnd:()=>h('div',{class:'fb '+(cont?'ok':'ai'),style:'text-align:left'},h('b',{class:'h'},L.title+': '+Math.round(sc*100)+T(' % richtig')),
      h('div',{},cont?T('Stark! Als Nächstes teste ich ')+nextL.title+T('. Du kannst auch hier aufhören – das bisherige Ergebnis ist gespeichert.'):nextL?T('Hier höre ich auf – ab dieser Stufe steigen wir ein und lernen neu.'):T('Das war die letzte Etappe.')))});}
function placementTable(){const r=S.placement?.results||{};const t=h('div',{class:'card'});
  for(const L of LEVELS){const us=levelUnits(L.id).filter(u=>r[u.id]!=null);if(!us.length)continue;
    t.append(h('div',{class:'kind',style:'margin-top:12px'},L.title),h('div',{class:'grid',style:'gap:8px'},us.map(u=>{const p=r[u.id];const st=unitStatus(u);
      return h('div',{class:'row'},h('span',{style:'width:90px',class:'muted'},''+UW+' '+u.n),h('span',{style:'flex:1;min-width:120px'},u.title),h('div',{class:'bar',style:'width:120px'},h('i',{style:'width:'+Math.round(p*100)+'%;background:'+(st==='sicher'?'var(--ok)':st===T('auffrischen')?'var(--gold)':'var(--info)')})),
        h('span',{class:'pill '+(st==='sicher'?'ok':st===T('auffrischen')?'warn':'new'),style:'width:100px;text-align:center'},st==='sicher'?T('sitzt ✓'):st===T('auffrischen')?T('auffrischen'):T('neu lernen')));})));}
  const untested=LEVELS.filter(L=>levelUnits(L.id).length&&!levelUnits(L.id).some(u=>r[u.id]!=null));
  if(untested.length&&Object.keys(r).length)t.append(h('p',{class:'muted small',style:'margin:14px 0 0'},T('Nicht mehr getestet: ')+untested.map(L=>L.title).join(', ')+T(' – das lernst du neu.')));
  const rec=COURSE.units.find(u=>u.status!=='soon'&&(r[u.id]==null||r[u.id]<0.8));
  if(rec&&Object.keys(r).length)t.append(h('p',{style:'margin:16px 0 0'},T('👉 Empfehlung: Neu einsteigen bei '),h('b',{},''+UW+' '+rec.n+' · '+rec.title),T('. Was davor „sitzt“, hakst du mit dem Abschlusstest ab (ca. 15 Aufgaben) – „auffrischen“ heißt: zügig durchgehen.')));
  return t;}

/* ---------- mistakes ---------- */
/* Fehlerheft: oben Übungs-Karte, darunter kompakte Zeilen (Herkunft + Frage); Antippen zeigt deine Antwort und die Lösung */
function mistakeSrc(ref){return ref.startsWith('V|')?T('Verben'):ref.startsWith('P')?T('Test'):ref.startsWith('N|')?T('Zahlen'):ref.startsWith('R|')?T('Lesetext'):ref.startsWith('S|')?T('Geschichte'):'U'+(unitById(ref.split('|')[ref.startsWith('W|')?1:0])?.n??'');}
function rightOf(s){const first=a=>String([].concat(a)[0]||'').split('|')[0];
  if(s.t==='mc')return s.opts?s.opts[s.a]:'';if(s.t==='gap'){const a=[].concat(s.a);let k=0;return String(s.q||'').replace(/<[^>]+>/g,'').replace(/___/g,()=>first(a[k++]));}
  if(s.t==='tr')return first(s.a);if(s.t==='conj')return s.verb+': '+(s.forms||[]).join(', ');if(s.t==='order'||s.t==='listen')return s.es||'';
  if(s.t==='match')return(s.pairs||[]).map(p=>p[0]+' = '+p[1]).join(' · ');return '';}
function vMistakes(m){m.append(h('h1',{},T('Fehlerheft')));
  const list=S.mistakes.map(x=>({x,s:resolveRef(x.ref)})).filter(y=>y.s);
  /* direct = von woanders gestartet (Startseite) → Zurück dorthin, sonst zurück zum Fehlerheft */
  function goM(direct){m.innerHTML='';play(m,{title:T('Fehler üben'),mistakeMode:true,noRetry:false,pk:'mistakes',steps:shuffle(list).slice(0,20).map(y=>({s:y.s,ref:y.x.ref})),onBack:()=>direct?goBack('home'):go('mistakes'),onDone:()=>{markDay('mistakes');return{label:T('Zum Fehlerheft'),fn:()=>go('mistakes')};}});}
  if(RESUME==='mistakes'){RESUME=null;if(list.length)return goM(true);}
  if(!list.length){m.append(h('div',{class:'card'},TP('Keine offenen Fehler. ¡Muy bien! 🎉')));return;}
  const n=Math.min(list.length,20);
  m.append(h('div',{class:'card mistakehead'},h('div',{class:'row',style:'justify-content:space-between;flex-wrap:nowrap'},h('b',{},list.length+(list.length===1?T(' offener Fehler'):T(' offene Fehler'))),h('span',{class:'muted small'},T('richtig geübt = weg'))),
    pauseGet('mistakes')?h('div',{style:'margin-top:10px'},pauseBtn('mistakes',()=>goM())):null,
    h('button',{class:'btn'+(pauseGet('mistakes')?'':' primary'),style:'width:100%;margin-top:10px;min-height:46px',onclick:()=>{pauseDel('mistakes');goM();}},T('Fehler üben')+(list.length>20?' ('+n+')':'')+' →')));
  m.append(h('div',{class:'mlist'},list.map(({x,s})=>{const q=String(s.t==='conj'?s.verb+' ('+(s.de||'')+')':s.q||s.de||s.es||s.verb||s.title||'').replace(/<[^>]+>/g,'').replace(/___/g,'_____');const r=rightOf(s);
    const det=h('div',{class:'mdet hide'},x.your?h('div',{},h('span',{class:'mx'},'✗ '),T('Deine Antwort: '),h('span',{class:'es-t',style:'color:var(--bad)'},x.your)):null,
      r?h('div',{},h('span',{class:'mok'},'✓ '),T('Richtig: '),h('span',{class:'es-t',style:'color:var(--ok);font-weight:600'},r)):null,h('div',{class:'muted small'},String(x.date||'').split('-').reverse().join('.')));
    const row=h('button',{class:'mrow'},h('span',{class:'msrc'},mistakeSrc(x.ref)),h('span',{class:'mq'},q),h('span',{class:'mch'},'›'));
    const wrap=h('div',{class:'mitem'},row,det);row.onclick=()=>{det.classList.toggle('hide');wrap.classList.toggle('open');};return wrap;})));}

/* ---------- gemini chat ---------- */
function vChat(m,id){const u=unitById(id);const sit=u.situacion;
  m.append(backTo(UW+' '+u.n,'unit/'+id),h('h1',{},'💬 '+sit.title),h('div',{class:'scene',html:'🎬 '+sit.scene+T('<br><b>Dein Ziel:</b> ')+sit.goal}));
  if(!hasAI()){m.append(h('div',{class:'card'},h('p',{},T('Für freie Gespräche brauchst du KI: entweder diese App über den claude.ai-Link öffnen (nutzt dein Claude-Abo) oder einen kostenlosen Gemini-Key in den Einstellungen. Alles andere funktioniert ohne.')),h('button',{class:'btn primary',onclick:()=>go('settings')},T('Zu den Einstellungen'))));return;}
  const chat=h('div',{class:'chat'});const hist=[];const sys=TEACHER+`\n\nROLLENSPIEL: ${sit.role}\nSzene: ${sit.scene}\nZiel von Jonas: ${sit.goal}\nWortschatz/Grammatik bis ${UW} ${u.n}: ${u.goals.join(', ')}.\nRegeln: Spiele deine Rolle ${LANG.onLang||''}, natürlich aber einfach (A1/A2), 1–3 kurze Sätze pro Antwort, stelle Rückfragen, damit das Gespräch weitergeht. Wenn Jonas einen Fehler macht, gib eine kurze Korrektur auf Deutsch im Feld "korrektur" (sonst null). Wenn das Ziel erreicht ist, beende das Gespräch freundlich und setze "fertig": true.\nAntworte NUR als JSON: {"antwort_es":"...","antwort_de":"deutsche Übersetzung","korrektur":null oder {"richtig":"korrigierter Satz von Jonas","erklaerung":"kurz"},"fertig":false}`;
  const inp=h('input',{class:'inp',placeholder:fmt(T('Deine Antwort {ON} …')),autocomplete:'off',spellcheck:'false'});const send=h('button',{class:'btn primary'},T('Senden'));
  m.append(chat,h('div',{class:'row',style:'flex-wrap:nowrap'},inp,send),keys(()=>inp),h('p',{class:'muted small'},fmt(T('Tipp: Wenn du nicht weiterweißt, schreib auf {EX} „Hilfe: …“ – der Lehrer hilft dir.'))));
  function bubble(me,es,de,corr){const b=h('div',{class:'msg'+(me?' me':'')},h('div',{class:'who'},me?T('Du'):sit.npc||T('Profe')),h('div',{class:'row',style:'gap:8px;flex-wrap:nowrap'},me?null:spk(es),h('span',{class:'es-t'},me?es:aiH(es))),de?h('div',{class:'tr'},aiH(de)):null);chat.append(b);
    if(corr)chat.append(h('div',{class:'fb warn',style:'align-self:flex-end;max-width:82%;margin:0'},'✏️ ',h('span',{class:'es-t'},aiH(corr.richtig)),h('div',{class:'small'},aiH(corr.erklaerung))));b.scrollIntoView({behavior:'smooth',block:'end'});}
  async function turn(text){if(text){bubble(true,text);hist.push({role:'user',parts:[{text}]});}
    else hist.push({role:'user',parts:[{text:T('(Beginne das Gespräch mit deiner ersten Zeile.)')}]});
    send.disabled=true;send.textContent='…';
    try{const r=await gemini(sys,{history:hist});hist.push({role:'model',parts:[{text:JSON.stringify(r)}]});bubble(false,r.antwort_es,r.antwort_de,null);
      if(r.korrektur&&chat.children.length>1){const last=[...chat.querySelectorAll('.msg.me')].pop();if(last)last.after(h('div',{class:'fb warn',style:'align-self:flex-end;max-width:82%;margin:0'},'✏️ ',h('span',{class:'es-t'},aiH(r.korrektur.richtig)),h('div',{class:'small'},aiH(r.korrektur.erklaerung))));}
      say(String(r.antwort_es||'').replace(/<[^>]+>|[*_]/g,''));if(r.fertig)chat.append(h('div',{class:'fb ok'},TP('🎉 Ziel erreicht! ¡Muy bien!')));}
    catch(e){chat.append(h('div',{class:'fb bad'},AIN()+T('-Fehler: ')+e.message));}
    send.disabled=false;send.textContent=T('Senden');inp.focus();}
  send.onclick=()=>{const t=inp.value.trim();if(!t)return;inp.value='';turn(t);};inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();send.click();}};
  turn(null);}

/* ---------- settings ---------- */
/* Einladung (für Sync per Code und KI über den Server): einmal eingeben oder per Link ?einladung=CODE */
function codeInp(ph){const i=h('input',{class:'inp codeinp',placeholder:ph,autocapitalize:'characters',autocomplete:'off',spellcheck:'false'});i.oninput=()=>{const p=i.selectionStart;i.value=i.value.toUpperCase();try{i.setSelectionRange(p,p);}catch(e){}};return i;}
function inviteBox(after){const st=S.settings;const inp=codeInp(T('Einladungscode, z. B. SOL-4821'));const out=h('div');
  const ok=h('button',{class:'btn primary'},T('Einladung prüfen'));ok.onclick=async()=>{const v=inp.value.trim().toUpperCase();if(!v)return toast(T('Zuerst den Code eingeben'));ok.disabled=true;out.innerHTML='';
    try{const j=await srvPost('/api/check',{invite:v});st.invite=v;st.inviteName=j.name;save(true);toast(T('Willkommen, ')+j.name+' ✓');(after||route)();}catch(e){out.append(h('div',{class:'fb bad'},'✗ '+e.message));}ok.disabled=false;};
  return h('div',{class:'stack'},inp,ok,out);}
function srvSyncCard(){const st=S.settings;const out=h('div');const box=h('div',{class:'card',style:'margin-bottom:16px'},h('h2',{style:'margin-top:0'},T('☁️ Geräte verbinden')));
  const info=h('details',{class:'howto'},h('summary',{},T('Wie funktioniert das?')),h('p',{class:'muted small'},T('Dein Fortschritt wird automatisch gesichert und auf allen deinen Geräten abgeglichen – ohne Konto und ohne Passwort. Er liegt auf dem Mi-profe-Server (Cloudflare); wer deinen Sync-Code kennt, kann ihn sehen – also nur an eigene Geräte geben.')));
  const run=async(btn)=>{if(btn)btn.disabled=true;out.innerHTML='';try{await syncNow({throw:true});toast(T('✓ Synchronisiert'));}catch(e){out.append(h('div',{class:'fb bad'},'✗ '+netMsg(e)));}if(btn)btn.disabled=false;};
  if(!st.syncCode){const inp=codeInp(T('Sync-Code, z. B. SOL-4821-KXPA'));
    const neu=h('button',{class:'btn primary'},T('Sicherung einschalten'));neu.onclick=async()=>{neu.disabled=true;try{const j=await srvPost('/api/sync/new',{invite:st.invite});st.syncCode=j.code;save(true);await run();route();}catch(e){out.append(h('div',{class:'fb bad'},'✗ '+e.message));neu.disabled=false;}};
    const con=h('button',{class:'btn'},T('Verbinden'));con.onclick=async()=>{const v=inp.value.trim().toUpperCase();if(!/^[A-Z]+-\d{4}-[A-Z]{4}$/.test(v))return toast(T('Der Code sieht so aus: SOL-4821-KXPA'));st.syncCode=v;save(true);await run(con);if(!syncState.at){st.syncCode='';save(true);}else route();};
    /* neue Sicherung nur mit Einladung; ein weiteres Gerät verbinden geht auch nur mit dem Sync-Code */
    box.append(h('p',{class:'small',style:'margin:0 0 12px'},T('Fortschritt automatisch sichern und auf allen Geräten abgleichen – ohne Konto.')),
      h('div',{class:'kind'},T('Erstes Gerät')),
      st.invite?h('div',{class:'stack'},neu):h('div',{},h('p',{class:'muted small',style:'margin:0 0 6px'},T('Mit dem Einladungscode, den du bekommen hast:')),inviteBox()),
      h('div',{class:'kind',style:'margin-top:16px'},T('Schon auf einem anderen Gerät eingerichtet?')),
      h('div',{class:'stack'},inp,con),out,info);return box;}
  const link=location.origin+location.pathname+'?sync='+encodeURIComponent(st.syncCode);
  const share=h('button',{class:'btn'},T('🔗 Link fürs andere Gerät'));share.onclick=async()=>{try{if(navigator.share){await navigator.share({title:'Mi profe',text:T('Mi profe auf diesem Gerät verbinden'),url:link});return;}}catch(e){return;}
    try{await navigator.clipboard.writeText(link);toast(T('Link kopiert ✓'));}catch(e){prompt(T('Link kopieren:'),link);}};
  const sync=h('button',{class:'btn primary'},T('Jetzt synchronisieren'));sync.onclick=()=>run(sync);
  box.append(h('div',{class:'kind'},T('Dein Sync-Code')),h('div',{class:'synccode'},st.syncCode),h('p',{class:'muted small keep',id:'syncstat',style:'text-align:center;margin:0 0 12px'},syncLabel()),
    h('div',{class:'stack'},sync,share),out,
    h('p',{class:'muted small keep',style:'margin:10px 0 4px'},T('Nur für deine eigenen Geräte – nicht an andere weitergeben.')),
    h('div',{class:'row',style:'justify-content:space-between;align-items:center'},info,h('button',{class:'btn ghost small',onclick:async()=>{if(!await askConfirm(T('Dieses Gerät vom Sync trennen? Dein Fortschritt bleibt hier und auf dem Server erhalten.'),T('Trennen')))return;st.syncCode='';save(true);route();}},T('Trennen'))));return box;}
/* Netzwerkfehler (fetch: „Load failed“/„Failed to fetch“) verständlich anzeigen */
function netMsg(e){const m=String(e&&e.message||e);return /load failed|failed to fetch|networkerror|network/i.test(m)?T('Keine Internetverbindung – die App funktioniert trotzdem, der Abgleich kommt später.'):m;}
function srvAICard(){const st=S.settings;const box=h('div',{class:'card',style:'margin-bottom:16px'},h('h2',{style:'margin-top:0'},T('🤖 KI über Einladung')));
  const info=h('details',{class:'howto'},h('summary',{},T('Wie funktioniert das?')),h('p',{class:'muted small'},T('Mit einer Einladung kannst du die KI (Texte korrigieren, Gespräche, „Warum?“) ohne eigenen Schlüssel nutzen – mit einem Tageslimit. Hinweis: Die Anfragen gehen an Google Gemini; dort keine persönlichen Daten eintippen.')));
  if(!st.invite){box.append(h('p',{class:'small',style:'margin:0 0 12px'},T('Texte korrigieren, Gespräche und „Warum?“ – ohne eigenen Schlüssel.')),inviteBox(),info);return box;}
  box.append(h('div',{class:'fb ok',style:'margin:0 0 8px'},T('✓ KI aktiv')+(st.inviteName?' · '+st.inviteName:'')+(AI_LEFT!=null?' · '+T('heute noch ')+AI_LEFT+T(' Anfragen'):'')),
    st.geminiKey?h('p',{class:'muted small'},T('Du hast zusätzlich einen eigenen Schlüssel eingetragen – der wird bevorzugt.')):null,
    h('div',{class:'row',style:'justify-content:space-between;align-items:center'},info,h('button',{class:'btn ghost small',onclick:async()=>{if(!await askConfirm(T('Einladung auf diesem Gerät entfernen? KI und neue Sync-Codes gehen dann nicht mehr.'),T('Entfernen')))return;st.invite='';st.inviteName='';save(true);route();}},T('Einladung entfernen'))));return box;}
function vSettingsAll(m){const st=S.settings;
  const voiceSel=h('select',{class:'inp',style:'font-size:15px'});const fillV=()=>{loadVoices();voiceSel.innerHTML='';voiceSel.append(h('option',{value:''},T('Automatisch (beste Stimme)')));voices.forEach(v=>voiceSel.append(h('option',{value:v.name,selected:v.name===st.voice},v.name+' ('+v.lang+')'+(vQual(v)===2?T(' · Premium'):vQual(v)===1?T(' · Erweitert'):''))));};fillV();setTimeout(fillV,500);
  voiceSel.onchange=()=>{st.voice=voiceSel.value;save();say((LANG.sampleSay||[T('Hola')])[0]);};
  const rate=h('input',{type:'range',min:'0.5',max:'1.2',step:'0.05',value:st.rate});rate.oninput=()=>{st.rate=+rate.value;save();};rate.onchange=()=>say((LANG.sampleSay||[T('Hola')])[1]||(LANG.sampleSay||[T('Hola')])[0]);
  const theme=h('select',{class:'inp',style:'font-size:15px'},[['auto',T('Wie System')],['light',T('Hell')],['dark',T('Dunkel')]].map(([v,l])=>h('option',{value:v,selected:st.theme===v},l)));theme.onchange=()=>{st.theme=theme.value;save();route();};
  const tr=h('input',{type:'checkbox',checked:st.showTr});tr.onchange=()=>{st.showTr=tr.checked;save();};
  const mix=h('input',{type:'checkbox',checked:!!st.mixOnly});mix.onchange=()=>{st.mixOnly=mix.checked;save();setAudioMode();};
  m.append(h('div',{class:'card',style:'margin-bottom:16px'},h('h2',{style:'margin-top:0'},T('🔊 Aussprache')),
    h('div',{class:'field'},h('label',{},T('Stimme')),voiceSel,h('span',{class:'muted small'},(T(LANG.voiceHint||'')||''))),
    h('div',{class:'field'},h('label',{},T('Sprechtempo')),rate),
    h('label',{class:'row'},tr,T('Übersetzungen in Dialogen sofort zeigen')),
    IS_IOS?h('label',{class:'row',style:'margin-top:8px'},mix,T('Musik anderer Apps nie unterbrechen')):null,
    IS_IOS?h('span',{class:'muted small'},T('Aus (Standard): App immer hörbar, auch stumm geschaltet – andere Musik wird dabei pausiert. An: Musik läuft immer weiter, die App ist dann nur mit Ton-Schalter hörbar.')):null,
    h('div',{class:'field',style:'margin-top:12px'},h('label',{},T('Darstellung')),theme)));
  if(SRV()){m.append(srvSyncCard(),srvAICard());}
  const key=h('input',{class:'inp',type:'password',value:st.geminiKey,placeholder:T('AIza…'),style:'font-size:15px'});
  const model=h('input',{class:'inp',value:st.geminiModel,style:'font-size:15px'});const out=h('div');
  const test=h('button',{class:'btn'},T('Verbindung testen'));
  test.onclick=async()=>{st.geminiKey=key.value.trim();st.geminiModel=model.value.trim()||'gemini-flash-latest';save();out.innerHTML='';test.disabled=true;test.textContent=T('Teste…');
    try{const r=await gemini(T('Antworte als JSON {"ok":true,"saludo":"ein kurzer Gruß auf ')+LANG.code+'"}');model.value=st.geminiModel;out.append(h('div',{class:'fb ok'},T('✓ Funktioniert (')+st.geminiModel+T(')! Gemini sagt: '),h('span',{class:'es-t'},r.saludo||'')));}
    catch(e){out.append(h('div',{class:'fb bad'},'✗ '+e.message));
      try{const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=100&key='+encodeURIComponent(st.geminiKey));const j=await r.json();
        const ms=(j.models||[]).filter(x=>(x.supportedGenerationMethods||[]).includes('generateContent')&&/flash/.test(x.name)&&!/image|tts|audio|live|embed/.test(x.name)).map(x=>x.name.replace('models/',''));
        if(ms.length)out.append(h('div',{class:'fb ai'},T('Verfügbare Modelle (klicken zum Übernehmen): '),h('div',{class:'row',style:'margin-top:6px'},ms.slice(0,12).map(n=>h('button',{class:'btn small',onclick:()=>{model.value=n;test.click();}},n)))));}catch(_){}}
    test.disabled=false;test.textContent=T('Verbindung testen');};
  if(SAMPLE){const sel=h('select',{class:'inp',style:'font-size:15px'},[['claude',T('Claude (über dein Claude-Abo, schnellstes Modell)')],['gemini',T('Gemini (eigener API-Key)')]].map(([v,l])=>h('option',{value:v,selected:(st.aiProvider||'claude')===v},l)));sel.onchange=()=>{st.aiProvider=sel.value;save();toast(T('Gespeichert'));};
    m.append(h('div',{class:'card',style:'margin-bottom:16px;border-color:var(--ok)'},h('h2',{style:'margin-top:0'},T('🤖 KI-Lehrer: Claude ist aktiv')),h('p',{class:'muted'},T('Du nutzt die App über claude.ai. Korrekturen, Erklärungen und Gespräche laufen über dein Claude-Abo mit dem schnellsten, sparsamsten Modell. Beim ersten Mal fragt claude.ai, ob die Seite Claude nutzen darf.')),h('div',{class:'field'},h('label',{},T('KI-Anbieter')),sel)));}
  m.append(h('div',{class:'card',style:'margin-bottom:16px'},h('h2',{style:'margin-top:0'},T('🤖 Gemini (optional)')),
    h('p',{class:'muted'},T('Nur für freie Texte, Gespräche und „Warum?“-Erklärungen. Alles andere läuft offline ohne KI. Der Key wird nur hier in deinem Browser gespeichert und direkt an Google geschickt.')),
    h('ol',{class:'small',style:'padding-left:18px'},h('li',{},T('Öffne '),h('a',{href:'https://aistudio.google.com/apikey',target:'_blank'},'aistudio.google.com/apikey'),T(' und melde dich mit deinem Google-Konto an.')),h('li',{},T('„API-Schlüssel erstellen“ → Schlüssel kopieren.')),h('li',{},T('Hier einfügen und „Verbindung testen“ klicken.'))),
    h('div',{class:'field'},h('label',{},T('API-Key')),key),h('div',{class:'field'},h('label',{},T('Modell')),model,h('span',{class:'muted small'},T('Standard: gemini-flash-latest (zeigt automatisch immer auf das aktuelle Flash-Modell). Wenn ein Modell nicht mehr verfügbar ist, wechselt die App automatisch.'))),
    h('div',{class:'row'},test,h('button',{class:'btn ghost',onclick:()=>{key.value='';st.geminiKey='';save();toast(T('Key entfernt'));}},T('Key entfernen'))),out));
  {const tok=h('input',{class:'inp',type:'password',value:st.ghToken||'',placeholder:T('ghp_… oder github_pat_…'),style:'font-size:15px'});const sout=h('div');
    const con=h('button',{class:'btn primary'},st.ghToken?T('Jetzt synchronisieren'):T('Verbinden & synchronisieren'));
    con.onclick=async()=>{const v=tok.value.trim();if(!v){toast(T('Zuerst den Schlüssel einfügen'));return;}if(v!==st.ghToken){st.ghToken=v;st.gistId='';save(true);}
      con.disabled=true;con.textContent=T('Synchronisiere…');sout.innerHTML='';
      try{await syncNow({throw:true,quiet:true});sout.append(h('div',{class:'fb ok'},T('✓ Synchronisiert. Auf deinen anderen Geräten denselben Schlüssel eintragen – dann haben alle denselben Stand.')));}
      catch(e){sout.append(h('div',{class:'fb bad'},'✗ '+e.message));}
      con.disabled=false;con.textContent=T('Jetzt synchronisieren');};
    const ghT=T('☁️ Geräte synchronisieren (GitHub)');
    /* mit Sync-Code über den Mi-profe-Server ist GitHub überflüssig: nur noch ein alter Schlüssel zum Entfernen */
    if(SRV()&&useCode()){if(st.ghToken)m.append(h('div',{class:'card',style:'margin-bottom:16px'},h('h2',{style:'margin-top:0;font-size:16px'},ghT),h('p',{class:'small',style:'margin:0 0 8px'},T('Hier ist noch ein GitHub-Schlüssel gespeichert. Den brauchst du nicht mehr – der Abgleich läuft über deinen Sync-Code.')),
        h('button',{class:'btn ghost small',onclick:()=>{st.ghToken='';st.gistId='';save(true);toast(T('GitHub-Sync entfernt'));route();}},T('GitHub-Sync entfernen'))));}
    else{const gb=[
      h('p',{class:'muted'},T('Damit Mac, PC und iPhone denselben Stand haben. Dein Fortschritt wird als private Datei (Secret Gist) in deinem GitHub-Account gespeichert und automatisch abgeglichen: beim Öffnen, nach dem Lernen und wenn du zur App zurückkehrst. Der Gemini-Key wird dabei nicht übertragen.')),
      h('ol',{class:'small',style:'padding-left:18px'},
        h('li',{},T('Bei GitHub anmelden und '),h('a',{href:'https://github.com/settings/tokens/new?scopes=gist&description=Mi%20profe%20Sync',target:'_blank'},T('diesen Link öffnen')),T(' (Token-Seite, Häkchen „gist“ ist schon gesetzt).')),
        h('li',{},T('Bei „Expiration“ am besten „No expiration“ oder 1 Jahr wählen → ganz unten „Generate token“.')),
        h('li',{},T('Den Schlüssel kopieren, hier einfügen, „Verbinden“ klicken – und auf jedem Gerät dasselbe tun.'))),
      h('div',{class:'field'},h('label',{},T('GitHub-Zugangsschlüssel (nur Berechtigung „gist“)')),tok),
      h('div',{class:'row'},con,st.ghToken?h('button',{class:'btn ghost',onclick:()=>{st.ghToken='';st.gistId='';save(true);toast(T('Sync auf diesem Gerät beendet'));route();}},T('Sync beenden')):null,h('span',{class:'muted small'},syncLabel())),sout];
    /* mit Server: GitHub nur noch als eingeklappte Alternative */
    m.append(h('div',{class:'card',style:'margin-bottom:16px'},h('h2',{style:'margin-top:0'+(SRV()?';font-size:16px':'')},ghT),SRV()&&!st.ghToken?h('details',{class:'howto'},h('summary',{},T('Statt Sync-Code: eigenes GitHub-Konto (für Fortgeschrittene)')),...gb):gb));}}
  const file=h('input',{type:'file',accept:'.json',class:'hide'});file.onchange=async()=>{try{const d=JSON.parse(await file.files[0].text());if(!d.srs&&!d.lessons)throw 0;const k=S.settings.geminiKey,gt=S.settings.ghToken,gi=S.settings.gistId;S=Object.assign(JSON.parse(JSON.stringify(DEFAULT)),d);S.settings=Object.assign({},DEFAULT.settings,d.settings||{});if(!S.settings.geminiKey)S.settings.geminiKey=k;S.settings.ghToken=gt;S.settings.gistId=gi;save();toast(T('Backup geladen ✓'));route();}catch(e){toast(T('Datei ungültig'));}};
  m.append(h('div',{class:'card'},h('h2',{style:'margin-top:0'},T('💾 Fortschritt sichern')),h('p',{class:'muted'},T('Dein Fortschritt liegt im Browser. Wenn du Browser-Daten löschst oder den Browser wechselst, ist er weg – also ab und zu ein Backup machen. Auch nützlich, wenn ich dir eine neue Version der App schicke (die übernimmt den Fortschritt aber normalerweise automatisch, solange du denselben Browser nutzt).')),
    h('div',{class:'row'},h('button',{class:'btn',onclick:async()=>{const d=JSON.parse(JSON.stringify(S));d.settings.geminiKey='';d.settings.ghToken='';d.settings.gistId='';const txt=JSON.stringify(d,null,1);const fn='mi-profe-'+LANG.code+'-fortschritt-'+today()+'.json';
        if(IN_ARTIFACT){const dl=await window.claude.use('downloads').catch(()=>null);if(!dl){toast(T('Download hier nicht verfügbar'));return;}try{await dl.save({filename:fn,data:txt});}catch(e){toast(T('Download abgebrochen'));}return;}
        const a=h('a',{href:URL.createObjectURL(new Blob([txt],{type:'application/json'})),download:fn});document.body.append(a);a.click();a.remove();}},T('⬇️ Backup herunterladen')),
      h('button',{class:'btn',onclick:()=>file.click()},T('⬆️ Backup laden')),file,h('span',{class:'spacer'}),
      h('button',{class:'btn ghost',style:'color:var(--bad)',onclick:async()=>{if(await askConfirm(T('Wirklich den ganzen Fortschritt zurücksetzen?'),T('Zurücksetzen'))){const k=S.settings;S=JSON.parse(JSON.stringify(DEFAULT));S.settings=k;save(true);if(k.ghToken&&k.gistId){gh('/gists/'+k.gistId,{method:'PATCH',body:JSON.stringify({files:{[GIST_FILE]:{content:JSON.stringify(payload())}}})}).catch(()=>{});}if(useCode())fetch(codeUrl(),{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload())}).catch(()=>{});route();}}},T('Alles zurücksetzen')))));
}


function vLang(m){m.append(backTo(T('Mehr'),'settings'),h('h1',{},T('Sprache & Profil')));
  /* Lernsprachen aus dem Verzeichnis PACKS (auch nicht geladene Pakete); ohne Verzeichnis (Einzeldatei) aus dem Register */
  const avail=learnPacks();const planned=LANG_PLANNED.filter(([c])=>!avail.some(L=>L.code===c));
  const pick=code=>{if(code===LANG.code)return go('home');save(true);try{localStorage.setItem(SHARED,JSON.stringify({lang:code,ui:UI,ex:EX_SET,name:S.name,surname:S.surname,gender:S.gender,settings:S.settings}));}catch(e){}if(IN_ARTIFACT){toast(T('Sprachwechsel nur in der installierten App'));return;}location.hash='home';reloadApp();};
  m.append(h('div',{class:'kind',style:'margin-top:8px'},T('Ich lerne')),h('div',{class:'chips'},
    ...avail.map(L=>h('button',{class:'chip'+(L.code===LANG.code?' on':''),onclick:()=>pick(L.code)},h('span',{},L.flag),h('span',{},T(L.name)))),
    ...planned.map(([c,n,f])=>h('button',{class:'chip soon',onclick:()=>betaTry(c,n,pick)},h('span',{},f),h('span',{},T(n)+T(' · bald'))))),
    h('p',{class:'muted small',style:'margin:6px 0 0'},T('Jede Sprache hat ihren eigenen Fortschritt.')));
  m.append(h('div',{class:'kind',style:'margin-top:20px'},T('Sprache der App')),h('div',{class:'seg'},UI_LANGS.map(([c,f,n])=>h('button',{class:c===UI?'on':'',onclick:()=>{if(c!==UI)setUI(c);}},h('b',{},f),h('span',{},n)))),
    h('p',{class:'muted small',style:'margin:6px 0 0'},T('Knöpfe, Menüs und Hinweise.')));
  m.append(h('div',{class:'kind',style:'margin-top:20px'},fmt(T('{L} lernen mit'))),h('div',{class:'chips'},EX_LANGS.map(c=>h('button',{class:'chip'+(c===EX?' on':''),onclick:()=>{if(c!==EX){if(IN_ARTIFACT){toast(T('Sprachwechsel nur in der installierten App'));return;}setEX(c);}}},h('span',{},EX_FLAGS[c]||''),h('span',{},fmt(T(EX_NAMES[c]||c)))))),
    h('p',{class:'muted small',style:'margin:6px 0 0'},T('Erklärungen, Übersetzungen und Wortbedeutungen im Kurs – unabhängig von der Sprache der App.')));
  const orig=(()=>{const o=S.origin||{};const X=ORIGINS[o.c||'DE'];return (o.other?'🌍 '+o.other:X[0]+' '+T(X[1].replace(/^die /,'')))+(o.city?' · '+o.city:'');})();
  const prow=(txt,r)=>h('div',{class:'row',style:'flex-wrap:nowrap'},h('div',{style:'flex:1;min-width:0;font-weight:600'},txt),h('button',{class:'btn small',onclick:()=>go(r)},T('Ändern')));
  m.append(h('div',{class:'kind',style:'margin-top:20px'},T('Profil')),h('div',{class:'card',style:'padding:10px 16px;display:grid;gap:8px'},
    prow('👤 '+S.name+(S.surname?' '+S.surname:'')+(S.gender==='f'?T(' · weiblich'):S.gender==='m'?T(' · männlich'):S.gender==='x'?T(' · keine Angabe'):''),'name'),prow(orig,'origin')));}
/* Ländername in der App-Sprache (de/es/en aus ORIGINS, pt über ui_tr oder Englisch) */
function originName(X){const de=X[1].replace(/^(die|der) /,'');if(UI==='de')return de;if(UI==='es'){const e=X[2].replace(/^(el|los) /,'');return e.charAt(0).toUpperCase()+e.slice(1);}
  if(UI==='pt'&&T(de)!==de)return T(de);return X[3].replace(/^the /,'');}
function vOrigin(m){const o=Object.assign({c:'DE',city:'',other:''},S.origin||{});let sel=o.other?'XX':o.c;
  const city=h('input',{class:'inp',placeholder:T('Stadt (optional)'),value:o.city,autocapitalize:'words',style:'font-size:16px;margin-top:6px'});
  const other=h('input',{class:'inp'+(sel==='XX'?'':' hide'),placeholder:fmt(T('Land ({ON}, z. B. {X})')).replace('{X}',(LANG.origin||{}).otherEx||''),value:o.other,autocapitalize:'words',style:'font-size:16px;margin-top:8px'});
  /* Auswahlliste (am iPhone als Drehrad): DACH oben, dann alle Länder alphabetisch in der App-Sprache, zuletzt „Anderes Land“ */
  const opt=c=>{const X=ORIGINS[c];return h('option',{value:c,selected:sel===c},X[0]+' '+originName(X));};
  const rest=Object.keys(ORIGINS).filter(c=>!['DE','AT','CH'].includes(c)).sort((a,b)=>originName(ORIGINS[a]).localeCompare(originName(ORIGINS[b]),UI));
  const chips=h('select',{class:'inp',style:'font-size:16px'},['DE','AT','CH'].map(opt),h('option',{disabled:true},'──────────'),rest.map(opt),h('option',{value:'XX',selected:sel==='XX'},'🌍 '+T('Anderes Land')));
  chips.onchange=()=>{sel=chips.value;other.classList.toggle('hide',sel!=='XX');if(sel==='XX')other.focus();};
  m.append(backTo(T('Sprache & Profil'),'lang'),h('h1',{},T('Herkunft')),h('p',{class:'sub'},(()=>{const X=(LANG.origin||{}).examples;return X?T('Woher kommst du? Übungen wie „{A}“ und „{B}“ passen sich daran an.').replace('{A}',X[0]).replace('{B}',X[1]):T('Woher kommst du? Übungen zur Herkunft passen sich daran an.');})()),
    h('div',{class:'kind',style:'margin-top:4px'},T('Land')),chips,other,h('div',{class:'kind',style:'margin-top:16px'},T('Stadt')),city,
    h('button',{class:'btn primary',style:'margin-top:16px',onclick:()=>{const v=sel==='XX'?{c:'',other:other.value.trim().slice(0,40),city:city.value.trim().slice(0,40)}:{c:sel,other:'',city:city.value.trim().slice(0,40)};
      if(sel==='XX'&&!v.other)return toast(T('Gib dein Land ein'));S.origin=v;S.profT=Date.now();save();if(IN_ARTIFACT){toast(T('Gespeichert'));return;}location.hash='lang';reloadApp();}},T('Speichern')));}
/* Unterseiten von „Mehr“: welche Karten aus vSettingsAll gezeigt werden (Erkennung über die – ggf. übersetzte – Überschrift) */
const SETSEC=[['stimme','🔊',T('Stimme & Darstellung'),T('Tempo, Stimme, hell/dunkel'),['🔊 Aussprache']],
  ['ki','🤖',T('KI-Lehrer'),T('Gemini für Texte & Gespräche'),['🤖 KI-Lehrer: Claude ist aktiv','🤖 KI über Einladung','🤖 Gemini (optional)']],
  ['sync','☁️',T('Sync & Backup'),T('Geräte abgleichen & sichern'),['☁️ Geräte verbinden','☁️ Geräte synchronisieren (GitHub)','💾 Fortschritt sichern']]];
function vPlanSet(m){const P=Object.assign({},PLAN_DEF,S.plan||{});
  const L=[['vocab','🗂️',T('Vokabeln wiederholen'),T('bis zum Tagesziel')],['lesson','📚',T('Nächste Lektion'),T('Lernen, Üben, Festigen, Tests')],['catchup','↩️',T('Nachholen'),T('Offenes aus früheren Lektionen')],['mix','🔀',T('Gemischte Wiederholung'),T('15 Aufgaben aus allem Gelernten')],
    ['story','📖',T('Geschichte'),T('wenn eine neue freigeschaltet ist')],['freq','📚',T('Häufige Wörter'),T('der aktuellen ')+UW],['shadow','🎧',T('Aussprache'),T('7 Sätze Shadowing')],['mistakes','✏️',T('Fehler üben'),T('wenn es offene Fehler gibt')]];
  m.append(backTo(T('Mehr'),'settings'),h('h1',{},T('Mein Tagesplan')),h('p',{class:'sub'},T('Angehakt = jeden Tag im Plan auf der Startseite. Der Rest steht unter „Extras“. Reihenfolge: leicht → schwer.')),
    h('div',{class:'card planset'},L.map(([id,ic,t,d])=>{const cb=h('input',{type:'checkbox',checked:!!P[id]});
      cb.onchange=()=>{S.plan=Object.assign({},PLAN_DEF,S.plan||{},{[id]:cb.checked});S.planT=Date.now();save();};
      return h('label',{class:'row planrow'},cb,h('span',{class:'pic'},ic),h('span',{style:'flex:1;min-width:0'},h('b',{},t),h('span',{class:'muted small',style:'display:block'},d)));})));}
function vSettings(m,sec){
  if(sec==='plan')return vPlanSet(m);
  const s=SETSEC.find(x=>x[0]===sec);
  if(s){const tmp=h('div');vSettingsAll(tmp);const want=s[4].map(x=>T(x));const cards=[...tmp.children].filter(el=>want.includes(el.querySelector('h2')?.textContent||''));
    /* lange Erklärtexte einklappen, damit die Seite ohne Scrollen auskommt */
    cards.forEach(el=>{const info=[...el.children].filter(x=>x.matches('p.muted:not(.keep),ol'));if(!info.length)return;const d=h('details',{class:'howto'},h('summary',{},T('Anleitung & Infos')));info[0].before(d);d.append(...info);});
    m.append(backTo(T('Mehr'),'settings'),h('h1',{},s[2]),...cards.map(el=>{if(cards.length===1)el.querySelector('h2')?.remove();return el;}));return;}
  const upd=async()=>{toast(T('Suche nach Update …'));try{const r=navigator.serviceWorker&&await navigator.serviceWorker.getRegistration();if(r)await r.update();
    const html=await (await fetch(location.pathname+'?v='+Date.now(),{cache:'no-store'})).text();const v=(html.match(/APP_VERSION="([^"]+)"/)||[])[1];
    if(v&&v!==window.APP_VERSION){toast(T('Neue Version gefunden – lade neu …'));if(window.caches)for(const k of await caches.keys())await caches.delete(k);setTimeout(()=>reloadApp(),600);}else toast(T('Du hast schon die neueste Version ✓'));}catch(e){toast(T('Keine Verbindung – später noch mal versuchen'));}};
  const ver=window.APP_VERSION?window.APP_VERSION.replace(/^(\d{4})(\d\d)(\d\d)-(\d\d)(\d\d)$/,'$3.$2.$1, $4:$5'):T('Offline-Datei');
  m.append(h('h1',{},T('Mehr')),tiles(mtile('🌍',T('Sprache & Profil'),LANG.flag+' '+T(LANG.name)+' · '+S.name,()=>go('lang')),mtile('📅',T('Mein Tagesplan'),T('Was täglich dran ist'),()=>go('settings/plan')),
    ...SETSEC.map(x=>mtile(x[1],x[2],x[3],()=>go('settings/'+x[0])))),
    h('div',{class:'row verline'},h('span',{class:'muted small'},T('Version ')+ver),window.PWA?h('button',{class:'btn small ghost',onclick:upd},'🔄 '+T('Nach Update suchen')):null));}

/* ---------- Sync über GitHub Gist ---------- */
const GIST_FILE=LANG.gist,GIST_DESC=T('Mi profe – Lernfortschritt (Sync)');
let syncState={status:'',at:null},syncTimer=null,syncBusy=false;
const useCode=()=>!!(SRV()&&S.settings.syncCode);const syncOn=()=>!!S.settings.ghToken||useCode();
const codeUrl=()=>SRV()+'/api/sync/'+encodeURIComponent(S.settings.syncCode)+'/'+encodeURIComponent(GIST_FILE);
function syncLabel(){const st=S.settings;if(!syncOn())return T('Fortschritt nur auf diesem Gerät');
  if(syncState.status==='busy')return T('☁️ synchronisiere…');if(syncState.status==='error')return T('⚠️ Sync-Fehler (offline?)');
  return syncState.at?T('☁️ synchronisiert ')+new Date(syncState.at).toLocaleTimeString(T('de-DE'),{hour:'2-digit',minute:'2-digit'}):T('☁️ Sync aktiv');}
function setSync(st){syncState.status=st;if(st==='ok')syncState.at=Date.now();const e=document.getElementById('syncstat');if(e)e.textContent=syncLabel();}
function payload(){const d=JSON.parse(JSON.stringify(S));delete d.settings;return d;}
function mergeState(a,b){ // a=lokal, b=remote → vereinigt, nichts geht verloren
  const o=JSON.parse(JSON.stringify(a));
  o.lessons=Object.assign({},b.lessons||{});for(const[k,v]of Object.entries(a.lessons||{})){const r=o.lessons[k];
    o.lessons[k]=r?{done:!!(v.done||r.done),best:Math.max(v.best||0,r.best||0),date:(v.date||'')>(r.date||'')?v.date:r.date,r:Math.max(legacyR(v),legacyR(r)),d2:(v.d2||'')>(r.d2||'')?v.d2:r.d2,check:!!(v.check||r.check)}:v;}
  o.srs=Object.assign({},b.srs||{});for(const[k,v]of Object.entries(a.srs||{})){const r=o.srs[k];
    if(!r)o.srs[k]=v;else if((v.t||0)>(r.t||0)||(!v.t&&!r.t&&(v.box||0)>(r.box||0)))o.srs[k]=v;}
  const pa=a.placement,pb=b.placement;o.placement=!pa?pb||null:!pb?pa:((pa.ts||0)>=(pb.ts||0)?pa:pb);
  const sa=a.stats||{},sb=b.stats||{};o.stats={answers:Math.max(sa.answers||0,sb.answers||0),correct:Math.max(sa.correct||0,sb.correct||0),days:Object.assign({},sb.days||{})};
  for(const[d,n]of Object.entries(sa.days||{}))o.stats.days[d]=Math.max(n,o.stats.days[d]||0);
  const ta=a.streak||{},tb=b.streak||{};o.streak=(ta.last||'')>(tb.last||'')?ta:(tb.last||'')>(ta.last||'')?tb:((ta.count||0)>=(tb.count||0)?ta:tb);
  o.mistakes=((a.updated||0)>=(b.updated||0)?a.mistakes:b.mistakes)||[];
  o.lastMix=(a.lastMix||'')>(b.lastMix||'')?a.lastMix:b.lastMix;
  if((b.vocabGoalT||0)>(a.vocabGoalT||0)){o.vocabGoal=b.vocabGoal;o.vocabGoalT=b.vocabGoalT;}
  if((b.planT||0)>(a.planT||0)){o.plan=b.plan;o.planT=b.planT;}
  o.mylists=Object.assign({},b.mylists||{});for(const[k,v]of Object.entries(a.mylists||{})){const r=o.mylists[k];if(!r||(v.t||0)>=(r.t||0))o.mylists[k]=v;}
  o.vlog=Object.assign({},b.vlog||{});for(const[k,v]of Object.entries(a.vlog||{}))o.vlog[k]=Math.max(v,o.vlog[k]||0);
  o.day=Object.assign({},b.day||{});for(const[k,v]of Object.entries(a.day||{}))if(v>(o.day[k]||''))o.day[k]=v;
  o.shadow=Object.assign({},b.shadow||{},a.shadow||{});
  /* Profil (Name, Nachname, Ansprache, Herkunft): neueste Änderung gewinnt (profT), sonst wie bisher lokal zuerst */
  {const P=(b.profT||0)>(a.profT||0)?[b,a]:[a,b];o.name=P[0].name||P[1].name;o.gender=P[0].gender||P[1].gender;o.origin=P[0].origin||P[1].origin;o.surname=P[0].profT?P[0].surname:(P[0].surname||P[1].surname);if(!o.surname)delete o.surname;o.profT=Math.max(a.profT||0,b.profT||0)||undefined;}
  o.readings=Object.assign({},b.readings||{});for(const[k,v]of Object.entries(a.readings||{})){const r=o.readings[k];o.readings[k]=!r?v:{date:v.date>r.date?v.date:r.date,score:Math.max(v.score||0,r.score||0)};}
  o.stories=Object.assign({},b.stories||{});for(const[k,v]of Object.entries(a.stories||{})){const r=o.stories[k];o.stories[k]=!r?v:{date:v.date>r.date?v.date:r.date,score:Math.max(v.score||0,r.score||0)};}
  o.checks=Object.assign({},b.checks||{});for(const[k,v]of Object.entries(a.checks||{})){const r=o.checks[k];o.checks[k]=!r?v:{date:(v.date>r.date?v.date:r.date),score:Math.max(v.score||0,r.score||0),pass:!!(v.pass||r.pass)};}
  o.updated=Math.max(a.updated||0,b.updated||0);return o;}
async function gh(path,opt={}){const r=await fetch('https://api.github.com'+path,Object.assign({},opt,{headers:Object.assign({'Accept':'application/vnd.github+json','Authorization':'Bearer '+S.settings.ghToken},opt.body?{'Content-Type':'application/json'}:{})}));
  if(r.status===401)throw new Error(T('Zugangsschlüssel ungültig oder abgelaufen.'));if(!r.ok)throw new Error(T('GitHub-Fehler ')+r.status);return r.status===204?null:r.json();}
async function findOrCreateGist(){
  for(let page=1;page<=5;page++){const list=await gh('/gists?per_page=100&page='+page);const g=list.find(x=>x.files&&Object.keys(x.files).some(f=>f.startsWith('mi-profe-fortschritt')));if(g)return g.id;if(list.length<100)break;}
  const g=await gh('/gists',{method:'POST',body:JSON.stringify({description:GIST_DESC,public:false,files:{[GIST_FILE]:{content:JSON.stringify(payload())}}})});return g.id;}
async function syncNow(opts={}){const st=S.settings;if(!syncOn()||syncBusy)return false;syncBusy=true;setSync('busy');
  try{let remote={};
    if(useCode()){/* Sync-Code: Fortschritt dieser Lernsprache vom Mi-profe-Server */const r=await fetch(codeUrl(),{cache:'no-store'});
      if(r.status===404)throw new Error(T('Sync-Code unbekannt – bitte prüfen.'));if(!r.ok)throw new Error(T('Server-Fehler ')+r.status);remote=await r.json().catch(()=>({}));}
    else{if(!st.gistId){st.gistId=await findOrCreateGist();save(true);}
    const g=await gh('/gists/'+st.gistId);const f=g.files&&g.files[GIST_FILE];
    if(f){let txt=f.content;if(f.truncated&&f.raw_url)txt=await (await fetch(f.raw_url)).text();try{remote=JSON.parse(txt||'{}');}catch(e){remote={};}}}
    const before=JSON.stringify(payload());const settings=S.settings;
    const merged=mergeState(payload(),remote);S=Object.assign(JSON.parse(JSON.stringify(DEFAULT)),merged);S.settings=settings;
    try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}
    const after=JSON.stringify(payload());
    if(after!==JSON.stringify(remote)){if(useCode()){const r=await fetch(codeUrl(),{method:'PUT',headers:{'Content-Type':'application/json'},body:after});if(!r.ok)throw new Error(T('Server-Fehler ')+r.status);}
      else await gh('/gists/'+st.gistId,{method:'PATCH',body:JSON.stringify({files:{[GIST_FILE]:{content:after}}})});}
    setSync('ok');
    if(before!==after&&!opts.quiet){const r=curRoute().split('/')[0];if(['home','units','unit','vocab','mistakes','placement','settings','words','resumen'].includes(r))route();}
    return true;}
  catch(e){setSync('error');console.warn(T('Sync'),e);if(opts.throw)throw e;return false;}
  finally{syncBusy=false;}}
/* Abgleich nach dem Lernen: GitHub nach 4 s Ruhe, Server-Code nach 30 s (schont den kostenlosen Speicher), immer beim Verlassen der App */
window.__sync={schedule(){if(!syncOn())return;clearTimeout(syncTimer);syncTimer=setTimeout(()=>syncNow({quiet:true}),useCode()?30000:4000);}};
window.addEventListener('focus',()=>{if(syncOn())syncNow();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&syncOn()){clearTimeout(syncTimer);syncNow({quiet:true});}});

window.__app={S:()=>S,compare,route,mergeState,RENDER,resolveRef,numEs,horaEs,numItems};
/* App-Gefühl: kein Pinch-/Doppeltipp-Zoom */
['gesturestart','gesturechange','gestureend'].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault(),{passive:false}));
document.addEventListener('touchmove',e=>{if(e.touches&&e.touches.length>1)e.preventDefault();},{passive:false});
/* Einladungs- und Verbinden-Links: ?einladung=CODE schaltet den Server frei, ?sync=CODE verbindet dieses Gerät */
{const q=new URLSearchParams(location.search);const inv=q.get('einladung'),sc=q.get('sync');
  if(inv||sc){if(inv)S.settings.invite=inv.trim().toUpperCase();if(sc)S.settings.syncCode=sc.trim().toUpperCase();save(true);
    try{history.replaceState(null,'',location.pathname+location.hash);}catch(e){}setTimeout(()=>toast(sc?T('Gerät wird verbunden …'):T('Einladung gespeichert ✓')),800);}}
setTimeout(()=>{if(syncOn())syncNow();},300);
/* Service Worker: App kommt sofort aus dem Speicher; Updates im Hintergrund prüfen (beim Start und beim Zurückkehren in die App).
   Hat eine neue Version übernommen → Hinweis zum Neuladen (nicht automatisch, damit keine Lektion abbricht). */
if('serviceWorker' in navigator&&/^https?:/.test(location.protocol)&&window.PWA){const hadCtl=!!navigator.serviceWorker.controller;
  navigator.serviceWorker.register('sw.js').then(r=>{const chk=()=>r.update().catch(()=>{});setTimeout(chk,3000);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')chk();});}).catch(()=>{});
  navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!hadCtl||document.getElementById('updbar'))return;
    document.body.append(h('button',{id:'updbar',class:'updbar',onclick:()=>reloadApp()},T('✨ Neue Version – tippen zum Laden')));});}
route();
})();
