/* Zweiter, breiterer Suchlauf: alle Texte in Feldern, die für Lernende sichtbar sind und Deutsch sein können,
   die NICHT schon in course.json stehen. Ergebnis: i18n/kurse/<kurs>/course_extra.json (Abschnitte x_u0 …). Aufruf über remap.py extract. */
load('i18n/_load.js');
var KNOWN=JSON.parse(readFile(arguments[4]));
var known={};for(var k in KNOWN)KNOWN[k].forEach(function(s){known[s]=1;});
var FIELDS={title:1,sub:1,desc:1,goals:1,html:1,resumen:1,kind:1,place:1,scene:1,goal:1,intro:1,task:1,hint:1,why:1,focus:1,tip:1,note:1,q:1,de:1,prompt:1};
/* Texte in der Lernsprache ausschließen (Steckbrief i18nTarget, sonst mark) */
var SPANISH=L.i18nTarget||L.mark||/(?!)/;
var GERMANISH=BASE==='de'?/[äöüßÄÖÜ„“]|\b(und|oder|mit|für|von|nach|bei|der|die|das|ein|eine|ist|nicht|wie|was|wann|Wort|Datum|Monate|Akzent|Runde|Lektion)\b/:(BASE_RX[BASE]||/(?!)/);
var out={},seen={};
function add(u,s){if(seen[s]||known[s])return;seen[s]=1;(out[u]=out[u]||[]).push(s);}
function walk(o,u,k){
  if(typeof o==='string'){if(FIELDS[k]&&/[A-Za-zÄÖÜäöü]{3}/.test(o)){if(GERMANISH.test(o)||!SPANISH.test(o))add(u,o);}return;}
  if(Array.isArray(o)){if(k==='items')return;o.forEach(function(x){walk(x,u,k);});return;}
  if(o&&typeof o==='object'){for(var kk in o){if(kk==='role'||kk==='es'||kk==='a'||kk==='forms'||kk==='model'||kk==='text'||kk==='opts'||kk==='pairs')continue;walk(o[kk],u,kk);}}
}
C.units.forEach(function(u){walk(u,'x_u'+u.n,'');});
ST.forEach(function(s){walk(s,'x_stories','');});
PL.forEach(function(p){walk(p,'x_test','');});
RD.forEach(function(r){walk(r,'x_readings','');});
print(JSON.stringify(out));
