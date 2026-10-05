/* ===== C1 Teil 1: Unidad 34–36 – eigene Inhalte nach dem Plan Curricular (Instituto Cervantes) ===== */

COURSE.units.push({id:'u32',n:'34',level:'C1',title:'Matices',sub:'Subjuntivo mit Bedeutungswechsel (decir, sentir, comprender que) · el hecho de que · Que + Subj. am Satzanfang · Kommunikation & Missverständnisse',
goals:['Verben mit zwei Bedeutungen: decir que + Ind. (mitteilen) / + Subj. (auffordern)','sentir que + Ind. (spüren) / + Subj. (bedauern)','comprender / entender que + Ind. (begreifen) / + Subj. (Verständnis haben)','el hecho de que + Subj. (meist)','Que + Subj. am Satzanfang: Que no venga no me extraña','Missverständnisse klären und Nuancen ausdrücken'],
situacion:{title:'Ein Missverständnis klären',npc:'Laia',scene:'Laia ist sauer, weil du ihren Geburtstag vergessen hast – oder glaubt sie das nur? Ihr trefft euch, um das zu klären.',role:'Du bist Laia, gute Freundin von Jonas, verletzt, aber offen für ein Gespräch. Ihr duzt euch. Sag, was dich gestört hat (Me molestó que no dijeras nada…, El hecho de que no llamaras…), hör dir Jonas’ Erklärung an und reagiere differenziert (Entiendo que estuvieras ocupado, pero…; Siento que…). Benutze Verben mit Bedeutungswechsel.',goal:'Kläre das Missverständnis mit nuancierten Formulierungen: Siento que…, Entiendo que + Subj., El hecho de que…, Te digo que + Ind./Subj.'},
lessons:[
{id:'l1',title:'Gleiches Verb, andere Bedeutung',desc:'decir que · sentir que · comprender que',steps:[
 {t:'info',title:'Der Modus verändert die Bedeutung',html:`<table><tr><th>Verb</th><th>+ Indikativ</th><th>+ Subjuntivo</th></tr>
 <tr><td class="es-t">decir que</td><td>mitteilen: <span class="es-t">Dice que <b>viene</b>.</span></td><td>auffordern: <span class="es-t">Dice que <b>vengas</b>.</span></td></tr>
 <tr><td class="es-t">sentir que</td><td>spüren: <span class="es-t">Siento que algo <b>va</b> mal.</span></td><td>bedauern: <span class="es-t">Siento que <b>estés</b> mal.</span></td></tr>
 <tr><td class="es-t">comprender / entender que</td><td>begreifen: <span class="es-t">Entendí que no <b>había</b> plazas.</span></td><td>Verständnis haben: <span class="es-t">Entiendo que <b>estés</b> enfadada.</span></td></tr>
 <tr><td class="es-t">temer(se) que</td><td>befürchten (eher sicher): <span class="es-t">Me temo que no <b>hay</b> solución.</span></td><td>Angst haben: <span class="es-t">Temo que no <b>haya</b> solución.</span></td></tr></table>
 <div class="ex">Denk an die Grundlogik: Indikativ = Information, Tatsache. Subjuntivo = Wunsch, Bewertung, Gefühl.</div>`},
 {t:'mc',q:'„Es tut mir leid, dass du krank bist.“',opts:['Siento que estés enferma.','Siento que estás enferma.','Siento estar enferma.'],a:0},
 {t:'mc',q:'„Er sagt, du sollst ihn anrufen.“',opts:['Dice que lo llames.','Dice que lo llamas.','Dice llamarlo.'],a:0},
 {t:'mc',q:'Leyendo el contrato, comprendí que me ___ engañado.',opts:['habían','hubieran','hayan'],a:0},
 {t:'gap',q:'Entiendo que ___ (tú, estar) enfadada, pero déjame explicarte.',a:['estés']},
 {t:'gap',q:'Siento que alguien me ___ (seguir). (Ich spüre es.)',a:['sigue']},
 {t:'gap',q:'Me temo que no ___ (quedar) entradas para hoy.',a:['quedan']},
 {t:'tr',de:'Ich habe dir gesagt, dass du nicht kommen sollst.',a:['Te dije que no vinieras.','Te he dicho que no vengas.']}]},
{id:'l2',title:'Die Tatsache, dass …',desc:'el hecho de que · Que no venga…',steps:[
 {t:'info',title:'Bekanntes bewerten',html:`<p>Wenn eine bekannte Tatsache zum <b>Thema</b> wird, steht meist der Subjuntivo:</p>
 <table><tr><th>Struktur</th><th>Beispiel</th></tr>
 <tr><td class="es-t">el hecho de que + Subj.</td><td class="es-t">El hecho de que no <b>llamara</b> me dolió.</td></tr>
 <tr><td class="es-t">Que + Subj. (am Satzanfang)</td><td class="es-t">Que no <b>quiera</b> venir no me extraña.</td></tr>
 <tr><td class="es-t">lo de que / eso de que + Subj./Ind.</td><td class="es-t">Eso de que te <b>vayas</b> no me gusta nada.</td></tr></table>
 <div class="ex">Gleiche Aussage, anderer Fokus: <span class="es-t">No me extraña que no quiera venir.</span> – Mit <i>que</i> vorne wird die Tatsache betont.</div>`},
 {t:'mc',q:'El hecho de que nadie ___ nada es sospechoso.',opts:['dijera','dijo','diría'],a:0},
 {t:'mc',q:'___ llegue tarde otra vez no me sorprende.',opts:['Que','El que de','Lo que'],a:0},
 {t:'gap',q:'Que ___ (tú, tener) razón no significa que puedas gritar.',a:['tengas']},
 {t:'gap',q:'El hecho de que ___ (ser) gratis no lo hace mejor.',a:['sea']},
 {t:'order',es:'Que no me avisaras fue lo que más me molestó.',de:'Dass du mir nicht Bescheid gesagt hast, hat mich am meisten gestört.'},
 {t:'tr',de:'Die Tatsache, dass er nicht gekommen ist, sagt viel.',a:['El hecho de que no haya venido dice mucho.','El hecho de que no viniera dice mucho.']}]},
{id:'l3',title:'Nuancen im Gespräch',desc:'Wortschatz · Klärungsgespräch',steps:[
 {t:'vocab',title:'Kommunikation & Gefühle',items:[['el malentendido','das Missverständnis','🤷'],['malinterpretar','missverstehen','🔀'],['sentirse dolido','gekränkt sein','💔'],['dar explicaciones','Erklärungen geben','🗣️'],['no era mi intención','das war nicht meine Absicht','🙏'],['ponerse en el lugar de alguien','sich in jemanden hineinversetzen','🔄'],['echar en cara','vorwerfen','👉'],['hacer las paces','sich versöhnen','🕊️'],['guardar rencor','nachtragend sein','😒'],['quitar hierro al asunto','die Sache entschärfen','🧯'],['a mi entender','meines Erachtens','🧠'],['dicho sea de paso','nebenbei bemerkt','💬']]},
 {t:'dialog',place:'Terraza en Gràcia',title:'Der vergessene Geburtstag',scene:'Laia rührt in ihrem Café, ohne dich anzusehen.',lines:[
  {n:'Laia',es:'No te voy a mentir: el hecho de que no me felicitaras me sentó fatal.',de:'Ich will nicht lügen: Dass du mir nicht gratuliert hast, hat mich echt getroffen.'},
  {you:true,opts:[{es:'Lo siento mucho. Entiendo que te sintieras dolida; no era mi intención.',ok:true},{es:'Lo siento mucho. Entiendo que te sentiste dolida; no era mi intención.',ok:false,why:'Verständnis haben → <i>entiendo que</i> + Subj.: <i>te sintieras</i>.'}]},
  {n:'Laia',es:'Ya, pero que ni siquiera me mandaras un mensaje…',de:'Schon, aber dass du mir nicht mal eine Nachricht geschickt hast …'},
  {you:true,opts:[{es:'Te lo mandé, pero me temo que no te llegó: tenía el móvil sin cobertura en el Pirineo.',ok:true},{es:'Te lo mandé, pero me temo que no te llegara: tenía el móvil sin cobertura en el Pirineo.',ok:false,why:'Hier „leider ist es so“ (Info) → <i>me temo que</i> + Ind.: <i>no te llegó</i>.'}]},
  {n:'Laia',es:'¿En serio? Pues siento que te lo haya echado en cara así.',de:'Echt? Dann tut es mir leid, dass ich es dir so vorgeworfen habe.'},
  {you:true,opts:[{es:'No pasa nada. ¿Hacemos las paces con una cena? Invito yo.',ok:true},{es:'No pasa nada. ¿Hacemos la paz con una cena? Invito yo.',ok:false,why:'Feste Wendung: <i>hacer las paces</i>.'}]}]},
 {t:'speak',es:'Entiendo que estés molesta, pero te digo que no fue a propósito.',de:'Ich verstehe, dass du verärgert bist, aber ich sage dir, dass es keine Absicht war.'}]},
{id:'l4',title:'Lesen: Lo que no se dice',desc:'Essay · eigener Text',steps:[
 {t:'read',title:'Lo que no se dice',text:`Los lingüistas calculan que buena parte de lo que comunicamos no está en las palabras, sino en cómo y cuándo las decimos. Que alguien tarde en contestar un mensaje, por ejemplo, puede interpretarse como desinterés, aunque la razón sea simplemente que estaba conduciendo.

El hecho de que cada vez nos comuniquemos más por escrito ha multiplicado los malentendidos. En una conversación cara a cara, notamos enseguida si el otro está bromeando; en un chat, en cambio, un simple «vale» puede sonar frío o enfadado. Por eso hay quien sostiene que los emojis no son una moda infantil, sino una forma de {recuperar|zurückgewinnen} el tono que la escritura nos quita.

A mi entender, el problema no es la tecnología, sino que olvidamos ponernos en el lugar del otro. Que alguien nos responda con una sola palabra no significa necesariamente que esté molesto. Quizá, antes de sentirnos dolidos, deberíamos preguntar.`,de:`Linguisten schätzen, dass ein großer Teil dessen, was wir mitteilen, nicht in den Worten liegt, sondern darin, wie und wann wir sie sagen. Dass jemand lange braucht, um auf eine Nachricht zu antworten, kann zum Beispiel als Desinteresse gedeutet werden, auch wenn der Grund einfach ist, dass er gerade Auto fuhr.\n\nDie Tatsache, dass wir immer mehr schriftlich kommunizieren, hat die Missverständnisse vervielfacht. Im Gespräch von Angesicht zu Angesicht merken wir sofort, ob der andere scherzt; im Chat dagegen kann ein einfaches „okay“ kalt oder verärgert klingen. Deshalb vertreten manche die Ansicht, dass Emojis keine kindische Mode sind, sondern eine Möglichkeit, den Ton zurückzugewinnen, den uns das Schreiben nimmt.\n\nMeines Erachtens ist das Problem nicht die Technik, sondern dass wir vergessen, uns in den anderen hineinzuversetzen. Dass uns jemand mit einem einzigen Wort antwortet, heißt nicht unbedingt, dass er verärgert ist. Vielleicht sollten wir nachfragen, bevor wir uns gekränkt fühlen.`},
 {t:'mc',q:'Según el texto, ¿por qué han aumentado los malentendidos?',opts:['porque nos comunicamos más por escrito','porque usamos demasiados emojis','porque hablamos demasiado rápido'],a:0},
 {t:'mc',q:'¿Qué opina el autor?',opts:['Que deberíamos ponernos en el lugar del otro.','Que la tecnología es el problema.','Que los emojis son infantiles.'],a:0},
 {t:'gap',q:'Que alguien ___ (tardar) en contestar no significa que esté molesto.',a:['tarde']},
 {t:'free',task:'Erzähl von einem Missverständnis, das du erlebt hast (persönlich oder schriftlich). Wie kam es dazu, wie wurde es geklärt? (8–10 Sätze)',hint:'El hecho de que … · Que … no significa que … · Entiendo que … · Siento que … · Me temo que … · Dicho sea de paso …',focus:'Subjuntivo mit Bedeutungswechsel, el hecho de que, Que + Subj.',model:'El año pasado tuve un malentendido con mi compañero de piso. Le escribí «Tenemos que hablar del baño» y él entendió que estaba muy enfadado. El hecho de que no pusiera ningún emoji le hizo pensar lo peor. Cuando llegué a casa, me esperaba con una lista de excusas. Le dije que solo quería que compráramos un espejo nuevo. Nos echamos a reír. Desde entonces, entiendo que un mensaje corto pueda sonar mucho más serio de lo que es. Dicho sea de paso, ahora uso muchos más emojis.'}]}
],
placement:[
 {t:'mc',q:'„Es tut mir leid, dass du gehst.“',opts:['Siento que te vayas.','Siento que te vas.','Siento irte.'],a:0},
 {t:'mc',q:'El hecho de que no ___ nadie fue una pena.',opts:['viniera','vino','vendría'],a:0},
 {t:'gap',q:'Dile que me ___ (llamar) mañana. (Aufforderung)',a:['llame']},
 {t:'gap',q:'Me temo que no ___ (tener) tiempo hoy.',a:['tengo']},
 {t:'mc',q:'Que ___ cansado es normal después de tanto trabajo.',opts:['estés','estás','estarás'],a:0},
 {t:'mc',q:'„Missverständnis“',opts:['el malentendido','el desentendido','el maloído'],a:0}],
resumen:`<h3>Modus ändert Bedeutung</h3><p class="es-t">decir que + Ind. (mitteilen) / + Subj. (auffordern) · sentir que + Ind. (spüren) / + Subj. (bedauern) · entender que + Ind. (begreifen) / + Subj. (Verständnis) · me temo que + Ind.</p>
<h3>Bekanntes als Thema</h3><p class="es-t">El hecho de que + Subj. · Que + Subj. … no me extraña · Eso de que …</p>`});

