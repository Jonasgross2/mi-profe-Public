/* Deutsch: weibliche Formen für Sätze über die lernende Person (LANG.gender), z. B. „Ich bin Student.“ → „Ich bin Studentin.“
   first(s) – Sätze mit „Ich bin / Ich arbeite als / Ich werde“ + Personenbezeichnung, self(s) – dasselbe für eigene Sätze,
   word(w) – ein einzelnes Wort, npc(s) – Zeilen von Nebenfiguren an die lernende Person, named(s,name) – „Lieber NAME“ → „Liebe NAME“.
   Neue Berufe/Bezeichnungen über die lernende Person in FEMX eintragen (nur, wenn die weibliche Form nicht einfach +in ist). */
(function(){
var FEMIN=/^(Student|Lehrer|Ingenieur|Programmierer|Entwickler|Designer|Architekt|Praktikant|Kellner|Verkäufer|Fahrer|Mitarbeiter|Kollege|Nachbar|Mieter|Freund|Brasilianer|Portugiese|Anfänger|Fotograf|Journalist|Manager|Berater|Elektriker|Mechaniker|Musiker|Sänger|Schüler|Tourist|Kunde|Gast|Experte|Assistent|Analyst|Buchhalter)$/;
var FEMX={'Arzt':'Ärztin','Koch':'Köchin','Angestellter':'Angestellte','Deutscher':'Deutsche','Kollege':'Kollegin','Kunde':'Kundin','Experte':'Expertin','Portugiese':'Portugiesin','Gast':'Gast','Krankenpfleger':'Krankenpflegerin','Pfleger':'Pflegerin','Bauer':'Bäuerin'};
var femWord=function(w){return FEMX[w]||(FEMIN.test(w)?w+'in':w);};
var first=function(s){return String(s).replace(/\b(Ich bin kein|ich bin kein|Ich bin ein|ich bin ein|Ich bin|ich bin|Ich arbeite als|ich arbeite als|Ich werde|ich werde) ((?:noch |jetzt |auch |schon |hier |seit [^ ]+ )?)([A-ZÄÖÜ][a-zäöüß]+)\b/g,
  function(m,a,mid,w){var f=femWord(w);if(f===w)return m;if(/ k?ein$/.test(a))a=a+'e';return a+' '+mid+f;});};
var npc=function(s){return s.replace(/\bLieber (Kollege|Nachbar|Freund)\b/g,function(m,w){return 'Liebe '+femWord(w);});};
var named=function(t,name){var n=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');return t.replace(new RegExp('\\bLieber ('+n+')\\b','g'),'Liebe $1');};
defineLang('de',{gender:{first:first,self:first,word:femWord,npc:npc,named:named}});
})();
