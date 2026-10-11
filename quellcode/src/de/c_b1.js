/* Deutschkurs B1 (Erklärungen auf Portugiesisch) – Kapitel 25–36.
   Orientierung (nur Themen/Wortschatz/Grammatik-Inventar, keine Texte übernommen): Goethe-Zertifikat B1 – Wortliste und Prüfungsziele.
   Kurs-Person: Lucas Souza aus São Paulo, lebt seit zwei Jahren in Frankfurt, Softwareentwickler (Kollegin Jana, Chefin Frau Dr. Hoffmann). */

/* ================= KAPITEL 25 · ERINNERUNGEN ================= */
LANGS.de.course.units.push({id:'k25',n:'25',level:'B1',title:'Erinnerungen',sub:'Infância e família · Präteritum (contar no passado) · als / wenn / wann · hábitos e tradições',
goals:['Über die Kindheit und die Familie erzählen','Präteritum: regelmäßige und unregelmäßige Verben (ging, kam, sah …)','als – wenn – wann richtig unterscheiden','Gewohnheiten und Traditionen beschreiben','Einen Forumsbeitrag über eine Erinnerung schreiben'],
situacion:{title:'Lembranças de infância',npc:'Frau Becker',scene:'A sua vizinha, a Sra. Becker, convida você para um café e mostra fotos antigas da família dela.',role:'Du bist Frau Becker, ca. 65 Jahre, Nachbarin von Lucas in Frankfurt, warmherzig und gesprächig. Du siezt. Erzähl von deiner Kindheit in einem Dorf in Hessen (Präteritum: Wir hatten kein Auto, wir gingen zu Fuß zur Schule …) und frag Lucas nach seiner Kindheit in Brasilien: Wo hast du gewohnt? Was habt ihr gespielt? Welche Traditionen gab es? Benutze als und wenn. Sprich natürliches Deutsch auf B1-Niveau.',goal:'Conte da sua infância (onde morava, o que fazia, uma tradição) usando Präteritum e als/wenn.'},
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

Am schönsten waren die Abende. Wenn es dunkel wurde, saßen wir auf der Veranda, und sie erzählte Geschichten aus ihrer Jugend. Als ich zwölf war, zeigte sie mir ihr Rezept für Kekse. Seitdem backe ich sie jedes Jahr zu Weihnachten – auch hier in Frankfurt. Meine deutschen Kollegen finden sie fantastisch!`,de:`Quando eu era pequeno, passava todo verão na casa da minha avó em Minas Gerais. Ela morava numa casa antiga com um quintal grande. Quando eu acordava de manhã, já tinha cheiro de café e pão fresco. Minha avó sempre levantava às cinco, porque tinha que dar comida às galinhas.\n\nO mais bonito eram as noites. Quando escurecia, a gente sentava na varanda e ela contava histórias da juventude dela. Quando eu tinha doze anos, ela me mostrou a receita de biscoitos dela. Desde então eu faço todo ano no Natal – aqui em Frankfurt também. Meus colegas alemães acham fantásticos!`},
 {t:'mc',q:'Warum stand die Oma so früh auf?',opts:['Sie musste die Hühner füttern.','Sie musste zur Arbeit.','Sie backte Kekse.'],a:0},
 {t:'mc',q:'Was passierte, als Lucas zwölf war?',opts:['Die Oma zeigte ihm ein Rezept.','Er zog nach Frankfurt.','Die Oma kaufte Hühner.'],a:0},
 {t:'tr',de:'Quando cheguei à Alemanha, eu quase não falava alemão.',a:['Als ich nach Deutschland kam, sprach ich kaum Deutsch.','Als ich nach Deutschland gekommen bin, habe ich kaum Deutsch gesprochen.']}
]},
{id:'l4',title:'Escrever: uma lembrança',desc:'Forumsbeitrag (ca. 80 Wörter)',steps:[
 {t:'read',title:'Leitura: Forum „Mein schönstes Ferienerlebnis“',text:`Mira_88: Als ich fünfzehn war, fuhr ich mit meiner Klasse nach Paris. Ich hatte vorher noch nie das Meer oder eine so große Stadt gesehen. Wir übernachteten in einer einfachen Jugendherberge, aber das war uns egal. Am letzten Abend gingen wir auf den Eiffelturm. Die Lichter der Stadt waren unglaublich! Seitdem reise ich sehr gern. Mittlerweile war ich in zwölf Ländern – aber an Paris denke ich immer noch am liebsten.`,de:`Mira_88: Quando eu tinha quinze anos, fui com a minha turma para Paris. Eu nunca tinha visto o mar nem uma cidade tão grande. Dormimos num albergue simples, mas não ligamos. Na última noite subimos na Torre Eiffel. As luzes da cidade eram inacreditáveis! Desde então eu adoro viajar. Hoje já estive em doze países – mas é em Paris que eu ainda mais gosto de pensar.`},
 {t:'mc',q:'Wie alt war Mira bei der Reise?',opts:['fünfzehn','zwölf','achtundachtzig'],a:0},
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
 {t:'vocab',title:'Reuniões',items:[['die Konferenz','a conferência'],['präsentieren','apresentar'],['der Kompromiss','o meio-termo, o acordo'],['der Konflikt','o conflito'],['die Konkurrenz','a concorrência'],['die Zusammenarbeit','a colaboração'],['der Experte / die Expertin','o especialista'],['die Fabrik','a fábrica'],['herstellen','fabricar, produzir'],['der Hersteller','o fabricante'],['produzieren','produzir'],['die Produktion','a produção'],['das Material','o material']]},
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
 {t:'free',task:'Escreva uma e-mail formal (~80 palavras) para a Sra. Dr. Hoffmann: 1) você quer fazer o curso de gestão de projetos, 2) explique por que ele é útil para o seu trabalho, 3) pergunte como o seu trabalho será organizado durante o curso.',hint:'Sehr geehrte Frau Dr. Hoffmann, ich möchte mich für … anmelden. Der Kurs wäre für mich nützlich, weil … Könnten Sie mir sagen, wie … organisiert wird? Mit freundlichen Grüßen',focus:'formelle E-Mail, weil, Passiv, indirekte Frage',model:'Sehr geehrte Frau Dr. Hoffmann,\nich möchte mich gern für den Kurs zum Projektmanagement anmelden, der im April angeboten wird. Der Kurs wäre für meine Arbeit sehr nützlich, weil ich ab Sommer das Projekt mit dem neuen Kunden leiten soll. Der Kurs findet dienstags und donnerstags vormittags statt. Könnten Sie mir sagen, wie meine Aufgaben in dieser Zeit organisiert werden? Vielleicht könnte Jana einen Teil übernehmen.\nMit freundlichen Grüßen\nLucas Souza'}
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
 {t:'vocab',title:'No prédio',items:[['die Rücksicht','a consideração'],['Rücksicht nehmen auf','ter consideração com'],['der Lärm','o barulho'],['ordentlich','arrumado; direito'],['der Staub','a poeira'],['staubsaugen','passar aspirador'],['spülen','lavar (louça); dar descarga'],['das Waschmittel','o sabão em pó'],['der Bewohner / die Bewohnerin','o morador / a moradora'],['die Gemeinschaft','a comunidade'],['die Vermietung','a locação'],['der Einbruch','o arrombamento, o furto'],['einbrechen','arrombar, invadir'],['der Einbrecher / die Einbrecherin','o ladrão (de casa)'],['die Feuerwehr','os bombeiros'],['der Notausgang','a saída de emergência']]},
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
 {t:'free',task:'O aquecimento do seu apartamento não funciona há uma semana. Escreva uma reclamação formal (~80–100 palavras) para a administradora do prédio: 1) qual é o problema e desde quando, 2) o que você já fez, 3) o que você espera (prazo, técnico, desconto no aluguel?).',hint:'Sehr geehrte Damen und Herren, ich wende mich an Sie, weil … Seit … funktioniert … nicht. Ich habe bereits … Ich bitte Sie, … Mit freundlichen Grüßen',focus:'formelle Beschwerde, Relativsätze, Passiv, höfliche Bitte',model:'Sehr geehrte Damen und Herren,\nich wende mich an Sie, weil die Heizung in meiner Wohnung (Bergerstraße 12, 3. Stock) seit einer Woche nicht funktioniert. In der Wohnung, in der ich auch arbeite, sind es nur noch 16 Grad. Ich habe bereits zweimal beim Hausmeister angerufen, aber bis heute wurde nichts repariert. Ich bitte Sie, so schnell wie möglich einen Techniker zu schicken. Außerdem möchte ich wissen, ob die Miete für diesen Monat reduziert wird.\nFür eine baldige Antwort wäre ich Ihnen dankbar.\nMit freundlichen Grüßen\nLucas Souza'}
]}],
resumen:`<h3>Pronomes relativos</h3><table><tr><td></td><td>masc.</td><td>fem.</td><td>neutro</td><td>plural</td></tr><tr><td>nom.</td><td class="es-t">der</td><td class="es-t">die</td><td class="es-t">das</td><td class="es-t">die</td></tr><tr><td>acus.</td><td class="es-t">den</td><td class="es-t">die</td><td class="es-t">das</td><td class="es-t">die</td></tr><tr><td>dat.</td><td class="es-t">dem</td><td class="es-t">der</td><td class="es-t">dem</td><td class="es-t">denen</td></tr></table>
<p class="es-t">Der Nachbar, der oben wohnt … · den ich kenne … · dem ich helfe … · mit dem ich spiele …</p>
<h3>Casa</h3><p class="es-t">einrichten · die Steckdose · einschalten · installieren · anschließen · die Anleitung · die Störung · Rücksicht nehmen auf · der Lärm</p>`});