COURSE.units.push({id:'u33',n:'35',level:'C1',title:'Hablando en plata',sub:'Umgangssprache & Redewendungen (meter la pata, estar hasta las narices) · Register wechseln · Abschwächen & Verstärken · Sprachvarietäten in Spanien',
goals:['häufige Redewendungen verstehen und benutzen','Umgangssprache (mola, flipar, currar, tío) erkennen','Registerwechsel: umgangssprachlich ↔ neutral ↔ formell','Abschwächen: un poco, más bien, digamos, igual','Verstärken: súper-, -ísimo, de lo más, la mar de','Varietäten: Spanien, Lateinamerika, Kontakt mit Katalanisch'],
situacion:{title:'Feierabend mit Kollegen',npc:'Dani',scene:'Freitagabend, After-Work-Bier mit Dani aus deinem Team. Dani redet sehr umgangssprachlich und erzählt vom chaotischen Arbeitstag.',role:'Du bist Dani, Kollege von Jonas, Ende 20, aus Madrid, sehr umgangssprachlich und lustig. Ihr duzt euch. Erzähl vom Tag mit vielen Redewendungen (estar hasta las narices, meter la pata, ser pan comido, tomar el pelo, currar, flipar, mola). Frag Jonas, ob er alles versteht, und erklär Ausdrücke, wenn er nachfragt.',goal:'Versteh Danis Umgangssprache, frag bei Unbekanntem nach und benutze selbst mindestens drei Redewendungen passend.'},
lessons:[
{id:'l1',title:'Redewendungen',desc:'meter la pata · ser pan comido',steps:[
 {t:'vocab',title:'Häufige Redewendungen',items:[['meter la pata','ins Fettnäpfchen treten','🦶'],['ser pan comido','ein Kinderspiel sein','🍞'],['estar hasta las narices (de)','die Nase voll haben (von)','👃'],['tomar el pelo','jemanden auf den Arm nehmen','💇'],['costar un ojo de la cara','ein Vermögen kosten','👁️'],['no tener pelos en la lengua','kein Blatt vor den Mund nehmen','👅'],['estar en las nubes','geistig abwesend sein','☁️'],['echar una mano','helfen','🤲'],['ir al grano','zur Sache kommen','🌾'],['dar en el clavo','den Nagel auf den Kopf treffen','🔨'],['ponerse las pilas','sich ranhalten','🔋'],['tirar la toalla','das Handtuch werfen','🏳️']]},
 {t:'match',q:'Was bedeutet …?',pairs:[['ir al grano','zur Sache kommen'],['tirar la toalla','aufgeben'],['estar en las nubes','unaufmerksam sein'],['dar en el clavo','genau richtig liegen'],['ponerse las pilas','sich anstrengen']]},
 {t:'mc',q:'El examen fue fácil, ___.',opts:['pan comido','un ojo de la cara','hasta las narices'],a:0},
 {t:'mc',q:'„Ich bin ins Fettnäpfchen getreten.“',opts:['He metido la pata.','He metido el pie.','He tomado el pelo.'],a:0},
 {t:'gap',q:'Este piso cuesta un ojo de la ___.',a:['cara']},
 {t:'gap',q:'¡No me tomes el ___! ¿De verdad te ha tocado la lotería?',a:['pelo']},
 {t:'tr',de:'Ich habe die Nase voll von diesem Lärm.',a:['Estoy hasta las narices de este ruido.']}]},
{id:'l2',title:'Umgangssprache',desc:'mola · flipar · currar',steps:[
 {t:'info',title:'Wie junge Leute in Spanien reden',html:`<table><tr><th>umgangssprachlich</th><th>neutral</th><th>Deutsch</th></tr>
 <tr><td class="es-t">currar / el curro</td><td class="es-t">trabajar / el trabajo</td><td>schuften / Job</td></tr>
 <tr><td class="es-t">mola / no mola</td><td class="es-t">me gusta / es genial</td><td>ist cool</td></tr>
 <tr><td class="es-t">flipar</td><td class="es-t">sorprenderse mucho</td><td>ausflippen, staunen</td></tr>
 <tr><td class="es-t">tío / tía</td><td class="es-t">(Anrede unter Freunden)</td><td>Alter, Mann</td></tr>
 <tr><td class="es-t">guay</td><td class="es-t">estupendo</td><td>cool</td></tr>
 <tr><td class="es-t">la pasta</td><td class="es-t">el dinero</td><td>die Kohle</td></tr>
 <tr><td class="es-t">estar rayado / rayarse</td><td class="es-t">estar preocupado</td><td>sich einen Kopf machen</td></tr>
 <tr><td class="es-t">ser un rollo</td><td class="es-t">ser aburrido</td><td>öde sein</td></tr></table>
 <div class="ojo">Super nützlich zum Verstehen – aber im Job-Gespräch oder in E-Mails weglassen.</div>`},
 {t:'mc',q:'„Mi curro“ heißt …',opts:['mein Job','mein Auto','mein Freund'],a:0},
 {t:'mc',q:'Neutral für „¡Cómo mola tu chaqueta!“:',opts:['¡Qué chaqueta tan bonita!','¡Qué chaqueta tan cara!','¡Qué chaqueta tan rara!'],a:0},
 {t:'gap',q:'¡Flipé ___ colores cuando lo vi! (feste Wendung)',a:['en']},
 {t:'match',q:'umgangssprachlich → neutral',pairs:[['la pasta','el dinero'],['currar','trabajar'],['ser un rollo','ser aburrido'],['guay','estupendo'],['rayarse','preocuparse']]},
 {t:'listen',es:'Tío, no te rayes, que el curro nuevo mola un montón.',de:'Alter, mach dir keinen Kopf, der neue Job ist echt cool.'}]},
{id:'l3',title:'Abschwächen & verstärken',desc:'más bien · de lo más · -ísimo',steps:[
 {t:'info',title:'Ton regulieren',html:`<table><tr><th>abschwächen</th><th>verstärken</th></tr>
 <tr><td class="es-t">un poco / algo · más bien · digamos que · igual (vielleicht) · ¿no te parece que …?</td><td class="es-t">súper- / requete- · -ísimo · de lo más + Adj. · la mar de · un montón · nada de nada</td></tr>
 <tr><td class="es-t">Es más bien caro. · Igual llegamos tarde.</td><td class="es-t">Es carísimo. · Fue de lo más raro. · Estoy la mar de bien.</td></tr></table>
 <div class="ex">Spanisch ist direkter als Deutsch bei Bitten (<i>Ponme un café</i>), aber bei Kritik wird gern abgeschwächt: <span class="es-t">No está mal, pero igual podríamos …</span></div>`},
 {t:'mc',q:'Höflichere Kritik:',opts:['El informe está bien, aunque igual habría que revisar los datos.','El informe está fatal.','El informe es un rollo.'],a:0},
 {t:'mc',q:'„Das war total seltsam.“',opts:['Fue de lo más raro.','Fue más bien raro.','Fue algo raro.'],a:0},
 {t:'gap',q:'Estoy cansad___. (-ísimo, ich bin todmüde)',a:['ísimo']},
 {t:'dialog',place:'Bar después del trabajo',title:'Danis Freitag',scene:'Dani bestellt zwei cañas und legt los.',lines:[
  {n:'Dani',es:'Tío, estoy hasta las narices. El jefe me ha tenido currando hasta las siete.',de:'Alter, ich hab die Nase voll. Der Chef hat mich bis sieben schuften lassen.'},
  {you:true,opts:[{es:'¡Qué rollo! ¿Y eso? ¿Metiste la pata con algo?',ok:true},{es:'¡Qué rollo! ¿Y eso? ¿Metiste el pie con algo?',ok:false,why:'Die Wendung lautet <i>meter la pata</i>.'}]},
  {n:'Dani',es:'¡Qué va! El cliente cambió todo a última hora. Pero bueno, lo sacamos. Era pan comido, en realidad.',de:'Ach was! Der Kunde hat in letzter Minute alles geändert. Aber gut, wir haben es geschafft. Eigentlich ein Kinderspiel.'},
  {you:true,opts:[{es:'Pues te has ganado la caña. ¡Invito yo!',ok:true},{es:'Pues te has ganado la caña. ¡Tomo el pelo yo!',ok:false,why:'<i>tomar el pelo</i> = jemanden veräppeln. Einladen: <i>invito yo</i>.'}]},
  {n:'Dani',es:'¡Qué majo eres! Por cierto, ¿entiendes todo lo que digo o voy muy rápido?',de:'Wie nett von dir! Übrigens, verstehst du alles, was ich sage, oder bin ich zu schnell?'},
  {you:true,opts:[{es:'Casi todo, aunque «majo» no sé muy bien qué significa.',ok:true},{es:'Casi todo, aunque «majo» no sepa muy bien qué significa.',ok:false,why:'Tatsache (ich weiß es wirklich nicht) → Indikativ: <i>no sé</i>.'}]},
  {n:'Dani',es:'Majo es como simpático, buena gente. Muy de aquí… bueno, de Madrid.',de:'Majo ist so wie nett, ein guter Mensch. Sehr typisch hier … na ja, für Madrid.'}]}]},
{id:'l4',title:'Lesen: ¿Cuántos españoles?',desc:'Sprachvarietäten · Register-Übung',steps:[
 {t:'read',title:'Un idioma, muchas voces',text:`Cuando llegué a Barcelona, había estudiado un español «de manual» y pensaba que lo entendería todo. Error. En la universidad, mis compañeros mezclaban castellano y catalán en la misma frase: «Ens veiem luego, ¿vale?». En la radio, un locutor andaluz se comía la mitad de las {consonantes|Konsonanten}, y mi compañera de piso, que es de Sevilla, decía «quillo» cada dos por tres.

Luego conocí a una argentina que usaba «vos» en lugar de «tú» y a un mexicano para quien «coger» el autobús sonaba fatal. Tardé meses en entender que no hay un español correcto y otros incorrectos, sino muchas variedades igual de válidas. Lo que sí hay son registros: no hablamos igual con un amigo en el bar que con un profesor en una tutoría.

Hoy, más que «hablar bien», intento hablar de forma adecuada: saber cuándo puedo decir «tío, qué guay» y cuándo es mejor un «me parece estupendo». Y, dicho sea de paso, ya no me pierdo cuando alguien me dice «quillo».`,de:`Als ich nach Barcelona kam, hatte ich ein Spanisch „aus dem Lehrbuch“ gelernt und dachte, ich würde alles verstehen. Irrtum. An der Uni mischten meine Kommilitonen Spanisch und Katalanisch im selben Satz: „Ens veiem luego, ¿vale?“. Im Radio verschluckte ein andalusischer Moderator die Hälfte der Konsonanten, und meine Mitbewohnerin, die aus Sevilla ist, sagte alle naslang „quillo“.\n\nDann lernte ich eine Argentinierin kennen, die „vos“ statt „tú“ benutzte, und einen Mexikaner, für den „coger“ beim Bus furchtbar klang. Ich brauchte Monate, um zu verstehen, dass es nicht ein richtiges Spanisch und andere falsche gibt, sondern viele gleich gültige Varietäten. Was es aber gibt, sind Register: Wir sprechen mit einem Freund in der Bar nicht so wie mit einem Professor in der Sprechstunde.\n\nHeute versuche ich weniger, „gut“ zu sprechen, als angemessen zu sprechen: zu wissen, wann ich „tío, qué guay“ sagen kann und wann ein „me parece estupendo“ besser ist. Und nebenbei bemerkt verliere ich nicht mehr den Faden, wenn jemand „quillo“ zu mir sagt.`},
 {t:'mc',q:'¿Qué aprendió el autor?',opts:['que hay muchas variedades válidas y distintos registros','que el español de manual es el único correcto','que en Barcelona solo se habla catalán'],a:0},
 {t:'mc',q:'En México, el autor aprendió que …',opts:['«coger» puede sonar mal','«vos» se usa en lugar de «tú»','«quillo» es un saludo'],a:0},
 {t:'free',task:'Schreib dieselbe Nachricht zweimal (je 3–4 Sätze): einmal umgangssprachlich an einen Freund, einmal formell an deine Professorin. Inhalt: Du kannst morgen nicht zum Treffen kommen, weil du krank bist, und schlägst einen neuen Termin vor.',hint:'informell: tío, no puedo, estoy fatal, ¿te va bien …? · formell: Estimada profesora: · Lamento comunicarle que … · ¿Le vendría bien …? · Un cordial saludo',focus:'Registerwechsel',model:'Informal: ¡Tío! Mañana no puedo ir, estoy fatal con fiebre. ¡Qué rollo! ¿Te va bien el jueves? Te invito a una caña para compensar.\n\nFormal: Estimada profesora Vidal: Lamento comunicarle que mañana no podré asistir a la tutoría, ya que me encuentro enfermo. ¿Le vendría bien el jueves a la misma hora? Un cordial saludo, Jonas'}]}
],
placement:[
 {t:'mc',q:'„ein Kinderspiel sein“',opts:['ser pan comido','meter la pata','tirar la toalla'],a:0},
 {t:'mc',q:'„Ich habe die Nase voll.“',opts:['Estoy hasta las narices.','Estoy en las nubes.','Estoy de lo más.'],a:0},
 {t:'mc',q:'„currar“ bedeutet …',opts:['arbeiten','laufen','kochen'],a:0},
 {t:'gap',q:'Me han tomado el ___: no había ningún examen. (veräppelt)',a:['pelo']},
 {t:'mc',q:'Abgeschwächt: „Es ist eher teuer.“',opts:['Es más bien caro.','Es carísimo.','Es de lo más caro.'],a:0},
 {t:'gap',q:'Esto cuesta un ojo de la ___.',a:['cara']}],
resumen:`<h3>Redewendungen</h3><p class="es-t">meter la pata · ser pan comido · estar hasta las narices · tomar el pelo · costar un ojo de la cara · ir al grano · dar en el clavo · tirar la toalla · ponerse las pilas</p>
<h3>Umgangssprache</h3><p class="es-t">currar · mola · flipar · tío/tía · guay · la pasta · rayarse · ser un rollo · majo</p>
<h3>Ton</h3><p class="es-t">abschwächen: más bien, igual, digamos · verstärken: -ísimo, de lo más, la mar de, súper-</p>`});

