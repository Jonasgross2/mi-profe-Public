var window=this;var localStorage={getItem:function(){return null}};
var SRC=arguments[0];
['c_u0u1.js','c_u2u3.js','c_read03.js','c_u4u5.js','c_u6u8.js','c_u9u10.js','c_extra.js','c_gaps.js','c_a2b.js','c_b1.js','c_b1b.js','c_b2.js','c_b2b.js','c_c1.js','c_c1b.js','c_c2.js','c_vocab_plus.js','c_vocab_freq.js','c_stories.js','c_reading.js','placement.js','levels.js'].forEach(function(f){load(SRC+'/'+f);});
var GER=/[äöüßÄÖÜ„“]|\b(der|die|das|den|dem|des|und|ist|nicht|ich|du|er|sie|wir|mit|für|von|zu|zum|zur|ein|eine|einen|auf|im|in|am|an|bei|nach|oder|aber|wie|was|wer|wo|Wie|Was|Wer|Wo|Du|Ich|Er|Sie|heißt|sagt|Satz|Wort|Wörter|man|sein|haben|wird|kann|muss|auch|noch|schon|hier|dort|nur|sehr|gut|Hallo|ja|nein|Tag|Uhr)\b/;
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
COURSE.units.forEach(function(u){walk(u,'u'+u.n);});
STORIES.forEach(function(s){walk(s,'stories');});
PLACEMENT.forEach(function(p){walk(p,'test');});
(window.READINGS||[]).forEach(function(r){walk(r,'readings');});
print(JSON.stringify(out));
