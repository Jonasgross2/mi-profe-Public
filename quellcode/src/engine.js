/* ===== Mi profe · Engine (sprachunabhängig – alles Sprachspezifische steht im Paket LANG, siehe lang.js) ===== */
(function(){
'use strict';
selectLang();
/* Oberflächensprache: T(deutscher Text) liefert die Übersetzung aus UI_TR[ui] oder den deutschen Text */
let UI='de';try{const sh=JSON.parse(localStorage.getItem('mi-profe-shared')||'null');const nav=(navigator.language||'de').toLowerCase();
  UI=sh&&sh.ui||(sh?'de':nav.startsWith('de')?'de':nav.startsWith('es')?'es':nav.startsWith('pt')?'pt':'en');}catch(e){}
if(UI!=='de'&&!(window.UI_TR&&UI_TR[UI]))UI='de';document.documentElement.lang=UI;
const TR=UI==='de'?null:UI_TR[UI];const T=s=>TR&&TR[s]!=null?TR[s]:s;
for(const L of LEVELS){L.title=T(L.title);L.sub=T(L.sub);}
const UI_LANGS=[['de','🇩🇪','Deutsch'],['en','🇬🇧','English'],['es','🇪🇸','Español'],['pt','🇧🇷','Português']].filter(([c])=>c==='de'||window.UI_TR&&UI_TR[c]);
function setUI(code,withEx){let sh={};try{sh=JSON.parse(localStorage.getItem('mi-profe-shared')||'{}')||{};}catch(e){}sh.ui=code;if(withEx)delete sh.ex;try{localStorage.setItem('mi-profe-shared',JSON.stringify(sh));}catch(e){}location.reload();}
const fmt=s=>{const r=String(s).replace(/\{L\}/g,T(LANG.name)).replace(/\{INTO\}/g,T(LANG.into||'')).replace(/\{ON\}/g,T(LANG.onLang||'')).replace(/\{EX\}/g,T(EX_NAMES[EX]||EX));return r.charAt(0).toUpperCase()+r.slice(1);};
const KEY=LANG.key;const SHARED='mi-profe-shared';
/* Erklärsprache (unabhängig von der App-Sprache): Sprache der Erklärungen & Übersetzungen im Kurs. Deutsch + alle Sprachen mit COURSE_TR[Lernsprache], nie die Lernsprache selbst. */
const EX_NAMES={de:'Deutsch',en:'Englisch',pt:'Portugiesisch',es:'Spanisch',it:'Italienisch',fr:'Französisch'};
const EX_FLAGS={de:'🇩🇪',en:'🇬🇧',pt:'🇧🇷',es:'🇪🇸',it:'🇮🇹',fr:'🇫🇷'};
const EX_LANGS=['de'].concat(Object.keys(window.COURSE_TR&&COURSE_TR[LANG.code]||{})).filter((c,i,a)=>c!==LANG.code&&a.indexOf(c)===i);
let EX=null,EX_SET,exOld=false;try{const sh=JSON.parse(localStorage.getItem(SHARED)||'null');if(sh){EX=EX_SET=sh.ex;exOld=!!sh.name;}}catch(e){}
/* ohne Wahl: wie die App-Sprache; sonst bei neuen Nutzern Englisch, bei bestehenden (bisher immer Deutsch) Deutsch */
if(!EX_LANGS.includes(EX))EX=EX_LANGS.includes(UI)?UI:UI!=='de'&&!exOld&&EX_LANGS.includes('en')?'en':'de';
function setEX(code){let sh={};try{sh=JSON.parse(localStorage.getItem(SHARED)||'{}')||{};}catch(e){}sh.ex=code;try{localStorage.setItem(SHARED,JSON.stringify(sh));}catch(e){}location.reload();}
const UW=LANG.unit,UWS=LANG.units;
const _ap=Element.prototype.append;Element.prototype.append=function(...k){return _ap.apply(this,k.flat().filter(x=>x!=null&&x!==false));};
const INTERVALS=[0,1,3,7,14,30,60,120];
const DEFAULT={placement:null,lessons:{},srs:{},streak:{last:null,count:0},stats:{answers:0,correct:0,days:{}},
  settings:{rate:0.9,voice:'',geminiKey:'',geminiModel:'gemini-flash-latest',theme:'auto',showTr:true,ghToken:'',gistId:''},mistakes:[],checks:{},stories:{}};
let S;
function load(){try{S=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){S={}}
  let sh=null;try{sh=JSON.parse(localStorage.getItem(SHARED));}catch(e){}
  if(!sh){let es={};try{es=JSON.parse(localStorage.getItem(LANGS.es.key))||{};}catch(e){}sh={name:es.name,gender:es.gender,settings:es.settings};}
  if(sh.name)S.name=sh.name;if(sh.surname)S.surname=sh.surname;else if(sh.name)delete S.surname;if(sh.gender)S.gender=sh.gender;if(sh.settings)S.settings=sh.settings;
  S=Object.assign(JSON.parse(JSON.stringify(DEFAULT)),S);S.settings=Object.assign({},DEFAULT.settings,S.settings||{});if(!S.settings.geminiModel||S.settings.geminiModel==='gemini-2.5-flash')S.settings.geminiModel='gemini-flash-latest';}
function saveShared(){try{localStorage.setItem(SHARED,JSON.stringify({lang:LANG.code,ui:UI,ex:EX_SET,name:S.name,surname:S.surname,gender:S.gender,settings:S.settings}));}catch(e){}}
function save(noSync){S.updated=Date.now();try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}saveShared();if(!noSync&&window.__sync)window.__sync.schedule();}
load();
document.title=fmt(T('Mi profe · {L} lernen'));
/* Name: wird beim ersten Öffnen abgefragt. Die Inhalte sind für „Jonas“ geschrieben – für andere Namen wird er überall ersetzt. */
const NAME=()=>S.name||'';
/* Nachname: steht nie fest im Kurs. „Jonas Gross“ / „señor Gross“ / Buchstabieren werden aus S.name + optional S.surname gebaut. */
const SPELL={a:'a',b:'be',c:'ce',d:'de',e:'e',f:'efe',g:'ge',h:'hache',i:'i',j:'jota',k:'ka',l:'ele',m:'eme',n:'ene','ñ':'eñe',o:'o',p:'pe',q:'cu',r:'erre',s:'ese',t:'te',u:'u',v:'uve',w:'uve doble',x:'equis',y:'i griega',z:'zeta','ä':'a con diéresis','ö':'o con diéresis','ü':'u con diéresis','ß':'doble ese','á':'a con tilde','é':'e con tilde','í':'i con tilde','ó':'o con tilde','ú':'u con tilde'};
const spellName=w=>[...w.toLowerCase()].filter(c=>SPELL[c]).map(c=>SPELL[c]).join(', ');
function persStr(t){if(!/Jonas|Gross/.test(t))return t;const sur=S.surname||'',f=S.gender==='f',nm=S.name||'Jonas',sp=sur||nm.split(' ')[0];
  return t.replace(/„Gross“ – du sagst, dass man das Doppel-S mit zwei S schreibt\./,'Ein Doppel-S buchstabierst du „dos eses“.').replace(/“Gross” – you say that the double S is written with two S's\./,'You spell a double S as “dos eses”.')
   .replace(/^Gross: [a-zñ, ]+\.$/,sp+': '+spellName(sp)+'.').replace('Deinen Nachnamen buchstabieren',sur?'Deinen Nachnamen buchstabieren':'Deinen Namen buchstabieren').replace('Spelling your surname',sur?'Spelling your surname':'Spelling your name')
   .replace(/\bJonas Gross\b/g,nm+(sur?' '+sur:'')).replace(/, señor Gross/g,', '+(f?'señora':'señor')+(sur?' '+sur:''))
   .replace(/, (Herr|Mr) Gross/g,(m,w)=>sur?', '+(w==='Herr'?(f?'Frau':'Herr'):(f?'Ms':'Mr'))+' '+sur:'').replace(/\bJonas\b/g,nm);}
function personalize(o){if(typeof o==='string')return persStr(o);if(Array.isArray(o)){for(let i=0;i<o.length;i++)o[i]=personalize(o[i]);return o;}
  if(o&&typeof o==='object'){for(const k of Object.keys(o))o[k]=personalize(o[k]);}return o;}
/* Kursinhalte in der Erklärsprache: COURSE_TR[Lernsprache][EX] = {deutscher Text: Übersetzung}. Fehlt etwas, bleibt Deutsch. */
const CT=EX!=='de'&&window.COURSE_TR&&COURSE_TR[LANG.code]&&COURSE_TR[LANG.code][EX]||null;
const LESEN={en:'Reading: ',pt:'Leitura: ',es:'Lectura: '}[EX];
const trc=s=>!CT||s==null?s:CT[s]!=null?CT[s]:LESEN&&typeof s==='string'&&s.startsWith('Lesen: ')?LESEN+s.slice(7):s;
function trContent(o){if(typeof o==='string')return trc(o);if(Array.isArray(o)){for(let i=0;i<o.length;i++)o[i]=trContent(o[i]);return o;}
  if(o&&typeof o==='object'){for(const k of Object.keys(o))if(k!=='role'&&k!=='id')o[k]=trContent(o[k]);}return o;}
if(CT){trContent(COURSE);trContent(PLACEMENT);trContent(STORIES);}
personalize(COURSE);personalize(PLACEMENT);personalize(STORIES);
/* Ansprache: Bei „weiblich“ werden Sätze über die lernende Person selbst (estoy/soy … , ¡Encantado!) in die weibliche Form gesetzt
   und beim Prüfen beide Formen akzeptiert. Vokabeln bleiben unverändert (sie sind Schlüssel im Vokabeltrainer). */
const FEMO=/^(cansad|encantad|content|preocupad|resfriad|maread|nervios|ocupad|aburrid|enfadad|casad|divorciad|solter|interesad|acostumbrad|dispuest|list|segur|hart|perdid|sorprendid|emocionad|tranquil|alt|baj|delgad|moren|rubi|simpátic|antipátic|tímid|ordenad|caótic|vag|ingenier|informátic|médic|alumn|abogad|sentad|levantad|duchad|vestid|nacid|mudad|graduad|enamorad|invitad|equivocad|despiert|obligad|encargad|guap|gord|delgad|abiert|cansad)o(s?)$/i;
const FEMX={'alemán':'alemana','inglés':'inglesa','francés':'francesa','español':T('española'),'trabajador':'trabajadora','programador':'programadora','diseñador':T('diseñadora'),'consultor':'consultora','auditor':'auditora','profesor':'profesora','director':'directora','alemanes':'alemanas'};
const femWord=w=>FEMO.test(w)?w.replace(/o(s?)$/,'a$1'):FEMX[w.toLowerCase()]?(w[0]===w[0].toUpperCase()?FEMX[w.toLowerCase()][0].toUpperCase()+FEMX[w.toLowerCase()].slice(1):FEMX[w.toLowerCase()]):w;
const femFirst=s=>String(s).replace(/\b(estoy|soy|me siento|me encuentro|sigo|quedo)((?: (?:muy|un poco|bastante|tan|más|menos|demasiado|súper))?) ([a-záéíóúñü]+)/gi,(m,a,b,w)=>a+b+' '+femWord(w));
const isF=()=>S.gender==='f'&&LANG.code==='es';
function femCourse(o,inVocab){if(typeof o==='string')return femFirst(o);if(Array.isArray(o)){for(let i=0;i<o.length;i++)o[i]=femCourse(o[i],inVocab);return o;}
  if(o&&typeof o==='object'){if(o.t==='vocab')return o;if(o.you&&o.opts)o.opts.forEach(x=>{x.es=femFirst(x.es).replace(/\b([Ee])ncantado\b/g,'$1ncantada');});
    if(o.t==='speak'&&o.es)o.es=o.es.replace(/\b([Ee])ncantado\b/g,'$1ncantada');for(const k of Object.keys(o))if(k!=='items')o[k]=femCourse(o[k]);}return o;}
if(isF()){femCourse(COURSE);femCourse(PLACEMENT);}


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
const addDays=(ds,n)=>{const d=new Date(ds+T('T12:00:00'));d.setDate(d.getDate()+n);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');};
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
function toast(t){const e=h('div',{class:'toast'},t);document.body.append(e);setTimeout(()=>e.remove(),2200);}

/* ---------- answer checking ---------- */
const PRON=LANG.pron||/(?!)/;
function norm(s){return String(s).toLowerCase().replace(/[¿?¡!.,;:"“”'«»()…\-–]/g,' ').replace(/\s+/g,' ').trim();}
function strip(s){return s.normalize('NFD').replace(/[̀-ͯ]/g,'');}
function lev(a,b){const m=a.length,n=b.length;if(!m)return n;if(!n)return m;let p=Array.from({length:n+1},(_,i)=>i);
  for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c;}return p[n];}
/* returns {status:'ok'|'near'|'bad', right, note}. Typo tolerance only for long words with identical ending (grammar endings must be exact) */
function wordCmp(c,x,typo){ // c,x normalized strings
  if(c===x)return 0;const A=c.split(' '),B=x.split(' ');if(A.length!==B.length)return 3;let worst=0;
  for(let i=0;i<A.length;i++){const a=A[i],b=B[i];if(a===b)continue;
    if(strip(a)===strip(b)){worst=Math.max(worst,1);continue;}
    const sa=strip(a),sb=strip(b);
    if(typo&&sb.length>=6&&lev(sa,sb)===1&&sa.slice(-2)===sb.slice(-2)){worst=Math.max(worst,2);continue;}
    return 3;}
  return worst;}
function compare(input,answers,opts={}){
  answers=[].concat(answers).flatMap(a=>String(a).split('|'));
  if(isF())answers=answers.flatMap(a=>{const f=a.includes(' ')?femFirst(a):femWord(a);return f===a?[a]:a.includes(' ')?[f,a]:[a,f];});const typo=opts.typo!==false;
  const inp=norm(input);if(!inp)return{status:'bad',right:answers[0],note:T('Keine Antwort.')};
  const cands=[inp];if(opts.pron!==false&&PRON.test(inp))cands.push(inp.replace(PRON,''));
  let best=null;
  for(const a of answers){const na=norm(a);const nas=[na];if(opts.pron!==false&&PRON.test(na))nas.push(na.replace(PRON,''));
    for(const c of cands)for(const x of nas){const r=wordCmp(c,x,typo);
      if(r===0)return{status:'ok',right:a,note:c!==inp?T('Das Subjektpronomen kann man weglassen – meistens sagt man es nur zur Betonung.'):''};
      if(r===1&&(!best||best.rank>1))best={status:'near',right:a,rank:1,note:T('Fast! Achte auf Akzente / ñ – sie können die Bedeutung ändern (esta ≠ está).')};
      if(r===2&&!best)best={status:'near',right:a,rank:2,note:T('Kleiner Tippfehler – fast richtig.')};
    }}
  if(best)return best;
  for(const a of answers){const A=strip(inp).split(' '),B=strip(norm(a)).split(' ');if(A.length!==B.length)continue;const d=A.map((w,i)=>w!==B[i]?i:-1).filter(i=>i>=0);
    if(d.length===1){const x=A[d[0]],y=B[d[0]];let pre=0;while(pre<x.length&&x[pre]===y[pre])pre++;
      if(pre>=3)return{status:'bad',right:a,note:T('Nur die Endung von „')+inp.split(' ')[d[0]]+T('“ stimmt nicht – richtig ist „')+norm(a).split(' ')[d[0]]+T('“. Die Endung zeigt Person, Zeit oder Geschlecht – deshalb zählt das als Fehler.')};}}
  return{status:'bad',right:answers[0],note:''};
}
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
let voices=[];function loadVoices(){voices=(window.speechSynthesis?speechSynthesis.getVoices():[]).filter(v=>v.lang.toLowerCase().startsWith(LANG.code));}
if(window.speechSynthesis){loadVoices();speechSynthesis.onvoiceschanged=loadVoices;}
function pickVoice(){if(!voices.length)loadVoices();
  return voices.find(v=>v.name===S.settings.voice)||voices.find(v=>/es[-_]ES/i.test(v.lang)&&/m[oó]nica|jorge|paulina|google/i.test(v.name))||voices.find(v=>/es[-_]ES/i.test(v.lang))||voices[0];}
const IS_IOS=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform===T('MacIntel')&&navigator.maxTouchPoints>1);
/* iOS: Ton auch bei Stummschalter – Audio-Session auf "playback" + stilles Audio als Türöffner */
let audioUnlocked=false;
function unlockAudio(){if(audioUnlocked)return;audioUnlocked=true;
  try{if(navigator.audioSession)navigator.audioSession.type='playback';}catch(e){}
  try{const a=new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');a.setAttribute('playsinline','');a.volume=0.01;a.play().catch(()=>{});}catch(e){}}
document.addEventListener('touchend',unlockAudio,{once:true,passive:true});document.addEventListener('click',unlockAudio,{once:true});
function mkUtt(t,rate){const u=new SpeechSynthesisUtterance(t);u.lang=LANG.voice;const v=pickVoice();if(v)u.voice=v;u.rate=rate;return u;}
function say(text,rate){if(!window.speechSynthesis)return toast(T('Sprachausgabe wird von diesem Browser nicht unterstützt'));
  unlockAudio();speechSynthesis.cancel();const t=String(text).replace(/___/g,'…');const r=rate||S.settings.rate;
  if(rate&&rate<=0.7){ // langsam: zusätzlich Wort für Wort mit kleinen Pausen – hörbar langsamer, auch auf dem iPhone
    const words=t.split(/\s+/).filter(Boolean);
    if(words.length>1&&IS_IOS){words.forEach(w=>speechSynthesis.speak(mkUtt(w,0.8)));return;}
    speechSynthesis.speak(mkUtt(t,IS_IOS?Math.max(0.3,r*0.75):r));return;}
  speechSynthesis.speak(mkUtt(t,r));}
const spk=(text,big)=>h('button',{class:'speak'+(big?' big':''),title:T('Vorlesen'),onclick:e=>{e.stopPropagation();say(text,big==='slow'?0.55:undefined)}},'🔊');
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;

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
async function gemini(prompt,{json=true,history=null}={}){if(EX!=='de')prompt=String(prompt)+'\n\nIMPORTANT: The learner wants explanations in '+({en:'English',es:'Spanish',pt:'Brazilian Portuguese',it:'Italian',fr:'French'}[EX])+'. Write ALL explanations, corrections and comments for the learner in that language instead of German (example sentences in the target language stay as they are).';if(S.name)prompt=String(prompt).replace(/\bJonas\b/g,S.name);if(S.gender)prompt+=S.gender==='f'?T('\n\nWICHTIG: ')+(S.name||T('Die lernende Person'))+T(' ist eine Frau. Sprich sie mit weiblichen Formen an (z. B. „estás cansada“, „bienvenida“) und erwarte von ihr weibliche Formen, wenn sie über sich spricht. Im Deutschen: „sie/ihr“ statt „er/ihm“.'):'\n\n'+(S.name||T('Die lernende Person'))+T(' ist ein Mann – männliche Formen verwenden.');
  if(useClaude())return claudeAsk(prompt,{json,history});
  const key=S.settings.geminiKey;if(!key)throw new Error(T('Kein Gemini-API-Key hinterlegt (Einstellungen).'));
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
    ()=>fetch(url+'?key='+encodeURIComponent(key),{method:'POST',headers:{'Content-Type':T('text/plain;charset=UTF-8')},body:bodyStr}),
    ()=>fetch(url,{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':key},body:bodyStr})];
  const order=GMODE===1?[1,0]:[0,1];let last;
  for(const i of order){const ctl=new AbortController();const to=setTimeout(()=>ctl.abort(),45000);
    try{const r=await variants[i]().finally(()=>clearTimeout(to));
      if(i===0&&(r.status===400||r.status===415)&&order.length>1&&order[order.length-1]!==0){const t=await r.clone().text();if(/content.?type|payload|json|parse/i.test(t)&&!/api key/i.test(t)){last=new Error(t.slice(0,120));continue;}}
      GMODE=i;return r;}catch(e){last=e;}}
  const e=new Error(netHelp(last));e.network=true;throw e;}
function netHelp(e){
  return T('Keine Verbindung zu Gemini (')+(e&&e.name===T('AbortError')?T('Zeitüberschreitung'):(e&&e.message)||T('Netzwerkfehler'))+T('). Mögliche Ursachen: kein Internet / VPN, ein Werbe- oder Tracking-Blocker (z. B. uBlock, Ghostery, Safari-Inhaltsblocker) blockiert googleapis.com, oder der Browser blockiert Anfragen aus lokalen Dateien. Tipp: In Chrome öffnen oder die Web-App-Version (GitHub Pages) nutzen.');}
async function geminiCall(model,key,prompt,{json,history}){
  const body={contents:history||[{role:'user',parts:[{text:prompt}]}],generationConfig:{temperature:0.4}};
  if(history&&prompt)body.systemInstruction={parts:[{text:prompt}]};
  if(json)body.generationConfig.responseMimeType='application/json';
  const base='https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+T(':generateContent');
  const r=await gfetch(base,key,JSON.stringify(body));
  const j=await r.json().catch(()=>({}));
  if(!r.ok){const e=new Error((j.error&&j.error.message)||(T('HTTP ')+r.status));e.modelProblem=r.status===404||/no longer available|not found|not supported|deprecated/i.test(e.message);throw e;}
  const t=(((j.candidates||[])[0]||{}).content||{}).parts?.map(p=>p.text||'').join('')||'';
  if(!json)return t;
  try{return JSON.parse(t.replace(/^```json\s*|```\s*$/g,''));}catch(e){throw new Error(T('Antwort von Gemini nicht lesbar.'));}
}
const hasAI=()=>useClaude()||!!S.settings.geminiKey;
const TEACHER=LANG.teacher||T('Du bist ein geduldiger Sprachlehrer.');

/* ---------- progress ---------- */
function bumpDay(correct){const d=today();S.stats.answers++;if(correct)S.stats.correct++;S.stats.days[d]=(S.stats.days[d]||0)+1;
  if(S.streak.last!==d){S.streak.count=(S.streak.last===addDays(d,-1))?S.streak.count+1:1;S.streak.last=d;}save();}
function streakNow(){const d=today();return(S.streak.last===d||S.streak.last===addDays(d,-1))?S.streak.count:0;}
function vkey(es){return es;}
function addVocab(items,unit){let n=0;for(const[es,de,em]of items){const k=vkey(es);if(!S.srs[k]){S.srs[k]={es,de,unit,box:0,due:today(),t:Date.now()};if(em)S.srs[k].em=em;n++;}}if(n)save();return n;}
function dueCards(){const d=today();return Object.values(S.srs).filter(c=>c.due<=d);}
/* Wiederholung nach Anki-Art: jede Karte hat Abstand (ivl, Tage) und Leichtigkeit (ease).
   Nochmal → morgen und danach wieder dieselben Stufen wie ein neues Wort · Schwer / Gut / Leicht siehe nextIvl.
   Alte Karten (nur box) werden beim ersten Bewerten übernommen. box bleibt als grobe Stufe für Statistik & Sync. */
const RATE={bad:'again',near:'hard',ok:'good'};
function srsInit(c){if(c.ease==null){c.ease=2.5;c.ivl=c.box?INTERVALS[Math.min(c.box,INTERVALS.length-1)]:0;}return c;}
/* Nochmal = ans Ende der Runde (Termin erst bei der nächsten Bewertung, dann wie neu). Abstände: neu Schwer 1 / Gut 3 / Leicht 5 Tage, danach ×1 / ×1,2 / ×ease / ×ease×1,3 (jeweils mindestens +1 Tag zum vorigen Knopf) */
function nextIvl(c,r){srsInit(c);const i=c.ivl||0;if(r==='again')return 0;
  const hard=i?Math.max(i+1,Math.round(i*1.2)):1,good=i?Math.max(hard+1,Math.round(i*c.ease)):3,easy=i?Math.max(good+1,Math.round(i*c.ease*1.3)):5;
  return r==='hard'?hard:r==='good'?good:easy;}
function grade(card,status,rating){const c=S.srs[vkey(card.es)];if(!c)return;srsInit(c);c.t=Date.now();const r=rating||RATE[status]||'again';
  if(r==='again'){if(c.ivl)c.lapses=(c.lapses||0)+1;c.ivl=0;c.ease=2.5;c.due=today();c.box=0;save();return;}/* kommt in dieser Runde gleich wieder */
  const ivl=nextIvl(c,r);if(r==='hard')c.ease=Math.max(1.3,c.ease-0.15);else if(r==='easy')c.ease=Math.min(3.5,c.ease+0.15);
  c.ivl=ivl;c.due=addDays(today(),ivl);c.reps=(c.reps||0)+1;c.box=ivl>=60?6:ivl>=21?5:ivl>=7?3:ivl>=2?1:0;
  const td=today();if(!S.vocabCount||S.vocabCount.d!==td)S.vocabCount={d:td,n:0};S.vocabCount.n++;save();}
const vocabGoal=()=>S.settings.vocabGoal||20;
const vocabToday=()=>S.vocabCount&&S.vocabCount.d===today()?S.vocabCount.n:0;
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
const PLAYR=['lesson','round','check','mix'];
const pageKey=r=>{const p=r.split('/');return PLAYR.includes(p[0])?'play':p[0]==='units'?'units':p[0]==='unit'?'unit/'+p[1]:p[0]==='ref'&&p[1]?'ref/'+p[1]:p[0]==='ref'?'ref':r;};
function trackNav(r){if(NAVRESET){NAVSTACK=[r];NAVRESET=false;return;}const n=NAVSTACK.length;
  if(n>=2&&pageKey(NAVSTACK[n-2])===pageKey(r))NAVSTACK.pop();
  if(NAVSTACK.length&&pageKey(NAVSTACK[NAVSTACK.length-1])===pageKey(r))NAVSTACK[NAVSTACK.length-1]=r;else NAVSTACK.push(r);
  if(NAVSTACK.length>40)NAVSTACK.shift();}
const prevRoute=()=>{for(let i=NAVSTACK.length-2;i>=0;i--)if(pageKey(NAVSTACK[i])!=='play')return NAVSTACK[i];return null;};
function navLabel(r){const p=r.split('/');const u=p[1]&&unitById(p[1]);
  return p[0]==='home'?T('Start'):p[0]==='units'?T('Kurs'):p[0]==='unit'&&u?UW+' '+u.n:p[0]==='resumen'&&u?T('Resumen · ')+UW+' '+u.n:p[0]==='words'&&u?T('Wortschatz · ')+UW+' '+u.n:
    p[0]==='ref'?({g:T('Grammatik'),s:T('Geschichten'),w:T('Wörterbuch')}[p[1]]||T('Bibliothek')):p[0]==='vocab'?T('Vokabeln'):p[0]==='verbs'?T('Verben'):p[0]==='mistakes'?T('Fehler'):
    p[0]==='settings'?T('Mehr'):p[0]==='lang'?T('Sprache & Profil'):p[0]==='placement'?T('Einstufungstest'):null;}
function goBack(r){const pr=prevRoute();go(pr&&pr!==curRoute()?pr:r);}
const backLabel=label=>{const pr=prevRoute();return(pr&&navLabel(pr))||label;};
const backTo=(label,r)=>h('button',{class:'btn ghost small',style:'margin-bottom:6px',onclick:()=>goBack(r)},'← '+backLabel(label));
const curUnit=()=>nextLesson()?.u||COURSE.units[0];
const unitLevel=u=>u.level||LEVEL_OF[u.id]||T('A1');
const levelOf=u=>LEVELS.find(L=>L.id===unitLevel(u))||LEVELS[0];
/* Stufen-Reiter: oben A1 … C2 (GER-Stufe = L.label), darunter „Teil 1 | Teil 2“, wenn eine Stufe mehrere Teile hat. cnt(Liste von Teilstufen) → Text unter dem Namen */
const LGROUPS=[...new Set(LEVELS.map(L=>L.label))];
const lastPart={};
function levelTabs(cur,base,cnt){const C=LEVELS.find(L=>L.id===cur)||LEVELS[0];const parts=LEVELS.filter(L=>L.label===C.label);lastPart[C.label]=C.id;
  const top=h('div',{class:'seg',style:'grid-template-columns:repeat('+LGROUPS.length+',1fr)'},LGROUPS.map(g=>{const Ls=LEVELS.filter(L=>L.label===g);
    return h('button',{class:g===C.label?'on':'',onclick:()=>go(base+'/'+(lastPart[g]||Ls[0].id))},h('b',{},g),h('span',{},cnt(Ls)));}));
  if(parts.length<2)return top;
  return h('div',{},top,h('div',{class:'seg sub',style:'grid-template-columns:repeat('+parts.length+',1fr)'},parts.map((L,i)=>h('button',{class:L.id===cur?'on':'',onclick:()=>go(base+'/'+L.id)},h('b',{},T('Teil ')+(i+1)),h('span',{},cnt([L]))))));}
const levelUnits=lv=>COURSE.units.filter(u=>unitLevel(u)===lv&&u.status!=='soon');
const pic=(es,em)=>picOf(es,em);
const picEl=(es,em,cls)=>{const p=pic(es,em);return p?h('span',{class:cls||'pic','aria-hidden':'true'},p):null;};
/* nächster Schritt: Einheiten, die laut Test sitzen, bekommen zuerst einen kurzen Check statt aller Lektionen */
function nextLesson(){for(const u of COURSE.units){if(u.status==='soon'||S.checks[u.id]?.pass)continue;
  if(S.placement&&unitStatus(u)==='sicher'&&lessonPct(u)<1&&!S.checks[u.id])return{u,check:true};
  const L=u.lessons.filter(l=>!l.ab);const K=l=>u.id+'.'+l.id;
  for(const l of L){const r=rnd(K(l));if(r<1)return{u,l,n:1};if(r<2)return{u,l,n:2};}
  for(const l of L)if(rnd(K(l))<3&&r3ready(K(l)))return{u,l,n:3};
  if(L.every(l=>rnd(K(l))>=3)&&!S.checks[u.id]?.pass)return{u,test:true};}
  return null;}
const nxTitle=nx=>nx.check?''+UW+' '+nx.u.n+T(' · Abschlusstest'):nx.test?''+UW+' '+nx.u.n+T(' · Abschlusstest'):''+UW+' '+nx.u.n+' · '+nx.l.title+(nx.n>1?' · '+RN[nx.n]:'');
const nxDesc=nx=>nx.check?T('Laut Test sitzt ')+nx.u.title+T(' – bestehst du den Abschlusstest, ist sie abgehakt.'):nx.test?T('Alle Lektionen gefestigt – zeig, dass du die ')+UW+T(' kannst (ab 80 % bestanden).'):nx.n===2?T('Runde 2 von 3: dieselben Inhalte, neu gemischt und mit Vokabelübungen.'):nx.n===3?T('Runde 3 von 3: nur selbst schreiben & hören – mit einem Tag Abstand.'):nx.l.desc;
const nxRoute=nx=>nx.check||nx.test?'check/'+nx.u.id:nx.n>1?'round/'+nx.u.id+'/'+nx.l.id+'/'+nx.n:'lesson/'+nx.u.id+'/'+nx.l.id;
function logMistake(ref,your){if(!ref)return;S.mistakes=S.mistakes.filter(m=>m.ref!==ref);S.mistakes.unshift({ref,your:String(your||'').slice(0,200),date:today()});S.mistakes=S.mistakes.slice(0,150);save();}
function resolveRef(ref){if(ref.startsWith(T('S|'))){const[,sid,i]=ref.split('|');const st=STORIES.find(x=>x.id===sid);const q=st?.qs[+i];return q?{t:'mc',q:q.q,opts:q.opts,a:q.a}:null;}
  if(ref.startsWith(T('W|'))){const[,uid,mode,...rest]=ref.split('|');const es=rest.join('|');const u=unitById(uid);const w=u&&allUnitWords(u).find(x=>x[0]===es);return w?vocabStep(u,mode,w[0],w[1],w[2]):null;}
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
  document.body.innerHTML='';document.body.classList.remove('typing');document.body.append(app);return main;}
const IN_ARTIFACT=!!(window.claude&&window.claude.use);
let CUR=null;
function curRoute(){if(IN_ARTIFACT)return CUR||'home';return location.hash.slice(1)||'home';}
function go(r){if(IN_ARTIFACT){CUR=r;route();return;}if(location.hash==='#'+r)route();else location.hash=r;}
if(!IN_ARTIFACT)window.addEventListener('hashchange',route);
function askConfirm(text,okLabel){return new Promise(res=>{const ov=h('div',{class:'overlay'});const close=v=>{ov.remove();res(v);};
  ov.append(h('div',{class:'card',style:'max-width:380px;width:100%'},h('p',{style:'margin-top:0;font-weight:600'},text),h('div',{class:'row',style:'justify-content:flex-end'},h('button',{class:'btn',onclick:()=>close(false)},T('Abbrechen')),h('button',{class:'btn primary',onclick:()=>close(true)},okLabel||'OK'))));
  ov.onclick=e=>{if(e.target===ov)close(false);};document.body.append(ov);});}
function vWelcome(again){document.body.innerHTML='';const inp=h('input',{class:'inp',placeholder:T('Dein Vorname'),value:S.name||'',autocomplete:'given-name',autocapitalize:'words',spellcheck:'false',style:'text-align:center;font-size:20px'});
  const inp2=h('input',{class:'inp',placeholder:T('Nachname (optional)'),value:S.surname||'',autocomplete:'family-name',autocapitalize:'words',spellcheck:'false',style:'text-align:center;font-size:16px;margin-top:8px'});
  let g=S.gender||'';const GX=LANG.genderEx||['',''];const gb=[['m',T('👨 männlich'),GX[0]],['f',T('👩 weiblich'),GX[1]]].map(([k,l,ex])=>{const b=h('button',{class:'gbtn'+(g===k?' on':''),onclick:()=>{g=k;gb.forEach(x=>x.classList.toggle('on',x===b));}},h('b',{},l),ex?h('span',{},ex):null);return b;});
  const ok=()=>{const v=inp.value.trim().replace(/\s+/g,' ').slice(0,30);if(!v){toast(T('Gib deinen Namen ein'));return;}if(!g&&LANG.genderEx){toast(T('Wähl noch, wie ich dich ansprechen soll'));return;}const v2=inp2.value.trim().replace(/\s+/g,' ').slice(0,40);const changed=v!==S.name||g!==S.gender||v2!==(S.surname||'');S.name=v;S.gender=g;if(v2)S.surname=v2;else delete S.surname;save();
    const back=again?'lang':'home';if(IN_ARTIFACT)CUR=back;else history.replaceState(null,'','#'+back);
    if(changed&&!IN_ARTIFACT)location.reload();else{if(changed){personalize(COURSE);personalize(PLACEMENT);personalize(STORIES);if(isF()){femCourse(COURSE);femCourse(PLACEMENT);}}route();}};
  inp.onkeydown=inp2.onkeydown=e=>{if(e.key==='Enter')ok();};
  document.body.append(h('div',{class:'welcome'},h('div',{class:'card',style:'max-width:420px;width:100%;text-align:center;padding:32px 24px'},
    UI_LANGS.length>1?h('div',{class:'uisel'},UI_LANGS.map(([c,f,n])=>h('button',{class:c===UI?'on':'',title:n,onclick:()=>{if(c!==UI)setUI(c,true);}},f))):null,
    h('div',{style:'font-size:48px;margin-bottom:6px'},'👋'),h('h1',{style:'margin:0 0 6px'},again?T('Name ändern'):T('¡Hola!')),
    h('p',{class:'muted',style:'margin:0 0 18px'},again?T('So begrüße ich dich und so heißt du in den Übungen.'):fmt(T('Ich bin dein Lehrer für {L}. Wie heißt du?'))),
    inp,inp2,h('p',{class:'muted small',style:'margin:16px 0 8px'},T('Wie soll ich dich ansprechen? (wichtig für die Endungen)')),LANG.genderEx?h('div',{class:'gsel'},gb):null,
    h('button',{class:'btn primary',style:'margin-top:14px;width:100%',onclick:ok},again?T('Speichern'):T('Los geht’s →')),
    again?h('button',{class:'btn ghost',style:'margin-top:6px;width:100%',onclick:()=>go('lang')},T('Abbrechen')):null)));
  setTimeout(()=>inp.focus(),80);}
function route(){if(window.speechSynthesis)speechSynthesis.cancel();trackNav(curRoute());const parts=curRoute().split('/');
  if(!S.name||!S.gender&&S.name!==T('Jonas')&&LANG.genderEx||parts[0]==='name')return vWelcome(!!S.name&&parts[0]==='name');const m=shell();
  const v={home:vHome,units:vUnits,unit:vUnit,lesson:vLesson,vocab:vVocab,placement:vPlacement,settings:vSettings,mistakes:vMistakes,resumen:vResumen,lang:vLang,check:vCheck,round:vRound,ref:vRef,verbs:vVerbs,story:vStory,chat:vChat,words:vWords,shadow:vShadow,mix:vMix}[parts[0]]||vHome;
  v(m,...parts.slice(1));window.scrollTo(0,0);m.scrollTop=0;}

/* ---------- views ---------- */
function dayPlan(){const nx=nextLesson();const due=dueCards().length;const done=Object.values(S.lessons).filter(x=>x.done).length;const td=today();
  const ns=nextStory();const storyToday=Object.entries(S.stories||{}).find(([,v])=>v.date===td);
  const plan=[
    Object.keys(S.srs).length?{ic:'🗂️',t:T('Vokabeln wiederholen'),d:vocabLeft()?T('Noch ')+vocabLeft()+T(' Karten bis zum Tagesziel (')+vocabGoal()+').':T('Tagesziel erreicht.'),r:'vocab',b:T('Wiederholen →'),min:Math.max(2,Math.round(vocabLeft()/4)),done:!vocabLeft()}:null,
    nx||Object.values(S.lessons).some(x=>x.date===td)?{ic:nx&&(nx.check||nx.test)?'🏆':'📚',t:nx?nxTitle(nx):T('Lektion'),d:nx?nxDesc(nx):T('Alles fertig!'),r:nx?nxRoute(nx):'units',b:nx&&(nx.check||nx.test)?T('Test starten →'):T('Los geht’s →'),min:10,done:Object.values(S.lessons).some(x=>x.date===td)}:null,
    done>=2?{ic:'🔀',t:T('Gemischte Wiederholung'),d:T('15 Aufgaben quer durch alles, was du schon gelernt hast.'),r:'mix',b:T('Starten →'),min:5,done:S.lastMix===td}:null,
    ns||storyToday?{ic:'📖',t:ns&&!storyToday?T('Geschichte: ')+ns.title:T('Geschichte lesen'),d:T('Erst hören, dann lesen – ca. 5 Minuten.'),r:ns?'story/'+ns.id:'ref/s',b:T('Lesen →'),min:5,done:!!storyToday}:null].filter(Boolean);
  if(!S.placement)plan.unshift({ic:'🎯',t:T('Einstufungstest machen'),d:T('In Etappen von A1 bis B1, je ca. 5 Minuten. Danach weiß ich, was du schon kannst und wo wir einsteigen.'),r:'placement',b:T('Test starten →'),min:15,done:false});
  return plan;}
function vHome(m){
  const nx=nextLesson();const due=dueCards().length;const done=Object.values(S.lessons).filter(x=>x.done).length;
  const acc=S.stats.answers?Math.round(100*S.stats.correct/S.stats.answers):0;const td=today();
  const hr=new Date().getHours();const greet=LANG.greet[hr<14?0:hr<20?1:2];
  m.append(h('h1',{},greet+', '+S.name+'!'));
  /* Tagesplan: feste Bausteine mit Zeitschätzung, die erste offene Aufgabe wird groß angezeigt */
  const plan=dayPlan();
  const nDone=plan.filter(x=>x.done).length,left=plan.filter(x=>!x.done).reduce((a,x)=>a+x.min,0);
  m.append(h('div',{class:'today'},h('div',{class:'row',style:'justify-content:space-between'},h('b',{},T('Heute: ')+nDone+T(' von ')+plan.length+T(' erledigt')),h('span',{class:'muted small'},left?T('noch ca. ')+left+T(' Min.'):T('fertig 🎉'))),
    h('div',{class:'bar',style:'margin-top:6px'},h('i',{style:'width:'+Math.round(100*nDone/Math.max(1,plan.length))+'%'})),
    h('div',{class:'muted small',style:'margin-top:6px'},LANG.flag+' '+T(LANG.name)+' · 🔥 '+streakNow()+' '+(streakNow()===1?T('Tag'):T('Tage'))+T(' in Folge')+(nx?' · '+levelOf(nx.u).title:''))));
  const hero=plan.find(x=>!x.done);
  if(hero)m.append(h('div',{class:'card hero',onclick:()=>go(hero.r)},h('div',{class:'kind'},T('Als Nächstes · ca. ')+hero.min+T(' Min.')),
    h('div',{class:'row',style:'flex-wrap:nowrap;align-items:flex-start'},h('div',{class:'hic'},hero.ic),h('div',{style:'flex:1;min-width:0'},h('h2',{style:'margin:0 0 4px'},hero.t),h('p',{class:'muted',style:'margin:0 0 14px'},hero.d),
      h('button',{class:'btn primary',onclick:e=>{e.stopPropagation();go(hero.r);}},hero.b)))));
  else m.append(h('div',{class:'card hero'},h('h2',{style:'margin:0'},T('Für heute alles erledigt ✓')),h('p',{class:'muted',style:'margin:6px 0 0'},T('¡Muy bien! Wenn du noch Lust hast: unten gibt es Extras.'))));
  const chips=plan.filter(x=>x!==hero).map(x=>h('button',{class:'chip'+(x.done?' done':''),onclick:()=>go(x.r)},h('span',{},x.done?'✓':x.ic),h('span',{},x.t)));
  if(S.mistakes.length)chips.push(h('button',{class:'chip',onclick:()=>go('mistakes')},h('span',{},'✏️'),h('span',{},T('Fehler üben (')+S.mistakes.length+')')));
  chips.push(h('button',{class:'chip',onclick:()=>go('shadow/'+curUnit().id)},h('span',{},'🎧'),h('span',{},T('Aussprache'))));
  m.append(h('div',{class:'kind',style:'margin:14px 0 8px'},T('Plan & Extras')),h('div',{class:'chips'},chips));
  const days=[...Array(7)].map((_,i)=>addDays(td,i-6));const mx=Math.max(10,...days.map(d=>S.stats.days[d]||0));
  m.append(h('div',{class:'card weekcard',style:'margin-top:16px'},h('div',{class:'row'},h('div',{class:'kind',style:'flex:1;margin:0'},T('Deine Woche')),h('span',{class:'muted small'},done+(done===1?T(' Lektion'):T(' Lektionen'))+' · '+acc+T(' % richtig'))),
    h('div',{class:'week'},days.map(d=>{const v=S.stats.days[d]||0;
      return h('div',{class:'wd'+(d===td?' now':'')},h('div',{class:'wb'},h('i',{style:'height:'+Math.round(100*v/mx)+'%'})),h('div',{class:'small muted'},[T('So'),T('Mo'),T('Di'),T('Mi'),T('Do'),T('Fr'),T('Sa')][new Date(d+T('T12:00:00')).getDay()]),h('div',{class:'small'},v||''));}))));
}
const stat=(n,l)=>h('div',{class:'card stat'},h('div',{class:'n'},n),h('div',{class:'l'},l));

function unitCard(u){const st=unitStatus(u);const pct=lessonPct(u);const soon=u.status==='soon';const ck=S.checks[u.id];
  const pill=ck?.pass?h('span',{class:'pill ok'},T('gemeistert 🏆')):pct>=1?h('span',{class:'pill acc'},T('Abschlusstest offen')):st?h('span',{class:'pill '+(st==='sicher'?'ok':st===T('auffrischen')?'warn':'new')},st==='sicher'?(ck?T('Test gemacht'):T('sitzt ✓')):st===T('auffrischen')?T('auffrischen'):T('neu lernen')):soon?h('span',{class:'pill'},T('kommt als Nächstes')):null;
  /* Raster: Titel | Status-Pille, Balken | Prozent – Pille und Prozent rechtsbündig untereinander */
  return h('div',{class:'card unit'+(soon?' locked':''),onclick:()=>{if(!soon)go('unit/'+u.id)}},
    h('div',{class:'num'},u.n),h('div',{class:'ugrid'},h('span',{class:'t'},u.title),h('span',{class:'upill'},pill),
      h('div',{class:'d'},u.sub),soon?h('span'):h('div',{class:'bar ubar'},h('i',{style:'width:'+Math.round(pct*100)+'%'})),
      h('span',{class:'muted small upct'},soon?'':Math.round(pct*100)+'%')));}
let lastLv=null;/* zuletzt angesehene Stufe – beim Zurückkommen auf „Kurs“ wieder dort, beim App-Start dort, wo es weitergeht */
function vUnits(m,lv){
  const cur=nextLesson();lv=LEVELS.find(L=>L.id===lv)?lv:lastLv||(cur?unitLevel(cur.u):T('A1'));lastLv=lv;
  m.append(h('div',{class:'row'},h('h1',{style:'margin:0;flex:1'},T('Kurs')),h('button',{class:'btn small',onclick:()=>go('placement')},T('🎯 Test')),h('button',{class:'btn small',onclick:()=>go('ref/g')},T('📄 Grammatik'))));
  const pctOf=Ls=>{const us=COURSE.units.filter(u=>Ls.some(L=>L.id===unitLevel(u))&&u.status!=='soon');return Math.round((us.length?us.reduce((a,u)=>a+lessonPct(u),0)/us.length:0)*100)+'%';};
  m.append(levelTabs(lv,'units',pctOf));
  const L=LEVELS.find(x=>x.id===lv);
  m.append(h('p',{class:'muted small',style:'margin:10px 0 12px'},L.sub),h('div',{class:'grid',style:'gap:8px'},COURSE.units.filter(u=>unitLevel(u)===lv).map(unitCard)));
}
function vUnit(m,id,tab){const u=unitById(id);if(!u)return vUnits(m);
  const st=unitStatus(u);const ck=S.checks[u.id];const LS=u.lessons.filter(l=>!l.ab),AB=u.lessons.filter(l=>l.ab&&!l.freq),FQ=u.lessons.find(l=>l.freq);const ust=STORIES.filter(x=>x.after===u.id);
  m.append(h('div',{class:'row',style:'margin-bottom:4px'},h('button',{class:'btn ghost small',onclick:()=>goBack('units/'+unitLevel(u))},'← '+backLabel(T('Kurs'))),h('span',{class:'pill acc'},levelOf(u).title)),
    h('h1',{class:'uh1',style:'margin-bottom:4px'},''+UW+' '+u.n+' · '+u.title),
    h('div',{class:'seg two'},h('button',{class:tab!=='x'?'on':'',onclick:()=>go('unit/'+u.id)},h('b',{},T('Lektionen')),h('span',{},Math.round(lessonPct(u)*100)+'%')),
      h('button',{class:tab==='x'?'on':'',onclick:()=>go('unit/'+u.id+'/x')},h('b',{},T('Extras')),h('span',{},(ust.length?T('Geschichte · '):'')+T('Wörter · Sprechen')))));
  if(tab==='x'){
    m.append(h('p',{class:'muted small xgoals',style:'margin:12px 0 0'},T('Das lernst du: ')+u.goals.join(' · ')),
      tiles(...ust.map(x=>mtile('📖',T('Geschichte'),x.title,()=>go('story/'+x.id),S.stories?.[x.id]?'✓':T('neu'))),
        mtile('📄',T('Resumen'),T('Alles auf einen Blick'),()=>go('resumen/'+u.id)),mtile('🗂️',T('Wortschatz'),allUnitWords(u).length+T(' Wörter'),()=>go('words/'+u.id)),
        mtile('🎧',T('Shadowing'),T('Sätze nachsprechen'),()=>go('shadow/'+u.id)),
        FQ?mtile('📚',T('Häufige Wörter'),T('30 Alltagswörter'),()=>go('lesson/'+u.id+'/'+FQ.id),S.lessons[u.id+'.'+FQ.id]?.done?'✓':null):null,
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
function trToggle(box){const TRI=EX==='de'&&window.INFO_TR||null;if(!TRI)return null;
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
function addSpeakTo(el){const t=el.textContent;if(!t.trim())return;const b=spk(t);b.style.marginLeft='6px';b.style.width='24px';b.style.height='24px';b.style.fontSize='11px';el.append(b);}
const cleanWord=es=>es.length<=28&&!/[…\/(]/.test(es);
function lessonWords(l){const w=[];for(const s of l.steps)if(s.t==='vocab')w.push(...s.items);return w.filter(x=>cleanWord(x[0]));}
function vocabStep(u,mode,es,de,em){const p=pic(es,em);
  if(mode==='mc'){const others=shuffle(allUnitWords(u).map(x=>x[0]).filter(x=>x!==es&&cleanWord(x))).slice(0,2);return{t:'mc',kind:T('Was heißt das?'),q:(p?p+' ':'')+esc(de),opts:[es,...others],a:0};}
  if(mode==='mcde'){const others=shuffle(allUnitWords(u).filter(x=>x[0]!==es&&x[1]!==de).map(x=>x[1])).slice(0,2);return{t:'mc',kind:T('Was bedeutet das?'),q:(p?p+' ':'')+esc(es),opts:[de,...others],a:0};}
  if(mode==='listen')return{t:'listen',es,de};
  return{t:'tr',kind:fmt(T('Wie heißt das {ON}?')),de:(p?p+'  ':'')+de,a:[es]};}
const vocabItem=(u,w,mode)=>({s:vocabStep(u,mode,w[0],w[1],w[2]),ref:T('W|')+u.id+'|'+mode+'|'+w[0]});
function allUnitWords(u){const w=[];for(const l of u.lessons)for(const s of l.steps)if(s.t==='vocab')w.push(...s.items);return w;}
function vWords(m,id){const u=unitById(id);const w=allUnitWords(u);
  m.append(backTo(UW+' '+u.n,'unit/'+id),h('h1',{},T('Wortschatz · ')+UW+' '+u.n),
    h('p',{class:'sub'},w.length+T(' Wörter & Ausdrücke. ')),h('div',{class:'row',style:'margin-bottom:14px'},
      h('button',{class:'btn primary',onclick:()=>{const n=addVocab(w,u.id);toast(n?n+T(' Wörter zum Trainer hinzugefügt'):T('Schon alle im Trainer'));}},T('Alle in den Vokabeltrainer')),
      h('button',{class:'btn',onclick:()=>startCram(w,u)},T('Jetzt abfragen'))),
    h('div',{class:'vlist'},w.map(([es,de,em])=>h('div',{class:'vrow'},spk(es),picEl(es,em),h('span',{class:'es'},es),h('span',{class:'de'},de)))));}

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
  play(m,{title:''+UW+' '+u.n+' · '+l.title,steps,unit:u,onBack:()=>goBack('unit/'+uid),
    onDone:(res)=>{const k=uid+'.'+lid;if(l.ab){const prev=S.lessons[k];S.lessons[k]={done:true,best:Math.max(prev?.best||0,res.score),date:today()};save();return{label:T('Zur ')+UW+' →',fn:()=>go('unit/'+uid)};}
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
  play(m,{title:''+UW+' '+u.n+' · '+l.title+T(' · Runde ')+n+T(' von 3: ')+RN[n],steps:roundSteps(u,l,n),unit:u,onBack:()=>goBack('unit/'+uid),
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

function play(m,cfg){
  const queue=cfg.steps.slice();let pos=0;const firstTry=new Map();let retried=new Set();const gradeable=cfg.steps.filter(x=>GRADED.has(x.s.t)).length;
  const top=h('div',{class:'ptop'},h('button',{class:'btn ghost small',onclick:async()=>{if(await askConfirm(T('Lektion abbrechen? Der Fortschritt dieser Lektion geht verloren.'),T('Abbrechen & zurück')))cfg.onBack();}},'✕'),h('div',{class:'bar'},h('i',{style:'width:0'})),h('span',{class:'muted small',id:'pcount'}));
  const stage=h('div',{class:'step'});
  m.append(h('div',{class:'player'},h('div',{class:'muted small',style:'margin-bottom:6px'},cfg.title),top,stage));
  function upd(){$('.ptop .bar i').style.width=Math.round(100*pos/queue.length)+'%';$('#pcount').textContent=Math.min(pos+1,queue.length)+' / '+queue.length;}
  function next(){pos++;if(pos>=queue.length)return finish();show();}
  function show(){upd();stage.innerHTML='';stage.className='step';void stage.offsetWidth;stage.className='step';
    const it=queue[pos];const isRetry=retried.has(it)&&firstTry.has(it.ref);
    if(isRetry)stage.append(h('div',{class:'pill acc',style:'margin-bottom:10px'},T('↻ Noch mal – das war vorhin falsch')));
    window.__cur=it;const R=RENDER[it.s.t];if(!R){stage.append(T('Unbekannter Schritt ')+it.s.t);return next();}
    R(stage,it.s,{unit:cfg.unit,ref:it.ref,noPrompt:!!cfg.noPrompt,done:(status,your)=>{
      if(GRADED.has(it.s.t)){if(!firstTry.has(it.ref)){firstTry.set(it.ref,status);bumpDay(status!=='bad');}
        if(status==='bad'){logMistake(it.ref,your);if(!cfg.noRetry&&!retried.has(it)){retried.add(it);queue.push(it);}}
        else if(cfg.mistakeMode){S.mistakes=S.mistakes.filter(x=>x.ref!==it.ref);save();}}
      if(cfg.onAnswer)cfg.onAnswer(it,status);},next});}
  function finish(){$('.ptop .bar i').style.width='100%';
    const vals=[...firstTry.values()];const score=gradeable?vals.filter(v=>v!=='bad').length/Math.max(gradeable,vals.length||1):1;
    const after=cfg.onDone?cfg.onDone({score,firstTry}):null;stage.innerHTML='';
    const pct=Math.round(score*100);
    stage.append(h('div',{class:'card',style:'text-align:center;padding:36px'},h('div',{style:'font-size:48px'},pct>=90?'🏆':pct>=70?'🎉':'💪'),
      h('h1',{},pct>=90?T('¡Excelente!'):pct>=70?T('¡Muy bien!'):T('¡Sigue así!')),
      gradeable?h('p',{class:'sub'},pct+T('% beim ersten Versuch richtig')):h('p',{class:'sub'},T('Lektion abgeschlossen')),
      cfg.extraEnd?cfg.extraEnd({score,firstTry}):null,
      h('div',{class:'row',style:'justify-content:center;margin-top:10px'},h('button',{class:'btn',onclick:()=>cfg.onBack()},T('Zurück')),
        after?h('button',{class:'btn primary',onclick:after.fn},after.label):null),
      (()=>{const np=dayPlan().find(x=>!x.done&&x.r!==curRoute());return np?h('button',{class:'btn ghost small',style:'margin-top:12px',onclick:()=>{NAVRESET=true;go(np.r);}},'📅 '+T('Nächste Aufgabe von heute: ')+np.t+' →'):null;})()));}
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
function actionBar(onCheck,ctx,opts={}){
  const btn=h('button',{class:'btn primary'},opts.label||T('Prüfen'));const bar=h('div',{class:'actions'},btn,opts.extra||null,h('span',{class:'spacer'}),h('span',{class:'muted small'},h('span',{class:'kbd'},'Enter')));
  let state='check';
  btn.onclick=()=>{if(state==='next'){cleanup();ctx.next();return;}const r=onCheck();if(r===false)return;state='next';btn.textContent=T('Weiter →');btn.focus();};
  const kh=e=>{if(!btn.isConnected)return cleanup();if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing&&document.activeElement?.tagName!=='TEXTAREA'){e.preventDefault();btn.click();}};
  document.addEventListener('keydown',kh);const cleanup=()=>document.removeEventListener('keydown',kh);
  window.__cleanupStep&&window.__cleanupStep();window.__cleanupStep=cleanup;
  bar.setNext=()=>{state='next';btn.textContent=T('Weiter →');};
  return bar;}
function feedback(el,res,step,your,ctx){
  const box=h('div',{class:'fb '+(res.status==='ok'?'ok':res.status==='near'?'warn':'bad')});
  if(res.status==='ok')box.append(h('b',{class:'h'},pick([T('¡Correcto! ✓'),T('¡Muy bien! ✓'),T('¡Perfecto! ✓'),T('¡Eso es! ✓')])));
  else if(res.status==='near')box.append(h('b',{class:'h'},T('Fast richtig')),h('div',{html:T('Richtig: ')+(your?diffHtml(your,res.right):'<span class="es-t">'+esc(res.right)+'</span>')}));
  else box.append(h('b',{class:'h'},T('Nicht ganz')),h('div',{html:T('Richtig: <b class="es-t">')+esc(res.right)+'</b>'+(your?T('<br><span class="small muted">Deine Antwort: </span>')+diffHtml(your,res.right):'')}));
  if(res.note)box.append(h('div',{class:'small',style:'margin-top:4px'},res.note));
  if(step.why&&res.status!=='ok')box.append(h('div',{style:'margin-top:6px'},'💡 ',h('span',{html:step.why})));
  if(res.right&&step.t!=='mc')box.append(h('div',{style:'margin-top:6px'},spk(res.right),' ',h('span',{class:'small muted'},T('anhören'))));
  if(res.status==='bad'&&hasAI()&&your&&ctx){const ab=h('button',{class:'btn small',style:'margin-top:10px'},'🤖 '+AIN()+T(': Ist meine Antwort auch richtig? / Warum?'));
    ab.onclick=async()=>{ab.disabled=true;ab.textContent=AIN()+T(' denkt nach…');
      try{const q=step.q||step.de||step.es||'';const r=await gemini(TEACHER+`\n\nAufgabe (Typ ${step.t}): ${q}\nMusterlösung(en): ${[].concat(step.a||res.right).join(' / ')}\nAntwort von Jonas: ${your}\n\nIst die Antwort von Jonas ebenfalls korrekt und passend (auch wenn sie von der Musterlösung abweicht)? Antworte als JSON: {"korrekt": true|false, "erklaerung": "kurze Erklärung auf Deutsch, was falsch ist und warum (max. 3 Sätze)", "korrigiert": "Jonas' Satz korrigiert"}`);
        const ai=h('div',{class:'fb ai'},h('b',{class:'h'},r.korrekt?'🤖 '+AIN()+T(': Deine Antwort ist auch richtig!'):'🤖 '+AIN()+T(' erklärt')),h('div',{},r.erklaerung||''),r.korrigiert&&!r.korrekt?h('div',{class:'es-t',style:'margin-top:4px'},'→ '+r.korrigiert):null);
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
function reader(text){const sent=(String(text).replace(/\s+/g,' ').match(/[^.!?…]+(?:[.!?…]+[»"”]?)?/g)||[String(text)]).map(x=>x.trim()).filter(Boolean);
  let i=0,playing=false,slow=false,tok=0;const info=h('span',{class:'muted small'},'');
  const upd=()=>{pb.textContent=playing?T('⏸ Pause'):(i>0&&i<sent.length?T('▶ Weiter'):T('🔊 Vorlesen'));sb.classList.toggle('on',slow);info.textContent=i>0||playing?(Math.min(i+1,sent.length)+' / '+sent.length):'';};
  const step=my=>{if(my!==tok||!playing)return;if(!document.body.contains(pb)){playing=false;return;}if(i>=sent.length){playing=false;i=0;upd();return;}upd();
    const u=mkUtt(sent[i],slow?(IS_IOS?0.5:0.65):S.settings.rate);u.onend=()=>{if(my!==tok)return;i++;step(my);};speechSynthesis.speak(u);};
  const start=()=>{if(!window.speechSynthesis)return toast(T('Sprachausgabe wird von diesem Browser nicht unterstützt'));unlockAudio();speechSynthesis.cancel();playing=true;tok++;const my=tok;setTimeout(()=>step(my),60);};
  const stop=()=>{playing=false;tok++;speechSynthesis.cancel();upd();};
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
    h('div',{class:'vlist'},s.items.map(([es,de,em])=>h('div',{class:'vrow'},spk(es),picEl(es,em),h('span',{class:'es'},es),h('span',{class:'de'},de)))),
    h('p',{class:'muted small'},n?'✓ '+n+T(' neue Wörter im Vokabeltrainer gespeichert.'):T('Diese Wörter sind schon im Vokabeltrainer.')));
  el.append(actionBar(()=>{ctx.next();return false;},ctx,{label:T('Weiter →')}));},
mc(el,s,ctx){let sel=null;const all=s.opts.map((o,i)=>[o,i]);const opts=s.keep?all:s.keepLast?shuffle(all.slice(0,-1)).concat([all[all.length-1]]):shuffle(all);
  el.append(kind(s.kind||T('Auswählen')),h('p',{class:'q'},h('span',{html:s.q}),s.say?[' ',spk(s.say)]:null));
  const box=h('div',{class:'opts'});const btns=opts.map(([o,i],k)=>{const b=h('button',{class:'opt'},h('span',{class:'muted small'},(k+1)+'  '),h('span',{class:/[áéíóúñ¿¡]|^[a-z]/i.test(o)?'es-t':''},o));
    b.onclick=()=>{if(box.dataset.done)return;btns.forEach(x=>x.classList.remove('sel'));b.classList.add('sel');sel=i;};return b;});box.append(...btns);el.append(box);
  const nk=e=>{if(!box.isConnected)return document.removeEventListener('keydown',nk);if(document.activeElement?.tagName==='INPUT')return;const k=+e.key;if(k>=1&&k<=btns.length&&!box.dataset.done)btns[k-1].click();};document.addEventListener('keydown',nk);
  el.append(actionBar(()=>{if(sel==null){toast(T('Wähle eine Antwort'));return false;}box.dataset.done=1;document.removeEventListener('keydown',nk);
    const ok=sel===s.a;btns.forEach((b,k)=>{if(opts[k][1]===s.a)b.classList.add('right');else if(opts[k][1]===sel)b.classList.add('wrong');});
    feedback(el,{status:ok?'ok':'bad',right:s.opts[s.a]},s,null,null);ctx.done(ok?'ok':'bad',s.opts[sel]);},ctx));},
gap(el,s,ctx){el.append(kind(s.kind||T('Lücke füllen')),s.task?h('p',{class:'muted'},s.task):null);
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
      retryBox(el,T('Die rot markierten Formen stimmen noch nicht – versuch es noch einmal.'),s.prompt||LANG.conjTip||T('Tipp: Stamm + Endung.'));
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
    b.classList.add('sel');if(selL&&selR){if(selL.x.i===selR.x.i){selL.b.classList.add('done');selR.b.classList.add('done');selL.b.classList.remove('sel');selR.b.classList.remove('sel');left--;}
      else{errors++;const a=selL.b,c=selR.b;a.classList.add('wrong');c.classList.add('wrong');setTimeout(()=>{a.classList.remove('wrong','sel');c.classList.remove('wrong','sel');},500);}
      selL=selR=null;if(!left){const st=errors===0?'ok':errors<=2?'near':'bad';el.append(h('div',{class:'fb '+(st==='ok'?'ok':st==='near'?'warn':'bad')},st==='ok'?T('¡Perfecto! Alles beim ersten Versuch.'):errors+T(' Fehlversuch(e) – ')+(st==='near'?T('gut gemacht.'):T('schau dir die Paare noch mal an.'))));ctx.done(st,'');bar.setNext();}}};return b;};
  L.forEach(x=>colL.append(mk(x,'L')));Rr.forEach(x=>colR.append(mk(x,'R')));el.append(grid);
  const bar=actionBar(()=>{if(left){toast(T('Ordne zuerst alle Paare zu'));return false;}},ctx,{label:T('Weiter →')});el.append(bar);},
read(el,s,ctx){const plain=s.text.replace(/\{([^|}]+)\|[^}]+\}/g,'$1');
  const html=esc(s.text).replace(/\{([^|}]+)\|([^}]+)\}/g,(m,w,t)=>'<span class="gl" data-t="'+t+'">'+w+'</span>').replace(/\n\n/g,'</p><p>');
  const tr=h('div',{class:'fb ai hide',style:'margin-top:12px'},h('b',{class:'h'},T('Übersetzung')),h('div',{html:esc(s.de||'').replace(/\n\n/g,'<br><br>')}));
  const pop=h('div',{class:'glpop hide'});
  el.append(kind(s.kind||T('Lesen & Hören')),h('h2',{style:'margin-top:0'},s.title),s.intro?h('p',{class:'muted'},s.intro):null,
    h('div',{class:'row',style:'margin-bottom:10px'},...reader(plain),
      s.de?h('button',{class:'btn small ghost',onclick:()=>tr.classList.toggle('hide')},T('Übersetzung')):null),
    h('div',{class:'card reading es-t',html:'<p>'+html+'</p>'}),h('p',{class:'muted small'},T('Tipp: Tippe auf unterstrichene Wörter für die Bedeutung. Lies erst ohne Übersetzung – du verstehst mehr, als du denkst.')),tr,pop);
  el.querySelectorAll('.gl').forEach(g=>g.onclick=e=>{e.stopPropagation();pop.textContent=g.textContent+' = '+g.dataset.t;pop.classList.remove('hide');const r=g.getBoundingClientRect();pop.style.left=Math.max(8,r.left)+'px';pop.style.top=(r.bottom+6)+'px';say(g.textContent);});
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
  if(SR){const mic=h('button',{class:'btn',style:'margin-top:14px'},T('🎙️ Jetzt sprechen'));mic.onclick=()=>{const r=new SR();r.lang=LANG.voice;r.interimResults=false;r.maxAlternatives=3;mic.textContent=T('… ich höre zu');mic.disabled=true;
      r.onresult=e=>{const alts=[...e.results[0]].map(a=>a.transcript);const best=alts.map(a=>({a,d:lev(strip(norm(a)),strip(norm(s.es)))})).sort((x,y)=>x.d-y.d)[0];
        const sim=1-best.d/Math.max(norm(s.es).length,1);out.innerHTML='';out.append(h('div',{class:'fb '+(sim>0.85?'ok':sim>0.6?'warn':'bad')},h('b',{class:'h'},sim>0.85?T('¡Muy bien! Gut verständlich.'):sim>0.6?T('Fast – noch mal probieren?'):T('Das habe ich anders verstanden.')),h('div',{class:'small'},T('Erkannt: „')+best.a+'“')));};
      r.onerror=e=>{out.innerHTML='';out.append(h('div',{class:'fb warn'},T('Spracherkennung nicht möglich (')+e.error+T('). Nutze das Diktat-Feld unten (🎙 auf der Tastatur).')));};
      r.onend=()=>{mic.textContent=T('🎙️ Noch mal sprechen');mic.disabled=false;};r.start();};el.append(mic);}
  {const di=h('input',{class:'inp',placeholder:IS_IOS?T('Oder: hier tippen → 🎙 auf der Tastatur → Satz sprechen'):T('Oder: per Diktat hier hineinsprechen'),style:'margin-top:12px;font-size:16px'});
    const chk=h('button',{class:'btn small',style:'margin-top:8px'},T('Aussprache prüfen'));
    chk.onclick=()=>{if(!di.value.trim())return toast(T('Zuerst sprechen/diktieren'));const d=lev(strip(norm(di.value)),strip(norm(s.es)));const sim=1-d/Math.max(norm(s.es).length,1);out.innerHTML='';out.append(h('div',{class:'fb '+(sim>0.85?'ok':sim>0.6?'warn':'bad')},h('b',{class:'h'},sim>0.85?T('¡Muy bien! Gut verständlich.'):sim>0.6?T('Fast – noch mal probieren?'):T('Das wurde anders verstanden.')),h('div',{class:'small'},T('Erkannt: „')+di.value+'“')));};
    el.append(h('p',{class:'muted small',style:'margin:12px 0 0'},SR?'':T('Spracherkennung gibt es in dieser Ansicht nicht – nutze stattdessen die Diktierfunktion deiner Tastatur (mit passender Tastatur).')),di,chk);}
  el.append(out,actionBar(()=>{ctx.next();return false;},ctx,{label:T('Weiter →')}));setTimeout(()=>say(s.es),300);},
dialog(el,s,ctx){el.append(kind(T('Dialog · ')+(s.place||T('Situación'))),h('h2',{style:'margin-top:0'},s.title),s.scene?h('div',{class:'scene',html:'🎬 '+s.scene}):null);
  const chat=h('div',{class:'chat'});const zone=h('div',{});el.append(chat,zone);let i=0,errors=0;const bar=actionBar(()=>{if(i<s.lines.length){toast(T('Führe zuerst den Dialog zu Ende'));return false;}},ctx,{label:T('Weiter →')});
  function npc(L){const tr=h('div',{class:'tr'+(S.settings.showTr?'':' hide')},L.de||'');chat.append(h('div',{class:'msg'},h('div',{class:'who'},L.n),h('div',{class:'row',style:'gap:8px;flex-wrap:nowrap'},spk(L.es),h('span',{class:'es-t'},L.es)),tr,
      !S.settings.showTr&&L.de?h('button',{class:'btn ghost small',style:'padding:2px 0',onclick:e=>{tr.classList.remove('hide');e.target.remove();}},T('Übersetzung')):null));say(L.es);}
  function step(){zone.innerHTML='';if(i>=s.lines.length){const st=errors===0?'ok':errors<=1?'near':'bad';zone.append(h('div',{class:'fb '+(st==='ok'?'ok':'warn')},st==='ok'?T('¡Genial! Dialog fehlerfrei gemeistert.'):T('Dialog geschafft – mit ')+errors+T(' Fehlversuch(en).')));ctx.done(st==='bad'?'bad':st,'');bar.setNext();return;}
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
      out.innerHTML='';out.append(h('div',{class:'fb ai'},h('b',{class:'h'},T('🤖 Note: ')+r.note+'/10 · '+(r.lob||'')),
        h('div',{class:'es-t',style:'margin:6px 0'},diffHtmlLong(ta.value,r.korrigiert||'')),
        (r.fehler||[]).length?h('ul',{style:'margin:6px 0;padding-left:18px'},(r.fehler||[]).map(f=>h('li',{},h('span',{class:'es-t'},h('del',{style:'color:var(--bad)'},f.falsch),' → ',h('b',{style:'color:var(--ok)'},f.richtig)),' – ',f.erklaerung))):h('div',{},T('Keine Fehler gefunden 🎉')),
        r.tipp?h('div',{class:'small',style:'margin-top:6px'},'💡 '+r.tipp):null,h('details',{style:'margin-top:8px'},h('summary',{class:'small'},T('Musterlösung aus dem Kurs')),h('div',{class:'es-t'},s.model))));}
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
/* Shadowing: Runden à 7 Sätze (Fortschritt pro Unidad in S.shadow), eine Ansicht pro Satz,
   Aussprache-Check per Spracherkennung (oder Tastatur-Diktat) mit Wort-für-Wort-Rückmeldung */
function wordCheck(target,heard){const tw=target.split(/\s+/).filter(Boolean);const hs=new Set(strip(norm(heard)).split(/\s+/));
  let ok=0;const spans=tw.map(w=>{const k=strip(norm(w));const hit=!k||hs.has(k);if(hit)ok++;return h('span',{class:hit?'wok':'wbad'},w+' ');});
  return{pct:Math.round(100*ok/Math.max(tw.length,1)),spans};}
function vShadow(m,id){const u=unitById(id);const all=unitSentences(u);const N=7;
  m.append(backTo(UW+' '+u.n,'unit/'+id),h('h1',{},T('🎧 Shadowing · ')+UW+' '+u.n),
    h('p',{class:'sub'},T('Anhören, nachsprechen, prüfen lassen. Profi-Stufe: Text ausblenden und gleichzeitig mitsprechen.')));
  const box=h('div');m.append(box);
  if(!all.length){box.append(h('div',{class:'card'},T('Keine Sätze vorhanden.')));return;}
  S.shadow=S.shadow||{};let start=(S.shadow[id]||0)%all.length;let list=all.slice(start,start+N);if(list.length<N)list=list.concat(all.slice(0,N-list.length));
  let i=0,hide=false,rec=null,audioUrl=null;const scores=[];
  function feedback(out,heard,c){const r=wordCheck(c.es,heard);scores[i]=Math.max(scores[i]||0,r.pct);out.innerHTML='';
    out.append(h('div',{class:'fb '+(r.pct>=85?'ok':r.pct>=60?'warn':'bad')},h('b',{class:'h'},r.pct>=85?T('¡Muy bien! ')+r.pct+'%':r.pct>=60?T('Fast! ')+r.pct+'%':T('Noch mal probieren – ')+r.pct+'%'),
      h('div',{class:'es-t',style:'margin-top:4px'},r.spans),h('div',{class:'small muted'},T('Erkannt: „')+heard+'“')));}
  function draw(){const c=list[i];box.innerHTML='';audioUrl=audioUrl;
    const es=h('div',{class:'es'+(hide?' blur':'')},c.es);es.onclick=()=>es.classList.toggle('blur');
    const out=h('div',{style:'margin-top:12px'});
    const card=h('div',{class:'card shadowcard'},h('div',{class:'row',style:'justify-content:space-between'},h('span',{class:'muted small'},T('Satz ')+(i+1)+' / '+list.length),
        h('button',{class:'btn small tog'+(hide?' on':''),onclick:()=>{hide=!hide;draw();}},hide?T('👁 Text zeigen'):T('🙈 Text ausblenden'))),
      es,h('div',{class:'muted'},hide?T('(antippen zum Aufdecken)'):c.de),
      h('div',{class:'row',style:'justify-content:center;margin-top:12px'},spk(c.es,true),h('button',{class:'btn small',onclick:()=>say(c.es,0.6)},T('🐢 Langsam')),h('button',{class:'btn small',onclick:()=>{say(c.es);setTimeout(()=>say(c.es),400+c.es.length*85);}},'🔁 2×')));
    const act=h('div',{class:'row',style:'justify-content:center;margin-top:12px'});
    if(SR){const mic=h('button',{class:'btn primary'},T('🎙️ Nachsprechen & prüfen'));mic.onclick=()=>{speechSynthesis.cancel();const r=new SR();r.lang=LANG.voice;r.interimResults=false;r.maxAlternatives=3;mic.textContent=T('… ich höre zu');mic.disabled=true;
        r.onresult=e=>{const alts=[...e.results[0]].map(a=>a.transcript);const best=alts.map(a=>({a,p:wordCheck(c.es,a).pct})).sort((x,y)=>y.p-x.p)[0];feedback(out,best.a,c);};
        r.onerror=e=>{out.innerHTML='';out.append(h('div',{class:'fb warn'},T('Spracherkennung nicht möglich (')+e.error+')'));};
        r.onend=()=>{mic.textContent=T('🎙️ Noch mal');mic.disabled=false;};r.start();};act.append(mic);}
    else{const di=h('input',{class:'inp',placeholder:IS_IOS?T('Hier tippen → 🎙 auf der Tastatur → Satz sprechen'):T('Per Diktat hier hineinsprechen'),style:'font-size:16px'});
      const chk=h('button',{class:'btn primary small',style:'margin-top:8px'},T('Aussprache prüfen'));chk.onclick=()=>{if(!di.value.trim())return toast(T('Zuerst sprechen/diktieren'));feedback(out,di.value,c);};
      act.append(h('div',{style:'width:100%'},di,chk));}
    if(navigator.mediaDevices&&window.MediaRecorder){const rb=h('button',{class:'btn small ghost'},rec?T('⏹ Stopp'):T('⏺ Aufnahme zum Anhören'));
      rb.onclick=async()=>{if(rec){rec.stop();return;}try{const st=await navigator.mediaDevices.getUserMedia({audio:true});const chunks=[];rec=new MediaRecorder(st);rec.ondataavailable=e=>chunks.push(e.data);
        rec.onstop=()=>{st.getTracks().forEach(t=>t.stop());audioUrl=URL.createObjectURL(new Blob(chunks,{type:rec.mimeType}));rec=null;draw();};rec.start();rb.textContent=T('⏹ Stopp');}catch(e){toast(T('Mikrofon nicht verfügbar'));}};
      act.append(rb);if(audioUrl)act.append(h('button',{class:'btn small ghost',onclick:()=>new Audio(audioUrl).play()},T('▶ Meine Aufnahme')));}
    card.append(act,out);
    box.append(card,h('div',{class:'actions'},h('button',{class:'btn',disabled:i===0,onclick:()=>{i--;audioUrl=null;draw();}},T('← Zurück')),h('span',{class:'spacer'}),
      h('button',{class:'btn primary',onclick:()=>{audioUrl=null;if(i<list.length-1){i++;draw();setTimeout(()=>say(list[i].es),150);}else finish();}},i<list.length-1?T('Nächster Satz →'):T('Runde beenden ✓'))));}
  function finish(){S.shadow[id]=(start+list.length)%all.length;save();const sc=scores.filter(x=>x!=null);const avg=sc.length?Math.round(sc.reduce((a,b)=>a+b,0)/sc.length):null;box.innerHTML='';
    box.append(h('div',{class:'card',style:'text-align:center;padding:30px'},h('div',{style:'font-size:44px'},'🎧'),h('h1',{},T('¡Bien hecho!')),
      h('p',{class:'sub'},list.length+T(' Sätze geübt')+(avg!=null?T(' · Aussprache im Schnitt ')+avg+'%':'')),
      h('div',{class:'row',style:'justify-content:center'},h('button',{class:'btn',onclick:()=>goBack('unit/'+id)},T('Fertig')),h('button',{class:'btn primary',onclick:()=>{box.innerHTML='';m.innerHTML='';vShadow(m,id);}},T('Nächste 7 Sätze →')))));}
  draw();setTimeout(()=>say(list[0].es),300);}

/* ---------- interleaved review ---------- */
function mixSteps(n){const pool=[];for(const u of COURSE.units)for(const l of u.lessons||[]){const r=S.lessons[u.id+'.'+l.id];if(!r?.done)continue;
  const age=Math.max(1,(Date.now()-new Date(r.date+T('T12:00:00')))/864e5);
  l.steps.forEach((st,i)=>{if(['mc','gap','tr','conj','order','listen'].includes(st.t))pool.push({s:st,ref:u.id+'|'+l.id+'|'+i,unit:u,w:Math.random()*Math.log(1+age)+Math.random()});});}
  return pool.sort((a,b)=>b.w-a.w).slice(0,n);}
function vMix(m){const steps=mixSteps(15);
  if(steps.length<5){m.append(h('h1',{},T('Gemischte Wiederholung')),h('div',{class:'card'},T('Schließ zuerst ein paar Lektionen ab – dann mische ich hier Aufgaben aus allen bisherigen Lektionen durcheinander.')));return;}
  play(m,{title:T('Gemischte Wiederholung · 15 Aufgaben aus allen ')+UWS+'',steps,onBack:()=>go('home'),onDone:()=>{S.lastMix=today();save();return{label:T('Zur Startseite'),fn:()=>go('home')};}});}

/* ---------- Nachschlagen: Wörterbuch & Grammatik ---------- */
const storyFor=st=>unitById(st.after);
const storyOpen=st=>{const u=storyFor(st);return !u||lessonPct(u)>0||S.checks[u.id]?.pass||(unitStatus(u)&&unitStatus(u)!==T('neu'));};
function nextStory(){return STORIES.find(st=>storyOpen(st)&&!S.stories?.[st.id]);}
const levelSeg=(cur,base,cnt)=>h('div',{style:'margin:4px 0 12px'},levelTabs(cur,base,Ls=>Ls.reduce((a,L)=>a+parseInt(cnt(L))||0,0)+String(cnt(Ls[0])).replace(/^\d+/,'')));
const curLevel=()=>{const n=nextLesson();return n?unitLevel(n.u):T('A1');};
function vRef(m,tab,lv){lv=LEVELS.find(L=>L.id===lv)?lv:curLevel();
  if(!tab){const nNew=STORIES.filter(st=>storyOpen(st)&&!S.stories?.[st.id]).length;
    m.append(h('h1',{},T('Bibliothek')),h('p',{class:'sub'},T('Lesen, hören, nachschlagen.')),
      tiles(mtile('📖',T('Geschichten'),T('Serie „')+(LANG.storySeries||'')+'“',()=>go('ref/s'),nNew?nNew+T(' neu'):null),mtile('🔎',T('Wörterbuch'),T('Alle Wörter suchen'),()=>go('ref/w')),
        mtile('📄',T('Grammatik'),T('Alle Zusammenfassungen'),()=>go('ref/g')),mtile('🔁',T('Verben'),T('Konjugations-Trainer'),()=>go('verbs'))));return;}
  m.append(backTo(T('Bibliothek'),'ref'),h('h1',{},{s:T('Geschichten'),w:T('Wörterbuch'),g:T('Grammatik')}[tab]||T('Bibliothek')));
  if(tab==='s'){const S2=S.stories||{};
    m.append(h('p',{class:'sub'},'„'+(LANG.storySeries||'')+'“ – '+(T(LANG.storyIntro||'')||'')+T(' Jede Geschichte nutzt nur Grammatik bis zur angegebenen ')+UW+T('. Tipp: erst nur hören, dann lesen.')));
    m.append(levelSeg(lv,'ref/s',L=>STORIES.filter(st=>unitLevel(storyFor(st))===L.id).length+T(' Gesch.')),h('div',{class:'grid',style:'gap:8px'},STORIES.filter(st=>unitLevel(storyFor(st))===lv).map(st=>{const done=S2[st.id];const open=storyOpen(st);
        return h('div',{class:'lesson'+(done?' done':''),onclick:()=>go('story/'+st.id)},h('div',{class:'ic'},done?'✓':'📖'),h('div',{style:'flex:1;min-width:0'},h('div',{class:'lt'},st.title),h('div',{class:'ld'},st.sub+T(' · ab ')+UW+' '+storyFor(st).n)),
          done?h('span',{class:'pill ok'},Math.round(done.score*100)+' %'):open?h('span',{class:'pill acc'},T('neu')):h('span',{class:'pill'},T('später')));})));return;}
  if(tab==='g'){m.append(levelSeg(lv,'ref/g',L=>COURSE.units.filter(u=>unitLevel(u)===L.id).length+T(' Unid.')),h('div',{class:'grid',style:'gap:8px'},COURSE.units.filter(u=>unitLevel(u)===lv&&u.resumen).map(u=>
      h('div',{class:'lesson lrow',onclick:()=>go('resumen/'+u.id)},h('div',{class:'ic'},u.n),h('div',{style:'flex:1;min-width:0'},h('div',{class:'lt'},u.title),h('div',{class:'ld'},u.goals.join(' · ')))))));return;}
  const all=[];const seen=new Set();for(const u of COURSE.units)for(const w of allUnitWords(u))if(!seen.has(w[0])){seen.add(w[0]);all.push([w,u]);}
  let mine=!!S.settings.dictMine;
  const inp=h('input',{class:'inp',type:'search',placeholder:fmt(T('Suchen – {L} oder {EX}')),autocomplete:'off',spellcheck:'false',autocorrect:'off',autocapitalize:'off'});
  const tog=h('button',{class:'chip'+(mine?' on':''),onclick:()=>{mine=!mine;S.settings.dictMine=mine;save(true);tog.classList.toggle('on',mine);draw();}},h('span',{},'⭐'),h('span',{},T('Nur meine Wörter')));
  const info=h('div',{class:'muted small',style:'margin:8px 0'});const out=h('div',{class:'vlist'});
  const draw=()=>{const q=strip(inp.value.toLowerCase().trim());out.innerHTML='';
    const hits=all.filter(([w,u])=>(q?strip((w[0]+' '+w[1]).toLowerCase()).includes(q):unitLevel(u)===lv)&&(!mine||S.srs[w[0]]));
    info.textContent=(q?hits.length+T(' Treffer in allen Stufen'):hits.length+T(' Wörter in ')+LEVELS.find(L=>L.id===lv).title)+(mine?T(' · nur gesammelte'):'');
    out.append(...hits.slice(0,300).map(([w,u])=>h('div',{class:'vrow drow'},spk(w[0]),picEl(w[0],w[2])||h('span',{class:'pic'}),h('div',{class:'dw'},h('div',{class:'es'},w[0]),h('div',{class:'de'},w[1])),h('span',{class:'pill'},'U'+u.n))));
    if(!hits.length)out.append(h('p',{class:'muted'},mine?T('Noch keine gesammelten Wörter hier – sie kommen mit den Lektionen.'):T('Nichts gefunden.')));};
  inp.oninput=draw;
  m.append(inp,levelSeg(lv,'ref/w',L=>{const n=all.filter(([,u])=>unitLevel(u)===L.id).length;return n+T(' W.');}),h('div',{class:'row'},tog),info,out,h('p',{class:'muted small',style:'margin-top:16px'},T('Lektionen „Häufige Wörter“: Häufigkeit aus FrequencyWords (OpenSubtitles, CC BY-SA 4.0), Übersetzungen aus WikDict/Wiktionary (CC BY-SA 3.0), bearbeitet.')));draw();}
function vStory(m,id){const st=STORIES.find(x=>x.id===id);if(!st)return vRef(m,'s');const u=storyFor(st);
  if(!storyOpen(st))m.append(h('div',{class:'fb warn',style:'margin-bottom:12px'},T('Diese Geschichte passt ab ')+UW+' '+u.n+T(' – vielleicht kommt dir noch nicht alles bekannt vor. Lies sie trotzdem, wenn du magst!')));
  const steps=[{s:{t:'read',kind:T('Geschichte · ')+levelOf(u).title,title:st.title,intro:T('Tipp: Hör sie dir zuerst einmal ohne Text an (🔊 Vorlesen, Augen zu) – dann lies mit.'),text:st.text,de:st.de},ref:T('S|')+st.id+'|r'}]
    .concat(st.qs.map((q,i)=>({s:{t:'mc',kind:T('Hast du es verstanden?'),q:q.q,opts:q.opts,a:q.a},ref:T('S|')+st.id+'|'+i})));
  play(m,{title:T('Geschichte · ')+st.title,steps,onBack:()=>goBack('ref/s'),
    onDone:(r)=>{S.stories=S.stories||{};const p=S.stories[st.id];S.stories[st.id]={date:today(),score:Math.max(p?.score||0,r.score)};save();const nx=nextStory();
      return nx?{label:T('Nächste Geschichte →'),fn:()=>go('story/'+nx.id)}:{label:T('Zur Bibliothek →'),fn:()=>go('ref/s')};}});}
/* ---------- Verben-Trainer: Konjugationen aus allen '+UWS+', die du schon angefangen hast ---------- */
function vVerbs(m){m.append(backTo(T('Bibliothek'),'ref'));const pool=[];for(const u of COURSE.units){const started=u.lessons.some(l=>rnd(u.id+'.'+l.id)>=1)||S.checks[u.id]?.pass;
    u.lessons.forEach(l=>l.steps.forEach((s,i)=>{if(s.t==='conj')pool.push({s,ref:u.id+'|'+l.id+'|'+i,unit:u,started});}));}
  const mine=pool.filter(x=>x.started);const use=mine.length>=4?mine:pool.filter(x=>unitLevel(x.unit)===T('A1'));
  m.append(h('h1',{},T('Verben-Trainer')),h('p',{class:'sub'},(mine.length>=4?T('Konjugationen aus den ')+UWS+T(', die du schon angefangen hast'):T('Sobald du mehr Lektionen gemacht hast, kommen deine Verben dazu – bis dahin A1-Verben'))+' ('+use.length+T(' Tabellen, alle Zeiten gemischt).')),
    h('button',{class:'btn primary',onclick:()=>{m.innerHTML='';play(m,{title:T('Verben-Trainer · 8 Verben'),steps:shuffle(use).slice(0,8),onBack:()=>go('verbs'),onDone:()=>({label:T('Noch 8 Verben →'),fn:()=>{m.innerHTML='';vVerbs(m);}})});}},T('8 Verben üben →')));}

/* ---------- vocab trainer ---------- */
function vVocab(m,sub){const due=dueCards();const all=Object.values(S.srs);const total=all.length;
  const boxes=[0,0,0,0];all.forEach(c=>{boxes[c.box>=5?3:c.box>=3?2:c.box>=1?1:0]++;});
  if(sub==='units'){m.append(backTo(T('Vokabeln'),'vocab'),h('h1',{},T('Nach ')+UW+T(' üben')),h('p',{class:'sub'},T('Wörter einer ')+UW+T(' abfragen – zählt nicht für die Wiederholungsplanung.')),
    h('div',{class:'grid',style:'gap:8px'},LEVELS.map(L=>{const us=COURSE.units.filter(u=>unitLevel(u)===L.id&&all.some(c=>c.unit===u.id));if(!us.length)return null;
      return h('div',{},h('div',{class:'kind',style:'margin:8px 0 6px'},L.title),h('div',{class:'chips'},us.map(u=>{const w=all.filter(c=>c.unit===u.id);return h('button',{class:'chip',onclick:()=>runVocab(shuffle(w).slice(0,20),'type',false)},h('span',{},'U'+u.n),h('span',{},u.title+' ('+w.length+')'));})));})));
    if(!all.length)m.append(h('div',{class:'card'},T('Noch keine Wörter gesammelt.')));return;}
  m.append(h('h1',{},T('Vokabeln')),h('p',{class:'sub'},total?total+T(' Wörter gesammelt · ')+boxes[3]+T(' sitzen sicher · ')+(boxes[0]+boxes[1])+T(' in Arbeit'):T('Wörter kommen automatisch dazu, sobald du sie in einer Lektion siehst.')));
  m.append(h('div',{class:'card hero',style:'cursor:default'},h('div',{class:'kind'},T('Wiederholung nach Lernkurve')),h('h2',{style:'margin:0 0 '+(vocabLeft()||!due.length?'12px':'4px')},vocabLeft()?T('Heute noch ')+vocabLeft()+T(' Karten'):due.length?T('Tagesziel erreicht ✓'):total?T('Für heute alles wiederholt ✓'):T('Noch keine Karten')),
    !vocabLeft()&&due.length?h('p',{class:'muted small',style:'margin:0 0 12px'},due.length+T(' weitere Karten sind fällig – freiwillig, sonst kommen sie an den nächsten Tagen.')):null,

    h('div',{class:'row'},h('button',{class:'btn'+(vocabLeft()?' primary':''),disabled:!due.length,onclick:()=>runVocab(reviewSet(),'type',true)},T('✍️ Tippen')),
      h('button',{class:'btn',disabled:!due.length,onclick:()=>runVocab(reviewSet(),'flip',true)},T('🃏 Karten')),
      h('button',{class:'btn',disabled:!due.length,onclick:()=>runVocab(reviewSet(),'listen',true)},T('🎧 Hören'))),
    total?(()=>{const pick=h('div',{class:'chips hide',style:'margin:8px 0 0;justify-content:flex-end'},[10,20,30,50,100].map(n=>h('button',{class:'chip'+(n===vocabGoal()?' on':''),onclick:()=>{S.settings.vocabGoal=n;save();route();}},n+'')));
      return h('div',{class:'goalrow'},h('div',{class:'row',style:'justify-content:space-between;flex-wrap:nowrap;gap:8px'},h('span',{class:'muted small'},T('Tagesziel: ')+Math.min(vocabToday(),vocabGoal())+' / '+vocabGoal()+(vocabToday()>=vocabGoal()?T(' ✓ – weitere Runden freiwillig'):'')),
        h('button',{class:'linkbtn',onclick:()=>pick.classList.toggle('hide')},T('⚙ Ziel ändern'))),pick);})():null));
  m.append(tiles(mtile('📚',T('Nach ')+UW+'',T('Wörter einer ')+UW+T(' üben'),()=>go('vocab/units')),mtile('🔁',T('Verben'),T('Konjugieren üben'),()=>go('verbs')),
    mtile('🎧',T('Aussprache üben'),T('Shadowing · ')+UW+' '+curUnit().n,()=>go('shadow/'+curUnit().id)),mtile('✏️',T('Fehlerheft'),S.mistakes.length?S.mistakes.length+T(' offene Fehler'):T('keine offenen Fehler'),()=>go('mistakes'))));
}
function startCram(items,u){addVocab(items,u.id);runVocab(shuffle(items.map(([es,de,em])=>({es,de,em}))).slice(0,20),'type',false);}
function runVocab(cards,mode,srs){const m=shell();let q=cards.slice();let i=0,okc=0;const seen=new Set();
  const stage=h('div',{class:'step'});m.append(h('div',{class:'player'},h('div',{class:'ptop'},h('button',{class:'btn ghost small',onclick:()=>go('vocab')},'✕'),h('div',{class:'bar'},h('i',{style:'width:0'})),h('span',{class:'muted small',id:'pc'})),stage));
  function upd(){$('.ptop .bar i').style.width=Math.round(100*i/q.length)+'%';$('#pc').textContent=Math.min(i+1,q.length)+' / '+q.length;}
  const failed=new Set();
  function res(c,st,rating){const first=!seen.has(c.es);if(first){seen.add(c.es);if(st!=='bad')okc++;bumpDay(st!=='bad');}
    if(srs){const r=rating||(st==='bad'?'again':failed.has(c.es)?'hard':RATE[st]);grade(c,st,r);}
    if(st==='bad'||rating==='again'){failed.add(c.es);q.push(c);}}
  function nxt(){i++;if(i>=q.length)return end();show();}
  function show(){upd();stage.innerHTML='';const c=q[i];
    if(mode==='flip'){let shown=false;const card=h('div',{class:'card flash'},h('div',{class:'big'},c.es),spk(c.es),h('div',{class:'muted',id:'ans',style:'visibility:hidden;font-size:20px'},(pic(c.es,c.em)?pic(c.es,c.em)+'  ':'')+trc(c.de)));
      stage.append(kind(T('Was bedeutet das?')),card);setTimeout(()=>say(c.es),200);
      const row=h('div',{class:'actions'});const reveal=h('button',{class:'btn primary'},T('Aufdecken'));
      reveal.onclick=()=>{shown=true;$('#ans').style.visibility='visible';row.innerHTML='';row.className='rates';row.append(
        ...[['again','bad',T('Nochmal'),'var(--bad)'],['hard','near',T('Schwer'),'var(--gold)'],['good','ok',T('Gut'),'var(--accent)'],['easy','ok',T('Leicht'),'var(--ok)']].map(([r,st,l,col])=>{
          const sc=srs&&S.srs[vkey(c.es)];const d=sc?nextIvl(Object.assign({},sc),r):(r==='hard'?1:r==='good'?3:5);
          return h('button',{class:'btn rate',style:'color:'+col,onclick:()=>{res(c,st,r);nxt();}},h('b',{},l),h('span',{},r==='again'?T('gleich nochmal'):d===1?T('morgen'):d+T(' Tage')));}));};row.append(reveal);stage.append(row);
      const kh=e=>{if(!stage.isConnected)return document.removeEventListener('keydown',kh);if(e.key===' '||e.key==='Enter'){e.preventDefault();if(!shown)reveal.click();}else if(shown&&['1','2','3'].includes(e.key)){document.removeEventListener('keydown',kh);row.children[+e.key-1].click();}};
      document.addEventListener('keydown',kh);return;}
    const inp=h('input',{class:'inp',autocomplete:'off',spellcheck:'false',placeholder:fmt(T('{ON} …'))});
    if(mode==='listen'){stage.append(kind(T('Hör zu und schreib das Wort')),h('div',{class:'row',style:'margin-bottom:14px'},spk(c.es,true),h('button',{class:'btn small',onclick:()=>say(c.es,0.55)},T('🐢 Langsam'))),inp,keys(()=>inp));setTimeout(()=>say(c.es),200);}
    else stage.append(kind(fmt(T('Wie heißt das {ON}?'))),picEl(c.es,c.em,'qpic'),h('p',{class:'q',style:'font-size:26px'},trc(c.de)),inp,keys(()=>inp));
    setTimeout(()=>inp.focus(),50);
    stage.append(actionBar(()=>{const r=compare(inp.value,c.es,{pron:false});inp.readOnly=true;inp.classList.add(r.status==='bad'?'wrong':'right');
      feedback(stage,r,{t:'v'},inp.value,null);if(mode==='listen')stage.append(h('p',{class:'muted'},'= '+trc(c.de)));if(r.status!=='bad')say(c.es);res(c,r.status);},{next:nxt}));}
  function end(){stage.innerHTML='';const pct=Math.round(100*okc/Math.max(seen.size,1));if(srs&&seen.size){S.vocabDay=today();save();}const np=dayPlan().find(x=>!x.done);
    stage.append(h('div',{class:'card',style:'text-align:center;padding:36px'},h('div',{style:'font-size:44px'},'🗂️'),h('h1',{},T('¡Hecho!')),h('p',{class:'sub'},pct+T('% gewusst · ')+seen.size+T(' Karten')),
      h('div',{class:'row',style:'justify-content:center'},h('button',{class:'btn',onclick:()=>go('vocab')},T('Zurück zum Trainer')),np?h('button',{class:'btn primary',onclick:()=>{NAVRESET=true;go(np.r);}},T('Nächste Aufgabe: ')+np.t+' →'):null)));}
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
  const steps=units.flatMap(u=>shuffle(byU[u.id]).slice(0,3)).map(i=>{const s=PLACEMENT[i];return{s:s.t==='mc'&&!s.opts.includes(T('Weiß ich nicht'))?Object.assign({},s,{opts:s.opts.concat([T('Weiß ich nicht')]),keepLast:true}):s,ref:T('P||')+i,unit:s.u};});
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
function vMistakes(m){m.append(h('h1',{},T('Fehlerheft')),h('p',{class:'sub'},T('Jede falsch beantwortete Aufgabe landet hier. Richtig beantwortet beim Üben → sie verschwindet.')));
  const list=S.mistakes.map(x=>({x,s:resolveRef(x.ref)})).filter(y=>y.s);
  if(!list.length){m.append(h('div',{class:'card'},T('Keine offenen Fehler. ¡Muy bien! 🎉')));return;}
  m.append(h('button',{class:'btn primary',style:'margin-bottom:16px',onclick:()=>{m.innerHTML='';play(m,{title:T('Fehler üben'),mistakeMode:true,noRetry:false,steps:shuffle(list).slice(0,20).map(y=>({s:y.s,ref:y.x.ref})),onBack:()=>go('mistakes'),onDone:()=>({label:T('Zum Fehlerheft'),fn:()=>go('mistakes')})});}},T('Fehler üben (')+Math.min(list.length,20)+')'));
  m.append(h('div',{class:'grid',style:'gap:8px'},list.map(({x,s})=>h('div',{class:'card',style:'padding:12px 16px'},h('div',{class:'small muted'},x.ref.startsWith('P')?T('Einstufungstest'):(x.ref.startsWith(T('S|'))?T('Geschichte'):''+UW+' '+(unitById(x.ref.split('|')[x.ref.startsWith(T('W|'))?1:0])?.n??''))+' · '+x.date),
    h('div',{html:(s.q||s.de||s.es||s.verb||s.title||'').replace(/___/g,'_____')}),x.your?h('div',{class:'small'},T('Deine Antwort: '),h('span',{style:'color:var(--bad)'},x.your)):null))));}

/* ---------- gemini chat ---------- */
function vChat(m,id){const u=unitById(id);const sit=u.situacion;
  m.append(backTo(UW+' '+u.n,'unit/'+id),h('h1',{},'💬 '+sit.title),h('div',{class:'scene',html:'🎬 '+sit.scene+T('<br><b>Dein Ziel:</b> ')+sit.goal}));
  if(!hasAI()){m.append(h('div',{class:'card'},h('p',{},T('Für freie Gespräche brauchst du KI: entweder diese App über den claude.ai-Link öffnen (nutzt dein Claude-Abo) oder einen kostenlosen Gemini-Key in den Einstellungen. Alles andere funktioniert ohne.')),h('button',{class:'btn primary',onclick:()=>go('settings')},T('Zu den Einstellungen'))));return;}
  const chat=h('div',{class:'chat'});const hist=[];const sys=TEACHER+`\n\nROLLENSPIEL: ${sit.role}\nSzene: ${sit.scene}\nZiel von Jonas: ${sit.goal}\nWortschatz/Grammatik bis ${UW} ${u.n}: ${u.goals.join(', ')}.\nRegeln: Spiele deine Rolle auf Spanisch, natürlich aber einfach (A1/A2), 1–3 kurze Sätze pro Antwort, stelle Rückfragen, damit das Gespräch weitergeht. Wenn Jonas einen Fehler macht, gib eine kurze Korrektur auf Deutsch im Feld "korrektur" (sonst null). Wenn das Ziel erreicht ist, beende das Gespräch freundlich und setze "fertig": true.\nAntworte NUR als JSON: {"antwort_es":"...","antwort_de":"deutsche Übersetzung","korrektur":null oder {"richtig":"korrigierter Satz von Jonas","erklaerung":"kurz"},"fertig":false}`;
  const inp=h('input',{class:'inp',placeholder:fmt(T('Deine Antwort {ON} …')),autocomplete:'off',spellcheck:'false'});const send=h('button',{class:'btn primary'},T('Senden'));
  m.append(chat,h('div',{class:'row',style:'flex-wrap:nowrap'},inp,send),keys(()=>inp),h('p',{class:'muted small'},fmt(T('Tipp: Wenn du nicht weiterweißt, schreib auf {EX} „Hilfe: …“ – der Lehrer hilft dir.'))));
  function bubble(me,es,de,corr){const b=h('div',{class:'msg'+(me?' me':'')},h('div',{class:'who'},me?T('Du'):sit.npc||T('Profe')),h('div',{class:'row',style:'gap:8px;flex-wrap:nowrap'},me?null:spk(es),h('span',{class:'es-t'},es)),de?h('div',{class:'tr'},de):null);chat.append(b);
    if(corr)chat.append(h('div',{class:'fb warn',style:'align-self:flex-end;max-width:82%;margin:0'},'✏️ ',h('span',{class:'es-t'},corr.richtig),h('div',{class:'small'},corr.erklaerung)));b.scrollIntoView({behavior:'smooth',block:'end'});}
  async function turn(text){if(text){bubble(true,text);hist.push({role:'user',parts:[{text}]});}
    else hist.push({role:'user',parts:[{text:T('(Beginne das Gespräch mit deiner ersten Zeile.)')}]});
    send.disabled=true;send.textContent='…';
    try{const r=await gemini(sys,{history:hist});hist.push({role:'model',parts:[{text:JSON.stringify(r)}]});bubble(false,r.antwort_es,r.antwort_de,null);
      if(r.korrektur&&chat.children.length>1){const last=[...chat.querySelectorAll('.msg.me')].pop();if(last)last.after(h('div',{class:'fb warn',style:'align-self:flex-end;max-width:82%;margin:0'},'✏️ ',h('span',{class:'es-t'},r.korrektur.richtig),h('div',{class:'small'},r.korrektur.erklaerung)));}
      say(r.antwort_es);if(r.fertig)chat.append(h('div',{class:'fb ok'},T('🎉 Ziel erreicht! ¡Muy bien!')));}
    catch(e){chat.append(h('div',{class:'fb bad'},AIN()+T('-Fehler: ')+e.message));}
    send.disabled=false;send.textContent=T('Senden');inp.focus();}
  send.onclick=()=>{const t=inp.value.trim();if(!t)return;inp.value='';turn(t);};inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();send.click();}};
  turn(null);}

/* ---------- settings ---------- */
function vSettingsAll(m){const st=S.settings;
  const voiceSel=h('select',{class:'inp',style:'font-size:15px'});const fillV=()=>{loadVoices();voiceSel.innerHTML='';voiceSel.append(h('option',{value:''},T('Automatisch (beste Stimme)')));voices.forEach(v=>voiceSel.append(h('option',{value:v.name,selected:v.name===st.voice},v.name+' ('+v.lang+')')));};fillV();setTimeout(fillV,500);
  voiceSel.onchange=()=>{st.voice=voiceSel.value;save();say((LANG.sampleSay||[T('Hola')])[0]);};
  const rate=h('input',{type:'range',min:'0.5',max:'1.2',step:'0.05',value:st.rate});rate.oninput=()=>{st.rate=+rate.value;save();};rate.onchange=()=>say((LANG.sampleSay||[T('Hola')])[1]||(LANG.sampleSay||[T('Hola')])[0]);
  const theme=h('select',{class:'inp',style:'font-size:15px'},[['auto',T('Wie System')],['light',T('Hell')],['dark',T('Dunkel')]].map(([v,l])=>h('option',{value:v,selected:st.theme===v},l)));theme.onchange=()=>{st.theme=theme.value;save();route();};
  const tr=h('input',{type:'checkbox',checked:st.showTr});tr.onchange=()=>{st.showTr=tr.checked;save();};
  m.append(h('div',{class:'card',style:'margin-bottom:16px'},h('h2',{style:'margin-top:0'},T('🔊 Aussprache')),
    h('div',{class:'field'},h('label',{},T('Stimme')),voiceSel,h('span',{class:'muted small'},(T(LANG.voiceHint||'')||''))),
    h('div',{class:'field'},h('label',{},T('Sprechtempo')),rate),
    h('label',{class:'row'},tr,T('Übersetzungen in Dialogen sofort zeigen')),
    h('div',{class:'field',style:'margin-top:12px'},h('label',{},T('Darstellung')),theme)));
  const key=h('input',{class:'inp',type:'password',value:st.geminiKey,placeholder:T('AIza…'),style:'font-size:15px'});
  const model=h('input',{class:'inp',value:st.geminiModel,style:'font-size:15px'});const out=h('div');
  const test=h('button',{class:'btn'},T('Verbindung testen'));
  test.onclick=async()=>{st.geminiKey=key.value.trim();st.geminiModel=model.value.trim()||'gemini-flash-latest';save();out.innerHTML='';test.disabled=true;test.textContent=T('Teste…');
    try{const r=await gemini(T('Antworte als JSON {"ok":true,"saludo":"ein kurzer Gruß auf ')+LANG.code+'"}');model.value=st.geminiModel;out.append(h('div',{class:'fb ok'},T('✓ Funktioniert (')+st.geminiModel+T(')! Gemini sagt: '),h('span',{class:'es-t'},r.saludo||'')));}
    catch(e){out.append(h('div',{class:'fb bad'},'✗ '+e.message));
      try{const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=100&key='+encodeURIComponent(st.geminiKey));const j=await r.json();
        const ms=(j.models||[]).filter(x=>(x.supportedGenerationMethods||[]).includes(T('generateContent'))&&/flash/.test(x.name)&&!/image|tts|audio|live|embed/.test(x.name)).map(x=>x.name.replace('models/',''));
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
    m.append(h('div',{class:'card',style:'margin-bottom:16px'},h('h2',{style:'margin-top:0'},T('☁️ Geräte synchronisieren (GitHub)')),
      h('p',{class:'muted'},T('Damit Mac, PC und iPhone denselben Stand haben. Dein Fortschritt wird als private Datei (Secret Gist) in deinem GitHub-Account gespeichert und automatisch abgeglichen: beim Öffnen, nach dem Lernen und wenn du zur App zurückkehrst. Der Gemini-Key wird dabei nicht übertragen.')),
      h('ol',{class:'small',style:'padding-left:18px'},
        h('li',{},T('Bei GitHub anmelden und '),h('a',{href:'https://github.com/settings/tokens/new?scopes=gist&description=Mi%20profe%20Sync',target:'_blank'},T('diesen Link öffnen')),T(' (Token-Seite, Häkchen „gist“ ist schon gesetzt).')),
        h('li',{},T('Bei „Expiration“ am besten „No expiration“ oder 1 Jahr wählen → ganz unten „Generate token“.')),
        h('li',{},T('Den Schlüssel kopieren, hier einfügen, „Verbinden“ klicken – und auf jedem Gerät dasselbe tun.'))),
      h('div',{class:'field'},h('label',{},T('GitHub-Zugangsschlüssel (nur Berechtigung „gist“)')),tok),
      h('div',{class:'row'},con,st.ghToken?h('button',{class:'btn ghost',onclick:()=>{st.ghToken='';st.gistId='';save(true);toast(T('Sync auf diesem Gerät beendet'));route();}},T('Sync beenden')):null,h('span',{class:'muted small'},syncLabel())),sout));}
  const file=h('input',{type:'file',accept:'.json',class:'hide'});file.onchange=async()=>{try{const d=JSON.parse(await file.files[0].text());if(!d.srs&&!d.lessons)throw 0;const k=S.settings.geminiKey,gt=S.settings.ghToken,gi=S.settings.gistId;S=Object.assign(JSON.parse(JSON.stringify(DEFAULT)),d);S.settings=Object.assign({},DEFAULT.settings,d.settings||{});if(!S.settings.geminiKey)S.settings.geminiKey=k;S.settings.ghToken=gt;S.settings.gistId=gi;save();toast(T('Backup geladen ✓'));route();}catch(e){toast(T('Datei ungültig'));}};
  m.append(h('div',{class:'card'},h('h2',{style:'margin-top:0'},T('💾 Fortschritt sichern')),h('p',{class:'muted'},T('Dein Fortschritt liegt im Browser. Wenn du Browser-Daten löschst oder den Browser wechselst, ist er weg – also ab und zu ein Backup machen. Auch nützlich, wenn ich dir eine neue Version der App schicke (die übernimmt den Fortschritt aber normalerweise automatisch, solange du denselben Browser nutzt).')),
    h('div',{class:'row'},h('button',{class:'btn',onclick:async()=>{const d=JSON.parse(JSON.stringify(S));d.settings.geminiKey='';d.settings.ghToken='';d.settings.gistId='';const txt=JSON.stringify(d,null,1);const fn='mi-profe-'+LANG.code+'-fortschritt-'+today()+'.json';
        if(IN_ARTIFACT){const dl=await window.claude.use('downloads').catch(()=>null);if(!dl){toast(T('Download hier nicht verfügbar'));return;}try{await dl.save({filename:fn,data:txt});}catch(e){toast(T('Download abgebrochen'));}return;}
        const a=h('a',{href:URL.createObjectURL(new Blob([txt],{type:'application/json'})),download:fn});document.body.append(a);a.click();a.remove();}},T('⬇️ Backup herunterladen')),
      h('button',{class:'btn',onclick:()=>file.click()},T('⬆️ Backup laden')),file,h('span',{class:'spacer'}),
      h('button',{class:'btn ghost',style:'color:var(--bad)',onclick:async()=>{if(await askConfirm(T('Wirklich den ganzen Fortschritt zurücksetzen?'),T('Zurücksetzen'))){const k=S.settings;S=JSON.parse(JSON.stringify(DEFAULT));S.settings=k;save(true);if(k.ghToken&&k.gistId){gh('/gists/'+k.gistId,{method:'PATCH',body:JSON.stringify({files:{[GIST_FILE]:{content:JSON.stringify(payload())}}})}).catch(()=>{});}route();}}},T('Alles zurücksetzen')))));
}


function vLang(m){m.append(backTo(T('Mehr'),'settings'),h('h1',{},T('Sprache & Profil')));
  const avail=Object.values(LANGS).filter(L=>L.course&&L.course.units.length);const planned=LANG_PLANNED.filter(([c])=>!avail.some(L=>L.code===c));
  const pick=code=>{if(code===LANG.code)return go('home');save(true);try{localStorage.setItem(SHARED,JSON.stringify({lang:code,ui:UI,ex:EX_SET,name:S.name,surname:S.surname,gender:S.gender,settings:S.settings}));}catch(e){}if(IN_ARTIFACT){toast(T('Sprachwechsel nur in der installierten App'));return;}location.hash='home';location.reload();};
  m.append(h('div',{class:'kind',style:'margin-top:8px'},T('Ich lerne')),h('div',{class:'chips'},
    ...avail.map(L=>h('button',{class:'chip'+(L.code===LANG.code?' on':''),onclick:()=>pick(L.code)},h('span',{},L.flag),h('span',{},T(L.name)))),
    ...planned.map(([c,n,f])=>h('button',{class:'chip soon',onclick:()=>toast(T(n)+T(' ist noch in Arbeit'))},h('span',{},f),h('span',{},T(n)+T(' · bald'))))),
    h('p',{class:'muted small',style:'margin:6px 0 0'},T('Jede Sprache hat ihren eigenen Fortschritt.')));
  m.append(h('div',{class:'kind',style:'margin-top:20px'},T('Sprache der App')),h('div',{class:'seg'},UI_LANGS.map(([c,f,n])=>h('button',{class:c===UI?'on':'',onclick:()=>{if(c!==UI)setUI(c);}},h('b',{},f),h('span',{},n)))),
    h('p',{class:'muted small',style:'margin:6px 0 0'},T('Knöpfe, Menüs und Hinweise.')));
  m.append(h('div',{class:'kind',style:'margin-top:20px'},fmt(T('{L} lernen mit'))),h('div',{class:'chips'},EX_LANGS.map(c=>h('button',{class:'chip'+(c===EX?' on':''),onclick:()=>{if(c!==EX){if(IN_ARTIFACT){toast(T('Sprachwechsel nur in der installierten App'));return;}setEX(c);}}},h('span',{},EX_FLAGS[c]||''),h('span',{},fmt(T(EX_NAMES[c]||c)))))),
    h('p',{class:'muted small',style:'margin:6px 0 0'},T('Erklärungen, Übersetzungen und Wortbedeutungen im Kurs – unabhängig von der Sprache der App.')));
  m.append(h('div',{class:'kind',style:'margin-top:20px'},T('Name & Ansprache')),h('div',{class:'card',style:'padding:12px 16px'},h('div',{class:'row',style:'flex-wrap:nowrap'},
    h('div',{style:'flex:1;min-width:0;font-weight:600'},'👤 '+S.name+(S.surname?' '+S.surname:'')+(S.gender==='f'?T(' · weiblich'):S.gender==='m'?T(' · männlich'):'')),h('button',{class:'btn small',onclick:()=>go('name')},T('Ändern')))));}
/* Unterseiten von „Mehr“: welche Karten aus vSettingsAll gezeigt werden (Erkennung über die – ggf. übersetzte – Überschrift) */
const SETSEC=[['stimme','🔊',T('Stimme & Darstellung'),T('Tempo, Stimme, hell/dunkel'),['🔊 Aussprache']],
  ['ki','🤖',T('KI-Lehrer'),T('Gemini für Texte & Gespräche'),['🤖 KI-Lehrer: Claude ist aktiv','🤖 Gemini (optional)']],
  ['sync','☁️',T('Sync & Backup'),T('Geräte abgleichen & sichern'),['☁️ Geräte synchronisieren (GitHub)','💾 Fortschritt sichern']]];
function vSettings(m,sec){
  const s=SETSEC.find(x=>x[0]===sec);
  if(s){const tmp=h('div');vSettingsAll(tmp);const want=s[4].map(x=>T(x));const cards=[...tmp.children].filter(el=>want.includes(el.querySelector('h2')?.textContent||''));
    /* lange Erklärtexte einklappen, damit die Seite ohne Scrollen auskommt */
    cards.forEach(el=>{const info=[...el.children].filter(x=>x.matches('p.muted,ol'));if(!info.length)return;const d=h('details',{class:'howto'},h('summary',{},T('Anleitung & Infos')));info[0].before(d);d.append(...info);});
    m.append(backTo(T('Mehr'),'settings'),h('h1',{},s[2]),...cards.map(el=>{if(cards.length===1)el.querySelector('h2')?.remove();return el;}));return;}
  const upd=async()=>{toast(T('Suche nach Update …'));try{const r=navigator.serviceWorker&&await navigator.serviceWorker.getRegistration();if(r)await r.update();
    const html=await (await fetch(location.pathname+'?v='+Date.now(),{cache:'no-store'})).text();const v=(html.match(/APP_VERSION="([^"]+)"/)||[])[1];
    if(v&&v!==window.APP_VERSION){toast(T('Neue Version gefunden – lade neu …'));if(window.caches)for(const k of await caches.keys())await caches.delete(k);setTimeout(()=>location.reload(),600);}else toast(T('Du hast schon die neueste Version ✓'));}catch(e){toast(T('Keine Verbindung – später noch mal versuchen'));}};
  const ver=window.APP_VERSION?window.APP_VERSION.replace(/^(\d{4})(\d\d)(\d\d)-(\d\d)(\d\d)$/,'$3.$2.$1, $4:$5'):T('Offline-Datei');
  m.append(h('h1',{},T('Mehr')),tiles(mtile('🌍',T('Sprache & Profil'),LANG.flag+' '+T(LANG.name)+' · '+S.name,()=>go('lang')),
    ...SETSEC.map(x=>mtile(x[1],x[2],x[3],()=>go('settings/'+x[0])))),
    h('div',{class:'row verline'},h('span',{class:'muted small'},T('Version ')+ver),window.PWA?h('button',{class:'btn small ghost',onclick:upd},'🔄 '+T('Nach Update suchen')):null));}

/* ---------- Sync über GitHub Gist ---------- */
const GIST_FILE=LANG.gist,GIST_DESC=T('Mi profe – Lernfortschritt (Sync)');
let syncState={status:'',at:null},syncTimer=null,syncBusy=false;
function syncLabel(){const st=S.settings;if(!st.ghToken)return T('Fortschritt nur auf diesem Gerät');
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
  o.name=a.name||b.name;o.gender=a.gender||b.gender;
  o.stories=Object.assign({},b.stories||{});for(const[k,v]of Object.entries(a.stories||{})){const r=o.stories[k];o.stories[k]=!r?v:{date:v.date>r.date?v.date:r.date,score:Math.max(v.score||0,r.score||0)};}
  o.checks=Object.assign({},b.checks||{});for(const[k,v]of Object.entries(a.checks||{})){const r=o.checks[k];o.checks[k]=!r?v:{date:(v.date>r.date?v.date:r.date),score:Math.max(v.score||0,r.score||0),pass:!!(v.pass||r.pass)};}
  o.updated=Math.max(a.updated||0,b.updated||0);return o;}
async function gh(path,opt={}){const r=await fetch('https://api.github.com'+path,Object.assign({},opt,{headers:Object.assign({'Accept':'application/vnd.github+json','Authorization':'Bearer '+S.settings.ghToken},opt.body?{'Content-Type':'application/json'}:{})}));
  if(r.status===401)throw new Error(T('Zugangsschlüssel ungültig oder abgelaufen.'));if(!r.ok)throw new Error(T('GitHub-Fehler ')+r.status);return r.status===204?null:r.json();}
async function findOrCreateGist(){
  for(let page=1;page<=5;page++){const list=await gh('/gists?per_page=100&page='+page);const g=list.find(x=>x.files&&Object.keys(x.files).some(f=>f.startsWith('mi-profe-fortschritt')));if(g)return g.id;if(list.length<100)break;}
  const g=await gh('/gists',{method:'POST',body:JSON.stringify({description:GIST_DESC,public:false,files:{[GIST_FILE]:{content:JSON.stringify(payload())}}})});return g.id;}
async function syncNow(opts={}){const st=S.settings;if(!st.ghToken||syncBusy)return false;syncBusy=true;setSync('busy');
  try{if(!st.gistId){st.gistId=await findOrCreateGist();save(true);}
    const g=await gh('/gists/'+st.gistId);let remote={};const f=g.files&&g.files[GIST_FILE];
    if(f){let txt=f.content;if(f.truncated&&f.raw_url)txt=await (await fetch(f.raw_url)).text();try{remote=JSON.parse(txt||'{}');}catch(e){remote={};}}
    const before=JSON.stringify(payload());const settings=S.settings;
    const merged=mergeState(payload(),remote);S=Object.assign(JSON.parse(JSON.stringify(DEFAULT)),merged);S.settings=settings;
    try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}
    const after=JSON.stringify(payload());
    if(after!==JSON.stringify(remote))await gh('/gists/'+st.gistId,{method:'PATCH',body:JSON.stringify({files:{[GIST_FILE]:{content:after}}})});
    setSync('ok');
    if(before!==after&&!opts.quiet){const r=curRoute().split('/')[0];if(['home','units','unit','vocab','mistakes','placement','settings','words','resumen'].includes(r))route();}
    return true;}
  catch(e){setSync('error');console.warn(T('Sync'),e);if(opts.throw)throw e;return false;}
  finally{syncBusy=false;}}
window.__sync={schedule(){if(!S.settings.ghToken)return;clearTimeout(syncTimer);syncTimer=setTimeout(()=>syncNow({quiet:true}),4000);}};
window.addEventListener('focus',()=>{if(S.settings.ghToken)syncNow();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&S.settings.ghToken){clearTimeout(syncTimer);syncNow({quiet:true});}});

window.__app={S:()=>S,compare,route,mergeState,RENDER};
/* App-Gefühl: kein Pinch-/Doppeltipp-Zoom */
['gesturestart','gesturechange','gestureend'].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault(),{passive:false}));
document.addEventListener('touchmove',e=>{if(e.touches&&e.touches.length>1)e.preventDefault();},{passive:false});
setTimeout(()=>{if(S.settings.ghToken)syncNow();},300);
if(T('serviceWorker') in navigator&&/^https?:/.test(location.protocol)&&window.PWA){navigator.serviceWorker.register('sw.js').catch(()=>{});}
route();
})();
