/* ===== Stufen (A1 → C2) & Bilder zu Vokabeln ===== */
/* Abschnitte des Kurses. Der Einstufungstest läuft in dieser Reihenfolge, Etappe für Etappe. */
window.LEVELS=[
  {id:'A1',label:'A1',title:'A1 · Einstieg',sub:'Kursbuch Meta profesional, Unidad 0–5: dich vorstellen, Familie, Essen, Stadt, Freizeit.'},
  {id:'A2a',label:'A2',title:'A2 · Teil 1',sub:'Kursbuch Meta profesional, Unidad 6–10: Perfekt, Alltag, Pläne, Imperfekt, Indefinido.'},
  {id:'A2b',label:'A2',title:'A2 · Teil 2',sub:'Grammatik-Lücken aus dem Kursbuch schließen, dann Gesundheit, Reisen erzählen, Kochen, Gefallen & Geschenke, Zukunft – A2 komplett.'},
  {id:'B1',label:'B1',title:'B1 · Teil 1',sub:'Subjuntivo, Geschichten erzählen, Bedingungen, Meinung & Zweifel.'},
  {id:'B1b',label:'B1',title:'B1 · Teil 2',sub:'Zeit- und Zwecksätze, indirekte Rede, Relativsätze, Gefühle & Bewertungen – B1 komplett.'},
  {id:'B2',label:'B2',title:'B2 · Teil 1',sub:'Imperfecto de subjuntivo, irreale Bedingungen, Zeitenfolge, Konzessivsätze, Passiv & Nachrichten.'},
  {id:'B2b',label:'B2',title:'B2 · Teil 2',sub:'Irreale Vergangenheit, formelles Register, Verben der Veränderung, Argumentieren – B2 komplett.'}];
window.LEVEL_OF={u0:'A1',u1:'A1',u2:'A1',u3:'A1',u4:'A1',u5:'A1',u6:'A2a',u7:'A2a',u8:'A2a',u9:'A2a',u10:'A2a'};

/* Einstufungsfragen, die direkt in einer Unidad stehen (u.placement), in den gemeinsamen Pool hängen.
   Reihenfolge bleibt stabil → Verweise 'P||i' im Fehlerheft bleiben gültig. */
/* nachträglich eingefügte Unidades (id g…) hinten anhängen, damit ältere Verweise stabil bleiben */
for(const u of COURSE.units.filter(u=>!u.id.startsWith('g')).concat(COURSE.units.filter(u=>u.id.startsWith('g'))))for(const q of u.placement||[])PLACEMENT.push(Object.assign({u:u.id},q));

