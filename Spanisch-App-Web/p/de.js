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
  levels:[{id:'A1',label:'A1',title:'Iniciante',sub:'Primeiros passos'},{id:'A2',label:'A2',title:'Básico',sub:'Vida no dia a dia: moradia, trabalho, saúde, serviços, lazer'},{id:'B1',label:'B1',title:'Intermediário',sub:'Contar, argumentar, trabalhar e conviver com independência'},{id:'B2',label:'B2',title:'Intermediário superior',sub:'Argumentar, debater e entender textos complexos no trabalho e na sociedade'},{id:'C1',label:'C1',title:'Avançado',sub:'Em preparação',soon:true},{id:'C2',label:'C2',title:'Proficiente',sub:'Em preparação',soon:true}],
  contact:'Jonas', /* Ansprechperson für Stufen in Vorbereitung (soon) */
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
  function(m,a,mid,w){var f=femWord(w);if(f===w)return m;if(/ k?ein$/.test(a))a=a+'e';return a+' '+mid+f;})
  .replace(/\b([Ww]enn ich) ([A-ZÄÖÜ][a-zäöüß]+) wäre\b/g,function(m,a,w){var f=femWord(w);return f===w?m:a+' '+f+' wäre';});};/* auch „Wenn ich Lehrer wäre“ */
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
 {t:'vocab',title:'Perguntar como a pessoa está',items:[['Wie geht’s?','Tudo bem? / Como vai?'],['Wie geht es dir?','Como você está? (informal)'],['Wie geht es Ihnen?','Como o senhor / a senhora está?'],['gut','bem'],['sehr gut','muito bem'],['es geht','mais ou menos'],['nicht so gut','não muito bem'],['schlecht','mal / ruim'],['danke','obrigado / obrigada'],['bitte','por favor / de nada']]},
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
  {n:'Verkäuferin',es:'Auch gut, danke! Was möchten Sie?',de:'Bem também, obrigada! O que o senhor deseja?'},
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
 {t:'dialog',place:'WG-Küche',title:'Na república (WG)',scene:'Você mora numa <b>WG</b> (república de estudantes/jovens). Um novo colega de casa chega.',lines:[
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
 <tr><td><b>ch</b> depois de e, i, ä, ö, ü</td><td>um chiado suave com a língua no céu da boca, como um gato bravo: “hhh” (sem r!)</td><td class="es-t">ich · sprechen</td></tr></table>
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
 {t:'speak',es:'Meine Handynummer ist null eins sieben zwei, drei vier fünf, sechs sieben acht.',de:'Meu celular é 0172 345 678.',tip:'Diga os números de um em um ou em pares – ninguém espera que você diga números longos de uma vez.'}
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
 {t:'vocab',title:'Idade',items:[['Wie alt bist du?','Quantos anos você tem? (informal)'],['Wie alt sind Sie?','Quantos anos o senhor / a senhora tem?'],['Ich bin 28 Jahre alt.','Eu tenho 28 anos.'],['das Jahr, die Jahre','o ano, os anos'],['alt','velho, idoso (idade: 28 Jahre alt)'],['jung','jovem'],['das Alter','a idade'],['der Geburtstag','o aniversário']]},
 {t:'info',title:'A idade com „sein“',html:`<p>Em português a gente <b>tem</b> anos. Em alemão a gente <b>é</b> “x anos velho”:</p>
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
 {t:'info',title:'Data de nascimento',html:`<p>Em formulários a data é escrita como em português – <b>dia.mês.ano</b>, com pontos: <span class="es-t">14.03.1997</span>.</p>
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
 {t:'gap',q:'Das ist ___ Schwester. (minha)',a:['meine']},
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
{id:'l4',title:'Ler e escrever: um e-mail',desc:'Lesen · Hören · eine kurze E-Mail schreiben',steps:[
 {t:'read',title:'Leitura: Eine E-Mail an Tom',intro:'O Lucas escreve para o Tom sobre a visita da família.',text:`Hallo Tom,
im Mai {kommen|vêm} meine Eltern nach Frankfurt! Mein Vater heißt Paulo, er ist 58 Jahre alt. Meine Mutter heißt Rita, sie ist 54. Sie wohnen in São Paulo. Mein Bruder Pedro kommt {leider|infelizmente} nicht. Er hat zwei Kinder und {keine Zeit|não tem tempo}.
Hast du am Samstag Zeit? Wir {grillen|fazemos churrasco} im Garten!
Viele Grüße
Lucas`,de:`Oi, Tom,
em maio meus pais vêm para Frankfurt! Meu pai se chama Paulo, ele tem 58 anos. Minha mãe se chama Rita, ela tem 54. Eles moram em São Paulo. Meu irmão Pedro infelizmente não vem. Ele tem dois filhos e não tem tempo.
Você tem tempo no sábado? Vamos fazer churrasco no jardim!
Abraços,
Lucas`},
 {t:'mc',q:'Richtig oder falsch? Die Eltern von Lucas wohnen in Frankfurt.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Richtig oder falsch? Pedro hat Kinder.',opts:['richtig','falsch'],a:0},
 {t:'mc',q:'Wie alt ist der Vater?',opts:['58','54','28'],a:0},
 {t:'read',hideText:true,title:'Conversa no trabalho',intro:'Ouça a conversa entre a Jana e um colega.',text:`Jana, hast du Kinder? – Ja, ich habe eine Tochter. Sie heißt Mia und ist vier Jahre alt. – Oh, schön! Und hast du auch Geschwister? – Nein, ich habe keine Geschwister. Aber ich habe viele Freunde.`,de:`Jana, você tem filhos? – Sim, tenho uma filha. Ela se chama Mia e tem quatro anos. – Ah, que legal! E você também tem irmãos? – Não, não tenho irmãos. Mas tenho muitos amigos.`},
 {t:'mc',q:'Wie alt ist Mia?',opts:['vier','vierzehn','zwei'],a:0},
 {t:'mc',q:'Richtig oder falsch? Jana hat einen Bruder.',opts:['falsch','richtig'],a:0},
 {t:'info',title:'E-mail curto: começar e terminar',html:`<table><tr><th></th><th>informal (du)</th><th>formal (Sie)</th></tr>
 <tr><td>começo</td><td class="es-t">Hallo Tom, / Liebe Jana, / Lieber Tom,</td><td class="es-t">Sehr geehrte Frau Weber, / Sehr geehrter Herr Becker,</td></tr>
 <tr><td>fim</td><td class="es-t">Viele Grüße / Liebe Grüße</td><td class="es-t">Mit freundlichen Grüßen</td></tr></table>
 <div class="ex">Depois da saudação vem vírgula, e a frase seguinte começa com <b>letra minúscula</b>: <span class="es-t">Hallo Tom, im Mai kommen …</span></div>`},
 {t:'free',task:'Escreva um e-mail curto (cerca de 30 palavras) para uma amiga alemã sobre a sua família: 1) quem é da sua família, 2) idade e onde moram, 3) pergunte sobre a família dela.',hint:'Liebe …, meine Familie ist … Mein Vater/Meine Mutter heißt … und ist … Jahre alt. Sie wohnen in … Hast du Geschwister? Viele Grüße …',focus:'Possessivartikel, haben, ein/kein, Zahlen, E-Mail-Anrede und Gruß',model:'Liebe Jana,\nmeine Familie wohnt in São Paulo. Mein Vater heißt Paulo, er ist 58. Meine Mutter Rita ist 54. Ich habe einen Bruder, er hat zwei Kinder. Hast du Geschwister?\nViele Grüße\nLucas'}
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
 <div class="ex">Quantidades sem “de”: <span class="es-t">ein Kilo Äpfel</span> (um quilo <b>de</b> maçãs), <span class="es-t">eine Flasche Wasser</span>, <span class="es-t">200 Gramm Käse</span>.</div>
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
 {t:'vocab',title:'Adjetivos',items:[['groß','grande'],['klein','pequeno'],['hell','claro / iluminado'],['dunkel','escuro'],['ruhig','tranquilo / silencioso / calmo'],['laut','barulhento; segundo (laut + dativo)'],['neu','novo'],['alt','velho, idoso (idade: 28 Jahre alt)'],['schön','bonito; (tempo) bom'],['hässlich','feio'],['modern','moderno'],['praktisch','prático'],['teuer','caro'],['billig','barato'],['gemütlich','aconchegante']]},
 {t:'info',title:'Andares e lugares',html:`<p>Como em português, o <b>térreo</b> não conta: o 1º andar fica <b>acima</b> do térreo:</p>
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
 {t:'vocab',title:'Aluguel',items:[['mieten','alugar (como inquilino)'],['vermieten','alugar (como dono)'],['der Vermieter / die Vermieterin','o locador / a locadora'],['die Miete','o aluguel'],['die Nebenkosten (Pl.)','as despesas (água, aquecimento …)'],['warm','quente / morno; (aluguel) com despesas'],['der Quadratmeter','o metro quadrado'],['die Anzeige','o anúncio'],['umziehen','mudar de casa'],['einziehen','mudar-se (para a casa nova)'],['frei','livre / disponível'],['ab sofort','a partir de agora'],['besichtigen','visitar (lugar, imóvel)']]},
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
 {t:'info',title:'Auf Wiederhören!',html:`<p>No telefone não se diz <i>Auf Wiedersehen</i> (literalmente “até nos vermos de novo”), mas <span class="es-t">Auf Wiederhören!</span> (“até nos ouvirmos de novo”).</p>`},
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
 {t:'vocab',title:'Horas',items:[['die Uhr','o relógio / hora (8 Uhr)'],['Wie spät ist es?','Que horas são?'],['Wie viel Uhr ist es?','Que horas são?'],['Es ist drei Uhr.','São três horas.'],['die Stunde','a hora (duração)'],['die Minute','o minuto'],['halb','meia (… e meia)'],['das Viertel','o quarto (de hora)'],['nach','depois / e (horas)'],['vor','antes / para (horas); em frente a'],['um … Uhr','às … horas'],['früh','cedo'],['spät','tarde'],['pünktlich','pontual']]},
 {t:'info',title:'Hora oficial e informal',html:`<p><b>Oficial</b> (rádio, estação, trabalho) – de 0 a 24h: <span class="es-t">Es ist vierzehn Uhr dreißig.</span> (14:30)</p>
 <p><b>Informal</b> (no dia a dia) – 1–12h:</p>
 <table><tr><td>3:05</td><td class="es-t">fünf nach drei</td></tr>
 <tr><td>3:15</td><td class="es-t">Viertel nach drei</td></tr>
 <tr><td>3:30</td><td class="es-t"><b>halb vier</b></td></tr>
 <tr><td>3:45</td><td class="es-t">Viertel vor vier</td></tr>
 <tr><td>3:50</td><td class="es-t">zehn vor vier</td></tr></table>
 <div class="ojo">Cuidado! <span class="es-t">halb vier</span> = 3:30 (meia hora <b>antes</b> das quatro), e <b>não</b> 4:30. É o erro clássico de quem fala português – e você chega uma hora atrasado 😉</div>
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
 {t:'read',title:'Leitura: Ein Tag von Lucas',text:`Ich stehe {meistens|na maioria das vezes} um halb sieben auf. Zuerst dusche ich, dann frühstücke ich: Kaffee und ein Brötchen. Um acht Uhr fahre ich mit der U-Bahn zur Arbeit. Die Arbeit fängt um halb neun an. Mittags esse ich mit Jana in der {Kantine|cantina}. Um siebzehn Uhr höre ich auf. Montags und donnerstags habe ich Deutschkurs. Abends kaufe ich manchmal ein oder ich koche mit Tom. Ich sehe nie fern – ich lese lieber. Um elf Uhr gehe ich ins Bett.`,de:`Na maioria das vezes eu me levanto às seis e meia. Primeiro tomo banho, depois tomo café: café e um pãozinho. Às oito vou de metrô para o trabalho. O trabalho começa às oito e meia. Ao meio-dia como com a Jana na cantina. Às 17h eu paro de trabalhar. Às segundas e quintas tenho curso de alemão. À noite às vezes faço compras ou cozinho com o Tom. Nunca vejo televisão – prefiro ler. Às onze vou para a cama.`},
 {t:'mc',q:'Wann fängt die Arbeit an?',opts:['um 8:30 Uhr','um 6:30 Uhr','um 8 Uhr'],a:0},
 {t:'mc',q:'Richtig oder falsch? Lucas sieht abends oft fern.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Wann hat Lucas Deutschkurs?',opts:['montags und donnerstags','jeden Tag','am Wochenende'],a:0},
 {t:'tr',de:'Eu me levanto às sete.',a:['Ich stehe um sieben Uhr auf.','Ich stehe um sieben auf.']},
 {t:'tr',de:'O curso começa às nove.',a:['Der Kurs fängt um neun Uhr an.','Der Kurs fängt um neun an.','Der Kurs beginnt um neun Uhr.','Der Kurs beginnt um neun.']}
]},
{id:'l4',title:'Combinar e cancelar',desc:'Hast du Zeit? · Termine · Ich kann leider nicht.',steps:[
 {t:'vocab',title:'Combinar',items:[['Hast du Zeit?','Você tem tempo?'],['die Zeit','o tempo'],['der Termin','o compromisso / a consulta (horário marcado)'],['die Verabredung','o encontro (combinado)'],['Wann?','Quando?'],['Geht es am …?','Dá na …?'],['Das geht.','Dá. / Pode ser.'],['Das passt gut.','Fica bom.'],['Ich kann leider nicht.','Infelizmente não posso.'],['vielleicht','talvez'],['das Kino','o cinema'],['der Film','o filme'],['Bis dann!','Até lá!'],['die Entschuldigung','a desculpa'],['Entschuldigung!','Desculpe!']]},
 {t:'dialog',place:'Büro',title:'Cinema com a Jana',scene:'No intervalo, a Jana fala com você.',lines:[
  {n:'Jana',es:'Lucas, hast du diese Woche Zeit? Ich möchte ins Kino gehen.',de:'Lucas, você tem tempo nesta semana? Quero ir ao cinema.'},
  {you:true,opts:[{es:'Ja, gern! Wann?',ok:true},{es:'Ja, gern! Wo wohnst du?',ok:false,why:'A pergunta importante agora é <b>quando</b>.'}]},
  {n:'Jana',es:'Geht es am Dienstag?',de:'Dá na terça?'},
  {you:true,opts:[{es:'Am Dienstag kann ich leider nicht. Aber am Freitag geht es.',ok:true},{es:'Am Dienstag kann ich leider nicht. Aber im Freitag geht es.',ok:false,why:'Dias da semana: <b>am</b> Freitag.'}]},
  {n:'Jana',es:'Super. Der Film fängt um halb neun an.',de:'Ótimo. O filme começa às oito e meia.'},
  {you:true,opts:[{es:'Gut, dann treffen wir uns um acht Uhr vor dem Kino.',ok:true},{es:'Gut, dann treffen wir uns um halb neun um neun Uhr.',ok:false,why:'Combine um horário claro – antes do filme.'}]},
  {n:'Jana',es:'Perfekt. Bis Freitag!',de:'Perfeito. Até sexta!'}]},
 {t:'read',hideText:true,title:'Recado do consultório',intro:'Ouça a mensagem.',text:`Guten Tag, hier ist die Praxis Doktor Wolf. Ihr Termin am Mittwoch um zehn Uhr geht leider nicht. Die Ärztin ist krank. Neuer Termin: Freitag, Viertel nach neun. Bitte bringen Sie Ihre {Versichertenkarte|carteirinha do plano de saúde} mit. Vielen Dank, auf Wiederhören.`,de:`Bom dia, aqui é o consultório da doutora Wolf. Infelizmente sua consulta na quarta às dez horas não vai dar. A médica está doente. Nova consulta: sexta-feira, nove e quinze. Por favor, traga sua carteirinha do plano de saúde. Muito obrigado, até logo.`},
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
 {t:'vocab',title:'Tempo',items:[['das Wetter','o tempo (clima)'],['die Sonne','o sol'],['Die Sonne scheint.','O sol está brilhando.'],['der Regen','a chuva'],['Es regnet.','Está chovendo.'],['der Schnee','a neve'],['Es schneit.','Está nevando.'],['der Wind','o vento'],['die Wolke','a nuvem'],['warm','quente / morno; (aluguel) com despesas'],['heiß','muito quente'],['kalt','frio'],['kühl','fresco'],['schön','bonito; (tempo) bom'],['schlecht','mal / ruim'],['der Grad','o grau'],['minus','menos (abaixo de zero)']]},
 {t:'info',title:'Falar do tempo',html:`<table><tr><td class="es-t">Wie ist das Wetter?</td><td>Como está o tempo?</td></tr>
 <tr><td class="es-t">Es ist schön / kalt / warm.</td><td>Está bonito / frio / quente.</td></tr>
 <tr><td class="es-t">Es regnet. Es schneit.</td><td>Está chovendo. Está nevando.</td></tr>
 <tr><td class="es-t">Es sind 25 Grad.</td><td>Faz 25 graus.</td></tr>
 <tr><td class="es-t">Es ist minus fünf Grad.</td><td>Faz cinco graus abaixo de zero.</td></tr></table>
 <div class="ex">Sempre com <b>es</b> – como “está” em português, mas o <b>es</b> é obrigatório.</div>
 <div class="ojo">Para quem vem de um país quente, 15 graus é frio 🥶 – para um alemão, <span class="es-t">15 Grad</span> no verão já é <span class="es-t">kühl</span>, mas na primavera é <span class="es-t">schön warm</span>!</div>`},
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
Sarah`,de:`Queridas colegas e queridos colegas,
na sexta-feira, 14 de junho, eu faço trinta anos! Quero comemorar com vocês. A festa é na minha casa, na Gartenstraße 8, a partir das 19 horas. Tem pizza e bebidas. Vocês não precisam levar nada – só bom humor! Por favor, me avisem até quarta-feira se vocês vêm.
Abraços,
Sarah`},
 {t:'mc',q:'Warum feiert Sarah?',opts:['Sie hat Geburtstag.','Sie hat eine neue Wohnung.','Sie hat einen neuen Job.'],a:0},
 {t:'mc',q:'Richtig oder falsch? Die Gäste müssen Essen mitbringen.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Bis wann soll man antworten?',opts:['bis Mittwoch','bis Freitag','bis zum 14. Juni'],a:0},
 {t:'info',title:'Responder a um convite',html:`<table><tr><th>sim</th><th>não</th></tr>
 <tr><td class="es-t">Vielen Dank für die Einladung! Ich komme gern.</td><td class="es-t">Vielen Dank für die Einladung, aber leider kann ich nicht kommen.</td></tr>
 <tr><td class="es-t">Soll ich etwas mitbringen?</td><td class="es-t">Ich bin am Freitag in Hamburg. / Ich muss arbeiten.</td></tr>
 <tr><td class="es-t">Bis Freitag!</td><td class="es-t">Ich wünsche dir eine schöne Party!</td></tr></table>`},
 {t:'dialog',place:'Gartenstraße 8',title:'Na festa da Sarah',scene:'Você chega à festa de aniversário da Sarah com um presente.',lines:[
  {n:'Sarah',es:'Hallo Lucas! Schön, dass du da bist!',de:'Oi, Lucas! Que bom que você veio!'},
  {you:true,opts:[{es:'Hallo Sarah! Herzlichen Glückwunsch zum Geburtstag! Das ist für dich.',ok:true},{es:'Hallo Sarah! Gute Besserung!',ok:false,why:'<i>Gute Besserung</i> se diz para quem está doente.'}]},
  {n:'Sarah',es:'Oh, ein Geschenk! Danke! Was möchtest du trinken?',de:'Ah, um presente! Obrigada! O que você quer beber?'},
  {you:true,opts:[{es:'Ein Wasser, bitte. Ich muss noch Auto fahren.',ok:true},{es:'Ich will Bier! Schnell!',ok:false,why:'Direto demais – soa mal-educado 😉 Use <i>möchte</i> ou <i>gern</i>.'}]},
  {n:'Sarah',es:'Kein Problem. Komm, ich stelle dir meine Freunde vor!',de:'Sem problema. Vem, vou te apresentar meus amigos!'}]},
 {t:'free',task:'Responda ao convite da Sarah (~30 palavras): 1) agradeça, 2) diga que vai (ou não) e por quê, 3) pergunte se deve levar algo / deseje uma boa festa.',hint:'Liebe Sarah, vielen Dank für die Einladung! Ich komme gern / Leider kann ich nicht … Soll ich … mitbringen? Viele Grüße',focus:'Einladung beantworten, können, mitbringen (trennbar), Datum',model:'Liebe Sarah,\nvielen Dank für die Einladung! Ich komme sehr gern. Soll ich etwas mitbringen? Ich kann einen Kuchen backen. Ich freue mich auf Freitag!\nViele Grüße\nLucas'}
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
 {t:'vocab',title:'Meios de transporte',items:[['der Bus','o ônibus'],['die U-Bahn','o metrô'],['die S-Bahn','o trem urbano'],['die Straßenbahn','o bonde'],['der Zug','o trem'],['das Auto','o carro'],['das Fahrrad','a bicicleta'],['das Taxi','o táxi'],['das Flugzeug','o avião'],['zu Fuß','a pé'],['fahren','ir (de veículo)'],['fliegen','voar'],['die Fahrkarte','a passagem / o bilhete'],['das Ticket','o ingresso / a passagem'],['der Fahrplan','o horário (de transporte)'],['abfahren','partir'],['ankommen','chegar'],['einsteigen','embarcar / entrar'],['aussteigen','descer / sair'],['umsteigen','fazer baldeação'],['das Gleis','a plataforma (número)'],['die Verspätung','o atraso']]},
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
 {t:'vocab',title:'Direções',items:[['Wie komme ich zum / zur …?','Como chego ao / à …?'],['links','à esquerda'],['rechts','à direita'],['geradeaus','em frente / reto'],['die erste / zweite Straße','a primeira / segunda rua'],['bis zur Ampel','até o semáforo'],['die Ampel','o semáforo'],['über die Straße','atravessando a rua'],['neben','ao lado de'],['vor','antes / para (horas); em frente a'],['hinter','atrás de'],['zwischen','entre'],['gegenüber','em frente (do outro lado)'],['Entschuldigung, …','Com licença, …']]},
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
 <div class="ex"><span class="es-t">Hier darf man nicht rauchen.</span> = Aqui não se pode fumar.<br><span class="es-t">Sie müssen eine Fahrkarte kaufen.</span> = O senhor tem que comprar uma passagem.</div>
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
situacion:{title:'Conversa com a chefe',npc:'Frau Dr. Hoffmann',scene:'Segunda-feira de manhã. A sua chefe pergunta como foi o fim de semana e combina o trabalho da semana.',role:'Du bist Frau Dr. Hoffmann, Teamleiterin in einer Softwarefirma in Frankfurt, freundlich, aber beschäftigt. Du siezt Lucas. Frag: Wie war Ihr Wochenende? Was haben Sie gemacht? Dann: Haben Sie diese Woche Zeit für ein Meeting? Am Mittwoch um 10 Uhr? Sprich sehr einfaches Deutsch (A1), benutze einfache Perfekt-Formen.',goal:'Conte o que você fez no fim de semana (Perfekt) e combine um horário para a reunião.'},
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
 {t:'free',task:'Escreva um e-mail formal (~30 palavras) para a sua chefe, a Sra. Hoffmann: 1) você não pode ir trabalhar hoje, 2) o motivo, 3) quando você volta / o que acontece com o seu trabalho.',hint:'Sehr geehrte Frau Hoffmann, leider kann ich heute nicht … Ich bin … / Ich muss … Morgen bin ich wieder … Mit freundlichen Grüßen',focus:'formelle E-Mail (Anrede/Gruß, Sie), können, denn, Zeitangaben',model:'Sehr geehrte Frau Hoffmann,\nleider kann ich heute nicht ins Büro kommen, denn ich habe Fieber. Ich gehe heute zum Arzt. Ich hoffe, ich bin am Donnerstag wieder da.\nMit freundlichen Grüßen\nLucas Souza'}
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
 {t:'vocab',title:'Saúde',items:[['krank','doente'],['gesund','saudável'],['das Fieber','a febre'],['der Schnupfen','a coriza (nariz escorrendo)'],['der Husten','a tosse'],['die Erkältung','o resfriado'],['die Schmerzen (Pl.)','as dores'],['der Arzt / die Ärztin','o médico / a médica'],['die Praxis','o consultório'],['der Termin','o compromisso / a consulta (horário marcado)'],['das Wartezimmer','a sala de espera'],['die Versichertenkarte','a carteirinha do plano de saúde'],['das Rezept','a receita'],['das Medikament','o remédio'],['die Tablette','o comprimido'],['die Krankmeldung','o atestado médico'],['Was fehlt Ihnen?','O que o senhor tem?'],['Gute Besserung!','Melhoras!']]},
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
 {t:'mc',q:'Was trägt man im Winter?',opts:['einen Mantel und eine Mütze','ein T-Shirt','einen Rock und keinen Mantel'],a:0},
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
 <tr><td class="es-t">danken</td><td class="es-t">Ich danke <b>dir</b>!</td><td>Eu agradeço a você!</td></tr></table>
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
 {t:'vocab',title:'Viagem',items:[['die Reise','a viagem'],['reisen','viajar'],['der Urlaub','as férias'],['Urlaub machen','tirar férias'],['das Ausland','o exterior'],['im Ausland','no exterior'],['der Ausländer / die Ausländerin','o estrangeiro / a estrangeira'],['fremd','estranho / desconhecido; estrangeiro'],['die Heimat','a terra natal'],['das Gepäck','a bagagem'],['der Koffer','a mala'],['der Pass','o passaporte'],['der Ausweis','a carteira de identidade'],['das Reisebüro','a agência de viagens'],['der Prospekt','o folheto'],['das Meer','o mar'],['der See','o lago'],['die Berge (Pl.)','as montanhas'],['das Dorf','a vila / o povoado'],['die Welt','o mundo'],['mitnehmen','levar (junto)']]},
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
 {t:'vocab',title:'Hotel',items:[['das Hotel','o hotel'],['die Rezeption','a recepção'],['das Einzelzimmer','o quarto de solteiro'],['das Doppelzimmer','o quarto de casal'],['die Nacht, die Nächte','a noite, as noites'],['übernachten','pernoitar'],['die Übernachtung','a diária / o pernoite'],['das Frühstück','o café da manhã'],['die Halbpension','a meia pensão'],['der Schlüssel','a chave'],['frei','livre / disponível'],['besetzt','ocupado'],['die Dusche','o chuveiro'],['reservieren','reservar'],['die Reservierung','a reserva'],['das WLAN','o Wi-Fi'],['der Fernseher','a televisão (aparelho)']]},
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
 {t:'vocab',title:'Passear',items:[['die Sehenswürdigkeit','o ponto turístico'],['besichtigen','visitar (lugar, imóvel)'],['besuchen','visitar (pessoas / lugares)'],['die Führung','a visita guiada; a liderança'],['der Reiseführer','o guia (pessoa ou livro)'],['der Eintritt','a entrada (preço)'],['der Erwachsene','o adulto'],['das Kind, die Kinder','a criança'],['international','internacional'],['kulturell','cultural'],['das Bild','o quadro / a imagem'],['der Hafen','o porto']]},
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
 {t:'read',kind:'Lesen · Teil 1',title:'Um e-mail',text:`Liebe Sandra,
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
 {t:'tr',kind:'Sprechen · Teil 3',de:'Figura: uma caneta 🖊️ – peça a caneta emprestada: (Você me dá a caneta, por favor?)',a:['Kannst du mir bitte den Kuli geben?','Können Sie mir bitte den Kuli geben?','Kannst du mir bitte den Stift geben?','Können Sie mir bitte den Stift geben?','Gib mir bitte den Kuli.','Gib mir bitte den Stift.','Kannst du mir bitte den Kugelschreiber geben?','Können Sie mir bitte den Kugelschreiber geben?','Gib mir bitte den Kugelschreiber.']},
 {t:'tr',kind:'Sprechen · Teil 3',de:'Figura: um café ☕ – peça um café: (Eu queria um café, por favor.)',a:['Ich hätte gern einen Kaffee, bitte.','Ich möchte einen Kaffee, bitte.','Einen Kaffee, bitte.','Ich hätte gern einen Kaffee.']},
 {t:'info',title:'Parabéns! 🎉',html:`<p>Você chegou ao fim do nível <b>A1</b>. Se você acertou cerca de 60 % deste simulado, você está pronto para a prova <b>Goethe-Zertifikat A1</b> (ou <b>telc Deutsch A1</b>, que tem formato parecido).</p>
 <div class="ex">Dica: faça a revisão mista e os vocabulários todos os dias até a prova. Informações e inscrição: no site do Goethe-Institut ou de uma Volkshochschule perto de você.</div>`}
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
situacion:{title:'A nova vizinha',npc:'Frau Becker',scene:'Você acabou de se mudar para um apartamento só seu. Na escada você encontra a vizinha do andar de cima.',role:'Du bist Frau Becker, ca. 60 Jahre, freundliche Nachbarin im 4. Stock in Frankfurt-Bornheim. Du siezt. Begrüß Lucas, frag, wann er eingezogen ist und woher er kommt. Erklär ihm zwei Regeln der Hausordnung (Ruhezeit ab 22 Uhr, Müll trennen: Biomüll, Papier, Gelbe Tonne). Sprich einfaches Deutsch (A2), benutze dass-Sätze.',goal:'Apresente-se, conte quando você se mudou e pergunte sobre as regras da casa (lixo, silêncio).'},
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
 {t:'vocab',title:'Móveis e lugares',items:[['das Regal','a estante'],['der Teppich','o tapete'],['der Spiegel','o espelho'],['der Vorhang','a cortina'],['das Bild','o quadro / a imagem'],['die Wand','a parede'],['die Decke','o teto / o cobertor'],['der Boden','o chão; o solo'],['stellen','colocar (em pé)'],['stehen','estar (em pé)'],['legen','colocar (deitado)'],['liegen','estar (deitado)'],['hängen','pendurar / estar pendurado'],['über','acima de / sobre'],['unter','embaixo de'],['zwischen','entre'],['hinter','atrás de'],['neben','ao lado de']]},
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
ich bin der Neue im 3. Stock! Ich heiße Lucas und komme aus São Paulo. Am Samstag, den 14. Mai, mache ich ab 19 Uhr eine kleine Einweihungsparty und lade Sie herzlich ein. Es gibt brasilianisches Essen und Musik – aber keine Angst, um 22 Uhr machen wir die Musik leise! Bitte sagen Sie mir bis Donnerstag Bescheid, ob Sie kommen.
Viele Grüße
Lucas Souza (Wohnung 5)`,de:`Queridas vizinhas e queridos vizinhos,
sou o novo morador do 3º andar! Meu nome é Lucas e venho de São Paulo. No sábado, 14 de maio, a partir das 19h, vou dar uma pequena festa de inauguração e convido vocês de coração. Vai ter comida brasileira e música – mas não se preocupem, às 22h a gente abaixa a música! Por favor, me avisem até quinta-feira se vêm.
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
  {n:'Frau Hoffmann',es:'Guten Tag! Wir sehen uns ja um zwei zur Besprechung, oder?',de:'Boa tarde! Nos vemos às duas na reunião, certo?'},
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
 {t:'free',task:'Escreva um e-mail (~30–40 palavras) para a sua colega Jana: 1) você não pode ir à reunião de quinta, 2) por quê (weil …), 3) proponha um novo horário e peça uma resposta.',hint:'Liebe Jana, leider kann ich am Donnerstag nicht …, weil … Hättest du am … Zeit? Könntest du mir kurz Bescheid geben? Viele Grüße',focus:'weil-Sätze, Konjunktiv II (Hättest du …? Könntest du …?), Terminvorschlag',model:'Liebe Jana,\nleider kann ich am Donnerstag nicht zur Besprechung kommen, weil ich einen Arzttermin habe. Hättest du am Freitag um zehn Uhr Zeit? Könntest du mir bitte kurz Bescheid geben?\nViele Grüße\nLucas'}
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
 {t:'vocab',title:'Esporte',items:[['joggen','correr (cooper)'],['trainieren','treinar'],['das Training','o treino'],['das Fitnessstudio','a academia'],['der Verein','o clube / a associação'],['die Mannschaft','o time'],['das Spiel','o jogo'],['der Ball','a bola'],['Fußball spielen','jogar futebol'],['Rad fahren','andar de bicicleta'],['der Berg','a montanha'],['fit','em forma'],['die Bewegung','o movimento / a atividade física'],['gesund','saudável'],['ungesund','não saudável'],['das Gewicht','o peso'],['abnehmen','emagrecer; diminuir'],['zunehmen','engordar; aumentar']]},
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
 {t:'tr',de:'Estou ansioso pelo fim de semana. (sich freuen auf)',a:['Ich freue mich auf das Wochenende.','Ich freue mich aufs Wochenende.']},
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
 {t:'read',hideText:true,title:'Ouvir: Anrufbeantworter der Praxis',intro:'Você liga para o consultório do seu médico. Ouça a mensagem.',text:`Guten Tag, hier ist die Praxis Dr. Wolf. Leider rufen Sie außerhalb unserer Sprechstunde an. Unsere Sprechzeiten sind Montag bis Freitag von 8 bis 12 Uhr und Montag, Dienstag und Donnerstag auch von 15 bis 18 Uhr. Mittwochnachmittag und Freitagnachmittag ist die Praxis geschlossen. In dringenden Fällen rufen Sie bitte den ärztlichen Bereitschaftsdienst an: 116 117. Im Notfall wählen Sie die 112.`,de:`Bom dia, aqui é o consultório da Dra. Wolf. Infelizmente o senhor está ligando fora do horário de atendimento. Atendemos de segunda a sexta das 8h às 12h e na segunda, terça e quinta também das 15h às 18h. Na quarta à tarde e na sexta à tarde o consultório fica fechado. Em casos urgentes, ligue para o plantão médico: 116 117. Em emergências, disque 112.`},
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
 {t:'read',hideText:true,title:'Ouvir: Durchsage am Bahnhof',intro:'Você está na estação de Frankfurt e quer pegar o trem para Hamburgo.',text:`Achtung an Gleis 7: Der ICE 576 nach Hamburg, Abfahrt 14:12 Uhr, hat heute etwa 20 Minuten Verspätung. Der Zug fährt heute ausnahmsweise von Gleis 9. Reisende nach Bremen steigen bitte in Hannover in den Intercity um. Wir bitten um Entschuldigung.`,de:`Atenção na plataforma 7: o ICE 576 para Hamburgo, partida 14h12, está hoje com cerca de 20 minutos de atraso. O trem sai hoje excepcionalmente da plataforma 9. Passageiros para Bremen, por favor, façam baldeação em Hannover para o Intercity. Pedimos desculpas.`},
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
 {t:'free',task:'Você comprou um produto pela internet e ele chegou com defeito. Escreva um e-mail curto (~30–40 palavras) para a loja: 1) o que você comprou e quando, 2) qual é o problema, 3) o que você quer (trocar ou o dinheiro de volta).',hint:'Sehr geehrte Damen und Herren, am … habe ich … gekauft. Leider … Ich möchte … umtauschen / Bitte schicken Sie mir … Mit freundlichen Grüßen',focus:'Perfekt, Adjektivendungen, weil, höfliche Bitte',model:'Sehr geehrte Damen und Herren,\nam 3. März habe ich bei Ihnen eine schwarze Regenjacke gekauft. Leider ist der Reißverschluss kaputt. Ich möchte die Jacke gern umtauschen. Könnten Sie mir bitte eine neue Jacke schicken?\nMit freundlichen Grüßen\nLucas Souza'}
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
 <tr><td class="es-t">Guten Rutsch (ins neue Jahr)!</td><td>Boa virada! (antes do réveillon)</td></tr>
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
 {t:'vocab',title:'Cozinha e louça',items:[['das Gericht','o prato (comida); o tribunal'],['die Portion','a porção'],['scharf','apimentado / afiado'],['das Rindfleisch','a carne de boi'],['die Bohne','o feijão'],['die Zitrone','o limão'],['das Eis','o sorvete / o gelo'],['der Teller','o prato (louça)'],['die Gabel','o garfo'],['das Messer','a faca'],['der Löffel','a colher'],['der Topf','a panela'],['die Pfanne','a frigideira'],['das Geschirr','a louça'],['abwaschen','lavar a louça'],['probieren','provar'],['schneiden','cortar'],]},
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
 {t:'free',task:'Escreva um e-mail curto de candidatura (~40 palavras) para o anúncio: 1) para qual vaga você se candidata, 2) sua formação e experiência, 3) a partir de quando você pode começar.',hint:'Sehr geehrte Damen und Herren, ich bewerbe mich für die Stelle als … Ich habe … studiert und … Jahre als … gearbeitet. Ich kann ab … anfangen. Mit freundlichen Grüßen',focus:'Perfekt, Zeitangaben (seit, ab, von … bis), formelle E-Mail',model:'Sehr geehrte Damen und Herren,\nich bewerbe mich für die Stelle als Softwareentwickler. Ich habe in São Paulo Informatik studiert und drei Jahre als Programmierer gearbeitet. Seit 2023 lebe ich in Frankfurt. Ich kann ab dem 1. Mai anfangen.\nMit freundlichen Grüßen\nLucas Souza'}
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
 {t:'vocab',title:'Lazer',items:[['der Zoo','o zoológico'],['der Zirkus','o circo'],['das Pferd','o cavalo'],['der Sportplatz','o campo de esportes'],['der Volleyball','o vôlei'],['der Basketball','o basquete'],['der Ski','o esqui'],['basteln','fazer trabalhos manuais'],['der Wettbewerb','a competição / o concurso; a concorrência']]},
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
 {t:'read',title:'Leitura: Meine neue Kollegin',text:`Seit Montag haben wir eine neue Kollegin im Team: Ewa. Sie ist Mitte zwanzig, hat lange blonde Haare und ein sehr freundliches Gesicht. Ewa kommt aus Polen und spricht fantastisch Deutsch – viel besser als ich! Sie ist klug und sehr fleißig, aber auch lustig: In der Pause erzählt sie die besten Witze. Nur am Morgen ist sie ein bisschen nervös, weil sie noch nicht alle Kollegen kennt. Ich finde sie total sympathisch.`,de:`Desde segunda temos uma colega nova na equipe: a Ewa. Ela tem uns vinte e cinco anos, cabelo loiro comprido e um rosto muito simpático. A Ewa vem da Polônia e fala alemão fantasticamente – muito melhor que eu! Ela é inteligente e muito esforçada, mas também engraçada: no intervalo ela conta as melhores piadas. Só de manhã ela fica um pouco nervosa, porque ainda não conhece todos os colegas. Eu acho ela super simpática.`},
 {t:'mc',q:'Wie sieht Ewa aus?',opts:['Sie hat lange blonde Haare.','Sie hat kurze schwarze Haare.','Sie trägt eine Brille.'],a:0},
 {t:'mc',q:'Warum ist Ewa am Morgen nervös?',opts:['Sie kennt noch nicht alle Kollegen.','Ihr Deutsch ist schlecht.','Sie ist faul.'],a:0},
 {t:'tr',de:'Meu chefe é rígido, mas justo.',a:['Mein Chef ist streng, aber fair.','Meine Chefin ist streng, aber fair.']},
 {t:'speak',es:'Meine beste Freundin ist sehr sympathisch, klug und ehrlich.',de:'Minha melhor amiga é muito simpática, inteligente e honesta.',tip:'Depois de <i>ist</i>: adjetivo <b>sem</b> terminação.'}
]},
{id:'l2',title:'Família e filhos',desc:'der Kindergarten, das Taschengeld, der Haushalt',steps:[
 {t:'vocab',title:'Família e casa',items:[['der Ehepartner / die Ehepartnerin','o cônjuge'],['schwanger','grávida'],['der Babysitter / die Babysitterin','o babá / a babá'],['der Kindergarten','o jardim de infância'],['das Taschengeld','a mesada'],['der Haushalt','as tarefas de casa'],['putzen','limpar / faxinar'],['leihen','emprestar / pegar emprestado'],['streiten','brigar / discutir'],['sich verstehen','dar-se bem'],['erziehen','educar (filhos)'],['zuhören','escutar (com atenção)'],['reden','conversar / falar']]},
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
 {t:'read',title:'Leitura: Früher und heute',text:`Früher habe ich in São Paulo mit meinen Eltern und meinem Bruder gewohnt. Damals hatte ich kein Auto und bin jeden Tag zwei Stunden mit dem Bus zur Uni gefahren. Heute wohne ich allein in Frankfurt und fahre mit dem Fahrrad ins Büro – nur zehn Minuten! Früher war ich ziemlich schüchtern, heute rede ich viel mehr, auch auf Deutsch. Was ich vermisse? Das Essen von meiner Mutter, das Wetter und natürlich meine Freunde.`,de:`Antigamente eu morava em São Paulo com meus pais e meu irmão. Naquela época eu não tinha carro e ia todo dia duas horas de ônibus para a faculdade. Hoje moro sozinho em Frankfurt e vou de bicicleta para o escritório – só dez minutos! Antes eu era bem tímido, hoje falo muito mais, também em alemão. Do que eu sinto falta? Da comida da minha mãe, do clima e, claro, dos meus amigos.`},
 {t:'mc',q:'Wie ist Lucas früher zur Uni gefahren?',opts:['mit dem Bus','mit dem Fahrrad','mit dem Auto'],a:0},
 {t:'mc',q:'Was hat sich bei Lucas geändert?',opts:['Er redet heute mehr.','Er ist heute schüchterner.','Er wohnt heute mit seiner Schwester.'],a:0},
 {t:'free',task:'Escreva um e-mail (~40 palavras) para um amigo antigo do seu país: 1) como era a sua vida antes (damals / früher), 2) como ela é hoje, 3) faça uma pergunta sobre a vida dele.',hint:'Lieber …, wie geht es dir? Früher habe ich …, damals war ich … Heute … Und du? Was machst du …? Viele Grüße',focus:'Perfekt/Präteritum (war, hatte), damals – heute, Fragen',model:'Lieber Rafael,\nwie geht es dir? Früher habe ich bei meinen Eltern gewohnt, damals war ich noch Student. Heute arbeite ich als Programmierer in Frankfurt und habe eine eigene Wohnung. Und du? Spielst du immer noch Fußball?\nViele Grüße\nLucas'}
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
 <tr><td>Schreiben (escrever)</td><td>~30 min</td><td>SMS (20–30 palavras) e e-mail (30–40 palavras), cada um com 3 pontos</td></tr>
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
 <p><b>Teil 2:</b> um e-mail mais formal, por exemplo para o professor ou o chefe (<b>30–40 palavras</b>), também com <b>3 pontos</b>.</p>
 <div class="ex">Conta: responder a <b>todos</b> os pontos, saudação e despedida adequadas, frases ligadas (und, aber, weil, dass, deshalb …).</div>`},
 {t:'free',kind:'Schreiben · Teil 1',task:'Você está no ônibus e vai chegar atrasado ao encontro com a sua amiga Lea no cinema. Escreva uma SMS (20–30 palavras): 1) peça desculpas e diga por que vai se atrasar, 2) diga quando você chega, 3) peça que ela já compre os ingressos.',hint:'Hallo Lea, sorry, ich komme … später, weil … Ich bin um … da. Kannst du schon …? Bis gleich!',focus:'weil, Uhrzeit, Bitte mit können, alle 3 Punkte',model:'Hallo Lea,\nsorry, ich komme zwanzig Minuten später, weil der Bus Verspätung hat. Ich bin um Viertel nach acht da. Kannst du schon die Karten kaufen? Ich bezahle dich dann.\nBis gleich!\nLucas'},
 {t:'free',kind:'Schreiben · Teil 2',task:'O seu professor de alemão, o Sr. Yilmaz, organiza uma excursão do curso para Heidelberg no sábado. Escreva para ele (30–40 palavras): 1) agradeça pela organização, 2) diga que você não pode ir e por quê, 3) pergunte o que você precisa estudar para a próxima aula.',hint:'Lieber Herr Yilmaz, vielen Dank für … Leider kann ich am Samstag nicht mitkommen, weil … Könnten Sie mir sagen, was … ? Viele Grüße',focus:'halbformelle E-Mail, weil, indirekte Frage (was/ob …), Konjunktiv II höflich',model:'Lieber Herr Yilmaz,\nvielen Dank, dass Sie den Ausflug nach Heidelberg organisieren! Leider kann ich am Samstag nicht mitkommen, weil mein Bruder aus Brasilien zu Besuch ist. Könnten Sie mir sagen, was ich für die nächste Stunde lernen soll?\nViele Grüße\nLucas Souza'},
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
 <div class="ex">Com o A2 você se vira no dia a dia na Alemanha. Próximo passo: <b>B1</b> – o nível que muitas empresas e a residência permanente pedem.</div>`}
]}],
resumen:`<h3>Formato da prova A2</h3><table><tr><td>Lesen</td><td>~30 min · artigo, painel de informações, e-mail, anúncios</td></tr><tr><td>Hören</td><td>~30 min · rádio/avisos, conversa, telefone, entrevista (ja/nein)</td></tr><tr><td>Schreiben</td><td>~30 min · SMS (20–30 palavras) + e-mail (30–40 palavras), 3 pontos cada</td></tr><tr><td>Sprechen</td><td>~15 min · perguntas pessoais, contar sobre um tema, planejar juntos</td></tr></table>
<h3>Planejar juntos</h3><p class="es-t">Geht es bei dir um …? · Wie wäre es um …? · Um … kann ich leider nicht, da … · Das passt mir gut. · Einverstanden! · Treffen wir uns um … vor …</p>`});
;
/* Deutschkurs B1 (Erklärungen auf Portugiesisch) – Kapitel 25–36.
   Orientierung (nur Themen/Wortschatz/Grammatik-Inventar, keine Texte übernommen): Goethe-Zertifikat B1 – Wortliste und Prüfungsziele.
   Kurs-Person: Lucas Souza aus São Paulo, lebt seit zwei Jahren in Frankfurt, Softwareentwickler (Kollegin Jana, Chefin Frau Dr. Hoffmann). */

/* ================= KAPITEL 25 · ERINNERUNGEN ================= */
LANGS.de.course.units.push({id:'k25',n:'25',level:'B1',title:'Erinnerungen',sub:'Infância e família · Präteritum (contar no passado) · als / wenn / wann · hábitos e tradições',
goals:['Über die Kindheit und die Familie erzählen','Präteritum: regelmäßige und unregelmäßige Verben (ging, kam, sah …)','als – wenn – wann richtig unterscheiden','Gewohnheiten und Traditionen beschreiben','Einen Forumsbeitrag über eine Erinnerung schreiben'],
situacion:{title:'Lembranças de infância',npc:'Frau Becker',scene:'A sua vizinha, a Sra. Becker, convida você para um café e mostra fotos antigas da família dela.',role:'Du bist Frau Becker, ca. 65 Jahre, Nachbarin von Lucas in Frankfurt, warmherzig und gesprächig. Du siezt. Erzähl von deiner Kindheit in einem Dorf in Hessen (Präteritum: Wir hatten kein Auto, wir gingen zu Fuß zur Schule …) und frag Lucas nach seiner Kindheit in Brasilien: Wo haben Sie gewohnt? Was haben Sie gespielt? Welche Traditionen gab es? Benutze als und wenn. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Conte da sua infância (onde morava, o que fazia, uma tradição) usando Präteritum e als/wenn.'},
placement:[
 {t:'mc',q:'Als Kind ___ ich jeden Tag mit dem Fahrrad zur Schule.',opts:['fuhr','fahrte','fährt'],a:0},
 {t:'mc',q:'___ ich zehn Jahre alt war, zogen wir nach Rio.',opts:['Als','Wenn','Wann'],a:0},
 {t:'mc',q:'___ wir Oma besuchten, gab es immer Kuchen.',opts:['Wenn','Als','Wann'],a:0},
 {t:'gap',q:'Gestern ___ ich einen alten Freund. (treffen – Präteritum)',a:['traf']},
 {t:'mc',q:'„o neto“',opts:['der Enkel','der Neffe','der Onkel'],a:0},
 {t:'gap',q:'Früher ___ wir kein Internet. (haben – Präteritum)',a:['hatten']}],
lessons:[
{id:'l1',title:'Infância e família',desc:'die Kindheit, der Enkel, die Generation …',steps:[
 {t:'vocab',title:'Família e gerações',items:[['die Kindheit','a infância'],['die Jugend','a juventude'],['die Generation','a geração'],['der Enkel / die Enkelin','o neto / a neta'],['der Onkel','o tio'],['der Neffe','o sobrinho'],['die Nichte','a sobrinha'],['der Cousin / die Cousine','o primo / a prima'],['der / die Angehörige','o parente / a parente'],['die Ehe','o casamento (instituição)'],['die Trennung','a separação'],['der Abschied','a despedida'],['die Rückkehr','a volta'],['umarmen','abraçar'],['treu','fiel'],['sterben','morrer'],['aufwachsen','crescer, ser criado'],['die Erziehung','a educação (dos filhos)']]},
 {t:'vocab',title:'Lembranças e hábitos',items:[['das Erlebnis','a experiência (vivência)'],['das Ereignis','o acontecimento'],['die Erzählung','o relato, o conto'],['das Märchen','o conto de fadas'],['die Gewohnheit','o hábito'],['gewöhnlich','normalmente; comum'],['sich gewöhnen an','acostumar-se com'],['die Tradition','a tradição'],['traditionell','tradicional'],['ursprünglich','originalmente'],['anfangs','no começo'],['mittlerweile','enquanto isso; hoje em dia'],['seitdem','desde então'],['kürzlich','recentemente'],['der Alltag','o dia a dia'],['alltäglich','cotidiano']]},
 {t:'mc',q:'Lucas ist in São Paulo ___. Dort hat er seine Kindheit verbracht.',opts:['aufgewachsen','erzogen','gestorben'],a:0},
 {t:'mc',q:'Am Anfang war das Wetter für mich schwierig, aber ich habe mich daran ___.',opts:['gewöhnt','erinnert','getrennt'],a:0},
 {t:'gap',q:'Der Sohn meiner Schwester ist mein ___. (sobrinho)',a:['Neffe']},
 {t:'match',q:'Ligue.',pairs:[['die Kindheit','a infância'],['der Enkel','o neto'],['die Gewohnheit','o hábito'],['der Abschied','a despedida'],['ursprünglich','originalmente']]},
 {t:'tr',de:'Desde então eu moro em Frankfurt.',a:['Seitdem wohne ich in Frankfurt.']},
 {t:'speak',es:'Ich bin in São Paulo aufgewachsen. In meiner Kindheit habe ich viel Zeit bei meinen Großeltern verbracht.',de:'Cresci em São Paulo. Na minha infância passei muito tempo na casa dos meus avós.',tip:'<i>aufwachsen</i> → Perfekt com <b>sein</b>: <i>ich bin aufgewachsen</i>.'}
]},
{id:'l2',title:'Contar no passado: Präteritum',desc:'ging, kam, sah, machte …',steps:[
 {t:'info',title:'O Präteritum',html:`<p>Para <b>contar</b> histórias por escrito (livros, notícias, relatos), o alemão usa o <b>Präteritum</b>. Na conversa, normalmente o Perfekt.</p>
 <table><tr><th>regular: -te</th><th>irregular: muda a vogal</th></tr>
 <tr><td class="es-t">machen → ich mach<b>te</b>, wir mach<b>ten</b></td><td class="es-t">gehen → ich <b>ging</b>, wir <b>gingen</b></td></tr>
 <tr><td class="es-t">wohnen → ich wohn<b>te</b></td><td class="es-t">kommen → ich <b>kam</b></td></tr>
 <tr><td class="es-t">arbeiten → ich arbeit<b>ete</b></td><td class="es-t">sehen → ich <b>sah</b> · fahren → ich <b>fuhr</b></td></tr>
 <tr><td class="es-t">spielen → ich spiel<b>te</b></td><td class="es-t">geben → es <b>gab</b> · nehmen → ich <b>nahm</b></td></tr>
 <tr><td class="es-t">denken → ich <b>dachte</b> (misto)</td><td class="es-t">finden → ich <b>fand</b> · bleiben → ich <b>blieb</b></td></tr>
 <tr><td class="es-t">wissen → ich <b>wusste</b> (misto)</td><td class="es-t">schreiben → ich <b>schrieb</b> · sprechen → ich <b>sprach</b></td></tr></table>
 <div class="ex">Terminações: <span class="es-t">ich ging · du gingst · er ging · wir gingen · ihr gingt · sie gingen</span> – <b>ich</b> e <b>er</b> são iguais!</div>`},
 {t:'mc',q:'Früher ___ wir in einem kleinen Haus am Stadtrand.',opts:['wohnten','wohnen','gewohnt'],a:0},
 {t:'mc',q:'Plötzlich ___ ein Mann ins Zimmer.',opts:['kam','kommte','kamte'],a:0},
 {t:'gap',q:'Als Kind ___ ich oft bei meiner Oma. (sein – Präteritum)',a:['war']},
 {t:'gap',q:'Mein Opa ___ jeden Abend eine Geschichte. (erzählen)',a:['erzählte']},
 {t:'gap',q:'Wir ___ den ganzen Tag am Strand. (bleiben)',a:['blieben']},
 {t:'gap',q:'Ich ___ nicht, dass du Geburtstag hast. (wissen)',a:['wusste']},
 {t:'gap',q:'Sie ___ einen Brief an ihre Familie. (schreiben)',a:['schrieb']},
 {t:'order',es:'Nach dem Essen gingen wir im Park spazieren',de:'Depois do almoço fomos passear no parque.'},
 {t:'tr',de:'Ontem eu encontrei uma amiga antiga. (Präteritum)',a:['Gestern traf ich eine alte Freundin.','Ich traf gestern eine alte Freundin.']}
]},
{id:'l3',title:'als, wenn ou wann?',desc:'als (uma vez) · wenn (sempre que) · wann (pergunta)',steps:[
 {t:'info',title:'als – wenn – wann',html:`<table><tr><td class="es-t"><b>als</b></td><td>quando (uma vez só, no passado)</td><td class="es-t">Als ich nach Deutschland kam, sprach ich kaum Deutsch.</td></tr>
 <tr><td class="es-t"><b>wenn</b></td><td>quando (sempre que / no presente e futuro)</td><td class="es-t">Wenn wir Oma besuchten, gab es immer Kuchen.</td></tr>
 <tr><td class="es-t"><b>wann</b></td><td>quando? (pergunta)</td><td class="es-t">Wann bist du nach Deutschland gekommen?</td></tr></table>
 <div class="ojo">Passado, uma vez → <b>als</b>. Passado, várias vezes → <b>(immer) wenn</b>. Em <i>als</i> e <i>wenn</i>, o verbo vai para o final.</div>`},
 {t:'mc',q:'___ ich Kind war, wollte ich Astronaut werden.',opts:['Als','Wenn','Wann'],a:0},
 {t:'mc',q:'Immer ___ es regnete, spielten wir drinnen.',opts:['wenn','als','wann'],a:0},
 {t:'mc',q:'Weißt du, ___ der Zug kommt?',opts:['wann','als','wenn'],a:0},
 {t:'gap',q:'___ ich zum ersten Mal Schnee sah, war ich zwanzig.',a:['Als']},
 {t:'gap',q:'___ ich morgen Zeit habe, rufe ich dich an.',a:['Wenn']},
 {t:'read',title:'Leitura: Die Kekse meiner Oma',text:`Als ich klein war, verbrachte ich jeden Sommer bei meiner Oma in Minas Gerais. Sie wohnte in einem alten Haus mit einem großen Garten. Wenn ich morgens aufwachte, roch es schon nach Kaffee und frischem Brot. Meine Oma stand immer um fünf Uhr auf, weil sie die Hühner füttern musste.

Am schönsten waren die Abende. Wenn es dunkel wurde, saßen wir auf der Veranda, und sie erzählte Geschichten aus ihrer Jugend. Als ich zwölf war, zeigte sie mir ihr Rezept für Kekse. Seitdem backe ich sie jedes Jahr zu Weihnachten – auch hier in Frankfurt. Meine deutschen Kollegen finden sie fantastisch!`,de:`Quando eu era pequeno, passava todo verão na casa da minha avó em Minas Gerais. Ela morava numa casa antiga com um quintal grande. Quando eu acordava de manhã, já tinha cheiro de café e pão fresco. Minha avó sempre levantava às cinco, porque tinha que dar comida às galinhas.\n\nO mais bonito eram as noites. Quando escurecia, a gente sentava na varanda e ela contava histórias da juventude dela. Quando eu tinha doze anos, ela me mostrou a receita de biscoitos dela. Desde então eu faço esses biscoitos todo ano no Natal – aqui em Frankfurt também. Meus colegas alemães adoram!`},
 {t:'mc',q:'Warum stand die Oma so früh auf?',opts:['Sie musste die Hühner füttern.','Sie musste zur Arbeit.','Sie backte Kekse.'],a:0},
 {t:'mc',q:'Was passierte, als Lucas zwölf war?',opts:['Die Oma zeigte ihm ein Rezept.','Er zog nach Frankfurt.','Die Oma kaufte Hühner.'],a:0},
 {t:'tr',de:'Quando cheguei à Alemanha, eu quase não falava alemão.',a:['Als ich nach Deutschland kam, sprach ich kaum Deutsch.','Als ich nach Deutschland gekommen bin, habe ich kaum Deutsch gesprochen.']}
]},
{id:'l4',title:'Escrever: uma lembrança',desc:'Forumsbeitrag (ca. 80 Wörter)',steps:[
 {t:'read',title:'Leitura: Forum „Mein schönstes Ferienerlebnis“',text:`Nina_88: Als ich fünfzehn war, fuhr ich mit meiner Klasse nach Paris. Ich hatte vorher noch nie das Meer oder eine so große Stadt gesehen. Wir übernachteten in einer einfachen Jugendherberge, aber das war uns egal. Am letzten Abend gingen wir auf den Eiffelturm. Die Lichter der Stadt waren unglaublich! Seitdem reise ich sehr gern. Mittlerweile war ich in zwölf Ländern – aber an Paris denke ich immer noch am liebsten.`,de:`Nina_88: Quando eu tinha quinze anos, fui com a minha turma para Paris. Eu nunca tinha visto o mar nem uma cidade tão grande. Dormimos num albergue simples, mas não ligamos. Na última noite subimos na Torre Eiffel. As luzes da cidade eram inacreditáveis! Desde então eu adoro viajar. Hoje já estive em doze países – mas Paris ainda é o lugar em que eu mais gosto de pensar.`},
 {t:'mc',q:'Wie alt war Nina bei der Reise?',opts:['fünfzehn','zwölf','achtundachtzig'],a:0},
 {t:'mc',q:'Was hat sich seit der Reise geändert?',opts:['Sie reist sehr gern.','Sie wohnt in Paris.','Sie arbeitet in einer Jugendherberge.'],a:0},
 {t:'free',task:'Escreva um post para o fórum „Eine Erinnerung, die ich nie vergesse“ (~80 palavras): 1) quando e onde aconteceu, 2) o que aconteceu (Präteritum), 3) por que é importante para você hoje.',hint:'Als ich … war, … Damals wohnte ich … Eines Tages … Wenn ich heute daran denke, … Seitdem …',focus:'Präteritum, als/wenn, seitdem, zusammenhängend erzählen',model:'Als ich acht Jahre alt war, verbrachte ich die Ferien bei meinen Großeltern am Meer. Eines Tages gingen mein Opa und ich sehr früh fischen. Wir saßen stundenlang im Boot und fingen nichts, aber er erzählte mir Geschichten aus seiner Jugend. Am Ende fing ich einen kleinen Fisch, und wir lachten beide. Mein Opa ist leider letztes Jahr gestorben. Wenn ich heute ans Meer denke, denke ich immer an diesen Morgen.'}
]}],
resumen:`<h3>Präteritum</h3><table><tr><td>regular</td><td class="es-t">machte · wohnte · arbeitete · spielte · erzählte</td></tr><tr><td>irregular</td><td class="es-t">ging · kam · sah · fuhr · gab · nahm · fand · blieb · schrieb · sprach · traf · saß · stand</td></tr><tr><td>misto</td><td class="es-t">dachte · wusste · brachte · kannte</td></tr></table>
<h3>als – wenn – wann</h3><p class="es-t">Als ich Kind war, … (uma vez) · Wenn wir Oma besuchten, … (sempre que) · Wann kommst du? (pergunta)</p>
<h3>Tempo</h3><p class="es-t">anfangs · damals · seitdem · mittlerweile · kürzlich · ursprünglich</p>`});

/* ================= KAPITEL 26 · ARBEITSWELT ================= */
LANGS.de.course.units.push({id:'k26',n:'26',level:'B1',title:'Arbeitswelt',sub:'Empresa e direitos · Passiv (é feito / foi feito) · genitivo · reuniões e conflitos',
goals:['Über Arbeitsbedingungen sprechen: Teilzeit, Überstunden, Lohn','Rechte im Betrieb: Betriebsrat, Gewerkschaft, Kündigung','Passiv Präsens und Präteritum: Das Produkt wird hergestellt.','Genitiv: die Idee des Chefs, das Büro der Firma','In einer Besprechung einen Kompromiss finden'],
situacion:{title:'Pedir mudança de jornada',npc:'Frau Dr. Hoffmann',scene:'Você quer trabalhar só quatro dias por semana para fazer um curso de especialização. Você conversa com a sua chefe.',role:'Du bist Frau Dr. Hoffmann, Teamleiterin einer Softwarefirma in Frankfurt, freundlich, aber sachlich. Du siezt Lucas in diesem formellen Gespräch. Er möchte auf vier Tage Teilzeit gehen, um eine Weiterbildung zu machen. Frag nach Gründen und Zeitraum, sprich über Projekte und Lohn (weniger Gehalt), schlag einen Kompromiss vor (z. B. sechs Monate testen). Benutze Passiv (Das muss besprochen werden) und Genitiv. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Explique o pedido, dê motivos, reaja às objeções e cheguem a um acordo.'},
placement:[
 {t:'mc',q:'In dieser Fabrik ___ Autos ___.',opts:['werden … hergestellt','sind … herstellen','haben … hergestellt'],a:0},
 {t:'mc',q:'Das Büro wurde gestern ___.',opts:['renoviert','renovieren','renovierte'],a:0},
 {t:'mc',q:'Das ist das Auto ___ Chefin.',opts:['der','die','dem'],a:0},
 {t:'gap',q:'Ich arbeite nur ___: von 8 bis 13 Uhr. (meio período)',a:['halbtags|Teilzeit']},
 {t:'mc',q:'„o sindicato“',opts:['die Gewerkschaft','der Betriebsrat','die Verwaltung'],a:0},
 {t:'gap',q:'Der Brief ___ gestern abgeschickt. (werden – Präteritum)',a:['wurde']}],
lessons:[
{id:'l1',title:'Condições de trabalho',desc:'Teilzeit, Überstunden, Lohn, Betriebsrat',steps:[
 {t:'vocab',title:'Trabalho e direitos',items:[['der Betrieb','a empresa, o estabelecimento'],['der Betriebsrat','a comissão de funcionários'],['die Gewerkschaft','o sindicato'],['der Streik','a greve'],['streiken','fazer greve'],['die Teilzeit','o meio período'],['halbtags','em meio período'],['die Überstunde','a hora extra'],['berufstätig','que trabalha (empregado)'],['die Tätigkeit','a atividade'],['der Lohn','o salário (por hora/mês)'],['das Einkommen','a renda'],['die Leistung','o desempenho; a prestação'],['die Kündigung','a demissão; o aviso prévio'],['kündigen','pedir demissão; demitir'],['die Arbeitslosigkeit','o desemprego'],['die Arbeitserlaubnis','a autorização de trabalho'],['der / die Angestellte','o funcionário / a funcionária'],['der Arbeiter / die Arbeiterin','o operário / a operária'],['zuständig','responsável (por algo)'],['die Verwaltung','a administração'],['die Fortbildung','a capacitação'],['die Weiterbildung','a especialização, a formação continuada'],['die Qualifikation','a qualificação']]},
 {t:'mc',q:'Lucas hat diese Woche zehn ___ gemacht. Er ist sehr müde.',opts:['Überstunden','Teilzeiten','Leistungen'],a:0},
 {t:'mc',q:'Wer ist für die Urlaubsplanung ___? – Frau Klein aus der Personalabteilung.',opts:['zuständig','berufstätig','halbtags'],a:0},
 {t:'gap',q:'Die Lokführer ___ morgen. Es fahren keine Züge. (fazer greve)',a:['streiken']},
 {t:'match',q:'Ligue.',pairs:[['die Gewerkschaft','o sindicato'],['die Kündigung','a demissão'],['das Einkommen','a renda'],['die Teilzeit','o meio período'],['die Weiterbildung','a especialização']]},
 {t:'read',title:'Leitura: Vier-Tage-Woche bei DataSoft',text:`Seit Januar arbeiten die 120 Angestellten der Frankfurter Firma DataSoft nur noch vier Tage pro Woche – bei gleichem Lohn. Die Idee kam vom Betriebsrat. „Viele Kollegen hatten zu viele Überstunden und waren erschöpft“, erklärt die Betriebsrätin Sandra Weiß. Nach sechs Monaten sind die Ergebnisse gut: Die Leistung ist nicht schlechter geworden, und es gibt weniger Krankheitstage. Nur die Kunden waren am Anfang skeptisch, weil das Büro freitags geschlossen ist. Die Gewerkschaft möchte das Modell jetzt auch in anderen Betrieben testen.`,de:`Desde janeiro os 120 funcionários da empresa DataSoft, de Frankfurt, trabalham só quatro dias por semana – com o mesmo salário. A ideia veio da comissão de funcionários. „Muitos colegas faziam horas extras demais e estavam esgotados“, explica a representante Sandra Weiß. Depois de seis meses os resultados são bons: o desempenho não piorou e há menos dias de licença médica. Só os clientes ficaram desconfiados no começo, porque o escritório fecha às sextas. O sindicato quer agora testar o modelo também em outras empresas.`},
 {t:'mc',q:'Von wem kam die Idee der Vier-Tage-Woche?',opts:['vom Betriebsrat','von den Kunden','von der Gewerkschaft'],a:0},
 {t:'mc',q:'Was hat sich verbessert?',opts:['Es gibt weniger Krankheitstage.','Der Lohn ist höher.','Das Büro ist freitags offen.'],a:0},
 {t:'tr',de:'Eu gostaria de trabalhar meio período.',a:['Ich möchte gern Teilzeit arbeiten.','Ich würde gern Teilzeit arbeiten.','Ich möchte halbtags arbeiten.','Ich würde gern halbtags arbeiten.']}
]},
{id:'l2',title:'Passiv: é feito',desc:'wird gemacht · wurde gemacht',steps:[
 {t:'info',title:'A voz passiva (Passiv)',html:`<p>No Passiv o importante é <b>a ação</b>, não quem faz: <b>werden</b> + particípio (no final).</p>
 <table><tr><th>ativo</th><th>passivo</th></tr>
 <tr><td class="es-t">Die Firma stellt Software her.</td><td class="es-t">Software <b>wird</b> (von der Firma) <b>hergestellt</b>.</td></tr>
 <tr><td class="es-t">Man repariert die Heizung.</td><td class="es-t">Die Heizung <b>wird repariert</b>.</td></tr>
 <tr><td class="es-t">Man baute das Haus 1905.</td><td class="es-t">Das Haus <b>wurde</b> 1905 <b>gebaut</b>. (passado)</td></tr></table>
 <div class="ex">Presente: <span class="es-t">ich werde, du wirst, er wird, wir werden …</span> · Präteritum: <span class="es-t">ich wurde, du wurdest, er wurde, wir wurden …</span></div>
 <div class="ojo">Quem faz a ação: <b>von</b> + dativo (<span class="es-t">von der Chefin</span>) – muitas vezes nem se diz.</div>`},
 {t:'mc',q:'In unserer Firma ___ jeden Montag eine Besprechung gemacht.',opts:['wird','werden','wurde gemacht'],a:0},
 {t:'mc',q:'Die Kollegen ___ zu einer Schulung eingeladen.',opts:['werden','wird','sind'],a:0},
 {t:'gap',q:'Das Problem ___ gestern gelöst. (werden – Präteritum)',a:['wurde']},
 {t:'gap',q:'Die neuen Computer werden morgen ___. (liefern)',a:['geliefert']},
 {t:'gap',q:'Die Fabrik wurde 1950 ___. (bauen)',a:['gebaut']},
 {t:'order',es:'Die Bewerbungen werden von der Personalabteilung geprüft',de:'As candidaturas são analisadas pelo departamento de pessoal.'},
 {t:'tr',de:'O escritório é limpo toda noite.',a:['Das Büro wird jeden Abend geputzt.','Das Büro wird jeden Abend gereinigt.']},
 {t:'tr',de:'O contrato foi assinado ontem.',a:['Der Vertrag wurde gestern unterschrieben.']}
]},
{id:'l3',title:'Genitivo e reuniões',desc:'des Chefs, der Firma · einen Kompromiss finden',steps:[
 {t:'info',title:'O genitivo',html:`<p>O genitivo mostra <b>de quem</b> é algo (= „de“ em português):</p>
 <table><tr><td>masc./neutro</td><td class="es-t">der Chef → das Büro <b>des</b> Chef<b>s</b> · das Projekt → das Ende <b>des</b> Projekt<b>s</b></td></tr>
 <tr><td>fem.</td><td class="es-t">die Firma → der Name <b>der</b> Firma</td></tr>
 <tr><td>plural</td><td class="es-t">die Kollegen → die Meinung <b>der</b> Kollegen</td></tr></table>
 <div class="ex">Na fala usa-se muito <b>von</b> + dativo: <span class="es-t">das Büro vom Chef</span>. Por escrito, o genitivo é mais elegante. Nomes próprios: <span class="es-t">Janas Idee</span>.</div>`},
 {t:'vocab',title:'Reuniões',items:[['die Konferenz','a conferência'],['präsentieren','apresentar'],['der Kompromiss','o meio-termo, o acordo'],['der Konflikt','o conflito'],['die Konkurrenz','a concorrência'],['die Zusammenarbeit','a colaboração'],['der Experte / die Expertin','o / a especialista'],['die Fabrik','a fábrica'],['herstellen','fabricar, produzir'],['der Hersteller','o fabricante'],['produzieren','produzir'],['die Produktion','a produção'],['das Material','o material']]},
 {t:'mc',q:'Das ist der Vorschlag ___ Teamleiterin.',opts:['der','des','die'],a:0},
 {t:'mc',q:'Am Ende ___ Projekts gibt es eine Feier.',opts:['des','der','dem'],a:0},
 {t:'gap',q:'Die Meinung ___ Kunden ist uns wichtig. (die Kunden – plural)',a:['der']},
 {t:'dialog',place:'Besprechung',title:'Encontrar um meio-termo',scene:'O seu colega Max quer adiar o projeto; você acha que o cliente não vai aceitar.',lines:[
  {n:'Max',es:'Ehrlich gesagt schaffen wir den Termin nicht. Wir sollten das Projekt um einen Monat verschieben.',de:'Sinceramente, não vamos conseguir o prazo. Devíamos adiar o projeto em um mês.'},
  {you:true,opts:[{es:'Ich verstehe deinen Punkt, aber der Kunde wird das kaum akzeptieren. Was hältst du von einem Kompromiss?',ok:true},{es:'Nein, das geht nicht.',ok:false,why:'No B1, espera-se argumentar: mostrar compreensão e propor algo.'}]},
  {n:'Max',es:'Und wie soll der aussehen?',de:'E como seria?'},
  {you:true,opts:[{es:'Wir liefern den wichtigsten Teil pünktlich, und der Rest wird zwei Wochen später geliefert.',ok:true},{es:'Wir liefern den wichtigsten Teil pünktlich, und den Rest wird zwei Wochen später geliefert.',ok:false,why:'No Passiv, „der Rest“ é sujeito → nominativo: <i>der Rest wird … geliefert</i>.'}]},
  {n:'Max',es:'Das könnte klappen. Fragen wir die Chefin.',de:'Isso pode dar certo. Vamos perguntar à chefe.'},
  {you:true,opts:[{es:'Gute Idee. Ich schreibe ihr gleich eine E-Mail mit unserem Vorschlag.',ok:true},{es:'Gute Idee. Die Chefin wird gefragt worden.',ok:false,why:'Forma errada – simplesmente: <i>Ich schreibe ihr gleich.</i>'}]}]},
 {t:'tr',de:'A ideia da minha colega é boa.',a:['Die Idee meiner Kollegin ist gut.']}
]},
{id:'l4',title:'Escrever: e-mail formal',desc:'Bitte um Fortbildung',steps:[
 {t:'read',title:'Leitura: Aushang im Betrieb',text:`Liebe Kolleginnen und Kollegen,
auch in diesem Jahr werden Fortbildungen von der Firma bezahlt. Angeboten werden Sprachkurse (Englisch und Deutsch), Kurse zum Projektmanagement und eine Schulung zur Datensicherheit. Die Kurse finden während der Arbeitszeit statt. Anmeldungen werden bis zum 15. März von der Personalabteilung angenommen. Bitte sprechen Sie vorher mit Ihrer Teamleitung.
Ihre Personalabteilung`,de:`Queridas colegas e queridos colegas,
também este ano as capacitações são pagas pela empresa. São oferecidos cursos de idiomas (inglês e alemão), cursos de gestão de projetos e um treinamento de segurança de dados. Os cursos acontecem durante o horário de trabalho. As inscrições são aceitas pelo departamento de pessoal até 15 de março. Por favor, fale antes com a sua liderança.
Departamento de pessoal`},
 {t:'mc',q:'Wer bezahlt die Fortbildungen?',opts:['die Firma','die Mitarbeiter','die Gewerkschaft'],a:0},
 {t:'mc',q:'Was muss man vor der Anmeldung machen?',opts:['mit der Teamleitung sprechen','einen Test machen','den Kurs bezahlen'],a:0},
 {t:'free',task:'Escreva um e-mail formal (~80 palavras) para a Dra. Hoffmann: 1) você quer fazer o curso de gestão de projetos, 2) explique por que ele é útil para o seu trabalho, 3) pergunte como o seu trabalho será organizado durante o curso.',hint:'Sehr geehrte Frau Dr. Hoffmann, ich möchte mich für … anmelden. Der Kurs wäre für mich nützlich, weil … Könnten Sie mir sagen, wie … organisiert wird? Mit freundlichen Grüßen',focus:'formelle E-Mail, weil, Passiv, indirekte Frage',model:'Sehr geehrte Frau Dr. Hoffmann,\nich möchte mich gern für den Kurs zum Projektmanagement anmelden, der im April angeboten wird. Der Kurs wäre für meine Arbeit sehr nützlich, weil ich ab Sommer das Projekt mit dem neuen Kunden leiten soll. Der Kurs findet dienstags und donnerstags vormittags statt. Könnten Sie mir sagen, wie meine Aufgaben in dieser Zeit organisiert werden? Vielleicht könnte Jana einen Teil übernehmen.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Passiv (werden + particípio)</h3><table><tr><td>presente</td><td class="es-t">Die Heizung wird repariert.</td></tr><tr><td>Präteritum</td><td class="es-t">Das Haus wurde 1905 gebaut.</td></tr><tr><td>quem faz</td><td class="es-t">von + dativo: von der Chefin</td></tr></table>
<h3>Genitivo</h3><p class="es-t">das Büro des Chefs · der Name der Firma · die Meinung der Kollegen · Janas Idee</p>
<h3>Trabalho</h3><p class="es-t">die Teilzeit · die Überstunde · der Lohn · der Betriebsrat · die Gewerkschaft · die Kündigung · die Weiterbildung</p>`});

/* ================= KAPITEL 27 · WOHNEN & ZUSAMMENLEBEN ================= */
LANGS.de.course.units.push({id:'k27',n:'27',level:'B1',title:'Wohnen & Zusammenleben',sub:'Casa, aparelhos e consertos · orações relativas (der, die, das …) · convivência e consideração',
goals:['Wohnung einrichten, Geräte bedienen, Störungen melden','Relativsätze: der Mann, der …; die Wohnung, die …; das Gerät, mit dem …','Rücksicht und Lärm: Konflikte im Haus lösen','Eine Anleitung verstehen','Eine Beschwerde schriftlich formulieren'],
situacion:{title:'Conflito com o vizinho',npc:'Herr Wagner',scene:'O vizinho de cima instalou um ar-condicionado que faz muito barulho à noite, bem em cima do seu quarto.',role:'Du bist Herr Wagner, Nachbar von Lucas im 4. Stock in Frankfurt, zuerst etwas genervt, dann kompromissbereit. Du siezt. Du hast eine Klimaanlage installiert, weil es im Sommer unter dem Dach sehr heiß ist. Verteidige dich, aber lass dich auf einen Kompromiss ein (nachts ausschalten oder ein leiseres Gerät). Benutze Relativsätze. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Explique o problema com educação, entenda o lado dele e proponha uma solução.'},
placement:[
 {t:'mc',q:'Das ist der Nachbar, ___ im vierten Stock wohnt.',opts:['der','den','dem'],a:0},
 {t:'mc',q:'Die Lampe, ___ ich gestern gekauft habe, ist kaputt.',opts:['die','der','das'],a:0},
 {t:'mc',q:'Das ist die Freundin, mit ___ ich in den Urlaub fahre.',opts:['der','die','dem'],a:0},
 {t:'gap',q:'Der Mann, ___ ich geholfen habe, war sehr dankbar. (helfen + dativo)',a:['dem']},
 {t:'mc',q:'„a tomada“',opts:['die Steckdose','der Stecker','das Kabel'],a:0},
 {t:'mc',q:'Bitte nehmen Sie ___ auf die Nachbarn!',opts:['Rücksicht','Ruhe','Lärm'],a:0}],
lessons:[
{id:'l1',title:'Casa e aparelhos',desc:'einrichten, die Steckdose, die Anleitung …',steps:[
 {t:'vocab',title:'Casa e aparelhos',items:[['einrichten','mobiliar, decorar'],['die Einrichtung','a mobília, a decoração'],['möbliert','mobiliado'],['die Couch','o sofá'],['das Kissen','a almofada, o travesseiro'],['die Badewanne','a banheira'],['die Terrasse','o terraço'],['die Etage','o andar'],['der Hof','o pátio'],['das Grundstück','o terreno'],['die Steckdose','a tomada'],['das Kabel','o cabo'],['die Klimaanlage','o ar-condicionado'],['einschalten','ligar (aparelho)'],['installieren','instalar'],['anschließen','conectar'],['kaputtgehen','quebrar'],['die Störung','a falha, a interrupção'],['die Anleitung','as instruções'],['die Gebrauchsanweisung','o manual de uso'],['das Werkzeug','a ferramenta'],['der Nagel','o prego'],['die Zange','o alicate'],['die Bürste','a escova']]},
 {t:'mc',q:'Der Fernseher geht nicht an. Ist der Stecker in der ___?',opts:['Steckdose','Badewanne','Zange'],a:0},
 {t:'mc',q:'Wir suchen eine ___ Wohnung, weil wir keine eigenen Möbel haben.',opts:['möblierte','installierte','eingeschaltete'],a:0},
 {t:'gap',q:'Lies zuerst die ___, bevor du das Gerät benutzt! (instruções)',a:['Anleitung|Gebrauchsanweisung|Bedienungsanleitung']},
 {t:'match',q:'Ligue.',pairs:[['das Werkzeug','a ferramenta'],['die Klimaanlage','o ar-condicionado'],['die Störung','a falha'],['das Kissen','a almofada'],['anschließen','conectar']]},
 {t:'read',title:'Leitura: Bedienungsanleitung (Waschmaschine)',text:`1. Schließen Sie die Maschine an eine Steckdose und an den Wasserhahn an.
2. Öffnen Sie die Tür und legen Sie die Wäsche hinein (maximal 7 kg).
3. Geben Sie das Waschmittel in das Fach oben links.
4. Wählen Sie das Programm und die Temperatur. Für Wolle und Seide wählen Sie bitte „Fein“ und höchstens 30 Grad.
5. Drücken Sie auf „Start“. Während des Programms kann die Tür nicht geöffnet werden.
Bei einer Störung erscheint auf dem Display ein Code. Die Liste der Codes finden Sie auf Seite 12.`,de:`1. Conecte a máquina a uma tomada e à torneira.\n2. Abra a porta e coloque a roupa (no máximo 7 kg).\n3. Coloque o sabão no compartimento em cima, à esquerda.\n4. Escolha o programa e a temperatura. Para lã e seda escolha „Fein“ (delicado) e no máximo 30 graus.\n5. Aperte „Start“. Durante o programa a porta não pode ser aberta.\nEm caso de falha aparece um código no visor. A lista dos códigos está na página 12.`},
 {t:'mc',q:'Wohin gibt man das Waschmittel?',opts:['in das Fach oben links','in die Tür','zur Wäsche in die Trommel'],a:0},
 {t:'mc',q:'Sie möchten einen Wollpullover waschen. Was wählen Sie?',opts:['„Fein“ mit höchstens 30 Grad','das Programm mit 60 Grad','egal'],a:0},
 {t:'tr',de:'A máquina de lavar quebrou.',a:['Die Waschmaschine ist kaputtgegangen.','Die Waschmaschine ist kaputt.']}
]},
{id:'l2',title:'Orações relativas',desc:'der Mann, der … · die Wohnung, die … · mit dem …',steps:[
 {t:'info',title:'Relativsätze',html:`<p>A oração relativa explica um substantivo (= „que / o qual“). O pronome relativo tem o <b>gênero</b> do substantivo e o <b>caso</b> da função dentro da oração. O verbo vai para o final.</p>
 <table><tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
 <tr><td>nominativo</td><td class="es-t">der</td><td class="es-t">die</td><td class="es-t">das</td><td class="es-t">die</td></tr>
 <tr><td>acusativo</td><td class="es-t">den</td><td class="es-t">die</td><td class="es-t">das</td><td class="es-t">die</td></tr>
 <tr><td>dativo</td><td class="es-t">dem</td><td class="es-t">der</td><td class="es-t">dem</td><td class="es-t">denen</td></tr></table>
 <div class="ex"><span class="es-t">Das ist der Nachbar, <b>der</b> im 4. Stock wohnt.</span> (sujeito → nom.)<br><span class="es-t">Das ist der Nachbar, <b>den</b> ich gestern getroffen habe.</span> (objeto → acus.)<br><span class="es-t">Das ist der Nachbar, <b>dem</b> ich geholfen habe.</span> (helfen + dativo)<br><span class="es-t">Das ist der Nachbar, <b>mit dem</b> ich Fußball spiele.</span> (mit + dativo)</div>`},
 {t:'mc',q:'Die Wohnung, ___ wir gemietet haben, ist sehr hell.',opts:['die','der','den'],a:0},
 {t:'mc',q:'Das ist der Techniker, ___ die Heizung repariert hat.',opts:['der','den','dem'],a:0},
 {t:'mc',q:'Die Leute, ___ wir das Sofa verkauft haben, waren sehr nett.',opts:['denen','die','den'],a:0},
 {t:'gap',q:'Das ist das Werkzeug, mit ___ man die Lampe reparieren kann.',a:['dem']},
 {t:'gap',q:'Der Kollege, ___ ich jeden Tag sehe, heißt Max. (sehen + acus.)',a:['den']},
 {t:'gap',q:'Die Nachbarin, ___ die Katze gehört, ist im Urlaub. (gehören + dativo)',a:['der']},
 {t:'order',es:'Das ist die Couch die wir auf dem Flohmarkt gekauft haben',de:'Este é o sofá que compramos na feira de usados.'},
 {t:'tr',de:'O homem que mora em cima de mim é muito barulhento.',a:['Der Mann, der über mir wohnt, ist sehr laut.']},
 {t:'speak',es:'Die Wohnung, in der ich jetzt wohne, hat eine Terrasse, auf der ich im Sommer frühstücke.',de:'O apartamento onde eu moro agora tem um terraço onde tomo café da manhã no verão.',tip:'<i>in der</i> (die Wohnung), <i>auf der</i> (die Terrasse) – preposição + pronome relativo.'}
]},
{id:'l3',title:'Convivência e consideração',desc:'Rücksicht, Lärm, Einbruch …',steps:[
 {t:'vocab',title:'No prédio',items:[['die Rücksicht','a consideração'],['Rücksicht nehmen auf','ter consideração com'],['der Lärm','o barulho'],['ordentlich','arrumado; direito'],['der Staub','a poeira'],['staubsaugen','passar aspirador'],['spülen','lavar (louça); dar descarga'],['das Waschmittel','o sabão em pó'],['der Bewohner / die Bewohnerin','o morador / a moradora'],['die Gemeinschaft','a comunidade'],['die Vermietung','a locação'],['der Einbruch','o arrombamento, o furto'],['einbrechen','arrombar, invadir'],['der Einbrecher / die Einbrecherin','o ladrão / a ladra (de casa)'],['die Feuerwehr','os bombeiros'],['der Notausgang','a saída de emergência']]},
 {t:'mc',q:'Bei uns wurde letzte Nacht ___: Der Laptop ist weg!',opts:['eingebrochen','eingerichtet','eingeschaltet'],a:0},
 {t:'mc',q:'Es brennt in der Küche! Ruf sofort die ___!',opts:['Feuerwehr','Polizei','Vermietung'],a:0},
 {t:'gap',q:'Ich muss heute noch ___, überall liegt Staub. (passar aspirador)',a:['staubsaugen']},
 {t:'dialog',place:'Treppenhaus',title:'O ar-condicionado barulhento',scene:'Você fala com o vizinho de cima, Herr Wagner, sobre o barulho à noite.',lines:[
  {n:'Herr Wagner',es:'Guten Abend. Sie wollten mich sprechen?',de:'Boa noite. O senhor queria falar comigo?'},
  {you:true,opts:[{es:'Ja, es geht um die Klimaanlage, die Sie installiert haben. Sie ist nachts sehr laut, genau über meinem Schlafzimmer.',ok:true},{es:'Ihre Klimaanlage nervt total!',ok:false,why:'Com vizinho, comece com educação e explique o problema concretamente.'}]},
  {n:'Herr Wagner',es:'Das tut mir leid. Aber unter dem Dach ist es im Sommer so heiß, dass ich ohne sie nicht schlafen kann.',de:'Sinto muito. Mas embaixo do telhado fica tão quente no verão que eu não consigo dormir sem ele.'},
  {you:true,opts:[{es:'Das verstehe ich. Könnten Sie das Gerät vielleicht ab Mitternacht ausschalten oder auf eine leisere Stufe stellen?',ok:true},{es:'Das ist nicht mein Problem.',ok:false,why:'Mostre compreensão e proponha um meio-termo.'}]},
  {n:'Herr Wagner',es:'Es gibt einen Nachtmodus, der viel leiser ist. Den probiere ich ab heute aus.',de:'Tem um modo noturno que é bem mais silencioso. Vou testar a partir de hoje.'},
  {you:true,opts:[{es:'Super, vielen Dank für Ihr Verständnis! Sagen Sie Bescheid, wenn ich auch mal Rücksicht nehmen soll.',ok:true},{es:'Super, dann bin ich zufrieden.',ok:false,why:'Termine de forma simpática – agradeça e ofereça o mesmo.'}]}]},
 {t:'tr',de:'Por favor, tenham consideração com os vizinhos.',a:['Bitte nehmen Sie Rücksicht auf die Nachbarn.','Bitte nehmt Rücksicht auf die Nachbarn.']}
]},
{id:'l4',title:'Escrever: reclamação',desc:'Beschwerde an die Hausverwaltung',steps:[
 {t:'info',title:'Reclamar por escrito',html:`<table><tr><td class="es-t">Ich wende mich an Sie, weil …</td><td>Escrevo ao senhor porque …</td></tr>
 <tr><td class="es-t">Leider gibt es seit … ein Problem mit …</td><td>Infelizmente há desde … um problema com …</td></tr>
 <tr><td class="es-t">Ich habe bereits … , aber …</td><td>Já … , mas …</td></tr>
 <tr><td class="es-t">Ich bitte Sie, … so schnell wie möglich …</td><td>Peço que … o mais rápido possível …</td></tr>
 <tr><td class="es-t">Für eine baldige Antwort wäre ich Ihnen dankbar.</td><td>Agradeceria uma resposta breve.</td></tr></table>`},
 {t:'free',task:'O aquecimento do seu apartamento não funciona há uma semana. Escreva uma reclamação formal (~80–100 palavras) para a administradora do prédio: 1) qual é o problema e desde quando, 2) o que você já fez, 3) o que você espera (prazo, técnico, desconto no aluguel?).',hint:'Sehr geehrte Damen und Herren, ich wende mich an Sie, weil … Seit … funktioniert … nicht. Ich habe bereits … Ich bitte Sie, … Mit freundlichen Grüßen',focus:'formelle Beschwerde, Relativsätze, Passiv, höfliche Bitte',model:'Sehr geehrte Damen und Herren,\nich wende mich an Sie, weil die Heizung in meiner Wohnung (Bornheimer Straße 12, 3. Stock) seit einer Woche nicht funktioniert. In der Wohnung, in der ich auch arbeite, sind es nur noch 16 Grad. Ich habe bereits zweimal beim Hausmeister angerufen, aber bis heute wurde nichts repariert. Ich bitte Sie, so schnell wie möglich einen Techniker zu schicken. Außerdem möchte ich wissen, ob die Miete für diesen Monat reduziert wird.\nFür eine baldige Antwort wäre ich Ihnen dankbar.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Pronomes relativos</h3><table><tr><td></td><td>masc.</td><td>fem.</td><td>neutro</td><td>plural</td></tr><tr><td>nom.</td><td class="es-t">der</td><td class="es-t">die</td><td class="es-t">das</td><td class="es-t">die</td></tr><tr><td>acus.</td><td class="es-t">den</td><td class="es-t">die</td><td class="es-t">das</td><td class="es-t">die</td></tr><tr><td>dat.</td><td class="es-t">dem</td><td class="es-t">der</td><td class="es-t">dem</td><td class="es-t">denen</td></tr></table>
<p class="es-t">Der Nachbar, der oben wohnt … · den ich kenne … · dem ich helfe … · mit dem ich spiele …</p>
<h3>Casa</h3><p class="es-t">einrichten · die Steckdose · einschalten · installieren · anschließen · die Anleitung · die Störung · Rücksicht nehmen auf · der Lärm</p>`});

/* ================= KAPITEL 28 · GESUNDHEIT & ERNÄHRUNG ================= */
LANGS.de.course.units.push({id:'k28',n:'28',level:'B1',title:'Gesundheit & Ernährung',sub:'Alimentação saudável · no hospital · zu + infinitivo · um … zu / damit (finalidade)',
goals:['Über Ernährung und Gewohnheiten sprechen','Im Krankenhaus: Untersuchung, Operation, Notaufnahme','Infinitiv mit zu: Ich habe vor, gesünder zu essen.','Ziele ausdrücken: um … zu / damit','Ein Rezept verstehen und weitergeben'],
situacion:{title:'Na consulta: hábitos saudáveis',npc:'Dr. Wolf',scene:'O check-up mostrou que você está com o colesterol alto. A médica conversa com você sobre alimentação e exercício.',role:'Du bist Dr. Wolf, Hausärztin in Frankfurt, freundlich und direkt. Du siezt. Die Blutwerte von Lucas zeigen zu viel Cholesterin. Frag nach seinen Essgewohnheiten und nach Sport, gib Tipps mit „Versuchen Sie, … zu …“ und „Um … zu …“, frag, was er sich vornimmt. Schlag eine Ernährungsberatung vor, die von der Krankenkasse bezahlt wird. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Conte como você come e se exercita, diga o que pretende mudar (Ich habe vor, … zu …) e pergunte sobre a orientação nutricional.'},
placement:[
 {t:'mc',q:'Ich habe vor, mehr Sport ___.',opts:['zu machen','machen','zu mache'],a:0},
 {t:'mc',q:'Ich gehe joggen, ___ fit zu bleiben.',opts:['um','damit','für'],a:0},
 {t:'mc',q:'Ich koche viel Gemüse, ___ meine Kinder gesund essen.',opts:['damit','um','zu'],a:0},
 {t:'gap',q:'Es ist wichtig, genug Wasser ___ trinken.',a:['zu']},
 {t:'mc',q:'„a alimentação“',opts:['die Ernährung','die Erziehung','die Erholung'],a:0},
 {t:'gap',q:'Vergiss nicht, die Tabletten ___. (nehmen + zu)',a:['zu nehmen']}],
lessons:[
{id:'l1',title:'Alimentação',desc:'die Ernährung, die Zutaten, zubereiten …',steps:[
 {t:'vocab',title:'Comer bem',items:[['die Ernährung','a alimentação'],['sich ernähren','alimentar-se'],['die Mahlzeit','a refeição'],['das Nahrungsmittel','o alimento'],['die Zutaten (Pl.)','os ingredientes'],['zubereiten','preparar'],['roh','cru'],['salzig','salgado'],['fett','gorduroso'],['das Fett','a gordura'],['vegetarisch','vegetariano'],['die Diät','a dieta'],['das Vitamin','a vitamina'],['das Gewürz','o tempero'],['der Essig','o vinagre'],['das Mehl','a farinha'],['die Zwiebel','a cebola'],['die Karotte','a cenoura'],['der Pilz','o cogumelo'],['die Erholung','o descanso, a recuperação'],['erschöpft','esgotado']]},
 {t:'mc',q:'Ich esse kein Fleisch und keinen Fisch. Ich bin ___.',opts:['Vegetarier','Diät','fett'],a:0},
 {t:'mc',q:'Für den Kuchen brauchst du Mehl, Zucker, Eier und Butter. Das sind die ___.',opts:['Zutaten','Mahlzeiten','Gewürze'],a:0},
 {t:'gap',q:'Sushi isst man mit ___ Fisch. (cru)',a:['rohem']},
 {t:'match',q:'Ligue.',pairs:[['die Zwiebel','a cebola'],['das Gewürz','o tempero'],['die Mahlzeit','a refeição'],['erschöpft','esgotado'],['zubereiten','preparar']]},
 {t:'read',title:'Leitura: Essen in Deutschland',text:`Viele Deutsche essen drei Mahlzeiten am Tag, aber die wichtigste ist oft nicht das Mittagessen, sondern das Frühstück. Mittags essen viele Berufstätige in der Kantine oder nur schnell ein Brötchen. Abends gibt es häufig „Abendbrot“: Brot mit Käse, Wurst und etwas Gemüse – also eine kalte Mahlzeit. Für Menschen aus Brasilien, wo man mittags warm und reichlich isst, ist das am Anfang ungewöhnlich. Immer mehr Deutsche ernähren sich übrigens vegetarisch: Laut Umfragen sind es etwa zehn Prozent.`,de:`Muitos alemães fazem três refeições por dia, mas a mais importante muitas vezes não é o almoço, e sim o café da manhã. No almoço, muitos trabalhadores comem na cantina ou só um pãozinho rápido. À noite muitas vezes tem „Abendbrot“: pão com queijo, frios e um pouco de legumes – ou seja, uma refeição fria. Para quem vem do Brasil, onde o almoço é quente e farto, isso é estranho no começo. Aliás, cada vez mais alemães são vegetarianos: segundo pesquisas, cerca de dez por cento.`},
 {t:'mc',q:'Was ist „Abendbrot“?',opts:['eine kalte Mahlzeit mit Brot','ein warmes Mittagessen','ein Kuchen am Nachmittag'],a:0},
 {t:'mc',q:'Wie viele Deutsche ernähren sich vegetarisch?',opts:['etwa zehn Prozent','die Hälfte','fast niemand'],a:0},
 {t:'tr',de:'Eu tento me alimentar de forma saudável.',a:['Ich versuche, mich gesund zu ernähren.']}
]},
{id:'l2',title:'zu + infinitivo',desc:'Ich habe vor, … zu … · Es ist wichtig, … zu …',steps:[
 {t:'info',title:'Infinitivo com zu',html:`<p>Depois de muitos verbos e expressões vem <b>zu + infinitivo</b> no final da frase:</p>
 <table><tr><td class="es-t">Ich habe vor, gesünder <b>zu essen</b>.</td><td>Pretendo comer de forma mais saudável.</td></tr>
 <tr><td class="es-t">Ich versuche, weniger Zucker <b>zu essen</b>.</td><td>Tento comer menos açúcar.</td></tr>
 <tr><td class="es-t">Es ist wichtig, genug <b>zu schlafen</b>.</td><td>É importante dormir o suficiente.</td></tr>
 <tr><td class="es-t">Hast du Lust, mit mir joggen <b>zu gehen</b>?</td><td>Você está a fim de correr comigo?</td></tr>
 <tr><td class="es-t">Vergiss nicht, die Tabletten <b>zu nehmen</b>.</td><td>Não esqueça de tomar os comprimidos.</td></tr></table>
 <div class="ex">Verbos separáveis: o <b>zu</b> fica no meio – <span class="es-t">Ich habe vergessen, dich <b>anzurufen</b>.</span></div>
 <div class="ojo">Depois de modais (<i>können, müssen, wollen …</i>) <b>sem</b> zu: <span class="es-t">Ich will gesünder essen.</span></div>`},
 {t:'mc',q:'Ich habe keine Zeit, jeden Tag ___.',opts:['zu kochen','kochen','kochen zu'],a:0},
 {t:'mc',q:'Ich muss mehr Wasser ___.',opts:['trinken','zu trinken','trinke'],a:0},
 {t:'gap',q:'Es ist gesund, viel Obst ___ essen.',a:['zu']},
 {t:'gap',q:'Ich habe vergessen, Brot ___. (einkaufen + zu)',a:['einzukaufen']},
 {t:'gap',q:'Hör endlich auf, so viel ___! (rauchen + zu)',a:['zu rauchen']},
 {t:'order',es:'Ich habe vor nächste Woche mit dem Rauchen aufzuhören',de:'Pretendo parar de fumar na semana que vem.'},
 {t:'tr',de:'Não é fácil acordar cedo.',a:['Es ist nicht leicht, früh aufzustehen.','Es ist nicht einfach, früh aufzustehen.']},
 {t:'speak',es:'Ich habe mir vorgenommen, weniger Süßigkeiten zu essen und öfter Rad zu fahren.',de:'Decidi comer menos doces e andar de bicicleta com mais frequência.',tip:'<i>zu essen</i>, <i>Rad zu fahren</i> – o zu vem antes do infinitivo.'}
]},
{id:'l3',title:'No hospital – um … zu / damit',desc:'die Untersuchung, die Operation · Ziele ausdrücken',steps:[
 {t:'vocab',title:'Hospital e tratamento',items:[['die Untersuchung','o exame'],['untersuchen','examinar'],['die Operation','a cirurgia'],['operieren','operar'],['die Notaufnahme','o pronto-socorro'],['die Infektion','a infecção'],['die Therapie','a terapia'],['die Spritze','a injeção'],['die Salbe','a pomada'],['das Schmerzmittel','o analgésico'],['der Pfleger / die Pflegerin','o enfermeiro / a enfermeira'],['die Krankenkasse','o plano de saúde (seguro)'],['der Muskel','o músculo'],['der Atem','a respiração, o fôlego'],['schwitzen','suar'],['körperlich','físico'],['die Schwangerschaft','a gravidez'],['süchtig','viciado'],['schädlich','prejudicial'],['giftig','venenoso, tóxico']]},
 {t:'info',title:'Finalidade: um … zu / damit',html:`<table><tr><td class="es-t"><b>um</b> … <b>zu</b> + infinitivo</td><td>mesma pessoa nas duas partes</td><td class="es-t">Ich mache Sport, <b>um</b> fit <b>zu</b> bleiben.</td></tr>
 <tr><td class="es-t"><b>damit</b> + oração</td><td>pessoas diferentes (também possível com a mesma)</td><td class="es-t">Ich koche gesund, <b>damit</b> meine Kinder gut essen.</td></tr></table>
 <div class="ex">Pergunta: <span class="es-t">Wozu? / Warum?</span> = Para quê? – <span class="es-t">Um gesund zu bleiben.</span></div>`},
 {t:'mc',q:'Ich gehe zum Arzt, ___ mich untersuchen zu lassen.',opts:['um','damit','dass'],a:0},
 {t:'mc',q:'Die Ärztin gibt mir eine Salbe, ___ die Haut besser heilt.',opts:['damit','um','zu'],a:0},
 {t:'gap',q:'Viele Leute fahren Rad, ___ Geld ___ sparen.',a:['um','zu']},
 {t:'mc',q:'Mitten in der Nacht hatte Lucas starke Bauchschmerzen. Wohin ist er gefahren?',opts:['in die Notaufnahme','in die Apotheke','zur Krankenkasse'],a:0},
 {t:'tr',de:'Eu durmo cedo para estar descansado amanhã.',a:['Ich gehe früh schlafen, um morgen ausgeruht zu sein.','Ich gehe früh ins Bett, um morgen ausgeruht zu sein.']},
 {t:'tr',de:'Eu falo devagar para que você me entenda.',a:['Ich spreche langsam, damit du mich verstehst.']}
]},
{id:'l4',title:'Ler e escrever: receita e conselhos',desc:'Rezept · Forumsbeitrag',steps:[
 {t:'read',title:'Leitura: Rezept für Gemüsesuppe (4 Personen)',text:`Zutaten: 2 Zwiebeln, 3 Karotten, 2 Kartoffeln, 200 g Pilze, 1 Liter Wasser, 2 EL Öl, Salz, Pfeffer, Gewürze nach Geschmack.
Zubereitung: Zuerst die Zwiebeln klein schneiden und in Öl anbraten. Dann das Gemüse waschen, schneiden und dazugeben. Nach fünf Minuten das Wasser hinzufügen und alles 20 Minuten kochen lassen. Am Ende mit Salz, Pfeffer und Gewürzen abschmecken. Tipp: Die Suppe schmeckt am nächsten Tag noch besser. Wer mag, kann sie mit Brot servieren.`,de:`Ingredientes: 2 cebolas, 3 cenouras, 2 batatas, 200 g de cogumelos, 1 litro de água, 2 colheres de sopa de óleo, sal, pimenta, temperos a gosto.\nPreparo: Primeiro corte as cebolas em pedaços pequenos e refogue no óleo. Depois lave os legumes, corte e acrescente. Depois de cinco minutos coloque a água e deixe tudo cozinhar por 20 minutos. No final, tempere com sal, pimenta e temperos. Dica: a sopa fica ainda melhor no dia seguinte. Quem quiser pode servir com pão.`},
 {t:'mc',q:'Was macht man zuerst?',opts:['die Zwiebeln schneiden und anbraten','das Wasser kochen','die Pilze waschen'],a:0},
 {t:'mc',q:'Wie lange kocht die Suppe?',opts:['20 Minuten','5 Minuten','eine Stunde'],a:0},
 {t:'free',task:'No fórum „Gesund leben in Deutschland“, uma pessoa recém-chegada pergunta como manter hábitos saudáveis. Escreva uma resposta (~80 palavras): 1) o que você faz (alimentação, esporte), 2) o que foi difícil no começo, 3) dois conselhos (Versuch, … zu … / um … zu …).',hint:'Hallo! Ich versuche, … Am Anfang war es schwierig, … Mein Tipp: Versuch, … zu … Um … zu …, solltest du …',focus:'zu + Infinitiv, um … zu / damit, Ratschläge',model:'Hallo! Ich bin vor zwei Jahren nach Deutschland gekommen und hatte am Anfang die gleichen Probleme. Weil es im Winter so früh dunkel wird, hatte ich keine Lust, Sport zu machen, und habe viel Schokolade gegessen. Mittlerweile gehe ich zweimal pro Woche schwimmen. Mein Tipp: Versuch, einen Sportverein zu finden – dort lernst du auch Leute kennen. Und koch am Wochenende für die ganze Woche vor, um nicht jeden Tag Fertiggerichte zu essen. Viel Erfolg!'}
]}],
resumen:`<h3>zu + infinitivo</h3><p class="es-t">Ich habe vor, … zu essen. · Ich versuche, … · Es ist wichtig, … · Vergiss nicht, … · anzurufen / einzukaufen (separáveis)</p><p>Depois de modais: sem zu.</p>
<h3>Finalidade</h3><table><tr><td class="es-t">um … zu</td><td>mesmo sujeito: Ich mache Sport, um fit zu bleiben.</td></tr><tr><td class="es-t">damit</td><td>sujeitos diferentes: …, damit meine Kinder gesund essen.</td></tr></table>
<h3>Saúde</h3><p class="es-t">die Ernährung · die Mahlzeit · die Zutaten · die Untersuchung · die Operation · die Notaufnahme · die Krankenkasse · das Schmerzmittel</p>`});

/* ================= KAPITEL 29 · REISEN & MOBILITÄT ================= */
LANGS.de.course.units.push({id:'k29',n:'29',level:'B1',title:'Reisen & Mobilität',sub:'Trânsito e carro · viagens e paisagens · Plusquamperfekt · nachdem / bevor',
goals:['Im Straßenverkehr: Umleitung, Strafzettel, überholen','Reisen planen und beschreiben: Strecke, Aussicht, Saison','Plusquamperfekt: Ich hatte das Ticket schon gekauft.','nachdem / bevor / während','Eine Reise erzählen – mit Pannen'],
situacion:{title:'Alugar um carro',npc:'Mitarbeiter',scene:'Você quer alugar um carro por um fim de semana para viajar até a costa do mar do Norte.',role:'Du arbeitest bei einer Autovermietung am Frankfurter Hauptbahnhof, freundlich und genau. Du siezt. Frag nach Führerschein, Zeitraum, Größe des Autos; erkläre Versicherung, Tankregel („voll abholen, voll zurückbringen“), Kilometergrenze und was bei einem Unfall oder einem Strafzettel passiert. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Reserve o carro, pergunte sobre seguro, combustível e o que fazer em caso de acidente.'},
placement:[
 {t:'mc',q:'Als wir am Bahnhof ankamen, ___ der Zug schon ___.',opts:['war … abgefahren','ist … abgefahren','hatte … abgefahren'],a:0},
 {t:'mc',q:'___ ich gegessen hatte, ging ich spazieren.',opts:['Nachdem','Bevor','Während'],a:0},
 {t:'mc',q:'___ du losfährst, musst du tanken.',opts:['Bevor','Nachdem','Seit'],a:0},
 {t:'gap',q:'Ich hatte das Hotel schon ___. (buchen)',a:['gebucht']},
 {t:'mc',q:'Die Straße ist gesperrt. Es gibt eine ___.',opts:['Umleitung','Einbahnstraße','Kurve'],a:0},
 {t:'mc',q:'„a multa (de estacionamento)“',opts:['der Strafzettel','die Strafe','der Stempel'],a:0}],
lessons:[
{id:'l1',title:'No trânsito',desc:'die Umleitung, überholen, der Strafzettel …',steps:[
 {t:'vocab',title:'Trânsito',items:[['das Fahrzeug','o veículo'],['das Motorrad','a moto'],['der Radfahrer / die Radfahrerin','o ciclista / a ciclista'],['der Fußgänger / die Fußgängerin','o / a pedestre'],['die Fußgängerzone','o calçadão'],['die Fahrbahn','a pista'],['die Einbahnstraße','a rua de mão única'],['die Umleitung','o desvio'],['die Kurve','a curva'],['steil','íngreme'],['abbiegen','virar, dobrar'],['überholen','ultrapassar'],['bremsen','frear'],['die Bremse','o freio'],['sich anschnallen','pôr o cinto'],['das Benzin','a gasolina'],['die Geschwindigkeit','a velocidade'],['das Kennzeichen','a placa (do carro)'],['der Strafzettel','a multa (de trânsito)'],['der Führerschein','a carteira de motorista']]},
 {t:'mc',q:'Hier darf man nur in eine Richtung fahren. Das ist eine ___.',opts:['Einbahnstraße','Umleitung','Fußgängerzone'],a:0},
 {t:'mc',q:'Auf der Autobahn darf man nur links ___.',opts:['überholen','abbiegen','bremsen'],a:0},
 {t:'gap',q:'Bitte ___ Sie sich ___, wir fahren los! (pôr o cinto)',a:['schnallen','an']},
 {t:'match',q:'Ligue.',pairs:[['die Umleitung','o desvio'],['das Kennzeichen','a placa'],['der Strafzettel','a multa'],['bremsen','frear'],['steil','íngreme']]},
 {t:'read',title:'Leitura: Regeln für Radfahrer',text:`Wer in Deutschland Rad fährt, muss einige Regeln kennen. Radfahrer müssen den Radweg benutzen, wenn es einen gibt. In der Fußgängerzone darf man meistens nicht fahren, sondern muss das Rad schieben. Wer abbiegen will, zeigt das mit der Hand an. Nachts braucht das Fahrrad Licht vorne und hinten. Mit dem Handy in der Hand zu fahren, ist verboten und kostet 55 Euro. Übrigens: Auch Radfahrer können einen Strafzettel bekommen, zum Beispiel wenn sie bei Rot über die Ampel fahren.`,de:`Quem anda de bicicleta na Alemanha precisa conhecer algumas regras. Ciclistas têm que usar a ciclovia quando há uma. No calçadão normalmente não se pode pedalar, é preciso empurrar a bicicleta. Quem quer virar indica com a mão. À noite a bicicleta precisa de luz na frente e atrás. Andar com o celular na mão é proibido e custa 55 euros. Aliás: ciclistas também podem levar multa, por exemplo quando passam no sinal vermelho.`},
 {t:'mc',q:'Was muss man in der Fußgängerzone meistens tun?',opts:['das Rad schieben','langsam fahren','klingeln'],a:0},
 {t:'mc',q:'Was kostet Radfahren mit dem Handy in der Hand?',opts:['55 Euro','nichts','5 Euro'],a:0},
 {t:'tr',de:'Na próxima esquina você precisa virar à direita.',a:['An der nächsten Kreuzung musst du rechts abbiegen.','An der nächsten Ecke musst du rechts abbiegen.','An der nächsten Kreuzung müssen Sie rechts abbiegen.']}
]},
{id:'l2',title:'Plusquamperfekt',desc:'Ich hatte schon … · Der Zug war schon abgefahren.',steps:[
 {t:'info',title:'O Plusquamperfekt',html:`<p>Para dizer que algo aconteceu <b>antes</b> de outra coisa no passado: <b>hatte/war</b> + particípio (= „tinha feito“).</p>
 <table><tr><td class="es-t">Als wir ankamen, <b>war</b> der Zug schon <b>abgefahren</b>.</td><td>Quando chegamos, o trem já tinha partido.</td></tr>
 <tr><td class="es-t">Ich <b>hatte</b> das Hotel schon <b>gebucht</b>, aber dann wurde ich krank.</td><td>Eu já tinha reservado o hotel, mas aí fiquei doente.</td></tr></table>
 <div class="ex">Mesma regra do Perfekt: verbos de movimento/mudança com <b>sein</b> (<span class="es-t">war gefahren, war passiert</span>), os outros com <b>haben</b> (<span class="es-t">hatte gekauft</span>).</div>
 <div class="ojo"><b>nachdem</b> (depois que) quase sempre leva Plusquamperfekt: <span class="es-t">Nachdem wir gegessen <b>hatten</b>, gingen wir zum Strand.</span> · <b>bevor</b> (antes que): <span class="es-t">Bevor wir losfuhren, tankten wir.</span> · <b>während</b> (enquanto): <span class="es-t">Während ich fuhr, schlief Tom.</span></div>`},
 {t:'mc',q:'Ich ___ meinen Pass zu Hause vergessen.',opts:['hatte','war','habe gewesen'],a:0},
 {t:'mc',q:'Als ich ankam, ___ meine Freunde schon gegangen.',opts:['waren','hatten','wurden'],a:0},
 {t:'gap',q:'Nachdem wir das Auto ___ hatten, fuhren wir los. (tanken)',a:['getankt']},
 {t:'gap',q:'___ wir abfahren, müssen wir die Koffer packen. (antes que)',a:['Bevor']},
 {t:'gap',q:'___ Tom fuhr, las ich die Karte. (enquanto)',a:['Während']},
 {t:'order',es:'Nachdem wir zwei Stunden im Stau gestanden hatten machten wir eine Pause',de:'Depois de ficarmos duas horas no engarrafamento, fizemos uma pausa.'},
 {t:'tr',de:'Quando cheguei, o show já tinha começado.',a:['Als ich ankam, hatte das Konzert schon angefangen.','Als ich ankam, hatte das Konzert schon begonnen.']},
 {t:'tr',de:'Antes de viajarmos, compramos um mapa.',a:['Bevor wir losfuhren, kauften wir eine Karte.','Bevor wir losgefahren sind, haben wir eine Karte gekauft.','Bevor wir abfuhren, kauften wir eine Karte.']}
]},
{id:'l3',title:'Viajar e paisagens',desc:'die Strecke, die Aussicht, die Küste …',steps:[
 {t:'vocab',title:'Viagem',items:[['die Strecke','o trecho, o percurso'],['die Entfernung','a distância'],['die Rückfahrt','a viagem de volta'],['die Rundfahrt','o passeio (circuito)'],['der Aufenthalt','a estadia'],['die Saison','a temporada'],['das Souvenir','a lembrancinha'],['das Visum','o visto'],['voraussichtlich','previsto, provavelmente'],['die Aussicht','a vista; a perspectiva'],['die Küste','o litoral'],['das Ufer','a margem'],['der Hügel','a colina'],['das Gebirge','a cordilheira, as montanhas'],['die Burg','o castelo (fortaleza)'],['das Denkmal','o monumento'],['der Turm','a torre']]},
 {t:'mc',q:'Vom Turm hat man eine tolle ___ über die ganze Stadt.',opts:['Aussicht','Strecke','Saison'],a:0},
 {t:'mc',q:'Der Zug kommt ___ um 18 Uhr an – wenn es keine Verspätung gibt.',opts:['voraussichtlich','rückwärts','steil'],a:0},
 {t:'gap',q:'Im Sommer ist ___, da sind die Hotels teurer. (alta temporada → die Haupt…)',a:['Hauptsaison|Saison']},
 {t:'dialog',place:'Autovermietung',title:'Alugar um carro',scene:'Você quer alugar um carro por um fim de semana.',lines:[
  {n:'Mitarbeiter',es:'Guten Tag! Für welchen Zeitraum möchten Sie ein Auto mieten?',de:'Bom dia! Para qual período o senhor quer alugar um carro?'},
  {you:true,opts:[{es:'Von Freitagabend bis Sonntag. Wir wollen an die Nordseeküste fahren.',ok:true},{es:'Ich will ein Auto.',ok:false,why:'Responda à pergunta: o período (von … bis …).'}]},
  {n:'Mitarbeiter',es:'Gut. Sie bekommen das Auto vollgetankt und bringen es bitte auch vollgetankt zurück.',de:'Certo. O senhor recebe o carro com tanque cheio e, por favor, devolve também cheio.'},
  {you:true,opts:[{es:'Verstanden. Und was passiert, wenn wir einen Unfall haben?',ok:true},{es:'Verstanden. Und was passiert, wenn wir einen Unfall hatten gehabt?',ok:false,why:'Aqui basta o presente: <i>wenn wir einen Unfall haben</i>.'}]},
  {n:'Mitarbeiter',es:'Sie sind versichert. Sie zahlen höchstens 500 Euro selbst. Rufen Sie in jedem Fall die Polizei und uns an.',de:'O senhor tem seguro. Paga no máximo 500 euros. Em todo caso, ligue para a polícia e para nós.'},
  {you:true,opts:[{es:'Gut, dann nehme ich das Angebot. Brauchen Sie meinen Führerschein?',ok:true},{es:'Gut, dann nehme ich das Angebot. Brauchen Sie meinen Strafzettel?',ok:false,why:'Para alugar, você mostra a carteira de motorista: <i>der Führerschein</i>.'}]}]},
 {t:'tr',de:'A distância até a costa é de 500 quilômetros.',a:['Die Entfernung bis zur Küste beträgt 500 Kilometer.','Die Entfernung bis zur Küste ist 500 Kilometer.','Bis zur Küste sind es 500 Kilometer.']}
]},
{id:'l4',title:'Escrever: uma viagem com imprevistos',desc:'Reisebericht (Präteritum + Plusquamperfekt)',steps:[
 {t:'read',title:'Leitura: Pech auf der Rückfahrt',text:`Letzten Sonntag wollten Jana und ich mit dem Zug aus Hamburg zurückfahren. Wir hatten die Tickets schon Wochen vorher gekauft. Als wir am Bahnhof ankamen, stand auf der Anzeige: „Zug fällt aus“. Ein Baum war wegen des Sturms auf die Strecke gefallen. Nachdem wir eine Stunde gewartet hatten, fuhr endlich ein Ersatzzug – aber nur bis Hannover. Dort mussten wir umsteigen. Insgesamt waren wir neun Stunden unterwegs! Immerhin bekamen wir später einen Teil des Geldes zurück.`,de:`No domingo passado a Jana e eu queríamos voltar de trem de Hamburgo. Tínhamos comprado as passagens semanas antes. Quando chegamos à estação, estava escrito no painel: „Trem cancelado“. Uma árvore tinha caído nos trilhos por causa da tempestade. Depois de esperarmos uma hora, finalmente saiu um trem substituto – mas só até Hannover. Lá tivemos que fazer baldeação. No total ficamos nove horas viajando! Pelo menos depois recebemos parte do dinheiro de volta.`},
 {t:'mc',q:'Warum fiel der Zug aus?',opts:['Ein Baum war auf die Strecke gefallen.','Der Lokführer war krank.','Es gab einen Streik.'],a:0},
 {t:'mc',q:'Wie lange waren sie insgesamt unterwegs?',opts:['neun Stunden','eine Stunde','zwei Tage'],a:0},
 {t:'free',task:'Conte (~80–100 palavras) uma viagem em que algo deu errado: 1) para onde e com quem, 2) o que aconteceu (Präteritum + Plusquamperfekt, nachdem/bevor), 3) como terminou.',hint:'Letztes Jahr fuhr ich mit … nach … Wir hatten … schon … Als wir … , war … schon … Nachdem … , … Am Ende …',focus:'Präteritum, Plusquamperfekt, nachdem/bevor/während, Verkehr',model:'Letzten Sommer fuhr ich mit Tom mit dem Auto an die Ostsee. Wir hatten ein Ferienhaus gebucht und freuten uns sehr. Nach drei Stunden hatten wir plötzlich eine Panne: Ein Reifen war kaputt. Während Tom den Pannendienst anrief, machte ich Picknick am Straßenrand. Nachdem der Mechaniker den Reifen gewechselt hatte, fuhren wir weiter. Als wir ankamen, war es schon dunkel, und die Vermieterin hatte den Schlüssel unter die Matte gelegt. Am Ende war es trotzdem ein toller Urlaub!'}
]}],
resumen:`<h3>Plusquamperfekt</h3><p class="es-t">hatte + particípio: Ich hatte das Hotel gebucht. · war + particípio: Der Zug war abgefahren.</p>
<h3>Tempo</h3><table><tr><td class="es-t">nachdem</td><td>depois que (+ Plusquamperfekt)</td></tr><tr><td class="es-t">bevor</td><td>antes que</td></tr><tr><td class="es-t">während</td><td>enquanto</td></tr></table>
<h3>Trânsito</h3><p class="es-t">abbiegen · überholen · bremsen · sich anschnallen · die Umleitung · die Einbahnstraße · der Strafzettel · der Führerschein</p>`});

/* ================= KAPITEL 30 · MEDIEN & TECHNIK ================= */
LANGS.de.course.units.push({id:'k30',n:'30',level:'B1',title:'Medien & Technik',sub:'Internet e aparelhos · notícias e publicidade · Konjunktiv II (seria, teria, iria) · worauf? – darauf',
goals:['Über Technik und digitales Leben sprechen','Nachrichten, Werbung und Umfragen verstehen','Konjunktiv II: Wünsche und Ratschläge (Ich würde …, Wenn ich … hätte …)','wo(r)- und da(r)-: Worauf wartest du? – Darauf.','Einen Forumsbeitrag mit Meinung schreiben'],
situacion:{title:'Uma semana sem celular?',npc:'Jana',scene:'A Jana leu que uma escola em Frankfurt proibiu os celulares. Vocês discutem se isso faz sentido.',role:'Du bist Jana, Lucas’ Kollegin, du findest Handys an Schulen eher schädlich. Du duzt. Diskutiere mit Lucas: Vorteile und Nachteile von Smartphones, Handyverbot an Schulen, wie viel Zeit ihr selbst am Handy verbringt. Benutze Konjunktiv II (Wenn ich Lehrerin wäre, würde ich …) und wo(r)-/da(r)- (Worüber ärgerst du dich? – Darüber, dass …). Sprich natürliches Deutsch auf B1-Niveau.',goal:'Dê sua opinião com argumentos, use „Wenn ich …, würde ich …“ e reaja às opiniões da Jana.'},
placement:[
 {t:'mc',q:'Wenn ich mehr Zeit ___, würde ich ein Instrument lernen.',opts:['hätte','habe','hatte'],a:0},
 {t:'mc',q:'An deiner Stelle ___ ich das Handy ausschalten.',opts:['würde','werde','wurde'],a:0},
 {t:'mc',q:'___ wartest du? – Auf den Bus.',opts:['Worauf','Wofür','Auf was'],a:0},
 {t:'gap',q:'Ich freue mich auf den Urlaub. – Ich freue mich auch ___.',a:['darauf']},
 {t:'gap',q:'Es ___ schön, wenn du mitkommen würdest. (sein – Konjunktiv II)',a:['wäre']},
 {t:'mc',q:'„publicar“',opts:['veröffentlichen','verbreiten','vergleichen'],a:0}],
lessons:[
{id:'l1',title:'Vida digital',desc:'digital, das Netzwerk, die Festplatte …',steps:[
 {t:'vocab',title:'Tecnologia',items:[['digital','digital'],['elektronisch','eletrônico'],['virtuell','virtual'],['die Technik','a técnica, a tecnologia'],['technisch','técnico'],['die Technologie','a tecnologia'],['das Netz','a rede'],['das Netzwerk','a rede (de contatos/computadores)'],['der Virus','o vírus'],['die Festplatte','o disco rígido'],['der Monitor','o monitor'],['der Lautsprecher','o alto-falante'],['die Fernbedienung','o controle remoto'],['die Batterie','a pilha, a bateria'],['kopieren','copiar'],['die Kopie','a cópia'],['einfügen','colar, inserir'],['die Kommunikation','a comunicação'],['der Anrufbeantworter','a secretária eletrônica']]},
 {t:'mc',q:'Wo ist die ___? Ich will den Fernseher ausmachen.',opts:['Fernbedienung','Festplatte','Batterie'],a:0},
 {t:'mc',q:'Ich habe den Text ___ und in die E-Mail eingefügt.',opts:['kopiert','gelöscht','gedruckt'],a:0},
 {t:'gap',q:'Mein Computer ist langsam. Vielleicht hat er einen ___. (vírus)',a:['Virus']},
 {t:'match',q:'Ligue.',pairs:[['die Festplatte','o disco rígido'],['der Lautsprecher','o alto-falante'],['einfügen','colar'],['virtuell','virtual'],['das Netzwerk','a rede']]},
 {t:'tr',de:'Você pode me mandar uma cópia do documento?',a:['Kannst du mir eine Kopie des Dokuments schicken?','Kannst du mir eine Kopie vom Dokument schicken?','Können Sie mir eine Kopie des Dokuments schicken?']}
]},
{id:'l2',title:'Konjunktiv II: desejos e conselhos',desc:'Ich würde … · Wenn ich … hätte … · Es wäre …',steps:[
 {t:'info',title:'Konjunktiv II no presente',html:`<p>Para <b>desejos, hipóteses e conselhos</b> („seria, teria, faria“):</p>
 <table><tr><td class="es-t">sein → ich <b>wäre</b></td><td class="es-t">haben → ich <b>hätte</b></td><td class="es-t">können → ich <b>könnte</b></td></tr>
 <tr><td class="es-t">müssen → ich <b>müsste</b></td><td class="es-t">dürfen → ich <b>dürfte</b></td><td>os outros: <span class="es-t"><b>würde</b> + infinitivo</span></td></tr></table>
 <div class="ex"><span class="es-t">Wenn ich mehr Zeit <b>hätte</b>, <b>würde</b> ich mehr lesen.</span> = Se eu tivesse mais tempo, leria mais.<br><span class="es-t">Ich <b>wäre</b> gern Pilot.</span> = Eu gostaria de ser piloto.<br><span class="es-t">An deiner Stelle <b>würde</b> ich das Handy ausschalten.</span> = No seu lugar, eu desligaria o celular.</div>
 <div class="ojo">Irreal (não é verdade agora): <span class="es-t">Wenn ich reich <b>wäre</b> …</span> (mas não sou). Real: <span class="es-t">Wenn ich Zeit <b>habe</b> …</span></div>`},
 {t:'mc',q:'Wenn ich du ___, würde ich weniger am Handy sein.',opts:['wäre','bin','war'],a:0},
 {t:'mc',q:'___ du mir bitte das Passwort sagen?',opts:['Könntest','Kannst gewesen','Konntest'],a:0},
 {t:'gap',q:'Wenn ich ein neues Laptop ___, ___ ich schneller arbeiten. (haben / können)',a:['hätte','könnte']},
 {t:'gap',q:'Ich ___ gern eine Woche ohne Internet leben – aber nur im Urlaub! (werden – Konjunktiv II)',a:['würde']},
 {t:'order',es:'Wenn ich mehr Geld hätte würde ich ein neues Handy kaufen',de:'Se eu tivesse mais dinheiro, compraria um celular novo.'},
 {t:'tr',de:'Seria ótimo se você pudesse vir.',a:['Es wäre toll, wenn du kommen könntest.','Es wäre super, wenn du kommen könntest.','Es wäre schön, wenn du kommen könntest.']},
 {t:'speak',es:'Wenn ich Lehrer wäre, würde ich Handys im Unterricht verbieten.',de:'Se eu fosse professor(a), proibiria celulares na aula.',tip:'<i>wäre</i> (ser) e <i>würde … verbieten</i>.'}
]},
{id:'l3',title:'Notícias e publicidade – wo(r)/da(r)',desc:'die Meldung, die Werbung · Worüber? – Darüber.',steps:[
 {t:'vocab',title:'Mídia',items:[['die Meldung','a notícia (curta)'],['der Beitrag','a contribuição; a matéria'],['veröffentlichen','publicar'],['der Journalist / die Journalistin','o jornalista / a jornalista'],['der Leser / die Leserin','o leitor / a leitora'],['das Magazin','a revista'],['das Forum','o fórum'],['die Werbung','a publicidade'],['die Umfrage','a pesquisa (de opinião)'],['die Statistik','a estatística'],['die Mehrheit','a maioria'],['die Minderheit','a minoria'],['positiv','positivo'],['negativ','negativo']]},
 {t:'info',title:'wo(r)- e da(r)-',html:`<p>Com verbos com preposição (<span class="es-t">warten auf, sich freuen über, denken an …</span>), para <b>coisas</b> se usa:</p>
 <table><tr><td>pergunta</td><td class="es-t"><b>Wo</b>rauf wartest du? · <b>Wor</b>über ärgerst du dich? · <b>Wo</b>mit fährst du?</td></tr>
 <tr><td>resposta</td><td class="es-t"><b>Dar</b>auf warte ich auch. · Ich ärgere mich <b>dar</b>über, dass … · <b>Da</b>mit fahre ich.</td></tr></table>
 <div class="ex">Antes de vogal entra <b>r</b>: <span class="es-t">wor-auf, dar-über</span>. Para <b>pessoas</b>: preposição + pronome – <span class="es-t">Auf wen wartest du? – Auf ihn.</span></div>`},
 {t:'mc',q:'___ denkst du gerade? – An meinen Urlaub.',opts:['Woran','Wofür','An was für'],a:0},
 {t:'mc',q:'Ärgerst du dich über die Werbung? – Ja, ich ärgere mich oft ___.',opts:['darüber','darauf','dafür'],a:0},
 {t:'mc',q:'Auf ___ wartest du? – Auf meine Freundin.',opts:['wen','was','wo'],a:0},
 {t:'gap',q:'___ interessierst du dich? – Für Technik. (wo(r)- + für)',a:['Wofür']},
 {t:'read',title:'Leitura: Umfrage zur Handynutzung',text:`Eine neue Umfrage zeigt: Die Mehrheit der Deutschen zwischen 18 und 30 Jahren verbringt mehr als vier Stunden pro Tag am Smartphone. 60 Prozent schauen morgens als Erstes aufs Handy, noch bevor sie aufstehen. Gleichzeitig sagt fast die Hälfte, dass sie gern weniger Zeit online verbringen würde. Viele ärgern sich vor allem über Werbung und darüber, dass sie ständig erreichbar sein müssen. Nur eine kleine Minderheit hat schon einmal eine Woche ganz ohne Handy gelebt – und die meisten von ihnen fanden das positiv.`,de:`Uma nova pesquisa mostra: a maioria dos alemães entre 18 e 30 anos passa mais de quatro horas por dia no smartphone. 60 por cento olham o celular logo de manhã, antes mesmo de levantar. Ao mesmo tempo, quase a metade diz que gostaria de passar menos tempo online. Muitos se irritam principalmente com a publicidade e com o fato de terem que estar sempre disponíveis. Só uma pequena minoria já viveu uma semana inteira sem celular – e a maioria deles achou isso positivo.`},
 {t:'mc',q:'Was möchte fast die Hälfte der jungen Leute?',opts:['weniger Zeit online verbringen','ein neues Handy','mehr Werbung'],a:0},
 {t:'mc',q:'Wie fanden die meisten eine Woche ohne Handy?',opts:['positiv','schrecklich','langweilig'],a:0},
 {t:'tr',de:'Pelo que você está ansioso? – Pelas férias.',a:['Worauf freust du dich? – Auf den Urlaub.','Worauf freust du dich? – Auf die Ferien.']}
]},
{id:'l4',title:'Escrever: opinião no fórum',desc:'Forumsbeitrag „Handyverbot an Schulen?“',steps:[
 {t:'info',title:'Dar e justificar opinião',html:`<table><tr><td class="es-t">Meiner Meinung nach …</td><td>Na minha opinião …</td></tr>
 <tr><td class="es-t">Ich bin dafür / dagegen, dass …</td><td>Sou a favor / contra que …</td></tr>
 <tr><td class="es-t">Einerseits … andererseits …</td><td>Por um lado … por outro …</td></tr>
 <tr><td class="es-t">Ein Vorteil / Nachteil ist, dass …</td><td>Uma vantagem / desvantagem é que …</td></tr>
 <tr><td class="es-t">Wenn ich … wäre, würde ich …</td><td>Se eu fosse …, eu …</td></tr></table>`},
 {t:'free',task:'Num fórum se discute: „Sollten Handys an Schulen verboten werden?“. Escreva sua opinião (~80 palavras): 1) sua posição, 2) uma vantagem e uma desvantagem, 3) o que você faria (Wenn ich … wäre, würde ich …).',hint:'Meiner Meinung nach … Einerseits …, andererseits … Ein Nachteil ist, dass … Wenn ich Lehrer wäre, würde ich …',focus:'Meinung, Konnektoren, Konjunktiv II, dass-Sätze',model:'Meiner Meinung nach sollten Handys im Unterricht verboten werden, aber nicht in der Pause. Einerseits können Smartphones beim Lernen helfen, zum Beispiel mit Wörterbuch-Apps. Andererseits lenken sie die Schüler stark ab, und viele schauen ständig auf soziale Netzwerke. Ein weiterer Nachteil ist, dass Kinder sich in der Pause kaum noch unterhalten. Wenn ich Lehrer wäre, würde ich die Handys am Anfang der Stunde einsammeln. So könnten sich alle besser konzentrieren.'}
]}],
resumen:`<h3>Konjunktiv II</h3><table><tr><td class="es-t">wäre · hätte · könnte · müsste · dürfte · würde + infinitivo</td></tr></table><p class="es-t">Wenn ich mehr Zeit hätte, würde ich mehr lesen. · An deiner Stelle würde ich … · Es wäre schön, wenn …</p>
<h3>wo(r)- / da(r)-</h3><p class="es-t">Worauf wartest du? – Darauf. · Worüber ärgerst du dich? – Darüber, dass … · Auf wen? – Auf ihn. (pessoas)</p>
<h3>Mídia e técnica</h3><p class="es-t">veröffentlichen · die Meldung · die Werbung · die Umfrage · die Mehrheit · digital · das Netzwerk · kopieren · einfügen</p>`});

/* ================= KAPITEL 31 · BEZIEHUNGEN & GEFÜHLE ================= */
LANGS.de.course.units.push({id:'k31',n:'31',level:'B1',title:'Beziehungen & Gefühle',sub:'Amor, amizade e conflitos · sentimentos · obwohl / trotzdem · declinação -n (den Kollegen, dem Nachbarn)',
goals:['Gefühle beschreiben: enttäuscht, mutig, eifersüchtig','Beziehungen: sich verlieben, sich streiten, sich versöhnen','obwohl (Nebensatz) und trotzdem (Hauptsatz)','n-Deklination: der Kollege → den Kollegen','Einen persönlichen Rat schreiben'],
situacion:{title:'Ouvir uma amiga',npc:'Jana',scene:'A Jana brigou com o namorado, o Felix, e quer desabafar com você depois do trabalho.',role:'Du bist Jana, Lucas’ Kollegin und gute Freundin. Du duzt. Du hast dich mit deinem Freund Felix gestritten, weil er ohne dich mit Freunden in den Urlaub fahren will. Erzähl, wie du dich fühlst (enttäuscht, wütend), und frag Lucas um Rat. Reagiere auf seine Ratschläge. Benutze obwohl/trotzdem. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Escute, mostre empatia, pergunte detalhes e dê um conselho (Ich an deiner Stelle würde …).'},
placement:[
 {t:'mc',q:'___ es regnet, gehen wir spazieren.',opts:['Obwohl','Trotzdem','Weil'],a:0},
 {t:'mc',q:'Es regnet. ___ gehen wir spazieren.',opts:['Trotzdem','Obwohl','Denn'],a:0},
 {t:'mc',q:'Ich habe gestern mit ___ gesprochen.',opts:['dem Kollegen','dem Kollege','den Kollege'],a:0},
 {t:'gap',q:'Kennst du den neuen ___? (o vizinho – acusativo)',a:['Nachbarn']},
 {t:'mc',q:'„fazer as pazes“',opts:['sich versöhnen','sich verlieben','sich trennen'],a:0},
 {t:'mc',q:'Er ist ___, wenn seine Freundin mit anderen Männern tanzt.',opts:['eifersüchtig','mutig','tolerant'],a:0}],
lessons:[
{id:'l1',title:'Sentimentos',desc:'enttäuscht, mutig, die Laune …',steps:[
 {t:'vocab',title:'Sentimentos e caráter',items:[['die Laune','o humor (estado)'],['gute / schlechte Laune haben','estar de bom / mau humor'],['die Enttäuschung','a decepção'],['ängstlich','medroso, ansioso'],['fröhlich','alegre'],['mutig','corajoso'],['der Mut','a coragem'],['frech','atrevido'],['tolerant','tolerante'],['optimistisch','otimista'],['ärgerlich','irritante; irritado'],['heimlich','em segredo'],['schimpfen','xingar, dar bronca'],['loben','elogiar'],['die Überzeugung','a convicção'],['unheimlich','sinistro; (coloquial) muito']]},
 {t:'mc',q:'Mein Chef hat mich heute vor allen Kollegen ___. Das war schön!',opts:['gelobt','geschimpft','enttäuscht'],a:0},
 {t:'mc',q:'Morgens bin ich oft schlecht gelaunt. Ich habe schlechte ___.',opts:['Laune','Überzeugung','Enttäuschung'],a:0},
 {t:'gap',q:'Es war sehr ___ von dir, allein nach Deutschland zu kommen! (corajoso)',a:['mutig']},
 {t:'match',q:'Ligue.',pairs:[['fröhlich','alegre'],['frech','atrevido'],['heimlich','em segredo'],['die Enttäuschung','a decepção'],['loben','elogiar']]},
 {t:'tr',de:'Ela está de bom humor hoje.',a:['Sie hat heute gute Laune.','Sie ist heute gut gelaunt.']}
]},
{id:'l2',title:'Amor e conflitos – obwohl / trotzdem',desc:'sich verlieben, sich streiten, sich versöhnen',steps:[
 {t:'vocab',title:'Relacionamentos',items:[['sich verlieben in','apaixonar-se por'],['zusammenkommen','começar a namorar'],['sich streiten','brigar'],['sich versöhnen','fazer as pazes'],['sich trennen','separar-se'],['Schluss machen','terminar (namoro)'],['die Hochzeit feiern','celebrar o casamento'],['gemeinsam','juntos'],['vermissen','sentir falta']]},
 {t:'info',title:'obwohl e trotzdem',html:`<p>Os dois expressam uma <b>contradição</b> („embora / mesmo assim“), mas a ordem das palavras é diferente:</p>
 <table><tr><td class="es-t"><b>obwohl</b> + verbo no final</td><td class="es-t">Obwohl sie sich oft streiten, lieben sie sich.</td><td>Embora briguem muito, eles se amam.</td></tr>
 <tr><td class="es-t"><b>trotzdem</b> + verbo logo depois</td><td class="es-t">Sie streiten sich oft. Trotzdem lieben sie sich.</td><td>Eles brigam muito. Mesmo assim se amam.</td></tr></table>
 <div class="ex">Preposição <b>trotz</b> + genitivo (ou dativo na fala): <span class="es-t">Trotz des Regens gehen wir spazieren.</span></div>`},
 {t:'mc',q:'___ Felix müde war, ist er mit Jana ins Kino gegangen.',opts:['Obwohl','Trotzdem','Deshalb'],a:0},
 {t:'mc',q:'Lucas vermisst seine Familie. ___ möchte er in Deutschland bleiben.',opts:['Trotzdem','Obwohl','Weil'],a:0},
 {t:'gap',q:'Sie haben sich versöhnt, ___ der Streit sehr schlimm war.',a:['obwohl']},
 {t:'gap',q:'Ich hatte keine Zeit. ___ habe ich dir geholfen.',a:['Trotzdem']},
 {t:'order',es:'Obwohl sie in verschiedenen Städten wohnen sehen sie sich jedes Wochenende',de:'Embora morem em cidades diferentes, eles se veem todo fim de semana.'},
 {t:'tr',de:'Embora eu esteja cansado, vou à festa.',a:['Obwohl ich müde bin, gehe ich zur Party.','Obwohl ich müde bin, komme ich zur Party.']},
 {t:'speak',es:'Obwohl wir uns manchmal streiten, verstehen wir uns sehr gut.',de:'Embora às vezes a gente brigue, nos entendemos muito bem.',tip:'Depois de <i>obwohl</i> o verbo vai para o final: <i>streiten</i>.'}
]},
{id:'l3',title:'Declinação -n',desc:'der Kollege → den Kollegen · der Nachbar → dem Nachbarn',steps:[
 {t:'info',title:'n-Deklination',html:`<p>Alguns substantivos <b>masculinos</b> ganham <b>-(e)n</b> em todos os casos, menos no nominativo singular:</p>
 <table><tr><th>nominativo</th><th>acusativo / dativo / genitivo</th></tr>
 <tr><td class="es-t">der Kollege</td><td class="es-t">den / dem / des Kolleg<b>en</b></td></tr>
 <tr><td class="es-t">der Nachbar</td><td class="es-t">den / dem / des Nachbar<b>n</b></td></tr>
 <tr><td class="es-t">der Mensch</td><td class="es-t">den / dem / des Mensch<b>en</b></td></tr>
 <tr><td class="es-t">der Student · der Kunde · der Junge · der Herr</td><td class="es-t">den Student<b>en</b> · dem Kund<b>en</b> · den Jung<b>en</b> · Herr<b>n</b> Müller</td></tr></table>
 <div class="ex">Dica: masculinos terminados em <b>-e</b> para pessoas/animais (der Kollege, der Junge, der Löwe) e palavras de origem estrangeira em <b>-ent, -ant, -ist</b> (der Student, der Praktikant, der Journalist).</div>`},
 {t:'mc',q:'Ich habe ___ gestern im Supermarkt getroffen.',opts:['meinen Nachbarn','meinen Nachbar','meinem Nachbar'],a:0},
 {t:'mc',q:'Der Brief ist für ___ Müller.',opts:['Herrn','Herr','Herren'],a:0},
 {t:'gap',q:'Kannst du ___ Kollegen bitte Bescheid sagen? (dativo: dem)',a:['dem']},
 {t:'gap',q:'Die Ärztin hat mit dem ___ gesprochen. (der Patient)',a:['Patienten']},
 {t:'gap',q:'Wir haben einen neuen ___ im Team. (der Praktikant – acusativo)',a:['Praktikanten']},
 {t:'tr',de:'Eu ajudo o meu colega.',a:['Ich helfe meinem Kollegen.']}
]},
{id:'l4',title:'Escrever: um conselho',desc:'Antwort auf eine Nachricht',steps:[
 {t:'read',title:'Leitura: Nachricht von Tom',text:`Hey Lucas,
ich brauche deinen Rat. Lea und ich sind jetzt seit einem Jahr zusammen. Sie hat ein Jobangebot in München bekommen und will es annehmen. Obwohl ich mich für sie freue, bin ich auch traurig und ein bisschen eifersüchtig auf ihre neuen Kollegen. Fernbeziehung? Ich weiß nicht, ob ich das kann. Trotzdem will ich sie nicht verlieren. Was würdest du an meiner Stelle machen?
Tom`,de:`E aí, Lucas,\npreciso do seu conselho. A Lea e eu estamos juntos há um ano. Ela recebeu uma proposta de emprego em Munique e quer aceitar. Embora eu fique feliz por ela, também estou triste e um pouco ciumento dos novos colegas dela. Relacionamento a distância? Não sei se consigo. Mesmo assim não quero perdê-la. O que você faria no meu lugar?\nTom`},
 {t:'mc',q:'Warum ist Tom traurig?',opts:['Lea will nach München ziehen.','Lea hat Schluss gemacht.','Er hat seinen Job verloren.'],a:0},
 {t:'mc',q:'Was möchte Tom nicht?',opts:['Lea verlieren','nach München ziehen','mit Lucas sprechen'],a:0},
 {t:'free',task:'Responda ao Tom (~80 palavras): 1) mostre que entende os sentimentos dele, 2) dê dois conselhos (Ich an deiner Stelle würde … / Du solltest …), 3) conte uma experiência sua ou de alguém que você conhece.',hint:'Lieber Tom, ich kann gut verstehen, dass … Obwohl …, … An deiner Stelle würde ich … Außerdem solltest du … Meine Cousine …',focus:'obwohl/trotzdem, Konjunktiv II, Ratschläge, n-Deklination',model:'Lieber Tom,\nich kann gut verstehen, dass du traurig bist. Obwohl eine Fernbeziehung schwierig ist, kann sie funktionieren. An deiner Stelle würde ich offen mit Lea darüber sprechen, was ihr beide wollt. Außerdem solltest du sie so oft wie möglich besuchen – mit dem Zug sind es nur vier Stunden. Meine Cousine hat zwei Jahre eine Fernbeziehung gehabt, und heute sind sie verheiratet. Eifersucht hilft übrigens nicht – vertrau ihr!\nViele Grüße\nLucas'}
]}],
resumen:`<h3>obwohl / trotzdem / trotz</h3><p class="es-t">Obwohl wir uns streiten, lieben wir uns. · Wir streiten uns. Trotzdem lieben wir uns. · Trotz des Regens …</p>
<h3>n-Deklination</h3><p class="es-t">der Kollege → den/dem/des Kollegen · der Nachbar → Nachbarn · der Mensch → Menschen · der Student → Studenten · Herr → Herrn</p>
<h3>Relacionamentos</h3><p class="es-t">sich verlieben in · sich streiten · sich versöhnen · sich trennen · Schluss machen · die Laune · mutig · enttäuscht</p>`});

/* ================= KAPITEL 32 · UMWELT ================= */
LANGS.de.course.units.push({id:'k32',n:'32',level:'B1',title:'Umwelt',sub:'Meio ambiente e clima · energia e reciclagem · Passiv com modais (muss getrennt werden) · deshalb / deswegen',
goals:['Über Umweltprobleme und Klima sprechen','Energie sparen, Müll vermeiden, recyceln','Passiv mit Modalverben: Der Müll muss getrennt werden.','Folgen ausdrücken: deshalb, deswegen, darum, sodass','Einen Vorschlag für das Haus / die Firma machen'],
situacion:{title:'Reunião sobre o escritório verde',npc:'Frau Dr. Hoffmann',scene:'A empresa quer ficar mais sustentável. A chefe pede ideias à equipe.',role:'Du bist Frau Dr. Hoffmann, Teamleiterin. Du siezt Lucas in der Besprechung. Die Firma möchte umweltfreundlicher werden. Bitte um Vorschläge (Strom sparen, Papier, Kantine, Dienstreisen), frag nach Kosten und Umsetzung, sei offen, aber kritisch. Benutze Passiv mit Modalverben (Das müsste geprüft werden) und deshalb/deswegen. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Faça pelo menos duas propostas concretas, justifique (deshalb …) e responda às perguntas sobre custos.'},
placement:[
 {t:'mc',q:'Der Müll ___ getrennt werden.',opts:['muss','müssen','wird'],a:0},
 {t:'mc',q:'Es gab einen Sturm. ___ fuhren keine Züge.',opts:['Deshalb','Obwohl','Weil'],a:0},
 {t:'gap',q:'Die Fenster können geöffnet ___. (Passiv)',a:['werden']},
 {t:'mc',q:'„a poluição ambiental“',opts:['die Umweltverschmutzung','der Umweltschutz','die Umleitung'],a:0},
 {t:'mc',q:'Ich fahre mit dem Rad, ___ ich die Umwelt schützen will.',opts:['weil','deshalb','trotzdem'],a:0},
 {t:'gap',q:'Wir müssen Energie ___. (economizar)',a:['sparen']}],
lessons:[
{id:'l1',title:'Meio ambiente e clima',desc:'die Umwelt, das Klima, die Hitze …',steps:[
 {t:'vocab',title:'Meio ambiente',items:[['die Umwelt','o meio ambiente'],['der Umweltschutz','a proteção ambiental'],['die Umweltverschmutzung','a poluição ambiental'],['verschmutzen','poluir'],['das Klima','o clima'],['die Hitze','o calor (forte)'],['die Kälte','o frio'],['der Nebel','a neblina'],['feucht','úmido'],['mild','ameno'],['die Katastrophe','a catástrofe'],['zerstören','destruir'],['die Landwirtschaft','a agricultura'],['der Bauer / die Bäuerin','o agricultor / a agricultora'],['die Ernte','a colheita'],['das Gras','a grama, o capim'],['der Rasen','o gramado'],['blühen','florescer'],['das Haustier','o animal de estimação'],['füttern','alimentar (animal)']]},
 {t:'mc',q:'Im Sommer 2023 gab es eine extreme ___: über 38 Grad!',opts:['Hitze','Kälte','Ernte'],a:0},
 {t:'mc',q:'Autos und Fabriken ___ die Luft.',opts:['verschmutzen','schützen','blühen'],a:0},
 {t:'gap',q:'Im Frühling ___ die Bäume. (florescer)',a:['blühen']},
 {t:'match',q:'Ligue.',pairs:[['der Nebel','a neblina'],['die Ernte','a colheita'],['feucht','úmido'],['füttern','alimentar (animal)'],['zerstören','destruir']]},
 {t:'tr',de:'A proteção ambiental é importante para mim.',a:['Umweltschutz ist mir wichtig.','Der Umweltschutz ist mir wichtig.','Umweltschutz ist für mich wichtig.']}
]},
{id:'l2',title:'Energia e lixo – Passiv com modais',desc:'muss getrennt werden · kann recycelt werden',steps:[
 {t:'vocab',title:'Energia e lixo',items:[['der Abfall','o lixo, o resíduo'],['der Abfalleimer','a lixeira'],['die Müllabfuhr','a coleta de lixo'],['entsorgen','descartar'],['recyceln','reciclar'],['das Plastik','o plástico'],['der Kunststoff','o material sintético'],['verbrauchen','consumir'],['der Verbrauch','o consumo'],['sparsam','econômico'],['das Kraftwerk','a usina'],['die Solaranlage','o sistema de energia solar'],['erneuerbar','renovável'],['vermeiden','evitar']]},
 {t:'info',title:'Passiv com verbos modais',html:`<p>Modal (posição 2) + <b>particípio + werden</b> (no final):</p>
 <table><tr><td class="es-t">Man muss den Müll trennen.</td><td class="es-t">Der Müll <b>muss</b> getrennt <b>werden</b>.</td></tr>
 <tr><td class="es-t">Man kann Glas recyceln.</td><td class="es-t">Glas <b>kann</b> recycelt <b>werden</b>.</td></tr>
 <tr><td class="es-t">Man darf hier nichts wegwerfen.</td><td class="es-t">Hier <b>darf</b> nichts weggeworfen <b>werden</b>.</td></tr>
 <tr><td class="es-t">Man sollte Energie sparen.</td><td class="es-t">Energie <b>sollte</b> gespart <b>werden</b>.</td></tr></table>`},
 {t:'mc',q:'Batterien dürfen nicht in den Hausmüll geworfen ___.',opts:['werden','wird','worden'],a:0},
 {t:'mc',q:'Plastikflaschen ___ recycelt werden.',opts:['können','kann','werden'],a:0},
 {t:'gap',q:'Das Licht muss am Abend ausgeschaltet ___.',a:['werden']},
 {t:'gap',q:'Alte Medikamente sollten in der Apotheke ___ werden. (entsorgen)',a:['entsorgt']},
 {t:'order',es:'Im Büro sollte mehr Strom gespart werden',de:'No escritório, mais energia deveria ser economizada.'},
 {t:'tr',de:'O lixo tem que ser separado.',a:['Der Müll muss getrennt werden.']},
 {t:'tr',de:'Plástico deveria ser evitado.',a:['Plastik sollte vermieden werden.']}
]},
{id:'l3',title:'Consequências – deshalb',desc:'deshalb, deswegen, darum, sodass',steps:[
 {t:'info',title:'Consequência',html:`<table><tr><td class="es-t"><b>deshalb / deswegen / darum</b> + verbo logo depois</td><td class="es-t">Das Wetter war schlecht. <b>Deshalb</b> sind wir zu Hause geblieben.</td></tr>
 <tr><td class="es-t"><b>sodass</b> + verbo no final</td><td class="es-t">Es regnete stark, <b>sodass</b> die Straßen überflutet waren.</td></tr></table>
 <div class="ex">Compare: causa → <span class="es-t">weil / denn</span> · consequência → <span class="es-t">deshalb / sodass</span>.<br><span class="es-t">Ich fahre Rad, <b>weil</b> es gesund ist.</span> = <span class="es-t">Radfahren ist gesund. <b>Deshalb</b> fahre ich Rad.</span></div>`},
 {t:'mc',q:'Der Strom ist teuer. ___ schalte ich das Licht immer aus.',opts:['Deshalb','Weil','Obwohl'],a:0},
 {t:'mc',q:'Es war sehr neblig, ___ der Flug Verspätung hatte.',opts:['sodass','deshalb','trotzdem'],a:0},
 {t:'gap',q:'Ich habe kein Auto. ___ fahre ich viel mit dem Rad. (por isso)',a:['Deshalb|Deswegen|Darum']},
 {t:'read',title:'Leitura: Ein Viertel ohne Autos',text:`In Freiburg gibt es ein Stadtviertel, in dem fast keine Autos fahren: Vauban. Die Bewohner haben sich vor über 20 Jahren entschieden, ohne eigenes Auto zu leben. Deshalb gibt es breite Wege für Fußgänger und Radfahrer, viele Spielplätze und eine Straßenbahn direkt ins Zentrum. Wer trotzdem ein Auto braucht, muss es in einer Garage am Rand des Viertels parken – und dafür bezahlen. Viele Häuser haben Solaranlagen auf dem Dach, sodass sie mehr Energie produzieren, als sie verbrauchen.`,de:`Em Friburgo existe um bairro onde quase não circulam carros: Vauban. Os moradores decidiram há mais de 20 anos viver sem carro próprio. Por isso há caminhos largos para pedestres e ciclistas, muitos parquinhos e um bonde direto para o centro. Quem mesmo assim precisa de carro tem que estacioná-lo numa garagem na borda do bairro – e pagar por isso. Muitas casas têm painéis solares no telhado, de modo que produzem mais energia do que consomem.`},
 {t:'mc',q:'Wo müssen Autofahrer in Vauban parken?',opts:['in einer Garage am Rand','vor dem Haus','im Zentrum'],a:0},
 {t:'mc',q:'Was produzieren viele Häuser?',opts:['mehr Energie, als sie verbrauchen','gar keine Energie','Müll'],a:0},
 {t:'tr',de:'Eu quero proteger o meio ambiente, por isso compro menos plástico.',a:['Ich will die Umwelt schützen, deshalb kaufe ich weniger Plastik.','Ich will die Umwelt schützen. Deshalb kaufe ich weniger Plastik.','Ich möchte die Umwelt schützen, deshalb kaufe ich weniger Plastik.']}
]},
{id:'l4',title:'Escrever: uma proposta',desc:'E-Mail mit Vorschlägen',steps:[
 {t:'dialog',place:'Besprechung',title:'Escritório mais verde',scene:'A chefe pede ideias para tornar a empresa mais sustentável.',lines:[
  {n:'Frau Dr. Hoffmann',es:'Wir möchten umweltfreundlicher werden. Haben Sie Vorschläge?',de:'Queremos ser mais sustentáveis. O senhor tem sugestões?'},
  {you:true,opts:[{es:'Ja. Viele Computer laufen die ganze Nacht. Sie sollten abends automatisch ausgeschaltet werden.',ok:true},{es:'Ja. Die Computer müssen ausgeschaltet.',ok:false,why:'Passiv com modal: <i>… müssen ausgeschaltet <b>werden</b></i>.'}]},
  {n:'Frau Dr. Hoffmann',es:'Gute Idee. Und was ist mit dem Papier?',de:'Boa ideia. E quanto ao papel?'},
  {you:true,opts:[{es:'Wir drucken sehr viel. Deshalb würde ich vorschlagen, dass Dokumente nur noch digital verschickt werden.',ok:true},{es:'Wir drucken sehr viel, deshalb ich würde vorschlagen …',ok:false,why:'Depois de <i>deshalb</i> vem o verbo: <i>deshalb <b>würde</b> ich …</i>'}]},
  {n:'Frau Dr. Hoffmann',es:'Das müsste aber mit allen Abteilungen besprochen werden.',de:'Mas isso teria que ser discutido com todos os departamentos.'},
  {you:true,opts:[{es:'Natürlich. Ich kann bis Freitag eine kurze Präsentation vorbereiten.',ok:true},{es:'Das ist nicht mein Problem.',ok:false,why:'Mostre iniciativa e ofereça um próximo passo.'}]}]},
 {t:'free',task:'Escreva um e-mail (~80 palavras) para a administração do seu prédio com propostas para proteger o meio ambiente: 1) o problema que você vê, 2) duas propostas (Passiv com modais), 3) peça uma reunião dos moradores.',hint:'Sehr geehrte Damen und Herren, mir ist aufgefallen, dass … Deshalb schlage ich vor, … Außerdem könnte … werden. Wäre es möglich, eine Bewohnerversammlung …? Mit freundlichen Grüßen',focus:'Passiv mit Modalverben, deshalb/sodass, formelle E-Mail',model:'Sehr geehrte Damen und Herren,\nmir ist aufgefallen, dass in unserem Haus der Müll oft nicht richtig getrennt wird. Deshalb schlage ich vor, dass an den Mülltonnen deutliche Schilder in mehreren Sprachen angebracht werden. Außerdem könnte das Licht im Treppenhaus mit Bewegungsmeldern gesteuert werden, sodass weniger Strom verbraucht wird. Wäre es möglich, im nächsten Monat eine Bewohnerversammlung zu diesem Thema zu organisieren?\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Passiv com modais</h3><p class="es-t">Der Müll muss getrennt werden. · Glas kann recycelt werden. · Hier darf nichts weggeworfen werden. · Energie sollte gespart werden.</p>
<h3>Consequência</h3><p class="es-t">Deshalb / Deswegen / Darum + verbo · …, sodass + verbo no final</p>
<h3>Meio ambiente</h3><p class="es-t">die Umwelt · der Umweltschutz · verschmutzen · entsorgen · recyceln · verbrauchen · sparsam · erneuerbar · vermeiden</p>`});

/* ================= KAPITEL 33 · BILDUNG & WEITERBILDUNG ================= */
LANGS.de.course.units.push({id:'k33',n:'33',level:'B1',title:'Bildung & Weiterbildung',sub:'Escola, faculdade e cursos · línguas · conectores duplos: sowohl … als auch, weder … noch, je … desto',
goals:['Über Schule, Studium und Kurse sprechen','Sprachen lernen: Muttersprache, Fremdsprache, Dialekt','Zweiteilige Konnektoren: sowohl … als auch, weder … noch, entweder … oder, nicht nur … sondern auch','je … desto: Je mehr ich übe, desto besser spreche ich.','Sich für einen Kurs anmelden – Voraussetzungen klären'],
situacion:{title:'Informar-se sobre um curso',npc:'Frau Jansen (VHS)',scene:'Você quer se inscrever num curso de preparação para a prova B1 na Volkshochschule.',role:'Du bist Frau Jansen, Beraterin an der Volkshochschule Frankfurt, freundlich und genau. Du siezt. Frag nach Vorkenntnissen und Zielen, erkläre den Intensivkurs (vier Wochen, Montag bis Freitag) und den Abendkurs (zehn Wochen, zweimal pro Woche), Preise, Einstufungstest als Voraussetzung, Anmeldeschluss. Benutze zweiteilige Konnektoren. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Explique o seu objetivo, compare os dois cursos e pergunte sobre requisitos, preço e prazo.'},
placement:[
 {t:'mc',q:'Ich spreche ___ Englisch ___ Spanisch.',opts:['sowohl … als auch','weder … als auch','entweder … sondern'],a:0},
 {t:'mc',q:'Er hat ___ Zeit ___ Geld.',opts:['weder … noch','sowohl … noch','entweder … oder'],a:0},
 {t:'mc',q:'Je mehr du übst, ___ besser wirst du.',opts:['desto','als','so'],a:0},
 {t:'gap',q:'Wir fahren ___ mit dem Zug oder mit dem Bus. (ou … ou)',a:['entweder']},
 {t:'mc',q:'„a língua materna“',opts:['die Muttersprache','die Fremdsprache','die Aussprache'],a:0},
 {t:'gap',q:'Sie spricht nicht nur Deutsch, ___ auch Japanisch.',a:['sondern']}],
lessons:[
{id:'l1',title:'Escola e faculdade',desc:'das Semester, das Referat, die Nachhilfe …',steps:[
 {t:'vocab',title:'Estudar',items:[['das Semester','o semestre'],['das Seminar','o seminário'],['das Referat','a apresentação (trabalho oral)'],['die Klassenarbeit','a prova (escola)'],['durchfallen','ser reprovado'],['die Nachhilfe','a aula particular (reforço)'],['der / die Studierende','o / a estudante (universitário)'],['der Professor / die Professorin','o professor / a professora (universidade)'],['die Hochschule','a instituição de ensino superior'],['das Lexikon','a enciclopédia'],['nachschlagen','consultar (dicionário)'],['die Methode','o método'],['die Voraussetzung','o requisito'],['erforderlich','necessário, exigido'],['die Teilnahme','a participação'],['teilnehmen an','participar de'],['der Teilnehmer / die Teilnehmerin','o participante / a participante']]},
 {t:'mc',q:'Mein Sohn ist in Mathe schlecht. Er bekommt zweimal pro Woche ___.',opts:['Nachhilfe','ein Referat','ein Semester'],a:0},
 {t:'mc',q:'Wenn du ein Wort nicht kennst, kannst du es im Wörterbuch ___.',opts:['nachschlagen','durchfallen','teilnehmen'],a:0},
 {t:'gap',q:'Für den Kurs ist ein Einstufungstest ___. (necessário)',a:['erforderlich|notwendig|nötig']},
 {t:'match',q:'Ligue.',pairs:[['das Referat','a apresentação'],['durchfallen','ser reprovado'],['die Voraussetzung','o requisito'],['teilnehmen an','participar de'],['das Lexikon','a enciclopédia']]},
 {t:'tr',de:'Eu gostaria de participar do curso.',a:['Ich möchte gern an dem Kurs teilnehmen.','Ich möchte am Kurs teilnehmen.','Ich würde gern an dem Kurs teilnehmen.','Ich möchte an dem Kurs teilnehmen.']}
]},
{id:'l2',title:'Línguas',desc:'die Muttersprache, der Dialekt, die Aussprache …',steps:[
 {t:'vocab',title:'Línguas',items:[['die Muttersprache','a língua materna'],['die Fremdsprache','a língua estrangeira'],['die Zweitsprache','a segunda língua'],['der Dialekt','o dialeto'],['die Aussprache','a pronúncia'],['aussprechen','pronunciar'],['fließend','fluente'],['der Intensivkurs','o curso intensivo'],['der Übersetzer / die Übersetzerin','o tradutor / a tradutora']]},
 {t:'mc',q:'Portugiesisch ist Lucas’ ___.',opts:['Muttersprache','Fremdsprache','Zweitsprache'],a:0},
 {t:'mc',q:'In Bayern verstehe ich manche Leute kaum. Sie sprechen ___.',opts:['Dialekt','fließend','Aussprache'],a:0},
 {t:'gap',q:'Wie spricht man dieses Wort ___? (pronunciar)',a:['aus']},
 {t:'read',title:'Leitura: Mehrsprachig in Frankfurt',text:`In Frankfurt haben fast 40 Prozent der Menschen eine andere Muttersprache als Deutsch. In vielen Schulklassen werden sowohl Türkisch als auch Arabisch, Polnisch oder Portugiesisch gesprochen. Früher sollten Kinder zu Hause nur Deutsch sprechen. Heute sagen Experten: Je besser ein Kind seine Muttersprache spricht, desto leichter lernt es auch weitere Sprachen. Deshalb bieten manche Schulen nicht nur Deutschkurse, sondern auch Unterricht in der Herkunftssprache an.`,de:`Em Frankfurt, quase 40 por cento das pessoas têm outra língua materna que não o alemão. Em muitas turmas escolares se fala tanto turco quanto árabe, polonês ou português. Antigamente, as crianças deviam falar só alemão em casa. Hoje os especialistas dizem: quanto melhor uma criança fala a língua materna, mais fácil ela aprende outras línguas. Por isso algumas escolas oferecem não só cursos de alemão, mas também aulas na língua de origem.`},
 {t:'mc',q:'Was sagen Experten heute?',opts:['Eine gute Muttersprache hilft beim Lernen anderer Sprachen.','Kinder sollen nur Deutsch sprechen.','Dialekte sind schlecht.'],a:0},
 {t:'mc',q:'Was bieten manche Schulen an?',opts:['Unterricht in der Herkunftssprache','nur Deutschkurse','keine Sprachkurse'],a:0},
 {t:'tr',de:'Ela fala alemão fluentemente.',a:['Sie spricht fließend Deutsch.','Sie spricht Deutsch fließend.']}
]},
{id:'l3',title:'Conectores duplos',desc:'sowohl … als auch · weder … noch · je … desto',steps:[
 {t:'info',title:'Conectores de duas partes',html:`<table><tr><td class="es-t">sowohl … als auch</td><td>tanto … quanto</td><td class="es-t">Ich lerne sowohl Deutsch als auch Englisch.</td></tr>
 <tr><td class="es-t">weder … noch</td><td>nem … nem</td><td class="es-t">Er spricht weder Deutsch noch Englisch.</td></tr>
 <tr><td class="es-t">entweder … oder</td><td>ou … ou</td><td class="es-t">Entweder mache ich den Abendkurs oder den Intensivkurs.</td></tr>
 <tr><td class="es-t">nicht nur … sondern auch</td><td>não só … mas também</td><td class="es-t">Der Kurs ist nicht nur gut, sondern auch günstig.</td></tr>
 <tr><td class="es-t">zwar … aber</td><td>é verdade que … mas</td><td class="es-t">Der Kurs ist zwar teuer, aber sehr gut.</td></tr>
 <tr><td class="es-t">je … desto</td><td>quanto mais … mais</td><td class="es-t">Je mehr ich übe, desto besser spreche ich.</td></tr></table>
 <div class="ex"><b>je</b> + comparativo + verbo no final, <b>desto</b> + comparativo + verbo logo depois.</div>`},
 {t:'mc',q:'Der Intensivkurs ist ___ teuer, ___ man lernt sehr schnell.',opts:['zwar … aber','weder … noch','sowohl … als auch'],a:0},
 {t:'mc',q:'Ich habe ___ Zeit ___ Lust auf den Kurs. Ich gehe nicht hin.',opts:['weder … noch','entweder … oder','sowohl … als auch'],a:0},
 {t:'gap',q:'Je früher du anfängst, ___ schneller bist du fertig.',a:['desto']},
 {t:'gap',q:'Für die Stelle braucht man ___ Englisch- als auch Deutschkenntnisse.',a:['sowohl']},
 {t:'gap',q:'Wir können ___ heute oder morgen lernen.',a:['entweder']},
 {t:'order',es:'Je länger ich in Deutschland lebe desto besser verstehe ich die Kultur',de:'Quanto mais tempo vivo na Alemanha, melhor entendo a cultura.'},
 {t:'tr',de:'Eu não falo nem italiano nem francês.',a:['Ich spreche weder Italienisch noch Französisch.']},
 {t:'speak',es:'Der Kurs ist nicht nur interessant, sondern auch sehr praktisch für meinen Beruf.',de:'O curso não é só interessante, mas também muito prático para a minha profissão.',tip:'<i>nicht nur … sondern auch</i>.'}
]},
{id:'l4',title:'Escrever: inscrição num curso',desc:'Anfrage an die Volkshochschule',steps:[
 {t:'read',title:'Leitura: Kursangebot VHS',text:`Prüfungsvorbereitung Deutsch B1
A) Intensivkurs: 4 Wochen, Montag bis Freitag, 9–13 Uhr, 380 €. Für Teilnehmende, die schnell zur Prüfung wollen.
B) Abendkurs: 10 Wochen, dienstags und donnerstags, 18–21 Uhr, 290 €. Ideal für Berufstätige.
Voraussetzung für beide Kurse: Einstufungstest (kostenlos, online). Die Prüfungsgebühr ist nicht im Kurspreis enthalten. Anmeldeschluss: 15. September.`,de:`Preparação para a prova de alemão B1\nA) Curso intensivo: 4 semanas, de segunda a sexta, das 9h às 13h, 380 €. Para participantes que querem fazer a prova rápido.\nB) Curso noturno: 10 semanas, terças e quintas, das 18h às 21h, 290 €. Ideal para quem trabalha.\nRequisito para os dois cursos: teste de nivelamento (gratuito, online). A taxa da prova não está incluída no preço do curso. Prazo de inscrição: 15 de setembro.`},
 {t:'mc',q:'Welcher Kurs passt für Lucas, der tagsüber arbeitet?',opts:['B','A','keiner'],a:0},
 {t:'mc',q:'Was ist im Kurspreis nicht enthalten?',opts:['die Prüfungsgebühr','der Einstufungstest','das Kursbuch'],a:0},
 {t:'free',task:'Escreva um e-mail (~80 palavras) para a VHS: 1) em qual curso você quer se inscrever e por quê, 2) seus conhecimentos atuais, 3) duas perguntas (material, o que acontece se faltar a uma aula, desconto …).',hint:'Sehr geehrte Damen und Herren, ich interessiere mich für … , weil … Ich lerne seit … Deutsch und … Könnten Sie mir sagen, ob … ? Außerdem möchte ich wissen, … Mit freundlichen Grüßen',focus:'formelle Anfrage, zweiteilige Konnektoren, indirekte Fragen',model:'Sehr geehrte Damen und Herren,\nich interessiere mich für den Abendkurs zur Prüfungsvorbereitung B1, weil ich tagsüber arbeite. Ich lerne seit zwei Jahren Deutsch und kann mich sowohl im Alltag als auch im Beruf gut verständigen, aber beim Schreiben mache ich noch viele Fehler. Könnten Sie mir sagen, ob das Kursbuch im Preis enthalten ist? Außerdem möchte ich wissen, ob es eine Ermäßigung gibt, wenn die Firma einen Teil bezahlt.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Conectores duplos</h3><table><tr><td class="es-t">sowohl … als auch</td><td>tanto … quanto</td></tr><tr><td class="es-t">weder … noch</td><td>nem … nem</td></tr><tr><td class="es-t">entweder … oder</td><td>ou … ou</td></tr><tr><td class="es-t">nicht nur … sondern auch</td><td>não só … mas também</td></tr><tr><td class="es-t">zwar … aber</td><td>é verdade que … mas</td></tr><tr><td class="es-t">je … desto</td><td>quanto mais … mais</td></tr></table>
<h3>Estudar</h3><p class="es-t">das Semester · das Referat · durchfallen · die Nachhilfe · nachschlagen · die Voraussetzung · teilnehmen an · die Muttersprache · fließend</p>`});

/* ================= KAPITEL 34 · POLITIK & GESELLSCHAFT ================= */
LANGS.de.course.units.push({id:'k34',n:'34',level:'B1',title:'Politik & Gesellschaft',sub:'Eleições e participação · sociedade e integração · Konjunktiv II no passado (hätte gemacht, wäre gegangen) · wegen / trotz / während + genitivo',
goals:['Über Wahlen, Parteien und Politik sprechen','Gesellschaft: Integration, Ehrenamt, Protest','Genitiv-Präpositionen: wegen, trotz, während, innerhalb, außerhalb','Konjunktiv II Vergangenheit: Ich hätte … gemacht. Ich wäre … gegangen.','Seine Meinung in einem Forum begründen'],
situacion:{title:'Assembleia do bairro',npc:'Herr Wagner',scene:'Na assembleia do bairro se discute se a rua principal deve virar zona de pedestres. O Sr. Wagner, da associação de moradores, pede a sua opinião.',role:'Du bist Herr Wagner, ca. 55 Jahre, Sprecher der Bürgerinitiative im Stadtteil Bornheim in Frankfurt. Du siezt. Bei der Bürgerversammlung geht es um die Frage, ob die Berger Straße eine Fußgängerzone werden soll. Du bist eher dafür, nennst aber auch Gegenargumente (Geschäfte, Lieferverkehr, Parkplätze). Frag Lucas nach seiner Meinung, nach Erfahrungen aus Brasilien und ob er sich engagieren möchte. Benutze wegen/trotz/während + Genitiv und Konjunktiv II Vergangenheit (Man hätte die Bürger früher fragen sollen). Sprich natürliches Deutsch auf B1-Niveau.',goal:'Dê a sua opinião com argumentos (wegen, trotz …), compare com a sua cidade e diga se você quer participar.'},
placement:[
 {t:'mc',q:'___ des Regens fand die Demonstration statt.',opts:['Trotz','Wegen','Während'],a:0},
 {t:'mc',q:'___ der Wahl dürfen keine Plakate mehr aufgehängt werden.',opts:['Während','Trotz','Obwohl'],a:0},
 {t:'mc',q:'Wenn ich Zeit gehabt hätte, ___ ich zur Versammlung gegangen.',opts:['wäre','hätte','würde'],a:0},
 {t:'gap',q:'Ich ___ dich angerufen, aber ich hatte deine Nummer nicht. (haben – Konjunktiv II)',a:['hätte']},
 {t:'mc',q:'„o governo“',opts:['die Regierung','die Wahl','die Partei'],a:0},
 {t:'gap',q:'Der Zug hatte ___ eines Unfalls Verspätung. (por causa de)',a:['wegen']}],
lessons:[
{id:'l1',title:'Política e eleições',desc:'die Wahl, die Partei, die Regierung …',steps:[
 {t:'vocab',title:'Política',items:[['die Politik','a política'],['politisch','político'],['der Politiker / die Politikerin','o político / a política'],['die Partei','o partido'],['die Regierung','o governo'],['das Parlament','o parlamento'],['die Demokratie','a democracia'],['der Staat','o Estado'],['das Gesetz','a lei'],['der Bürger / die Bürgerin','o cidadão / a cidadã'],['das Recht','o direito'],['die Wahl','a eleição; a escolha'],['wählen','votar; escolher'],['die Stimme','a voz; o voto'],['der Kandidat / die Kandidatin','o candidato / a candidata'],['abstimmen','votar (sobre algo)'],['die Steuer','o imposto'],['die Wirtschaft','a economia'],['die Reform','a reforma'],['die Krise','a crise'],['die Bevölkerung','a população']]},
 {t:'mc',q:'Alle vier Jahre ___ die Deutschen den Bundestag.',opts:['wählen','abstimmen','regieren'],a:0},
 {t:'mc',q:'Die SPD, die CDU und die Grünen sind ___.',opts:['Parteien','Regierungen','Steuern'],a:0},
 {t:'mc',q:'Wer in Deutschland arbeitet, muss ___ zahlen.',opts:['Steuern','Stimmen','Wahlen'],a:0},
 {t:'gap',q:'Im Parlament wird morgen über das neue Gesetz ___. (votar)',a:['abgestimmt']},
 {t:'match',q:'Ligue.',pairs:[['die Regierung','o governo'],['die Bevölkerung','a população'],['die Wirtschaft','a economia'],['das Gesetz','a lei'],['die Krise','a crise']]},
 {t:'read',title:'Leitura: Wählen in Deutschland',text:`Deutschland ist eine parlamentarische Demokratie. Alle vier Jahre wählen die Bürgerinnen und Bürger den Bundestag, das Parlament in Berlin. Jeder Wähler hat zwei Stimmen: Mit der ersten Stimme wählt er einen Kandidaten aus seiner Region, mit der zweiten eine Partei. Meistens bekommt keine Partei die Mehrheit, deshalb bilden zwei oder drei Parteien zusammen eine Regierung. Ausländer ohne deutschen Pass dürfen bei der Bundestagswahl nicht wählen. Bürger aus anderen EU-Ländern dürfen aber bei Kommunalwahlen, also in ihrer Stadt, mitbestimmen.`,de:`A Alemanha é uma democracia parlamentar. A cada quatro anos, as cidadãs e os cidadãos elegem o Bundestag, o parlamento em Berlim. Cada eleitor tem dois votos: com o primeiro voto ele escolhe um candidato da sua região, com o segundo um partido. Na maioria das vezes nenhum partido consegue a maioria, por isso dois ou três partidos formam juntos um governo. Estrangeiros sem passaporte alemão não podem votar na eleição do Bundestag. Mas cidadãos de outros países da UE podem participar das eleições municipais, ou seja, das eleições da sua cidade.`},
 {t:'mc',q:'Wie viele Stimmen hat jeder Wähler bei der Bundestagswahl?',opts:['zwei','eine','vier'],a:0},
 {t:'mc',q:'Warum bilden oft mehrere Parteien zusammen eine Regierung?',opts:['Keine Partei hat allein die Mehrheit.','Das Gesetz verbietet eine Partei allein.','Die Bürger wählen keine Partei.'],a:0},
 {t:'mc',q:'Wer darf bei Kommunalwahlen wählen?',opts:['auch Bürger aus anderen EU-Ländern','alle Ausländer','nur Politiker'],a:0},
 {t:'tr',de:'Na Alemanha, todo cidadão tem o direito de votar.',a:['In Deutschland hat jeder Bürger das Recht zu wählen.','In Deutschland hat jeder Bürger das Recht, zu wählen.','Jeder Bürger hat in Deutschland das Recht zu wählen.','In Deutschland hat jede Bürgerin und jeder Bürger das Recht zu wählen.']}
]},
{id:'l2',title:'Sociedade e participação',desc:'das Ehrenamt, die Integration, protestieren …',steps:[
 {t:'vocab',title:'Sociedade',items:[['die Gesellschaft','a sociedade; a companhia'],['die Integration','a integração'],['integrieren','integrar'],['die Migration','a migração'],['der Migrant / die Migrantin','o migrante / a migrante'],['das Asyl','o asilo'],['gleichberechtigt','com direitos iguais'],['die Gewalt','a violência'],['sich engagieren','engajar-se'],['das Ehrenamt','o trabalho voluntário'],['ehrenamtlich','voluntário (sem pagamento)'],['spenden','doar'],['die Spende','a doação'],['die Organisation','a organização'],['die Versammlung','a assembleia, a reunião'],['die Demonstration','a manifestação'],['protestieren','protestar'],['der Protest','o protesto'],['fordern','exigir'],['die Forderung','a exigência, a reivindicação'],['fördern','incentivar, apoiar'],['die Förderung','o incentivo, o apoio']]},
 {t:'mc',q:'Meine Nachbarin hilft jeden Samstag in der Tafel. Sie bekommt kein Geld, sie macht das ___.',opts:['ehrenamtlich','gleichberechtigt','politisch'],a:0},
 {t:'mc',q:'Tausende Menschen ___ gegen die neue Autobahn.',opts:['protestierten','förderten','spendeten'],a:0},
 {t:'mc',q:'Die Stadt ___ Sprachkurse für Migranten – sie bezahlt einen Teil.',opts:['fördert','fordert','protestiert'],a:0},
 {t:'gap',q:'Nach dem Erdbeben haben viele Menschen Geld ___. (doar – Partizip)',a:['gespendet']},
 {t:'info',title:'fordern ≠ fördern',html:`<table><tr><td class="es-t"><b>fordern</b></td><td>exigir</td><td class="es-t">Die Studierenden fordern günstigere Wohnungen.</td></tr>
 <tr><td class="es-t"><b>fördern</b></td><td>incentivar, apoiar</td><td class="es-t">Die Firma fördert Deutschkurse für neue Mitarbeiter.</td></tr></table>
 <div class="ex">Só o trema muda – e o sentido todo! Pronuncie bem: <span class="es-t">fordern</span> com <b>o</b>, <span class="es-t">fördern</span> com <b>ö</b>.</div>`},
 {t:'read',title:'Leitura: Ehrenamt in Deutschland',text:`Fast 30 Millionen Menschen in Deutschland engagieren sich ehrenamtlich – also ungefähr jeder Dritte. Sie trainieren Kinder im Sportverein, arbeiten bei der freiwilligen Feuerwehr, besuchen alte Menschen oder helfen Geflüchteten bei Behördengängen. Viele sagen, dass sie durch das Ehrenamt neue Freunde gefunden haben. Auch für Migranten ist es eine gute Möglichkeit: Man lernt die Sprache im Alltag, lernt Nachbarn kennen und wird schneller Teil der Gesellschaft. Trotz des großen Engagements fehlen aber vielen Vereinen junge Mitglieder.`,de:`Quase 30 milhões de pessoas na Alemanha fazem trabalho voluntário – ou seja, mais ou menos uma em cada três. Elas treinam crianças no clube esportivo, trabalham no corpo de bombeiros voluntário, visitam idosos ou ajudam refugiados a resolver coisas em repartições públicas. Muitos dizem que encontraram novos amigos através do voluntariado. Também para migrantes é uma boa oportunidade: a gente aprende a língua no dia a dia, conhece os vizinhos e passa a fazer parte da sociedade mais rápido. Apesar do grande engajamento, muitas associações não têm membros jovens.`},
 {t:'mc',q:'Wie viele Menschen in Deutschland arbeiten ehrenamtlich?',opts:['ungefähr jeder Dritte','fast niemand','jeder Zweite'],a:0},
 {t:'mc',q:'Was ist für Migranten ein Vorteil des Ehrenamts?',opts:['Man lernt die Sprache im Alltag.','Man verdient gut.','Man bekommt schneller einen Pass.'],a:0},
 {t:'mc',q:'Welches Problem haben viele Vereine?',opts:['Es fehlen junge Mitglieder.','Sie haben zu viel Geld.','Niemand will Sport machen.'],a:0},
 {t:'tr',de:'Eu gostaria de me engajar no bairro.',a:['Ich möchte mich im Stadtteil engagieren.','Ich würde mich gern im Stadtteil engagieren.','Ich möchte mich gern im Stadtteil engagieren.','Ich möchte mich im Viertel engagieren.','Ich würde mich gern im Viertel engagieren.']}
]},
{id:'l3',title:'wegen, trotz, während + genitivo',desc:'wegen des Regens · trotz der Kälte',steps:[
 {t:'info',title:'Preposições com genitivo',html:`<table><tr><td class="es-t"><b>wegen</b></td><td>por causa de</td><td class="es-t">Wegen des Streiks fahren heute keine Busse.</td></tr>
 <tr><td class="es-t"><b>trotz</b></td><td>apesar de</td><td class="es-t">Trotz des Regens kamen viele Leute zur Demonstration.</td></tr>
 <tr><td class="es-t"><b>während</b></td><td>durante</td><td class="es-t">Während der Versammlung darf man nicht rauchen.</td></tr>
 <tr><td class="es-t"><b>innerhalb</b></td><td>dentro de (prazo/lugar)</td><td class="es-t">Bitte zahlen Sie innerhalb einer Woche.</td></tr>
 <tr><td class="es-t"><b>außerhalb</b></td><td>fora de</td><td class="es-t">Wir wohnen außerhalb der Stadt.</td></tr></table>
 <div class="ex">Genitivo: <span class="es-t"><b>des</b> Regens / <b>des</b> Streiks</span> (masc./neutro + <b>-s/-es</b>), <span class="es-t"><b>der</b> Versammlung</span> (fem. e plural), <span class="es-t"><b>eines</b> Unfalls / <b>einer</b> Woche</span>.<br>Na fala do dia a dia se ouve também <span class="es-t">wegen dem Regen</span> (dativo) – na prova, use o genitivo.</div>`},
 {t:'info',title:'Preposição ou conector?',html:`<table><tr><td>preposição + substantivo</td><td>conector + frase (verbo no final)</td></tr>
 <tr><td class="es-t"><b>Wegen</b> des Regens bleiben wir zu Hause.</td><td class="es-t"><b>Weil</b> es regnet, bleiben wir zu Hause.</td></tr>
 <tr><td class="es-t"><b>Trotz</b> des Regens gehen wir spazieren.</td><td class="es-t"><b>Obwohl</b> es regnet, gehen wir spazieren.</td></tr>
 <tr><td class="es-t"><b>Während</b> des Essens telefoniert er.</td><td class="es-t"><b>Während</b> er isst, telefoniert er.</td></tr></table>`},
 {t:'mc',q:'___ der hohen Mieten ziehen viele Familien aus der Stadt.',opts:['Wegen','Trotz','Obwohl'],a:0},
 {t:'mc',q:'___ seiner Erkältung ist er zur Arbeit gegangen.',opts:['Trotz','Wegen','Während'],a:0},
 {t:'mc',q:'Während ___ Wahlkampfs gibt es überall Plakate.',opts:['des','dem','der'],a:0},
 {t:'mc',q:'Die Bibliothek liegt außerhalb ___ Zentrums.',opts:['des','dem','das'],a:0},
 {t:'gap',q:'Trotz ___ Kälte waren viele Menschen auf der Straße. (die Kälte)',a:['der']},
 {t:'gap',q:'Wegen ___ Streiks fällt mein Flug aus. (ein Streik)',a:['eines']},
 {t:'gap',q:'Sie müssen das Formular ___ einer Woche abgeben. (dentro de)',a:['innerhalb']},
 {t:'order',es:'Wegen der Baustelle ist die Straße bis Freitag gesperrt',de:'Por causa da obra, a rua está fechada até sexta.'},
 {t:'tr',de:'Apesar do mau tempo, muitas pessoas foram votar.',a:['Trotz des schlechten Wetters sind viele Menschen wählen gegangen.','Trotz des schlechten Wetters gingen viele Menschen wählen.','Trotz des schlechten Wetters sind viele Leute wählen gegangen.','Trotz des schlechten Wetters gingen viele Leute wählen.']},
 {t:'tr',de:'Durante a reunião, ele não disse nada.',a:['Während der Versammlung hat er nichts gesagt.','Während der Besprechung hat er nichts gesagt.','Während der Sitzung hat er nichts gesagt.','Während der Versammlung sagte er nichts.','Während der Besprechung sagte er nichts.']}
]},
{id:'l4',title:'Konjunktiv II no passado',desc:'Ich hätte … gemacht · Ich wäre … gegangen',steps:[
 {t:'info',title:'Falar do que não aconteceu',html:`<p>Para algo que <b>poderia ter acontecido</b> no passado (mas não aconteceu): <b>hätte / wäre</b> + particípio.</p>
 <table><tr><td class="es-t">Ich <b>hätte</b> gern <b>gewählt</b>, aber ich durfte nicht.</td><td>Eu teria votado com prazer, mas não podia.</td></tr>
 <tr><td class="es-t">Wir <b>wären</b> früher <b>gekommen</b>, aber der Bus war zu spät.</td><td>Teríamos chegado mais cedo, mas o ônibus atrasou.</td></tr>
 <tr><td class="es-t">Wenn ich das <b>gewusst hätte</b>, <b>wäre</b> ich zu Hause <b>geblieben</b>.</td><td>Se eu tivesse sabido disso, teria ficado em casa.</td></tr></table>
 <div class="ex"><b>hätte</b> ou <b>wäre</b>? Igual ao Perfekt: <span class="es-t">ich habe gemacht → ich hätte gemacht</span> · <span class="es-t">ich bin gegangen → ich wäre gegangen</span>.<br>Com verbo modal: <span class="es-t">Man <b>hätte</b> die Bürger früher <b>fragen sollen</b>.</span> (teria sido preciso perguntar)</div>`},
 {t:'mc',q:'Ich ___ dir geholfen, aber du hast nichts gesagt.',opts:['hätte','wäre','würde'],a:0},
 {t:'mc',q:'Wenn der Zug pünktlich gewesen wäre, ___ ich nicht zu spät gekommen.',opts:['wäre','hätte','würde'],a:0},
 {t:'mc',q:'Die Regierung ___ die Steuern nicht erhöhen sollen.',opts:['hätte','wäre','hat'],a:0},
 {t:'gap',q:'Wenn ich mehr gelernt ___, hätte ich die Prüfung bestanden.',a:['hätte']},
 {t:'gap',q:'Ohne den Stau ___ wir pünktlich angekommen.',a:['wären']},
 {t:'gap',q:'Ich hätte dich gern ___. (besuchen – particípio)',a:['besucht']},
 {t:'order',es:'Wenn ich das gewusst hätte wäre ich mitgekommen',de:'Se eu tivesse sabido disso, teria ido junto.'},
 {t:'tr',de:'Eu teria votado, mas eu não tinha passaporte alemão.',a:['Ich hätte gewählt, aber ich hatte keinen deutschen Pass.','Ich hätte gern gewählt, aber ich hatte keinen deutschen Pass.']},
 {t:'tr',de:'Nós teríamos ficado mais tempo.',a:['Wir wären länger geblieben.']},
 {t:'dialog',place:'Bürgerversammlung',title:'Depois da assembleia',scene:'O Sr. Wagner, da associação de moradores, conversa com você depois da assembleia sobre a zona de pedestres.',lines:[
  {n:'Herr Wagner',es:'Schade, dass so wenige Leute gekommen sind. Wegen des Fußballspiels sind viele zu Hause geblieben.',de:'Pena que tão poucas pessoas vieram. Por causa do jogo de futebol, muitos ficaram em casa.'},
  {you:true,opts:[{es:'Ja, man hätte die Versammlung an einem anderen Abend machen sollen.',ok:true},{es:'Ja, man hätte die Versammlung an einem anderen Abend machen gesollt.',ok:false,why:'Com modal no Konjunktiv II passado, o modal fica no infinitivo: <i>hätte … machen <b>sollen</b></i>.'}]},
  {n:'Herr Wagner',es:'Was halten Sie denn von der Fußgängerzone?',de:'E o que o senhor acha da zona de pedestres?'},
  {you:true,opts:[{es:'Ich bin dafür. Trotz der Nachteile für die Autofahrer wäre die Straße viel ruhiger.',ok:true},{es:'Ich bin dafür. Trotz die Nachteile wäre die Straße ruhiger.',ok:false,why:'<i>trotz</i> + genitivo: <i>trotz <b>der</b> Nachteile</i>.'}]},
  {n:'Herr Wagner',es:'Hätten Sie Lust, in unserer Bürgerinitiative mitzumachen?',de:'O senhor teria vontade de participar da nossa associação de moradores?'},
  {you:true,opts:[{es:'Gern! Während der Woche habe ich wenig Zeit, aber am Wochenende kann ich helfen.',ok:true},{es:'Gern! Während die Woche habe ich wenig Zeit.',ok:false,why:'<i>während</i> + genitivo: <i>während <b>der</b> Woche</i>.'}]}]},
 {t:'speak',es:'Wenn ich früher nach Deutschland gekommen wäre, hätte ich schneller Deutsch gelernt.',de:'Se eu tivesse vindo para a Alemanha antes, teria aprendido alemão mais rápido.',tip:'<i>wäre gekommen · hätte gelernt</i>.'}
]},
{id:'l5',title:'Escrever: opinião num fórum',desc:'Forumsbeitrag: Wählen ab 16?',steps:[
 {t:'vocab',title:'Discutir',items:[['die Diskussion','a discussão'],['der Standpunkt','o ponto de vista'],['die Kritik','a crítica'],['kritisieren','criticar'],['zustimmen','concordar'],['ablehnen','rejeitar, recusar'],['widersprechen','contradizer, discordar'],['das Argument','o argumento'],['überzeugen','convencer']]},
 {t:'mc',q:'Ich finde, du hast recht. Ich ___ dir zu.',opts:['stimme','lehne','widerspreche'],a:0},
 {t:'mc',q:'Der Chef hat meinen Vorschlag ___. Er findet ihn zu teuer.',opts:['abgelehnt','zugestimmt','überzeugt'],a:0},
 {t:'read',title:'Leitura: Forum „Wählen ab 16?“',text:`Paul, 17: Ich finde, Jugendliche sollten ab 16 wählen dürfen. Wir müssen mit den Entscheidungen der Politik viel länger leben als die Älteren – zum Beispiel beim Klimaschutz. Trotzdem fragt uns niemand.
Monika, 58: Ich lehne das ab. Mit 16 interessieren sich die meisten nicht für Politik. Ich hätte mit 16 auch nicht gewusst, welche Partei ich wählen soll.
Ali, 34: Ich stimme Paul zu. In einigen Bundesländern dürfen Jugendliche schon bei Kommunalwahlen ab 16 wählen, und es gab keine Probleme. Wichtig wäre aber mehr Politik-Unterricht in der Schule.`,de:`Paul, 17: Acho que os jovens deveriam poder votar a partir dos 16. Nós vamos viver com as decisões da política muito mais tempo do que os mais velhos – por exemplo na proteção do clima. Mesmo assim, ninguém nos pergunta.\nMonika, 58: Eu sou contra. Aos 16 a maioria não se interessa por política. Com 16 anos eu também não saberia em qual partido votar.\nAli, 34: Concordo com o Paul. Em alguns estados os jovens já podem votar a partir dos 16 em eleições municipais, e não houve problemas. Mas seria importante ter mais aulas de política na escola.`},
 {t:'mc',q:'Ist Monika für das Wählen ab 16?',opts:['nein','ja'],a:0},
 {t:'mc',q:'Was wünscht sich Ali?',opts:['mehr Politik-Unterricht in der Schule','weniger Wahlen','Wählen ab 14'],a:0},
 {t:'info',title:'Escrever um post de opinião',html:`<table><tr><td>dar a opinião</td><td class="es-t">Meiner Meinung nach … · Ich bin der Meinung, dass … · Ich finde es richtig / falsch, dass …</td></tr>
 <tr><td>concordar / discordar</td><td class="es-t">Ich stimme … zu. · Da muss ich … widersprechen. · Das sehe ich anders.</td></tr>
 <tr><td>argumentar</td><td class="es-t">Ein Vorteil / Nachteil ist, dass … · Wegen … · Trotz … · Außerdem …</td></tr>
 <tr><td>experiência própria</td><td class="es-t">In meinem Heimatland … · Ich habe die Erfahrung gemacht, dass …</td></tr></table>`},
 {t:'free',task:'Escreva uma resposta no fórum (~80 palavras): você é a favor ou contra o voto a partir dos 16? 1) dê a sua opinião, 2) dois argumentos, 3) conte como é no seu país.',hint:'Meiner Meinung nach … Ein wichtiges Argument ist, dass … Außerdem … Ich stimme … zu / Da muss ich … widersprechen. In meinem Heimatland …',focus:'Meinung begründen, wegen/trotz + Genitiv, Konjunktiv II',model:'Ich stimme Paul zu. Meiner Meinung nach sollten Jugendliche ab 16 wählen dürfen, weil die Politik vor allem ihre Zukunft bestimmt. Außerdem interessieren sich viele junge Leute wegen des Klimawandels sehr für Politik. Natürlich bräuchte man mehr Politik-Unterricht in der Schule. In meinem Heimatland dürfen Jugendliche schon mit 16 wählen. Ich selbst habe mit 16 zum ersten Mal gewählt und hätte mich ohne dieses Recht nicht so früh für Politik interessiert.'}
]}],
resumen:`<h3>Preposições com genitivo</h3><table><tr><td class="es-t">wegen des Streiks</td><td>por causa da greve</td></tr><tr><td class="es-t">trotz des Regens</td><td>apesar da chuva</td></tr><tr><td class="es-t">während der Versammlung</td><td>durante a assembleia</td></tr><tr><td class="es-t">innerhalb einer Woche</td><td>dentro de uma semana</td></tr><tr><td class="es-t">außerhalb der Stadt</td><td>fora da cidade</td></tr></table>
<h3>Konjunktiv II no passado</h3><table><tr><td class="es-t">Ich hätte gewählt.</td><td>Eu teria votado.</td></tr><tr><td class="es-t">Wir wären gekommen.</td><td>Nós teríamos vindo.</td></tr><tr><td class="es-t">Man hätte fragen sollen.</td><td>Deveriam ter perguntado.</td></tr></table>
<h3>Política e sociedade</h3><p class="es-t">die Wahl · wählen · die Partei · die Regierung · das Gesetz · die Steuer · sich engagieren · das Ehrenamt · fordern · fördern · zustimmen · ablehnen</p>`});

/* ================= KAPITEL 35 · KULTUR & FREIZEIT ================= */
LANGS.de.course.units.push({id:'k35',n:'35',level:'B1',title:'Kultur & Freizeit',sub:'Música, teatro e arte · livros · festas e esporte · declinação completa do adjetivo · particípio como adjetivo (das renovierte Museum)',
goals:['Über Konzerte, Theater, Kunst und Bücher sprechen','Ein Buch oder einen Film empfehlen','Adjektivdeklination komplett: mit der, mit ein, ohne Artikel – in allen Fällen','Partizip als Adjektiv: das renovierte Museum, die lachenden Kinder','Eine persönliche E-Mail über ein Erlebnis schreiben'],
situacion:{title:'O que fazer no sábado?',npc:'Tom',scene:'O seu amigo Tom (seu ex-colega de apartamento) quer sair no sábado à noite e olha a programação cultural de Frankfurt com você.',role:'Du bist Tom, Lucas’ guter Freund und früherer Mitbewohner in Frankfurt, ca. 33 Jahre, locker, liebt Musik und Kino. Du duzt. Ihr sucht zusammen ein Programm für Samstagabend: ein Jazzkonzert in der Alten Oper (teuer), eine Theaterpremiere im Schauspiel, eine Ausstellung mit langer Museumsnacht, ein Fußballspiel der Eintracht. Frag nach Lucas’ Geschmack und nach Kultur in Brasilien, mach Vorschläge, diskutiere Preise. Benutze viele Adjektive (ein spannendes Stück, der neue Film, mit guter Musik) und Partizipien als Adjektiv. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Diga o que você gosta, compare duas ofertas com adjetivos e decidam juntos um programa.'},
placement:[
 {t:'mc',q:'Wir waren gestern in einem ___ Konzert.',opts:['tollen','tolle','toller'],a:0},
 {t:'mc',q:'Das ist das Haus meines ___ Bruders.',opts:['älteren','älterer','ältere'],a:0},
 {t:'mc',q:'Ich trinke gern ___ Kaffee.',opts:['schwarzen','schwarze','schwarzer'],a:0},
 {t:'mc',q:'Das ___ Museum ist wieder geöffnet.',opts:['renovierte','renovierende','renoviert'],a:0},
 {t:'mc',q:'„o palco“',opts:['die Bühne','der Saal','das Publikum'],a:0},
 {t:'gap',q:'Die ___ Kinder spielten im Park. (lachen – Partizip I)',a:['lachenden']}],
lessons:[
{id:'l1',title:'Música, teatro e arte',desc:'die Bühne, das Publikum, der Auftritt …',steps:[
 {t:'vocab',title:'Palco e plateia',items:[['die Bühne','o palco'],['das Publikum','o público'],['der Zuschauer / die Zuschauerin','o espectador / a espectadora'],['der Saal','o salão, a sala (de espetáculos)'],['die Garderobe','a chapelaria; o camarim'],['die Veranstaltung','o evento'],['die Aufführung','a apresentação (espetáculo)'],['aufführen','encenar, apresentar'],['der Auftritt','a apresentação (de um artista)'],['auftreten','apresentar-se (no palco)'],['die Premiere','a estreia'],['das Theaterstück','a peça de teatro'],['das Orchester','a orquestra'],['das Ballett','o balé'],['der Künstler / die Künstlerin','o artista / a artista'],['das Gemälde','a pintura, o quadro'],['die Galerie','a galeria'],['zeichnen','desenhar'],['die Zeichnung','o desenho'],['darstellen','representar'],['kreativ','criativo'],['musikalisch','musical, com talento para música']]},
 {t:'mc',q:'Nach dem Konzert hat das ___ zehn Minuten geklatscht.',opts:['Publikum','Orchester','Gemälde'],a:0},
 {t:'mc',q:'Die Band ___ am Samstag im Stadtpark ___.',opts:['tritt … auf','führt … auf','stellt … dar'],a:0},
 {t:'mc',q:'Die Jacken können Sie an der ___ abgeben.',opts:['Garderobe','Bühne','Galerie'],a:0},
 {t:'gap',q:'Heute Abend ist die ___ des neuen Stücks – die erste Aufführung! (estreia)',a:['Premiere']},
 {t:'match',q:'Ligue.',pairs:[['das Gemälde','a pintura'],['die Bühne','o palco'],['der Saal','a sala de espetáculos'],['zeichnen','desenhar'],['die Veranstaltung','o evento']]},
 {t:'read',title:'Leitura: Die Nacht der Museen',text:`Einmal im Jahr, meistens im Mai, öffnen in Frankfurt und Offenbach über 40 Museen und Galerien eine ganze Nacht lang ihre Türen. Mit einem einzigen Ticket kann man von 19 bis 2 Uhr nachts so viele Ausstellungen besuchen, wie man möchte. Zwischen den Museen fahren kostenlose Busse und Schiffe auf dem Main. Es gibt nicht nur Gemälde zu sehen: In vielen Sälen treten Musiker und Tänzer auf, Kinder können selbst zeichnen und malen, und um Mitternacht beginnt im Städel eine Führung mit Taschenlampen. Letztes Jahr kamen trotz des kühlen Wetters fast 50.000 Besucher.`,de:`Uma vez por ano, geralmente em maio, mais de 40 museus e galerias em Frankfurt e Offenbach abrem as portas por uma noite inteira. Com um único ingresso é possível visitar das 19h às 2h da manhã quantas exposições se quiser. Entre os museus circulam ônibus e barcos gratuitos no rio Meno. Não há só pinturas para ver: em muitas salas se apresentam músicos e dançarinos, crianças podem desenhar e pintar, e à meia-noite começa no Städel uma visita guiada com lanternas. No ano passado, apesar do tempo fresco, vieram quase 50.000 visitantes.`},
 {t:'mc',q:'Was kostet die Fahrt zwischen den Museen?',opts:['nichts','ein zweites Ticket','zwei Euro'],a:0},
 {t:'mc',q:'Was passiert um Mitternacht im Städel?',opts:['eine Führung mit Taschenlampen','ein Konzert','das Museum schließt'],a:0},
 {t:'tr',de:'A orquestra se apresenta no sábado na sala grande.',a:['Das Orchester tritt am Samstag im großen Saal auf.','Am Samstag tritt das Orchester im großen Saal auf.']}
]},
{id:'l2',title:'Livros e recomendações',desc:'der Roman, das Gedicht, die Fortsetzung …',steps:[
 {t:'vocab',title:'Livros',items:[['die Literatur','a literatura'],['der Roman','o romance (livro)'],['das Gedicht','o poema'],['der Schriftsteller / die Schriftstellerin','o escritor / a escritora'],['der Verlag','a editora'],['die Lesung','a leitura pública (com o autor)'],['vorlesen','ler em voz alta'],['die Fortsetzung','a continuação'],['die Handlung','o enredo'],['die Hauptfigur','o personagem principal'],['historisch','histórico'],['populär','popular'],['wertvoll','valioso'],['empfehlen','recomendar'],['die Empfehlung','a recomendação']]},
 {t:'mc',q:'Der Roman war so erfolgreich, dass die Autorin eine ___ geschrieben hat.',opts:['Fortsetzung','Lesung','Handlung'],a:0},
 {t:'mc',q:'In der Buchhandlung gibt es heute eine ___: Die Schriftstellerin liest aus ihrem neuen Buch.',opts:['Lesung','Fortsetzung','Premiere'],a:0},
 {t:'gap',q:'Kannst du mir ein gutes Buch ___? (recomendar)',a:['empfehlen']},
 {t:'info',title:'Recomendar um livro ou filme',html:`<table><tr><td>do que se trata</td><td class="es-t">Das Buch handelt von … · Es geht um … · Die Hauptfigur ist …</td></tr>
 <tr><td>onde e quando</td><td class="es-t">Die Geschichte spielt in … / im 19. Jahrhundert.</td></tr>
 <tr><td>avaliar</td><td class="es-t">Besonders gut gefallen hat mir … · Ein bisschen langweilig fand ich …</td></tr>
 <tr><td>recomendar</td><td class="es-t">Ich kann das Buch nur empfehlen. · Es lohnt sich!</td></tr></table>`},
 {t:'read',title:'Leitura: Buchtipp',text:`Mein Buchtipp des Monats ist ein historischer Roman: „Die Glasbläserin“. Die Geschichte spielt um 1890 in einem kleinen Dorf in Thüringen. Die Hauptfigur, die junge Marie, möchte Glas blasen wie ihr Vater – aber das dürfen damals nur Männer. Trotz aller Probleme gibt sie nicht auf. Besonders gut gefallen hat mir, wie lebendig das Leben im Dorf beschrieben wird. Am Anfang ist die Handlung ein bisschen langsam, aber dann kann man das Buch nicht mehr weglegen. Es gibt sogar zwei Fortsetzungen!`,de:`A minha dica de livro do mês é um romance histórico: „A sopradora de vidro“. A história se passa por volta de 1890 numa pequena aldeia na Turíngia. A personagem principal, a jovem Marie, quer soprar vidro como o pai – mas naquela época só homens podiam fazer isso. Apesar de todos os problemas, ela não desiste. Gostei especialmente de como a vida na aldeia é descrita de forma viva. No começo o enredo é um pouco lento, mas depois não dá mais para largar o livro. Tem até duas continuações!`},
 {t:'mc',q:'Wo spielt die Geschichte?',opts:['in einem Dorf in Thüringen','in Frankfurt','in einer Glasfabrik in Berlin'],a:0},
 {t:'mc',q:'Was findet der Autor des Tipps nicht so gut?',opts:['Der Anfang ist etwas langsam.','Die Hauptfigur ist langweilig.','Das Buch ist zu kurz.'],a:0},
 {t:'tr',de:'O livro trata de uma família em Berlim.',a:['Das Buch handelt von einer Familie in Berlin.','In dem Buch geht es um eine Familie in Berlin.','Im Buch geht es um eine Familie in Berlin.']},
 {t:'speak',es:'Ich kann den Roman nur empfehlen. Die Geschichte spielt in Brasilien und ist sehr spannend.',de:'Só posso recomendar o romance. A história se passa no Brasil e é muito emocionante.',tip:'<i>empfehlen · spielt in</i>.'}
]},
{id:'l3',title:'Adjetivo: todas as terminações',desc:'der nette Mann · eines netten Mannes · mit gutem Wein',steps:[
 {t:'info',title:'1. Com artigo definido (der, dieser, jeder …)',html:`<table><tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
 <tr><td>Nom.</td><td class="es-t">der neu<b>e</b> Film</td><td class="es-t">die neu<b>e</b> Oper</td><td class="es-t">das neu<b>e</b> Stück</td><td class="es-t">die neu<b>en</b> Filme</td></tr>
 <tr><td>Akk.</td><td class="es-t">den neu<b>en</b> Film</td><td class="es-t">die neu<b>e</b> Oper</td><td class="es-t">das neu<b>e</b> Stück</td><td class="es-t">die neu<b>en</b> Filme</td></tr>
 <tr><td>Dat.</td><td class="es-t">dem neu<b>en</b> Film</td><td class="es-t">der neu<b>en</b> Oper</td><td class="es-t">dem neu<b>en</b> Stück</td><td class="es-t">den neu<b>en</b> Filmen</td></tr>
 <tr><td>Gen.</td><td class="es-t">des neu<b>en</b> Films</td><td class="es-t">der neu<b>en</b> Oper</td><td class="es-t">des neu<b>en</b> Stücks</td><td class="es-t">der neu<b>en</b> Filme</td></tr></table>
 <div class="ex">Só <b>-e</b> ou <b>-en</b>: <b>-e</b> nos 5 casos do canto de cima (Nom. todos no singular, Akk. fem./neutro), o resto <b>-en</b>.</div>`},
 {t:'info',title:'2. Com artigo indefinido (ein, kein, mein …)',html:`<table><tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
 <tr><td>Nom.</td><td class="es-t">ein neu<b>er</b> Film</td><td class="es-t">eine neu<b>e</b> Oper</td><td class="es-t">ein neu<b>es</b> Stück</td><td class="es-t">meine neu<b>en</b> Filme</td></tr>
 <tr><td>Akk.</td><td class="es-t">einen neu<b>en</b> Film</td><td class="es-t">eine neu<b>e</b> Oper</td><td class="es-t">ein neu<b>es</b> Stück</td><td class="es-t">meine neu<b>en</b> Filme</td></tr>
 <tr><td>Dat.</td><td class="es-t">einem neu<b>en</b> Film</td><td class="es-t">einer neu<b>en</b> Oper</td><td class="es-t">einem neu<b>en</b> Stück</td><td class="es-t">meinen neu<b>en</b> Filmen</td></tr>
 <tr><td>Gen.</td><td class="es-t">eines neu<b>en</b> Films</td><td class="es-t">einer neu<b>en</b> Oper</td><td class="es-t">eines neu<b>en</b> Stücks</td><td class="es-t">meiner neu<b>en</b> Filme</td></tr></table>
 <div class="ex">Quando <span class="es-t">ein</span> não mostra o gênero, o adjetivo mostra: <span class="es-t">ein neu<b>er</b> Film</span> (der) · <span class="es-t">ein neu<b>es</b> Stück</span> (das).</div>`},
 {t:'info',title:'3. Sem artigo',html:`<table><tr><th></th><th>masc.</th><th>fem.</th><th>neutro</th><th>plural</th></tr>
 <tr><td>Nom.</td><td class="es-t">gut<b>er</b> Wein</td><td class="es-t">frisch<b>e</b> Milch</td><td class="es-t">kalt<b>es</b> Wasser</td><td class="es-t">alt<b>e</b> Bücher</td></tr>
 <tr><td>Akk.</td><td class="es-t">gut<b>en</b> Wein</td><td class="es-t">frisch<b>e</b> Milch</td><td class="es-t">kalt<b>es</b> Wasser</td><td class="es-t">alt<b>e</b> Bücher</td></tr>
 <tr><td>Dat.</td><td class="es-t">mit gut<b>em</b> Wein</td><td class="es-t">mit frisch<b>er</b> Milch</td><td class="es-t">mit kalt<b>em</b> Wasser</td><td class="es-t">mit alt<b>en</b> Büchern</td></tr>
 <tr><td>Gen.</td><td class="es-t">gut<b>en</b> Weins</td><td class="es-t">frisch<b>er</b> Milch</td><td class="es-t">kalt<b>en</b> Wassers</td><td class="es-t">alt<b>er</b> Bücher</td></tr></table>
 <div class="ex">Sem artigo, o adjetivo pega a terminação do artigo definido: <span class="es-t">dem → gut<b>em</b></span>, <span class="es-t">der → frisch<b>er</b></span>. Exceção: genitivo masc./neutro <b>-en</b>.</div>`},
 {t:'mc',q:'Wir haben einen ___ Abend im Theater verbracht.',opts:['schönen','schöner','schönes'],a:0},
 {t:'mc',q:'Das ist ein sehr ___ Buch.',opts:['spannendes','spannende','spannenden'],a:0},
 {t:'mc',q:'Mit ___ Freunden macht alles mehr Spaß.',opts:['guten','gute','guter'],a:0},
 {t:'mc',q:'Trotz des ___ Wetters fand das Konzert draußen statt.',opts:['schlechten','schlechte','schlechtes'],a:0},
 {t:'mc',q:'Zum Frühstück esse ich gern Brot mit ___ Butter.',opts:['frischer','frische','frischen'],a:0},
 {t:'gap',q:'Der Schriftsteller liest aus seinem ___ Roman. (neu)',a:['neuen']},
 {t:'gap',q:'Kennst du die Sängerin mit der ___ Gitarre? (rot)',a:['roten']},
 {t:'gap',q:'Das ist das Auto eines ___ Musikers. (bekannt)',a:['bekannten']},
 {t:'gap',q:'Heute gibt es ___ Fisch auf dem Markt. (frisch – der Fisch, Akk.)',a:['frischen']},
 {t:'gap',q:'Ein ___ Kind spielt Klavier. (klein – das Kind)',a:['kleines']},
 {t:'tr',de:'Ontem eu vi um filme muito bom.',a:['Gestern habe ich einen sehr guten Film gesehen.','Ich habe gestern einen sehr guten Film gesehen.','Gestern sah ich einen sehr guten Film.']},
 {t:'tr',de:'Nós moramos numa casa velha com um jardim grande.',a:['Wir wohnen in einem alten Haus mit einem großen Garten.']}
]},
{id:'l4',title:'Particípio como adjetivo',desc:'das renovierte Museum · die lachenden Kinder',steps:[
 {t:'info',title:'Particípio como adjetivo',html:`<p>Os particípios podem ficar <b>antes do substantivo</b> – com as terminações normais do adjetivo.</p>
 <table><tr><td><b>Partizip II</b> (passivo / terminado)</td><td class="es-t">Das Museum wurde renoviert. → das renoviert<b>e</b> Museum</td></tr>
 <tr><td></td><td class="es-t">gebraten<b>e</b> Kartoffeln · ein gestohlen<b>es</b> Fahrrad · die geöffnet<b>e</b> Tür</td></tr>
 <tr><td><b>Partizip I</b> (= infinitivo + <b>d</b>; ação acontecendo agora)</td><td class="es-t">Die Kinder lachen. → die lachend<b>en</b> Kinder</td></tr>
 <tr><td></td><td class="es-t">ein spielend<b>es</b> Kind · steigend<b>e</b> Preise · die folgend<b>en</b> Fragen</td></tr></table>
 <div class="ex">Partizip II = algo <b>feito</b>: <span class="es-t">das gelesene Buch</span> (o livro lido). Partizip I = algo <b>fazendo</b>: <span class="es-t">das lesende Mädchen</span> (a menina que está lendo).</div>`},
 {t:'mc',q:'Das ___ Konzert findet nächste Woche statt. (Das Konzert wurde verschoben.)',opts:['verschobene','verschiebende','verschoben'],a:0},
 {t:'mc',q:'Die ___ Zuschauer standen auf und klatschten. (Die Zuschauer begeisterten sich.)',opts:['begeisterten','begeisternden','begeistert'],a:0},
 {t:'mc',q:'Wegen der ___ Preise gehen wir seltener ins Theater. (Die Preise steigen.)',opts:['steigenden','gestiegene','steigende'],a:0},
 {t:'mc',q:'Er hat sein ___ Fahrrad bei der Polizei gemeldet.',opts:['gestohlenes','stehlendes','gestohlen'],a:0},
 {t:'gap',q:'Die ___ Kinder sangen ein Lied. (lachen – Partizip I)',a:['lachenden']},
 {t:'gap',q:'Ich esse gern ___ Kartoffeln. (braten – Partizip II)',a:['gebratene']},
 {t:'gap',q:'Bitte beantworten Sie die ___ Fragen. (folgen – Partizip I)',a:['folgenden']},
 {t:'tr',de:'O museu renovado é muito bonito.',a:['Das renovierte Museum ist sehr schön.']},
 {t:'order',es:'Das gestern gekaufte Ticket ist leider nicht mehr gültig',de:'O ingresso comprado ontem infelizmente não é mais válido.'}
]},
{id:'l5',title:'Festas, esporte e tempo livre',desc:'der Karneval, das Stadion, faulenzen …',steps:[
 {t:'vocab',title:'Tempo livre',items:[['der Feiertag','o feriado'],['der Karneval / der Fasching','o carnaval'],['das Kostüm','a fantasia; o tailleur'],['sich verkleiden','fantasiar-se'],['faulenzen','ficar à toa'],['die Langeweile','o tédio'],['die Sportart','a modalidade esportiva'],['das Stadion','o estádio'],['der Gegner / die Gegnerin','o adversário / a adversária'],['das Tor','o gol; o portão'],['unentschieden','empatado'],['jubeln','comemorar (gritando de alegria)']]},
 {t:'mc',q:'Im Februar feiern die Leute in Köln ___ – alle sind verkleidet.',opts:['Karneval','Feiertag','Langeweile'],a:0},
 {t:'mc',q:'Das Spiel endete 2:2, also ___.',opts:['unentschieden','gewonnen','verloren'],a:0},
 {t:'gap',q:'Am Sonntag mache ich gar nichts – ich ___ nur. (ficar à toa)',a:['faulenze']},
 {t:'read',title:'Leitura: E-Mail an Mariana',text:`Liebe Mariana,
stell dir vor: Am Samstag war ich zum ersten Mal mit Tom im Stadion! Die Eintracht hat gegen Dortmund gespielt. Das ausverkaufte Stadion war ein unglaubliches Erlebnis – über 50.000 singende Fans! Leider ist das Spiel nur unentschieden ausgegangen, 1:1, aber als das Tor gefallen ist, haben alle gejubelt und sich umarmt. Das erinnerte mich an die großen Spiele in São Paulo. Nächsten Monat ist Karneval. Hast du Lust, mich zu besuchen? Dann könnten wir uns verkleiden und zusammen nach Mainz zum Umzug fahren.
Liebe Grüße
Lucas`,de:`Querida Mariana,\nimagina só: no sábado fui pela primeira vez ao estádio com o Tom! O Eintracht jogou contra o Dortmund. O estádio lotado foi uma experiência incrível – mais de 50.000 torcedores cantando! Infelizmente ficou só no empate, 1 a 1, mas quando saiu o gol todo mundo comemorou e se abraçou. Isso me lembrou dos grandes jogos em São Paulo. No mês que vem é carnaval. Você tem vontade de me visitar? Aí a gente poderia se fantasiar e ir juntos a Mainz para o desfile.\nUm abraço\nLucas`},
 {t:'mc',q:'Wie ist das Spiel ausgegangen?',opts:['1:1','2:1 für die Eintracht','0:1'],a:0},
 {t:'mc',q:'Was schlägt Lucas vor?',opts:['zusammen zum Karneval nach Mainz zu fahren','zusammen ins Stadion zu gehen','in Dortmund zu feiern'],a:0},
 {t:'free',task:'Escreva um e-mail a um amigo (~80 palavras) sobre um evento cultural ou esportivo de que você participou: 1) o que foi e com quem, 2) o que você achou (use adjetivos e um particípio como adjetivo), 3) convide o amigo para um próximo evento.',hint:'Lieber … / Liebe …, letzte Woche war ich mit … in/bei … Es war ein … Erlebnis! Besonders … hat mir gefallen. Hast du Lust, … ? Liebe Grüße',focus:'Adjektivendungen, Partizip als Adjektiv, Präteritum/Perfekt, Einladung',model:'Lieber Rafael,\nletzten Freitag war ich mit meiner Kollegin Jana bei einem Jazzkonzert in der Alten Oper. Es war ein wunderbarer Abend! Die Band kam aus New York und spielte vor einem begeisterten Publikum. Besonders gut hat mir die junge Sängerin mit der tiefen Stimme gefallen. Nur die Getränke in der Pause waren ziemlich teuer. Im Juli gibt es im Park ein kostenloses Open-Air-Festival. Hast du Lust, mitzukommen? Du kannst bei mir übernachten.\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Adjetivo com der / ein / sem artigo</h3><table><tr><td class="es-t">der neue Film · den neuen Film · dem neuen Film · des neuen Films</td></tr><tr><td class="es-t">ein neuer Film · ein neues Stück · eine neue Oper · einem neuen Film</td></tr><tr><td class="es-t">guter Wein · mit gutem Wein · mit frischer Milch · kaltes Wasser</td></tr></table>
<h3>Particípio como adjetivo</h3><table><tr><td class="es-t">das renovierte Museum</td><td>o museu renovado</td></tr><tr><td class="es-t">die lachenden Kinder</td><td>as crianças que riem</td></tr><tr><td class="es-t">steigende Preise</td><td>preços em alta</td></tr></table>
<h3>Cultura e tempo livre</h3><p class="es-t">die Bühne · das Publikum · auftreten · die Veranstaltung · der Roman · die Fortsetzung · empfehlen · der Feiertag · sich verkleiden · unentschieden</p>`});

/* ================= KAPITEL 36 · PRÜFUNGSTRAINING B1 ================= */
LANGS.de.course.units.push({id:'k36',n:'36',level:'B1',title:'Prüfungstraining B1',sub:'Simulado no formato da prova B1 do Goethe-Institut: ler, ouvir, escrever, falar · palavras importantes para a prova',
goals:['Lesen: Blog, Zeitungsartikel, Anzeigen, Leserbriefe, Regeln (5 Teile)','Hören: Ansagen, Führung, Gespräch, Radiodiskussion (4 Teile)','Schreiben: E-Mail (~80 Wörter), Forumsbeitrag (~80 Wörter), formelle Nachricht (~40 Wörter)','Sprechen: gemeinsam etwas planen, ein Thema präsentieren, auf Fragen reagieren','Wichtige Wörter für Prüfung und Alltag: Fristen, Unterlagen, Bedingungen'],
situacion:{title:'Prova oral B1 (simulação)',npc:'Prüferin',scene:'Prova oral do nível B1. A examinadora conduz as três partes; o seu parceiro de prova se chama Daniel.',role:'Du bist Prüferin bei einer mündlichen Deutschprüfung B1. Du siezt. Teil 1: Spiel den Partner Daniel (du duzt in dieser Rolle): Ihr wollt für eine Kollegin, die in Rente geht, eine Abschiedsfeier organisieren – besprecht Ort, Zeit, Essen, Geschenk und wer was macht; mach eigene Vorschläge, widersprich auch mal höflich. Teil 2: Bitte die Person, das Thema „Sollten Kinder ein eigenes Smartphone haben?“ zu präsentieren (persönliche Erfahrung, Situation im Heimatland, Vor- und Nachteile, eigene Meinung, Abschluss) und hör zu. Teil 3: Stell danach eine Frage zur Präsentation und gib eine kurze Rückmeldung. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Planeje a festa com o Daniel (fazer propostas, concordar, discordar), apresente o tema com estrutura clara e responda à pergunta da examinadora.'},
placement:[
 {t:'mc',q:'In der B1-Prüfung schreiben Sie eine E-Mail an einen Freund mit ca. …',opts:['80 Wörtern','20 Wörtern','300 Wörtern'],a:0},
 {t:'mc',q:'Sie präsentieren ein Thema. Wie beginnen Sie?',opts:['Ich möchte heute über das Thema … sprechen.','Das Thema ist mir egal.','Ich fange jetzt an mit Ende.'],a:0},
 {t:'mc',q:'Ihr Partner macht einen Vorschlag, den Sie nicht gut finden. Was sagen Sie?',opts:['Das ist eine Idee, aber ich würde lieber …','Nein, das ist falsch.','Das machen wir nie.'],a:0},
 {t:'gap',q:'Bitte geben Sie die Unterlagen ___ bis Freitag ab. (o mais tardar)',a:['spätestens']}],
lessons:[
{id:'l1',title:'Ler (Lesen)',desc:'5 partes: blog, artigos, anúncios, cartas de leitores, regras',steps:[
 {t:'info',title:'A prova B1 do Goethe-Institut',html:`<p>A prova <b>Goethe-Zertifikat B1</b> tem quatro módulos (podem ser feitos separadamente):</p>
 <table><tr><th>módulo</th><th>duração</th><th>o que é</th></tr>
 <tr><td>Lesen (ler)</td><td>65 min</td><td>5 partes: blog (certo/errado), dois artigos de jornal, anúncios, opiniões de leitores, regras/instruções</td></tr>
 <tr><td>Hören (ouvir)</td><td>~40 min</td><td>4 partes: avisos e mensagens curtas, uma visita guiada ou palestra, uma conversa, uma discussão no rádio</td></tr>
 <tr><td>Schreiben (escrever)</td><td>60 min</td><td>e-mail pessoal (~80 palavras), opinião num fórum (~80 palavras), mensagem formal curta (~40 palavras)</td></tr>
 <tr><td>Sprechen (falar)</td><td>~15 min</td><td>em dupla: planejar algo juntos, apresentar um tema, reagir a perguntas</td></tr></table>
 <div class="ex">Para passar: <b>60 %</b> em cada módulo. Os textos abaixo são simulados próprios no estilo da prova.</div>`},
 {t:'read',kind:'Lesen · Teil 1',title:'Blog: Mein Jahr ohne Auto',text:`Vor einem Jahr habe ich mein Auto verkauft. Der Grund war eigentlich ganz einfach: Es stand die meiste Zeit vor der Tür, und die Reparaturen wurden immer teurer. Am Anfang war es nicht leicht. Besonders im Winter habe ich mein warmes Auto vermisst, wenn ich morgens um halb sieben an der Bushaltestelle stand. Inzwischen fahre ich fast alles mit dem Fahrrad, sogar die zwölf Kilometer zur Arbeit. Für größere Einkäufe leihe ich mir ein Lastenrad von meinem Nachbarn, und wenn wir am Wochenende in die Berge wollen, nehmen wir ein Carsharing-Auto. Mein Fazit: Ich spare jeden Monat ungefähr 300 Euro und habe fünf Kilo abgenommen. Nur meine Mutter auf dem Land besuche ich seltener – mit dem Zug brauche ich fast drei Stunden.`,de:`Há um ano vendi o meu carro. O motivo era bem simples: ele ficava a maior parte do tempo parado na frente de casa, e os consertos ficavam cada vez mais caros. No começo não foi fácil. Principalmente no inverno senti falta do meu carro quentinho, quando estava às seis e meia da manhã no ponto de ônibus. Hoje faço quase tudo de bicicleta, até os doze quilômetros até o trabalho. Para compras maiores pego emprestada uma bicicleta de carga do meu vizinho, e quando queremos ir às montanhas no fim de semana, usamos um carro compartilhado. Minha conclusão: economizo uns 300 euros por mês e emagreci cinco quilos. Só visito minha mãe no interior com menos frequência – de trem levo quase três horas.`},
 {t:'mc',kind:'Lesen · Teil 1',q:'Der Autor hat sein Auto verkauft, weil es zu viel kostete und selten fuhr. (richtig / falsch)',opts:['richtig','falsch'],a:0},
 {t:'mc',kind:'Lesen · Teil 1',q:'Im Winter fand er das Leben ohne Auto besonders einfach. (richtig / falsch)',opts:['falsch','richtig'],a:0},
 {t:'mc',kind:'Lesen · Teil 1',q:'Er hat sich ein Lastenrad gekauft. (richtig / falsch)',opts:['falsch','richtig'],a:0},
 {t:'mc',kind:'Lesen · Teil 1',q:'Seine Mutter sieht er jetzt nicht mehr so oft. (richtig / falsch)',opts:['richtig','falsch'],a:0},
 {t:'read',kind:'Lesen · Teil 2',title:'Zeitungsartikel: Bibliothek ohne Personal',text:`Seit diesem Frühjahr ist die Stadtbibliothek in Offenbach auch am Sonntag und abends bis 22 Uhr geöffnet – allerdings ohne Personal. Wer einen Bibliotheksausweis hat, kann sich mit der Karte an der Tür anmelden und Bücher an Automaten selbst ausleihen und zurückgeben. Kameras sorgen für Sicherheit. Die Idee kommt aus Skandinavien, wo es solche „offenen Bibliotheken“ schon lange gibt. Die Bilanz nach sechs Monaten ist positiv: Die Zahl der Besucher ist um ein Drittel gestiegen, vor allem Studierende und Berufstätige nutzen die neuen Zeiten. Probleme mit Diebstahl gab es kaum. Kritik kommt dagegen von der Gewerkschaft: Sie befürchtet, dass die Stadt langfristig Stellen spart. Die Stadt widerspricht: Zu den normalen Zeiten bleibe das Personal wie bisher.`,de:`Desde esta primavera a biblioteca municipal de Offenbach fica aberta também aos domingos e à noite até as 22h – mas sem funcionários. Quem tem carteirinha pode se registrar com o cartão na porta e pegar e devolver livros sozinho em máquinas. Câmeras garantem a segurança. A ideia vem da Escandinávia, onde essas „bibliotecas abertas“ existem há muito tempo. O balanço depois de seis meses é positivo: o número de visitantes subiu um terço, principalmente estudantes e quem trabalha aproveitam os novos horários. Quase não houve problemas com furtos. Já o sindicato critica: ele teme que a cidade corte vagas a longo prazo. A cidade discorda: nos horários normais os funcionários continuariam como antes.`},
 {t:'mc',kind:'Lesen · Teil 2',q:'In diesem Text geht es darum, dass …',opts:['eine Bibliothek längere Öffnungszeiten ohne Personal hat.','eine Bibliothek geschlossen wird.','Bücher in Skandinavien billiger sind.'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Wer besucht die Bibliothek zu den neuen Zeiten besonders oft?',opts:['Studierende und Berufstätige','vor allem Kinder','Touristen aus Skandinavien'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Die Gewerkschaft hat Angst, dass …',opts:['in Zukunft Arbeitsplätze verloren gehen.','viele Bücher gestohlen werden.','die Kameras nicht funktionieren.'],a:0},
 {t:'read',kind:'Lesen · Teil 3',title:'Anzeigen',text:`a) Sprachcafé international: Jeden Donnerstag ab 19 Uhr im Jugendhaus. Deutsch, Englisch, Spanisch – reden Sie mit! Eintritt frei.
b) Fahrradkurs für Erwachsene: In 5 Terminen sicher Rad fahren lernen. Samstagvormittag, 45 €.
c) Hausaufgabenhilfe gesucht! Grundschule Nordend sucht Ehrenamtliche, 2 Stunden pro Woche, nachmittags.
d) Kochabend „Brasilien“: Gemeinsam kochen und essen, Freitag 18 Uhr, 25 € inkl. Getränke. Anmeldung bis Mittwoch.
e) Gebrauchte Kinderbücher abzugeben – kostenlos, nur Abholung in Bornheim.
f) Steuererklärung leicht gemacht: Abendkurs für Berufstätige, 3 Abende, Volkshochschule, 60 €.`,de:`a) Café de idiomas internacional: toda quinta a partir das 19h na casa da juventude. Alemão, inglês, espanhol – venha conversar! Entrada grátis.\nb) Curso de bicicleta para adultos: aprenda a andar de bicicleta com segurança em 5 encontros. Sábado de manhã, 45 €.\nc) Procuram-se ajudantes para dever de casa! A escola primária Nordend procura voluntários, 2 horas por semana, à tarde.\nd) Noite de culinária „Brasil“: cozinhar e comer juntos, sexta às 18h, 25 € com bebidas. Inscrição até quarta.\ne) Livros infantis usados para doar – grátis, só retirada em Bornheim.\nf) Declaração de imposto de renda sem complicação: curso noturno para quem trabalha, 3 noites, Volkshochschule, 60 €.`},
 {t:'mc',kind:'Lesen · Teil 3',q:'Ihre Kollegin möchte sich am Nachmittag sozial engagieren.',opts:['c','a','d'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'Ein Freund möchte endlich verstehen, wie er seine Steuern selbst erklärt.',opts:['f','b','a'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'Ihr Nachbar möchte ohne Kosten Englisch üben.',opts:['a','f','c'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'Sie möchten Ihrer kleinen Nichte Bücher schenken, haben aber wenig Geld.',opts:['e','c','d'],a:0},
 {t:'read',kind:'Lesen · Teil 4',title:'Leserbriefe: Sollte das Rauchen in Parks verboten werden?',text:`Helga, 67: Endlich wird darüber diskutiert! Auf jedem Spielplatz liegen Zigaretten, und kleine Kinder stecken sie in den Mund. Ein Verbot ist längst überfällig.
Tobias, 29: Ich rauche selbst nicht, aber das geht mir zu weit. Ein Park ist ein freier Ort. Man sollte lieber mehr Aschenbecher aufstellen und die Leute informieren.
Selin, 41: Ich bin für das Verbot, aber nur auf Spielplätzen und Liegewiesen. Im ganzen Park kann man das sowieso nicht kontrollieren.
Bernd, 52: Wer soll das bezahlen? Die Stadt hat kein Personal, um Verbote zu kontrollieren. Neue Regeln, die niemand beachtet, bringen nichts.`,de:`Helga, 67: Finalmente estão discutindo isso! Em todo parquinho há cigarros, e crianças pequenas os põem na boca. Uma proibição já devia existir há muito tempo.\nTobias, 29: Eu mesmo não fumo, mas isso é exagero. Um parque é um lugar livre. Seria melhor colocar mais cinzeiros e informar as pessoas.\nSelin, 41: Sou a favor da proibição, mas só em parquinhos e gramados de descanso. No parque inteiro não dá para controlar mesmo.\nBernd, 52: Quem vai pagar isso? A cidade não tem pessoal para fiscalizar proibições. Regras novas que ninguém respeita não adiantam nada.`},
 {t:'mc',kind:'Lesen · Teil 4',q:'Ist Helga für ein Rauchverbot in Parks?',opts:['ja','nein'],a:0},
 {t:'mc',kind:'Lesen · Teil 4',q:'Ist Tobias für ein Rauchverbot in Parks?',opts:['nein','ja'],a:0},
 {t:'mc',kind:'Lesen · Teil 4',q:'Ist Selin für ein Rauchverbot (zumindest teilweise)?',opts:['ja','nein'],a:0},
 {t:'mc',kind:'Lesen · Teil 4',q:'Ist Bernd für ein Rauchverbot in Parks?',opts:['nein','ja'],a:0},
 {t:'read',kind:'Lesen · Teil 5',title:'Regeln: Benutzung der Gemeinschaftsküche (Studentenwohnheim)',text:`1. Die Küche kann täglich von 6 bis 23 Uhr benutzt werden.
2. Geschirr muss direkt nach dem Essen gespült und in den eigenen Schrank gestellt werden. Geschirr, das länger als 24 Stunden in der Spüle steht, wird entsorgt.
3. Lebensmittel im Kühlschrank sind mit Namen und Datum zu beschriften. Jeden Freitag wird der Kühlschrank geleert; unbeschriftete Lebensmittel werden weggeworfen.
4. Der Müll wird nach Bio, Papier, Verpackungen und Restmüll getrennt. Der Küchendienst wechselt wöchentlich (Liste an der Tür).
5. Bei Schäden an Geräten informieren Sie bitte sofort die Hausverwaltung. Reparaturen dürfen nicht selbst durchgeführt werden.`,de:`1. A cozinha pode ser usada diariamente das 6h às 23h.\n2. A louça deve ser lavada logo depois de comer e guardada no próprio armário. Louça que ficar mais de 24 horas na pia será descartada.\n3. Alimentos na geladeira devem ser identificados com nome e data. Toda sexta a geladeira é esvaziada; alimentos sem identificação são jogados fora.\n4. O lixo é separado em orgânico, papel, embalagens e lixo comum. A escala da cozinha muda toda semana (lista na porta).\n5. Em caso de danos aos aparelhos, informe imediatamente a administração do prédio. Consertos não podem ser feitos por conta própria.`},
 {t:'mc',kind:'Lesen · Teil 5',q:'Was passiert mit Geschirr, das zwei Tage in der Spüle steht?',opts:['Es wird weggeworfen.','Der Küchendienst spült es.','Es kommt in den eigenen Schrank.'],a:0},
 {t:'mc',kind:'Lesen · Teil 5',q:'Was müssen Sie mit Ihrem Joghurt im Kühlschrank tun?',opts:['Namen und Datum daraufschreiben','ihn bis Freitag essen','ihn in den Schrank stellen'],a:0},
 {t:'mc',kind:'Lesen · Teil 5',q:'Der Herd funktioniert nicht. Was tun Sie?',opts:['die Hausverwaltung informieren','ihn selbst reparieren','den Küchendienst fragen'],a:0}
]},
{id:'l2',title:'Ouvir (Hören)',desc:'4 partes: avisos, visita guiada, conversa, discussão',steps:[
 {t:'read',hideText:true,kind:'Hören · Teil 1',title:'Ansage am Bahnhof',intro:'Ouça o aviso na estação.',text:`Achtung, eine Durchsage zu ICE 578 nach Hamburg, planmäßige Abfahrt 14:12 Uhr: Der Zug hat wegen einer Störung am Stellwerk etwa 25 Minuten Verspätung und fährt heute ausnahmsweise von Gleis 9 statt von Gleis 7. Reisende, die in Hannover nach Bremen umsteigen, erreichen ihren Anschluss heute nicht. Sie können in Hannover den nächsten Intercity um 17:05 Uhr nehmen; Ihr Ticket ist dort gültig. Wir bitten um Entschuldigung.`,de:`Atenção, um aviso sobre o ICE 578 para Hamburgo, partida prevista às 14h12: o trem tem cerca de 25 minutos de atraso por causa de uma falha no centro de sinalização e hoje parte excepcionalmente da plataforma 9 em vez da 7. Passageiros que fazem baldeação em Hannover para Bremen hoje não vão alcançar a conexão. Eles podem pegar em Hannover o próximo Intercity às 17h05; a sua passagem é válida nele. Pedimos desculpas.`},
 {t:'mc',kind:'Hören · Teil 1',q:'Der ICE nach Hamburg fährt heute von Gleis 7. (richtig / falsch)',opts:['falsch','richtig'],a:0},
 {t:'mc',kind:'Hören · Teil 1',q:'Was können Reisende nach Bremen tun?',opts:['in Hannover den Intercity um 17:05 Uhr nehmen','ein neues Ticket kaufen','in Kassel umsteigen'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 1',title:'Nachricht auf der Mailbox',intro:'Ouça a mensagem na caixa postal.',text:`Hallo Lucas, hier ist Jana. Du, wegen morgen: Das Meeting mit dem Kunden ist von zehn auf halb neun vorverlegt worden. Kannst du bitte die Präsentation mitbringen? Ich habe meinen Laptop zu Hause vergessen. Und denk daran, dass wir uns nicht im Büro treffen, sondern direkt beim Kunden in Eschborn. Bis morgen!`,de:`Oi Lucas, aqui é a Jana. Olha, sobre amanhã: a reunião com o cliente foi antecipada das dez para as oito e meia. Você pode levar a apresentação, por favor? Esqueci meu notebook em casa. E lembre que não vamos nos encontrar no escritório, e sim direto no cliente em Eschborn. Até amanhã!`},
 {t:'mc',kind:'Hören · Teil 1',q:'Wann beginnt das Meeting?',opts:['um halb neun','um zehn','um halb zehn'],a:0},
 {t:'mc',kind:'Hören · Teil 1',q:'Wo treffen sich Jana und Lucas?',opts:['beim Kunden in Eschborn','im Büro','am Bahnhof'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 2',title:'Führung durch die Altstadt',intro:'Você faz uma visita guiada por Frankfurt. Ouça a guia.',text:`Herzlich willkommen zu unserer Führung! Wir stehen hier auf dem Römerberg, dem Herz der Frankfurter Altstadt. Das Gebäude mit den drei Giebeln ist der Römer, seit fast 600 Jahren das Rathaus der Stadt. Im Zweiten Weltkrieg wurde die Altstadt fast vollständig zerstört. Die schönen Fachwerkhäuser gegenüber sehen alt aus, wurden aber erst in den 1980er-Jahren wieder aufgebaut. Gleich gehen wir weiter zum Dom, wo früher die deutschen Kaiser gekrönt wurden. Wer möchte, kann dort auf den Turm steigen – das kostet drei Euro extra. Die Führung endet in etwa anderthalb Stunden am Mainufer. Bitte bleiben Sie in der Gruppe, denn hier ist es oft sehr voll.`,de:`Sejam bem-vindos à nossa visita guiada! Estamos aqui no Römerberg, o coração do centro histórico de Frankfurt. O prédio com as três empenas é o Römer, há quase 600 anos a prefeitura da cidade. Na Segunda Guerra Mundial o centro histórico foi quase totalmente destruído. As bonitas casas em enxaimel em frente parecem antigas, mas só foram reconstruídas nos anos 1980. Logo seguimos para a catedral, onde antigamente os imperadores alemães eram coroados. Quem quiser pode subir na torre – custa três euros a mais. A visita termina em mais ou menos uma hora e meia na margem do Meno. Por favor, fiquem no grupo, porque aqui costuma estar muito cheio.`},
 {t:'mc',kind:'Hören · Teil 2',q:'Was ist der Römer heute?',opts:['das Rathaus','ein Museum','eine Kirche'],a:0},
 {t:'mc',kind:'Hören · Teil 2',q:'Die Fachwerkhäuser …',opts:['wurden in den 1980er-Jahren neu gebaut.','sind 600 Jahre alt.','wurden nie zerstört.'],a:0},
 {t:'mc',kind:'Hören · Teil 2',q:'Was kostet extra?',opts:['der Turm des Doms','die ganze Führung','die Fahrt am Main'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 3',title:'Gespräch im Zug',intro:'Ouça a conversa entre a Carla e o Mehmet no trem. Certo ou errado?',text:`– Mehmet? Das gibt’s doch nicht! Wir haben uns seit dem Deutschkurs nicht mehr gesehen! – Carla! Wie geht’s dir? Arbeitest du immer noch im Hotel? – Nein, ich habe vor einem halben Jahr gekündigt. Ich mache jetzt eine Ausbildung zur Pflegefachfrau. Das ist anstrengend, aber endlich mache ich etwas Sinnvolles. – Toll! Ich habe auch Neuigkeiten: Ich habe die B1-Prüfung bestanden und arbeite jetzt als Busfahrer bei der Stadt. – Glückwunsch! Und fährst du gerade zur Arbeit? – Nein, heute habe ich frei. Ich besuche meinen Bruder in Darmstadt, er hat gerade ein Baby bekommen. – Wie schön! Komm, lass uns Nummern tauschen, dann können wir mal einen Kaffee trinken.`,de:`– Mehmet? Não acredito! A gente não se vê desde o curso de alemão! – Carla! Como vai? Você ainda trabalha no hotel? – Não, pedi demissão há meio ano. Agora estou fazendo uma formação de enfermeira. É cansativo, mas finalmente faço algo que tem sentido. – Que legal! Eu também tenho novidades: passei na prova B1 e agora trabalho como motorista de ônibus da cidade. – Parabéns! E você está indo para o trabalho agora? – Não, hoje estou de folga. Vou visitar meu irmão em Darmstadt, ele acabou de ter um bebê. – Que lindo! Vem, vamos trocar números, aí podemos tomar um café qualquer dia.`},
 {t:'mc',kind:'Hören · Teil 3',q:'Carla arbeitet noch im Hotel. (richtig / falsch)',opts:['falsch','richtig'],a:0},
 {t:'mc',kind:'Hören · Teil 3',q:'Carla findet ihre Ausbildung anstrengend. (richtig / falsch)',opts:['richtig','falsch'],a:0},
 {t:'mc',kind:'Hören · Teil 3',q:'Mehmet fährt zur Arbeit. (richtig / falsch)',opts:['falsch','richtig'],a:0},
 {t:'mc',kind:'Hören · Teil 3',q:'Mehmets Bruder ist Vater geworden. (richtig / falsch)',opts:['richtig','falsch'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 4',title:'Radiodiskussion: Vier-Tage-Woche',intro:'Ouça a discussão no rádio. Quem diz o quê: a moderadora, a Sra. Brandt (empresária) ou o Sr. Lehmann (sindicato)?',text:`Moderatorin: Immer mehr Firmen testen die Vier-Tage-Woche. Frau Brandt, Sie haben eine Bäckerei mit 40 Mitarbeitern. Wäre das etwas für Sie?
Frau Brandt: Ehrlich gesagt, nein. Unsere Kunden wollen sechs Tage pro Woche frische Brötchen. Wenn alle nur vier Tage arbeiten, bräuchte ich mehr Personal – und das finde ich schon jetzt kaum.
Herr Lehmann: Genau deshalb ist die Vier-Tage-Woche ja interessant! Viele junge Leute wählen ihren Arbeitgeber heute nach der Freizeit aus. Wer weniger Tage anbietet, findet leichter Personal.
Moderatorin: Aber sinkt dann nicht die Produktivität?
Herr Lehmann: Studien zeigen das Gegenteil: Ausgeruhte Mitarbeiter machen weniger Fehler und sind seltener krank.
Frau Brandt: Im Büro mag das stimmen. Aber ein Brot backt sich nicht schneller, nur weil der Bäcker ausgeschlafen ist.`,de:`Moderadora: Cada vez mais empresas testam a semana de quatro dias. Sra. Brandt, a senhora tem uma padaria com 40 funcionários. Seria algo para a senhora?\nSra. Brandt: Sinceramente, não. Nossos clientes querem pãezinhos frescos seis dias por semana. Se todos trabalharem só quatro dias, eu precisaria de mais pessoal – e já agora quase não encontro.\nSr. Lehmann: É justamente por isso que a semana de quatro dias é interessante! Muitos jovens hoje escolhem o empregador pelo tempo livre. Quem oferece menos dias encontra pessoal mais facilmente.\nModeradora: Mas a produtividade não cai?\nSr. Lehmann: Estudos mostram o contrário: funcionários descansados erram menos e ficam doentes com menos frequência.\nSra. Brandt: No escritório pode ser verdade. Mas um pão não assa mais rápido só porque o padeiro dormiu bem.`},
 {t:'match',kind:'Hören · Teil 4',q:'Quem diz isso?',pairs:[['Es ist schwer, Personal zu finden.','Frau Brandt'],['Junge Leute wollen mehr Freizeit.','Herr Lehmann'],['Arbeiten die Leute dann weniger effektiv?','Moderatorin']]},
 {t:'mc',kind:'Hören · Teil 4',q:'Frau Brandt meint, die Vier-Tage-Woche funktioniert …',opts:['eher im Büro als in der Bäckerei.','überall gut.','nur mit mehr Brötchen.'],a:0}
]},
{id:'l3',title:'Escrever (Schreiben)',desc:'e-mail · fórum · mensagem formal',steps:[
 {t:'info',title:'Schreiben – como é',html:`<table><tr><th>parte</th><th>tempo</th><th>tarefa</th></tr>
 <tr><td>Teil 1</td><td>20 min</td><td>e-mail para um amigo (<b>~80 palavras</b>): você recebe uma situação e <b>3 pontos</b> (contar, explicar, propor …)</td></tr>
 <tr><td>Teil 2</td><td>25 min</td><td>opinião num fórum/programa de TV (<b>~80 palavras</b>) sobre um tema; você lê um comentário de outra pessoa</td></tr>
 <tr><td>Teil 3</td><td>15 min</td><td>mensagem formal curta (<b>~40 palavras</b>) para professor, chefe, médico …: pedir desculpas, cancelar, pedir algo</td></tr></table>
 <div class="ex">Conta: todos os pontos respondidos, <b>ordem lógica</b> com conectores (zuerst, außerdem, deshalb, trotzdem, obwohl …), saudação e despedida adequadas (du ↔ Sie).</div>`},
 {t:'free',kind:'Schreiben · Teil 1',task:'Você se mudou há pouco para um apartamento novo. Escreva para a sua amiga Paula (~80 palavras): 1) descreva o apartamento e o bairro, 2) conte o que foi difícil na mudança, 3) convide-a para a festa de inauguração e diga a data.',hint:'Liebe Paula, endlich habe ich … Die Wohnung ist … und liegt … Der Umzug war … , weil … Am … mache ich eine Einweihungsparty. Hast du Lust …? Liebe Grüße',focus:'drei Punkte, Adjektivendungen, Präteritum/Perfekt, Konnektoren',model:'Liebe Paula,\nseit zwei Wochen wohne ich endlich in meiner neuen Wohnung in Bornheim! Sie hat zwei helle Zimmer und einen kleinen Balkon. Das Viertel gefällt mir sehr, weil es viele Cafés und einen schönen Markt gibt. Der Umzug war allerdings anstrengend: Der Aufzug war kaputt, deshalb mussten wir alle Möbel in den dritten Stock tragen. Am Samstag, dem 14., feiere ich ab 19 Uhr eine Einweihungsparty. Hast du Lust zu kommen? Ich würde mich sehr freuen!\nLiebe Grüße\nLucas'},
 {t:'free',kind:'Schreiben · Teil 2',task:'Num programa de TV se discute: „Homeoffice – Freiheit oder Einsamkeit?“. No fórum, alguém escreveu: „Seit ich zu Hause arbeite, sehe ich meine Kollegen kaum noch.“ Escreva a sua opinião (~80 palavras).',hint:'Ich kann gut verstehen, dass … Meiner Meinung nach … Einerseits …, andererseits … Bei mir ist es so, dass … Deshalb finde ich …',focus:'Meinung, Gegenargument, Beispiel, Schluss',model:'Ich kann gut verstehen, dass man sich im Homeoffice manchmal allein fühlt. Einerseits spare ich viel Zeit, weil ich nicht ins Büro fahren muss, und kann mich besser konzentrieren. Andererseits fehlen mir die kurzen Gespräche in der Kaffeeküche. In meiner Firma arbeiten wir deshalb drei Tage zu Hause und zwei Tage im Büro. Meiner Meinung nach ist so eine Mischung die beste Lösung, denn man hat sowohl Freiheit als auch Kontakt zu den Kollegen.'},
 {t:'free',kind:'Schreiben · Teil 3',task:'Você tem um curso de alemão com a Sra. Krüger, mas na próxima quinta-feira não pode ir. Escreva para ela (~40 palavras): peça desculpas, explique o motivo e pergunte o que você deve preparar.',hint:'Sehr geehrte Frau Krüger, leider kann ich am Donnerstag nicht am Unterricht teilnehmen, da … Könnten Sie mir bitte mitteilen, … ? Mit freundlichen Grüßen',focus:'formell (Sie), Grund, höfliche Bitte mit Konjunktiv II',model:'Sehr geehrte Frau Krüger,\nleider kann ich am Donnerstag nicht am Unterricht teilnehmen, da ich eine wichtige Dienstreise nach München habe. Das tut mir sehr leid. Könnten Sie mir bitte mitteilen, welche Aufgaben ich bis zur nächsten Stunde vorbereiten soll?\nMit freundlichen Grüßen\nLucas Souza'}
]},
{id:'l4',title:'Falar (Sprechen)',desc:'planejar juntos · apresentar · reagir',steps:[
 {t:'info',title:'Sprechen – as três partes',html:`<table><tr><th>parte</th><th>o que fazer</th></tr>
 <tr><td>Teil 1 · ~3 min</td><td><b>Planejar algo juntos</b> (uma festa, uma visita, um passeio): fazer propostas, reagir às do parceiro, chegar a um acordo.</td></tr>
 <tr><td>Teil 2 · ~3 min</td><td><b>Apresentar um tema</b> em 5 passos: 1) apresentar o tema, 2) experiência própria, 3) situação no seu país, 4) vantagens e desvantagens + opinião, 5) conclusão e agradecimento.</td></tr>
 <tr><td>Teil 3 · ~2 min</td><td><b>Reagir</b>: dar um feedback sobre a apresentação do parceiro, fazer uma pergunta e responder à pergunta dele e da examinadora.</td></tr></table>`},
 {t:'info',title:'Frases úteis',html:`<table><tr><td>propor</td><td class="es-t">Wie wäre es, wenn wir …? · Ich schlage vor, dass … · Wir könnten doch …</td></tr>
 <tr><td>concordar</td><td class="es-t">Gute Idee! · Einverstanden. · Das finde ich auch.</td></tr>
 <tr><td>discordar com educação</td><td class="es-t">Das ist eine gute Idee, aber … · Ich weiß nicht, ob … · Ich würde lieber …</td></tr>
 <tr><td>estruturar</td><td class="es-t">Ich möchte heute über … sprechen. · Zuerst … · Danach … · Zum Schluss … · Vielen Dank fürs Zuhören.</td></tr>
 <tr><td>feedback</td><td class="es-t">Deine Präsentation war sehr interessant. · Mir hat gefallen, dass … · Ich habe eine Frage: …</td></tr></table>`},
 {t:'dialog',kind:'Sprechen · Teil 1',place:'Prüfung',title:'Planejar uma festa de despedida',scene:'A sua colega Frau Weiß vai se aposentar. Você e o Daniel organizam uma festa de despedida: onde, quando, comida, presente.',lines:[
  {n:'Daniel',es:'Frau Weiß geht ja nächsten Monat in Rente. Wollen wir eine kleine Feier organisieren?',de:'A Sra. Weiß vai se aposentar no mês que vem. Vamos organizar uma pequena festa?'},
  {you:true,opts:[{es:'Ja, unbedingt! Wie wäre es, wenn wir am letzten Freitag nach der Arbeit im Besprechungsraum feiern?',ok:true},{es:'Ja. Freitag.',ok:false,why:'Na prova, faça uma proposta completa: <i>Wie wäre es, wenn wir …?</i>'}]},
  {n:'Daniel',es:'Der Raum ist ein bisschen klein. Wir könnten doch ins Restaurant gegenüber gehen.',de:'A sala é um pouco pequena. A gente poderia ir ao restaurante em frente.'},
  {you:true,opts:[{es:'Das ist eine gute Idee, aber das ist für alle ziemlich teuer. Ich würde lieber im Büro feiern und jeder bringt etwas zu essen mit.',ok:true},{es:'Nein, das ist schlecht.',ok:false,why:'Discorde com educação e dê um motivo + alternativa: <i>Das ist eine gute Idee, aber … Ich würde lieber …</i>'}]},
  {n:'Daniel',es:'Einverstanden. Und was schenken wir ihr? Sie reist doch so gern.',de:'Combinado. E o que damos de presente a ela? Ela adora viajar.'},
  {you:true,opts:[{es:'Ich schlage vor, dass wir Geld sammeln und ihr einen Reisegutschein schenken. Ich kümmere mich um die Karte, und du sammelst das Geld?',ok:true},{es:'Ich schlage vor, dass wir schenken ihr einen Gutschein.',ok:false,why:'Depois de <i>dass</i>, o verbo vai para o final: <i>dass wir ihr einen Gutschein <b>schenken</b></i>.'}]}]},
 {t:'speak',kind:'Sprechen · Teil 2',es:'Ich möchte heute über das Thema „Sollten Kinder ein eigenes Smartphone haben?“ sprechen. Zuerst erzähle ich von meinen Erfahrungen, dann berichte ich, wie es in meinem Heimatland ist.',de:'Hoje eu gostaria de falar sobre o tema „As crianças deveriam ter um smartphone próprio?“. Primeiro conto as minhas experiências, depois relato como é no meu país.',tip:'Slide 1: apresentar o tema e a estrutura.'},
 {t:'free',kind:'Sprechen · Teil 2',task:'Prepare por escrito a sua apresentação (~120 palavras) sobre „Sollten Kinder ein eigenes Smartphone haben?“ com os 5 passos: tema, experiência própria, situação no seu país, vantagens/desvantagens + opinião, conclusão.',hint:'Ich möchte heute über … sprechen. Als ich ein Kind war, … In meinem Heimatland … Ein Vorteil ist, dass … Ein Nachteil ist … Meiner Meinung nach … Zum Schluss … Vielen Dank fürs Zuhören.',focus:'klare Struktur, Konnektoren, Konjunktiv II, Meinung',model:'Ich möchte heute über das Thema „Sollten Kinder ein eigenes Smartphone haben?“ sprechen. Als ich ein Kind war, gab es noch keine Smartphones – wir haben draußen gespielt. In meinem Heimatland bekommen viele Kinder schon mit neun oder zehn Jahren ein eigenes Handy, vor allem wegen der Sicherheit in großen Städten. Ein Vorteil ist, dass die Eltern ihre Kinder jederzeit erreichen können. Ein Nachteil ist, dass viele Kinder zu viel Zeit am Bildschirm verbringen und weniger Sport machen. Meiner Meinung nach sollten Kinder erst mit zwölf ein Smartphone bekommen, und die Eltern sollten feste Regeln machen. Zum Schluss möchte ich sagen: Das Handy ist nicht das Problem, sondern wie wir es benutzen. Vielen Dank fürs Zuhören!'},
 {t:'tr',kind:'Sprechen · Teil 3',de:'Feedback: A sua apresentação foi muito interessante. Eu tenho uma pergunta:',a:['Deine Präsentation war sehr interessant. Ich habe eine Frage:','Ihre Präsentation war sehr interessant. Ich habe eine Frage:','Deine Präsentation war sehr interessant. Ich habe eine Frage.','Ihre Präsentation war sehr interessant. Ich habe eine Frage.']},
 {t:'tr',kind:'Sprechen · Teil 3',de:'Pergunta ao parceiro: Com que idade você ganhou o seu primeiro celular?',a:['Mit wie viel Jahren hast du dein erstes Handy bekommen?','Wann hast du dein erstes Handy bekommen?','Wie alt warst du, als du dein erstes Handy bekommen hast?','Wie alt warst du, als du dein erstes Smartphone bekommen hast?','Mit wie vielen Jahren hast du dein erstes Handy bekommen?']}
]},
{id:'l5',title:'Palavras para a prova',desc:'die Frist, die Unterlagen, spätestens …',steps:[
 {t:'vocab',title:'Prazos e documentos',items:[['die Frist','o prazo'],['spätestens','o mais tardar'],['die Unterlagen (Pl.)','os documentos'],['beantragen','solicitar (oficialmente)'],['verlängern','prorrogar, renovar'],['die Bedingung','a condição'],['die Quittung','o recibo'],['der Betrag','o valor, a quantia'],['die Summe','a soma'],['die Mahnung','o aviso de cobrança'],['fällig','vencido, a pagar'],['die Beratung','a orientação, a consultoria'],['versäumen','perder (prazo, aula)'],['verwechseln','confundir']]},
 {t:'vocab',title:'Palavras que conectam',items:[['zunächst','primeiro, inicialmente'],['zusätzlich','adicional, além disso'],['eventuell','eventualmente, talvez'],['falls','caso'],['möglichst','o mais … possível'],['vorläufig','provisório; por enquanto'],['endgültig','definitivo'],['selbstverständlich','evidente; claro'],['gründlich','minucioso'],['üblich','comum, habitual'],['unterschiedlich','diferente, variado'],['zahlreich','numeroso'],['ausreichend','suficiente'],['geeignet','adequado'],['gespannt','curioso, ansioso (para saber)'],['die Herausforderung','o desafio'],['zurechtkommen','dar conta, se virar']]},
 {t:'mc',q:'Die ___ für die Anmeldung endet am 30. Juni.',opts:['Frist','Quittung','Summe'],a:0},
 {t:'mc',q:'Mein Visum läuft bald ab. Ich muss es ___.',opts:['verlängern','versäumen','verwechseln'],a:0},
 {t:'mc',q:'Bitte bringen Sie alle ___ zum Termin mit: Pass, Mietvertrag und Arbeitsvertrag.',opts:['Unterlagen','Bedingungen','Mahnungen'],a:0},
 {t:'mc',q:'Die Rechnung ist seit zwei Wochen ___. Bitte zahlen Sie sofort.',opts:['fällig','geeignet','gespannt'],a:0},
 {t:'mc',q:'Ich bin schon sehr ___, wie die Prüfung wird.',opts:['gespannt','gründlich','üblich'],a:0},
 {t:'gap',q:'___ es morgen regnet, fällt das Fest aus. (caso)',a:['Falls']},
 {t:'gap',q:'Bitte antworten Sie ___ schnell. (o mais rápido possível)',a:['möglichst']},
 {t:'gap',q:'Im neuen Land ist am Anfang alles eine ___. (desafio)',a:['Herausforderung']},
 {t:'match',q:'Ligue.',pairs:[['beantragen','solicitar'],['die Quittung','o recibo'],['endgültig','definitivo'],['zunächst','primeiro'],['versäumen','perder (prazo)'],['zurechtkommen','se virar']]},
 {t:'tr',de:'Eu preciso entregar os documentos até sexta, o mais tardar.',a:['Ich muss die Unterlagen spätestens bis Freitag abgeben.','Ich muss die Unterlagen bis spätestens Freitag abgeben.','Ich muss spätestens bis Freitag die Unterlagen abgeben.','Ich muss die Unterlagen spätestens am Freitag abgeben.']},
 {t:'tr',de:'No começo foi difícil, mas hoje eu me viro bem.',a:['Am Anfang war es schwer, aber heute komme ich gut zurecht.','Am Anfang war es schwierig, aber heute komme ich gut zurecht.','Anfangs war es schwer, aber heute komme ich gut zurecht.','Anfangs war es schwierig, aber heute komme ich gut zurecht.','Zunächst war es schwer, aber heute komme ich gut zurecht.','Zunächst war es schwierig, aber heute komme ich gut zurecht.']},
 {t:'info',title:'Parabéns! 🎉',html:`<p>Você chegou ao fim do nível <b>B1</b>! Se você acertou cerca de 60 % de cada parte deste simulado, você está pronto para o <b>Goethe-Zertifikat B1</b> (ou <b>telc Deutsch B1</b> / <b>Deutsch-Test für Zuwanderer</b>, de formato parecido).</p>
 <div class="ex">Com o B1 você consegue trabalhar em alemão, resolver quase tudo sozinho e conversar sobre muitos temas. O B1 é pedido em muitas empresas e para a residência permanente e a naturalização na Alemanha.</div>`}
]}],
resumen:`<h3>Formato da prova B1</h3><table><tr><td>Lesen</td><td>65 min · blog (richtig/falsch), 2 artigos, anúncios, opiniões (ja/nein), regras</td></tr><tr><td>Hören</td><td>~40 min · avisos, visita guiada, conversa (richtig/falsch), discussão no rádio</td></tr><tr><td>Schreiben</td><td>60 min · e-mail pessoal ~80, opinião ~80, mensagem formal ~40 palavras</td></tr><tr><td>Sprechen</td><td>~15 min · planejar juntos, apresentar um tema (5 passos), feedback e pergunta</td></tr></table>
<h3>Frases para falar</h3><p class="es-t">Wie wäre es, wenn wir …? · Ich schlage vor, dass … · Das ist eine gute Idee, aber … · Ich würde lieber … · Ich möchte heute über … sprechen. · Zum Schluss … · Vielen Dank fürs Zuhören.</p>
<h3>Palavras da prova</h3><p class="es-t">die Frist · spätestens · die Unterlagen · beantragen · verlängern · fällig · falls · möglichst · zunächst · endgültig · zurechtkommen</p>`});
;
/* Deutschkurs B2 (Erklärungen auf Portugiesisch) – Kapitel 37–48.
   Orientierung (nur Themen/Grammatik-Inventar, keine Texte übernommen): Goethe-Zertifikat B2 – Prüfungsziele/Testbeschreibung.
   Kurs-Person: Lucas Souza aus São Paulo, lebt seit drei Jahren in Frankfurt, Softwareentwickler (Kollegin Jana, Chefin Frau Dr. Hoffmann, Freund Tom – früher Mitbewohner). */

/* ================= KAPITEL 37 · BERUF & KARRIERE ================= */
LANGS.de.course.units.push({id:'k37',n:'37',level:'B2',title:'Beruf & Karriere',sub:'Carreira e qualificações · Nomen-Verb-Verbindungen (eine Entscheidung treffen, zur Verfügung stehen) · entrevista de emprego · carta de motivação',
goals:['Über Werdegang, Qualifikationen und Karriereziele sprechen','Nomen-Verb-Verbindungen verstehen und benutzen (eine Rolle spielen, in Frage kommen …)','Sich in einem Vorstellungsgespräch präsentieren: Stärken, Schwächen, Gehalt','Ein Motivationsschreiben verfassen'],
situacion:{title:'Entrevista de emprego',npc:'Herr Albrecht',scene:'Você se candidatou a uma vaga de líder de equipe (Teamleiter) numa empresa de software em Frankfurt. O Sr. Albrecht, do RH, conduz a entrevista.',role:'Du bist Herr Albrecht, Personalleiter einer Softwarefirma in Frankfurt. Du siezt. Du führst ein Vorstellungsgespräch mit Lucas für die Stelle „Teamleiter Entwicklung“. Frag nach seinem Werdegang, seinen Stärken und Schwächen, Erfahrung mit Verantwortung, wie er mit Konflikten im Team umgeht und nach seiner Gehaltsvorstellung. Stell auch eine schwierige Frage (Warum wollen Sie Ihre jetzige Stelle verlassen?). Benutze Nomen-Verb-Verbindungen (in Frage kommen, Verantwortung übernehmen, eine Entscheidung treffen). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Apresente o seu percurso, fale de pontos fortes e fracos com exemplos, responda à pergunta difícil com diplomacia e diga a sua pretensão salarial.'},
placement:[
 {t:'mc',q:'Wir müssen bis Freitag eine Entscheidung ___.',opts:['treffen','machen','stellen'],a:0},
 {t:'mc',q:'Für die Stelle ___ nur Bewerber mit Erfahrung in Frage.',opts:['kommen','stehen','gehen'],a:0},
 {t:'mc',q:'Der Laptop steht Ihnen ab Montag zur ___.',opts:['Verfügung','Verantwortung','Entscheidung'],a:0},
 {t:'gap',q:'Ich möchte gern mehr Verantwortung ___. (assumir)',a:['übernehmen']},
 {t:'mc',q:'„a promoção (no trabalho)“',opts:['die Beförderung','die Bewerbung','die Bewertung'],a:0},
 {t:'mc',q:'Die Stelle ist auf zwei Jahre ___. Danach endet der Vertrag.',opts:['befristet','belastbar','beruflich'],a:0}],
lessons:[
{id:'l1',title:'Carreira e qualificações',desc:'der Werdegang, die Beförderung, belastbar …',steps:[
 {t:'vocab',title:'Percurso profissional',items:[['der Werdegang','a trajetória (profissional)'],['die Laufbahn','a carreira'],['qualifiziert','qualificado'],['die Kompetenz','a competência'],['die Stellenausschreibung','o anúncio de vaga'],['ausschreiben','anunciar (uma vaga), abrir concurso'],['die Beförderung','a promoção'],['befördern','promover (alguém)'],['die Führungskraft','o/a líder, o gestor'],['aufsteigen','subir (na carreira)'],['der Quereinsteiger / die Quereinsteigerin','quem muda de área'],['das Arbeitszeugnis','a carta de referência (do empregador)'],['die Kündigungsfrist','o aviso prévio'],['die Gehaltsvorstellung','a pretensão salarial'],['verhandeln','negociar']]},
 {t:'vocab',title:'Perfil e pontos fortes',items:[['belastbar','resistente à pressão'],['die Belastbarkeit','a resistência à pressão'],['teamfähig','que sabe trabalhar em equipe'],['die Eigeninitiative','a iniciativa própria'],['durchsetzungsfähig','assertivo'],['kommunikationsstark','bom comunicador'],['lösungsorientiert','focado em soluções'],['sorgfältig','cuidadoso, meticuloso'],['sich weiterentwickeln','desenvolver-se'],['der Ehrgeiz','a ambição'],['ehrgeizig','ambicioso']]},
 {t:'mc',q:'Nach drei Jahren wurde Jana zur Teamleiterin ___.',opts:['befördert','beworben','beschrieben'],a:0},
 {t:'mc',q:'Ich bleibe auch in stressigen Phasen ruhig – ich bin sehr ___.',opts:['belastbar','ehrgeizig','befristet'],a:0},
 {t:'gap',q:'Max hat vorher Biologie studiert. Jetzt programmiert er – er ist ein ___ in der IT. (quem muda de área)',a:['Quereinsteiger']},
 {t:'match',q:'Ligue.',pairs:[['der Werdegang','a trajetória'],['die Beförderung','a promoção'],['sorgfältig','meticuloso'],['die Kündigungsfrist','o aviso prévio'],['verhandeln','negociar']]},
 {t:'tr',de:'Qual é a sua pretensão salarial?',a:['Was ist Ihre Gehaltsvorstellung?','Wie ist Ihre Gehaltsvorstellung?','Welche Gehaltsvorstellung haben Sie?']},
 {t:'speak',es:'In meiner bisherigen Laufbahn habe ich gelernt, lösungsorientiert und sorgfältig zu arbeiten.',de:'Na minha carreira até agora aprendi a trabalhar de forma focada em soluções e meticulosa.',tip:'<i>bisherig</i> = até agora (adjetivo): <i>meine bisherige Stelle</i>.'}
]},
{id:'l2',title:'Nomen-Verb-Verbindungen',desc:'eine Rolle spielen · in Frage kommen · zur Verfügung stehen',steps:[
 {t:'info',title:'Substantivo + verbo = uma expressão',html:`<p>Na linguagem formal (trabalho, jornais, cartas), o alemão gosta de expressões com <b>substantivo + verbo</b>. O sentido está no <b>substantivo</b>; o verbo quase não tem significado próprio – por isso é preciso aprender os pares.</p>
 <table><tr><th>expressão</th><th>= verbo simples</th></tr>
 <tr><td class="es-t">eine Entscheidung treffen</td><td>entscheiden – decidir</td></tr>
 <tr><td class="es-t">eine Frage stellen · einen Antrag stellen</td><td>fragen · beantragen</td></tr>
 <tr><td class="es-t">Verantwortung übernehmen</td><td>assumir a responsabilidade</td></tr>
 <tr><td class="es-t">in Frage kommen</td><td>ser uma opção, ser considerado</td></tr>
 <tr><td class="es-t">zur Verfügung stehen / stellen</td><td>estar / colocar à disposição</td></tr>
 <tr><td class="es-t">eine Rolle spielen</td><td>ser importante, ter um papel</td></tr>
 <tr><td class="es-t">in Kontakt treten / stehen mit</td><td>entrar / estar em contato com</td></tr>
 <tr><td class="es-t">Kritik üben an</td><td>kritisieren – criticar</td></tr>
 <tr><td class="es-t">Rücksicht nehmen auf</td><td>levar em consideração, ter consideração</td></tr>
 <tr><td class="es-t">zum Ausdruck bringen</td><td>ausdrücken – expressar</td></tr>
 <tr><td class="es-t">in Anspruch nehmen</td><td>utilizar (um serviço), tomar (tempo)</td></tr>
 <tr><td class="es-t">Maßnahmen ergreifen</td><td>tomar medidas</td></tr>
 <tr><td class="es-t">in Kraft treten</td><td>entrar em vigor</td></tr></table>
 <div class="ex">Muitas formam pares com <b>stellen</b> (ação) e <b>stehen</b> (estado, sentido passivo): <span class="es-t">zur Verfügung stellen → zur Verfügung stehen</span> · <span class="es-t">zur Diskussion stellen → zur Diskussion stehen</span>. Cuidado com a diferença: <span class="es-t">eine Frage stellen → in Frage stellen</span> (fazer uma pergunta ≠ questionar).</div>`},
 {t:'vocab',title:'Expressões com substantivo + verbo',items:[['eine Entscheidung treffen','tomar uma decisão'],['Verantwortung übernehmen','assumir a responsabilidade'],['in Frage kommen','ser uma opção'],['in Frage stellen','questionar, pôr em dúvida'],['zur Verfügung stehen','estar à disposição'],['zur Verfügung stellen','pôr à disposição'],['eine Rolle spielen','ter um papel, ser importante'],['in Kontakt treten mit','entrar em contato com'],['Kritik üben an','criticar'],['zum Ausdruck bringen','expressar'],['in Anspruch nehmen','utilizar, tomar (tempo)'],['Maßnahmen ergreifen','tomar medidas'],['in Kraft treten','entrar em vigor'],['einen Beitrag leisten','dar uma contribuição'],['zur Sprache bringen','trazer à tona (um assunto)']]},
 {t:'mc',q:'Das Gesetz ___ am 1. Januar in Kraft.',opts:['tritt','kommt','stellt'],a:0},
 {t:'mc',q:'Das Gehalt ___ für mich nicht die wichtigste Rolle.',opts:['spielt','macht','nimmt'],a:0},
 {t:'mc',q:'Der Kunde hat an unserem Konzept deutlich Kritik ___.',opts:['geübt','gestellt','gemacht'],a:0},
 {t:'gap',q:'Die Firma stellt allen Mitarbeitenden ein Jobticket zur ___.',a:['Verfügung']},
 {t:'gap',q:'Ein Umzug nach München kommt für mich leider nicht in ___.',a:['Frage']},
 {t:'gap',q:'Die Regierung muss endlich Maßnahmen ___. (tomar)',a:['ergreifen']},
 {t:'match',q:'Qual verbo combina?',pairs:[['eine Entscheidung','treffen'],['einen Antrag','stellen'],['einen Beitrag','leisten'],['Rücksicht','nehmen'],['in Kontakt','treten']]},
 {t:'order',es:'Ich möchte das Thema Homeoffice in der nächsten Besprechung zur Sprache bringen',de:'Eu gostaria de trazer o tema home office à tona na próxima reunião.'},
 {t:'tr',de:'A reunião vai tomar muito tempo.',a:['Die Besprechung wird viel Zeit in Anspruch nehmen.','Das Meeting wird viel Zeit in Anspruch nehmen.']},
 {t:'tr',de:'Quem assume a responsabilidade pelo projeto?',a:['Wer übernimmt die Verantwortung für das Projekt?']}
]},
{id:'l3',title:'Na entrevista',desc:'Stärken, Schwächen, Gehalt – höflich und überzeugend',steps:[
 {t:'info',title:'Frases para a entrevista',html:`<table><tr><td class="es-t">Ich bin auf Ihre Stellenausschreibung aufmerksam geworden, weil …</td><td>O seu anúncio me chamou a atenção porque …</td></tr>
 <tr><td class="es-t">Zu meinen Stärken zählt …</td><td>Entre os meus pontos fortes está …</td></tr>
 <tr><td class="es-t">Ich habe gelernt, mit Druck umzugehen.</td><td>Aprendi a lidar com pressão.</td></tr>
 <tr><td class="es-t">Eine meiner Schwächen ist …, aber ich arbeite daran, indem ich …</td><td>Um dos meus pontos fracos é …, mas estou trabalhando nisso: …</td></tr>
 <tr><td class="es-t">Ich suche eine neue Herausforderung.</td><td>Procuro um novo desafio.</td></tr>
 <tr><td class="es-t">Meine Gehaltsvorstellung liegt bei … brutto im Jahr.</td><td>A minha pretensão é de … bruto por ano.</td></tr>
 <tr><td class="es-t">Ab wann wäre die Stelle zu besetzen?</td><td>A partir de quando a vaga precisa ser preenchida?</td></tr></table>
 <div class="ex">Dica: fale de uma fraqueza <b>real, mas não crítica</b> e mostre o que você faz para melhorar. Nunca fale mal do empregador atual.</div>`},
 {t:'dialog',place:'Vorstellungsgespräch',title:'A pergunta difícil',scene:'O Sr. Albrecht, do RH, quer saber por que você quer sair do emprego atual.',lines:[
  {n:'Herr Albrecht',es:'Sie sind ja erst seit drei Jahren bei Ihrer jetzigen Firma. Warum wollen Sie wechseln?',de:'O senhor está há apenas três anos na sua empresa atual. Por que quer mudar?'},
  {you:true,opts:[{es:'Ich habe dort sehr viel gelernt, aber ich möchte mehr Verantwortung übernehmen – und das ist dort im Moment nicht möglich.',ok:true},{es:'Mein Chef ist schrecklich und die Kollegen sind faul.',ok:false,why:'Nunca fale mal do empregador atual – isso causa uma péssima impressão.'}]},
  {n:'Herr Albrecht',es:'Verstehe. Haben Sie denn schon Erfahrung in der Führung eines Teams?',de:'Entendo. O senhor já tem experiência em liderar uma equipe?'},
  {you:true,opts:[{es:'Ja, im letzten Projekt habe ich vier Kollegen koordiniert und wichtige Entscheidungen mit dem Kunden getroffen.',ok:true},{es:'Nein, aber ich bin sehr ehrgeizig.',ok:false,why:'Melhor dar um exemplo concreto – mesmo uma experiência pequena conta.'}]},
  {n:'Herr Albrecht',es:'Und was wäre Ihre Gehaltsvorstellung?',de:'E qual seria a sua pretensão salarial?'},
  {you:true,opts:[{es:'Ich stelle mir ein Jahresgehalt von 72.000 Euro brutto vor, bin aber für Gespräche offen.',ok:true},{es:'So viel wie möglich.',ok:false,why:'Diga um valor concreto (bruto, por ano) e mostre abertura.'}]},
  {n:'Herr Albrecht',es:'Gut. Dann treten wir in den nächsten zwei Wochen mit Ihnen in Kontakt.',de:'Certo. Então entraremos em contato nas próximas duas semanas.'}]},
 {t:'mc',q:'Wie reagiert man am besten auf die Frage nach Schwächen?',opts:['Man nennt eine echte Schwäche und sagt, wie man daran arbeitet.','Man sagt, dass man keine Schwächen hat.','Man erzählt von Problemen mit dem Chef.'],a:0},
 {t:'gap',q:'Ich bin auf Ihre Anzeige ___ geworden. (atento)',a:['aufmerksam']},
 {t:'gap',q:'Zu meinen Stärken ___ Zuverlässigkeit und Teamfähigkeit. (contar)',a:['zählen']},
 {t:'tr',de:'Procuro um novo desafio.',a:['Ich suche eine neue Herausforderung.']},
 {t:'speak',es:'Ich habe gelernt, auch unter Druck ruhig zu bleiben und Prioritäten zu setzen.',de:'Aprendi a ficar calmo mesmo sob pressão e a definir prioridades.',tip:'<i>Prioritäten setzen</i> = definir prioridades (mais uma expressão substantivo + verbo).'}
]},
{id:'l4',title:'Escrever: carta de motivação',desc:'Motivationsschreiben (ca. 150 Wörter)',steps:[
 {t:'read',title:'Leitura: Stellenanzeige',text:`Wir suchen ab 1. März eine Teamleitung Softwareentwicklung (m/w/d) in Vollzeit, unbefristet.
Ihre Aufgaben: Sie führen ein Team von sechs Entwicklerinnen und Entwicklern, planen Projekte gemeinsam mit unseren Kunden und treffen technische Entscheidungen.
Ihr Profil: abgeschlossenes Studium oder vergleichbare Qualifikation, mindestens drei Jahre Berufserfahrung, erste Erfahrung in der Führung, sehr gute Deutsch- und Englischkenntnisse.
Wir bieten: flexible Arbeitszeiten, zwei Tage Homeoffice pro Woche, ein Weiterbildungsbudget und ein Jobticket.
Bitte senden Sie Ihre Unterlagen mit Gehaltsvorstellung und frühestmöglichem Eintrittstermin an bewerbung@datawerk-frankfurt.de.`,de:`Procuramos a partir de 1º de março uma liderança de equipe de desenvolvimento de software (m/f/d) em tempo integral, por tempo indeterminado.\nSuas tarefas: liderar uma equipe de seis desenvolvedoras e desenvolvedores, planejar projetos junto com nossos clientes e tomar decisões técnicas.\nSeu perfil: graduação completa ou qualificação comparável, pelo menos três anos de experiência profissional, primeira experiência em liderança, conhecimentos muito bons de alemão e inglês.\nOferecemos: horários flexíveis, dois dias de home office por semana, orçamento para formação e passe de transporte.\nEnvie seus documentos com pretensão salarial e a data de início mais próxima possível para bewerbung@datawerk-frankfurt.de.`},
 {t:'mc',q:'Was muss man in der Bewerbung angeben?',opts:['Gehaltsvorstellung und Eintrittstermin','Nur den Lebenslauf','Ein Foto und Referenzen'],a:0},
 {t:'mc',q:'Welche Erfahrung ist Voraussetzung?',opts:['mindestens drei Jahre im Beruf','zehn Jahre Führung','ein Doktortitel'],a:0},
 {t:'mc',q:'„unbefristet“ bedeutet:',opts:['Der Vertrag hat kein festes Ende.','Der Vertrag dauert ein Jahr.','Es ist eine Teilzeitstelle.'],a:0},
 {t:'info',title:'Estrutura do Motivationsschreiben',html:`<table><tr><td>Assunto</td><td class="es-t">Bewerbung als Teamleiter Softwareentwicklung</td></tr>
 <tr><td>Início</td><td class="es-t">Sehr geehrte Damen und Herren, mit großem Interesse habe ich Ihre Stellenausschreibung gelesen.</td></tr>
 <tr><td>Quem sou</td><td class="es-t">Derzeit arbeite ich als … bei … und bin dort verantwortlich für …</td></tr>
 <tr><td>Por que eu</td><td class="es-t">Besonders reizt mich an der Stelle, dass … · Ich bringe … mit.</td></tr>
 <tr><td>Final</td><td class="es-t">Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr. Mit freundlichen Grüßen</td></tr></table>`},
 {t:'free',task:'Escreva uma carta de motivação para a vaga acima (~150 palavras): 1) por que a vaga interessa, 2) sua experiência e qualificações (com um exemplo concreto), 3) seus pontos fortes, 4) pretensão salarial e data de início.',hint:'Sehr geehrte Damen und Herren, mit großem Interesse … Derzeit arbeite ich … Dabei habe ich Verantwortung für … übernommen. Zu meinen Stärken zählen … Meine Gehaltsvorstellung liegt bei … Ich könnte die Stelle ab … antreten.',focus:'formelle Sprache, Nomen-Verb-Verbindungen, Nebensätze, Begründungen',model:'Sehr geehrte Damen und Herren,\nmit großem Interesse habe ich Ihre Anzeige für die Stelle als Teamleiter Softwareentwicklung gelesen. Derzeit arbeite ich als Softwareentwickler bei einer Frankfurter IT-Firma. Im letzten Jahr habe ich dort die Verantwortung für ein Kundenprojekt übernommen und ein Team von vier Personen koordiniert. Dabei habe ich gelernt, auch unter Zeitdruck gute Entscheidungen zu treffen.\nBesonders reizt mich an Ihrer Stelle, dass Sie eng mit den Kunden zusammenarbeiten. Zu meinen Stärken zählen Teamfähigkeit, Belastbarkeit und ein lösungsorientierter Arbeitsstil. Außerdem spreche ich Portugiesisch, Englisch und Deutsch.\nMeine Gehaltsvorstellung liegt bei 72.000 Euro brutto im Jahr. Unter Berücksichtigung meiner Kündigungsfrist könnte ich die Stelle zum 1. April antreten.\nÜber eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Nomen-Verb-Verbindungen</h3><p class="es-t">eine Entscheidung treffen · Verantwortung übernehmen · in Frage kommen · zur Verfügung stehen/stellen · eine Rolle spielen · Kritik üben an · Maßnahmen ergreifen · in Kraft treten · in Anspruch nehmen · einen Beitrag leisten</p>
<h3>Vorstellungsgespräch</h3><p class="es-t">Zu meinen Stärken zählt … · Ich suche eine neue Herausforderung. · Meine Gehaltsvorstellung liegt bei …</p>
<h3>Karriere</h3><p class="es-t">der Werdegang · die Beförderung · die Führungskraft · belastbar · teamfähig · die Kündigungsfrist · das Arbeitszeugnis</p>`});

/* ================= KAPITEL 38 · WISSENSCHAFT & TECHNIK ================= */
LANGS.de.course.units.push({id:'k38',n:'38',level:'B2',title:'Wissenschaft & Technik',sub:'Pesquisa e invenções · alternativas à voz passiva (lässt sich, -bar, ist zu …) · descrever gráficos · inteligência artificial',
goals:['Über Forschung, Erfindungen und Fortschritt sprechen','Passiversatzformen: sich lassen, -bar, sein + zu + Infinitiv','Grafiken und Statistiken beschreiben','Einen Forumsbeitrag mit Argumenten schreiben (Thema KI)'],
situacion:{title:'Debate sobre IA',npc:'Dr. Weber',scene:'Na sua empresa há uma palestra sobre inteligência artificial. Depois, a pesquisadora Dra. Weber conversa com você.',role:'Du bist Dr. Katrin Weber, Forscherin für künstliche Intelligenz an der Universität Frankfurt. Du siezt. Nach deinem Vortrag sprichst du mit Lucas (Softwareentwickler) über Chancen und Risiken von KI: Arbeitsplätze, Datenschutz, Fehler von Systemen, Bildung. Vertritt eine differenzierte Meinung, frag nach seinen Erfahrungen im Beruf und widersprich ihm höflich, wenn er zu einseitig argumentiert. Benutze Passiversatzformen (lässt sich nicht vermeiden, ist kaum vorhersehbar, ist zu prüfen). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Dê a sua opinião sobre IA com argumentos a favor e contra, conte uma experiência do trabalho e reaja às objeções.'},
placement:[
 {t:'mc',q:'Das Problem ___ sich leicht lösen.',opts:['lässt','wird','ist'],a:0},
 {t:'mc',q:'Diese Handschrift ist kaum ___. (man kann sie kaum lesen)',opts:['lesbar','lesend','gelesen'],a:0},
 {t:'mc',q:'Der Antrag ist bis Montag ___. (muss abgegeben werden)',opts:['abzugeben','abgegeben','abgeben'],a:0},
 {t:'gap',q:'Der Anteil ist von 20 auf 40 Prozent gestiegen – er hat sich ___. (dobrou)',a:['verdoppelt']},
 {t:'mc',q:'„a descoberta“',opts:['die Entdeckung','die Erfindung','die Erkenntnis'],a:0},
 {t:'mc',q:'Die Studie ___, dass Schlaf das Gedächtnis verbessert.',opts:['belegt','erfindet','vermutet sich'],a:0}],
lessons:[
{id:'l1',title:'Pesquisa e invenções',desc:'die Forschung, die Erkenntnis, beweisen …',steps:[
 {t:'vocab',title:'Ciência e pesquisa',items:[['die Wissenschaft','a ciência'],['der Wissenschaftler / die Wissenschaftlerin','o cientista / a cientista'],['wissenschaftlich','científico'],['forschen','pesquisar'],['der Forscher / die Forscherin','o pesquisador / a pesquisadora'],['die Erfindung','a invenção'],['erfinden','inventar'],['die Entdeckung','a descoberta'],['die Erkenntnis','o conhecimento adquirido, a constatação'],['das Experiment','o experimento'],['die These','a tese'],['die Annahme','a suposição'],['beweisen','provar'],['der Beweis','a prova'],['widerlegen','refutar'],['belegen','comprovar (com dados)'],['die Studie','o estudo'],['das Verfahren','o procedimento, o processo'],['das Labor','o laboratório']]},
 {t:'vocab',title:'Tecnologia e progresso',items:[['der Fortschritt','o progresso'],['fortschrittlich','progressista, avançado'],['die künstliche Intelligenz (KI)','a inteligência artificial (IA)'],['die Anwendung','a aplicação, o uso'],['anwenden','aplicar'],['die Entwicklung','o desenvolvimento'],['automatisieren','automatizar'],['der Roboter','o robô'],['ersetzen','substituir'],['die Gefahr','o perigo'],['das Risiko','o risco']]},
 {t:'mc',q:'Die Glühbirne wurde nicht von einer Person allein ___.',opts:['erfunden','entdeckt','bewiesen'],a:0},
 {t:'mc',q:'Neue Daten haben die alte These ___. Sie war falsch.',opts:['widerlegt','belegt','angewendet'],a:0},
 {t:'gap',q:'Kolumbus hat Amerika nicht erfunden, sondern ___. (descobriu – Perfekt)',a:['entdeckt']},
 {t:'match',q:'Ligue.',pairs:[['die Erkenntnis','a constatação'],['das Verfahren','o procedimento'],['beweisen','provar'],['der Fortschritt','o progresso'],['die Annahme','a suposição']]},
 {t:'tr',de:'O estudo comprova que o esporte reduz o estresse.',a:['Die Studie belegt, dass Sport Stress reduziert.','Die Studie belegt, dass Sport Stress verringert.','Die Studie beweist, dass Sport Stress reduziert.']},
 {t:'speak',es:'Künstliche Intelligenz kann viele Aufgaben automatisieren, aber sie kann den Menschen nicht vollständig ersetzen.',de:'A inteligência artificial pode automatizar muitas tarefas, mas não pode substituir o ser humano completamente.',tip:'<i>ersetzen</i> + acusativo: <i>den Menschen</i> (declinação -n).'}
]},
{id:'l2',title:'Alternativas à voz passiva',desc:'lässt sich lösen · lösbar · ist zu lösen',steps:[
 {t:'info',title:'Passiversatzformen',html:`<p>Em vez do Passiv com <i>werden</i> + modal, o alemão formal usa outras formas. Todas significam „<b>pode</b> ser feito“ ou „<b>deve</b> ser feito“:</p>
 <table><tr><th>forma</th><th>exemplo</th><th>= Passiv com modal</th></tr>
 <tr><td><b>sich lassen</b> + infinitivo</td><td class="es-t">Das Problem lässt sich lösen.</td><td class="es-t">Das Problem kann gelöst werden.</td></tr>
 <tr><td>adjetivo em <b>-bar</b></td><td class="es-t">Das Problem ist lösbar.</td><td class="es-t">Das Problem kann gelöst werden.</td></tr>
 <tr><td><b>sein + zu</b> + infinitivo</td><td class="es-t">Das Problem ist zu lösen.</td><td class="es-t">Das Problem kann / muss gelöst werden.</td></tr>
 <tr><td><b>sein + zu</b> (obrigação)</td><td class="es-t">Der Antrag ist bis Freitag abzugeben.</td><td class="es-t">Der Antrag muss bis Freitag abgegeben werden.</td></tr></table>
 <div class="ex">Com verbos separáveis, o <b>zu</b> fica no meio: <span class="es-t">abgeben → abzugeben</span> · <span class="es-t">einschalten → einzuschalten</span>. Negação com -bar muitas vezes com <b>un-</b>: <span class="es-t">unlösbar, unvorstellbar</span>.</div>`},
 {t:'vocab',title:'Adjetivos em -bar',items:[['machbar','viável'],['vorstellbar','imaginável'],['unvorstellbar','inimaginável'],['vorhersehbar','previsível'],['erkennbar','reconhecível, perceptível'],['vergleichbar','comparável'],['nachvollziehbar','compreensível (dá para entender o raciocínio)'],['vermeidbar','evitável'],['lösbar','solucionável']]},
 {t:'mc',q:'Die Ergebnisse ___ sich nicht mit den alten Daten vergleichen.',opts:['lassen','werden','sind'],a:0},
 {t:'mc',q:'Das Gerät ist vor der Reinigung ___.',opts:['auszuschalten','ausschalten','ausgeschaltet zu'],a:0},
 {t:'mc',q:'„Der Fehler kann nicht vermieden werden.“ = Der Fehler ist ___.',opts:['nicht vermeidbar','nicht vermeiden','nicht zu vermieden'],a:0},
 {t:'gap',q:'Deine Argumente sind gut ___. (dá para entender o raciocínio)',a:['nachvollziehbar']},
 {t:'gap',q:'Das Projekt ___ sich in drei Monaten umsetzen.',a:['lässt']},
 {t:'gap',q:'Die Rechnung ist innerhalb von 14 Tagen zu ___. (bezahlen)',a:['bezahlen']},
 {t:'order',es:'Die Folgen dieser Technologie sind heute noch nicht vorhersehbar',de:'As consequências dessa tecnologia ainda não são previsíveis hoje.'},
 {t:'tr',de:'Isso não dá para explicar facilmente. (sich lassen)',a:['Das lässt sich nicht leicht erklären.','Das lässt sich nicht einfach erklären.']},
 {t:'tr',de:'O formulário deve ser preenchido completamente. (sein + zu)',a:['Das Formular ist vollständig auszufüllen.']}
]},
{id:'l3',title:'Descrever gráficos',desc:'der Anteil, steigen, sich verdoppeln, die Mehrheit …',steps:[
 {t:'vocab',title:'Estatísticas',items:[['die Grafik','o gráfico'],['das Diagramm','o diagrama'],['der Anteil','a parcela, a proporção'],['der Prozentsatz','a porcentagem'],['sich verdoppeln','dobrar'],['sich halbieren','cair pela metade'],['ein Drittel','um terço'],['ein Viertel','um quarto'],['knapp','pouco menos de'],['rund','cerca de'],['deutlich','claramente, bem'],['im Vergleich zu','em comparação com'],['gleich bleiben','permanecer igual']]},
 {t:'info',title:'Como descrever um gráfico',html:`<table><tr><td>Tema e fonte</td><td class="es-t">Die Grafik zeigt, wie viele Menschen in Deutschland KI-Programme nutzen. Die Daten stammen aus einer Umfrage von 2025.</td></tr>
 <tr><td>Tendência</td><td class="es-t">Der Anteil ist von 15 auf 45 Prozent gestiegen. · Die Zahl hat sich verdreifacht.</td></tr>
 <tr><td>Comparação</td><td class="es-t">Im Vergleich zu den Älteren nutzen Jüngere KI deutlich häufiger.</td></tr>
 <tr><td>Maior / menor</td><td class="es-t">Die Mehrheit (knapp 60 Prozent) … · Nur eine Minderheit …</td></tr></table>
 <div class="ex">Preposições: <b>von … auf</b> (de … para): <span class="es-t">von 15 auf 45 Prozent</span> · <b>um</b> (diferença): <span class="es-t">um 30 Prozentpunkte</span>.</div>`},
 {t:'read',title:'Leitura: Wer nutzt KI?',text:`Die Grafik zeigt, wie viele Erwachsene in Deutschland mindestens einmal pro Woche KI-Programme nutzen. Im Jahr 2023 waren es rund 15 Prozent, 2025 bereits 45 Prozent – der Anteil hat sich also verdreifacht. Besonders deutlich ist der Unterschied zwischen den Altersgruppen: Während bei den 18- bis 29-Jährigen knapp 70 Prozent KI regelmäßig verwenden, ist es bei den über 65-Jährigen nur etwa jeder Zehnte. Die Mehrheit der Befragten nutzt die Programme zum Übersetzen und zum Schreiben von Texten. Ein Viertel gibt an, KI auch im Beruf einzusetzen.`,de:`O gráfico mostra quantos adultos na Alemanha usam programas de IA pelo menos uma vez por semana. Em 2023 eram cerca de 15 por cento, em 2025 já 45 por cento – a parcela, portanto, triplicou. A diferença entre as faixas etárias é especialmente clara: enquanto entre os de 18 a 29 anos quase 70 por cento usam IA regularmente, entre os acima de 65 é só cerca de um em cada dez. A maioria dos entrevistados usa os programas para traduzir e escrever textos. Um quarto afirma usar IA também no trabalho.`},
 {t:'mc',q:'Wie hat sich die Nutzung von 2023 bis 2025 entwickelt?',opts:['Sie hat sich verdreifacht.','Sie hat sich halbiert.','Sie ist gleich geblieben.'],a:0},
 {t:'mc',q:'Wie viele Menschen über 65 nutzen KI regelmäßig?',opts:['etwa zehn Prozent','knapp 70 Prozent','ein Viertel'],a:0},
 {t:'mc',q:'Wofür nutzt die Mehrheit KI?',opts:['zum Übersetzen und Schreiben','für Spiele','zum Programmieren'],a:0},
 {t:'gap',q:'Die Zahl der Nutzer ist von 15 ___ 45 Prozent gestiegen.',a:['auf']},
 {t:'tr',de:'A maioria dos entrevistados trabalha em casa.',a:['Die Mehrheit der Befragten arbeitet zu Hause.','Die Mehrheit der Befragten arbeitet von zu Hause.','Die Mehrheit der Befragten arbeitet im Homeoffice.']}
]},
{id:'l4',title:'Escrever: opinião no fórum',desc:'Forumsbeitrag „KI in der Schule?“ (ca. 150 Wörter)',steps:[
 {t:'read',title:'Leitura: Diskussion im Forum',text:`Thema: Sollen Schülerinnen und Schüler KI bei den Hausaufgaben benutzen dürfen?
Mareike, Lehrerin: Ich sehe das kritisch. Wenn ein Programm die Texte schreibt, lernen die Kinder nicht mehr, selbst zu denken. Außerdem ist kaum erkennbar, welcher Text echt ist.
Leon_17: Verbieten lässt sich KI sowieso nicht. Die Schule sollte uns lieber zeigen, wie man sie sinnvoll anwendet. Im Beruf brauchen wir das später auch.
Herr Kaya, Vater: Für mich spielt der Datenschutz eine große Rolle. Wer garantiert, dass die Daten der Kinder nicht weitergegeben werden?`,de:`Tema: Os alunos devem poder usar IA nas tarefas de casa?\nMareike, professora: Vejo isso de forma crítica. Se um programa escreve os textos, as crianças não aprendem mais a pensar por conta própria. Além disso, é difícil perceber qual texto é autêntico.\nLeon_17: De qualquer forma, não dá para proibir a IA. A escola deveria nos mostrar como usá-la de forma sensata. No trabalho, mais tarde, também vamos precisar disso.\nSr. Kaya, pai: Para mim, a proteção de dados tem um papel importante. Quem garante que os dados das crianças não serão repassados?`},
 {t:'mc',q:'Was befürchtet Mareike?',opts:['Die Kinder lernen nicht mehr, selbst zu denken.','Die Kinder benutzen zu wenig Technik.','Die Lehrer verlieren ihre Arbeit.'],a:0},
 {t:'mc',q:'Welche Meinung hat Leon_17?',opts:['Man sollte lernen, KI sinnvoll zu nutzen.','KI sollte verboten werden.','Datenschutz ist am wichtigsten.'],a:0},
 {t:'mc',q:'Worum macht sich Herr Kaya Sorgen?',opts:['um die Daten der Kinder','um die Noten','um die Kosten'],a:0},
 {t:'info',title:'Argumentar por escrito',html:`<table><tr><td class="es-t">Meiner Ansicht nach … · Ich bin der Meinung, dass …</td><td>Na minha opinião …</td></tr>
 <tr><td class="es-t">Dafür spricht, dass … · Dagegen spricht, dass …</td><td>Um argumento a favor é que … · Um argumento contra é que …</td></tr>
 <tr><td class="es-t">Einerseits …, andererseits …</td><td>Por um lado …, por outro …</td></tr>
 <tr><td class="es-t">Ein wichtiges Argument ist …</td><td>Um argumento importante é …</td></tr>
 <tr><td class="es-t">Zusammenfassend lässt sich sagen, dass …</td><td>Resumindo, pode-se dizer que …</td></tr></table>`},
 {t:'free',task:'Escreva a sua contribuição no fórum (~150 palavras): 1) sua opinião sobre IA nas tarefas escolares, 2) dois argumentos (um a favor, um contra), 3) reaja a uma das opiniões acima, 4) uma proposta concreta para as escolas.',hint:'Meiner Ansicht nach … Einerseits …, andererseits … Mareike hat recht, wenn sie sagt, dass … Allerdings lässt sich … Ich schlage vor, dass … Zusammenfassend lässt sich sagen, …',focus:'Argumentation, Passiversatzformen, Konnektoren',model:'Meiner Ansicht nach lässt sich KI aus der Schule nicht mehr verbannen – die Frage ist nur, wie man sie sinnvoll einsetzt.\nEinerseits können Programme beim Lernen helfen: Sie erklären schwierige Themen in einfachen Worten und geben sofort Feedback. Andererseits hat Mareike recht, wenn sie sagt, dass Kinder selbst denken lernen müssen. Wer jeden Aufsatz von einer Maschine schreiben lässt, lernt nichts.\nAuch das Argument von Herrn Kaya ist nachvollziehbar: Daten von Minderjährigen sind besonders zu schützen.\nIch schlage deshalb vor, dass Schulen klare Regeln aufstellen: Hausaufgaben, die bewertet werden, sind ohne KI zu schreiben. Im Unterricht sollte man aber gemeinsam üben, wie man KI-Ergebnisse prüft und kritisch hinterfragt.\nZusammenfassend lässt sich sagen, dass KI eine Chance ist, wenn wir lernen, verantwortungsvoll damit umzugehen.'}
]}],
resumen:`<h3>Passiversatzformen</h3><p class="es-t">Das lässt sich lösen. · Das ist lösbar. · Das ist zu lösen. · Der Antrag ist bis Freitag abzugeben.</p>
<h3>-bar</h3><p class="es-t">machbar · vorstellbar · vorhersehbar · erkennbar · vergleichbar · nachvollziehbar · vermeidbar · erneuerbar</p>
<h3>Grafiken</h3><p class="es-t">Die Grafik zeigt … · Der Anteil ist von 15 auf 45 Prozent gestiegen. · Die Mehrheit … · im Vergleich zu …</p>`});

/* ================= KAPITEL 39 · GESELLSCHAFT IM WANDEL ================= */
LANGS.de.course.units.push({id:'k39',n:'39',level:'B2',title:'Gesellschaft im Wandel',sub:'Mudanças sociais e demografia · Konjunktiv I (discurso indireto: er sagt, er sei …) · discutir e contradizer',
goals:['Über demografischen Wandel, Vielfalt und Zusammenhalt sprechen','Konjunktiv I: indirekte Rede in Nachrichten und Berichten','Aussagen anderer korrekt wiedergeben','In einer Diskussion widersprechen und Kompromisse vorschlagen'],
situacion:{title:'Discussão no bairro',npc:'Herr Krüger',scene:'Numa reunião do bairro, discute-se se um antigo prédio de escritórios deve virar moradia para idosos ou um centro para jovens. O Sr. Krüger, morador antigo, tem uma opinião forte.',role:'Du bist Herr Krüger, 70 Jahre, seit 40 Jahren im Frankfurter Stadtteil Bornheim zu Hause. Du siezt. Bei einer Bürgerversammlung diskutierst du mit Lucas: Du willst, dass aus dem alten Bürogebäude Wohnungen für Seniorinnen und Senioren werden (Einsamkeit, steigende Mieten, Altersarmut). Lucas ist eher für ein Jugend- und Begegnungszentrum. Argumentiere engagiert, aber fair, und sei am Ende offen für einen Kompromiss (z. B. ein Mehrgenerationenhaus). Gib auch wieder, was andere gesagt haben (Konjunktiv I: Die Stadträtin hat gesagt, es gebe kein Geld …). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Defenda a sua posição com argumentos, contradiga com educação, cite o que outros disseram e chegue a um meio-termo.'},
placement:[
 {t:'mc',q:'Der Minister sagte, er ___ mit dem Ergebnis zufrieden.',opts:['sei','ist gewesen','wäre gewesen'],a:0},
 {t:'mc',q:'Sie erklärte, sie ___ keine Zeit.',opts:['habe','hat','hätten'],a:0},
 {t:'mc',q:'Die Forscher sagen, sie ___ neue Daten. (Konjunktiv I = Indikativ → Konjunktiv II)',opts:['hätten','haben','habe'],a:0},
 {t:'gap',q:'Der Sprecher betonte, die Firma ___ keine Stellen abbauen. (werden – Konj. I)',a:['werde']},
 {t:'mc',q:'„a igualdade de direitos“',opts:['die Gleichberechtigung','die Gleichgültigkeit','die Gleichzeitigkeit'],a:0},
 {t:'mc',q:'Da muss ich Ihnen ___. Das sehe ich ganz anders.',opts:['widersprechen','versprechen','besprechen'],a:0}],
lessons:[
{id:'l1',title:'Mudanças sociais',desc:'der demografische Wandel, die Vielfalt, die Einsamkeit …',steps:[
 {t:'vocab',title:'Sociedade e demografia',items:[['gesellschaftlich','social'],['der Wandel','a mudança, a transformação'],['der demografische Wandel','a mudança demográfica'],['die Lebenserwartung','a expectativa de vida'],['die Geburtenrate','a taxa de natalidade'],['die Altersarmut','a pobreza na velhice'],['der Generationenvertrag','o pacto entre gerações (aposentadoria)'],['das Mehrgenerationenhaus','a casa multigeracional'],['die Einsamkeit','a solidão'],['der Zusammenhalt','a coesão, a união'],['die Solidarität','a solidariedade'],]},
 {t:'vocab',title:'Diversidade e igualdade',items:[['die Vielfalt','a diversidade'],['vielfältig','diverso, variado'],['die Gleichberechtigung','a igualdade de direitos'],['die Chancengleichheit','a igualdade de oportunidades'],['die Ungleichheit','a desigualdade'],['benachteiligt','desfavorecido'],['die Benachteiligung','a desvantagem, a discriminação'],['die Zuwanderung','a imigração'],['der Zuwanderer / die Zuwanderin','o imigrante / a imigrante'],['die Vorurteile (Pl.)','os preconceitos'],['die Akzeptanz','a aceitação'],['sich engagieren für','engajar-se por']]},
 {t:'mc',q:'Die Menschen werden immer älter – die ___ steigt.',opts:['Lebenserwartung','Geburtenrate','Altersarmut'],a:0},
 {t:'mc',q:'Viele ältere Menschen leben allein und leiden unter ___.',opts:['Einsamkeit','Vielfalt','Solidarität'],a:0},
 {t:'gap',q:'Frauen und Männer sollen die gleichen Rechte haben: Das nennt man ___.',a:['Gleichberechtigung']},
 {t:'match',q:'Ligue.',pairs:[['der Zusammenhalt','a coesão'],['die Vielfalt','a diversidade'],['benachteiligt','desfavorecido'],['die Zuwanderung','a imigração'],['das Ehrenamt','o trabalho voluntário']]},
 {t:'tr',de:'Ela se engaja pelos direitos dos imigrantes.',a:['Sie engagiert sich für die Rechte der Zuwanderer.','Sie engagiert sich für die Rechte von Zuwanderern.']},
 {t:'speak',es:'Durch den demografischen Wandel wird der Zusammenhalt zwischen den Generationen immer wichtiger.',de:'Com a mudança demográfica, a união entre as gerações fica cada vez mais importante.',tip:'<i>durch</i> + acusativo: <i>durch den Wandel</i>.'}
]},
{id:'l2',title:'Konjunktiv I',desc:'er sagt, er sei … · sie habe … · man könne …',steps:[
 {t:'info',title:'O discurso indireto',html:`<p>Em <b>notícias e relatórios</b>, para reproduzir o que outra pessoa disse sem assumir que é verdade, usa-se o <b>Konjunktiv I</b>. Forma: radical do infinitivo + terminação (quase só usado na 3ª pessoa):</p>
 <table><tr><th>infinitivo</th><th>er / sie / es</th></tr>
 <tr><td>sein</td><td class="es-t">er sei · sie seien</td></tr>
 <tr><td>haben</td><td class="es-t">er habe</td></tr>
 <tr><td>werden</td><td class="es-t">er werde</td></tr>
 <tr><td>können / müssen / wollen</td><td class="es-t">er könne · er müsse · er wolle</td></tr>
 <tr><td>kommen / geben / wissen</td><td class="es-t">er komme · es gebe · er wisse</td></tr></table>
 <div class="ex">Exemplo: <span class="es-t">Die Ministerin sagt: „Wir haben genug Geld.“ → Die Ministerin sagt, man habe genug Geld.</span></div>
 <p>Se o Konjunktiv I for <b>igual ao presente</b> (sobretudo no plural: <i>sie haben</i>), usa-se o <b>Konjunktiv II</b>: <span class="es-t">Sie sagen, sie hätten keine Zeit.</span></p>
 <p>Passado: Konjunktiv I de <i>haben/sein</i> + particípio: <span class="es-t">Er sagt, er habe den Bericht gelesen.</span> · <span class="es-t">Sie sagt, sie sei krank gewesen.</span></p>
 <div class="ex">Na conversa, as pessoas normalmente usam o indicativo ou o Konjunktiv II: <span class="es-t">Er hat gesagt, dass er keine Zeit hat / hätte.</span></div>`},
 {t:'mc',q:'Der Bürgermeister erklärte, die Stadt ___ mehr Sozialwohnungen bauen.',opts:['wolle','will','wollen'],a:0},
 {t:'mc',q:'Die Studentin berichtet, sie ___ drei Nebenjobs.',opts:['habe','hat','hätten'],a:0},
 {t:'mc',q:'Die Eltern sagen, sie ___ keinen Kitaplatz gefunden.',opts:['hätten','haben','habe'],a:0},
 {t:'mc',q:'Laut dem Bericht ___ die Zahl der Ehrenamtlichen gestiegen.',opts:['sei','ist gewesen','wäre'],a:0},
 {t:'gap',q:'Die Ärztin sagt, man ___ mehr Sport machen. (sollen – Konj. I)',a:['solle']},
 {t:'gap',q:'Er behauptet, er ___ davon nichts gewusst. (haben – Konj. I)',a:['habe']},
 {t:'gap',q:'Die Polizei teilte mit, es ___ keine Verletzten. (geben – Konj. I)',a:['gebe']},
 {t:'order',es:'Die Forscherin betonte es gebe noch viele offene Fragen',de:'A pesquisadora enfatizou que ainda haveria muitas questões em aberto.'},
 {t:'tr',de:'O ministro diz que a situação é difícil. (Konjunktiv I)',a:['Der Minister sagt, die Situation sei schwierig.','Der Minister sagt, die Lage sei schwierig.']},
 {t:'tr',de:'Ela disse que tinha estado doente. (Konjunktiv I)',a:['Sie sagte, sie sei krank gewesen.','Sie hat gesagt, sie sei krank gewesen.']}
]},
{id:'l3',title:'Ler notícias',desc:'Bericht über eine Studie · indirekte Rede',steps:[
 {t:'vocab',title:'Verbos para citar',items:[['behaupten','afirmar (sem provas)'],['betonen','enfatizar'],['mitteilen','comunicar, informar'],['angeben','declarar, indicar'],['zufolge','segundo (depois do substantivo)'],['die Befragten (Pl.)','os entrevistados']]},
 {t:'read',title:'Leitura: Studie zur Einsamkeit',text:`Immer mehr junge Menschen fühlen sich einsam. Das ist das Ergebnis einer neuen Studie der Universität Frankfurt. Laut der Studie gibt jeder vierte Befragte zwischen 18 und 29 Jahren an, sich oft allein zu fühlen.
Die Leiterin der Studie, Prof. Sabine Lorenz, erklärte, Einsamkeit sei längst kein Problem nur älterer Menschen mehr. Die Pandemie habe die Situation verschärft, aber auch soziale Medien spielten eine Rolle. Viele junge Leute hätten zwar Hunderte Kontakte im Netz, aber niemanden, mit dem sie wirklich reden könnten.
Lorenz betonte, die Politik müsse handeln. Sie schlägt vor, mehr Treffpunkte zu schaffen, an denen sich Jung und Alt begegnen können – zum Beispiel Mehrgenerationenhäuser. Ein Sprecher des Familienministeriums teilte mit, man werde die Ergebnisse genau prüfen.`,de:`Cada vez mais jovens se sentem sozinhos. Esse é o resultado de um novo estudo da Universidade de Frankfurt. Segundo o estudo, um em cada quatro entrevistados entre 18 e 29 anos declara sentir-se sozinho com frequência.\nA coordenadora do estudo, Prof.ª Sabine Lorenz, declarou que a solidão há muito tempo não seria mais um problema só de pessoas mais velhas. A pandemia teria agravado a situação, mas as redes sociais também teriam um papel. Muitos jovens teriam centenas de contatos na internet, mas ninguém com quem pudessem realmente conversar.\nLorenz enfatizou que a política precisaria agir. Ela propõe criar mais pontos de encontro onde jovens e idosos possam se encontrar – por exemplo, casas multigeracionais. Um porta-voz do Ministério da Família informou que iriam examinar os resultados com atenção.`},
 {t:'mc',q:'Wie viele junge Befragte fühlen sich oft allein?',opts:['jeder Vierte','jeder Zehnte','die Hälfte'],a:0},
 {t:'mc',q:'Was sagt Prof. Lorenz über soziale Medien?',opts:['Sie spielen auch eine Rolle.','Sie lösen das Problem.','Sie haben keinen Einfluss.'],a:0},
 {t:'mc',q:'Warum steht „sei“ und „habe“ im Text?',opts:['Die Zeitung gibt wieder, was Prof. Lorenz gesagt hat.','Es ist ein Wunsch.','Es ist eine Bedingung.'],a:0},
 {t:'mc',q:'Was hat das Ministerium angekündigt?',opts:['Es wird die Ergebnisse prüfen.','Es baut sofort neue Häuser.','Es kritisiert die Studie.'],a:0},
 {t:'gap',q:'Prof. Lorenz sagt: „Die Politik muss handeln.“ → Sie sagt, die Politik ___ handeln.',a:['müsse']}
]},
{id:'l4',title:'Discutir e contradizer',desc:'Da muss ich widersprechen · Was halten Sie von einem Kompromiss?',steps:[
 {t:'info',title:'Frases para discussões',html:`<table><tr><th>opinião</th><td class="es-t">Ich bin der Auffassung, dass … · Ich vertrete die Meinung, dass …</td></tr>
 <tr><th>concordar em parte</th><td class="es-t">Da haben Sie zwar recht, aber … · Das stimmt teilweise, allerdings …</td></tr>
 <tr><th>contradizer</th><td class="es-t">Da muss ich Ihnen widersprechen. · Das sehe ich anders. · Davon bin ich nicht überzeugt.</td></tr>
 <tr><th>interromper</th><td class="es-t">Darf ich kurz unterbrechen? · Lassen Sie mich bitte ausreden.</td></tr>
 <tr><th>meio-termo</th><td class="es-t">Was halten Sie von einem Kompromiss? · Wir könnten uns darauf einigen, dass …</td></tr></table>`},
 {t:'vocab',title:'Discussão',items:[['die Auffassung','a opinião, o entendimento'],['vertreten','defender (opinião); representar'],['überzeugt sein von','estar convencido de'],['unterbrechen','interromper'],['ausreden lassen','deixar terminar de falar'],['sich einigen auf','chegar a um acordo sobre'],['der Einwand','a objeção']]},
 {t:'dialog',place:'Bürgerversammlung',title:'Moradia para idosos ou centro para jovens?',scene:'Na reunião do bairro, o Sr. Krüger defende moradias para idosos no prédio antigo.',lines:[
  {n:'Herr Krüger',es:'Die Mieten steigen ständig. Viele Rentner können sich ihre Wohnung nicht mehr leisten. Deshalb brauchen wir dort Seniorenwohnungen!',de:'Os aluguéis sobem sem parar. Muitos aposentados não conseguem mais pagar o apartamento. Por isso precisamos de moradias para idosos ali!'},
  {you:true,opts:[{es:'Da haben Sie zwar recht, aber auch die Jugendlichen im Viertel haben keinen Ort, wo sie sich treffen können.',ok:true},{es:'Nein, Rentner sind nicht wichtig.',ok:false,why:'Num debate no nível B2, reconheça o argumento do outro antes de contradizer – e sem desrespeito.'}]},
  {n:'Herr Krüger',es:'Die Jugendlichen haben doch ihre Handys. Die Stadträtin hat außerdem gesagt, es gebe kein Geld für ein Jugendzentrum.',de:'Os jovens têm os celulares deles. Além disso, a vereadora disse que não haveria dinheiro para um centro de jovens.'},
  {you:true,opts:[{es:'Davon bin ich nicht überzeugt. Gerade junge Leute fühlen sich oft einsam. Was halten Sie von einem Kompromiss – einem Mehrgenerationenhaus?',ok:true},{es:'Das ist falsch, Sie verstehen das nicht.',ok:false,why:'Prefira expressões como „Davon bin ich nicht überzeugt“ e proponha uma solução.'}]},
  {n:'Herr Krüger',es:'Hm. Wohnungen für Ältere und Räume für Jüngere unter einem Dach … Darauf könnten wir uns vielleicht einigen.',de:'Hum. Moradias para mais velhos e espaços para mais jovens sob o mesmo teto … Nisso talvez a gente pudesse chegar a um acordo.'}]},
 {t:'mc',q:'Sie möchten höflich widersprechen. Was sagen Sie?',opts:['Das sehe ich etwas anders.','Sie haben keine Ahnung.','Seien Sie still.'],a:0},
 {t:'gap',q:'Entschuldigung, lassen Sie mich bitte ___! (terminar de falar)',a:['ausreden']},
 {t:'gap',q:'Nach langer Diskussion haben wir uns auf einen Kompromiss ___.',a:['geeinigt']},
 {t:'free',task:'Escreva um comentário (~150 palavras) para o jornal do bairro sobre o futuro do prédio: 1) reproduza duas opiniões da reunião (Konjunktiv I: Herr Krüger sagte, …), 2) dê a sua opinião com argumentos, 3) proponha um meio-termo.',hint:'Bei der Bürgerversammlung ging es um … Herr Krüger sagte, viele Rentner könnten … Die Stadträtin erklärte, es gebe … Ich bin der Auffassung, dass … Deshalb schlage ich vor, …',focus:'Konjunktiv I, Argumentation, Konnektoren',model:'Bei der Bürgerversammlung am Dienstag ging es um die Zukunft des alten Bürogebäudes in der Saalburgstraße. Herr Krüger, der seit 40 Jahren im Viertel wohnt, sagte, viele Rentnerinnen und Rentner könnten sich ihre Wohnungen nicht mehr leisten. Die Stadträtin erklärte, es gebe im Moment kein Geld für ein Jugendzentrum.\nIch bin der Auffassung, dass beide Gruppen Unterstützung brauchen. Einsamkeit betrifft nicht nur ältere Menschen, sondern auch viele Jugendliche. Außerdem fehlen im Viertel Orte, an denen sich Menschen unterschiedlichen Alters begegnen.\nDeshalb schlage ich ein Mehrgenerationenhaus vor: In den oberen Etagen könnten bezahlbare Wohnungen für Seniorinnen und Senioren entstehen, im Erdgeschoss ein Café und Räume für Jugendliche. Ehrenamtliche könnten das Programm unterstützen. So würde der Zusammenhalt im Viertel gestärkt.'}
]}],
resumen:`<h3>Konjunktiv I</h3><p class="es-t">er sei · er habe · er werde · er könne · es gebe · Sie sagen, sie hätten keine Zeit. · Er sagt, er habe den Bericht gelesen.</p>
<h3>Zitieren</h3><p class="es-t">behaupten · betonen · mitteilen · laut der Studie · der Studie zufolge</p>
<h3>Diskutieren</h3><p class="es-t">Ich bin der Auffassung, dass … · Da muss ich Ihnen widersprechen. · Davon bin ich nicht überzeugt. · Was halten Sie von einem Kompromiss?</p>`});

/* ================= KAPITEL 40 · WIRTSCHAFT & KONSUM ================= */
LANGS.de.course.units.push({id:'k40',n:'40',level:'B2',title:'Wirtschaft & Konsum',sub:'Economia e empresas · consumo consciente · atributos com particípio (das von uns entwickelte Produkt) · reclamação formal',
goals:['Über Unternehmen, Märkte und wirtschaftliche Entwicklungen sprechen','Konsumverhalten und Nachhaltigkeit diskutieren','Erweiterte Partizipialattribute verstehen und in Relativsätze umformen','Eine formelle Reklamation schreiben'],
situacion:{title:'Reclamação por telefone',npc:'Frau Seidel',scene:'O notebook que você comprou numa loja online parou de funcionar depois de três semanas. Você liga para o atendimento ao cliente.',role:'Du bist Frau Seidel vom Kundenservice des Onlineshops „Technikwelt“. Du siezt. Lucas ruft an, weil sein vor drei Wochen gekaufter Laptop nicht mehr startet. Frag nach Bestellnummer und Fehlerbeschreibung. Biete zuerst nur eine Reparatur an (Dauer: vier Wochen). Wenn Lucas freundlich, aber bestimmt auf sein Recht besteht (Gewährleistung, er braucht den Laptop für die Arbeit), biete einen Umtausch oder die Erstattung des Kaufpreises an. Benutze Partizipialattribute (das von Ihnen gekaufte Gerät, die angegebene Adresse). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Descreva o problema, recuse com educação a primeira proposta, argumente com os seus direitos e consiga uma troca ou o reembolso.'},
placement:[
 {t:'mc',q:'Das ___ Produkt verkauft sich sehr gut. (= das Produkt, das von uns entwickelt wurde)',opts:['von uns entwickelte','von uns entwickelnde','uns entwickelt'],a:0},
 {t:'mc',q:'Die seit Monaten ___ Preise machen vielen Menschen Sorgen.',opts:['steigenden','gestiegene','steigende'],a:0},
 {t:'mc',q:'Der ___ des Unternehmens ist im letzten Jahr um 10 % gestiegen.',opts:['Umsatz','Verbraucher','Verlust'],a:0},
 {t:'gap',q:'Die Firma hat keine Kunden mehr und ist ___ gegangen. (faliu)',a:['pleite']},
 {t:'mc',q:'„o consumidor“',opts:['der Verbraucher','der Verkäufer','der Vertreter'],a:0},
 {t:'mc',q:'Ich möchte den Kaufpreis ___ bekommen.',opts:['erstattet','erstellt','ersetzt'],a:0}],
lessons:[
{id:'l1',title:'Economia e empresas',desc:'der Umsatz, der Gewinn, die Nachfrage …',steps:[
 {t:'vocab',title:'Economia',items:[['wirtschaftlich','econômico'],['das Unternehmen','a empresa'],['der Konzern','o grupo empresarial, a multinacional'],['der Umsatz','o faturamento'],['der Gewinn','o lucro; o prêmio'],['der Verlust','o prejuízo, a perda'],['die Nachfrage','a demanda, a procura'],['die Inflation','a inflação'],['die Aktie','a ação (na bolsa)'],['die Börse','a bolsa de valores'],['investieren','investir'],['die Investition','o investimento'],['pleitegehen','falir'],['die Insolvenz','a insolvência, a falência'],['der Standort','a localização (da empresa)'],['die Branche','o setor, o ramo'],['der Export','a exportação']]},
 {t:'mc',q:'Die Firma hat dieses Jahr mehr verkauft – der ___ ist gestiegen.',opts:['Umsatz','Verlust','Standort'],a:0},
 {t:'mc',q:'Wenn viele Menschen ein Produkt kaufen wollen, ist die ___ groß.',opts:['Nachfrage','Inflation','Insolvenz'],a:0},
 {t:'gap',q:'Lucas arbeitet in der IT-___. (o ramo)',a:['Branche']},
 {t:'match',q:'Ligue.',pairs:[['der Gewinn','o lucro'],['der Verlust','o prejuízo'],['die Aktie','a ação'],['der Wettbewerb','a concorrência'],['investieren','investir']]},
 {t:'tr',de:'A empresa investe muito dinheiro em pesquisa.',a:['Das Unternehmen investiert viel Geld in Forschung.','Das Unternehmen investiert viel Geld in die Forschung.','Die Firma investiert viel Geld in Forschung.','Die Firma investiert viel Geld in die Forschung.']},
 {t:'speak',es:'Wegen der hohen Inflation ist die Nachfrage nach günstigen Produkten deutlich gestiegen.',de:'Por causa da inflação alta, a procura por produtos baratos aumentou bastante.',tip:'<i>die Nachfrage nach</i> + dativo = a procura por.'}
]},
{id:'l2',title:'Atributos com particípio',desc:'das von uns entwickelte Produkt · die steigenden Preise',steps:[
 {t:'info',title:'Erweiterte Partizipialattribute',html:`<p>Em textos formais, uma <b>oração relativa</b> vira muitas vezes um <b>atributo antes do substantivo</b>. O particípio funciona como adjetivo (com terminação!) e tudo o que pertence a ele vem antes:</p>
 <table><tr><th>oração relativa</th><th>atributo com particípio</th></tr>
 <tr><td class="es-t">das Produkt, das von uns entwickelt wurde</td><td class="es-t">das von uns entwickelte Produkt</td></tr>
 <tr><td class="es-t">die Preise, die seit Monaten steigen</td><td class="es-t">die seit Monaten steigenden Preise</td></tr>
 <tr><td class="es-t">der Laptop, den ich online gekauft habe</td><td class="es-t">der online gekaufte Laptop</td></tr>
 <tr><td class="es-t">Kunden, die sich beschweren</td><td class="es-t">sich beschwerende Kunden</td></tr></table>
 <div class="ex"><b>Partizip II</b> (gekauft, entwickelt) = passivo/terminado · <b>Partizip I</b> (steigend, wachsend) = ativo/acontecendo agora.<br>Para ler: encontre o <b>artigo</b>, pule até o <b>substantivo</b> e depois leia o meio: <span class="es-t">die (seit Jahren stark wachsende) Nachfrage</span>.</div>`},
 {t:'mc',q:'„die Ware, die gestern geliefert wurde“ =',opts:['die gestern gelieferte Ware','die gestern liefernde Ware','die gestern geliefert Ware'],a:0},
 {t:'mc',q:'„die Zahl der Menschen, die online einkaufen“ =',opts:['die Zahl der online einkaufenden Menschen','die Zahl der online eingekauften Menschen','die Zahl der Menschen online einkaufend'],a:0},
 {t:'mc',q:'Wie heißt der Relativsatz? „das im Vertrag genannte Datum“',opts:['das Datum, das im Vertrag genannt wird','das Datum, das den Vertrag nennt','das Datum, das im Vertrag nennt'],a:0},
 {t:'gap',q:'Der von mir ___ Artikel ist kaputt. (bestellen)',a:['bestellte']},
 {t:'gap',q:'Wir suchen eine gut Englisch ___ Mitarbeiterin. (sprechen – Partizip I)',a:['sprechende']},
 {t:'gap',q:'Bitte schicken Sie die Ware an die von mir ___ Adresse. (angeben)',a:['angegebene']},
 {t:'order',es:'Die seit Jahren steigende Nachfrage nach Secondhand-Kleidung überrascht viele Händler',de:'A procura por roupas de segunda mão, que cresce há anos, surpreende muitos comerciantes.'},
 {t:'tr',de:'o produto vendido no mundo inteiro (atributo com particípio)',a:['das weltweit verkaufte Produkt','das in der ganzen Welt verkaufte Produkt']}
]},
{id:'l3',title:'Consumo consciente',desc:'der Verbraucher, fair, die Lieferkette …',steps:[
 {t:'vocab',title:'Consumo',items:[['der Verbraucher / die Verbraucherin','o consumidor / a consumidora'],['das Konsumverhalten','o comportamento de consumo'],['der Onlinehandel','o comércio online'],['der Händler / die Händlerin','o / a comerciante'],['die Lieferkette','a cadeia de fornecimento'],['fair gehandelt','de comércio justo'],['die Marke','a marca'],['das Etikett','a etiqueta'],['der Fehlkauf','a compra errada'],['sich verschulden','endividar-se'],['die Gewährleistung','a garantia legal'],['die Erstattung','o reembolso'],['erstatten','reembolsar'],['der Umtausch','a troca'],['verzichten auf','abrir mão de, renunciar a'],['die Wegwerfgesellschaft','a sociedade do descartável']]},
 {t:'read',title:'Leitura: Reparieren statt wegwerfen',text:`Smartphone kaputt? Neu kaufen! So denken immer weniger Menschen in Deutschland. Die Zahl der sogenannten Repair-Cafés, in denen Ehrenamtliche kostenlos defekte Geräte reparieren, hat sich in den letzten zehn Jahren mehr als verdoppelt. Auch der Handel mit gebrauchter Kleidung wächst: Fast jeder dritte Verbraucher hat im letzten Jahr Secondhand-Mode gekauft.
Für die Wirtschaft ist das eine Herausforderung. Viele Hersteller verdienen ihr Geld mit Produkten, die schnell ersetzt werden. Ein im letzten Jahr beschlossenes EU-Gesetz soll das ändern: Hersteller müssen Ersatzteile künftig mindestens sieben Jahre lang anbieten.
Kritiker sagen allerdings, das allein reiche nicht. Solange Reparaturen teurer seien als neue Geräte, werde sich das Konsumverhalten kaum ändern.`,de:`Celular quebrado? Compra um novo! Cada vez menos pessoas na Alemanha pensam assim. O número dos chamados Repair-Cafés, onde voluntários consertam aparelhos com defeito de graça, mais que dobrou nos últimos dez anos. O comércio de roupas usadas também cresce: quase um em cada três consumidores comprou moda de segunda mão no último ano.\nPara a economia, isso é um desafio. Muitos fabricantes ganham dinheiro com produtos que são substituídos rapidamente. Uma lei da UE aprovada no ano passado deve mudar isso: no futuro, os fabricantes precisam oferecer peças de reposição por pelo menos sete anos.\nCríticos dizem, porém, que isso sozinho não bastaria. Enquanto consertos forem mais caros que aparelhos novos, o comportamento de consumo dificilmente vai mudar.`},
 {t:'mc',q:'Was passiert in einem Repair-Café?',opts:['Freiwillige reparieren kostenlos Geräte.','Man kauft gebrauchte Kleidung.','Man trinkt Kaffee und arbeitet.'],a:0},
 {t:'mc',q:'Was regelt das neue EU-Gesetz?',opts:['Ersatzteile müssen sieben Jahre angeboten werden.','Neue Geräte werden billiger.','Reparaturen sind kostenlos.'],a:0},
 {t:'mc',q:'Was meinen die Kritiker?',opts:['Reparaturen sind oft zu teuer.','Das Gesetz ist zu streng.','Niemand kauft Secondhand.'],a:0},
 {t:'gap',q:'Ein im letzten Jahr ___ Gesetz soll das ändern. (beschließen)',a:['beschlossenes']},
 {t:'tr',de:'Eu abro mão de roupas novas.',a:['Ich verzichte auf neue Kleidung.','Ich verzichte auf neue Klamotten.']}
]},
{id:'l4',title:'Escrever: reclamação formal',desc:'Reklamation an einen Onlineshop (ca. 100 Wörter)',steps:[
 {t:'info',title:'Reclamar por escrito',html:`<table><tr><td>Assunto</td><td class="es-t">Reklamation – Bestellung Nr. 48213 vom 2. Mai</td></tr>
 <tr><td>Situação</td><td class="es-t">Am 2. Mai habe ich bei Ihnen einen Laptop bestellt, der am 5. Mai geliefert wurde.</td></tr>
 <tr><td>Problema</td><td class="es-t">Leider startet das Gerät seit gestern nicht mehr.</td></tr>
 <tr><td>Exigência</td><td class="es-t">Ich bitte Sie daher, mir umgehend ein neues Gerät zu schicken oder den Kaufpreis zu erstatten.</td></tr>
 <tr><td>Prazo</td><td class="es-t">Ich erwarte Ihre Antwort bis zum 20. Mai.</td></tr></table>
 <div class="ex">Na Alemanha, a <b>Gewährleistung</b> (garantia legal) vale 2 anos. Nos primeiros 12 meses, presume-se que o defeito já existia na compra.</div>`},
 {t:'mc',q:'Welcher Satz passt am besten in eine formelle Reklamation?',opts:['Ich bitte Sie, mir den Kaufpreis zu erstatten.','Gebt mir sofort mein Geld zurück!','Na ja, vielleicht könnt ihr was machen.'],a:0},
 {t:'gap',q:'Ich bitte Sie, mir ___ ein neues Gerät zu schicken. (imediatamente)',a:['umgehend']},
 {t:'free',task:'Escreva uma reclamação formal para a loja online (~100 palavras): 1) o que você comprou e quando, 2) qual é o problema, 3) o que você já tentou, 4) o que você exige e até quando.',hint:'Sehr geehrte Damen und Herren, am … habe ich bei Ihnen … bestellt. Leider … Ich habe bereits … Ich bitte Sie daher, … Ich erwarte Ihre Antwort bis … Mit freundlichen Grüßen',focus:'formelle Sprache, Partizipialattribute, Infinitiv mit zu',model:'Sehr geehrte Damen und Herren,\nam 2. Mai habe ich bei Ihnen einen Laptop des Modells „ProBook 14“ bestellt (Bestellnummer 48213). Das am 5. Mai gelieferte Gerät funktionierte zunächst einwandfrei. Seit gestern startet es jedoch nicht mehr. Ich habe bereits versucht, den Akku vollständig zu laden und das Gerät zurückzusetzen – leider ohne Erfolg.\nDa ich den Laptop dringend für meine Arbeit benötige, bitte ich Sie, mir umgehend ein neues Gerät zu schicken oder den Kaufpreis zu erstatten. Eine Reparatur, die mehrere Wochen dauert, kommt für mich nicht in Frage.\nIch erwarte Ihre Antwort bis zum 20. Mai.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Partizipialattribute</h3><p class="es-t">das von uns entwickelte Produkt · die seit Monaten steigenden Preise · der online gekaufte Laptop · die von mir angegebene Adresse</p>
<h3>Wirtschaft</h3><p class="es-t">der Umsatz · der Gewinn · der Verlust · die Nachfrage · die Branche · investieren · pleitegehen</p>
<h3>Reklamation</h3><p class="es-t">Ich bitte Sie, mir den Kaufpreis zu erstatten. · die Gewährleistung · der Umtausch · Ich erwarte Ihre Antwort bis …</p>`});

/* ================= KAPITEL 41 · GESUNDHEIT & PSYCHE ================= */
LANGS.de.course.units.push({id:'k41',n:'41',level:'B2',title:'Gesundheit & Psyche',sub:'Estresse e bem-estar · sistema de saúde · modais para suposições (er dürfte, sie muss …) · Futur II (er wird … gewesen sein)',
goals:['Über Stress, Belastung und psychische Gesundheit sprechen','Modalverben subjektiv: Vermutungen und Behauptungen (muss, dürfte, kann, soll, will)','Futur II: Vermutungen über die Vergangenheit','Einen Ratgebertext verstehen und Tipps geben'],
situacion:{title:'Conversa com o médico',npc:'Dr. Yilmaz',scene:'Há semanas você dorme mal e se sente esgotado. Você vai à sua médica de família, a Dra. Yilmaz.',role:'Du bist Dr. Elif Yilmaz, Hausärztin in Frankfurt. Du siezt. Lucas kommt, weil er seit Wochen schlecht schläft, müde und gereizt ist. Frag genau nach (seit wann, Arbeit, Schlaf, Sport, Ernährung, Privatleben). Äußere vorsichtige Vermutungen (Das dürfte mit dem Stress zusammenhängen; Sie werden in letzter Zeit viel gearbeitet haben). Erkläre Möglichkeiten: Krankschreibung, Entspannungskurs (zahlt die Krankenkasse), Überweisung zu einer Psychotherapeutin. Sprich natürliches Deutsch auf B2-Niveau.',goal:'Descreva os sintomas com detalhes, responda às perguntas e decida com a médica o que fazer.'},
placement:[
 {t:'mc',q:'Er ist nicht im Büro. Er ___ krank sein. (provavelmente)',opts:['dürfte','soll','will'],a:0},
 {t:'mc',q:'Sie ___ sehr reich sein – das sagen jedenfalls alle. (dizem que)',opts:['soll','will','muss'],a:0},
 {t:'mc',q:'Er ___ den Text allein geschrieben haben. Aber das glaube ich nicht. (ele afirma)',opts:['will','soll','dürfte'],a:0},
 {t:'gap',q:'Jana ist noch nicht da. Sie ___ den Zug verpasst haben. (Futur II: werden)',a:['wird']},
 {t:'mc',q:'„esgotado, sobrecarregado (não dá conta)“',opts:['überfordert','überzeugt','überrascht'],a:0},
 {t:'mc',q:'Diese Krankheit ist ___. Bleiben Sie bitte zu Hause.',opts:['ansteckend','chronisch','psychisch'],a:0}],
lessons:[
{id:'l1',title:'Estresse e bem-estar',desc:'die Belastung, überfordert, abschalten …',steps:[
 {t:'vocab',title:'Psique e estresse',items:[['die Psyche','a psique'],['psychisch','psíquico, mental'],['die Belastung','a carga, a sobrecarga'],['überfordert','sobrecarregado'],['die Erschöpfung','o esgotamento'],['das Burn-out','o burnout'],['die Depression','a depressão'],['der Psychotherapeut / die Psychotherapeutin','o psicoterapeuta / a psicoterapeuta'],['die Achtsamkeit','a atenção plena'],['abschalten','desligar(-se), relaxar'],['die Auszeit','a pausa, o tempo para si'],['gereizt','irritado'],['die Schlafstörung','o distúrbio do sono'],['das Selbstwertgefühl','a autoestima'],['vorbeugen','prevenir'],['ausgeglichen','equilibrado']]},
 {t:'mc',q:'Nach der Arbeit kann ich einfach nicht ___. Ich denke immer an meine Projekte.',opts:['abschalten','vorbeugen','überfordern'],a:0},
 {t:'mc',q:'Seit Wochen schläft er schlecht. Er hat ___.',opts:['Schlafstörungen','Achtsamkeit','eine Auszeit'],a:0},
 {t:'gap',q:'Sport kann Stress ___. (prevenir)',a:['vorbeugen']},
 {t:'match',q:'Ligue.',pairs:[['überfordert','sobrecarregado'],['gereizt','irritado'],['ausgeglichen','equilibrado'],['die Erschöpfung','o esgotamento'],['die Auszeit','a pausa']]},
 {t:'tr',de:'Preciso de uma pausa.',a:['Ich brauche eine Auszeit.']},
 {t:'speak',es:'In letzter Zeit fühle ich mich oft überfordert und kann abends nicht mehr abschalten.',de:'Ultimamente me sinto muitas vezes sobrecarregado e não consigo mais relaxar à noite.',tip:'<i>abschalten</i> é separável: <i>ich schalte ab</i>, mas com modal: <i>ich kann nicht abschalten</i>.'}
]},
{id:'l2',title:'Modais para suposições',desc:'muss · dürfte · kann · soll · will',steps:[
 {t:'info',title:'Uso subjetivo dos modais',html:`<p>Os modais também expressam <b>o quanto o falante tem certeza</b> – ou que a informação vem de outra pessoa:</p>
 <table><tr><th>modal</th><th>significado</th><th>exemplo</th></tr>
 <tr><td><b>muss</b></td><td>quase certeza (~90 %)</td><td class="es-t">Er muss krank sein. Er fehlt nie.</td></tr>
 <tr><td><b>dürfte</b></td><td>provável (~75 %)</td><td class="es-t">Das dürfte am Stress liegen.</td></tr>
 <tr><td><b>kann / könnte</b></td><td>possível (~50 %)</td><td class="es-t">Sie könnte im Meeting sein.</td></tr>
 <tr><td><b>soll</b></td><td>dizem que (outra pessoa afirma)</td><td class="es-t">Der neue Chef soll sehr streng sein.</td></tr>
 <tr><td><b>will</b></td><td>ele próprio afirma (duvidoso)</td><td class="es-t">Er will nie krank gewesen sein.</td></tr></table>
 <div class="ex">Sobre o <b>passado</b>: modal + particípio + <i>haben/sein</i>: <span class="es-t">Sie muss den Termin vergessen haben.</span> · <span class="es-t">Er soll lange im Krankenhaus gewesen sein.</span></div>`},
 {t:'mc',q:'Das Licht ist an. Tom ___ zu Hause sein. (quase certeza)',opts:['muss','soll','will'],a:0},
 {t:'mc',q:'Laut Zeitung ___ das neue Medikament sehr wirksam sein.',opts:['soll','will','muss'],a:0},
 {t:'mc',q:'Max sagt, er habe den Marathon in drei Stunden geschafft. → Max ___ den Marathon in drei Stunden geschafft haben.',opts:['will','soll','dürfte'],a:0},
 {t:'mc',q:'„Wahrscheinlich ist sie schon zu Hause.“ =',opts:['Sie dürfte schon zu Hause sein.','Sie will schon zu Hause sein.','Sie soll schon zu Hause sein.'],a:0},
 {t:'gap',q:'Der Kollege fehlt schon wieder. Er ___ wirklich überlastet sein. (quase certeza)',a:['muss']},
 {t:'gap',q:'Sie ___ den Termin vergessen haben. (possivelmente – könnte)',a:['könnte']},
 {t:'order',es:'Die Ärztin soll schon lange in dieser Praxis arbeiten',de:'Dizem que a médica trabalha há muito tempo neste consultório.'},
 {t:'tr',de:'Ele deve ter perdido o ônibus. (quase certeza)',a:['Er muss den Bus verpasst haben.']}
]},
{id:'l3',title:'Sistema de saúde – Futur II',desc:'die Diagnose, die Nebenwirkung · Er wird es vergessen haben.',steps:[
 {t:'vocab',title:'No médico',items:[['der Hausarzt / die Hausärztin','o médico / a médica de família'],['die Diagnose','o diagnóstico'],['die Behandlung','o tratamento'],['behandeln','tratar'],['verschreiben','receitar'],['die Nebenwirkung','o efeito colateral'],['chronisch','crônico'],['ansteckend','contagioso'],['die Impfung','a vacina(ção)'],['impfen','vacinar'],['die Vorsorgeuntersuchung','o exame preventivo'],['die Krankschreibung','o atestado médico'],['krankschreiben','dar atestado'],['die Wartezeit','o tempo de espera']]},
 {t:'info',title:'Futur II: suposições sobre o passado',html:`<p><b>werden</b> + particípio + <b>haben/sein</b> expressa uma <b>suposição</b> sobre algo que já aconteceu (muitas vezes com <i>wohl</i>, <i>sicher</i>, <i>bestimmt</i>):</p>
 <table><tr><td class="es-t">Er ist nicht gekommen. Er wird den Termin vergessen haben.</td><td>Ele não veio. Deve ter esquecido o compromisso.</td></tr>
 <tr><td class="es-t">Sie wird wohl schon nach Hause gegangen sein.</td><td>Ela provavelmente já foi para casa.</td></tr></table>
 <div class="ex">Raramente: futuro concluído – <span class="es-t">Bis Freitag werde ich den Bericht geschrieben haben.</span> (Até sexta terei escrito o relatório.)</div>`},
 {t:'mc',q:'Die Praxis ist zu. Die Ärztin ___ schon in den Urlaub gefahren sein.',opts:['wird','hat','ist'],a:0},
 {t:'mc',q:'„Er hat wohl viel gearbeitet.“ =',opts:['Er wird viel gearbeitet haben.','Er wird viel arbeiten.','Er wurde viel gearbeitet.'],a:0},
 {t:'gap',q:'Lucas hat Kopfschmerzen. Er wird zu wenig getrunken ___.',a:['haben']},
 {t:'gap',q:'Der Arzt hat mir ein Medikament ___. (receitar – particípio)',a:['verschrieben']},
 {t:'mc',q:'Das Medikament kann Müdigkeit verursachen. Das ist eine ___.',opts:['Nebenwirkung','Diagnose','Impfung'],a:0},
 {t:'tr',de:'A médica me deu atestado por uma semana.',a:['Die Ärztin hat mich eine Woche krankgeschrieben.','Die Ärztin hat mich für eine Woche krankgeschrieben.']}
]},
{id:'l4',title:'Ler e escrever: guia contra o estresse',desc:'Ratgeber · Antwort mit Tipps',steps:[
 {t:'read',title:'Leitura: Wenn der Akku leer ist',text:`Ständig erreichbar, immer mehr Aufgaben, kaum Pausen: Laut einer Umfrage einer großen Krankenkasse fühlt sich fast jeder zweite Beschäftigte in Deutschland häufig gestresst. Die Zahl der Krankschreibungen wegen psychischer Erkrankungen hat sich in den letzten 15 Jahren mehr als verdoppelt.
„Stress an sich ist nicht schädlich“, erklärt die Psychologin Dr. Anna Brandt. „Problematisch wird es, wenn es keine Erholungsphasen mehr gibt.“ Warnsignale seien zum Beispiel Schlafstörungen, Gereiztheit oder das Gefühl, nicht mehr abschalten zu können.
Brandt empfiehlt, feste Feierabendzeiten einzuhalten und das Diensthandy abends auszuschalten. Auch Bewegung an der frischen Luft und regelmäßige soziale Kontakte könnten vorbeugen. Wer über Wochen erschöpft sei, solle jedoch nicht zögern, ärztliche Hilfe in Anspruch zu nehmen.`,de:`Sempre disponível, cada vez mais tarefas, quase sem pausas: segundo uma pesquisa de um grande plano de saúde, quase um em cada dois trabalhadores na Alemanha se sente estressado com frequência. O número de atestados por doenças psíquicas mais que dobrou nos últimos 15 anos.\n„O estresse em si não é prejudicial“, explica a psicóloga Dra. Anna Brandt. „Fica problemático quando não há mais fases de recuperação.“ Sinais de alerta seriam, por exemplo, distúrbios do sono, irritabilidade ou a sensação de não conseguir mais se desligar.\nBrandt recomenda respeitar horários fixos de fim de expediente e desligar o celular do trabalho à noite. Movimento ao ar livre e contatos sociais regulares também poderiam prevenir. Quem estiver esgotado por semanas, porém, não deveria hesitar em buscar ajuda médica.`},
 {t:'mc',q:'Was ist laut Dr. Brandt das eigentliche Problem?',opts:['Es gibt keine Erholungsphasen mehr.','Jeder Stress ist gefährlich.','Die Menschen arbeiten zu wenig.'],a:0},
 {t:'mc',q:'Welches Warnsignal wird genannt?',opts:['nicht mehr abschalten können','zu viel Sport','Hunger'],a:0},
 {t:'mc',q:'Was soll man tun, wenn man wochenlang erschöpft ist?',opts:['ärztliche Hilfe suchen','mehr arbeiten','das Handy kaufen'],a:0},
 {t:'free',task:'A sua colega Jana escreveu: „Ich bin total erschöpft, kann nachts nicht schlafen und denke nur an die Arbeit.“ Responda (~120 palavras): 1) mostre compreensão e faça uma suposição sobre a causa (dürfte, muss …), 2) dê três conselhos, 3) ofereça ajuda concreta.',hint:'Liebe Jana, das tut mir leid … Das dürfte mit … zusammenhängen. Du musst in letzter Zeit … An deiner Stelle würde ich … Außerdem … Wenn du willst, …',focus:'subjektive Modalverben, Futur II, Ratschläge',model:'Liebe Jana,\nes tut mir wirklich leid, dass es dir so schlecht geht. Das dürfte mit dem großen Projekt zusammenhängen – du musst in den letzten Wochen fast jeden Abend gearbeitet haben.\nAn deiner Stelle würde ich zuerst mit Frau Dr. Hoffmann sprechen. Sie wird sicher verstehen, dass du nicht alles allein schaffen kannst. Außerdem solltest du dein Diensthandy abends ausschalten und dir feste Feierabendzeiten setzen. Und wenn du nach ein paar Wochen immer noch nicht schlafen kannst, geh bitte zu deiner Hausärztin.\nWenn du willst, können wir am Samstag zusammen im Taunus wandern gehen. Frische Luft und Bewegung helfen mir immer, abzuschalten.\nAlles Liebe\nLucas'}
]}],
resumen:`<h3>Modalverben subjektiv</h3><p class="es-t">Er muss krank sein. · Das dürfte am Stress liegen. · Sie könnte im Meeting sein. · Er soll sehr streng sein. · Er will nie krank gewesen sein.</p>
<h3>Futur II</h3><p class="es-t">Er wird den Termin vergessen haben. · Sie wird schon nach Hause gegangen sein.</p>
<h3>Gesundheit</h3><p class="es-t">überfordert · abschalten · die Belastung · vorbeugen · verschreiben · die Nebenwirkung · krankschreiben</p>`});

/* ================= KAPITEL 42 · MEDIEN & KOMMUNIKATION ================= */
LANGS.de.course.units.push({id:'k42',n:'42',level:'B2',title:'Medien & Kommunikation',sub:'Imprensa e fake news · estilo nominal (bei der Ankunft = wenn ich ankomme) · fazer uma apresentação',
goals:['Über Presse, Quellen und Falschmeldungen sprechen','Nominalisierung: Verbalstil ↔ Nominalstil (bei, nach, vor, wegen, zur …)','Eine Präsentation strukturieren und halten','Einen Artikel kritisch lesen und kommentieren'],
situacion:{title:'Apresentação no trabalho',npc:'Frau Dr. Hoffmann',scene:'Você apresenta para a sua chefe, a Dra. Hoffmann, e para a equipe uma proposta: uma nova ferramenta de comunicação interna para a empresa.',role:'Du bist Frau Dr. Hoffmann, Abteilungsleiterin in einer Softwarefirma in Frankfurt. Du siezt. Lucas hält eine kurze Präsentation über ein neues internes Kommunikationstool (statt vieler E-Mails). Hör zu, unterbrich höchstens einmal mit einer kurzen Verständnisfrage und stell danach kritische Fragen: Kosten, Datenschutz, Einarbeitung der Mitarbeitenden, ältere Kolleginnen und Kollegen, die keine neuen Tools wollen. Benutze Nominalstil (die Einführung des Tools, zur Verbesserung der Kommunikation). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Apresente com estrutura (introdução, pontos, conclusão), responda às perguntas críticas e defenda a sua proposta.'},
placement:[
 {t:'mc',q:'„Wenn wir ankommen, rufen wir an.“ = ___ rufen wir an.',opts:['Bei unserer Ankunft','Zu unserer Ankunft','Mit unserer Ankunft'],a:0},
 {t:'mc',q:'„Weil es stark regnete, …“ = ___ …',opts:['Wegen des starken Regens','Trotz des starken Regens','Bei starkem Regnen'],a:0},
 {t:'mc',q:'„Damit die Qualität besser wird, …“ = ___ der Qualität …',opts:['Zur Verbesserung','Bei der Verbesserung','Nach der Verbesserung'],a:0},
 {t:'gap',q:'Viele Falschmeldungen werden über soziale Medien ___. (espalhadas)',a:['verbreitet']},
 {t:'mc',q:'„a fonte (de informação)“',opts:['die Quelle','die Quote','die Qual'],a:0},
 {t:'mc',q:'Mein Vortrag ___ sich in drei Teile.',opts:['gliedert','teilt mit','handelt'],a:0}],
lessons:[
{id:'l1',title:'Imprensa e fake news',desc:'die Quelle, seriös, recherchieren, verbreiten …',steps:[
 {t:'vocab',title:'Mídia e informação',items:[['die Presse','a imprensa'],['die Pressefreiheit','a liberdade de imprensa'],['der Journalismus','o jornalismo'],['die Quelle','a fonte'],['seriös','sério, confiável'],['recherchieren','pesquisar, apurar'],['die Recherche','a apuração, a pesquisa'],['die Schlagzeile','a manchete'],['die Falschmeldung','a notícia falsa'],['verbreiten','espalhar, divulgar'],['die Glaubwürdigkeit','a credibilidade'],['glaubwürdig','confiável, crível'],['manipulieren','manipular'],['der Algorithmus','o algoritmo'],['die Filterblase','a bolha (de filtro)'],['die Zensur','a censura'],['objektiv','objetivo'],['einseitig','unilateral, parcial']]},
 {t:'mc',q:'Bevor man eine Nachricht teilt, sollte man die ___ prüfen.',opts:['Quelle','Zensur','Schlagzeile'],a:0},
 {t:'mc',q:'Der Artikel zeigt nur eine Seite des Problems. Er ist sehr ___.',opts:['einseitig','seriös','objektiv'],a:0},
 {t:'gap',q:'Gute Journalisten ___ gründlich, bevor sie schreiben. (apuram)',a:['recherchieren']},
 {t:'match',q:'Ligue.',pairs:[['die Falschmeldung','a notícia falsa'],['die Schlagzeile','a manchete'],['verbreiten','espalhar'],['die Glaubwürdigkeit','a credibilidade'],['die Filterblase','a bolha']]},
 {t:'tr',de:'A liberdade de imprensa é importante para a democracia.',a:['Die Pressefreiheit ist wichtig für die Demokratie.']},
 {t:'speak',es:'Durch Algorithmen sehen wir oft nur Meinungen, die unserer eigenen ähneln – wir leben in einer Filterblase.',de:'Por causa dos algoritmos, muitas vezes só vemos opiniões parecidas com a nossa – vivemos numa bolha.',tip:'<i>ähneln</i> + dativo: <i>unserer eigenen (Meinung)</i>.'}
]},
{id:'l2',title:'Estilo nominal',desc:'wenn wir ankommen → bei unserer Ankunft',steps:[
 {t:'info',title:'Verbalstil ↔ Nominalstil',html:`<p>Textos formais (jornais, ciência, administração) transformam <b>orações</b> em <b>substantivos com preposição</b>. O texto fica mais curto e mais denso:</p>
 <table><tr><th>oração (Verbalstil)</th><th>substantivo (Nominalstil)</th></tr>
 <tr><td class="es-t">wenn wir ankommen</td><td class="es-t">bei unserer Ankunft</td></tr>
 <tr><td class="es-t">nachdem er das Studium beendet hatte</td><td class="es-t">nach Beendigung des Studiums</td></tr>
 <tr><td class="es-t">bevor die Sitzung beginnt</td><td class="es-t">vor Beginn der Sitzung</td></tr>
 <tr><td class="es-t">weil es stark regnete</td><td class="es-t">wegen des starken Regens</td></tr>
 <tr><td class="es-t">obwohl die Kritik groß war</td><td class="es-t">trotz der großen Kritik</td></tr>
 <tr><td class="es-t">damit die Kommunikation besser wird</td><td class="es-t">zur Verbesserung der Kommunikation</td></tr>
 <tr><td class="es-t">indem man Daten analysiert</td><td class="es-t">durch die Analyse von Daten</td></tr>
 <tr><td class="es-t">während er studierte</td><td class="es-t">während seines Studiums</td></tr></table>
 <div class="ex">Formação: <b>-ung</b> (verbessern → die Verbesserung), infinitivo (<span class="es-t">das Lesen</span>), radical (<span class="es-t">beginnen → der Beginn</span>, <span class="es-t">ankommen → die Ankunft</span>). O sujeito/objeto vira <b>genitivo</b> ou <b>von</b>: <span class="es-t">die Analyse der Daten / von Daten</span>.</div>`},
 {t:'mc',q:'„Bevor Sie das Gerät benutzen, lesen Sie die Anleitung.“ = ___ des Geräts …',opts:['Vor der Benutzung','Nach der Benutzung','Bei Benutzen'],a:0},
 {t:'mc',q:'„Nachdem sie angekommen war, …“ =',opts:['Nach ihrer Ankunft','Vor ihrer Ankunft','Bei ihrem Ankommen nach'],a:0},
 {t:'mc',q:'„durch die Einführung des neuen Systems“ =',opts:['indem man das neue System einführt','obwohl man das System einführt','bevor man das System einführt'],a:0},
 {t:'gap',q:'Wenn Sie Fragen haben, … → ___ Fragen wenden Sie sich bitte an …',a:['Bei']},
 {t:'gap',q:'Weil die Nachfrage gestiegen ist → wegen der gestiegenen ___',a:['Nachfrage']},
 {t:'gap',q:'damit die Arbeit erleichtert wird → zur ___ der Arbeit',a:['Erleichterung']},
 {t:'order',es:'Nach Abschluss der Recherche wurde der Artikel veröffentlicht',de:'Depois de concluída a apuração, o artigo foi publicado.'},
 {t:'tr',de:'Durante a reunião, os celulares devem estar desligados. (während + genitivo)',a:['Während der Besprechung müssen die Handys ausgeschaltet sein.','Während des Meetings müssen die Handys ausgeschaltet sein.','Während der Sitzung müssen die Handys ausgeschaltet sein.']}
]},
{id:'l3',title:'Fazer uma apresentação',desc:'Mein Vortrag gliedert sich in … · Damit komme ich zu …',steps:[
 {t:'info',title:'Frases para apresentações',html:`<table><tr><td>Introdução</td><td class="es-t">Ich möchte Ihnen heute ein neues Konzept vorstellen. · Mein Vortrag gliedert sich in drei Teile.</td></tr>
 <tr><td>Transição</td><td class="es-t">Damit komme ich zum zweiten Punkt. · Lassen Sie mich kurz auf … eingehen.</td></tr>
 <tr><td>Recursos visuais</td><td class="es-t">Wie Sie auf dieser Folie sehen, … · Die Grafik verdeutlicht, dass …</td></tr>
 <tr><td>Exemplo / ênfase</td><td class="es-t">Ein Beispiel dafür ist … · Ich möchte betonen, dass …</td></tr>
 <tr><td>Conclusão</td><td class="es-t">Abschließend möchte ich zusammenfassen: … · Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?</td></tr></table>`},
 {t:'vocab',title:'Apresentação',items:[['die Präsentation','a apresentação'],['die Folie','o slide'],['gliedern','estruturar, dividir'],['die Gliederung','a estrutura, o roteiro'],['eingehen auf','abordar, entrar em (um assunto)'],['verdeutlichen','deixar claro, ilustrar'],['zusammenfassen','resumir'],['die Einführung','a introdução, a implantação'],['einführen','introduzir, implantar']]},
 {t:'mc',q:'Sie sind mit dem ersten Teil fertig. Was sagen Sie?',opts:['Damit komme ich zum zweiten Punkt.','Jetzt ist Schluss.','Der erste Punkt war gut, oder?'],a:0},
 {t:'mc',q:'Wie beenden Sie einen Vortrag höflich?',opts:['Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?','Das war’s, tschüss.','Fragen bitte per E-Mail.'],a:0},
 {t:'gap',q:'Wie Sie auf dieser ___ sehen, sind die Kosten gering. (slide)',a:['Folie']},
 {t:'gap',q:'Lassen Sie mich kurz auf die Kosten ___. (abordar)',a:['eingehen']},
 {t:'speak',es:'Ich möchte Ihnen heute ein neues Tool vorstellen, das unsere interne Kommunikation deutlich verbessern könnte.',de:'Hoje eu gostaria de apresentar a vocês uma nova ferramenta que poderia melhorar bastante a nossa comunicação interna.',tip:'Na oração relativa, o verbo conjugado (<i>könnte</i>) vai para o final.'}
]},
{id:'l4',title:'Ler e comentar',desc:'Artikel über Falschmeldungen · Kommentar',steps:[
 {t:'read',title:'Leitura: Gefälschte Nachrichten erkennen',text:`Ein angebliches Foto vom überfluteten Flughafen, ein erfundenes Zitat einer Politikerin: Falschmeldungen verbreiten sich im Netz oft schneller als die Wahrheit. Nach Angaben einer Medienstudie hat bereits jeder zweite Jugendliche mindestens einmal eine Falschmeldung geteilt – meist ohne es zu merken.
Durch den Einsatz künstlicher Intelligenz wird die Erkennung immer schwieriger. Gefälschte Bilder und Videos sind heute kaum noch von echten zu unterscheiden. Experten raten deshalb zur Überprüfung der Quelle: Wer hat die Nachricht veröffentlicht? Berichten auch seriöse Medien darüber? Wann wurde das Foto aufgenommen?
Mehrere Bundesländer haben inzwischen auf die Entwicklung reagiert: Seit diesem Schuljahr gehört Medienkompetenz zum Pflichtunterricht. Kritiker bemängeln allerdings, dass es an ausgebildeten Lehrkräften fehle.`,de:`Uma suposta foto do aeroporto inundado, uma citação inventada de uma política: notícias falsas muitas vezes se espalham na internet mais rápido que a verdade. Segundo um estudo de mídia, um em cada dois jovens já compartilhou pelo menos uma vez uma notícia falsa – na maioria das vezes sem perceber.\nCom o uso da inteligência artificial, identificá-las fica cada vez mais difícil. Imagens e vídeos falsificados hoje quase não se distinguem dos verdadeiros. Por isso, especialistas aconselham verificar a fonte: quem publicou a notícia? Mídias sérias também noticiam isso? Quando a foto foi tirada?\nVários estados já reagiram a essa evolução: desde este ano letivo, competência midiática faz parte das aulas obrigatórias. Críticos reclamam, porém, que faltariam professores formados para isso.`},
 {t:'mc',q:'Was haben viele Jugendliche laut Studie schon getan?',opts:['eine Falschmeldung geteilt','einen Artikel geschrieben','eine Zeitung abonniert'],a:0},
 {t:'mc',q:'Warum wird die Erkennung schwieriger?',opts:['wegen künstlicher Intelligenz','wegen der Pressefreiheit','wegen der Lehrkräfte'],a:0},
 {t:'mc',q:'„Experten raten zur Überprüfung der Quelle.“ bedeutet:',opts:['Man soll prüfen, woher die Nachricht kommt.','Man soll keine Nachrichten lesen.','Man soll die Quelle löschen.'],a:0},
 {t:'mc',q:'Was kritisieren die Kritiker?',opts:['Es fehlen ausgebildete Lehrkräfte.','Medienkompetenz ist unwichtig.','Der Unterricht ist zu lang.'],a:0},
 {t:'free',task:'Escreva um comentário (~150 palavras) sobre o artigo: 1) resuma o problema com suas palavras, 2) diga se a escola deve ensinar competência midiática e por quê, 3) dê duas dicas práticas para reconhecer fake news, 4) conclusão. Tente usar pelo menos duas formas nominais (zur Überprüfung, bei der Nutzung …).',hint:'Der Artikel beschäftigt sich mit … Meiner Meinung nach … Bei der Nutzung sozialer Medien sollte man … Zur Überprüfung einer Nachricht … Abschließend …',focus:'Nominalstil, Argumentation, Konnektoren',model:'Der Artikel beschäftigt sich mit der schnellen Verbreitung von Falschmeldungen im Internet. Besonders Jugendliche teilen oft Nachrichten, ohne deren Herkunft zu prüfen, und durch künstliche Intelligenz wird die Erkennung immer schwieriger.\nMeiner Meinung nach ist Medienkompetenz als Schulfach längst überfällig. Junge Menschen informieren sich fast ausschließlich über soziale Medien, lernen aber kaum, Quellen kritisch zu bewerten. Trotz des Mangels an Lehrkräften sollten Schulen deshalb sofort damit beginnen – zur Not mit Unterstützung von Journalistinnen und Journalisten.\nZur Überprüfung einer Nachricht helfen zwei einfache Fragen: Wer hat sie veröffentlicht, und berichten auch seriöse Medien darüber? Außerdem kann man bei verdächtigen Fotos eine Bildersuche machen.\nAbschließend lässt sich sagen: Bei der Nutzung sozialer Medien ist ein gesundes Misstrauen die beste Verteidigung.'}
]}],
resumen:`<h3>Nominalstil</h3><p class="es-t">bei unserer Ankunft · nach Beendigung des Studiums · vor Beginn der Sitzung · wegen des Regens · trotz der Kritik · zur Verbesserung der Kommunikation · durch die Analyse von Daten</p>
<h3>Präsentation</h3><p class="es-t">Mein Vortrag gliedert sich in drei Teile. · Damit komme ich zum zweiten Punkt. · Wie Sie auf dieser Folie sehen, … · Vielen Dank für Ihre Aufmerksamkeit.</p>
<h3>Medien</h3><p class="es-t">die Quelle · seriös · recherchieren · die Falschmeldung · verbreiten · die Glaubwürdigkeit · einseitig</p>`});

/* ================= KAPITEL 43 · NATUR & KLIMA ================= */
LANGS.de.course.units.push({id:'k43',n:'43',level:'B2',title:'Natur & Klima',sub:'Mudança climática e catástrofes naturais · biodiversidade · preposições com genitivo (aufgrund, infolge, angesichts, innerhalb …) · carta de leitor',
goals:['Über Klimawandel, Wetterextreme und Artenschutz sprechen','Präpositionen mit Genitiv: aufgrund, infolge, angesichts, innerhalb, außerhalb, mithilfe, anstelle, bezüglich','Ursachen und Folgen in Texten erkennen und benennen','Einen Leserbrief mit Stellungnahme schreiben'],
situacion:{title:'Debate na rádio',npc:'Moderator Jens Kühn',scene:'Uma rádio de Frankfurt faz um debate com ouvintes sobre o plano da cidade de proibir carros no centro para proteger o clima. Você liga e entra no ar.',role:'Du bist Jens Kühn, Moderator der Radiosendung „Frankfurt diskutiert“. Du siezt. Thema: Die Stadt will die Innenstadt bis 2030 autofrei machen – aufgrund der Hitzesommer und der Luftverschmutzung. Begrüße Lucas als Anrufer, frag nach seiner Meinung und seinen Erfahrungen (Hitze in der Stadt, Radfahren, öffentlicher Verkehr). Spiel danach den Advocatus Diaboli: Was ist mit Handwerkern, Lieferdiensten, älteren Menschen? Lies zwischendurch eine kritische Hörermeinung vor. Benutze Präpositionen mit Genitiv (angesichts der Hitze, innerhalb der Innenstadt, infolge des Klimawandels). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Dê a sua opinião sobre um centro sem carros, com causas e consequências, e responda às objeções do apresentador.'},
placement:[
 {t:'mc',q:'___ des starken Regens wurde das Konzert abgesagt.',opts:['Aufgrund','Trotz','Mithilfe'],a:0},
 {t:'mc',q:'Bitte bezahlen Sie die Rechnung ___ von 14 Tagen.',opts:['innerhalb','außer','infolge'],a:0},
 {t:'mc',q:'___ der steigenden Temperaturen pflanzt die Stadt mehr Bäume.',opts:['Angesichts','Anstelle','Außerhalb'],a:0},
 {t:'gap',q:'Viele Tierarten sind vom ___ bedroht. (a extinção)',a:['Aussterben']},
 {t:'mc',q:'„a seca“',opts:['die Dürre','die Flut','der Sturm'],a:0},
 {t:'mc',q:'Der Leserbrief bezieht sich ___ Ihren Artikel vom 3. Mai.',opts:['auf','an','über'],a:0}],
lessons:[
{id:'l1',title:'Clima e catástrofes',desc:'die Dürre, die Überschwemmung, der Klimawandel …',steps:[
 {t:'vocab',title:'Clima extremo',items:[['der Klimawandel','a mudança climática'],['die Erderwärmung','o aquecimento global'],['der Treibhauseffekt','o efeito estufa'],['das Treibhausgas','o gás de efeito estufa'],['der Ausstoß','a emissão'],['die Dürre','a seca'],['die Hitzewelle','a onda de calor'],['die Überschwemmung','a inundação'],['das Hochwasser','a cheia, a enchente'],['der Waldbrand','o incêndio florestal'],['der Meeresspiegel','o nível do mar'],['schmelzen','derreter'],['der Gletscher','a geleira'],['die Folge','a consequência'],['die Ursache','a causa'],['verursachen','causar'],['eindämmen','conter, frear']]},
 {t:'mc',q:'Es hat seit drei Monaten nicht geregnet. Die Bauern leiden unter der ___.',opts:['Dürre','Überschwemmung','Hitzewelle'],a:0},
 {t:'mc',q:'Durch die Erderwärmung steigt der ___.',opts:['Meeresspiegel','Gletscher','Ausstoß'],a:0},
 {t:'gap',q:'Die Gletscher in den Alpen ___ immer schneller. (derretem)',a:['schmelzen']},
 {t:'match',q:'Ligue.',pairs:[['die Ursache','a causa'],['die Folge','a consequência'],['der Waldbrand','o incêndio florestal'],['das Hochwasser','a enchente'],['eindämmen','conter']]},
 {t:'tr',de:'Os carros causam muitos gases de efeito estufa.',a:['Autos verursachen viele Treibhausgase.','Die Autos verursachen viele Treibhausgase.']},
 {t:'speak',es:'Der Klimawandel verursacht immer häufiger Hitzewellen, Dürren und Überschwemmungen.',de:'A mudança climática causa cada vez mais ondas de calor, secas e inundações.',tip:'<i>immer häufiger</i> = cada vez mais frequentemente (immer + comparativo).'}
]},
{id:'l2',title:'Preposições com genitivo',desc:'aufgrund · infolge · angesichts · innerhalb · mithilfe …',steps:[
 {t:'info',title:'Preposições da linguagem formal',html:`<p>Em textos formais, muitas preposições pedem <b>genitivo</b>:</p>
 <table><tr><th>preposição</th><th>significado</th><th>exemplo</th></tr>
 <tr><td><b>aufgrund</b></td><td>por causa de (causa)</td><td class="es-t">aufgrund des Regens</td></tr>
 <tr><td><b>infolge</b></td><td>em consequência de</td><td class="es-t">infolge der Dürre</td></tr>
 <tr><td><b>angesichts</b></td><td>diante de, em vista de</td><td class="es-t">angesichts der hohen Temperaturen</td></tr>
 <tr><td><b>innerhalb / außerhalb</b></td><td>dentro de / fora de</td><td class="es-t">innerhalb eines Jahres · außerhalb der Stadt</td></tr>
 <tr><td><b>mithilfe</b></td><td>com a ajuda de</td><td class="es-t">mithilfe neuer Technologien</td></tr>
 <tr><td><b>anstelle / statt</b></td><td>em vez de</td><td class="es-t">anstelle des Autos</td></tr>
 <tr><td><b>bezüglich / hinsichtlich</b></td><td>com relação a</td><td class="es-t">bezüglich Ihrer Anfrage</td></tr>
 <tr><td><b>zugunsten</b></td><td>em favor de</td><td class="es-t">zugunsten der Umwelt</td></tr></table>
 <div class="ex">Já conhecidas: <b>wegen, trotz, während</b> + genitivo. Sem artigo no plural, usa-se <b>von</b>: <span class="es-t">innerhalb von zwei Wochen</span>, <span class="es-t">aufgrund von Problemen</span>.</div>`},
 {t:'mc',q:'___ der Überschwemmung mussten 2000 Menschen ihre Häuser verlassen.',opts:['Infolge','Anstelle','Innerhalb'],a:0},
 {t:'mc',q:'Die Stadt baut einen Park ___ des alten Parkplatzes.',opts:['anstelle','aufgrund','angesichts'],a:0},
 {t:'mc',q:'___ von drei Tagen haben wir eine Antwort bekommen.',opts:['Innerhalb','Außerhalb','Infolge'],a:0},
 {t:'gap',q:'Mithilfe ___ Satelliten kann man Waldbrände früh erkennen. (artigo genitivo plural)',a:['der']},
 {t:'gap',q:'Aufgrund ___ Hitzewelle sind die Schwimmbäder voll. (die Hitzewelle)',a:['der']},
 {t:'gap',q:'Wir wohnen ___ der Stadt, auf dem Land. (fora de)',a:['außerhalb']},
 {t:'order',es:'Angesichts der Klimakrise müssen wir unseren Lebensstil ändern',de:'Diante da crise climática, precisamos mudar o nosso estilo de vida.'},
 {t:'tr',de:'Por causa da seca, a colheita foi ruim. (aufgrund)',a:['Aufgrund der Dürre war die Ernte schlecht.']}
]},
{id:'l3',title:'Natureza e biodiversidade',desc:'die Artenvielfalt, aussterben, schützen …',steps:[
 {t:'vocab',title:'Natureza',items:[['die Artenvielfalt','a biodiversidade'],['die Art','a espécie; o tipo'],['aussterben','extinguir-se'],['bedroht','ameaçado'],['der Lebensraum','o habitat'],['das Naturschutzgebiet','a reserva natural'],['der Regenwald','a floresta tropical'],['die Biene','a abelha'],['das Insekt','o inseto'],['die Ressource','o recurso'],['nachwachsend','renovável (matéria-prima)'],['die Nachhaltigkeit','a sustentabilidade'],['der ökologische Fußabdruck','a pegada ecológica']]},
 {t:'read',title:'Leitura: Stille Wiesen',text:`Wer heute im Sommer über eine Wiese läuft, hört deutlich weniger Summen als noch vor dreißig Jahren. Einer Langzeitstudie zufolge ist die Zahl der Insekten in Teilen Deutschlands seit 1990 um mehr als 70 Prozent zurückgegangen. Als Hauptursachen gelten die intensive Landwirtschaft, der Einsatz von Pestiziden und der Verlust natürlicher Lebensräume.
Die Folgen betreffen nicht nur Bienen und Schmetterlinge. Infolge des Insektensterbens finden auch viele Vogelarten nicht mehr genug Nahrung. Und ohne Bestäuber sind auch die Ernten vieler Obstsorten in Gefahr.
Doch es gibt Hoffnung: Innerhalb weniger Jahre haben zahlreiche Städte ihre Grünflächen in blühende Wiesen verwandelt. Auch auf Balkonen kann jeder etwas tun – anstelle von Geranien empfehlen Experten heimische Wildblumen.`,de:`Quem hoje caminha num prado no verão ouve bem menos zumbido do que há trinta anos. Segundo um estudo de longo prazo, o número de insetos em partes da Alemanha diminuiu mais de 70 por cento desde 1990. As principais causas seriam a agricultura intensiva, o uso de pesticidas e a perda de habitats naturais.\nAs consequências não afetam só abelhas e borboletas. Em consequência da morte dos insetos, muitas espécies de pássaros também não encontram mais comida suficiente. E sem polinizadores, as colheitas de muitas frutas também estão em perigo.\nMas há esperança: em poucos anos, numerosas cidades transformaram suas áreas verdes em prados floridos. Também nas varandas todos podem fazer algo – em vez de gerânios, especialistas recomendam flores silvestres nativas.`},
 {t:'mc',q:'Um wie viel ist die Zahl der Insekten zurückgegangen?',opts:['um mehr als 70 Prozent','um 30 Prozent','um die Hälfte'],a:0},
 {t:'mc',q:'Was ist laut Text eine Hauptursache?',opts:['die intensive Landwirtschaft','zu viele Vögel','der Regen'],a:0},
 {t:'mc',q:'Warum finden Vögel weniger Nahrung?',opts:['wegen des Insektensterbens','wegen der Städte','wegen der Wildblumen'],a:0},
 {t:'mc',q:'Was kann man auf dem Balkon tun?',opts:['heimische Wildblumen pflanzen','Pestizide benutzen','Geranien kaufen'],a:0},
 {t:'gap',q:'Viele Tierarten sind vom Aussterben ___. (ameaçadas)',a:['bedroht']}
]},
{id:'l4',title:'Escrever: carta de leitor',desc:'Leserbrief zur autofreien Innenstadt (ca. 150 Wörter)',steps:[
 {t:'read',title:'Leitura: Zeitungsmeldung',text:`Frankfurt soll bis 2030 eine weitgehend autofreie Innenstadt bekommen. Das hat der Stadtrat am Donnerstag beschlossen. Angesichts der Hitzesommer und der hohen Luftverschmutzung sollen Parkplätze in Grünflächen und Radwege umgewandelt werden. Anwohner, Lieferdienste und Menschen mit Behinderung dürfen weiterhin hineinfahren. Der Einzelhandel befürchtet allerdings, dass aufgrund fehlender Parkplätze weniger Kundschaft in die Innenstadt kommt.`,de:`Frankfurt deve ter até 2030 um centro praticamente sem carros. Foi o que a Câmara Municipal decidiu na quinta-feira. Diante dos verões quentes e da alta poluição do ar, estacionamentos devem ser transformados em áreas verdes e ciclovias. Moradores, serviços de entrega e pessoas com deficiência poderão continuar entrando. O comércio, porém, teme que, pela falta de estacionamentos, menos clientes venham ao centro.`},
 {t:'mc',q:'Wer darf weiterhin mit dem Auto in die Innenstadt fahren?',opts:['Anwohner und Lieferdienste','alle Touristen','niemand'],a:0},
 {t:'mc',q:'Was befürchtet der Einzelhandel?',opts:['weniger Kundschaft','mehr Verkehr','höhere Mieten'],a:0},
 {t:'info',title:'Estrutura da carta de leitor',html:`<table><tr><td>Referência</td><td class="es-t">Zu Ihrem Artikel „Autofreie Innenstadt bis 2030“ vom 12. Juni</td></tr>
 <tr><td>Opinião</td><td class="es-t">Mit großem Interesse habe ich gelesen, dass … Ich halte diese Entscheidung für …</td></tr>
 <tr><td>Argumentos</td><td class="es-t">Zum einen …, zum anderen … · Hinzu kommt, dass …</td></tr>
 <tr><td>Contra-argumento</td><td class="es-t">Zwar …, aber … · Man darf allerdings nicht vergessen, dass …</td></tr>
 <tr><td>Conclusão</td><td class="es-t">Aus diesen Gründen bin ich überzeugt, dass …</td></tr></table>`},
 {t:'free',task:'Escreva uma carta de leitor (~150 palavras) sobre a notícia: 1) referência ao artigo, 2) sua opinião, 3) dois argumentos com causa e consequência, 4) um contra-argumento e a sua resposta, 5) conclusão. Use pelo menos duas preposições com genitivo.',hint:'Zu Ihrem Artikel … Ich halte die Entscheidung für … Zum einen … aufgrund … Zum anderen … Zwar befürchten …, aber … Aus diesen Gründen …',focus:'Präpositionen mit Genitiv, Argumentation, zwar … aber',model:'Zu Ihrem Artikel „Autofreie Innenstadt bis 2030“ vom 12. Juni\nMit großem Interesse habe ich gelesen, dass Frankfurt die Innenstadt weitgehend autofrei machen will. Ich halte diese Entscheidung für mutig und richtig.\nZum einen leiden wir aufgrund der zunehmenden Hitzewellen jeden Sommer mehr unter der Hitze in der Stadt. Bäume und Grünflächen anstelle von Parkplätzen würden die Temperaturen spürbar senken. Zum anderen wäre die Luft innerhalb weniger Jahre deutlich sauberer, was vor allem Kindern und älteren Menschen zugutekäme.\nZwar befürchtet der Einzelhandel weniger Kundschaft, aber Erfahrungen aus Städten wie Kopenhagen zeigen das Gegenteil: In Fußgängerzonen bleiben die Menschen länger und kaufen mehr. Wichtig ist allerdings, dass Busse und Bahnen ausgebaut werden.\nAus diesen Gründen bin ich überzeugt, dass die autofreie Innenstadt für alle ein Gewinn ist.\nLucas Souza, Frankfurt-Bornheim'}
]}],
resumen:`<h3>Präpositionen mit Genitiv</h3><p class="es-t">aufgrund des Regens · infolge der Dürre · angesichts der Hitze · innerhalb eines Jahres · außerhalb der Stadt · mithilfe neuer Technologien · anstelle des Autos · bezüglich Ihrer Anfrage</p>
<h3>Klima</h3><p class="es-t">der Klimawandel · die Dürre · die Überschwemmung · der Waldbrand · die Ursache · die Folge · verursachen · eindämmen</p>
<h3>Natur</h3><p class="es-t">die Artenvielfalt · aussterben · bedroht · der Lebensraum · die Nachhaltigkeit</p>`});

/* ================= KAPITEL 44 · KUNST & KULTUR ================= */
LANGS.de.course.units.push({id:'k44',n:'44',level:'B2',title:'Kunst & Kultur',sub:'Arte, exposições e cinema · als ob (como se) · partículas modais (doch, ja, mal, eben, halt) · resenha',
goals:['Über Kunstwerke, Ausstellungen und Filme sprechen und sie bewerten','Irreale Vergleichssätze: als ob / als wenn / als + Konjunktiv II','Modalpartikeln im Gespräch: doch, ja, mal, eben, halt, eigentlich, wohl','Eine Rezension schreiben'],
situacion:{title:'No museu',npc:'Lea',scene:'A Lea, a namorada do Tom, que hoje trabalha numa galeria em Munique, está passando o fim de semana em Frankfurt. Você vai com ela a uma exposição de arte contemporânea no Städel Museum. Ela adora; você não está tão convencido.',role:'Du bist Lea, Freundin von Lucas’ gutem Freund Tom. Du arbeitest seit einem Jahr in einer Galerie in München und bist übers Wochenende in Frankfurt. Du duzt. Ihr seid zusammen in einer Ausstellung moderner Kunst im Städel. Du bist begeistert, erklärst Werke (eine fast leere weiße Leinwand, eine Installation aus alten Fernsehern) und fragst Lucas, was er sieht und fühlt. Wenn er skeptisch ist („Das sieht aus, als ob ein Kind es gemalt hätte“), argumentiere leidenschaftlich, aber mit Humor. Benutze viele Modalpartikeln (doch, ja, mal, halt, eben, eigentlich) und als ob. Sprich natürliches, lockeres Deutsch auf B2-Niveau.',goal:'Descreva o que você vê, diga a sua opinião (com „als ob“), discorde com humor e combine com a Lea o que fazer depois.'},
placement:[
 {t:'mc',q:'Er tut so, ___ er alles wüsste.',opts:['als ob','wie wenn','ob als'],a:0},
 {t:'mc',q:'Sie sieht aus, als ___ sie nicht geschlafen.',opts:['hätte','habe gehabt','hat'],a:0},
 {t:'mc',q:'Komm ___ her! Ich will dir was zeigen.',opts:['mal','ja','eben'],a:0},
 {t:'mc',q:'Das weißt du ___ schon – ich habe es dir gestern gesagt.',opts:['doch','mal','halt'],a:0},
 {t:'gap',q:'Das Gemälde wirkt, als ___ es gestern gemalt worden. (sein – Konj. II)',a:['wäre']},
 {t:'mc',q:'„a exposição“',opts:['die Ausstellung','die Aufstellung','die Vorstellung'],a:0}],
lessons:[
{id:'l1',title:'Arte e exposições',desc:'die Ausstellung, das Werk, abstrakt …',steps:[
 {t:'vocab',title:'Artes visuais',items:[['ausstellen','expor'],['das Kunstwerk','a obra de arte'],['das Werk','a obra'],['die Skulptur','a escultura'],['die Installation','a instalação'],['die Leinwand','a tela'],['abstrakt','abstrato'],['zeitgenössisch','contemporâneo'],['der Maler / die Malerin','o pintor / a pintora'],['der Bildhauer / die Bildhauerin','o escultor / a escultora'],['das Motiv','o motivo, o tema'],['die Darstellung','a representação'],['wirken','parecer, causar efeito'],['beeindruckend','impressionante'],['provokant','provocador'],['geschmacklos','de mau gosto']]},
 {t:'mc',q:'Das Museum zeigt eine ___ mit Werken von Paula Modersohn-Becker.',opts:['Ausstellung','Darstellung','Leinwand'],a:0},
 {t:'mc',q:'Auf dem Bild sieht man keine Personen, nur Farben und Formen. Es ist ___.',opts:['abstrakt','zeitgenössisch','geschmacklos'],a:0},
 {t:'gap',q:'Das Gemälde stellt eine Szene am Main ___. (representa)',a:['dar']},
 {t:'match',q:'Ligue.',pairs:[['die Skulptur','a escultura'],['das Kunstwerk','a obra de arte'],['beeindruckend','impressionante'],['ausstellen','expor'],['das Motiv','o tema']]},
 {t:'tr',de:'O quadro parece muito triste. (wirken)',a:['Das Bild wirkt sehr traurig.','Das Gemälde wirkt sehr traurig.']},
 {t:'speak',es:'Die Installation hat mich sehr beeindruckt, obwohl ich zeitgenössische Kunst normalerweise schwierig finde.',de:'A instalação me impressionou muito, embora eu normalmente ache arte contemporânea difícil.',tip:'<i>beeindrucken</i> + acusativo: <i>hat mich beeindruckt</i>.'}
]},
{id:'l2',title:'als ob – como se',desc:'Er tut so, als ob … · Es sieht aus, als wäre …',steps:[
 {t:'info',title:'Comparações irreais',html:`<p>Para dizer „<b>como se</b>“ (algo que não é real), usa-se <b>als ob / als wenn</b> + <b>Konjunktiv II</b> (verbo no final) – ou só <b>als</b> com o verbo logo depois:</p>
 <table><tr><td class="es-t">Er tut so, als ob er alles wüsste.</td><td>Ele age como se soubesse tudo.</td></tr>
 <tr><td class="es-t">Er tut so, als wüsste er alles.</td><td>(mesmo sentido – verbo logo depois de <i>als</i>)</td></tr>
 <tr><td class="es-t">Das Bild sieht aus, als hätte ein Kind es gemalt.</td><td>O quadro parece que foi pintado por uma criança.</td></tr>
 <tr><td class="es-t">Sie redet, als wäre sie die Chefin.</td><td>Ela fala como se fosse a chefe.</td></tr></table>
 <div class="ex">Verbos típicos antes: <span class="es-t">so tun · aussehen · wirken · sich anhören · sich anfühlen · klingen</span>.<br>Passado: <span class="es-t">Er tut so, als ob er nichts gehört hätte.</span></div>`},
 {t:'mc',q:'Die Musik klingt, als ob sie aus den Achtzigern ___.',opts:['wäre','ist','sei gewesen'],a:0},
 {t:'mc',q:'Er tut so, als ___ er mich nicht kennen.',opts:['würde','wird','hätte'],a:0},
 {t:'mc',q:'Welcher Satz ist richtig?',opts:['Du siehst aus, als hättest du ein Gespenst gesehen.','Du siehst aus, als du hättest ein Gespenst gesehen.','Du siehst aus, als ob hättest du ein Gespenst gesehen.'],a:0},
 {t:'gap',q:'Es fühlt sich an, als ___ wir schon Sommer. (haben – Konj. II)',a:['hätten']},
 {t:'gap',q:'Sie tut so, als ob sie keine Zeit ___. (haben – Konj. II)',a:['hätte']},
 {t:'order',es:'Der Film wirkt als wäre er mit dem Handy gedreht worden',de:'O filme parece que foi gravado com o celular.'},
 {t:'tr',de:'Ele age como se fosse o chefe.',a:['Er tut so, als ob er der Chef wäre.','Er tut so, als wäre er der Chef.','Er tut so, als wenn er der Chef wäre.']}
]},
{id:'l3',title:'Partículas modais',desc:'doch · ja · mal · eben/halt · eigentlich · wohl',steps:[
 {t:'info',title:'Modalpartikeln',html:`<p>Pequenas palavras que não se traduzem literalmente, mas dão <b>tom</b> à frase – muito usadas na fala:</p>
 <table><tr><th>partícula</th><th>efeito</th><th>exemplo</th></tr>
 <tr><td><b>doch</b></td><td>reforço; „mas você sabe“; pedido insistente</td><td class="es-t">Komm doch mit! · Das ist doch klar!</td></tr>
 <tr><td><b>ja</b></td><td>algo conhecido; surpresa</td><td class="es-t">Das weißt du ja. · Das ist ja toll!</td></tr>
 <tr><td><b>mal</b></td><td>suaviza pedidos</td><td class="es-t">Schau mal! · Kannst du mal kurz helfen?</td></tr>
 <tr><td><b>eben / halt</b></td><td>„é assim, fazer o quê“</td><td class="es-t">Das ist halt so. · Dann nehmen wir eben den Bus.</td></tr>
 <tr><td><b>eigentlich</b></td><td>„na verdade“; pergunta mais leve</td><td class="es-t">Was machst du eigentlich am Wochenende?</td></tr>
 <tr><td><b>wohl</b></td><td>suposição</td><td class="es-t">Er ist wohl krank.</td></tr>
 <tr><td><b>denn</b></td><td>interesse em perguntas</td><td class="es-t">Wie heißt du denn?</td></tr></table>`},
 {t:'mc',q:'Bitte freundlich: „Kannst du ___ das Fenster aufmachen?“',opts:['mal','ja','halt'],a:0},
 {t:'mc',q:'Der Zug ist weg. – Na gut, dann fahren wir ___ mit dem nächsten.',opts:['eben','denn','doch'],a:0},
 {t:'mc',q:'Überraschung: „Du sprichst ___ super Deutsch!“',opts:['ja','mal','eben'],a:0},
 {t:'mc',q:'Leichte Frage: „Woher kennt ihr euch ___?“',opts:['eigentlich','halt','eben'],a:0},
 {t:'gap',q:'Warum kommst du nicht mit? Komm ___ mit! (convite insistente)',a:['doch']},
 {t:'dialog',place:'Im Städel',title:'Arte ou brincadeira?',scene:'Você e a Lea estão diante de uma tela quase toda branca.',lines:[
  {n:'Lea',es:'Schau mal, das ist mein Lieblingsbild! Ist das nicht wunderschön?',de:'Olha só, esse é o meu quadro favorito! Não é lindo?'},
  {you:true,opts:[{es:'Ehrlich gesagt sieht es aus, als hätte jemand vergessen, es fertig zu malen.',ok:true},{es:'Ich sehe es aus, als ob weiß.',ok:false,why:'Estrutura: „Es sieht aus, als hätte …“ / „als ob … hätte“ – com Konjunktiv II.'}]},
  {n:'Lea',es:'Ach komm, das ist doch gerade der Punkt! Die Leere soll uns ja zum Nachdenken bringen.',de:'Ah, para, esse é justamente o ponto! O vazio deve nos fazer pensar.'},
  {you:true,opts:[{es:'Na ja, vielleicht verstehe ich moderne Kunst halt nicht. Was kostet so ein Bild eigentlich?',ok:true},{es:'Doch halt mal ja.',ok:false,why:'Partículas não funcionam sozinhas – elas acompanham uma frase completa.'}]},
  {n:'Lea',es:'Über eine Million! Komm, wir gehen jetzt mal ins Café, dann erkläre ich dir alles in Ruhe.',de:'Mais de um milhão! Vem, vamos agora ao café, aí te explico tudo com calma.'}]},
 {t:'tr',de:'Olha só! (com partícula)',a:['Schau mal!','Guck mal!']}
]},
{id:'l4',title:'Escrever: resenha',desc:'Rezension eines Films oder einer Ausstellung (ca. 150 Wörter)',steps:[
 {t:'vocab',title:'Cinema e crítica',items:[['die Rezension','a resenha'],['der Regisseur / die Regisseurin','o diretor / a diretora (de cinema)'],['die Hauptrolle','o papel principal'],['der Darsteller / die Darstellerin','o ator / a atriz'],['die Handlung spielt in …','a história se passa em …'],['gelungen','bem-sucedido, bem-feito'],['überzeugend','convincente'],['die Szene','a cena']]},
 {t:'read',title:'Leitura: Filmkritik',text:`„Die Brücke am Main“ – ein Film, der unter die Haut geht
Regisseurin Nora Holtz erzählt in ihrem neuen Film die Geschichte zweier Brüder, die sich nach zwanzig Jahren in Frankfurt wiedersehen. Die Handlung spielt an nur einem Wochenende, und doch erfährt man fast alles über eine Familie, die an ihren Geheimnissen zerbricht.
Besonders überzeugend ist Karim Sayed in der Hauptrolle: Er spielt so natürlich, als würde er gar nicht spielen. Auch die Bilder sind gelungen – die Stadt wirkt grau und kalt, als hätte sie selbst ihre Hoffnung verloren.
Schwächen hat der Film allerdings im letzten Drittel: Das Ende ist leider ziemlich vorhersehbar, und manche Dialoge klingen, als hätte man sie aus einem Lehrbuch abgeschrieben.
Fazit: trotzdem ein mutiger, spannender Film, den man im Kino sehen sollte. Vier von fünf Sternen.`,de:`„A ponte sobre o Meno“ – um filme que mexe com a gente\nA diretora Nora Holtz conta em seu novo filme a história de dois irmãos que se reencontram em Frankfurt depois de vinte anos. A história se passa em um único fim de semana e, mesmo assim, ficamos sabendo quase tudo sobre uma família que se despedaça por causa dos seus segredos.\nEspecialmente convincente é Karim Sayed no papel principal: ele atua de forma tão natural como se nem estivesse atuando. As imagens também são bem-feitas – a cidade parece cinza e fria, como se ela mesma tivesse perdido a esperança.\nO filme tem pontos fracos, porém, no último terço: o final infelizmente é bastante previsível, e alguns diálogos soam como se tivessem sido copiados de um livro didático.\nConclusão: mesmo assim, um filme corajoso e emocionante, que vale a pena ver no cinema. Quatro de cinco estrelas.`},
 {t:'mc',q:'Worum geht es im Film?',opts:['um zwei Brüder, die sich wiedersehen','um eine Brücke, die gebaut wird','um eine Regisseurin'],a:0},
 {t:'mc',q:'Was lobt die Kritik besonders?',opts:['den Hauptdarsteller','das Ende','die Dialoge'],a:0},
 {t:'mc',q:'Was kritisiert die Rezension?',opts:['das vorhersehbare Ende','die Bilder','die Länge der Handlung'],a:0},
 {t:'free',task:'Escreva uma resenha (~150 palavras) de um filme, série, livro ou exposição de que você gostou (ou não): 1) título e tema, 2) do que se trata (sem contar o final!), 3) o que é bom – com uma comparação com „als ob“, 4) pontos fracos, 5) conclusão e nota.',hint:'„…“ – … In dem Film / Buch geht es um … Die Handlung spielt in … Besonders gelungen ist … Er/Sie spielt, als ob … Schwächen hat … allerdings … Fazit: …',focus:'als ob + Konjunktiv II, Bewertungen, Adjektive',model:'„Central do Brasil“ – eine Reise, die man nicht vergisst\nIn dem Film von Walter Salles geht es um Dora, eine ältere Frau, die am Bahnhof in Rio Briefe für Menschen schreibt, die nicht schreiben können. Eines Tages muss sie einem kleinen Jungen helfen, seinen Vater im armen Nordosten des Landes zu finden.\nBesonders gelungen ist die Hauptdarstellerin Fernanda Montenegro: Sie spielt so ehrlich, als ob sie ihr eigenes Leben erzählen würde. Auch die Landschaften sind beeindruckend – manchmal wirkt der Film, als wäre er ein Dokumentarfilm.\nSchwächen hat der Film eigentlich nur am Anfang, der etwas langsam ist. Wer Action erwartet, wird enttäuscht sein.\nFazit: ein berührender Film über Einsamkeit und Freundschaft, den man unbedingt gesehen haben sollte. Fünf von fünf Sternen.'}
]}],
resumen:`<h3>als ob / als + Konjunktiv II</h3><p class="es-t">Er tut so, als ob er alles wüsste. · Er tut so, als wüsste er alles. · Es sieht aus, als hätte ein Kind es gemalt.</p>
<h3>Modalpartikeln</h3><p class="es-t">Komm doch mit! · Das weißt du ja. · Schau mal! · Das ist halt so. · Was machst du eigentlich …? · Er ist wohl krank.</p>
<h3>Kunst & Film</h3><p class="es-t">die Ausstellung · das Kunstwerk · abstrakt · zeitgenössisch · wirken · die Rezension · die Hauptrolle · gelungen · vorhersehbar</p>`});

/* ================= KAPITEL 45 · RECHT & POLITIK ================= */
LANGS.de.course.units.push({id:'k45',n:'45',level:'B2',title:'Recht & Politik',sub:'Direitos, leis e tribunal · participação política · conectores: indem, ohne dass, anstatt dass, falls/sofern · carta formal a um órgão público',
goals:['Über Rechte, Gesetze und Gerichte sprechen','Konnektoren: indem / dadurch, dass · ohne … zu / ohne dass · (an)statt … zu / (an)statt dass · falls / sofern','Politische Beteiligung und Bürgerrechte diskutieren','Einen formellen Brief an eine Behörde schreiben (Widerspruch)'],
situacion:{title:'Consulta jurídica',npc:'Frau Brenner',scene:'O seu senhorio quer aumentar o aluguel em 20 % e ficar com parte da caução. Você vai a uma consulta na associação de inquilinos (Mieterverein).',role:'Du bist Frau Brenner, Juristin beim Mieterverein Frankfurt. Du siezt. Lucas kommt zur Beratung: Sein Vermieter will die Miete um 20 Prozent erhöhen und behauptet, Lucas müsse für einen Wasserschaden zahlen. Frag nach Details (Mietvertrag, letzte Erhöhung, wer hat den Schaden verursacht). Erkläre seine Rechte (Mieterhöhung höchstens 15–20 % in drei Jahren, Mietspiegel, Fristen) und was er tun kann (schriftlich widersprechen, Fotos, Fristen beachten). Benutze Konnektoren: indem, ohne dass, anstatt zu, falls, sofern. Sprich natürliches Deutsch auf B2-Niveau.',goal:'Explique o seu problema com clareza, faça perguntas sobre os seus direitos e combine os próximos passos.'},
placement:[
 {t:'mc',q:'Man kann Energie sparen, ___ man das Licht ausschaltet.',opts:['indem','ohne dass','anstatt'],a:0},
 {t:'mc',q:'Er hat den Vertrag unterschrieben, ___ ihn zu lesen.',opts:['ohne','indem','falls'],a:0},
 {t:'mc',q:'___ zu klagen, sollten Sie zuerst mit dem Vermieter sprechen.',opts:['Anstatt','Indem','Sofern'],a:0},
 {t:'mc',q:'___ Sie Fragen haben, rufen Sie uns an.',opts:['Falls','Ohne dass','Indem'],a:0},
 {t:'gap',q:'Sie hat ___ Anwalt genommen. (um advogado – acusativo)',a:['einen']},
 {t:'mc',q:'„o tribunal“',opts:['das Gericht','das Gerücht','das Gewicht'],a:0}],
lessons:[
{id:'l1',title:'Direito e justiça',desc:'das Gericht, der Anwalt, klagen …',steps:[
 {t:'vocab',title:'Justiça',items:[['der Richter / die Richterin','o juiz / a juíza'],['der Anwalt / die Anwältin','o advogado / a advogada'],['klagen','processar, entrar com ação'],['die Klage','a ação judicial'],['der Prozess','o processo (judicial)'],['das Urteil','a sentença'],['verurteilen','condenar'],['der / die Angeklagte','o réu / a ré'],['schuldig','culpado'],['unschuldig','inocente'],['die Strafe','a pena, a multa'],['der Zeuge / die Zeugin','a testemunha'],['das Verbrechen','o crime'],['der Täter / die Täterin','o autor / a autora do crime'],['das Opfer','a vítima'],['der Widerspruch','o recurso administrativo; a contradição'],]},
 {t:'mc',q:'Der Richter hat den Angeklagten zu zwei Jahren Haft ___.',opts:['verurteilt','geklagt','bezeugt'],a:0},
 {t:'mc',q:'Sie hat den Unfall gesehen und ist jetzt ___ vor Gericht.',opts:['Zeugin','Täterin','Richterin'],a:0},
 {t:'gap',q:'Welches Amt ist für Wohngeld ___? (responsável)',a:['zuständig']},
 {t:'match',q:'Ligue.',pairs:[['das Urteil','a sentença'],['schuldig','culpado'],['das Opfer','a vítima'],['klagen','processar'],['das Verbrechen','o crime']]},
 {t:'tr',de:'Ela processou o antigo empregador dela.',a:['Sie hat ihren ehemaligen Arbeitgeber verklagt.','Sie hat gegen ihren ehemaligen Arbeitgeber geklagt.','Sie hat ihren früheren Arbeitgeber verklagt.']},
 {t:'speak',es:'Falls der Vermieter nicht reagiert, werde ich mir einen Anwalt nehmen.',de:'Caso o senhorio não reaja, vou contratar um advogado.',tip:'<i>sich einen Anwalt nehmen</i> = contratar um advogado.'}
]},
{id:'l2',title:'Conectores: modo e alternativa',desc:'indem · ohne … zu / ohne dass · anstatt … zu / anstatt dass',steps:[
 {t:'info',title:'indem, ohne, anstatt',html:`<table><tr><th>conector</th><th>significado</th><th>exemplo</th></tr>
 <tr><td><b>indem</b> / <b>dadurch, dass</b></td><td>como? de que modo? (= -ndo)</td><td class="es-t">Man kann sich wehren, indem man schriftlich widerspricht.</td></tr>
 <tr><td><b>ohne … zu</b></td><td>sem (mesmo sujeito)</td><td class="es-t">Er hat unterschrieben, ohne den Vertrag zu lesen.</td></tr>
 <tr><td><b>ohne dass</b></td><td>sem que (outro sujeito)</td><td class="es-t">Der Vermieter hat die Miete erhöht, ohne dass wir informiert wurden.</td></tr>
 <tr><td><b>(an)statt … zu</b></td><td>em vez de (mesmo sujeito)</td><td class="es-t">Anstatt zu klagen, haben wir einen Kompromiss gesucht.</td></tr>
 <tr><td><b>(an)statt dass</b></td><td>em vez de (outro sujeito)</td><td class="es-t">Anstatt dass die Stadt hilft, steigen die Gebühren.</td></tr></table>
 <div class="ex"><b>indem</b> responde à pergunta <i>Wie?</i>: <span class="es-t">Wie kann man Geld sparen? – Indem man weniger online einkauft.</span><br>Com <b>zu</b>, o sujeito das duas partes é o mesmo; com <b>dass</b>, há sujeitos diferentes.</div>`},
 {t:'mc',q:'Wie kann man bei der Wahl mitbestimmen? – ___ man wählen geht.',opts:['Indem','Ohne dass','Anstatt'],a:0},
 {t:'mc',q:'Sie ist gegangen, ___ sich zu verabschieden.',opts:['ohne','indem','dass'],a:0},
 {t:'mc',q:'Das Gesetz wurde beschlossen, ___ die Bürger gefragt wurden.',opts:['ohne dass','ohne zu','indem'],a:0},
 {t:'mc',q:'___ selbst zu kochen, bestellt er jeden Abend Pizza.',opts:['Anstatt','Ohne dass','Indem'],a:0},
 {t:'gap',q:'Man kann die Frist verlängern, ___ man einen Antrag stellt.',a:['indem']},
 {t:'gap',q:'Er hat die Strafe bezahlt, ohne Widerspruch ___. (einlegen)',a:['einzulegen']},
 {t:'order',es:'Anstatt sich zu beschweren sollten die Bürger selbst aktiv werden',de:'Em vez de reclamar, os cidadãos deveriam agir eles mesmos.'},
 {t:'tr',de:'Ele saiu sem pagar.',a:['Er ist gegangen, ohne zu bezahlen.','Er ist gegangen, ohne zu zahlen.']},
 {t:'tr',de:'Aprende-se uma língua falando muito. (indem)',a:['Man lernt eine Sprache, indem man viel spricht.']}
]},
{id:'l3',title:'Participação política – falls / sofern',desc:'die Bürgerinitiative, die Petition, sofern …',steps:[
 {t:'vocab',title:'Participação',items:[['die Bürgerinitiative','a iniciativa cidadã'],['die Petition','a petição'],['der Volksentscheid','o plebiscito'],['das Wahlrecht','o direito de voto'],['die Wahlbeteiligung','a participação eleitoral'],['die Mitbestimmung','a participação nas decisões'],['der Abgeordnete / die Abgeordnete','o deputado / a deputada'],['die Opposition','a oposição'],['die Koalition','a coalizão'],['der Bescheid','a notificação (oficial)'],['einlegen','interpor (recurso)']]},
 {t:'info',title:'Condições: falls, sofern, soweit',html:`<table><tr><td><b>falls</b> = wenn (caso)</td><td class="es-t">Falls Sie den Bescheid nicht akzeptieren, können Sie Widerspruch einlegen.</td></tr>
 <tr><td><b>sofern</b> = desde que, contanto que</td><td class="es-t">Sie dürfen wählen, sofern Sie 18 Jahre alt sind.</td></tr>
 <tr><td><b>soweit</b> = até onde, na medida em que</td><td class="es-t">Soweit ich weiß, ist die Frist schon abgelaufen.</td></tr></table>
 <div class="ex">Também sem conector, com o verbo no início: <span class="es-t">Haben Sie Fragen, rufen Sie uns an.</span> (= Wenn Sie Fragen haben, …)</div>`},
 {t:'mc',q:'Ausländer aus EU-Ländern dürfen bei Kommunalwahlen wählen, ___ sie hier gemeldet sind.',opts:['sofern','ohne dass','anstatt'],a:0},
 {t:'mc',q:'___ ich weiß, braucht man dafür 1000 Unterschriften.',opts:['Soweit','Falls','Indem'],a:0},
 {t:'gap',q:'Gegen den ___ der Behörde kann man innerhalb eines Monats Widerspruch einlegen. (notificação)',a:['Bescheid']},
 {t:'gap',q:'Die Wahl___ war dieses Mal sehr hoch: 78 Prozent. (participação)',a:['beteiligung']},
 {t:'read',title:'Leitura: Eine Petition für mehr Radwege',text:`Anfang des Jahres starteten zwei Studentinnen aus Frankfurt eine Online-Petition für sichere Radwege. Innerhalb von drei Monaten unterschrieben mehr als 40.000 Menschen – weit mehr, als die beiden erwartet hatten. Daraufhin musste sich der Stadtrat mit dem Thema beschäftigen.
„Wir haben gezeigt, dass man etwas verändern kann, indem man sich organisiert“, sagt Initiatorin Hanna Weiß. Anstatt nur zu klagen, hätten sie konkrete Vorschläge gemacht und Gespräche mit allen Parteien geführt.
Nach langen Diskussionen einigten sich Regierung und Opposition auf einen Kompromiss: Bis 2028 sollen 50 Kilometer neue Radwege entstehen, sofern der Haushalt es erlaubt. Kritikern geht das nicht weit genug.`,de:`No começo do ano, duas estudantes de Frankfurt lançaram uma petição online por ciclovias seguras. Em três meses, mais de 40.000 pessoas assinaram – muito mais do que as duas esperavam. Com isso, a Câmara Municipal teve de tratar do assunto.\n„Mostramos que dá para mudar algo se organizando“, diz a idealizadora Hanna Weiß. Em vez de só reclamar, elas teriam feito propostas concretas e conversado com todos os partidos.\nDepois de longas discussões, governo e oposição chegaram a um meio-termo: até 2028 devem surgir 50 quilômetros de novas ciclovias, desde que o orçamento permita. Para os críticos, isso não vai longe o suficiente.`},
 {t:'mc',q:'Was war das Ergebnis der Petition?',opts:['Der Stadtrat musste das Thema behandeln.','Alle Autos wurden verboten.','Die Studentinnen wurden Abgeordnete.'],a:0},
 {t:'mc',q:'Wie haben die Initiatorinnen gearbeitet?',opts:['mit konkreten Vorschlägen und Gesprächen','nur mit Klagen vor Gericht','ohne andere Menschen'],a:0},
 {t:'mc',q:'Unter welcher Bedingung werden die Radwege gebaut?',opts:['sofern genug Geld im Haushalt ist','falls es nicht regnet','ohne Bedingung'],a:0}
]},
{id:'l4',title:'Escrever: recurso a um órgão público',desc:'Widerspruch gegen einen Bescheid (ca. 120 Wörter)',steps:[
 {t:'read',title:'Leitura: Bescheid der Stadt',text:`Sehr geehrter Herr Souza,
für das Parken Ihres Fahrzeugs im Halteverbot in der Leipziger Straße am 14. März um 9:20 Uhr wird ein Verwarnungsgeld von 55 Euro festgesetzt. Bitte überweisen Sie den Betrag innerhalb von zwei Wochen. Gegen diesen Bescheid können Sie innerhalb eines Monats schriftlich Widerspruch einlegen.
Mit freundlichen Grüßen
Ordnungsamt der Stadt Frankfurt am Main`,de:`Prezado Sr. Souza,\npelo estacionamento do seu veículo em local proibido na Leipziger Straße em 14 de março às 9h20, fica estabelecida uma multa de 55 euros. Por favor, transfira o valor em até duas semanas. Contra esta notificação, o senhor pode interpor recurso por escrito em até um mês.\nAtenciosamente,\nDepartamento de Ordem Pública da Cidade de Frankfurt am Main`},
 {t:'mc',q:'Wie lange hat Lucas Zeit für einen Widerspruch?',opts:['einen Monat','zwei Wochen','eine Woche'],a:0},
 {t:'mc',q:'Warum soll Lucas zahlen?',opts:['Er hat im Halteverbot geparkt.','Er ist zu schnell gefahren.','Er hat keine Steuern bezahlt.'],a:0},
 {t:'info',title:'Escrever um Widerspruch',html:`<table><tr><td>Assunto</td><td class="es-t">Widerspruch gegen Ihren Bescheid vom 20. März, Aktenzeichen 4711/26</td></tr>
 <tr><td>Introdução</td><td class="es-t">hiermit lege ich fristgerecht Widerspruch gegen den oben genannten Bescheid ein.</td></tr>
 <tr><td>Motivo</td><td class="es-t">Zur Begründung möchte ich Folgendes anführen: …</td></tr>
 <tr><td>Provas</td><td class="es-t">Als Nachweis lege ich … bei.</td></tr>
 <tr><td>Pedido</td><td class="es-t">Ich bitte Sie daher, den Bescheid aufzuheben.</td></tr></table>`},
 {t:'free',task:'Escreva um Widerspruch (~120 palavras) contra a multa: 1) assunto e referência, 2) motivo (por exemplo: o carro não era seu / a placa de proibição só foi colocada no dia / você estava descarregando uma mudança com autorização), 3) provas, 4) pedido formal. Use pelo menos um conector desta unidade (indem, ohne dass, anstatt, sofern …).',hint:'Widerspruch gegen Ihren Bescheid vom … Sehr geehrte Damen und Herren, hiermit lege ich … Zur Begründung … ohne dass … Als Nachweis lege ich … bei. Ich bitte Sie daher, … Mit freundlichen Grüßen',focus:'formelle Sprache, Konnektoren, Nominalstil',model:'Widerspruch gegen Ihren Bescheid vom 20. März, Aktenzeichen 4711/26\nSehr geehrte Damen und Herren,\nhiermit lege ich fristgerecht Widerspruch gegen den oben genannten Bescheid ein.\nZur Begründung möchte ich Folgendes anführen: Am 14. März habe ich einem Freund beim Umzug in die Leipziger Straße 12 geholfen. Für das Parken während des Umzugs hatte er bei Ihnen eine Halteverbotszone beantragt und genehmigt bekommen. Trotzdem wurde mein Fahrzeug verwarnt, ohne dass die Genehmigung berücksichtigt wurde. Offenbar hat die Kontrolleurin das Schild am Fahrzeug übersehen.\nAls Nachweis lege ich eine Kopie der Genehmigung sowie zwei Fotos bei.\nIch bitte Sie daher, den Bescheid aufzuheben. Sofern Sie weitere Unterlagen benötigen, stehe ich Ihnen gern zur Verfügung.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Konnektoren</h3><p class="es-t">indem man widerspricht · ohne den Vertrag zu lesen · ohne dass wir informiert wurden · anstatt zu klagen · anstatt dass die Stadt hilft · falls · sofern · soweit ich weiß</p>
<h3>Recht</h3><p class="es-t">das Gericht · der Anwalt · klagen · das Urteil · schuldig · der Zeuge · zuständig · der Widerspruch · der Bescheid</p>
<h3>Beteiligung</h3><p class="es-t">die Petition · unterschreiben · die Wahlbeteiligung · die Opposition · die Koalition · die Behörde</p>`});

/* ================= KAPITEL 46 · STADT DER ZUKUNFT ================= */
LANGS.de.course.units.push({id:'k46',n:'46',level:'B2',title:'Stadt der Zukunft',sub:'Moradia, planejamento urbano e mobilidade · orações relativas com wer, was, wo(r)- (Wer …, der … · alles, was … · etwas, worüber …) · apresentação com prós e contras',
goals:['Über Wohnungsmarkt, Stadtplanung und Mobilität sprechen','Relativsätze mit wer, was und wo(r)- (Wer zu spät kommt, … · alles, was … · etwas, worauf …)','Vor- und Nachteile abwägen und einen kurzen Vortrag halten','Einen Bericht über ein Stadtprojekt verstehen'],
situacion:{title:'Workshop de planejamento urbano',npc:'Herr Demir',scene:'A prefeitura de Frankfurt organiza um workshop com moradores sobre o futuro de um antigo terreno industrial. O planejador urbano Sr. Demir modera o seu grupo.',role:'Du bist Herr Can Demir, Stadtplaner bei der Stadt Frankfurt. Du siezt. Du moderierst einen Bürgerworkshop: Auf einem alten Industriegelände sollen bis 2035 Wohnungen für 3000 Menschen entstehen. Frag Lucas, was ihm in einem neuen Stadtviertel wichtig wäre (bezahlbarer Wohnraum, Grünflächen, Nahverkehr, Carsharing, Schulen, Läden), lass ihn Prioritäten setzen und spiele Zielkonflikte durch (mehr Grün = weniger Wohnungen, autofrei = Probleme für Handwerker). Benutze Relativsätze mit wer/was/wo(r)- (Wer hier wohnt, … · alles, was … · etwas, worauf …). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Diga o que é importante para você num bairro novo, justifique as prioridades e encontre soluções para os conflitos de objetivos.'},
placement:[
 {t:'mc',q:'___ in der Innenstadt wohnt, braucht kein Auto.',opts:['Wer','Der','Was'],a:0},
 {t:'mc',q:'Das ist alles, ___ ich weiß.',opts:['was','das','welches'],a:0},
 {t:'mc',q:'Es gibt etwas, ___ ich mich sehr freue.',opts:['worauf','auf das','wo'],a:0},
 {t:'mc',q:'Die Mieten steigen ständig, ___ viele Familien aus der Stadt vertreibt.',opts:['was','das','die'],a:0},
 {t:'gap',q:'Viele Menschen ___ täglich von Darmstadt nach Frankfurt. (fazem o trajeto casa-trabalho)',a:['pendeln']},
 {t:'mc',q:'„acessível (preço)“',opts:['bezahlbar','bezahlt','zahlreich'],a:0}],
lessons:[
{id:'l1',title:'Moradia e cidade',desc:'bezahlbar, der Leerstand, die Gentrifizierung …',steps:[
 {t:'vocab',title:'Mercado imobiliário e cidade',items:[['der Wohnungsmarkt','o mercado imobiliário'],['der Wohnraum','o espaço habitacional, as moradias'],['bezahlbar','acessível (de preço)'],['die Sozialwohnung','a moradia social'],['der Leerstand','os imóveis vazios'],['die Gentrifizierung','a gentrificação'],['verdrängen','expulsar, deslocar'],['die Stadtplanung','o planejamento urbano'],['das Stadtviertel','o bairro'],['die Infrastruktur','a infraestrutura'],['die Grünfläche','a área verde'],['die Lebensqualität','a qualidade de vida'],['das Eigentum','a propriedade'],['die Eigentumswohnung','o apartamento próprio'],['der Makler / die Maklerin','o corretor / a corretora'],['die Provision','a comissão']]},
 {t:'mc',q:'In Frankfurt finden viele Familien keinen ___ Wohnraum.',opts:['bezahlbaren','bezahlten','verdrängten'],a:0},
 {t:'mc',q:'Wenn reiche Menschen in ein Viertel ziehen und die Mieten steigen, spricht man von ___.',opts:['Gentrifizierung','Infrastruktur','Leerstand'],a:0},
 {t:'gap',q:'Viele alte Bewohner werden aus dem Viertel ___. (expulsos)',a:['verdrängt']},
 {t:'match',q:'Ligue.',pairs:[['der Leerstand','os imóveis vazios'],['die Grünfläche','a área verde'],['das Eigentum','a propriedade'],['die Lebensqualität','a qualidade de vida'],['der Makler','o corretor']]},
 {t:'tr',de:'O planejamento urbano precisa de mais áreas verdes.',a:['Die Stadtplanung braucht mehr Grünflächen.']},
 {t:'speak',es:'Trotz steigender Mieten möchte ich in der Stadt wohnen, weil die Lebensqualität hier für mich einfach höher ist.',de:'Apesar dos aluguéis em alta, quero morar na cidade, porque aqui a qualidade de vida para mim é simplesmente maior.',tip:'<i>trotz</i> + genitivo: <i>steigender Mieten</i> (plural sem artigo).'}
]},
{id:'l2',title:'Orações relativas com wer, was, wo(r)-',desc:'Wer …, (der) … · alles, was … · etwas, worüber …',steps:[
 {t:'info',title:'wer, was e wo(r)-',html:`<p><b>wer</b> = quem (qualquer pessoa que). A segunda parte pode começar com <i>der / dem / den</i> (às vezes omitido):</p>
 <table><tr><td class="es-t">Wer in der Stadt wohnt, (der) braucht kein Auto.</td><td>Quem mora na cidade não precisa de carro.</td></tr>
 <tr><td class="es-t">Wem die Mieten zu hoch sind, dem bleibt nur das Umland.</td><td>Para quem acha os aluguéis altos demais, só resta morar nos arredores.</td></tr></table>
 <p><b>was</b> depois de <i>alles, etwas, nichts, vieles, das</i>, depois de <b>superlativos</b> e para se referir a uma <b>frase inteira</b>:</p>
 <table><tr><td class="es-t">Das ist alles, was ich weiß.</td><td>Isso é tudo o que eu sei.</td></tr>
 <tr><td class="es-t">Das ist das Beste, was mir passieren konnte.</td><td>Foi a melhor coisa que podia me acontecer.</td></tr>
 <tr><td class="es-t">Die Miete steigt, was mich sehr ärgert.</td><td>O aluguel sobe, o que me irrita muito.</td></tr></table>
 <p>Com verbos com preposição, <b>was</b> vira <b>wo(r)- + preposição</b>:</p>
 <table><tr><td class="es-t">Es gibt etwas, worauf ich mich freue.</td><td>Há algo pelo qual estou ansioso.</td></tr>
 <tr><td class="es-t">Das ist alles, wofür ich mich interessiere.</td><td>Isso é tudo o que me interessa.</td></tr></table>
 <div class="ex">Para lugares também se usa <b>wo</b>: <span class="es-t">die Stadt, wo ich wohne</span> (= in der ich wohne).</div>`},
 {t:'mc',q:'___ keine Wohnung findet, muss oft pendeln.',opts:['Wer','Der','Wen'],a:0},
 {t:'mc',q:'Das ist das Schönste, ___ ich je gesehen habe.',opts:['was','das','wo'],a:0},
 {t:'mc',q:'Der Bus kam 30 Minuten zu spät, ___ alle geärgert hat.',opts:['was','der','das'],a:0},
 {t:'mc',q:'Gibt es etwas, ___ Sie sich beschweren möchten?',opts:['worüber','über das','was'],a:0},
 {t:'gap',q:'Nichts, ___ er sagt, stimmt. (pronome relativo)',a:['was']},
 {t:'gap',q:'Das ist genau das, ___ ich gewartet habe. (warten auf)',a:['worauf']},
 {t:'gap',q:'___ das Viertel gefällt, der sollte schnell eine Wohnung suchen. (quem)',a:['Wem']},
 {t:'order',es:'Wer mit dem Rad zur Arbeit fährt spart Geld und bleibt fit',de:'Quem vai de bicicleta para o trabalho economiza dinheiro e se mantém em forma.'},
 {t:'tr',de:'Isso é tudo o que preciso.',a:['Das ist alles, was ich brauche.']}
]},
{id:'l3',title:'Mobilidade do futuro',desc:'pendeln, der Nahverkehr, das Lastenrad …',steps:[
 {t:'vocab',title:'Mobilidade',items:[['pendeln','fazer o trajeto casa-trabalho'],['der Pendler / die Pendlerin','quem se desloca diariamente para o trabalho'],['der öffentliche Nahverkehr (ÖPNV)','o transporte público'],['das Carsharing','o compartilhamento de carros'],['das Lastenrad','a bicicleta de carga'],['die Elektromobilität','a mobilidade elétrica'],['die Ladestation','o ponto de recarga'],['autonom','autônomo'],['vernetzt','conectado (em rede)'],['die Verkehrswende','a transição da mobilidade'],['der Ausbau','a ampliação'],['ausbauen','ampliar, expandir']]},
 {t:'read',title:'Leitura: Superblocks in Barcelona',text:`In Barcelona werden seit 2016 sogenannte Superblocks eingerichtet: Jeweils neun Häuserblocks werden zu einer Einheit zusammengefasst. Hineinfahren darf nur, wer dort wohnt oder etwas liefert – und auch das nur mit zehn Stundenkilometern. Wo früher vier Spuren Verkehr waren, stehen heute Bänke, Bäume und Spielplätze.
Was als Experiment im Viertel Poblenou begann, gilt inzwischen international als Vorbild. Delegationen aus Japan, Kanada und Südkorea besuchen die Stadt regelmäßig. „Das Wichtigste, was wir gelernt haben: Man muss die Menschen früh beteiligen, bevor man etwas verändert“, sagt eine Stadtplanerin. Laut einer Studie ist der Lärm in den Superblocks deutlich gesunken.
Kritiker weisen allerdings darauf hin, dass sich der Verkehr in die Nachbarstraßen verlagert und die Mieten in den beliebten Vierteln stark steigen. Wer wenig verdient, kann sich das Leben dort kaum noch leisten.`,de:`Em Barcelona, desde 2016, estão sendo criados os chamados superquarteirões: cada nove quarteirões formam uma unidade. Só pode entrar de carro quem mora ali ou faz entregas – e mesmo assim só a dez quilômetros por hora. Onde antes havia quatro faixas de trânsito, hoje há bancos, árvores e parquinhos.\nO que começou como experimento no bairro de Poblenou é hoje considerado um modelo internacional. Delegações do Japão, do Canadá e da Coreia do Sul visitam a cidade regularmente. „A coisa mais importante que aprendemos: é preciso envolver as pessoas cedo, antes de mudar algo“, diz uma urbanista. Segundo um estudo, o barulho nos superquarteirões diminuiu bastante.\nCríticos apontam, porém, que o trânsito se desloca para as ruas vizinhas e que os aluguéis nos bairros mais procurados sobem muito. Quem ganha pouco mal consegue pagar a vida ali.`},
 {t:'mc',q:'Wer darf mit dem Auto in einen Superblock fahren?',opts:['nur Anwohner und Lieferverkehr','alle, aber nur nachts','niemand'],a:0},
 {t:'mc',q:'Was hat man laut der Stadtplanerin gelernt?',opts:['Man muss die Menschen früh beteiligen.','Autos sind immer schlecht.','Man braucht keine Spielplätze.'],a:0},
 {t:'mc',q:'Was kritisieren manche?',opts:['Der Verkehr verlagert sich in andere Straßen.','Es gibt zu viele Bänke.','Die Straßen sind zu laut.'],a:0},
 {t:'gap',q:'Die Stadt will das Radwegenetz ___. (ampliar)',a:['ausbauen']},
 {t:'tr',de:'Muitas pessoas que vão e voltam do trabalho ficam todo dia no engarrafamento.',a:['Viele Pendler stehen jeden Tag im Stau.','Viele Pendler stehen täglich im Stau.']}
]},
{id:'l4',title:'Falar: prós e contras',desc:'Kurzvortrag „Stadt oder Land?“',steps:[
 {t:'info',title:'Pesar vantagens e desvantagens',html:`<table><tr><td class="es-t">Ein großer Vorteil ist, dass … · Positiv ist außerdem, dass …</td><td>Uma grande vantagem é que … · Também é positivo que …</td></tr>
 <tr><td class="es-t">Ein Nachteil ist allerdings … · Problematisch finde ich, dass …</td><td>Uma desvantagem, porém, é … · Acho problemático que …</td></tr>
 <tr><td class="es-t">Bei uns in Brasilien ist es so, dass … · Im Vergleich zu Deutschland …</td><td>No meu país é assim: … · Em comparação com a Alemanha …</td></tr>
 <tr><td class="es-t">Wenn ich die Vor- und Nachteile abwäge, komme ich zu dem Schluss, dass …</td><td>Pesando prós e contras, chego à conclusão de que …</td></tr></table>`},
 {t:'vocab',title:'Argumentar',items:[['der Vorteil','a vantagem'],['der Nachteil','a desvantagem'],['abwägen','pesar, ponderar'],['zu dem Schluss kommen','chegar à conclusão'],['überwiegen','predominar, prevalecer'],['einerseits … andererseits','por um lado … por outro']]},
 {t:'mc',q:'Sie möchten am Ende eines Vortrags Ihre Meinung sagen. Was passt?',opts:['Wenn ich die Vor- und Nachteile abwäge, komme ich zu dem Schluss, dass …','Ein Nachteil ist allerdings …','Bei uns ist es so, dass …'],a:0},
 {t:'gap',q:'Für mich ___ die Vorteile des Stadtlebens. (predominam)',a:['überwiegen']},
 {t:'speak',es:'Ein großer Vorteil der Stadt ist, dass man alles mit Bus und Bahn erreichen kann. Ein Nachteil sind allerdings die hohen Mieten.',de:'Uma grande vantagem da cidade é que dá para chegar a tudo de ônibus e trem. Uma desvantagem, porém, são os aluguéis altos.',tip:'<i>erreichen</i> = alcançar, chegar a (acusativo).'},
 {t:'free',task:'Prepare por escrito uma apresentação curta (~150 palavras) sobre o tema „Wohnen in der Stadt oder auf dem Land?“: 1) apresente o tema, 2) conte a sua experiência, 3) como é no seu país, 4) vantagens e desvantagens, 5) sua opinião e conclusão. Use pelo menos uma oração com wer ou was.',hint:'Ich möchte heute über … sprechen. Ich selbst wohne … Bei uns in … Ein großer Vorteil ist, dass … Ein Nachteil ist allerdings … Wer …, … Wenn ich abwäge, komme ich zu dem Schluss, dass …',focus:'Vortragsstruktur, Relativsätze mit wer/was, Vor- und Nachteile',model:'Ich möchte heute über das Thema „Wohnen in der Stadt oder auf dem Land?“ sprechen.\nIch selbst bin in São Paulo aufgewachsen, einer riesigen Stadt, und wohne jetzt in Frankfurt. Bei uns in Brasilien ziehen immer noch viele Menschen vom Land in die großen Städte, weil es dort mehr Arbeit gibt.\nEin großer Vorteil der Stadt ist, dass man fast alles zu Fuß oder mit Bus und Bahn erreichen kann. Außerdem gibt es ein riesiges kulturelles Angebot. Ein Nachteil sind allerdings die hohen Mieten, was besonders für Familien ein Problem ist. Wer auf dem Land wohnt, hat dagegen mehr Platz und Natur, braucht aber oft ein Auto.\nWenn ich die Vor- und Nachteile abwäge, komme ich zu dem Schluss, dass die Stadt für mich im Moment besser passt. Mit Kindern würde ich aber vielleicht anders entscheiden.\nVielen Dank für Ihre Aufmerksamkeit.'}
]}],
resumen:`<h3>Relativsätze mit wer / was / wo(r)-</h3><p class="es-t">Wer in der Stadt wohnt, braucht kein Auto. · Das ist alles, was ich weiß. · das Beste, was … · Die Miete steigt, was mich ärgert. · etwas, worauf ich mich freue · die Stadt, wo ich wohne</p>
<h3>Stadt & Mobilität</h3><p class="es-t">bezahlbarer Wohnraum · die Gentrifizierung · verdrängen · pendeln · der Nahverkehr · das Lastenrad · ausbauen</p>
<h3>Vortrag</h3><p class="es-t">Ein großer Vorteil ist, dass … · Ein Nachteil ist allerdings … · Wenn ich die Vor- und Nachteile abwäge, komme ich zu dem Schluss, dass …</p>`});

/* ================= KAPITEL 47 · LEBENSWEGE ================= */
LANGS.de.course.units.push({id:'k47',n:'47',level:'B2',title:'Lebenswege',sub:'Emigrar, recomeçar, identidade · hätte … machen sollen (arrependimento com modal) · conectores de texto (folglich, daraufhin, stattdessen …) · olhar para trás',
goals:['Über Lebensentscheidungen, Auswanderung und Identität sprechen','Konjunktiv II der Vergangenheit mit Modalverb: Ich hätte früher Deutsch lernen sollen.','Texte verknüpfen: folglich, daraufhin, stattdessen, zudem, dennoch, nämlich','Einen persönlichen Rückblick schreiben'],
situacion:{title:'Entrevista para o podcast',npc:'Sophie',scene:'A Sophie faz um podcast sobre pessoas que recomeçaram a vida em outro país. Ela entrevista você sobre os seus três anos na Alemanha.',role:'Du bist Sophie, Journalistin und Podcasterin („Neuanfang – Geschichten vom Ankommen“). Du duzt, weil der Podcast locker ist. Du interviewst Lucas über seine drei Jahre in Deutschland: Warum ist er ausgewandert? Was war der schwierigste Moment, was der schönste? Was würde er heute anders machen (Ich hätte … sollen)? Wie hat sich seine Identität verändert – fühlt er sich mehr brasilianisch, deutsch oder beides? Was rät er Menschen, die auswandern wollen? Hak nach, wenn Antworten zu kurz sind. Benutze Textkonnektoren (daraufhin, stattdessen, dennoch). Sprich natürliches Deutsch auf B2-Niveau.',goal:'Conte a sua trajetória com detalhes, fale de um arrependimento (hätte … sollen) e dê um conselho para quem quer emigrar.'},
placement:[
 {t:'mc',q:'Ich ___ früher mit dem Deutschlernen anfangen sollen.',opts:['hätte','wäre','würde'],a:0},
 {t:'mc',q:'Sie hätte den Job nicht annehmen ___.',opts:['sollen','gesollt','zu sollen'],a:0},
 {t:'mc',q:'Er bekam ein Jobangebot in Berlin. ___ kündigte er seine Wohnung.',opts:['Daraufhin','Stattdessen','Nämlich'],a:0},
 {t:'mc',q:'Ich wollte Medizin studieren. ___ habe ich eine Ausbildung gemacht.',opts:['Stattdessen','Folglich','Zudem'],a:0},
 {t:'gap',q:'Viele Menschen ___ jedes Jahr nach Kanada aus. (emigram)',a:['wandern']},
 {t:'mc',q:'„olhando para trás, em retrospecto“',opts:['im Nachhinein','im Voraus','im Gegenteil'],a:0}],
lessons:[
{id:'l1',title:'Recomeçar',desc:'auswandern, der Neuanfang, die Wurzeln …',steps:[
 {t:'vocab',title:'Emigrar e recomeçar',items:[['auswandern','emigrar'],['die Auswanderung','a emigração'],['einwandern','imigrar'],['der Neuanfang','o recomeço'],['der Wendepunkt','o ponto de virada'],['sich anpassen an','adaptar-se a'],['die Anpassung','a adaptação'],['die Wurzeln (Pl.)','as raízes'],['die Identität','a identidade'],['zweisprachig','bilíngue'],['die Mehrsprachigkeit','o multilinguismo'],['die Zugehörigkeit','o pertencimento'],['die Fremde','o estrangeiro (lugar distante)'],['vertraut','familiar, conhecido'],['der Kulturschock','o choque cultural']]},
 {t:'mc',q:'Der Umzug nach Deutschland war ein ___ in meinem Leben.',opts:['Wendepunkt','Kulturschock','Wurzeln'],a:0},
 {t:'mc',q:'Ihre Kinder sprechen Deutsch und Portugiesisch – sie wachsen ___ auf.',opts:['zweisprachig','fremd','vertraut'],a:0},
 {t:'gap',q:'Am Anfang war alles fremd, heute ist mir die Stadt ___. (familiar)',a:['vertraut']},
 {t:'match',q:'Ligue.',pairs:[['auswandern','emigrar'],['der Neuanfang','o recomeço'],['die Wurzeln','as raízes'],['die Zugehörigkeit','o pertencimento'],['sich anpassen','adaptar-se']]},
 {t:'tr',de:'Foi difícil me adaptar ao clima.',a:['Es war schwierig, mich an das Klima anzupassen.','Es war schwer, mich an das Klima anzupassen.']},
 {t:'speak',es:'Obwohl ich mich gut angepasst habe, spüre ich meine Wurzeln heute stärker als früher.',de:'Embora eu tenha me adaptado bem, hoje sinto as minhas raízes com mais força do que antes.',tip:'<i>spüren</i> = sentir (perceber).'}
]},
{id:'l2',title:'Arrependimentos: hätte … sollen',desc:'Ich hätte früher anfangen sollen. · Du hättest es sagen können.',steps:[
 {t:'info',title:'Konjunktiv II passado com modal',html:`<p>Para falar de algo que <b>deveria / poderia ter acontecido</b> (mas não aconteceu): <b>hätte</b> + infinitivo + <b>modal no infinitivo</b> (no final):</p>
 <table><tr><td class="es-t">Ich hätte früher Deutsch lernen sollen.</td><td>Eu deveria ter aprendido alemão antes.</td></tr>
 <tr><td class="es-t">Du hättest mich anrufen können!</td><td>Você podia ter me ligado!</td></tr>
 <tr><td class="es-t">Wir hätten nicht so viel bezahlen müssen.</td><td>Não teríamos precisado pagar tanto.</td></tr></table>
 <div class="ex">Nunca com particípio do modal: <span class="es-t">Ich hätte kommen sollen</span>, não <i>gesollt</i>. Em oração subordinada, <b>hätte</b> vem antes dos dois infinitivos: <span class="es-t">…, dass ich früher hätte kommen sollen.</span></div>`},
 {t:'mc',q:'Ich habe den Zug verpasst. Ich ___ früher losgehen sollen.',opts:['hätte','habe','wäre'],a:0},
 {t:'mc',q:'Warum hast du nichts gesagt? Du hättest mich ___!',opts:['fragen können','gefragt können','fragen gekonnt'],a:0},
 {t:'mc',q:'Ich weiß, dass ich mehr ___.',opts:['hätte üben sollen','üben sollen hätte','hätte geübt sollen'],a:0},
 {t:'gap',q:'Wir hätten die Wohnung nicht nehmen ___. (dever – modal)',a:['sollen']},
 {t:'gap',q:'Sie hätte länger bleiben ___, aber sie wollte nicht. (poder – modal)',a:['können']},
 {t:'order',es:'Im Nachhinein hätte ich mich besser auf den Winter vorbereiten sollen',de:'Em retrospecto, eu deveria ter me preparado melhor para o inverno.'},
 {t:'tr',de:'Você deveria ter me contado isso.',a:['Du hättest mir das sagen sollen.','Das hättest du mir sagen sollen.','Du hättest mir das erzählen sollen.']},
 {t:'speak',es:'Im Nachhinein hätte ich mir mehr Zeit für die Wohnungssuche nehmen sollen.',de:'Olhando para trás, eu deveria ter tirado mais tempo para procurar apartamento.',tip:'<i>sich Zeit nehmen für</i> = tirar tempo para.'}
]},
{id:'l3',title:'Conectores de texto',desc:'folglich, daraufhin, stattdessen, zudem, dennoch, nämlich',steps:[
 {t:'info',title:'Ligar frases num texto',html:`<p>Estes conectores ficam na <b>posição 1</b> (o verbo vem logo depois) – exceto <b>nämlich</b>, que fica depois do verbo:</p>
 <table><tr><th>conector</th><th>significado</th><th>exemplo</th></tr>
 <tr><td><b>folglich / somit</b></td><td>consequentemente</td><td class="es-t">Die Mieten stiegen stark. Folglich zogen viele weg.</td></tr>
 <tr><td><b>daraufhin</b></td><td>em seguida, em reação a isso</td><td class="es-t">Er bekam die Zusage. Daraufhin kündigte er.</td></tr>
 <tr><td><b>stattdessen</b></td><td>em vez disso</td><td class="es-t">Ich wollte nach London. Stattdessen bin ich in Frankfurt gelandet.</td></tr>
 <tr><td><b>zudem / außerdem</b></td><td>além disso</td><td class="es-t">Die Stelle war gut bezahlt. Zudem gab es Homeoffice.</td></tr>
 <tr><td><b>dennoch</b></td><td>mesmo assim (= trotzdem)</td><td class="es-t">Der Anfang war hart. Dennoch habe ich nie aufgegeben.</td></tr>
 <tr><td><b>nämlich</b></td><td>é que, pois (explica)</td><td class="es-t">Ich bin müde. Ich habe nämlich kaum geschlafen.</td></tr></table>`},
 {t:'vocab',title:'Conectores',items:[['folglich','consequentemente'],['somit','assim, portanto'],['daraufhin','em seguida, em reação a isso'],['stattdessen','em vez disso'],['zudem','além disso'],['dennoch','mesmo assim'],['nämlich','é que, pois'],['im Nachhinein','em retrospecto'],['rückblickend','olhando para trás']]},
 {t:'mc',q:'Ich habe keine Wohnung gefunden. ___ habe ich zuerst bei Freunden gewohnt.',opts:['Folglich','Dennoch','Nämlich'],a:0},
 {t:'mc',q:'Ich komme heute nicht. Ich bin ___ krank.',opts:['nämlich','daraufhin','stattdessen'],a:0},
 {t:'mc',q:'Die Prüfung war sehr schwer. ___ hat sie bestanden.',opts:['Dennoch','Folglich','Zudem'],a:0},
 {t:'mc',q:'Der Chef kritisierte das Projekt. ___ änderte das Team den Plan.',opts:['Daraufhin','Nämlich','Stattdessen'],a:0},
 {t:'gap',q:'Ich wollte eigentlich Jura studieren. ___ habe ich Informatik gewählt. (em vez disso)',a:['Stattdessen']},
 {t:'gap',q:'Die Wohnung ist hell und groß. ___ liegt sie zentral. (além disso – z…)',a:['Zudem']},
 {t:'tr',de:'O começo foi difícil. Mesmo assim, eu fiquei. (dennoch)',a:['Der Anfang war schwierig. Dennoch bin ich geblieben.','Der Anfang war schwer. Dennoch bin ich geblieben.']}
]},
{id:'l4',title:'Escrever: olhar para trás',desc:'Blogbeitrag „Drei Jahre in Deutschland“ (ca. 180 Wörter)',steps:[
 {t:'read',title:'Leitura: Mein Weg – ein Gastbeitrag',text:`Vor acht Jahren bin ich aus Kerala in Indien nach Stuttgart gekommen, um als Pflegekraft zu arbeiten. Rückblickend war das die mutigste Entscheidung meines Lebens.
Die ersten Monate waren hart. Ich verstand kaum ein Wort, wenn die Kolleginnen Schwäbisch sprachen, und im Winter wurde es schon um halb fünf dunkel. Ich hätte mich besser vorbereiten sollen – nicht nur auf die Sprache, sondern auch auf die Einsamkeit. Dennoch habe ich nie ans Aufgeben gedacht.
Der Wendepunkt kam, als ich in einem Chor anfing. Dort lernte ich Menschen kennen, die mich nicht als „die Neue aus Indien“ sahen, sondern einfach als Priya. Daraufhin wurde auch mein Deutsch schnell besser.
Heute leite ich ein Team von zwölf Pflegekräften. Meine Kinder sind zweisprachig und lachen über meinen Akzent. Bin ich Inderin oder Deutsche? Ich habe aufgehört, mich zu entscheiden. Ich bin nämlich beides.`,de:`Há oito anos vim de Kerala, na Índia, para Stuttgart para trabalhar como profissional de enfermagem. Olhando para trás, foi a decisão mais corajosa da minha vida.\nOs primeiros meses foram duros. Eu mal entendia uma palavra quando as colegas falavam suábio, e no inverno escurecia já às quatro e meia. Eu deveria ter me preparado melhor – não só para a língua, mas também para a solidão. Mesmo assim, nunca pensei em desistir.\nO ponto de virada veio quando comecei num coral. Lá conheci pessoas que não me viam como „a nova da Índia“, mas simplesmente como Priya. Em seguida, o meu alemão também melhorou rápido.\nHoje lidero uma equipe de doze profissionais de enfermagem. Meus filhos são bilíngues e riem do meu sotaque. Sou indiana ou alemã? Parei de escolher. É que sou as duas coisas.`},
 {t:'mc',q:'Was bereut Priya?',opts:['Sie hätte sich besser vorbereiten sollen.','Sie hätte nicht nach Deutschland kommen sollen.','Sie hätte in Indien bleiben sollen.'],a:0},
 {t:'mc',q:'Was war der Wendepunkt?',opts:['Sie fing in einem Chor an.','Sie bekam Kinder.','Sie wurde Teamleiterin.'],a:0},
 {t:'mc',q:'Wie sieht Priya ihre Identität heute?',opts:['Sie fühlt sich als Inderin und Deutsche.','Sie fühlt sich nur deutsch.','Sie weiß nicht, wer sie ist.'],a:0},
 {t:'free',task:'Escreva um texto de blog (~180 palavras) sobre a sua trajetória (real ou a do curso: três anos na Alemanha): 1) por que você tomou a decisão, 2) o começo e as dificuldades, 3) um ponto de virada, 4) algo que você deveria ter feito diferente (hätte … sollen), 5) quem você é hoje e um conselho. Use pelo menos três conectores (daraufhin, dennoch, stattdessen, zudem, nämlich …).',hint:'Vor drei Jahren … Rückblickend … Die ersten Monate … Ich hätte … sollen. Dennoch … Der Wendepunkt kam, als … Daraufhin … Heute … Mein Rat: …',focus:'Konjunktiv II Vergangenheit mit Modalverb, Textkonnektoren, Präteritum',model:'Vor drei Jahren habe ich in São Paulo meinen sicheren Job gekündigt und bin nach Frankfurt gezogen. Ich wollte nämlich nicht nur Software entwickeln, sondern auch eine neue Kultur kennenlernen. Rückblickend war das die beste Entscheidung meines Lebens.\nDie ersten Monate waren allerdings schwierig. Ich verstand die Kollegen in der Kaffeeküche kaum, und die Wohnungssuche war ein Albtraum. Im Nachhinein hätte ich schon in Brasilien intensiver Deutsch lernen sollen. Dennoch habe ich nie ans Zurückgehen gedacht.\nDer Wendepunkt kam, als ich in eine WG mit Tom gezogen bin. Er hat mich zu seinen Freunden mitgenommen und mich nur auf Deutsch korrigiert – manchmal ziemlich streng. Daraufhin habe ich zum ersten Mal einen ganzen Abend auf Deutsch verstanden.\nHeute fühle ich mich in Frankfurt zu Hause, vermisse aber immer noch das Essen meiner Mutter. Zudem habe ich gelernt, dass man sich nicht zwischen zwei Ländern entscheiden muss.\nMein Rat: Sucht euch von Anfang an Kontakte außerhalb der Arbeit – stattdessen nur Netflix zu schauen, hilft nicht!'}
]}],
resumen:`<h3>hätte … sollen / können / müssen</h3><p class="es-t">Ich hätte früher Deutsch lernen sollen. · Du hättest mich anrufen können! · …, dass ich früher hätte kommen sollen.</p>
<h3>Textkonnektoren</h3><p class="es-t">folglich · somit · daraufhin · stattdessen · zudem · dennoch · nämlich (depois do verbo) · im Nachhinein · rückblickend</p>
<h3>Lebenswege</h3><p class="es-t">auswandern · der Neuanfang · der Wendepunkt · sich anpassen an · die Wurzeln · die Identität · zweisprachig · vertraut</p>`});

/* ================= KAPITEL 48 · PRÜFUNGSTRAINING B2 ================= */
LANGS.de.course.units.push({id:'k48',n:'48',level:'B2',title:'Prüfungstraining B2',sub:'Simulado no formato da prova B2 do Goethe-Institut: ler, ouvir, escrever, falar · palavras importantes para a prova',
goals:['Lesen: Meinungen, Zeitungsartikel, Lückentext, Stellungnahmen, Regeln (5 Teile)','Hören: kurze Texte, Interview, Diskussion, Vortrag (4 Teile)','Schreiben: Forumsbeitrag (~150 Wörter) und formelle Nachricht (~100 Wörter)','Sprechen: Vortrag halten, auf Fragen reagieren, ein Thema diskutieren','Wichtige Wörter für die Prüfung: berücksichtigen, sich auswirken auf, erheblich …'],
situacion:{title:'Prova oral B2 (simulação)',npc:'Prüfer',scene:'Prova oral do nível B2. O examinador conduz as duas partes; a sua parceira de prova se chama Nina.',role:'Du bist Prüfer bei einer mündlichen Deutschprüfung B2 (Goethe-Format). Du siezt. Teil 1: Bitte Lucas, einen Vortrag zum Thema „Sollte das Studium in Deutschland Gebühren kosten?“ zu halten (Situation in Deutschland und in seinem Land, Vor- und Nachteile, eigene Meinung). Hör zu, ohne zu unterbrechen, und stell danach eine Nachfrage. Teil 2: Spiel die Partnerin Nina (du siezt auch in dieser Rolle) und diskutiere mit Lucas die Frage „Sollten Handys in Restaurants verboten werden?“. Vertritt eine andere Meinung als er, bring Argumente und reagiere auf seine. Achte darauf, dass er Gründe nennt, widerspricht und am Ende ein Fazit zieht. Sprich natürliches Deutsch auf B2-Niveau.',goal:'Faça uma apresentação estruturada (~4 min), responda à pergunta e discuta com a Nina defendendo a sua opinião.'},
placement:[
 {t:'mc',q:'In der B2-Prüfung schreiben Sie einen Forumsbeitrag mit ca. …',opts:['150 Wörtern','40 Wörtern','400 Wörtern'],a:0},
 {t:'mc',q:'Wie leiten Sie in einer Diskussion einen Widerspruch höflich ein?',opts:['Da muss ich Ihnen widersprechen, weil …','Das ist Quatsch.','Sie haben keine Ahnung.'],a:0},
 {t:'mc',q:'Das Gesetz wirkt sich negativ ___ die Mieter aus.',opts:['auf','an','über'],a:0},
 {t:'gap',q:'Bei der Planung müssen alle Wünsche ___ werden. (levados em conta)',a:['berücksichtigt']}],
lessons:[
{id:'l1',title:'Ler (Lesen)',desc:'5 partes: opiniões, artigo, texto com lacunas, posicionamentos, regras',steps:[
 {t:'info',title:'A prova B2 do Goethe-Institut',html:`<p>A prova <b>Goethe-Zertifikat B2</b> tem quatro módulos (podem ser feitos separadamente):</p>
 <table><tr><th>módulo</th><th>duração</th><th>o que é</th></tr>
 <tr><td>Lesen (ler)</td><td>65 min</td><td>5 partes: opiniões de várias pessoas, artigo de jornal, texto em que faltam frases, posicionamentos sobre um tema, regras/instruções</td></tr>
 <tr><td>Hören (ouvir)</td><td>~40 min</td><td>4 partes: textos curtos (avisos, mensagens), entrevista, discussão, palestra</td></tr>
 <tr><td>Schreiben (escrever)</td><td>75 min</td><td>texto de opinião num fórum (<b>~150 palavras</b>) e mensagem formal (<b>~100 palavras</b>)</td></tr>
 <tr><td>Sprechen (falar)</td><td>~15 min (+ 15 min de preparação)</td><td>em dupla: apresentação (~4 min) com perguntas e uma discussão</td></tr></table>
 <div class="ex">Para passar: <b>60 %</b> em cada módulo. Os textos abaixo são simulados próprios no estilo da prova.</div>`},
 {t:'read',kind:'Lesen · Teil 1',title:'Forum: Ein Jahr Sabbatical – Erfahrungen',text:`Martina, 44: Nach 20 Jahren im Büro habe ich mir ein Jahr Auszeit genommen und bin mit dem Fahrrad durch Südamerika gefahren. Finanziell war das nur möglich, weil ich drei Jahre lang auf einen Teil meines Gehalts verzichtet habe. Bereut habe ich es keine Sekunde – auch wenn die Rückkehr in den Alltag schwerer war als gedacht.
Henrik, 37: Mein Arbeitgeber war anfangs skeptisch. Dennoch hat er zugestimmt, sofern ich vorher einen Kollegen einarbeite. Ich habe das Jahr genutzt, um eine Weiterbildung zu machen. Heute habe ich eine bessere Position – davon profitiert also auch die Firma.
Dana, 51: Ein Sabbatical klingt toll, ist aber für viele Menschen unrealistisch. Wer alleinerziehend ist oder einen kleinen Betrieb hat, kann sich ein Jahr ohne Einkommen schlicht nicht leisten. Ich finde, man sollte lieber über kürzere Arbeitszeiten für alle sprechen.`,de:`Martina, 44: Depois de 20 anos no escritório, tirei um ano de pausa e atravessei a América do Sul de bicicleta. Financeiramente, isso só foi possível porque abri mão de parte do meu salário durante três anos. Não me arrependi nem por um segundo – mesmo que a volta à rotina tenha sido mais difícil do que eu pensava.\nHenrik, 37: Meu empregador no início estava cético. Mesmo assim concordou, desde que eu treinasse um colega antes. Usei o ano para fazer uma formação. Hoje tenho um cargo melhor – então a empresa também se beneficia.\nDana, 51: Um sabático parece ótimo, mas para muitas pessoas não é realista. Quem cria os filhos sozinho ou tem uma pequena empresa simplesmente não pode se dar ao luxo de um ano sem renda. Acho que seria melhor falar sobre jornadas de trabalho menores para todos.`},
 {t:'match',kind:'Lesen · Teil 1',q:'Quem diz isso? (Martina, Henrik ou Dana)',pairs:[['Die Zeit danach war nicht einfach.','Martina'],['Auch der Arbeitgeber hatte einen Vorteil.','Henrik'],['Nicht jeder kann sich so etwas leisten.','Dana']]},
 {t:'mc',kind:'Lesen · Teil 1',q:'Wie hat Martina ihr Sabbatical finanziert?',opts:['Sie hat vorher auf einen Teil ihres Gehalts verzichtet.','Ihr Arbeitgeber hat alles bezahlt.','Sie hat unterwegs gearbeitet.'],a:0},
 {t:'read',kind:'Lesen · Teil 2',title:'Zeitungsartikel: Die Rückkehr der Nachtzüge',text:`Lange galten Nachtzüge in Europa als Auslaufmodell: zu langsam, zu teuer, zu unbequem. Viele Verbindungen wurden in den 2010er-Jahren eingestellt. Inzwischen erleben sie eine überraschende Renaissance. Angesichts der Klimadebatte suchen immer mehr Reisende nach Alternativen zum Flugzeug – und entdecken dabei das Schlafwagenabteil neu.
Die österreichische Bahn hat ihr Nachtzugnetz in den letzten Jahren erheblich ausgebaut, und neue private Anbieter verbinden Städte wie Berlin, Brüssel und Prag. Die Auslastung liegt auf vielen Strecken bei über 80 Prozent.
Dennoch ist der Erfolg keineswegs gesichert. Der Betrieb ist teuer, da die Züge nachts nur einmal fahren und tagsüber meist stillstehen. Zudem fehlen moderne Wagen; Bestellungen dauern oft Jahre. Fachleute fordern deshalb, dass die Politik Nachtzüge finanziell stärker unterstützt – etwa durch niedrigere Gebühren für die Nutzung der Schienen.`,de:`Por muito tempo, os trens noturnos na Europa foram vistos como um modelo ultrapassado: lentos demais, caros demais, desconfortáveis demais. Muitas linhas foram suspensas nos anos 2010. Hoje vivem um renascimento surpreendente. Diante do debate climático, cada vez mais viajantes procuram alternativas ao avião – e redescobrem a cabine-leito.\nA ferrovia austríaca ampliou consideravelmente sua rede de trens noturnos nos últimos anos, e novas empresas privadas ligam cidades como Berlim, Bruxelas e Praga. A ocupação passa de 80 por cento em muitas linhas.\nMesmo assim, o sucesso não está nada garantido. A operação é cara, já que os trens só fazem uma viagem por noite e durante o dia geralmente ficam parados. Além disso, faltam vagões modernos; encomendas muitas vezes levam anos. Por isso, especialistas exigem que a política apoie mais os trens noturnos financeiramente – por exemplo, com taxas menores pelo uso dos trilhos.`},
 {t:'mc',kind:'Lesen · Teil 2',q:'Warum werden Nachtzüge wieder beliebter?',opts:['Viele Menschen wollen weniger fliegen.','Sie sind billiger als Flüge.','Sie sind schneller geworden.'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Warum ist der Betrieb teuer?',opts:['Die Züge werden tagsüber kaum genutzt.','Die Fahrkarten sind zu billig.','Es gibt zu wenige Reisende.'],a:0},
 {t:'mc',kind:'Lesen · Teil 2',q:'Was fordern Fachleute?',opts:['mehr finanzielle Unterstützung durch die Politik','höhere Preise','weniger Strecken'],a:0},
 {t:'read',kind:'Lesen · Teil 3',title:'Text mit Lücken: Lernen im Schlaf?',text:`Kann man im Schlaf Vokabeln lernen? Diese Frage beschäftigt Forscher seit Jahrzehnten. (1) ___ Eine Studie aus der Schweiz hat jedoch gezeigt, dass das Gehirn im Schlaf durchaus arbeitet. Die Versuchspersonen lernten abends niederländische Wörter. (2) ___ Am nächsten Morgen erinnerten sich diejenigen, die die Wörter im Schlaf noch einmal gehört hatten, deutlich besser. Die Forscher betonen allerdings, dass man nur festigen kann, was man vorher bewusst gelernt hat.`,de:`Dá para aprender vocabulário dormindo? Essa pergunta ocupa pesquisadores há décadas. (1) ___ Um estudo da Suíça mostrou, porém, que o cérebro trabalha, sim, durante o sono. Os participantes aprenderam palavras em holandês à noite. (2) ___ Na manhã seguinte, aqueles que tinham ouvido as palavras de novo durante o sono se lembravam bem melhor. Os pesquisadores enfatizam, porém, que só se consegue fixar o que se aprendeu antes conscientemente.`},
 {t:'mc',kind:'Lesen · Teil 3',q:'Welcher Satz passt in Lücke (1)?',opts:['Lange glaubte man, dass das unmöglich sei.','Die Wörter waren sehr einfach.','Danach gingen alle nach Hause.'],a:0},
 {t:'mc',kind:'Lesen · Teil 3',q:'Welcher Satz passt in Lücke (2)?',opts:['Während einige danach schliefen, wurden ihnen die Wörter leise vorgespielt.','Lange glaubte man, dass das unmöglich sei.','Niederländisch ist eine schwere Sprache.'],a:0},
 {t:'read',kind:'Lesen · Teil 4',title:'Stellungnahmen: Sollte Wählen ab 16 erlaubt sein?',text:`a) Jugendliche sind von politischen Entscheidungen – etwa beim Klimaschutz oder in der Bildung – am längsten betroffen. Folglich sollten sie auch mitbestimmen dürfen. (Lena, 17)
b) Mit 16 darf man nicht einmal einen Vertrag ohne die Eltern unterschreiben. Warum sollte man dann über die Regierung entscheiden? (Gerd, 63)
c) Erfahrungen aus Österreich zeigen, dass die Wahlbeteiligung junger Erstwähler sogar höher ist, sofern Schulen vorher gut informieren. (Dr. Aydın, Politologin)
d) Ich bin grundsätzlich dafür, aber dann muss politische Bildung in der Schule viel ernster genommen werden. Anstatt nur Daten auswendig zu lernen, sollten wir echte Debatten führen. (Jan Weber, Lehrer)`,de:`a) Os jovens são os afetados por mais tempo por decisões políticas – por exemplo, na proteção do clima ou na educação. Consequentemente, também deveriam poder participar das decisões. (Lena, 17)\nb) Com 16 anos não se pode nem assinar um contrato sem os pais. Por que então decidir sobre o governo? (Gerd, 63)\nc) Experiências da Áustria mostram que a participação de quem vota pela primeira vez é até maior, desde que as escolas informem bem antes. (Dra. Aydın, cientista política)\nd) Sou a favor em princípio, mas então a educação política na escola precisa ser levada muito mais a sério. Em vez de só decorar datas, deveríamos fazer debates de verdade. (Jan Weber, professor)`},
 {t:'match',kind:'Lesen · Teil 4',q:'Qual posição combina?',pairs:[['dagegen: Jugendliche sind noch nicht volljährig','b) Gerd'],['dafür, aber nur mit besserem Unterricht','d) Jan Weber'],['bringt Daten aus einem anderen Land','c) Dr. Aydın'],['dafür, weil Junge lange betroffen sind','a) Lena']]},
 {t:'read',kind:'Lesen · Teil 5',title:'Regeln: Nutzung des Coworking-Space „Werkbank“',text:`§ 1 Zugang: Mitglieder erhalten eine Chipkarte, mit der sie die Räume rund um die Uhr betreten können. Die Weitergabe der Karte an Dritte ist nicht gestattet.
§ 2 Arbeitsplätze: Feste Schreibtische sind gekennzeichnet. Flexible Plätze sind abends zu räumen; persönliche Gegenstände, die über Nacht liegen bleiben, werden ins Fundfach gelegt.
§ 3 Telefonate: Längere Gespräche und Videokonferenzen sind ausschließlich in den Telefonboxen zu führen.
§ 4 Gäste: Besucher sind willkommen, sofern sie sich am Empfang anmelden. Für Gäste, die länger als zwei Stunden bleiben, wird eine Tagespauschale von 15 Euro berechnet.
§ 5 Kündigung: Die Mitgliedschaft kann mit einer Frist von einem Monat zum Monatsende gekündigt werden.`,de:`§ 1 Acesso: os membros recebem um cartão com chip com o qual podem entrar nas salas 24 horas por dia. É proibido repassar o cartão a terceiros.\n§ 2 Postos de trabalho: mesas fixas são identificadas. Lugares flexíveis devem ser desocupados à noite; objetos pessoais deixados durante a noite vão para os achados e perdidos.\n§ 3 Telefonemas: conversas longas e videoconferências devem ser feitas exclusivamente nas cabines telefônicas.\n§ 4 Visitantes: são bem-vindos, desde que se registrem na recepção. Para visitantes que ficam mais de duas horas, cobra-se uma diária de 15 euros.\n§ 5 Cancelamento: a associação pode ser cancelada com aviso prévio de um mês, para o fim do mês.`},
 {t:'mc',kind:'Lesen · Teil 5',q:'Ihr Kollege möchte Sie am Nachmittag drei Stunden besuchen. Was gilt?',opts:['Er muss sich anmelden und es kostet 15 Euro.','Gäste sind nicht erlaubt.','Er kann Ihre Chipkarte benutzen.'],a:0},
 {t:'mc',kind:'Lesen · Teil 5',q:'Sie haben eine Videokonferenz. Wo führen Sie sie?',opts:['in einer Telefonbox','an Ihrem Schreibtisch','am Empfang'],a:0},
 {t:'mc',kind:'Lesen · Teil 5',q:'Welche Überschrift passt zu § 2?',opts:['Ordnung am Platz','Kosten für Besucher','Sicherheit der Karte'],a:0}
]},
{id:'l2',title:'Ouvir (Hören)',desc:'4 partes: textos curtos, entrevista, discussão, palestra',steps:[
 {t:'read',hideText:true,kind:'Hören · Teil 1',title:'Ansage im Radio',intro:'Ouça o aviso de trânsito no rádio.',text:`Und nun die Verkehrsmeldungen: Auf der A5 zwischen Frankfurt-Westkreuz und Darmstadt kommt es wegen eines Unfalls zu zwölf Kilometern Stau. Die linke Spur ist gesperrt. Bitte fahren Sie, wenn möglich, über die A67 aus. Außerdem fallen wegen Bauarbeiten am Wochenende alle S-Bahnen zwischen Hauptbahnhof und Flughafen aus; es fahren Ersatzbusse im 15-Minuten-Takt.`,de:`E agora as notícias de trânsito: na A5, entre Frankfurt-Westkreuz e Darmstadt, há doze quilômetros de engarrafamento por causa de um acidente. A faixa da esquerda está bloqueada. Se possível, desviem pela A67. Além disso, por causa de obras no fim de semana, todos os trens S-Bahn entre a estação central e o aeroporto estão cancelados; ônibus substitutos circulam a cada 15 minutos.`},
 {t:'mc',kind:'Hören · Teil 1',q:'Wie kommt man am Wochenende vom Hauptbahnhof zum Flughafen?',opts:['mit Ersatzbussen','mit der S-Bahn','gar nicht'],a:0},
 {t:'mc',kind:'Hören · Teil 1',q:'Richtig oder falsch? Auf der A5 sind alle Spuren gesperrt.',opts:['falsch','richtig'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 2',title:'Interview: Eine Bäckerin gegen die Lebensmittelverschwendung',intro:'Ouça a entrevista com a padeira Katja Roth.',text:`– Frau Roth, Sie verkaufen in Ihrer Bäckerei Brot vom Vortag zum halben Preis. Wie kam es dazu?
– Ehrlich gesagt aus Frust. Wir haben jeden Abend kistenweise Brot weggeworfen, das noch völlig in Ordnung war. Das konnte ich irgendwann nicht mehr mit ansehen.
– Und wie reagieren die Kunden?
– Am Anfang waren viele skeptisch, als ob altes Brot etwas Schlechtes wäre. Heute haben wir Stammkunden, die gezielt morgens kommen, um es zu kaufen. Mittags ist meistens alles weg.
– Lohnt sich das wirtschaftlich?
– Wir verdienen pro Brot natürlich weniger. Dafür produzieren wir inzwischen genauer, weil wir besser wissen, was gebraucht wird. Unterm Strich ist der Gewinn sogar leicht gestiegen.
– Was wünschen Sie sich von der Politik?
– Dass Betriebe, die Lebensmittel spenden, weniger Bürokratie haben. Im Moment ist das Spenden oft komplizierter als das Wegwerfen.`,de:`– Sra. Roth, na sua padaria a senhora vende pão do dia anterior pela metade do preço. Como isso começou?\n– Sinceramente, por frustração. Toda noite jogávamos fora caixas de pão que ainda estava perfeitamente bom. Uma hora eu não aguentei mais ver aquilo.\n– E como os clientes reagem?\n– No começo muitos estavam céticos, como se pão do dia anterior fosse algo ruim. Hoje temos clientes fixos que vêm de manhã de propósito para comprá-lo. Ao meio-dia geralmente acabou tudo.\n– Isso compensa economicamente?\n– Ganhamos menos por pão, claro. Em compensação, hoje produzimos com mais precisão, porque sabemos melhor o que é necessário. No fim das contas, o lucro até subiu um pouco.\n– O que a senhora espera da política?\n– Que empresas que doam alimentos tenham menos burocracia. No momento, doar muitas vezes é mais complicado do que jogar fora.`},
 {t:'mc',kind:'Hören · Teil 2',q:'Warum hat Frau Roth mit dem Verkauf angefangen?',opts:['Sie wollte nicht mehr so viel Brot wegwerfen.','Ihre Kunden hatten es gefordert.','Ein Gesetz verlangte es.'],a:0},
 {t:'mc',kind:'Hören · Teil 2',q:'Wie hat sich der Gewinn entwickelt?',opts:['Er ist leicht gestiegen.','Er ist stark gesunken.','Er ist gleich geblieben.'],a:0},
 {t:'mc',kind:'Hören · Teil 2',q:'Was wünscht sie sich von der Politik?',opts:['weniger Bürokratie beim Spenden','höhere Brotpreise','Verbote für Supermärkte'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 3',title:'Diskussion: Vier Tage Schule?',intro:'Ouça a discussão. Quem diz o quê: a moderadora, a Sra. Kraus (diretora de escola) ou o Sr. Petersen (associação de pais)?',text:`Moderatorin: Wegen des Lehrermangels testen einige Schulen eine Vier-Tage-Woche. Frau Kraus, ist das eine Lösung?
Frau Kraus: Kurzfristig ja. Wir haben schlicht nicht genug Personal. Anstatt dass ständig Stunden ausfallen, planen wir lieber verlässlich vier volle Tage – und am fünften Tag lernen die Schüler selbstständig mit digitalen Aufgaben.
Herr Petersen: Das klingt gut, aber wer betreut denn die Kinder am fünften Tag? Viele Eltern arbeiten Vollzeit. Für Familien, die sich keine Betreuung leisten können, wird das zu einem echten Problem.
Moderatorin: Und lernen die Kinder genauso viel?
Frau Kraus: Erste Ergebnisse sind gemischt. Ältere Schüler kommen gut zurecht, jüngere brauchen dagegen mehr Unterstützung.
Herr Petersen: Genau das ist mein Punkt. Die Ungleichheit wird größer. Die Politik müsste endlich mehr Lehrkräfte ausbilden, statt die Schule zu verkürzen.`,de:`Moderadora: Por causa da falta de professores, algumas escolas testam a semana de quatro dias. Sra. Kraus, é uma solução?\nSra. Kraus: A curto prazo, sim. Simplesmente não temos pessoal suficiente. Em vez de aulas serem canceladas o tempo todo, preferimos planejar quatro dias completos de forma confiável – e no quinto dia os alunos estudam sozinhos com tarefas digitais.\nSr. Petersen: Parece bom, mas quem cuida das crianças no quinto dia? Muitos pais trabalham em tempo integral. Para famílias que não podem pagar quem cuide, isso vira um problema real.\nModeradora: E as crianças aprendem o mesmo tanto?\nSra. Kraus: Os primeiros resultados são mistos. Alunos mais velhos se viram bem, já os mais novos precisam de mais apoio.\nSr. Petersen: Exatamente esse é o meu ponto. A desigualdade aumenta. A política deveria finalmente formar mais professores, em vez de encurtar a escola.`},
 {t:'match',kind:'Hören · Teil 3',q:'Quem diz isso?',pairs:[['Lieber planbar vier Tage als ständiger Ausfall.','Frau Kraus'],['Die Betreuung am fünften Tag ist unklar.','Herr Petersen'],['Lernen die Schüler genauso viel?','Moderatorin']]},
 {t:'mc',kind:'Hören · Teil 3',q:'Welche Schüler brauchen laut Frau Kraus mehr Hilfe?',opts:['die jüngeren','die älteren','alle gleich'],a:0},
 {t:'read',hideText:true,kind:'Hören · Teil 4',title:'Vortrag: Warum wir Entscheidungen aufschieben',intro:'Ouça a palestra da psicóloga Dra. Meyer.',text:`Guten Abend, meine Damen und Herren. Wer kennt das nicht: Die Steuererklärung liegt seit Wochen auf dem Tisch, und stattdessen putzen wir lieber die Fenster. Dieses Verhalten nennt man Prokrastination.
Lange hat man geglaubt, dass dahinter einfach Faulheit oder schlechtes Zeitmanagement steckt. Neuere Studien zeigen jedoch etwas anderes: Wir schieben vor allem Aufgaben auf, die unangenehme Gefühle auslösen – Angst vor Fehlern, Langeweile oder Unsicherheit. Das Aufschieben ist also eine Art, kurzfristig mit Gefühlen umzugehen.
Was hilft? Erstens: Aufgaben in sehr kleine Schritte teilen. „Steuererklärung machen“ ist zu groß; „Belege sortieren, zehn Minuten“ ist machbar. Zweitens: sich selbst gegenüber freundlich sein. Wer sich für das Aufschieben verurteilt, schiebt erfahrungsgemäß noch mehr auf. Und drittens: einen festen Zeitpunkt planen – am besten dann, wenn man die meiste Energie hat.`,de:`Boa noite, senhoras e senhores. Quem não conhece isso: a declaração de imposto de renda está há semanas na mesa e, em vez disso, preferimos limpar as janelas. Esse comportamento se chama procrastinação.\nPor muito tempo se acreditou que por trás disso havia simplesmente preguiça ou má gestão do tempo. Estudos mais recentes mostram, porém, outra coisa: adiamos sobretudo tarefas que despertam sentimentos desagradáveis – medo de errar, tédio ou insegurança. Adiar é, portanto, uma forma de lidar com sentimentos a curto prazo.\nO que ajuda? Primeiro: dividir as tarefas em passos bem pequenos. „Fazer a declaração“ é grande demais; „organizar os comprovantes, dez minutos“ é viável. Segundo: ser gentil consigo mesmo. Quem se condena por adiar, segundo a experiência, adia ainda mais. E terceiro: marcar um horário fixo – de preferência quando se tem mais energia.`},
 {t:'mc',kind:'Hören · Teil 4',q:'Was ist laut neueren Studien die Hauptursache für Prokrastination?',opts:['unangenehme Gefühle','Faulheit','zu wenig Zeit'],a:0},
 {t:'mc',kind:'Hören · Teil 4',q:'Was passiert, wenn man sich selbst verurteilt?',opts:['Man schiebt noch mehr auf.','Man wird schneller fertig.','Man hat mehr Energie.'],a:0},
 {t:'mc',kind:'Hören · Teil 4',q:'Welcher Tipp wird genannt?',opts:['Aufgaben in kleine Schritte teilen','abends arbeiten','alles auf einmal erledigen'],a:0}
]},
{id:'l3',title:'Escrever (Schreiben)',desc:'fórum (~150 palavras) · mensagem formal (~100 palavras)',steps:[
 {t:'info',title:'Schreiben – como é',html:`<table><tr><th>parte</th><th>tempo</th><th>tarefa</th></tr>
 <tr><td>Teil 1</td><td>50 min</td><td>texto de opinião num fórum (<b>~150 palavras</b>): você escolhe <b>um de dois temas</b> e trata <b>4 pontos</b> (opinião, motivos, vantagens/desvantagens, alternativas, experiência …)</td></tr>
 <tr><td>Teil 2</td><td>25 min</td><td>mensagem formal (<b>~100 palavras</b>) para um superior, professor, órgão …: pedir algo, reclamar, propor, justificar</td></tr></table>
 <div class="ex">Conta: todos os pontos tratados, <b>texto coeso</b> (Konnektoren: zudem, folglich, dennoch, einerseits … andererseits), vocabulário variado, registro adequado (Sie, fórmulas de cortesia).</div>`},
 {t:'free',kind:'Schreiben · Teil 1',task:'Num fórum online se discute: „Sollten Unternehmen ihren Mitarbeitenden eine Vier-Tage-Woche anbieten?“ Escreva a sua opinião (~150 palavras): 1) dê a sua opinião, 2) explique vantagens para empregados e empresas, 3) mostre possíveis problemas, 4) proponha uma alternativa ou uma solução.',hint:'Meiner Ansicht nach … Ein großer Vorteil ist, dass … Zudem … Allerdings darf man nicht vergessen, dass … Folglich … Anstatt … zu …, könnte man … Zusammenfassend …',focus:'Argumentation, Konnektoren, Nominalstil, Konjunktiv II',model:'Meiner Ansicht nach sollten Unternehmen eine Vier-Tage-Woche zumindest ausprobieren.\nEin großer Vorteil für die Mitarbeitenden ist mehr Zeit für Familie, Erholung und Hobbys. Wer ausgeruht ist, arbeitet konzentrierter und ist seltener krank. Zudem können Firmen, die eine Vier-Tage-Woche anbieten, angesichts des Fachkräftemangels leichter neues Personal gewinnen.\nAllerdings darf man nicht vergessen, dass dieses Modell nicht für alle Branchen passt. In Krankenhäusern oder Bäckereien muss jeden Tag jemand da sein. Folglich bräuchte man dort mehr Personal, was hohe Kosten verursacht. Außerdem besteht die Gefahr, dass man an vier Tagen genauso viel schaffen muss wie vorher an fünf.\nAnstatt allen dasselbe Modell vorzuschreiben, könnte man flexible Lösungen finden – zum Beispiel ein Konto für Arbeitszeit, mit dem jeder selbst entscheidet.\nZusammenfassend lässt sich sagen, dass die Vier-Tage-Woche eine Chance ist, wenn man sie an den jeweiligen Betrieb anpasst.'},
 {t:'free',kind:'Schreiben · Teil 2',task:'Você participa de um curso de formação pago pela empresa („Projektmanagement“, 4 sábados). Por motivo de saúde, perdeu dois encontros. Escreva para a organizadora, Sra. Lang (~100 palavras): peça desculpas e explique, pergunte como recuperar o conteúdo, pergunte se ainda pode receber o certificado e proponha uma solução.',hint:'Sehr geehrte Frau Lang, leider … Aus gesundheitlichen Gründen … Ich möchte Sie fragen, ob … Wäre es möglich, dass … Ich könnte … Für eine kurze Rückmeldung wäre ich Ihnen dankbar. Mit freundlichen Grüßen',focus:'formelle Sprache, indirekte Fragen, Konjunktiv II höflich',model:'Sehr geehrte Frau Lang,\nleider konnte ich an den letzten beiden Terminen des Kurses „Projektmanagement“ nicht teilnehmen, da ich krankgeschrieben war. Das tut mir sehr leid, zumal mir der Kurs bisher sehr gut gefallen hat.\nIch möchte Sie daher fragen, ob es möglich ist, die Unterlagen der verpassten Termine zu erhalten. Außerdem wüsste ich gern, ob ich trotz der Fehlzeiten das Zertifikat bekommen kann.\nGern würde ich die Inhalte nacharbeiten und Ihnen eine kurze schriftliche Zusammenfassung schicken. Alternativ könnte ich an einem der Termine im nächsten Kurs teilnehmen.\nFür eine kurze Rückmeldung wäre ich Ihnen sehr dankbar.\nMit freundlichen Grüßen\nLucas Souza'}
]},
{id:'l4',title:'Falar (Sprechen)',desc:'apresentação · discussão',steps:[
 {t:'info',title:'Sprechen – as duas partes',html:`<table><tr><th>parte</th><th>o que fazer</th></tr>
 <tr><td>Teil 1 · ~4 min por pessoa</td><td><b>Apresentação</b> sobre um de dois temas: 1) apresentar o tema e a estrutura, 2) situação no seu país, 3) vantagens e desvantagens, 4) sua opinião, 5) conclusão. Depois: ouvir a apresentação do parceiro, <b>dar feedback e fazer uma pergunta</b>, responder à pergunta do examinador.</td></tr>
 <tr><td>Teil 2 · ~5 min</td><td><b>Discussão</b> com o parceiro sobre uma pergunta polêmica: dar opinião com motivos, reagir aos argumentos, contradizer, concordar em parte e chegar a uma conclusão (não precisa haver acordo).</td></tr></table>`},
 {t:'info',title:'Frases úteis',html:`<table><tr><td>estruturar</td><td class="es-t">Mein Vortrag besteht aus drei Teilen. · Zunächst … Anschließend … Zum Schluss …</td></tr>
 <tr><td>seu país</td><td class="es-t">In meinem Heimatland ist die Situation ganz anders: …</td></tr>
 <tr><td>feedback</td><td class="es-t">Vielen Dank für deinen interessanten Vortrag. Besonders überzeugend fand ich … · Mich würde noch interessieren, …</td></tr>
 <tr><td>discutir</td><td class="es-t">Da bin ich anderer Meinung. · Das mag sein, aber … · Ich gebe dir recht, was … betrifft.</td></tr>
 <tr><td>concluir</td><td class="es-t">Wir sind uns also einig, dass … · Wir sehen das unterschiedlich, aber …</td></tr></table>`},
 {t:'speak',kind:'Sprechen · Teil 1',es:'Mein Vortrag besteht aus drei Teilen: Zunächst beschreibe ich die Situation in meinem Heimatland, anschließend nenne ich Vor- und Nachteile, und zum Schluss sage ich meine Meinung.',de:'A minha apresentação tem três partes: primeiro descrevo a situação no meu país, depois cito vantagens e desvantagens e, por fim, digo a minha opinião.',tip:'Anunciar a estrutura no início dá pontos na prova.'},
 {t:'free',kind:'Sprechen · Teil 1',task:'Prepare por escrito a sua apresentação (~180 palavras) sobre „Sollte das Studium Gebühren kosten?“: tema e estrutura, situação no seu país, vantagens e desvantagens, sua opinião, conclusão.',hint:'Ich möchte über das Thema … sprechen. Mein Vortrag besteht aus … In meinem Heimatland … Ein Vorteil von Studiengebühren wäre … Dagegen spricht … Meiner Meinung nach … Abschließend …',focus:'Vortragsstruktur, Argumentation, Konnektoren',model:'Ich möchte heute über das Thema „Sollte das Studium Gebühren kosten?“ sprechen. Mein Vortrag besteht aus drei Teilen: der Situation in meinem Heimatland, den Vor- und Nachteilen und meiner Meinung.\nIn meinem Heimatland ist die Situation ganz anders als in Deutschland: Die staatlichen Universitäten sind kostenlos, aber sehr schwer zugänglich. Wer keinen Platz bekommt, muss oft an einer teuren privaten Hochschule studieren.\nEin Vorteil von Studiengebühren wäre, dass die Universitäten mehr Geld für Personal und Ausstattung hätten. Zudem würden manche Studierende ihr Studium vielleicht ernster nehmen. Dagegen spricht allerdings, dass junge Menschen aus ärmeren Familien abgeschreckt werden könnten. Folglich würde die Bildung wieder vom Geldbeutel der Eltern abhängen.\nMeiner Meinung nach sollte das Studium deshalb gebührenfrei bleiben. Stattdessen könnte man Unternehmen, die von gut ausgebildeten Fachkräften profitieren, stärker an der Finanzierung beteiligen.\nAbschließend möchte ich sagen: Bildung ist eine Investition in die ganze Gesellschaft. Vielen Dank für Ihre Aufmerksamkeit.'},
 {t:'dialog',kind:'Sprechen · Teil 2',place:'Prüfung',title:'Discussão: celulares proibidos em restaurantes?',scene:'Você e a Nina discutem a pergunta: „Sollten Handys in Restaurants verboten werden?“',lines:[
  {n:'Nina',es:'Ich finde, Handys sollten in Restaurants verboten werden. Überall sieht man Paare, die nicht miteinander reden, sondern nur auf ihr Display starren.',de:'Acho que celulares deveriam ser proibidos em restaurantes. Em todo lugar se veem casais que não conversam, só ficam olhando para a tela.'},
  {you:true,opts:[{es:'Das mag sein, aber ein Verbot geht mir zu weit. Jeder sollte selbst entscheiden dürfen, wie er seinen Abend verbringt.',ok:true},{es:'Nein.',ok:false,why:'Na prova, sempre dê um motivo: <i>Das mag sein, aber …, weil …</i>'}]},
  {n:'Nina',es:'Aber es stört doch auch andere Gäste, wenn jemand laut telefoniert.',de:'Mas também incomoda outros clientes quando alguém fala alto ao telefone.'},
  {you:true,opts:[{es:'Da gebe ich Ihnen recht, was das Telefonieren betrifft. Wie wäre es also mit einer Regel: Handys erlaubt, aber nur lautlos?',ok:true},{es:'Ich gebe Ihnen recht, was das Telefonieren betrifft es.',ok:false,why:'Frase correta: <i>Ich gebe Ihnen recht, was das Telefonieren betrifft.</i> – e depois faça uma proposta.'}]},
  {n:'Nina',es:'Hm, das wäre ein Kompromiss. Und Restaurants, die ganz ohne Handys sein wollen, könnten das ja anbieten.',de:'Hum, isso seria um meio-termo. E restaurantes que quiserem ser totalmente sem celular poderiam oferecer isso.'},
  {you:true,opts:[{es:'Genau. Wir sind uns also einig, dass ein allgemeines Verbot nicht nötig ist, laute Telefonate aber nicht in Restaurants gehören.',ok:true},{es:'Okay, tschüss.',ok:false,why:'Termine a discussão com uma conclusão: <i>Wir sind uns also einig, dass …</i>'}]}]},
 {t:'tr',kind:'Sprechen · Teil 1',de:'Feedback: Obrigado pela sua apresentação interessante. Eu ainda gostaria de saber …',a:['Vielen Dank für deinen interessanten Vortrag. Mich würde noch interessieren, …','Vielen Dank für Ihren interessanten Vortrag. Mich würde noch interessieren, …','Danke für deinen interessanten Vortrag. Mich würde noch interessieren …','Vielen Dank für deinen interessanten Vortrag. Mich würde noch interessieren','Vielen Dank für Ihren interessanten Vortrag. Mich würde noch interessieren']}
]},
{id:'l5',title:'Palavras para a prova',desc:'berücksichtigen, sich auswirken auf, erheblich …',steps:[
 {t:'vocab',title:'Verbos formais',items:[['berücksichtigen','levar em conta'],['sich auswirken auf','ter efeito sobre'],['die Auswirkung','o efeito, o impacto'],['beitragen zu','contribuir para'],['betreffen','dizer respeito a, afetar'],['gewährleisten','garantir'],['erfordern','exigir, requerer'],['ermöglichen','possibilitar'],['bewältigen','dar conta de, superar'],['sich herausstellen','revelar-se, acabar se mostrando'],['zurückführen auf','atribuir a (causa)'],['hervorheben','destacar']]},
 {t:'vocab',title:'Adjetivos e expressões',items:[['erheblich','considerável'],['gering','pequeno, baixo'],['umfassend','abrangente'],['vorhanden','existente, disponível'],['gegebenenfalls (ggf.)','se for o caso'],['beziehungsweise (bzw.)','ou, respectivamente'],['hinsichtlich','com relação a'],['im Hinblick auf','tendo em vista, com relação a'],['darüber hinaus','além disso'],['letztendlich','no fim das contas'],['insgesamt','no total, de modo geral'],['der Aspekt','o aspecto'],['der Zusammenhang','a relação, o contexto']]},
 {t:'mc',q:'Die neue Regel ___ sich positiv auf die Arbeitszeit aus.',opts:['wirkt','trägt','führt'],a:0},
 {t:'mc',q:'Es hat sich ___, dass die Daten falsch waren.',opts:['herausgestellt','hervorgehoben','berücksichtigt'],a:0},
 {t:'mc',q:'Für die Stelle sind gute Englischkenntnisse ___.',opts:['erforderlich','vorhanden','gering'],a:0},
 {t:'gap',q:'Jeder kann zum Klimaschutz ___. (contribuir)',a:['beitragen']},
 {t:'gap',q:'Die Kosten sind ___ höher als geplant. (consideravelmente)',a:['erheblich']},
 {t:'gap',q:'Bitte bringen Sie ___ eine Kopie Ihres Ausweises mit. (se for o caso)',a:['gegebenenfalls','ggf.']},
 {t:'match',q:'Ligue.',pairs:[['gewährleisten','garantir'],['bewältigen','dar conta de'],['zahlreich','numeroso'],['umfassend','abrangente'],['letztendlich','no fim das contas']]},
 {t:'tr',de:'O problema afeta todos os moradores.',a:['Das Problem betrifft alle Bewohner.','Das Problem betrifft alle Anwohner.','Das Problem betrifft alle Einwohner.']}
]}],
resumen:`<h3>Prova B2</h3><p>Lesen 65 min (5 partes) · Hören ~40 min (4 partes) · Schreiben 75 min (fórum ~150 + mensagem formal ~100 palavras) · Sprechen ~15 min (apresentação + discussão). Para passar: 60 % por módulo.</p>
<h3>Redemittel</h3><p class="es-t">Mein Vortrag besteht aus drei Teilen. · In meinem Heimatland … · Das mag sein, aber … · Ich gebe dir recht, was … betrifft. · Wir sind uns also einig, dass …</p>
<h3>Prüfungswörter</h3><p class="es-t">berücksichtigen · sich auswirken auf · beitragen zu · gewährleisten · erheblich · erforderlich · gegebenenfalls · darüber hinaus · letztendlich</p>`});
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

{id:'s7',after:'k14',title:'Zu laut!',sub:'Ärger mit dem Nachbarn',text:`Im September sind Svenja und ich in eine größere WG-Wohnung in Altona gezogen – drei Zimmer, dritter Stock, ohne Aufzug. Wir waren sehr glücklich. Aber nach zwei Wochen lag ein Zettel in meinem Briefkasten: „Liebe Nachbarinnen, abends ist es bei Ihnen sehr laut. Bitte denken Sie an die {Ruhezeit|horário de silêncio} ab 22 Uhr. Gruß, K. Hansen (2. Stock)“

Ich war {überrascht|surpresa}. Wir hören doch keine laute Musik! Dann habe ich verstanden: Ich habe oft {Spätdienst|turno da tarde} und komme erst um elf Uhr nach Hause. Dann dusche ich und koche noch etwas – und meine Schuhe sind laut auf dem Holzboden.

Ich habe bei Herrn Hansen geklingelt. „Entschuldigung, ich wusste nicht, dass man das unten so gut hört. Ich arbeite oft spät, weil ich Krankenpflegerin bin.“ Herr Hansen war plötzlich ganz freundlich: „Ach so! Meine Tochter ist auch Krankenschwester. Könnten Sie vielleicht abends {Hausschuhe|chinelos (de usar em casa)} tragen?“ – „Natürlich!“ Jetzt grüßen wir uns jeden Tag im Treppenhaus.`,
de:`Em setembro a Svenja e eu nos mudamos para um apartamento maior em Altona – três quartos, terceiro andar, sem elevador. Estávamos muito felizes. Mas depois de duas semanas tinha um bilhete na minha caixa de correio: „Caras vizinhas, à noite vocês fazem muito barulho. Por favor, lembre-se do horário de silêncio a partir das 22h. Atenciosamente, K. Hansen (2º andar)“\n\nFiquei surpresa. A gente não escuta música alta! Aí entendi: muitas vezes faço o turno da tarde e só chego em casa às onze. Aí tomo banho e ainda cozinho alguma coisa – e meus sapatos fazem barulho no piso de madeira.\n\nToquei a campainha do Sr. Hansen. „Desculpe, eu não sabia que dava para ouvir tão bem lá embaixo. Trabalho até tarde muitas vezes porque sou enfermeira.“ O Sr. Hansen de repente ficou muito simpático: „Ah, entendi! A minha filha também é enfermeira. A senhora poderia talvez usar chinelos à noite?“ – „Claro!“ Agora a gente se cumprimenta todo dia na escada.`,
qs:[{q:'Warum war es bei Camila laut?',opts:['Ihre Schuhe waren laut auf dem Holzboden.','Sie hat laute Musik gehört.','Sie hat eine Party gemacht.'],a:0},{q:'Was soll Camila abends tragen?',opts:['Hausschuhe','Stiefel','nichts'],a:0},{t:'tf',q:'Herr Hansen wohnt über Camila.',a:false},{t:'tf',q:'Herr Hansens Tochter ist Krankenschwester.',a:true},{t:'gap',q:'Die Ruhezeit beginnt um ___ Uhr.',a:['22|zweiundzwanzig']},{t:'gap',q:'Camila kommt oft spät nach Hause, weil sie ___ hat.',a:['Spätdienst']}]},

{id:'s8',after:'k17',title:'Herr Petersen erzählt',sub:'Hamburg früher und heute',text:`An einem Sonntag hat Herr Petersen mich zum Kaffee eingeladen. Er ist siebenundsiebzig Jahre alt und wohnt seit fünfzig Jahren in Altona. An der Wand hängen alte Fotos vom Hafen.

„Früher war hier alles anders“, hat er erzählt. „Als junger Mann musste ich jeden Tag um fünf Uhr am Hafen sein. Ich war {Hafenarbeiter|estivador}. Wir konnten nicht viel verdienen, aber wir waren zufrieden. Die Mieten waren viel billiger als heute, und es gab weniger Autos.“

„Wollten Sie nie weg aus Hamburg?“, habe ich gefragt. „Doch! Ich wollte nach Brasilien fahren, auf einem großen Schiff. Aber dann habe ich meine Frau kennengelernt.“ Er hat gelächelt. „Das war die beste {Entscheidung|decisão} meines Lebens.“

Zum Schluss hat er mir eine alte Postkarte gezeigt: Recife, 1965. „Die hat mir ein Freund geschickt“, hat er gesagt. „Jetzt kenne ich endlich jemanden aus dieser Stadt!“`,
de:`Num domingo o Sr. Petersen me convidou para um café. Ele tem setenta e sete anos e mora em Altona há cinquenta anos. Na parede há fotos antigas do porto.\n\n„Antigamente aqui era tudo diferente“, ele contou. „Quando jovem, eu tinha que estar no porto todos os dias às cinco horas. Eu era estivador. Não dava para ganhar muito, mas a gente era feliz. Os aluguéis eram muito mais baratos que hoje, e havia menos carros.“\n\n„O senhor nunca quis sair de Hamburgo?“, perguntei. „Quis, sim! Eu queria ir para o Brasil, num navio grande. Mas aí conheci a minha esposa.“ Ele sorriu. „Foi a melhor decisão da minha vida.“\n\nNo final ele me mostrou um cartão-postal antigo: Recife, 1965. „Um amigo me mandou“, ele disse. „Agora finalmente conheço alguém dessa cidade!“`,
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
qs:[{q:'Was hat Camila gekocht?',opts:['Feijoada','Fischbrötchen','Pasta'],a:0},{q:'Warum macht Camila die B1-Prüfung?',opts:['Sie braucht die Anerkennung als Krankenpflegerin.','Sie will studieren.','Ihre Eltern wollen das.'],a:0},{t:'tf',q:'Am Anfang hat Camila alles gut verstanden.',a:false},{t:'tf',q:'Camilas Eltern waren noch nie in Europa.',a:true},{t:'gap',q:'Manchmal träumt Camila sogar auf ___.',a:['Deutsch']},{t:'gap',q:'Im Sommer werden ihre ___ sie besuchen.',a:['Eltern']}]},

{id:'s11',after:'k27',title:'Papiere, Papiere',sub:'Camila und die Anerkennung',text:`Als ich nach Hamburg kam, dachte ich: Ich bin Krankenpflegerin, ich habe fünf Jahre in Recife gearbeitet – das reicht. Aber in Deutschland muss ein ausländischer {Abschluss|diploma} zuerst anerkannt werden. Bis dahin durfte ich im Krankenhaus nur als Pflegehelferin arbeiten.

Im Frühling bekam ich endlich einen Termin bei der Behörde, die für die Anerkennung {zuständig|responsável} ist. Die Sachbearbeiterin, eine freundliche Frau mit roter Brille, sah sich meine Unterlagen genau an. „Ihr Zeugnis wurde schon übersetzt, sehr gut. Aber die Liste der Fächer fehlt noch“, sagte sie. „Die muss von Ihrer Hochschule in Recife geschickt werden.“

Ich schrieb sofort eine E-Mail nach Brasilien. Es dauerte sechs Wochen, bis die Liste ankam. Dann wurde alles geprüft. Im August bekam ich einen Brief, den ich dreimal lesen musste: Meine Ausbildung wurde „teilweise“ anerkannt. Ich sollte einen {Anpassungslehrgang|curso de adaptação} machen – sechs Monate, neben der Arbeit.

Zuerst war ich enttäuscht. Aber Aylin, die schon viele Kolleginnen aus dem Ausland kennengelernt hat, sagte: „Das ist ganz normal. Der Lehrgang ist gut, da lernst du die deutschen Regeln und die Fachwörter.“

Im Kurs saßen Pflegekräfte aus elf Ländern. Neben mir saß Tomás, ein Krankenpfleger, der aus Kolumbien kommt. In der Pause tranken wir Kaffee und lachten über die deutsche {Bürokratie|burocracia}. „Weißt du, was das längste Wort war, das ich hier gelernt habe?“, fragte er. „Anerkennungsverfahren!“`,
de:`Quando cheguei a Hamburgo, pensei: sou enfermeira, trabalhei cinco anos no Recife – isso basta. Mas na Alemanha um diploma estrangeiro primeiro precisa ser reconhecido. Até lá, eu só podia trabalhar no hospital como auxiliar de enfermagem.\n\nNa primavera finalmente consegui um horário no órgão que é responsável pelo reconhecimento. A funcionária, uma mulher simpática de óculos vermelhos, olhou os meus documentos com atenção. „O seu histórico já foi traduzido, muito bem. Mas ainda falta a lista das disciplinas“, ela disse. „Ela precisa ser enviada pela sua faculdade no Recife.“\n\nEscrevi na hora um e-mail para o Brasil. Levou seis semanas até a lista chegar. Depois tudo foi analisado. Em agosto recebi uma carta que precisei ler três vezes: a minha formação foi reconhecida „parcialmente“. Eu deveria fazer um curso de adaptação – seis meses, junto com o trabalho.\n\nPrimeiro fiquei decepcionada. Mas a Aylin, que já conheceu muitas colegas do exterior, disse: „Isso é totalmente normal. O curso é bom, lá você aprende as regras alemãs e os termos técnicos.“\n\nNo curso havia profissionais de enfermagem de onze países. Ao meu lado sentava o Tomás, um enfermeiro que vem da Colômbia. No intervalo tomávamos café e ríamos da burocracia alemã. „Sabe qual foi a palavra mais comprida que eu aprendi aqui?“, ele perguntou. „Anerkennungsverfahren!“ (processo de reconhecimento)`,
qs:[{q:'Als was durfte Camila vor der Anerkennung arbeiten?',opts:['als Pflegehelferin','als Ärztin','gar nicht'],a:0},{q:'Was fehlte bei den Unterlagen?',opts:['die Liste der Fächer','die Übersetzung des Zeugnisses','ihr Pass'],a:0},{t:'tf',q:'Camilas Ausbildung wurde ganz anerkannt.',a:false},{t:'tf',q:'Der Anpassungslehrgang dauert sechs Monate.',a:true},{t:'gap',q:'Tomás kommt aus ___.',a:['Kolumbien']},{t:'gap',q:'Die Liste musste von der ___ in Recife geschickt werden.',a:['Hochschule']}]},

{id:'s12',after:'k30',title:'Nachtdienst',sub:'Eine unruhige Nacht auf Station 4',text:`Nachdem ich die Übergabe gemacht hatte, war es auf der Station zuerst ganz ruhig. Um Mitternacht hatte ich alle Patienten einmal besucht, und ich setzte mich mit einem Tee ins Schwesternzimmer, um die {Dokumentation|registros (de enfermagem)} zu schreiben.

Um halb drei klingelte es in Zimmer 12. Frau Möller, eine Patientin, die schon neunzig Jahre alt ist, lag nicht mehr im Bett, sondern auf dem Boden. Sie war allein zur Toilette gegangen und {gestürzt|caiu (queda)}. „Ich wollte niemanden wecken“, flüsterte sie. Ich drückte sofort den Notknopf, und zwei Minuten später war Dr. Krüger da. Zum Glück hatte sie sich nichts gebrochen, nur der Arm tat weh.

Während der Arzt sie untersuchte, hielt ich ihre Hand. Sie erzählte mir, dass sie früher selbst Krankenschwester gewesen war – in den Sechzigerjahren, hier in Hamburg. „Damals hatten wir keine Computer und keine Notknöpfe“, lachte sie. „Wenn ich jung wäre, würde ich sofort wieder in der Pflege arbeiten.“

Um sechs Uhr morgens kam Aylin zum Frühdienst. Ich war so müde, dass ich kaum noch sprechen konnte. „Du bist ja ganz blass! War die Nacht so anstrengend?“, fragte sie. Ich erzählte ihr von Frau Möller.

Bevor ich nach Hause ging, schaute ich noch einmal in Zimmer 12. Frau Möller schlief. Auf ihrem Tisch lag ein Zettel: „Danke, Schwester Camila. Sie sind eine wunderbare Kollegin – auch für eine alte Krankenschwester wie mich.“`,
de:`Depois que eu tinha feito a passagem de plantão, a ala primeiro ficou bem tranquila. À meia-noite eu já tinha visitado todos os pacientes uma vez e me sentei com um chá na sala das enfermeiras para escrever os registros.\n\nÀs duas e meia tocou a campainha no quarto 12. A Sra. Möller, uma paciente que já tem noventa anos, não estava mais na cama, e sim no chão. Ela tinha ido sozinha ao banheiro e caído. „Eu não queria acordar ninguém“, ela sussurrou. Apertei imediatamente o botão de emergência, e dois minutos depois o Dr. Krüger estava lá. Por sorte ela não tinha quebrado nada, só o braço doía.\n\nEnquanto o médico a examinava, segurei a mão dela. Ela me contou que antigamente ela mesma tinha sido enfermeira – nos anos sessenta, aqui em Hamburgo. „Naquela época não tínhamos computadores nem botões de emergência“, ela riu. „Se eu fosse jovem, voltaria na hora a trabalhar na enfermagem.“\n\nÀs seis da manhã a Aylin chegou para o plantão da manhã. Eu estava tão cansada que mal conseguia falar. „Você está toda pálida! A noite foi tão cansativa assim?“, ela perguntou. Contei a ela sobre a Sra. Möller.\n\nAntes de ir para casa, olhei mais uma vez no quarto 12. A Sra. Möller dormia. Na mesa dela havia um bilhete: „Obrigada, enfermeira Camila. A senhora é uma colega maravilhosa – também para uma velha enfermeira como eu.“`,
qs:[{q:'Was ist mit Frau Möller passiert?',opts:['Sie ist gestürzt.','Sie hatte Fieber.','Sie konnte nicht schlafen.'],a:0},{q:'Was war Frau Möller früher von Beruf?',opts:['Krankenschwester','Ärztin','Lehrerin'],a:0},{t:'tf',q:'Frau Möller hat sich den Arm gebrochen.',a:false},{t:'tf',q:'Camila hat den Notknopf gedrückt.',a:true},{t:'gap',q:'Um sechs Uhr kam Aylin zum ___.',a:['Frühdienst']},{t:'gap',q:'Frau Möller ist schon ___ Jahre alt.',a:['neunzig|90']}]},

{id:'s13',after:'k33',title:'Svenja zieht aus',sub:'Abschied und eine neue Mitbewohnerin',text:`Ich wusste schon lange, dass Svenja verliebt war. Jedes Wochenende fuhr sie nach Berlin, um ihren Freund Paul zu besuchen. Trotzdem war ich überrascht, als sie an einem Sonntagabend sagte: „Camila, ich muss dir etwas sagen. Ich ziehe im März zu Paul.“

Zuerst sagte ich nichts. Svenja war nicht nur meine Mitbewohnerin, sondern auch meine erste Freundin in Hamburg. Sie hatte mir alles gezeigt: den Supermarkt, die Mülltonnen, die {Pfandflaschen|garrafas retornáveis}. „Je länger ich darüber nachdenke, desto trauriger werde ich“, sagte ich. Svenja umarmte mich. „Berlin ist nur zwei Stunden mit dem Zug. Du besuchst mich, versprochen?“

Dann mussten wir eine neue Mitbewohnerin finden. Wir schrieben eine Anzeige: „Zimmer in netter WG in Altona, 18 m², ab März. Wir suchen eine Person, die weder Raucher noch Langschläfer ist und den Müll ordentlich trennt.“ Innerhalb von zwei Tagen bekamen wir sechzig Nachrichten!

Wir luden fünf Leute zum Kennenlernen ein. Ein Student wollte sofort wissen, ob er seine Band im Wohnzimmer proben lassen könnte. Eine Frau fragte nur nach dem Internet. Die Letzte war Mira, eine Lehrerin aus Polen, die gerade eine Weiterbildung in Hamburg machte. Sie brachte selbst gebackenen Kuchen mit und stellte viele Fragen über die Nachbarn und über Brasilien.

„Sie ist perfekt“, flüsterte Svenja, als Mira gegangen war. Ich stimmte zu. Obwohl ich Svenja vermissen werde, freue ich mich jetzt auf ein neues Kapitel.`,
de:`Eu já sabia havia muito tempo que a Svenja estava apaixonada. Todo fim de semana ela ia a Berlim para visitar o namorado, o Paul. Mesmo assim fiquei surpresa quando, num domingo à noite, ela disse: „Camila, preciso te contar uma coisa. Vou morar com o Paul em março.“\n\nPrimeiro não disse nada. A Svenja não era só a minha colega de apartamento, mas também a minha primeira amiga em Hamburgo. Ela tinha me mostrado tudo: o supermercado, as lixeiras, as garrafas retornáveis. „Quanto mais eu penso nisso, mais triste eu fico“, eu disse. A Svenja me abraçou. „Berlim fica só a duas horas de trem. Você vem me visitar, promete?“\n\nDepois tivemos que encontrar uma nova colega de apartamento. Escrevemos um anúncio: „Quarto em república simpática em Altona, 18 m², a partir de março. Procuramos uma pessoa que não seja nem fumante nem dorminhoca e que separe o lixo direitinho.“ Em dois dias recebemos sessenta mensagens!\n\nConvidamos cinco pessoas para nos conhecermos. Um estudante quis saber na hora se podia deixar a banda dele ensaiar na sala. Uma mulher só perguntou sobre a internet. A última foi a Mira, uma professora da Polônia que estava fazendo uma capacitação em Hamburgo. Ela trouxe um bolo feito por ela mesma e fez muitas perguntas sobre os vizinhos e sobre o Brasil.\n\n„Ela é perfeita“, sussurrou a Svenja quando a Mira foi embora. Eu concordei. Embora eu vá sentir falta da Svenja, agora estou ansiosa por um novo capítulo.`,
qs:[{q:'Warum zieht Svenja aus?',opts:['Sie zieht zu ihrem Freund nach Berlin.','Sie hat Streit mit Camila.','Die Miete ist zu teuer.'],a:0},{q:'Wer ist Mira?',opts:['eine Lehrerin aus Polen','eine Studentin mit einer Band','Svenjas Schwester'],a:0},{t:'tf',q:'Auf die Anzeige haben nur wenige Leute geantwortet.',a:false},{t:'tf',q:'Die neue Mitbewohnerin soll nicht rauchen.',a:true},{t:'gap',q:'Mit dem Zug braucht man nach Berlin nur zwei ___.',a:['Stunden']},{t:'gap',q:'Mira hat einen ___ mitgebracht.',a:['Kuchen']}]},

{id:'s14',after:'k35',title:'Die Prüfung',sub:'Camila macht den B1-Test',text:`Wegen des Streiks bei der Bahn musste ich am Prüfungstag schon um sechs Uhr aufstehen und mit dem Fahrrad fahren. Trotz des kalten Regens kam ich pünktlich an – nass, aber ruhig. Im Prüfungsraum saßen zwanzig Leute, die genauso nervös aussahen wie ich.

Das Lesen war leichter, als ich gedacht hatte. Ein Text handelte von einem Krankenhaus, das Roboter in der Pflege testet – das kannte ich ja! Beim Hören war es schwieriger: Während der Radiodiskussion musste ich so schnell lesen und hören, dass ich eine Frage vergessen habe. Ich hätte mir die Fragen vorher besser durchlesen sollen.

In der mündlichen Prüfung war meine Partnerin eine junge Frau aus Syrien. Wir sollten zusammen eine Abschiedsfeier für einen Kollegen planen. Sie wollte unbedingt in ein teures Restaurant, ich wollte lieber im Büro feiern. Am Ende haben wir uns geeinigt: ein gemütliches Picknick im Park. Die Prüferin lächelte.

Drei Wochen später kam ein dicker Umschlag. Meine Eltern, die gerade zu Besuch in Hamburg waren, saßen neben mir am Küchentisch. Mein Vater, der kein Wort Deutsch versteht, fragte immer wieder: „E aí? E aí?“ Ich öffnete den Brief: bestanden! Im Schreiben hatte ich sogar fast die volle Punktzahl.

Am Abend fuhren wir zu fünft zum Hafen: meine Eltern, Aylin, Mira und ich. Wir aßen Fischbrötchen, sahen die beleuchteten Schiffe und tranken auf das bestandene Zertifikat. Wenn mir vor zwei Jahren jemand gesagt hätte, dass ich einmal auf Deutsch eine Prüfung bestehe, hätte ich gelacht.`,
de:`Por causa da greve dos trens, no dia da prova eu tive que levantar já às seis e ir de bicicleta. Apesar da chuva fria, cheguei pontualmente – molhada, mas calma. Na sala da prova havia vinte pessoas que pareciam tão nervosas quanto eu.\n\nA leitura foi mais fácil do que eu tinha pensado. Um texto tratava de um hospital que testa robôs na enfermagem – isso eu conhecia! Na compreensão auditiva foi mais difícil: durante a discussão no rádio eu tinha que ler e ouvir tão rápido que esqueci uma pergunta. Eu deveria ter lido as perguntas melhor antes.\n\nNa prova oral, minha parceira era uma jovem da Síria. Tínhamos que planejar juntas uma festa de despedida para um colega. Ela queria de qualquer jeito ir a um restaurante caro, eu preferia comemorar no escritório. No fim, chegamos a um acordo: um piquenique aconchegante no parque. A examinadora sorriu.\n\nTrês semanas depois chegou um envelope grosso. Meus pais, que estavam justamente visitando Hamburgo, estavam sentados ao meu lado na mesa da cozinha. Meu pai, que não entende nenhuma palavra de alemão, perguntava sem parar: „E aí? E aí?“ Abri a carta: aprovada! Na escrita eu tinha tirado quase a pontuação máxima.\n\nÀ noite fomos em cinco ao porto: meus pais, a Aylin, a Mira e eu. Comemos sanduíches de peixe, vimos os navios iluminados e brindamos ao certificado conquistado. Se alguém tivesse me dito há dois anos que um dia eu passaria numa prova em alemão, eu teria dado risada.`,
qs:[{q:'Warum musste Camila mit dem Fahrrad fahren?',opts:['wegen eines Streiks bei der Bahn','weil sie zu spät aufgestanden ist','weil es nicht geregnet hat'],a:0},{q:'Was war für Camila am schwierigsten?',opts:['das Hören','das Lesen','das Schreiben'],a:0},{t:'tf',q:'In der mündlichen Prüfung wollten beide sofort ins Restaurant.',a:false},{t:'tf',q:'Camila hat die Prüfung bestanden.',a:true},{t:'gap',q:'Ein Lesetext handelte von ___ in der Pflege.',a:['Robotern']},{t:'gap',q:'Am Abend haben sie am Hafen ___ gegessen.',a:['Fischbrötchen']}]},

{id:'s15',after:'k39',title:'Die Reportage',sub:'Camila in der Zeitung',text:`Im Herbst rief eine Journalistin vom „Hamburger Abendblatt“ im Krankenhaus an. Sie schrieb eine Reportage über Pflegekräfte aus dem Ausland und suchte jemanden, der von seinen Erfahrungen berichten konnte. Die Pflegedienstleitung fragte mich, ob ich dafür in Frage käme. Ich war nervös, sagte aber zu.

Das Gespräch dauerte fast zwei Stunden. Ich erzählte von der {Anerkennung|o reconhecimento (do diploma)}, vom Anpassungslehrgang und von Frau Möller. Ich sagte auch, dass die Arbeit in Deutschland anstrengend sei, weil überall Personal fehle, dass ich aber viel gelernt habe. Die Journalistin machte sich {Notizen|anotações} und nickte freundlich.

Eine Woche später lag die Zeitung auf dem Küchentisch. Mira hatte sie schon gekauft. Die Überschrift lautete: „Brasilianische Pflegerin: In Deutschland ist alles besser“. Ich las den Artikel zweimal. Dort stand, ich hätte gesagt, in Brasilien gebe es keine gute Ausbildung, und ich wolle nie wieder zurück. Das hatte ich so nie gesagt!

„Das lässt sich doch korrigieren“, meinte Mira. „Schreib der Redaktion einen Leserbrief.“ Am Abend setzte ich mich hin und schrieb: Ich hätte im Gespräch betont, dass meine Ausbildung in Recife sehr gut gewesen sei. Viele Kolleginnen aus Brasilien seien hervorragend {qualifiziert|qualificadas}. Die Überschrift gebe meine Meinung falsch wieder.

Zwei Tage später rief die Journalistin an und entschuldigte sich. Die Überschrift habe nicht sie, sondern die Redaktion ausgewählt. In der nächsten Ausgabe wurde mein Brief {abgedruckt|publicado}. Herr Petersen schnitt ihn aus und klebte ihn an seinen Kühlschrank – direkt neben das Foto vom Hafen.`,
de:`No outono, uma jornalista do „Hamburger Abendblatt“ ligou para o hospital. Ela escrevia uma reportagem sobre profissionais de enfermagem do exterior e procurava alguém que pudesse contar suas experiências. A chefia de enfermagem me perguntou se eu seria uma opção. Fiquei nervosa, mas aceitei.\n\nA conversa durou quase duas horas. Contei do reconhecimento do diploma, do curso de adaptação e da Sra. Möller. Disse também que o trabalho na Alemanha é cansativo porque falta pessoal em todo lugar, mas que aprendi muito. A jornalista fez anotações e acenava com a cabeça, simpática.\n\nUma semana depois, o jornal estava na mesa da cozinha. A Mira já tinha comprado. A manchete dizia: „Enfermeira brasileira: na Alemanha tudo é melhor“. Li o artigo duas vezes. Lá estava escrito que eu teria dito que no Brasil não haveria uma boa formação e que eu nunca mais quereria voltar. Eu nunca tinha dito isso assim!\n\n„Isso dá para corrigir“, disse a Mira. „Escreve uma carta de leitor para a redação.“ À noite me sentei e escrevi: na conversa eu teria enfatizado que a minha formação no Recife foi muito boa. Muitas colegas do Brasil seriam excelentemente qualificadas. A manchete reproduziria a minha opinião de forma errada.\n\nDois dias depois, a jornalista ligou e pediu desculpas. Não teria sido ela, mas a redação, que escolheu a manchete. Na edição seguinte, a minha carta foi publicada. O Sr. Petersen a recortou e colou na geladeira dele – bem ao lado da foto do porto.`,
qs:[{q:'Worüber schrieb die Journalistin?',opts:['über Pflegekräfte aus dem Ausland','über den Hamburger Hafen','über Krankenhäuser in Brasilien'],a:0},{q:'Was war an dem Artikel falsch?',opts:['Camilas Aussagen wurden falsch wiedergegeben.','Camilas Name war falsch geschrieben.','Das Foto zeigte eine andere Person.'],a:0},{t:'tf',q:'Camila hat gesagt, dass die Arbeit in Deutschland anstrengend sei.',a:true},{t:'tf',q:'Die Journalistin hat die Überschrift selbst ausgewählt.',a:false},{t:'gap',q:'Mira riet Camila, einen ___ an die Redaktion zu schreiben.',a:['Leserbrief']},{t:'gap',q:'Herr Petersen klebte den Brief an seinen ___.',a:['Kühlschrank']}]},

{id:'s16',after:'k42',title:'Zu viel',sub:'Wenn die Kraft nicht mehr reicht',text:`Im Winter waren auf Station 4 drei Stellen nicht besetzt. Zwei Kolleginnen waren krank, eine war in Elternzeit. Wer noch da war, machte Überstunden – oft ohne dass jemand danach fragte. Aylin übernahm fast jedes Wochenende einen zusätzlichen Dienst.

Mir fiel auf, dass sie sich veränderte. Sie, die sonst immer lachte, war {gereizt|irritada} und vergaß Dinge. Einmal stand sie minutenlang vor dem Medikamentenschrank, als ob sie nicht wüsste, was sie dort wollte. „Sie muss völlig erschöpft sein“, sagte Dr. Krüger leise zu mir. „Sie wird in den letzten Wochen kaum geschlafen haben.“

Nach einem Nachtdienst saßen wir zusammen in der {Umkleide|o vestiário}. Ich fragte vorsichtig, wie es ihr gehe. Zuerst sagte sie nur: „Geht schon.“ Dann fing sie an zu weinen. Sie könne nicht mehr abschalten, sie träume sogar von der Arbeit, und zu Hause schreie sie ihre Kinder an. „Ich habe das Gefühl, alle zu enttäuschen – die Patienten, das Team, meine Familie.“

Ich hörte zu und sagte dann etwas, was mir Herr Petersen einmal gesagt hatte: „Wer anderen helfen will, muss zuerst auf sich selbst {aufpassen|cuidar}.“ Am nächsten Tag ging Aylin zu ihrer Hausärztin. Sie wurde für vier Wochen krankgeschrieben, und die Ärztin empfahl ihr eine Kur.

Für das Team bedeutete das noch mehr Arbeit. Aber diesmal schrieben wir gemeinsam eine E-Mail an die Pflegedienstleitung: Zur Entlastung der Station {seien|seriam} dringend zusätzliche Kräfte nötig. Drei Wochen später kamen zwei Pflegekräfte von einer {Zeitarbeitsfirma|agência de trabalho temporário}. Es war keine perfekte Lösung, aber ein Anfang. Und als Aylin im März zurückkam, hatte sie einen neuen Satz: „Mein Handy bleibt nach dem Dienst im Spind.“`,
de:`No inverno, três vagas na Estação 4 não estavam preenchidas. Duas colegas estavam doentes, uma estava de licença-maternidade. Quem ainda estava lá fazia horas extras – muitas vezes sem que ninguém perguntasse depois. A Aylin assumia um plantão extra quase todo fim de semana.\n\nPercebi que ela estava mudando. Ela, que sempre ria, estava irritada e esquecia as coisas. Uma vez ficou minutos parada diante do armário de remédios, como se não soubesse o que queria ali. „Ela deve estar completamente esgotada“, disse o Dr. Krüger baixinho para mim. „Provavelmente ela mal dormiu nas últimas semanas.“\n\nDepois de um plantão noturno, sentamos juntas no vestiário. Perguntei com cuidado como ela estava. Primeiro ela só disse: „Dá pra levar.“ Depois começou a chorar. Disse que não conseguia mais se desligar, que sonhava até com o trabalho e que em casa gritava com os filhos. „Tenho a sensação de decepcionar todo mundo – os pacientes, a equipe, a minha família.“\n\nEu escutei e depois disse algo que o Sr. Petersen uma vez me disse: „Quem quer ajudar os outros precisa primeiro cuidar de si mesmo.“ No dia seguinte, a Aylin foi à médica de família. Ela recebeu atestado por quatro semanas, e a médica lhe recomendou um tratamento de repouso.\n\nPara a equipe, isso significou ainda mais trabalho. Mas desta vez escrevemos juntas um e-mail para a chefia de enfermagem: para aliviar a estação, seriam urgentemente necessários mais profissionais. Três semanas depois, chegaram dois profissionais de uma agência de trabalho temporário. Não foi uma solução perfeita, mas foi um começo. E quando a Aylin voltou em março, ela tinha uma frase nova: „O meu celular fica no armário depois do plantão.“`,
qs:[{q:'Warum gab es auf Station 4 so viel Arbeit?',opts:['Es fehlten mehrere Pflegekräfte.','Es gab neue Patientenzimmer.','Die Station war frisch renoviert.'],a:0},{q:'Was vermutete Dr. Krüger?',opts:['Aylin ist völlig erschöpft.','Aylin will kündigen.','Aylin ist krank vor Grippe.'],a:0},{t:'tf',q:'Aylin hat zuerst sofort über ihre Probleme gesprochen.',a:false},{t:'tf',q:'Die Hausärztin hat Aylin krankgeschrieben.',a:true},{t:'gap',q:'Das Team schrieb eine E-Mail an die ___.',a:['Pflegedienstleitung']},{t:'gap',q:'Nach ihrer Rückkehr bleibt Aylins Handy nach dem Dienst im ___.',a:['Spind']}]},

{id:'s17',after:'k45',title:'Station 4 bleibt!',sub:'Ein Team wehrt sich',text:`Im April kam die Nachricht per E-Mail: Aufgrund hoher Kosten solle Station 4 bis zum Jahresende geschlossen werden. Die Patienten würden auf andere Stationen verteilt, das Personal ebenfalls. Niemand hatte uns vorher gefragt.

Bei der nächsten Teamsitzung war die Stimmung schlecht. „Die tun so, als ob wir Möbel wären, die man einfach umstellen kann“, sagte Aylin. Tomás, der inzwischen auch bei uns arbeitete, schlug vor, eine {Petition|um abaixo-assinado} zu starten. „Anstatt uns nur zu ärgern, sollten wir zeigen, wie wichtig die Station für den Stadtteil ist.“

Die Idee verbreitete sich schnell. Patienten, Angehörige und sogar der Bäcker gegenüber sammelten Unterschriften. Frau Möllers Tochter, eine Anwältin, half uns, einen Brief an die {Geschäftsführung|a direção da empresa} zu formulieren. Darin stand, die Schließung gefährde die Versorgung vieler älterer Menschen in Altona. Innerhalb von sechs Wochen hatten wir über 8000 Unterschriften.

Dann meldete sich das Fernsehen. Ich sollte vor der Kamera erklären, warum die Station gebraucht wird. Mir zitterten die Hände, aber ich sprach einfach so, als ob ich mit Frau Möller reden würde: ruhig und ehrlich. Am Abend riefen meine Eltern aus Recife an – jemand hatte ihnen das Video geschickt.

Im Juli fand ein Gespräch mit der Geschäftsführung statt. Am Ende stand ein {Kompromiss|meio-termo}: Station 4 bleibt, sofern sie in eine Station für Altersmedizin umgewandelt wird. Dafür sollen fünf neue Stellen geschaffen werden. Herr Petersen, der natürlich auch unterschrieben hatte, meinte nur: „Siehst du, Camila? In Hamburg bewegt man etwas, indem man den Mund aufmacht.“`,
de:`Em abril veio a notícia por e-mail: por causa dos custos altos, a Estação 4 deveria ser fechada até o fim do ano. Os pacientes seriam distribuídos para outras estações, o pessoal também. Ninguém tinha nos perguntado antes.\n\nNa reunião seguinte da equipe, o clima estava ruim. „Eles agem como se fôssemos móveis que dá para simplesmente mudar de lugar“, disse a Aylin. O Tomás, que agora também trabalhava conosco, propôs lançar um abaixo-assinado. „Em vez de só ficar com raiva, deveríamos mostrar como a estação é importante para o bairro.“\n\nA ideia se espalhou rápido. Pacientes, familiares e até o padeiro em frente recolheram assinaturas. A filha da Sra. Möller, uma advogada, nos ajudou a formular uma carta para a direção. Nela dizia que o fechamento colocaria em risco o atendimento de muitos idosos em Altona. Em seis semanas tínhamos mais de 8.000 assinaturas.\n\nEntão a televisão entrou em contato. Eu deveria explicar diante da câmera por que a estação é necessária. As minhas mãos tremiam, mas falei simplesmente como se estivesse conversando com a Sra. Möller: calma e honesta. À noite meus pais ligaram do Recife – alguém tinha mandado o vídeo para eles.\n\nEm julho houve uma conversa com a direção. No fim, saiu um meio-termo: a Estação 4 fica, desde que seja transformada numa estação de geriatria. Para isso, devem ser criadas cinco vagas novas. O Sr. Petersen, que claro também tinha assinado, só disse: „Viu, Camila? Em Hamburgo a gente muda as coisas abrindo a boca.“`,
qs:[{q:'Warum sollte Station 4 geschlossen werden?',opts:['wegen hoher Kosten','wegen zu wenig Patienten','wegen eines Brandes'],a:0},{q:'Wer half beim Brief an die Geschäftsführung?',opts:['Frau Möllers Tochter','Herr Petersen','Camilas Eltern'],a:0},{t:'tf',q:'Das Team wurde vorher nach seiner Meinung gefragt.',a:false},{t:'tf',q:'Camila hat im Fernsehen über die Station gesprochen.',a:true},{t:'gap',q:'Innerhalb von sechs Wochen sammelten sie über 8000 ___.',a:['Unterschriften']},{t:'gap',q:'Station 4 bleibt, wird aber eine Station für ___.',a:['Altersmedizin']}]},

{id:'s18',after:'k47',title:'Zwei Heimaten',sub:'Drei Jahre später',text:`Heute habe ich zum ersten Mal selbst eine neue Kollegin begrüßt. Sie heißt Larissa, kommt aus Fortaleza und hat genau so große Augen gemacht wie ich vor drei Jahren, als sie die Station sah. Seit dem Frühjahr bin ich nämlich {Praxisanleiterin|instrutora prática (forma novos profissionais)}: Ich begleite Pflegekräfte aus dem Ausland in ihren ersten Monaten.

Rückblickend weiß ich, was mir damals geholfen hätte. Ich hätte mir früher Kontakte außerhalb der Arbeit suchen sollen, statt abends allein Serien zu schauen. Und ich hätte mich nicht für jeden Fehler im Deutschen schämen müssen. Deshalb sage ich Larissa als Erstes: „Fehler sind kein Problem. Folglich darfst du so viel fragen, wie du willst.“

Am Abend feierten wir Herrn Petersens achtzigsten Geburtstag in seinem kleinen Garten in Altona. Mira war da, Aylin mit ihren Kindern, Tomás und sogar Svenja, die extra aus Berlin gekommen war. Herr Petersen hielt eine kurze Rede. Er erzählte, wie er vor drei Jahren im Bus eine junge Frau mit einem riesigen Koffer getroffen hatte, die kaum Deutsch sprach. „Daraufhin habe ich ihr meine Telefonnummer gegeben – und seitdem habe ich eine Enkelin mehr.“

Später fragte mich Larissa, ob ich mich jetzt eher als Deutsche oder als Brasilianerin fühle. Ich dachte lange nach. In Recife vermisse ich das Franzbrötchen und den Regen über der Elbe. In Hamburg vermisse ich das Meer, das warm ist, und die laute Stimme meiner Mutter. „Ich glaube, ich muss mich nicht entscheiden“, antwortete ich. „Ich habe zwei {Heimaten|pátrias, lugares de casa} – und dennoch nur ein Herz.“

Herr Petersen hob sein Glas, so wie vor drei Jahren: „Auf Camila – und auf alle, die noch kommen!“`,
de:`Hoje dei as boas-vindas pela primeira vez, eu mesma, a uma colega nova. Ela se chama Larissa, é de Fortaleza e arregalou os olhos exatamente como eu há três anos, quando viu a estação. É que desde a primavera sou instrutora prática: acompanho profissionais de enfermagem do exterior nos primeiros meses.\n\nOlhando para trás, sei o que teria me ajudado naquela época. Eu deveria ter procurado contatos fora do trabalho mais cedo, em vez de ver séries sozinha à noite. E eu não deveria ter tido vergonha de cada erro no alemão. Por isso, a primeira coisa que digo à Larissa é: „Erros não são problema. Consequentemente, você pode perguntar o quanto quiser.“\n\nÀ noite, comemoramos os oitenta anos do Sr. Petersen no pequeno jardim dele em Altona. A Mira estava lá, a Aylin com os filhos, o Tomás e até a Svenja, que tinha vindo de Berlim só para isso. O Sr. Petersen fez um discurso curto. Contou como, três anos antes, encontrou no ônibus uma jovem com uma mala enorme, que mal falava alemão. „Em seguida dei a ela o meu número de telefone – e desde então tenho uma neta a mais.“\n\nMais tarde, a Larissa me perguntou se eu agora me sinto mais alemã ou brasileira. Pensei muito. No Recife sinto falta do Franzbrötchen e da chuva sobre o Elba. Em Hamburgo sinto falta do mar quentinho e da voz alta da minha mãe. „Acho que não preciso escolher“, respondi. „Tenho duas casas – e mesmo assim um só coração.“\n\nO Sr. Petersen levantou o copo, como três anos antes: „À Camila – e a todos que ainda vão chegar!“`,
qs:[{q:'Was ist Camilas neue Aufgabe?',opts:['Sie begleitet neue Pflegekräfte aus dem Ausland.','Sie leitet das ganze Krankenhaus.','Sie arbeitet als Ärztin.'],a:0},{q:'Was bereut Camila?',opts:['Sie hätte früher Kontakte außerhalb der Arbeit suchen sollen.','Sie hätte nicht nach Hamburg kommen sollen.','Sie hätte Medizin studieren sollen.'],a:0},{t:'tf',q:'Herr Petersen hat Camila im Bus kennengelernt.',a:true},{t:'tf',q:'Svenja konnte nicht zur Feier kommen.',a:false},{t:'gap',q:'Herr Petersen feierte seinen ___ Geburtstag. (80.)',a:['achtzigsten']},{t:'gap',q:'Camila sagt, sie habe zwei Heimaten und nur ein ___.',a:['Herz']}]}
);
;
/* ===== Deutschkurs – Häufige Wörter: pro Kapitel eine Extra-Lektion mit 20 häufigen Wörtern (häufigste zuerst) =====
   Auswahl nach Häufigkeit aus „FrequencyWords“ (Hermit Dave, OpenSubtitles 2018, CC BY-SA 4.0, github.com/hermitdave/FrequencyWords),
   nur Wörter, die der Kurs noch nicht als Vokabel hat; Namen, Flüche und Untertitel-Sonderwörter von Hand aussortiert, Grundform +
   Artikel und portugiesische Übersetzung von Hand. Diese Wortliste steht deshalb ebenfalls unter CC BY-SA 4.0. Korrekturen direkt hier. */
window.FREQ_DE=[
['wirklich','realmente, de verdade'],['lassen','deixar'],['gerade','agora mesmo; reto'],['wohl','provavelmente; bem'],['wieso','por quê'],['selbst','mesmo, próprio'],['bevor','antes de'],['halten','segurar; parar'],['echt','de verdade (coloquial)'],['das Glück','a sorte; a felicidade'],
['vorbei','passado, terminado'],['verrückt','louco'],['sich Sorgen machen','preocupar-se'],['einzig','único'],['überhaupt','afinal; de jeito nenhum (com nicht)'],['der Grund','o motivo; o fundo'],['der Schatz','o tesouro; meu bem (carinhoso)'],['niemals','nunca'],['die Schuld','a culpa; a dívida'],['verlassen','sair de; abandonar'],
['ernst','sério'],['eben','justamente; agora há pouco'],['die Chance','a chance'],['entschuldigen','desculpar'],['bloß','só, apenas'],['die Sorge','a preocupação'],['einige','alguns'],['das Blut','o sangue'],['das Herz','o coração'],['irgendwie','de algum jeito'],
['irgendwas','alguma coisa (coloquial)'],['klingen','soar'],['außer','exceto, além de'],['setzen','pôr, colocar (sich setzen = sentar-se)'],['retten','salvar'],['hierher','para cá'],['die Menge','a quantidade; a multidão'],['trotzdem','mesmo assim'],['der König','o rei'],['deswegen','por isso'],
['nennen','chamar, nomear'],['sich erinnern','lembrar-se'],['völlig','completamente'],['der Kumpel','o parceiro, o amigo (coloquial)'],['die Luft','o ar'],['verschwinden','desaparecer'],['zwar … aber','é verdade que … mas'],['vertrauen','confiar'],['nachdem','depois que'],['das Gefühl','o sentimento; a sensação'],
['die Erde','a Terra; a terra'],['der Rest','o resto'],['eher','antes, de preferência; mais propriamente'],['das Gefängnis','a prisão'],['das Opfer','a vítima; o sacrifício'],['solche','tais, desse tipo'],['der Versuch','a tentativa'],['sich vorstellen','imaginar; apresentar-se'],['sobald','assim que'],['nochmal','mais uma vez'],
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
['erhalten','receber; conservar'],['das Gebäude','o prédio'],['das Schicksal','o destino'],['das Zeichen','o sinal'],['der Richter / die Richterin','o juiz / a juíza'],['besorgt','preocupado'],['das Vergnügen','o prazer'],['herausfinden','descobrir'],['die Königin','a rainha'],['der Soldat / die Soldatin','o soldado / a soldado'],
['allerdings','no entanto'],['verantwortlich','responsável'],['erkennen','reconhecer'],['übernehmen','assumir'],['die Gegend','a região, a área'],['das Gesetz','a lei'],['gemeinsam','juntos, em comum'],['der Schritt','o passo'],['nah','perto'],['übrig','sobrando'],
['die Spur','o rastro'],['werfen','jogar, lançar'],['die Freude','a alegria'],['verzeihen','perdoar'],['der Respekt','o respeito'],['sich etwas leisten','dar-se ao luxo de'],['die Schwierigkeit','a dificuldade'],['die Hälfte','a metade'],['der Planet','o planeta'],['drehen','girar; filmar'],
['der Erfolg','o sucesso'],['besorgen','arranjar, providenciar'],['das Verbrechen','o crime'],['der Schmerz','a dor'],['schließlich','finalmente; afinal'],['rennen','correr'],['zufällig','por acaso'],['der Feind / die Feindin','o inimigo / a inimiga'],['entlang','ao longo de'],['die Freiheit','a liberdade'],
['sich unterhalten','conversar'],['der Schaden','o dano'],['lächerlich','ridículo'],['schätzen','estimar; apreciar'],['die Energie','a energia'],['bestehen','passar (prova); existir'],['betrunken','bêbado'],['das Verhalten','o comportamento'],['das Loch','o buraco'],['das Interesse','o interesse'],
['treten','pisar; chutar'],['der Quatsch','a bobagem'],['die Neuigkeit','a novidade'],['verbringen','passar (tempo)'],['der Meter','o metro'],['aufpassen','prestar atenção; tomar cuidado'],['der Engel','o anjo'],['offenbar','pelo visto'],['die Gelegenheit','a oportunidade'],['der Zeitpunkt','o momento'],
['der Druck','a pressão'],['der Haufen','o monte'],['der Auftrag','a tarefa, a encomenda'],['die Verantwortung','a responsabilidade'],['lächeln','sorrir'],['ernsthaft','sério, seriamente'],['das Dach','o telhado'],['die Folge','a consequência; o episódio'],['dankbar','grato'],['das Gehirn','o cérebro'],
['heilig','sagrado, santo'],['der Wahnsinn','a loucura'],['das Thema','o tema'],['überprüfen','verificar'],['anscheinend','pelo jeito'],['das Risiko','o risco'],['der Held / die Heldin','o herói / a heroína'],['nachdenken','refletir, pensar'],['die Runde','a rodada'],['der Großvater','o avô'],
['die Großmutter','a avó'],['das Gewissen','a consciência'],['der Zeuge / die Zeugin','a testemunha'],['atmen','respirar'],['der Streit','a briga'],['küssen','beijar'],['längst','há muito tempo'],['normalerweise','normalmente'],['beruhigen','acalmar'],['vollkommen','completamente; perfeito'],
['verfolgen','perseguir; acompanhar'],['der Zustand','o estado, a condição'],['erwähnen','mencionar'],['der Zufall','o acaso'],['wirken','fazer efeito; parecer'],['aufgeben','desistir'],['der Scherz','a brincadeira'],['überzeugt','convencido'],['bemerken','perceber'],['zählen','contar'],
['der Bürgermeister / die Bürgermeisterin','o prefeito / a prefeita'],['das Durcheinander','a bagunça'],['die Karriere','a carreira'],['die Akte','o dossiê, o processo (documentos)'],['die Erinnerung','a lembrança'],['lösen','resolver'],['der Zweifel','a dúvida'],['die Nerven (Pl.)','os nervos'],['entlassen','demitir; dar alta'],['die Szene','a cena'],
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
['die Wirkung','o efeito'],['die Umgebung','os arredores'],
['davon','disso, daquilo'],['der Hund','o cachorro'],['wovon','do quê, de quê'],['solange','enquanto'],['heraus','para fora (para cá)'],['herum','em volta, ao redor'],['das Zuhause','o lar'],['indem','ao (fazer algo), fazendo'],['das Volk','o povo'],['herein','para dentro (para cá)'],
['zuvor','antes'],['übel','ruim; enjoado'],['daher','por isso; de lá'],['worum','sobre o quê'],['sowas','uma coisa dessas (coloquial)'],['hinaus','para fora (para lá)'],['vorhin','agora há pouco'],['der Stein','a pedra'],['überlegen','pensar, refletir'],['wahnsinnig','louco; extremamente'],
['womit','com quê'],['nachher','depois, mais tarde'],['stehlen','roubar'],['dadurch','assim, por meio disso'],['verlangen','exigir; pedir'],['nirgendwo','em lugar nenhum'],['ausgehen','sair (para se divertir)'],['behandeln','tratar'],['zulassen','permitir, deixar'],['weiterhin','continuamente; ainda'],
['weitermachen','continuar'],['irgendein','algum, qualquer'],['trauen','confiar'],['verhaften','prender (polícia)'],['anhalten','parar'],['beten','rezar'],['gucken','olhar (coloquial)'],['überlassen','deixar a cargo de'],
['fressen','comer (animais)'],['zurückkehren','voltar'],['vermuten','supor'],['lecker','gostoso'],['sich irren','enganar-se'],['aufgrund','devido a'],
['heilen','curar'],['zusehen','assistir, observar'],['loslassen','soltar'],['erstaunlich','surpreendente'],['prüfen','verificar'],['erscheinen','aparecer; ser publicado'],['der Stern','a estrela'],['das Gedächtnis','a memória'],['die Wirklichkeit','a realidade'],['der Kreis','o círculo; o distrito'],
['die Ewigkeit','a eternidade'],['die Umstände (Pl.)','as circunstâncias'],['das Unglück','o azar; a desgraça'],['der Wissenschaftler / die Wissenschaftlerin','o cientista / a cientista'],['die Reaktion','a reação'],['die Identität','a identidade'],['das Dutzend','a dúzia'],['das Mitleid','a pena, a compaixão'],['die Wunde','a ferida'],['die Linie','a linha'],
['das Kreuz','a cruz'],['die Leidenschaft','a paixão'],['bereuen','arrepender-se de'],['umdrehen','virar'],['verbrennen','queimar'],['unglücklich','infeliz'],['der Sand','a areia'],['der Pfarrer / die Pfarrerin','o padre, o pastor / a pastora'],['berühren','tocar'],['verschwenden','desperdiçar'],
['angenehm','agradável'],['daheim','em casa'],['klauen','roubar (coloquial)'],['der Geruch','o cheiro'],['ungern','a contragosto'],['verbergen','esconder'],['betreten','entrar em (um lugar)'],['ausgerechnet','justamente (logo isso)'],['beibringen','ensinar'],['die Belohnung','a recompensa'],
['die Fakten (Pl.)','os fatos'],['erneut','de novo'],['der Flügel','a asa'],['das Gerücht','o boato'],['die Eile','a pressa'],['verhandeln','negociar'],['die Warnung','o aviso, o alerta'],['die Gemeinde','a comunidade; o município'],['das Seil','a corda'],['anschauen','olhar, ver'],
['einfallen','vir à mente'],['die Fantasie','a imaginação'],['womöglich','possivelmente'],['überraschen','surpreender'],['der Palast','o palácio'],['betrachten','observar, contemplar'],['der Widerstand','a resistência'],['das Original','o original'],['die Höhe','a altura'],['ignorieren','ignorar'],
['übersehen','não perceber, deixar passar'],['der Rauch','a fumaça'],['der Hubschrauber','o helicóptero'],['der Haken','o gancho; o porém'],['die Sünde','o pecado'],['das Militär','as forças armadas'],['der Hintergrund','o fundo; o contexto'],['der Kram','as tralhas (coloquial)'],['keinerlei','nenhum tipo de'],['umso','tanto mais'],
['unhöflich','mal-educado'],['heben','levantar, erguer'],['einstellen','contratar; ajustar'],['senden','enviar; transmitir'],['das Badezimmer','o banheiro'],['doppelt','duplo, em dobro'],['der Vergleich','a comparação'],['großzügig','generoso'],['die Einstellung','a atitude; a configuração'],['köstlich','delicioso'],
['der Weihnachtsmann','o Papai Noel'],['hervorragend','excelente'],['die Puppe','a boneca'],['der Überfall','o assalto'],['unwichtig','sem importância'],['die Übung','o exercício; a prática'],['der Ausdruck','a expressão'],['pleite','falido, sem dinheiro'],['beleidigt','ofendido'],['der Knopf','o botão'],
['mächtig','poderoso'],['sinnlos','sem sentido'],['die Milliarde','o bilhão'],['sich schämen','ter vergonha'],['der Sender','a emissora; o remetente'],['räumen','arrumar; desocupar'],['die Ausrede','a desculpa (pretexto)'],['romantisch','romântico'],['sich bedanken','agradecer'],['die Lieferung','a entrega'],
['der Albtraum','o pesadelo'],['verlobt','noivo (comprometido)'],['sich amüsieren','divertir-se'],['weglaufen','fugir'],['der Abstand','a distância'],['das Bewusstsein','a consciência'],['unangenehm','desagradável'],['die Ausrüstung','o equipamento'],['der Segen','a bênção'],['die Kehle','a garganta'],
['die Krone','a coroa'],['ersetzen','substituir'],['das Spielzeug','o brinquedo'],['der Ausweg','a saída (solução)'],['illegal','ilegal'],['die Hauptsache','o principal'],['die Version','a versão'],['jahrelang','durante anos'],['der Puls','o pulso'],['die Rettung','o resgate, a salvação'],
['sozusagen','por assim dizer'],['abwarten','esperar (para ver)'],['der Friedhof','o cemitério'],['der Irrtum','o engano'],['die Gegenwart','o presente (tempo)'],['durchaus','perfeitamente, bem que'],['grausam','cruel'],['apropos','a propósito'],['ansonsten','de resto; senão'],['das Missverständnis','o mal-entendido'],
['das Huhn','a galinha'],['das Tagebuch','o diário'],['die Konsequenz','a consequência'],['der Anblick','a visão (o que se vê)'],['der Handel','o comércio'],['tapfer','valente'],['das Experiment','o experimento'],['das Muster','o padrão, a amostra'],['der Gewinn','o lucro; o prêmio'],['heftig','forte, intenso'],
['der Vorfall','o incidente'],['der Ruhm','a fama'],['der Kofferraum','o porta-malas'],['das Geständnis','a confissão'],['begreifen','compreender'],['der Blitz','o relâmpago'],['bezüglich','em relação a'],['faszinierend','fascinante'],['aufmerksam','atento'],['die Aufregung','a agitação, a empolgação'],
['der Felsen','a rocha'],['der Zorn','a ira'],['bestimmen','determinar'],['ausrichten','dar um recado'],['herrlich','maravilhoso'],['stürzen','cair; derrubar'],['unterbrechen','interromper'],['täuschen','enganar'],['der Betrug','a fraude'],['die Trauer','o luto, a tristeza'],
['die Anwesenheit','a presença'],['sich verlaufen','perder-se (a pé)'],['rechnen','calcular; contar com'],['wegnehmen','tirar'],['benötigen','precisar'],['der Beginn','o início'],['der Daumen','o polegar'],['bestrafen','punir'],['riesig','enorme'],['die Marke','a marca'],
['absichtlich','de propósito'],['sowie','assim como, e também'],['die Religion','a religião'],['verzichten auf','abrir mão de'],['die Existenz','a existência'],['das Drehbuch','o roteiro'],['der Zaun','a cerca'],['privat','privado'],['der Eimer','o balde'],['das Symbol','o símbolo'],
['die Unterwäsche','a roupa íntima'],['der Tropfen','a gota'],['die Aktion','a ação; a promoção'],['friedlich','pacífico'],['lediglich','apenas'],['beißen','morder'],['der Akzent','o sotaque'],['das Kompliment','o elogio'],['die Flamme','a chama'],['die Verhandlung','a negociação; a audiência'],
['letztendlich','no fim das contas'],['der Profi','o profissional'],['das Gelächter','as risadas'],['der Herzinfarkt','o infarto'],['sich hinlegen','deitar-se'],['die Nahrung','o alimento'],['der Knall','o estrondo'],['nebenbei','de passagem; paralelamente'],['die Veränderung','a mudança'],['der Affe','o macaco'],
['die Zwischenzeit','o meio-tempo'],['der Kanal','o canal'],['der Blutdruck','a pressão arterial'],['ausgeben','gastar'],['die Zwillinge (Pl.)','os gêmeos'],['das Testament','o testamento'],['das Gelände','o terreno, a área'],['der Regisseur / die Regisseurin','o diretor / a diretora (de cinema)'],['das Erbe','a herança'],['das Bargeld','o dinheiro vivo'],
['eklig','nojento'],['öffentlich','público'],['gerecht','justo'],['die Schicht','o turno; a camada'],['das Verhältnis','a relação; a proporção'],['die Socke','a meia'],['die Brieftasche','a carteira'],['die Vernunft','a razão, o bom senso'],['der Sprung','o salto'],['anständig','decente'],
['der Ofen','o forno'],['respektieren','respeitar'],['riskant','arriscado'],['erleichtert','aliviado'],['das Symptom','o sintoma'],['die Vorfahren (Pl.)','os antepassados'],['nutzlos','inútil'],['aussuchen','escolher'],['das Beileid','os pêsames'],['genügend','suficiente'],
['die Nachbarschaft','a vizinhança'],['überreden','persuadir'],['die Beschreibung','a descrição'],['der Sauerstoff','o oxigênio'],['angesichts','diante de'],['die Stirn','a testa'],['sanft','suave, delicado'],['aufbauen','montar, construir'],['der Anlass','a ocasião, o motivo'],['die Atmosphäre','o ambiente, a atmosfera'],
['die Krawatte','a gravata'],['niedlich','fofo'],['die Frisur','o penteado, o corte de cabelo'],['der Spruch','o ditado, a frase'],['die Schachtel','a caixinha'],['der Brunnen','a fonte; o poço'],['das Eigentum','a propriedade'],['der Gegensatz','o oposto, o contraste'],['die Entwicklung','o desenvolvimento'],['verbessern','melhorar; corrigir'],
['die Glocke','o sino'],['die Forschung','a pesquisa (científica)'],['die Oberfläche','a superfície'],['der Bär','o urso'],['die Vorschrift','a norma, a regra'],['beherrschen','dominar'],['das Detail','o detalhe'],['die Strategie','a estratégia'],['verteilen','distribuir'],['der Fuchs','a raposa'],
['logisch','lógico'],['die Persönlichkeit','a personalidade'],['streichen','pintar (parede); riscar'],['die Weisheit','a sabedoria'],['der Nacken','a nuca'],['tauchen','mergulhar'],['die Nadel','a agulha'],['exakt','exato'],['widerstehen','resistir'],['das Trinkgeld','a gorjeta'],
['ermitteln','investigar'],['die Vereinbarung','o acordo'],['harmlos','inofensivo'],['unbekannt','desconhecido'],['die Manieren (Pl.)','as boas maneiras'],['empfinden','sentir'],['quasi','praticamente'],['hauptsächlich','principalmente'],
['fangen','pegar, capturar'],['bewegen','mover'],['töten','matar'],['der Angriff','o ataque'],['der Polizist / die Polizistin','o policial / a policial'],['rufen','chamar; gritar'],['der Schuss','o tiro'],['fassen','agarrar; compreender'],['entkommen','escapar'],['die Bombe','a bomba'],
['der Knast','a cadeia (coloquial)'],['daraus','disso, daí'],['jagen','caçar; perseguir'],['die Tat','o ato, o feito'],['hinterlassen','deixar (para trás)'],['der Prinz / die Prinzessin','o príncipe / a princesa'],['die Kugel','a bala; a esfera'],['abgesehen von','à parte, exceto'],['der Idiot','o idiota'],['angreifen','atacar'],
['entführen','sequestrar'],['kapieren','sacar, entender (coloquial)'],['irgendjemand','alguém, qualquer pessoa'],['die Rache','a vingança'],['das Wesen','o ser; a essência'],['der Griff','o puxador, a maçaneta; o jeito de segurar'],['feuern','demitir (coloquial); disparar'],['die Meile','a milha'],['die Schande','a vergonha'],['das Pfund','a libra; meio quilo'],
['hingehen','ir lá'],['die Leiche','o cadáver'],['die Hexe','a bruxa'],['die Pistole','a pistola'],['derjenige / diejenige','aquele / aquela (que)'],['schnappen','pegar, agarrar'],['angehen','dizer respeito a'],['derselbe / dieselbe / dasselbe','o mesmo / a mesma'],['der Trottel','o bobo, o pateta'],['scheinen','parecer; brilhar'],
['der Trick','o truque'],['reinkommen','entrar (coloquial)'],['antun','fazer (mal) a alguém'],['die Kohle','o carvão; a grana (coloquial)'],['der Stich','a picada; a pontada'],['begraben','enterrar'],['der Riese','o gigante'],['abhauen','dar no pé, fugir'],['der Verräter / die Verräterin','o traidor / a traidora'],['herkommen','vir para cá'],
['vernichten','destruir, aniquilar'],['das Gewehr','o fuzil, a espingarda'],['sich befinden','encontrar-se, estar (formal)'],['der Champagner','o champanhe'],['die Zelle','a cela; a célula'],['ruinieren','arruinar'],['der Agent / die Agentin','o agente / a agente'],['der Anführer / die Anführerin','o / a líder (de um grupo)'],['das Unrecht','a injustiça'],['wessen','de quem'],
['brechen','quebrar'],['treiben','impulsionar; praticar (esporte)'],['das Versteck','o esconderijo'],['die Schlange','a cobra; a fila'],['der Sack','o saco'],['der / die Gefangene','o prisioneiro / a prisioneira'],['die Gnade','a misericórdia'],['erschaffen','criar'],['der Klang','o som'],['einsperren','trancar, prender'],
['die Schlacht','a batalha'],['erschrecken','assustar(-se)'],['der Offizier / die Offizierin','o oficial / a oficial'],['die Affäre','o caso (amoroso)'],['der Schnitt','o corte'],['der Bart','a barba'],['solch','tal, assim'],['der Fluch','a maldição'],['die Anklage','a acusação'],['der Feigling','o covarde'],
['der Scheck','o cheque'],['das Revier','a delegacia; o território'],['durchmachen','passar por (algo difícil)'],['der Schädel','o crânio'],['die Jagd','a caça'],['der Verbrecher / die Verbrecherin','o criminoso / a criminosa'],['die Maske','a máscara'],['die Verstärkung','o reforço'],['stinken','feder'],['der Magen','o estômago'],
['besessen','obcecado; possuído'],['die Truppe','a tropa'],['der Osten','o leste'],['clever','esperto'],['der Hass','o ódio'],['meinetwegen','por mim, tudo bem'],['der Ritter','o cavaleiro'],['der Fingerabdruck','a impressão digital'],['der Schwachsinn','a besteira'],['die Wüste','o deserto'],
['die Gabe','o dom'],['besiegen','vencer, derrotar'],['die Angelegenheit','o assunto, a questão'],['der Mord','o assassinato'],['auftauchen','aparecer, surgir'],['der Staatsanwalt / die Staatsanwältin','o promotor / a promotora'],['das Hirn','o cérebro (coloquial)'],['extrem','extremo'],['die Ratte','o rato (ratazana)'],['die Bedrohung','a ameaça'],
['begehen','cometer'],['nachsehen','ir ver, verificar'],['voran','adiante, à frente'],['der Jäger / die Jägerin','o caçador / a caçadora'],['der Zauber','a magia, o encanto'],['der Stahl','o aço'],['reinlegen','enganar, passar a perna'],['die Abmachung','o acordo, o combinado'],['die Höhle','a caverna'],['befreundet sein','ser amigo'],
['die Pille','a pílula'],['scheinbar','aparentemente'],['die Mauer','o muro'],['der Schluck','o gole'],['der Dummkopf','o bobo'],['bezweifeln','duvidar de'],['der Diamant','o diamante'],['der Käfig','a jaula'],['der Kommissar / die Kommissarin','o comissário / a comissária (de polícia)'],['bekämpfen','combater'],
['flehen','implorar'],['die Revolution','a revolução'],['die Ermittlung','a investigação'],['versetzen','transferir'],['reißen','rasgar, arrancar'],['der Narr','o tolo, o bobo da corte'],['darunter','embaixo; entre eles'],['außen','fora, por fora'],['die Munition','a munição'],['das Anzeichen','o sinal, o indício'],
['genial','genial'],['verwandeln','transformar'],['sich hinsetzen','sentar-se'],['der Drache','o dragão'],['der Verrat','a traição'],['taub','surdo']
];
{
const per=20;let i=0;
/* Wörter, die der Kurs schon als Vokabel hat, überspringen (sonst doppelte Karten, wenn neue Kapitel dazukommen) */
const inCourse=new Set();LANGS.de.course.units.forEach(u=>u.lessons.forEach(l=>l.steps.forEach(st=>{if(st.t==='vocab')st.items.forEach(it=>inCourse.add(it[0]));})));
const FQ=FREQ_DE.filter(w=>!inCourse.has(w[0]));
for(const u of LANGS.de.course.units){if(u.status==='soon')continue;const items=FQ.slice(i,i+per);i+=per;if(items.length<10)break;
  const steps=[];for(let k=0;k<items.length;k+=10)steps.push({t:'vocab',title:'Palavras frequentes ('+(k/10+1)+')',items:items.slice(k,k+10)});
  steps.push({t:'match',q:'O que significa …?',pairs:items.filter((_,j)=>j%4===1).slice(0,5)});
  u.lessons.push({id:'lf',title:'Palavras frequentes',desc:'20 palavras muito usadas no dia a dia',ab:true,freq:true,steps});/* ab: freiwillig, nicht in Liste/Fortschritt/Abschlusstest – Kachel unter Extras */}
}
;
/* ===== Deutschkurs: Übersetzungen der deutschen Beispiele in Erklärungen & Resumen (antippen → Blase, nur bei Erklärsprache Portugiesisch) =====
   Schlüssel = deutscher Text wie in der Erklärung (mit „Lucas“), Wert = Portugiesisch. Stand: A1–B2. Neue Erklärungen → hier ergänzen.
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
"null · eins · zwei · drei · vier · fünf · sechs · sieben · acht · neun · zehn · elf · zwölf · dreizehn … sechzehn · siebzehn … zwanzig": "zero · um · dois · três · quatro · cinco · seis · sete · oito · nove · dez · onze · doze · treze … dezesseis · dezessete … vinte",
"einundzwanzig": "vinte e um",
"dreißig": "trinta",
"hundert": "cem",
"hunderteins": "cento e um",
"zweihundert": "duzentos",
"tausend": "mil",
"Wie alt bist du? / Wie alt sind Sie?": "Quantos anos você tem? / Quantos anos o senhor tem?",
"Ich bin 28 Jahre alt.": "Tenho 28 anos.",
"Vorname · Familienname · Straße + Hausnummer · Postleitzahl + Wohnort · Geburtsdatum · Familienstand (ledig / verheiratet / geschieden) · Unterschrift": "Nome · sobrenome · rua + número · CEP + cidade · data de nascimento · estado civil (solteiro / casado / divorciado) · assinatura",
"zwo": "dois (ao telefone, para não confundir com drei)",
"zwei": "dois",
"drei": "três",
"Wo wohnen Sie? – In der Bergerstraße 12.": "Onde o senhor mora? – Na Bergerstraße 12.",
"Straße": "rua",
"Vorname": "nome",
"Familienname / Nachname": "sobrenome",
"Wann sind Sie geboren? – Am 14. März 1997.": "Quando o senhor nasceu? – Em 14 de março de 1997.",
"Wo sind Sie geboren? – In São Paulo.": "Onde o senhor nasceu? – Em São Paulo.",
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
"Herzlichen Glückwunsch! · Alles Gute! · Frohe Weihnachten! · Guten Rutsch! · Frohes neues Jahr!": "Parabéns! · Tudo de bom! · Feliz Natal! · Boa virada! · Feliz Ano-Novo!",
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
"Geht es bei dir um …? · Wie wäre es um …? · Um … kann ich leider nicht, da … · Das passt mir gut. · Einverstanden! · Treffen wir uns um … vor …": "Dá para você às …? · Que tal às …? · Às … infelizmente não posso, porque … · Fica bom para mim. · Combinado! · Vamos nos encontrar às … na frente de …",
"machen → ich machte, wir machten": "fazer → eu fazia/fiz, nós fazíamos/fizemos",
"gehen → ich ging, wir gingen": "ir → eu ia/fui, nós íamos/fomos",
"wohnen → ich wohnte": "morar → eu morava",
"kommen → ich kam": "vir → eu vinha/vim",
"arbeiten → ich arbeitete": "trabalhar → eu trabalhava",
"sehen → ich sah · fahren → ich fuhr": "ver → eu via/vi · ir (de veículo) → eu ia/fui",
"spielen → ich spielte": "brincar, jogar → eu brincava/jogava",
"geben → es gab · nehmen → ich nahm": "dar → havia · pegar → eu pegava/peguei",
"denken → ich dachte (misto)": "pensar → eu pensava/pensei (misto)",
"finden → ich fand · bleiben → ich blieb": "achar → eu achava/achei · ficar → eu ficava/fiquei",
"wissen → ich wusste (misto)": "saber → eu sabia (misto)",
"schreiben → ich schrieb · sprechen → ich sprach": "escrever → eu escrevia/escrevi · falar → eu falava/falei",
"ich ging · du gingst · er ging · wir gingen · ihr gingt · sie gingen": "eu ia · você ia · ele ia · nós íamos · vocês iam · eles iam",
"Als ich Kind war, … (uma vez) · Wenn wir Oma besuchten, … (sempre que) · Wann kommst du? (pergunta)": "Quando eu era criança, … (uma vez) · Sempre que visitávamos a vovó, … (sempre que) · Quando você vem? (pergunta)",
"anfangs · damals · seitdem · mittlerweile · kürzlich · ursprünglich": "no começo · naquela época · desde então · hoje em dia · recentemente · originalmente",
"Die Firma stellt Software her.": "A empresa produz software.",
"Software wird (von der Firma) hergestellt.": "Software é produzido (pela empresa).",
"Man repariert die Heizung.": "Consertam o aquecimento.",
"Die Heizung wird repariert.": "O aquecimento está sendo consertado.",
"Man baute das Haus 1905.": "Construíram a casa em 1905.",
"Das Haus wurde 1905 gebaut. (passado)": "A casa foi construída em 1905. (passado)",
"ich werde, du wirst, er wird, wir werden …": "eu sou/fico, você é/fica, ele é/fica, nós somos/ficamos … (auxiliar do passivo)",
"ich wurde, du wurdest, er wurde, wir wurden …": "eu fui, você foi, ele foi, nós fomos … (passivo no passado)",
"von der Chefin": "pela chefe",
"das Büro vom Chef": "o escritório do chefe (falado)",
"Janas Idee": "a ideia da Jana",
"das Büro des Chefs · der Name der Firma · die Meinung der Kollegen · Janas Idee": "o escritório do chefe · o nome da empresa · a opinião dos colegas · a ideia da Jana",
"die Teilzeit · die Überstunde · der Lohn · der Betriebsrat · die Gewerkschaft · die Kündigung · die Weiterbildung": "o meio período · a hora extra · o salário · o conselho de funcionários · o sindicato · a demissão · a capacitação",
"Das ist der Nachbar, der im 4. Stock wohnt.": "Esse é o vizinho que mora no 4º andar.",
"Das ist der Nachbar, den ich gestern getroffen habe.": "Esse é o vizinho que eu encontrei ontem.",
"Das ist der Nachbar, dem ich geholfen habe.": "Esse é o vizinho que eu ajudei.",
"Das ist der Nachbar, mit dem ich Fußball spiele.": "Esse é o vizinho com quem eu jogo futebol.",
"Der Nachbar, der oben wohnt … · den ich kenne … · dem ich helfe … · mit dem ich spiele …": "O vizinho que mora em cima … · que eu conheço … · que eu ajudo … · com quem eu jogo …",
"einrichten · die Steckdose · einschalten · installieren · anschließen · die Anleitung · die Störung · Rücksicht nehmen auf · der Lärm": "mobiliar · a tomada · ligar · instalar · conectar · o manual · a falha · ter consideração com · o barulho",
"Ich habe vergessen, dich anzurufen.": "Esqueci de te ligar.",
"Ich will gesünder essen.": "Quero comer de forma mais saudável.",
"Wozu? / Warum?": "Para quê? / Por quê?",
"Um gesund zu bleiben.": "Para continuar saudável.",
"Ich habe vor, … zu essen. · Ich versuche, … · Es ist wichtig, … · Vergiss nicht, … · anzurufen / einzukaufen (separáveis)": "Pretendo comer … · Tento … · É importante … · Não esqueça de … · ligar / fazer compras (separáveis)",
"die Ernährung · die Mahlzeit · die Zutaten · die Untersuchung · die Operation · die Notaufnahme · die Krankenkasse · das Schmerzmittel": "a alimentação · a refeição · os ingredientes · o exame · a cirurgia · o pronto-socorro · o plano de saúde · o analgésico",
"war gefahren, war passiert": "tinha ido, tinha acontecido",
"hatte gekauft": "tinha comprado",
"Nachdem wir gegessen hatten, gingen wir zum Strand.": "Depois de termos comido, fomos à praia.",
"Bevor wir losfuhren, tankten wir.": "Antes de partir, abastecemos.",
"Während ich fuhr, schlief Tom.": "Enquanto eu dirigia, o Tom dormia.",
"hatte + particípio: Ich hatte das Hotel gebucht. · war + particípio: Der Zug war abgefahren.": "hatte + particípio: Eu tinha reservado o hotel. · war + particípio: O trem tinha partido.",
"abbiegen · überholen · bremsen · sich anschnallen · die Umleitung · die Einbahnstraße · der Strafzettel · der Führerschein": "virar · ultrapassar · frear · pôr o cinto · o desvio · a rua de mão única · a multa · a carteira de motorista",
"sein → ich wäre": "ser/estar → eu seria/estaria",
"haben → ich hätte": "ter → eu teria",
"können → ich könnte": "poder → eu poderia",
"Wenn ich mehr Zeit hätte, würde ich mehr lesen.": "Se eu tivesse mais tempo, leria mais.",
"Ich wäre gern Pilot.": "Eu gostaria de ser piloto.",
"An deiner Stelle würde ich das Handy ausschalten.": "No seu lugar, eu desligaria o celular.",
"Wenn ich reich wäre …": "Se eu fosse rico …",
"Wenn ich Zeit habe …": "Se/quando eu tiver tempo …",
"warten auf, sich freuen über, denken an …": "esperar por, alegrar-se com, pensar em …",
"Auf wen wartest du? – Auf ihn.": "Por quem você está esperando? – Por ele.",
"wäre · hätte · könnte · müsste · dürfte · würde + infinitivo": "seria · teria · poderia · teria que · poderia (permissão) · -ria (futuro do pretérito)",
"Wenn ich mehr Zeit hätte, würde ich mehr lesen. · An deiner Stelle würde ich … · Es wäre schön, wenn …": "Se eu tivesse mais tempo, leria mais. · No seu lugar, eu … · Seria bom se …",
"Worauf wartest du? – Darauf. · Worüber ärgerst du dich? – Darüber, dass … · Auf wen? – Auf ihn. (pessoas)": "Pelo que você está esperando? – Por isso. · Com o que você está irritado? – Com o fato de que … · Por quem? – Por ele. (pessoas)",
"veröffentlichen · die Meldung · die Werbung · die Umfrage · die Mehrheit · digital · das Netzwerk · kopieren · einfügen": "publicar · a notícia · a propaganda · a pesquisa (de opinião) · a maioria · digital · a rede · copiar · colar",
"Trotz des Regens gehen wir spazieren.": "Apesar da chuva, vamos passear.",
"der Kollege": "o colega",
"den / dem / des Kollegen": "o / ao / do colega",
"der Nachbar": "o vizinho",
"den / dem / des Nachbarn": "o / ao / do vizinho",
"der Mensch": "o ser humano, a pessoa",
"den / dem / des Menschen": "o / ao / do ser humano",
"der Student · der Kunde · der Junge · der Herr": "o estudante · o cliente · o menino · o senhor",
"den Studenten · dem Kunden · den Jungen · Herrn Müller": "o estudante · ao cliente · o menino · o Sr. Müller",
"Obwohl wir uns streiten, lieben wir uns. · Wir streiten uns. Trotzdem lieben wir uns. · Trotz des Regens …": "Embora a gente brigue, nós nos amamos. · Nós brigamos. Mesmo assim nos amamos. · Apesar da chuva …",
"der Kollege → den/dem/des Kollegen · der Nachbar → Nachbarn · der Mensch → Menschen · der Student → Studenten · Herr → Herrn": "o colega → o/ao/do colega · o vizinho → vizinho · o ser humano → ser humano · o estudante → estudante · senhor → senhor",
"sich verlieben in · sich streiten · sich versöhnen · sich trennen · Schluss machen · die Laune · mutig · enttäuscht": "apaixonar-se por · brigar · fazer as pazes · separar-se · terminar (namoro) · o humor · corajoso · decepcionado",
"Man muss den Müll trennen.": "É preciso separar o lixo.",
"Der Müll muss getrennt werden.": "O lixo tem que ser separado.",
"Man kann Glas recyceln.": "Pode-se reciclar vidro.",
"Glas kann recycelt werden.": "Vidro pode ser reciclado.",
"Man darf hier nichts wegwerfen.": "Não é permitido jogar nada fora aqui.",
"Hier darf nichts weggeworfen werden.": "Aqui nada pode ser jogado fora.",
"Man sollte Energie sparen.": "Deveríamos economizar energia.",
"Energie sollte gespart werden.": "Energia deveria ser economizada.",
"Das Wetter war schlecht. Deshalb sind wir zu Hause geblieben.": "O tempo estava ruim. Por isso ficamos em casa.",
"Es regnete stark, sodass die Straßen überflutet waren.": "Choveu forte, de modo que as ruas ficaram alagadas.",
"weil / denn": "porque / pois",
"deshalb / sodass": "por isso / de modo que",
"Ich fahre Rad, weil es gesund ist.": "Ando de bicicleta porque é saudável.",
"Radfahren ist gesund. Deshalb fahre ich Rad.": "Andar de bicicleta é saudável. Por isso ando de bicicleta.",
"Der Müll muss getrennt werden. · Glas kann recycelt werden. · Hier darf nichts weggeworfen werden. · Energie sollte gespart werden.": "O lixo tem que ser separado. · Vidro pode ser reciclado. · Aqui nada pode ser jogado fora. · Energia deveria ser economizada.",
"die Umwelt · der Umweltschutz · verschmutzen · entsorgen · recyceln · verbrauchen · sparsam · erneuerbar · vermeiden": "o meio ambiente · a proteção ambiental · poluir · descartar · reciclar · consumir · econômico · renovável · evitar",
"das Semester · das Referat · durchfallen · die Nachhilfe · nachschlagen · die Voraussetzung · teilnehmen an · die Muttersprache · fließend": "o semestre · a apresentação (trabalho oral) · ser reprovado · a aula de reforço · consultar · o requisito · participar de · a língua materna · fluente",
"fordern": "exigir",
"fördern": "incentivar, apoiar",
"des Regens / des Streiks": "da chuva / da greve",
"der Versammlung": "da assembleia",
"eines Unfalls / einer Woche": "de um acidente / de uma semana",
"wegen dem Regen": "por causa da chuva (falado)",
"Wegen des Regens bleiben wir zu Hause.": "Por causa da chuva, ficamos em casa.",
"Weil es regnet, bleiben wir zu Hause.": "Como está chovendo, ficamos em casa.",
"Obwohl es regnet, gehen wir spazieren.": "Embora esteja chovendo, vamos passear.",
"Während des Essens telefoniert er.": "Durante a refeição, ele fala ao telefone.",
"Während er isst, telefoniert er.": "Enquanto come, ele fala ao telefone.",
"ich habe gemacht → ich hätte gemacht": "eu fiz → eu teria feito",
"ich bin gegangen → ich wäre gegangen": "eu fui → eu teria ido",
"Man hätte die Bürger früher fragen sollen.": "Deveriam ter perguntado aos cidadãos antes.",
"die Wahl · wählen · die Partei · die Regierung · das Gesetz · die Steuer · sich engagieren · das Ehrenamt · fordern · fördern · zustimmen · ablehnen": "a eleição · votar · o partido · o governo · a lei · o imposto · engajar-se · o trabalho voluntário · exigir · incentivar · concordar · rejeitar",
"ein neuer Film": "um filme novo",
"ein neues Stück": "uma peça nova",
"gebratene Kartoffeln · ein gestohlenes Fahrrad · die geöffnete Tür": "batatas fritas (na frigideira) · uma bicicleta roubada · a porta aberta",
"ein spielendes Kind · steigende Preise · die folgenden Fragen": "uma criança brincando · preços em alta · as perguntas seguintes",
"das gelesene Buch": "o livro lido",
"das lesende Mädchen": "a menina que está lendo",
"der neue Film · den neuen Film · dem neuen Film · des neuen Films": "o filme novo · o filme novo (Akk.) · ao filme novo · do filme novo",
"ein neuer Film · ein neues Stück · eine neue Oper · einem neuen Film": "um filme novo · uma peça nova · uma ópera nova · a um filme novo",
"guter Wein · mit gutem Wein · mit frischer Milch · kaltes Wasser": "vinho bom · com vinho bom · com leite fresco · água gelada",
"die Bühne · das Publikum · auftreten · die Veranstaltung · der Roman · die Fortsetzung · empfehlen · der Feiertag · sich verkleiden · unentschieden": "o palco · o público · apresentar-se · o evento · o romance · a continuação · recomendar · o feriado · fantasiar-se · empate",
"Wie wäre es, wenn wir …? · Ich schlage vor, dass … · Das ist eine gute Idee, aber … · Ich würde lieber … · Ich möchte heute über … sprechen. · Zum Schluss … · Vielen Dank fürs Zuhören.": "Que tal se a gente …? · Proponho que … · É uma boa ideia, mas … · Eu preferiria … · Hoje eu gostaria de falar sobre … · Para concluir … · Muito obrigado pela atenção.",
"die Frist · spätestens · die Unterlagen · beantragen · verlängern · fällig · falls · möglichst · zunächst · endgültig · zurechtkommen": "o prazo · o mais tardar · os documentos · solicitar · prorrogar · vencido · caso · o mais … possível · primeiro · definitivo · se virar",
"eine Frage stellen → in Frage stellen": "fazer uma pergunta → questionar",
"zur Diskussion stellen → zur Diskussion stehen": "pôr em discussão → estar em discussão",
"zur Verfügung stellen → zur Verfügung stehen": "pôr à disposição → estar à disposição",
"Bewerbung als Teamleiter Softwareentwicklung": "Candidatura para líder de equipe de desenvolvimento de software",
"Sehr geehrte Damen und Herren, mit großem Interesse habe ich Ihre Stellenausschreibung gelesen.": "Prezados senhores e senhoras, li o seu anúncio de vaga com grande interesse.",
"Derzeit arbeite ich als … bei … und bin dort verantwortlich für …": "Atualmente trabalho como … na … e lá sou responsável por …",
"Besonders reizt mich an der Stelle, dass … · Ich bringe … mit.": "O que mais me atrai na vaga é que … · Eu trago …",
"Über eine Einladung zu einem persönlichen Gespräch freue ich mich sehr. Mit freundlichen Grüßen": "Ficarei muito feliz com um convite para uma entrevista pessoal. Atenciosamente",
"eine Entscheidung treffen · Verantwortung übernehmen · in Frage kommen · zur Verfügung stehen/stellen · eine Rolle spielen · Kritik üben an · Maßnahmen ergreifen · in Kraft treten · in Anspruch nehmen · einen Beitrag leisten": "tomar uma decisão · assumir a responsabilidade · ser uma opção · estar/pôr à disposição · ter um papel · criticar · tomar medidas · entrar em vigor · utilizar, tomar (tempo) · dar uma contribuição",
"Zu meinen Stärken zählt … · Ich suche eine neue Herausforderung. · Meine Gehaltsvorstellung liegt bei …": "Entre os meus pontos fortes está … · Procuro um novo desafio. · A minha pretensão salarial é de …",
"der Werdegang · die Beförderung · die Führungskraft · belastbar · teamfähig · die Kündigungsfrist · das Arbeitszeugnis": "a trajetória · a promoção · o/a líder · resistente à pressão · que sabe trabalhar em equipe · o aviso prévio · a carta de referência",
"Die Grafik zeigt, wie viele Menschen in Deutschland KI-Programme nutzen. Die Daten stammen aus einer Umfrage von 2025.": "O gráfico mostra quantas pessoas na Alemanha usam programas de IA. Os dados vêm de uma pesquisa de 2025.",
"Der Anteil ist von 15 auf 45 Prozent gestiegen. · Die Zahl hat sich verdreifacht.": "A parcela subiu de 15 para 45 por cento. · O número triplicou.",
"Im Vergleich zu den Älteren nutzen Jüngere KI deutlich häufiger.": "Em comparação com os mais velhos, os mais jovens usam IA com muito mais frequência.",
"Die Mehrheit (knapp 60 Prozent) … · Nur eine Minderheit …": "A maioria (pouco menos de 60 por cento) … · Só uma minoria …",
"von 15 auf 45 Prozent": "de 15 para 45 por cento",
"um 30 Prozentpunkte": "em 30 pontos percentuais",
"Das lässt sich lösen. · Das ist lösbar. · Das ist zu lösen. · Der Antrag ist bis Freitag abzugeben.": "Isso pode ser resolvido. · Isso é solucionável. · Isso pode/deve ser resolvido. · O requerimento deve ser entregue até sexta.",
"machbar · vorstellbar · vorhersehbar · erkennbar · vergleichbar · nachvollziehbar · vermeidbar · erneuerbar": "viável · imaginável · previsível · reconhecível · comparável · compreensível · evitável · renovável",
"Die Grafik zeigt … · Der Anteil ist von 15 auf 45 Prozent gestiegen. · Die Mehrheit … · im Vergleich zu …": "O gráfico mostra … · A parcela subiu de 15 para 45 por cento. · A maioria … · em comparação com …",
"Die Ministerin sagt: „Wir haben genug Geld.“ → Die Ministerin sagt, man habe genug Geld.": "A ministra diz: „Temos dinheiro suficiente.“ → A ministra diz que haveria dinheiro suficiente.",
"Sie sagen, sie hätten keine Zeit.": "Eles dizem que não teriam tempo.",
"Er sagt, er habe den Bericht gelesen.": "Ele diz que teria lido o relatório.",
"Sie sagt, sie sei krank gewesen.": "Ela diz que teria estado doente.",
"Er hat gesagt, dass er keine Zeit hat / hätte.": "Ele disse que não tem / teria tempo.",
"Ich bin der Auffassung, dass … · Ich vertrete die Meinung, dass …": "Sou da opinião de que … · Defendo a opinião de que …",
"Da haben Sie zwar recht, aber … · Das stimmt teilweise, allerdings …": "Nisso o senhor tem razão, mas … · Isso é verdade em parte, porém …",
"Da muss ich Ihnen widersprechen. · Das sehe ich anders. · Davon bin ich nicht überzeugt.": "Aí preciso discordar do senhor. · Vejo isso de outra forma. · Não estou convencido disso.",
"Darf ich kurz unterbrechen? · Lassen Sie mich bitte ausreden.": "Posso interromper rapidinho? · Deixe-me terminar de falar, por favor.",
"Was halten Sie von einem Kompromiss? · Wir könnten uns darauf einigen, dass …": "O que o senhor acha de um meio-termo? · Poderíamos concordar que …",
"er sei · er habe · er werde · er könne · es gebe · Sie sagen, sie hätten keine Zeit. · Er sagt, er habe den Bericht gelesen.": "ele seria · ele teria · ele iria · ele poderia · haveria · Eles dizem que não teriam tempo. · Ele diz que teria lido o relatório.",
"behaupten · betonen · mitteilen · laut der Studie · der Studie zufolge": "afirmar · enfatizar · informar · segundo o estudo · de acordo com o estudo",
"Ich bin der Auffassung, dass … · Da muss ich Ihnen widersprechen. · Davon bin ich nicht überzeugt. · Was halten Sie von einem Kompromiss?": "Sou da opinião de que … · Aí preciso discordar do senhor. · Não estou convencido disso. · O que o senhor acha de um meio-termo?",
"das Produkt, das von uns entwickelt wurde": "o produto que foi desenvolvido por nós",
"das von uns entwickelte Produkt": "o produto desenvolvido por nós",
"die Preise, die seit Monaten steigen": "os preços que sobem há meses",
"die seit Monaten steigenden Preise": "os preços que sobem há meses",
"der Laptop, den ich online gekauft habe": "o notebook que eu comprei online",
"der online gekaufte Laptop": "o notebook comprado online",
"Kunden, die sich beschweren": "clientes que reclamam",
"sich beschwerende Kunden": "clientes reclamando",
"die (seit Jahren stark wachsende) Nachfrage": "a procura (que cresce muito há anos)",
"Reklamation – Bestellung Nr. 48213 vom 2. Mai": "Reclamação – pedido nº 48213 de 2 de maio",
"Am 2. Mai habe ich bei Ihnen einen Laptop bestellt, der am 5. Mai geliefert wurde.": "Em 2 de maio encomendei com vocês um notebook, que foi entregue em 5 de maio.",
"Leider startet das Gerät seit gestern nicht mehr.": "Infelizmente, desde ontem o aparelho não liga mais.",
"Ich bitte Sie daher, mir umgehend ein neues Gerät zu schicken oder den Kaufpreis zu erstatten.": "Por isso peço que me enviem imediatamente um aparelho novo ou reembolsem o valor da compra.",
"Ich erwarte Ihre Antwort bis zum 20. Mai.": "Aguardo a sua resposta até 20 de maio.",
"das von uns entwickelte Produkt · die seit Monaten steigenden Preise · der online gekaufte Laptop · die von mir angegebene Adresse": "o produto desenvolvido por nós · os preços que sobem há meses · o notebook comprado online · o endereço informado por mim",
"der Umsatz · der Gewinn · der Verlust · die Nachfrage · die Branche · investieren · pleitegehen": "o faturamento · o lucro · o prejuízo · a procura · o setor · investir · falir",
"Ich bitte Sie, mir den Kaufpreis zu erstatten. · die Gewährleistung · der Umtausch · Ich erwarte Ihre Antwort bis …": "Peço que me reembolsem o valor da compra. · a garantia legal · a troca · Aguardo a sua resposta até …",
"Sie muss den Termin vergessen haben.": "Ela deve ter esquecido o compromisso.",
"Er soll lange im Krankenhaus gewesen sein.": "Dizem que ele ficou muito tempo no hospital.",
"Bis Freitag werde ich den Bericht geschrieben haben.": "Até sexta terei escrito o relatório.",
"Er muss krank sein. · Das dürfte am Stress liegen. · Sie könnte im Meeting sein. · Er soll sehr streng sein. · Er will nie krank gewesen sein.": "Ele deve estar doente. · Isso provavelmente é por causa do estresse. · Ela pode estar na reunião. · Dizem que ele é muito rígido. · Ele afirma nunca ter ficado doente.",
"Er wird den Termin vergessen haben. · Sie wird schon nach Hause gegangen sein.": "Ele deve ter esquecido o compromisso. · Ela provavelmente já foi para casa.",
"überfordert · abschalten · die Belastung · vorbeugen · verschreiben · die Nebenwirkung · krankschreiben": "sobrecarregado · desligar-se · a sobrecarga · prevenir · receitar · o efeito colateral · dar atestado",
"wenn wir ankommen": "quando chegarmos",
"bei unserer Ankunft": "na nossa chegada",
"nachdem er das Studium beendet hatte": "depois que ele tinha terminado a faculdade",
"nach Beendigung des Studiums": "após a conclusão da faculdade",
"bevor die Sitzung beginnt": "antes que a reunião comece",
"vor Beginn der Sitzung": "antes do início da reunião",
"weil es stark regnete": "porque chovia muito",
"wegen des starken Regens": "por causa da chuva forte",
"obwohl die Kritik groß war": "embora a crítica fosse grande",
"trotz der großen Kritik": "apesar da grande crítica",
"damit die Kommunikation besser wird": "para que a comunicação melhore",
"zur Verbesserung der Kommunikation": "para a melhoria da comunicação",
"indem man Daten analysiert": "analisando dados",
"durch die Analyse von Daten": "por meio da análise de dados",
"während er studierte": "enquanto ele estudava",
"während seines Studiums": "durante a sua faculdade",
"das Lesen": "a leitura (o ler)",
"beginnen → der Beginn": "começar → o início",
"ankommen → die Ankunft": "chegar → a chegada",
"die Analyse der Daten / von Daten": "a análise dos dados / de dados",
"Ich möchte Ihnen heute ein neues Konzept vorstellen. · Mein Vortrag gliedert sich in drei Teile.": "Hoje eu gostaria de apresentar a vocês um novo conceito. · A minha apresentação está dividida em três partes.",
"Damit komme ich zum zweiten Punkt. · Lassen Sie mich kurz auf … eingehen.": "Com isso, chego ao segundo ponto. · Deixem-me abordar rapidamente …",
"Wie Sie auf dieser Folie sehen, … · Die Grafik verdeutlicht, dass …": "Como vocês veem neste slide, … · O gráfico deixa claro que …",
"Ein Beispiel dafür ist … · Ich möchte betonen, dass …": "Um exemplo disso é … · Gostaria de enfatizar que …",
"Abschließend möchte ich zusammenfassen: … · Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?": "Para concluir, gostaria de resumir: … · Muito obrigado pela atenção. Alguma pergunta?",
"bei unserer Ankunft · nach Beendigung des Studiums · vor Beginn der Sitzung · wegen des Regens · trotz der Kritik · zur Verbesserung der Kommunikation · durch die Analyse von Daten": "na nossa chegada · após a conclusão da faculdade · antes do início da reunião · por causa da chuva · apesar da crítica · para a melhoria da comunicação · por meio da análise de dados",
"Mein Vortrag gliedert sich in drei Teile. · Damit komme ich zum zweiten Punkt. · Wie Sie auf dieser Folie sehen, … · Vielen Dank für Ihre Aufmerksamkeit.": "A minha apresentação está dividida em três partes. · Com isso, chego ao segundo ponto. · Como vocês veem neste slide, … · Muito obrigado pela atenção.",
"die Quelle · seriös · recherchieren · die Falschmeldung · verbreiten · die Glaubwürdigkeit · einseitig": "a fonte · sério · apurar · a notícia falsa · espalhar · a credibilidade · parcial",
"innerhalb von zwei Wochen": "dentro de duas semanas",
"aufgrund von Problemen": "por causa de problemas",
"Zu Ihrem Artikel „Autofreie Innenstadt bis 2030“ vom 12. Juni": "Sobre o seu artigo „Centro sem carros até 2030“ de 12 de junho",
"Mit großem Interesse habe ich gelesen, dass … Ich halte diese Entscheidung für …": "Li com grande interesse que … Considero esta decisão …",
"Zum einen …, zum anderen … · Hinzu kommt, dass …": "Por um lado …, por outro … · Além disso, …",
"Zwar …, aber … · Man darf allerdings nicht vergessen, dass …": "É verdade que …, mas … · Porém, não se pode esquecer que …",
"aufgrund des Regens · infolge der Dürre · angesichts der Hitze · innerhalb eines Jahres · außerhalb der Stadt · mithilfe neuer Technologien · anstelle des Autos · bezüglich Ihrer Anfrage": "por causa da chuva · em consequência da seca · diante do calor · dentro de um ano · fora da cidade · com a ajuda de novas tecnologias · em vez do carro · com relação ao seu pedido",
"der Klimawandel · die Dürre · die Überschwemmung · der Waldbrand · die Ursache · die Folge · verursachen · eindämmen": "a mudança climática · a seca · a inundação · o incêndio florestal · a causa · a consequência · causar · conter",
"die Artenvielfalt · aussterben · bedroht · der Lebensraum · die Nachhaltigkeit": "a biodiversidade · extinguir-se · ameaçado · o habitat · a sustentabilidade",
"so tun · aussehen · wirken · sich anhören · sich anfühlen · klingen": "fingir, agir como · parecer (aparência) · parecer (efeito) · soar · dar a sensação · soar",
"Er tut so, als ob er nichts gehört hätte.": "Ele age como se não tivesse ouvido nada.",
"Komm doch mit! · Das ist doch klar!": "Vem com a gente! · Mas isso é óbvio!",
"Das weißt du ja. · Das ist ja toll!": "Isso você já sabe. · Que legal!",
"Schau mal! · Kannst du mal kurz helfen?": "Olha só! · Você pode me ajudar rapidinho?",
"Das ist halt so. · Dann nehmen wir eben den Bus.": "É assim mesmo. · Então a gente pega o ônibus e pronto.",
"Was machst du eigentlich am Wochenende?": "E aí, o que você vai fazer no fim de semana?",
"Er ist wohl krank.": "Ele deve estar doente.",
"Wie heißt du denn?": "E como você se chama?",
"Er tut so, als ob er alles wüsste. · Er tut so, als wüsste er alles. · Es sieht aus, als hätte ein Kind es gemalt.": "Ele age como se soubesse tudo. · Ele age como se soubesse tudo. · Parece que foi pintado por uma criança.",
"Komm doch mit! · Das weißt du ja. · Schau mal! · Das ist halt so. · Was machst du eigentlich …? · Er ist wohl krank.": "Vem com a gente! · Isso você já sabe. · Olha só! · É assim mesmo. · E aí, o que você …? · Ele deve estar doente.",
"die Ausstellung · das Kunstwerk · abstrakt · zeitgenössisch · wirken · die Rezension · die Hauptrolle · gelungen · vorhersehbar": "a exposição · a obra de arte · abstrato · contemporâneo · parecer, causar efeito · a resenha · o papel principal · bem-feito · previsível",
"Man kann sich wehren, indem man schriftlich widerspricht.": "Dá para se defender recorrendo por escrito.",
"Er hat unterschrieben, ohne den Vertrag zu lesen.": "Ele assinou sem ler o contrato.",
"Der Vermieter hat die Miete erhöht, ohne dass wir informiert wurden.": "O senhorio aumentou o aluguel sem que fôssemos informados.",
"Anstatt zu klagen, haben wir einen Kompromiss gesucht.": "Em vez de processar, procuramos um meio-termo.",
"Anstatt dass die Stadt hilft, steigen die Gebühren.": "Em vez de a cidade ajudar, as taxas sobem.",
"Wie kann man Geld sparen? – Indem man weniger online einkauft.": "Como dá para economizar dinheiro? – Comprando menos online.",
"Falls Sie den Bescheid nicht akzeptieren, können Sie Widerspruch einlegen.": "Caso não aceite a notificação, o senhor pode interpor recurso.",
"Sie dürfen wählen, sofern Sie 18 Jahre alt sind.": "O senhor pode votar, desde que tenha 18 anos.",
"Soweit ich weiß, ist die Frist schon abgelaufen.": "Até onde eu sei, o prazo já venceu.",
"Haben Sie Fragen, rufen Sie uns an.": "Se tiver perguntas, ligue para nós.",
"Widerspruch gegen Ihren Bescheid vom 20. März, Aktenzeichen 4711/26": "Recurso contra a sua notificação de 20 de março, processo nº 4711/26",
"hiermit lege ich fristgerecht Widerspruch gegen den oben genannten Bescheid ein.": "venho por meio desta interpor, dentro do prazo, recurso contra a notificação acima mencionada.",
"Zur Begründung möchte ich Folgendes anführen: …": "Como justificativa, gostaria de apresentar o seguinte: …",
"Als Nachweis lege ich … bei.": "Como comprovante, anexo …",
"Ich bitte Sie daher, den Bescheid aufzuheben.": "Peço, portanto, que a notificação seja anulada.",
"indem man widerspricht · ohne den Vertrag zu lesen · ohne dass wir informiert wurden · anstatt zu klagen · anstatt dass die Stadt hilft · falls · sofern · soweit ich weiß": "recorrendo · sem ler o contrato · sem que fôssemos informados · em vez de processar · em vez de a cidade ajudar · caso · desde que · até onde eu sei",
"das Gericht · der Anwalt · klagen · das Urteil · schuldig · der Zeuge · zuständig · der Widerspruch · der Bescheid": "o tribunal · o advogado · processar · a sentença · culpado · a testemunha · responsável · o recurso · a notificação",
"die Petition · unterschreiben · die Wahlbeteiligung · die Opposition · die Koalition · die Behörde": "a petição · assinar · a participação eleitoral · a oposição · a coalizão · o órgão público",
"aufgrund des Regens": "por causa da chuva",
"infolge der Dürre": "em consequência da seca",
"angesichts der hohen Temperaturen": "diante das altas temperaturas",
"innerhalb eines Jahres · außerhalb der Stadt": "dentro de um ano · fora da cidade",
"mithilfe neuer Technologien": "com a ajuda de novas tecnologias",
"anstelle des Autos": "em vez do carro",
"bezüglich Ihrer Anfrage": "com relação ao seu pedido",
"zugunsten der Umwelt": "em favor do meio ambiente",
"Aus diesen Gründen bin ich überzeugt, dass …": "Por esses motivos, estou convencido de que …",
"die Stadt, wo ich wohne": "a cidade onde moro",
"Wer in der Stadt wohnt, braucht kein Auto. · Das ist alles, was ich weiß. · das Beste, was … · Die Miete steigt, was mich ärgert. · etwas, worauf ich mich freue · die Stadt, wo ich wohne": "Quem mora na cidade não precisa de carro. · Isso é tudo o que eu sei. · a melhor coisa que … · O aluguel sobe, o que me irrita. · algo pelo qual estou ansioso · a cidade onde moro",
"bezahlbarer Wohnraum · die Gentrifizierung · verdrängen · pendeln · der Nahverkehr · das Lastenrad · ausbauen": "moradia acessível · a gentrificação · expulsar · fazer o trajeto casa-trabalho · o transporte público · a bicicleta de carga · ampliar",
"Ein großer Vorteil ist, dass … · Ein Nachteil ist allerdings … · Wenn ich die Vor- und Nachteile abwäge, komme ich zu dem Schluss, dass …": "Uma grande vantagem é que … · Uma desvantagem, porém, é … · Pesando prós e contras, chego à conclusão de que …",
"Ich hätte kommen sollen": "Eu deveria ter vindo",
"…, dass ich früher hätte kommen sollen.": "…, que eu deveria ter vindo antes.",
"Die Mieten stiegen stark. Folglich zogen viele weg.": "Os aluguéis subiram muito. Consequentemente, muitos se mudaram.",
"Er bekam die Zusage. Daraufhin kündigte er.": "Ele recebeu a confirmação. Em seguida, pediu demissão.",
"Ich wollte nach London. Stattdessen bin ich in Frankfurt gelandet.": "Eu queria ir para Londres. Em vez disso, fui parar em Frankfurt.",
"Die Stelle war gut bezahlt. Zudem gab es Homeoffice.": "A vaga era bem paga. Além disso, havia home office.",
"Der Anfang war hart. Dennoch habe ich nie aufgegeben.": "O começo foi duro. Mesmo assim, nunca desisti.",
"Ich bin müde. Ich habe nämlich kaum geschlafen.": "Estou cansado. É que quase não dormi.",
"Ich hätte früher Deutsch lernen sollen. · Du hättest mich anrufen können! · …, dass ich früher hätte kommen sollen.": "Eu deveria ter aprendido alemão antes. · Você podia ter me ligado! · …, que eu deveria ter vindo antes.",
"folglich · somit · daraufhin · stattdessen · zudem · dennoch · nämlich (depois do verbo) · im Nachhinein · rückblickend": "consequentemente · portanto · em seguida · em vez disso · além disso · mesmo assim · é que · em retrospecto · olhando para trás",
"auswandern · der Neuanfang · der Wendepunkt · sich anpassen an · die Wurzeln · die Identität · zweisprachig · vertraut": "emigrar · o recomeço · o ponto de virada · adaptar-se a · as raízes · a identidade · bilíngue · familiar",
"Mein Vortrag besteht aus drei Teilen. · Zunächst … Anschließend … Zum Schluss …": "A minha apresentação tem três partes. · Primeiro … Em seguida … Por fim …",
"In meinem Heimatland ist die Situation ganz anders: …": "No meu país, a situação é bem diferente: …",
"Vielen Dank für deinen interessanten Vortrag. Besonders überzeugend fand ich … · Mich würde noch interessieren, …": "Muito obrigado pela sua apresentação interessante. Achei especialmente convincente … · Eu ainda gostaria de saber …",
"Da bin ich anderer Meinung. · Das mag sein, aber … · Ich gebe dir recht, was … betrifft.": "Aí tenho outra opinião. · Pode ser, mas … · Concordo com você no que diz respeito a …",
"Wir sind uns also einig, dass … · Wir sehen das unterschiedlich, aber …": "Então concordamos que … · Vemos isso de forma diferente, mas …",
"Mein Vortrag besteht aus drei Teilen. · In meinem Heimatland … · Das mag sein, aber … · Ich gebe dir recht, was … betrifft. · Wir sind uns also einig, dass …": "A minha apresentação tem três partes. · No meu país … · Pode ser, mas … · Concordo com você no que diz respeito a … · Então concordamos que …",
"berücksichtigen · sich auswirken auf · beitragen zu · gewährleisten · erheblich · erforderlich · gegebenenfalls · darüber hinaus · letztendlich": "levar em conta · ter efeito sobre · contribuir para · garantir · considerável · necessário · se for o caso · além disso · no fim das contas"
});
