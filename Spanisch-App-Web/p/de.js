/* Deutschkurs für Brasilianer:innen – Steckbrief (wird zuerst geladen, danach die Inhalte). Alle Felder: CLAUDE.md → „Sprachpaket-Schnittstelle“.
   Ausgangssprache der Erklärungen: Portugiesisch (Brasilien). Feld „es“ in den Inhalten = deutscher Text (Lernsprache), „de“ = portugiesischer Text.
   Kurs-Person: Lucas Souza aus São Paulo, zieht für einen Job nach Frankfurt (wird durch Name/Herkunft der lernenden Person ersetzt). */
defineLang('de',{name:'Deutsch',flag:'🇩🇪',native:'Deutsch',into:'ins Deutsche',onLang:'auf Deutsch',adj:'deutsch',voice:'de-DE',
  keys:['ä','ö','ü','ß','Ä','Ö','Ü'],
  persons:['ich','du','er / sie / es','wir','ihr','sie / Sie'],
  unit:'Kapitel',units:'Kapitel',
  greet:['Guten Morgen','Guten Tag','Guten Abend'],
  genderEx:['Ich bin Student.','Ich bin Studentin.'],
  teacher:'Du bist ein geduldiger, motivierender Deutschlehrer für Lucas. Lucas spricht Portugiesisch (Brasilien) und lernt Deutsch mit einer App (Kurs ab A1). Erklärungen auf Portugiesisch (Brasilien), kurz und konkret, auf dem Niveau des jeweiligen Kapitels. Korrigiere nur echte Fehler, keine Stilfragen. Standard ist Hochdeutsch aus Deutschland. Triff keine Annahmen über Alter, Herkunft, Beruf oder Lebenssituation von Lucas – nutze nur, was Lucas selbst schreibt.',
  sampleSay:['Hallo, ich bin deine Deutschlehrerin.','Wie geht es dir? Ich heiße Anna.'],
  voiceHint:'No Mac/iPhone, vozes como „Anna“ ou com „(Premium)“/„(Melhorada)“ soam melhor. Mais vozes: Ajustes → Acessibilidade → Conteúdo Falado → Vozes → Alemão.',
  baseEx:'pt',
  i18nTarget:/[äöüß]|\b(der|die|das|und|ich|du|ist|nicht|ein|eine|mit|zu|in|auf)\b/i, /* Übersetzungs-Werkzeug: deutsche Texte erkennen */
  accentNote:'Quase! Atenção ao trema (ä, ö, ü) e ao ß – eles mudam a pronúncia e às vezes o sentido (schon ≠ schön).',
  articles:/^(der|die|das|ein|eine)\s+/i,
  artColor:{der:'m',die:'f',das:'n'}, /* Vokabeln: der blau, die rot, das grün, Plural (Pl.) lila */
  norm:s=>s.replace(/ß/g,'ss').replace(/ae/g,'ä').replace(/oe/g,'ö').replace(/ue/g,'ü'), /* Antwortprüfung: ss = ß, ae/oe/ue = ä/ö/ü (ohne deutsche Tastatur) */
  mark:/[äöüßÄÖÜ]|^(der|die|das|ein|eine)\s/i, /* erkennt beim Import von Wortlisten, welche Seite Deutsch ist */
  sampleWords:[['der Tisch',{pt:'a mesa',en:'the table',de:'der Tisch'}],['die Katze',{pt:'o gato',en:'the cat',de:'die Katze'}]],
  roleNote:'No curso você faz um papel: você acabou de se mudar para Frankfurt para trabalhar. Nas tarefas livres, escreva simplesmente sobre você.',
  persona:{name:'Lucas',surname:'Souza',country:'BR',city:'São Paulo'},
  /* Lob-Wendungen der Oberfläche (dort auf Spanisch) auf Deutsch */
  praise:{'¡Muy bien!':'Sehr gut!','¡Hola!':'Hallo!','¡Excelente!':'Ausgezeichnet!','¡Sigue así!':'Weiter so!','¡Correcto!':'Richtig!','¡Perfecto!':'Perfekt!','¡Eso es!':'Genau!','¡Hecho!':'Geschafft!','¡Bien hecho!':'Gut gemacht!','¡Genial!':'Super!','¡OJO!':'ACHTUNG!'},
  key:'mi-profe-de-v1',gist:'mi-profe-fortschritt-de.json',
  levels:[{id:'A1',label:'A1',title:'Iniciante',sub:'Primeiros passos'},{id:'A2',label:'A2',title:'Básico',sub:'Vida no dia a dia: moradia, trabalho, saúde, serviços, lazer'}],
  levelOf:{},emoji:{}
});
;
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
;
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
;
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
;
/* Deutsch: Präsens-Konjugation nach Regel + Listen der Unregelmäßigen (für den Verben-Trainer).
   LANGS.de.conjugate(infinitiv) → {forms:[ich,du,er/sie/es,wir,ihr,sie/Sie], why:'Muster-Hinweis'} oder null (= lieber nicht üben).
   Trennbare Verben (anrufen → ich rufe an) werden mit Präfix am Ende gebildet. Neue Verben in den Vokabellisten: Unregelmäßige hier eintragen! */
(function(){
var FIX={sein:['bin','bist','ist','sind','seid','sind'],haben:['habe','hast','hat','haben','habt','haben'],werden:['werde','wirst','wird','werden','werdet','werden'],
 wissen:['weiß','weißt','weiß','wissen','wisst','wissen'],tun:['tue','tust','tut','tun','tut','tun'],
 können:['kann','kannst','kann','können','könnt','können'],wollen:['will','willst','will','wollen','wollt','wollen'],müssen:['muss','musst','muss','müssen','müsst','müssen'],
 dürfen:['darf','darfst','darf','dürfen','dürft','dürfen'],sollen:['soll','sollst','soll','sollen','sollt','sollen'],mögen:['mag','magst','mag','mögen','mögt','mögen'],
 möchten:['möchte','möchtest','möchte','möchten','möchtet','möchten'],
 nehmen:['nehme','nimmst','nimmt','nehmen','nehmt','nehmen'],treten:['trete','trittst','tritt','treten','tretet','treten'],
 halten:['halte','hältst','hält','halten','haltet','halten'],laden:['lade','lädst','lädt','laden','ladet','laden'],raten:['rate','rätst','rät','raten','ratet','raten']};
/* Vokalwechsel bei du und er/sie/es */
var EI=['essen','geben','helfen','sprechen','treffen','vergessen','werfen','sterben','brechen','messen','gelten'];
var EIE=['sehen','lesen','empfehlen','stehlen','geschehen'];
var AAE=['fahren','schlafen','tragen','waschen','fallen','gefallen','lassen','fangen','backen','wachsen','schlagen'];
var AU=['laufen'];
var SEP=['zurück','fern','statt','weiter','mit','auf','aus','ein','an','ab','zu','vor','weg','los','her','hin','um','nach'];
var NOT=['übernachten','überweisen','unterschreiben','umarmen','verstehen','bekommen','besuchen','bezahlen','erklären','erlauben','empfehlen','entschuldigen','gehören','gefallen','beginnen','vergessen'];
function core(v){
  if(FIX[v])return{forms:FIX[v].slice(),why:'unregelmäßig – auswendig lernen'};
  var m=v.match(/^(.*?)(eln|ern|en|n)$/);if(!m)return null;var st=m[1],end=m[2];
  if(end==='eln')return{forms:[st+'le',st+'elst',st+'elt',st+'eln',st+'elt',st+'eln'],why:'Verben auf -eln: ich '+st+'le, wir '+st+'eln'};
  if(end==='ern')return{forms:[st+'ere',st+'erst',st+'ert',st+'ern',st+'ert',st+'ern'],why:'Verben auf -ern: wir/sie nur -n'};
  if(end==='n')return{forms:[st+'e',st+'st',st+'t',st+'n',st+'t',st+'n'],why:'regelmäßig: -e, -st, -t, -n, -t, -n'};
  var e=/(t|d|[^aeioulrhmnäöü][mn])$/.test(st)?'e':'';      /* arbeiten, finden, öffnen → arbeitest */
  var s2=/(s|ß|z|x)$/.test(st)?'t':'st';                   /* heißen, tanzen → du heißt, du tanzt */
  var f=[st+'e',st+e+(s2==='t'?'t':'st'),st+e+'t',st+'en',st+e+'t',st+'en'],why='regelmäßig: -e, -st, -t, -en, -t, -en'+(e?' (mit -e- nach t/d: du '+f[1]+')':'');
  var ch=function(a,b,lbl){var i=st.lastIndexOf(a);if(i<0)return;var s=st.slice(0,i)+b+st.slice(i+a.length);
    f[1]=s+(/(s|ß|z)$/.test(s)?'t':(/(t|d)$/.test(s)&&b!=='ä'?'':'st'));f[2]=s+(/(t|d)$/.test(s)?'':'t');why='Vokalwechsel '+lbl+' nur bei du und er/sie/es';};
  if(EI.indexOf(v)>=0)ch('e','i','e → i');else if(EIE.indexOf(v)>=0)ch('e','ie','e → ie');else if(AAE.indexOf(v)>=0)ch('a','ä','a → ä');else if(AU.indexOf(v)>=0)ch('au','äu','au → äu');
  if(v==='essen')f[1]='isst';if(v==='vergessen')f[1]='vergisst';if(v==='messen')f[1]='misst';if(v==='lassen')f[1]='lässt';
  return{forms:f,why:why};}
function conjugate(inf){var v=String(inf||'').trim();if(!/^[a-zäöüß]+$/.test(v)||/^sich /.test(v))return null;
  if(NOT.indexOf(v)<0&&!FIX[v])for(var i=0;i<SEP.length;i++){var p=SEP[i];if(v.indexOf(p)===0&&v.length>p.length+3){var rest=v.slice(p.length),r=core(rest);
    if(r&&/(en|ern|eln)$/.test(rest)){r.forms=r.forms.map(function(x){return x+' '+p;});r.why='trennbar: '+p+' steht am Ende (ich '+r.forms[0]+') · '+r.why;return r;}}}
  return core(v);}
/* Textbausteine der Hinweise – die Engine übersetzt sie einzeln (ui_tr.js) */
var WHY_PARTS=['unregelmäßig – auswendig lernen','regelmäßig: -e, -st, -t, -en, -t, -en','regelmäßig: -e, -st, -t, -n, -t, -n','(mit -e- nach t/d: du ','Vokalwechsel ',' nur bei du und er/sie/es','trennbar: ',' steht am Ende (ich ','Verben auf -eln: ich ','Verben auf -ern: wir/sie nur -n'];
defineLang('de',{conjugate:conjugate,whyParts:WHY_PARTS,infinitive:/^[a-zäöüß]+(en|ern|eln)$/,verbMeaning:/(ar|er|ir|or)\b/,
  verbHint:'Du siehst nur den Infinitiv – überleg selbst: regelmäßig? Vokalwechsel (e → i, a → ä)? Trennbar (anrufen → ich rufe an)? Bei Fehlern zeige ich das Muster.'});
})();
;
/* Deutschkurs A1 für Brasilianer:innen – eigene Inhalte nach dem GER (A1: Kann-Beschreibungen, Themen des Alltags).
   Felder: „es“ = deutscher Text (Lernsprache), „de“ = Portugiesisch (Ausgangssprache der Erklärungen). Erklärungen auf pt-BR, einfach.
   Kurs-Person: Lucas Souza aus São Paulo (Brasilien), neu in Frankfurt (Job in einer Softwarefirma, wohnt erst in einer WG).
   Herkunft der lernenden Person immer als „aus Brasilien / aus São Paulo / Brasilianer“ schreiben (wird ersetzt), Brasilien nie für andere Personen verwenden. */

/* ================= KAPITEL 1 · HALLO! ================= */
LANGS.de.course.units.push({id:'k1',n:'1',level:'A1',title:'Hallo!',sub:'Cumprimentar · apresentar-se · de onde você é · alfabeto e pronúncia',
goals:['Hallo! Guten Morgen! Guten Tag!','Ich heiße … / Ich bin …','Wie heißt du? / Wie heißen Sie?','du ou Sie?','Wie geht’s?','Tschüss! Auf Wiedersehen!','Woher kommst du? – Ich komme aus …','Wo wohnst du? – Ich wohne in …','Verbos: heißen, sein, kommen, wohnen, sprechen','Alfabeto e pronúncia: ä, ö, ü, ß, ei, ie, ch, sch, w, z'],
situacion:{title:'Primeiro dia no trabalho',npc:'Jana',scene:'Primeiro dia na firma em Frankfurt. Uma colega se apresenta na cozinha do escritório.',role:'Du bist Jana, 29, Softwareentwicklerin aus Hamburg, freundlich. Du duzt Lucas. Sprich sehr einfaches Deutsch (A1), kurze Sätze.',goal:'Cumprimente a Jana, diga seu nome e de onde você é, pergunte como ela está e se despeça.'},
placement:[
 {t:'mc',q:'São 9 horas da manhã. Como você cumprimenta?',opts:['Guten Morgen!','Gute Nacht!','Guten Abend!'],a:0},
 {t:'mc',q:'„Como você se chama?“ (informal)',opts:['Wie heißt du?','Wie heißen Sie?','Wie geht’s?'],a:0},
 {t:'gap',q:'Ich ___ aus Brasilien. (kommen)',a:['komme']},
 {t:'mc',q:'„Onde você mora?“',opts:['Wo wohnst du?','Woher kommst du?','Wie heißt du?'],a:0},
 {t:'gap',q:'Wie ___ es Ihnen? – Gut, danke.',a:['geht']},
 {t:'mc',q:'Qual forma está certa?',opts:['Er wohnt in Frankfurt.','Er wohnen in Frankfurt.','Er wohnst in Frankfurt.'],a:0}],
lessons:[
{id:'l1',title:'Cumprimentar e apresentar-se',desc:'Hallo! Guten Tag! Ich heiße …',steps:[
 {t:'info',title:'Cumprimentos durante o dia',html:`<p>Em alemão, o cumprimento muda conforme a hora do dia – parecido com o português:</p>
 <table><tr><th>Alemão</th><th>Quando?</th><th>Português</th></tr>
 <tr><td class="es-t">Guten Morgen!</td><td>até ~11h</td><td>Bom dia!</td></tr>
 <tr><td class="es-t">Guten Tag!</td><td>~11h – 18h</td><td>Bom dia! / Boa tarde!</td></tr>
 <tr><td class="es-t">Guten Abend!</td><td>a partir de ~18h</td><td>Boa noite! (ao chegar)</td></tr>
 <tr><td class="es-t">Gute Nacht!</td><td>antes de dormir</td><td>Boa noite! (ao se despedir)</td></tr>
 <tr><td class="es-t">Hallo!</td><td>sempre (informal)</td><td>Oi! / Olá!</td></tr></table>
 <div class="ojo"><span class="es-t">Gute Nacht</span> só se diz na hora de ir dormir. Para cumprimentar à noite: <span class="es-t">Guten Abend!</span></div>`},
 {t:'vocab',title:'Cumprimentar',items:[['Hallo!','Oi! / Olá!'],['Guten Morgen!','Bom dia! (de manhã)'],['Guten Tag!','Bom dia! / Boa tarde!'],['Guten Abend!','Boa noite! (ao chegar)'],['Gute Nacht!','Boa noite! (ao dormir)'],['ich heiße …','eu me chamo …'],['ich bin …','eu sou …'],['Wie heißt du?','Como você se chama? (informal)'],['Wie heißen Sie?','Como o senhor / a senhora se chama?'],['und du?','e você?'],['und Sie?','e o senhor / a senhora?'],['Freut mich!','Prazer!']]},
 {t:'info',title:'du ou Sie?',html:`<p>O alemão tem duas formas para “você”:</p>
 <table><tr><th></th><th>informal: <b>du</b></th><th>formal: <b>Sie</b></th></tr>
 <tr><td>perguntar o nome</td><td class="es-t">Wie heißt du?</td><td class="es-t">Wie heißen Sie?</td></tr>
 <tr><td>responder</td><td class="es-t">Ich heiße Lucas. Und du?</td><td class="es-t">Ich heiße Lucas Souza. Und Sie?</td></tr></table>
 <p><b>du</b>: amigos, família, crianças, colegas jovens (em muitas firmas todos se tratam por <b>du</b>).<br><b>Sie</b>: pessoas desconhecidas, mais velhas, lojas, repartições públicas, médicos.</p>
 <div class="ojo"><b>Sie</b> (formal) sempre se escreve com letra maiúscula – em qualquer posição da frase.</div>`},
 {t:'mc',q:'São 15 horas. Você chega numa loja. O que você diz?',opts:['Guten Tag!','Gute Nacht!','Guten Morgen!'],a:0,why:'Entre ~11h e 18h se diz <i>Guten Tag!</i>'},
 {t:'mc',q:'Um colega novo, da sua idade, pergunta seu nome. Como ele pergunta?',opts:['Wie heißt du?','Wie heißen Sie?','Wie geht es Ihnen?'],a:0,why:'Entre colegas jovens se usa <b>du</b>: <i>Wie heißt du?</i>'},
 {t:'gap',q:'Hallo, ich ___ Lucas. Und du?',a:['heiße|heisse'],hint:'heißen = chamar-se'},
 {t:'gap',q:'Guten Tag. Wie ___ Sie?',a:['heißen|heissen'],why:'Com <b>Sie</b> o verbo termina em <b>-en</b>: <i>heißen</i>.'},
 {t:'order',es:'Wie heißt du?',de:'Como você se chama?'},
 {t:'dialog',place:'Büro, Küche',title:'Na cozinha do escritório',scene:'Primeiro dia de trabalho em Frankfurt. Uma colega entra na cozinha e sorri para você.',lines:[
  {n:'Jana',es:'Hallo! Ich bin Jana. Und du? Wie heißt du?',de:'Oi! Eu sou a Jana. E você? Como você se chama?'},
  {you:true,opts:[{es:'Hallo, ich heiße Lucas.',ok:true},{es:'Gute Nacht, ich heiße Lucas.',ok:false,why:'<i>Gute Nacht</i> é só na hora de dormir.'},{es:'Wie heißen Sie?',ok:false,why:'A Jana perguntou o <b>seu</b> nome – responda primeiro.'}]},
  {n:'Jana',es:'Freut mich, Lucas!',de:'Prazer, Lucas!'},
  {you:true,opts:[{es:'Freut mich auch!',ok:true},{es:'Und Sie?',ok:false,why:'A Jana usa <b>du</b> – e ela já disse o nome dela.'}]}]},
 {t:'tr',de:'Oi, eu me chamo Lucas. E você?',a:['Hallo, ich heiße Lucas. Und du?','Hallo, ich bin Lucas. Und du?'],hint:'und du?'},
 {t:'tr',de:'Boa tarde, como o senhor se chama?',a:['Guten Tag, wie heißen Sie?','Guten Tag! Wie heißen Sie?'],why:'Formal: <i>Wie heißen Sie?</i> – à tarde: <i>Guten Tag</i>.'},
 {t:'speak',es:'Guten Tag! Ich heiße Lucas. Freut mich!',de:'Bom dia! Eu me chamo Lucas. Prazer!',tip:'O <b>ß</b> em <i>heiße</i> soa como “ss” – um s forte, sem zumbido.'}
]},
{id:'l2',title:'Como vai? e despedir-se',desc:'Wie geht’s? · Tschüss! · Auf Wiedersehen!',steps:[
 {t:'vocab',title:'Perguntar como a pessoa está',items:[['Wie geht’s?','Tudo bem? / Como vai?'],['Wie geht es dir?','Como você está? (informal)'],['Wie geht es Ihnen?','Como o senhor / a senhora está?'],['gut','bem'],['sehr gut','muito bem'],['es geht','mais ou menos'],['nicht so gut','não muito bem'],['schlecht','mal'],['danke','obrigado / obrigada'],['bitte','por favor / de nada']]},
 {t:'info',title:'Wie geht’s? – Gut, danke!',html:`<table><tr><th>Pergunta</th><th>Resposta</th></tr>
 <tr><td class="es-t">Wie geht’s?</td><td class="es-t">Gut, danke! Und dir?</td></tr>
 <tr><td class="es-t">Wie geht es dir? <span class="muted">(du)</span></td><td class="es-t">Sehr gut, danke. Und dir?</td></tr>
 <tr><td class="es-t">Wie geht es Ihnen? <span class="muted">(Sie)</span></td><td class="es-t">Gut, danke. Und Ihnen?</td></tr></table>
 <div class="ojo">Cuidado: na resposta se diz <span class="es-t">Und dir?</span> / <span class="es-t">Und Ihnen?</span> – e não “Und du?”. É porque <i>Wie geht es <b>dir</b>?</i> usa outra forma de “você”.</div>
 <div class="ex"><span class="es-t">Danke</span> = obrigado/obrigada (igual para homens e mulheres). <span class="es-t">Bitte</span> = por favor <i>e</i> de nada.</div>`},
 {t:'vocab',title:'Despedir-se',items:[['Tschüss!','Tchau!'],['Auf Wiedersehen!','Até logo! (formal)'],['Bis später!','Até mais tarde!'],['Bis morgen!','Até amanhã!'],['Bis bald!','Até breve!'],['Schönen Tag noch!','Tenha um bom dia!']]},
 {t:'match',q:'Ligue o alemão ao português.',pairs:[['Bis morgen!','Até amanhã!'],['Wie geht’s?','Tudo bem?'],['Tschüss!','Tchau!'],['Es geht.','Mais ou menos.'],['Guten Abend!','Boa noite! (ao chegar)']]},
 {t:'mc',q:'A Sra. Weber (sua vizinha, 70 anos) pergunta: „Wie geht es Ihnen?“ Você responde:',opts:['Gut, danke. Und Ihnen?','Gut, danke. Und dir?','Tschüss!'],a:0,why:'Ela usa <b>Sie</b> – então você responde <i>Und Ihnen?</i>'},
 {t:'gap',q:'– Wie geht’s? – ___, danke. Und ___?',a:['Gut|Sehr gut','dir'],why:'<i>gut</i> = bem; <i>Und dir?</i> = e você?'},
 {t:'mc',q:'São 18h. Você sai do trabalho e vê os colegas amanhã. O que você diz?',opts:['Bis morgen!','Guten Morgen!','Freut mich!'],a:0},
 {t:'dialog',place:'Bäckerei',title:'Na padaria',scene:'De manhã cedo você compra pão. A vendedora é mais velha – aqui se usa <b>Sie</b>.',lines:[
  {n:'Verkäuferin',es:'Guten Morgen! Wie geht es Ihnen?',de:'Bom dia! Como o senhor está?'},
  {you:true,opts:[{es:'Guten Morgen! Gut, danke. Und Ihnen?',ok:true},{es:'Guten Abend! Gut, danke.',ok:false,why:'É de manhã: <i>Guten Morgen!</i>'},{es:'Gut, danke. Und dir?',ok:false,why:'Ela usa <b>Sie</b> – responda com <i>Und Ihnen?</i>'}]},
  {n:'Verkäuferin',es:'Auch gut, danke! Was möchten Sie?',de:'Também bem, obrigada! O que o senhor deseja?'},
  {you:true,opts:[{es:'Zwei Brötchen, bitte.',ok:true},{es:'Tschüss!',ok:false,why:'Você ainda nem comprou o pão 😉'}]},
  {n:'Verkäuferin',es:'Bitte schön. Schönen Tag noch!',de:'Aqui está. Tenha um bom dia!'},
  {you:true,opts:[{es:'Danke, Ihnen auch! Auf Wiedersehen!',ok:true},{es:'Freut mich! Wie heißen Sie?',ok:false,why:'Ela está se despedindo – despeça-se também.'}]}]},
 {t:'tr',de:'Como a senhora está?',a:['Wie geht es Ihnen?'],why:'Formal: <i>Wie geht es Ihnen?</i>'},
 {t:'tr',de:'Bem, obrigado. E você?',a:['Gut, danke. Und dir?','Gut, danke, und dir?','Danke, gut. Und dir?'],hint:'„e você?“ aqui = Und dir?'},
 {t:'listen',es:'Bis später!',de:'Até mais tarde!'},
 {t:'listen',es:'Sehr gut, danke.',de:'Muito bem, obrigado.'}
]},
{id:'l3',title:'De onde você é?',desc:'Woher kommst du? · Wo wohnst du? · Ich spreche …',steps:[
 {t:'vocab',title:'Origem, moradia e línguas',items:[['Woher kommst du?','De onde você é?'],['Woher kommen Sie?','De onde o senhor / a senhora é?'],['Ich komme aus …','Eu sou de … / Eu venho de …'],['Wo wohnst du?','Onde você mora?'],['Ich wohne in …','Eu moro em …'],['Was sprichst du?','Que línguas você fala?'],['Ich spreche …','Eu falo …'],['Deutsch','alemão (língua)'],['Portugiesisch','português'],['Englisch','inglês'],['Spanisch','espanhol'],['ein bisschen','um pouco'],['jetzt','agora'],['auch','também']]},
 {t:'info',title:'Verbos no presente: ich, du, Sie',html:`<p>Em alemão, a terminação do verbo muda conforme a pessoa – como no português (eu moro, você mora):</p>
 <table><tr><th></th><th>wohnen <span class="muted">(morar)</span></th><th>kommen <span class="muted">(vir)</span></th><th>heißen <span class="muted">(chamar-se)</span></th></tr>
 <tr><td>ich</td><td class="es-t">wohn<b>e</b></td><td class="es-t">komm<b>e</b></td><td class="es-t">heiß<b>e</b></td></tr>
 <tr><td>du</td><td class="es-t">wohn<b>st</b></td><td class="es-t">komm<b>st</b></td><td class="es-t">heiß<b>t</b></td></tr>
 <tr><td>er / sie</td><td class="es-t">wohn<b>t</b></td><td class="es-t">komm<b>t</b></td><td class="es-t">heiß<b>t</b></td></tr>
 <tr><td>Sie</td><td class="es-t">wohn<b>en</b></td><td class="es-t">komm<b>en</b></td><td class="es-t">heiß<b>en</b></td></tr></table>
 <div class="ex"><span class="es-t">Ich komme aus Brasilien, aus São Paulo. Jetzt wohne ich in Frankfurt.</span></div>
 <div class="ojo">Em alemão o <b>pronome é obrigatório</b>: “moro em Frankfurt” = <span class="es-t">Ich wohne in Frankfurt.</span> – nunca só “Wohne in Frankfurt”.</div>`},
 {t:'info',title:'sein (ser/estar) e sprechen (falar)',html:`<table><tr><th></th><th>sein</th><th>sprechen</th></tr>
 <tr><td>ich</td><td class="es-t">bin</td><td class="es-t">spreche</td></tr>
 <tr><td>du</td><td class="es-t">bist</td><td class="es-t">spr<b>i</b>chst</td></tr>
 <tr><td>er / sie</td><td class="es-t">ist</td><td class="es-t">spr<b>i</b>cht</td></tr>
 <tr><td>Sie</td><td class="es-t">sind</td><td class="es-t">sprechen</td></tr></table>
 <p><b>sein</b> é irregular (como “ser” em português). Em <b>sprechen</b> o <b>e</b> vira <b>i</b> com <i>du</i> e <i>er/sie</i>.</p>
 <div class="ex"><span class="es-t">Ich bin Brasilianer. Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch.</span></div>`},
 {t:'mc',q:'Como se pergunta “De onde você é?” (informal)?',opts:['Woher kommst du?','Wo wohnst du?','Wie heißt du?'],a:0,why:'<i>woher</i> = de onde; <i>wo</i> = onde.'},
 {t:'gap',q:'Jana ___ in Frankfurt. (wohnen)',a:['wohnt'],why:'er/sie → <b>-t</b>: <i>sie wohnt</i>.'},
 {t:'gap',q:'Woher ___ du? (kommen)',a:['kommst'],why:'du → <b>-st</b>: <i>du kommst</i>.'},
 {t:'gap',q:'Ich ___ Brasilianer. (sein)',a:['bin']},
 {t:'gap',q:'___ du Englisch? (sprechen)',a:['Sprichst|sprichst'],why:'<i>sprechen</i>: e → i com <b>du</b>: <i>du sprichst</i>.'},
 {t:'mc',q:'Qual frase está correta?',opts:['Ich wohne in Frankfurt.','Wohne in Frankfurt.','Ich wohnst in Frankfurt.'],a:0,why:'O pronome <i>ich</i> é obrigatório, e com <i>ich</i> o verbo termina em <b>-e</b>.'},
 {t:'order',es:'Ich komme aus Brasilien',de:'Eu sou do Brasil.'},
 {t:'dialog',place:'WG-Küche',title:'Na república (WG)',scene:'Você mora numa <b>WG</b> (república de estudantes/jovens). Um colega de casa novo chega.',lines:[
  {n:'Tom',es:'Hi! Ich bin Tom. Du bist neu hier, oder? Woher kommst du?',de:'Oi! Eu sou o Tom. Você é novo aqui, né? De onde você é?'},
  {you:true,opts:[{es:'Ich komme aus Brasilien, aus São Paulo.',ok:true},{es:'Ich wohne in Frankfurt.',ok:false,why:'Ele perguntou <b>de onde</b> você é (woher), não onde você mora.'},{es:'Ich heiße Brasilien.',ok:false,why:'😄 <i>heißen</i> é para o nome.'}]},
  {n:'Tom',es:'Cool! Und was sprichst du?',de:'Legal! E que línguas você fala?'},
  {you:true,opts:[{es:'Portugiesisch, Englisch und ein bisschen Deutsch.',ok:true},{es:'Ich spreche Brasilianer.',ok:false,why:'<i>Brasilianer</i> é a pessoa. A língua é <i>Portugiesisch</i>.'}]},
  {n:'Tom',es:'Dein Deutsch ist schon gut!',de:'Seu alemão já está bom!'},
  {you:true,opts:[{es:'Danke! Und woher kommst du?',ok:true},{es:'Danke! Und woher kommen Sie?',ok:false,why:'Na WG todo mundo usa <b>du</b>.'}]},
  {n:'Tom',es:'Ich komme aus Köln. Aber ich wohne schon drei Jahre in Frankfurt.',de:'Eu sou de Colônia. Mas já moro há três anos em Frankfurt.'}]},
 {t:'read',title:'Leitura: Neu in Frankfurt',text:`Hallo! Ich heiße Lucas Souza. Ich komme aus Brasilien, aus São Paulo. Jetzt wohne ich in Frankfurt. Ich arbeite bei einer Softwarefirma. Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch. Meine Kollegin heißt Jana. Sie kommt aus Hamburg. Mein Mitbewohner heißt Tom. Er kommt aus Köln.`,de:`Oi! Eu me chamo Lucas Souza. Eu sou do Brasil, de São Paulo. Agora moro em Frankfurt. Trabalho numa empresa de software. Falo português, inglês e um pouco de alemão. Minha colega se chama Jana. Ela é de Hamburgo. Meu colega de casa se chama Tom. Ele é de Colônia.`},
 {t:'mc',q:'Woher kommt Jana?',opts:['aus Hamburg','aus Köln','aus Frankfurt'],a:0},
 {t:'mc',q:'Wo wohnt Tom?',opts:['in Frankfurt','in Köln','in Hamburg'],a:0},
 {t:'tr',de:'Eu moro em Frankfurt.',a:['Ich wohne in Frankfurt.']},
 {t:'tr',de:'Você fala alemão?',a:['Sprichst du Deutsch?']},
 {t:'tr',de:'De onde a senhora é?',a:['Woher kommen Sie?']},
 {t:'free',task:'Apresente-se em 3–5 frases: nome, de onde você é, onde mora, que línguas fala.',hint:'Ich heiße … Ich komme aus … Ich wohne in … Ich spreche …',focus:'heißen, kommen aus, wohnen in, sprechen, sein',model:'Hallo! Ich heiße Lucas. Ich komme aus Brasilien, aus São Paulo. Jetzt wohne ich in Frankfurt. Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch.'}
]},
{id:'l4',title:'Alfabeto e pronúncia',desc:'ä, ö, ü, ß, ei, ie, ch, sch, w, z – soletrar',steps:[
 {t:'info',title:'Letras que soam diferente',html:`<table><tr><th>Letra</th><th>Soa como</th><th>Exemplo</th></tr>
 <tr><td><b>w</b></td><td>“v” de vaca</td><td class="es-t">Wie? · wohnen</td></tr>
 <tr><td><b>v</b></td><td>“f” (quase sempre)</td><td class="es-t">Vater · viel</td></tr>
 <tr><td><b>z</b></td><td>“ts”</td><td class="es-t">Zug · zehn</td></tr>
 <tr><td><b>s</b> antes de vogal</td><td>“z” de zebra</td><td class="es-t">Sie · sehr</td></tr>
 <tr><td><b>ß</b> / <b>ss</b></td><td>“ss” forte</td><td class="es-t">heißen · Wasser</td></tr>
 <tr><td><b>sch</b></td><td>“ch” de chave</td><td class="es-t">Tschüss · schön</td></tr>
 <tr><td><b>j</b></td><td>“i” (como em “iogurte”)</td><td class="es-t">ja · Jana</td></tr>
 <tr><td><b>h</b> no início</td><td>aspirado, como “rr” suave carioca</td><td class="es-t">Hallo · heißen</td></tr>
 <tr><td><b>r</b></td><td>na garganta, suave</td><td class="es-t">Brasilien · Frankfurt</td></tr></table>`},
 {t:'info',title:'Ditongos e trema',html:`<table><tr><th>Escrita</th><th>Soa como</th><th>Exemplo</th></tr>
 <tr><td><b>ei</b></td><td>“ai”</td><td class="es-t">heißen · drei · nein</td></tr>
 <tr><td><b>ie</b></td><td>“i” longo</td><td class="es-t">Sie · wie · vier</td></tr>
 <tr><td><b>eu / äu</b></td><td>“ói”</td><td class="es-t">Freut mich · neu</td></tr>
 <tr><td><b>ä</b></td><td>“é” aberto</td><td class="es-t">Käse · spät</td></tr>
 <tr><td><b>ö</b></td><td>diga “ê” com os lábios de “ô”</td><td class="es-t">schön · hören</td></tr>
 <tr><td><b>ü</b></td><td>diga “i” com os lábios de “u”</td><td class="es-t">Tschüss · müde</td></tr>
 <tr><td><b>ch</b> depois de a, o, u</td><td>raspado na garganta</td><td class="es-t">acht · Buch</td></tr>
 <tr><td><b>ch</b> depois de e, i, ä, ö, ü</td><td>como um gato bravo: “rrr” soprado</td><td class="es-t">ich · sprechen</td></tr></table>
 <div class="ojo">Sem teclado alemão: <b>ä = ae</b>, <b>ö = oe</b>, <b>ü = ue</b>, <b>ß = ss</b>. Mas na app use os botões acima do campo de texto.</div>`},
 {t:'vocab',title:'Soletrar',items:[['das Alphabet','o alfabeto'],['Wie schreibt man das?','Como se escreve isso?'],['Können Sie das bitte buchstabieren?','O senhor pode soletrar, por favor?'],['Wie bitte?','Como? / Desculpe? (não entendi)'],['Noch einmal, bitte.','Mais uma vez, por favor.'],['langsam','devagar']]},
 {t:'info',title:'O alfabeto',html:`<p class="es-t">A (a) · B (be) · C (tse) · D (de) · E (e) · F (éf) · G (gue) · H (rá) · I (i) · J (iót) · K (ka) · L (él) · M (ém) · N (én) · O (o) · P (pe) · Q (ku) · R (ér) · S (és) · T (te) · U (u) · V (fau) · W (ve) · X (iks) · Y (ípsilon) · Z (tsét)</p>
 <p class="es-t">Ä (é) · Ö · Ü · ß (és-tsét)</p>
 <div class="ex">Soletrar o nome é muito comum na Alemanha (no telefone, em repartições): <span class="es-t">Souza – S, O, U, Z, A.</span></div>`},
 {t:'listen',es:'Wie schreibt man das?',de:'Como se escreve isso?'},
 {t:'listen',es:'Tschüss!',de:'Tchau!'},
 {t:'listen',es:'Ich heiße Jana.',de:'Eu me chamo Jana.'},
 {t:'mc',q:'Como soa o „w“ em „wohnen“?',opts:['como “v” em português','como “u” em português','como “w” em inglês'],a:0},
 {t:'mc',q:'Qual palavra tem o som “ai”?',opts:['drei','Sie','vier'],a:0,why:'<b>ei</b> = “ai”; <b>ie</b> = “i” longo.'},
 {t:'mc',q:'Sem teclado alemão, como se escreve „Tschüss“?',opts:['Tschuess','Tschuss','Tschüs-s'],a:0,why:'<b>ü = ue</b>'},
 {t:'speak',es:'Ich heiße Jana. Ich komme aus Hamburg.',de:'Eu me chamo Jana. Eu sou de Hamburgo.',tip:'<i>heiße</i> = “raisse”; <i>ich</i>: o <b>ch</b> é soprado, não “k”.'},
 {t:'speak',es:'Vier, fünf, sechs – sehr schön!',de:'Quatro, cinco, seis – muito bonito!',tip:'<b>v</b> = f · <b>ü</b> = “i” com lábios de “u” · <b>s</b> antes de vogal = z · <b>sch</b> = “ch”.'}
]}],
resumen:`<h3>Cumprimentar</h3><table><tr><td class="es-t">Hallo!</td><td>sempre (informal)</td></tr><tr><td class="es-t">Guten Morgen!</td><td>até ~11h</td></tr><tr><td class="es-t">Guten Tag!</td><td>~11h–18h</td></tr><tr><td class="es-t">Guten Abend!</td><td>a partir de ~18h</td></tr><tr><td class="es-t">Gute Nacht!</td><td>só antes de dormir</td></tr></table>
<h3>Apresentar-se</h3><table><tr><th>informal (du)</th><th>formal (Sie)</th></tr><tr><td class="es-t">Wie heißt du?</td><td class="es-t">Wie heißen Sie?</td></tr><tr><td class="es-t">Woher kommst du?</td><td class="es-t">Woher kommen Sie?</td></tr><tr><td class="es-t">Wie geht es dir? – Und dir?</td><td class="es-t">Wie geht es Ihnen? – Und Ihnen?</td></tr></table>
<h3>Verbos no presente</h3><table><tr><th></th><th>wohnen</th><th>sein</th><th>sprechen</th></tr><tr><td>ich</td><td class="es-t">wohne</td><td class="es-t">bin</td><td class="es-t">spreche</td></tr><tr><td>du</td><td class="es-t">wohnst</td><td class="es-t">bist</td><td class="es-t">sprichst</td></tr><tr><td>er / sie</td><td class="es-t">wohnt</td><td class="es-t">ist</td><td class="es-t">spricht</td></tr><tr><td>Sie</td><td class="es-t">wohnen</td><td class="es-t">sind</td><td class="es-t">sprechen</td></tr></table>
<h3>Despedir-se</h3><p class="es-t">Tschüss! · Auf Wiedersehen! · Bis später! · Bis morgen! · Bis bald!</p>
<h3>Pronúncia</h3><p>w = v · v = f · z = ts · s + vogal = z · sch = ch · ei = ai · ie = i · eu = ói · ä/ö/ü = ae/oe/ue · ß = ss</p>`});

/* ================= KAPITEL 2 · ZAHLEN & KONTAKTE ================= */
LANGS.de.course.units.push({id:'k2',n:'2',level:'A1',title:'Zahlen & Kontakte',sub:'Números · idade · telefone e endereço · formulário · perguntas',
goals:['Zahlen 0–100 und mehr','Wie alt bist du? – Ich bin … Jahre alt.','Telefonnummer, E-Mail, Adresse','Ein Formular ausfüllen (Vorname, Familienname, Geburtsdatum …)','W-Fragen: wer, was, wo, woher, wie, wann','Ja/Nein-Fragen: Verb an Position 1','Verb an Position 2','Präsens: ich, du, er/sie, wir, ihr, sie/Sie · haben'],
situacion:{title:'No Bürgeramt',npc:'Herr Becker',scene:'Você precisa registrar seu endereço novo no Bürgeramt (repartição pública) em Frankfurt.',role:'Du bist Herr Becker, Sachbearbeiter im Bürgeramt Frankfurt, höflich, etwas formell. Du siezt die Person. Frag nach: Familienname, Vorname, Geburtsdatum, Adresse (Straße, Hausnummer, Postleitzahl), Telefonnummer. Lass schwierige Namen buchstabieren. Sprich sehr einfaches Deutsch (A1), kurze Sätze.',goal:'Responda às perguntas do funcionário: nome, data de nascimento, endereço e telefone. Soletre seu sobrenome.'},
placement:[
 {t:'mc',q:'„21“ em alemão:',opts:['einundzwanzig','zwanzigeins','zweiundzwanzig'],a:0},
 {t:'mc',q:'„Quantos anos você tem?“',opts:['Wie alt bist du?','Wie viel bist du?','Wann bist du?'],a:0},
 {t:'gap',q:'___ wohnst du? – In Frankfurt.',a:['Wo']},
 {t:'mc',q:'Qual é a pergunta de sim/não correta?',opts:['Wohnst du in Frankfurt?','Du wohnst in Frankfurt?','Wohnst in Frankfurt du?'],a:0},
 {t:'gap',q:'Wir ___ in Berlin. (wohnen)',a:['wohnen']},
 {t:'gap',q:'Er ___ zwei Handys. (haben)',a:['hat']}],
lessons:[
{id:'l1',title:'Números de 0 a 20',desc:'null, eins, zwei … zwanzig · Telefonnummer',steps:[
 {t:'vocab',title:'Zahlen 0–12',items:[['null','zero'],['eins','um'],['zwei','dois'],['drei','três'],['vier','quatro'],['fünf','cinco'],['sechs','seis'],['sieben','sete'],['acht','oito'],['neun','nove'],['zehn','dez'],['elf','onze'],['zwölf','doze']]},
 {t:'info',title:'De 13 a 20',html:`<p>De 13 a 19 é <b>número + zehn</b>:</p>
 <table><tr><td class="es-t">dreizehn</td><td>13</td><td class="es-t">siebzehn</td><td>17 <span class="muted">(sem -en!)</span></td></tr>
 <tr><td class="es-t">vierzehn</td><td>14</td><td class="es-t">achtzehn</td><td>18</td></tr>
 <tr><td class="es-t">fünfzehn</td><td>15</td><td class="es-t">neunzehn</td><td>19</td></tr>
 <tr><td class="es-t">sechzehn</td><td>16 <span class="muted">(sem -s!)</span></td><td class="es-t">zwanzig</td><td>20</td></tr></table>
 <div class="ojo">Atenção às exceções: <span class="es-t">sechzehn</span> (não “sechszehn”) e <span class="es-t">siebzehn</span> (não “siebenzehn”).</div>
 <div class="ex">No telefone, os alemães costumam dizer <span class="es-t">zwo</span> em vez de <span class="es-t">zwei</span> – para não confundir com <span class="es-t">drei</span>.</div>`},
 {t:'vocab',title:'Telefone',items:[['die Telefonnummer','o número de telefone'],['die Handynummer','o número de celular'],['das Handy','o celular'],['die Nummer','o número'],['die Vorwahl','o código de área (DDD)'],['Wie ist deine Telefonnummer?','Qual é o seu telefone? (informal)'],['Wie ist Ihre Telefonnummer?','Qual é o seu telefone? (formal)'],['Meine Nummer ist …','Meu número é …']]},
 {t:'match',q:'Ligue os números.',pairs:[['sieben','7'],['zwölf','12'],['sechzehn','16'],['neun','9'],['dreizehn','13']]},
 {t:'mc',q:'Como se escreve 17?',opts:['siebzehn','siebenzehn','siebzen'],a:0},
 {t:'listen',es:'null eins sieben zwei',de:'0172'},
 {t:'listen',es:'achtzehn',de:'18'},
 {t:'gap',q:'Meine ___ ist 0171 234 56 78. (número de celular)',a:['Handynummer|Telefonnummer|Nummer']},
 {t:'tr',de:'Qual é o seu telefone? (informal)',a:['Wie ist deine Telefonnummer?','Wie ist deine Handynummer?','Wie ist deine Nummer?']},
 {t:'speak',es:'Meine Handynummer ist null eins sieben zwei, drei vier fünf, sechs sieben acht.',de:'Meu celular é 0172 345 678.',tip:'Diga os números de um em um ou em pares – ninguém espera números longos no telefone.'}
]},
{id:'l2',title:'Até 100 e mais · idade',desc:'einundzwanzig · Wie alt bist du?',steps:[
 {t:'info',title:'Os números “ao contrário”',html:`<p>De 21 a 99 o alemão diz primeiro a <b>unidade</b>, depois a <b>dezena</b> – com <b>und</b> no meio, tudo junto:</p>
 <table><tr><td>21</td><td class="es-t">einundzwanzig</td><td>“um-e-vinte”</td></tr>
 <tr><td>35</td><td class="es-t">fünfunddreißig</td><td>“cinco-e-trinta”</td></tr>
 <tr><td>48</td><td class="es-t">achtundvierzig</td><td>“oito-e-quarenta”</td></tr>
 <tr><td>99</td><td class="es-t">neunundneunzig</td><td>“nove-e-noventa”</td></tr></table>
 <table><tr><td class="es-t">zwanzig</td><td>20</td><td class="es-t">sechzig</td><td>60</td></tr><tr><td class="es-t">dreißig</td><td>30 <span class="muted">(com ß!)</span></td><td class="es-t">siebzig</td><td>70</td></tr><tr><td class="es-t">vierzig</td><td>40</td><td class="es-t">achtzig</td><td>80</td></tr><tr><td class="es-t">fünfzig</td><td>50</td><td class="es-t">neunzig</td><td>90</td></tr></table>
 <p><span class="es-t">hundert</span> = 100 · <span class="es-t">hunderteins</span> = 101 · <span class="es-t">zweihundert</span> = 200 · <span class="es-t">tausend</span> = 1000</p>
 <div class="ojo">Com 21, 31, 41 … é <span class="es-t">ein</span>und…, não “eins”: <span class="es-t">einundzwanzig</span>.</div>`},
 {t:'vocab',title:'Idade',items:[['Wie alt bist du?','Quantos anos você tem? (informal)'],['Wie alt sind Sie?','Quantos anos o senhor / a senhora tem?'],['Ich bin 28 Jahre alt.','Eu tenho 28 anos.'],['das Jahr, die Jahre','o ano, os anos'],['alt','velho / idoso; (idade)'],['jung','jovem'],['das Alter','a idade'],['der Geburtstag','o aniversário']]},
 {t:'info',title:'A idade com „sein“',html:`<p>Em português a gente <b>tem</b> anos. Em alemão a gente <b>é</b> anos “velho”:</p>
 <div class="ex"><span class="es-t">Ich bin 28 Jahre alt.</span> = Eu tenho 28 anos. <span class="muted">(literalmente: “eu sou 28 anos velho”)</span></div>
 <div class="ojo">Nunca “Ich habe 28 Jahre” – esse é o erro mais comum de quem fala português!</div>`},
 {t:'mc',q:'Como se diz 45?',opts:['fünfundvierzig','vierundfünfzig','vierzigfünf'],a:0,why:'Primeiro a unidade (fünf), depois <i>und</i>, depois a dezena (vierzig).'},
 {t:'mc',q:'„Eu tenho 30 anos.“',opts:['Ich bin dreißig Jahre alt.','Ich habe dreißig Jahre.','Ich habe dreißig Jahre alt.'],a:0,why:'Idade = <b>sein</b> + Jahre alt.'},
 {t:'match',q:'Ligue os números.',pairs:[['dreiundsechzig','63'],['sechsunddreißig','36'],['siebzig','70'],['einundachtzig','81'],['hundertzwanzig','120']]},
 {t:'gap',q:'Wie alt ___ Sie? – Ich ___ 52 Jahre alt.',a:['sind','bin']},
 {t:'listen',es:'siebenundvierzig',de:'47'},
 {t:'listen',es:'Ich bin zweiunddreißig Jahre alt.',de:'Eu tenho 32 anos.'},
 {t:'tr',de:'Quantos anos você tem? (informal)',a:['Wie alt bist du?']},
 {t:'tr',de:'Eu tenho 26 anos.',a:['Ich bin 26 Jahre alt.','Ich bin sechsundzwanzig Jahre alt.','Ich bin 26.','Ich bin sechsundzwanzig.']}
]},
{id:'l3',title:'Dados pessoais e formulário',desc:'Vorname, Familienname, Adresse … ein Formular ausfüllen',steps:[
 {t:'vocab',title:'Dados pessoais',items:[['der Name','o nome'],['der Vorname','o primeiro nome'],['der Familienname','o sobrenome'],['die Adresse','o endereço'],['die Straße','a rua'],['die Hausnummer','o número da casa'],['die Postleitzahl','o CEP'],['der Wohnort','a cidade onde mora'],['das Geburtsdatum','a data de nascimento'],['der Geburtsort','o local de nascimento'],['geboren','nascido'],['die E-Mail-Adresse','o e-mail'],['der Familienstand','o estado civil'],['ledig','solteiro / solteira'],['verheiratet','casado / casada'],['geschieden','divorciado / divorciada'],['das Formular','o formulário'],['ausfüllen','preencher'],['unterschreiben','assinar'],['die Unterschrift','a assinatura']]},
 {t:'info',title:'O endereço alemão',html:`<p>Na Alemanha, o número vem <b>depois</b> da rua, e o CEP (5 números) vem <b>antes</b> da cidade:</p>
 <div class="ex es-t">Lucas Souza<br>Bergerstraße 12<br>60316 Frankfurt am Main</div>
 <p><span class="es-t">Wo wohnen Sie? – In der Bergerstraße 12.</span></p>
 <div class="ojo"><span class="es-t">Straße</span> muitas vezes vira <b>str.</b> e se escreve junto com o nome: <span class="es-t">Bergerstraße</span>. Em formulários: <span class="es-t">Vorname</span> = primeiro nome, <span class="es-t">Familienname / Nachname</span> = sobrenome.</div>`},
 {t:'info',title:'Data de nascimento',html:`<p>Em formulários a data é escrita como no Brasil – <b>dia.mês.ano</b>, com pontos: <span class="es-t">14.03.1997</span>.</p>
 <p><span class="es-t">Wann sind Sie geboren? – Am 14. März 1997.</span> <span class="muted">(Os meses vêm no capítulo 6.)</span></p>
 <p><span class="es-t">Wo sind Sie geboren? – In São Paulo.</span></p>`},
 {t:'gap',q:'Formulário para a colega: Jana Wolf, Hamburger Allee 5, 60486 Frankfurt. Vorname: ___ · Familienname: ___ · Postleitzahl: ___',a:['Jana','Wolf','60486'],why:'<i>Vorname</i> = primeiro nome, <i>Familienname</i> = sobrenome, <i>Postleitzahl</i> = CEP.'},
 {t:'mc',q:'Lucas não é casado. No formulário, em „Familienstand“, ele escreve:',opts:['ledig','verheiratet','geboren'],a:0},
 {t:'mc',q:'„Unterschrift“ é …',opts:['a assinatura','o sobrenome','o endereço'],a:0},
 {t:'dialog',place:'Bürgeramt Frankfurt',title:'Registrar o endereço',scene:'Na Alemanha, quem se muda precisa se registrar no <b>Bürgeramt</b> em até duas semanas (<i>Anmeldung</i>). Aqui se usa <b>Sie</b>.',lines:[
  {n:'Herr Becker',es:'Guten Tag. Wie ist Ihr Familienname, bitte?',de:'Bom dia. Qual é o seu sobrenome, por favor?'},
  {you:true,opts:[{es:'Souza.',ok:true},{es:'Lucas.',ok:false,why:'<i>Familienname</i> é o <b>sobrenome</b>.'}]},
  {n:'Herr Becker',es:'Wie schreibt man das?',de:'Como se escreve isso?'},
  {you:true,opts:[{es:'S – O – U – Z – A.',ok:true},{es:'Ich wohne in Frankfurt.',ok:false,why:'Ele quer que você <b>soletre</b> o nome.'}]},
  {n:'Herr Becker',es:'Danke. Und Ihr Vorname?',de:'Obrigado. E o seu primeiro nome?'},
  {you:true,opts:[{es:'Lucas.',ok:true},{es:'Ledig.',ok:false,why:'<i>ledig</i> = solteiro. <i>Vorname</i> = primeiro nome.'}]},
  {n:'Herr Becker',es:'Und wo wohnen Sie jetzt?',de:'E onde o senhor mora agora?'},
  {you:true,opts:[{es:'In der Bergerstraße 12, in Frankfurt.',ok:true},{es:'Ich komme aus Brasilien.',ok:false,why:'Ele perguntou onde você <b>mora</b> (wo wohnen), não de onde você é.'}]},
  {n:'Herr Becker',es:'Gut. Bitte unterschreiben Sie hier.',de:'Bem. Por favor, assine aqui.'}]},
 {t:'tr',de:'Qual é o seu endereço? (formal)',a:['Wie ist Ihre Adresse?']},
 {t:'tr',de:'Eu moro na Bergerstraße 12.',a:['Ich wohne in der Bergerstraße 12.']},
 {t:'free',task:'Preencha um formulário com os seus dados, em frases: Vorname, Familienname, Alter, Wohnort, Telefonnummer, Familienstand.',hint:'Mein Vorname ist … Mein Familienname ist … Ich bin … Jahre alt. Ich wohne in … Meine Telefonnummer ist … Ich bin ledig / verheiratet.',focus:'persönliche Daten, sein, wohnen, Zahlen',model:'Mein Vorname ist Lucas, mein Familienname ist Souza. Ich bin 28 Jahre alt. Ich wohne in Frankfurt, in der Bergerstraße 12. Meine Telefonnummer ist 0172 345 678. Ich bin ledig.'}
]},
{id:'l4',title:'Fazer perguntas',desc:'wer, was, wo, wie, wann · Verb an Position 1 und 2',steps:[
 {t:'vocab',title:'Palavras interrogativas',items:[['wer?','quem?'],['was?','o quê?'],['wo?','onde?'],['woher?','de onde?'],['wohin?','para onde?'],['wie?','como?'],['wie alt?','quantos anos?'],['wann?','quando?'],['warum?','por quê?'],['wie viel?','quanto?']]},
 {t:'info',title:'O verbo na posição 2',html:`<p>Regra de ouro do alemão: na frase afirmativa e na pergunta com W, o <b>verbo está sempre na posição 2</b>.</p>
 <table><tr><th>1</th><th>2 (verbo)</th><th>resto</th></tr>
 <tr><td class="es-t">Ich</td><td class="es-t"><b>wohne</b></td><td class="es-t">jetzt in Frankfurt.</td></tr>
 <tr><td class="es-t">Jetzt</td><td class="es-t"><b>wohne</b></td><td class="es-t">ich in Frankfurt.</td></tr>
 <tr><td class="es-t">Wo</td><td class="es-t"><b>wohnst</b></td><td class="es-t">du?</td></tr></table>
 <p>Na pergunta de <b>sim/não</b>, o verbo vai para a <b>posição 1</b>:</p>
 <div class="ex"><span class="es-t"><b>Wohnst</b> du in Frankfurt?</span> – <span class="es-t">Ja.</span> / <span class="es-t">Nein, in Köln.</span></div>
 <div class="ojo">Em português basta mudar a entonação (“Você mora em Frankfurt?”). Em alemão é preciso <b>mudar a ordem</b>: nunca “Du wohnst in Frankfurt?”.</div>`},
 {t:'info',title:'Presente completo e „haben“',html:`<table><tr><th></th><th>wohnen</th><th>arbeiten</th><th>haben <span class="muted">(ter)</span></th></tr>
 <tr><td>ich</td><td class="es-t">wohne</td><td class="es-t">arbeite</td><td class="es-t">habe</td></tr>
 <tr><td>du</td><td class="es-t">wohnst</td><td class="es-t">arbeit<b>e</b>st</td><td class="es-t">ha<b>st</b></td></tr>
 <tr><td>er / sie / es</td><td class="es-t">wohnt</td><td class="es-t">arbeit<b>e</b>t</td><td class="es-t">ha<b>t</b></td></tr>
 <tr><td>wir</td><td class="es-t">wohnen</td><td class="es-t">arbeiten</td><td class="es-t">haben</td></tr>
 <tr><td>ihr</td><td class="es-t">wohnt</td><td class="es-t">arbeit<b>e</b>t</td><td class="es-t">habt</td></tr>
 <tr><td>sie / Sie</td><td class="es-t">wohnen</td><td class="es-t">arbeiten</td><td class="es-t">haben</td></tr></table>
 <p><b>ihr</b> = vocês (informal). <b>sie</b> (minúsculo) = eles/elas; <b>Sie</b> (maiúsculo) = o senhor / a senhora / os senhores.</p>
 <div class="ex">Radical terminado em <b>-t</b> ou <b>-d</b> ganha um <b>e</b>: <span class="es-t">du arbeitest, er arbeitet</span>.</div>`},
 {t:'mc',q:'Qual frase está correta?',opts:['Heute arbeite ich nicht.','Heute ich arbeite nicht.','Heute ich nicht arbeite.'],a:0,why:'O verbo fica na <b>posição 2</b>, mesmo quando a frase começa com <i>heute</i>.'},
 {t:'mc',q:'Pergunta de sim/não: „Você tem celular?“',opts:['Hast du ein Handy?','Du hast ein Handy?','Ein Handy hast du?'],a:0},
 {t:'order',es:'Wo arbeitet Jana',de:'Onde a Jana trabalha?'},
 {t:'order',es:'Jetzt wohnen wir in Frankfurt',de:'Agora nós moramos em Frankfurt.'},
 {t:'gap',q:'___ kommt Tom? – Aus Köln.',a:['Woher']},
 {t:'gap',q:'Wir ___ in Frankfurt. Und wo ___ ihr? (wohnen)',a:['wohnen','wohnt']},
 {t:'gap',q:'Jana ___ ein Auto. (haben)',a:['hat']},
 {t:'read',hideText:true,title:'Recado na secretária eletrônica',intro:'Ouça o recado. Depois responda às perguntas.',text:`Hallo Lucas, hier ist Jana. Wir haben morgen ein Meeting um zehn Uhr. Kannst du mich bitte zurückrufen? Meine Handynummer ist null eins sieben sechs, zwei acht drei, neun vier eins. Danke und tschüss!`,de:`Oi, Lucas, aqui é a Jana. Amanhã temos uma reunião às dez horas. Você pode me ligar de volta, por favor? Meu celular é 0176 283 941. Obrigada e tchau!`},
 {t:'mc',q:'Wer ruft an?',opts:['Jana','Tom','Herr Becker'],a:0},
 {t:'mc',q:'Wie ist Janas Handynummer?',opts:['0176 283 941','0167 283 914','0176 382 941'],a:0},
 {t:'mc',q:'Das Meeting ist um …',opts:['10 Uhr','12 Uhr','2 Uhr'],a:0},
 {t:'tr',de:'Vocês moram em Frankfurt? (informal)',a:['Wohnt ihr in Frankfurt?']},
 {t:'tr',de:'De onde o senhor é?',a:['Woher kommen Sie?']}
]}],
resumen:`<h3>Números</h3><p class="es-t">null · eins · zwei · drei · vier · fünf · sechs · sieben · acht · neun · zehn · elf · zwölf · dreizehn … sechzehn · siebzehn … zwanzig</p><p>21 = <span class="es-t">einundzwanzig</span> (unidade + und + dezena) · 30 = <span class="es-t">dreißig</span> · 100 = <span class="es-t">hundert</span> · 1000 = <span class="es-t">tausend</span></p>
<h3>Idade</h3><table><tr><td class="es-t">Wie alt bist du? / Wie alt sind Sie?</td><td class="es-t">Ich bin 28 Jahre alt.</td></tr></table><p>Nunca “Ich habe 28 Jahre”.</p>
<h3>Dados pessoais</h3><p><span class="es-t">Vorname · Familienname · Straße + Hausnummer · Postleitzahl + Wohnort · Geburtsdatum · Familienstand (ledig / verheiratet / geschieden) · Unterschrift</span></p>
<h3>Perguntas</h3><table><tr><td>W-Frage: verbo na posição 2</td><td class="es-t">Wo wohnst du?</td></tr><tr><td>sim/não: verbo na posição 1</td><td class="es-t">Wohnst du in Frankfurt?</td></tr><tr><td>afirmação: verbo na posição 2</td><td class="es-t">Jetzt wohne ich in Frankfurt.</td></tr></table>
<h3>Presente</h3><table><tr><th></th><th>wohnen</th><th>haben</th></tr><tr><td>ich</td><td class="es-t">wohne</td><td class="es-t">habe</td></tr><tr><td>du</td><td class="es-t">wohnst</td><td class="es-t">hast</td></tr><tr><td>er/sie/es</td><td class="es-t">wohnt</td><td class="es-t">hat</td></tr><tr><td>wir</td><td class="es-t">wohnen</td><td class="es-t">haben</td></tr><tr><td>ihr</td><td class="es-t">wohnt</td><td class="es-t">habt</td></tr><tr><td>sie / Sie</td><td class="es-t">wohnen</td><td class="es-t">haben</td></tr></table>`});

/* ================= KAPITEL 3 · FAMILIE & FREUNDE ================= */
LANGS.de.course.units.push({id:'k3',n:'3',level:'A1',title:'Familie & Freunde',sub:'Família · der/die/das · ein/kein · plural · meu, seu … · haben',
goals:['Familie: Vater, Mutter, Eltern, Geschwister …','der / die / das – jedes Nomen mit Artikel lernen','ein / eine · kein / keine','Plural: Kinder, Brüder, Schwestern …','mein / dein / sein / ihr / Ihr','Hast du Geschwister? – Ich habe einen Bruder.','Fotos zeigen: Das ist meine Mutter.','Eine kurze E-Mail schreiben'],
situacion:{title:'Fotos da família',npc:'Tom',scene:'À noite, na cozinha da WG. O Tom vê fotos no seu celular e faz perguntas sobre a sua família.',role:'Du bist Tom, 31, Mitbewohner in der WG in Frankfurt, neugierig und locker. Du duzt Lucas. Frag nach der Familie auf den Fotos: Wer ist das? Wie alt? Wo wohnt sie/er? Hast du Geschwister? Erzähl auch kurz von deiner Familie (eine Schwester in Köln, Eltern in Bonn). Sprich sehr einfaches Deutsch (A1).',goal:'Mostre suas “fotos”: diga quem é cada pessoa, quantos anos tem e onde mora. Pergunte também sobre a família do Tom.'},
placement:[
 {t:'mc',q:'„a mãe“:',opts:['die Mutter','der Mutter','das Mutter'],a:0},
 {t:'mc',q:'„Eu não tenho irmãos.“',opts:['Ich habe keine Geschwister.','Ich habe nicht Geschwister.','Ich habe kein Geschwister.'],a:0},
 {t:'gap',q:'Das ist ___ Bruder. (meu)',a:['mein']},
 {t:'gap',q:'Das ist ___ Schwester. (meu)',a:['meine']},
 {t:'mc',q:'Plural de „das Kind“:',opts:['die Kinder','die Kinds','die Kinden'],a:0},
 {t:'mc',q:'Anna hat ein Kind. Das ist … Sohn.',opts:['ihr','sein','dein'],a:0}],
lessons:[
{id:'l1',title:'A família',desc:'Vater, Mutter, Bruder, Schwester …',steps:[
 {t:'vocab',title:'Família',items:[['die Familie','a família'],['der Vater','o pai'],['die Mutter','a mãe'],['die Eltern (Pl.)','os pais'],['der Bruder','o irmão'],['die Schwester','a irmã'],['die Geschwister (Pl.)','os irmãos (irmãos e irmãs)'],['der Sohn','o filho'],['die Tochter','a filha'],['das Kind','a criança / o filho'],['die Oma','a avó'],['der Opa','o avô'],['die Großeltern (Pl.)','os avós'],['der Mann','o homem / o marido'],['die Frau','a mulher / a esposa'],['der Freund','o amigo / o namorado'],['die Freundin','a amiga / a namorada'],['der Partner / die Partnerin','o parceiro / a parceira']]},
 {t:'info',title:'Cores dos artigos',html:`<p>Nas listas de vocabulário, os artigos têm cores – assim fica mais fácil lembrar:</p>
 <table><tr><td><span class="art a-m">der</span></td><td>masculino</td><td class="es-t">der Vater, der Bruder</td></tr>
 <tr><td><span class="art a-f">die</span></td><td>feminino</td><td class="es-t">die Mutter, die Schwester</td></tr>
 <tr><td><span class="art a-n">das</span></td><td>neutro (não existe em português!)</td><td class="es-t">das Kind</td></tr>
 <tr><td><span class="art a-p">die</span> (Pl.)</td><td>plural – sempre <b>die</b></td><td class="es-t">die Eltern, die Kinder</td></tr></table>
 <div class="ojo">O gênero em alemão muitas vezes é <b>diferente</b> do português: <span class="es-t">das Mädchen</span> (a menina) é neutro, <span class="es-t">die Sonne</span> (o sol) é feminino. Por isso: aprenda <b>sempre</b> a palavra com o artigo.</div>`},
 {t:'mc',q:'„der Freund“ pode significar …',opts:['o amigo ou o namorado','só o amigo','o pai'],a:0,why:'<i>mein Freund</i> muitas vezes = meu namorado. Para “um amigo” se diz também <i>ein Freund von mir</i>.'},
 {t:'match',q:'Ligue.',pairs:[['die Eltern','os pais'],['die Geschwister','os irmãos'],['die Tochter','a filha'],['der Opa','o avô'],['die Großeltern','os avós']]},
 {t:'mc',q:'A mãe do seu pai é a sua …',opts:['Oma','Tochter','Schwester'],a:0},
 {t:'gap',q:'Mein Vater und meine Mutter sind meine ___.',a:['Eltern']},
 {t:'listen',es:'Das ist meine Familie.',de:'Esta é a minha família.'},
 {t:'listen',es:'Meine Schwester heißt Carla.',de:'Minha irmã se chama Carla.'},
 {t:'vocab',title:'Mais palavras: pessoas',items:[['der Ehemann', 'o marido'], ['die Ehefrau', 'a esposa'], ['heiraten', 'casar'], ['die Hochzeit', 'o casamento'], ['der Verwandte / die Verwandte', 'o parente'], ['das Baby', 'o bebê'], ['der Mensch', 'o ser humano / a pessoa'], ['der Erwachsene / die Erwachsene', 'o adulto'], ['der Jugendliche / die Jugendliche', 'o / a jovem'], ['männlich', 'masculino'], ['weiblich', 'feminino'], ['das Geburtsjahr', 'o ano de nascimento'], ['gestorben', 'falecido'], ['allein', 'sozinho'], ['glücklich', 'feliz'], ['lustig', 'engraçado / divertido'], ['böse', 'bravo / mau'], ['zufrieden', 'satisfeito']]},
 {t:'match',q:'Ligue as palavras novas.',pairs:[['heiraten', 'casar'], ['das Baby', 'o bebê'], ['allein', 'sozinho'], ['glücklich', 'feliz'], ['der Mensch', 'a pessoa']]}
]},
{id:'l2',title:'der/die/das · ein/kein · plural',desc:'Artikel, unbestimmter Artikel, Negation, Plural',steps:[
 {t:'info',title:'Artigo definido e indefinido',html:`<table><tr><th></th><th>definido</th><th>indefinido</th><th>negação</th></tr>
 <tr><td>masculino</td><td class="es-t"><span class="art a-m">der</span> Bruder</td><td class="es-t">ein Bruder</td><td class="es-t">kein Bruder</td></tr>
 <tr><td>feminino</td><td class="es-t"><span class="art a-f">die</span> Schwester</td><td class="es-t">eine Schwester</td><td class="es-t">keine Schwester</td></tr>
 <tr><td>neutro</td><td class="es-t"><span class="art a-n">das</span> Kind</td><td class="es-t">ein Kind</td><td class="es-t">kein Kind</td></tr>
 <tr><td>plural</td><td class="es-t"><span class="art a-p">die</span> Kinder</td><td class="es-t">– Kinder</td><td class="es-t">keine Kinder</td></tr></table>
 <p><b>kein / keine</b> = “nenhum / não … um”. Com substantivos se usa <b>kein</b>, não <i>nicht</i>:</p>
 <div class="ex"><span class="es-t">Ich habe keine Kinder.</span> = Eu não tenho filhos. · <span class="es-t">Das ist kein Problem.</span> = Isso não é problema.</div>`},
 {t:'info',title:'O plural',html:`<p>Em alemão há várias formas de plural – é preciso aprender com a palavra. As mais comuns:</p>
 <table><tr><th>forma</th><th>exemplo</th></tr>
 <tr><td>-er (às vezes com trema)</td><td class="es-t">das Kind → die Kinder · der Mann → die Männer</td></tr>
 <tr><td>-n / -en</td><td class="es-t">die Schwester → die Schwestern · die Frau → die Frauen</td></tr>
 <tr><td>-e (às vezes com trema)</td><td class="es-t">der Freund → die Freunde · der Sohn → die Söhne</td></tr>
 <tr><td>trema ou nada</td><td class="es-t">der Bruder → die Brüder · der Vater → die Väter</td></tr>
 <tr><td>-s (palavras estrangeiras)</td><td class="es-t">das Handy → die Handys · das Auto → die Autos</td></tr></table>
 <div class="ex">Dica: palavras femininas terminadas em <b>-e</b> fazem <b>-n</b> (<span class="es-t">die Tante → die Tanten</span>), terminadas em <b>-in</b> fazem <b>-nen</b> (<span class="es-t">die Freundin → die Freundinnen</span>).</div>`},
 {t:'vocab',title:'Plural',items:[['die Kinder (Pl.)','as crianças / os filhos'],['die Brüder (Pl.)','os irmãos (homens)'],['die Schwestern (Pl.)','as irmãs'],['die Söhne (Pl.)','os filhos (homens)'],['die Töchter (Pl.)','as filhas'],['die Freunde (Pl.)','os amigos'],['die Leute (Pl.)','as pessoas']]},
 {t:'mc',q:'„Eu não tenho carro.“ (das Auto)',opts:['Ich habe kein Auto.','Ich habe nicht Auto.','Ich habe keine Auto.'],a:0,why:'<i>das Auto</i> é neutro → <b>kein</b> Auto.'},
 {t:'gap',q:'Lucas hat ___ Schwester. (uma)',a:['eine']},
 {t:'gap',q:'Tom hat ___ Kinder. (nenhum)',a:['keine']},
 {t:'mc',q:'Plural de „der Bruder“:',opts:['die Brüder','die Bruders','die Brudern'],a:0},
 {t:'mc',q:'Qual artigo? ___ Kind',opts:['das','der','die'],a:0},
 {t:'mc',q:'Qual artigo? ___ Tochter',opts:['die','der','das'],a:0},
 {t:'tr',de:'Isso não é problema.',a:['Das ist kein Problem.']},
 {t:'tr',de:'Ela tem dois filhos.',a:['Sie hat zwei Kinder.','Sie hat zwei Söhne.']}
]},
{id:'l3',title:'meu, seu … · haben',desc:'mein, dein, sein, ihr, Ihr · Hast du Geschwister?',steps:[
 {t:'info',title:'Possessivos',html:`<table><tr><th></th><th>der / das</th><th>die / plural</th></tr>
 <tr><td>ich → meu</td><td class="es-t">mein Bruder / mein Kind</td><td class="es-t">meine Schwester / meine Eltern</td></tr>
 <tr><td>du → seu (informal)</td><td class="es-t">dein Vater</td><td class="es-t">deine Mutter</td></tr>
 <tr><td>er → dele</td><td class="es-t">sein Sohn</td><td class="es-t">seine Tochter</td></tr>
 <tr><td>sie → dela</td><td class="es-t">ihr Sohn</td><td class="es-t">ihre Tochter</td></tr>
 <tr><td>wir → nosso</td><td class="es-t">unser Opa</td><td class="es-t">unsere Oma</td></tr>
 <tr><td>Sie → seu (formal)</td><td class="es-t">Ihr Mann</td><td class="es-t">Ihre Frau</td></tr></table>
 <p>Como <b>ein/eine</b>: com feminino e plural se acrescenta <b>-e</b>.</p>
 <div class="ojo">Em português “seu filho” pode ser dele ou dela. Em alemão não: <span class="es-t">sein Sohn</span> = o filho <b>dele</b>, <span class="es-t">ihr Sohn</span> = o filho <b>dela</b>.</div>`},
 {t:'info',title:'Hast du Geschwister?',html:`<p>Com <b>haben</b> o artigo masculino muda: <b>ein → einen</b>, <b>kein → keinen</b>. (O porquê vem no capítulo 4 – por enquanto, aprenda as frases prontas.)</p>
 <table><tr><td class="es-t">Ich habe <b>einen</b> Bruder.</td><td>masculino</td></tr>
 <tr><td class="es-t">Ich habe eine Schwester.</td><td>feminino</td></tr>
 <tr><td class="es-t">Ich habe ein Kind.</td><td>neutro</td></tr>
 <tr><td class="es-t">Ich habe keine Geschwister.</td><td>plural</td></tr></table>`},
 {t:'mc',q:'Das ist Tom. Das ist … Schwester.',opts:['seine','ihre','sein'],a:0,why:'A irmã <b>dele</b> (Tom) → <i>seine</i> (feminino → -e).'},
 {t:'mc',q:'Das ist Jana. Das ist … Vater.',opts:['ihr','sein','ihre'],a:0,why:'O pai <b>dela</b> → <i>ihr</i>; <i>der Vater</i> é masculino → sem -e.'},
 {t:'gap',q:'Wie heißt ___ Mutter? (sua, informal)',a:['deine']},
 {t:'gap',q:'Frau Weber, ist das ___ Sohn? (seu, formal)',a:['Ihr']},
 {t:'gap',q:'Ich habe ___ Bruder und zwei Schwestern. (um)',a:['einen']},
 {t:'order',es:'Hast du Geschwister',de:'Você tem irmãos?'},
 {t:'dialog',place:'WG-Küche',title:'Fotos no celular',scene:'O Tom vê uma foto no seu celular.',lines:[
  {n:'Tom',es:'Oh, ein Foto! Wer ist das?',de:'Ah, uma foto! Quem é?'},
  {you:true,opts:[{es:'Das ist meine Mutter.',ok:true},{es:'Das ist mein Mutter.',ok:false,why:'<i>die Mutter</i> é feminino → <b>meine</b> Mutter.'},{es:'Das ist meine Mutters.',ok:false,why:'O plural não existe aqui – é só uma mãe 😉'}]},
  {n:'Tom',es:'Sie ist sehr jung! Wie alt ist sie?',de:'Ela é muito jovem! Quantos anos ela tem?'},
  {you:true,opts:[{es:'Sie ist 54 Jahre alt.',ok:true},{es:'Sie hat 54 Jahre.',ok:false,why:'Idade com <b>sein</b>: <i>Sie ist 54 Jahre alt.</i>'}]},
  {n:'Tom',es:'Und hast du Geschwister?',de:'E você tem irmãos?'},
  {you:true,opts:[{es:'Ja, ich habe einen Bruder.',ok:true},{es:'Ja, ich habe ein Bruder.',ok:false,why:'Com <i>haben</i>: <b>einen</b> Bruder (masculino).'},{es:'Nein, ich habe nicht Geschwister.',ok:false,why:'Com substantivo: <b>keine</b> Geschwister.'}]},
  {n:'Tom',es:'Cool. Ich habe eine Schwester. Sie wohnt in Köln.',de:'Legal. Eu tenho uma irmã. Ela mora em Colônia.'}]},
 {t:'tr',de:'Este é o meu irmão.',a:['Das ist mein Bruder.']},
 {t:'tr',de:'Você tem filhos? (informal)',a:['Hast du Kinder?']},
 {t:'speak',es:'Das ist meine Familie: mein Vater, meine Mutter und mein Bruder.',de:'Esta é a minha família: meu pai, minha mãe e meu irmão.',tip:'<i>Vater</i>: o <b>v</b> soa como “f” – “fáter”.'}
]},
{id:'l4',title:'Ler e escrever: uma e-mail',desc:'Lesen · Hören · eine kurze E-Mail schreiben',steps:[
 {t:'read',title:'Leitura: Eine E-Mail an Tom',intro:'O Lucas escreve para o Tom sobre a visita da família.',text:`Hallo Tom,
im Mai {kommen|vêm} meine Eltern nach Frankfurt! Mein Vater heißt Paulo, er ist 58 Jahre alt. Meine Mutter heißt Rita, sie ist 54. Sie wohnen in São Paulo. Mein Bruder Rafael kommt {leider|infelizmente} nicht. Er hat zwei Kinder und {keine Zeit|não tem tempo}.
Hast du am Samstag Zeit? Wir {grillen|fazemos churrasco} im Garten!
Viele Grüße
Lucas`,de:`Oi, Tom,
em maio meus pais vêm para Frankfurt! Meu pai se chama Paulo, ele tem 58 anos. Minha mãe se chama Rita, ela tem 54. Eles moram em São Paulo. Meu irmão Rafael infelizmente não vem. Ele tem dois filhos e não tem tempo.
Você tem tempo no sábado? Vamos fazer churrasco no jardim!
Abraços,
Lucas`},
 {t:'mc',q:'Richtig oder falsch? Die Eltern von Lucas wohnen in Frankfurt.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Richtig oder falsch? Rafael hat Kinder.',opts:['richtig','falsch'],a:0},
 {t:'mc',q:'Wie alt ist der Vater?',opts:['58','54','28'],a:0},
 {t:'read',hideText:true,title:'Conversa no trabalho',intro:'Ouça a conversa entre a Jana e um colega.',text:`Jana, hast du Kinder? – Ja, ich habe eine Tochter. Sie heißt Mia und ist vier Jahre alt. – Oh, schön! Und hast du auch Geschwister? – Nein, ich habe keine Geschwister. Aber ich habe viele Freunde.`,de:`Jana, você tem filhos? – Sim, tenho uma filha. Ela se chama Mia e tem quatro anos. – Ah, que legal! E você também tem irmãos? – Não, não tenho irmãos. Mas tenho muitos amigos.`},
 {t:'mc',q:'Wie alt ist Mia?',opts:['vier','vierzehn','zwei'],a:0},
 {t:'mc',q:'Richtig oder falsch? Jana hat einen Bruder.',opts:['falsch','richtig'],a:0},
 {t:'info',title:'E-mail curta: começar e terminar',html:`<table><tr><th></th><th>informal (du)</th><th>formal (Sie)</th></tr>
 <tr><td>começo</td><td class="es-t">Hallo Tom, / Liebe Jana, / Lieber Tom,</td><td class="es-t">Sehr geehrte Frau Weber, / Sehr geehrter Herr Becker,</td></tr>
 <tr><td>fim</td><td class="es-t">Viele Grüße / Liebe Grüße</td><td class="es-t">Mit freundlichen Grüßen</td></tr></table>
 <div class="ex">Depois da saudação vem vírgula, e a frase seguinte começa com <b>letra minúscula</b>: <span class="es-t">Hallo Tom, im Mai kommen …</span></div>`},
 {t:'free',task:'Escreva uma e-mail curta (cerca de 30 palavras) para uma amiga alemã sobre a sua família: 1) quem é da sua família, 2) idade e onde moram, 3) pergunte sobre a família dela.',hint:'Liebe …, meine Familie ist … Mein Vater/Meine Mutter heißt … und ist … Jahre alt. Sie wohnen in … Hast du Geschwister? Viele Grüße …',focus:'Possessivartikel, haben, ein/kein, Zahlen, E-Mail-Anrede und Gruß',model:'Liebe Jana,\nmeine Familie wohnt in São Paulo. Mein Vater heißt Paulo, er ist 58. Meine Mutter Rita ist 54. Ich habe einen Bruder, er hat zwei Kinder. Hast du Geschwister?\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Artigos</h3><table><tr><th></th><th>der (m)</th><th>die (f)</th><th>das (n)</th><th>die (Pl.)</th></tr><tr><td>definido</td><td class="es-t">der Bruder</td><td class="es-t">die Schwester</td><td class="es-t">das Kind</td><td class="es-t">die Kinder</td></tr><tr><td>indefinido</td><td class="es-t">ein</td><td class="es-t">eine</td><td class="es-t">ein</td><td>–</td></tr><tr><td>negação</td><td class="es-t">kein</td><td class="es-t">keine</td><td class="es-t">kein</td><td class="es-t">keine</td></tr><tr><td>com haben</td><td class="es-t">einen / keinen</td><td class="es-t">eine / keine</td><td class="es-t">ein / kein</td><td class="es-t">– / keine</td></tr></table>
<h3>Possessivos</h3><p class="es-t">mein/meine · dein/deine · sein/seine (dele) · ihr/ihre (dela) · unser/unsere · Ihr/Ihre (formal)</p>
<h3>Plural</h3><p class="es-t">Kind → Kinder · Bruder → Brüder · Schwester → Schwestern · Freund → Freunde · Handy → Handys</p>
<h3>E-mail</h3><p class="es-t">Hallo … / Liebe … / Lieber … – Viele Grüße · Sehr geehrte … – Mit freundlichen Grüßen</p>`});

/* ================= KAPITEL 4 · ESSEN & EINKAUFEN ================= */
LANGS.de.course.units.push({id:'k4',n:'4',level:'A1',title:'Essen & Einkaufen',sub:'Comida e bebida · gostar · acusativo · preços · supermercado e restaurante',
goals:['Lebensmittel und Getränke','gern / nicht gern · Ich mag …','Akkusativ: den / einen / keinen','essen, nehmen, mögen, möchten','Was kostet …? – Preise und Mengen','Im Supermarkt, auf dem Markt, in der Bäckerei','Im Restaurant bestellen und bezahlen: Zusammen oder getrennt?'],
situacion:{title:'No restaurante',npc:'Kellnerin',scene:'Você janta com a Jana num restaurante em Frankfurt. A garçonete chega.',role:'Du bist Kellnerin in einem Restaurant in Frankfurt, freundlich, schnell. Du siezt die Gäste. Frag: Was möchten Sie trinken? Was möchten Sie essen? Empfiehl das Tagesgericht (Schnitzel mit Kartoffelsalat, 13,90 €) oder eine Gemüsesuppe (7,50 €). Am Ende: Zusammen oder getrennt? Nenne den Preis. Sprich sehr einfaches Deutsch (A1).',goal:'Peça uma bebida e um prato, pergunte o preço, peça a conta e pague (separado).'},
placement:[
 {t:'mc',q:'„Eu gosto de tomar café.“',opts:['Ich trinke gern Kaffee.','Ich gern trinke Kaffee.','Ich habe gern Kaffee.'],a:0},
 {t:'gap',q:'Ich kaufe ___ Apfel. (um – der Apfel)',a:['einen']},
 {t:'gap',q:'Was ___ du? – Ich nehme die Suppe. (nehmen)',a:['nimmst']},
 {t:'mc',q:'„Quanto custa o queijo?“',opts:['Was kostet der Käse?','Wie viel ist Käse kosten?','Was der Käse kostet?'],a:0},
 {t:'mc',q:'No restaurante, o garçom pergunta „Zusammen oder getrennt?“. Ele quer saber …',opts:['se vocês pagam juntos ou separado','se vocês querem sentar juntos','se a comida está boa'],a:0},
 {t:'gap',q:'Ich ___ gern einen Tee. (gostaria – möchten)',a:['möchte']}],
lessons:[
{id:'l1',title:'Comida e bebida',desc:'Brot, Käse, Obst … · gern',steps:[
 {t:'vocab',title:'Alimentos',items:[['das Brot','o pão'],['das Brötchen','o pãozinho'],['die Butter','a manteiga'],['der Käse','o queijo'],['die Wurst','a linguiça / os frios'],['das Ei','o ovo'],['das Fleisch','a carne'],['das Hähnchen','o frango'],['der Fisch','o peixe'],['der Reis','o arroz'],['die Kartoffel','a batata'],['die Nudeln (Pl.)','o macarrão'],['das Gemüse','os legumes / as verduras'],['der Salat','a salada'],['die Tomate','o tomate'],['das Obst','as frutas'],['der Apfel','a maçã'],['die Banane','a banana'],['die Birne','a pera'],['der Zucker','o açúcar'],['das Salz','o sal'],['das Öl','o óleo']]},
 {t:'vocab',title:'Bebidas',items:[['das Wasser','a água'],['der Saft','o suco'],['der Kaffee','o café'],['der Tee','o chá'],['die Milch','o leite'],['das Bier','a cerveja'],['der Wein','o vinho'],['die Flasche','a garrafa'],['das Glas','o copo'],['die Tasse','a xícara']]},
 {t:'info',title:'gern – gostar de fazer algo',html:`<p>Para dizer que você <b>gosta de fazer</b> algo, use o verbo + <b>gern</b>:</p>
 <table><tr><td class="es-t">Ich trinke gern Kaffee.</td><td>Eu gosto de tomar café.</td></tr>
 <tr><td class="es-t">Ich esse nicht gern Fisch.</td><td>Eu não gosto de comer peixe.</td></tr>
 <tr><td class="es-t">Isst du gern Fleisch?</td><td>Você gosta de carne?</td></tr></table>
 <p>Com um substantivo, sem verbo: <b>mögen</b> → <span class="es-t">Ich mag Käse. Magst du Obst?</span></p>
 <div class="ojo"><b>essen</b> muda o radical: <span class="es-t">ich esse, du isst, er/sie isst</span>. <b>mögen</b>: <span class="es-t">ich mag, du magst, er/sie mag, wir mögen</span>.</div>`},
 {t:'mc',q:'„Você gosta de comer peixe?“',opts:['Isst du gern Fisch?','Du isst gern Fisch?','Gern isst du Fisch?'],a:0,why:'Pergunta de sim/não: verbo na posição 1, <i>gern</i> depois do sujeito.'},
 {t:'match',q:'Ligue.',pairs:[['das Obst','as frutas'],['das Gemüse','os legumes'],['der Saft','o suco'],['das Brötchen','o pãozinho'],['die Wurst','os frios']]},
 {t:'gap',q:'Tom ___ gern Pizza. (essen)',a:['isst']},
 {t:'gap',q:'Ich ___ keinen Fisch. (mögen)',a:['mag']},
 {t:'tr',de:'Eu gosto de tomar chá.',a:['Ich trinke gern Tee.']},
 {t:'tr',de:'Ela não gosta de carne.',a:['Sie isst nicht gern Fleisch.','Sie mag kein Fleisch.','Sie mag Fleisch nicht.']},
 {t:'listen',es:'Ich trinke gern Orangensaft.',de:'Eu gosto de tomar suco de laranja.'},
 {t:'vocab',title:'Mais palavras: comer',items:[['der Schinken', 'o presunto'], ['die Pommes frites (Pl.)', 'as batatas fritas'], ['das Lokal', 'o bar / o restaurante'], ['das Café', 'o café (lugar)'], ['bitter', 'amargo'], ['süß', 'doce'], ['riechen', 'cheirar'], ['empfehlen', 'recomendar'], ['anbieten', 'oferecer'], ['wenig', 'pouco'], ['wunderbar', 'maravilhoso']]},
 {t:'match',q:'Ligue as palavras novas.',pairs:[['der Schinken', 'o presunto'], ['bitter', 'amargo'], ['riechen', 'cheirar'], ['empfehlen', 'recomendar'], ['wenig', 'pouco']]}
]},
{id:'l2',title:'O acusativo',desc:'den / einen / keinen · nehmen, kaufen, brauchen',steps:[
 {t:'info',title:'Acusativo: só o masculino muda',html:`<p>Quando um substantivo é o <b>objeto direto</b> (quem/o que é comprado, comido, procurado …), ele fica no <b>acusativo</b>. A boa notícia: <b>só o masculino muda</b>.</p>
 <table><tr><th></th><th>nominativo (sujeito)</th><th>acusativo (objeto)</th></tr>
 <tr><td>masculino</td><td class="es-t">der / ein / kein Apfel</td><td class="es-t"><b>den / einen / keinen</b> Apfel</td></tr>
 <tr><td>feminino</td><td class="es-t">die / eine / keine Banane</td><td class="es-t">die / eine / keine Banane</td></tr>
 <tr><td>neutro</td><td class="es-t">das / ein / kein Ei</td><td class="es-t">das / ein / kein Ei</td></tr>
 <tr><td>plural</td><td class="es-t">die / – / keine Eier</td><td class="es-t">die / – / keine Eier</td></tr></table>
 <div class="ex"><span class="es-t">Der Kaffee ist gut.</span> (sujeito) – <span class="es-t">Ich trinke <b>den</b> Kaffee.</span> (objeto)</div>
 <div class="ex">Também os possessivos: <span class="es-t">Ich suche mein<b>en</b> Schlüssel.</span></div>
 <p>Verbos com acusativo: <span class="es-t">kaufen, nehmen, brauchen, suchen, haben, essen, trinken, möchten, bestellen</span>.</p>`},
 {t:'info',title:'nehmen e möchten',html:`<table><tr><th></th><th>nehmen <span class="muted">(pegar/escolher)</span></th><th>möchten <span class="muted">(gostaria)</span></th></tr>
 <tr><td>ich</td><td class="es-t">nehme</td><td class="es-t">möchte</td></tr>
 <tr><td>du</td><td class="es-t">n<b>imm</b>st</td><td class="es-t">möchtest</td></tr>
 <tr><td>er / sie</td><td class="es-t">n<b>imm</b>t</td><td class="es-t">möchte</td></tr>
 <tr><td>wir</td><td class="es-t">nehmen</td><td class="es-t">möchten</td></tr>
 <tr><td>sie / Sie</td><td class="es-t">nehmen</td><td class="es-t">möchten</td></tr></table>
 <p><b>möchten</b> é a forma educada de querer: <span class="es-t">Ich möchte einen Kaffee.</span> Ainda mais educado: <span class="es-t">Ich hätte gern einen Kaffee.</span></p>`},
 {t:'vocab',title:'Verbos',items:[['kaufen','comprar'],['brauchen','precisar de'],['suchen','procurar'],['nehmen','pegar / escolher / tomar'],['möchten','gostaria de / querer'],['mögen','gostar de'],['essen','comer'],['trinken','beber'],['kochen','cozinhar'],['schmecken','ter gosto / estar gostoso']]},
 {t:'mc',q:'Ich brauche ___ Salat. (der Salat)',opts:['einen','ein','eine'],a:0,why:'Masculino no acusativo: <b>einen</b>.'},
 {t:'mc',q:'Ich kaufe ___ Milch. (die Milch)',opts:['die','den','der'],a:0,why:'Feminino não muda: <b>die</b>.'},
 {t:'gap',q:'Wir haben ___ Brot mehr. (das Brot – nenhum)',a:['kein']},
 {t:'gap',q:'Lucas sucht ___ Käse. (der Käse – o)',a:['den']},
 {t:'gap',q:'Was ___ du? – Ich nehme den Fisch. (nehmen)',a:['nimmst']},
 {t:'gap',q:'Jana ___ einen Tee. (möchten)',a:['möchte']},
 {t:'order',es:'Ich möchte einen Apfelsaft',de:'Eu gostaria de um suco de maçã.'},
 {t:'tr',de:'Eu preciso de um ovo.',a:['Ich brauche ein Ei.']},
 {t:'tr',de:'Você toma o café? (informal)',a:['Nimmst du den Kaffee?','Trinkst du den Kaffee?']}
]},
{id:'l3',title:'Fazer compras',desc:'Was kostet …? · Preise · Mengen · bezahlen',steps:[
 {t:'vocab',title:'Compras',items:[['einkaufen','fazer compras'],['der Supermarkt','o supermercado'],['der Markt','a feira'],['die Bäckerei','a padaria'],['das Geschäft','a loja'],['die Kasse','o caixa'],['Was kostet …?','Quanto custa …?'],['Was kosten …?','Quanto custam …?'],['der Preis','o preço'],['der Euro','o euro'],['der Cent','o centavo'],['teuer','caro'],['billig','barato'],['günstig','em conta / barato'],['das Angebot','a oferta / promoção'],['das Kilo','o quilo'],['das Gramm','o grama'],['der Liter','o litro'],['die Packung','o pacote'],['bezahlen','pagar'],['bar','em dinheiro'],['mit Karte','com cartão'],['die Tüte','a sacola']]},
 {t:'info',title:'Preços',html:`<table><tr><td>1,50 €</td><td class="es-t">ein Euro fünfzig</td></tr><tr><td>2,99 €</td><td class="es-t">zwei Euro neunundneunzig</td></tr><tr><td>0,80 €</td><td class="es-t">achtzig Cent</td></tr><tr><td>12,00 €</td><td class="es-t">zwölf Euro</td></tr></table>
 <p><span class="es-t">Was kostet das Brot? – Drei Euro zwanzig.</span><br><span class="es-t">Was kosten die Äpfel? – Ein Kilo kostet zwei Euro.</span></p>
 <div class="ex">Mengen sem “de”: <span class="es-t">ein Kilo Äpfel</span> (um quilo <b>de</b> maçãs), <span class="es-t">eine Flasche Wasser</span>, <span class="es-t">200 Gramm Käse</span>.</div>
 <div class="ojo">Na Alemanha muita gente ainda paga em dinheiro. No caixa: <span class="es-t">Bar oder mit Karte?</span> E a sacola custa extra: <span class="es-t">Brauchen Sie eine Tüte?</span></div>`},
 {t:'listen',es:'Das macht vier Euro achtzig.',de:'Dá quatro euros e oitenta.'},
 {t:'listen',es:'Ein Kilo Tomaten kostet zwei Euro fünfzig.',de:'Um quilo de tomates custa dois euros e cinquenta.'},
 {t:'mc',q:'„3,49 €“',opts:['drei Euro neunundvierzig','drei Euro vierundneunzig','dreißig Euro neunundvierzig'],a:0},
 {t:'gap',q:'Was ___ die Bananen? (kosten)',a:['kosten'],why:'<i>die Bananen</i> é plural → <b>kosten</b>.'},
 {t:'dialog',place:'Wochenmarkt',title:'Na feira',scene:'Sábado de manhã, feira em Frankfurt. Você quer frutas e queijo.',lines:[
  {n:'Verkäufer',es:'Guten Morgen! Was möchten Sie?',de:'Bom dia! O que o senhor deseja?'},
  {you:true,opts:[{es:'Ein Kilo Äpfel, bitte.',ok:true},{es:'Ein Kilo von Äpfel, bitte.',ok:false,why:'Sem “von”: <i>ein Kilo Äpfel</i>.'}]},
  {n:'Verkäufer',es:'Gern. Noch etwas?',de:'Pois não. Mais alguma coisa?'},
  {you:true,opts:[{es:'Ja, 200 Gramm Käse. Was kostet das?',ok:true},{es:'Nein, ich habe keinen Hunger.',ok:false,why:'Você ainda queria queijo 😉'}]},
  {n:'Verkäufer',es:'Zusammen macht das sechs Euro dreißig.',de:'Tudo junto dá seis euros e trinta.'},
  {you:true,opts:[{es:'Hier, bitte. Zehn Euro.',ok:true},{es:'Das ist sehr billig. Tschüss!',ok:false,why:'Primeiro é preciso pagar!'}]},
  {n:'Verkäufer',es:'Und drei Euro siebzig zurück. Danke schön!',de:'E três euros e setenta de troco. Muito obrigado!'}]},
 {t:'read',hideText:true,title:'Aviso no supermercado',intro:'Ouça o aviso pelo alto-falante.',text:`Liebe Kundinnen und Kunden! Heute im Angebot: ein Kilo Bananen für nur ein Euro neunundzwanzig. Und frische Brötchen von unserer Bäckerei: zehn Stück für zwei Euro fünfzig. Unser Supermarkt schließt heute um zwanzig Uhr. Vielen Dank für Ihren Einkauf!`,de:`Queridos clientes! Hoje em promoção: um quilo de bananas por apenas 1,29 €. E pãezinhos frescos da nossa padaria: dez unidades por 2,50 €. Nosso supermercado fecha hoje às 20 horas. Muito obrigado pela sua compra!`},
 {t:'mc',q:'Richtig oder falsch? Bananen sind heute im Angebot.',opts:['richtig','falsch'],a:0},
 {t:'mc',q:'Was kosten zehn Brötchen?',opts:['2,50 €','1,29 €','10,00 €'],a:0},
 {t:'mc',q:'Richtig oder falsch? Der Supermarkt schließt um 22 Uhr.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Você quer comprar pão fresco no domingo de manhã. Qual anúncio serve?',opts:['Bäckerei Schmitt – auch sonntags 7–11 Uhr geöffnet','Supermarkt Preisfuchs – Mo–Sa 8–20 Uhr'],a:0,why:'Na Alemanha, quase todas as lojas fecham no domingo – algumas padarias abrem de manhã.'}
]},
{id:'l4',title:'No café e no restaurante',desc:'bestellen · Ich hätte gern … · Die Rechnung, bitte!',steps:[
 {t:'vocab',title:'Restaurante',items:[['das Restaurant','o restaurante'],['das Café','o café (lugar)'],['die Speisekarte','o cardápio'],['bestellen','pedir'],['Ich hätte gern …','Eu queria … (educado)'],['Was möchten Sie trinken?','O que o senhor deseja beber?'],['das Essen','a comida'],['das Getränk','a bebida'],['der Hunger','a fome'],['der Durst','a sede'],['Guten Appetit!','Bom apetite!'],['Das schmeckt gut!','Está gostoso!'],['Die Rechnung, bitte!','A conta, por favor!'],['zusammen','junto'],['getrennt','separado'],['Stimmt so.','Pode ficar com o troco.'],['das Frühstück','o café da manhã'],['das Mittagessen','o almoço'],['das Abendessen','o jantar']]},
 {t:'info',title:'Pedir e pagar',html:`<table><tr><th>garçom</th><th>você</th></tr>
 <tr><td class="es-t">Was möchten Sie?</td><td class="es-t">Ich hätte gern eine Suppe. / Ich nehme den Salat.</td></tr>
 <tr><td class="es-t">Und zu trinken?</td><td class="es-t">Ein Wasser, bitte.</td></tr>
 <tr><td class="es-t">Schmeckt es Ihnen?</td><td class="es-t">Ja, sehr gut, danke!</td></tr>
 <tr><td class="es-t">Zusammen oder getrennt?</td><td class="es-t">Getrennt, bitte.</td></tr></table>
 <div class="ojo">Na Alemanha é normal cada um pagar a sua parte – o garçom pergunta <span class="es-t">Zusammen oder getrennt?</span>. A gorjeta (5–10 %) se dá na hora: a conta é 18,40 € e você diz <span class="es-t">Zwanzig, bitte. / Stimmt so.</span></div>`},
 {t:'mc',q:'A conta é 9,60 €. Você dá 10 € e quer deixar o resto de gorjeta. Você diz:',opts:['Stimmt so.','Getrennt, bitte.','Guten Appetit!'],a:0},
 {t:'mc',q:'Forma mais educada de pedir:',opts:['Ich hätte gern einen Kaffee.','Ich will Kaffee.','Kaffee!'],a:0},
 {t:'gap',q:'Ich habe ___. Ich möchte etwas trinken. (sede)',a:['Durst']},
 {t:'dialog',place:'Café am Main',title:'No café',scene:'Você e a Jana entram num café depois do trabalho.',lines:[
  {n:'Kellner',es:'Hallo! Was darf es sein?',de:'Olá! O que vai ser?'},
  {you:true,opts:[{es:'Ich hätte gern einen Cappuccino und ein Stück Apfelkuchen.',ok:true},{es:'Ich habe einen Cappuccino.',ok:false,why:'<i>Ich habe</i> = eu tenho. Para pedir: <i>Ich hätte gern …</i> ou <i>Ich möchte …</i>'}]},
  {n:'Jana',es:'Und für mich einen Tee, bitte.',de:'E para mim um chá, por favor.'},
  {n:'Kellner',es:'Gern. … So, bitte schön. Guten Appetit!',de:'Pois não. … Aqui está. Bom apetite!'},
  {you:true,opts:[{es:'Danke! Der Kuchen schmeckt sehr gut.',ok:true},{es:'Danke! Die Rechnung schmeckt gut.',ok:false,why:'😄 <i>die Rechnung</i> é a conta.'}]},
  {you:true,opts:[{es:'Die Rechnung, bitte!',ok:true},{es:'Die Speisekarte, bitte!',ok:false,why:'Vocês já comeram – agora é a conta.'}]},
  {n:'Kellner',es:'Zusammen oder getrennt?',de:'Junto ou separado?'},
  {you:true,opts:[{es:'Getrennt, bitte.',ok:true},{es:'Ja, bitte.',ok:false,why:'É uma pergunta de “ou”: responda <i>zusammen</i> ou <i>getrennt</i>.'}]},
  {n:'Kellner',es:'Der Cappuccino und der Kuchen: sieben Euro vierzig.',de:'O cappuccino e o bolo: sete euros e quarenta.'},
  {you:true,opts:[{es:'Acht Euro, bitte. Stimmt so.',ok:true},{es:'Sieben Euro vierzig zurück.',ok:false,why:'Você é quem paga 😉 – <i>Acht Euro, stimmt so.</i>'}]}]},
 {t:'tr',de:'Eu queria uma água, por favor.',a:['Ich hätte gern ein Wasser, bitte.','Ich möchte ein Wasser, bitte.','Ich hätte gern Wasser, bitte.']},
 {t:'tr',de:'A conta, por favor!',a:['Die Rechnung, bitte!']},
 {t:'speak',es:'Ich hätte gern einen Kaffee mit Milch, bitte.',de:'Eu queria um café com leite, por favor.',tip:'<i>hätte</i>: o <b>ä</b> é um “é” aberto e curto.'},
 {t:'free',task:'Escreva uma mensagem curta (~30 palavras) para o Tom: 1) você vai ao supermercado, 2) o que você compra, 3) pergunte o que ele precisa.',hint:'Hallo Tom, ich gehe heute in den Supermarkt. Ich kaufe … Brauchst du …? / Was brauchst du? Viele Grüße',focus:'Akkusativ (einen/eine/ein), Lebensmittel, brauchen, kaufen',model:'Hallo Tom,\nich gehe heute in den Supermarkt. Ich kaufe Brot, einen Käse, Tomaten und eine Flasche Milch. Brauchst du auch etwas? Vielleicht Kaffee oder Eier?\nViele Grüße\nLucas'}
]}],
resumen:`<h3>gern / mögen</h3><p class="es-t">Ich trinke gern Kaffee. · Ich esse nicht gern Fisch. · Ich mag Käse.</p>
<h3>Acusativo – só o masculino muda</h3><table><tr><th></th><th>nominativo</th><th>acusativo</th></tr><tr><td>m</td><td class="es-t">der / ein / kein</td><td class="es-t">den / einen / keinen</td></tr><tr><td>f</td><td class="es-t">die / eine / keine</td><td class="es-t">die / eine / keine</td></tr><tr><td>n</td><td class="es-t">das / ein / kein</td><td class="es-t">das / ein / kein</td></tr><tr><td>Pl.</td><td class="es-t">die / – / keine</td><td class="es-t">die / – / keine</td></tr></table>
<h3>Verbos com mudança</h3><p class="es-t">essen: du isst, er isst · nehmen: du nimmst, er nimmt · mögen: ich mag, du magst · möchten: ich möchte, du möchtest</p>
<h3>Compras</h3><p class="es-t">Was kostet …? / Was kosten …? · ein Kilo Äpfel · eine Flasche Wasser · Bar oder mit Karte?</p>
<h3>Restaurante</h3><p class="es-t">Ich hätte gern … · Die Rechnung, bitte! · Zusammen oder getrennt? · Stimmt so.</p>`});

/* ================= KAPITEL 5 · WOHNEN ================= */
LANGS.de.course.units.push({id:'k5',n:'5',level:'A1',title:'Wohnen',sub:'Casa e quartos · móveis · adjetivos · es gibt · ihn/sie/es · anúncios de apartamento',
goals:['Die Wohnung: Zimmer, Küche, Bad, Balkon …','Möbel und Geräte','Adjektive: groß, klein, hell, ruhig, teuer …','Farben','es gibt + Akkusativ','Wie findest du …? – Ich finde ihn / sie / es …','Wohnungsanzeigen verstehen (Zi., Kü., NK …)','Miete, Vermieter, umziehen'],
situacion:{title:'Visitar um apartamento',npc:'Frau Klein',scene:'Você procura um apartamento só seu e visita um de 2 cômodos em Frankfurt-Bornheim.',role:'Du bist Frau Klein, Vermieterin, ca. 60, freundlich und genau. Du siezt die Person. Zeig die Wohnung: 2 Zimmer, 55 m², Küche mit Herd und Kühlschrank, Bad mit Dusche, kleiner Balkon, 3. Stock ohne Aufzug, 850 € warm. Beantworte Fragen. Frag, wann die Person einziehen möchte. Sprich sehr einfaches Deutsch (A1).',goal:'Pergunte sobre os cômodos, o tamanho, o aluguel e se há varanda. Diga o que você acha do apartamento.'},
placement:[
 {t:'mc',q:'„Na cozinha tem uma mesa.“',opts:['In der Küche gibt es einen Tisch.','In der Küche es gibt einen Tisch.','In der Küche gibt einen Tisch.'],a:0},
 {t:'gap',q:'Wie findest du den Stuhl? – Ich finde ___ schön.',a:['ihn']},
 {t:'mc',q:'„2-Zi.-Whg., 55 m², Blk.“ – o que é „Blk.“?',opts:['Balkon','Block','Blick'],a:0},
 {t:'mc',q:'O contrário de „laut“:',opts:['ruhig','hell','teuer'],a:0},
 {t:'gap',q:'Die Wohnung ist nicht groß, sie ist ___.',a:['klein']},
 {t:'mc',q:'„Warmmiete“ é …',opts:['o aluguel com aquecimento e despesas','o aluguel no verão','o aluguel sem despesas'],a:0}],
lessons:[
{id:'l1',title:'O apartamento',desc:'Zimmer, Küche, Bad … · Adjektive',steps:[
 {t:'vocab',title:'Cômodos',items:[['die Wohnung','o apartamento'],['das Haus','a casa'],['das Zimmer','o quarto / o cômodo'],['das Wohnzimmer','a sala'],['das Schlafzimmer','o quarto de dormir'],['die Küche','a cozinha'],['das Bad','o banheiro'],['die Toilette','o vaso / o banheiro'],['der Flur','o corredor'],['der Balkon','a varanda'],['der Garten','o jardim'],['der Keller','o porão'],['der Stock','o andar'],['das Erdgeschoss','o térreo'],['der Aufzug','o elevador'],['die Treppe','a escada']]},
 {t:'vocab',title:'Adjetivos',items:[['groß','grande'],['klein','pequeno'],['hell','claro / iluminado'],['dunkel','escuro'],['ruhig','tranquilo / silencioso / calmo'],['laut','barulhento'],['neu','novo'],['alt','velho'],['schön','bonito'],['hässlich','feio'],['modern','moderno'],['praktisch','prático'],['teuer','caro'],['billig','barato'],['gemütlich','aconchegante']]},
 {t:'info',title:'Andares e lugares',html:`<p>No Brasil o “primeiro andar” às vezes é o térreo – na Alemanha <b>nunca</b>:</p>
 <table><tr><td class="es-t">im Erdgeschoss (EG)</td><td>no térreo</td></tr><tr><td class="es-t">im ersten Stock</td><td>no 1º andar (acima do térreo)</td></tr><tr><td class="es-t">im dritten Stock</td><td>no 3º andar</td></tr><tr><td class="es-t">oben / unten</td><td>em cima / embaixo</td></tr><tr><td class="es-t">links / rechts</td><td>à esquerda / à direita</td></tr></table>
 <div class="ex">O adjetivo depois de <b>sein</b> não muda: <span class="es-t">Die Wohnung ist hell. Das Zimmer ist klein. Die Zimmer sind klein.</span></div>`},
 {t:'match',q:'Ligue os opostos.',pairs:[['groß','klein'],['hell','dunkel'],['laut','ruhig'],['teuer','billig'],['neu','alt']]},
 {t:'mc',q:'Onde se cozinha?',opts:['in der Küche','im Bad','im Flur'],a:0},
 {t:'mc',q:'„im ersten Stock“ é …',opts:['um andar acima do térreo','o térreo','o porão'],a:0},
 {t:'gap',q:'Meine Wohnung ist im dritten ___. Es gibt keinen Aufzug.',a:['Stock']},
 {t:'tr',de:'O quarto é pequeno, mas claro.',a:['Das Zimmer ist klein, aber hell.','Das Schlafzimmer ist klein, aber hell.']},
 {t:'listen',es:'Die Küche ist sehr gemütlich.',de:'A cozinha é muito aconchegante.'}
]},
{id:'l2',title:'Móveis e cores',desc:'Tisch, Bett, Schrank … · es gibt',steps:[
 {t:'vocab',title:'Móveis e aparelhos',items:[['die Möbel (Pl.)','os móveis'],['der Tisch','a mesa'],['der Stuhl','a cadeira'],['das Bett','a cama'],['der Schrank','o armário'],['das Sofa','o sofá'],['das Regal','a estante'],['die Lampe','a luminária'],['der Teppich','o tapete'],['der Kühlschrank','a geladeira'],['der Herd','o fogão'],['die Waschmaschine','a máquina de lavar'],['die Dusche','o chuveiro'],['das Fenster','a janela'],['die Tür','a porta'],['das Licht','a luz']]},
 {t:'vocab',title:'Cores',items:[['die Farbe','a cor'],['weiß','branco'],['schwarz','preto'],['rot','vermelho'],['blau','azul'],['grün','verde'],['gelb','amarelo'],['grau','cinza'],['braun','marrom']]},
 {t:'info',title:'es gibt – tem / há',html:`<p><b>es gibt</b> + <b>acusativo</b> = “tem / há” (existência):</p>
 <table><tr><td class="es-t">In der Küche gibt es <b>einen</b> Tisch.</td><td>Na cozinha tem uma mesa.</td></tr>
 <tr><td class="es-t">Es gibt eine Waschmaschine.</td><td>Tem uma máquina de lavar.</td></tr>
 <tr><td class="es-t">Gibt es einen Balkon?</td><td>Tem varanda?</td></tr>
 <tr><td class="es-t">Es gibt <b>keinen</b> Aufzug.</td><td>Não tem elevador.</td></tr></table>
 <div class="ojo">Não use <i>haben</i> para isso: “Die Küche hat einen Tisch” é possível, mas o normal é <span class="es-t">In der Küche gibt es einen Tisch.</span></div>`},
 {t:'mc',q:'„Tem uma geladeira?“',opts:['Gibt es einen Kühlschrank?','Es gibt einen Kühlschrank?','Hat es einen Kühlschrank?'],a:0},
 {t:'gap',q:'Im Schlafzimmer gibt es ___ Bett und ___ Schrank. (uma – das Bett · um – der Schrank)',a:['ein','einen']},
 {t:'gap',q:'Leider gibt es ___ Balkon. (nenhum – der Balkon)',a:['keinen']},
 {t:'mc',q:'Qual artigo? ___ Bett',opts:['das','der','die'],a:0},
 {t:'mc',q:'Qual artigo? ___ Lampe',opts:['die','der','das'],a:0},
 {t:'order',es:'Im Wohnzimmer gibt es ein Sofa',de:'Na sala tem um sofá.'},
 {t:'tr',de:'Tem elevador?',a:['Gibt es einen Aufzug?']},
 {t:'tr',de:'O sofá é cinza.',a:['Das Sofa ist grau.']},
 {t:'vocab',title:'Mais palavras: em casa',items:[['das Apartment', 'o apartamento (pequeno)'], ['der Raum', 'o espaço / a sala'], ['anmachen', 'ligar (luz, aparelho)'], ['ausmachen', 'desligar'], ['legen', 'colocar (deitado)'], ['liegen', 'estar (deitado)'], ['stellen', 'colocar (em pé)'], ['sitzen', 'estar sentado'], ['kaputt', 'quebrado'], ['reparieren', 'consertar'], ['die Maschine', 'a máquina'], ['die Ordnung', 'a ordem / a arrumação'], ['holen', 'buscar / pegar'], ['draußen', 'lá fora'], ['daneben', 'ao lado'], ['breit', 'largo'], ['hoch', 'alto'], ['leise', 'baixo (som) / silencioso'], ['der Baum', 'a árvore'], ['sich kümmern um', 'cuidar de']]},
 {t:'match',q:'Ligue as palavras novas.',pairs:[['anmachen', 'ligar'], ['ausmachen', 'desligar'], ['kaputt', 'quebrado'], ['reparieren', 'consertar'], ['draußen', 'lá fora']]}
]},
{id:'l3',title:'O que você acha?',desc:'Wie findest du …? – ihn / sie / es',steps:[
 {t:'info',title:'Pronomes no acusativo',html:`<p>Para não repetir a palavra, use um pronome. No acusativo, de novo, <b>só o masculino muda</b>:</p>
 <table><tr><th></th><th>nominativo</th><th>acusativo</th></tr>
 <tr><td>der Tisch</td><td class="es-t">er</td><td class="es-t"><b>ihn</b></td></tr>
 <tr><td>die Lampe</td><td class="es-t">sie</td><td class="es-t">sie</td></tr>
 <tr><td>das Sofa</td><td class="es-t">es</td><td class="es-t">es</td></tr>
 <tr><td>die Stühle</td><td class="es-t">sie</td><td class="es-t">sie</td></tr></table>
 <div class="ex"><span class="es-t">Wie findest du den Tisch? – Ich finde <b>ihn</b> schön.</span><br><span class="es-t">Wie findest du die Wohnung? – Ich finde <b>sie</b> zu teuer.</span></div>
 <p>Também para pessoas: <span class="es-t">mich, dich, ihn, sie, uns, euch, sie/Sie</span> – <span class="es-t">Kannst du mich anrufen?</span></p>
 <div class="ojo">Em alemão, objetos também são <b>er/sie/es</b> – conforme o artigo! <span class="es-t">der Tisch → er</span>, mesmo sendo uma coisa.</div>`},
 {t:'vocab',title:'Opinião',items:[['Wie findest du …?','O que você acha de …?'],['Ich finde ihn / sie / es …','Eu acho ele / ela … (objeto)'],['zu','demais (zu teuer = caro demais)'],['sehr','muito'],['ziemlich','bastante'],['ein bisschen','um pouco'],['super','ótimo'],['toll','legal / incrível'],['nicht so schön','não muito bonito']]},
 {t:'mc',q:'Wie findest du den Schrank? – Ich finde … praktisch.',opts:['ihn','sie','es'],a:0,why:'<i>der Schrank</i> → acusativo <b>ihn</b>.'},
 {t:'mc',q:'Wie findest du das Bad? – Ich finde … zu klein.',opts:['es','ihn','sie'],a:0},
 {t:'gap',q:'Die Küche ist toll! Ich finde ___ sehr modern.',a:['sie']},
 {t:'gap',q:'Der Balkon ist groß. ___ ist sehr schön. (nominativo)',a:['Er']},
 {t:'dialog',place:'WG-Küche',title:'Um sofá novo',scene:'O Tom comprou um sofá usado para a sala da WG.',lines:[
  {n:'Tom',es:'Schau mal, das Sofa ist neu! Wie findest du es?',de:'Olha, o sofá é novo! O que você acha dele?'},
  {you:true,opts:[{es:'Ich finde es sehr gemütlich!',ok:true},{es:'Ich finde ihn sehr gemütlich!',ok:false,why:'<i>das Sofa</i> é neutro → <b>es</b>.'}]},
  {n:'Tom',es:'Und die Farbe?',de:'E a cor?'},
  {you:true,opts:[{es:'Die Farbe finde ich nicht so schön. Grau ist ein bisschen dunkel.',ok:true},{es:'Die Farbe ist sehr laut.',ok:false,why:'<i>laut</i> = barulhento. Para cor: <i>dunkel, hell, schön …</i>'}]},
  {n:'Tom',es:'Ja, stimmt. Aber es war billig: nur fünfzig Euro!',de:'É verdade. Mas foi barato: só cinquenta euros!'}]},
 {t:'tr',de:'Eu acho a cozinha prática. (die Küche)',a:['Ich finde die Küche praktisch.']},
 {t:'tr',de:'O que você acha da mesa? – Eu acho ela feia.',a:['Wie findest du den Tisch? – Ich finde ihn hässlich.','Wie findest du den Tisch? Ich finde ihn hässlich.']}
]},
{id:'l4',title:'Procurar apartamento',desc:'Wohnungsanzeigen · Miete · umziehen',steps:[
 {t:'vocab',title:'Aluguel',items:[['mieten','alugar (como inquilino)'],['vermieten','alugar (como dono)'],['der Vermieter / die Vermieterin','o locador / a locadora'],['die Miete','o aluguel'],['die Nebenkosten (Pl.)','as despesas (água, aquecimento …)'],['warm','com despesas incluídas (aluguel)'],['der Quadratmeter','o metro quadrado'],['die Anzeige','o anúncio'],['umziehen','mudar de casa'],['einziehen','mudar para (entrar)'],['frei','livre / disponível'],['ab sofort','a partir de agora'],['besichtigen','visitar (um imóvel)']]},
 {t:'info',title:'Ler anúncios de apartamento',html:`<p>Os anúncios usam muitas abreviações:</p>
 <table><tr><td class="es-t">2-Zi.-Whg.</td><td>apartamento de 2 cômodos (sem contar cozinha e banheiro!)</td></tr>
 <tr><td class="es-t">Kü., Bad, Blk.</td><td>cozinha, banheiro, varanda</td></tr>
 <tr><td class="es-t">55 m²</td><td class="es-t">55 Quadratmeter</td></tr>
 <tr><td class="es-t">3. OG</td><td>3º andar (Obergeschoss)</td></tr>
 <tr><td class="es-t">KM / NK / WM</td><td>aluguel frio / despesas / aluguel quente (total)</td></tr>
 <tr><td class="es-t">ab sofort frei</td><td>disponível já</td></tr></table>
 <div class="ojo">Na Alemanha, muitas vezes o apartamento vem <b>sem cozinha</b> (sem armários, sem fogão)! Pergunte: <span class="es-t">Gibt es eine Küche?</span></div>`},
 {t:'read',title:'Leitura: Zwei Anzeigen',intro:'Você procura um apartamento barato e tranquilo, com varanda, para você sozinho.',text:`A) Bornheim: schöne 2-Zi.-Whg., 55 m², Kü., Bad mit Dusche, Blk., 3. OG, kein Aufzug, ruhig. 650 € KM + 150 € NK. Ab 1. Mai frei.

B) Innenstadt: moderne 4-Zi.-Whg., 110 m², große Kü., 2 Bäder, Garten, EG. 1.600 € warm. Ideal für Familien. Ab sofort frei.`,de:`A) Bornheim: bonito apartamento de 2 cômodos, 55 m², cozinha, banheiro com chuveiro, varanda, 3º andar, sem elevador, tranquilo. 650 € de aluguel + 150 € de despesas. Livre a partir de 1º de maio.

B) Centro: apartamento moderno de 4 cômodos, 110 m², cozinha grande, 2 banheiros, jardim, térreo. 1.600 € com tudo. Ideal para famílias. Livre já.`},
 {t:'mc',q:'Qual anúncio combina com você?',opts:['A','B'],a:0},
 {t:'mc',q:'Wie viel kostet Wohnung A warm?',opts:['800 €','650 €','150 €'],a:0,why:'650 € (KM) + 150 € (NK) = 800 € warm.'},
 {t:'mc',q:'Richtig oder falsch? Wohnung A hat einen Aufzug.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Uma placa na entrada do prédio diz: „Bitte Haustür nach 22 Uhr abschließen!“ O que você deve fazer?',opts:['trancar a porta do prédio depois das 22h','não fazer barulho depois das 22h','fechar as janelas às 22h'],a:0},
 {t:'read',hideText:true,title:'Recado da locadora',intro:'Ouça a mensagem na secretária eletrônica.',text:`Guten Tag, hier ist Frau Klein. Sie möchten die Wohnung in der Bergerstraße besichtigen? Das geht am Donnerstag um achtzehn Uhr. Die Wohnung ist im dritten Stock. Bitte rufen Sie mich zurück. Meine Nummer ist null sechs neun, vier fünf sechs, sieben acht. Auf Wiederhören!`,de:`Bom dia, aqui é a senhora Klein. O senhor quer visitar o apartamento na Bergerstraße? Pode ser na quinta-feira às 18 horas. O apartamento fica no terceiro andar. Por favor, me ligue de volta. Meu número é 069 456 78. Até logo!`},
 {t:'mc',q:'Wann ist die Besichtigung?',opts:['am Donnerstag um 18 Uhr','am Dienstag um 8 Uhr','am Donnerstag um 8 Uhr'],a:0},
 {t:'mc',q:'Wo ist die Wohnung?',opts:['im dritten Stock','im Erdgeschoss','im ersten Stock'],a:0},
 {t:'info',title:'Auf Wiederhören!',html:`<p>No telefone não se diz <i>Auf Wiedersehen</i> (até a vista), mas <span class="es-t">Auf Wiederhören!</span> (“até a próxima vez que eu ouvir você”).</p>`},
 {t:'free',task:'Descreva o seu apartamento ou quarto (~30–40 palavras): cômodos, móveis e o que você acha dele.',hint:'Meine Wohnung hat … Zimmer. Es gibt einen/eine/ein … Das Wohnzimmer ist … Ich finde die Wohnung …',focus:'es gibt + Akkusativ, Adjektive, Möbel, finden + ihn/sie/es',model:'Ich wohne in einer WG in Frankfurt. Mein Zimmer ist klein, aber hell. Es gibt ein Bett, einen Schrank und einen Tisch. Die Küche ist groß und gemütlich. Es gibt keinen Balkon. Ich finde die Wohnung sehr schön.'}
]}],
resumen:`<h3>Cômodos e andares</h3><p class="es-t">das Wohnzimmer · das Schlafzimmer · die Küche · das Bad · der Flur · der Balkon · im Erdgeschoss · im ersten Stock</p>
<h3>es gibt + acusativo</h3><p class="es-t">Es gibt einen Tisch / eine Lampe / ein Bett / keine Möbel. · Gibt es einen Balkon?</p>
<h3>Pronomes</h3><table><tr><th></th><th>nom.</th><th>acus.</th></tr><tr><td>der</td><td class="es-t">er</td><td class="es-t">ihn</td></tr><tr><td>die</td><td class="es-t">sie</td><td class="es-t">sie</td></tr><tr><td>das</td><td class="es-t">es</td><td class="es-t">es</td></tr><tr><td>Pl.</td><td class="es-t">sie</td><td class="es-t">sie</td></tr></table><p class="es-t">Wie findest du den Tisch? – Ich finde ihn schön.</p>
<h3>Anúncios</h3><p>Zi. = cômodo · Kü. = cozinha · Blk. = varanda · OG = andar · KM / NK / warm = aluguel frio / despesas / total</p>`});

/* ================= KAPITEL 6 · TAGESABLAUF & ZEIT ================= */
LANGS.de.course.units.push({id:'k6',n:'6',level:'A1',title:'Tagesablauf & Zeit',sub:'Horas · dias da semana · meses e datas · rotina · verbos separáveis',
goals:['Wie spät ist es? – Es ist halb drei.','offizielle und informelle Uhrzeit','Wochentage, Tageszeiten, Monate, Jahreszeiten','Datum: am ersten Mai','um, am, im, von … bis, ab','trennbare Verben: aufstehen, anfangen, einkaufen …','Satzklammer: Ich stehe um sieben Uhr auf.','Öffnungszeiten verstehen'],
situacion:{title:'Combinar um encontro',npc:'Jana',scene:'A Jana quer ir ao cinema com você nesta semana. Vocês combinam o dia e a hora.',role:'Du bist Jana, Kollegin, locker, du duzt. Du möchtest diese Woche ins Kino gehen. Du kannst nicht am Montag (Sport) und nicht am Mittwoch (Kurs). Schlag Uhrzeiten vor (19 Uhr oder 20:30 Uhr). Frag: Wann hast du Zeit? Wann stehst du am Samstag auf? Sprich sehr einfaches Deutsch (A1).',goal:'Combine com a Jana um dia e uma hora para o cinema. Diga quando você pode e quando não pode.'},
placement:[
 {t:'mc',q:'14:30 – informal:',opts:['halb drei','halb zwei','drei Uhr dreißig'],a:0,why:'<i>halb drei</i> = meia hora <b>antes</b> das três.'},
 {t:'gap',q:'Ich ___ um sieben Uhr ___. (aufstehen)',a:['stehe','auf']},
 {t:'mc',q:'„na segunda-feira“',opts:['am Montag','im Montag','um Montag'],a:0},
 {t:'mc',q:'„em julho“',opts:['im Juli','am Juli','um Juli'],a:0},
 {t:'mc',q:'„Der Kurs fängt um neun Uhr an.“ Quando começa o curso?',opts:['às 9h','às 19h','até as 9h'],a:0},
 {t:'gap',q:'Heute ist der ___ Mai. (1.)',a:['erste']}],
lessons:[
{id:'l1',title:'Que horas são?',desc:'Wie spät ist es? · Viertel, halb',steps:[
 {t:'vocab',title:'Horas',items:[['die Uhr','o relógio / hora (8 Uhr)'],['Wie spät ist es?','Que horas são?'],['Wie viel Uhr ist es?','Que horas são?'],['Es ist drei Uhr.','São três horas.'],['die Stunde','a hora (duração)'],['die Minute','o minuto'],['halb','meia (… e meia)'],['das Viertel','o quarto (de hora)'],['nach','depois / e (horas)'],['vor','antes / para (horas)'],['um … Uhr','às … horas'],['früh','cedo'],['spät','tarde'],['pünktlich','pontual']]},
 {t:'info',title:'Hora oficial e informal',html:`<p><b>Oficial</b> (rádio, estação, trabalho) – como no Brasil, 0–24h: <span class="es-t">Es ist vierzehn Uhr dreißig.</span> (14:30)</p>
 <p><b>Informal</b> (no dia a dia) – 1–12h:</p>
 <table><tr><td>3:05</td><td class="es-t">fünf nach drei</td></tr>
 <tr><td>3:15</td><td class="es-t">Viertel nach drei</td></tr>
 <tr><td>3:30</td><td class="es-t"><b>halb vier</b></td></tr>
 <tr><td>3:45</td><td class="es-t">Viertel vor vier</td></tr>
 <tr><td>3:50</td><td class="es-t">zehn vor vier</td></tr></table>
 <div class="ojo">Cuidado! <span class="es-t">halb vier</span> = 3:30 (meia hora <b>antes</b> das quatro), e <b>não</b> 4:30. É o erro clássico de brasileiros – e você chega uma hora atrasado 😉</div>
 <p>A que horas? → <span class="es-t"><b>um</b> acht Uhr</span> (às 8h). Duração: <span class="es-t">eine Stunde, zwei Stunden</span>.</p>`},
 {t:'mc',q:'„Viertel vor neun“',opts:['8:45','9:15','9:45'],a:0},
 {t:'mc',q:'„halb sieben“',opts:['6:30','7:30','7:00'],a:0,why:'<i>halb sieben</i> = meia hora antes das sete.'},
 {t:'mc',q:'10:15 – informal:',opts:['Viertel nach zehn','Viertel vor zehn','halb zehn'],a:0},
 {t:'listen',es:'Es ist zwanzig nach acht.',de:'São oito e vinte.'},
 {t:'listen',es:'Der Zug kommt um siebzehn Uhr fünfundvierzig.',de:'O trem chega às 17:45.'},
 {t:'gap',q:'Wie ___ ist es? – Es ist halb zwölf.',a:['spät']},
 {t:'gap',q:'Das Meeting ist ___ zehn Uhr. (às)',a:['um']},
 {t:'tr',de:'São três e quinze. (informal)',a:['Es ist Viertel nach drei.']}
]},
{id:'l2',title:'Dias, meses, datas',desc:'Montag … Sonntag · Januar … Dezember · am ersten Mai',steps:[
 {t:'vocab',title:'Dias da semana',items:[['der Montag','a segunda-feira'],['der Dienstag','a terça-feira'],['der Mittwoch','a quarta-feira'],['der Donnerstag','a quinta-feira'],['der Freitag','a sexta-feira'],['der Samstag','o sábado'],['der Sonntag','o domingo'],['das Wochenende','o fim de semana'],['die Woche','a semana'],['heute','hoje'],['morgen','amanhã'],['gestern','ontem']]},
 {t:'vocab',title:'Partes do dia',items:[['der Morgen','a manhã (cedo)'],['der Vormittag','a manhã (até o meio-dia)'],['der Mittag','o meio-dia'],['der Nachmittag','a tarde'],['der Abend','a noite (começo)'],['die Nacht','a noite (madrugada)'],['morgens','de manhã (sempre)'],['abends','à noite (sempre)']]},
 {t:'vocab',title:'Meses e estações',items:[['der Januar','janeiro'],['der Februar','fevereiro'],['der März','março'],['der April','abril'],['der Mai','maio'],['der Juni','junho'],['der Juli','julho'],['der August','agosto'],['der September','setembro'],['der Oktober','outubro'],['der November','novembro'],['der Dezember','dezembro'],['der Monat','o mês'],['der Frühling','a primavera'],['der Sommer','o verão'],['der Herbst','o outono'],['der Winter','o inverno']]},
 {t:'info',title:'um, am, im',html:`<table><tr><td class="es-t"><b>um</b> 8 Uhr</td><td>horas</td></tr>
 <tr><td class="es-t"><b>am</b> Montag, am Wochenende, am Abend, am 1. Mai</td><td>dias, partes do dia, datas</td></tr>
 <tr><td class="es-t"><b>im</b> Juli, im Sommer</td><td>meses, estações</td></tr>
 <tr><td class="es-t"><b>von</b> 9 <b>bis</b> 17 Uhr</td><td>de … até …</td></tr>
 <tr><td class="es-t"><b>ab</b> Montag</td><td>a partir de</td></tr></table>
 <div class="ex">Exceção: <span class="es-t">in der Nacht</span> (de madrugada).</div>
 <div class="ojo">Lembre: no hemisfério norte, <span class="es-t">im Dezember</span> é <b>inverno</b> e <span class="es-t">im Juli</span> é <b>verão</b>!</div>`},
 {t:'info',title:'Datas: der erste, der zweite …',html:`<p>Para datas se usam números ordinais (com ponto na escrita):</p>
 <table><tr><td>1.</td><td class="es-t">der erste</td><td>3.</td><td class="es-t">der dritte</td></tr><tr><td>2.</td><td class="es-t">der zweite</td><td>7.</td><td class="es-t">der siebte</td></tr><tr><td>4.–19.</td><td>+ <b>-te</b>: <span class="es-t">der vierte, der zehnte</span></td><td>20.+</td><td>+ <b>-ste</b>: <span class="es-t">der zwanzigste</span></td></tr></table>
 <p><span class="es-t">Heute ist der 3. Mai.</span> = der dritte Mai · <span class="es-t">Wann hast du Geburtstag? – Am 12. Juni.</span> = am zwölften Juni</p>`},
 {t:'mc',q:'„no fim de semana“',opts:['am Wochenende','im Wochenende','um Wochenende'],a:0},
 {t:'mc',q:'„no inverno“',opts:['im Winter','am Winter','um Winter'],a:0},
 {t:'gap',q:'Ich arbeite ___ Montag ___ Freitag. (de … a …)',a:['von','bis']},
 {t:'gap',q:'Mein Geburtstag ist ___ 7. August. (no dia)',a:['am']},
 {t:'match',q:'Ligue.',pairs:[['der Dienstag','terça'],['der Donnerstag','quinta'],['der Mittwoch','quarta'],['der Herbst','outono'],['gestern','ontem']]},
 {t:'mc',q:'Uma placa: „Praxis Dr. Wolf – Mo–Fr 8–12 Uhr, Di + Do auch 15–18 Uhr“. Você pode ir na quarta à tarde?',opts:['Nein','Ja'],a:0},
 {t:'tr',de:'Amanhã é sábado.',a:['Morgen ist Samstag.']}
]},
{id:'l3',title:'A rotina: verbos separáveis',desc:'aufstehen, anfangen, einkaufen … · Satzklammer',steps:[
 {t:'info',title:'Verbos separáveis',html:`<p>Muitos verbos alemães têm um prefixo que <b>se separa</b> e vai para o <b>fim da frase</b>:</p>
 <table><tr><th>infinitivo</th><th>na frase</th></tr>
 <tr><td class="es-t"><b>auf</b>stehen</td><td class="es-t">Ich stehe um sieben Uhr <b>auf</b>.</td></tr>
 <tr><td class="es-t"><b>an</b>fangen</td><td class="es-t">Der Kurs fängt um neun <b>an</b>.</td></tr>
 <tr><td class="es-t"><b>ein</b>kaufen</td><td class="es-t">Am Samstag kaufe ich <b>ein</b>.</td></tr>
 <tr><td class="es-t"><b>an</b>rufen</td><td class="es-t">Rufst du mich morgen <b>an</b>?</td></tr></table>
 <p>Isso se chama <b>Satzklammer</b> (“parêntese da frase”): o verbo na posição 2, o prefixo no fim – tudo o mais fica no meio.</p>
 <div class="ex"><span class="es-t">Ich <b>rufe</b> dich heute Abend nach dem Training <b>an</b>.</span></div>`},
 {t:'vocab',title:'Rotina',items:[['aufstehen','levantar-se'],['frühstücken','tomar café da manhã'],['duschen','tomar banho'],['anfangen','começar'],['aufhören','parar / terminar'],['arbeiten','trabalhar'],['einkaufen','fazer compras'],['kochen','cozinhar'],['fernsehen','ver televisão'],['anrufen','telefonar'],['abholen','buscar (alguém/algo)'],['mitkommen','vir junto'],['schlafen','dormir'],['ins Bett gehen','ir para a cama'],['immer','sempre'],['oft','muitas vezes'],['manchmal','às vezes'],['nie','nunca'],['zuerst','primeiro'],['dann','depois / então'],['danach','depois disso']]},
 {t:'mc',q:'Qual frase está correta?',opts:['Ich stehe um sechs Uhr auf.','Ich aufstehe um sechs Uhr.','Ich stehe auf um sechs Uhr.'],a:0},
 {t:'gap',q:'Wann ___ der Film ___? (anfangen)',a:['fängt','an'],why:'<i>anfangen</i>: a → ä com du/er (<i>du fängst an, er fängt an</i>).'},
 {t:'gap',q:'Am Samstag ___ ich im Supermarkt ___. (einkaufen)',a:['kaufe','ein']},
 {t:'gap',q:'Tom ___ abends oft ___. (fernsehen)',a:['sieht','fern'],why:'<i>sehen</i> muda: <i>du siehst, er sieht</i>.'},
 {t:'order',es:'Ich rufe dich morgen an',de:'Eu te ligo amanhã.'},
 {t:'order',es:'Kommst du mit',de:'Você vem junto?'},
 {t:'read',title:'Leitura: Ein Tag von Lucas',text:`Ich stehe {meistens|na maioria das vezes} um halb sieben auf. Zuerst dusche ich, dann frühstücke ich: Kaffee und ein Brötchen. Um acht Uhr fahre ich mit der U-Bahn zur Arbeit. Die Arbeit fängt um halb neun an. Mittags esse ich mit Jana in der {Kantine|cantina}. Um siebzehn Uhr höre ich auf. Montags und donnerstags habe ich Deutschkurs. Abends kaufe ich manchmal ein oder ich koche mit Tom. Ich sehe nie fern – ich lese lieber. Um elf Uhr gehe ich ins Bett.`,de:`Na maioria das vezes eu me levanto às seis e meia. Primeiro tomo banho, depois tomo café: café e um pãozinho. Às oito vou de metrô para o trabalho. O trabalho começa às oito e meia. Ao meio-dia como com a Jana na cantina. Às 17h eu paro. Às segundas e quintas tenho curso de alemão. À noite às vezes faço compras ou cozinho com o Tom. Nunca vejo televisão – prefiro ler. Às onze vou para a cama.`},
 {t:'mc',q:'Wann fängt die Arbeit an?',opts:['um 8:30 Uhr','um 6:30 Uhr','um 8 Uhr'],a:0},
 {t:'mc',q:'Richtig oder falsch? Lucas sieht abends oft fern.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Wann hat Lucas Deutschkurs?',opts:['montags und donnerstags','jeden Tag','am Wochenende'],a:0},
 {t:'tr',de:'Eu me levanto às sete.',a:['Ich stehe um sieben Uhr auf.','Ich stehe um sieben auf.']},
 {t:'tr',de:'O curso começa às nove.',a:['Der Kurs fängt um neun Uhr an.','Der Kurs fängt um neun an.','Der Kurs beginnt um neun Uhr.','Der Kurs beginnt um neun.']}
]},
{id:'l4',title:'Combinar e cancelar',desc:'Hast du Zeit? · Termine · Ich kann leider nicht.',steps:[
 {t:'vocab',title:'Combinar',items:[['Hast du Zeit?','Você tem tempo?'],['die Zeit','o tempo'],['der Termin','o compromisso / horário marcado'],['die Verabredung','o encontro (combinado)'],['Wann?','Quando?'],['Geht es am …?','Dá na …?'],['Das geht.','Dá. / Pode ser.'],['Das passt gut.','Fica bom.'],['Ich kann leider nicht.','Infelizmente não posso.'],['vielleicht','talvez'],['das Kino','o cinema'],['der Film','o filme'],['Bis dann!','Até lá!'],['die Entschuldigung','a desculpa'],['Entschuldigung!','Desculpe!']]},
 {t:'dialog',place:'Büro',title:'Cinema com a Jana',scene:'No intervalo, a Jana fala com você.',lines:[
  {n:'Jana',es:'Lucas, hast du diese Woche Zeit? Ich möchte ins Kino gehen.',de:'Lucas, você tem tempo nesta semana? Quero ir ao cinema.'},
  {you:true,opts:[{es:'Ja, gern! Wann?',ok:true},{es:'Ja, gern! Wo wohnst du?',ok:false,why:'A pergunta importante agora é <b>quando</b>.'}]},
  {n:'Jana',es:'Geht es am Dienstag?',de:'Dá na terça?'},
  {you:true,opts:[{es:'Am Dienstag kann ich leider nicht. Aber am Freitag geht es.',ok:true},{es:'Am Dienstag kann ich leider nicht. Aber im Freitag geht es.',ok:false,why:'Dias da semana: <b>am</b> Freitag.'}]},
  {n:'Jana',es:'Super. Der Film fängt um halb neun an.',de:'Ótimo. O filme começa às oito e meia.'},
  {you:true,opts:[{es:'Gut, dann treffen wir uns um acht Uhr am Kino.',ok:true},{es:'Gut, dann treffen wir uns um halb neun um neun Uhr.',ok:false,why:'Combine um horário claro – antes do filme.'}]},
  {n:'Jana',es:'Perfekt. Bis Freitag!',de:'Perfeito. Até sexta!'}]},
 {t:'read',hideText:true,title:'Recado do consultório',intro:'Ouça a mensagem.',text:`Guten Tag, hier ist die Praxis Doktor Wolf. Ihr Termin am Mittwoch um zehn Uhr geht leider nicht. Die Ärztin ist krank. Neuer Termin: Freitag, Viertel nach neun. Bitte bringen Sie Ihre {Versichertenkarte|carteirinha do plano de saúde} mit. Vielen Dank, auf Wiederhören.`,de:`Bom dia, aqui é o consultório do doutor Wolf. Infelizmente sua consulta na quarta às dez horas não vai dar. A médica está doente. Nova consulta: sexta-feira, nove e quinze. Por favor, traga sua carteirinha do plano de saúde. Muito obrigado, até logo.`},
 {t:'mc',q:'Wann ist der neue Termin?',opts:['Freitag, 9:15 Uhr','Mittwoch, 10 Uhr','Freitag, 9:45 Uhr'],a:0},
 {t:'mc',q:'Richtig oder falsch? Die Ärztin ist krank.',opts:['richtig','falsch'],a:0},
 {t:'info',title:'Cancelar por escrito',html:`<p>Mensagem curta para desmarcar – <b>3 pontos</b>: pedir desculpas, dizer o motivo, propor outro horário.</p>
 <div class="ex es-t">Liebe Jana,<br>es tut mir leid, ich kann heute leider nicht ins Kino kommen. Ich bin krank. Geht es vielleicht am Sonntag?<br>Viele Grüße<br>Lucas</div>
 <p><span class="es-t">Es tut mir leid.</span> = Sinto muito.</p>`},
 {t:'free',task:'Escreva para o Tom (~30 palavras): 1) você não pode jantar com ele hoje, 2) por quê, 3) proponha outro dia e horário.',hint:'Hallo Tom, es tut mir leid, ich kann heute leider nicht … Ich muss … / Ich habe … Geht es am … um …? Viele Grüße',focus:'Wochentage, Uhrzeit (am, um), können, trennbare Verben, Entschuldigung',model:'Hallo Tom,\nes tut mir leid, ich kann heute Abend leider nicht mit dir essen. Ich habe um sieben Uhr einen Termin. Geht es am Donnerstag um halb acht?\nViele Grüße\nLucas'},
 {t:'speak',es:'Es tut mir leid, am Montag kann ich leider nicht. Geht es am Dienstag?',de:'Sinto muito, na segunda infelizmente não posso. Dá na terça?',tip:'<i>leid</i> soa “lait” – <b>ei</b> = “ai”, e o <b>d</b> no fim soa como “t”.'}
]}],
resumen:`<h3>Horas</h3><table><tr><td>3:15</td><td class="es-t">Viertel nach drei</td></tr><tr><td>3:30</td><td class="es-t">halb vier</td></tr><tr><td>3:45</td><td class="es-t">Viertel vor vier</td></tr><tr><td>15:30</td><td class="es-t">fünfzehn Uhr dreißig (oficial)</td></tr></table>
<h3>Preposições de tempo</h3><p><span class="es-t">um</span> 8 Uhr · <span class="es-t">am</span> Montag / am Abend / am 1. Mai · <span class="es-t">im</span> Juli / im Sommer · <span class="es-t">von … bis</span> · <span class="es-t">ab</span> Montag</p>
<h3>Datas</h3><p class="es-t">der erste · der zweite · der dritte · der vierte … der zwanzigste · am zwölften Juni</p>
<h3>Verbos separáveis</h3><p class="es-t">aufstehen → Ich stehe um sieben Uhr auf. · anfangen → Der Kurs fängt um neun an. · einkaufen · anrufen · fernsehen · mitkommen · aufhören</p>
<h3>Combinar</h3><p class="es-t">Hast du Zeit? · Geht es am …? · Das passt gut. · Ich kann leider nicht. · Es tut mir leid.</p>`});

/* ================= KAPITEL 7 · FREIZEIT ================= */
LANGS.de.course.units.push({id:'k7',n:'7',level:'A1',title:'Freizeit',sub:'Hobbies · tempo (clima) · können e wollen · convites e festas',
goals:['Hobbys: Sport, Musik, Lesen …','gern – lieber – am liebsten','Modalverben: können, wollen','Satzklammer mit Modalverb: Ich kann gut schwimmen.','Das Wetter: Es regnet. Die Sonne scheint.','Einladungen: Party, Geburtstag, Glückwunsch','Antworten: zusagen, absagen'],
situacion:{title:'Planos para o fim de semana',npc:'Tom',scene:'Sexta à noite na WG. O Tom pergunta o que você vai fazer no fim de semana.',role:'Du bist Tom, Mitbewohner, sportlich, du duzt. Du willst am Samstag wandern gehen (im Taunus) oder, wenn es regnet, ins Schwimmbad. Frag nach Hobbys: Was machst du gern? Kannst du schwimmen? Willst du mitkommen? Sprich sehr einfaches Deutsch (A1).',goal:'Conte do que você gosta de fazer, o que você sabe fazer e decida com o Tom o que vocês fazem no sábado.'},
placement:[
 {t:'mc',q:'„Eu sei nadar.“',opts:['Ich kann schwimmen.','Ich kann schwimme.','Ich schwimmen kann.'],a:0},
 {t:'gap',q:'Tom ___ am Samstag wandern. (wollen)',a:['will']},
 {t:'mc',q:'„Está chovendo.“',opts:['Es regnet.','Es ist Regen.','Es hat Regen.'],a:0},
 {t:'mc',q:'Ich spiele gern Tennis, aber ich spiele ___ Fußball.',opts:['lieber','gerner','mehr gern'],a:0},
 {t:'mc',q:'Aniversário de um amigo. Você diz:',opts:['Herzlichen Glückwunsch!','Gute Besserung!','Guten Appetit!'],a:0},
 {t:'gap',q:'___ du Gitarre spielen? (können)',a:['Kannst']}],
lessons:[
{id:'l1',title:'Hobbies',desc:'Was machst du gern? · gern, lieber, am liebsten',steps:[
 {t:'vocab',title:'Tempo livre',items:[['die Freizeit','o tempo livre'],['das Hobby','o hobby'],['lesen','ler'],['Musik hören','ouvir música'],['singen','cantar'],['tanzen','dançar'],['Sport machen','fazer esporte'],['Fußball spielen','jogar futebol'],['schwimmen','nadar'],['laufen / joggen','correr'],['Rad fahren','andar de bicicleta'],['wandern','fazer trilha / caminhada'],['reisen','viajar'],['fotografieren','fotografar'],['Gitarre spielen','tocar violão'],['Freunde treffen','encontrar amigos'],['ins Kino gehen','ir ao cinema'],['spazieren gehen','passear'],['der Verein','o clube / a associação'],['das Schwimmbad','a piscina (pública)']]},
 {t:'info',title:'gern – lieber – am liebsten',html:`<table><tr><td class="es-t">Ich spiele <b>gern</b> Fußball.</td><td>Gosto de jogar futebol.</td></tr>
 <tr><td class="es-t">Ich schwimme <b>lieber</b>.</td><td>Prefiro nadar.</td></tr>
 <tr><td class="es-t">Ich tanze <b>am liebsten</b>.</td><td>O que eu mais gosto é dançar.</td></tr></table>
 <div class="ex">Perguntas: <span class="es-t">Was machst du gern? Was machst du in deiner Freizeit? Was machst du am liebsten?</span></div>
 <div class="ojo">Verbos com mudança: <span class="es-t">lesen → du liest, er liest</span> · <span class="es-t">fahren → du fährst, er fährt</span> · <span class="es-t">laufen → du läufst, er läuft</span> · <span class="es-t">treffen → du triffst, er trifft</span></div>`},
 {t:'match',q:'Ligue.',pairs:[['wandern','fazer trilha'],['Rad fahren','andar de bicicleta'],['singen','cantar'],['spazieren gehen','passear'],['der Verein','o clube']]},
 {t:'gap',q:'Jana ___ gern Krimis. (lesen)',a:['liest']},
 {t:'gap',q:'Fährst du gern Rad? – Ja, aber ich laufe ___. (prefiro)',a:['lieber']},
 {t:'mc',q:'„O que você faz no seu tempo livre?“',opts:['Was machst du in deiner Freizeit?','Was machst du in deine Freizeit?','Was du machst in der Freizeit?'],a:0},
 {t:'tr',de:'Eu gosto de ouvir música.',a:['Ich höre gern Musik.']},
 {t:'tr',de:'O que eu mais gosto é ler.',a:['Ich lese am liebsten.','Am liebsten lese ich.']},
 {t:'speak',es:'In meiner Freizeit spiele ich gern Fußball und ich höre viel Musik.',de:'No meu tempo livre gosto de jogar futebol e ouço muita música.',tip:'<i>Freizeit</i>: <b>ei</b> = “ai”, <b>z</b> = “ts” → “fraitsait”.'},
 {t:'vocab',title:'Mais palavras: mídia e diversão',items:[['das Internet', 'a internet'], ['anklicken', 'clicar'], ['die Zeitung', 'o jornal'], ['das Lied', 'a canção'], ['die CD', 'o CD'], ['die Disco', 'a discoteca / a balada'], ['lachen', 'rir'], ['mitmachen', 'participar'], ['gewinnen', 'ganhar (jogo / prêmio)'], ['bekannt', 'conhecido'], ['international', 'internacional'], ['kulturell', 'cultural']]},
 {t:'match',q:'Ligue as palavras novas.',pairs:[['das Lied', 'a canção'], ['lachen', 'rir'], ['gewinnen', 'ganhar'], ['die Zeitung', 'o jornal'], ['mitmachen', 'participar']]}
]},
{id:'l2',title:'können e wollen',desc:'Ich kann … · Ich will … · Satzklammer',steps:[
 {t:'info',title:'Verbos modais',html:`<table><tr><th></th><th>können <span class="muted">(poder / saber)</span></th><th>wollen <span class="muted">(querer)</span></th></tr>
 <tr><td>ich</td><td class="es-t">kann</td><td class="es-t">will</td></tr>
 <tr><td>du</td><td class="es-t">kannst</td><td class="es-t">willst</td></tr>
 <tr><td>er / sie</td><td class="es-t">kann</td><td class="es-t">will</td></tr>
 <tr><td>wir</td><td class="es-t">können</td><td class="es-t">wollen</td></tr>
 <tr><td>ihr</td><td class="es-t">könnt</td><td class="es-t">wollt</td></tr>
 <tr><td>sie / Sie</td><td class="es-t">können</td><td class="es-t">wollen</td></tr></table>
 <p>Atenção: <b>ich</b> e <b>er/sie</b> são iguais e <b>sem -t</b>: <span class="es-t">ich kann, er kann</span>.</p>
 <p>O segundo verbo vai no <b>infinitivo</b>, no <b>fim da frase</b> (Satzklammer):</p>
 <div class="ex"><span class="es-t">Ich <b>kann</b> sehr gut <b>schwimmen</b>.</span><br><span class="es-t"><b>Willst</b> du am Samstag <b>mitkommen</b>?</span></div>
 <div class="ojo"><span class="es-t">können</span> = poder <b>e</b> saber fazer: <span class="es-t">Ich kann Gitarre spielen.</span> = Eu sei tocar violão. <span class="es-t">wollen</span> é forte (“querer”) – para pedir algo, use <span class="es-t">möchten</span>.</div>`},
 {t:'mc',q:'Qual frase está correta?',opts:['Ich kann gut tanzen.','Ich kann tanzen gut.','Ich kann gut tanze.'],a:0},
 {t:'gap',q:'Tom ___ sehr gut kochen. (können)',a:['kann']},
 {t:'gap',q:'Wir ___ am Wochenende nach Berlin fahren. (wollen)',a:['wollen']},
 {t:'gap',q:'___ ihr Deutsch sprechen? (können)',a:['Könnt']},
 {t:'order',es:'Willst du am Samstag mitkommen',de:'Você quer vir junto no sábado?'},
 {t:'order',es:'Ich kann leider nicht schwimmen',de:'Infelizmente eu não sei nadar.'},
 {t:'tr',de:'Você sabe tocar violão? (informal)',a:['Kannst du Gitarre spielen?']},
 {t:'tr',de:'Ela quer viajar.',a:['Sie will reisen.']}
]},
{id:'l3',title:'O tempo',desc:'Es regnet. Die Sonne scheint. Es ist kalt.',steps:[
 {t:'vocab',title:'Tempo',items:[['das Wetter','o tempo (clima)'],['die Sonne','o sol'],['Die Sonne scheint.','O sol está brilhando.'],['der Regen','a chuva'],['Es regnet.','Está chovendo.'],['der Schnee','a neve'],['Es schneit.','Está nevando.'],['der Wind','o vento'],['die Wolke','a nuvem'],['warm','quente / morno'],['heiß','muito quente'],['kalt','frio'],['kühl','fresco'],['schön','bonito (tempo bom)'],['schlecht','ruim'],['der Grad','o grau'],['minus','menos (abaixo de zero)']]},
 {t:'info',title:'Falar do tempo',html:`<table><tr><td class="es-t">Wie ist das Wetter?</td><td>Como está o tempo?</td></tr>
 <tr><td class="es-t">Es ist schön / kalt / warm.</td><td>Está bonito / frio / quente.</td></tr>
 <tr><td class="es-t">Es regnet. Es schneit.</td><td>Está chovendo. Está nevando.</td></tr>
 <tr><td class="es-t">Es sind 25 Grad.</td><td>Faz 25 graus.</td></tr>
 <tr><td class="es-t">Es ist minus fünf Grad.</td><td>Faz cinco graus abaixo de zero.</td></tr></table>
 <div class="ex">Sempre com <b>es</b> – como “está” em português, mas o <b>es</b> é obrigatório.</div>
 <div class="ojo">Para um brasileiro, 15 graus é frio 🥶 – para um alemão, <span class="es-t">15 Grad</span> no verão já é <span class="es-t">kühl</span>, mas na primavera é <span class="es-t">schön warm</span>!</div>`},
 {t:'mc',q:'„Está nevando.“',opts:['Es schneit.','Es ist Schnee.','Schneit.'],a:0},
 {t:'gap',q:'Heute ___ die Sonne. Es ist warm. (scheinen)',a:['scheint']},
 {t:'read',hideText:true,title:'Previsão do tempo no rádio',intro:'Ouça a previsão do tempo.',text:`Und jetzt das Wetter für Frankfurt und Umgebung. Heute bleibt es kalt, nur acht Grad, und am Nachmittag regnet es. Morgen, am Samstag, scheint die Sonne. Es wird warm, bis zu achtzehn Grad. Am Sonntag gibt es viele Wolken und Wind.`,de:`E agora o tempo para Frankfurt e região. Hoje continua frio, só oito graus, e à tarde chove. Amanhã, sábado, o sol brilha. Vai esquentar, até dezoito graus. No domingo há muitas nuvens e vento.`},
 {t:'mc',q:'Wie ist das Wetter am Samstag?',opts:['Die Sonne scheint.','Es regnet.','Es schneit.'],a:0},
 {t:'mc',q:'Wie warm ist es heute?',opts:['8 Grad','18 Grad','80 Grad'],a:0},
 {t:'mc',q:'Wann ist das Wetter gut zum Wandern?',opts:['am Samstag','heute','am Sonntag'],a:0},
 {t:'tr',de:'Hoje está frio e está chovendo.',a:['Heute ist es kalt und es regnet.','Heute ist es kalt und regnet es.']}
]},
{id:'l4',title:'Convites e festas',desc:'Einladung · Geburtstag · zusagen, absagen',steps:[
 {t:'vocab',title:'Festas',items:[['die Party','a festa'],['das Fest','a festa / a festividade'],['feiern','comemorar'],['einladen','convidar'],['die Einladung','o convite'],['der Geburtstag','o aniversário'],['Herzlichen Glückwunsch!','Parabéns!'],['Alles Gute zum Geburtstag!','Feliz aniversário!'],['gratulieren','dar os parabéns'],['das Geschenk','o presente'],['mitbringen','levar (junto)'],['der Gast, die Gäste','o convidado, os convidados'],['zusagen','confirmar (que vai)'],['absagen','cancelar / recusar'],['Ich komme gern!','Vou com prazer!'],['Leider kann ich nicht kommen.','Infelizmente não posso ir.']]},
 {t:'read',title:'Leitura: Eine Einladung',text:`Liebe Kolleginnen und Kollegen,
am Freitag, den 14. Juni, werde ich dreißig! Das möchte ich mit euch feiern. Die Party ist bei mir zu Hause, in der Gartenstraße 8, ab neunzehn Uhr. Es gibt Pizza und Getränke. Ihr müsst nichts mitbringen – nur gute Laune! Bitte sagt mir bis Mittwoch Bescheid, ob ihr kommt.
Viele Grüße
Jana`,de:`Queridas colegas e queridos colegas,
na sexta-feira, 14 de junho, eu faço trinta anos! Quero comemorar com vocês. A festa é na minha casa, na Gartenstraße 8, a partir das 19 horas. Tem pizza e bebidas. Vocês não precisam levar nada – só bom humor! Por favor, me avisem até quarta-feira se vocês vêm.
Abraços,
Jana`},
 {t:'mc',q:'Warum feiert Jana?',opts:['Sie hat Geburtstag.','Sie hat eine neue Wohnung.','Sie hat einen neuen Job.'],a:0},
 {t:'mc',q:'Richtig oder falsch? Die Gäste müssen Essen mitbringen.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Bis wann soll man antworten?',opts:['bis Mittwoch','bis Freitag','bis zum 14. Juni'],a:0},
 {t:'info',title:'Responder a um convite',html:`<table><tr><th>sim</th><th>não</th></tr>
 <tr><td class="es-t">Vielen Dank für die Einladung! Ich komme gern.</td><td class="es-t">Vielen Dank für die Einladung, aber leider kann ich nicht kommen.</td></tr>
 <tr><td class="es-t">Soll ich etwas mitbringen?</td><td class="es-t">Ich bin am Freitag in Hamburg. / Ich muss arbeiten.</td></tr>
 <tr><td class="es-t">Bis Freitag!</td><td class="es-t">Ich wünsche dir eine schöne Party!</td></tr></table>`},
 {t:'dialog',place:'Gartenstraße 8',title:'Na festa da Jana',scene:'Você chega à festa de aniversário da Jana com um presente.',lines:[
  {n:'Jana',es:'Hallo Lucas! Schön, dass du da bist!',de:'Oi, Lucas! Que bom que você veio!'},
  {you:true,opts:[{es:'Hallo Jana! Herzlichen Glückwunsch zum Geburtstag! Das ist für dich.',ok:true},{es:'Hallo Jana! Gute Besserung!',ok:false,why:'<i>Gute Besserung</i> se diz para quem está doente.'}]},
  {n:'Jana',es:'Oh, ein Geschenk! Danke! Was möchtest du trinken?',de:'Ah, um presente! Obrigada! O que você quer beber?'},
  {you:true,opts:[{es:'Ein Wasser, bitte. Ich muss noch Auto fahren.',ok:true},{es:'Ich will Bier! Schnell!',ok:false,why:'Um pouco educado demais… não 😉 Use <i>möchte</i> ou <i>gern</i>.'}]},
  {n:'Jana',es:'Kein Problem. Komm, ich stelle dir meine Freunde vor!',de:'Sem problema. Vem, vou te apresentar meus amigos!'}]},
 {t:'free',task:'Responda ao convite da Jana (~30 palavras): 1) agradeça, 2) diga que vai (ou não) e por quê, 3) pergunte se deve levar algo / deseje uma boa festa.',hint:'Liebe Jana, vielen Dank für die Einladung! Ich komme gern / Leider kann ich nicht … Soll ich … mitbringen? Viele Grüße',focus:'Einladung beantworten, können, mitbringen (trennbar), Datum',model:'Liebe Jana,\nvielen Dank für die Einladung! Ich komme sehr gern. Soll ich etwas mitbringen? Ich kann einen Kuchen backen. Ich freue mich auf Freitag!\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Hobbies</h3><p class="es-t">lesen · Musik hören · Sport machen · schwimmen · wandern · Rad fahren · tanzen · Freunde treffen</p><p class="es-t">gern – lieber – am liebsten</p>
<h3>Modais + infinitivo no fim</h3><table><tr><th></th><th>können</th><th>wollen</th></tr><tr><td>ich / er</td><td class="es-t">kann</td><td class="es-t">will</td></tr><tr><td>du</td><td class="es-t">kannst</td><td class="es-t">willst</td></tr><tr><td>wir / sie</td><td class="es-t">können</td><td class="es-t">wollen</td></tr><tr><td>ihr</td><td class="es-t">könnt</td><td class="es-t">wollt</td></tr></table><p class="es-t">Ich kann gut schwimmen. · Willst du mitkommen?</p>
<h3>Tempo</h3><p class="es-t">Wie ist das Wetter? · Die Sonne scheint. · Es regnet. · Es schneit. · Es ist kalt. · Es sind 20 Grad.</p>
<h3>Convites</h3><p class="es-t">Herzlichen Glückwunsch! · Vielen Dank für die Einladung! · Ich komme gern. · Leider kann ich nicht kommen.</p>`});

/* ================= KAPITEL 8 · IN DER STADT ================= */
LANGS.de.course.units.push({id:'k8',n:'8',level:'A1',title:'In der Stadt',sub:'Lugares · transporte · dativo · pedir e dar direções · imperativo · müssen, dürfen',
goals:['Orte: Bahnhof, Post, Bank, Apotheke …','Verkehrsmittel: mit dem Bus, mit der U-Bahn','Dativ nach mit, zu, in, bei, von, aus','Wie komme ich zum Bahnhof?','links, rechts, geradeaus','Imperativ: Gehen Sie … / Geh …','müssen, dürfen · Schilder verstehen','Am Bahnhof: Fahrkarte, Gleis, umsteigen'],
situacion:{title:'Perdido na cidade',npc:'Passantin',scene:'Você está na Konstablerwache, no centro de Frankfurt, e procura o museu Städel.',role:'Du bist eine Passantin in Frankfurt, hilfsbereit. Du siezt. Erkläre den Weg zum Städel-Museum: geradeaus bis zum Main, dann über die Brücke, dann rechts, ca. 15 Minuten zu Fuß – oder mit der U-Bahn bis Schweizer Platz. Sprich sehr einfaches Deutsch (A1), langsam.',goal:'Pergunte o caminho até o museu, pergunte se é longe e se dá para ir de metrô. Agradeça.'},
placement:[
 {t:'mc',q:'„Eu vou de ônibus.“',opts:['Ich fahre mit dem Bus.','Ich fahre mit der Bus.','Ich fahre mit den Bus.'],a:0},
 {t:'mc',q:'„Como chego à estação?“',opts:['Wie komme ich zum Bahnhof?','Wie komme ich zu der Bahnhof?','Wie komme ich in Bahnhof?'],a:0},
 {t:'gap',q:'___ Sie geradeaus und dann links! (gehen – imperativo)',a:['Gehen']},
 {t:'mc',q:'Placa: „Rauchen verboten“',opts:['Aqui não se pode fumar.','Aqui se pode fumar.','Aqui se vende cigarro.'],a:0},
 {t:'gap',q:'Hier ___ man nicht parken. (dürfen)',a:['darf']},
 {t:'gap',q:'Ich ___ heute zum Arzt gehen. (müssen)',a:['muss']}],
lessons:[
{id:'l1',title:'Lugares na cidade',desc:'Bahnhof, Post, Apotheke … · Wo ist …?',steps:[
 {t:'vocab',title:'Na cidade',items:[['die Stadt','a cidade'],['das Zentrum','o centro'],['die Straße','a rua'],['der Platz','a praça / o lugar'],['die Ecke','a esquina / o canto'],['der Bahnhof','a estação de trem'],['die Haltestelle','o ponto (de ônibus)'],['der Flughafen','o aeroporto'],['die Post','os correios'],['die Bank','o banco'],['die Apotheke','a farmácia'],['das Krankenhaus','o hospital'],['die Polizei','a polícia'],['das Rathaus','a prefeitura'],['das Museum','o museu'],['der Park','o parque'],['die Kirche','a igreja'],['das Hotel','o hotel'],['der Parkplatz','o estacionamento'],['in der Nähe','perto'],['weit','longe / largo'],['hier','aqui'],['dort','ali / lá']]},
 {t:'info',title:'Onde fica? – o dativo com „in“',html:`<p>Para dizer <b>onde</b> algo está, <span class="es-t">in</span> pede o <b>dativo</b>. O artigo muda:</p>
 <table><tr><th></th><th>nominativo</th><th>dativo (onde?)</th></tr>
 <tr><td>m</td><td class="es-t">der Park</td><td class="es-t">in <b>dem</b> Park = <b>im</b> Park</td></tr>
 <tr><td>f</td><td class="es-t">die Stadt</td><td class="es-t">in <b>der</b> Stadt</td></tr>
 <tr><td>n</td><td class="es-t">das Zentrum</td><td class="es-t">in <b>dem</b> Zentrum = <b>im</b> Zentrum</td></tr>
 <tr><td>Pl.</td><td class="es-t">die Geschäfte</td><td class="es-t">in <b>den</b> Geschäfte<b>n</b></td></tr></table>
 <div class="ex"><span class="es-t">Wo ist die Apotheke? – Im Zentrum, in der Bergerstraße.</span></div>
 <div class="ojo">Você já conhece: <span class="es-t">im Juli, am Montag</span> – também dativo (<i>in dem → im, an dem → am</i>).</div>`},
 {t:'mc',q:'Wo kauft man Medikamente?',opts:['in der Apotheke','in der Post','im Rathaus'],a:0},
 {t:'mc',q:'Ich wohne ___ Zentrum.',opts:['im','in der','in den'],a:0,why:'<i>das Zentrum</i> → in dem = <b>im</b>.'},
 {t:'gap',q:'Der Bus hält ___ der Haltestelle „Römer“. (em – an + dativo, feminino)',a:['an']},
 {t:'gap',q:'Tom ist ___ Park. (no)',a:['im']},
 {t:'match',q:'Ligue.',pairs:[['die Haltestelle','o ponto de ônibus'],['das Krankenhaus','o hospital'],['das Rathaus','a prefeitura'],['in der Nähe','perto'],['die Ecke','a esquina / o canto']]},
 {t:'tr',de:'A farmácia é perto.',a:['Die Apotheke ist in der Nähe.']}
]},
{id:'l2',title:'Transporte',desc:'mit dem Bus · Fahrkarte · umsteigen',steps:[
 {t:'vocab',title:'Meios de transporte',items:[['der Bus','o ônibus'],['die U-Bahn','o metrô'],['die S-Bahn','o trem urbano'],['die Straßenbahn','o bonde'],['der Zug','o trem'],['das Auto','o carro'],['das Fahrrad','a bicicleta'],['das Taxi','o táxi'],['das Flugzeug','o avião'],['zu Fuß','a pé'],['fahren','ir (de veículo)'],['fliegen','voar'],['die Fahrkarte','a passagem / o bilhete'],['das Ticket','o bilhete'],['der Fahrplan','o horário (de transporte)'],['abfahren','partir'],['ankommen','chegar'],['einsteigen','embarcar / entrar'],['aussteigen','descer / sair'],['umsteigen','fazer baldeação'],['das Gleis','a plataforma (número)'],['die Verspätung','o atraso']]},
 {t:'info',title:'mit + dativo',html:`<p><b>mit</b> sempre pede o dativo:</p>
 <table><tr><td class="es-t">der Bus</td><td class="es-t">mit <b>dem</b> Bus</td></tr>
 <tr><td class="es-t">die U-Bahn</td><td class="es-t">mit <b>der</b> U-Bahn</td></tr>
 <tr><td class="es-t">das Auto</td><td class="es-t">mit <b>dem</b> Auto</td></tr>
 <tr><td class="es-t">die Freunde</td><td class="es-t">mit <b>den</b> Freunde<b>n</b></td></tr></table>
 <p>Mas: <span class="es-t">zu Fuß</span> (a pé) – sem <i>mit</i>.</p>
 <div class="ex"><b>fahren</b> = ir com um veículo; <b>gehen</b> = ir a pé. <span class="es-t">Ich fahre mit dem Zug nach Berlin.</span> · <span class="es-t">Ich gehe zu Fuß.</span></div>`},
 {t:'mc',q:'Ich fahre ___ U-Bahn zur Arbeit.',opts:['mit der','mit dem','mit die'],a:0},
 {t:'mc',q:'Sie fährt ___ Fahrrad.',opts:['mit dem','mit der','mit das'],a:0},
 {t:'gap',q:'In Mainz muss ich ___. (fazer baldeação)',a:['umsteigen']},
 {t:'read',hideText:true,title:'Aviso na estação',intro:'Ouça o aviso na estação central (Hauptbahnhof).',text:`Achtung an Gleis sieben! Der ICE nach Berlin, Abfahrt vierzehn Uhr zwölf, hat heute zwanzig Minuten Verspätung. Der Zug fährt heute von Gleis neun ab. Ich wiederhole: Der ICE nach Berlin fährt heute von Gleis neun.`,de:`Atenção na plataforma sete! O ICE para Berlim, partida às 14h12, está hoje com vinte minutos de atraso. O trem parte hoje da plataforma nove. Repito: o ICE para Berlim parte hoje da plataforma nove.`},
 {t:'mc',q:'Von welchem Gleis fährt der Zug nach Berlin?',opts:['von Gleis 9','von Gleis 7','von Gleis 14'],a:0},
 {t:'mc',q:'Richtig oder falsch? Der Zug ist pünktlich.',opts:['falsch','richtig'],a:0},
 {t:'dialog',place:'Fahrkartenschalter',title:'Comprar uma passagem',scene:'No guichê da estação central. Você quer ir a Heidelberg no sábado.',lines:[
  {n:'Mitarbeiter',es:'Guten Tag, was kann ich für Sie tun?',de:'Bom dia, em que posso ajudar?'},
  {you:true,opts:[{es:'Eine Fahrkarte nach Heidelberg, bitte.',ok:true},{es:'Eine Fahrkarte in Heidelberg, bitte.',ok:false,why:'Para cidades (destino): <b>nach</b> Heidelberg.'}]},
  {n:'Mitarbeiter',es:'Einfach oder hin und zurück?',de:'Só ida ou ida e volta?'},
  {you:true,opts:[{es:'Hin und zurück, bitte. Muss ich umsteigen?',ok:true},{es:'Einfach zurück, bitte.',ok:false,why:'<i>einfach</i> = só ida; <i>hin und zurück</i> = ida e volta.'}]},
  {n:'Mitarbeiter',es:'Ja, in Mannheim. Der Zug fährt um neun Uhr zehn von Gleis vier. Das macht achtunddreißig Euro.',de:'Sim, em Mannheim. O trem sai às 9h10 da plataforma quatro. São trinta e oito euros.'},
  {you:true,opts:[{es:'Kann ich mit Karte bezahlen?',ok:true},{es:'Wo ist Gleis Mannheim?',ok:false,why:'Mannheim é a cidade da baldeação; a plataforma é a <b>4</b>.'}]}]},
 {t:'tr',de:'Eu vou a pé.',a:['Ich gehe zu Fuß.']},
 {t:'tr',de:'Ela vai de trem para Berlim.',a:['Sie fährt mit dem Zug nach Berlin.']},
 {t:'vocab',title:'Mais palavras: trânsito e serviços',items:[['die Autobahn', 'a rodovia'], ['der Fahrer / die Fahrerin', 'o motorista'], ['der Lkw', 'o caminhão'], ['der Bahnsteig', 'a plataforma'], ['eilig', 'com pressa / urgente'], ['gleich', 'já / logo; igual'], ['weiter', 'adiante / continuar'], ['der Beamte / die Beamtin', 'o funcionário público'], ['der Absender', 'o remetente'], ['abgeben', 'entregar'], ['das Fax', 'o fax'], ['das Feuer', 'o fogo'], ['die Zigarette', 'o cigarro'], ['erlauben', 'permitir'], ['automatisch', 'automático'], ['der Ort', 'o lugar / a localidade']]},
 {t:'match',q:'Ligue as palavras novas.',pairs:[['die Autobahn', 'a rodovia'], ['der Lkw', 'o caminhão'], ['eilig', 'com pressa'], ['der Absender', 'o remetente'], ['erlauben', 'permitir']]}
]},
{id:'l3',title:'Pedir e dar direções',desc:'Wie komme ich zum …? · links, rechts, geradeaus · Imperativ',steps:[
 {t:'vocab',title:'Direções',items:[['Wie komme ich zum / zur …?','Como chego ao / à …?'],['links','à esquerda'],['rechts','à direita'],['geradeaus','em frente / reto'],['die erste / zweite Straße','a primeira / segunda rua'],['bis zur Ampel','até o semáforo'],['die Ampel','o semáforo'],['über die Straße','atravessando a rua'],['neben','ao lado de'],['vor','em frente a / antes de'],['hinter','atrás de'],['zwischen','entre'],['gegenüber','em frente (do outro lado)'],['Entschuldigung, …','Com licença, …']]},
 {t:'info',title:'zu + dativo: zum, zur',html:`<p>Para dizer <b>para onde</b> (pessoa ou lugar, não cidade), use <b>zu</b> + dativo:</p>
 <table><tr><td class="es-t">der Bahnhof</td><td class="es-t">zu dem → <b>zum</b> Bahnhof</td></tr>
 <tr><td class="es-t">die Post</td><td class="es-t">zu der → <b>zur</b> Post</td></tr>
 <tr><td class="es-t">das Museum</td><td class="es-t">zu dem → <b>zum</b> Museum</td></tr></table>
 <p>Cidades e países: <span class="es-t">nach Berlin, nach Österreich</span>. Para casa: <span class="es-t">nach Hause</span>. Em casa: <span class="es-t">zu Hause</span>.</p>
 <div class="ex">Outras preposições com dativo: <span class="es-t">bei</span> (na casa de / em): <span class="es-t">beim Arzt, bei Jana</span> · <span class="es-t">von</span> (de): <span class="es-t">vom Bahnhof</span> · <span class="es-t">aus</span> (de dentro): <span class="es-t">aus dem Haus</span>.</div>`},
 {t:'info',title:'O imperativo',html:`<table><tr><th></th><th>Sie (formal)</th><th>du (informal)</th></tr>
 <tr><td>gehen</td><td class="es-t">Gehen Sie geradeaus!</td><td class="es-t">Geh geradeaus!</td></tr>
 <tr><td>nehmen</td><td class="es-t">Nehmen Sie den Bus!</td><td class="es-t">Nimm den Bus!</td></tr>
 <tr><td>kommen</td><td class="es-t">Kommen Sie bitte mit!</td><td class="es-t">Komm bitte mit!</td></tr>
 <tr><td>sein</td><td class="es-t">Seien Sie pünktlich!</td><td class="es-t">Sei pünktlich!</td></tr></table>
 <p><b>Sie</b>: verbo + Sie. <b>du</b>: forma do <i>du</i> sem <b>-st</b> e sem o pronome (<i>du gehst → geh!</i>, <i>du nimmst → nimm!</i>).</p>
 <div class="ojo">Com <b>bitte</b> fica educado: <span class="es-t">Warten Sie bitte hier.</span></div>`},
 {t:'mc',q:'Wie komme ich ___ Post?',opts:['zur','zum','zu die'],a:0},
 {t:'mc',q:'Wie komme ich ___ Bahnhof?',opts:['zum','zur','nach'],a:0},
 {t:'mc',q:'Ich fahre am Wochenende ___ Hamburg.',opts:['nach','zu','in der'],a:0},
 {t:'gap',q:'___ Sie die zweite Straße rechts! (nehmen)',a:['Nehmen']},
 {t:'gap',q:'Tom, ___ bitte das Fenster zu! (machen – du)',a:['mach|mache']},
 {t:'dialog',place:'Konstablerwache',title:'Onde fica a farmácia?',scene:'Você precisa de uma farmácia e pergunta a um senhor na rua.',lines:[
  {you:true,opts:[{es:'Entschuldigung, wo ist hier eine Apotheke?',ok:true},{es:'Hallo, Apotheke wo?',ok:false,why:'Comece com <i>Entschuldigung</i> e faça a frase completa.'}]},
  {n:'Mann',es:'Gehen Sie hier geradeaus bis zur Ampel. Dann links. Die Apotheke ist neben der Bank.',de:'Siga em frente até o semáforo. Depois à esquerda. A farmácia fica ao lado do banco.'},
  {you:true,opts:[{es:'Also geradeaus, dann links, neben der Bank. Ist das weit?',ok:true},{es:'Also rechts und dann geradeaus?',ok:false,why:'Ele disse: em frente, depois à <b>esquerda</b> (links).'}]},
  {n:'Mann',es:'Nein, nur fünf Minuten zu Fuß.',de:'Não, só cinco minutos a pé.'},
  {you:true,opts:[{es:'Vielen Dank!',ok:true},{es:'Bitte schön!',ok:false,why:'Quem agradece é você: <i>Vielen Dank!</i>'}]}]},
 {t:'tr',de:'Com licença, como chego ao museu?',a:['Entschuldigung, wie komme ich zum Museum?']},
 {t:'tr',de:'Vire à direita! (formal)',a:['Gehen Sie rechts!','Gehen Sie nach rechts!','Biegen Sie rechts ab!']}
]},
{id:'l4',title:'Regras e placas',desc:'müssen, dürfen · Schilder · Post und Bank',steps:[
 {t:'info',title:'müssen e dürfen',html:`<table><tr><th></th><th>müssen <span class="muted">(ter que)</span></th><th>dürfen <span class="muted">(poder – ter permissão)</span></th></tr>
 <tr><td>ich / er / sie</td><td class="es-t">muss</td><td class="es-t">darf</td></tr>
 <tr><td>du</td><td class="es-t">musst</td><td class="es-t">darfst</td></tr>
 <tr><td>wir / sie / Sie</td><td class="es-t">müssen</td><td class="es-t">dürfen</td></tr>
 <tr><td>ihr</td><td class="es-t">müsst</td><td class="es-t">dürft</td></tr></table>
 <div class="ex"><span class="es-t">Hier darf man nicht rauchen.</span> = Aqui não se pode fumar.<br><span class="es-t">Sie müssen eine Fahrkarte kaufen.</span> = O senhor tem que comprar um bilhete.</div>
 <p><b>man</b> = “se” / “a gente” (geral): <span class="es-t">Hier darf man parken.</span></p>
 <div class="ojo"><span class="es-t">können</span> = é possível / sei fazer; <span class="es-t">dürfen</span> = tenho permissão. Na placa é sempre <i>dürfen</i>.</div>`},
 {t:'vocab',title:'Placas e serviços',items:[['verboten','proibido'],['rauchen','fumar'],['parken','estacionar'],['der Eingang','a entrada'],['der Ausgang','a saída'],['geöffnet','aberto'],['geschlossen','fechado'],['Vorsicht!','Cuidado!'],['Achtung!','Atenção!'],['der Brief','a carta'],['die Briefmarke','o selo'],['das Paket','o pacote'],['schicken','enviar'],['das Geld','o dinheiro'],['das Konto','a conta (bancária)'],['überweisen','transferir (dinheiro)']]},
 {t:'mc',q:'Placa: „Eingang nur für Mitarbeiter“. Você pode entrar?',opts:['Não, só funcionários.','Sim, é a entrada principal.','Sim, mas só de manhã.'],a:0},
 {t:'mc',q:'Placa no museu: „Fotografieren verboten!“',opts:['Hier darf man nicht fotografieren.','Hier muss man fotografieren.','Hier kann man Fotos kaufen.'],a:0},
 {t:'mc',q:'Placa na loja: „Wegen Urlaub geschlossen bis 15.8.“',opts:['A loja está fechada até 15/8 por férias.','A loja abre só em agosto pela manhã.','A loja tem promoção de férias.'],a:0},
 {t:'gap',q:'Du ___ hier nicht parken. Das ist verboten. (dürfen)',a:['darfst']},
 {t:'gap',q:'Wir ___ morgen früh aufstehen. (müssen)',a:['müssen']},
 {t:'order',es:'Hier darf man nicht rauchen',de:'Aqui não se pode fumar.'},
 {t:'dialog',place:'Post',title:'Nos correios',scene:'Você quer mandar um pacote para a sua família no seu país.',lines:[
  {n:'Mitarbeiterin',es:'Guten Tag! Bitte schön?',de:'Bom dia! Pois não?'},
  {you:true,opts:[{es:'Ich möchte dieses Paket nach Brasilien schicken.',ok:true},{es:'Ich möchte dieses Paket in Brasilien schicken.',ok:false,why:'Destino (país): <b>nach</b> Brasilien.'}]},
  {n:'Mitarbeiterin',es:'Gern. Sie müssen dieses Formular ausfüllen.',de:'Pois não. O senhor precisa preencher este formulário.'},
  {you:true,opts:[{es:'Okay. Was kostet das?',ok:true},{es:'Darf ich das Formular essen?',ok:false,why:'😄 Pergunte o preço: <i>Was kostet das?</i>'}]},
  {n:'Mitarbeiterin',es:'Das kostet achtundvierzig Euro neunundneunzig.',de:'Custa quarenta e oito euros e noventa e nove.'}]},
 {t:'tr',de:'Você tem que preencher o formulário. (informal)',a:['Du musst das Formular ausfüllen.']},
 {t:'free',task:'Seu amigo vai visitar você. Escreva (~30 palavras) como ele chega da estação até a sua casa: meio de transporte, onde descer, o caminho.',hint:'Nimm am Bahnhof die U-Bahn / den Bus … Steig an der Haltestelle … aus. Dann geh … links / rechts … Ich wohne neben …',focus:'Imperativ (du), mit + Dativ, trennbare Verben (aussteigen, umsteigen), links/rechts/geradeaus',model:'Hallo Rafael,\nnimm am Hauptbahnhof die U-Bahn Nummer 4. Steig an der Haltestelle „Bornheim Mitte“ aus. Dann geh geradeaus und die zweite Straße links. Ich wohne neben der Bäckerei, Nummer 12.\nBis Samstag!'}
]}],
resumen:`<h3>Dativo (onde? com quem? com quê?)</h3><table><tr><th></th><th>nom.</th><th>dat.</th></tr><tr><td>m</td><td class="es-t">der</td><td class="es-t">dem (im, am, zum, beim, vom)</td></tr><tr><td>f</td><td class="es-t">die</td><td class="es-t">der (zur)</td></tr><tr><td>n</td><td class="es-t">das</td><td class="es-t">dem</td></tr><tr><td>Pl.</td><td class="es-t">die</td><td class="es-t">den …n</td></tr></table>
<p>Sempre dativo: <span class="es-t">mit, zu, bei, von, aus, nach</span> · lugar (onde?): <span class="es-t">in, an, auf, neben, vor, hinter, zwischen</span></p>
<h3>Para onde?</h3><p class="es-t">zum Bahnhof · zur Post · nach Berlin · nach Hause · (zu Hause = em casa)</p>
<h3>Imperativo</h3><p class="es-t">Gehen Sie geradeaus! · Nehmen Sie den Bus! · Geh! · Nimm! · Komm! · Sei pünktlich!</p>
<h3>müssen / dürfen</h3><p class="es-t">ich muss, du musst · ich darf, du darfst · Hier darf man nicht rauchen.</p>`});

/* ================= KAPITEL 9 · ARBEIT & BERUF ================= */
LANGS.de.course.units.push({id:'k9',n:'9',level:'A1',title:'Arbeit & Beruf',sub:'Profissões · no trabalho · ao telefone · und, aber, oder, denn · Perfekt · war, hatte',
goals:['Berufe: Was sind Sie von Beruf?','Ich arbeite als … bei …','Am Arbeitsplatz: Büro, Computer, Pause, Urlaub','Telefonieren: Kann ich bitte … sprechen?','und, aber, oder, denn','Perfekt: Ich habe gearbeitet. Ich bin gefahren.','war und hatte','Eine E-Mail an den Chef: krank'],
situacion:{title:'Conversa com a chefe',npc:'Frau Dr. Hoffmann',scene:'Segunda-feira de manhã. A sua chefe pergunta como foi o fim de semana e combina o trabalho da semana.',role:'Du bist Frau Dr. Hoffmann, Teamleiterin in einer Softwarefirma in Frankfurt, freundlich, aber beschäftigt. Du duzt Lucas (in der Firma duzen sich alle). Frag: Wie war dein Wochenende? Was hast du gemacht? Dann: Hast du diese Woche Zeit für ein Meeting? Am Mittwoch um 10 Uhr? Sprich sehr einfaches Deutsch (A1), benutze einfache Perfekt-Formen.',goal:'Conte o que você fez no fim de semana (Perfekt) e combine um horário para a reunião.'},
placement:[
 {t:'mc',q:'„O que o senhor faz? (profissão)“',opts:['Was sind Sie von Beruf?','Was machen Sie Beruf?','Wer sind Sie von Beruf?'],a:0},
 {t:'gap',q:'Ich arbeite ___ Programmierer bei einer Softwarefirma.',a:['als']},
 {t:'mc',q:'„Eu trabalhei ontem.“',opts:['Ich habe gestern gearbeitet.','Ich bin gestern gearbeitet.','Ich habe gestern arbeitet.'],a:0},
 {t:'mc',q:'„Fomos para Berlim.“',opts:['Wir sind nach Berlin gefahren.','Wir haben nach Berlin gefahren.','Wir sind nach Berlin gefahrt.'],a:0},
 {t:'gap',q:'Gestern ___ ich krank. (sein – passado)',a:['war']},
 {t:'mc',q:'Ich komme heute nicht, ___ ich bin krank.',opts:['denn','aber','oder'],a:0}],
lessons:[
{id:'l1',title:'Profissões',desc:'Was sind Sie von Beruf? · Ich arbeite als …',steps:[
 {t:'vocab',title:'Profissões',items:[['der Beruf','a profissão'],['der Arzt / die Ärztin','o médico / a médica'],['der Lehrer / die Lehrerin','o professor / a professora'],['der Ingenieur / die Ingenieurin','o engenheiro / a engenheira'],['der Programmierer / die Programmiererin','o programador / a programadora'],['der Verkäufer / die Verkäuferin','o vendedor / a vendedora'],['der Kellner / die Kellnerin','o garçom / a garçonete'],['der Koch / die Köchin','o cozinheiro / a cozinheira'],['der Krankenpfleger / die Krankenpflegerin','o enfermeiro / a enfermeira'],['der Student / die Studentin','o estudante / a estudante'],['der Hausmann / die Hausfrau','o dono / a dona de casa'],['arbeitslos','desempregado'],['selbstständig','autônomo'],['die Firma','a empresa'],['der Job','o emprego / o trabalho'],['die Stelle','a vaga / o cargo'],['der Chef / die Chefin','o chefe / a chefe'],['der Kollege / die Kollegin','o colega / a colega'],['verdienen','ganhar (dinheiro)'],['das Praktikum','o estágio']]},
 {t:'info',title:'Falar da profissão',html:`<table><tr><td class="es-t">Was sind Sie von Beruf?</td><td>Qual é a sua profissão?</td></tr>
 <tr><td class="es-t">Was machst du beruflich?</td><td>O que você faz (de trabalho)?</td></tr>
 <tr><td class="es-t">Ich bin Programmierer.</td><td>Sou programador. <b>(sem artigo!)</b></td></tr>
 <tr><td class="es-t">Ich arbeite als Programmierer bei einer Softwarefirma.</td><td>Trabalho como programador numa empresa de software.</td></tr>
 <tr><td class="es-t">Ich studiere Informatik.</td><td>Estudo informática.</td></tr></table>
 <div class="ojo">Profissão sem artigo: <span class="es-t">Ich bin Lehrerin.</span> (nunca “eine Lehrerin” aqui). A forma feminina quase sempre é <b>-in</b>: <span class="es-t">der Lehrer → die Lehrerin</span>, mas <span class="es-t">der Arzt → die Ärztin</span>, <span class="es-t">der Koch → die Köchin</span>.</div>
 <div class="ex"><b>bei</b> + empresa: <span class="es-t">bei Siemens, bei einer Bank</span> · <b>in</b> + lugar: <span class="es-t">in einem Restaurant, in der Schule</span></div>`},
 {t:'mc',q:'„Ela é médica.“',opts:['Sie ist Ärztin.','Sie ist eine Arzt.','Sie ist Arztin.'],a:0},
 {t:'mc',q:'Wo arbeitet ein Kellner?',opts:['in einem Restaurant','in einer Schule','in einer Apotheke'],a:0},
 {t:'gap',q:'Jana arbeitet ___ Entwicklerin ___ einer Softwarefirma.',a:['als','bei']},
 {t:'match',q:'Ligue.',pairs:[['der Koch','cozinha'],['der Lehrer','ensina'],['der Verkäufer','vende'],['die Ärztin','trata doentes'],['der Student','estuda']]},
 {t:'tr',de:'Qual é a sua profissão? (formal)',a:['Was sind Sie von Beruf?']},
 {t:'tr',de:'Eu trabalho como engenheiro.',a:['Ich arbeite als Ingenieur.','Ich bin Ingenieur.']},
 {t:'speak',es:'Ich bin Programmierer und arbeite bei einer Softwarefirma in Frankfurt.',de:'Sou programador e trabalho numa empresa de software em Frankfurt.',tip:'Lembre: profissão <b>sem</b> artigo.'}
]},
{id:'l2',title:'No trabalho',desc:'Büro, Pause, Urlaub · am Telefon · und, aber, oder, denn',steps:[
 {t:'vocab',title:'No escritório',items:[['das Büro','o escritório'],['der Arbeitsplatz','o local de trabalho'],['der Computer','o computador'],['der Drucker','a impressora'],['drucken','imprimir'],['die E-Mail','o e-mail'],['das Meeting','a reunião'],['die Besprechung','a reunião'],['die Pause','o intervalo'],['der Urlaub','as férias'],['frei haben','estar de folga'],['krank','doente'],['Feierabend','fim do expediente'],['Kann ich bitte … sprechen?','Posso falar com …, por favor?'],['Einen Moment, bitte.','Um momento, por favor.'],['Er / Sie ist nicht da.','Ele / ela não está.'],['zurückrufen','ligar de volta'],['die Nachricht','a mensagem / o recado']]},
 {t:'info',title:'und, aber, oder, denn',html:`<p>Esses conectores <b>não mudam</b> a ordem da frase – o verbo continua na posição 2:</p>
 <table><tr><td class="es-t">und</td><td>e</td><td class="es-t">Ich arbeite im Büro <b>und</b> Jana arbeitet zu Hause.</td></tr>
 <tr><td class="es-t">aber</td><td>mas</td><td class="es-t">Der Job ist toll, <b>aber</b> ich verdiene nicht viel.</td></tr>
 <tr><td class="es-t">oder</td><td>ou</td><td class="es-t">Trinkst du Kaffee <b>oder</b> möchtest du Tee?</td></tr>
 <tr><td class="es-t">denn</td><td>pois / porque</td><td class="es-t">Ich komme heute nicht, <b>denn</b> ich bin krank.</td></tr></table>
 <div class="ex">Antes de <b>aber</b> e <b>denn</b> vem vírgula.</div>`},
 {t:'mc',q:'Ich gehe nicht ins Büro, ___ ich habe heute frei.',opts:['denn','oder','und'],a:0},
 {t:'mc',q:'Die Arbeit ist interessant, ___ sehr anstrengend.',opts:['aber','denn','oder'],a:0},
 {t:'gap',q:'Ich habe im August ___. Ich fahre nach Italien. (férias)',a:['Urlaub']},
 {t:'dialog',place:'Telefon',title:'Ao telefone',scene:'Você liga para uma empresa parceira. Você quer falar com o senhor Braun.',lines:[
  {n:'Firma',es:'Firma Datentechnik, Müller, guten Tag.',de:'Empresa Datentechnik, Müller, bom dia.'},
  {you:true,opts:[{es:'Guten Tag, hier ist Lucas Souza. Kann ich bitte Herrn Braun sprechen?',ok:true},{es:'Hallo, wer ist da?',ok:false,why:'Ao telefone na Alemanha, diga primeiro o <b>seu</b> nome.'}]},
  {n:'Firma',es:'Herr Braun ist leider nicht da. Er ist in einer Besprechung.',de:'O senhor Braun infelizmente não está. Ele está numa reunião.'},
  {you:true,opts:[{es:'Kann er mich bitte zurückrufen?',ok:true},{es:'Kann ich ihn zurückrufen?',ok:false,why:'Melhor pedir que <b>ele</b> ligue para você: <i>Kann er mich zurückrufen?</i>'}]},
  {n:'Firma',es:'Ja, natürlich. Wie ist Ihre Nummer?',de:'Sim, claro. Qual é o seu número?'},
  {you:true,opts:[{es:'Null eins sieben zwei, drei vier fünf, sechs sieben acht. Vielen Dank, auf Wiederhören!',ok:true},{es:'Vielen Dank, auf Wiedersehen!',ok:false,why:'Primeiro diga o número – e ao telefone é <i>Auf Wiederhören</i>.'}]}]},
 {t:'tr',de:'Posso falar com a senhora Wolf, por favor?',a:['Kann ich bitte Frau Wolf sprechen?','Kann ich Frau Wolf sprechen?','Kann ich bitte mit Frau Wolf sprechen?']},
 {t:'tr',de:'Eu não vou, pois estou doente.',a:['Ich komme nicht, denn ich bin krank.','Ich gehe nicht, denn ich bin krank.']}
]},
{id:'l3',title:'O passado: Perfekt',desc:'Was hast du gestern gemacht? · haben/sein + Partizip',steps:[
 {t:'info',title:'O Perfekt',html:`<p>Para falar do passado na conversa, o alemão usa o <b>Perfekt</b>: <b>haben</b> ou <b>sein</b> (posição 2) + <b>particípio</b> (no fim):</p>
 <div class="ex"><span class="es-t">Ich <b>habe</b> gestern viel <b>gearbeitet</b>.</span> = Eu trabalhei muito ontem.</div>
 <table><tr><th>regular: ge- … -t</th><th>irregular: ge- … -en</th></tr>
 <tr><td class="es-t">machen → gemacht</td><td class="es-t">essen → gegessen</td></tr>
 <tr><td class="es-t">arbeiten → gearbeitet</td><td class="es-t">trinken → getrunken</td></tr>
 <tr><td class="es-t">lernen → gelernt</td><td class="es-t">lesen → gelesen</td></tr>
 <tr><td class="es-t">fragen → gefragt</td><td class="es-t">sehen → gesehen</td></tr>
 <tr><td class="es-t">haben → gehabt</td><td class="es-t">schlafen → geschlafen</td></tr>
 <tr><td class="es-t">glauben → geglaubt</td><td>sem ge-: <span class="es-t">verstehen → verstanden</span>, <span class="es-t">passieren → passiert</span></td></tr></table>
 <p>Com <b>sein</b>: verbos de movimento ou mudança – <span class="es-t">fahren → ich <b>bin</b> gefahren</span>, <span class="es-t">bleiben → ich <b>bin</b> geblieben</span>, <span class="es-t">passieren → es <b>ist</b> passiert</span>.</p>`},
 {t:'info',title:'war e hatte',html:`<p>Para <b>sein</b> e <b>haben</b> se usa mais o passado simples:</p>
 <table><tr><th></th><th>sein</th><th>haben</th></tr><tr><td>ich / er / sie</td><td class="es-t">war</td><td class="es-t">hatte</td></tr><tr><td>du</td><td class="es-t">warst</td><td class="es-t">hattest</td></tr><tr><td>wir / sie / Sie</td><td class="es-t">waren</td><td class="es-t">hatten</td></tr></table>
 <div class="ex"><span class="es-t">Wie war dein Wochenende? – Es war super!</span> · <span class="es-t">Ich hatte keine Zeit.</span></div>`},
 {t:'mc',q:'Was hast du am Wochenende ___?',opts:['gemacht','gemachen','machen'],a:0},
 {t:'mc',q:'Wir ___ nach Köln gefahren.',opts:['sind','haben','hat'],a:0,why:'<i>fahren</i> é movimento → <b>sein</b>.'},
 {t:'gap',q:'Ich habe gestern ein Buch ___. (lesen)',a:['gelesen']},
 {t:'gap',q:'Tom hat zu viel Bier ___. (trinken)',a:['getrunken']},
 {t:'gap',q:'Ich ___ am Samstag zu Hause geblieben. (sein)',a:['bin']},
 {t:'gap',q:'Gestern ___ ich keine Zeit. (haben – passado)',a:['hatte']},
 {t:'order',es:'Ich habe den Film nicht verstanden',de:'Eu não entendi o filme.'},
 {t:'read',title:'Leitura: Mein Wochenende',text:`Am Samstag habe ich lange geschlafen – bis elf Uhr! Dann habe ich mit Tom gefrühstückt. Am Nachmittag sind wir mit dem Fahrrad zum Main gefahren. Das Wetter war super. Abends haben wir Pizza gegessen und einen Film gesehen. Am Sonntag hatte ich keine Lust auf Sport. Ich bin zu Hause geblieben und habe Deutsch gelernt.`,de:`No sábado dormi até tarde – até as onze! Depois tomei café da manhã com o Tom. À tarde fomos de bicicleta até o rio Meno. O tempo estava ótimo. À noite comemos pizza e vimos um filme. No domingo eu não estava com vontade de fazer esporte. Fiquei em casa e estudei alemão.`},
 {t:'mc',q:'Wie sind Lucas und Tom zum Main gefahren?',opts:['mit dem Fahrrad','mit dem Bus','mit dem Auto'],a:0},
 {t:'mc',q:'Richtig oder falsch? Am Sonntag hat Lucas Sport gemacht.',opts:['falsch','richtig'],a:0},
 {t:'tr',de:'O que você fez ontem? (informal)',a:['Was hast du gestern gemacht?']},
 {t:'tr',de:'Eu comi uma pizza.',a:['Ich habe eine Pizza gegessen.','Ich habe Pizza gegessen.']}
]},
{id:'l4',title:'Ler e escrever: trabalho',desc:'Stellenanzeigen · E-Mail an die Chefin',steps:[
 {t:'read',title:'Leitura: Zwei Stellenanzeigen',intro:'O seu amigo Rafael procura um trabalho de meio período, só no fim de semana.',text:`A) Café Sonne sucht Kellner/in für Samstag und Sonntag, 10–18 Uhr. 13 € pro Stunde. Deutsch: Grundkenntnisse. Bitte melden Sie sich bei Frau Weber: 069 123 45.

B) Supermarkt Preisfuchs sucht Verkäufer/in, Montag bis Freitag, 8–14 Uhr. Gute Deutschkenntnisse. Bewerbung per E-Mail an jobs@preisfuchs.de.`,de:`A) O Café Sonne procura garçom/garçonete para sábado e domingo, das 10h às 18h. 13 € por hora. Alemão: conhecimentos básicos. Por favor, entre em contato com a senhora Weber: 069 123 45.

B) O supermercado Preisfuchs procura vendedor(a), de segunda a sexta, das 8h às 14h. Bons conhecimentos de alemão. Candidatura por e-mail para jobs@preisfuchs.de.`},
 {t:'mc',q:'Welche Anzeige passt für Rafael?',opts:['A','B'],a:0},
 {t:'mc',q:'Was verdient man im Café Sonne?',opts:['13 € pro Stunde','13 € pro Tag','18 € pro Stunde'],a:0},
 {t:'mc',q:'Richtig oder falsch? Für Stelle B muss man anrufen.',opts:['falsch','richtig'],a:0},
 {t:'info',title:'E-mail formal: doente',html:`<div class="ex es-t">Sehr geehrte Frau Hoffmann,<br>leider kann ich heute nicht zur Arbeit kommen. Ich bin krank und gehe heute zum Arzt. Ich schicke Ihnen morgen die Krankmeldung. Das Meeting um zehn Uhr kann vielleicht Jana machen.<br>Mit freundlichen Grüßen<br>Lucas Souza</div>
 <div class="ojo">Na Alemanha, a partir do 3º dia doente (às vezes já no 1º) é preciso um atestado do médico: <span class="es-t">die Krankmeldung</span>. Avise o trabalho <b>antes</b> do expediente começar.</div>`},
 {t:'free',task:'Escreva uma e-mail formal (~30 palavras) para a sua chefe, a Sra. Hoffmann: 1) você não pode ir trabalhar hoje, 2) o motivo, 3) quando você volta / o que acontece com o seu trabalho.',hint:'Sehr geehrte Frau Hoffmann, leider kann ich heute nicht … Ich bin … / Ich muss … Morgen bin ich wieder … Mit freundlichen Grüßen',focus:'formelle E-Mail (Anrede/Gruß, Sie), können, denn, Zeitangaben',model:'Sehr geehrte Frau Hoffmann,\nleider kann ich heute nicht ins Büro kommen, denn ich habe Fieber. Ich gehe heute zum Arzt. Ich hoffe, ich bin am Donnerstag wieder da.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Profissão</h3><p class="es-t">Was sind Sie von Beruf? – Ich bin Lehrerin. (sem artigo) · Ich arbeite als Koch bei … / in …</p>
<h3>Conectores (verbo continua na posição 2)</h3><p class="es-t">und · aber · oder · denn</p>
<h3>Perfekt</h3><p><span class="es-t">haben/sein</span> (posição 2) + particípio (fim): <span class="es-t">Ich habe gearbeitet. Ich bin gefahren.</span></p><table><tr><td class="es-t">gemacht · gearbeitet · gelernt · gefragt · gehabt · geglaubt</td></tr><tr><td class="es-t">gegessen · getrunken · gelesen · gesehen · geschlafen · gefahren · geblieben</td></tr><tr><td class="es-t">verstanden · passiert</td></tr></table>
<h3>war / hatte</h3><p class="es-t">ich war, du warst, wir waren · ich hatte, du hattest, wir hatten</p>
<h3>E-mail formal</h3><p class="es-t">Sehr geehrte Frau … / Sehr geehrter Herr … – Mit freundlichen Grüßen</p>`});

/* ================= KAPITEL 10 · GESUNDHEIT & KLEIDUNG ================= */
LANGS.de.course.units.push({id:'k10',n:'10',level:'A1',title:'Gesundheit & Kleidung',sub:'Corpo · no médico · Mir tut … weh · sollen · roupas · gefallen, passen',
goals:['Der Körper: Kopf, Bauch, Hand …','Was fehlt Ihnen? – Mir tut der Kopf weh.','Beim Arzt: Termin, Versichertenkarte, Rezept','sollen: Sie sollen viel trinken.','Dativ-Pronomen: mir, dir, Ihnen','Kleidung, Farben, Größen','Wie gefällt dir …? – Die passt mir nicht.','Gute Besserung!'],
situacion:{title:'No consultório',npc:'Dr. Wolf',scene:'Você está há dois dias com dor de garganta e febre. Você vai ao clínico geral (Hausarzt).',role:'Du bist Dr. Wolf, Hausärztin in Frankfurt, ruhig und freundlich. Du siezt. Frag: Was fehlt Ihnen? Seit wann? Haben Sie Fieber? Gib Ratschläge mit „Sie sollen …“ (viel trinken, im Bett bleiben, Tee trinken). Schreib eine Krankmeldung für drei Tage. Sprich sehr einfaches Deutsch (A1).',goal:'Explique o que dói e desde quando. Pergunte o que você deve fazer e se recebe o atestado (Krankmeldung).'},
placement:[
 {t:'mc',q:'„Estou com dor de cabeça.“',opts:['Mir tut der Kopf weh.','Ich tut der Kopf weh.','Mich tut der Kopf weh.'],a:0},
 {t:'gap',q:'Der Arzt sagt, ich ___ viel trinken. (sollen)',a:['soll']},
 {t:'mc',q:'Para alguém doente você diz:',opts:['Gute Besserung!','Herzlichen Glückwunsch!','Guten Appetit!'],a:0},
 {t:'mc',q:'„Gostei do casaco.“',opts:['Die Jacke gefällt mir.','Ich gefalle die Jacke.','Die Jacke gefällt ich.'],a:0},
 {t:'gap',q:'Kann ich ___ helfen? (o senhor – Sie, dativo)',a:['Ihnen']},
 {t:'mc',q:'Na loja: „Welche Größe haben Sie?“ – a vendedora quer saber …',opts:['o seu tamanho','a sua cor preferida','quanto você quer pagar'],a:0}],
lessons:[
{id:'l1',title:'O corpo',desc:'Kopf, Bauch, Hand … · Mir tut … weh',steps:[
 {t:'vocab',title:'O corpo',items:[['der Körper','o corpo'],['der Kopf','a cabeça'],['das Haar, die Haare','o cabelo'],['das Auge, die Augen','o olho, os olhos'],['das Ohr','a orelha / o ouvido'],['die Nase','o nariz'],['der Mund','a boca'],['der Zahn, die Zähne','o dente, os dentes'],['der Hals','o pescoço / a garganta'],['der Rücken','as costas'],['der Bauch','a barriga'],['der Arm','o braço'],['die Hand','a mão'],['das Bein','a perna'],['der Fuß, die Füße','o pé, os pés']]},
 {t:'info',title:'Mir tut … weh – algo dói',html:`<p>Para dor, o alemão usa o <b>dativo</b> da pessoa (<b>mir</b> = a mim) + <b>weh tun</b>:</p>
 <table><tr><td class="es-t">Mir tut der Kopf weh.</td><td>Minha cabeça dói.</td></tr>
 <tr><td class="es-t">Mir tun die Füße weh.</td><td>Meus pés doem. <span class="muted">(plural → tun)</span></td></tr>
 <tr><td class="es-t">Ich habe Kopfschmerzen.</td><td>Estou com dor de cabeça.</td></tr>
 <tr><td class="es-t">Ich habe Halsschmerzen / Bauchschmerzen / Zahnschmerzen.</td><td>dor de garganta / de barriga / de dente</td></tr></table>
 <div class="ex">Pronomes no dativo: <span class="es-t">mir, dir, ihm, ihr, uns, euch, ihnen / Ihnen</span> – <span class="es-t">Wie geht es Ihnen? – Mir geht es nicht gut.</span></div>`},
 {t:'mc',q:'„Minhas costas doem.“',opts:['Mir tut der Rücken weh.','Ich tue der Rücken weh.','Mir tun der Rücken weh.'],a:0},
 {t:'mc',q:'„Meus olhos doem.“',opts:['Mir tun die Augen weh.','Mir tut die Augen weh.','Ich tun die Augen weh.'],a:0,why:'Plural (<i>die Augen</i>) → <b>tun</b>.'},
 {t:'gap',q:'Was ist los, Tom? Tut ___ der Bauch weh? (a você – dativo)',a:['dir']},
 {t:'match',q:'Ligue.',pairs:[['der Hals','a garganta'],['der Zahn','o dente'],['das Bein','a perna'],['die Hand','a mão'],['das Ohr','a orelha']]},
 {t:'tr',de:'Estou com dor de cabeça.',a:['Ich habe Kopfschmerzen.','Mir tut der Kopf weh.']},
 {t:'listen',es:'Mir tut der Hals weh.',de:'Minha garganta dói.'}
]},
{id:'l2',title:'No médico',desc:'Was fehlt Ihnen? · Termin · sollen · Gute Besserung',steps:[
 {t:'vocab',title:'Saúde',items:[['krank','doente'],['gesund','saudável'],['das Fieber','a febre'],['der Schnupfen','o resfriado (nariz)'],['der Husten','a tosse'],['die Erkältung','o resfriado'],['die Schmerzen (Pl.)','as dores'],['der Arzt / die Ärztin','o médico / a médica'],['die Praxis','o consultório'],['der Termin','a consulta (horário)'],['das Wartezimmer','a sala de espera'],['die Versichertenkarte','a carteirinha do plano de saúde'],['das Rezept','a receita'],['das Medikament','o remédio'],['die Tablette','o comprimido'],['die Krankmeldung','o atestado médico'],['Was fehlt Ihnen?','O que o senhor tem?'],['Gute Besserung!','Melhoras!']]},
 {t:'info',title:'sollen – o conselho de outra pessoa',html:`<table><tr><th></th><th>sollen</th></tr><tr><td>ich / er / sie</td><td class="es-t">soll</td></tr><tr><td>du</td><td class="es-t">sollst</td></tr><tr><td>wir / sie / Sie</td><td class="es-t">sollen</td></tr><tr><td>ihr</td><td class="es-t">sollt</td></tr></table>
 <p><b>sollen</b> = “dever” quando <b>outra pessoa</b> diz o que fazer (médico, chefe):</p>
 <div class="ex"><span class="es-t">Die Ärztin sagt, ich soll im Bett bleiben.</span> = A médica diz que eu devo ficar de cama.<br><span class="es-t">Was soll ich machen?</span> = O que eu devo fazer?</div>
 <div class="ojo">Na Alemanha, primeiro se vai ao <b>Hausarzt</b> (clínico geral), com hora marcada. Leve sempre a <span class="es-t">Versichertenkarte</span>. Em emergência: <b>112</b>.</div>`},
 {t:'mc',q:'Die Ärztin: „Trinken Sie viel Tee!“ Was sagt Lucas zu Tom?',opts:['Ich soll viel Tee trinken.','Ich will viel Tee trinken.','Ich darf viel Tee trinken.'],a:0},
 {t:'gap',q:'Du ___ heute nicht arbeiten. Du bist krank! (sollen)',a:['sollst']},
 {t:'gap',q:'Ich habe 39 Grad ___. (febre)',a:['Fieber']},
 {t:'dialog',place:'Arztpraxis',title:'Na recepção do consultório',scene:'Você chega ao consultório sem hora marcada, com febre.',lines:[
  {n:'Arzthelferin',es:'Guten Morgen! Haben Sie einen Termin?',de:'Bom dia! O senhor tem hora marcada?'},
  {you:true,opts:[{es:'Nein, leider nicht. Aber ich habe hohes Fieber.',ok:true},{es:'Ja, ich habe Fieber.',ok:false,why:'Ela perguntou se você tem <b>hora marcada</b> (Termin).'}]},
  {n:'Arzthelferin',es:'Okay. Ihre Versichertenkarte, bitte.',de:'Ok. Sua carteirinha do plano, por favor.'},
  {you:true,opts:[{es:'Hier, bitte.',ok:true},{es:'Ich habe keine Rechnung.',ok:false,why:'<i>Versichertenkarte</i> = carteirinha do plano de saúde.'}]},
  {n:'Arzthelferin',es:'Danke. Bitte nehmen Sie im Wartezimmer Platz. Es dauert etwa zwanzig Minuten.',de:'Obrigada. Por favor, sente-se na sala de espera. Demora uns vinte minutos.'}]},
 {t:'read',hideText:true,title:'Na consulta',intro:'Ouça o que a médica diz.',text:`So, Herr Souza, Sie haben eine Erkältung. Das ist nicht schlimm. Sie sollen drei Tage zu Hause bleiben und viel Tee trinken. Hier ist ein Rezept für Tabletten gegen das Fieber. Nehmen Sie morgens und abends eine Tablette. Und hier ist Ihre Krankmeldung. Gute Besserung!`,de:`Então, senhor Souza, o senhor está resfriado. Não é grave. O senhor deve ficar três dias em casa e beber muito chá. Aqui está uma receita de comprimidos para a febre. Tome um comprimido de manhã e um à noite. E aqui está o seu atestado. Melhoras!`},
 {t:'mc',q:'Wie lange soll er zu Hause bleiben?',opts:['drei Tage','zwei Wochen','einen Tag'],a:0},
 {t:'mc',q:'Wann soll er die Tabletten nehmen?',opts:['morgens und abends','nur abends','dreimal am Tag'],a:0},
 {t:'tr',de:'O que eu devo fazer?',a:['Was soll ich machen?','Was soll ich tun?']}
]},
{id:'l3',title:'Roupas',desc:'Jacke, Hose, Schuhe · Größe · Farbe',steps:[
 {t:'vocab',title:'Roupas',items:[['die Kleidung','a roupa'],['die Jacke','o casaco / a jaqueta'],['der Mantel','o sobretudo'],['die Hose','a calça'],['das Hemd','a camisa'],['das T-Shirt','a camiseta'],['der Pullover','o suéter / a blusa de frio'],['das Kleid','o vestido'],['der Rock','a saia'],['der Schuh, die Schuhe','o sapato, os sapatos'],['die Mütze','a touca / o gorro'],['die Tasche','a bolsa'],['die Größe','o tamanho'],['anprobieren','experimentar (roupa)'],['die Umkleidekabine','o provador'],['tragen','vestir / usar / carregar'],['das Kaufhaus','a loja de departamentos']]},
 {t:'info',title:'Comprar roupa',html:`<table><tr><th>vendedor(a)</th><th>você</th></tr>
 <tr><td class="es-t">Kann ich Ihnen helfen?</td><td class="es-t">Ja, ich suche eine Jacke.</td></tr>
 <tr><td class="es-t">Welche Größe haben Sie?</td><td class="es-t">Größe M / 40.</td></tr>
 <tr><td class="es-t">Welche Farbe möchten Sie?</td><td class="es-t">Blau oder schwarz.</td></tr>
 <tr><td></td><td class="es-t">Kann ich die Jacke anprobieren?</td></tr>
 <tr><td></td><td class="es-t">Die ist zu klein / zu groß. Haben Sie die auch in L?</td></tr>
 <tr><td></td><td class="es-t">Die nehme ich.</td></tr></table>
 <div class="ex"><span class="es-t">die</span>, <span class="es-t">der</span>, <span class="es-t">das</span> também servem como pronome “esse/essa”: <span class="es-t">Die Jacke? Die nehme ich.</span></div>
 <div class="ojo">No inverno alemão você vai precisar de <span class="es-t">eine warme Jacke, eine Mütze und gute Schuhe</span> 🧥🧣</div>`},
 {t:'mc',q:'Was trägt man im Winter?',opts:['einen Mantel und eine Mütze','ein T-Shirt','einen Rock und kein Mantel'],a:0},
 {t:'gap',q:'Kann ich die Hose ___? (experimentar)',a:['anprobieren']},
 {t:'gap',q:'Die Schuhe sind zu klein. Haben Sie eine andere ___? (tamanho)',a:['Größe']},
 {t:'match',q:'Ligue.',pairs:[['das Hemd','a camisa'],['der Rock','a saia'],['die Hose','a calça'],['das Kleid','o vestido'],['die Mütze','o gorro']]},
 {t:'tr',de:'Eu procuro uma jaqueta.',a:['Ich suche eine Jacke.']}
]},
{id:'l4',title:'Gostar e servir',desc:'gefallen, passen, helfen + Dativ',steps:[
 {t:'info',title:'Verbos com dativo',html:`<p>Alguns verbos pedem a pessoa no <b>dativo</b> (mir, dir, ihm, ihr, Ihnen …):</p>
 <table><tr><td class="es-t">gefallen</td><td class="es-t">Die Jacke gefällt <b>mir</b>.</td><td>Gosto do casaco. <span class="muted">(o casaco me agrada)</span></td></tr>
 <tr><td class="es-t">passen</td><td class="es-t">Die Hose passt <b>mir</b> nicht.</td><td>A calça não serve em mim.</td></tr>
 <tr><td class="es-t">helfen</td><td class="es-t">Kann ich <b>Ihnen</b> helfen?</td><td>Posso ajudar o senhor?</td></tr>
 <tr><td class="es-t">gehören</td><td class="es-t">Die Tasche gehört <b>ihr</b>.</td><td>A bolsa é dela.</td></tr>
 <tr><td class="es-t">danken</td><td class="es-t">Ich danke <b>dir</b>!</td><td>Obrigado a você!</td></tr></table>
 <div class="ojo">Com <b>gefallen</b>, a coisa é o sujeito: <span class="es-t">Die Schuhe gefall<b>en</b> mir.</span> (plural → gefallen). Pergunta: <span class="es-t">Wie gefällt dir das Kleid?</span></div>`},
 {t:'mc',q:'„Gosto dos sapatos.“',opts:['Die Schuhe gefallen mir.','Die Schuhe gefällt mir.','Ich gefalle die Schuhe.'],a:0},
 {t:'gap',q:'Wie gefällt ___ die Jacke, Tom? (a você)',a:['dir']},
 {t:'gap',q:'Das T-Shirt ist zu groß. Es passt ___ nicht. (a mim)',a:['mir']},
 {t:'gap',q:'Wem gehört das Handy? – Es gehört ___. (a ela – Jana)',a:['ihr']},
 {t:'dialog',place:'Kaufhaus',title:'Na loja de departamentos',scene:'Novembro. Você precisa de um casaco de inverno.',lines:[
  {n:'Verkäuferin',es:'Guten Tag! Kann ich Ihnen helfen?',de:'Bom dia! Posso ajudar?'},
  {you:true,opts:[{es:'Ja, bitte. Ich suche eine warme Jacke für den Winter.',ok:true},{es:'Ja, mir tut der Kopf weh.',ok:false,why:'Você está numa loja de roupas 😉'}]},
  {n:'Verkäuferin',es:'Welche Größe haben Sie?',de:'Qual é o seu tamanho?'},
  {you:true,opts:[{es:'Größe L, glaube ich.',ok:true},{es:'Ich habe 28 Jahre.',ok:false,why:'Ela perguntou o <b>tamanho</b>. (E idade é <i>Ich bin 28</i>!)'}]},
  {n:'Verkäuferin',es:'Hier, die schwarze Jacke ist im Angebot. Wie gefällt sie Ihnen?',de:'Aqui, o casaco preto está em promoção. O que o senhor acha dele?'},
  {you:true,opts:[{es:'Sie gefällt mir gut. Kann ich sie anprobieren?',ok:true},{es:'Ich gefalle sie gut.',ok:false,why:'Com <i>gefallen</i>: <b>sie gefällt mir</b> (o casaco me agrada).'}]},
  {n:'Verkäuferin',es:'Natürlich. Die Umkleidekabine ist dort hinten.',de:'Claro. O provador fica lá no fundo.'},
  {you:true,opts:[{es:'Sie passt mir sehr gut. Die nehme ich!',ok:true},{es:'Sie passt ich gut.',ok:false,why:'<i>passen</i> + dativo: <b>mir</b>.'}]}]},
 {t:'tr',de:'O vestido não me agrada.',a:['Das Kleid gefällt mir nicht.']},
 {t:'tr',de:'Posso ajudar você? (informal)',a:['Kann ich dir helfen?']},
 {t:'free',task:'Você está doente. Escreva para a Jana (~30 palavras): 1) o que você tem, 2) o que a médica disse (sollen), 3) peça a ela que avise a chefe / leve algo.',hint:'Hallo Jana, ich bin krank. Mir tut … weh / Ich habe … Die Ärztin sagt, ich soll … Kannst du bitte …? Liebe Grüße',focus:'Mir tut … weh, sollen, können (Bitte), Dativ-Pronomen',model:'Hallo Jana,\nich bin krank. Ich habe Fieber und mir tut der Hals weh. Die Ärztin sagt, ich soll drei Tage im Bett bleiben. Kannst du bitte Frau Hoffmann Bescheid sagen? Danke!\nLiebe Grüße\nLucas'}
]}],
resumen:`<h3>Dor</h3><p class="es-t">Mir tut der Kopf weh. · Mir tun die Füße weh. · Ich habe Kopfschmerzen / Halsschmerzen.</p>
<h3>Médico</h3><p class="es-t">Haben Sie einen Termin? · die Versichertenkarte · das Rezept · die Krankmeldung · Gute Besserung!</p>
<h3>sollen</h3><p class="es-t">ich soll · du sollst · er soll · wir sollen – Die Ärztin sagt, ich soll im Bett bleiben.</p>
<h3>Pronomes no dativo</h3><table><tr><td>ich → mir</td><td>du → dir</td><td>er → ihm</td><td>sie → ihr</td></tr><tr><td>wir → uns</td><td>ihr → euch</td><td>sie → ihnen</td><td>Sie → Ihnen</td></tr></table>
<h3>Verbos com dativo</h3><p class="es-t">Das gefällt mir. · Die Hose passt mir nicht. · Kann ich Ihnen helfen? · Die Tasche gehört ihr.</p>`});

/* ================= KAPITEL 11 · REISEN & URLAUB ================= */
LANGS.de.course.units.push({id:'k11',n:'11',level:'A1',title:'Reisen & Urlaub',sub:'Viagens · hotel · aeroporto · bagagem · passeios · cartão-postal',
goals:['Reisen: Urlaub, Ausland, Gepäck, Ausweis','Im Hotel: Einzelzimmer, Doppelzimmer, Frühstück','Am Flughafen: Abflug, Ankunft, Zoll','In der Stadt: Sehenswürdigkeiten, Führung, Eintritt','Wohin? – ans Meer, in die Berge, nach Wien','Perfekt: Wir sind … gefahren, wir haben … gesehen','Eine Postkarte / Nachricht aus dem Urlaub'],
situacion:{title:'Check-in no hotel',npc:'Rezeption',scene:'Você chega a um hotel em Hamburgo numa sexta à noite. Você reservou um quarto.',role:'Du bist Rezeptionist in einem Hotel in Hamburg, freundlich, formell. Du siezt. Frag nach Namen und Reservierung, Ausweis, wie viele Nächte. Erkläre: Frühstück 7–10 Uhr im Erdgeschoss, Zimmer 312 im dritten Stock, Aufzug links. Beantworte Fragen zu WLAN und Sehenswürdigkeiten (Hafen, Elbphilharmonie). Sprich sehr einfaches Deutsch (A1).',goal:'Faça o check-in: diga seu nome, quantas noites, pergunte pelo café da manhã, pelo Wi-Fi e por um passeio na cidade.'},
placement:[
 {t:'mc',q:'„um quarto de casal“',opts:['ein Doppelzimmer','ein Einzelzimmer','ein Zimmerdoppel'],a:0},
 {t:'mc',q:'„Vamos para a praia.“',opts:['Wir fahren ans Meer.','Wir fahren zum Meer gehen.','Wir fahren in Meer.'],a:0},
 {t:'gap',q:'Im Sommer ___ wir nach Italien gefahren. (Perfekt)',a:['sind']},
 {t:'mc',q:'„a bagagem“',opts:['das Gepäck','die Packung','der Pass'],a:0},
 {t:'mc',q:'No aeroporto: „Abflug“ é …',opts:['a partida (do avião)','a chegada','a alfândega'],a:0},
 {t:'gap',q:'Ich ___ zwei Nächte im Hotel. (übernachten – presente)',a:['übernachte']}],
lessons:[
{id:'l1',title:'Viajar',desc:'Urlaub, Ausland, Gepäck · wohin?',steps:[
 {t:'vocab',title:'Viagem',items:[['die Reise','a viagem'],['reisen','viajar'],['der Urlaub','as férias'],['Urlaub machen','tirar férias'],['das Ausland','o exterior'],['im Ausland','no exterior'],['der Ausländer / die Ausländerin','o estrangeiro / a estrangeira'],['fremd','estranho / desconhecido'],['die Heimat','a terra natal'],['das Gepäck','a bagagem'],['der Koffer','a mala'],['der Pass','o passaporte'],['der Ausweis','a carteira de identidade'],['das Reisebüro','a agência de viagens'],['der Prospekt','o folheto'],['das Meer','o mar'],['der See','o lago'],['die Berge (Pl.)','as montanhas'],['das Dorf','a vila / o povoado'],['die Welt','o mundo'],['mitnehmen','levar (junto)']]},
 {t:'info',title:'Para onde? – nach, in, an',html:`<table><tr><td class="es-t"><b>nach</b> Wien, nach Italien</td><td>cidades e a maioria dos países</td></tr>
 <tr><td class="es-t"><b>in die</b> Schweiz, <b>in die</b> Türkei, <b>in die</b> USA</td><td>países com artigo</td></tr>
 <tr><td class="es-t"><b>in die</b> Berge, <b>in den</b> Urlaub</td><td>montanhas, férias</td></tr>
 <tr><td class="es-t"><b>ans</b> Meer, <b>an den</b> See</td><td>mar, lago (à beira de)</td></tr></table>
 <p>Onde? → <b>dativo</b>: <span class="es-t">am Meer, in den Bergen, in der Schweiz, in Wien</span>.</p>
 <div class="ojo"><span class="es-t">der See</span> = o lago; <span class="es-t">die See</span> = o mar (do Norte). Mais comum para “mar”: <span class="es-t">das Meer</span>.</div>`},
 {t:'mc',q:'Im Sommer fahren wir ___ Meer.',opts:['ans','nach','in'],a:0},
 {t:'mc',q:'Wir fliegen ___ Portugal.',opts:['nach','in die','ans'],a:0},
 {t:'gap',q:'Vergiss deinen ___ nicht! Ohne Pass kannst du nicht fliegen. (passaporte)',a:['Pass']},
 {t:'match',q:'Ligue.',pairs:[['das Gepäck','a bagagem'],['das Ausland','o exterior'],['der See','o lago'],['das Dorf','a vila'],['die Heimat','a terra natal']]},
 {t:'tr',de:'Nas férias vamos para as montanhas.',a:['Im Urlaub fahren wir in die Berge.','Im Urlaub gehen wir in die Berge.']}
]},
{id:'l2',title:'No hotel',desc:'Einzelzimmer, Doppelzimmer · Rezeption',steps:[
 {t:'vocab',title:'Hotel',items:[['das Hotel','o hotel'],['die Rezeption','a recepção'],['das Einzelzimmer','o quarto de solteiro'],['das Doppelzimmer','o quarto de casal'],['die Nacht, die Nächte','a noite, as noites'],['übernachten','pernoitar'],['die Übernachtung','a diária / o pernoite'],['das Frühstück','o café da manhã'],['die Halbpension','a meia pensão'],['der Schlüssel','a chave'],['frei','livre'],['besetzt','ocupado'],['die Dusche','o chuveiro'],['reservieren','reservar'],['die Reservierung','a reserva'],['das WLAN','o Wi-Fi'],['der Fernseher','a televisão (aparelho)']]},
 {t:'dialog',place:'Hotel am Hafen',title:'Na recepção',scene:'Você chega a um hotel em Hamburgo.',lines:[
  {n:'Rezeption',es:'Guten Abend! Willkommen im Hotel am Hafen.',de:'Boa noite! Bem-vindo ao Hotel am Hafen.'},
  {you:true,opts:[{es:'Guten Abend. Ich habe ein Einzelzimmer reserviert. Mein Name ist Souza.',ok:true},{es:'Guten Abend. Ich habe einen Schlüssel.',ok:false,why:'Você ainda não tem a chave – diga que você <b>reservou</b> um quarto.'}]},
  {n:'Rezeption',es:'Ja, Herr Souza, zwei Nächte. Ihren Ausweis, bitte.',de:'Sim, senhor Souza, duas noites. Sua identidade, por favor.'},
  {you:true,opts:[{es:'Hier, bitte. Ist das Frühstück im Preis?',ok:true},{es:'Hier, bitte. Ist das Frühstück besetzt?',ok:false,why:'<i>besetzt</i> = ocupado. Pergunte se o café está incluído: <i>im Preis</i>.'}]},
  {n:'Rezeption',es:'Ja, das Frühstück ist von sieben bis zehn Uhr im Erdgeschoss. Hier ist Ihr Schlüssel: Zimmer 312, im dritten Stock.',de:'Sim, o café da manhã é das sete às dez no térreo. Aqui está sua chave: quarto 312, no terceiro andar.'},
  {you:true,opts:[{es:'Danke! Gibt es WLAN?',ok:true},{es:'Danke! Wo ist der dritte Frühstück?',ok:false,why:'O terceiro <b>andar</b> (Stock), não “café da manhã”.'}]},
  {n:'Rezeption',es:'Ja, das Passwort steht auf dem Schlüssel. Einen schönen Aufenthalt!',de:'Sim, a senha está na chave. Tenha uma boa estadia!'}]},
 {t:'mc',q:'Sie reisen allein. Sie brauchen ein …',opts:['Einzelzimmer','Doppelzimmer','Wohnzimmer'],a:0},
 {t:'mc',q:'Schild an der Toilette im Zug: „besetzt“',opts:['ocupado','livre','quebrado'],a:0},
 {t:'gap',q:'Wir möchten drei Nächte ___. (pernoitar)',a:['übernachten|bleiben']},
 {t:'tr',de:'Eu reservei um quarto de casal.',a:['Ich habe ein Doppelzimmer reserviert.']},
 {t:'tr',de:'A que horas é o café da manhã?',a:['Wann ist das Frühstück?','Wann gibt es Frühstück?','Um wie viel Uhr ist das Frühstück?']}
]},
{id:'l3',title:'Aeroporto e passeios',desc:'Abflug, Ankunft, Zoll · Sehenswürdigkeiten, Führung, Eintritt',steps:[
 {t:'vocab',title:'Aeroporto',items:[['der Flughafen','o aeroporto'],['das Flugzeug','o avião'],['fliegen','voar'],['abfliegen','decolar / partir (avião)'],['der Abflug','a partida (do voo)'],['die Ankunft','a chegada'],['landen','pousar'],['der Flug','o voo'],['der Zoll','a alfândega'],['der Schalter','o balcão / o guichê'],['gültig','válido'],['die Auskunft','a informação'],['die Ansage','o anúncio (alto-falante)'],['der Anschluss','a conexão']]},
 {t:'vocab',title:'Passear',items:[['die Sehenswürdigkeit','o ponto turístico'],['besichtigen','visitar (um lugar)'],['besuchen','visitar (pessoas / lugares)'],['die Führung','a visita guiada'],['der Reiseführer','o guia (pessoa ou livro)'],['der Eintritt','a entrada (preço)'],['der Erwachsene','o adulto'],['das Kind, die Kinder','a criança'],['international','internacional'],['kulturell','cultural'],['das Bild','o quadro / a imagem'],['der Hafen','o porto']]},
 {t:'read',hideText:true,title:'Aviso no aeroporto',intro:'Ouça o aviso no aeroporto de Frankfurt.',text:`Achtung, eine Durchsage für alle Passagiere nach Lissabon: Ihr Flug L H elf siebzig hat dreißig Minuten Verspätung. Der neue Abflug ist um fünfzehn Uhr vierzig. Bitte gehen Sie zu Gate B zwölf.`,de:`Atenção, um aviso para todos os passageiros para Lisboa: o seu voo LH 1170 está trinta minutos atrasado. A nova partida é às 15h40. Por favor, dirijam-se ao portão B12.`},
 {t:'mc',q:'Wann fliegt das Flugzeug nach Lissabon jetzt ab?',opts:['um 15:40 Uhr','um 15:10 Uhr','um 11:70 Uhr'],a:0},
 {t:'mc',q:'Zu welchem Gate sollen die Passagiere gehen?',opts:['B12','B30','L11'],a:0},
 {t:'read',title:'Leitura: Stadtführung',text:`Hamburg entdecken! Stadtführung zu Fuß: Rathaus, Hafen und Elbphilharmonie. Jeden Samstag und Sonntag um 11 Uhr, Treffpunkt vor dem Rathaus. Dauer: zwei Stunden. Eintritt: Erwachsene 15 €, Kinder bis 12 Jahre frei. Führungen auf Deutsch und Englisch. Keine Anmeldung nötig.`,de:`Descubra Hamburgo! Visita guiada a pé: prefeitura, porto e Elbphilharmonie. Todo sábado e domingo às 11h, ponto de encontro em frente à prefeitura. Duração: duas horas. Entrada: adultos 15 €, crianças até 12 anos grátis. Visitas em alemão e inglês. Não é preciso se inscrever.`},
 {t:'mc',q:'Richtig oder falsch? Die Führung ist auch am Montag.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Was kostet die Führung für ein Kind (8 Jahre)?',opts:['nichts','15 €','7,50 €'],a:0},
 {t:'mc',q:'Richtig oder falsch? Man muss sich anmelden.',opts:['falsch','richtig'],a:0}
]},
{id:'l4',title:'Contar a viagem',desc:'Perfekt · Postkarte · Nachricht aus dem Urlaub',steps:[
 {t:'info',title:'Contar as férias no Perfekt',html:`<table><tr><td class="es-t">Wir <b>sind</b> nach Hamburg <b>gefahren</b>.</td><td>Fomos para Hamburgo.</td></tr>
 <tr><td class="es-t">Wir <b>sind</b> drei Tage <b>geblieben</b>.</td><td>Ficamos três dias.</td></tr>
 <tr><td class="es-t">Wir <b>haben</b> im Hotel <b>übernachtet</b>.</td><td>Dormimos no hotel.</td></tr>
 <tr><td class="es-t">Wir <b>haben</b> viel <b>gesehen</b> und Fisch <b>gegessen</b>.</td><td>Vimos muita coisa e comemos peixe.</td></tr>
 <tr><td class="es-t">Das Wetter <b>war</b> leider schlecht.</td><td>O tempo estava ruim, infelizmente.</td></tr></table>
 <div class="ex">Verbos com <b>be-</b>, <b>ver-</b>, <b>über-</b> e terminados em <b>-ieren</b> não têm <b>ge-</b>: <span class="es-t">besichtigt, besucht, übernachtet, reserviert, verstanden</span>.</div>`},
 {t:'gap',q:'Wir haben das Rathaus ___. (besichtigen)',a:['besichtigt']},
 {t:'gap',q:'Ich ___ eine Woche in Wien geblieben. (sein)',a:['bin']},
 {t:'gap',q:'Habt ihr im Hotel ___? (übernachten)',a:['übernachtet']},
 {t:'read',title:'Leitura: Ein Gruß aus Hamburg',text:`Hallo Tom,
viele Grüße aus Hamburg! Ich bin am Freitag mit dem Zug gekommen. Das Hotel ist klein, aber sehr schön, und das Frühstück ist super. Gestern habe ich eine Führung gemacht und den Hafen besichtigt. Das Wetter war leider nicht so gut – es hat viel geregnet. Heute Abend gehe ich in ein Konzert. Am Sonntag fahre ich zurück.
Bis bald!
Lucas`,de:`Oi, Tom,
abraços de Hamburgo! Cheguei na sexta de trem. O hotel é pequeno, mas muito bonito, e o café da manhã é ótimo. Ontem fiz uma visita guiada e conheci o porto. Infelizmente o tempo não estava muito bom – choveu muito. Hoje à noite vou a um concerto. No domingo eu volto.
Até breve!
Lucas`},
 {t:'mc',q:'Wie ist Lucas nach Hamburg gefahren?',opts:['mit dem Zug','mit dem Flugzeug','mit dem Auto'],a:0},
 {t:'mc',q:'Richtig oder falsch? Das Wetter war sehr schön.',opts:['falsch','richtig'],a:0},
 {t:'tr',de:'Nós fomos de avião para Lisboa.',a:['Wir sind nach Lissabon geflogen.','Wir sind mit dem Flugzeug nach Lissabon geflogen.']},
 {t:'free',task:'Escreva uma mensagem das suas férias (~30–40 palavras) para uma amiga: 1) onde você está e como chegou, 2) o que você fez (Perfekt), 3) como está o tempo / o hotel.',hint:'Liebe …, viele Grüße aus …! Ich bin mit dem … gekommen. Gestern habe ich … Das Wetter ist … Bis bald!',focus:'Perfekt mit haben/sein, Ortsangaben, Wetter, Postkarten-Gruß',model:'Liebe Jana,\nviele Grüße aus Wien! Ich bin mit dem Zug gekommen. Gestern habe ich das Schloss Schönbrunn besichtigt und viel Kuchen gegessen. Das Wetter ist warm und sonnig. Das Hotel ist ruhig und günstig.\nBis bald!\nLucas'}
]}],
resumen:`<h3>Para onde? / Onde?</h3><table><tr><td class="es-t">nach Wien / nach Italien</td><td class="es-t">in Wien / in Italien</td></tr><tr><td class="es-t">in die Schweiz / in die Berge</td><td class="es-t">in der Schweiz / in den Bergen</td></tr><tr><td class="es-t">ans Meer / an den See</td><td class="es-t">am Meer / am See</td></tr></table>
<h3>Hotel</h3><p class="es-t">das Einzelzimmer · das Doppelzimmer · die Übernachtung · das Frühstück · die Halbpension · die Rezeption · der Schlüssel · besetzt / frei</p>
<h3>Aeroporto</h3><p class="es-t">der Abflug · die Ankunft · der Flug · der Zoll · der Pass / der Ausweis · gültig</p>
<h3>Perfekt sem ge-</h3><p class="es-t">besichtigt · besucht · übernachtet · reserviert · verstanden · passiert</p>`});

/* ================= KAPITEL 12 · PRÜFUNGSTRAINING A1 ================= */
/* Übungstest im Format „Goethe-Zertifikat A1: Start Deutsch 1“ (Prüfungsteile laut Prüfungsziele/Testbeschreibung) – alle Texte selbst geschrieben. */
LANGS.de.course.units.push({id:'k12',n:'12',level:'A1',title:'Prüfungstraining A1',sub:'Simulado no formato da prova A1 do Goethe-Institut: ouvir, ler, escrever, falar',
goals:['Hören: kurze Gespräche, Durchsagen, Telefonansagen','Lesen: Notizen, Anzeigen, Schilder','Schreiben: Formular und kurze Mitteilung','Sprechen: sich vorstellen, Fragen stellen, um etwas bitten'],
situacion:{title:'Prova oral (simulação)',npc:'Prüferin',scene:'Prova oral do nível A1. A examinadora conduz as três partes.',role:'Du bist Prüferin bei einer mündlichen Deutschprüfung A1. Du siezt. Teil 1: Bitte die Person, sich vorzustellen (Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby), dann: Buchstabieren Sie bitte Ihren Namen. Nennen Sie Ihre Telefonnummer. Teil 2: Thema „Freizeit“ – stell 2 Fragen (z. B. Wochenende? Sport?) und lass die Person dir 2 Fragen stellen. Teil 3: Bitte die Person, dich um etwas zu bitten (z. B. das Fenster öffnen, einen Stift). Sprich langsam und sehr einfach (A1). Gib am Ende ein kurzes, freundliches Feedback.',goal:'Faça as três partes da prova oral: apresente-se, faça e responda perguntas sobre tempo livre e faça um pedido educado.'},
placement:[
 {t:'mc',q:'Placa: „Heute geschlossen“',opts:['Hoje está fechado.','Hoje está aberto.','Hoje fecha mais cedo.'],a:0},
 {t:'mc',q:'Pedido educado:',opts:['Können Sie bitte das Fenster aufmachen?','Fenster auf!','Sie machen das Fenster auf.'],a:0},
 {t:'gap',q:'Ich ___ gestern im Kino. (sein – passado)',a:['war']}],
lessons:[
{id:'l1',title:'Ouvir (Hören)',desc:'3 partes: conversas, avisos, recados',steps:[
 {t:'info',title:'A prova A1 do Goethe-Institut',html:`<p>A prova <b>Goethe-Zertifikat A1: Start Deutsch 1</b> tem quatro partes:</p>
 <table><tr><th>parte</th><th>duração</th><th>o que é</th></tr>
 <tr><td>Hören (ouvir)</td><td>~20 min</td><td>conversas curtas, avisos em público, recados no telefone</td></tr>
 <tr><td>Lesen (ler)</td><td>25 min</td><td>bilhetes e e-mails, anúncios, placas</td></tr>
 <tr><td>Schreiben (escrever)</td><td>20 min</td><td>preencher um formulário, mensagem curta (~30 palavras)</td></tr>
 <tr><td>Sprechen (falar)</td><td>15 min</td><td>em grupo: apresentar-se, perguntar e responder, pedir algo</td></tr></table>
 <p>Para passar é preciso cerca de <b>60 %</b>. Este capítulo é um simulado com textos novos, no mesmo formato.</p>
 <div class="ojo">Na prova, a parte 2 de Hören (avisos) se ouve <b>só uma vez</b>. Aqui você pode repetir – mas tente responder depois de ouvir uma vez só!</div>`},
 {t:'read',hideText:true,kind:'Hören · Teil 1',title:'Conversa 1',intro:'Ouça e responda: Wann treffen sich Anna und Ben?',text:`Ben, gehen wir heute Abend ins Kino? – Heute kann ich leider nicht. Morgen? – Morgen habe ich Sport. Und am Donnerstag? – Donnerstag ist gut. Um acht? – Okay, Donnerstag um acht.`,de:`Ben, vamos ao cinema hoje à noite? – Hoje infelizmente não posso. Amanhã? – Amanhã tenho esporte. E na quinta? – Quinta está bom. Às oito? – Ok, quinta às oito.`},
 {t:'mc',q:'Wann treffen sich Anna und Ben?',opts:['am Donnerstag um 8 Uhr','heute Abend','morgen um 8 Uhr'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 1',title:'Conversa 2',intro:'Ouça e responda: Was kauft die Frau?',text:`Guten Tag, ich hätte gern Brot. – Das Vollkornbrot? – Nein, das ist zu groß. Ich nehme lieber sechs Brötchen. – Gern, sechs Brötchen. Sonst noch etwas? – Nein, danke.`,de:`Bom dia, eu queria pão. – O pão integral? – Não, é grande demais. Prefiro levar seis pãezinhos. – Pois não, seis pãezinhos. Mais alguma coisa? – Não, obrigada.`},
 {t:'mc',q:'Was kauft die Frau?',opts:['sechs Brötchen','ein Vollkornbrot','ein Brot und sechs Brötchen'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 1',title:'Conversa 3',intro:'Ouça e responda: Wie fährt der Mann zur Arbeit?',text:`Fährst du immer mit dem Auto zur Arbeit? – Nein, das ist zu teuer. Und mit dem Bus dauert es eine Stunde. Ich fahre mit dem Fahrrad, das geht am schnellsten.`,de:`Você sempre vai de carro para o trabalho? – Não, é caro demais. E de ônibus leva uma hora. Eu vou de bicicleta, é o mais rápido.`},
 {t:'mc',q:'Wie fährt der Mann zur Arbeit?',opts:['mit dem Fahrrad','mit dem Auto','mit dem Bus'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 2',title:'Aviso 1',intro:'Ouça o aviso. Richtig oder falsch?',text:`Liebe Fahrgäste, die U-Bahn Linie vier fährt heute wegen Bauarbeiten nur bis Hauptbahnhof. Bitte nehmen Sie ab Hauptbahnhof den Bus Nummer zweiunddreißig.`,de:`Queridos passageiros, a linha 4 do metrô hoje só vai até a estação central por causa de obras. Por favor, a partir da estação central, peguem o ônibus número 32.`},
 {t:'mc',q:'Richtig oder falsch? Die U-Bahn fährt heute nicht bis zum Ende.',opts:['richtig','falsch'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 2',title:'Aviso 2',intro:'Ouça o aviso. Richtig oder falsch?',text:`Achtung, eine Information für unsere Kunden: Unser Kaufhaus schließt in fünfzehn Minuten. Bitte gehen Sie jetzt zur Kasse. Die Kassen sind im Erdgeschoss.`,de:`Atenção, uma informação para nossos clientes: nossa loja fecha em quinze minutos. Por favor, dirijam-se agora ao caixa. Os caixas ficam no térreo.`},
 {t:'mc',q:'Richtig oder falsch? Die Kassen sind im ersten Stock.',opts:['falsch','richtig'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 3',title:'Recado 1',intro:'Ouça o recado na secretária eletrônica.',text:`Hallo, hier ist Mehmet. Ich bin leider krank und kann heute nicht zum Deutschkurs kommen. Kannst du mir bitte die Hausaufgaben schicken? Meine E-Mail-Adresse hast du ja. Danke und bis nächste Woche!`,de:`Oi, aqui é o Mehmet. Infelizmente estou doente e não posso ir ao curso de alemão hoje. Você pode me mandar a lição de casa, por favor? Meu e-mail você já tem. Obrigado e até a semana que vem!`},
 {t:'mc',q:'Was möchte Mehmet?',opts:['die Hausaufgaben','eine Telefonnummer','einen Termin beim Arzt'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 3',title:'Recado 2',intro:'Ouça o recado na secretária eletrônica.',text:`Guten Tag, hier ist das Autohaus Krämer. Ihr Auto ist fertig. Sie können es heute bis achtzehn Uhr abholen. Die Reparatur kostet zweihundertvierzig Euro. Auf Wiederhören.`,de:`Bom dia, aqui é a concessionária Krämer. Seu carro está pronto. O senhor pode buscá-lo hoje até as 18 horas. O conserto custa 240 euros. Até logo.`},
 {t:'mc',q:'Was kostet die Reparatur?',opts:['240 €','214 €','18 €'],a:0}
]},
{id:'l2',title:'Ler (Lesen)',desc:'bilhetes, anúncios, placas',steps:[
 {t:'read',kind:'Lesen · Teil 1',title:'Uma e-mail',text:`Liebe Sandra,
ich habe am Samstag Geburtstag und mache eine kleine Party. Kommst du? Wir fangen um sieben Uhr an. Kannst du bitte einen Salat mitbringen? Getränke habe ich genug. Meine neue Adresse: Lindenstraße 3, zweiter Stock. Leider gibt es keinen Aufzug!
Liebe Grüße
Paula`,de:`Querida Sandra,
no sábado é meu aniversário e vou fazer uma festinha. Você vem? Começamos às sete horas. Você pode trazer uma salada, por favor? Bebidas eu tenho o suficiente. Meu endereço novo: Lindenstraße 3, segundo andar. Infelizmente não tem elevador!
Abraços,
Paula`},
 {t:'mc',q:'Richtig oder falsch? Sandra soll Getränke mitbringen.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Richtig oder falsch? Paula wohnt im zweiten Stock.',opts:['richtig','falsch'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Sie möchten am Sonntag schwimmen gehen. Wo finden Sie Informationen? a) www.hallenbad-nord.de – Öffnungszeiten: täglich 7–21 Uhr, auch am Wochenende · b) www.sportshop-meyer.de – Badehosen und Handtücher im Angebot',opts:['a','b'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Sie suchen einen Deutschkurs am Abend. a) Volkshochschule: Deutsch A1, Mo + Mi 18–20:30 Uhr · b) Sprachschule Lingua: Deutsch A1 intensiv, Mo–Fr 9–13 Uhr',opts:['a','b'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Sie möchten ein gebrauchtes Fahrrad kaufen. a) Fahrradladen Rad & Tat: neue Fahrräder ab 499 € · b) Verkaufe Damenfahrrad, 3 Jahre alt, sehr gut, 120 €. Tel. 0151 2233445',opts:['b','a'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'An der Tür der Arztpraxis: „Die Praxis ist vom 2. bis 16. August geschlossen. Vertretung: Dr. Lang, Goethestraße 12.“ – Richtig oder falsch? Im August kann man zu Dr. Lang gehen.',opts:['richtig','falsch'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'Im Bahnhof: „Fahrkarten bitte vor der Fahrt am Automaten kaufen. Im Bus kein Verkauf!“ – Richtig oder falsch? Man kann die Fahrkarte im Bus kaufen.',opts:['falsch','richtig'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'Im Supermarkt: „Neu! Jetzt auch sonntags 10–16 Uhr geöffnet.“ – Richtig oder falsch? Man kann am Sonntagnachmittag einkaufen.',opts:['richtig','falsch'],a:0},
 {t:'vocab',title:'Palavras da aula e da prova',items:[['der Unterricht', 'a aula'], ['der Schüler / die Schülerin', 'o aluno / a aluna'], ['das Studium', 'os estudos (faculdade)'], ['die Aufgabe', 'a tarefa / o exercício'], ['ankreuzen', 'marcar com X'], ['die Lösung', 'a solução / a resposta'], ['die Aussage', 'a afirmação'], ['das Beispiel', 'o exemplo'], ['zum Beispiel', 'por exemplo'], ['bedeuten', 'significar'], ['das Wort', 'a palavra'], ['der Fehler', 'o erro'], ['das Ergebnis', 'o resultado'], ['der Antwortbogen', 'a folha de respostas'], ['der Kugelschreiber', 'a caneta'], ['der Bleistift', 'o lápis'], ['das Papier', 'o papel'], ['die Papiere (Pl.)', 'os documentos'], ['leicht', 'fácil / leve'], ['schwer', 'difícil / pesado'], ['wichtig', 'importante'], ['möglich', 'possível'], ['wissen', 'saber (uma informação)'], ['jeder / jede / jedes', 'cada / todo'], ['letzt-', 'último'], ['beide', 'os dois / ambos'], ['früher', 'antigamente / antes'], ['zurzeit', 'atualmente'], ['bekommen', 'receber']]},
 {t:'match',q:'Ligue as palavras novas.',pairs:[['ankreuzen', 'marcar com X'], ['der Fehler', 'o erro'], ['bedeuten', 'significar'], ['leicht', 'fácil'], ['wichtig', 'importante']]}
]},
{id:'l3',title:'Escrever (Schreiben)',desc:'formulário · mensagem curta',steps:[
 {t:'info',title:'Schreiben – como é',html:`<p><b>Teil 1:</b> você lê um pequeno texto sobre uma pessoa e completa <b>5 campos</b> de um formulário.</p>
 <p><b>Teil 2:</b> você escreve uma mensagem curta (~30 palavras) sobre <b>3 pontos</b>. Conta também: saudação e despedida certas!</p>
 <div class="ex">Dica: escreva frases simples e completas. Melhor curto e correto do que longo e confuso.</div>`},
 {t:'gap',kind:'Schreiben · Teil 1',q:'Ihre Freundin Maria Costa möchte einen Deutschkurs machen. Sie ist 34 Jahre alt, kommt aus Portugal und wohnt in München, Rosenweg 5, 80331 München. Sie möchte den Kurs am Abend machen und mit Karte bezahlen. → Familienname: ___ · Alter: ___ · Wohnort: ___ · Kurszeit (Vormittag/Abend): ___ · Zahlung (bar/Karte): ___',a:['Costa','34','München','Abend','Karte'],why:'Leia o texto com calma e copie as informações exatas.'},
 {t:'free',kind:'Schreiben · Teil 2',task:'Seu professor de alemão, o Sr. Wagner, convidou o curso para um passeio no sábado. Escreva para ele (~30 palavras): 1) agradeça o convite, 2) diga que você não pode ir e por quê, 3) pergunte se haverá outro passeio.',hint:'Sehr geehrter Herr Wagner, vielen Dank für … Leider kann ich am Samstag nicht …, denn … Gibt es …? Mit freundlichen Grüßen',focus:'formelle Mitteilung, alle 3 Punkte, Anrede/Gruß, denn',model:'Sehr geehrter Herr Wagner,\nvielen Dank für die Einladung zum Ausflug. Leider kann ich am Samstag nicht mitkommen, denn ich muss arbeiten. Machen wir vielleicht im Juni noch einen Ausflug?\nMit freundlichen Grüßen\nLucas Souza'},
 {t:'free',kind:'Schreiben · Teil 2',task:'Escreva para a sua vizinha, Frau Berger (~30 palavras): 1) você vai viajar por uma semana, 2) peça que ela regue as plantas / pegue a correspondência, 3) diga quando volta.',hint:'Liebe Frau Berger, ich fahre … Können Sie bitte …? Ich komme am … zurück. Vielen Dank! Viele Grüße',focus:'Bitte mit können, Datum, trennbare Verben (zurückkommen), Anrede',model:'Liebe Frau Berger,\nich fahre am Montag für eine Woche nach Hamburg. Können Sie bitte meine Blumen gießen und die Post aus dem Briefkasten nehmen? Ich komme am Sonntag zurück. Vielen Dank!\nViele Grüße\nLucas Souza'}
]},
{id:'l4',title:'Falar (Sprechen)',desc:'apresentar-se · perguntar · pedir',steps:[
 {t:'info',title:'Sprechen – as três partes',html:`<table><tr><th>parte</th><th>o que fazer</th></tr>
 <tr><td>Teil 1</td><td>Apresentar-se com as palavras-chave: <span class="es-t">Name? Alter? Land? Wohnort? Sprachen? Beruf? Hobby?</span> Depois: soletrar o nome ou dizer um número.</td></tr>
 <tr><td>Teil 2</td><td>Você recebe um tema (ex. <i>Essen und Trinken</i>) e uma palavra (ex. <i>Frühstück</i>). Faça uma <b>pergunta</b> com ela – e responda à pergunta de outra pessoa.</td></tr>
 <tr><td>Teil 3</td><td>Você recebe uma figura (ex. uma janela) e faz um <b>pedido</b> educado. A outra pessoa reage.</td></tr></table>`},
 {t:'speak',kind:'Sprechen · Teil 1',es:'Ich heiße Lucas. Ich bin achtundzwanzig Jahre alt. Ich komme aus Brasilien und wohne jetzt in Frankfurt. Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch. Ich bin Programmierer. Mein Hobby ist Fußball.',de:'Apresentação com todas as palavras-chave.',tip:'Depois de ouvir e repetir, apresente-se com os <b>seus</b> dados.'},
 {t:'free',kind:'Sprechen · Teil 1',task:'Apresente-se por escrito com as 7 palavras-chave da prova: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby.',hint:'Ich heiße … Ich bin … Jahre alt. Ich komme aus … Ich wohne in … Ich spreche … Ich bin … / Ich arbeite als … Mein Hobby ist …',focus:'vollständige Vorstellung, Verbformen, sein/haben',model:'Ich heiße Lucas. Ich bin 28 Jahre alt. Ich komme aus Brasilien und wohne jetzt in Frankfurt. Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch. Ich bin Programmierer. Mein Hobby ist Fußball.'},
 {t:'tr',kind:'Sprechen · Teil 2',de:'Tema „Essen und Trinken“, palavra „Frühstück“ – faça uma pergunta: (O que você come no café da manhã?)',a:['Was isst du zum Frühstück?','Was essen Sie zum Frühstück?','Was isst du zum Frühstück gern?']},
 {t:'tr',kind:'Sprechen · Teil 2',de:'Tema „Freizeit“, palavra „Wochenende“ – faça uma pergunta: (O que você faz no fim de semana?)',a:['Was machst du am Wochenende?','Was machen Sie am Wochenende?']},
 {t:'tr',kind:'Sprechen · Teil 2',de:'Tema „Familie“, palavra „Geschwister“ – faça uma pergunta: (Você tem irmãos?)',a:['Hast du Geschwister?','Haben Sie Geschwister?']},
 {t:'tr',kind:'Sprechen · Teil 3',de:'Figura: uma janela 🪟 – peça educadamente que abram: (Você pode abrir a janela, por favor?)',a:['Kannst du bitte das Fenster aufmachen?','Können Sie bitte das Fenster aufmachen?','Kannst du bitte das Fenster öffnen?','Können Sie bitte das Fenster öffnen?','Kannst du das Fenster bitte aufmachen?','Können Sie das Fenster bitte aufmachen?']},
 {t:'tr',kind:'Sprechen · Teil 3',de:'Figura: uma caneta 🖊️ – peça a caneta emprestada: (Você me dá a caneta, por favor?)',a:['Kannst du mir bitte den Kuli geben?','Können Sie mir bitte den Kuli geben?','Kannst du mir bitte den Stift geben?','Können Sie mir bitte den Stift geben?','Gib mir bitte den Kuli.','Gib mir bitte den Stift.']},
 {t:'tr',kind:'Sprechen · Teil 3',de:'Figura: um café ☕ – peça um café: (Eu queria um café, por favor.)',a:['Ich hätte gern einen Kaffee, bitte.','Ich möchte einen Kaffee, bitte.','Einen Kaffee, bitte.','Ich hätte gern einen Kaffee.']},
 {t:'info',title:'Parabéns! 🎉',html:`<p>Você chegou ao fim do nível <b>A1</b>. Se você acertou cerca de 60 % deste simulado, você está pronto para a prova <b>Goethe-Zertifikat A1</b> (ou <b>telc Deutsch A1</b>, que tem formato parecido).</p>
 <div class="ex">Dica: faça a gemischte Wiederholung (revisão mista) e os vocabulários todos os dias até a prova. Informações e inscrição: no site do Goethe-Institut ou de uma Volkshochschule perto de você.</div>`}
]}],
resumen:`<h3>Formato da prova A1</h3><table><tr><td>Hören</td><td>~20 min · 3 partes: conversas (2×), avisos (1×), recados (2×)</td></tr><tr><td>Lesen</td><td>25 min · bilhetes/e-mails (richtig/falsch), anúncios (a/b), placas (richtig/falsch)</td></tr><tr><td>Schreiben</td><td>20 min · formulário (5 campos) + mensagem (~30 palavras, 3 pontos)</td></tr><tr><td>Sprechen</td><td>15 min · apresentar-se, perguntar/responder, pedir</td></tr></table>
<h3>Pedidos educados</h3><p class="es-t">Können Sie bitte …? · Kannst du mir bitte … geben? · Ich hätte gern … · Ich möchte …</p>
<h3>Mensagem</h3><p class="es-t">Liebe … / Lieber … – Viele Grüße · Sehr geehrte … – Mit freundlichen Grüßen · alle 3 Punkte!</p>`});
;
/* Deutschkurs A2 (Erklärungen auf Portugiesisch) – Kapitel 13–24.
   Orientierung (nur Themen/Wortschatz/Grammatik-Inventar, keine Texte übernommen): Goethe-Zertifikat A2 – Wortliste und Prüfungsziele.
   Kurs-Person: Lucas Souza aus São Paulo, lebt seit einem Jahr in Frankfurt, arbeitet bei einer Softwarefirma (Kollegin Jana, Chefin Frau Dr. Hoffmann). */

/* ================= KAPITEL 13 · UMZUG & NEUE WOHNUNG ================= */
LANGS.de.course.units.push({id:'k13',n:'13',level:'A2',title:'Umzug & neue Wohnung',sub:'Mudança · Wo? / Wohin? (preposições de lugar) · stellen/stehen, legen/liegen · dass · regras da casa',
goals:['Über einen Umzug sprechen: Ich bin umgezogen.','Wohin stellen wir das Regal? – In die Ecke.','Wo steht das Regal? – In der Ecke.','stellen/stehen, legen/liegen, hängen','Nebensätze mit dass','Hausordnung, Müll trennen, Nachbarn','Eine Einladung zur Einweihungsparty schreiben'],
situacion:{title:'A nova vizinha',npc:'Frau Becker',scene:'Você acabou de se mudar para um apartamento só seu. Na escada você encontra a vizinha do andar de cima.',role:'Du bist Frau Becker, ca. 60 Jahre, freundliche Nachbarin im 3. Stock in Frankfurt-Bornheim. Du siezt. Begrüß Lucas, frag, wann er eingezogen ist und woher er kommt. Erklär ihm zwei Regeln der Hausordnung (Ruhezeit ab 22 Uhr, Müll trennen: Biomüll, Papier, Gelbe Tonne). Sprich einfaches Deutsch (A2), benutze dass-Sätze.',goal:'Apresente-se, conte quando você se mudou e pergunte sobre as regras da casa (lixo, silêncio).'},
placement:[
 {t:'mc',q:'„Eu me mudei.“',opts:['Ich bin umgezogen.','Ich habe umgezogen.','Ich bin umziehen.'],a:0},
 {t:'mc',q:'Wohin stellen wir den Tisch? – ___',opts:['An das Fenster.','An dem Fenster.','Am Fenster.'],a:0},
 {t:'mc',q:'Wo liegt das Buch? – ___',opts:['Auf dem Tisch.','Auf den Tisch.','Auf der Tisch.'],a:0},
 {t:'gap',q:'Ich ___ das Bild an die Wand. (hängen)',a:['hänge']},
 {t:'mc',q:'Ich finde, ___',opts:['dass die Wohnung zu teuer ist.','dass die Wohnung ist zu teuer.','die Wohnung dass zu teuer ist.'],a:0},
 {t:'mc',q:'„o aluguel com as despesas (água, aquecimento …)“',opts:['die Warmmiete','die Kaltmiete','die Kaution'],a:0}],
lessons:[
{id:'l1',title:'A mudança',desc:'umziehen, einziehen, ausziehen · Perfekt de verbos separáveis',steps:[
 {t:'vocab',title:'Mudança',items:[['der Umzug','a mudança'],['ausziehen','sair (de um apartamento)'],['der Karton','a caixa de papelão'],['einpacken','embalar'],['auspacken','desembalar'],['der Vermieter / die Vermieterin','o locador / a locadora'],['der Mieter / die Mieterin','o inquilino / a inquilina'],['die Kaltmiete','o aluguel (sem despesas)'],['die Warmmiete','o aluguel (com despesas)'],['die Nebenkosten (Pl.)','as despesas (água, aquecimento …)'],['die Kaution','o depósito de garantia'],['der Mietvertrag','o contrato de aluguel'],['das Erdgeschoss','o térreo'],['der Stock','o andar'],['der Aufzug','o elevador'],['der Keller','o porão'],['die Garage','a garagem'],['die Heizung','o aquecimento']]},
 {t:'info',title:'Perfekt dos verbos separáveis',html:`<p>No particípio, o <b>ge-</b> fica <b>entre</b> o prefixo e o verbo:</p>
 <table><tr><td class="es-t">einpacken → eingepackt</td><td class="es-t">Ich habe alles eingepackt.</td></tr>
 <tr><td class="es-t">aufräumen → aufgeräumt</td><td class="es-t">Wir haben die Küche aufgeräumt.</td></tr>
 <tr><td class="es-t">anrufen → angerufen</td><td class="es-t">Hast du den Vermieter angerufen?</td></tr>
 <tr><td class="es-t">umziehen → umgezogen</td><td class="es-t">Ich <b>bin</b> letzte Woche umgezogen.</td></tr>
 <tr><td class="es-t">einziehen → eingezogen</td><td class="es-t">Wann <b>bist</b> du eingezogen?</td></tr></table>
 <div class="ojo"><b>umziehen, einziehen, ausziehen</b> = mudança de lugar → Perfekt com <b>sein</b>.</div>`},
 {t:'mc',q:'Wann ___ du in die neue Wohnung eingezogen?',opts:['bist','hast','ist'],a:0},
 {t:'gap',q:'Ich habe gestern alle Kartons ___. (auspacken)',a:['ausgepackt']},
 {t:'gap',q:'Tom hat mir beim Umzug geholfen. Er hat die schweren Kartons ___. (tragen)',a:['getragen']},
 {t:'mc',q:'Die Wohnung kostet 700 € plus 150 € Nebenkosten. Die ___ ist 850 €.',opts:['Warmmiete','Kaltmiete','Kaution'],a:0},
 {t:'match',q:'Ligue.',pairs:[['der Aufzug','o elevador'],['der Keller','o porão'],['die Kaution','o depósito de garantia'],['einpacken','embalar'],['der Stock','o andar']]},
 {t:'read',title:'Leitura: Eine Nachricht von Lucas',text:`Hallo Mama, hallo Papa!
Endlich habe ich eine eigene Wohnung! Ich bin am Samstag umgezogen. Tom und Jana haben mir geholfen. Wir haben alles in einen Transporter gepackt und sind nach Bornheim gefahren. Die Wohnung ist im dritten Stock, und es gibt keinen Aufzug – die Waschmaschine war sehr schwer! Die Wohnung hat zwei Zimmer, eine kleine Küche und einen Balkon. Die Warmmiete ist 820 Euro. Das ist nicht billig, aber für Frankfurt ist es okay. Fotos schicke ich morgen!
Liebe Grüße, Lucas`,de:`Oi mãe, oi pai!
Finalmente tenho um apartamento só meu! Eu me mudei no sábado. O Tom e a Jana me ajudaram. Colocamos tudo numa van e fomos para Bornheim. O apartamento fica no terceiro andar e não tem elevador – a máquina de lavar estava muito pesada! O apartamento tem dois cômodos, uma cozinha pequena e uma varanda. O aluguel com despesas é 820 euros. Não é barato, mas para Frankfurt está ok. Mando fotos amanhã!
Um abraço, Lucas`},
 {t:'mc',q:'Wer hat Lucas beim Umzug geholfen?',opts:['Tom und Jana','seine Eltern','Frau Hoffmann'],a:0},
 {t:'mc',q:'Richtig oder falsch? Das Haus hat einen Aufzug.',opts:['falsch','richtig'],a:0},
 {t:'tr',de:'Eu me mudei na semana passada.',a:['Ich bin letzte Woche umgezogen.','Letzte Woche bin ich umgezogen.']},
 {t:'speak',es:'Ich bin letzten Samstag umgezogen. Meine Wohnung ist im dritten Stock.',de:'Eu me mudei no sábado passado. Meu apartamento fica no terceiro andar.',tip:'<i>umgezogen</i> – o <b>ge</b> fica no meio.'}
]},
{id:'l2',title:'Wo? ou Wohin?',desc:'preposições de lugar · stellen/stehen, legen/liegen, hängen',steps:[
 {t:'vocab',title:'Móveis e lugares',items:[['das Regal','a estante'],['der Teppich','o tapete'],['der Spiegel','o espelho'],['der Vorhang','a cortina'],['das Bild','o quadro / a imagem'],['die Wand','a parede'],['die Decke','o teto / o cobertor'],['der Boden','o chão'],['stellen','colocar (em pé)'],['stehen','estar (em pé)'],['legen','colocar (deitado)'],['liegen','estar (deitado)'],['hängen','pendurar / estar pendurado'],['über','acima de / sobre'],['unter','embaixo de'],['zwischen','entre'],['hinter','atrás de'],['neben','ao lado de']]},
 {t:'info',title:'Wo? (dativo) – Wohin? (acusativo)',html:`<p>As preposições <span class="es-t">in, an, auf, über, unter, vor, hinter, neben, zwischen</span> usam dois casos:</p>
 <table><tr><th>Wohin? → movimento → <b>acusativo</b></th><th>Wo? → lugar → <b>dativo</b></th></tr>
 <tr><td class="es-t">Ich stelle das Regal in <b>die</b> Ecke.</td><td class="es-t">Das Regal steht in <b>der</b> Ecke.</td></tr>
 <tr><td class="es-t">Ich lege das Buch auf <b>den</b> Tisch.</td><td class="es-t">Das Buch liegt auf <b>dem</b> Tisch.</td></tr>
 <tr><td class="es-t">Ich hänge das Bild an <b>die</b> Wand.</td><td class="es-t">Das Bild hängt an <b>der</b> Wand.</td></tr>
 <tr><td class="es-t">Ich stelle die Lampe neben <b>das</b> Sofa.</td><td class="es-t">Die Lampe steht neben <b>dem</b> Sofa.</td></tr></table>
 <div class="ex">Dativo: der/das → <b>dem</b>, die → <b>der</b>, plural → <b>den</b> (+n): <span class="es-t">zwischen den Fenstern</span>. Contrações: <span class="es-t">in dem → im, an dem → am, in das → ins</span>.</div>
 <div class="ojo"><b>stellen, legen, hängen</b> (ação) → Wohin? → acusativo. <b>stehen, liegen, hängen</b> (estado) → Wo? → dativo.</div>`},
 {t:'mc',q:'Wohin stellst du den Fernseher? – ___ Ecke.',opts:['In die','In der','Im'],a:0},
 {t:'mc',q:'Wo liegt der Schlüssel? – ___ Tisch.',opts:['Auf dem','Auf den','Auf die'],a:0},
 {t:'mc',q:'Ich ___ den Teppich vor das Sofa.',opts:['lege','liege','stelle'],a:0,why:'Tapete fica deitado → <b>legen</b> (ação, acusativo).'},
 {t:'gap',q:'Der Spiegel hängt an ___ Wand. (die)',a:['der']},
 {t:'gap',q:'Ich stelle die Blumen auf ___ Balkon. (der)',a:['den']},
 {t:'gap',q:'Die Katze schläft unter ___ Bett. (das)',a:['dem']},
 {t:'gap',q:'Wir gehen heute Abend ___ Kino. (in + das)',a:['ins']},
 {t:'order',es:'Das Regal steht zwischen dem Fenster und der Tür',de:'A estante fica entre a janela e a porta.'},
 {t:'dialog',place:'Neue Wohnung',title:'Onde fica o quê?',scene:'O Tom ajuda você a arrumar o apartamento novo.',lines:[
  {n:'Tom',es:'So, wohin stellen wir das Regal?',de:'E aí, onde a gente coloca a estante?'},
  {you:true,opts:[{es:'Stell es bitte in die Ecke, neben das Fenster.',ok:true},{es:'Stell es bitte in der Ecke, neben dem Fenster.',ok:false,why:'<i>stellen</i> = movimento → Wohin? → acusativo: <b>in die</b> Ecke, <b>neben das</b> Fenster.'}]},
  {n:'Tom',es:'Okay. Und der Spiegel? Liegt der noch im Flur?',de:'Ok. E o espelho? Ainda está no corredor?'},
  {you:true,opts:[{es:'Ja, er liegt auf dem Boden. Wir hängen ihn an die Wand im Bad.',ok:true},{es:'Ja, er legt auf den Boden.',ok:false,why:'Estado → <b>liegen</b> + dativo: <i>Er liegt auf dem Boden.</i>'}]},
  {n:'Tom',es:'Gute Idee. Dann sind wir fertig – Pizza?',de:'Boa ideia. Aí terminamos – pizza?'},
  {you:true,opts:[{es:'Super, ich lade dich ein!',ok:true},{es:'Ich bin fertig mit dir.',ok:false,why:'<i>Ich bin fertig mit dir</i> soa como „cansei de você“ – cuidado!'}]}]},
 {t:'tr',de:'Eu penduro o quadro na parede.',a:['Ich hänge das Bild an die Wand.']},
 {t:'tr',de:'O livro está em cima da mesa.',a:['Das Buch liegt auf dem Tisch.']}
]},
{id:'l3',title:'Regras da casa e vizinhos',desc:'Hausordnung · Müll trennen · Nebensätze mit dass',steps:[
 {t:'vocab',title:'Morar num prédio',items:[['die Hausordnung','as regras do prédio'],['der Hausmeister / die Hausmeisterin','o zelador / a zeladora'],['der Nachbar / die Nachbarin','o vizinho / a vizinha'],['nebenan','ao lado (vizinho)'],['die Ruhe','o silêncio / a tranquilidade'],['die Ruhezeit','o horário de silêncio'],['stören','incomodar'],['der Müll','o lixo'],['die Mülltonne','a lixeira (grande)'],['trennen','separar'],['der Biomüll','o lixo orgânico'],['das Altpapier','o papel para reciclar'],['das Altglas','o vidro para reciclar'],['das Treppenhaus','a escada (do prédio)'],['der Briefkasten','a caixa de correio'],['die Klingel','a campainha'],['klingeln','tocar a campainha'],['sich beschweren','reclamar']]},
 {t:'info',title:'Frases com dass',html:`<p>Depois de <b>dass</b>, o verbo conjugado vai para o <b>final</b> da frase:</p>
 <div class="ex"><span class="es-t">Die Wohnung ist hell.</span> → <span class="es-t">Ich finde, dass die Wohnung hell <b>ist</b>.</span></div>
 <table><tr><td class="es-t">Ich glaube, dass …</td><td>Eu acho que …</td></tr>
 <tr><td class="es-t">Ich finde, dass …</td><td>Eu acho (opinião) que …</td></tr>
 <tr><td class="es-t">Ich weiß, dass …</td><td>Eu sei que …</td></tr>
 <tr><td class="es-t">Frau Becker sagt, dass …</td><td>A Sra. Becker diz que …</td></tr>
 <tr><td class="es-t">Es ist wichtig, dass …</td><td>É importante que …</td></tr></table>
 <div class="ex">Com modal ou Perfekt: <span class="es-t">…, dass man nach 22 Uhr leise sein <b>muss</b>.</span> · <span class="es-t">…, dass ich gestern zu laut gewesen <b>bin</b>.</span></div>
 <div class="ojo">Antes de <b>dass</b> sempre vem vírgula.</div>`},
 {t:'mc',q:'Frau Becker sagt, dass man den Müll trennen ___.',opts:['muss','muss man','müssen'],a:0},
 {t:'mc',q:'Ich weiß, ___',opts:['dass du am Samstag eine Party machst.','dass du machst am Samstag eine Party.','dass machst du am Samstag eine Party.'],a:0},
 {t:'gap',q:'Es ist wichtig, dass man im Treppenhaus leise ___. (sein)',a:['ist']},
 {t:'order',es:'Ich glaube dass der Hausmeister im Erdgeschoss wohnt',de:'Eu acho que o zelador mora no térreo.'},
 {t:'match',q:'Onde vai o lixo?',pairs:[['die Zeitung','das Altpapier'],['die Bananenschale','der Biomüll'],['die Weinflasche','das Altglas'],['der Joghurtbecher','die Gelbe Tonne']]},
 {t:'read',title:'Leitura: Hausordnung (trecho)',text:`HAUSORDNUNG – Bornheimer Straße 12
1. Ruhezeiten: Bitte seien Sie von 22 bis 7 Uhr und am Sonntag leise.
2. Müll: Bitte trennen Sie den Müll. Papier kommt in die blaue Tonne, Biomüll in die braune Tonne, Verpackungen in die gelbe Tonne. Glas bringen Sie bitte zum Container an der Ecke.
3. Treppenhaus: Fahrräder und Kinderwagen dürfen nicht im Treppenhaus stehen. Bitte stellen Sie sie in den Keller.
4. Bei Problemen mit der Heizung oder dem Wasser rufen Sie bitte den Hausmeister an: Herr Kaya, 069 445 21.`,de:`REGRAS DO PRÉDIO – Bornheimer Straße 12
1. Horários de silêncio: por favor, faça silêncio das 22h às 7h e no domingo.
2. Lixo: por favor, separe o lixo. Papel vai na lixeira azul, orgânico na marrom, embalagens na amarela. O vidro, por favor, leve ao contêiner na esquina.
3. Escada: bicicletas e carrinhos de bebê não podem ficar na escada. Por favor, coloque-os no porão.
4. Em caso de problemas com o aquecimento ou a água, ligue para o zelador: Sr. Kaya, 069 445 21.`},
 {t:'mc',q:'Wohin kommt eine Zeitung?',opts:['in die blaue Tonne','in die gelbe Tonne','zum Container an der Ecke'],a:0},
 {t:'mc',q:'Wo darf Lucas sein Fahrrad abstellen?',opts:['im Keller','im Treppenhaus','vor der Tür'],a:0},
 {t:'mc',q:'Die Heizung ist kaputt. Was macht Lucas?',opts:['Er ruft Herrn Kaya an.','Er schreibt der Vermieterin.','Er bringt sie zum Container.'],a:0},
 {t:'tr',de:'Eu acho que a cozinha é pequena demais.',a:['Ich finde, dass die Küche zu klein ist.','Ich glaube, dass die Küche zu klein ist.']}
]},
{id:'l4',title:'Ler e escrever: festa de inauguração',desc:'Einladung zur Einweihungsparty · Antwort',steps:[
 {t:'vocab',title:'Convites',items:[['die Einweihungsparty','a festa de inauguração (da casa)'],['einladen','convidar'],['die Einladung','o convite'],['feiern','comemorar'],['Bescheid sagen','avisar'],['sich freuen auf','estar ansioso por'],['leider','infelizmente']]},
 {t:'read',title:'Leitura: Einladung',text:`Liebe Nachbarinnen und Nachbarn,
ich bin der Neue im 2. Stock! Ich heiße Lucas und komme aus São Paulo. Am Samstag, den 14. Mai, mache ich ab 19 Uhr eine kleine Einweihungsparty und lade Sie herzlich ein. Es gibt brasilianisches Essen und Musik – aber keine Angst, um 22 Uhr machen wir die Musik leise! Bitte sagen Sie mir bis Donnerstag Bescheid, ob Sie kommen.
Viele Grüße
Lucas Souza (Wohnung 5)`,de:`Queridas vizinhas e queridos vizinhos,
sou o novo morador do 2º andar! Meu nome é Lucas e venho de São Paulo. No sábado, 14 de maio, a partir das 19h, vou dar uma pequena festa de inauguração e convido vocês de coração. Vai ter comida brasileira e música – mas não se preocupem, às 22h a gente abaixa a música! Por favor, me avisem até quinta-feira se vêm.
Abraços
Lucas Souza (apartamento 5)`},
 {t:'mc',q:'Wann beginnt die Party?',opts:['am Samstag um 19 Uhr','am Donnerstag um 19 Uhr','am Samstag um 22 Uhr'],a:0},
 {t:'mc',q:'Was sollen die Nachbarn bis Donnerstag machen?',opts:['Bescheid sagen','Essen mitbringen','die Musik leise machen'],a:0},
 {t:'info',title:'Responder a um convite',html:`<table><tr><th>Sim</th><th>Não</th></tr>
 <tr><td class="es-t">Vielen Dank für die Einladung! Ich komme gern.</td><td class="es-t">Vielen Dank für die Einladung, aber leider kann ich nicht kommen.</td></tr>
 <tr><td class="es-t">Soll ich etwas mitbringen?</td><td class="es-t">Ich bin am Wochenende bei meiner Schwester.</td></tr>
 <tr><td class="es-t">Ich freue mich auf die Party!</td><td class="es-t">Ich wünsche dir viel Spaß!</td></tr></table>`},
 {t:'free',task:'Você recebeu o convite de uma colega para a festa de inauguração dela. Escreva uma resposta (~30–40 palavras): 1) agradeça, 2) diga se vai ou não e por quê, 3) pergunte o que você pode levar ou proponha outro encontro.',hint:'Liebe Jana, vielen Dank für … Ich komme gern / Leider kann ich nicht, denn … Soll ich … mitbringen? Viele Grüße',focus:'Einladung beantworten, denn/weil, Modalverben, Grußformeln',model:'Liebe Jana,\nvielen Dank für die Einladung! Ich komme gern zu deiner Party. Soll ich etwas mitbringen? Ich kann einen Salat machen oder Getränke kaufen. Sag mir bitte Bescheid.\nIch freue mich!\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Mudança (Perfekt com sein)</h3><p class="es-t">Ich bin umgezogen / eingezogen / ausgezogen. · Ich habe alles eingepackt.</p>
<h3>Wo? (dativo) – Wohin? (acusativo)</h3><table><tr><td class="es-t">Ich stelle das Regal in die Ecke.</td><td class="es-t">Das Regal steht in der Ecke.</td></tr><tr><td class="es-t">Ich lege das Buch auf den Tisch.</td><td class="es-t">Das Buch liegt auf dem Tisch.</td></tr><tr><td class="es-t">Ich hänge das Bild an die Wand.</td><td class="es-t">Das Bild hängt an der Wand.</td></tr></table>
<p class="es-t">in · an · auf · über · unter · vor · hinter · neben · zwischen</p>
<h3>dass (verbo no final)</h3><p class="es-t">Ich finde, dass die Wohnung hell ist. · Er sagt, dass man leise sein muss.</p>
<h3>Lixo</h3><p class="es-t">Altpapier (blau) · Biomüll (braun) · Verpackungen (gelb) · Altglas (Container)</p>`});

/* ================= KAPITEL 14 · BÜRO & MEDIEN ================= */
LANGS.de.course.units.push({id:'k14',n:'14',level:'A2',title:'Büro & Medien',sub:'Computador e internet · weil · pedidos educados: Könnten Sie …? · remarcar compromissos · e-mail',
goals:['Computer & Internet: speichern, herunterladen, das Passwort','Gründe nennen mit weil','Höflich bitten: Könnten Sie …? Würden Sie …? Hätten Sie Zeit?','Termine verschieben und absagen','Eine E-Mail an eine Kollegin schreiben'],
situacion:{title:'Problema no computador',npc:'Herr Albers (IT)',scene:'O seu notebook não liga e você tem uma reunião em uma hora. Você liga para o suporte de TI da empresa.',role:'Du bist Herr Albers vom IT-Support einer Softwarefirma in Frankfurt. Du duzt Lucas (in der Firma duzen sich alle). Frag, was nicht funktioniert und seit wann. Gib einfache Tipps (Akku laden, neu starten). Wenn es nicht hilft: Er soll den Laptop vorbeibringen, er bekommt ein Ersatzgerät. Sprich einfaches Deutsch (A2), benutze weil und höfliche Fragen.',goal:'Explique o problema (weil …), peça ajuda com educação (Könntest du …?) e combine quando você leva o notebook.'},
placement:[
 {t:'mc',q:'Ich komme nicht, ___',opts:['weil ich krank bin.','weil ich bin krank.','weil bin ich krank.'],a:0},
 {t:'mc',q:'„O senhor poderia me ajudar?“ (educado)',opts:['Könnten Sie mir helfen?','Können Sie mir hilft?','Konnten Sie mir helfen?'],a:0},
 {t:'gap',q:'Ich habe die Datei auf dem Laptop ___. (speichern – Perfekt)',a:['gespeichert']},
 {t:'mc',q:'„Eu preciso remarcar a reunião.“',opts:['Ich muss das Meeting verschieben.','Ich muss das Meeting schieben weg.','Ich muss das Meeting verschiebe.'],a:0},
 {t:'mc',q:'Warum lernst du Deutsch? – ___',opts:['Weil ich in Deutschland arbeite.','Denn ich in Deutschland arbeite.','Weil ich arbeite in Deutschland.'],a:0},
 {t:'gap',q:'___ Sie am Montag Zeit? (haben – educado)',a:['Hätten']}],
lessons:[
{id:'l1',title:'Computador e internet',desc:'speichern, herunterladen, das Passwort …',steps:[
 {t:'vocab',title:'No computador',items:[['der Laptop','o notebook'],['der Bildschirm','a tela'],['die Tastatur','o teclado'],['die Maus','o mouse'],['die Datei','o arquivo'],['der Ordner','a pasta'],['speichern','salvar'],['löschen','apagar'],['öffnen','abrir'],['schließen','fechar'],['herunterladen','baixar'],['hochladen','enviar (fazer upload)'],['ausdrucken','imprimir'],['das Passwort','a senha'],['sich anmelden','fazer login / se inscrever'],['der Link','o link'],['die Homepage','a página (site)'],['das WLAN','o Wi-Fi'],['der Akku','a bateria'],['aufladen','carregar (bateria)'],['funktionieren','funcionar'],['kaputt','quebrado']]},
 {t:'mc',q:'Mein Akku ist leer. Ich muss den Laptop ___.',opts:['aufladen','herunterladen','löschen'],a:0},
 {t:'mc',q:'Ich habe mein ___ vergessen. Ich kann mich nicht anmelden.',opts:['Passwort','WLAN','Ordner'],a:0},
 {t:'gap',q:'Kannst du mir das Dokument per E-Mail schicken? Dann ___ ich es ___. (ausdrucken)',a:['drucke','aus']},
 {t:'match',q:'Ligue.',pairs:[['speichern','salvar'],['löschen','apagar'],['herunterladen','baixar'],['der Bildschirm','a tela'],['die Datei','o arquivo']]},
 {t:'gap',q:'Oh nein! Ich habe die Datei nicht ___. (speichern – Perfekt)',a:['gespeichert']},
 {t:'order',es:'Klick bitte auf den Link und lade die Datei herunter',de:'Clique no link, por favor, e baixe o arquivo.'},
 {t:'tr',de:'O Wi-Fi não funciona.',a:['Das WLAN funktioniert nicht.']},
 {t:'tr',de:'Eu apaguei o arquivo.',a:['Ich habe die Datei gelöscht.']}
]},
{id:'l2',title:'Por quê? – weil',desc:'Gründe nennen · weil vs. denn',steps:[
 {t:'info',title:'weil',html:`<p><b>weil</b> = porque. Como em <b>dass</b>, o verbo vai para o <b>final</b>:</p>
 <div class="ex"><span class="es-t">Ich komme später, <b>weil</b> der Bus Verspätung <b>hat</b>.</span></div>
 <table><tr><td class="es-t">Warum bist du so müde? – Weil ich schlecht geschlafen <b>habe</b>.</td></tr>
 <tr><td class="es-t">Ich bleibe zu Hause, weil ich arbeiten <b>muss</b>.</td></tr>
 <tr><td class="es-t">Weil das WLAN nicht <b>funktioniert</b>, arbeite ich im Café.</td></tr></table>
 <div class="ojo"><b>denn</b> (A1) também significa „porque“, mas a ordem fica normal: <span class="es-t">…, denn der Bus hat Verspätung.</span> Com <b>weil</b>: <span class="es-t">…, weil der Bus Verspätung hat.</span></div>
 <div class="ex">Se a frase começa com <b>weil</b>, a segunda parte começa com o verbo: <span class="es-t">Weil es regnet, <b>nehme</b> ich den Bus.</span></div>`},
 {t:'mc',q:'Ich arbeite heute im Homeoffice, weil ___',opts:['meine Tochter krank ist.','meine Tochter ist krank.','ist meine Tochter krank.'],a:0},
 {t:'mc',q:'Ich arbeite heute im Homeoffice, denn ___',opts:['meine Tochter ist krank.','meine Tochter krank ist.','krank ist meine Tochter.'],a:0},
 {t:'gap',q:'Lucas lernt viel, weil er die Prüfung bestehen ___. (wollen)',a:['will']},
 {t:'gap',q:'Ich bin zu spät, weil ich den Bus verpasst ___. (haben)',a:['habe']},
 {t:'order',es:'Weil das Wetter schön ist gehen wir in den Park',de:'Como o tempo está bonito, vamos ao parque.'},
 {t:'mc',q:'Warum lernst du Deutsch? – ___',opts:['Weil ich in Frankfurt wohne.','Weil ich wohne in Frankfurt.','Denn ich in Frankfurt wohne.'],a:0},
 {t:'tr',de:'Eu não vou à festa porque tenho que trabalhar. (weil)',a:['Ich gehe nicht zur Party, weil ich arbeiten muss.','Ich komme nicht zur Party, weil ich arbeiten muss.']},
 {t:'speak',es:'Ich lerne Deutsch, weil ich in Frankfurt arbeite und neue Freunde finden möchte.',de:'Eu estudo alemão porque trabalho em Frankfurt e quero fazer novos amigos.',tip:'Depois de <b>weil</b>: verbo no final – <i>arbeite</i>, <i>möchte</i>.'}
]},
{id:'l3',title:'Pedidos educados e compromissos',desc:'Könnten Sie …? · Hätten Sie Zeit? · verschieben, absagen',steps:[
 {t:'vocab',title:'Compromissos',items:[['die Besprechung','a reunião'],['verschieben','remarcar / adiar'],['vereinbaren','combinar'],['passen','servir / ficar bom (horário)'],['dringend','urgente'],['erledigen','resolver / fazer'],['schaffen','conseguir (fazer)'],['Bescheid geben','dar notícia / avisar'],['die Verspätung','o atraso'],['pünktlich','pontual'],['der Kalender','a agenda / o calendário'],['die Ausnahme','a exceção']]},
 {t:'info',title:'Mais educado: Konjunktiv II',html:`<p>Para pedidos educados, o alemão usa formas especiais (Konjunktiv II):</p>
 <table><tr><td class="es-t">Können Sie …? → <b>Könnten</b> Sie mir helfen?</td><td>O senhor poderia me ajudar?</td></tr>
 <tr><td class="es-t">Haben Sie …? → <b>Hätten</b> Sie am Montag Zeit?</td><td>O senhor teria tempo na segunda?</td></tr>
 <tr><td class="es-t"><b>Würden</b> Sie mir bitte die Datei schicken?</td><td>O senhor poderia me mandar o arquivo?</td></tr>
 <tr><td class="es-t">Ich <b>hätte</b> gern einen Termin.</td><td>Eu gostaria de marcar um horário.</td></tr></table>
 <div class="ex">Com <i>du</i>: <span class="es-t">Könntest du …? · Hättest du Zeit? · Würdest du …?</span></div>`},
 {t:'mc',q:'Mais educado: „Schick mir die Datei!“',opts:['Könntest du mir bitte die Datei schicken?','Kannst du mir die Datei schicken!','Konntest du mir die Datei schicken?'],a:0},
 {t:'gap',q:'___ Sie morgen um zehn Uhr Zeit? (haben – educado)',a:['Hätten']},
 {t:'gap',q:'___ du mir bitte helfen? (können – educado)',a:['Könntest']},
 {t:'dialog',place:'Büro',title:'Remarcar a reunião',scene:'Você precisa remarcar a reunião com a sua chefe, a Sra. Hoffmann.',lines:[
  {n:'Frau Hoffmann',es:'Hallo Lucas, wir sehen uns ja um zwei zur Besprechung, oder?',de:'Oi Lucas, a gente se vê às duas na reunião, né?'},
  {you:true,opts:[{es:'Eigentlich wollte ich fragen: Könnten wir die Besprechung verschieben? Ich muss heute um zwei zum Arzt.',ok:true},{es:'Nein, ich komme nicht.',ok:false,why:'Com a chefe: explique e peça de forma educada (<i>Könnten wir …?</i>).'}]},
  {n:'Frau Hoffmann',es:'Kein Problem. Passt es Ihnen morgen um zehn?',de:'Sem problema. Amanhã às dez fica bom para você?'},
  {you:true,opts:[{es:'Ja, morgen um zehn passt mir gut. Vielen Dank!',ok:true},{es:'Ja, morgen um zehn passe ich gut.',ok:false,why:'<i>passen</i> + dativo: <b>Es passt mir</b> – „fica bom para mim“.'}]},
  {n:'Frau Hoffmann',es:'Gut. Und gute Besserung!',de:'Ótimo. E melhoras!'},
  {you:true,opts:[{es:'Danke! Ich schicke Ihnen die Präsentation heute Abend.',ok:true},{es:'Gleichfalls!',ok:false,why:'<i>Gleichfalls</i> = „igualmente“ – não serve para „melhoras“.'}]}]},
 {t:'mc',q:'Passt es dir am Freitag? – ___',opts:['Nein, leider nicht. Am Freitag habe ich keine Zeit.','Nein, ich passe nicht.','Ja, ich passe am Freitag.'],a:0},
 {t:'tr',de:'O senhor poderia me ligar de volta? (educado)',a:['Könnten Sie mich zurückrufen?','Könnten Sie mich bitte zurückrufen?','Würden Sie mich zurückrufen?','Würden Sie mich bitte zurückrufen?']},
 {t:'tr',de:'Eu preciso cancelar o compromisso.',a:['Ich muss den Termin absagen.']}
]},
{id:'l4',title:'Ler e escrever: e-mails no trabalho',desc:'Rundmail lesen · E-Mail an eine Kollegin',steps:[
 {t:'read',title:'Leitura: Rundmail vom IT-Support',text:`Liebe Kolleginnen und Kollegen,
am Freitag, den 20. Juni, bekommen alle Computer ein Update. Bitte speichern Sie bis Donnerstag um 18 Uhr alle Dateien auf dem Server und schalten Sie Ihren Computer nicht aus. Am Freitag können Sie von 8 bis 12 Uhr nicht arbeiten. Ab Montag brauchen Sie ein neues Passwort – Sie bekommen es per SMS. Bei Fragen schreiben Sie bitte an it-support@firma.de oder rufen Sie die Nummer 120 an.
Viele Grüße
Ihr IT-Team`,de:`Queridas colegas e queridos colegas,
na sexta-feira, 20 de junho, todos os computadores vão receber uma atualização. Por favor, salvem todos os arquivos no servidor até quinta-feira às 18h e não desliguem o computador. Na sexta, das 8h às 12h, não vai ser possível trabalhar. A partir de segunda vocês vão precisar de uma senha nova – vocês recebem por SMS. Em caso de dúvidas, escrevam para it-support@firma.de ou liguem para o ramal 120.
Abraços
Equipe de TI`},
 {t:'mc',q:'Was müssen die Mitarbeiter bis Donnerstag machen?',opts:['Dateien auf dem Server speichern','den Computer ausschalten','ein neues Passwort wählen'],a:0},
 {t:'mc',q:'Richtig oder falsch? Am Freitag kann man den ganzen Tag nicht arbeiten.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Wie bekommt man das neue Passwort?',opts:['per SMS','per E-Mail','beim IT-Team'],a:0},
 {t:'free',task:'Escreva uma e-mail (~30–40 palavras) para a sua colega Jana: 1) você não pode ir à reunião de quinta, 2) por quê (weil …), 3) proponha um novo horário e peça uma resposta.',hint:'Liebe Jana, leider kann ich am Donnerstag nicht …, weil … Hättest du am … Zeit? Könntest du mir kurz Bescheid geben? Viele Grüße',focus:'weil-Sätze, Konjunktiv II (Hättest du …? Könntest du …?), Terminvorschlag',model:'Liebe Jana,\nleider kann ich am Donnerstag nicht zur Besprechung kommen, weil ich einen Arzttermin habe. Hättest du am Freitag um zehn Uhr Zeit? Könntest du mir bitte kurz Bescheid geben?\nViele Grüße\nLucas'}
]}],
resumen:`<h3>No computador</h3><p class="es-t">speichern · löschen · herunterladen · hochladen · ausdrucken · das Passwort · das WLAN · der Akku</p>
<h3>weil (verbo no final)</h3><p class="es-t">Ich komme später, weil der Bus Verspätung hat. · Weil es regnet, nehme ich den Bus.</p><p>Compare: <span class="es-t">…, denn der Bus hat Verspätung.</span></p>
<h3>Pedidos educados</h3><p class="es-t">Könnten Sie …? · Hätten Sie Zeit? · Würden Sie …? · Ich hätte gern …</p>
<h3>Compromissos</h3><p class="es-t">einen Termin vereinbaren / verschieben / absagen · Passt es Ihnen …? – Ja, das passt mir.</p>`});

/* ================= KAPITEL 15 · GESUNDHEIT & SPORT ================= */
LANGS.de.course.units.push({id:'k15',n:'15',level:'A2',title:'Gesundheit & Sport',sub:'Esporte · verbos reflexivos · seit · na farmácia · emergência',
goals:['Sport & Bewegung: joggen, trainieren, der Verein','Reflexive Verben: sich bewegen, sich fühlen, sich freuen','seit + Dativ: seit drei Tagen','Beim Arzt und in der Apotheke','Im Notfall: 112, der Unfall','Eine SMS: Training absagen'],
situacion:{title:'Na farmácia',npc:'Apothekerin',scene:'Você está resfriado há três dias: tosse, coriza e dor de garganta. Você vai à farmácia.',role:'Du bist Apothekerin in einer Apotheke in Frankfurt, freundlich. Du siezt. Frag: Was fehlt Ihnen? Seit wann? Haben Sie Fieber? Nehmen Sie andere Medikamente? Empfiehl Hustensaft und Halstabletten, erkläre die Dosierung (dreimal täglich nach dem Essen). Wenn es in drei Tagen nicht besser ist: zum Arzt gehen. Sprich einfaches Deutsch (A2).',goal:'Diga o que você tem e desde quando (seit), pergunte como tomar o remédio e quanto custa.'},
placement:[
 {t:'mc',q:'„Eu me sinto mal.“',opts:['Ich fühle mich schlecht.','Ich fühle schlecht.','Ich fühle mir schlecht.'],a:0},
 {t:'gap',q:'Ich habe ___ drei Tagen Husten. (desde)',a:['seit']},
 {t:'mc',q:'Wir freuen ___ auf das Wochenende.',opts:['uns','euch','sich'],a:0},
 {t:'mc',q:'„Ele se machucou.“',opts:['Er hat sich verletzt.','Er ist sich verletzt.','Er hat ihn verletzt.'],a:0},
 {t:'mc',q:'Wo kauft man Medikamente?',opts:['in der Apotheke','in der Praxis','im Krankenwagen'],a:0},
 {t:'gap',q:'Du musst dich mehr ___. (bewegen)',a:['bewegen']}],
lessons:[
{id:'l1',title:'Esporte e movimento',desc:'joggen, trainieren, der Verein …',steps:[
 {t:'vocab',title:'Esporte',items:[['joggen','correr (cooper)'],['trainieren','treinar'],['das Training','o treino'],['das Fitnessstudio','a academia'],['der Verein','o clube / a associação'],['die Mannschaft','o time'],['das Spiel','o jogo'],['der Ball','a bola'],['Fußball spielen','jogar futebol'],['Rad fahren','andar de bicicleta'],['der Berg','a montanha'],['fit','em forma'],['die Bewegung','o movimento / a atividade física'],['gesund','saudável'],['ungesund','não saudável'],['das Gewicht','o peso'],['abnehmen','emagrecer'],['zunehmen','engordar']]},
 {t:'mc',q:'Lucas spielt jeden Dienstag Fußball. Er ist in einem ___.',opts:['Verein','Fitnessstudio','Berg'],a:0},
 {t:'mc',q:'Unsere Mannschaft hat 3:1 ___. Super!',opts:['gewonnen','verloren','trainiert'],a:0},
 {t:'gap',q:'Ich esse zu viel Schokolade. Ich habe zwei Kilo ___. (zunehmen – Perfekt)',a:['zugenommen']},
 {t:'match',q:'Ligue.',pairs:[['joggen','correr'],['wandern','fazer trilha'],['gewinnen','ganhar'],['die Mannschaft','o time'],['das Fitnessstudio','a academia']]},
 {t:'read',title:'Leitura: Lucas und der Sport',text:`In Brasilien hat Lucas jeden Tag Fußball gespielt. In Frankfurt hatte er am Anfang keine Zeit für Sport, weil er so viel arbeiten musste. Jetzt ist er in einem Fußballverein. Die Mannschaft trainiert dienstags und donnerstags, am Samstag gibt es oft ein Spiel. Lucas sagt: „Im Verein habe ich auch viele Freunde gefunden. Und mein Deutsch ist besser geworden – auf dem Platz spricht niemand Englisch!“`,de:`No Brasil, o Lucas jogava futebol todo dia. Em Frankfurt, no começo, ele não tinha tempo para esporte, porque precisava trabalhar muito. Agora ele está num clube de futebol. O time treina às terças e quintas, e no sábado muitas vezes tem jogo. O Lucas diz: „No clube também fiz muitos amigos. E o meu alemão melhorou – no campo ninguém fala inglês!“`},
 {t:'mc',q:'Warum hatte Lucas am Anfang keine Zeit für Sport?',opts:['Er musste viel arbeiten.','Er war krank.','Es gab keinen Verein.'],a:0},
 {t:'mc',q:'Wann trainiert die Mannschaft?',opts:['dienstags und donnerstags','jeden Tag','nur am Samstag'],a:0},
 {t:'tr',de:'Eu vou à academia duas vezes por semana.',a:['Ich gehe zweimal pro Woche ins Fitnessstudio.','Ich gehe zweimal in der Woche ins Fitnessstudio.']}
]},
{id:'l2',title:'Verbos reflexivos',desc:'sich bewegen, sich fühlen, sich freuen …',steps:[
 {t:'info',title:'sich',html:`<p>Alguns verbos alemães usam um pronome reflexivo (como „se“ em português):</p>
 <table><tr><th></th><th>sich fühlen</th></tr>
 <tr><td>ich</td><td class="es-t">ich fühle <b>mich</b></td></tr><tr><td>du</td><td class="es-t">du fühlst <b>dich</b></td></tr>
 <tr><td>er / sie / es</td><td class="es-t">er fühlt <b>sich</b></td></tr><tr><td>wir</td><td class="es-t">wir fühlen <b>uns</b></td></tr>
 <tr><td>ihr</td><td class="es-t">ihr fühlt <b>euch</b></td></tr><tr><td>sie / Sie</td><td class="es-t">sie fühlen <b>sich</b></td></tr></table>
 <p>Verbos frequentes: <span class="es-t">sich bewegen, sich ausruhen, sich verletzen, sich duschen, sich anziehen, sich beeilen, sich ärgern, sich freuen auf / über, sich interessieren für</span>.</p>
 <div class="ex">Perfekt sempre com <b>haben</b>: <span class="es-t">Ich habe mich verletzt.</span> · Com modal: <span class="es-t">Du musst dich ausruhen.</span></div>
 <div class="ojo">Muitas vezes o português <b>não</b> usa „se“: <span class="es-t">Ich freue mich.</span> = Estou feliz. <span class="es-t">Beeil dich!</span> = Anda logo!</div>`},
 {t:'mc',q:'Wie fühlst du ___ heute?',opts:['dich','dir','sich'],a:0},
 {t:'mc',q:'Wir freuen ___ auf den Urlaub.',opts:['uns','sich','euch'],a:0},
 {t:'gap',q:'Beim Fußball hat Lucas ___ am Knie verletzt.',a:['sich']},
 {t:'gap',q:'Ihr müsst ___ beeilen, der Zug fährt gleich!',a:['euch']},
 {t:'mc',q:'„Interessiert ihr euch für Sport?“ – ___',opts:['Ja, wir interessieren uns sehr für Fußball.','Ja, wir interessieren sich für Fußball.','Ja, wir interessieren für Fußball.'],a:0},
 {t:'order',es:'Nach dem Training ruhe ich mich aus',de:'Depois do treino eu descanso.'},
 {t:'tr',de:'Eu me alegro com o fim de semana. (sich freuen auf)',a:['Ich freue mich auf das Wochenende.','Ich freue mich aufs Wochenende.']},
 {t:'tr',de:'Ele se irrita com o chefe.',a:['Er ärgert sich über den Chef.','Er ärgert sich über seinen Chef.']},
 {t:'speak',es:'Ich bewege mich zu wenig. Ab Montag gehe ich zweimal pro Woche joggen.',de:'Eu me movimento pouco. A partir de segunda vou correr duas vezes por semana.',tip:'<i>ich bewege <b>mich</b></i> – o pronome vem logo depois do verbo.'}
]},
{id:'l3',title:'Médico, farmácia, emergência',desc:'seit + Dativ · in der Apotheke · der Notruf',steps:[
 {t:'vocab',title:'Saúde',items:[['die Krankheit','a doença'],['die Erkältung','o resfriado'],['die Grippe','a gripe'],['der Husten','a tosse'],['husten','tossir'],['das Fieber','a febre'],['die Halsschmerzen (Pl.)','a dor de garganta'],['die Apotheke','a farmácia'],['das Medikament','o remédio'],['die Tablette','o comprimido'],['der Hustensaft','o xarope para tosse'],['das Rezept','a receita'],['die Praxis','o consultório'],['die Sprechstunde','o horário de atendimento'],['der Zahnarzt / die Zahnärztin','o dentista / a dentista'],['der Unfall','o acidente'],['die Verletzung','o ferimento'],['der Krankenwagen','a ambulância'],['der Notruf','a chamada de emergência'],['das Krankenhaus','o hospital']]},
 {t:'info',title:'seit e vor',html:`<table><tr><td class="es-t"><b>seit</b> + dativo</td><td>desde / há (e continua)</td><td class="es-t">Ich habe <b>seit</b> drei Tag<b>en</b> Husten.</td></tr>
 <tr><td class="es-t"><b>vor</b> + dativo</td><td>há … (no passado, terminou)</td><td class="es-t">Ich war <b>vor</b> einer Woche beim Arzt.</td></tr></table>
 <div class="ex">Dativo: <span class="es-t">seit einem Tag, seit einer Woche, seit zwei Monaten</span> (plural + <b>-n</b>). <span class="es-t">Seit wann …?</span> = Desde quando …?</div>
 <div class="ojo">Emergência na Alemanha: <b>112</b> (ambulância, bombeiros) · <b>110</b> (polícia). À noite e no fim de semana: o plantão médico <b>116 117</b>.</div>`},
 {t:'mc',q:'Seit wann haben Sie Fieber? – ___',opts:['Seit zwei Tagen.','Vor zwei Tagen.','Seit zwei Tage.'],a:0},
 {t:'gap',q:'Ich wohne ___ einem Jahr in Frankfurt. (desde)',a:['seit']},
 {t:'gap',q:'Ich war ___ einer Woche beim Zahnarzt. (há – passado)',a:['vor']},
 {t:'mc',q:'Es gab einen Unfall, ein Mann ist verletzt. Welche Nummer rufen Sie an?',opts:['112','110','116 117'],a:0},
 {t:'dialog',place:'Apotheke',title:'Na farmácia',scene:'Você está resfriado e vai à farmácia.',lines:[
  {n:'Apothekerin',es:'Guten Tag, was kann ich für Sie tun?',de:'Boa tarde, o que posso fazer pelo senhor?'},
  {you:true,opts:[{es:'Guten Tag. Ich habe seit drei Tagen Husten und Halsschmerzen.',ok:true},{es:'Guten Tag. Ich habe vor drei Tagen Husten.',ok:false,why:'Ainda está com tosse → <b>seit</b> drei Tagen.'}]},
  {n:'Apothekerin',es:'Haben Sie auch Fieber?',de:'O senhor também tem febre?'},
  {you:true,opts:[{es:'Nein, Fieber habe ich nicht. Haben Sie etwas gegen Husten?',ok:true},{es:'Nein, ich habe kein Fieber gemacht.',ok:false,why:'Febre se „tem“: <i>Ich habe kein Fieber.</i>'}]},
  {n:'Apothekerin',es:'Ja, dieser Hustensaft ist gut. Nehmen Sie ihn dreimal täglich nach dem Essen.',de:'Sim, este xarope é bom. Tome três vezes ao dia depois de comer.'},
  {you:true,opts:[{es:'Dreimal täglich nach dem Essen – vielen Dank. Was kostet er?',ok:true},{es:'Danke, ich nehme ihn jeden Tag einmal.',ok:false,why:'Repita a dosagem certa: <i>dreimal täglich</i>.'}]}]},
 {t:'tr',de:'Estou resfriado há uma semana.',a:['Ich bin seit einer Woche erkältet.','Ich habe seit einer Woche eine Erkältung.']},
 {t:'tr',de:'Ligue para a ambulância!',a:['Ruf den Krankenwagen!','Rufen Sie den Krankenwagen!','Ruf einen Krankenwagen!','Rufen Sie einen Krankenwagen!']}
]},
{id:'l4',title:'Ouvir e escrever: saúde',desc:'Ansage der Arztpraxis · SMS: Training absagen',steps:[
 {t:'read',hideText:true,title:'Ouvir: Anrufbeantworter der Praxis',intro:'Você liga para o consultório do seu médico. Ouça a mensagem.',text:`Guten Tag, hier ist die Praxis Dr. Wolf. Leider rufen Sie außerhalb unserer Sprechstunde an. Unsere Sprechzeiten sind Montag bis Freitag von 8 bis 12 Uhr und Montag, Dienstag und Donnerstag auch von 15 bis 18 Uhr. Mittwochnachmittag und Freitagnachmittag ist die Praxis geschlossen. In dringenden Fällen rufen Sie bitte den ärztlichen Bereitschaftsdienst an: 116 117. Im Notfall wählen Sie die 112.`,de:`Bom dia, aqui é o consultório do Dr. Wolf. Infelizmente o senhor está ligando fora do horário de atendimento. Atendemos de segunda a sexta das 8h às 12h e na segunda, terça e quinta também das 15h às 18h. Na quarta à tarde e na sexta à tarde o consultório fica fechado. Em casos urgentes, ligue para o plantão médico: 116 117. Em emergências, disque 112.`},
 {t:'mc',q:'Wann ist die Praxis am Mittwoch geöffnet?',opts:['von 8 bis 12 Uhr','von 15 bis 18 Uhr','gar nicht'],a:0},
 {t:'mc',q:'Freitag, 16 Uhr: Sie fühlen sich sehr schlecht, aber es ist kein Notfall. Wen rufen Sie an?',opts:['116 117','112','die Praxis'],a:0},
 {t:'mc',q:'Richtig oder falsch? Am Donnerstagnachmittag ist die Praxis geöffnet.',opts:['richtig','falsch'],a:0},
 {t:'free',task:'Você não pode ir ao treino de futebol hoje. Escreva uma SMS (~20–30 palavras) para o treinador, Mehmet: 1) você não vem, 2) por quê, 3) quando você volta a treinar.',hint:'Hallo Mehmet, ich kann heute leider nicht zum Training kommen, weil … Am … bin ich wieder dabei. Viele Grüße',focus:'weil, seit, reflexive Verben (sich verletzen, sich fühlen), Zeitangaben',model:'Hallo Mehmet,\nich kann heute leider nicht zum Training kommen, weil ich mich am Samstag am Fuß verletzt habe. Nächsten Dienstag bin ich wieder dabei!\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Verbos reflexivos</h3><table><tr><td class="es-t">ich fühle mich · du fühlst dich · er/sie fühlt sich · wir fühlen uns · ihr fühlt euch · sie/Sie fühlen sich</td></tr></table>
<p class="es-t">sich bewegen · sich ausruhen · sich verletzen · sich beeilen · sich freuen auf · sich ärgern über · sich interessieren für</p><p>Perfekt: <span class="es-t">Ich habe mich verletzt.</span></p>
<h3>seit / vor + dativo</h3><p class="es-t">seit drei Tagen (e continua) · vor einer Woche (já passou)</p>
<h3>Emergência</h3><p class="es-t">112 Notruf · 110 Polizei · 116 117 ärztlicher Bereitschaftsdienst</p>`});

/* ================= KAPITEL 16 · UNTERWEGS & URLAUB ================= */
LANGS.de.course.units.push({id:'k16',n:'16',level:'A2',title:'Unterwegs & Urlaub',sub:'Planejar viagens · hospedagem · natureza e tempo · Präteritum dos modais: konnte, musste, wollte · no carro',
goals:['Eine Reise planen: verreisen, die Unterkunft, die Ermäßigung','Präteritum der Modalverben: Ich konnte nicht kommen, ich musste arbeiten.','Natur und Wetter: der Wald, der Strand, bewölkt, das Gewitter','Mit dem Auto: die Werkstatt, der Reifen, die Kreuzung','Durchsagen am Bahnhof verstehen','Eine Postkarte / Nachricht aus dem Urlaub schreiben'],
situacion:{title:'Na recepção do albergue',npc:'Rezeptionist',scene:'Você chega com um amigo a um albergue (Jugendherberge) em Hamburgo. Vocês reservaram duas camas para duas noites.',role:'Du arbeitest an der Rezeption einer Jugendherberge in Hamburg, freundlich und locker. Du duzt die Gäste. Frag nach dem Namen und der Buchung, erkläre: Frühstück 7–10 Uhr, Bettwäsche kostet 5 Euro extra, Studenten bekommen eine Ermäßigung. Empfiehl einen kostenlosen Rundgang durch den Hafen um 11 Uhr. Sprich einfaches Deutsch (A2), benutze auch Präteritum (war, konnte, musste).',goal:'Faça o check-in, pergunte pelo café da manhã e por descontos e informe-se sobre o passeio grátis.'},
placement:[
 {t:'mc',q:'„Eu não pude vir ontem.“',opts:['Ich konnte gestern nicht kommen.','Ich könnte gestern nicht kommen.','Ich kannte gestern nicht kommen.'],a:0},
 {t:'gap',q:'Letzte Woche ___ ich viel arbeiten. (müssen – Präteritum)',a:['musste']},
 {t:'mc',q:'Der Himmel ist grau, die Sonne scheint nicht. Es ist ___.',opts:['bewölkt','trocken','nass'],a:0},
 {t:'mc',q:'Mein Auto ist kaputt. Ich bringe es in die ___.',opts:['Werkstatt','Unterkunft','Kreuzung'],a:0},
 {t:'mc',q:'„Estudantes têm desconto.“',opts:['Studenten bekommen eine Ermäßigung.','Studenten bekommen einen Rabattschein.','Studenten sind kostenlos.'],a:0},
 {t:'gap',q:'Als Kind ___ ich Pilot werden. (wollen – Präteritum)',a:['wollte']}],
lessons:[
{id:'l1',title:'Planejar a viagem',desc:'verreisen · die Unterkunft · die Ermäßigung',steps:[
 {t:'vocab',title:'Viajar',items:[['verreisen','viajar (sair de viagem)'],['die Unterkunft','a hospedagem'],['die Jugendherberge','o albergue da juventude'],['der Campingplatz','o camping'],['das Zelt','a barraca'],['der Rucksack','a mochila'],['der Rundgang','o passeio a pé (guiado)'],['die Tour','o passeio / o tour'],['der Tourist / die Touristin','o turista / a turista'],['der Stadtplan','o mapa da cidade'],['die Hauptstadt','a capital'],['die Ermäßigung','o desconto'],['kostenlos','gratuito'],['die Grenze','a fronteira'],['der Reisepass','o passaporte'],]},
 {t:'mc',q:'Wir haben wenig Geld. Wir übernachten in einer ___.',opts:['Jugendherberge','Hauptstadt','Grenze'],a:0},
 {t:'mc',q:'Der Eintritt ins Museum ist am Sonntag ___. Man muss nichts bezahlen.',opts:['kostenlos','teuer','ermäßigt'],a:0},
 {t:'gap',q:'Mit dem Studentenausweis bekommst du eine ___. (desconto)',a:['Ermäßigung']},
 {t:'match',q:'Ligue.',pairs:[['das Zelt','a barraca'],['der Rucksack','a mochila'],['der Stadtplan','o mapa da cidade'],['die Unterkunft','a hospedagem'],['die Grenze','a fronteira']]},
 {t:'read',title:'Leitura: Ein Wochenende in Hamburg',text:`Hamburg für junge Leute: Übernachten Sie in der Jugendherberge am Hafen – ab 29 € pro Nacht mit Frühstück. Studenten bekommen 10 % Ermäßigung. Jeden Tag um 11 Uhr gibt es einen kostenlosen Rundgang durch die Speicherstadt (auf Deutsch und Englisch). Eine Hafenrundfahrt mit dem Schiff kostet 20 €. Tipp: Mit der Hamburg-Card fahren Sie mit Bus und Bahn kostenlos und bezahlen in vielen Museen weniger.`,de:`Hamburgo para jovens: pernoite no albergue no porto – a partir de 29 € por noite com café da manhã. Estudantes têm 10 % de desconto. Todo dia às 11h tem um passeio a pé gratuito pela Speicherstadt (em alemão e inglês). Um passeio de barco pelo porto custa 20 €. Dica: com o Hamburg-Card você anda de ônibus e trem de graça e paga menos em muitos museus.`},
 {t:'mc',q:'Was kostet der Rundgang durch die Speicherstadt?',opts:['nichts','29 €','20 €'],a:0},
 {t:'mc',q:'Was bekommt man mit der Hamburg-Card?',opts:['kostenlose Fahrten mit Bus und Bahn','ein kostenloses Zimmer','eine kostenlose Hafenrundfahrt'],a:0},
 {t:'tr',de:'Nós vamos viajar no verão.',a:['Wir verreisen im Sommer.','Im Sommer verreisen wir.']}
]},
{id:'l2',title:'Eu tive que … – modais no passado',desc:'konnte, musste, wollte, durfte, sollte',steps:[
 {t:'info',title:'Präteritum dos verbos modais',html:`<p>No passado, os verbos modais quase sempre usam o <b>Präteritum</b> (não o Perfekt). Sem trema e com <b>-te</b>:</p>
 <table><tr><th></th><th>können</th><th>müssen</th><th>wollen</th><th>dürfen</th><th>sollen</th></tr>
 <tr><td>ich / er / sie</td><td class="es-t">konnte</td><td class="es-t">musste</td><td class="es-t">wollte</td><td class="es-t">durfte</td><td class="es-t">sollte</td></tr>
 <tr><td>du</td><td class="es-t">konntest</td><td class="es-t">musstest</td><td class="es-t">wolltest</td><td class="es-t">durftest</td><td class="es-t">solltest</td></tr>
 <tr><td>wir / sie / Sie</td><td class="es-t">konnten</td><td class="es-t">mussten</td><td class="es-t">wollten</td><td class="es-t">durften</td><td class="es-t">sollten</td></tr></table>
 <div class="ex"><span class="es-t">Ich <b>konnte</b> gestern nicht kommen, ich <b>musste</b> arbeiten.</span> = Ontem não pude vir, tive que trabalhar.</div>
 <div class="ojo">Cuidado: <span class="es-t">ich konnte</span> (pude) ≠ <span class="es-t">ich könnte</span> (poderia – pedido educado, cap. 14).</div>`},
 {t:'mc',q:'Warum warst du nicht auf der Party? – Ich ___ arbeiten.',opts:['musste','muss','müsste'],a:0},
 {t:'mc',q:'Als Kind ___ ich nicht allein in die Stadt fahren.',opts:['durfte','darf','dürfte'],a:0},
 {t:'gap',q:'Wir ___ den Zug nicht nehmen, er war voll. (können)',a:['konnten']},
 {t:'gap',q:'___ du nicht zum Arzt gehen? (sollen – Präteritum, du)',a:['Solltest']},
 {t:'gap',q:'Lucas ___ eigentlich nach Berlin fahren, aber es gab keine Tickets mehr. (wollen)',a:['wollte']},
 {t:'order',es:'Im Urlaub konnten wir jeden Tag schwimmen',de:'Nas férias pudemos nadar todo dia.'},
 {t:'tr',de:'Ontem eu não pude dormir.',a:['Gestern konnte ich nicht schlafen.','Ich konnte gestern nicht schlafen.']},
 {t:'tr',de:'Nós tivemos que esperar duas horas.',a:['Wir mussten zwei Stunden warten.']},
 {t:'speak',es:'Letztes Jahr wollte ich nach Italien fahren, aber ich musste arbeiten.',de:'No ano passado eu queria ir para a Itália, mas tive que trabalhar.',tip:'<i>wollte</i>, <i>musste</i> – sem trema no passado.'}
]},
{id:'l3',title:'Natureza e tempo',desc:'der Wald, der Strand, bewölkt, das Gewitter',steps:[
 {t:'vocab',title:'Natureza e tempo',items:[['die Natur','a natureza'],['die Landschaft','a paisagem'],['der Wald','a floresta'],['der Fluss','o rio'],['die Insel','a ilha'],['der Strand','a praia'],['das Schiff','o navio / o barco'],['der Himmel','o céu'],['bewölkt','nublado'],['das Gewitter','a tempestade (com trovões)'],['der Sturm','a tempestade (vento)'],['nass','molhado'],['trocken','seco'],['die Temperatur','a temperatura'],['vorsichtig','cuidadoso'],['das Tier','o animal'],['der Vogel','o pássaro']]},
 {t:'mc',q:'Es regnet und es donnert. Es gibt ein ___.',opts:['Gewitter','Wolke','Strand'],a:0},
 {t:'mc',q:'Nach dem Regen ist die Straße ___.',opts:['nass','trocken','bewölkt'],a:0},
 {t:'gap',q:'Am Wochenende sind wir im ___ gewandert. Da gibt es viele Bäume. (floresta)',a:['Wald']},
 {t:'match',q:'Ligue.',pairs:[['der Strand','a praia'],['die Insel','a ilha'],['der Fluss','o rio'],['der Vogel','o pássaro'],['der Himmel','o céu']]},
 {t:'read',hideText:true,title:'Ouvir: Wetterbericht',intro:'Ouça a previsão do tempo para o fim de semana.',text:`Und jetzt das Wetter für das Wochenende. Am Samstag ist es im Norden bewölkt, aber trocken, bei 18 Grad. Im Süden scheint die Sonne, bis 25 Grad. Am Sonntag kommen von Westen Gewitter, vor allem am Nachmittag. Bitte seien Sie vorsichtig, wenn Sie in den Bergen wandern. Am Montag wird es kühler: nur noch 14 Grad und viel Regen.`,de:`E agora o tempo para o fim de semana. No sábado, no norte, fica nublado, mas seco, com 18 graus. No sul faz sol, até 25 graus. No domingo chegam tempestades do oeste, principalmente à tarde. Por favor, tenham cuidado se forem fazer trilha nas montanhas. Na segunda esfria: só 14 graus e muita chuva.`},
 {t:'mc',q:'Wie ist das Wetter am Samstag im Norden?',opts:['bewölkt, aber trocken','sonnig und 25 Grad','Gewitter'],a:0},
 {t:'mc',q:'Wann soll man in den Bergen vorsichtig sein?',opts:['am Sonntagnachmittag','am Samstagmorgen','am Montag'],a:0},
 {t:'tr',de:'Amanhã vai ficar nublado.',a:['Morgen ist es bewölkt.','Morgen wird es bewölkt.']}
]},
{id:'l4',title:'De carro e de trem',desc:'die Werkstatt, der Reifen · Durchsagen · Urlaubsgrüße',steps:[
 {t:'vocab',title:'No caminho',items:[['der Wagen','o carro'],['der Reifen','o pneu'],['die Werkstatt','a oficina'],['die Panne','a pane / o defeito'],['die Kreuzung','o cruzamento'],['tanken','abastecer'],['die Tankstelle','o posto de gasolina'],['der Motorroller','a scooter'],['der Stau','o engarrafamento'],['die Durchsage','o aviso (alto-falante)'],['die Abfahrt','a partida']]},
 {t:'read',hideText:true,title:'Ouvir: Durchsage am Bahnhof',intro:'Você está na estação de Frankfurt e quer pegar o trem para Hamburgo.',text:`Achtung an Gleis 7: Der ICE 576 nach Hamburg, Abfahrt 14:12 Uhr, hat heute etwa 20 Minuten Verspätung. Der Zug fährt heute ausnahmsweise von Gleis 9. Reisende nach Hannover steigen bitte in Kassel in den Regionalexpress um. Wir bitten um Entschuldigung.`,de:`Atenção na plataforma 7: o ICE 576 para Hamburgo, partida 14h12, está hoje com cerca de 20 minutos de atraso. O trem sai hoje excepcionalmente da plataforma 9. Passageiros para Hannover, por favor, troquem em Kassel para o Regional-Express. Pedimos desculpas.`},
 {t:'mc',q:'Von welchem Gleis fährt der Zug nach Hamburg heute?',opts:['Gleis 9','Gleis 7','Gleis 14'],a:0},
 {t:'mc',q:'Wann fährt der Zug ungefähr ab?',opts:['um 14:32 Uhr','um 14:12 Uhr','um 13:52 Uhr'],a:0},
 {t:'dialog',place:'Werkstatt',title:'Na oficina',scene:'O pneu do carro da Jana furou. Você leva o carro à oficina.',lines:[
  {n:'Mechaniker',es:'Guten Tag! Was ist denn mit dem Wagen?',de:'Bom dia! O que houve com o carro?'},
  {you:true,opts:[{es:'Guten Tag. Ein Reifen ist kaputt. Könnten Sie ihn heute noch reparieren?',ok:true},{es:'Guten Tag. Der Wagen hat Reifen.',ok:false,why:'Diga o problema: <i>Ein Reifen ist kaputt.</i>'}]},
  {n:'Mechaniker',es:'Heute wird es schwierig. Morgen um zehn ist er fertig.',de:'Hoje vai ser difícil. Amanhã às dez fica pronto.'},
  {you:true,opts:[{es:'Okay, das passt. Was kostet das ungefähr?',ok:true},{es:'Okay, ich passe morgen.',ok:false,why:'<i>Das passt (mir).</i> – a pessoa não „passt“.'}]},
  {n:'Mechaniker',es:'Ein neuer Reifen kostet etwa 90 Euro.',de:'Um pneu novo custa uns 90 euros.'},
  {you:true,opts:[{es:'Gut, dann bis morgen. Auf Wiedersehen!',ok:true},{es:'Gut, dann bis gestern!',ok:false,why:'Amanhã = <i>morgen</i>.'}]}]},
 {t:'free',task:'Você está de férias. Escreva uma mensagem (~30–40 palavras) para a Jana: 1) onde você está e com quem, 2) como está o tempo, 3) o que você fez / não pôde fazer (konnte, musste, wollte).',hint:'Hallo Jana, liebe Grüße aus …! Ich bin mit … hier. Das Wetter ist … Gestern wollten wir …, aber … Wir konnten … Bis bald!',focus:'Präteritum der Modalverben, Wetter, Perfekt',model:'Hallo Jana,\nliebe Grüße aus Hamburg! Ich bin mit Tom hier. Das Wetter ist leider bewölkt, aber trocken. Gestern wollten wir eine Hafenrundfahrt machen, aber es gab ein Gewitter. Wir konnten nur ins Museum gehen.\nBis bald!\nLucas'}
]}],
resumen:`<h3>Präteritum dos modais (sem trema)</h3><table><tr><td class="es-t">konnte · musste · wollte · durfte · sollte</td></tr><tr><td class="es-t">ich konnte, du konntest, wir konnten</td></tr></table><p>Cuidado: <span class="es-t">konnte</span> (pude) ≠ <span class="es-t">könnte</span> (poderia).</p>
<h3>Viagem</h3><p class="es-t">verreisen · die Unterkunft · die Jugendherberge · übernachten · die Ermäßigung · kostenlos · der Rundgang</p>
<h3>Tempo</h3><p class="es-t">bewölkt · das Gewitter · der Sturm · nass · trocken · minus 5 Grad</p>
<h3>Carro</h3><p class="es-t">die Werkstatt · der Reifen · die Panne · tanken · der Stau</p>`});

/* ================= KAPITEL 17 · EINKAUFEN & KLEIDUNG ================= */
LANGS.de.course.units.push({id:'k17',n:'17',level:'A2',title:'Einkaufen & Kleidung',sub:'Roupas e acessórios · terminações dos adjetivos · comparar: besser, am besten · drogaria e lavanderia · trocar produtos',
goals:['Kleidung und Accessoires: die Jeans, der Anzug, die Brille','Adjektivendungen: der neue Mantel, ein neuer Mantel','Vergleichen: billiger als, so teuer wie, am günstigsten','In der Drogerie und in der Reinigung','Etwas umtauschen oder reklamieren'],
situacion:{title:'Trocar uma jaqueta',npc:'Verkäuferin',scene:'Você comprou uma jaqueta ontem, mas em casa percebeu que ela é pequena demais. Você volta à loja com o comprovante.',role:'Du bist Verkäuferin in einem Kleidungsgeschäft in Frankfurt, freundlich. Du siezt. Frag, was das Problem ist und ob der Kunde den Kassenbon hat. Biete eine größere Größe oder eine andere Farbe an; Geld zurück gibt es nur mit Kassenbon innerhalb von 14 Tagen. Benutze Adjektive mit Endungen und Vergleiche (größer, bequemer). Sprich einfaches Deutsch (A2).',goal:'Explique o problema, peça para trocar por um tamanho maior e pergunte se dá para receber o dinheiro de volta.'},
placement:[
 {t:'mc',q:'Ich suche einen ___ Mantel.',opts:['warmen','warme','warmer'],a:0},
 {t:'mc',q:'Der ___ Pullover gefällt mir.',opts:['blaue','blauen','blauer'],a:0},
 {t:'mc',q:'Die Jeans ist ___ als die Hose.',opts:['billiger','billig','am billigsten'],a:0},
 {t:'gap',q:'Dieses Geschäft ist am ___. (gut – Superlativ)',a:['besten']},
 {t:'mc',q:'Die Hose ist zu klein. Ich möchte sie ___.',opts:['umtauschen','umziehen','umsteigen'],a:0},
 {t:'mc',q:'Wo kauft man Seife und Creme?',opts:['in der Drogerie','in der Reinigung','in der Werkstatt'],a:0}],
lessons:[
{id:'l1',title:'Roupas e acessórios',desc:'die Jeans, der Anzug, die Brille … · eng, bequem',steps:[
 {t:'vocab',title:'Roupas e acessórios',items:[['die Jeans','o jeans'],['der Anzug','o terno'],['der Stiefel','a bota'],['der Gürtel','o cinto'],['die Kette','o colar / a corrente'],['der Ring','o anel'],['die Brille','os óculos'],['der Schirm','o guarda-chuva'],['das Paar','o par'],['eng','apertado'],['bequem','confortável'],['weich','macio'],['hart','duro'],['dünn','fino'],['dick','grosso / gordo'],['bunt','colorido'],['gestreift','listrado'],['kariert','xadrez']]},
 {t:'mc',q:'Die Schuhe sind zu ___. Sie tun mir weh.',opts:['eng','weit','bunt'],a:0},
 {t:'mc',q:'Ich habe ein neues ___ Stiefel gekauft.',opts:['Paar','Ring','Anzug'],a:0},
 {t:'mc',q:'Lucas kann ohne ___ nicht gut lesen.',opts:['Brille','Kette','Geldbörse'],a:0},
 {t:'match',q:'Ligue.',pairs:[['der Anzug','o terno'],['der Schirm','o guarda-chuva'],['bequem','confortável'],['gestreift','listrado'],['die Geldbörse','a carteira']]},
 {t:'gap',q:'Für das Vorstellungsgespräch trägt Lucas einen ___. (terno)',a:['Anzug']},
 {t:'tr',de:'Este casaco é muito confortável.',a:['Diese Jacke ist sehr bequem.','Die Jacke ist sehr bequem.']},
 {t:'speak',es:'Die Jeans ist zu eng. Haben Sie die auch eine Nummer größer?',de:'O jeans está apertado demais. Vocês têm um número maior?',tip:'<i>eine Nummer größer</i> = um número maior.'}
]},
{id:'l2',title:'Terminações dos adjetivos',desc:'der neue Mantel · ein neuer Mantel',steps:[
 {t:'info',title:'Adjetivo antes do substantivo',html:`<p>Antes do substantivo, o adjetivo ganha uma terminação. No A2 basta saber o nominativo e o acusativo:</p>
 <table><tr><th></th><th>com der/die/das</th><th>com ein/eine/kein</th></tr>
 <tr><td>masc. (nom.)</td><td class="es-t">der neu<b>e</b> Mantel</td><td class="es-t">ein neu<b>er</b> Mantel</td></tr>
 <tr><td>masc. (acus.)</td><td class="es-t">den neu<b>en</b> Mantel</td><td class="es-t">einen neu<b>en</b> Mantel</td></tr>
 <tr><td>fem.</td><td class="es-t">die neu<b>e</b> Jacke</td><td class="es-t">eine neu<b>e</b> Jacke</td></tr>
 <tr><td>neutro</td><td class="es-t">das neu<b>e</b> Hemd</td><td class="es-t">ein neu<b>es</b> Hemd</td></tr>
 <tr><td>plural</td><td class="es-t">die neu<b>en</b> Schuhe</td><td class="es-t">keine neu<b>en</b> Schuhe</td></tr></table>
 <div class="ex">Dica: depois de <b>ein</b> sem terminação, o adjetivo „mostra“ o gênero: ein neu<b>er</b> (der), ein neu<b>es</b> (das).</div>
 <div class="ojo">Depois de <b>sein</b>, sem terminação: <span class="es-t">Der Mantel ist neu.</span></div>`},
 {t:'mc',q:'Wie findest du den ___ Rock?',opts:['roten','rote','roter'],a:0},
 {t:'mc',q:'Das ist ein ___ Hemd.',opts:['schönes','schöne','schönen'],a:0},
 {t:'mc',q:'Ich brauche eine ___ Brille.',opts:['neue','neuen','neuer'],a:0},
 {t:'gap',q:'Ich kaufe einen ___ Schirm. (groß)',a:['großen']},
 {t:'gap',q:'Die ___ Stiefel sind sehr bequem. (schwarz)',a:['schwarzen']},
 {t:'gap',q:'Mein Bruder trägt immer ein ___ T-Shirt. (bunt)',a:['buntes']},
 {t:'order',es:'Ich suche eine warme Jacke für den Winter',de:'Procuro um casaco quente para o inverno.'},
 {t:'tr',de:'Eu gosto do vestido azul.',a:['Mir gefällt das blaue Kleid.','Das blaue Kleid gefällt mir.']}
]},
{id:'l3',title:'Comparar',desc:'billiger als · so teuer wie · am günstigsten',steps:[
 {t:'vocab',title:'Comprar e comparar',items:[['die Qualität','a qualidade'],['das Produkt','o produto'],['der Unterschied','a diferença'],['verschieden','diferente / variado'],['der Flohmarkt','o brechó / a feira de usados'],['reduziert','com desconto (remarcado)'],['umtauschen','trocar (produto)'],['der Kassenbon','o cupom fiscal'],['reklamieren','reclamar (produto)']]},
 {t:'info',title:'Comparativo e superlativo',html:`<table><tr><th>normal</th><th>comparativo (+er)</th><th>superlativo</th></tr>
 <tr><td class="es-t">billig</td><td class="es-t">billig<b>er</b></td><td class="es-t">am billig<b>sten</b></td></tr>
 <tr><td class="es-t">schön</td><td class="es-t">schön<b>er</b></td><td class="es-t">am schön<b>sten</b></td></tr>
 <tr><td class="es-t">alt / groß / warm</td><td class="es-t">ä<b>lter</b> / grö<b>ßer</b> / wä<b>rmer</b></td><td class="es-t">am ältesten / am größten / am wärmsten</td></tr>
 <tr><td class="es-t">gut</td><td class="es-t"><b>besser</b></td><td class="es-t">am <b>besten</b></td></tr>
 <tr><td class="es-t">gern</td><td class="es-t"><b>lieber</b></td><td class="es-t">am <b>liebsten</b></td></tr>
 <tr><td class="es-t">viel</td><td class="es-t"><b>mehr</b></td><td class="es-t">am <b>meisten</b></td></tr></table>
 <div class="ex"><span class="es-t">Die Jeans ist billiger <b>als</b> die Hose.</span> (diferente) · <span class="es-t">Die Jeans ist <b>so</b> teuer <b>wie</b> die Hose.</span> (igual)</div>`},
 {t:'mc',q:'Der Mantel kostet 120 €, die Jacke 80 €. Die Jacke ist ___ als der Mantel.',opts:['billiger','teurer','so billig'],a:0},
 {t:'mc',q:'Welcher Pullover gefällt dir ___?',opts:['am besten','am guten','besser als'],a:0},
 {t:'gap',q:'Mein Bruder ist zwei Jahre ___ als ich. (alt)',a:['älter']},
 {t:'gap',q:'Diese Schuhe sind genauso bequem ___ meine alten.',a:['wie']},
 {t:'gap',q:'Ich trinke lieber Tee, aber am ___ trinke ich Kaffee. (gern)',a:['liebsten']},
 {t:'read',title:'Leitura: Drei Angebote',text:`A) Kaufhaus Zentrum: Winterjacke, sehr warm, gute Qualität – statt 149 € jetzt 99 €.
B) Sportgeschäft Aktiv: Regenjacke, leicht und bequem, in vielen Farben – 69 €.
C) Flohmarkt am Mainufer (jeden Samstag): Jacken, Mäntel und Stiefel, gebraucht, ab 10 €. Umtauschen geht leider nicht.`,de:`A) Loja de departamentos Zentrum: jaqueta de inverno, muito quente, boa qualidade – de 149 € por 99 €.
B) Loja de esportes Aktiv: jaqueta de chuva, leve e confortável, em muitas cores – 69 €.
C) Feira de usados à beira do Meno (todo sábado): jaquetas, casacos e botas, usados, a partir de 10 €. Infelizmente não é possível trocar.`},
 {t:'mc',q:'Wo ist eine Jacke am billigsten?',opts:['auf dem Flohmarkt','im Kaufhaus Zentrum','im Sportgeschäft'],a:0},
 {t:'mc',q:'Wo kann man die Jacke nicht umtauschen?',opts:['auf dem Flohmarkt','im Kaufhaus','im Sportgeschäft'],a:0},
 {t:'tr',de:'O vermelho é mais bonito que o preto.',a:['Der rote ist schöner als der schwarze.','Das rote ist schöner als das schwarze.','Die rote ist schöner als die schwarze.']}
]},
{id:'l4',title:'Drogaria, lavanderia e trocas',desc:'die Seife, die Creme · die Reinigung · umtauschen',steps:[
 {t:'vocab',title:'Drogaria e lavanderia',items:[['die Drogerie','a drogaria (higiene e cosméticos)'],['die Kosmetik','os cosméticos'],['die Creme','o creme'],['die Seife','o sabonete'],['das Shampoo','o xampu'],['die Zahnpasta','a pasta de dente'],['das Parfüm','o perfume'],['das Handtuch','a toalha'],['die Reinigung','a lavanderia (lavagem a seco)'],['die Wäsche','a roupa (para lavar)'],['waschen','lavar'],['schmutzig','sujo'],['sauber','limpo'],['der Fleck','a mancha'],['ändern','mudar / ajustar']]},
 {t:'mc',q:'Mein Anzug ist schmutzig. Ich bringe ihn in die ___.',opts:['Reinigung','Drogerie','Werkstatt'],a:0},
 {t:'mc',q:'Die Hose ist zu lang. Die Schneiderin kann sie ___.',opts:['ändern','umtauschen','waschen'],a:0},
 {t:'dialog',place:'Geschäft',title:'Trocar a jaqueta',scene:'Você comprou uma jaqueta ontem, mas ela é pequena demais.',lines:[
  {n:'Verkäuferin',es:'Guten Tag, kann ich Ihnen helfen?',de:'Bom dia, posso ajudar?'},
  {you:true,opts:[{es:'Ja, ich habe gestern diese Jacke gekauft. Sie ist leider zu eng.',ok:true},{es:'Ja, ich habe gestern diese Jacke gekauft. Er ist zu eng.',ok:false,why:'<i>die Jacke</i> → pronome <b>sie</b>.'}]},
  {n:'Verkäuferin',es:'Haben Sie den Kassenbon?',de:'O senhor tem o cupom fiscal?'},
  {you:true,opts:[{es:'Ja, hier ist er. Kann ich die Jacke in einer größeren Größe umtauschen?',ok:true},{es:'Ja, hier ist er. Kann ich die Jacke umziehen?',ok:false,why:'Trocar produto = <i>umtauschen</i>; <i>umziehen</i> = mudar de casa / trocar de roupa.'}]},
  {n:'Verkäuferin',es:'Natürlich. In L haben wir sie nur noch in Grau. Ist das okay?',de:'Claro. Em G só temos em cinza. Tudo bem?'},
  {you:true,opts:[{es:'Grau finde ich sogar schöner. Danke!',ok:true},{es:'Grau finde ich sogar schönste.',ok:false,why:'Comparação: <i>schöner</i>; superlativo seria <i>am schönsten</i>.'}]}]},
 {t:'free',task:'Você comprou um produto pela internet e ele chegou com defeito. Escreva uma e-mail curta (~30–40 palavras) para a loja: 1) o que você comprou e quando, 2) qual é o problema, 3) o que você quer (trocar ou o dinheiro de volta).',hint:'Sehr geehrte Damen und Herren, am … habe ich … gekauft. Leider … Ich möchte … umtauschen / Bitte schicken Sie mir … Mit freundlichen Grüßen',focus:'Perfekt, Adjektivendungen, weil, höfliche Bitte',model:'Sehr geehrte Damen und Herren,\nam 3. März habe ich bei Ihnen eine schwarze Regenjacke gekauft. Leider ist der Reißverschluss kaputt. Ich möchte die Jacke gern umtauschen. Könnten Sie mir bitte eine neue Jacke schicken?\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Terminações dos adjetivos</h3><table><tr><td></td><td>der/die/das</td><td>ein/eine</td></tr><tr><td>masc. nom.</td><td class="es-t">der neue Mantel</td><td class="es-t">ein neuer Mantel</td></tr><tr><td>masc. acus.</td><td class="es-t">den neuen Mantel</td><td class="es-t">einen neuen Mantel</td></tr><tr><td>fem.</td><td class="es-t">die neue Jacke</td><td class="es-t">eine neue Jacke</td></tr><tr><td>neutro</td><td class="es-t">das neue Hemd</td><td class="es-t">ein neues Hemd</td></tr><tr><td>plural</td><td class="es-t">die neuen Schuhe</td><td class="es-t">keine neuen Schuhe</td></tr></table>
<h3>Comparar</h3><p class="es-t">billiger als · so teuer wie · am billigsten · gut – besser – am besten · gern – lieber – am liebsten · viel – mehr – am meisten</p>
<h3>Trocar</h3><p class="es-t">Kann ich das umtauschen? · Hier ist der Kassenbon. · Eine Nummer größer, bitte.</p>`});

/* ================= KAPITEL 18 · FESTE & ESSEN ================= */
LANGS.de.course.units.push({id:'k18',n:'18',level:'A2',title:'Feste & Essen',sub:'Festas e presentes · dativo: Wem schenkst du …? · verbos com dativo · cozinhar · wenn (quando/se)',
goals:['Feste in Deutschland: Geburtstag, Hochzeit, Weihnachten, Silvester','Dativ: Ich schenke meiner Mutter ein Buch.','Verben mit Dativ: helfen, danken, gratulieren, gehören, schmecken','In der Küche: der Topf, die Gabel, scharf','Nebensätze mit wenn','Ein Festival / eine Feier organisieren'],
situacion:{title:'Planejar um presente',npc:'Tom',scene:'O aniversário de 30 anos da Jana é no sábado. Você e o Tom, seu ex-colega de apartamento, combinam o presente e a festa.',role:'Du bist Tom, Lucas’ Freund und ehemaliger Mitbewohner in Frankfurt, locker und lustig. Du duzt. Ihr plant ein Geschenk für Janas 30. Geburtstag am Samstag. Mach Vorschläge (ein Buch, Konzertkarten, ein Kochkurs), frag Lucas nach seiner Meinung und wer was organisiert. Benutze Dativ (Wir schenken ihr …) und wenn-Sätze. Sprich einfaches Deutsch (A2).',goal:'Proponha um presente, diga o que vocês dão a ela (ihr …) e combine quem organiza o quê.'},
placement:[
 {t:'mc',q:'Ich schenke ___ Mutter Blumen.',opts:['meiner','meine','meinen'],a:0},
 {t:'mc',q:'Kannst du ___ helfen?',opts:['mir','mich','ich'],a:0},
 {t:'gap',q:'Wir gratulieren ___ zum Geburtstag. (du)',a:['dir']},
 {t:'mc',q:'___ ich Zeit habe, koche ich gern.',opts:['Wenn','Dass','Denn'],a:0},
 {t:'mc',q:'Wem gehört das Handy? – Es gehört ___.',opts:['ihm','ihn','er'],a:0},
 {t:'mc',q:'Das Essen ist sehr ___. Ich brauche Wasser!',opts:['scharf','süß','weich'],a:0}],
lessons:[
{id:'l1',title:'Festas',desc:'Geburtstag, Hochzeit, Weihnachten · Glückwünsche',steps:[
 {t:'vocab',title:'Festas',items:[['die Feier','a comemoração'],['Weihnachten','o Natal'],['Ostern','a Páscoa'],['Silvester','o réveillon'],['Neujahr','o Ano-Novo'],['schenken','dar de presente'],['der Wunsch','o desejo'],['wünschen','desejar'],['die Torte','a torta / o bolo de festa'],['die Süßigkeiten (Pl.)','os doces'],['die Kerze','a vela'],['der Gast','o convidado'],['organisieren','organizar'],['stattfinden','acontecer / ser realizado'],['das Festival','o festival'],['die Band','a banda'],['der Fan','o fã'],['das Plakat','o cartaz']]},
 {t:'info',title:'Felicitações',html:`<table><tr><td class="es-t">Herzlichen Glückwunsch zum Geburtstag!</td><td>Feliz aniversário!</td></tr>
 <tr><td class="es-t">Alles Gute!</td><td>Tudo de bom!</td></tr>
 <tr><td class="es-t">Frohe Weihnachten!</td><td>Feliz Natal!</td></tr>
 <tr><td class="es-t">Frohe Ostern!</td><td>Feliz Páscoa!</td></tr>
 <tr><td class="es-t">Guten Rutsch (ins neue Jahr)!</td><td>Boas entradas! (antes do réveillon)</td></tr>
 <tr><td class="es-t">Frohes neues Jahr!</td><td>Feliz Ano-Novo!</td></tr></table>
 <div class="ojo">Na Alemanha dá azar dar parabéns <b>antes</b> do dia do aniversário! E quem faz aniversário muitas vezes leva bolo para o trabalho.</div>`},
 {t:'mc',q:'Am 31. Dezember sagt man: ___',opts:['Guten Rutsch!','Frohe Ostern!','Gute Besserung!'],a:0},
 {t:'mc',q:'Das Konzert ___ am Samstag im Park ___.',opts:['findet … statt','ist … statt','macht … statt'],a:0},
 {t:'gap',q:'Ich ___ dir alles Gute zum Geburtstag! (desejar)',a:['wünsche']},
 {t:'match',q:'Ligue.',pairs:[['die Hochzeit','o casamento'],['die Kerze','a vela'],['die Torte','o bolo de festa'],['Silvester','o réveillon'],['der Gast','o convidado']]},
 {t:'read',title:'Leitura: Mainfest',text:`Am ersten Augustwochenende findet am Mainufer wieder das große Mainfest statt. Von Freitag bis Montag spielen über 30 Bands, auch für Kinder gibt es viel Programm. Der Eintritt ist frei. Am Samstag um 22 Uhr gibt es ein Feuerwerk über dem Fluss. Tipp: Kommen Sie mit Bus und Bahn – Parkplätze gibt es kaum. Fans der Band „Die Frankfurter“ aufgepasst: Das Konzert am Sonntag beginnt schon um 18 Uhr!`,de:`No primeiro fim de semana de agosto acontece de novo, à beira do Meno, a grande festa Mainfest. De sexta a segunda tocam mais de 30 bandas, e também tem muita programação para crianças. A entrada é grátis. No sábado às 22h tem fogos de artifício sobre o rio. Dica: venha de ônibus e trem – quase não há vagas para estacionar. Fãs da banda „Die Frankfurter“, atenção: o show no domingo já começa às 18h!`},
 {t:'mc',q:'Was kostet der Eintritt zum Mainfest?',opts:['nichts','30 Euro','18 Euro'],a:0},
 {t:'mc',q:'Wann gibt es das Feuerwerk?',opts:['am Samstag um 22 Uhr','am Sonntag um 18 Uhr','am Freitag um 22 Uhr'],a:0},
 {t:'tr',de:'Feliz aniversário!',a:['Herzlichen Glückwunsch zum Geburtstag!','Alles Gute zum Geburtstag!']}
]},
{id:'l2',title:'Wem? – o dativo',desc:'Ich schenke meiner Mutter … · helfen, danken, gehören',steps:[
 {t:'info',title:'Quem recebe? → dativo',html:`<p>Com <b>schenken, geben, schicken, zeigen, erklären</b> existem duas pessoas/coisas: <b>quem recebe</b> (dativo) e <b>o quê</b> (acusativo):</p>
 <div class="ex"><span class="es-t">Ich schenke <b>meiner Mutter</b> (Wem?) <b>einen Schal</b> (Was?).</span></div>
 <table><tr><th></th><th>artigo (dativo)</th><th>pronome (dativo)</th></tr>
 <tr><td>masc. / neutro</td><td class="es-t">dem / einem / meinem Vater</td><td class="es-t">ihm</td></tr>
 <tr><td>fem.</td><td class="es-t">der / einer / meiner Mutter</td><td class="es-t">ihr</td></tr>
 <tr><td>plural</td><td class="es-t">den / meinen Eltern (+n)</td><td class="es-t">ihnen</td></tr></table>
 <p>Pronomes: <span class="es-t">mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen</span>.</p>
 <p>Alguns verbos sempre pedem dativo: <span class="es-t">helfen, danken, gratulieren, gehören, gefallen, schmecken, passen, antworten</span>.</p>
 <div class="ex"><span class="es-t">Kannst du <b>mir</b> helfen?</span> · <span class="es-t">Das Buch gehört <b>ihm</b>.</span> · <span class="es-t">Wir gratulieren <b>dir</b>!</span></div>`},
 {t:'mc',q:'Was schenkst du ___ Bruder?',opts:['deinem','deinen','dein'],a:0},
 {t:'mc',q:'Jana hat Geburtstag. Wir schenken ___ Konzertkarten.',opts:['ihr','sie','ihm'],a:0},
 {t:'gap',q:'Ich danke ___ für die Einladung! (Sie – formal)',a:['Ihnen']},
 {t:'gap',q:'Wem gehört der Rucksack? – Er gehört ___. (eu)',a:['mir']},
 {t:'gap',q:'Ich zeige ___ Eltern die Fotos. (meine – dativo plural)',a:['meinen']},
 {t:'order',es:'Kannst du mir bitte das Salz geben',de:'Você pode me passar o sal, por favor?'},
 {t:'tr',de:'Eu dou um livro para o meu pai.',a:['Ich schenke meinem Vater ein Buch.','Ich gebe meinem Vater ein Buch.']},
 {t:'tr',de:'A sopa está gostosa para você? (informal)',a:['Schmeckt dir die Suppe?']}
]},
{id:'l3',title:'Na cozinha – wenn',desc:'der Topf, das Messer, scharf · Nebensätze mit wenn',steps:[
 {t:'vocab',title:'Cozinha e louça',items:[['das Gericht','o prato (comida)'],['die Portion','a porção'],['scharf','apimentado / afiado'],['das Rindfleisch','a carne de boi'],['die Bohne','o feijão'],['die Zitrone','o limão'],['das Eis','o sorvete / o gelo'],['der Teller','o prato (louça)'],['die Gabel','o garfo'],['das Messer','a faca'],['der Löffel','a colher'],['der Topf','a panela'],['die Pfanne','a frigideira'],['das Geschirr','a louça'],['abwaschen','lavar a louça'],['probieren','provar'],['schneiden','cortar'],]},
 {t:'info',title:'wenn',html:`<p><b>wenn</b> = quando (algo que se repete) / se (condição). O verbo vai para o <b>final</b>:</p>
 <div class="ex"><span class="es-t">Ich koche brasilianisch, <b>wenn</b> Freunde zu Besuch <b>kommen</b>.</span></div>
 <div class="ex"><span class="es-t"><b>Wenn</b> du Zeit <b>hast</b>, <b>kannst</b> du mir helfen.</span> – começando com <b>wenn</b>, a segunda parte começa com o verbo.</div>
 <div class="ojo">Para uma vez só no passado se usa <b>als</b> (B1). No A2 basta <b>wenn</b> para o presente e para „sempre que“.</div>`},
 {t:'mc',q:'___ es regnet, bleiben wir zu Hause.',opts:['Wenn','Weil','Dass'],a:0},
 {t:'mc',q:'Wenn ich müde bin, ___',opts:['trinke ich einen Kaffee.','ich trinke einen Kaffee.','ich einen Kaffee trinke.'],a:0},
 {t:'gap',q:'Feijoada ist ein brasilianisches ___ mit Bohnen und Fleisch. (prato)',a:['Gericht']},
 {t:'gap',q:'Kannst du nach dem Essen das Geschirr ___? (lavar a louça)',a:['abwaschen']},
 {t:'match',q:'Ligue.',pairs:[['der Löffel','a colher'],['die Gabel','o garfo'],['das Messer','a faca'],['der Topf','a panela'],['der Teller','o prato (louça)']]},
 {t:'read',title:'Leitura: Lucas kocht für seine Kollegen',text:`Wenn Lucas Heimweh hat, kocht er Feijoada. Für sein Team hat er am Freitag einen großen Topf mitgebracht: schwarze Bohnen, Rindfleisch, Wurst, dazu Reis und Orangen. „Das Gericht ist nicht scharf“, hat er gesagt, „aber es ist sehr schwer – nach einer Portion möchte man schlafen!“ Jana hat zweimal genommen. Frau Hoffmann wollte das Rezept haben. Nur Herr Albers hat nichts gegessen, weil er kein Fleisch isst.`,de:`Quando o Lucas está com saudade de casa, ele cozinha feijoada. Para a equipe dele, na sexta ele levou uma panela grande: feijão-preto, carne de boi, linguiça, com arroz e laranja. „O prato não é apimentado“, ele disse, „mas é muito pesado – depois de uma porção a gente quer dormir!“ A Jana repetiu. A Sra. Hoffmann quis a receita. Só o Sr. Albers não comeu nada, porque não come carne.`},
 {t:'mc',q:'Wann kocht Lucas Feijoada?',opts:['wenn er Heimweh hat','jeden Freitag','wenn er Geburtstag hat'],a:0},
 {t:'mc',q:'Warum hat Herr Albers nichts gegessen?',opts:['Er isst kein Fleisch.','Das Essen war zu scharf.','Er war nicht da.'],a:0},
 {t:'tr',de:'Quando faz sol, eu como sorvete.',a:['Wenn die Sonne scheint, esse ich ein Eis.','Wenn die Sonne scheint, esse ich Eis.','Ich esse ein Eis, wenn die Sonne scheint.','Ich esse Eis, wenn die Sonne scheint.']}
]},
{id:'l4',title:'Ler e escrever: convite de aniversário',desc:'Einladung schreiben · Zu- und Absage',steps:[
 {t:'read',title:'Leitura: Einladung zum 30.',text:`Liebe Freundinnen und Freunde,
ich werde 30 – und das möchte ich mit euch feiern! Die Party findet am Samstag, den 12. Oktober, ab 20 Uhr im Café Lindenblatt statt (Berger Straße 88). Für Essen ist gesorgt, aber über eine Flasche Wein oder Saft freue ich mich. Bitte keine Geschenke – wenn ihr mir etwas schenken wollt, gebt etwas in die Spendenbox für das Tierheim.
Sagt mir bitte bis Mittwoch Bescheid, ob ihr kommt.
Eure Jana`,de:`Queridas amigas e queridos amigos,
vou fazer 30 – e quero comemorar com vocês! A festa acontece no sábado, 12 de outubro, a partir das 20h, no Café Lindenblatt (Berger Straße 88). A comida está garantida, mas uma garrafa de vinho ou suco me deixa feliz. Por favor, nada de presentes – se vocês quiserem me dar algo, coloquem algo na caixa de doação para o abrigo de animais.
Por favor, me avisem até quarta-feira se vocês vêm.
Beijos, Jana`},
 {t:'mc',q:'Was soll man mitbringen?',opts:['etwas zu trinken','ein Geschenk','etwas zu essen'],a:0},
 {t:'mc',q:'Was möchte Jana statt Geschenken?',opts:['Geld für das Tierheim','Blumen','Konzertkarten'],a:0},
 {t:'mc',q:'Bis wann soll man Bescheid sagen?',opts:['bis Mittwoch','bis Samstag','bis zum 12. Oktober'],a:0},
 {t:'free',task:'Responda ao convite da Jana (~30–40 palavras): 1) dê os parabéns e agradeça, 2) diga se você vai e com quem / ou por que não pode, 3) diga o que você leva.',hint:'Liebe Jana, vielen Dank für die Einladung! Ich komme gern / Leider kann ich nicht, weil … Ich bringe … mit. Wenn du Hilfe brauchst, … Bis Samstag! / Alles Gute!',focus:'Dativ (dir, ihr), wenn, weil, Glückwünsche',model:'Liebe Jana,\nvielen Dank für die Einladung! Natürlich komme ich gern – ich bringe Tom mit, wenn das okay ist. Wir bringen eine Flasche Wein und brasilianische Süßigkeiten mit. Wenn du Hilfe brauchst, sag Bescheid!\nBis Samstag,\nLucas'}
]}],
resumen:`<h3>Dativo (Wem?)</h3><table><tr><td>masc./neutro</td><td class="es-t">dem / einem / meinem – ihm</td></tr><tr><td>fem.</td><td class="es-t">der / einer / meiner – ihr</td></tr><tr><td>plural</td><td class="es-t">den / meinen …-n – ihnen</td></tr></table>
<p class="es-t">Ich schenke meiner Mutter einen Schal. · mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen</p>
<p>Verbos com dativo: <span class="es-t">helfen, danken, gratulieren, gehören, gefallen, schmecken, passen, antworten</span></p>
<h3>wenn (verbo no final)</h3><p class="es-t">Wenn du Zeit hast, kannst du mir helfen. · Ich koche, wenn Freunde kommen.</p>
<h3>Felicitações</h3><p class="es-t">Herzlichen Glückwunsch! · Alles Gute! · Frohe Weihnachten! · Guten Rutsch! · Frohes neues Jahr!</p>`});

/* ================= KAPITEL 19 · ARBEIT & BEWERBUNG ================= */
LANGS.de.course.units.push({id:'k19',n:'19',level:'A2',title:'Arbeit & Bewerbung',sub:'Formação e experiência · currículo · entrevista de emprego · perguntas indiretas: ob, wann, wo … · ab, bis, nach, während',
goals:['Ausbildung, Studium, Berufserfahrung beschreiben','Ein Lebenslauf: von … bis …, nach dem Studium','Indirekte Fragen: Können Sie mir sagen, ob / wann …?','Ein Vorstellungsgespräch','Ziele und Träume im Beruf'],
situacion:{title:'Entrevista de emprego',npc:'Frau Neumann',scene:'Você se candidatou a uma vaga de desenvolvedor numa empresa em Mainz. A entrevista é por vídeo.',role:'Du bist Frau Neumann, Personalchefin einer IT-Firma in Mainz, freundlich und professionell. Du siezt. Frag nach Ausbildung, Berufserfahrung, Deutschkenntnissen und warum er die Stelle möchte. Beantworte seine Fragen zu Arbeitszeit, Homeoffice und Gehalt kurz. Sprich einfaches Deutsch (A2), benutze indirekte Fragen (Können Sie mir sagen, …?).',goal:'Fale da sua formação e experiência, explique por que quer a vaga e faça duas perguntas indiretas (Können Sie mir sagen, ob …?).'},
placement:[
 {t:'mc',q:'Können Sie mir sagen, ___',opts:['wann der Kurs beginnt?','wann beginnt der Kurs?','beginnt der Kurs wann?'],a:0},
 {t:'mc',q:'Ich weiß nicht, ___ ich die Stelle bekomme.',opts:['ob','wenn','dass'],a:0},
 {t:'mc',q:'„a experiência profissional“',opts:['die Berufserfahrung','die Berufsausbildung','das Berufsziel'],a:0},
 {t:'gap',q:'___ dem Studium habe ich ein Praktikum gemacht. (depois de)',a:['Nach']},
 {t:'mc',q:'Von 2018 ___ 2022 habe ich in São Paulo gearbeitet.',opts:['bis','ab','seit'],a:0},
 {t:'mc',q:'„Eu tenho bons conhecimentos de inglês.“',opts:['Ich habe gute Englischkenntnisse.','Ich habe gute Englischwissen.','Ich kenne gut Englisch.'],a:0}],
lessons:[
{id:'l1',title:'Formação e experiência',desc:'die Ausbildung, das Zeugnis, die Erfahrung …',steps:[
 {t:'vocab',title:'Formação',items:[['die Ausbildung','a formação técnica / o curso profissionalizante'],['die Universität','a universidade'],['das Fach','a matéria / a disciplina'],['der Abschluss','a formatura / o diploma'],['das Zeugnis','o boletim / o certificado'],['die Erfahrung','a experiência'],['die Berufserfahrung','a experiência profissional'],['die Kenntnisse (Pl.)','os conhecimentos'],['der Lebenslauf','o currículo'],['die Bewerbung','a candidatura'],['sich bewerben','candidatar-se'],['das Vorstellungsgespräch','a entrevista de emprego'],['das Gehalt','o salário'],['der Vertrag','o contrato'],['das Projekt','o projeto'],['beenden','terminar / concluir'],['versuchen','tentar'],['der Rentner / die Rentnerin','o aposentado / a aposentada']]},
 {t:'mc',q:'Nach der Schule hat Jana eine ___ als Bankkauffrau gemacht.',opts:['Ausbildung','Universität','Kenntnisse'],a:0},
 {t:'mc',q:'Für die Bewerbung brauche ich einen ___ und meine Zeugnisse.',opts:['Lebenslauf','Vertrag','Abschluss'],a:0},
 {t:'gap',q:'Lucas hat sich bei einer Firma in Mainz ___. (sich bewerben – Perfekt)',a:['beworben']},
 {t:'match',q:'Ligue.',pairs:[['das Gehalt','o salário'],['der Vertrag','o contrato'],['das Zeugnis','o certificado'],['die Erfahrung','a experiência'],['versuchen','tentar']]},
 {t:'info',title:'Tempo no currículo',html:`<table><tr><td class="es-t">von 2015 <b>bis</b> 2019</td><td>de 2015 a 2019</td></tr>
 <tr><td class="es-t"><b>seit</b> 2023</td><td>desde 2023 (e continua)</td></tr>
 <tr><td class="es-t"><b>ab</b> 1. März</td><td>a partir de 1º de março</td></tr>
 <tr><td class="es-t"><b>nach</b> dem Studium</td><td>depois da faculdade (+ dativo)</td></tr>
 <tr><td class="es-t"><b>vor</b> der Ausbildung</td><td>antes da formação (+ dativo)</td></tr>
 <tr><td class="es-t"><b>während</b> des Studiums</td><td>durante a faculdade</td></tr></table>`},
 {t:'gap',q:'Ich kann ___ dem 1. Juni anfangen. (a partir de)',a:['ab']},
 {t:'gap',q:'___ 2023 arbeite ich in Frankfurt. (desde)',a:['Seit']},
 {t:'tr',de:'Depois da faculdade eu trabalhei dois anos em São Paulo.',a:['Nach dem Studium habe ich zwei Jahre in São Paulo gearbeitet.']}
]},
{id:'l2',title:'Perguntas indiretas',desc:'Können Sie mir sagen, ob / wann …?',steps:[
 {t:'info',title:'Perguntas indiretas',html:`<p>Para perguntar de forma mais educada, comece com <span class="es-t">Können Sie mir sagen, …? / Wissen Sie, …? / Ich möchte wissen, …</span> – e o verbo vai para o <b>final</b>:</p>
 <table><tr><td class="es-t">Wann beginnt die Arbeit?</td><td class="es-t">Können Sie mir sagen, <b>wann</b> die Arbeit <b>beginnt</b>?</td></tr>
 <tr><td class="es-t">Wo ist das Büro?</td><td class="es-t">Wissen Sie, <b>wo</b> das Büro <b>ist</b>?</td></tr>
 <tr><td class="es-t">Gibt es Homeoffice?</td><td class="es-t">Ich möchte wissen, <b>ob</b> es Homeoffice <b>gibt</b>.</td></tr></table>
 <div class="ex">Perguntas com sim/não → <b>ob</b> (= se). Perguntas com W- → a palavra W fica: <b>wann, wo, wie, was, warum, wie viel</b> …</div>
 <div class="ojo"><b>ob</b> = „se“ (pergunta) · <b>wenn</b> = „se / quando“ (condição). <span class="es-t">Ich weiß nicht, ob er kommt.</span> ≠ <span class="es-t">Wenn er kommt, …</span></div>`},
 {t:'mc',q:'Wissen Sie, ___ die Stelle noch frei ist?',opts:['ob','wenn','wann ist'],a:0},
 {t:'mc',q:'Können Sie mir sagen, wie viel ___?',opts:['man hier verdient','verdient man hier','man verdient hier'],a:0},
 {t:'gap',q:'Ich möchte wissen, ___ ich im Homeoffice arbeiten kann. (se)',a:['ob']},
 {t:'gap',q:'Können Sie mir sagen, wann das Gespräch ___? (beginnen)',a:['beginnt']},
 {t:'order',es:'Wissen Sie wo die Personalabteilung ist',de:'O senhor sabe onde fica o departamento de pessoal?'},
 {t:'tr',de:'O senhor pode me dizer quando eu posso começar?',a:['Können Sie mir sagen, wann ich anfangen kann?','Können Sie mir sagen, wann ich beginnen kann?']},
 {t:'tr',de:'Eu não sei se ele vem.',a:['Ich weiß nicht, ob er kommt.']},
 {t:'speak',es:'Können Sie mir sagen, ob ich auch im Homeoffice arbeiten kann?',de:'O senhor pode me dizer se eu também posso trabalhar em home office?',tip:'Pergunta de sim/não → <b>ob</b>, verbo no final: <i>kann</i>.'}
]},
{id:'l3',title:'A entrevista',desc:'Vorstellungsgespräch · Ziele und Träume',steps:[
 {t:'vocab',title:'Na entrevista',items:[['die Situation','a situação'],['der Stress','o estresse'],['stressig','estressante'],['das Ziel','o objetivo / a meta'],['unbedingt','de qualquer jeito / sem falta'],['notwendig','necessário'],['nützlich','útil'],['freiwillig','voluntário'],['beraten','aconselhar / dar consultoria'],['die Stärke','o ponto forte'],['die Schwäche','o ponto fraco'],['zuverlässig','confiável'],['flexibel','flexível'],['im Team arbeiten','trabalhar em equipe']]},
 {t:'dialog',place:'Videocall',title:'Entrevista de emprego',scene:'A Sra. Neumann, da área de RH, entrevista você para uma vaga em Mainz.',lines:[
  {n:'Frau Neumann',es:'Guten Tag, Herr Souza. Erzählen Sie doch bitte kurz etwas über sich.',de:'Boa tarde, Sr. Souza. Conte, por favor, um pouco sobre o senhor.'},
  {you:true,opts:[{es:'Gern. Ich habe in São Paulo Informatik studiert und dann drei Jahre als Programmierer gearbeitet. Seit 2023 lebe ich in Frankfurt.',ok:true},{es:'Gern. Ich studiere Informatik in São Paulo seit drei Jahre.',ok:false,why:'Fale da formação no passado (Perfekt) e use <i>seit</i> + dativo: <i>seit drei Jahren</i>.'}]},
  {n:'Frau Neumann',es:'Warum möchten Sie bei uns arbeiten?',de:'Por que o senhor quer trabalhar conosco?'},
  {you:true,opts:[{es:'Weil Ihre Projekte sehr interessant sind und ich gern im Team arbeite.',ok:true},{es:'Weil das Gehalt ist gut.',ok:false,why:'Depois de <i>weil</i> o verbo vai para o final – e é melhor falar dos projetos 😉'}]},
  {n:'Frau Neumann',es:'Haben Sie noch Fragen an uns?',de:'O senhor tem mais perguntas para nós?'},
  {you:true,opts:[{es:'Ja. Können Sie mir sagen, ob man auch im Homeoffice arbeiten kann?',ok:true},{es:'Ja. Kann man im Homeoffice arbeiten, können Sie mir sagen?',ok:false,why:'Pergunta indireta: <i>Können Sie mir sagen, <b>ob</b> man … arbeiten <b>kann</b>?</i>'}]}]},
 {t:'mc',q:'Was ist eine Stärke?',opts:['Ich bin zuverlässig.','Ich komme oft zu spät.','Ich arbeite nicht gern im Team.'],a:0},
 {t:'gap',q:'Mein ___ ist es, in zwei Jahren Teamleiter zu sein. (objetivo)',a:['Ziel']},
 {t:'mc',q:'„Ich möchte unbedingt in Deutschland bleiben.“ bedeutet:',opts:['Ich möchte sehr gern / auf jeden Fall bleiben.','Ich möchte vielleicht bleiben.','Ich möchte nicht bleiben.'],a:0},
 {t:'tr',de:'Meu ponto forte é que eu sou flexível.',a:['Meine Stärke ist, dass ich flexibel bin.']}
]},
{id:'l4',title:'Ler e escrever: anúncio e candidatura',desc:'Stellenanzeige · kurze Bewerbung per E-Mail',steps:[
 {t:'read',title:'Leitura: Stellenanzeige',text:`Wir suchen ab sofort eine/n Softwareentwickler/in (Vollzeit, 40 Std./Woche).
Ihre Aufgaben: Sie entwickeln Apps für unsere Kunden und arbeiten in einem internationalen Team.
Sie haben: ein abgeschlossenes Studium (Informatik oder ähnlich), mindestens zwei Jahre Berufserfahrung, gute Englischkenntnisse. Deutschkenntnisse (A2/B1) sind nützlich, aber nicht notwendig.
Wir bieten: ein gutes Gehalt, flexible Arbeitszeiten, zwei Tage Homeoffice pro Woche und einen kostenlosen Deutschkurs.
Bewerbung bitte per E-Mail an jobs@appwerk-mainz.de`,de:`Procuramos a partir de agora um(a) desenvolvedor(a) de software (tempo integral, 40 h/semana).
Suas tarefas: você desenvolve apps para nossos clientes e trabalha numa equipe internacional.
Você tem: faculdade concluída (informática ou similar), pelo menos dois anos de experiência profissional, bom inglês. Conhecimentos de alemão (A2/B1) são úteis, mas não necessários.
Oferecemos: um bom salário, horários flexíveis, dois dias de home office por semana e um curso de alemão gratuito.
Candidatura por e-mail para jobs@appwerk-mainz.de`},
 {t:'mc',q:'Muss man gut Deutsch sprechen?',opts:['Nein, das ist nicht notwendig.','Ja, man braucht B1.','Ja, man braucht C1.'],a:0},
 {t:'mc',q:'Wie viele Tage kann man zu Hause arbeiten?',opts:['zwei Tage pro Woche','jeden Tag','gar nicht'],a:0},
 {t:'mc',q:'Richtig oder falsch? Die Firma bezahlt einen Deutschkurs.',opts:['richtig','falsch'],a:0},
 {t:'free',task:'Escreva uma e-mail curta de candidatura (~40 palavras) para o anúncio: 1) para qual vaga você se candidata, 2) sua formação e experiência, 3) a partir de quando você pode começar.',hint:'Sehr geehrte Damen und Herren, ich bewerbe mich für die Stelle als … Ich habe … studiert und … Jahre als … gearbeitet. Ich kann ab … anfangen. Mit freundlichen Grüßen',focus:'Perfekt, Zeitangaben (seit, ab, von … bis), formelle E-Mail',model:'Sehr geehrte Damen und Herren,\nich bewerbe mich für die Stelle als Softwareentwickler. Ich habe in São Paulo Informatik studiert und vier Jahre als Programmierer gearbeitet. Seit 2023 lebe ich in Frankfurt. Ich kann ab dem 1. Mai anfangen.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Tempo</h3><p class="es-t">von … bis … · seit 2023 · ab 1. März · nach dem Studium · vor der Ausbildung · während des Studiums</p>
<h3>Perguntas indiretas (verbo no final)</h3><table><tr><td class="es-t">Können Sie mir sagen, wann die Arbeit beginnt?</td></tr><tr><td class="es-t">Ich möchte wissen, ob es Homeoffice gibt.</td></tr></table><p><b>ob</b> = se (pergunta sim/não) · <b>wenn</b> = se/quando (condição)</p>
<h3>Candidatura</h3><p class="es-t">der Lebenslauf · die Bewerbung · sich bewerben (hat sich beworben) · das Vorstellungsgespräch · die Berufserfahrung · die Kenntnisse</p>`});

/* ================= KAPITEL 20 · ÄMTER, POST & BANK ================= */
LANGS.de.course.units.push({id:'k20',n:'20',level:'A2',title:'Ämter, Post & Bank',sub:'Órgãos públicos · formulários · correio · banco · achados e perdidos · verbos com preposição: warten auf, denken an …',
goals:['Auf dem Amt: das Formular, unterschreiben, die Gebühr','Post und Pakete: der Empfänger, abholen, bestätigen','Bank: das Konto, überweisen, die Karte sperren','Verben mit Präposition: warten auf, denken an, sich kümmern um','Etwas verloren: das Fundbüro'],
situacion:{title:'No Bürgeramt',npc:'Sachbearbeiterin',scene:'Você precisa fazer o registro do novo endereço (Ummeldung) no Bürgeramt depois da mudança.',role:'Du bist Sachbearbeiterin im Bürgeramt Frankfurt, sachlich, aber geduldig. Du siezt. Frag nach Ausweis/Pass, Wohnungsgeberbestätigung (Bestätigung vom Vermieter) und dem Datum des Einzugs. Erkläre, dass er das Formular unterschreiben muss und dass die Ummeldung kostenlos ist. Wenn ein Dokument fehlt: Er soll einen neuen Termin online buchen. Sprich einfaches Deutsch (A2).',goal:'Explique que você se mudou, entregue os documentos, pergunte se precisa pagar e o que fazer se faltar um documento.'},
placement:[
 {t:'mc',q:'Ich warte ___ den Bus.',opts:['auf','für','an'],a:0},
 {t:'mc',q:'„Por favor, assine aqui.“',opts:['Bitte unterschreiben Sie hier.','Bitte schreiben Sie unter hier.','Bitte unterschrift hier.'],a:0},
 {t:'gap',q:'Ich denke oft ___ meine Familie in Brasilien.',a:['an']},
 {t:'mc',q:'Meine Kreditkarte ist weg. Ich muss sie ___.',opts:['sperren','überweisen','unterschreiben'],a:0},
 {t:'mc',q:'Wo fragt man nach einer verlorenen Tasche?',opts:['im Fundbüro','im Bürgeramt','in der Reinigung'],a:0},
 {t:'gap',q:'Kannst du dich ___ die Katze kümmern? (cuidar de)',a:['um']}],
lessons:[
{id:'l1',title:'Órgãos públicos e formulários',desc:'das Formular, unterschreiben, die Gebühr',steps:[
 {t:'vocab',title:'No órgão público',items:[['das Amt','o órgão público / a repartição'],['das Bürgeramt','o centro de atendimento ao cidadão'],['die Behörde','a autoridade / o órgão'],['die Anmeldung','o registro / a inscrição'],['ummelden','atualizar o registro (endereço)'],['die Aufenthaltserlaubnis','a autorização de residência'],['die Gebühr','a taxa'],['die Wartenummer','a senha (fila)'],['der Zettel','o papelzinho / o bilhete'],['notieren','anotar'],['die Erlaubnis','a permissão'],['das Stockwerk','o andar']]},
 {t:'mc',q:'Bitte füllen Sie das ___ aus und unterschreiben Sie unten.',opts:['Formular','Stockwerk','Amt'],a:0},
 {t:'mc',q:'Mein Pass ist nur noch bis März ___.',opts:['gültig','kostenlos','notwendig'],a:0},
 {t:'gap',q:'Für den neuen Ausweis muss man eine ___ von 37 Euro bezahlen. (taxa)',a:['Gebühr']},
 {t:'match',q:'Ligue.',pairs:[['die Unterschrift','a assinatura'],['der Zettel','o papelzinho'],['notieren','anotar'],['das Stockwerk','o andar']]},
 {t:'read',hideText:true,title:'Ouvir: Im Bürgeramt',intro:'Você está esperando no Bürgeramt. Ouça o aviso.',text:`Liebe Kundinnen und Kunden, bitte ziehen Sie am Eingang eine Wartenummer. Für Ausweise und Pässe gehen Sie bitte in den zweiten Stock, Zimmer 204. Ummeldungen machen wir im Erdgeschoss. Bitte haben Sie alle Dokumente bereit: Ihren Ausweis oder Pass und die Bestätigung von Ihrem Vermieter. Heute schließen wir schon um 13 Uhr.`,de:`Prezados clientes, por favor peguem uma senha na entrada. Para carteiras de identidade e passaportes, vão ao segundo andar, sala 204. Atualizações de endereço fazemos no térreo. Por favor, tenham todos os documentos em mãos: sua identidade ou passaporte e a declaração do seu locador. Hoje fechamos já às 13h.`},
 {t:'mc',q:'Wo macht man die Ummeldung?',opts:['im Erdgeschoss','im zweiten Stock','in Zimmer 204'],a:0},
 {t:'mc',q:'Was braucht man für die Ummeldung?',opts:['den Pass und die Bestätigung vom Vermieter','nur eine Wartenummer','ein Foto'],a:0},
 {t:'tr',de:'Onde eu tenho que assinar?',a:['Wo muss ich unterschreiben?']}
]},
{id:'l2',title:'Correio e banco',desc:'der Empfänger, abholen · das Konto, überweisen',steps:[
 {t:'vocab',title:'Correio e banco',items:[['der Empfänger / die Empfängerin','o destinatário / a destinatária'],['die Sendung','a encomenda / o programa (TV, rádio)'],['die Sendungsnummer','o código de rastreio'],['bestätigen','confirmar'],['die Bestätigung','a confirmação'],['die Filiale','a agência / a filial'],['die Überweisung','a transferência'],['abheben','sacar (dinheiro)'],['der Geldautomat','o caixa eletrônico'],['die Kreditkarte','o cartão de crédito'],['sperren','bloquear'],['die Geheimzahl','a senha (PIN)'],['der Kredit','o empréstimo'],['kriegen','receber / conseguir (coloquial)'],['drücken','apertar']]},
 {t:'mc',q:'Ich habe die Miete schon ___.',opts:['überwiesen','abgehoben','gesperrt'],a:0},
 {t:'mc',q:'Am ___ kann man Geld abheben.',opts:['Geldautomaten','Empfänger','Kredit'],a:0},
 {t:'gap',q:'Meine Karte ist gestohlen! Ich muss sie sofort ___. (bloquear)',a:['sperren']},
 {t:'mc',q:'„Ich hab ein Paket gekriegt.“ – kriegen ist hier:',opts:['bekommen (umgangssprachlich)','schicken','öffnen'],a:0},
 {t:'dialog',place:'Post',title:'Buscar um pacote',scene:'Você não estava em casa e recebeu um aviso: o pacote está na agência dos correios.',lines:[
  {n:'Mitarbeiter',es:'Guten Tag, was kann ich für Sie tun?',de:'Bom dia, como posso ajudar?'},
  {you:true,opts:[{es:'Guten Tag, ich möchte ein Paket abholen. Hier ist die Benachrichtigung.',ok:true},{es:'Guten Tag, ich möchte ein Paket abheben.',ok:false,why:'<i>abheben</i> = sacar dinheiro. Pacote → <i>abholen</i>.'}]},
  {n:'Mitarbeiter',es:'Danke. Haben Sie Ihren Ausweis dabei?',de:'Obrigado. O senhor está com sua identidade?'},
  {you:true,opts:[{es:'Ja, hier ist mein Pass.',ok:true},{es:'Ja, ich bin mein Pass.',ok:false,why:'<i>Hier ist mein Pass.</i>'}]},
  {n:'Mitarbeiter',es:'Gut. Bitte unterschreiben Sie hier. – So, hier ist Ihr Paket.',de:'Certo. Por favor, assine aqui. – Pronto, aqui está seu pacote.'},
  {you:true,opts:[{es:'Vielen Dank! Schönen Tag noch!',ok:true},{es:'Bitte schön!',ok:false,why:'Quem agradece é você: <i>Vielen Dank!</i>'}]}]},
 {t:'tr',de:'Eu gostaria de abrir uma conta.',a:['Ich möchte ein Konto eröffnen.','Ich möchte gern ein Konto eröffnen.','Ich würde gern ein Konto eröffnen.']},
 {t:'tr',de:'Você pode confirmar o horário?',a:['Kannst du den Termin bestätigen?','Können Sie den Termin bestätigen?']}
]},
{id:'l3',title:'Verbos com preposição',desc:'warten auf, denken an, sich kümmern um …',steps:[
 {t:'info',title:'Verbos com preposição fixa',html:`<p>Muitos verbos alemães vêm com uma preposição fixa – é melhor aprender juntos:</p>
 <table><tr><td class="es-t">warten <b>auf</b> + Akk.</td><td>esperar por</td><td class="es-t">Ich warte auf den Bus.</td></tr>
 <tr><td class="es-t">denken <b>an</b> + Akk.</td><td>pensar em</td><td class="es-t">Ich denke an dich.</td></tr>
 <tr><td class="es-t">sich freuen <b>auf</b> + Akk.</td><td>estar ansioso por</td><td class="es-t">Ich freue mich auf den Urlaub.</td></tr>
 <tr><td class="es-t">sich freuen <b>über</b> + Akk.</td><td>ficar feliz com</td><td class="es-t">Ich freue mich über das Geschenk.</td></tr>
 <tr><td class="es-t">sich kümmern <b>um</b> + Akk.</td><td>cuidar de</td><td class="es-t">Sie kümmert sich um die Kinder.</td></tr>
 <tr><td class="es-t">sprechen <b>über</b> + Akk.</td><td>falar sobre</td><td class="es-t">Wir sprechen über das Projekt.</td></tr>
 <tr><td class="es-t">sich interessieren <b>für</b> + Akk.</td><td>interessar-se por</td><td class="es-t">Er interessiert sich für Kunst.</td></tr>
 <tr><td class="es-t">fragen <b>nach</b> + Dat.</td><td>perguntar por</td><td class="es-t">Er fragt nach dem Weg.</td></tr>
 <tr><td class="es-t">sich anmelden <b>für</b> + Akk.</td><td>inscrever-se em</td><td class="es-t">Ich melde mich für den Kurs an.</td></tr></table>
 <div class="ojo">A preposição em português muitas vezes é outra: „pensar <b>em</b>“ = denken <b>an</b>, „esperar <b>por</b>“ = warten <b>auf</b>.</div>`},
 {t:'mc',q:'Wir warten schon seit einer Stunde ___ das Paket.',opts:['auf','für','an'],a:0},
 {t:'mc',q:'Interessierst du dich ___ Fußball?',opts:['für','über','an'],a:0},
 {t:'gap',q:'Ich freue mich ___ deinen Besuch nächste Woche! (futuro)',a:['auf']},
 {t:'gap',q:'Wer kümmert sich ___ die Pflanzen, wenn du im Urlaub bist?',a:['um']},
 {t:'gap',q:'Ein Tourist hat ___ dem Weg zum Bahnhof gefragt.',a:['nach']},
 {t:'order',es:'Im Meeting haben wir über das neue Projekt gesprochen',de:'Na reunião falamos sobre o novo projeto.'},
 {t:'tr',de:'Eu penso muito na minha família.',a:['Ich denke oft an meine Familie.','Ich denke viel an meine Familie.']},
 {t:'tr',de:'Ela cuida da mãe dela.',a:['Sie kümmert sich um ihre Mutter.']}
]},
{id:'l4',title:'Achados e perdidos',desc:'das Fundbüro · Verlustmeldung',steps:[
 {t:'vocab',title:'Perdi algo',items:[['das Fundbüro','os achados e perdidos'],['die Fundsachen (Pl.)','os objetos achados'],['verlieren','perder'],['finden','achar'],['die Geldbörse','a carteira'],['die Webseite','o site'],['der Service','o atendimento / o serviço'],['die Mailbox','a caixa postal (celular)'],['informieren','informar'],['zumachen','fechar']]},
 {t:'read',title:'Leitura: Fundbüro Frankfurt',text:`Sie haben etwas in Bus oder Bahn verloren? Melden Sie es online auf unserer Webseite oder kommen Sie ins Fundbüro (Mainzer Landstraße 323, Erdgeschoss). Öffnungszeiten: Montag bis Freitag 8 bis 15 Uhr, Donnerstag bis 18 Uhr. Am Wochenende machen wir zu. Bitte bringen Sie Ihren Ausweis mit. Für Fundsachen bis 50 Euro Wert bezahlen Sie eine Gebühr von 5 Euro. Wir informieren Sie per E-Mail, wenn wir Ihre Sache gefunden haben.`,de:`Você perdeu algo no ônibus ou no trem? Comunique online no nosso site ou venha aos achados e perdidos (Mainzer Landstraße 323, térreo). Horário: segunda a sexta das 8h às 15h, quinta até as 18h. No fim de semana fechamos. Por favor, traga sua identidade. Para objetos de até 50 euros de valor você paga uma taxa de 5 euros. Nós informamos por e-mail quando acharmos o seu objeto.`},
 {t:'mc',q:'Wann kann man am Donnerstag ins Fundbüro gehen?',opts:['von 8 bis 18 Uhr','von 8 bis 15 Uhr','gar nicht'],a:0},
 {t:'mc',q:'Wie erfährt man, dass die Sache gefunden wurde?',opts:['per E-Mail','per Brief','auf der Mailbox'],a:0},
 {t:'mc',q:'Richtig oder falsch? Am Samstag ist das Fundbüro geöffnet.',opts:['falsch','richtig'],a:0},
 {t:'free',task:'Você esqueceu a mochila no trem. Escreva uma mensagem curta (~30–40 palavras) para os achados e perdidos: 1) o que você perdeu e onde/quando, 2) como é a mochila e o que tinha dentro, 3) como podem entrar em contato com você.',hint:'Sehr geehrte Damen und Herren, am … habe ich im Zug … meinen Rucksack verloren. Er ist … Darin waren … Bitte informieren Sie mich per E-Mail / unter der Nummer … Mit freundlichen Grüßen',focus:'Perfekt, Adjektivendungen, Präpositionen, formelle Nachricht',model:'Sehr geehrte Damen und Herren,\nam Montag habe ich im Zug von Frankfurt nach Mainz meinen Rucksack verloren. Er ist schwarz und ziemlich groß. Darin waren mein Laptop und ein blauer Schirm. Bitte informieren Sie mich per E-Mail oder unter 0151 234 567.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Órgãos públicos</h3><p class="es-t">das Formular ausfüllen · unterschreiben · die Gebühr · der Ausweis · gültig · ummelden · die Wartenummer</p>
<h3>Correio e banco</h3><p class="es-t">ein Paket abholen · der Empfänger · das Konto · Geld überweisen / abheben · die Karte sperren</p>
<h3>Verbos com preposição</h3><table><tr><td class="es-t">warten auf · denken an · sich freuen auf/über · sich kümmern um · sprechen über · sich interessieren für · fragen nach · sich anmelden für</td></tr></table>`});

/* ================= KAPITEL 21 · FREIZEIT, KULTUR & MEDIEN ================= */
LANGS.de.course.units.push({id:'k21',n:'21',level:'A2',title:'Freizeit, Kultur & Medien',sub:'Teatro, arte, música · TV, revistas, internet · jemand, niemand, etwas, nichts, überall · welch- / was für ein',
goals:['Kultur: das Theater, die Ausstellung, das Instrument','Medien: die Sendung, die Zeitschrift, surfen, chatten','Meinungen: spannend, langweilig, berühmt, beliebt','jemand / niemand / etwas / nichts / überall / nirgends','Welcher Film? – Was für ein Film?','Einen Freizeittipp geben'],
situacion:{title:'O que vamos fazer no sábado?',npc:'Jana',scene:'Você e a Jana querem sair no sábado. Cada um tem uma ideia diferente.',role:'Du bist Jana, Lucas’ Kollegin und Freundin in Frankfurt, sportlich und kulturinteressiert. Du duzt. Schlag eine Ausstellung im Städel-Museum vor, Lucas mag vielleicht lieber Kino oder ein Konzert. Diskutiert: Was ist spannend, was langweilig? Was für eine Ausstellung? Wann, wo, wie teuer? Am Ende einigt ihr euch. Benutze jemand/niemand/etwas/nichts und „Was für ein …?“. Sprich einfaches Deutsch (A2).',goal:'Proponha uma atividade, dê sua opinião (spannend, langweilig …), pergunte „Was für …?“ e cheguem a um acordo.'},
placement:[
 {t:'mc',q:'Ist ___ zu Hause? – Nein, niemand.',opts:['jemand','etwas','nichts'],a:0},
 {t:'mc',q:'___ Film möchtest du sehen? – Den neuen Krimi.',opts:['Welchen','Welcher','Was für'],a:0},
 {t:'mc',q:'Ich habe ___ gehört, die Musik war zu laut.',opts:['nichts','niemand','nirgends'],a:0},
 {t:'gap',q:'___ für eine Zeitschrift liest du? (Was)',a:['Was']},
 {t:'mc',q:'Der Film war so ___, ich bin fast eingeschlafen.',opts:['langweilig','spannend','aufregend'],a:0},
 {t:'mc',q:'„O ator é muito famoso.“',opts:['Der Schauspieler ist sehr berühmt.','Der Schauspieler ist sehr beliebt.','Der Schauspieler ist sehr bekannt gemacht.'],a:0}],
lessons:[
{id:'l1',title:'Cultura e opiniões',desc:'das Theater, die Ausstellung · spannend, berühmt',steps:[
 {t:'vocab',title:'Cultura',items:[['das Theater','o teatro'],['die Oper','a ópera'],['die Kunst','a arte'],['die Ausstellung','a exposição'],['das Instrument','o instrumento'],['das Klavier','o piano'],['die Gitarre','o violão / a guitarra'],['der Schauspieler / die Schauspielerin','o ator / a atriz'],['spannend','emocionante / com suspense'],['langweilig','chato'],['aufregend','empolgante'],['berühmt','famoso'],['beliebt','popular / querido'],['fantastisch','fantástico'],['furchtbar','horrível'],['komisch','engraçado / estranho']]},
 {t:'mc',q:'Im Städel-Museum gibt es eine neue ___ mit Bildern von Picasso.',opts:['Ausstellung','Sendung','Zeitschrift'],a:0},
 {t:'mc',q:'Der Krimi war so ___ – ich wollte wissen, wer der Mörder ist!',opts:['spannend','langweilig','furchtbar'],a:0},
 {t:'gap',q:'Jana spielt seit zehn Jahren ___. Sie hat ein Klavier zu Hause. (piano)',a:['Klavier']},
 {t:'match',q:'Ligue.',pairs:[['berühmt','famoso'],['beliebt','popular'],['langweilig','chato'],['komisch','engraçado / estranho'],['der Eintritt','a entrada']]},
 {t:'info',title:'Welcher? – Was für ein?',html:`<table><tr><td class="es-t"><b>Welcher</b> Film? – <b>Der</b> neue Krimi.</td><td>Qual (de um grupo conhecido)? → resposta com <b>der/die/das</b></td></tr>
 <tr><td class="es-t"><b>Was für ein</b> Film? – <b>Ein</b> Krimi.</td><td>Que tipo de …? → resposta com <b>ein/eine</b></td></tr></table>
 <div class="ex"><span class="es-t">welcher / welche / welches</span> mudam como <i>der/die/das</i>: <span class="es-t">Welchen Film siehst du?</span> · <span class="es-t">Was für eine Ausstellung ist das?</span></div>`},
 {t:'mc',q:'___ Musik hörst du gern? – Rock und Samba.',opts:['Was für','Welche','Welcher'],a:0},
 {t:'mc',q:'___ Jacke gehört dir, die rote oder die blaue?',opts:['Welche','Was für eine','Welcher'],a:0},
 {t:'tr',de:'Que tipo de filme você gosta de ver?',a:['Was für Filme siehst du gern?','Was für einen Film siehst du gern?','Was für Filme schaust du gern?']}
]},
{id:'l2',title:'Mídia',desc:'die Sendung, die Zeitschrift, surfen, chatten',steps:[
 {t:'vocab',title:'Mídia',items:[['das Programm','a programação'],['die Nachrichten (Pl.)','o noticiário'],['die Zeitschrift','a revista'],['der Titel','o título'],['das Interview','a entrevista'],['der Bericht','a reportagem'],['berichten','relatar'],['das Blog','o blog'],['surfen','navegar (internet) / surfar'],['chatten','conversar online'],['der Witz','a piada'],['das Rätsel','o enigma / as palavras cruzadas'],['das Quiz','o quiz'],['die Kamera','a câmera'],['das Comic','a história em quadrinhos']]},
 {t:'mc',q:'Um 20 Uhr kommen im Fernsehen die ___.',opts:['Nachrichten','Rätsel','Comics'],a:0},
 {t:'mc',q:'Abends ___ Lucas mit seiner Familie in Brasilien.',opts:['chattet','surft','berichtet'],a:0},
 {t:'gap',q:'Im Zug lese ich gern eine ___. (revista)',a:['Zeitschrift']},
 {t:'read',title:'Leitura: Fernsehprogramm',text:`20:00 Tagesschau – Nachrichten
20:15 Tatort: „Tod am Main“ – Krimi aus Frankfurt. Kommissarin Weber sucht einen Mörder in der Bankenwelt. Sehr spannend!
21:45 Wer weiß es? – Das große Quiz mit Fragen aus Sport, Kunst und Geschichte.
22:30 Musik am Abend – Interview mit der berühmten Sängerin Lena Hoffmann und Live-Konzert.
23:45 Comedy-Nacht – die besten Witze des Jahres`,de:`20:00 Tagesschau – noticiário
20:15 Tatort: „Morte no Meno“ – série policial de Frankfurt. A comissária Weber procura um assassino no mundo dos bancos. Muito emocionante!
21:45 Wer weiß es? – o grande quiz com perguntas de esporte, arte e história.
22:30 Música à noite – entrevista com a famosa cantora Lena Hoffmann e show ao vivo.
23:45 Noite de comédia – as melhores piadas do ano`},
 {t:'mc',q:'Sie möchten etwas lachen. Was sehen Sie?',opts:['Comedy-Nacht','Tatort','Tagesschau'],a:0},
 {t:'mc',q:'Wann gibt es ein Interview?',opts:['um 22:30 Uhr','um 20:15 Uhr','um 21:45 Uhr'],a:0},
 {t:'tr',de:'Eu leio as notícias na internet.',a:['Ich lese die Nachrichten im Internet.']}
]},
{id:'l3',title:'Alguém, ninguém, algo, nada',desc:'jemand, niemand, etwas, nichts, überall, nirgends',steps:[
 {t:'info',title:'Pronomes indefinidos',html:`<table><tr><th>pessoas</th><th>coisas</th><th>lugares</th></tr>
 <tr><td class="es-t">jemand = alguém</td><td class="es-t">etwas = algo</td><td class="es-t">irgendwo = em algum lugar</td></tr>
 <tr><td class="es-t">niemand = ninguém</td><td class="es-t">nichts = nada</td><td class="es-t">nirgends = em lugar nenhum</td></tr>
 <tr><td class="es-t">alle = todos</td><td class="es-t">alles = tudo</td><td class="es-t">überall = em todo lugar</td></tr></table>
 <div class="ojo">Em alemão só existe <b>uma</b> negação: <span class="es-t">Ich habe <b>nichts</b> gesehen.</span> = Eu não vi nada. (nunca „nicht nichts“!)</div>
 <div class="ex"><span class="es-t">Hast du etwas gegessen? – Nein, nichts.</span> · <span class="es-t">Ist jemand da? – Nein, niemand.</span></div>`},
 {t:'mc',q:'Ich habe meinen Schlüssel gesucht, aber ich habe ihn ___ gefunden.',opts:['nirgends','niemand','nichts'],a:0},
 {t:'mc',q:'Hat ___ meine Brille gesehen?',opts:['jemand','etwas','überall'],a:0},
 {t:'gap',q:'Im Kino war ___ – der Film war furchtbar. (ninguém)',a:['niemand']},
 {t:'gap',q:'Möchtest du ___ trinken? (algo)',a:['etwas']},
 {t:'gap',q:'In Frankfurt gibt es ___ Baustellen. (em todo lugar)',a:['überall']},
 {t:'tr',de:'Eu não entendi nada.',a:['Ich habe nichts verstanden.']},
 {t:'tr',de:'Alguém pode me ajudar?',a:['Kann mir jemand helfen?']},
 {t:'speak',es:'Ich habe überall gesucht, aber ich habe meinen Schlüssel nirgends gefunden.',de:'Procurei em todo lugar, mas não achei minha chave em lugar nenhum.',tip:'Só uma negação: <i>nirgends</i> – sem <i>nicht</i>.'}
]},
{id:'l4',title:'Ouvir e escrever: dica de lazer',desc:'Radiotipp · Nachricht an einen Freund',steps:[
 {t:'vocab',title:'Lazer',items:[['der Zoo','o zoológico'],['der Zirkus','o circo'],['das Pferd','o cavalo'],['der Sportplatz','o campo de esportes'],['der Volleyball','o vôlei'],['der Basketball','o basquete'],['der Ski','o esqui'],['basteln','fazer trabalhos manuais'],['der Wettbewerb','a competição / o concurso']]},
 {t:'read',hideText:true,title:'Ouvir: Freizeittipps im Radio',intro:'Ouça as dicas de fim de semana da rádio.',text:`Und hier unsere Tipps fürs Wochenende! Für Familien: Am Samstag gibt es im Zoo ein großes Fest – Kinder unter zwölf Jahren haben freien Eintritt, und um 15 Uhr dürfen sie auf Pferden reiten. Für Sportfans: Am Sonntag findet am Sportplatz Bornheim ein Volleyball-Wettbewerb statt. Jeder darf mitspielen, Anmeldung bis Freitag. Und für alle, die gern basteln: Die Stadtbibliothek bietet am Samstag von 10 bis 13 Uhr einen kostenlosen Workshop an.`,de:`E aqui as nossas dicas para o fim de semana! Para famílias: no sábado tem uma grande festa no zoológico – crianças com menos de doze anos não pagam entrada, e às 15h elas podem andar a cavalo. Para os fãs de esporte: no domingo acontece no campo de Bornheim uma competição de vôlei. Todo mundo pode jogar, inscrição até sexta. E para todos que gostam de trabalhos manuais: a biblioteca municipal oferece no sábado das 10h às 13h um workshop gratuito.`},
 {t:'mc',q:'Wer bezahlt im Zoo keinen Eintritt?',opts:['Kinder unter zwölf Jahren','alle Familien','Sportfans'],a:0},
 {t:'mc',q:'Bis wann muss man sich für den Volleyball-Wettbewerb anmelden?',opts:['bis Freitag','bis Samstag','bis Sonntag'],a:0},
 {t:'mc',q:'Was kostet der Workshop in der Bibliothek?',opts:['nichts','5 Euro','12 Euro'],a:0},
 {t:'free',task:'Escreva uma mensagem (~30–40 palavras) para o Tom: 1) proponha uma das atividades do rádio, 2) diga por que você acha interessante, 3) combine hora e lugar para se encontrarem.',hint:'Hallo Tom, hast du am … Zeit? Am Sonntag gibt es … Ich finde das …, weil … Wollen wir uns um … am … treffen? Bis dann!',focus:'Vorschläge machen, weil/wenn, Zeit- und Ortsangaben',model:'Hallo Tom,\nhast du am Sonntag Zeit? Am Sportplatz Bornheim gibt es einen Volleyball-Wettbewerb. Ich finde das super, weil jeder mitspielen darf. Wollen wir uns um zehn Uhr vor dem Sportplatz treffen? Ich melde uns bis Freitag an.\nBis dann!\nLucas'}
]}],
resumen:`<h3>Cultura e opinião</h3><p class="es-t">das Theater · die Ausstellung · das Instrument · spannend · langweilig · aufregend · berühmt · beliebt · komisch</p>
<h3>Welcher? – Was für ein?</h3><p class="es-t">Welcher Film? – Der neue Krimi. · Was für ein Film? – Ein Krimi.</p>
<h3>Indefinidos (uma só negação!)</h3><table><tr><td class="es-t">jemand – niemand – alle</td></tr><tr><td class="es-t">etwas – nichts – alles</td></tr><tr><td class="es-t">irgendwo – nirgends – überall</td></tr></table>`});

/* ================= KAPITEL 22 · MENSCHEN & BEZIEHUNGEN ================= */
LANGS.de.course.units.push({id:'k22',n:'22',level:'A2',title:'Menschen & Beziehungen',sub:'Descrever pessoas · caráter · família e filhos · dar opinião, concordar e discordar · conselhos: Du solltest …',
goals:['Personen beschreiben: Aussehen und Charakter','Familie und Kinder: der Kindergarten, das Taschengeld','Meinung sagen: Ich bin einverstanden. Das ist mir egal.','Ratschläge geben: Du solltest … (Konjunktiv II von sollen)','Früher und heute: damals'],
situacion:{title:'Conselho para um amigo',npc:'Tom',scene:'O Tom está nervoso: ele vai conhecer os pais da namorada no domingo e pede conselhos a você.',role:'Du bist Tom, Lucas’ Freund in Frankfurt. Du duzt. Du bist nervös, weil du am Sonntag die Eltern deiner Freundin Lea kennenlernst. Der Vater ist sehr streng, die Mutter sehr nett. Frag Lucas um Rat (Was soll ich anziehen? Was soll ich mitbringen? Worüber soll ich reden?). Reagiere auf seine Ratschläge mit „Ich bin einverstanden“ oder „Das finde ich nicht so gut, weil …“. Sprich einfaches Deutsch (A2).',goal:'Dê ao Tom pelo menos três conselhos com „Du solltest …“ e reaja às dúvidas dele.'},
placement:[
 {t:'mc',q:'„Você deveria dormir mais.“',opts:['Du solltest mehr schlafen.','Du sollst mehr schlafen.','Du solltest mehr schläfst.'],a:0},
 {t:'mc',q:'Mein Chef ist sehr ___. Wir dürfen nie zu spät kommen.',opts:['streng','faul','blond'],a:0},
 {t:'mc',q:'Wollen wir Pizza bestellen? – ___',opts:['Ja, einverstanden!','Ja, ich bin einverstehen.','Ja, das ist mir einverstanden.'],a:0},
 {t:'gap',q:'Kino oder Theater? – Das ist mir ___. (tanto faz)',a:['egal']},
 {t:'mc',q:'„Naquela época eu morava em São Paulo.“',opts:['Damals habe ich in São Paulo gewohnt.','Dann habe ich in São Paulo gewohnt.','Damit habe ich in São Paulo gewohnt.'],a:0},
 {t:'mc',q:'Lena ist ___. Im Juni bekommt sie ein Baby.',opts:['schwanger','schwach','streng'],a:0}],
lessons:[
{id:'l1',title:'Descrever pessoas',desc:'Aussehen und Charakter',steps:[
 {t:'vocab',title:'Aparência e caráter',items:[['das Gesicht','o rosto'],['blond','loiro'],['stark','forte'],['schwach','fraco'],['sympathisch','simpático'],['nett','legal / gentil'],['klug','inteligente / esperto'],['intelligent','inteligente'],['faul','preguiçoso'],['fleißig','esforçado / trabalhador'],['streng','rígido / severo'],['nervös','nervoso'],['ehrlich','honesto'],['blöd','bobo / chato (coloquial)'],['reich','rico'],['arm','pobre'],['lügen','mentir'],['die Lüge','a mentira'],['wahr','verdadeiro']]},
 {t:'mc',q:'Jana hilft immer allen. Sie ist sehr ___.',opts:['nett','faul','blöd'],a:0},
 {t:'mc',q:'Mein Bruder macht nie seine Hausaufgaben. Er ist ___.',opts:['faul','fleißig','streng'],a:0},
 {t:'gap',q:'Das ist nicht ___! Du lügst! (verdadeiro)',a:['wahr']},
 {t:'match',q:'Opostos.',pairs:[['stark','schwach'],['reich','arm'],['faul','fleißig'],['nervös','ruhig'],['die Wahrheit','die Lüge']]},
 {t:'read',title:'Leitura: Meine neue Kollegin',text:`Seit Montag haben wir eine neue Kollegin im Team: Mira. Sie ist Mitte zwanzig, hat lange blonde Haare und ein sehr freundliches Gesicht. Mira kommt aus Polen und spricht fantastisch Deutsch – viel besser als ich! Sie ist klug und sehr fleißig, aber auch lustig: In der Pause erzählt sie die besten Witze. Nur am Morgen ist sie ein bisschen nervös, weil sie noch nicht alle Kollegen kennt. Ich finde sie total sympathisch.`,de:`Desde segunda temos uma colega nova na equipe: a Mira. Ela tem uns vinte e cinco anos, cabelo loiro comprido e um rosto muito simpático. A Mira vem da Polônia e fala alemão fantasticamente – muito melhor que eu! Ela é inteligente e muito esforçada, mas também engraçada: no intervalo ela conta as melhores piadas. Só de manhã ela fica um pouco nervosa, porque ainda não conhece todos os colegas. Eu acho ela super simpática.`},
 {t:'mc',q:'Wie sieht Mira aus?',opts:['Sie hat lange blonde Haare.','Sie hat kurze schwarze Haare.','Sie trägt eine Brille.'],a:0},
 {t:'mc',q:'Warum ist Mira am Morgen nervös?',opts:['Sie kennt noch nicht alle Kollegen.','Ihr Deutsch ist schlecht.','Sie ist faul.'],a:0},
 {t:'tr',de:'Meu chefe é rígido, mas justo.',a:['Mein Chef ist streng, aber fair.','Meine Chefin ist streng, aber fair.']},
 {t:'speak',es:'Meine beste Freundin ist sehr sympathisch, klug und ehrlich.',de:'Minha melhor amiga é muito simpática, inteligente e honesta.',tip:'Depois de <i>ist</i>: adjetivo <b>sem</b> terminação.'}
]},
{id:'l2',title:'Família e filhos',desc:'der Kindergarten, das Taschengeld, der Haushalt',steps:[
 {t:'vocab',title:'Família e casa',items:[['der Ehepartner / die Ehepartnerin','o cônjuge'],['schwanger','grávida'],['der Babysitter / die Babysitterin','a babá / o babá'],['der Kindergarten','o jardim de infância'],['das Taschengeld','a mesada'],['der Haushalt','as tarefas de casa'],['putzen','limpar / faxinar'],['leihen','emprestar / pegar emprestado'],['streiten','brigar / discutir'],['sich verstehen','dar-se bem'],['erziehen','educar (filhos)'],['zuhören','escutar (com atenção)'],['reden','conversar / falar']]},
 {t:'mc',q:'Die Kinder sind von 8 bis 14 Uhr im ___.',opts:['Kindergarten','Haushalt','Taschengeld'],a:0},
 {t:'mc',q:'Kannst du mir 20 Euro ___? Ich gebe sie dir morgen zurück.',opts:['leihen','putzen','zuhören'],a:0},
 {t:'gap',q:'Am Samstag ___ wir immer die ganze Wohnung. (putzen)',a:['putzen']},
 {t:'gap',q:'Lucas und Tom ___ sich sehr gut. (sich verstehen)',a:['verstehen']},
 {t:'read',hideText:true,title:'Ouvir: Gespräch über Taschengeld',intro:'Ouça a conversa entre duas mães no parquinho.',text:`– Sag mal, Sabine, wie viel Taschengeld bekommt eigentlich deine Tochter? – Lina ist jetzt zehn, sie bekommt 15 Euro im Monat. Dafür muss sie aber auch im Haushalt helfen: Sie räumt ihr Zimmer auf und bringt den Müll runter. – 15 Euro? Mein Sohn will 20, weil seine Freunde so viel bekommen. – Das finde ich ein bisschen viel. Aber am wichtigsten ist, dass die Kinder lernen, mit Geld umzugehen.`,de:`– Fala aí, Sabine, quanto de mesada a sua filha recebe? – A Lina tem dez anos agora, ela recebe 15 euros por mês. Mas em troca ela tem que ajudar nas tarefas de casa: arruma o quarto e leva o lixo para baixo. – 15 euros? Meu filho quer 20, porque os amigos dele recebem isso. – Acho um pouco demais. Mas o mais importante é que as crianças aprendam a lidar com dinheiro.`},
 {t:'mc',q:'Wie viel Taschengeld bekommt Lina?',opts:['15 Euro im Monat','20 Euro im Monat','10 Euro in der Woche'],a:0},
 {t:'mc',q:'Was macht Lina im Haushalt?',opts:['Sie räumt ihr Zimmer auf und bringt den Müll runter.','Sie kocht und putzt das Bad.','Sie geht einkaufen.'],a:0},
 {t:'tr',de:'Você pode me emprestar sua bicicleta?',a:['Kannst du mir dein Fahrrad leihen?','Kannst du mir dein Rad leihen?']}
]},
{id:'l3',title:'Opinião e conselhos',desc:'einverstanden, egal · Du solltest …',steps:[
 {t:'vocab',title:'Opinião',items:[['die Meinung','a opinião'],['meiner Meinung nach','na minha opinião'],['einverstanden','de acordo'],['egal','tanto faz'],['der Vorschlag','a sugestão / a proposta'],['vorschlagen','sugerir'],['die Ahnung','a noção / a ideia'],['Keine Ahnung!','Não faço ideia!'],['raten','aconselhar / adivinhar'],['der Rat','o conselho'],['wahrscheinlich','provavelmente'],['besonders','especialmente'],['wenigstens','pelo menos']]},
 {t:'info',title:'Concordar, discordar e aconselhar',html:`<table><tr><th>concordar</th><th>discordar</th></tr>
 <tr><td class="es-t">Ich bin einverstanden.</td><td class="es-t">Da bin ich anderer Meinung.</td></tr>
 <tr><td class="es-t">Das finde ich auch.</td><td class="es-t">Das finde ich nicht so gut, weil …</td></tr>
 <tr><td class="es-t">Gute Idee!</td><td class="es-t">Ich weiß nicht …</td></tr></table>
 <p><b>Conselho</b> com <span class="es-t">sollte</span> (Konjunktiv II de <i>sollen</i>):</p>
 <table><tr><td class="es-t">ich / er / sie sollte</td><td class="es-t">du solltest</td><td class="es-t">wir / sie / Sie sollten</td></tr></table>
 <div class="ex"><span class="es-t">Du <b>solltest</b> mehr schlafen.</span> = Você deveria dormir mais. · <span class="es-t">An deiner Stelle würde ich …</span> = No seu lugar, eu …</div>`},
 {t:'mc',q:'Du bist immer müde. Du ___ früher ins Bett gehen.',opts:['solltest','sollst','sollte'],a:0},
 {t:'mc',q:'Wollen wir am Samstag wandern? – ___',opts:['Gute Idee, ich bin einverstanden!','Gute Idee, ich bin egal!','Ich habe keine Meinung nach.'],a:0},
 {t:'gap',q:'Weißt du, wann der Bus kommt? – Keine ___! (ideia)',a:['Ahnung']},
 {t:'gap',q:'Ihr ___ unbedingt das Museum besuchen! (sollen – conselho, ihr)',a:['solltet']},
 {t:'dialog',place:'Café',title:'Conselho para o Tom',scene:'O Tom vai conhecer os pais da namorada no domingo e está nervoso.',lines:[
  {n:'Tom',es:'Am Sonntag lerne ich Leas Eltern kennen. Ich bin so nervös! Was soll ich machen?',de:'No domingo vou conhecer os pais da Lea. Estou tão nervoso! O que eu faço?'},
  {you:true,opts:[{es:'Du solltest pünktlich sein und Blumen für ihre Mutter mitbringen.',ok:true},{es:'Du sollst pünktlich sein.',ok:false,why:'Para conselho, o mais educado é <i>Du <b>solltest</b> …</i>'}]},
  {n:'Tom',es:'Und worüber soll ich mit ihrem Vater reden? Er ist sehr streng.',de:'E sobre o que eu falo com o pai dela? Ele é muito rígido.'},
  {you:true,opts:[{es:'Frag ihn doch nach seinem Hobby. Lea sagt, er liebt Fußball, oder?',ok:true},{es:'Das ist mir egal.',ok:false,why:'O Tom pediu ajuda – <i>Das ist mir egal</i> soa grosseiro aqui.'}]},
  {n:'Tom',es:'Stimmt! Und vielleicht sollte ich einen Anzug tragen?',de:'Verdade! E talvez eu devesse usar um terno?'},
  {you:true,opts:[{es:'Na ja, ein Anzug ist vielleicht zu viel. Ein schönes Hemd reicht wahrscheinlich.',ok:true},{es:'Ja, ich bin einverstehen.',ok:false,why:'A forma certa é <i>einverstanden</i> – e aqui talvez valha discordar com educação.'}]}]},
 {t:'tr',de:'Na minha opinião, você deveria aprender mais alemão.',a:['Meiner Meinung nach solltest du mehr Deutsch lernen.']}
]},
{id:'l4',title:'Antes e hoje',desc:'damals · früher – heute · E-Mail an einen alten Freund',steps:[
 {t:'vocab',title:'Tempo',items:[['damals','naquela época'],['zuletzt','por último / da última vez'],['vorgestern','anteontem'],['übermorgen','depois de amanhã'],['aktuell','atual'],['direkt','direto / diretamente'],['das Ding','a coisa / o troço']]},
 {t:'read',title:'Leitura: Früher und heute',text:`Früher habe ich in São Paulo mit meinen Eltern und meiner Schwester gewohnt. Damals hatte ich kein Auto und bin jeden Tag zwei Stunden mit dem Bus zur Uni gefahren. Heute wohne ich allein in Frankfurt und fahre mit dem Fahrrad ins Büro – nur zehn Minuten! Früher war ich ziemlich schüchtern, heute rede ich viel mehr, auch auf Deutsch. Was ich vermisse? Das Essen von meiner Mutter, das Wetter und natürlich meine Freunde.`,de:`Antigamente eu morava em São Paulo com meus pais e minha irmã. Naquela época eu não tinha carro e ia todo dia duas horas de ônibus para a faculdade. Hoje moro sozinho em Frankfurt e vou de bicicleta para o escritório – só dez minutos! Antes eu era bem tímido, hoje falo muito mais, também em alemão. Do que eu sinto falta? Da comida da minha mãe, do clima e, claro, dos meus amigos.`},
 {t:'mc',q:'Wie ist Lucas früher zur Uni gefahren?',opts:['mit dem Bus','mit dem Fahrrad','mit dem Auto'],a:0},
 {t:'mc',q:'Was hat sich bei Lucas geändert?',opts:['Er redet heute mehr.','Er ist heute schüchterner.','Er wohnt heute mit seiner Schwester.'],a:0},
 {t:'free',task:'Escreva uma e-mail (~40 palavras) para um amigo antigo do Brasil: 1) como era a sua vida antes (damals / früher), 2) como ela é hoje, 3) faça uma pergunta sobre a vida dele.',hint:'Lieber …, wie geht es dir? Früher habe ich …, damals war ich … Heute … Und du? Was machst du …? Viele Grüße',focus:'Perfekt/Präteritum (war, hatte), damals – heute, Fragen',model:'Lieber Rafael,\nwie geht es dir? Früher habe ich bei meinen Eltern gewohnt, damals war ich noch Student. Heute arbeite ich als Programmierer in Frankfurt und habe eine eigene Wohnung. Und du? Spielst du immer noch Fußball?\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Caráter</h3><p class="es-t">nett · sympathisch · klug · fleißig · faul · streng · nervös · ruhig · ehrlich</p>
<h3>Opinião</h3><p class="es-t">Meiner Meinung nach … · Ich bin einverstanden. · Da bin ich anderer Meinung. · Das ist mir egal. · Keine Ahnung!</p>
<h3>Conselho: sollte</h3><p class="es-t">ich sollte · du solltest · er sollte · wir sollten · ihr solltet · sie/Sie sollten</p><p class="es-t">Du solltest mehr schlafen. · An deiner Stelle würde ich …</p>
<h3>Antes e hoje</h3><p class="es-t">früher · damals · heute · vorgestern · übermorgen</p>`});

/* ================= KAPITEL 23 · LERNEN & ZUKUNFT ================= */
LANGS.de.course.units.push({id:'k23',n:'23',level:'A2',title:'Lernen & Zukunft',sub:'Escola e cursos · na sala de aula · futuro com werden · planos e sonhos',
goals:['Schule und Kurs: die Tafel, das Heft, übersetzen','Im Unterricht: in Gruppen arbeiten, raten, zuhören','Zukunft mit werden: Ich werde … machen.','Pläne mit Zeitangaben: übermorgen, nächstes Jahr','Über Pläne und Träume schreiben'],
situacion:{title:'Planos para o futuro',npc:'Herr Yilmaz',scene:'No fim do curso de alemão, o seu professor conversa com cada aluno sobre os planos para o próximo ano.',role:'Du bist Herr Yilmaz, Deutschlehrer an einer Volkshochschule in Frankfurt, freundlich und motivierend. Du duzt die Kursteilnehmer. Frag Lucas: Was hat dir im Kurs gefallen? Was war schwer? Was wirst du nächstes Jahr machen – B1-Kurs, Prüfung, neuer Job? Benutze Futur mit werden und wenn-Sätze. Sprich einfaches Deutsch (A2).',goal:'Conte o que foi fácil e difícil no curso e diga pelo menos três planos com „Ich werde …“.'},
placement:[
 {t:'mc',q:'„Eu vou fazer a prova no ano que vem.“',opts:['Ich werde nächstes Jahr die Prüfung machen.','Ich werde nächstes Jahr die Prüfung mache.','Ich wird nächstes Jahr die Prüfung machen.'],a:0},
 {t:'gap',q:'Morgen ___ es regnen. (werden)',a:['wird']},
 {t:'mc',q:'Der Lehrer schreibt an die ___.',opts:['Tafel','Schere','Reihe'],a:0},
 {t:'mc',q:'Kannst du diesen Satz ins Portugiesische ___?',opts:['übersetzen','übernachten','überweisen'],a:0},
 {t:'mc',q:'„depois de amanhã“',opts:['übermorgen','vorgestern','morgen früh'],a:0},
 {t:'gap',q:'Bist du gut auf die Prüfung ___? (vorbereiten – particípio)',a:['vorbereitet']}],
lessons:[
{id:'l1',title:'Na sala de aula',desc:'die Tafel, das Heft, übersetzen …',steps:[
 {t:'vocab',title:'Escola e curso',items:[['die Tafel','o quadro (lousa)'],['das Heft','o caderno'],['das Blatt','a folha'],['die Schere','a tesoura'],['der Kurs','o curso'],['die Hausaufgabe','o dever de casa'],['die Gruppe','o grupo'],['die Reihe','a fila / a vez'],['Ich bin an der Reihe.','É a minha vez.'],['übersetzen','traduzir'],['erklären','explicar'],['wiederholen','repetir / revisar'],['die Cafeteria','a cafeteria'],['wach','acordado'],['vorbereitet','preparado']]},
 {t:'mc',q:'Bitte arbeitet in ___ zu dritt.',opts:['Gruppen','Reihen','Heften'],a:0},
 {t:'mc',q:'Wer ist jetzt an der ___? – Lucas, du!',opts:['Reihe','Tafel','Gruppe'],a:0},
 {t:'gap',q:'Kannst du das bitte noch einmal ___? Ich habe es nicht verstanden. (explicar)',a:['erklären']},
 {t:'match',q:'Ligue.',pairs:[['die Tafel','o quadro'],['das Heft','o caderno'],['die Schere','a tesoura'],['übersetzen','traduzir'],['wach','acordado']]},
 {t:'info',title:'Frases úteis na aula',html:`<table><tr><td class="es-t">Wie sagt man … auf Deutsch?</td><td>Como se diz … em alemão?</td></tr>
 <tr><td class="es-t">Was bedeutet …?</td><td>O que significa …?</td></tr>
 <tr><td class="es-t">Können Sie das bitte wiederholen?</td><td>Pode repetir, por favor?</td></tr>
 <tr><td class="es-t">Können Sie das bitte an die Tafel schreiben?</td><td>Pode escrever no quadro, por favor?</td></tr>
 <tr><td class="es-t">Ich habe eine Frage.</td><td>Tenho uma pergunta.</td></tr></table>`},
 {t:'tr',de:'O que significa „Feierabend“?',a:['Was bedeutet „Feierabend“?','Was bedeutet Feierabend?']},
 {t:'tr',de:'Você pode traduzir o texto?',a:['Kannst du den Text übersetzen?','Können Sie den Text übersetzen?']}
]},
{id:'l2',title:'O futuro com werden',desc:'Ich werde … machen.',steps:[
 {t:'info',title:'Futur I: werden + infinitivo',html:`<p>Para planos e previsões: <b>werden</b> (posição 2) + <b>infinitivo</b> (no final):</p>
 <table><tr><td>ich</td><td class="es-t">werde</td></tr><tr><td>du</td><td class="es-t">wirst</td></tr><tr><td>er / sie / es</td><td class="es-t">wird</td></tr><tr><td>wir</td><td class="es-t">werden</td></tr><tr><td>ihr</td><td class="es-t">werdet</td></tr><tr><td>sie / Sie</td><td class="es-t">werden</td></tr></table>
 <div class="ex"><span class="es-t">Ich <b>werde</b> nächstes Jahr die B1-Prüfung <b>machen</b>.</span> · <span class="es-t">Morgen <b>wird</b> es <b>regnen</b>.</span></div>
 <div class="ojo">Na conversa, os alemães usam muitas vezes o <b>presente</b> + expressão de tempo: <span class="es-t">Morgen fahre ich nach Berlin.</span> O <i>werden</i> deixa a frase mais firme (plano, promessa, previsão).</div>`},
 {t:'mc',q:'Nächsten Sommer ___ wir nach Brasilien fliegen.',opts:['werden','wird','werdet'],a:0},
 {t:'mc',q:'Ich werde dich morgen ___.',opts:['anrufen','anrufe','angerufen'],a:0},
 {t:'gap',q:'___ du am Wochenende arbeiten? (werden)',a:['Wirst']},
 {t:'gap',q:'Jana ___ im Herbst eine Ausbildung zur Grafikerin anfangen. (werden)',a:['wird']},
 {t:'order',es:'Ich werde übermorgen die Hausaufgaben machen',de:'Vou fazer o dever de casa depois de amanhã.'},
 {t:'tr',de:'Amanhã vai fazer sol.',a:['Morgen wird die Sonne scheinen.','Morgen scheint die Sonne.']},
 {t:'tr',de:'Nós vamos nos mudar no ano que vem.',a:['Wir werden nächstes Jahr umziehen.','Nächstes Jahr werden wir umziehen.','Nächstes Jahr ziehen wir um.']},
 {t:'speak',es:'Nächstes Jahr werde ich einen B1-Kurs machen und vielleicht die Prüfung schreiben.',de:'No ano que vem vou fazer um curso B1 e talvez fazer a prova.',tip:'<i>werde</i> na posição 2, os infinitivos no final.'}
]},
{id:'l3',title:'Planos e sonhos',desc:'unternehmen, der Traum, wahrscheinlich',steps:[
 {t:'vocab',title:'Planos',items:[['unternehmen','fazer (programa) / empreender'],['der Plan','o plano'],['planen','planejar'],['der Traum','o sonho'],['träumen','sonhar'],['bauen','construir'],['der Apparat','o aparelho'],['der Fotoapparat','a câmera fotográfica'],['drinnen','dentro (de casa)'],['drüben','do outro lado / lá'],['vorwärts','para a frente'],['sicher','com certeza / seguro']]},
 {t:'mc',q:'Was wollen wir am Wochenende ___? – Wandern!',opts:['unternehmen','bauen','träumen'],a:0},
 {t:'mc',q:'Es regnet. Wir bleiben lieber ___.',opts:['drinnen','drüben','vorwärts'],a:0},
 {t:'gap',q:'Mein ___ ist ein kleines Haus am Meer. (sonho)',a:['Traum']},
 {t:'mc',q:'„Ich komme wahrscheinlich.“ bedeutet:',opts:['Ich komme sehr wahrscheinlich, aber nicht 100 %.','Ich komme auf keinen Fall.','Ich komme bestimmt nicht.'],a:0},
 {t:'read',title:'Leitura: Pläne für das nächste Jahr',text:`Wir haben im Deutschkurs gefragt: Was werdet ihr nächstes Jahr machen?
Mira (Polen): „Ich werde die B1-Prüfung machen, weil ich in einer Klinik arbeiten möchte.“
Ahmed (Syrien): „Wahrscheinlich werde ich eine Ausbildung als Elektriker anfangen. Und ich will den Führerschein machen.“
Lucas (Brasilien): „Ich werde weiter Deutsch lernen und vielleicht ein Haus bauen – nein, Spaß! Aber ich werde sicher meine Familie in São Paulo besuchen.“`,de:`Perguntamos no curso de alemão: o que vocês vão fazer no ano que vem?
Mira (Polônia): „Vou fazer a prova B1, porque quero trabalhar numa clínica.“
Ahmed (Síria): „Provavelmente vou começar uma formação de eletricista. E quero tirar a carteira de motorista.“
Lucas (Brasil): „Vou continuar aprendendo alemão e talvez construir uma casa – não, brincadeira! Mas com certeza vou visitar minha família em São Paulo.“`},
 {t:'mc',q:'Warum möchte Mira die B1-Prüfung machen?',opts:['Sie möchte in einer Klinik arbeiten.','Sie möchte studieren.','Sie möchte nach Polen zurück.'],a:0},
 {t:'mc',q:'Was wird Lucas sicher machen?',opts:['seine Familie besuchen','ein Haus bauen','eine Ausbildung anfangen'],a:0},
 {t:'tr',de:'Provavelmente eu vou viajar no verão.',a:['Wahrscheinlich werde ich im Sommer verreisen.','Ich werde im Sommer wahrscheinlich verreisen.','Wahrscheinlich verreise ich im Sommer.']}
]},
{id:'l4',title:'Escrever: meus planos',desc:'Ein Text über Pläne und Ziele',steps:[
 {t:'info',title:'Escrever sobre planos',html:`<table><tr><td class="es-t">Nächstes Jahr werde ich …</td><td>No ano que vem vou …</td></tr>
 <tr><td class="es-t">Mein Ziel ist es, …</td><td>Meu objetivo é …</td></tr>
 <tr><td class="es-t">Ich möchte unbedingt …</td><td>Quero muito …</td></tr>
 <tr><td class="es-t">Wenn ich genug Geld habe, …</td><td>Se eu tiver dinheiro suficiente, …</td></tr>
 <tr><td class="es-t">Vielleicht / Wahrscheinlich …</td><td>Talvez / Provavelmente …</td></tr></table>`},
 {t:'free',task:'Escreva um pequeno texto (~40–50 palavras) para o jornal do curso: „Meine Pläne für das nächste Jahr“. 1) estudos / trabalho, 2) viagens ou família, 3) um sonho.',hint:'Nächstes Jahr werde ich … Mein Ziel ist es, … Wenn ich Zeit habe, … Mein großer Traum ist …',focus:'Futur mit werden, wenn/weil, Zeitangaben',model:'Nächstes Jahr werde ich einen B1-Kurs machen, weil ich im Job mehr Deutsch sprechen möchte. Im Sommer werde ich wahrscheinlich nach São Paulo fliegen und meine Familie besuchen. Wenn ich genug Geld habe, kaufe ich mir ein Fahrrad für Touren. Mein großer Traum ist eine Reise durch ganz Europa.'}
]}],
resumen:`<h3>Na aula</h3><p class="es-t">die Tafel · das Heft · das Blatt · die Gruppe · Ich bin an der Reihe. · übersetzen · erklären · wiederholen</p>
<h3>Futur I: werden + infinitivo</h3><table><tr><td class="es-t">ich werde · du wirst · er wird · wir werden · ihr werdet · sie/Sie werden</td></tr></table><p class="es-t">Ich werde nächstes Jahr die Prüfung machen. · Morgen wird es regnen.</p>
<h3>Tempo</h3><p class="es-t">vorgestern · gestern · heute · morgen · übermorgen · nächstes Jahr · wahrscheinlich · vielleicht · sicher</p>`});

/* ================= KAPITEL 24 · PRÜFUNGSTRAINING A2 ================= */
LANGS.de.course.units.push({id:'k24',n:'24',level:'A2',title:'Prüfungstraining A2',sub:'Simulado no formato da prova A2 do Goethe-Institut: ler, ouvir, escrever, falar',
goals:['Lesen: Zeitungstext, Informationstafel, E-Mail, Anzeigen','Hören: Radio, Gespräche, Ansagen, Interview','Schreiben: SMS (20–30 Wörter) und E-Mail (30–40 Wörter)','Sprechen: Fragen zur Person, über sich erzählen, gemeinsam etwas planen'],
situacion:{title:'Prova oral (simulação)',npc:'Prüfer',scene:'Prova oral do nível A2. O examinador conduz as três partes; a sua parceira de prova se chama Ana.',role:'Du bist Prüfer bei einer mündlichen Deutschprüfung A2. Du siezt. Teil 1: Stell Fragen zur Person mit Stichwörtern (Geburtstag? Wohnort? Beruf? Hobbys? Familie?). Teil 2: Bitte die Person, über das Thema „Wochenende“ zu erzählen (Was machen Sie am Wochenende? Mit wem? Was haben Sie letztes Wochenende gemacht? Was machen Sie nicht gern?). Teil 3: Spiel die Partnerin Ana: Ihr wollt zusammen eine Freundin im Krankenhaus besuchen und müsst einen Termin am Samstag finden (du hast von 9–11 Uhr Sport und ab 15 Uhr Besuch). Sprich klar und einfach (A2).',goal:'Responda às perguntas pessoais, conte sobre o seu fim de semana (presente e passado) e combine um horário com a Ana.'},
placement:[
 {t:'mc',q:'In der Prüfung schreiben Sie eine SMS mit ca. …',opts:['20–30 Wörtern','100 Wörtern','5 Wörtern'],a:0},
 {t:'mc',q:'Sie müssen einen Termin finden. Was sagen Sie?',opts:['Passt es dir um elf Uhr?','Ich passe um elf Uhr.','Um elf Uhr bin ich passend.'],a:0},
 {t:'mc',q:'Schild im Kaufhaus: „Damenmode – 2. Stock“. Wo kaufen Sie einen Rock?',opts:['im 2. Stock','im Erdgeschoss','im Untergeschoss'],a:0},
 {t:'gap',q:'Letztes Wochenende ___ ich meine Freunde besucht. (haben)',a:['habe']}],
lessons:[
{id:'l1',title:'Ler (Lesen)',desc:'4 partes: artigo, painel, e-mail, anúncios',steps:[
 {t:'info',title:'A prova A2 do Goethe-Institut',html:`<p>A prova <b>Goethe-Zertifikat A2</b> tem quatro partes:</p>
 <table><tr><th>parte</th><th>duração</th><th>o que é</th></tr>
 <tr><td>Lesen (ler)</td><td>~30 min</td><td>4 partes: artigo de jornal, painel de informações, e-mail, anúncios</td></tr>
 <tr><td>Hören (ouvir)</td><td>~30 min</td><td>4 partes: rádio e avisos, conversas, telefonemas, entrevista</td></tr>
 <tr><td>Schreiben (escrever)</td><td>~30 min</td><td>SMS (20–30 palavras) e e-mail (30–40 palavras), cada uma com 3 pontos</td></tr>
 <tr><td>Sprechen (falar)</td><td>~15 min</td><td>perguntas sobre você, contar sobre você, planejar algo com outra pessoa</td></tr></table>
 <div class="ex">Para passar: cerca de <b>60 %</b> dos pontos. Os textos abaixo são simulados próprios no estilo da prova.</div>`},
 {t:'read',kind:'Lesen · Teil 1',title:'Zeitungstext: Ein Café für alle',text:`In der Leipziger Straße hat letzten Monat ein besonderes Café aufgemacht: Im „Café Miteinander“ arbeiten Menschen mit und ohne Behinderung zusammen. Die Idee hatte Sandra Klein (42). „Mein Bruder sitzt im Rollstuhl und hat lange keine Arbeit gefunden“, erzählt sie. Heute arbeiten zwölf Personen im Café, sie backen Kuchen, machen Kaffee und bedienen die Gäste. Die Preise sind günstig: Ein Stück Kuchen kostet 2,50 Euro. Am Wochenende gibt es Frühstück bis 14 Uhr. Montags ist das Café geschlossen.`,de:`Na Leipziger Straße abriu no mês passado um café especial: no „Café Miteinander“ trabalham juntas pessoas com e sem deficiência. A ideia foi de Sandra Klein (42). „Meu irmão é cadeirante e por muito tempo não achou trabalho“, ela conta. Hoje doze pessoas trabalham no café: fazem bolos, preparam café e atendem os clientes. Os preços são baixos: uma fatia de bolo custa 2,50 euros. No fim de semana tem café da manhã até as 14h. Às segundas o café fica fechado.`},
 {t:'mc',kind:'Lesen · Teil 1',q:'Warum hatte Sandra Klein die Idee für das Café?',opts:['Ihr Bruder hat keine Arbeit gefunden.','Sie backt gern Kuchen.','Sie hatte kein Geld.'],a:0},
 {t:'mc',kind:'Lesen · Teil 1',q:'Wann kann man am Samstag frühstücken?',opts:['bis 14 Uhr','den ganzen Tag','gar nicht'],a:0},
 {t:'read',kind:'Lesen · Teil 2',title:'Informationstafel: Kaufhaus',text:`Untergeschoss: Lebensmittel · Getränke · Haushalt
Erdgeschoss: Kosmetik · Parfüm · Schmuck · Information
1. Stock: Damenmode · Schuhe · Taschen
2. Stock: Herrenmode · Sportbekleidung
3. Stock: Kinder · Spielwaren · Schreibwaren (Hefte, Stifte)
4. Stock: Elektro · Handys · Computer · Restaurant`,de:`Subsolo: alimentos · bebidas · utilidades domésticas
Térreo: cosméticos · perfumes · joias · informações
1º andar: moda feminina · sapatos · bolsas
2º andar: moda masculina · roupas esportivas
3º andar: infantil · brinquedos · papelaria (cadernos, canetas)
4º andar: eletrônicos · celulares · computadores · restaurante`},
 {t:'mc',kind:'Lesen · Teil 2',q:'Sie brauchen ein neues Ladekabel für Ihr Handy.',opts:['4. Stock','Erdgeschoss','Untergeschoss'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Sie möchten Ihrer Mutter eine Kette schenken.',opts:['Erdgeschoss','1. Stock','3. Stock'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Ihr Sohn braucht Hefte für die Schule.',opts:['3. Stock','Untergeschoss','2. Stock'],a:0},
 {t:'read',kind:'Lesen · Teil 3',title:'E-Mail',text:`Liebe Ana,
vielen Dank für deine Einladung zum Grillen am Samstag! Ich komme sehr gern, aber erst um sieben, weil ich bis sechs arbeiten muss. Soll ich etwas mitbringen? Ich kann einen Kartoffelsalat machen – oder lieber einen Kuchen? Und noch eine Frage: Darf ich meinen Freund Marco mitbringen? Er ist neu in der Stadt und kennt noch niemanden.
Liebe Grüße
Lucas`,de:`Querida Ana,
muito obrigado pelo convite para o churrasco no sábado! Vou com muito prazer, mas só às sete, porque preciso trabalhar até as seis. Devo levar alguma coisa? Posso fazer uma salada de batata – ou prefere um bolo? E mais uma pergunta: posso levar meu amigo Marco? Ele é novo na cidade e ainda não conhece ninguém.
Abraços
Lucas`},
 {t:'mc',kind:'Lesen · Teil 3',q:'Warum kommt Lucas erst um sieben?',opts:['Er muss arbeiten.','Er macht einen Kuchen.','Er holt Marco ab.'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'Was möchte Lucas wissen?',opts:['ob er einen Freund mitbringen darf','wo Ana wohnt','wann die Party beginnt'],a:0},
 {t:'read',kind:'Lesen · Teil 4',title:'Anzeigen',text:`a) Gitarrenunterricht für Anfänger – auch online. 1. Stunde kostenlos! Tel. 069 77 21
b) Verkaufe Kinderfahrrad, 20 Zoll, blau, fast neu, 60 €. Nur Abholung.
c) Deutsch-Konversation am Abend: Jeden Mittwoch 19–21 Uhr im Café Lindenblatt, kostenlos, alle Niveaus willkommen.
d) Fahrradwerkstatt sucht Aushilfe für Samstag, 12 €/Stunde, Erfahrung nicht nötig.`,de:`a) Aulas de violão para iniciantes – também online. 1ª aula grátis! Tel. 069 77 21
b) Vendo bicicleta infantil, aro 20, azul, quase nova, 60 €. Só retirada.
c) Conversação em alemão à noite: toda quarta das 19h às 21h no Café Lindenblatt, grátis, todos os níveis são bem-vindos.
d) Oficina de bicicletas procura ajudante para sábado, 12 €/hora, experiência não é necessária.`},
 {t:'mc',kind:'Lesen · Teil 4',q:'Mira möchte nach der Arbeit mehr Deutsch sprechen. Welche Anzeige passt?',opts:['c','a','d'],a:0},
 {t:'mc',kind:'Lesen · Teil 4',q:'Ahmed sucht einen Job am Wochenende.',opts:['d','b','c'],a:0},
 {t:'mc',kind:'Lesen · Teil 4',q:'Sandra möchte ein Instrument lernen, hat aber wenig Geld.',opts:['a','c','b'],a:0}
]},
{id:'l2',title:'Ouvir (Hören)',desc:'4 partes: rádio, conversas, telefone, entrevista',steps:[
 {t:'read',hideText:true,kind:'Hören · Teil 1',title:'Radio: Verkehrsmeldung',intro:'Ouça a notícia no rádio.',text:`Und nun die Verkehrsmeldungen: Auf der A5 zwischen Frankfurt-Nord und Bad Homburg gibt es nach einem Unfall zehn Kilometer Stau. Bitte fahren Sie über die B3. In der Frankfurter Innenstadt ist die Zeil am Samstag wegen eines Stadtfests von 10 bis 22 Uhr für Autos gesperrt. Die U-Bahn fährt an diesem Tag alle fünf Minuten.`,de:`E agora as informações de trânsito: na A5, entre Frankfurt-Nord e Bad Homburg, há dez quilômetros de engarrafamento depois de um acidente. Por favor, vá pela B3. No centro de Frankfurt, a Zeil fica fechada para carros no sábado das 10h às 22h por causa de uma festa da cidade. O metrô vai passar a cada cinco minutos nesse dia.`},
 {t:'mc',kind:'Hören · Teil 1',q:'Warum ist die Zeil am Samstag gesperrt?',opts:['wegen eines Stadtfests','wegen eines Unfalls','wegen einer Baustelle'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 2',title:'Gespräch: Was macht Jana wann?',intro:'A Jana conta à mãe sobre a semana dela. O que ela faz em cada dia?',text:`– Na, Jana, wie sieht deine Woche aus? – Voll! Am Montag habe ich abends Yoga, wie immer. Am Dienstag muss ich lange arbeiten, wir haben ein wichtiges Projekt. Mittwoch gehe ich mit Lucas ins Kino – endlich! Und am Donnerstag kommt der Handwerker, weil die Heizung kaputt ist. – Und Freitag? – Freitag habe ich frei, da besuche ich dich!`,de:`– E aí, Jana, como está a sua semana? – Cheia! Na segunda à noite tenho ioga, como sempre. Na terça preciso trabalhar até tarde, temos um projeto importante. Na quarta vou ao cinema com o Lucas – finalmente! E na quinta vem o técnico, porque o aquecimento está quebrado. – E sexta? – Sexta estou de folga, aí vou visitar você!`},
 {t:'match',kind:'Hören · Teil 2',q:'O que a Jana faz em cada dia?',pairs:[['Montag','Yoga'],['Dienstag','lange arbeiten'],['Mittwoch','Kino'],['Donnerstag','Handwerker kommt'],['Freitag','Mutter besuchen']]},
 {t:'read',hideText:true,kind:'Hören · Teil 3',title:'Am Telefon',intro:'Ouça o recado na secretária eletrônica.',text:`Hallo Lucas, hier ist Frau Weber von der Sprachschule. Leider ist Ihr Kurs am Donnerstag ausgefallen, weil die Lehrerin krank ist. Wir machen die Stunde nächste Woche am Dienstag um 18 Uhr nach. Der Raum ist nicht mehr 12, sondern 15, im ersten Stock. Bitte rufen Sie uns kurz zurück, ob Sie kommen können. Danke und bis bald!`,de:`Olá Lucas, aqui é a Sra. Weber da escola de idiomas. Infelizmente a sua aula de quinta foi cancelada porque a professora está doente. Vamos repor a aula na semana que vem, na terça às 18h. A sala não é mais a 12, e sim a 15, no primeiro andar. Por favor, ligue de volta rapidinho para dizer se você pode vir. Obrigada e até logo!`},
 {t:'mc',kind:'Hören · Teil 3',q:'Wann ist die neue Stunde?',opts:['nächsten Dienstag um 18 Uhr','am Donnerstag um 18 Uhr','nächsten Dienstag um 15 Uhr'],a:0},
 {t:'mc',kind:'Hören · Teil 3',q:'Was soll Lucas machen?',opts:['zurückrufen','eine E-Mail schreiben','in Raum 12 gehen'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 4',title:'Interview im Radio',intro:'Ouça a entrevista com uma professora de alemão. Responda: ja ou nein?',text:`– Frau Özdemir, Sie unterrichten seit zwanzig Jahren Deutsch an der Volkshochschule. Was ist für Ihre Kursteilnehmer am schwersten? – Ganz klar: die Artikel, der, die, das. Viele lernen am Anfang die Wörter ohne Artikel, und später ist das ein Problem. – Was raten Sie? – Immer den Artikel mitlernen und viel sprechen, auch mit Fehlern! Ich sage immer: Wer nicht spricht, lernt nicht. – Unterrichten Sie auch online? – Seit der Pandemie ja, aber ich finde den Unterricht im Kursraum schöner.`,de:`– Sra. Özdemir, a senhora dá aulas de alemão há vinte anos na Volkshochschule. O que é mais difícil para os seus alunos? – Sem dúvida: os artigos, der, die, das. Muitos aprendem as palavras sem artigo no começo, e depois isso vira um problema. – O que a senhora aconselha? – Aprender sempre o artigo junto e falar muito, mesmo com erros! Eu sempre digo: quem não fala, não aprende. – A senhora também dá aulas online? – Desde a pandemia, sim, mas acho mais bonita a aula na sala.`},
 {t:'mc',kind:'Hören · Teil 4',q:'Frau Özdemir sagt, die Artikel sind am schwersten. (ja / nein)',opts:['ja','nein'],a:0},
 {t:'mc',kind:'Hören · Teil 4',q:'Man soll nur sprechen, wenn man keine Fehler macht. (ja / nein)',opts:['nein','ja'],a:0},
 {t:'mc',kind:'Hören · Teil 4',q:'Frau Özdemir unterrichtet lieber online. (ja / nein)',opts:['nein','ja'],a:0}
]},
{id:'l3',title:'Escrever (Schreiben)',desc:'SMS · e-mail',steps:[
 {t:'info',title:'Schreiben – como é',html:`<p><b>Teil 1:</b> uma SMS ou mensagem curta para um amigo (<b>20–30 palavras</b>) sobre <b>3 pontos</b>.</p>
 <p><b>Teil 2:</b> uma e-mail mais formal, por exemplo para o professor ou o chefe (<b>30–40 palavras</b>), também com <b>3 pontos</b>.</p>
 <div class="ex">Conta: responder a <b>todos</b> os pontos, saudação e despedida adequadas, frases ligadas (und, aber, weil, dass, deshalb …).</div>`},
 {t:'free',kind:'Schreiben · Teil 1',task:'Você está no ônibus e vai chegar atrasado ao encontro com a sua amiga Lea no cinema. Escreva uma SMS (20–30 palavras): 1) peça desculpas e diga por que vai se atrasar, 2) diga quando você chega, 3) peça que ela já compre os ingressos.',hint:'Hallo Lea, sorry, ich komme … später, weil … Ich bin um … da. Kannst du schon …? Bis gleich!',focus:'weil, Uhrzeit, Bitte mit können, alle 3 Punkte',model:'Hallo Lea,\nsorry, ich komme zwanzig Minuten später, weil der Bus Verspätung hat. Ich bin um Viertel nach acht da. Kannst du schon die Karten kaufen? Ich bezahle dich dann.\nBis gleich!\nLucas'},
 {t:'free',kind:'Schreiben · Teil 2',task:'O seu professor de alemão, o Sr. Yilmaz, organiza uma excursão do curso para Heidelberg no sábado. Escreva para ele (30–40 palavras): 1) agradeça pela organização, 2) diga que você não pode ir e por quê, 3) pergunte o que você precisa estudar para a próxima aula.',hint:'Lieber Herr Yilmaz, vielen Dank für … Leider kann ich am Samstag nicht mitkommen, weil … Könnten Sie mir sagen, was … ? Viele Grüße',focus:'halbformelle E-Mail, weil, indirekte Frage (was/ob …), Konjunktiv II höflich',model:'Lieber Herr Yilmaz,\nvielen Dank, dass Sie den Ausflug nach Heidelberg organisieren! Leider kann ich am Samstag nicht mitkommen, weil meine Schwester aus Brasilien zu Besuch ist. Könnten Sie mir sagen, was ich für die nächste Stunde lernen soll?\nViele Grüße\nLucas Souza'},
 {t:'free',kind:'Schreiben · Teil 1',task:'O seu vizinho, Herr Kaya, perguntou se você pode cuidar das plantas dele. Escreva uma mensagem curta (20–30 palavras): 1) diga que sim, 2) pergunte quando você deve buscar a chave, 3) pergunte com que frequência regar.',hint:'Hallo Herr Kaya, natürlich mache ich das gern! Wann soll ich …? Und wie oft …? Viele Grüße',focus:'Fragen mit W-Wörtern, sollen, Höflichkeit',model:'Hallo Herr Kaya,\nnatürlich kümmere ich mich gern um Ihre Pflanzen! Wann soll ich den Schlüssel abholen? Und wie oft muss ich die Blumen gießen?\nViele Grüße\nLucas'}
]},
{id:'l4',title:'Falar (Sprechen)',desc:'perguntas · contar · planejar juntos',steps:[
 {t:'info',title:'Sprechen – as três partes',html:`<table><tr><th>parte</th><th>o que fazer</th></tr>
 <tr><td>Teil 1</td><td>Você recebe cartões com palavras (ex. <i>Geburtstag?</i>, <i>Wohnort?</i>) e faz perguntas ao seu parceiro – e responde às perguntas dele.</td></tr>
 <tr><td>Teil 2</td><td>Você recebe um tema (ex. <i>Wochenende</i>) com 4 perguntas e <b>conta</b> sobre a sua vida (~1–2 minutos).</td></tr>
 <tr><td>Teil 3</td><td>Vocês dois têm agendas diferentes e precisam <b>combinar</b> um horário para algo juntos.</td></tr></table>`},
 {t:'tr',kind:'Sprechen · Teil 1',de:'Cartão „Geburtstag?“ – pergunte ao parceiro: (Quando é o seu aniversário?)',a:['Wann hast du Geburtstag?','Wann haben Sie Geburtstag?','Wann ist dein Geburtstag?','Wann ist Ihr Geburtstag?']},
 {t:'tr',kind:'Sprechen · Teil 1',de:'Cartão „Sprachen?“ – pergunte: (Que línguas você fala?)',a:['Welche Sprachen sprichst du?','Welche Sprachen sprechen Sie?']},
 {t:'tr',kind:'Sprechen · Teil 1',de:'Cartão „Lieblingsessen?“ – pergunte: (Qual é a sua comida favorita?)',a:['Was ist dein Lieblingsessen?','Was ist Ihr Lieblingsessen?','Was isst du am liebsten?','Was essen Sie am liebsten?']},
 {t:'speak',kind:'Sprechen · Teil 2',es:'Am Wochenende schlafe ich gern lange. Samstags spiele ich Fußball im Verein. Letztes Wochenende bin ich mit Freunden nach Heidelberg gefahren. Ich putze nicht gern die Wohnung.',de:'No fim de semana eu gosto de dormir até tarde. Aos sábados jogo futebol no clube. No último fim de semana fui com amigos para Heidelberg. Não gosto de limpar o apartamento.',tip:'Responda às 4 perguntas do cartão: o que faz, com quem, o que fez no último fim de semana (Perfekt), o que não gosta.'},
 {t:'free',kind:'Sprechen · Teil 2',task:'Tema „Wohnen“: prepare por escrito o que você contaria (~50 palavras): Wo wohnen Sie? Wie ist Ihre Wohnung? Mit wem wohnen Sie? Was gefällt Ihnen (nicht)?',hint:'Ich wohne in … Meine Wohnung ist … Ich wohne allein / mit … Mir gefällt, dass … Nicht so gut finde ich …',focus:'zusammenhängend erzählen, dass/weil, Adjektive, Wo/Wohin',model:'Ich wohne in Frankfurt-Bornheim, im dritten Stock. Meine Wohnung hat zwei Zimmer, eine kleine Küche und einen Balkon. Ich wohne allein. Mir gefällt, dass die Wohnung hell und ruhig ist. Nicht so gut finde ich, dass es keinen Aufzug gibt und die Miete ziemlich hoch ist.'},
 {t:'dialog',kind:'Sprechen · Teil 3',place:'Prüfung',title:'Planejar juntos',scene:'Você e a Ana querem visitar juntos uma amiga no hospital no sábado. Na sua agenda: 10–12h compras, a partir das 18h festa. Encontrem um horário.',lines:[
  {n:'Ana',es:'Wann wollen wir Mira am Samstag im Krankenhaus besuchen? Geht es bei dir um zehn?',de:'Quando vamos visitar a Mira no hospital no sábado? Para você dá às dez?'},
  {you:true,opts:[{es:'Um zehn kann ich leider nicht, da gehe ich einkaufen. Wie wäre es um zwölf?',ok:true},{es:'Nein.',ok:false,why:'Na prova, explique e faça uma contraproposta: <i>Wie wäre es um …?</i>'}]},
  {n:'Ana',es:'Um zwölf habe ich bis eins Sport. Passt es dir um halb zwei?',de:'Ao meio-dia tenho esporte até a uma. Fica bom para você à uma e meia?'},
  {you:true,opts:[{es:'Ja, um halb zwei passt mir gut. Sollen wir Blumen mitbringen?',ok:true},{es:'Ja, um halb zwei passe ich gut.',ok:false,why:'<i>Das passt mir.</i> – com dativo.'}]},
  {n:'Ana',es:'Gute Idee! Ich kaufe die Blumen, und du bringst Schokolade mit?',de:'Boa ideia! Eu compro as flores e você leva chocolate?'},
  {you:true,opts:[{es:'Einverstanden! Dann treffen wir uns um Viertel nach eins vor dem Krankenhaus.',ok:true},{es:'Einverstanden! Dann treffen wir uns.',ok:false,why:'Para fechar bem: diga <b>onde</b> e <b>quando</b> vocês se encontram.'}]}]},
 {t:'info',title:'Parabéns! 🎉',html:`<p>Você chegou ao fim do nível <b>A2</b>! Se você acertou cerca de 60 % deste simulado, você está pronto para a prova <b>Goethe-Zertifikat A2</b> (ou <b>telc Deutsch A2</b>, de formato parecido).</p>
 <div class="ex">Com o A2 você se vira no dia a dia na Alemanha. Próximo passo: <b>B1</b> – o nível que muitas empresas e o visto de residência permanente pedem.</div>`}
]}],
resumen:`<h3>Formato da prova A2</h3><table><tr><td>Lesen</td><td>~30 min · artigo, painel de informações, e-mail, anúncios</td></tr><tr><td>Hören</td><td>~30 min · rádio/avisos, conversa, telefone, entrevista (ja/nein)</td></tr><tr><td>Schreiben</td><td>~30 min · SMS (20–30 palavras) + e-mail (30–40 palavras), 3 pontos cada</td></tr><tr><td>Sprechen</td><td>~15 min · perguntas pessoais, contar sobre um tema, planejar juntos</td></tr></table>
<h3>Planejar juntos</h3><p class="es-t">Geht es bei dir um …? · Wie wäre es um …? · Um … kann ich leider nicht, da … · Das passt mir gut. · Einverstanden! · Treffen wir uns um … vor …</p>`});
;
/* ================= GESCHICHTEN: „Camila in Hamburg“ – Serie zum Lesen & Hören (Deutschkurs) =================
   Camila Ribeiro, Krankenpflegerin aus Recife, beginnt in einem Hamburger Krankenhaus. Eigene Figur (nicht die Kurs-Person Lucas),
   deshalb wird ihre Herkunft nicht ersetzt. Jede Geschichte nutzt nur Grammatik bis zum Kapitel in `after`.
   text: {Wort|Übersetzung} = antippbar. de = Übersetzung (Portugiesisch). qs: 6 Verständnisfragen (mc / tf = richtig-falsch / gap = Lücke). */
defineLang('de',{storySeries:'Camila in Hamburg',storyIntro:'Camila, enfermeira do Recife, começa uma vida nova em Hamburgo.'});
LANGS.de.stories.push(
{id:'s1',after:'k2',title:'Moin, Hamburg!',sub:'Camila kommt an',text:`Ich heiße Camila Ribeiro. Ich komme aus Recife, in Brasilien. Ich bin sechsundzwanzig Jahre alt und ich bin {Krankenpflegerin|enfermeira}. Jetzt wohne ich in Hamburg. Heute ist mein erster Tag!

Am Flughafen frage ich eine Frau: „Entschuldigung, wo ist der Bus in die Stadt?“ Die Frau sagt: „{Moin|Oi (no norte da Alemanha)}! Der Bus ist da rechts. Woher kommen Sie?“ – „Aus Brasilien.“ – „Oh, toll! Sprechen Sie Deutsch?“ – „Ja, ein bisschen.“

Im Bus sitzt ein Mann neben mir. Er heißt Herr Petersen und er ist sehr nett. Er wohnt auch in {Altona|bairro de Hamburgo}. Er gibt mir seine Telefonnummer: null vier null, drei acht neun, zwei sieben eins. „Rufen Sie an, wenn Sie Hilfe brauchen“, sagt er.`,
de:`Meu nome é Camila Ribeiro. Sou do Recife, no Brasil. Tenho vinte e seis anos e sou enfermeira. Agora moro em Hamburgo. Hoje é o meu primeiro dia!\n\nNo aeroporto pergunto a uma mulher: „Com licença, onde fica o ônibus para a cidade?“ A mulher diz: „Moin! O ônibus fica ali à direita. De onde a senhora é?“ – „Do Brasil.“ – „Ah, que legal! A senhora fala alemão?“ – „Sim, um pouco.“\n\nNo ônibus, um homem senta do meu lado. Ele se chama Sr. Petersen e é muito simpático. Ele também mora em Altona. Ele me dá o número de telefone dele: zero quatro zero, três oito nove, dois sete um. „Ligue se precisar de ajuda“, ele diz.`,
qs:[{q:'Was ist Camila von Beruf?',opts:['Krankenpflegerin','Ärztin','Studentin'],a:0},{q:'Wo wohnt Herr Petersen?',opts:['in Altona','in Recife','am Flughafen'],a:0},{t:'tf',q:'Camila ist sechsundzwanzig Jahre alt.',a:true},{t:'tf',q:'Camila spricht kein Deutsch.',a:false},{t:'gap',q:'„Moin“ ist ein Gruß aus dem ___ von Deutschland.',a:['Norden']},{t:'gap',q:'Camila kommt aus ___.',a:['Recife|Brasilien']}]},

{id:'s2',after:'k4',title:'Der erste Einkauf',sub:'Im Supermarkt mit Svenja',text:`Ich wohne jetzt in einer {WG|república (apartamento dividido)}. Meine Mitbewohnerin heißt Svenja. Sie ist Studentin und sie ist sehr lustig. Heute gehen wir zusammen einkaufen.

Im Supermarkt nehme ich Brot, Käse, Milch und Bananen. Svenja kauft Nudeln und Tomaten. „Ich koche heute Abend“, sagt sie. „Magst du Pasta?“ – „Ja, sehr gern!“

Dann suche ich Bohnen. Ich möchte schwarze Bohnen, wie in Brasilien. Aber es gibt keine schwarzen Bohnen, nur rote. Ein Verkäufer hilft mir: „Schwarze Bohnen? Die gibt es im Asia-Laden, gleich {um die Ecke|virando a esquina}.“

An der Kasse sagt die Kassiererin: „Das macht vierundzwanzig Euro dreißig. Haben Sie eine {Tüte|sacola}?“ – „Nein, leider nicht.“ – „Eine Tüte kostet zwanzig Cent.“ Ich bezahle mit Karte. Zu Hause kocht Svenja und ich mache einen Salat. Das Essen ist super!`,
de:`Agora moro numa república. A minha colega de apartamento se chama Svenja. Ela é estudante e é muito engraçada. Hoje vamos juntas ao mercado.\n\nNo supermercado pego pão, queijo, leite e bananas. A Svenja compra macarrão e tomates. „Eu cozinho hoje à noite“, ela diz. „Você gosta de massa?“ – „Sim, muito!“\n\nDepois procuro feijão. Quero feijão-preto, como no Brasil. Mas não tem feijão-preto, só vermelho. Um vendedor me ajuda: „Feijão-preto? Tem na loja asiática, logo virando a esquina.“\n\nNo caixa, a moça diz: „São vinte e quatro euros e trinta. A senhora tem sacola?“ – „Não, infelizmente não.“ – „Uma sacola custa vinte centavos.“ Pago com cartão. Em casa a Svenja cozinha e eu faço uma salada. A comida está ótima!`,
qs:[{q:'Wer ist Svenja?',opts:['Camilas Mitbewohnerin','Camilas Schwester','eine Verkäuferin'],a:0},{q:'Wo gibt es schwarze Bohnen?',opts:['im Asia-Laden','im Supermarkt','in Brasilien'],a:0},{t:'tf',q:'Camila hat eine Tüte dabei.',a:false},{t:'tf',q:'Svenja kocht Pasta.',a:true},{t:'gap',q:'Der Einkauf kostet vierundzwanzig Euro ___.',a:['dreißig|30']},{t:'gap',q:'Camila bezahlt mit ___.',a:['Karte']}]},

{id:'s3',after:'k6',title:'Frühdienst',sub:'Ein Tag im Krankenhaus',text:`Mein Wecker klingelt um fünf Uhr. Ich habe {Frühdienst|plantão da manhã}! Ich stehe schnell auf, dusche und ziehe mich an. Frühstück? Keine Zeit – ich trinke nur einen Kaffee.

Um Viertel vor sechs fahre ich mit der S-Bahn zum Krankenhaus. Die Bahn ist fast leer. Um sechs Uhr fängt die Arbeit an. Meine Kollegin Aylin erklärt mir alles: die {Station|ala (do hospital)}, die Zimmer, die Patienten. Aylin kommt aus Hamburg, aber ihre Eltern kommen aus der Türkei.

Am Vormittag messe ich {Fieber|febre} und bringe das Frühstück. Um zwölf Uhr machen Aylin und ich eine Pause in der Kantine. Es gibt Fischbrötchen – typisch Hamburg!

Um zwei Uhr ist mein Dienst zu Ende. Ich bin sehr müde. Zu Hause rufe ich meine Mutter in Recife an. Dort ist es erst neun Uhr morgens.`,
de:`Meu despertador toca às cinco horas. Estou no plantão da manhã! Levanto rápido, tomo banho e me visto. Café da manhã? Sem tempo – só tomo um café.\n\nÀs quinze para as seis vou de trem urbano para o hospital. O trem está quase vazio. Às seis começa o trabalho. Minha colega Aylin me explica tudo: a ala, os quartos, os pacientes. A Aylin é de Hamburgo, mas os pais dela são da Turquia.\n\nDe manhã meço a febre e levo o café da manhã. Ao meio-dia a Aylin e eu fazemos uma pausa na cantina. Tem sanduíche de peixe – típico de Hamburgo!\n\nÀs duas horas o meu plantão termina. Estou muito cansada. Em casa ligo para a minha mãe no Recife. Lá ainda são nove horas da manhã.`,
qs:[{q:'Wann klingelt Camilas Wecker?',opts:['um fünf Uhr','um sechs Uhr','um neun Uhr'],a:0},{q:'Was isst Camila in der Pause?',opts:['ein Fischbrötchen','ein Müsli','nichts'],a:0},{t:'tf',q:'Camila frühstückt zu Hause.',a:false},{t:'tf',q:'Aylin ist in Hamburg geboren.',a:true},{t:'gap',q:'Camila fährt mit der ___ zum Krankenhaus.',a:['S-Bahn|Bahn']},{t:'gap',q:'Der Dienst ist um ___ Uhr zu Ende.',a:['zwei|2|14']}]},

{id:'s4',after:'k8',title:'Ein Sonntag am Hafen',sub:'Camila entdeckt die Stadt',text:`Am Sonntag habe ich frei. Herr Petersen sagt: „Sie müssen unbedingt zum Hafen gehen! Nehmen Sie die {Fähre|balsa}, das ist wie eine Stadtrundfahrt.“

Ich gehe zu Fuß zur Haltestelle. An der Ecke frage ich einen Jungen nach dem Weg. „Geh einfach geradeaus und dann die zweite Straße links. Die Fähre fährt von den {Landungsbrücken|cais do porto de Hamburgo}.“

Auf der Fähre stehe ich draußen. Es ist windig und ein bisschen kalt, aber die Sicht ist toll: große Schiffe, alte Häuser und die {Elbphilharmonie|sala de concertos famosa}. Ein Tourist fragt mich: „Darf ich ein Foto machen?“ Ich mache ein Foto von ihm und seiner Frau.

Danach esse ich in einem Café am Wasser ein Stück Kuchen. Auf dem Schild steht: „Bitte nicht rauchen“ und „Hunde dürfen hier nicht rein.“ Ich lache – in Recife sieht man so viele Schilder nicht!`,
de:`No domingo estou de folga. O Sr. Petersen diz: „A senhora tem que ir ao porto! Pegue a balsa, é como um passeio pela cidade.“\n\nVou a pé até o ponto. Na esquina pergunto o caminho a um menino. „Vai reto e depois a segunda rua à esquerda. A balsa sai dos Landungsbrücken.“\n\nNa balsa fico do lado de fora. Está ventando e um pouco frio, mas a vista é linda: navios grandes, casas antigas e a Elbphilharmonie. Um turista me pergunta: „Posso tirar uma foto?“ Tiro uma foto dele e da esposa.\n\nDepois como um pedaço de bolo num café à beira da água. Na placa está escrito: „Por favor, não fume“ e „Cachorros não podem entrar.“ Eu dou risada – no Recife não se veem tantas placas!`,
qs:[{q:'Was empfiehlt Herr Petersen?',opts:['eine Fahrt mit der Fähre','einen Spaziergang im Park','ein Konzert'],a:0},{q:'Wie ist das Wetter?',opts:['windig und ein bisschen kalt','sehr heiß','es regnet stark'],a:0},{t:'tf',q:'Camila fährt mit dem Taxi zur Haltestelle.',a:false},{t:'tf',q:'Im Café dürfen keine Hunde rein.',a:true},{t:'gap',q:'Zur Fähre: geradeaus und dann die zweite Straße ___.',a:['links']},{t:'gap',q:'Camila isst ein Stück ___.',a:['Kuchen']}]},

{id:'s5',after:'k10',title:'Schnupfen im Mai',sub:'Camila ist selbst krank',text:`Letzte Woche bin ich krank geworden. Am Montag hatte ich Halsschmerzen, am Dienstag Fieber. Ich habe im Krankenhaus angerufen: „Es tut mir leid, ich kann heute nicht kommen.“ Mein Chef war nett: „Bleiben Sie zu Hause und gehen Sie zum Arzt!“

Die Ärztin hat gesagt: „Sie haben eine {Erkältung|resfriado}. Sie sollen viel trinken und im Bett bleiben.“ Svenja hat mir Tee und Suppe gemacht. Sie hat auch gelacht: „Eine Krankenpflegerin ist krank – das ist lustig!“

Am Samstag war ich wieder gesund. Ich bin mit Aylin in die Stadt gefahren. Ich brauche eine warme Jacke, denn im Mai ist es in Hamburg noch kalt! In einem Geschäft habe ich eine blaue Jacke {anprobiert|experimentei}. „Die steht dir super!“, hat Aylin gesagt. Aber sie war zu groß. Die rote Jacke hat gut gepasst. Ich habe sie gekauft – für neunundfünfzig Euro.`,
de:`Semana passada fiquei doente. Na segunda eu estava com dor de garganta, na terça com febre. Liguei para o hospital: „Sinto muito, não posso ir hoje.“ Meu chefe foi simpático: „Fique em casa e vá ao médico!“\n\nA médica disse: „A senhora está resfriada. Deve beber muito líquido e ficar na cama.“ A Svenja fez chá e sopa para mim. Ela também riu: „Uma enfermeira doente – que engraçado!“\n\nNo sábado eu já estava boa. Fui com a Aylin para o centro. Preciso de uma jaqueta quente, porque em maio ainda faz frio em Hamburgo! Numa loja experimentei uma jaqueta azul. „Ficou ótima em você!“, disse a Aylin. Mas era grande demais. A jaqueta vermelha serviu bem. Comprei – por cinquenta e nove euros.`,
qs:[{q:'Was hat die Ärztin gesagt?',opts:['Camila soll viel trinken und im Bett bleiben.','Camila soll arbeiten gehen.','Camila soll Sport machen.'],a:0},{q:'Welche Jacke hat Camila gekauft?',opts:['die rote','die blaue','keine'],a:0},{t:'tf',q:'Camilas Chef war unfreundlich.',a:false},{t:'tf',q:'Im Mai ist es in Hamburg noch kalt.',a:true},{t:'gap',q:'Die blaue Jacke war zu ___.',a:['groß']},{t:'gap',q:'Svenja hat Tee und ___ gemacht.',a:['Suppe']}]},

{id:'s6',after:'k12',title:'Ostsee im Juli',sub:'Ein Wochenende am Meer',text:`Im Juli bin ich mit Svenja und Aylin an die {Ostsee|mar Báltico} gefahren. Wir haben den Zug genommen – nur eine Stunde von Hamburg! Wir haben in einer kleinen Pension übernachtet. Das Zimmer war einfach, aber sauber, und das Frühstück war fantastisch.

Am Samstag sind wir an den Strand gegangen. Ich war so froh: Endlich Meer! Aber dann bin ich ins Wasser gegangen. Es war sehr kalt – nur siebzehn {Grad|graus}! In Recife hat das Meer achtundzwanzig Grad. Svenja und Aylin haben gelacht und sind auch ins Wasser gesprungen.

Am Abend haben wir Fisch gegessen und einen langen Spaziergang gemacht. Um zehn Uhr war es noch hell. „Im Sommer sind die Tage hier sehr lang“, hat Svenja erklärt.

Am Sonntag hat es geregnet. Wir haben Karten gespielt und Postkarten geschrieben. Ich habe eine Karte an meine Familie geschrieben: „Liebe Grüße von der Ostsee – das Wasser ist kalt, aber meine Freundinnen sind toll!“`,
de:`Em julho fui com a Svenja e a Aylin para o mar Báltico. Pegamos o trem – só uma hora de Hamburgo! Dormimos numa pousada pequena. O quarto era simples, mas limpo, e o café da manhã era fantástico.\n\nNo sábado fomos à praia. Eu estava tão feliz: finalmente o mar! Mas aí entrei na água. Estava muito fria – só dezessete graus! No Recife o mar tem vinte e oito graus. A Svenja e a Aylin riram e também pularam na água.\n\nÀ noite comemos peixe e fizemos uma longa caminhada. Às dez horas ainda estava claro. „No verão os dias aqui são muito longos“, explicou a Svenja.\n\nNo domingo choveu. Jogamos cartas e escrevemos cartões-postais. Escrevi um cartão para a minha família: „Abraços do mar Báltico – a água é fria, mas as minhas amigas são ótimas!“`,
qs:[{q:'Wie sind die drei an die Ostsee gefahren?',opts:['mit dem Zug','mit dem Auto','mit dem Flugzeug'],a:0},{q:'Was haben sie am Sonntag gemacht?',opts:['Karten gespielt und Postkarten geschrieben','im Meer gebadet','eine Radtour gemacht'],a:0},{t:'tf',q:'Das Frühstück in der Pension war schlecht.',a:false},{t:'tf',q:'Um zehn Uhr abends war es noch hell.',a:true},{t:'gap',q:'Das Wasser in der Ostsee hatte nur ___ Grad.',a:['siebzehn|17']},{t:'gap',q:'Am Abend haben sie ___ gegessen.',a:['Fisch']}]},

{id:'s7',after:'k14',title:'Zu laut!',sub:'Ärger mit dem Nachbarn',text:`Im September bin ich in meine eigene Wohnung gezogen – zwei Zimmer, dritter Stock, ohne Aufzug. Ich war sehr glücklich. Aber nach zwei Wochen lag ein Zettel in meinem Briefkasten: „Liebe Nachbarin, abends ist es bei Ihnen sehr laut. Bitte denken Sie an die {Ruhezeit|horário de silêncio} ab 22 Uhr. Gruß, K. Hansen (2. Stock)“

Ich war {überrascht|surpresa}. Ich höre doch keine laute Musik! Dann habe ich verstanden: Ich habe oft Nachtdienst und komme um elf Uhr nach Hause. Dann dusche ich und koche noch etwas – und meine Schuhe sind laut auf dem Holzboden.

Ich habe bei Herrn Hansen geklingelt. „Entschuldigung, ich wusste nicht, dass man das unten so gut hört. Ich arbeite oft spät, weil ich Krankenpflegerin bin.“ Herr Hansen war plötzlich ganz freundlich: „Ach so! Meine Tochter ist auch Krankenschwester. Könnten Sie vielleicht abends {Hausschuhe|chinelos (de usar em casa)} tragen?“ – „Natürlich!“ Jetzt grüßen wir uns jeden Tag im Treppenhaus.`,
de:`Em setembro me mudei para o meu próprio apartamento – dois cômodos, terceiro andar, sem elevador. Eu estava muito feliz. Mas depois de duas semanas tinha um bilhete na minha caixa de correio: „Cara vizinha, à noite a senhora faz muito barulho. Por favor, lembre-se do horário de silêncio a partir das 22h. Atenciosamente, K. Hansen (2º andar)“\n\nFiquei surpresa. Eu não escuto música alta! Aí entendi: muitas vezes faço plantão noturno e chego em casa às onze. Aí tomo banho e ainda cozinho alguma coisa – e meus sapatos fazem barulho no piso de madeira.\n\nToquei a campainha do Sr. Hansen. „Desculpe, eu não sabia que dava para ouvir tão bem lá embaixo. Trabalho até tarde muitas vezes porque sou enfermeira.“ O Sr. Hansen de repente ficou muito simpático: „Ah, entendi! A minha filha também é enfermeira. A senhora poderia talvez usar chinelos à noite?“ – „Claro!“ Agora a gente se cumprimenta todo dia na escada.`,
qs:[{q:'Warum war es bei Camila laut?',opts:['Ihre Schuhe waren laut auf dem Holzboden.','Sie hat laute Musik gehört.','Sie hat eine Party gemacht.'],a:0},{q:'Was soll Camila abends tragen?',opts:['Hausschuhe','Stiefel','nichts'],a:0},{t:'tf',q:'Herr Hansen wohnt über Camila.',a:false},{t:'tf',q:'Herr Hansens Tochter ist Krankenschwester.',a:true},{t:'gap',q:'Die Ruhezeit beginnt um ___ Uhr.',a:['22|zweiundzwanzig']},{t:'gap',q:'Camila kommt oft spät nach Hause, weil sie ___ hat.',a:['Nachtdienst']}]},

{id:'s8',after:'k17',title:'Herr Petersen erzählt',sub:'Hamburg früher und heute',text:`An einem Sonntag hat Herr Petersen mich zum Kaffee eingeladen. Er ist achtzig Jahre alt und wohnt seit fünfzig Jahren in Altona. An der Wand hängen alte Fotos vom Hafen.

„Früher war hier alles anders“, hat er erzählt. „Als junger Mann musste ich jeden Tag um fünf Uhr am Hafen sein. Ich war {Hafenarbeiter|estivador}. Wir konnten nicht viel verdienen, aber wir waren zufrieden. Die Mieten waren viel billiger als heute, und es gab weniger Autos.“

„Wollten Sie nie weg aus Hamburg?“, habe ich gefragt. „Doch! Ich wollte nach Brasilien fahren, auf einem großen Schiff. Aber dann habe ich meine Frau kennengelernt.“ Er hat gelächelt. „Das war die beste {Entscheidung|decisão} meines Lebens.“

Zum Schluss hat er mir eine alte Postkarte gezeigt: Recife, 1965. „Die hat mir ein Freund geschickt“, hat er gesagt. „Jetzt kenne ich endlich jemanden aus dieser Stadt!“`,
de:`Num domingo o Sr. Petersen me convidou para um café. Ele tem oitenta anos e mora em Altona há cinquenta anos. Na parede há fotos antigas do porto.\n\n„Antigamente aqui era tudo diferente“, ele contou. „Quando jovem, eu tinha que estar no porto todos os dias às cinco horas. Eu era estivador. Não dava para ganhar muito, mas a gente era feliz. Os aluguéis eram muito mais baratos que hoje, e havia menos carros.“\n\n„O senhor nunca quis sair de Hamburgo?“, perguntei. „Quis, sim! Eu queria ir para o Brasil, num navio grande. Mas aí conheci a minha esposa.“ Ele sorriu. „Foi a melhor decisão da minha vida.“\n\nNo final ele me mostrou um cartão-postal antigo: Recife, 1965. „Um amigo me mandou“, ele disse. „Agora finalmente conheço alguém dessa cidade!“`,
qs:[{q:'Was war Herr Petersen von Beruf?',opts:['Hafenarbeiter','Busfahrer','Lehrer'],a:0},{q:'Warum ist er nicht nach Brasilien gefahren?',opts:['Er hat seine Frau kennengelernt.','Er hatte kein Geld.','Das Schiff war kaputt.'],a:0},{t:'tf',q:'Früher waren die Mieten teurer als heute.',a:false},{t:'tf',q:'Herr Petersen hat eine alte Postkarte aus Recife.',a:true},{t:'gap',q:'Herr Petersen wohnt seit ___ Jahren in Altona.',a:['fünfzig|50']},{t:'gap',q:'Früher musste er um ___ Uhr am Hafen sein.',a:['fünf|5']}]},

{id:'s9',after:'k20',title:'Die verlorene Tasche',sub:'Ein langer Tag in der Stadt',text:`Im Dezember wollte ich Geschenke für Weihnachten kaufen. Für meine Mutter habe ich einen Schal gefunden, für Svenja ein Buch. Dann habe ich mit Aylin auf dem {Weihnachtsmarkt|feira de Natal} einen Glühwein getrunken. Es war kalt, aber sehr schön.

Erst in der U-Bahn habe ich gemerkt: Meine Tasche war weg! Darin waren meine Geldbörse, mein Ausweis und die Geschenke. Ich war total {nervös|nervosa}. Aylin hat gesagt: „Keine Panik! Wir rufen zuerst die Bank an und sperren deine Karte. Dann fragen wir im Fundbüro.“

Am nächsten Tag bin ich zum Fundbüro gegangen. Ich habe lange gewartet. Die Frau hat in ihrem Computer gesucht und dann gelächelt: „Eine schwarze Tasche mit einem Schal und einem Buch? Die hat gestern jemand am Weihnachtsmarkt abgegeben.“ Alles war noch da – sogar das Geld!

Ich habe mich so gefreut. Auf dem Zettel stand der Name von der Person: Jonas Becker. Ich habe ihm eine Karte geschrieben: „Vielen Dank! Sie haben mein Weihnachten gerettet.“`,
de:`Em dezembro eu queria comprar presentes de Natal. Para a minha mãe encontrei um cachecol, para a Svenja um livro. Depois tomei um vinho quente com a Aylin na feira de Natal. Estava frio, mas muito bonito.\n\nSó no metrô percebi: a minha bolsa tinha sumido! Nela estavam a minha carteira, a minha identidade e os presentes. Fiquei muito nervosa. A Aylin disse: „Calma! Primeiro ligamos para o banco e bloqueamos o seu cartão. Depois perguntamos nos achados e perdidos.“\n\nNo dia seguinte fui aos achados e perdidos. Esperei bastante. A mulher procurou no computador e depois sorriu: „Uma bolsa preta com um cachecol e um livro? Alguém entregou ontem na feira de Natal.“ Estava tudo lá – até o dinheiro!\n\nFiquei tão feliz. No papel estava o nome da pessoa: Jonas Becker. Escrevi um cartão para ele: „Muito obrigada! O senhor salvou o meu Natal.“`,
qs:[{q:'Was hat Camila für ihre Mutter gekauft?',opts:['einen Schal','ein Buch','eine Tasche'],a:0},{q:'Was hat Aylin zuerst gemacht?',opts:['die Bank angerufen','die Polizei gerufen','im Fundbüro gefragt'],a:0},{t:'tf',q:'In der Tasche fehlte das Geld.',a:false},{t:'tf',q:'Jemand hat die Tasche im Fundbüro abgegeben.',a:true},{t:'gap',q:'Camila und Aylin haben einen ___ getrunken.',a:['Glühwein']},{t:'gap',q:'Camila hat dem Finder eine ___ geschrieben.',a:['Karte']}]},

{id:'s10',after:'k23',title:'Ein Jahr in Hamburg',sub:'Camila blickt zurück und nach vorn',text:`Heute bin ich genau ein Jahr in Hamburg. Am Abend haben Svenja, Aylin, Herr Petersen und sogar Herr Hansen bei mir gefeiert. Ich habe brasilianisch gekocht: Feijoada mit schwarzen Bohnen aus dem Asia-Laden!

Was hat sich geändert? Am Anfang habe ich fast nichts verstanden, wenn die Leute schnell gesprochen haben. Heute kann ich mit den Patienten {plaudern|bater papo}, und manchmal träume ich sogar auf Deutsch. Das Wetter finde ich immer noch schwierig, aber ich habe jetzt gute Regenkleidung.

Und die Zukunft? Nächstes Jahr werde ich die B1-Prüfung machen, weil ich als Krankenpflegerin eine {Anerkennung|reconhecimento (do diploma)} brauche. Im Sommer werden meine Eltern mich besuchen – zum ersten Mal in Europa! Ich werde ihnen den Hafen, die Elbphilharmonie und natürlich die Ostsee zeigen. Vielleicht wird das Wasser dann wärmer sein.

Herr Petersen hat ein Glas gehoben: „Auf Camila – unsere Hamburgerin aus Recife!“`,
de:`Hoje faz exatamente um ano que estou em Hamburgo. À noite, a Svenja, a Aylin, o Sr. Petersen e até o Sr. Hansen comemoraram na minha casa. Cozinhei comida brasileira: feijoada com feijão-preto da loja asiática!\n\nO que mudou? No começo eu quase não entendia nada quando as pessoas falavam rápido. Hoje consigo bater papo com os pacientes e às vezes até sonho em alemão. O tempo ainda acho difícil, mas agora tenho boas roupas de chuva.\n\nE o futuro? No ano que vem vou fazer a prova B1, porque como enfermeira preciso do reconhecimento do diploma. No verão meus pais vão me visitar – pela primeira vez na Europa! Vou mostrar a eles o porto, a Elbphilharmonie e, claro, o mar Báltico. Talvez a água esteja mais quente.\n\nO Sr. Petersen levantou o copo: „À Camila – a nossa hamburguesa do Recife!“`,
qs:[{q:'Was hat Camila gekocht?',opts:['Feijoada','Fischbrötchen','Pasta'],a:0},{q:'Warum macht Camila die B1-Prüfung?',opts:['Sie braucht die Anerkennung als Krankenpflegerin.','Sie will studieren.','Ihre Eltern wollen das.'],a:0},{t:'tf',q:'Am Anfang hat Camila alles gut verstanden.',a:false},{t:'tf',q:'Camilas Eltern waren noch nie in Europa.',a:true},{t:'gap',q:'Manchmal träumt Camila sogar auf ___.',a:['Deutsch']},{t:'gap',q:'Im Sommer werden ihre ___ sie besuchen.',a:['Eltern']}]}
);
;
/* ===== Deutschkurs – Häufige Wörter: pro Kapitel eine Extra-Lektion mit 20 häufigen Wörtern (häufigste zuerst) =====
   Auswahl nach Häufigkeit aus „FrequencyWords“ (Hermit Dave, OpenSubtitles 2018, CC BY-SA 4.0, github.com/hermitdave/FrequencyWords),
   nur Wörter, die der Kurs noch nicht als Vokabel hat; Namen, Flüche und Untertitel-Sonderwörter von Hand aussortiert, Grundform +
   Artikel und portugiesische Übersetzung von Hand. Diese Wortliste steht deshalb ebenfalls unter CC BY-SA 4.0. Korrekturen direkt hier. */
window.FREQ_DE=[
['wirklich','realmente, de verdade'],['lassen','deixar'],['gerade','agora mesmo; reto'],['wohl','provavelmente; bem'],['wieso','por quê'],['selbst','mesmo, próprio'],['bevor','antes de'],['halten','segurar; parar'],['echt','de verdade (coloquial)'],['das Glück','a sorte; a felicidade'],
['vorbei','passado, terminado'],['verrückt','louco'],['sich Sorgen machen','preocupar-se'],['einzig','único'],['überhaupt','afinal; de modo algum (com nicht)'],['der Grund','o motivo; o fundo'],['der Schatz','o tesouro; o amor (apelido)'],['niemals','nunca'],['die Schuld','a culpa; a dívida'],['verlassen','sair de; abandonar'],
['ernst','sério'],['eben','justamente; agora há pouco'],['die Chance','a chance'],['entschuldigen','desculpar'],['bloß','só, apenas'],['die Sorge','a preocupação'],['einige','alguns'],['das Blut','o sangue'],['das Herz','o coração'],['irgendwie','de algum jeito'],
['irgendwas','alguma coisa (coloquial)'],['klingen','soar'],['außer','exceto, além de'],['setzen','colocar sentado; pôr'],['retten','salvar'],['hierher','para cá'],['die Menge','a quantidade; a multidão'],['trotzdem','mesmo assim'],['der König','o rei'],['deswegen','por isso'],
['nennen','chamar, nomear'],['sich erinnern','lembrar-se'],['völlig','completamente'],['der Kumpel','o parceiro, o amigo (coloquial)'],['die Luft','o ar'],['verschwinden','desaparecer'],['zwar … aber','é verdade que … mas'],['vertrauen','confiar'],['nachdem','depois que'],['das Gefühl','o sentimento; a sensação'],
['die Erde','a Terra; a terra'],['der Rest','o resto'],['eher','antes; mais propriamente'],['das Gefängnis','a prisão'],['das Opfer','a vítima; o sacrifício'],['solche','tais, desse tipo'],['der Versuch','a tentativa'],['sich vorstellen','imaginar; apresentar-se'],['sobald','assim que'],['nochmal','mais uma vez'],
['die Million','o milhão'],['der Sinn','o sentido'],['außerdem','além disso'],['erfahren','ficar sabendo; experiente'],['stolz','orgulhoso'],['großartig','grandioso, ótimo'],['erwarten','esperar (expectativa)'],['die Stimme','a voz; o voto'],['still','quieto, silencioso'],['die Sicherheit','a segurança'],
['kämpfen','lutar'],['das Zeug','as coisas, o troço (coloquial)'],['unglaublich','inacreditável'],['führen','conduzir, liderar'],['geschehen','acontecer'],['die Verzeihung','o perdão'],['vorher','antes'],['versprechen','prometer'],['unmöglich','impossível'],['der Liebling','o querido, o favorito'],
['tatsächlich','realmente, de fato'],['folgen','seguir'],['behalten','ficar com, guardar'],['jemals','alguma vez'],['gefährlich','perigoso'],['der Meister','o mestre'],['der Kampf','a luta'],['die Antwort','a resposta'],['obwohl','embora'],['unterwegs','a caminho'],
['dumm','burro, bobo'],['der Ärger','a raiva; o problema'],['dagegen','contra isso; em compensação'],['die Regel','a regra'],['ständig','constantemente'],['die Gefahr','o perigo'],['absolut','absolutamente'],['der Augenblick','o instante'],['der Gedanke','o pensamento'],['benutzen','usar'],
['der Anwalt / die Anwältin','o advogado / a advogada'],['offen','aberto'],['der Finger','o dedo'],['die Rolle','o papel (função)'],['wozu','para quê'],['hoffentlich','tomara, espero que'],['ansehen','olhar, assistir'],['irgendwann','algum dia'],['jedenfalls','de qualquer forma'],['schreien','gritar'],
['bisher','até agora'],['die Sekunde','o segundo'],['wofür','para quê, pelo quê'],['der Beweis','a prova'],['die Seele','a alma'],['die Kontrolle','o controle'],['dasselbe','o mesmo'],['schlagen','bater'],['wütend','furioso'],['die Weise','o modo, a maneira'],
['beweisen','provar'],['zumindest','pelo menos'],['vermissen','sentir falta de'],['hübsch','bonito'],['die Verbindung','a ligação, a conexão'],['tief','fundo, profundo'],['die Richtung','a direção'],['sowieso','de qualquer jeito'],['die Kraft','a força'],['die Ehre','a honra'],
['die Beziehung','o relacionamento'],['die Liste','a lista'],['der Geist','o espírito; o fantasma'],['schrecklich','terrível'],['verliebt','apaixonado'],['das Boot','o barco'],['seltsam','estranho'],['verstecken','esconder'],['fürchten','temer'],['erwischen','pegar, flagrar'],
['das Wunder','o milagre'],['sauer','azedo; bravo (coloquial)'],['vermutlich','provavelmente'],['beschützen','proteger'],['erreichen','alcançar'],['der Punkt','o ponto'],['verraten','trair; revelar'],['selber','mesmo (coloquial)'],['der Befehl','a ordem, o comando'],['die Haut','a pele'],
['wetten','apostar'],['schwören','jurar'],['traurig','triste'],['der Anruf','a ligação (telefone)'],['der Frieden','a paz'],['diesmal','desta vez'],['schade','que pena'],['persönlich','pessoal; pessoalmente'],['verändern','mudar, transformar'],['lieb','querido, gentil'],
['nämlich','é que, pois'],['ewig','eterno'],['beschäftigt','ocupado'],['offensichtlich','obviamente'],['na ja','bom… / enfim'],['die Überraschung','a surpresa'],['das Geheimnis','o segredo'],['das Gold','o ouro'],['die Regierung','o governo'],['entfernt','distante'],
['manche','alguns, certos'],['der Schlaf','o sono'],['wunderschön','lindo'],['witzig','engraçado'],['übrigens','aliás'],['der Blick','o olhar; a vista'],['der Präsident / die Präsidentin','o presidente / a presidente'],['die Hoffnung','a esperança'],['stecken','enfiar; estar metido'],['entscheiden','decidir'],
['weder … noch','nem … nem'],['die Möglichkeit','a possibilidade'],['die Vergangenheit','o passado'],['die Armee','o exército'],['entweder … oder','ou … ou'],['aufhalten','deter, segurar'],['die Gesellschaft','a sociedade; a companhia'],['schuldig','culpado'],['schützen','proteger'],['überleben','sobreviver'],
['erhalten','receber; conservar'],['das Gebäude','o prédio'],['das Schicksal','o destino'],['das Zeichen','o sinal'],['der Richter / die Richterin','o juiz / a juíza'],['besorgt','preocupado'],['das Vergnügen','o prazer'],['herausfinden','descobrir'],['die Königin','a rainha'],['der Soldat / die Soldatin','o soldado / a soldada'],
['allerdings','no entanto'],['verantwortlich','responsável'],['erkennen','reconhecer'],['übernehmen','assumir'],['die Gegend','a região, a área'],['das Gesetz','a lei'],['gemeinsam','juntos, em comum'],['der Schritt','o passo'],['nah','perto'],['übrig','sobrando'],
['die Spur','o rastro'],['werfen','jogar, lançar'],['die Freude','a alegria'],['verzeihen','perdoar'],['der Respekt','o respeito'],['sich etwas leisten','dar-se ao luxo de'],['die Schwierigkeit','a dificuldade'],['die Hälfte','a metade'],['der Planet','o planeta'],['drehen','girar; filmar'],
['der Erfolg','o sucesso'],['besorgen','arranjar, providenciar'],['das Verbrechen','o crime'],['der Schmerz','a dor'],['schließlich','finalmente; afinal'],['rennen','correr'],['zufällig','por acaso'],['der Feind / die Feindin','o inimigo / a inimiga'],['entlang','ao longo de'],['die Freiheit','a liberdade'],
['sich unterhalten','conversar'],['der Schaden','o dano'],['lächerlich','ridículo'],['schätzen','estimar; apreciar'],['die Energie','a energia'],['bestehen','passar (prova); existir'],['betrunken','bêbado'],['das Verhalten','o comportamento'],['das Loch','o buraco'],['das Interesse','o interesse'],
['treten','pisar; chutar'],['der Quatsch','a bobagem'],['die Neuigkeit','a novidade'],['verbringen','passar (tempo)'],['der Meter','o metro'],['aufpassen','prestar atenção; tomar cuidado'],['der Engel','o anjo'],['offenbar','pelo visto'],['die Gelegenheit','a oportunidade'],['der Zeitpunkt','o momento'],
['der Druck','a pressão'],['der Haufen','o monte'],['der Auftrag','a tarefa, a encomenda'],['die Verantwortung','a responsabilidade'],['lächeln','sorrir'],['ernsthaft','sério, seriamente'],['das Dach','o telhado'],['die Folge','a consequência; o episódio'],['dankbar','grato'],['das Gehirn','o cérebro'],
['heilig','sagrado, santo'],['der Wahnsinn','a loucura'],['das Thema','o tema'],['überprüfen','verificar'],['anscheinend','pelo jeito'],['das Risiko','o risco'],['der Held / die Heldin','o herói / a heroína'],['nachdenken','refletir, pensar'],['die Runde','a rodada'],['der Großvater','o avô'],
['die Großmutter','a avó'],['das Gewissen','a consciência'],['der Zeuge / die Zeugin','a testemunha'],['atmen','respirar'],['der Streit','a briga'],['küssen','beijar'],['längst','há muito tempo'],['normalerweise','normalmente'],['beruhigen','acalmar'],['vollkommen','completamente; perfeito'],
['verfolgen','perseguir; acompanhar'],['der Zustand','o estado, a condição'],['erwähnen','mencionar'],['der Zufall','o acaso'],['wirken','fazer efeito; parecer'],['aufgeben','desistir'],['der Scherz','a brincadeira'],['überzeugt','convencido'],['bemerken','perceber'],['zählen','contar'],
['der Bürgermeister / die Bürgermeisterin','o prefeito / a prefeita'],['das Durcheinander','a bagunça'],['die Karriere','a carreira'],['die Akte','o processo, o arquivo'],['die Erinnerung','a lembrança'],['lösen','resolver'],['der Zweifel','a dúvida'],['die Nerven (Pl.)','os nervos'],['entlassen','demitir; dar alta'],['die Szene','a cena'],
['die Pflicht','o dever'],['neulich','outro dia'],['unschuldig','inocente'],['der Schutz','a proteção'],['weshalb','por que motivo'],['woanders','em outro lugar'],['der Kuss','o beijo'],['verhindern','impedir'],['die Erklärung','a explicação'],['hassen','odiar'],
['gebrauchen','usar, aproveitar'],['die Schulden (Pl.)','as dívidas'],['die Braut','a noiva'],['peinlich','constrangedor'],['klappen','dar certo (coloquial)'],['die Aufmerksamkeit','a atenção'],['die Form','a forma'],['umsonst','de graça; em vão'],['der Mond','a lua'],['merken','perceber; memorizar'],
['der Sieg','a vitória'],['satt','satisfeito (de comida)'],['der Blödsinn','a besteira'],['handeln','agir; negociar'],['die Übersetzung','a tradução'],['der Kapitän / die Kapitänin','o capitão / a capitã'],['je … desto','quanto mais … mais'],['das Schweigen','o silêncio'],['der Schatten','a sombra'],['die Tatsache','o fato'],
['enttäuscht','decepcionado'],['klopfen','bater (na porta)'],['der Dreck','a sujeira'],['die Mühe','o esforço'],['der Knochen','o osso'],['das Grab','o túmulo'],['ebenso','igualmente'],['dennoch','contudo'],['vergeben','perdoar; conceder'],['trotz','apesar de'],
['annehmen','aceitar; supor'],['erwachsen','adulto'],['genießen','aproveitar, curtir'],['eifersüchtig','ciumento'],['beobachten','observar'],['komplett','completo'],['bewusst','consciente'],['begleiten','acompanhar'],['einander','um ao outro'],['erleben','vivenciar'],
['sich konzentrieren','concentrar-se'],['überzeugen','convencer'],['der Alkohol','o álcool'],['die Botschaft','a mensagem; a embaixada'],['fehlen','faltar'],['aufgeregt','agitado, nervoso'],['die Magie','a magia'],['untersuchen','examinar'],['die Flucht','a fuga'],['das Gegenteil','o contrário'],
['betreffen','dizer respeito a'],['immerhin','pelo menos, afinal'],['mehrere','vários'],['innerhalb','dentro de'],['blind','cego'],['schlau','esperto'],['die Absicht','a intenção'],['merkwürdig','estranho'],['die Unterstützung','o apoio'],['möglicherweise','possivelmente'],
['definitiv','definitivamente'],['locker','descontraído; solto'],['einsam','solitário'],['lebendig','vivo'],['knapp','apertado, escasso'],['ebenfalls','igualmente'],['jederzeit','a qualquer hora'],['kompliziert','complicado'],['spüren','sentir'],['das Signal','o sinal'],
['wundervoll','maravilhoso'],['der Tanz','a dança'],['das Prozent','o por cento'],['stoppen','parar'],['der Zugang','o acesso'],['der Priester / die Priesterin','o padre / a sacerdotisa'],['packen','agarrar; fazer (a mala)'],['inzwischen','enquanto isso; agora'],['die Presse','a imprensa'],['die Geduld','a paciência'],
['die Bühne','o palco'],['die Gerechtigkeit','a justiça'],['der Fall','o caso; a queda'],['selten','raro'],['der Lügner / die Lügnerin','o mentiroso / a mentirosa'],['die Medizin','a medicina; o remédio'],['der Prozess','o processo'],['das Chaos','o caos'],['die Schönheit','a beleza'],['beinahe','quase'],
['akzeptieren','aceitar'],['umgehen mit','lidar com'],['gesamt','total, inteiro'],['ertragen','suportar'],['die Kiste','a caixa'],['brennen','queimar'],['der Alarm','o alarme'],['der Eindruck','a impressão'],['wehtun','doer'],['springen','pular'],
['nackt','nu'],['existieren','existir'],['befreien','libertar'],['das Gerät','o aparelho'],['fliehen','fugir'],['die Freundschaft','a amizade'],['das Gebiet','a área, o território'],['jedoch','no entanto'],['verbunden','ligado, conectado'],['die Brust','o peito'],
['wild','selvagem'],['das Gift','o veneno'],['deutlich','claro, nítido'],['verwirrt','confuso'],['riskieren','arriscar'],['die Beerdigung','o enterro'],['die Geburt','o nascimento'],['melden','avisar, comunicar'],['die Einheit','a unidade'],['anstatt','em vez de'],
['der Sekt','o espumante'],['die Strafe','a punição; a multa'],['öfter','mais vezes'],['verpassen','perder (ônibus, chance)'],['klären','esclarecer'],['die Theorie','a teoria'],['die Zunge','a língua (órgão)'],['schief','torto'],['die Bedeutung','o significado'],['der Strom','a eletricidade; a corrente'],
['der Krebs','o câncer; o caranguejo'],['gemein','malvado'],['die Quelle','a fonte'],['die Zahl','o número'],['das Talent','o talento'],['die Spitze','a ponta; o topo'],['ausgezeichnet','excelente'],['der Dieb / die Diebin','o ladrão / a ladra'],['offiziell','oficial'],['dienen','servir'],
['dauernd','toda hora'],['der Geschmack','o sabor; o gosto'],['gegenseitig','mútuo'],['das Pech','o azar'],['verteidigen','defender'],['das Publikum','o público'],['wechseln','trocar'],['begegnen','encontrar (por acaso)'],['betrügen','enganar; trair'],['loswerden','livrar-se de'],
['festhalten','segurar firme'],['geheim','secreto'],['übergeben','entregar'],['die Abteilung','o departamento'],['gleichzeitig','ao mesmo tempo'],['das Genie','o gênio'],['hungrig','com fome'],['zwingen','obrigar'],['unterstützen','apoiar'],['die Menschheit','a humanidade'],
['die Fähigkeit','a capacidade'],['rechtzeitig','a tempo'],['aufnehmen','gravar; acolher'],['anfassen','tocar, pegar'],['die Hütte','a cabana'],['behaupten','afirmar'],['angeblich','supostamente'],['warnen','avisar (de perigo)'],['die Dunkelheit','a escuridão'],['eindeutig','claramente'],
['die Unterhaltung','a conversa; o entretenimento'],['zugeben','admitir'],['das Mittel','o meio; o remédio'],['die Explosion','a explosão'],['neugierig','curioso'],['die Leitung','a direção; a linha'],['menschlich','humano'],['auseinander','separado, afastado'],['der Stoff','o tecido; a matéria'],['stammen aus','vir de, ser originário de'],
['entspannen','relaxar'],['vernünftig','sensato'],['greifen','pegar, agarrar'],['das Mitglied','o membro'],['das Feld','o campo'],['das Vermögen','a fortuna'],['gewiss','certo, certamente'],['der Staat','o Estado'],['der Bürger / die Bürgerin','o cidadão / a cidadã'],['verursachen','causar'],
['der Hammer','o martelo'],['die Politik','a política'],['der Besitz','a posse, a propriedade'],['richten','dirigir; julgar'],['erfinden','inventar'],['entfernen','remover'],['die Träne','a lágrima'],['erfolgreich','bem-sucedido'],['der Leiter / die Leiterin','o diretor / a diretora'],['das Werk','a obra; a fábrica'],
['empfangen','receber, acolher'],['der Zweck','o objetivo, a finalidade'],['heutzutage','hoje em dia'],['real','real'],['das Holz','a madeira'],['die Scheidung','o divórcio'],['beschließen','decidir'],['begeistert','entusiasmado'],['beeindruckt','impressionado'],['momentan','no momento'],
['stattdessen','em vez disso'],['die Stimmung','o clima, o humor'],['das Geräusch','o barulho'],['der Künstler / die Künstlerin','o artista / a artista'],['wachsen','crescer'],['der Verlust','a perda'],['die Schulter','o ombro'],['verwenden','usar, utilizar'],['die Lippe','o lábio'],['äußerst','extremamente'],
['aufwachen','acordar'],['die Uniform','o uniforme'],['das Abenteuer','a aventura'],['das Universum','o universo'],['fähig','capaz'],['die Realität','a realidade'],['albern','bobo, infantil'],['brav','bem-comportado'],['sicherlich','certamente'],['die Öffentlichkeit','o público, a opinião pública'],
['liefern','entregar (mercadoria)'],['sich verabschieden','despedir-se'],['der Antrag','o requerimento; o pedido'],['sich benehmen','comportar-se'],['der Verdacht','a suspeita'],['der Schreibtisch','a escrivaninha'],['die Probe','o ensaio; a amostra'],['der Hinweis','a dica, a indicação'],['der Tunnel','o túnel'],['die Serie','a série'],
['der Applaus','o aplauso'],['korrekt','correto'],['bewahren','conservar, manter'],['beeindruckend','impressionante'],['sammeln','colecionar, juntar'],['die Wissenschaft','a ciência'],['die Ursache','a causa'],['der Bereich','a área, o setor'],['verzweifelt','desesperado'],['der Anteil','a parte, a participação'],
['stets','sempre (formal)'],['der Roman','o romance (livro)'],['erfüllen','cumprir, realizar'],['die Basis','a base'],['der Schock','o choque'],['der Empfang','a recepção'],['der Stil','o estilo'],['der Einfluss','a influência'],['die Anweisung','a instrução'],['der Kaiser / die Kaiserin','o imperador / a imperatriz'],
['die Wirkung','o efeito'],['die Umgebung','os arredores']
];
{
const per=20;let i=0;
for(const u of LANGS.de.course.units){if(u.status==='soon')continue;const items=FREQ_DE.slice(i,i+per);i+=per;if(items.length<10)break;
  const steps=[];for(let k=0;k<items.length;k+=10)steps.push({t:'vocab',title:'Palavras frequentes ('+(k/10+1)+')',items:items.slice(k,k+10)});
  steps.push({t:'match',q:'O que significa …?',pairs:items.filter((_,j)=>j%4===1).slice(0,5)});
  u.lessons.push({id:'lf',title:'Palavras frequentes',desc:'20 palavras muito usadas no dia a dia',ab:true,freq:true,steps});/* ab: freiwillig, nicht in Liste/Fortschritt/Abschlusstest – Kachel unter Extras */}
}
;
/* ===== Deutschkurs: Übersetzungen der deutschen Beispiele in Erklärungen & Resumen (antippen → Blase, nur bei Erklärsprache Portugiesisch) =====
   Schlüssel = deutscher Text wie in der Erklärung (mit „Lucas“), Wert = Portugiesisch. Stand: A1–A2. Neue Erklärungen → hier ergänzen.
   Absichtlich ohne: Satzbausteine, einzelne Formen, Tabellen mit eigener Portugiesisch-Spalte. */
window.INFO_TR=Object.assign(window.INFO_TR||{},{
"Wie heißt du?": "Como você se chama?",
"Wie heißen Sie?": "Como o senhor / a senhora se chama?",
"Woher kommst du?": "De onde você é?",
"Woher kommen Sie?": "De onde o senhor / a senhora é?",
"Wie geht es dir? – Und dir?": "Como vai? – E você?",
"Wie geht es Ihnen? – Und Ihnen?": "Como vai o senhor? – E o senhor?",
"Tschüss! · Auf Wiedersehen! · Bis später! · Bis morgen! · Bis bald!": "Tchau! · Até logo! · Até mais tarde! · Até amanhã! · Até breve!",
"Gute Nacht": "Boa noite (ao dormir)",
"Wie geht’s?": "Tudo bem?",
"Gut, danke! Und dir?": "Bem, obrigado! E você?",
"Wie geht es dir? (du)": "Como vai? (informal)",
"Sehr gut, danke. Und dir?": "Muito bem, obrigado. E você?",
"Wie geht es Ihnen? (Sie)": "Como vai? (formal)",
"Gut, danke. Und Ihnen?": "Bem, obrigado. E o senhor?",
"Und dir?": "E você?",
"Und Ihnen?": "E o senhor / a senhora?",
"Danke": "Obrigado",
"Bitte": "Por favor / De nada",
"Ich komme aus Brasilien, aus São Paulo. Jetzt wohne ich in Frankfurt.": "Sou do Brasil, de São Paulo. Agora moro em Frankfurt.",
"Ich wohne in Frankfurt.": "Moro em Frankfurt.",
"Ich bin Brasilianer. Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch.": "Sou brasileiro. Falo português, inglês e um pouco de alemão.",
"einundzwanzig": "zero · um · dois · três · quatro · cinco · seis · sete · oito · nove · dez · onze · doze · treze … dezesseis · dezessete … vinte",
"dreißig": "vinte e um",
"hundert": "trinta",
"tausend": "cem",
"Wie alt bist du? / Wie alt sind Sie?": "mil",
"Ich bin 28 Jahre alt.": "Quantos anos você tem? / Quantos anos o senhor tem?",
"Vorname · Familienname · Straße + Hausnummer · Postleitzahl + Wohnort · Geburtsdatum · Familienstand (ledig / verheiratet / geschieden) · Unterschrift": "Tenho 28 anos.",
"zwo": "Nome · sobrenome · rua + número · CEP + cidade · data de nascimento · estado civil (solteiro / casado / divorciado) · assinatura",
"zwei": "dois (ao telefone, para não confundir com drei)",
"zweihundert": "cento e um",
"ein": "duzentos",
"Wo wohnen Sie? – In der Bergerstraße 12.": "Lucas Souza, Bergerstraße 12, 60316 Frankfurt am Main",
"Straße": "Onde o senhor mora? – Na Bergerstraße 12.",
"Bergerstraße": "rua",
"Familienname / Nachname": "nome",
"14.03.1997": "sobrenome",
"Wo sind Sie geboren? – In São Paulo.": "Quando o senhor nasceu? – Em 14 de março de 1997.",
"Ich": "Onde o senhor nasceu? – Em São Paulo.",
"Wohnst du in Frankfurt?": "Você mora em Frankfurt?",
"Ja.": "Sim.",
"Nein, in Köln.": "Não, em Colônia.",
"du arbeitest, er arbeitet": "você trabalha, ele trabalha",
"mein/meine · dein/deine · sein/seine (dele) · ihr/ihre (dela) · unser/unsere · Ihr/Ihre (formal)": "meu/minha · teu/tua · seu/sua (dele) · seu/sua (dela) · nosso/nossa · seu/sua (formal)",
"Kind → Kinder · Bruder → Brüder · Schwester → Schwestern · Freund → Freunde · Handy → Handys": "criança → crianças · irmão → irmãos · irmã → irmãs · amigo → amigos · celular → celulares",
"Hallo … / Liebe … / Lieber … – Viele Grüße · Sehr geehrte … – Mit freundlichen Grüßen": "Oi … / Querida … / Querido … – Abraços · Prezada … – Atenciosamente",
"das Mädchen": "a menina",
"die Sonne": "o sol",
"Ich habe keine Kinder.": "Não tenho filhos.",
"Das ist kein Problem.": "Não é problema.",
"die Tante → die Tanten": "a tia → as tias",
"die Freundin → die Freundinnen": "a amiga → as amigas",
"Hallo Tom, im Mai kommen …": "Oi Tom, em maio vêm …",
"Ich trinke gern Kaffee. · Ich esse nicht gern Fisch. · Ich mag Käse.": "Gosto de tomar café. · Não gosto de comer peixe. · Gosto de queijo.",
"essen: du isst, er isst · nehmen: du nimmst, er nimmt · mögen: ich mag, du magst · möchten: ich möchte, du möchtest": "comer: você come, ele come · pegar: você pega, ele pega · gostar: eu gosto, você gosta · querer: eu queria, você queria",
"Was kostet …? / Was kosten …? · ein Kilo Äpfel · eine Flasche Wasser · Bar oder mit Karte?": "Quanto custa …? / Quanto custam …? · um quilo de maçãs · uma garrafa de água · Dinheiro ou cartão?",
"Ich hätte gern … · Die Rechnung, bitte! · Zusammen oder getrennt? · Stimmt so.": "Eu queria … · A conta, por favor! · Junto ou separado? · Pode ficar com o troco.",
"Ich mag Käse. Magst du Obst?": "Gosto de queijo. Você gosta de fruta?",
"ich esse, du isst, er/sie isst": "eu como, você come, ele/ela come",
"ich mag, du magst, er/sie mag, wir mögen": "eu gosto, você gosta, ele/ela gosta, nós gostamos",
"Der Kaffee ist gut.": "O café está bom.",
"Ich trinke den Kaffee.": "Eu tomo o café.",
"Ich suche meinen Schlüssel.": "Procuro a minha chave.",
"kaufen, nehmen, brauchen, suchen, haben, essen, trinken, möchten, bestellen": "comprar, pegar, precisar, procurar, ter, comer, beber, querer, pedir",
"Ich möchte einen Kaffee.": "Quero um café.",
"Ich hätte gern einen Kaffee.": "Eu queria um café.",
"Was kostet das Brot? – Drei Euro zwanzig.": "Quanto custa o pão? – Três euros e vinte.",
"Was kosten die Äpfel? – Ein Kilo kostet zwei Euro.": "Quanto custam as maçãs? – Um quilo custa dois euros.",
"ein Kilo Äpfel": "um quilo de maçãs",
"eine Flasche Wasser": "uma garrafa de água",
"200 Gramm Käse": "200 gramas de queijo",
"Bar oder mit Karte?": "Dinheiro ou cartão?",
"Brauchen Sie eine Tüte?": "Precisa de sacola?",
"Was möchten Sie?": "O que o senhor deseja?",
"Ich hätte gern eine Suppe. / Ich nehme den Salat.": "Eu queria uma sopa. / Vou querer a salada.",
"Und zu trinken?": "E para beber?",
"Ein Wasser, bitte.": "Uma água, por favor.",
"Schmeckt es Ihnen?": "Está gostoso?",
"Ja, sehr gut, danke!": "Sim, muito bom, obrigado!",
"Zusammen oder getrennt?": "Junto ou separado?",
"Getrennt, bitte.": "Separado, por favor.",
"Zwanzig, bitte. / Stimmt so.": "Vinte, por favor. / Pode ficar com o troco.",
"das Wohnzimmer · das Schlafzimmer · die Küche · das Bad · der Flur · der Balkon · im Erdgeschoss · im ersten Stock": "a sala · o quarto · a cozinha · o banheiro · o corredor · a varanda · no térreo · no primeiro andar",
"Es gibt einen Tisch / eine Lampe / ein Bett / keine Möbel. · Gibt es einen Balkon?": "Tem uma mesa / uma luminária / uma cama / nenhum móvel. · Tem varanda?",
"Wie findest du den Tisch? – Ich finde ihn schön.": "O que você acha da mesa? – Acho bonita.",
"Die Wohnung ist hell. Das Zimmer ist klein. Die Zimmer sind klein.": "O apartamento é claro. O quarto é pequeno. Os quartos são pequenos.",
"Wie findest du die Wohnung? – Ich finde sie zu teuer.": "O que você acha do apartamento? – Acho caro demais.",
"mich, dich, ihn, sie, uns, euch, sie/Sie": "me, te, o, a, nos, vos, os/o senhor",
"Kannst du mich anrufen?": "Você pode me ligar?",
"der Tisch → er": "a mesa → ele (der Tisch é masculino)",
"55 Quadratmeter": "55 metros quadrados",
"Gibt es eine Küche?": "Tem cozinha?",
"Auf Wiederhören!": "Até logo! (ao telefone)",
"von … bis": "de … até",
"ab": "a partir de",
"der erste · der zweite · der dritte · der vierte … der zwanzigste · am zwölften Juni": "o primeiro · o segundo · o terceiro · o quarto … o vigésimo · no dia doze de junho",
"aufstehen → Ich stehe um sieben Uhr auf. · anfangen → Der Kurs fängt um neun an. · einkaufen · anrufen · fernsehen · mitkommen · aufhören": "levantar → Levanto às sete. · começar → O curso começa às nove. · fazer compras · ligar · ver TV · ir junto · parar",
"Hast du Zeit? · Geht es am …? · Das passt gut. · Ich kann leider nicht. · Es tut mir leid.": "Você tem tempo? · Dá na …? · Fica bom. · Infelizmente não posso. · Sinto muito.",
"Es ist vierzehn Uhr dreißig.": "São catorze e trinta.",
"um acht Uhr": "às oito horas",
"eine Stunde, zwei Stunden": "uma hora, duas horas",
"in der Nacht": "de noite",
"im Dezember": "em dezembro",
"im Juli": "em julho",
"Heute ist der 3. Mai.": "Hoje é 3 de maio.",
"Wann hast du Geburtstag? – Am 12. Juni.": "Quando é o seu aniversário? – Em 12 de junho.",
"aufstehen": "levantar-se",
"Ich stehe um sieben Uhr auf.": "Levanto às sete.",
"anfangen": "começar",
"Der Kurs fängt um neun an.": "O curso começa às nove.",
"einkaufen": "fazer compras",
"Am Samstag kaufe ich ein.": "No sábado faço compras.",
"anrufen": "ligar (telefonar)",
"Rufst du mich morgen an?": "Você me liga amanhã?",
"Ich rufe dich heute Abend nach dem Training an.": "Eu te ligo hoje à noite depois do treino.",
"Liebe Jana,es tut mir leid, ich kann heute leider nicht ins Kino kommen. Ich bin krank. Geht es vielleicht am Sonntag?Viele GrüßeLucas": "Querida Jana, sinto muito, infelizmente não posso ir ao cinema hoje. Estou doente. Dá no domingo, talvez? Abraços, Lucas",
"Es tut mir leid.": "Sinto muito.",
"lesen · Musik hören · Sport machen · schwimmen · wandern · Rad fahren · tanzen · Freunde treffen": "ler · ouvir música · fazer esporte · nadar · fazer trilha · andar de bicicleta · dançar · encontrar amigos",
"gern – lieber – am liebsten": "gostar – preferir – gostar mais de tudo",
"Ich kann gut schwimmen. · Willst du mitkommen?": "Sei nadar bem. · Quer vir junto?",
"Wie ist das Wetter? · Die Sonne scheint. · Es regnet. · Es schneit. · Es ist kalt. · Es sind 20 Grad.": "Como está o tempo? · Faz sol. · Está chovendo. · Está nevando. · Está frio. · Faz 20 graus.",
"Herzlichen Glückwunsch! · Vielen Dank für die Einladung! · Ich komme gern. · Leider kann ich nicht kommen.": "Parabéns! · Muito obrigado pelo convite! · Vou com prazer. · Infelizmente não posso ir.",
"Was machst du gern? Was machst du in deiner Freizeit? Was machst du am liebsten?": "O que você gosta de fazer? O que você faz no tempo livre? O que você mais gosta de fazer?",
"lesen → du liest, er liest": "ler → você lê, ele lê",
"fahren → du fährst, er fährt": "ir (de veículo) → você vai, ele vai",
"laufen → du läufst, er läuft": "correr → você corre, ele corre",
"treffen → du triffst, er trifft": "encontrar → você encontra, ele encontra",
"ich kann, er kann": "eu sei/posso, ele sabe/pode",
"Ich kann sehr gut schwimmen.": "Sei nadar muito bem.",
"Willst du am Samstag mitkommen?": "Quer vir junto no sábado?",
"Ich kann Gitarre spielen.": "Sei tocar violão.",
"möchten": "querer (educado)",
"15 Grad": "15 graus",
"kühl": "fresco",
"schön warm": "quentinho, agradável",
"Vielen Dank für die Einladung! Ich komme gern.": "Muito obrigado pelo convite! Vou com prazer.",
"Vielen Dank für die Einladung, aber leider kann ich nicht kommen.": "Muito obrigado pelo convite, mas infelizmente não posso ir.",
"Soll ich etwas mitbringen?": "Devo levar alguma coisa?",
"Ich bin am Freitag in Hamburg. / Ich muss arbeiten.": "Na sexta estou em Hamburgo. / Tenho que trabalhar.",
"Bis Freitag!": "Até sexta!",
"Ich wünsche dir eine schöne Party!": "Desejo uma ótima festa para você!",
"mit, zu, bei, von, aus, nach": "com, para, em casa de, de, de (origem), para (cidades/países)",
"in, an, auf, neben, vor, hinter, zwischen": "em, em/junto a, sobre, ao lado de, na frente de, atrás de, entre",
"zum Bahnhof · zur Post · nach Berlin · nach Hause · (zu Hause = em casa)": "para a estação · para os correios · para Berlim · para casa · (zu Hause = em casa)",
"Gehen Sie geradeaus! · Nehmen Sie den Bus! · Geh! · Nimm! · Komm! · Sei pünktlich!": "Siga reto! · Pegue o ônibus! · Vai! · Pega! · Vem! · Seja pontual!",
"ich muss, du musst · ich darf, du darfst · Hier darf man nicht rauchen.": "eu tenho que, você tem que · eu posso, você pode (permissão) · Aqui não é permitido fumar.",
"Wo ist die Apotheke? – Im Zentrum, in der Bergerstraße.": "Onde fica a farmácia? – No centro, na Bergerstraße.",
"im Juli, am Montag": "em julho, na segunda-feira",
"der Bus": "o ônibus",
"mit dem Bus": "de ônibus",
"die U-Bahn": "o metrô",
"mit der U-Bahn": "de metrô",
"das Auto": "o carro",
"mit dem Auto": "de carro",
"die Freunde": "os amigos",
"mit den Freunden": "com os amigos",
"zu Fuß": "a pé",
"Ich fahre mit dem Zug nach Berlin.": "Vou de trem para Berlim.",
"Ich gehe zu Fuß.": "Vou a pé.",
"der Bahnhof": "a estação de trem",
"zu dem → zum Bahnhof": "zu dem → zum: para a estação",
"die Post": "os correios",
"zu der → zur Post": "zu der → zur: para os correios",
"das Museum": "o museu",
"zu dem → zum Museum": "zu dem → zum: para o museu",
"nach Berlin, nach Österreich": "para Berlim, para a Áustria",
"nach Hause": "para casa (direção)",
"zu Hause": "em casa",
"beim Arzt, bei Jana": "no médico, na casa da Jana",
"vom Bahnhof": "da estação",
"aus dem Haus": "de dentro da casa",
"Warten Sie bitte hier.": "Espere aqui, por favor.",
"Hier darf man nicht rauchen.": "Aqui não é permitido fumar.",
"Sie müssen eine Fahrkarte kaufen.": "O senhor tem que comprar uma passagem.",
"Hier darf man parken.": "Aqui é permitido estacionar.",
"können": "poder, saber",
"Was sind Sie von Beruf? – Ich bin Lehrerin. (sem artigo) · Ich arbeite als Koch bei … / in …": "Qual é a sua profissão? – Sou professora. (sem artigo) · Trabalho como cozinheiro em …",
"und · aber · oder · denn": "e · mas · ou · pois",
"haben/sein": "ter/ser (verbos auxiliares)",
"Ich habe gearbeitet. Ich bin gefahren.": "Eu trabalhei. Eu fui (de veículo).",
"gemacht · gearbeitet · gelernt · gefragt · gehabt · geglaubt": "feito · trabalhado · aprendido · perguntado · tido · acreditado",
"gegessen · getrunken · gelesen · gesehen · geschlafen · gefahren · geblieben": "comido · bebido · lido · visto · dormido · ido (de veículo) · ficado",
"verstanden · passiert": "entendido · acontecido",
"ich war, du warst, wir waren · ich hatte, du hattest, wir hatten": "eu era/estava, você era/estava, nós éramos/estávamos · eu tinha, você tinha, nós tínhamos",
"Sehr geehrte Frau … / Sehr geehrter Herr … – Mit freundlichen Grüßen": "Prezada Sra. … / Prezado Sr. … – Atenciosamente",
"Ich bin Lehrerin.": "Sou professora.",
"der Lehrer → die Lehrerin": "o professor → a professora",
"der Arzt → die Ärztin": "o médico → a médica",
"der Koch → die Köchin": "o cozinheiro → a cozinheira",
"bei Siemens, bei einer Bank": "na Siemens, num banco",
"in einem Restaurant, in der Schule": "num restaurante, na escola",
"Ich habe gestern viel gearbeitet.": "Ontem trabalhei muito.",
"machen → gemacht": "fazer → feito",
"essen → gegessen": "comer → comido",
"arbeiten → gearbeitet": "trabalhar → trabalhado",
"trinken → getrunken": "beber → bebido",
"lernen → gelernt": "aprender → aprendido",
"lesen → gelesen": "ler → lido",
"fragen → gefragt": "perguntar → perguntado",
"sehen → gesehen": "ver → visto",
"haben → gehabt": "ter → tido",
"schlafen → geschlafen": "dormir → dormido",
"glauben → geglaubt": "acreditar → acreditado",
"verstehen → verstanden": "entender → entendido",
"passieren → passiert": "acontecer → acontecido",
"fahren → ich bin gefahren": "ir (de veículo) → eu fui",
"bleiben → ich bin geblieben": "ficar → eu fiquei",
"passieren → es ist passiert": "acontecer → aconteceu",
"Wie war dein Wochenende? – Es war super!": "Como foi o seu fim de semana? – Foi ótimo!",
"Ich hatte keine Zeit.": "Eu não tinha tempo.",
"Sehr geehrte Frau Hoffmann,leider kann ich heute nicht zur Arbeit kommen. Ich bin krank und gehe heute zum Arzt. Ich schicke Ihnen morgen die Krankmeldung. Das Meeting um zehn Uhr kann vielleicht Jana machen.Mit freundlichen GrüßenLucas Souza": "Prezada Sra. Hoffmann, infelizmente não posso ir trabalhar hoje. Estou doente e vou ao médico hoje. Amanhã envio o atestado. A reunião das dez talvez a Jana possa conduzir. Atenciosamente, Lucas Souza",
"die Krankmeldung": "o atestado médico",
"Mir tut der Kopf weh. · Mir tun die Füße weh. · Ich habe Kopfschmerzen / Halsschmerzen.": "Estou com dor de cabeça. · Meus pés doem. · Estou com dor de cabeça / de garganta.",
"Haben Sie einen Termin? · die Versichertenkarte · das Rezept · die Krankmeldung · Gute Besserung!": "O senhor tem horário marcado? · o cartão do plano de saúde · a receita · o atestado · Melhoras!",
"ich soll · du sollst · er soll · wir sollen – Die Ärztin sagt, ich soll im Bett bleiben.": "eu devo · você deve · ele deve · nós devemos – A médica diz que eu devo ficar na cama.",
"Das gefällt mir. · Die Hose passt mir nicht. · Kann ich Ihnen helfen? · Die Tasche gehört ihr.": "Gosto disso. · A calça não me serve. · Posso ajudar o senhor? · A bolsa é dela.",
"mir, dir, ihm, ihr, uns, euch, ihnen / Ihnen": "me, te, lhe (a ele), lhe (a ela), nos, vos, lhes / ao senhor",
"Wie geht es Ihnen? – Mir geht es nicht gut.": "Como vai o senhor? – Não estou bem.",
"Die Ärztin sagt, ich soll im Bett bleiben.": "A médica diz que eu devo ficar na cama.",
"Was soll ich machen?": "O que eu devo fazer?",
"Versichertenkarte": "cartão do plano de saúde",
"Kann ich Ihnen helfen?": "Posso ajudar o senhor?",
"Ja, ich suche eine Jacke.": "Sim, estou procurando uma jaqueta.",
"Welche Größe haben Sie?": "Qual é o seu tamanho?",
"Größe M / 40.": "Tamanho M / 40.",
"Welche Farbe möchten Sie?": "Que cor o senhor quer?",
"Blau oder schwarz.": "Azul ou preto.",
"Kann ich die Jacke anprobieren?": "Posso experimentar a jaqueta?",
"Die ist zu klein / zu groß. Haben Sie die auch in L?": "Está pequena / grande demais. Vocês têm também em G?",
"Die nehme ich.": "Vou levar esta.",
"Die Jacke? Die nehme ich.": "A jaqueta? Vou levar.",
"eine warme Jacke, eine Mütze und gute Schuhe": "um casaco quente, um gorro e sapatos bons",
"Die Schuhe gefallen mir.": "Gosto dos sapatos.",
"Wie gefällt dir das Kleid?": "O que você acha do vestido?",
"nach Wien / nach Italien": "para Viena / para a Itália",
"in Wien / in Italien": "em Viena / na Itália",
"in die Schweiz / in die Berge": "para a Suíça / para as montanhas",
"in der Schweiz / in den Bergen": "na Suíça / nas montanhas",
"ans Meer / an den See": "para o mar / para o lago",
"am Meer / am See": "no mar / no lago",
"das Einzelzimmer · das Doppelzimmer · die Übernachtung · das Frühstück · die Halbpension · die Rezeption · der Schlüssel · besetzt / frei": "o quarto de solteiro · o quarto de casal · a diária · o café da manhã · a meia pensão · a recepção · a chave · ocupado / livre",
"der Abflug · die Ankunft · der Flug · der Zoll · der Pass / der Ausweis · gültig": "a decolagem · a chegada · o voo · a alfândega · o passaporte / a identidade · válido",
"besichtigt · besucht · übernachtet · reserviert · verstanden · passiert": "visitado · visitado (pessoa) · pernoitado · reservado · entendido · acontecido",
"am Meer, in den Bergen, in der Schweiz, in Wien": "no mar, nas montanhas, na Suíça, em Viena",
"der See": "o lago",
"die See": "o mar (poético)",
"das Meer": "o mar",
"besichtigt, besucht, übernachtet, reserviert, verstanden": "visitado, visitado, pernoitado, reservado, entendido",
"Können Sie bitte …? · Kannst du mir bitte … geben? · Ich hätte gern … · Ich möchte …": "O senhor pode, por favor, …? · Você pode me dar …, por favor? · Eu queria … · Eu gostaria de …",
"Liebe … / Lieber … – Viele Grüße · Sehr geehrte … – Mit freundlichen Grüßen · alle 3 Punkte!": "Querida … / Querido … – Abraços · Prezada … – Atenciosamente · todos os 3 pontos!",
"Ich bin umgezogen / eingezogen / ausgezogen. · Ich habe alles eingepackt.": "Eu me mudei / mudei para cá / saí do apartamento. · Embalei tudo.",
"Ich stelle das Regal in die Ecke.": "Coloco a estante no canto.",
"Das Regal steht in der Ecke.": "A estante fica no canto.",
"Ich lege das Buch auf den Tisch.": "Coloco o livro em cima da mesa.",
"Das Buch liegt auf dem Tisch.": "O livro está em cima da mesa.",
"Ich hänge das Bild an die Wand.": "Penduro o quadro na parede.",
"Das Bild hängt an der Wand.": "O quadro está pendurado na parede.",
"in · an · auf · über · unter · vor · hinter · neben · zwischen": "em · em/junto a · sobre · acima de · embaixo de · na frente de · atrás de · ao lado de · entre",
"Ich finde, dass die Wohnung hell ist. · Er sagt, dass man leise sein muss.": "Acho que o apartamento é claro. · Ele diz que é preciso fazer silêncio.",
"Altpapier (blau) · Biomüll (braun) · Verpackungen (gelb) · Altglas (Container)": "papel (azul) · orgânico (marrom) · embalagens (amarelo) · vidro (contêiner)",
"einpacken → eingepackt": "embalar → embalado",
"Ich habe alles eingepackt.": "Embalei tudo.",
"aufräumen → aufgeräumt": "arrumar → arrumado",
"Wir haben die Küche aufgeräumt.": "Arrumamos a cozinha.",
"anrufen → angerufen": "ligar → ligado",
"Hast du den Vermieter angerufen?": "Você ligou para o locador?",
"umziehen → umgezogen": "mudar-se → mudado",
"Ich bin letzte Woche umgezogen.": "Eu me mudei na semana passada.",
"einziehen → eingezogen": "mudar-se para → mudado",
"Wann bist du eingezogen?": "Quando você se mudou para cá?",
"in, an, auf, über, unter, vor, hinter, neben, zwischen": "em, em/junto a, sobre, acima de, embaixo de, na frente de, atrás de, ao lado de, entre",
"Ich stelle die Lampe neben das Sofa.": "Coloco a luminária ao lado do sofá.",
"Die Lampe steht neben dem Sofa.": "A luminária fica ao lado do sofá.",
"zwischen den Fenstern": "entre as janelas",
"Die Wohnung ist hell.": "O apartamento é claro.",
"Ich finde, dass die Wohnung hell ist.": "Acho que o apartamento é claro.",
"…, dass man nach 22 Uhr leise sein muss.": "…, que depois das 22h é preciso fazer silêncio.",
"…, dass ich gestern zu laut gewesen bin.": "…, que ontem eu fiz muito barulho.",
"Ich bin am Wochenende bei meiner Schwester.": "No fim de semana estou na casa da minha irmã.",
"Ich freue mich auf die Party!": "Estou ansioso pela festa!",
"Ich wünsche dir viel Spaß!": "Divirta-se!",
"speichern · löschen · herunterladen · hochladen · ausdrucken · das Passwort · das WLAN · der Akku": "salvar · apagar · baixar · enviar (upload) · imprimir · a senha · o Wi-Fi · a bateria",
"Ich komme später, weil der Bus Verspätung hat. · Weil es regnet, nehme ich den Bus.": "Vou chegar mais tarde porque o ônibus está atrasado. · Como está chovendo, vou de ônibus.",
"…, denn der Bus hat Verspätung.": "…, pois o ônibus está atrasado.",
"Könnten Sie …? · Hätten Sie Zeit? · Würden Sie …? · Ich hätte gern …": "O senhor poderia …? · O senhor teria tempo? · O senhor poderia …? · Eu queria …",
"einen Termin vereinbaren / verschieben / absagen · Passt es Ihnen …? – Ja, das passt mir.": "marcar / remarcar / cancelar um compromisso · Fica bom para o senhor …? – Sim, fica bom para mim.",
"Ich komme später, weil der Bus Verspätung hat.": "Vou chegar mais tarde porque o ônibus está atrasado.",
"Warum bist du so müde? – Weil ich schlecht geschlafen habe.": "Por que você está tão cansado? – Porque dormi mal.",
"Ich bleibe zu Hause, weil ich arbeiten muss.": "Fico em casa porque tenho que trabalhar.",
"Weil das WLAN nicht funktioniert, arbeite ich im Café.": "Como o Wi-Fi não funciona, trabalho no café.",
"…, weil der Bus Verspätung hat.": "…, porque o ônibus está atrasado.",
"Weil es regnet, nehme ich den Bus.": "Como está chovendo, vou de ônibus.",
"Könntest du …? · Hättest du Zeit? · Würdest du …?": "Você poderia …? · Você teria tempo? · Você poderia …?",
"ich fühle mich · du fühlst dich · er/sie fühlt sich · wir fühlen uns · ihr fühlt euch · sie/Sie fühlen sich": "eu me sinto · você se sente · ele/ela se sente · nós nos sentimos · vocês se sentem · eles/o senhor se sentem",
"sich bewegen · sich ausruhen · sich verletzen · sich beeilen · sich freuen auf · sich ärgern über · sich interessieren für": "movimentar-se · descansar · machucar-se · apressar-se · estar ansioso por · irritar-se com · interessar-se por",
"Ich habe mich verletzt.": "Eu me machuquei.",
"seit drei Tagen (e continua) · vor einer Woche (já passou)": "há três dias (e continua) · há uma semana (já passou)",
"112 Notruf · 110 Polizei · 116 117 ärztlicher Bereitschaftsdienst": "112 emergência · 110 polícia · 116 117 plantão médico",
"sich bewegen, sich ausruhen, sich verletzen, sich duschen, sich anziehen, sich beeilen, sich ärgern, sich freuen auf / über, sich interessieren für": "movimentar-se, descansar, machucar-se, tomar banho, vestir-se, apressar-se, irritar-se, estar ansioso por / feliz com, interessar-se por",
"Du musst dich ausruhen.": "Você precisa descansar.",
"Ich freue mich.": "Estou feliz.",
"Beeil dich!": "Anda logo!",
"seit einem Tag, seit einer Woche, seit zwei Monaten": "há um dia, há uma semana, há dois meses",
"Seit wann …?": "Desde quando …?",
"konnte · musste · wollte · durfte · sollte": "pude · tive que · quis · pude (permissão) · devia",
"ich konnte, du konntest, wir konnten": "eu pude, você pôde, nós pudemos",
"konnte": "pude (passado)",
"könnte": "poderia (educado)",
"verreisen · die Unterkunft · die Jugendherberge · übernachten · die Ermäßigung · kostenlos · der Rundgang": "viajar · a hospedagem · o albergue · pernoitar · o desconto · grátis · o passeio guiado",
"bewölkt · das Gewitter · der Sturm · nass · trocken · minus 5 Grad": "nublado · a tempestade · o temporal · molhado · seco · menos 5 graus",
"die Werkstatt · der Reifen · die Panne · tanken · der Stau": "a oficina · o pneu · a pane · abastecer · o engarrafamento",
"Ich konnte gestern nicht kommen, ich musste arbeiten.": "Ontem não pude vir, tive que trabalhar.",
"ich konnte": "eu pude",
"ich könnte": "eu poderia",
"billiger als · so teuer wie · am billigsten · gut – besser – am besten · gern – lieber – am liebsten · viel – mehr – am meisten": "mais barato que · tão caro quanto · o mais barato · bom – melhor – o melhor · gostar – preferir – gostar mais de tudo · muito – mais – o máximo",
"Kann ich das umtauschen? · Hier ist der Kassenbon. · Eine Nummer größer, bitte.": "Posso trocar isso? · Aqui está o cupom fiscal. · Um número maior, por favor.",
"Der Mantel ist neu.": "O casaco é novo.",
"billig": "barato",
"billiger": "mais barato",
"am billigsten": "o mais barato",
"schön": "bonito",
"schöner": "mais bonito",
"am schönsten": "o mais bonito",
"alt / groß / warm": "velho / grande / quente",
"älter / größer / wärmer": "mais velho / maior / mais quente",
"am ältesten / am größten / am wärmsten": "o mais velho / o maior / o mais quente",
"gut": "bom",
"besser": "melhor",
"am besten": "o melhor",
"gern": "com gosto",
"lieber": "de preferência",
"am liebsten": "mais que tudo",
"viel": "muito",
"mehr": "mais",
"am meisten": "o máximo",
"Die Jeans ist billiger als die Hose.": "O jeans é mais barato que a calça.",
"Die Jeans ist so teuer wie die Hose.": "O jeans é tão caro quanto a calça.",
"Ich schenke meiner Mutter einen Schal. · mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen": "Dou um cachecol para a minha mãe. · me, te, lhe, lhe, nos, vos, lhes, ao senhor",
"helfen, danken, gratulieren, gehören, gefallen, schmecken, passen, antworten": "ajudar, agradecer, dar parabéns, pertencer, agradar, ter gosto, servir, responder",
"Wenn du Zeit hast, kannst du mir helfen. · Ich koche, wenn Freunde kommen.": "Se você tiver tempo, pode me ajudar. · Cozinho quando os amigos vêm.",
"Herzlichen Glückwunsch! · Alles Gute! · Frohe Weihnachten! · Guten Rutsch! · Frohes neues Jahr!": "Parabéns! · Tudo de bom! · Feliz Natal! · Boas entradas! · Feliz Ano-Novo!",
"Ich schenke meiner Mutter (Wem?) einen Schal (Was?).": "Dou para a minha mãe (para quem?) um cachecol (o quê?).",
"mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen": "me, te, lhe, lhe, nos, vos, lhes, ao senhor",
"Kannst du mir helfen?": "Você pode me ajudar?",
"Das Buch gehört ihm.": "O livro é dele.",
"Wir gratulieren dir!": "Parabéns para você!",
"Ich koche brasilianisch, wenn Freunde zu Besuch kommen.": "Cozinho comida brasileira quando os amigos vêm me visitar.",
"Wenn du Zeit hast, kannst du mir helfen.": "Se você tiver tempo, pode me ajudar.",
"von … bis … · seit 2023 · ab 1. März · nach dem Studium · vor der Ausbildung · während des Studiums": "de … até … · desde 2023 · a partir de 1º de março · depois da faculdade · antes da formação · durante a faculdade",
"Können Sie mir sagen, wann die Arbeit beginnt?": "O senhor pode me dizer quando começa o trabalho?",
"Ich möchte wissen, ob es Homeoffice gibt.": "Eu gostaria de saber se tem home office.",
"der Lebenslauf · die Bewerbung · sich bewerben (hat sich beworben) · das Vorstellungsgespräch · die Berufserfahrung · die Kenntnisse": "o currículo · a candidatura · candidatar-se (candidatou-se) · a entrevista de emprego · a experiência profissional · os conhecimentos",
"Können Sie mir sagen, …? / Wissen Sie, …? / Ich möchte wissen, …": "O senhor pode me dizer …? / O senhor sabe …? / Eu gostaria de saber …",
"Wann beginnt die Arbeit?": "Quando começa o trabalho?",
"Wo ist das Büro?": "Onde fica o escritório?",
"Wissen Sie, wo das Büro ist?": "O senhor sabe onde fica o escritório?",
"Gibt es Homeoffice?": "Tem home office?",
"Ich weiß nicht, ob er kommt.": "Não sei se ele vem.",
"Wenn er kommt, …": "Se ele vier, …",
"das Formular ausfüllen · unterschreiben · die Gebühr · der Ausweis · gültig · ummelden · die Wartenummer": "preencher o formulário · assinar · a taxa · a identidade · válido · atualizar o endereço · a senha (da fila)",
"ein Paket abholen · der Empfänger · das Konto · Geld überweisen / abheben · die Karte sperren": "buscar um pacote · o destinatário · a conta · transferir / sacar dinheiro · bloquear o cartão",
"warten auf · denken an · sich freuen auf/über · sich kümmern um · sprechen über · sich interessieren für · fragen nach · sich anmelden für": "esperar por · pensar em · estar ansioso por / feliz com · cuidar de · falar sobre · interessar-se por · perguntar por · inscrever-se em",
"das Theater · die Ausstellung · das Instrument · spannend · langweilig · aufregend · berühmt · beliebt · komisch": "o teatro · a exposição · o instrumento · emocionante · chato · empolgante · famoso · popular · engraçado/estranho",
"Welcher Film? – Der neue Krimi. · Was für ein Film? – Ein Krimi.": "Qual filme? – O novo policial. · Que tipo de filme? – Um policial.",
"jemand – niemand – alle": "alguém – ninguém – todos",
"etwas – nichts – alles": "algo – nada – tudo",
"irgendwo – nirgends – überall": "em algum lugar – em lugar nenhum – em todo lugar",
"welcher / welche / welches": "qual (masc. / fem. / neutro)",
"Welchen Film siehst du?": "Qual filme você vai ver?",
"Was für eine Ausstellung ist das?": "Que tipo de exposição é essa?",
"Ich habe nichts gesehen.": "Não vi nada.",
"Hast du etwas gegessen? – Nein, nichts.": "Você comeu alguma coisa? – Não, nada.",
"Ist jemand da? – Nein, niemand.": "Tem alguém aí? – Não, ninguém.",
"nett · sympathisch · klug · fleißig · faul · streng · nervös · ruhig · ehrlich": "legal · simpático · inteligente · esforçado · preguiçoso · rígido · nervoso · calmo · honesto",
"Meiner Meinung nach … · Ich bin einverstanden. · Da bin ich anderer Meinung. · Das ist mir egal. · Keine Ahnung!": "Na minha opinião … · Estou de acordo. · Eu penso diferente. · Tanto faz para mim. · Não faço ideia!",
"ich sollte · du solltest · er sollte · wir sollten · ihr solltet · sie/Sie sollten": "eu deveria · você deveria · ele deveria · nós deveríamos · vocês deveriam · eles/o senhor deveriam",
"Du solltest mehr schlafen. · An deiner Stelle würde ich …": "Você deveria dormir mais. · No seu lugar, eu …",
"früher · damals · heute · vorgestern · übermorgen": "antigamente · naquela época · hoje · anteontem · depois de amanhã",
"Ich bin einverstanden.": "Estou de acordo.",
"Da bin ich anderer Meinung.": "Eu penso diferente.",
"Das finde ich auch.": "Também acho.",
"Das finde ich nicht so gut, weil …": "Não acho isso tão bom, porque …",
"Gute Idee!": "Boa ideia!",
"Ich weiß nicht …": "Não sei …",
"sollte": "deveria",
"ich / er / sie sollte": "eu / ele / ela deveria",
"du solltest": "você deveria",
"wir / sie / Sie sollten": "nós / eles / o senhor deveriam",
"Du solltest mehr schlafen.": "Você deveria dormir mais.",
"An deiner Stelle würde ich …": "No seu lugar, eu …",
"die Tafel · das Heft · das Blatt · die Gruppe · Ich bin an der Reihe. · übersetzen · erklären · wiederholen": "o quadro · o caderno · a folha · o grupo · É a minha vez. · traduzir · explicar · repetir",
"ich werde · du wirst · er wird · wir werden · ihr werdet · sie/Sie werden": "eu vou · você vai · ele vai · nós vamos · vocês vão · eles/o senhor vão",
"Ich werde nächstes Jahr die Prüfung machen. · Morgen wird es regnen.": "No ano que vem vou fazer a prova. · Amanhã vai chover.",
"vorgestern · gestern · heute · morgen · übermorgen · nächstes Jahr · wahrscheinlich · vielleicht · sicher": "anteontem · ontem · hoje · amanhã · depois de amanhã · no ano que vem · provavelmente · talvez · com certeza",
"Ich werde nächstes Jahr die B1-Prüfung machen.": "No ano que vem vou fazer a prova B1.",
"Morgen wird es regnen.": "Amanhã vai chover.",
"Morgen fahre ich nach Berlin.": "Amanhã vou para Berlim.",
"Geht es bei dir um …? · Wie wäre es um …? · Um … kann ich leider nicht, da … · Das passt mir gut. · Einverstanden! · Treffen wir uns um … vor …": "Dá para você às …? · Que tal às …? · Às … infelizmente não posso, porque … · Fica bom para mim. · Combinado! · Vamos nos encontrar às … na frente de …"
});
