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
 {t:'gap',q:'Sushi isst man mit ___ Fisch. (cru)',a:['rohem|rohen']},
 {t:'match',q:'Ligue.',pairs:[['die Zwiebel','a cebola'],['das Gewürz','o tempero'],['die Mahlzeit','a refeição'],['erschöpft','esgotado'],['zubereiten','preparar']]},
 {t:'read',title:'Leitura: Essen in Deutschland',text:`Viele Deutsche essen drei Mahlzeiten am Tag, aber die wichtigste ist oft nicht das Mittagessen, sondern das Frühstück. Mittags essen viele Berufstätige in der Kantine oder nur schnell ein Brötchen. Abends gibt es häufig „Abendbrot“: Brot mit Käse, Wurst und etwas Gemüse – also eine kalte Mahlzeit. Für Menschen aus Brasilien, wo man mittags warm und reichlich isst, ist das am Anfang ungewöhnlich. Immer mehr Deutsche ernähren sich übrigens vegetarisch: Laut Umfragen sind es etwa zehn Prozent.`,de:`Muitos alemães fazem três refeições por dia, mas a mais importante muitas vezes não é o almoço, e sim o café da manhã. No almoço, muitos trabalhadores comem na cantina ou só um pãozinho rápido. À noite muitas vezes tem „Abendbrot“: pão com queijo, frios e um pouco de legumes – ou seja, uma refeição fria. Para quem vem do Brasil, onde se almoça quente e bem, isso é estranho no começo. Aliás, cada vez mais alemães são vegetarianos: segundo pesquisas, cerca de dez por cento.`},
 {t:'mc',q:'Was ist „Abendbrot“?',opts:['eine kalte Mahlzeit mit Brot','ein warmes Mittagessen','ein Kuchen am Nachmittag'],a:0},
 {t:'mc',q:'Wie viele Deutsche ernähren sich vegetarisch?',opts:['etwa zehn Prozent','die Hälfte','fast niemand'],a:0},
 {t:'tr',de:'Eu tento me alimentar de forma saudável.',a:['Ich versuche, mich gesund zu ernähren.']}
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
 {t:'order',es:'Ich habe vor nächste Woche mit dem Rauchen aufzuhören',de:'Pretendo parar de fumar na semana que vem.'},
 {t:'tr',de:'Não é fácil acordar cedo.',a:['Es ist nicht leicht, früh aufzustehen.','Es ist nicht einfach, früh aufzustehen.']},
 {t:'speak',es:'Ich habe mir vorgenommen, weniger Süßigkeiten zu essen und öfter Rad zu fahren.',de:'Decidi comer menos doces e andar de bicicleta com mais frequência.',tip:'<i>zu essen</i>, <i>Rad zu fahren</i> – o zu vem antes do infinitivo.'}
]},
{id:'l3',title:'No hospital – um … zu / damit',desc:'die Untersuchung, die Operation · Ziele ausdrücken',steps:[
 {t:'vocab',title:'Hospital e tratamento',items:[['die Untersuchung','o exame'],['untersuchen','examinar'],['die Operation','a cirurgia'],['operieren','operar'],['die Notaufnahme','o pronto-socorro'],['die Infektion','a infecção'],['die Therapie','a terapia'],['die Spritze','a injeção'],['die Salbe','a pomada'],['das Schmerzmittel','o analgésico'],['der Pfleger / die Pflegerin','o enfermeiro / a enfermeira'],['die Krankenkasse','o plano de saúde (seguro)'],['der Muskel','o músculo'],['der Atem','a respiração, o fôlego'],['schwitzen','suar'],['körperlich','físico'],['die Schwangerschaft','a gravidez'],['süchtig','viciado'],['schädlich','prejudicial'],['giftig','venenoso, tóxico']]},
 {t:'info',title:'Finalidade: um … zu / damit',html:`<table><tr><td class="es-t"><b>um</b> … <b>zu</b> + infinitivo</td><td>mesma pessoa nas duas partes</td><td class="es-t">Ich mache Sport, <b>um</b> fit <b>zu</b> bleiben.</td></tr>
 <tr><td class="es-t"><b>damit</b> + oração</td><td>pessoas diferentes (ou opcional com a mesma)</td><td class="es-t">Ich koche gesund, <b>damit</b> meine Kinder gut essen.</td></tr></table>
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
 {t:'vocab',title:'Trânsito',items:[['das Fahrzeug','o veículo'],['das Motorrad','a moto'],['der Radfahrer / die Radfahrerin','o ciclista / a ciclista'],['der Fußgänger / die Fußgängerin','o pedestre'],['die Fußgängerzone','o calçadão'],['die Fahrbahn','a pista'],['die Einbahnstraße','a rua de mão única'],['die Umleitung','o desvio'],['die Kurve','a curva'],['steil','íngreme'],['abbiegen','virar, dobrar'],['überholen','ultrapassar'],['bremsen','frear'],['die Bremse','o freio'],['sich anschnallen','pôr o cinto'],['das Benzin','a gasolina'],['die Geschwindigkeit','a velocidade'],['das Kennzeichen','a placa (do carro)'],['der Strafzettel','a multa (de trânsito)'],['der Führerschein','a carteira de motorista']]},
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
 {t:'order',es:'Nachdem wir zwei Stunden im Stau gestanden hatten machten wir eine Pause',de:'Depois de ficarmos duas horas no engarrafamento, fizemos uma pausa.'},
 {t:'tr',de:'Quando cheguei, o show já tinha começado.',a:['Als ich ankam, hatte das Konzert schon angefangen.','Als ich ankam, hatte das Konzert schon begonnen.']},
 {t:'tr',de:'Antes de viajarmos, compramos um mapa.',a:['Bevor wir losfuhren, kauften wir eine Karte.','Bevor wir losgefahren sind, haben wir eine Karte gekauft.','Bevor wir abfuhren, kauften wir eine Karte.']}
]},
{id:'l3',title:'Viajar e paisagens',desc:'die Strecke, die Aussicht, die Küste …',steps:[
 {t:'vocab',title:'Viagem',items:[['die Strecke','o trecho, o percurso'],['die Entfernung','a distância'],['die Rückfahrt','a viagem de volta'],['die Rundfahrt','o passeio (circuito)'],['der Aufenthalt','a estadia'],['die Saison','a temporada'],['das Souvenir','a lembrancinha'],['das Visum','o visto'],['voraussichtlich','previsto, provavelmente'],['die Aussicht','a vista; a perspectiva'],['die Küste','o litoral'],['das Ufer','a margem'],['der Hügel','a colina'],['das Gebirge','a cordilheira, as montanhas'],['die Burg','o castelo (fortaleza)'],['das Denkmal','o monumento'],['der Turm','a torre']]},
 {t:'mc',q:'Vom Turm hat man eine tolle ___ über die ganze Stadt.',opts:['Aussicht','Strecke','Saison'],a:0},
 {t:'mc',q:'Der Zug kommt ___ um 18 Uhr an – wenn es keine Verspätung gibt.',opts:['voraussichtlich','rückwärts','steil'],a:0},
 {t:'gap',q:'Im Sommer ist ___, da sind die Hotels teurer. (alta temporada → die Haupt___)',a:['Hauptsaison|Saison']},
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
 {t:'mc',q:'___ wartest du? – Auf den Bus.',opts:['Worauf','Wofür','Auf was'],a:0},
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
 {t:'gap',q:'Wenn ich ein neues Laptop ___, ___ ich schneller arbeiten. (haben / können)',a:['hätte','könnte']},
 {t:'gap',q:'Ich ___ gern eine Woche ohne Internet leben – aber nur im Urlaub! (würde/möchte → Konjunktiv II von „werden“)',a:['würde']},
 {t:'order',es:'Wenn ich mehr Geld hätte würde ich ein neues Handy kaufen',de:'Se eu tivesse mais dinheiro, compraria um celular novo.'},
 {t:'tr',de:'Seria ótimo se você pudesse vir.',a:['Es wäre toll, wenn du kommen könntest.','Es wäre super, wenn du kommen könntest.','Es wäre schön, wenn du kommen könntest.']},
 {t:'speak',es:'Wenn ich Lehrerin wäre, würde ich Handys im Unterricht verbieten.',de:'Se eu fosse professora, proibiria celulares na aula.',tip:'<i>wäre</i> (ser) e <i>würde … verbieten</i>.'}
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
 {t:'tr',de:'Com o que você está ansioso? – Com as férias.',a:['Worauf freust du dich? – Auf den Urlaub.','Worauf freust du dich? – Auf die Ferien.']}
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
