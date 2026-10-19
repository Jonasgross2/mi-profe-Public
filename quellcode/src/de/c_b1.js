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
 {t:'tr',de:'Desde então eu moro em Frankfurt.',a:['Seitdem wohne ich in Frankfurt.','Seitdem lebe ich in Frankfurt.','Ich wohne seitdem in Frankfurt.','Ich lebe seitdem in Frankfurt.']},
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
 {t:'order',es:'Nach dem Essen gingen wir im Park spazieren',alt:['Wir gingen nach dem Essen im Park spazieren', 'Im Park gingen wir nach dem Essen spazieren'],de:'Depois do almoço fomos passear no parque.'},
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
 {t:'read',title:'Leitura: Forum „Mein schönstes Ferienerlebnis“',text:`Nina_88: Als ich fünfzehn war, fuhr ich mit meiner Klasse nach Paris. Ich war vorher noch nie im Ausland gewesen und hatte noch nie eine so große Stadt gesehen. Wir übernachteten in einer einfachen Jugendherberge, aber das war uns egal. Am letzten Abend gingen wir auf den Eiffelturm. Die Lichter der Stadt waren unglaublich! Seitdem reise ich sehr gern. Mittlerweile war ich in zwölf Ländern – aber an Paris denke ich immer noch am liebsten.`,de:`Nina_88: Quando eu tinha quinze anos, fui com a minha turma para Paris. Eu nunca tinha ido ao exterior nem visto uma cidade tão grande. Dormimos num albergue simples, mas não ligamos. Na última noite subimos na Torre Eiffel. As luzes da cidade eram inacreditáveis! Desde então eu adoro viajar. Hoje já estive em doze países – mas Paris ainda é o lugar em que eu mais gosto de pensar.`},
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
 {t:'order',es:'Die Bewerbungen werden von der Personalabteilung geprüft',alt:['Von der Personalabteilung werden die Bewerbungen geprüft'],de:'As candidaturas são analisadas pelo departamento de pessoal.'},
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
 {t:'tr',de:'Por favor, tenham consideração com os vizinhos.',a:['Bitte nehmen Sie Rücksicht auf die Nachbarn.','Bitte nehmt Rücksicht auf die Nachbarn.','Nehmen Sie bitte Rücksicht auf die Nachbarn.','Nehmt bitte Rücksicht auf die Nachbarn.']}
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
 {t:'tr',de:'Eu tento me alimentar de forma saudável.',a:['Ich versuche, mich gesund zu ernähren.','Ich versuche, gesund zu essen.']}
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
 {t:'order',es:'Ich habe vor nächste Woche mit dem Rauchen aufzuhören',alt:['Ich habe vor mit dem Rauchen nächste Woche aufzuhören'],de:'Pretendo parar de fumar na semana que vem.'},
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
 {t:'order',es:'Nachdem wir zwei Stunden im Stau gestanden hatten machten wir eine Pause',alt:['Wir machten eine Pause nachdem wir zwei Stunden im Stau gestanden hatten'],de:'Depois de ficarmos duas horas no engarrafamento, fizemos uma pausa.'},
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
 {t:'mc',q:'___ wartest du? – Auf den Bus.',opts:['Worauf','Wofür','Woauf'],a:0},
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
 {t:'gap',q:'Wenn ich einen neuen Laptop ___, ___ ich schneller arbeiten. (haben / können)',a:['hätte','könnte']},
 {t:'gap',q:'Ich ___ gern eine Woche ohne Internet leben – aber nur im Urlaub! (werden – Konjunktiv II)',a:['würde']},
 {t:'order',es:'Wenn ich mehr Geld hätte würde ich ein neues Handy kaufen',alt:['Ich würde ein neues Handy kaufen wenn ich mehr Geld hätte'],de:'Se eu tivesse mais dinheiro, compraria um celular novo.'},
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
 {t:'order',es:'Obwohl sie in verschiedenen Städten wohnen sehen sie sich jedes Wochenende',alt:['Sie sehen sich jedes Wochenende obwohl sie in verschiedenen Städten wohnen'],de:'Embora morem em cidades diferentes, eles se veem todo fim de semana.'},
 {t:'tr',de:'Embora eu esteja cansado, vou à festa.',a:['Obwohl ich müde bin, gehe ich zur Party.','Obwohl ich müde bin, komme ich zur Party.','Ich gehe zur Party, obwohl ich müde bin.','Obwohl ich müde bin, gehe ich auf die Party.']},
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
 {t:'order',es:'Im Büro sollte mehr Strom gespart werden',alt:['Mehr Strom sollte im Büro gespart werden'],de:'No escritório, mais energia deveria ser economizada.'},
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
 {t:'mc',q:'___ der Versammlung darf nicht telefoniert werden.',opts:['Während','Trotz','Obwohl'],a:0},
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
 {t:'mc',q:'Meine Nachbarin hilft jeden Samstag bei der Tafel. Sie bekommt kein Geld, sie macht das ___.',opts:['ehrenamtlich','gleichberechtigt','politisch'],a:0},
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
 {t:'order',es:'Wegen der Baustelle ist die Straße bis Freitag gesperrt',alt:['Die Straße ist wegen der Baustelle bis Freitag gesperrt', 'Die Straße ist bis Freitag wegen der Baustelle gesperrt', 'Bis Freitag ist die Straße wegen der Baustelle gesperrt'],de:'Por causa da obra, a rua está fechada até sexta.'},
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
 {t:'order',es:'Wenn ich das gewusst hätte wäre ich mitgekommen',alt:['Ich wäre mitgekommen wenn ich das gewusst hätte'],de:'Se eu tivesse sabido disso, teria ido junto.'},
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
 {t:'tr',de:'Nós moramos numa casa velha com um jardim grande.',a:['Wir wohnen in einem alten Haus mit einem großen Garten.','Wir wohnen in einem alten Haus mit großem Garten.']}
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
 {t:'order',es:'Das gestern gekaufte Ticket ist leider nicht mehr gültig',alt:['Leider ist das gestern gekaufte Ticket nicht mehr gültig'],de:'O ingresso comprado ontem infelizmente não é mais válido.'}
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
 {t:'read',hideText:true,kind:'Hören · Teil 2',title:'Führung durch die Altstadt',intro:'Você faz uma visita guiada por Frankfurt. Ouça a guia.',text:`Herzlich willkommen zu unserer Führung! Wir stehen hier auf dem Römerberg, dem Herz der Frankfurter Altstadt. Das Gebäude mit den drei Giebeln ist der Römer, seit über 600 Jahren das Rathaus der Stadt. Im Zweiten Weltkrieg wurde die Altstadt fast vollständig zerstört. Die schönen Fachwerkhäuser gegenüber sehen alt aus, wurden aber erst in den 1980er-Jahren wieder aufgebaut. Gleich gehen wir weiter zum Dom, wo früher die deutschen Kaiser gekrönt wurden. Wer möchte, kann dort auf den Turm steigen – das kostet drei Euro extra. Die Führung endet in etwa anderthalb Stunden am Mainufer. Bitte bleiben Sie in der Gruppe, denn hier ist es oft sehr voll.`,de:`Sejam bem-vindos à nossa visita guiada! Estamos aqui no Römerberg, o coração do centro histórico de Frankfurt. O prédio com as três empenas é o Römer, há mais de 600 anos a prefeitura da cidade. Na Segunda Guerra Mundial o centro histórico foi quase totalmente destruído. As bonitas casas em enxaimel em frente parecem antigas, mas só foram reconstruídas nos anos 1980. Logo seguimos para a catedral, onde antigamente os imperadores alemães eram coroados. Quem quiser pode subir na torre – custa três euros a mais. A visita termina em mais ou menos uma hora e meia na margem do Meno. Por favor, fiquem no grupo, porque aqui costuma estar muito cheio.`},
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
