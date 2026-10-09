/* Deutsch: Präsens-Konjugation nach Regel + Listen der Unregelmäßigen (für den Verben-Trainer).
   LANGS.de.conjugate(infinitiv) → {forms:[ich,du,er/sie/es,wir,ihr,sie/Sie], why:'Muster-Hinweis'} oder null (= lieber nicht üben).
   Trennbare Verben (anrufen → ich rufe an) werden mit Präfix am Ende gebildet. Neue Verben in den Vokabellisten: Unregelmäßige hier eintragen! */
(function(){
var FIX={sein:['bin','bist','ist','sind','seid','sind'],haben:['habe','hast','hat','haben','habt','haben'],werden:['werde','wirst','wird','werden','werdet','werden'],
 wissen:['weiß','weißt','weiß','wissen','wisst','wissen'],tun:['tue','tust','tut','tun','tut','tun'],
 können:['kann','kannst','kann','können','könnt','können'],wollen:['will','willst','will','wollen','wollt','wollen'],müssen:['muss','musst','muss','müssen','müsst','müssen'],
 dürfen:['darf','darfst','darf','dürfen','dürft','dürfen'],sollen:['soll','sollst','soll','sollen','sollt','sollen'],mögen:['mag','magst','mag','mögen','mögt','mögen'],
 möchten:['möchte','möchtest','möchte','möchten','möchtet','möchten'],
 nehmen:['nehme','nimmst','nimmt','nehmen','nehmt','nehmen'],treten:['trete','trittst','tritt','treten','tretet','treten'],
 halten:['halte','hältst','hält','halten','haltet','halten'],laden:['lade','lädst','lädt','laden','ladet','laden'],raten:['rate','rätst','rät','raten','ratet','raten']};
/* Vokalwechsel bei du und er/sie/es */
var EI=['essen','geben','helfen','sprechen','treffen','vergessen','werfen','sterben','brechen','messen','gelten'];
var EIE=['sehen','lesen','empfehlen','stehlen','geschehen'];
var AAE=['fahren','schlafen','tragen','waschen','fallen','gefallen','lassen','fangen','backen','wachsen','schlagen'];
var AU=['laufen'];
var SEP=['zurück','fern','statt','weiter','mit','auf','aus','ein','an','ab','zu','vor','weg','los','her','hin','um','nach'];
var NOT=['übernachten','überweisen','unterschreiben','umarmen','verstehen','bekommen','besuchen','bezahlen','erklären','erlauben','empfehlen','entschuldigen','gehören','gefallen','beginnen','vergessen'];
function core(v){
  if(FIX[v])return{forms:FIX[v].slice(),why:'unregelmäßig – auswendig lernen'};
  var m=v.match(/^(.*?)(eln|ern|en|n)$/);if(!m)return null;var st=m[1],end=m[2];
  if(end==='eln')return{forms:[st+'le',st+'elst',st+'elt',st+'eln',st+'elt',st+'eln'],why:'Verben auf -eln: ich '+st+'le, wir '+st+'eln'};
  if(end==='ern')return{forms:[st+'ere',st+'erst',st+'ert',st+'ern',st+'ert',st+'ern'],why:'Verben auf -ern: wir/sie nur -n'};
  if(end==='n')return{forms:[st+'e',st+'st',st+'t',st+'n',st+'t',st+'n'],why:'regelmäßig: -e, -st, -t, -n, -t, -n'};
  var e=/(t|d|[^aeioulrhmnäöü][mn])$/.test(st)?'e':'';      /* arbeiten, finden, öffnen → arbeitest */
  var s2=/(s|ß|z|x)$/.test(st)?'t':'st';                   /* heißen, tanzen → du heißt, du tanzt */
  var f=[st+'e',st+e+(s2==='t'?'t':'st'),st+e+'t',st+'en',st+e+'t',st+'en'],why='regelmäßig: -e, -st, -t, -en, -t, -en'+(e?' (mit -e- nach t/d: du '+f[1]+')':'');
  var ch=function(a,b,lbl){var i=st.lastIndexOf(a);if(i<0)return;var s=st.slice(0,i)+b+st.slice(i+a.length);
    f[1]=s+(/(s|ß|z)$/.test(s)?'t':(/(t|d)$/.test(s)&&b!=='ä'?'':'st'));f[2]=s+(/(t|d)$/.test(s)?'':'t');why='Vokalwechsel '+lbl+' nur bei du und er/sie/es';};
  if(EI.indexOf(v)>=0)ch('e','i','e → i');else if(EIE.indexOf(v)>=0)ch('e','ie','e → ie');else if(AAE.indexOf(v)>=0)ch('a','ä','a → ä');else if(AU.indexOf(v)>=0)ch('au','äu','au → äu');
  if(v==='essen')f[1]='isst';if(v==='vergessen')f[1]='vergisst';if(v==='messen')f[1]='misst';if(v==='lassen')f[1]='lässt';
  return{forms:f,why:why};}
function conjugate(inf){var v=String(inf||'').trim();if(!/^[a-zäöüß]+$/.test(v)||/^sich /.test(v))return null;
  if(NOT.indexOf(v)<0&&!FIX[v])for(var i=0;i<SEP.length;i++){var p=SEP[i];if(v.indexOf(p)===0&&v.length>p.length+3){var rest=v.slice(p.length),r=core(rest);
    if(r&&/(en|ern|eln)$/.test(rest)){r.forms=r.forms.map(function(x){return x+' '+p;});r.why='trennbar: '+p+' steht am Ende (ich '+r.forms[0]+') · '+r.why;return r;}}}
  return core(v);}
/* Textbausteine der Hinweise – die Engine übersetzt sie einzeln (ui_tr.js) */
var WHY_PARTS=['unregelmäßig – auswendig lernen','regelmäßig: -e, -st, -t, -en, -t, -en','regelmäßig: -e, -st, -t, -n, -t, -n','(mit -e- nach t/d: du ','Vokalwechsel ',' nur bei du und er/sie/es','trennbar: ',' steht am Ende (ich ','Verben auf -eln: ich ','Verben auf -ern: wir/sie nur -n'];
defineLang('de',{conjugate:conjugate,whyParts:WHY_PARTS,infinitive:/^[a-zäöüß]+(en|ern|eln)$/,verbMeaning:/(ar|er|ir|or)\b/,
  verbHint:'Du siehst nur den Infinitiv – überleg selbst: regelmäßig? Vokalwechsel (e → i, a → ä)? Trennbar (anrufen → ich rufe an)? Bei Fehlern zeige ich das Muster.'});
})();
