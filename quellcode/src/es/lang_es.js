/* Spanisch-Paket: Definition (läuft nach allen Spanisch-Inhalten, siehe build.py PACKS['es']) */
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
  mark:/[ñ¿¡áéíóú]|^(el|la|los|las|un|una|unos|unas)\s/i, /* erkennt beim Import von Wortlisten, welche Seite Spanisch ist */
  sampleWords:[['la mesa',{de:'der Tisch',en:'the table',pt:'a mesa'}],['el perro',{de:'der Hund',en:'the dog',pt:'o cão'}]],
  key:'espanol-lehrer-v1',gist:'mi-profe-fortschritt.json',
  course:window.COURSE,placement:window.PLACEMENT,stories:window.STORIES||[],levels:window.LEVELS,levelOf:window.LEVEL_OF,emoji:window.EMOJI});

