/* Deutsch: Zahlen, Uhrzeit, Datum, Preise für „Zahlen & Uhrzeit“ (LANG.numbers). Die Engine wählt Aufgabenart und Werte,
   hier steht nur, wie man es auf Deutsch sagt/schreibt. unlock = nach welcher Lektion die Aufgabenart freigeschaltet ist. */
(function(){
var U=['null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn'];
var TT=['','','zwanzig','dreißig','vierzig','fünfzig','sechzig','siebzig','achtzig','neunzig'];
var one=function(n){return n===1?'ein':U[n];}; /* in Zusammensetzungen: einundzwanzig, hunderteins … */
function w99(n){if(n<20)return U[n];var e=n%10,z=Math.floor(n/10);return e?one(e)+'und'+TT[z]:TT[z];}
function word(n){if(n<100)return w99(n);
  if(n<1000){var h=Math.floor(n/100),r=n%100;return(h===1?'':one(h))+'hundert'+(r?w99(r):'');}
  var k=Math.floor(n/1000),rest=n%1000;return(k===1?'':word(k).replace(/eins$/,'ein'))+'tausend'+(rest?word(rest):'');}
/* Uhrzeit → Liste richtiger Antworten (erste = umgangssprachlich, zum Vorlesen), auch offiziell (15:30 = fünfzehn Uhr dreißig) */
function time(hh,mm){var h12=hh%12||12,nx=(hh+1)%12||12;var H=function(x){return x===1?'eins':U[x]||w99(x);};var out=[];
  if(mm===0)out.push((h12===1?'ein':H(h12))+' Uhr',H(h12));
  else if(mm===15)out.push('Viertel nach '+H(h12));
  else if(mm===30)out.push('halb '+H(nx));
  else if(mm===45)out.push('Viertel vor '+H(nx),'drei viertel '+H(nx));
  else if(mm<30){out.push(w99(mm)+' nach '+H(h12));if(mm===25)out.unshift('fünf vor halb '+H(nx));if(mm===20)out.push('zehn vor halb '+H(nx));}
  else{out.push(w99(60-mm)+' vor '+H(nx));if(mm===35)out.unshift('fünf nach halb '+H(nx));if(mm===40)out.push('zehn nach halb '+H(nx));}
  out.push((hh===1?'ein':w99(hh))+' Uhr'+(mm?' '+w99(mm):''));            /* offiziell, 24 Stunden */
  if(hh!==h12)out.push((h12===1?'ein':w99(h12))+' Uhr'+(mm?' '+w99(mm):'')); /* offiziell, 12 Stunden */
  var all=[];out.forEach(function(x){all.push('Es ist '+x,x);});return all;}
/* Datum (Tag, Monat 1–12) → richtige Antworten: der erste Mai / am ersten Mai / der erste Fünfte */
var MON=['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
function ord(n){if(n===1)return'erste';if(n===3)return'dritte';if(n===7)return'siebte';if(n===8)return'achte';return word(n)+(n<20?'te':'ste');}
function date(d,mo){var o=ord(d),m=MON[mo-1],om=ord(mo);return['der '+o+' '+m,'am '+o+'n '+m,o+' '+m,'der '+o+' '+om];}
/* Preis in Euro → vorgelesener Satz (2,50 € = zwei Euro fünfzig) */
function price(e,c){return(e===1?'Ein':word(e).replace(/^./,function(x){return x.toUpperCase();}))+' Euro'+(c?' '+word(c):'')+'.';}
defineLang('de',{numbers:{word:word,time:time,date:date,price:price,
  unlock:{small:['k2','l1'],to20:['k2','l1'],big:['k2','l2'],time:['k6','l1'],price:['k4','l3'],date:['k6','l2']}}});
})();
