/* Zweiter, breiterer Suchlauf: alle Texte in Feldern, die für Lernende sichtbar sind und Deutsch sein können,
   die NICHT schon in course_de.json stehen. Ergebnis: course_de_extra.json (Abschnitte x_u0 …). */
var window=this;var localStorage={getItem:function(){return null}};
var SRC=arguments[0],KNOWN=JSON.parse(readFile(arguments[1]));
['c_u0u1.js','c_u2u3.js','c_read03.js','c_u4u5.js','c_u6u8.js','c_u9u10.js','c_extra.js','c_gaps.js','c_a2b.js','c_b1.js','c_b1b.js','c_b2.js','c_b2b.js','c_c1.js','c_c1b.js','c_c2.js','c_vocab_plus.js','c_vocab_freq.js','c_stories.js','c_reading.js','placement.js','levels.js'].forEach(function(f){load(SRC+'/'+f);});
var known={};for(var k in KNOWN)KNOWN[k].forEach(function(s){known[s]=1;});
var FIELDS={title:1,sub:1,desc:1,goals:1,html:1,resumen:1,kind:1,place:1,scene:1,goal:1,intro:1,task:1,hint:1,why:1,focus:1,tip:1,note:1,q:1,de:1,prompt:1};
var SPANISH=/^[¿¡]|[ñ]|\b(el|la|los|las|de|del|que|es|en|y|un|una|por|para|con|se|mi|tu|su)\b/i;
var GERMANISH=/[äöüßÄÖÜ„“]|\b(und|oder|mit|für|von|nach|bei|der|die|das|ein|eine|ist|nicht|wie|was|wann|Wort|Datum|Monate|Akzent|Runde|Lektion)\b/;
var out={},seen={};
function add(u,s){if(seen[s]||known[s])return;seen[s]=1;(out[u]=out[u]||[]).push(s);}
function walk(o,u,k){
  if(typeof o==='string'){if(FIELDS[k]&&/[A-Za-zÄÖÜäöü]{3}/.test(o)){if(GERMANISH.test(o)||!SPANISH.test(o))add(u,o);}return;}
  if(Array.isArray(o)){if(k==='items')return;o.forEach(function(x){walk(x,u,k);});return;}
  if(o&&typeof o==='object'){for(var kk in o){if(kk==='role'||kk==='es'||kk==='a'||kk==='forms'||kk==='model'||kk==='text'||kk==='opts'||kk==='pairs')continue;walk(o[kk],u,kk);}}
}
COURSE.units.forEach(function(u){walk(u,'x_u'+u.n,'');});
STORIES.forEach(function(s){walk(s,'x_stories','');});
PLACEMENT.forEach(function(p){walk(p,'x_test','');});
(window.READINGS||[]).forEach(function(r){walk(r,'x_readings','');});
print(JSON.stringify(out));
