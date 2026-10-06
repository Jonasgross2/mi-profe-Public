"""Verständnisfragen der Geschichten (c_stories.js, Feld qs) neu setzen: python3 quellcode/story_qs.py
Typen: mc {q,opts,a} · tf {t:'tf',q:Aussage,a:true|false} · gap {t:'gap',q:'… ___ …',a:['Lösung|Alternative']}"""
import json, re, pathlib
MC=lambda q,o:{'q':q,'opts':o,'a':0}
TF=lambda q,a:{'t':'tf','q':q,'a':a}
GAP=lambda q,a:{'t':'gap','q':q,'a':[a]}
QS={
's1':[MC('¿Quién es Laia?',['una chica de Barcelona','una profesora de Hamburgo','la hermana de Ben']),MC('¿Qué idioma quiere practicar Laia?',['alemán','español','catalán']),
  TF('Ben es de Barcelona.',False),TF('Ben habla un poco de español.',True),GAP('Ben estudia ___.','informática'),GAP('Laia y Ben van al centro en ___.','autobús|el autobús')],
's2':[MC('¿Dónde vive Ben?',['en un piso en Gràcia','en una casa en Valencia','en una residencia de estudiantes']),MC('¿Qué problema hay con Pablo?',['Escucha música muy tarde.','Nunca cocina.','No paga el piso.']),
  TF('Nuria trabaja en una universidad.',False),TF('El piso no es muy grande.',True),GAP('A Ben le gustan las ___ del balcón.','plantas'),GAP('La madre de Nuria siempre pregunta si Nuria ___ bien.','come')],
's3':[MC('¿Por qué le sorprende a Ben la hora de la cena?',['En Alemania a esa hora ya está en la cama.','No tiene hambre.','El bar está cerrado.']),MC('¿Qué es la crema catalana?',['un postre típico','una bebida','una tapa de patatas']),
  TF('Ben bebe cerveza.',False),TF('En el bar hay muchas personas.',True),GAP('La cena cuesta ___ euros.','treinta|30'),GAP('Marc es un ___ de la universidad.','compañero|amigo')],
's4':[MC('¿Adónde quiere ir Ben el sábado?',['a la playa','a la universidad','a la montaña']),MC('¿A qué línea tiene que cambiar Ben?',['a la amarilla','a la verde','a la roja']),
  TF('La señora no sabe dónde está la playa.',False),TF('Al final, Ben llega a la playa.',True),GAP('Desde la estación, Ben tiene que ir todo ___ unos diez minutos.','recto'),GAP('Ben tiene que bajar en la estación ___.','Barceloneta')],
's5':[MC('¿Qué es Sitges?',['un pueblo en la costa','un barrio de Barcelona','una playa de Hamburgo']),MC('¿Qué han comido?',['paella','tapas','pizza']),
  TF('El agua del mar estaba caliente.',False),TF('Ben nunca ha estado antes en un pueblo así.',True),GAP('En tren, el viaje dura ___ minutos.','cuarenta|40'),GAP('Han vuelto a casa cansados, pero ___.','contentos|muy contentos')],
's6':[MC('¿Qué desayuna Ben normalmente?',['café con leche y una tostada','nada','zumo y cereales']),MC('Hoy, ¿qué no ha hecho Ben?',['No ha desayunado.','No se ha vestido.','No ha ido a clase.']),
  TF('Normalmente, Marc llega puntual.',False),TF('Hoy Ben se ha vestido muy rápido.',True),GAP('Ben tiene clase a las ___.','nueve|9'),GAP('Hoy el que llega tarde es ___.','Ben')],
's7':[MC('¿Qué va a hacer Nuria en el puente?',['visitar a su familia','ir a un festival','ir a los Pirineos']),MC('¿Qué van a llevar Ben y Laia por el mal tiempo?',['chaquetas y botas','paraguas','nada especial']),
  TF('El viernes del puente muchos catalanes trabajan.',False),TF('Puigcerdà está en la montaña.',True),GAP('Pablo va a ir a un ___ de música.','festival'),GAP('El domingo van a volver por la ___.','costa')],
's8':[MC('¿Quién es el señor Puig?',['el casero de Ben y Nuria','el abuelo de Nuria','un profesor de la universidad']),MC('Según el señor Puig, ¿cómo era Gràcia antes?',['Había menos turistas.','Había más coches.','Era más grande.']),
  TF('Antes los vecinos no se conocían.',False),TF('Los jóvenes iban a bailar a una plaza.',True),GAP('El señor Puig tiene ___ años.','ochenta|80'),GAP('Antes, ___ llegaba tarde a las citas.','nadie')],
's9':[MC('¿Dónde está la empresa?',['en el barrio de las startups','en el centro de Madrid','en Alemania']),MC('¿Qué hizo Marc la mañana de la entrevista?',['Leyó su currículum varias veces.','Durmió hasta tarde.','Llamó a la empresa.']),
  TF('Marc llegó tarde a la entrevista.',False),TF('Marc está aprendiendo alemán.',True),GAP('La entrevistadora fue muy ___.','amable'),GAP('Esa noche Marc y sus amigos lo ___ en un bar.','celebraron')],
's10':[MC('¿Qué es la Mercè?',['la gran fiesta de Barcelona','una farmacia del barrio','una amiga de Nuria']),MC('¿Qué le trajo Nuria a Ben?',['un jarabe y una sopa','un ibuprofeno y una pizza','entradas para el correfoc']),
  TF('Ben fue al correfoc el viernes por la noche.',False),TF('El domingo Ben estaba mejor.',True),GAP('Nuria le dice: «Bebe mucha ___».','agua'),GAP('Los castellers tenían ___ pisos de personas.','nueve|9')],
's11':[MC('¿De dónde viene Lukas?',['de Mannheim','de Hamburgo','de Valencia']),MC('Según Nuria, ¿qué debería hacer Lukas?',['descubrir la ciudad solo','leer bien la lista de Ben','quedarse en casa']),
  TF('Ben le recomienda a Lukas que traiga solo ropa de invierno.',False),TF('Si llueve, Nuria los lleva a comer arroz.',True),GAP('Ben le aconseja a Lukas que ___ una tarjeta de transporte en el aeropuerto.','compre'),GAP('Ojalá no ___ el sábado.','llueva')],
's12':[MC('¿Qué tiempo hacía esa noche?',['Llovía mucho.','Hacía calor.','Nevaba.']),MC('¿Por qué estaba preocupado Ben?',['No había guardado su trabajo.','Tenía hambre.','Pablo se había perdido.']),
  TF('Solo se fue la luz en su piso.',False),TF('Al final, el trabajo de Ben no se perdió.',True),GAP('Nuria encontró unas ___ en la cocina.','velas'),GAP('La luz volvió a las ___.','once|11')],
's13':[MC('¿Cómo reaccionó Ben al recibir la oferta?',['No se alegró tanto como pensaba.','Se puso muy contento enseguida.','La rechazó en el acto.']),MC('¿Qué hizo Ben cuando no podía dormir?',['Salió a pasear por el barrio.','Llamó a la empresa.','Tocó la guitarra en una plaza.']),
  TF('Laia le dijo enseguida que aceptara la oferta.',False),TF('Ben se acordó de su primer día en Barcelona.',True),GAP('Nuria: «Si yo ___ tú, lo aceptaría».','fuera|fuese'),GAP('La empresa le contestó que lo ___.','estudiaría|estudiarían')],
's14':[MC('¿Qué había en las primeras páginas del cuaderno?',['recetas de cocina','un diario','facturas']),MC('¿Quién era Mercè?',['una chica de diecisiete años de Gràcia','la jefa de Laia','una abuela de ochenta años']),
  TF('Laia encontró el cuaderno porque lo estaba buscando.',False),TF('En su diario, Mercè también contaba cosas normales, como un baile.',True),GAP('Laia hacía ___ en el archivo de la biblioteca.','prácticas'),GAP('Buscando una vida, encontraron ___.','cientos')],
's15':[MC('¿Qué todavía no le sale bien a Ben?',['pelar gambas sin mancharse','usar el metro','entender los refranes']),MC('¿Dónde vive Pablo ahora?',['en Madrid','en Sevilla','en Gràcia']),
  TF('Ben todavía duda sobre dónde quiere vivir.',False),TF('Ahora Ben presta atención a lo que la gente no dice.',True),GAP('Laia dice que Ben es «más ___ que el mar».','mediterráneo'),GAP('«Más vale tarde que ___».','nunca')],
}
p=pathlib.Path(__file__).parent/'src'/'es'/'c_stories.js'
out=[];cur=None;n=0
for ln in p.read_text(encoding='utf-8').split('\n'):
    m=re.match(r"^\{id:'(s\d+)'",ln)
    if m: cur=m.group(1)
    if ln.startswith('qs:[') and cur in QS:
        ln='qs:'+json.dumps(QS[cur],ensure_ascii=False)+ln[ln.rindex(']')+1:];n+=1
    out.append(ln)
p.write_text('\n'.join(out),encoding='utf-8');print('ok',n)
