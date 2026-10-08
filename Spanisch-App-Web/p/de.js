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
  norm:s=>s.replace(/ß/g,'ss').replace(/ae/g,'ä').replace(/oe/g,'ö').replace(/ue/g,'ü'), /* Antwortprüfung: ss = ß, ae/oe/ue = ä/ö/ü (ohne deutsche Tastatur) */
  mark:/[äöüßÄÖÜ]|^(der|die|das|ein|eine)\s/i, /* erkennt beim Import von Wortlisten, welche Seite Deutsch ist */
  sampleWords:[['der Tisch',{pt:'a mesa',en:'the table',de:'der Tisch'}],['die Katze',{pt:'o gato',en:'the cat',de:'die Katze'}]],
  roleNote:'No curso você faz um papel: você acabou de se mudar para Frankfurt para trabalhar. Nas tarefas livres, escreva simplesmente sobre você.',
  persona:{name:'Lucas',surname:'Souza',country:'BR',city:'São Paulo'},
  /* Lob-Wendungen der Oberfläche (dort auf Spanisch) auf Deutsch */
  praise:{'¡Muy bien!':'Sehr gut!','¡Hola!':'Hallo!','¡Excelente!':'Ausgezeichnet!','¡Sigue así!':'Weiter so!','¡Correcto!':'Richtig!','¡Perfecto!':'Perfekt!','¡Eso es!':'Genau!','¡Hecho!':'Geschafft!','¡Bien hecho!':'Gut gemacht!','¡Genial!':'Super!','¡OJO!':'ACHTUNG!'},
  key:'mi-profe-de-v1',gist:'mi-profe-fortschritt-de.json',
  levels:[{id:'A1',label:'A1',title:'Iniciante',sub:'Primeiros passos'}],
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
var first=function(s){return String(s).replace(/\b(Ich bin|ich bin|Ich arbeite als|ich arbeite als|Ich werde|ich werde|Ich bin kein|ich bin kein|Ich bin ein|ich bin ein)( (?:noch |jetzt |auch |schon |hier |seit [^ ]+ ))?([A-ZÄÖÜ][a-zäöüß]+)\b/g,
  function(m,a,mid,w){var f=femWord(w);if(f===w)return m;if(/ ein$/.test(a))a=a+'e';return a+(mid||' ')+f;});};
var npc=function(s){return s.replace(/\bLieber (Kollege|Nachbar|Freund)\b/g,function(m,w){return 'Liebe '+femWord(w);});};
var named=function(t,name){var n=name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');return t.replace(new RegExp('\\bLieber ('+n+')\\b','g'),'Liebe $1');};
defineLang('de',{gender:{first:first,self:first,word:femWord,npc:npc,named:named}});
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
