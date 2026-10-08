/* Deutsch: Personalisierung (LANG.personal). Die Inhalte sind für die Kurs-Person Lucas Souza geschrieben.
   „Lucas Souza“ → eigener Name (+ Nachname), „Souza“ allein → eigener Nachname (sonst Vorname), Buchstabieren „S – O – U – Z – A“ → eigener Name buchstabiert. */
(function(){
var spell=function(n){return String(n).toUpperCase().replace(/[^A-ZÄÖÜß]/g,'').split('').join(' – ');};
var str=function(t,P){var sur=P.sur||'',nm=P.nm;
  /* Anrede „Herr Souza“ / „senhor Souza“: Frau/Herr bzw. senhora/senhor + eigener Nachname; ohne Nachnamen oder bei „keine Angabe“ nur der Name */
  var f=P.g==='f',x=P.g==='x'||!sur;
  return t.replace(/S – O – U – Z – A/g,spell(sur||nm)).replace(/\bLucas Souza\b/g,nm+(sur?' '+sur:''))
   .replace(/\bHerr Souza\b/g,x?nm+(sur?' '+sur:''):(f?'Frau ':'Herr ')+sur).replace(/\bsenhor Souza\b/g,x?nm+(sur?' '+sur:''):(f?'senhora ':'senhor ')+sur)
   .replace(/\bSouza\b/g,sur||nm);};
defineLang('de',{personal:{test:/Souza|S – O – U – Z – A/,str:str}});
})();
