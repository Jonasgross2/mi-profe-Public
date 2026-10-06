/* ===== Sprachen-Register =====
   Jede Lernsprache ist ein „Paket“ in window.LANGS mit eigenem Kurs, eigenen Einstufungsfragen, Geschichten, Stufen und Emoji-Wörtern
   sowie den sprachabhängigen Einstellungen für die Engine (Stimme, Sonderzeichen, Pronomen, Begrüßung, KI-Lehrer …).
   Spanisch wurde vor dem Register gebaut und schreibt direkt in die globalen Variablen – die werden hier zum Paket „es“.
   Neue Sprache: eigene Datei(en) mit defineLang('it',{…}) und LANGS.it.course.units.push({...}), in build.py als eigenes Paket (PACKS) eintragen.
   lang.js ist das allgemeine Register (immer geladen); die Spanisch-Definition steht in lang_es.js am Ende des Spanisch-Pakets. */
window.LANGS=window.LANGS||{};
window.defineLang=function(code,props){const p=LANGS[code]=Object.assign({code,course:{units:[]},placement:[],stories:[],levels:[],levelOf:{},emoji:{},
  keys:[],pron:null,persons:null,fem:false,genderEx:null,unit:'Unit',units:'Units',greet:['Hallo','Hallo','Hallo'],
  key:'mi-profe-'+code+'-v1',gist:'mi-profe-fortschritt-'+code+'.json'},LANGS[code]||{},props);return p;};

/* Geplante Sprachen (erscheinen in der Sprachauswahl als „kommt bald“, solange sie keinen Kurs haben) */
window.LANG_PLANNED=[['it','Italienisch','🇮🇹'],['pt','Portugiesisch','🇵🇹'],['en','Englisch','🇬🇧'],['de','Deutsch','🇩🇪']];

/* aktive Sprache wählen und ihre Inhalte unter den bekannten globalen Namen bereitstellen – wird von der Engine zuerst aufgerufen,
   damit alle Sprachdateien (zwischen lang.js und engine.js) vorher geladen sind */
window.selectLang=function(){let code='es';try{code=(JSON.parse(localStorage.getItem('mi-profe-shared')||'{}').lang)||'es';}catch(e){}
  const L=LANGS[code]&&LANGS[code].course.units.length?LANGS[code]:LANGS.es;window.LANG=L;
  if(L.code!=='es')for(const u of L.course.units)for(const q of u.placement||[])L.placement.push(Object.assign({u:u.id},q));
  window.COURSE=L.course;window.PLACEMENT=L.placement;window.STORIES=L.stories;window.LEVELS=L.levels;window.LEVEL_OF=L.levelOf;window.EMOJI=L.emoji;};
