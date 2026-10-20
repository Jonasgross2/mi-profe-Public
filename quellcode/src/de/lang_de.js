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
  norm:s=>s.replace(/ein(hundert|tausend)/g,'$1')/* einhundert = hundert, eintausend = tausend */.replace(/ß/g,'ss').replace(/ae/g,'ä').replace(/oe/g,'ö').replace(/ue/g,'ü').replace(/[’‘'`´]/g,'')
    .replace(/\bgerne\b/g,'gern').replace(/\btschüs\b/g,'tschüss').replace(/\b(zu|nach)hause\b/g,'$1 hause').replace(/\bemail/g,'e-mail').replace(/\bok\b(?![a-zäöüß])|\bo\.k\./g,'okay'), /* Antwortprüfung: ss = ß, ae/oe/ue = ä/ö/ü (ohne deutsche Tastatur), geht’s = geht's = gehts; gleichwertige Schreibungen: gern/gerne, Tschüs/Tschüss, zu Hause/zuhause, E-Mail/Email, okay/OK */
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
