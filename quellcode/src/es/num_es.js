/* Spanisch: Zahlen, Uhrzeit, Datum, Preise für „Zahlen & Uhrzeit“ (LANG.numbers). Die Engine wählt Aufgabenart und Werte,
   hier steht nur, wie man es auf Spanisch sagt/schreibt. unlock = nach welcher Lektion die Aufgabenart freigeschaltet ist. */
(function(){
var U=['cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve','veinte','veintiuno','veintidós','veintitrés','veinticuatro','veinticinco','veintiséis','veintisiete','veintiocho','veintinueve'];
var TT=['','','','treinta','cuarenta','cincuenta','sesenta','setenta','ochenta','noventa'];
var H=['','ciento','doscientos','trescientos','cuatrocientos','quinientos','seiscientos','setecientos','ochocientos','novecientos'];
function word(n){if(n<30)return U[n];if(n<100)return TT[Math.floor(n/10)]+(n%10?' y '+U[n%10]:'');
  if(n<1000)return n===100?'cien':H[Math.floor(n/100)]+(n%100?' '+word(n%100):'');
  var k=Math.floor(n/1000);return(k===1?'mil':word(k).replace(/uno$/,'ún').replace(/veintiún$/,'veintiún')+' mil').replace(/^ún mil/,'un mil')+(n%1000?' '+word(n%1000):'');}
var wordUn=function(n){return word(n).replace(/veintiuno$/,'veintiún').replace(/uno$/,'un');}; /* vor Nomen: un euro, veintiún euros */
var MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
/* Uhrzeit → Liste richtiger Antworten (erste = Standard zum Vorlesen) */
function time(hh,mm){var h=hh%12||12,m=mm;var hw=function(x){return x===1?'una':word(x);};
  if(m>30){h=h%12+1;m=60-m;return[(h===1?'Es la ':'Son las ')+hw(h)+' menos '+(m===15?'cuarto':word(m))];}
  var base=(h===1?'Es la ':'Son las ')+hw(h);
  if(m===0)return[base+' en punto',base];if(m===15)return[base+' y cuarto',base+' y quince'];if(m===30)return[base+' y media',base+' y treinta'];return[base+' y '+word(m)];}
/* Datum (Tag, Monat 1–12) → richtige Antworten */
function date(d,mo){var M=MESES[mo-1];return['el '+word(d)+' de '+M,word(d)+' de '+M].concat(d===1?['el primero de '+M]:[]);}
/* Preis in Euro → vorgelesener Satz */
function price(e,c){return(e===1?'Un euro':wordUn(e).replace(/^./,function(x){return x.toUpperCase();})+' euros')+(c?' con '+word(c):'')+'.';}
defineLang('es',{numbers:{word:word,time:time,date:date,price:price,
  unlock:{small:['u1','l2'],to20:['u2','l3'],big:['u2','l3'],time:['u4','l3'],price:['u4','l4'],date:['u6','l2']}}});
})();
