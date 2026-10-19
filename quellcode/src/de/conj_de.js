/* Deutsch: Präsens-Konjugation nach Regel + Listen der Unregelmäßigen (für den Verben-Trainer).
   LANGS.de.conjugate(infinitiv) → {forms:[ich,du,er/sie/es,wir,ihr,sie/Sie], why:'Muster-Hinweis'} oder null (= lieber nicht üben).
   Trennbare Verben (anrufen → ich rufe an) werden mit Präfix am Ende gebildet, untrennbare Präfixe (be-, ver-, er- …) übernehmen den
   Vokalwechsel des Grundverbs (verlassen → du verlässt). Neue Verben in den Vokabellisten: Unregelmäßige hier eintragen! */
(function(){
var FIX={sein:['bin','bist','ist','sind','seid','sind'],haben:['habe','hast','hat','haben','habt','haben'],werden:['werde','wirst','wird','werden','werdet','werden'],
 wissen:['weiß','weißt','weiß','wissen','wisst','wissen'],tun:['tue','tust','tut','tun','tut','tun'],
 können:['kann','kannst','kann','können','könnt','können'],wollen:['will','willst','will','wollen','wollt','wollen'],müssen:['muss','musst','muss','müssen','müsst','müssen'],
 dürfen:['darf','darfst','darf','dürfen','dürft','dürfen'],sollen:['soll','sollst','soll','sollen','sollt','sollen'],mögen:['mag','magst','mag','mögen','mögt','mögen'],
 möchten:['möchte','möchtest','möchte','möchten','möchtet','möchten'],
 nehmen:['nehme','nimmst','nimmt','nehmen','nehmt','nehmen'],treten:['trete','trittst','tritt','treten','tretet','treten']};
/* Vokalwechsel bei du und er/sie/es (gilt auch mit untrennbarem Präfix: versprechen, betreffen, vergeben …) */
var EI=['essen','fressen','messen','vergessen','geben','helfen','sprechen','treffen','werfen','sterben','brechen','gelten','stechen','bergen','verderben','werben','schmelzen'];
var EIE=['sehen','lesen','empfehlen','befehlen','stehlen','geschehen'];
var AAE=['fahren','schlafen','tragen','waschen','fallen','gefallen','lassen','fangen','backen','wachsen','schlagen','halten','raten','laden','braten','graben','blasen'];
var AU=['laufen','saufen'],OE=['stoßen'];
var SEP=['zusammen','zurecht','zurück','heraus','herunter','herein','herum','hervor','hinaus','vorbei','weiter','kaputt','pleite','statt','krank','fern','fest','hoch','rein','raus','durch','teil','dar','bei','los','weg','mit','auf','aus','ein','an','ab','zu','vor','her','hin','um','nach'];
var INSEP=['hinter','wider','unter','über','miss','voll','emp','ent','ver','zer','be','er','ge'];
/* beginnen mit einem trennbaren Präfix, sind aber nicht trennbar (oder gar keine Zusammensetzung) */
var NOT=['übernachten','überweisen','unterschreiben','umarmen','verstehen','bekommen','besuchen','bezahlen','erklären','erlauben','empfehlen','entschuldigen','gehören','gefallen','beginnen','vergessen',
 'antworten','arbeiten','atmen','angeln','ändern','achten','ahnen','eignen','eilen','einigen','umgeben','wiederholen','durchsuchen','hindern','herrschen','mitteln','zucken','zweifeln','zählen','zahlen','zeigen','zeichnen','zielen','ziehen','zittern','zögern','ordnen','reinigen','rauschen','abonnieren','herzen','heiraten','beichten'];
/* Rest nach einem trennbaren Präfix, der mit Vokal anfängt (sonst: antworten, analysieren, abonnieren …) */
var VREST=['atmen','essen','ändern','erkennen','ordnen','arbeiten','üben','eilen'];
/* unpersönlich, Bedeutung nur mit es/Dativ oder gar kein Verb – nicht im Verben-Trainer üben */
var SKIP=['geschehen','stattfinden','einfallen','angehen','überwiegen','aussterben','passieren','regnen','schneien','klappen','schmecken','kaputtgehen','erfordern','deswegen','sozusagen','meinetwegen','gegen','wegen'];
/* zwei richtige Formen */
var ALT={staubsaugen:['staubsauge|sauge Staub','staubsaugst|saugst Staub','staubsaugt|saugt Staub','staubsaugen|saugen Staub','staubsaugt|saugt Staub','staubsaugen|saugen Staub'],
 erschrecken:['erschrecke','erschrickst|erschreckst','erschrickt|erschreckt','erschrecken','erschreckt','erschrecken']};
var has=function(a,v){return a.indexOf(v)>=0;};
function core(v){
  if(FIX[v])return{forms:FIX[v].slice(),why:'unregelmäßig – auswendig lernen'};
  /* untrennbares Präfix + Grundverb mit Vokalwechsel / unregelmäßig */
  for(var i=0;i<INSEP.length;i++){var p=INSEP[i];if(v.indexOf(p)===0&&v.length>p.length+2&&!has(EI.concat(EIE,AAE),v)){var b=v.slice(p.length);
    if(FIX[b]||has(EI,b)||has(EIE,b)||has(AAE,b)||has(AU,b)||has(OE,b)){var r=core(b);r.forms=r.forms.map(function(x){return p+x;});return r;}}}
  var m=v.match(/^(.*?)(eln|ern|en|n)$/);if(!m)return null;var st=m[1],end=m[2];
  if(end==='eln')return{forms:[st+'le|'+st+'ele',st+'elst',st+'elt',st+'eln',st+'elt',st+'eln'],why:'Verben auf -eln: ich '+st+'le, wir '+st+'eln'};
  if(end==='ern')return{forms:[st+'ere',st+'erst',st+'ert',st+'ern',st+'ert',st+'ern'],why:'Verben auf -ern: wir/sie nur -n'};
  if(end==='n')return{forms:[st+'e',st+'st',st+'t',st+'n',st+'t',st+'n'],why:'regelmäßig: -e, -st, -t, -n, -t, -n'};
  var e=/(t|d|(?:[^aeioulrhmnäöüy]|ch)[mn])$/.test(st)?'e':'';  /* arbeiten, finden, öffnen, rechnen → du arbeitest */
  var sz=function(s){return /(s|ß|z|x)$/.test(s);};           /* heißen, tanzen → du heißt, du tanzt */
  var f=[st+'e',st+e+(sz(st)?'t':'st'),st+e+'t',st+'en',st+e+'t',st+'en'],why='regelmäßig: -e, -st, -t, -en, -t, -en'+(e?' (mit -e- nach t/d: du '+f[1]+')':'');
  var ch=function(a,b,lbl){var i=st.lastIndexOf(a);if(i<0)return;var s=st.slice(0,i)+b+st.slice(i+a.length);
    f[1]=s+(sz(s)?'t':'st');f[2]=s+(/t$/.test(s)?'':'t');why='Vokalwechsel '+lbl+' nur bei du und er/sie/es';};  /* hältst/hält, lädst/lädt, giltst/gilt */
  if(has(EI,v))ch('e','i','e → i');else if(has(EIE,v))ch('e','ie','e → ie');else if(has(AAE,v))ch('a','ä','a → ä');else if(has(AU,v))ch('au','äu','au → äu');else if(has(OE,v))ch('o','ö','o → ö');
  return{forms:f,why:why};}
function conjugate(inf){var v=String(inf||'').trim();if(!/^[a-zäöüß]+$/.test(v)||has(SKIP,v))return null;
  if(ALT[v])return{forms:ALT[v].slice(),why:'regelmäßig: -e, -st, -t, -en, -t, -en'};
  var insep=INSEP.some(function(p){return p.length>=4&&v.indexOf(p)===0;}); /* hinterlassen, unterbrechen, widersprechen: nicht „hin“/„um“ abtrennen */
  if(!has(NOT,v)&&!FIX[v]&&!insep)for(var i=0;i<SEP.length;i++){var p=SEP[i];if(v.indexOf(p)===0&&v.length>p.length+3){var rest=v.slice(p.length);if(/^[aeiouäöü]/.test(rest)&&!has(VREST,rest))continue;var r=core(rest);
    if(r&&/(en|ern|eln)$/.test(rest)){r.forms=r.forms.map(function(x){return x.split('|').map(function(y){return y+' '+p;}).join('|');});r.why='trennbar: '+p+' steht am Ende (ich '+r.forms[0].split('|')[0]+') · '+r.why;return r;}}}
  return core(v);}
/* Textbausteine der Hinweise – die Engine übersetzt sie einzeln (ui_tr.js) */
var WHY_PARTS=['unregelmäßig – auswendig lernen','regelmäßig: -e, -st, -t, -en, -t, -en','regelmäßig: -e, -st, -t, -n, -t, -n','(mit -e- nach t/d: du ','Vokalwechsel ',' nur bei du und er/sie/es','trennbar: ',' steht am Ende (ich ','Verben auf -eln: ich ','Verben auf -ern: wir/sie nur -n'];
defineLang('de',{conjugate:conjugate,whyParts:WHY_PARTS,infinitive:/^[a-zäöüß]+(en|ern|eln)$/,verbMeaning:/(ar|er|ir|or)\b/,
  verbHint:'Du siehst nur den Infinitiv – überleg selbst: regelmäßig? Vokalwechsel (e → i, a → ä)? Trennbar (anrufen → ich rufe an)? Bei Fehlern zeige ich das Muster.'});
})();
