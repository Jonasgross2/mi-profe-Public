/* Deutsch: Personalisierung (LANG.personal). Die Inhalte sind für die Kurs-Person Lucas Souza geschrieben.
   „Lucas Souza“ → eigener Name (+ Nachname), „Souza“ allein → eigener Nachname (sonst Vorname), Buchstabieren „S – O – U – Z – A“ → eigener Name buchstabiert. */
(function(){
var spell=function(n){return String(n).toUpperCase().replace(/[^A-ZÄÖÜß]/g,'').split('').join(' – ');};
var str=function(t,P){var sur=P.sur||'',nm=P.nm;
  return t.replace(/S – O – U – Z – A/g,spell(sur||nm)).replace(/\bLucas Souza\b/g,nm+(sur?' '+sur:'')).replace(/\bSouza\b/g,sur||nm);};
defineLang('de',{personal:{test:/Souza|S – O – U – Z – A/,str:str}});
})();
