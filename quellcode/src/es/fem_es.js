/* Spanisch: weibliche Formen für Sätze über die lernende Person (LANG.gender). Die Engine geht den Kurs durch und ruft:
   first(s) – Sätze, die mit estoy/soy … + Adjektiv beginnen (überall), self(s) – zusätzlich era/estaría/me pongo … (nur eigene Sätze),
   word(w) – ein einzelnes Wort, npc(s) – Zeilen von Nebenfiguren an die lernende Person (¡Bienvenido!), named(s,name) – Anrede mit Namen. */
(function(){
var FEMO=/^(cansad|encantad|content|preocupad|resfriad|maread|nervios|ocupad|aburrid|enfadad|casad|divorciad|solter|interesad|acostumbrad|dispuest|list|segur|hart|perdid|sorprendid|emocionad|tranquil|alt|baj|delgad|organizad|pequeñ|moren|rubi|simpátic|antipátic|tímid|ordenad|caótic|vag|ingenier|informátic|médic|alumn|abogad|sentad|levantad|duchad|vestid|nacid|mudad|graduad|enamorad|invitad|equivocad|despiert|obligad|encargad|guap|gord|delgad|abiert|cansad|enferm|agotad|orgullos|preparad|convencid|embarazad|relajad|estresad|agradecid|decepcionad|ilusionad|agobiad)o(s?)$/i;
var FEMX={'alemán':'alemana','inglés':'inglesa','francés':'francesa','español':'española','trabajador':'trabajadora','programador':'programadora','diseñador':'diseñadora','consultor':'consultora','auditor':'auditora','profesor':'profesora','director':'directora','alemanes':'alemanas'};
var femWord=w=>FEMO.test(w)?w.replace(/o(s?)$/,'a$1'):FEMX[w.toLowerCase()]?(w[0]===w[0].toUpperCase()?FEMX[w.toLowerCase()][0].toUpperCase()+FEMX[w.toLowerCase()].slice(1):FEMX[w.toLowerCase()]):w;
var femFirst=s=>String(s).replace(/\b(estoy|soy|me siento|me encuentro|sigo|quedo|estuve|he estado|me he vuelto|me volví|me quedé|me he quedado|me puse)((?: (?:muy|un poco|bastante|tan|más|menos|demasiado|súper))?) ([a-záéíóúñü]+)/gi,(m,a,b,w)=>a+b+' '+femWord(w));
/* nur für Sätze, die die lernende Person selbst sagt (Dialog-Antworten, Nachsprechen): auch era/estaría/me pongo … + Adjektiv */
var femSelf=s=>femFirst(s).replace(/\b(era|fui|estaba|estaría|sería|me pongo|me ponía|me pondría|me he puesto|me vuelvo|me volvía|me sentía|me sentí|me encontraba|me quedaba)((?: (?:muy|un poco|bastante|tan|más|menos|demasiado|súper))?) ([a-záéíóúñü]+)/gi,(m,a,b,w)=>a+b+' '+femWord(w)).replace(/\b([Ee])ncantado\b/g,'$1ncantada');
var npc=function(s){return s.replace(/\b([Bb])ienvenido\b/g,'$1ienvenida');};
var named=function(t,name){var n=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');return t.replace(new RegExp('\\bQuerido ('+n+')\\b','g'),'Querida $1').replace(new RegExp('\\bdel ('+n+') que\\b','g'),'de la $1 que');};
defineLang('es',{gender:{first:femFirst,self:femSelf,word:femWord,npc:npc,named:named}});
})();