COURSE.units.push({id:'u34',n:'36',level:'C1',title:'Siempre que…',sub:'Bedingungen ohne si (siempre que, con tal de que, a no ser que, en caso de que) · de + Infinitiv (De haberlo sabido…) · como + Subj. als Drohung · Verträge & Verhandlungen',
goals:['siempre que / con tal de que + Subj. (vorausgesetzt, dass)','a no ser que / salvo que + Subj. (es sei denn)','en caso de que + Subj. / en caso de + Inf.','de + Infinitiv: De tener tiempo, iría · De haberlo sabido, …','como + Subj.: Como no vengas, me enfado','in Verhandlungen Bedingungen stellen'],
situacion:{title:'Gehaltsverhandlung',npc:'Sr. Ferrer',scene:'Die Firma aus München war nicht deine einzige Option: Ein Start-up in Barcelona will dich einstellen. Du verhandelst mit dem Gründer, Herrn Ferrer, über Gehalt, Homeoffice und Urlaub.',role:'Du bist Sr. Ferrer, Gründer eines Start-ups in Barcelona, freundlich, aber hart in Verhandlungen. Ihr siezt euch zuerst (usted), er kann zum tú wechseln. Mach ein Angebot, stell Bedingungen (siempre que…, a no ser que…, en caso de que…) und reagiere auf Jonas’ Gegenforderungen. Benutze auch de + Infinitiv.',goal:'Verhandle mit Bedingungen: Acepto siempre que…, Podría… con tal de que…, A no ser que…, En caso de que…'},
lessons:[
{id:'l1',title:'Vorausgesetzt, dass …',desc:'siempre que · con tal de que · a no ser que',steps:[
 {t:'info',title:'Bedingungs-Konnektoren mit Subjuntivo',html:`<table><tr><th>Konnektor</th><th>Bedeutung</th><th>Beispiel</th></tr>
 <tr><td class="es-t">siempre que / siempre y cuando</td><td>vorausgesetzt, dass</td><td class="es-t">Te lo presto siempre que me lo <b>devuelvas</b>.</td></tr>
 <tr><td class="es-t">con tal de que</td><td>sofern, Hauptsache</td><td class="es-t">Hago lo que sea con tal de que <b>estés</b> bien.</td></tr>
 <tr><td class="es-t">a no ser que / salvo que</td><td>es sei denn</td><td class="es-t">Iremos, a no ser que <b>llueva</b>.</td></tr>
 <tr><td class="es-t">en caso de que</td><td>falls</td><td class="es-t">En caso de que <b>haya</b> problemas, llámeme.</td></tr>
 <tr><td class="es-t">solo si</td><td>nur wenn (+ Ind.!)</td><td class="es-t">Solo si <b>tengo</b> tiempo.</td></tr></table>
 <div class="ojo"><i>siempre que</i> + <b>Ind.</b> = „immer wenn“: <span class="es-t">Siempre que vengo, llueve.</span> + <b>Subj.</b> = „vorausgesetzt“.</div>`},
 {t:'mc',q:'Puedes usar mi coche siempre que lo ___ limpio.',opts:['dejes','dejas','dejarás'],a:0},
 {t:'mc',q:'Siempre que ___ a Madrid, visito el Prado. (jedes Mal)',opts:['voy','vaya','iré'],a:0},
 {t:'mc',q:'Saldremos a las ocho, a no ser que ___ tráfico.',opts:['haya','hay','habrá'],a:0},
 {t:'gap',q:'En caso de que ___ (usted, necesitar) ayuda, pulse este botón.',a:['necesite']},
 {t:'gap',q:'Te ayudo con la mudanza con tal de que me ___ (invitar) a cenar.',a:['invites']},
 {t:'tr',de:'Wir kommen, es sei denn, es regnet.',a:['Vendremos, a no ser que llueva.','Iremos, a no ser que llueva.','Vendremos, salvo que llueva.']}]},
{id:'l2',title:'De haberlo sabido …',desc:'de + Infinitiv · como + Subj.',steps:[
 {t:'info',title:'Kompakte Bedingungen',html:`<table><tr><th>Form</th><th>= si …</th><th>Beispiel</th></tr>
 <tr><td class="es-t">de + Infinitiv</td><td>si + Imperf. Subj.</td><td class="es-t">De tener más tiempo, viajaría más.</td></tr>
 <tr><td class="es-t">de + haber + Partizip</td><td>si + Plusc. Subj.</td><td class="es-t">De haberlo sabido, no habría venido.</td></tr>
 <tr><td class="es-t">como + Subj.</td><td>Drohung / Warnung</td><td class="es-t">Como no estudies, suspenderás.</td></tr>
 <tr><td class="es-t">Gerundium</td><td>wenn man so …</td><td class="es-t">Trabajando así, no acabarás nunca.</td></tr></table>
 <div class="ex"><i>como</i> + Subj. klingt nach Drohung oder Warnung: <span class="es-t">¡Como lo vuelvas a hacer…!</span> – Wehe, du machst das noch mal!</div>`},
 {t:'mc',q:'De ___ antes, habríamos cogido el tren.',opts:['haber salido','salir','salido'],a:0},
 {t:'mc',q:'„Wehe, du kommst zu spät!“',opts:['¡Como llegues tarde…!','¡Como llegas tarde…!','¡Cuando llegues tarde…!'],a:0},
 {t:'gap',q:'De ___ (saber) que estabas enfermo, te habría llamado.',a:['haber sabido']},
 {t:'gap',q:'Como no te ___ (dar) prisa, perderemos el avión.',a:['des']},
 {t:'gap',q:'De ___ (ser) tú, aceptaría la oferta. (= si fuera tú)',a:['ser']},
 {t:'tr',de:'Hätte ich das gewusst, wäre ich nicht gekommen.',a:['De haberlo sabido, no habría venido.','Si lo hubiera sabido, no habría venido.']}]},
{id:'l3',title:'Verhandeln',desc:'Wortschatz · Gehaltsgespräch',steps:[
 {t:'vocab',title:'Arbeitsvertrag & Verhandlung',items:[['el contrato indefinido','der unbefristete Vertrag','📄'],['el sueldo bruto / neto','das Brutto-/Nettogehalt','💶'],['las pagas extra','die Sonderzahlungen','🎁'],['el periodo de prueba','die Probezeit','⏳'],['negociar','verhandeln','🤝'],['la contraoferta','das Gegenangebot','↔️'],['ceder','nachgeben','🫳'],['llegar a un acuerdo','sich einigen','✅'],['el teletrabajo','das Homeoffice','🏠'],['los días de vacaciones','die Urlaubstage','🌴'],['estar dispuesto a','bereit sein zu','🙋'],['la condición','die Bedingung','📌']]},
 {t:'dialog',place:'Oficina de una start-up en el 22@',title:'Die Verhandlung',scene:'Herr Ferrer schiebt dir einen Vertragsentwurf hin.',lines:[
  {n:'Sr. Ferrer',es:'Le ofrecemos 32.000 brutos al año, con seis meses de periodo de prueba.',de:'Wir bieten Ihnen 32.000 brutto im Jahr mit sechs Monaten Probezeit.'},
  {you:true,opts:[{es:'Me interesa mucho. Estaría dispuesto a aceptar siempre que pudiera teletrabajar dos días por semana.',ok:true},{es:'Me interesa mucho. Estaría dispuesto a aceptar siempre que puedo teletrabajar dos días por semana.',ok:false,why:'„vorausgesetzt“ → <i>siempre que</i> + Subj. (hier Imperf., da Konditional davor): <i>pudiera</i>.'}]},
  {n:'Sr. Ferrer',es:'Podría ser. Pero, en caso de que hubiera una reunión con clientes, tendría que venir.',de:'Das wäre möglich. Aber falls es ein Kundentreffen gäbe, müssten Sie kommen.'},
  {you:true,opts:[{es:'Por supuesto, a no ser que me avisaran con muy poco tiempo.',ok:true},{es:'Por supuesto, a no ser que me avisaban con muy poco tiempo.',ok:false,why:'<i>a no ser que</i> → immer Subjuntivo: <i>avisaran</i>.'}]},
  {n:'Sr. Ferrer',es:'Me parece razonable. ¿Algo más?',de:'Das klingt vernünftig. Sonst noch etwas?'},
  {you:true,opts:[{es:'De ser posible, me gustaría reducir el periodo de prueba a tres meses.',ok:true},{es:'De sería posible, me gustaría reducir el periodo de prueba a tres meses.',ok:false,why:'<i>de</i> + <b>Infinitiv</b>: <i>de ser posible</i>.'}]}]},
 {t:'speak',es:'Acepto la oferta siempre y cuando el contrato sea indefinido.',de:'Ich nehme das Angebot an, vorausgesetzt, der Vertrag ist unbefristet.'}]},
{id:'l4',title:'Lesen: Letra pequeña',desc:'Vertragsklauseln · eigene Bedingungen',steps:[
 {t:'read',title:'Condiciones de alquiler (extracto)',text:`Cláusula 4. El inquilino podrá tener animales de compañía siempre que no causen daños en la vivienda ni molestias a los vecinos. En caso de que se produzcan desperfectos, el importe de la reparación se descontará de la fianza.

Cláusula 7. El contrato se renovará automáticamente cada año, a no ser que alguna de las partes comunique lo contrario con un mínimo de dos meses de antelación. De no recibirse dicha comunicación, se entenderá que ambas partes aceptan la renovación.

Cláusula 9. El propietario no podrá entrar en la vivienda salvo que exista una emergencia o que el inquilino lo autorice expresamente. Asimismo, el inquilino se compromete a permitir las visitas necesarias para reparaciones, con tal de que se le avise con 48 horas de antelación.`,de:`Klausel 4. Der Mieter darf Haustiere halten, sofern diese keine Schäden an der Wohnung und keine Belästigung der Nachbarn verursachen. Falls Schäden entstehen, wird der Reparaturbetrag von der Kaution abgezogen.\n\nKlausel 7. Der Vertrag verlängert sich automatisch jedes Jahr, es sei denn, eine der Parteien teilt mit mindestens zwei Monaten Vorlauf etwas anderes mit. Geht keine solche Mitteilung ein, gilt, dass beide Parteien die Verlängerung akzeptieren.\n\nKlausel 9. Der Eigentümer darf die Wohnung nicht betreten, es sei denn, es liegt ein Notfall vor oder der Mieter erlaubt es ausdrücklich. Ebenso verpflichtet sich der Mieter, die für Reparaturen nötigen Besuche zuzulassen, sofern er 48 Stunden vorher benachrichtigt wird.`},
 {t:'mc',q:'¿Cuándo puede entrar el propietario en el piso?',opts:['solo en una emergencia o con permiso del inquilino','cuando quiera','cada dos meses'],a:0},
 {t:'mc',q:'„De no recibirse dicha comunicación“ = …',opts:['si no se recibe esa comunicación','aunque no se reciba','para que no se reciba'],a:0},
 {t:'gap',q:'El inquilino puede tener mascotas siempre que no ___ (causar) daños.',a:['causen']},
 {t:'free',task:'Du vermietest dein Zimmer für den Sommer unter. Schreib 5–6 Regeln/Bedingungen für deine Untermieterin.',hint:'Puedes … siempre que … · con tal de que … · a no ser que … · En caso de que … · De + Inf. …',focus:'Bedingungs-Konnektoren + Subjuntivo, de + Infinitiv',model:'Puedes usar la cocina siempre que la dejes limpia. Las fiestas están permitidas con tal de que terminen antes de medianoche. No cambies los muebles de sitio, a no ser que me preguntes antes. En caso de que se rompa algo, avísame enseguida. De necesitar algo urgente, puedes llamar a Nuria, mi compañera de piso. ¡Y riega las plantas, por favor!'}]}
],
placement:[
 {t:'mc',q:'Te lo dejo siempre que me lo ___ mañana.',opts:['devuelvas','devuelves','devolverás'],a:0},
 {t:'mc',q:'Iremos a la playa, a no ser que ___.',opts:['llueva','llueve','lloverá'],a:0},
 {t:'gap',q:'De ___ (saber) la verdad, no habría dicho nada.',a:['haber sabido']},
 {t:'gap',q:'En caso de que ___ (haber) un incendio, use las escaleras.',a:['haya']},
 {t:'mc',q:'„Wehe, du sagst es ihm!“',opts:['¡Como se lo digas…!','¡Como se lo dices…!','¡Si se lo dirás…!'],a:0},
 {t:'mc',q:'Siempre que ___ a casa de mi abuela, me da comida. (jedes Mal)',opts:['voy','vaya','fuera'],a:0}],
resumen:`<h3>Bedingungen + Subjuntivo</h3><p class="es-t">siempre que / siempre y cuando · con tal de que · a no ser que / salvo que · en caso de que</p><p>Achtung: <span class="es-t">siempre que + Ind.</span> = immer wenn · <span class="es-t">solo si + Ind.</span></p>
<h3>Kompakt</h3><p class="es-t">De tener tiempo, … (= si tuviera) · De haberlo sabido, … (= si lo hubiera sabido) · Como no vengas, … (Drohung)</p>`});
