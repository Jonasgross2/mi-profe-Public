/* Erster Suchlauf: alle Texte in der Ausgangssprache der Erklärungen (Felder de/why/hint/… immer, sonst per Erkennung). Aufruf über remap.py extract */
load('i18n/_load.js');
var GER=BASE_RX[BASE]||BASE_RX.de;
var SKIP={role:1,id:1,t:1,n:1,level:1,after:1,u:1,a:1,es:1,verb:1,forms:1,say:1,model:1,alt:1,em:1,persons:0,ab:1,status:1,kind:0};
var out={},seen={};
function add(u,s){if(seen[s])return;seen[s]=1;(out[u]=out[u]||[]).push(s);}
function walk(o,u,k,force){
  if(typeof o==='string'){if(force||GER.test(o)||(k==='text'&&/\{[^|}]+\|/.test(o)))add(u,o);return;}
  if(Array.isArray(o)){
    if(k==='items'){o.forEach(function(it){if(it&&it[1])add(u,it[1]);});return;}
    o.forEach(function(x){walk(x,u,k,force);});return;}
  if(o&&typeof o==='object'){for(var kk in o){if(SKIP[kk])continue;walk(o[kk],u,kk,kk==='de'||kk==='why'||kk==='hint'||kk==='task'||kk==='focus'||kk==='desc'||kk==='sub'||kk==='goals'||kk==='scene'||kk==='goal'||kk==='intro'||kk==='tip'||kk==='note');}}
}
C.units.forEach(function(u){walk(u,'u'+u.n);});
ST.forEach(function(s){walk(s,'stories');});
PL.forEach(function(p){walk(p,'test');});
RD.forEach(function(r){walk(r,'readings');});
print(JSON.stringify(out));
