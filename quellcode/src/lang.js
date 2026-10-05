/* ===== Sprachen-Register =====
   Jede Lernsprache ist ein „Paket“ in window.LANGS mit eigenem Kurs, eigenen Einstufungsfragen, Geschichten, Stufen und Emoji-Wörtern
   sowie den sprachabhängigen Einstellungen für die Engine (Stimme, Sonderzeichen, Pronomen, Begrüßung, KI-Lehrer …).
   Spanisch wurde vor dem Register gebaut und schreibt direkt in die globalen Variablen – die werden hier zum Paket „es“.
   Neue Sprache: eigene Datei(en) mit defineLang('it',{…}) und LANGS.it.course.units.push({...}), in build.py NACH lang.js (vor engine.js) eintragen. */
window.LANGS=window.LANGS||{};
window.defineLang=function(code,props){const p=LANGS[code]=Object.assign({code,course:{units:[]},placement:[],stories:[],levels:[],levelOf:{},emoji:{},
  keys:[],pron:null,persons:null,fem:false,genderEx:null,unit:'Unit',units:'Units',greet:['Hallo','Hallo','Hallo'],
  key:'mi-profe-'+code+'-v1',gist:'mi-profe-fortschritt-'+code+'.json'},LANGS[code]||{},props);return p;};

defineLang('es',{name:'Spanisch',flag:'🇪🇸',native:'Español',into:'ins Spanische',onLang:'auf Spanisch',adj:'spanisch',voice:'es-ES',
  keys:['á','é','í','ó','ú','ñ','ü','¿','?','¡','!'],
  pron:/^(yo|tu|tú|el|él|ella|usted|nosotros|nosotras|vosotros|vosotras|ellos|ellas|ustedes)\s+/,
  persons:['yo','tú','él / ella / usted','nosotros/-as','vosotros/-as','ellos / ellas / ustedes'],
  conjTip:'Tipp: Stamm + Endung. Unregelmäßig? Schau, ob sich der Stammvokal ändert (o→ue, e→ie) – bei nosotros/vosotros meistens nicht.',
  unit:'Unidad',units:'Unidades',fem:true,genderEx:['Estoy cansado','Estoy cansada'],
  greet:['¡Buenos días','¡Buenas tardes','¡Buenas noches'],
  teacher:'Du bist ein geduldiger, motivierender Spanischlehrer für Jonas, einen deutschen Muttersprachler (Niveau A1–B1, lernt mit dem Kursbuch "Meta profesional" und eigenen A2/B1-Unidades, lebt in Barcelona). Erklärungen IMMER auf Deutsch, kurz und konkret, auf dem Niveau der jeweiligen Unidad. Korrigiere nur echte Fehler, keine Stilfragen. Spanisch aus Spanien (vosotros) ist Standard.',
  sampleSay:['Hola, soy tu profesora de español.','¿Qué tal? Me llamo Lucía.'],
  voiceHint:'Auf dem Mac klingen „Mónica“ bzw. Stimmen mit „(Premium)“/„(Erweitert)“ am besten. Mehr Stimmen: Systemeinstellungen → Bedienungshilfen → Gesprochene Inhalte → Systemstimme → Stimmen verwalten → Spanisch.',
  storySeries:'Nuevo en Barcelona',storyIntro:'Ben zieht nach Barcelona.',
  key:'espanol-lehrer-v1',gist:'mi-profe-fortschritt.json',
  course:window.COURSE,placement:window.PLACEMENT,stories:window.STORIES||[],levels:window.LEVELS,levelOf:window.LEVEL_OF,emoji:window.EMOJI});

/* Geplante Sprachen (erscheinen in der Sprachauswahl als „kommt bald“, solange sie keinen Kurs haben) */
window.LANG_PLANNED=[['it','Italienisch','🇮🇹'],['pt','Portugiesisch','🇵🇹'],['en','Englisch','🇬🇧'],['de','Deutsch','🇩🇪']];

/* aktive Sprache wählen und ihre Inhalte unter den bekannten globalen Namen bereitstellen – wird von der Engine zuerst aufgerufen,
   damit alle Sprachdateien (zwischen lang.js und engine.js) vorher geladen sind */
window.selectLang=function(){let code='es';try{code=(JSON.parse(localStorage.getItem('mi-profe-shared')||'{}').lang)||'es';}catch(e){}
  const L=LANGS[code]&&LANGS[code].course.units.length?LANGS[code]:LANGS.es;window.LANG=L;
  if(L.code!=='es')for(const u of L.course.units)for(const q of u.placement||[])L.placement.push(Object.assign({u:u.id},q));
  window.COURSE=L.course;window.PLACEMENT=L.placement;window.STORIES=L.stories;window.LEVELS=L.levels;window.LEVEL_OF=L.levelOf;window.EMOJI=L.emoji;};