/* Bild (Emoji) zu einem Wort. Eigene Vokabeln können als 3. Element ein Emoji mitbringen: ['la manzana','der Apfel','🍎'] */
window.EMOJI={
hola:'👋',adiós:'👋','buenos días':'🌅','buenas tardes':'🌇','buenas noches':'🌙',gracias:'🙏','hasta mañana':'📅',
bien:'👍','muy bien':'😄',regular:'😐',mal:'👎',
empresa:'🏢',producto:'📦',hotel:'🏨',ciudad:'🏙️',país:'🗺️',comida:'🍽️',deporte:'⚽',tecnología:'💻','red social':'📱',publicidad:'📢',éxito:'🏆',feria:'🎪',turismo:'🧳',fiesta:'🎉',
cero:'0️⃣',uno:'1️⃣',dos:'2️⃣',tres:'3️⃣',cuatro:'4️⃣',cinco:'5️⃣',seis:'6️⃣',siete:'7️⃣',ocho:'8️⃣',nueve:'9️⃣',diez:'🔟',cien:'💯',
alemania:'🇩🇪',españa:'🇪🇸',austria:'🇦🇹',suiza:'🇨🇭',holanda:'🇳🇱',francia:'🇫🇷',italia:'🇮🇹',inglaterra:'🏴',
'estados unidos':'🇺🇸',méxico:'🇲🇽',argentina:'🇦🇷',colombia:'🇨🇴',perú:'🇵🇪',chile:'🇨🇱',
hablar:'🗣️',estudiar:'📚',trabajar:'💼',buscar:'🔍',viajar:'✈️',escuchar:'👂','tocar un instrumento':'🎸',
español:'🇪🇸',alemán:'🇩🇪',inglés:'🇬🇧',francés:'🇫🇷',catalán:'🟨',italiano:'🇮🇹',chino:'🇨🇳',
ingeniero:'👷',informático:'🧑‍💻',programador:'🧑‍💻',analista:'📊',auditor:'🔎',consultor:'🧑‍💼',estudiante:'🧑‍🎓',profesor:'🧑‍🏫',médico:'🧑‍⚕️',diseñador:'🎨',recepcionista:'🛎️',jefe:'👔',
móvil:'📱','correo electrónico':'📧',dirección:'📍',calle:'🛣️',arroba:'@',
consultora:'🏢',banco:'🏦',universidad:'🎓',máster:'🎓',prácticas:'🧑‍💼',vivir:'🏠',aprender:'🧠',escribir:'✍️',leer:'📖',barrio:'🏘️',
'llevar la agenda':'📒','organizar seminarios':'🗂️','responder a los correos':'📧',cliente:'🤝',departamento:'🏬',revisar:'✅',
padre:'👨',padres:'👨‍👩‍👦',hermano:'👦',hermanos:'👫',hijo:'👶',abuelo:'👴',nieto:'🧒',tío:'🧔',primo:'🧑',pareja:'💑',novio:'💑',
delgado:'🧍',guapo:'😍',joven:'🧒',mayor:'🧓',moreno:'👱🏽',rubio:'👱',
'tiene el pelo largo':'💇',simpático:'😊',antipático:'😠',trabajador:'💪',vago:'🛋️',ordenado:'🗄️',caótico:'🌪️',optimista:'🌞',pesimista:'🌧️',alegre:'😃',triste:'😢',tímido:'🙈',abierto:'🤗',
'empresa familiar':'👨‍👩‍👧',fundador:'🧑‍💼',empleados:'👥',exportar:'🚢',vender:'🏷️','líder del mercado':'🥇',sede:'🏢',
pan:'🍞',fruta:'🍎',verdura:'🥦',carne:'🥩',pescado:'🐟',marisco:'🦐',pollo:'🍗',huevos:'🥚',huevo:'🥚',queso:'🧀',jamón:'🍖',arroz:'🍚',leche:'🥛',agua:'💧',zumo:'🧃',vino:'🍷',cerveza:'🍺',
lunes:'📅',martes:'📅',miércoles:'📅',jueves:'📅',viernes:'📅',sábado:'🎉',domingo:'😴','fin de semana':'🏖️',
'reservar una mesa':'📞','está lleno':'🚫','menú del día':'📋',postre:'🍰','la cuenta, por favor':'🧾','pagar con tarjeta':'💳',camarero:'🧑‍🍳',
centro:'🏙️',parque:'🌳',plaza:'⛲',museo:'🏛️',catedral:'⛪',edificio:'🏢',mercado:'🛒',playa:'🏖️',tráfico:'🚦','casco antiguo':'🏰',
metro:'🚇',autobús:'🚌',tren:'🚆',coche:'🚗',bici:'🚲',avión:'✈️','a pie':'🚶',parada:'🚏',estación:'🚉',
'seguir todo recto':'⬆️','girar a la derecha':'➡️','girar a la izquierda':'⬅️','cruzar la calle':'🚸',cerca:'📍',lejos:'🔭',
'tiempo libre':'🎈','hacer deporte':'🏃','ir al gimnasio':'🏋️',nadar:'🏊','jugar al tenis':'🎾','salir con amigos':'🍻','leer un libro':'📖','ir de excursión':'🥾',montaña:'⛰️',naturaleza:'🌿',encantar:'😍',
'habitación doble':'🛏️',tranquila:'🤫',ruidosa:'📢','con ducha':'🚿','aire acondicionado':'❄️',calefacción:'🔥',piscina:'🏊','desayuno incluido':'🥐',precio:'💶',
toalla:'🧴','faltan toallas':'🧴','está sucio':'🧽','hay mucho ruido':'🔊',técnico:'🔧',queja:'😤',
sueldo:'💰','horario flexible':'🕘',teletrabajo:'🏠💻',teletrabajar:'🏠💻',jornada:'⏰',creativo:'💡',estresante:'😫',compañero:'🧑‍🤝‍🧑',vacaciones:'🌴',reunión:'👥',
levantarse:'🛏️',despertarse:'⏰',ducharse:'🚿',vestirse:'👕',acostarse:'😴',reunirse:'👥',cita:'📅',agenda:'📒',
camiseta:'👕',camisa:'👔',blusa:'👚',jersey:'🧶',pantalones:'👖',vaqueros:'👖',falda:'👗',vestido:'👗',traje:'🤵',chaqueta:'🧥',abrigo:'🧥',zapatos:'👞',botas:'🥾',
'hace calor':'🥵','hace frío':'🥶','hace sol':'☀️','hace viento':'💨',llueve:'🌧️',nieva:'❄️','hay niebla':'🌫️',tiempo:'🌤️',grado:'🌡️',
habitación:'🛏️',despacho:'🗄️',cocina:'🍳',baño:'🛁',puerta:'🚪',ventana:'🪟',pared:'🧱',terraza:'🌇',balcón:'🌇',ascensor:'🛗',
escritorio:'🖥️',mesa:'🪑',silla:'🪑',estantería:'📚',armario:'🚪',lámpara:'💡',sofá:'🛋️',cama:'🛏️',
mudarse:'📦',nacer:'👶','ir a la escuela':'🏫','hacer un intercambio':'🌍','empezar a trabajar':'💼',
currículum:'📄','carta de presentación':'✉️',puesto:'💼','oferta de trabajo':'📰',entrevista:'🤝',
botella:'🍾',lata:'🥫',paquete:'📦',bolsa:'🛍️','barra de pan':'🥖'};
window.picOf=function(es,explicit){if(explicit)return explicit;
  let k=String(es).toLowerCase().replace(/[¿?¡!]/g,'').replace(/\(.*?\)/g,'').split(' / ')[0].replace(/\s*….*$/,'').trim();
  if(EMOJI[k])return EMOJI[k];k=k.replace(window.LANG&&LANG.articles||/^(el|la|los|las|un|una)\s+/,'').trim();
  return EMOJI[k]||'';};
