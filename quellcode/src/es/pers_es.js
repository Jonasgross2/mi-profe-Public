/* Spanisch: Personalisierung (LANG.personal). Die Kursinhalte sind für die Kurs-Person LANG.persona (Jonas Gross) geschrieben;
   die Engine ersetzt Vor- und Nachnamen allgemein, hier stehen nur die spanischen Teile: Buchstabieren, señor/señora, Rezeption.
   P = {nm: Vorname(n), sur: Nachname, g: 'm'|'f'|'x', ex: Erklärsprache}. test = welche Texte überhaupt betroffen sind. */
(function(){
var SPELL={a:'a',b:'be',c:'ce',d:'de',e:'e',f:'efe',g:'ge',h:'hache',i:'i',j:'jota',k:'ka',l:'ele',m:'eme',n:'ene','ñ':'eñe',o:'o',p:'pe',q:'cu',r:'erre',s:'ese',t:'te',u:'u',v:'uve',w:'uve doble',x:'equis',y:'i griega',z:'zeta','ä':'a con diéresis','ö':'o con diéresis','ü':'u con diéresis','ß':'doble ese','á':'a con tilde','é':'e con tilde','í':'i con tilde','ó':'o con tilde','ú':'u con tilde'};
/* deutsche Buchstabennamen – für die falsche Antwort beim Buchstabieren */
var GSPELL={a:'a',b:'be',c:'tse',d:'de',e:'e',f:'ef',g:'gue',h:'ha',i:'i',j:'jot',k:'ka',l:'el',m:'em',n:'en',o:'o',p:'pe',q:'ku',r:'er',s:'es',t:'te',u:'u',v:'fau',w:'ve',x:'iks',y:'ípsilon',z:'tset','ä':'a','ö':'o','ü':'u','ß':'es-tset'};
var spell=function(w,M){return w.toLowerCase().split('').filter(function(c){return M[c];}).map(function(c){return M[c];}).join(', ');};
var cap=function(x){return x.charAt(0).toUpperCase()+x.slice(1)+'.';};
function str(t,P){var sp=P.sur||P.nm.split(' ')[0];
  return t.replace(/„Gross“ – du sagst, dass man das Doppel-S mit zwei S schreibt\./,'Ein Doppel-S buchstabierst du „dos eses“.').replace(/“Gross” – you say that the double S is written with two S's\./,'You spell a double S as “dos eses”.')
   .replace(/^Gross: [a-zñ, ]+\.$/,sp+': '+spell(sp,SPELL)+'.').replace(/^Ge, erre, o, ese, ese\.$/,function(){return cap(spell(sp,SPELL));})
   .replace(/^Je, erre, o, es, es\.$/,function(){return cap(spell(sp,GSPELL));})
   .replace(/, señor Gross/g,P.g==='x'?', '+(P.sur?P.nm.split(' ')[0]+' '+P.sur:P.nm):', '+(P.g==='f'?'señora':'señor')+(P.sur?' '+P.sur:''));}
/* ohne Nachnamen im Profil fragt die Rezeption nach dem Namen statt dem Nachnamen */
function obj(o,P){if(o.n&&o.es==='¿Cómo se escribe tu apellido?'&&!P.sur){o.es='¿Cómo se escribe tu nombre?';o.de=P.ex==='de'?'Wie schreibt man deinen Namen?':'How do you spell your name?';}}
defineLang('es',{persona:{name:'Jonas',surname:'Gross',country:'DE',city:'Mannheim'},personal:{test:/erre, o, e/,str:str,obj:obj}});
})();
