/* Deutschkurs A1 für Brasilianer:innen – eigene Inhalte nach dem GER (A1: Kann-Beschreibungen, Themen des Alltags).
   Felder: „es“ = deutscher Text (Lernsprache), „de“ = Portugiesisch (Ausgangssprache der Erklärungen). Erklärungen auf pt-BR, einfach.
   Kurs-Person: Lucas Souza aus São Paulo (Brasilien), neu in Frankfurt (Job in einer Softwarefirma, wohnt erst in einer WG).
   Herkunft der lernenden Person immer als „aus Brasilien / aus São Paulo / Brasilianer“ schreiben (wird ersetzt), Brasilien nie für andere Personen verwenden. */

/* ================= KAPITEL 1 · HALLO! ================= */
LANGS.de.course.units.push({id:'k1',n:'1',level:'A1',title:'Hallo!',sub:'Cumprimentar · apresentar-se · de onde você é · alfabeto e pronúncia',
goals:['Hallo! Guten Morgen! Guten Tag!','Ich heiße … / Ich bin …','Wie heißt du? / Wie heißen Sie?','du ou Sie?','Wie geht’s?','Tschüss! Auf Wiedersehen!','Woher kommst du? – Ich komme aus …','Wo wohnst du? – Ich wohne in …','Verbos: heißen, sein, kommen, wohnen, sprechen','Alfabeto e pronúncia: ä, ö, ü, ß, ei, ie, ch, sch, w, z'],
situacion:{title:'Primeiro dia no trabalho',npc:'Jana',scene:'Primeiro dia na firma em Frankfurt. Uma colega se apresenta na cozinha do escritório.',role:'Du bist Jana, 29, Softwareentwicklerin aus Hamburg, freundlich. Du duzt Lucas. Sprich sehr einfaches Deutsch (A1), kurze Sätze.',goal:'Cumprimente a Jana, diga seu nome e de onde você é, pergunte como ela está e se despeça.'},
placement:[
 {t:'mc',q:'São 9 horas da manhã. Como você cumprimenta?',opts:['Guten Morgen!','Gute Nacht!','Guten Abend!'],a:0},
 {t:'mc',q:'„Como você se chama?“ (informal)',opts:['Wie heißt du?','Wie heißen Sie?','Wie geht’s?'],a:0},
 {t:'gap',q:'Ich ___ aus Brasilien. (kommen)',a:['komme']},
 {t:'mc',q:'„Onde você mora?“',opts:['Wo wohnst du?','Woher kommst du?','Wie heißt du?'],a:0},
 {t:'gap',q:'Wie ___ es Ihnen? – Gut, danke.',a:['geht']},
 {t:'mc',q:'Qual forma está certa?',opts:['Er wohnt in Frankfurt.','Er wohnen in Frankfurt.','Er wohnst in Frankfurt.'],a:0}],
lessons:[
{id:'l1',title:'Cumprimentar e apresentar-se',desc:'Hallo! Guten Tag! Ich heiße …',steps:[
 {t:'info',title:'Cumprimentos durante o dia',html:`<p>Em alemão, o cumprimento muda conforme a hora do dia – parecido com o português:</p>
 <table><tr><th>Alemão</th><th>Quando?</th><th>Português</th></tr>
 <tr><td class="es-t">Guten Morgen!</td><td>até ~11h</td><td>Bom dia!</td></tr>
 <tr><td class="es-t">Guten Tag!</td><td>~11h – 18h</td><td>Bom dia! / Boa tarde!</td></tr>
 <tr><td class="es-t">Guten Abend!</td><td>a partir de ~18h</td><td>Boa noite! (ao chegar)</td></tr>
 <tr><td class="es-t">Gute Nacht!</td><td>antes de dormir</td><td>Boa noite! (ao se despedir)</td></tr>
 <tr><td class="es-t">Hallo!</td><td>sempre (informal)</td><td>Oi! / Olá!</td></tr></table>
 <div class="ojo"><span class="es-t">Gute Nacht</span> só se diz na hora de ir dormir. Para cumprimentar à noite: <span class="es-t">Guten Abend!</span></div>`},
 {t:'vocab',title:'Cumprimentar',items:[['Hallo!','Oi! / Olá!'],['Guten Morgen!','Bom dia! (de manhã)'],['Guten Tag!','Bom dia! / Boa tarde!'],['Guten Abend!','Boa noite! (ao chegar)'],['Gute Nacht!','Boa noite! (ao dormir)'],['ich heiße …','eu me chamo …'],['ich bin …','eu sou …'],['Wie heißt du?','Como você se chama? (informal)'],['Wie heißen Sie?','Como o senhor / a senhora se chama?'],['und du?','e você?'],['und Sie?','e o senhor / a senhora?'],['Freut mich!','Prazer!']]},
 {t:'info',title:'du ou Sie?',html:`<p>O alemão tem duas formas para “você”:</p>
 <table><tr><th></th><th>informal: <b>du</b></th><th>formal: <b>Sie</b></th></tr>
 <tr><td>perguntar o nome</td><td class="es-t">Wie heißt du?</td><td class="es-t">Wie heißen Sie?</td></tr>
 <tr><td>responder</td><td class="es-t">Ich heiße Lucas. Und du?</td><td class="es-t">Ich heiße Lucas Souza. Und Sie?</td></tr></table>
 <p><b>du</b>: amigos, família, crianças, colegas jovens (em muitas firmas todos se tratam por <b>du</b>).<br><b>Sie</b>: pessoas desconhecidas, mais velhas, lojas, repartições públicas, médicos.</p>
 <div class="ojo"><b>Sie</b> (formal) sempre se escreve com letra maiúscula – em qualquer posição da frase.</div>`},
 {t:'mc',q:'São 15 horas. Você chega numa loja. O que você diz?',opts:['Guten Tag!','Gute Nacht!','Guten Morgen!'],a:0,why:'Entre ~11h e 18h se diz <i>Guten Tag!</i>'},
 {t:'mc',q:'Um colega novo, da sua idade, pergunta seu nome. Como ele pergunta?',opts:['Wie heißt du?','Wie heißen Sie?','Wie geht es Ihnen?'],a:0,why:'Entre colegas jovens se usa <b>du</b>: <i>Wie heißt du?</i>'},
 {t:'gap',q:'Hallo, ich ___ Lucas. Und du?',a:['heiße|heisse'],hint:'heißen = chamar-se'},
 {t:'gap',q:'Guten Tag. Wie ___ Sie?',a:['heißen|heissen'],why:'Com <b>Sie</b> o verbo termina em <b>-en</b>: <i>heißen</i>.'},
 {t:'order',es:'Wie heißt du?',de:'Como você se chama?'},
 {t:'dialog',place:'Büro, Küche',title:'Na cozinha do escritório',scene:'Primeiro dia de trabalho em Frankfurt. Uma colega entra na cozinha e sorri para você.',lines:[
  {n:'Jana',es:'Hallo! Ich bin Jana. Und du? Wie heißt du?',de:'Oi! Eu sou a Jana. E você? Como você se chama?'},
  {you:true,opts:[{es:'Hallo, ich heiße Lucas.',ok:true},{es:'Gute Nacht, ich heiße Lucas.',ok:false,why:'<i>Gute Nacht</i> é só na hora de dormir.'},{es:'Wie heißen Sie?',ok:false,why:'A Jana perguntou o <b>seu</b> nome – responda primeiro.'}]},
  {n:'Jana',es:'Freut mich, Lucas!',de:'Prazer, Lucas!'},
  {you:true,opts:[{es:'Freut mich auch!',ok:true},{es:'Und Sie?',ok:false,why:'A Jana usa <b>du</b> – e ela já disse o nome dela.'}]}]},
 {t:'tr',de:'Oi, eu me chamo Lucas. E você?',a:['Hallo, ich heiße Lucas. Und du?','Hallo, ich bin Lucas. Und du?'],hint:'und du?'},
 {t:'tr',de:'Boa tarde, como o senhor se chama?',a:['Guten Tag, wie heißen Sie?','Guten Tag! Wie heißen Sie?'],why:'Formal: <i>Wie heißen Sie?</i> – à tarde: <i>Guten Tag</i>.'},
 {t:'speak',es:'Guten Tag! Ich heiße Lucas. Freut mich!',de:'Bom dia! Eu me chamo Lucas. Prazer!',tip:'O <b>ß</b> em <i>heiße</i> soa como “ss” – um s forte, sem zumbido.'}
]},
{id:'l2',title:'Como vai? e despedir-se',desc:'Wie geht’s? · Tschüss! · Auf Wiedersehen!',steps:[
 {t:'vocab',title:'Perguntar como a pessoa está',items:[['Wie geht’s?','Tudo bem? / Como vai?'],['Wie geht es dir?','Como você está? (informal)'],['Wie geht es Ihnen?','Como o senhor / a senhora está?'],['gut','bem'],['sehr gut','muito bem'],['es geht','mais ou menos'],['nicht so gut','não muito bem'],['schlecht','mal'],['danke','obrigado / obrigada'],['bitte','por favor / de nada']]},
 {t:'info',title:'Wie geht’s? – Gut, danke!',html:`<table><tr><th>Pergunta</th><th>Resposta</th></tr>
 <tr><td class="es-t">Wie geht’s?</td><td class="es-t">Gut, danke! Und dir?</td></tr>
 <tr><td class="es-t">Wie geht es dir? <span class="muted">(du)</span></td><td class="es-t">Sehr gut, danke. Und dir?</td></tr>
 <tr><td class="es-t">Wie geht es Ihnen? <span class="muted">(Sie)</span></td><td class="es-t">Gut, danke. Und Ihnen?</td></tr></table>
 <div class="ojo">Cuidado: na resposta se diz <span class="es-t">Und dir?</span> / <span class="es-t">Und Ihnen?</span> – e não “Und du?”. É porque <i>Wie geht es <b>dir</b>?</i> usa outra forma de “você”.</div>
 <div class="ex"><span class="es-t">Danke</span> = obrigado/obrigada (igual para homens e mulheres). <span class="es-t">Bitte</span> = por favor <i>e</i> de nada.</div>`},
 {t:'vocab',title:'Despedir-se',items:[['Tschüss!','Tchau!'],['Auf Wiedersehen!','Até logo! (formal)'],['Bis später!','Até mais tarde!'],['Bis morgen!','Até amanhã!'],['Bis bald!','Até breve!'],['Schönen Tag noch!','Tenha um bom dia!']]},
 {t:'match',q:'Ligue o alemão ao português.',pairs:[['Bis morgen!','Até amanhã!'],['Wie geht’s?','Tudo bem?'],['Tschüss!','Tchau!'],['Es geht.','Mais ou menos.'],['Guten Abend!','Boa noite! (ao chegar)']]},
 {t:'mc',q:'A Sra. Weber (sua vizinha, 70 anos) pergunta: „Wie geht es Ihnen?“ Você responde:',opts:['Gut, danke. Und Ihnen?','Gut, danke. Und dir?','Tschüss!'],a:0,why:'Ela usa <b>Sie</b> – então você responde <i>Und Ihnen?</i>'},
 {t:'gap',q:'– Wie geht’s? – ___, danke. Und ___?',a:['Gut|Sehr gut','dir'],why:'<i>gut</i> = bem; <i>Und dir?</i> = e você?'},
 {t:'mc',q:'São 18h. Você sai do trabalho e vê os colegas amanhã. O que você diz?',opts:['Bis morgen!','Guten Morgen!','Freut mich!'],a:0},
 {t:'dialog',place:'Bäckerei',title:'Na padaria',scene:'De manhã cedo você compra pão. A vendedora é mais velha – aqui se usa <b>Sie</b>.',lines:[
  {n:'Verkäuferin',es:'Guten Morgen! Wie geht es Ihnen?',de:'Bom dia! Como o senhor está?'},
  {you:true,opts:[{es:'Guten Morgen! Gut, danke. Und Ihnen?',ok:true},{es:'Guten Abend! Gut, danke.',ok:false,why:'É de manhã: <i>Guten Morgen!</i>'},{es:'Gut, danke. Und dir?',ok:false,why:'Ela usa <b>Sie</b> – responda com <i>Und Ihnen?</i>'}]},
  {n:'Verkäuferin',es:'Auch gut, danke! Was möchten Sie?',de:'Também bem, obrigada! O que o senhor deseja?'},
  {you:true,opts:[{es:'Zwei Brötchen, bitte.',ok:true},{es:'Tschüss!',ok:false,why:'Você ainda nem comprou o pão 😉'}]},
  {n:'Verkäuferin',es:'Bitte schön. Schönen Tag noch!',de:'Aqui está. Tenha um bom dia!'},
  {you:true,opts:[{es:'Danke, Ihnen auch! Auf Wiedersehen!',ok:true},{es:'Freut mich! Wie heißen Sie?',ok:false,why:'Ela está se despedindo – despeça-se também.'}]}]},
 {t:'tr',de:'Como a senhora está?',a:['Wie geht es Ihnen?'],why:'Formal: <i>Wie geht es Ihnen?</i>'},
 {t:'tr',de:'Bem, obrigado. E você?',a:['Gut, danke. Und dir?','Gut, danke, und dir?','Danke, gut. Und dir?'],hint:'„e você?“ aqui = Und dir?'},
 {t:'listen',es:'Bis später!',de:'Até mais tarde!'},
 {t:'listen',es:'Sehr gut, danke.',de:'Muito bem, obrigado.'}
]},
{id:'l3',title:'De onde você é?',desc:'Woher kommst du? · Wo wohnst du? · Ich spreche …',steps:[
 {t:'vocab',title:'Origem, moradia e línguas',items:[['Woher kommst du?','De onde você é?'],['Woher kommen Sie?','De onde o senhor / a senhora é?'],['Ich komme aus …','Eu sou de … / Eu venho de …'],['Wo wohnst du?','Onde você mora?'],['Ich wohne in …','Eu moro em …'],['Was sprichst du?','Que línguas você fala?'],['Ich spreche …','Eu falo …'],['Deutsch','alemão (língua)'],['Portugiesisch','português'],['Englisch','inglês'],['Spanisch','espanhol'],['ein bisschen','um pouco'],['jetzt','agora'],['auch','também']]},
 {t:'info',title:'Verbos no presente: ich, du, Sie',html:`<p>Em alemão, a terminação do verbo muda conforme a pessoa – como no português (eu moro, você mora):</p>
 <table><tr><th></th><th>wohnen <span class="muted">(morar)</span></th><th>kommen <span class="muted">(vir)</span></th><th>heißen <span class="muted">(chamar-se)</span></th></tr>
 <tr><td>ich</td><td class="es-t">wohn<b>e</b></td><td class="es-t">komm<b>e</b></td><td class="es-t">heiß<b>e</b></td></tr>
 <tr><td>du</td><td class="es-t">wohn<b>st</b></td><td class="es-t">komm<b>st</b></td><td class="es-t">heiß<b>t</b></td></tr>
 <tr><td>er / sie</td><td class="es-t">wohn<b>t</b></td><td class="es-t">komm<b>t</b></td><td class="es-t">heiß<b>t</b></td></tr>
 <tr><td>Sie</td><td class="es-t">wohn<b>en</b></td><td class="es-t">komm<b>en</b></td><td class="es-t">heiß<b>en</b></td></tr></table>
 <div class="ex"><span class="es-t">Ich komme aus Brasilien, aus São Paulo. Jetzt wohne ich in Frankfurt.</span></div>
 <div class="ojo">Em alemão o <b>pronome é obrigatório</b>: “moro em Frankfurt” = <span class="es-t">Ich wohne in Frankfurt.</span> – nunca só “Wohne in Frankfurt”.</div>`},
 {t:'info',title:'sein (ser/estar) e sprechen (falar)',html:`<table><tr><th></th><th>sein</th><th>sprechen</th></tr>
 <tr><td>ich</td><td class="es-t">bin</td><td class="es-t">spreche</td></tr>
 <tr><td>du</td><td class="es-t">bist</td><td class="es-t">spr<b>i</b>chst</td></tr>
 <tr><td>er / sie</td><td class="es-t">ist</td><td class="es-t">spr<b>i</b>cht</td></tr>
 <tr><td>Sie</td><td class="es-t">sind</td><td class="es-t">sprechen</td></tr></table>
 <p><b>sein</b> é irregular (como “ser” em português). Em <b>sprechen</b> o <b>e</b> vira <b>i</b> com <i>du</i> e <i>er/sie</i>.</p>
 <div class="ex"><span class="es-t">Ich bin Brasilianer. Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch.</span></div>`},
 {t:'mc',q:'Como se pergunta “De onde você é?” (informal)?',opts:['Woher kommst du?','Wo wohnst du?','Wie heißt du?'],a:0,why:'<i>woher</i> = de onde; <i>wo</i> = onde.'},
 {t:'gap',q:'Jana ___ in Frankfurt. (wohnen)',a:['wohnt'],why:'er/sie → <b>-t</b>: <i>sie wohnt</i>.'},
 {t:'gap',q:'Woher ___ du? (kommen)',a:['kommst'],why:'du → <b>-st</b>: <i>du kommst</i>.'},
 {t:'gap',q:'Ich ___ Brasilianer. (sein)',a:['bin']},
 {t:'gap',q:'___ du Englisch? (sprechen)',a:['Sprichst|sprichst'],why:'<i>sprechen</i>: e → i com <b>du</b>: <i>du sprichst</i>.'},
 {t:'mc',q:'Qual frase está correta?',opts:['Ich wohne in Frankfurt.','Wohne in Frankfurt.','Ich wohnst in Frankfurt.'],a:0,why:'O pronome <i>ich</i> é obrigatório, e com <i>ich</i> o verbo termina em <b>-e</b>.'},
 {t:'order',es:'Ich komme aus Brasilien',de:'Eu sou do Brasil.'},
 {t:'dialog',place:'WG-Küche',title:'Na república (WG)',scene:'Você mora numa <b>WG</b> (república de estudantes/jovens). Um colega de casa novo chega.',lines:[
  {n:'Tom',es:'Hi! Ich bin Tom. Du bist neu hier, oder? Woher kommst du?',de:'Oi! Eu sou o Tom. Você é novo aqui, né? De onde você é?'},
  {you:true,opts:[{es:'Ich komme aus Brasilien, aus São Paulo.',ok:true},{es:'Ich wohne in Frankfurt.',ok:false,why:'Ele perguntou <b>de onde</b> você é (woher), não onde você mora.'},{es:'Ich heiße Brasilien.',ok:false,why:'😄 <i>heißen</i> é para o nome.'}]},
  {n:'Tom',es:'Cool! Und was sprichst du?',de:'Legal! E que línguas você fala?'},
  {you:true,opts:[{es:'Portugiesisch, Englisch und ein bisschen Deutsch.',ok:true},{es:'Ich spreche Brasilianer.',ok:false,why:'<i>Brasilianer</i> é a pessoa. A língua é <i>Portugiesisch</i>.'}]},
  {n:'Tom',es:'Dein Deutsch ist schon gut!',de:'Seu alemão já está bom!'},
  {you:true,opts:[{es:'Danke! Und woher kommst du?',ok:true},{es:'Danke! Und woher kommen Sie?',ok:false,why:'Na WG todo mundo usa <b>du</b>.'}]},
  {n:'Tom',es:'Ich komme aus Köln. Aber ich wohne schon drei Jahre in Frankfurt.',de:'Eu sou de Colônia. Mas já moro há três anos em Frankfurt.'}]},
 {t:'read',title:'Leitura: Neu in Frankfurt',text:`Hallo! Ich heiße Lucas Souza. Ich komme aus Brasilien, aus São Paulo. Jetzt wohne ich in Frankfurt. Ich arbeite bei einer Softwarefirma. Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch. Meine Kollegin heißt Jana. Sie kommt aus Hamburg. Mein Mitbewohner heißt Tom. Er kommt aus Köln.`,de:`Oi! Eu me chamo Lucas Souza. Eu sou do Brasil, de São Paulo. Agora moro em Frankfurt. Trabalho numa empresa de software. Falo português, inglês e um pouco de alemão. Minha colega se chama Jana. Ela é de Hamburgo. Meu colega de casa se chama Tom. Ele é de Colônia.`},
 {t:'mc',q:'Woher kommt Jana?',opts:['aus Hamburg','aus Köln','aus Frankfurt'],a:0},
 {t:'mc',q:'Wo wohnt Tom?',opts:['in Frankfurt','in Köln','in Hamburg'],a:0},
 {t:'tr',de:'Eu moro em Frankfurt.',a:['Ich wohne in Frankfurt.']},
 {t:'tr',de:'Você fala alemão?',a:['Sprichst du Deutsch?']},
 {t:'tr',de:'De onde a senhora é?',a:['Woher kommen Sie?']},
 {t:'free',task:'Apresente-se em 3–5 frases: nome, de onde você é, onde mora, que línguas fala.',hint:'Ich heiße … Ich komme aus … Ich wohne in … Ich spreche …',focus:'heißen, kommen aus, wohnen in, sprechen, sein',model:'Hallo! Ich heiße Lucas. Ich komme aus Brasilien, aus São Paulo. Jetzt wohne ich in Frankfurt. Ich spreche Portugiesisch, Englisch und ein bisschen Deutsch.'}
]},
{id:'l4',title:'Alfabeto e pronúncia',desc:'ä, ö, ü, ß, ei, ie, ch, sch, w, z – soletrar',steps:[
 {t:'info',title:'Letras que soam diferente',html:`<table><tr><th>Letra</th><th>Soa como</th><th>Exemplo</th></tr>
 <tr><td><b>w</b></td><td>“v” de vaca</td><td class="es-t">Wie? · wohnen</td></tr>
 <tr><td><b>v</b></td><td>“f” (quase sempre)</td><td class="es-t">Vater · viel</td></tr>
 <tr><td><b>z</b></td><td>“ts”</td><td class="es-t">Zug · zehn</td></tr>
 <tr><td><b>s</b> antes de vogal</td><td>“z” de zebra</td><td class="es-t">Sie · sehr</td></tr>
 <tr><td><b>ß</b> / <b>ss</b></td><td>“ss” forte</td><td class="es-t">heißen · Wasser</td></tr>
 <tr><td><b>sch</b></td><td>“ch” de chave</td><td class="es-t">Tschüss · schön</td></tr>
 <tr><td><b>j</b></td><td>“i” (como em “iogurte”)</td><td class="es-t">ja · Jana</td></tr>
 <tr><td><b>h</b> no início</td><td>aspirado, como “rr” suave carioca</td><td class="es-t">Hallo · heißen</td></tr>
 <tr><td><b>r</b></td><td>na garganta, suave</td><td class="es-t">Brasilien · Frankfurt</td></tr></table>`},
 {t:'info',title:'Ditongos e trema',html:`<table><tr><th>Escrita</th><th>Soa como</th><th>Exemplo</th></tr>
 <tr><td><b>ei</b></td><td>“ai”</td><td class="es-t">heißen · drei · nein</td></tr>
 <tr><td><b>ie</b></td><td>“i” longo</td><td class="es-t">Sie · wie · vier</td></tr>
 <tr><td><b>eu / äu</b></td><td>“ói”</td><td class="es-t">Freut mich · neu</td></tr>
 <tr><td><b>ä</b></td><td>“é” aberto</td><td class="es-t">Käse · spät</td></tr>
 <tr><td><b>ö</b></td><td>diga “ê” com os lábios de “ô”</td><td class="es-t">schön · hören</td></tr>
 <tr><td><b>ü</b></td><td>diga “i” com os lábios de “u”</td><td class="es-t">Tschüss · müde</td></tr>
 <tr><td><b>ch</b> depois de a, o, u</td><td>raspado na garganta</td><td class="es-t">acht · Buch</td></tr>
 <tr><td><b>ch</b> depois de e, i, ä, ö, ü</td><td>como um gato bravo: “rrr” soprado</td><td class="es-t">ich · sprechen</td></tr></table>
 <div class="ojo">Sem teclado alemão: <b>ä = ae</b>, <b>ö = oe</b>, <b>ü = ue</b>, <b>ß = ss</b>. Mas na app use os botões acima do campo de texto.</div>`},
 {t:'vocab',title:'Soletrar',items:[['das Alphabet','o alfabeto'],['Wie schreibt man das?','Como se escreve isso?'],['Können Sie das bitte buchstabieren?','O senhor pode soletrar, por favor?'],['Wie bitte?','Como? / Desculpe? (não entendi)'],['Noch einmal, bitte.','Mais uma vez, por favor.'],['langsam','devagar']]},
 {t:'info',title:'O alfabeto',html:`<p class="es-t">A (a) · B (be) · C (tse) · D (de) · E (e) · F (éf) · G (gue) · H (rá) · I (i) · J (iót) · K (ka) · L (él) · M (ém) · N (én) · O (o) · P (pe) · Q (ku) · R (ér) · S (és) · T (te) · U (u) · V (fau) · W (ve) · X (iks) · Y (ípsilon) · Z (tsét)</p>
 <p class="es-t">Ä (é) · Ö · Ü · ß (és-tsét)</p>
 <div class="ex">Soletrar o nome é muito comum na Alemanha (no telefone, em repartições): <span class="es-t">Souza – S, O, U, Z, A.</span></div>`},
 {t:'listen',es:'Wie schreibt man das?',de:'Como se escreve isso?'},
 {t:'listen',es:'Tschüss!',de:'Tchau!'},
 {t:'listen',es:'Ich heiße Jana.',de:'Eu me chamo Jana.'},
 {t:'mc',q:'Como soa o „w“ em „wohnen“?',opts:['como “v” em português','como “u” em português','como “w” em inglês'],a:0},
 {t:'mc',q:'Qual palavra tem o som “ai”?',opts:['drei','Sie','vier'],a:0,why:'<b>ei</b> = “ai”; <b>ie</b> = “i” longo.'},
 {t:'mc',q:'Sem teclado alemão, como se escreve „Tschüss“?',opts:['Tschuess','Tschuss','Tschüs-s'],a:0,why:'<b>ü = ue</b>'},
 {t:'speak',es:'Ich heiße Jana. Ich komme aus Hamburg.',de:'Eu me chamo Jana. Eu sou de Hamburgo.',tip:'<i>heiße</i> = “raisse”; <i>ich</i>: o <b>ch</b> é soprado, não “k”.'},
 {t:'speak',es:'Vier, fünf, sechs – sehr schön!',de:'Quatro, cinco, seis – muito bonito!',tip:'<b>v</b> = f · <b>ü</b> = “i” com lábios de “u” · <b>s</b> antes de vogal = z · <b>sch</b> = “ch”.'}
]}],
resumen:`<h3>Cumprimentar</h3><table><tr><td class="es-t">Hallo!</td><td>sempre (informal)</td></tr><tr><td class="es-t">Guten Morgen!</td><td>até ~11h</td></tr><tr><td class="es-t">Guten Tag!</td><td>~11h–18h</td></tr><tr><td class="es-t">Guten Abend!</td><td>a partir de ~18h</td></tr><tr><td class="es-t">Gute Nacht!</td><td>só antes de dormir</td></tr></table>
<h3>Apresentar-se</h3><table><tr><th>informal (du)</th><th>formal (Sie)</th></tr><tr><td class="es-t">Wie heißt du?</td><td class="es-t">Wie heißen Sie?</td></tr><tr><td class="es-t">Woher kommst du?</td><td class="es-t">Woher kommen Sie?</td></tr><tr><td class="es-t">Wie geht es dir? – Und dir?</td><td class="es-t">Wie geht es Ihnen? – Und Ihnen?</td></tr></table>
<h3>Verbos no presente</h3><table><tr><th></th><th>wohnen</th><th>sein</th><th>sprechen</th></tr><tr><td>ich</td><td class="es-t">wohne</td><td class="es-t">bin</td><td class="es-t">spreche</td></tr><tr><td>du</td><td class="es-t">wohnst</td><td class="es-t">bist</td><td class="es-t">sprichst</td></tr><tr><td>er / sie</td><td class="es-t">wohnt</td><td class="es-t">ist</td><td class="es-t">spricht</td></tr><tr><td>Sie</td><td class="es-t">wohnen</td><td class="es-t">sind</td><td class="es-t">sprechen</td></tr></table>
<h3>Despedir-se</h3><p class="es-t">Tschüss! · Auf Wiedersehen! · Bis später! · Bis morgen! · Bis bald!</p>
<h3>Pronúncia</h3><p>w = v · v = f · z = ts · s + vogal = z · sch = ch · ei = ai · ie = i · eu = ói · ä/ö/ü = ae/oe/ue · ß = ss</p>`});

/* ================= KAPITEL 2 · ZAHLEN & KONTAKTE ================= */
LANGS.de.course.units.push({id:'k2',n:'2',level:'A1',title:'Zahlen & Kontakte',sub:'Números · idade · telefone e endereço · formulário · perguntas',
goals:['Zahlen 0–100 und mehr','Wie alt bist du? – Ich bin … Jahre alt.','Telefonnummer, E-Mail, Adresse','Ein Formular ausfüllen (Vorname, Familienname, Geburtsdatum …)','W-Fragen: wer, was, wo, woher, wie, wann','Ja/Nein-Fragen: Verb an Position 1','Verb an Position 2','Präsens: ich, du, er/sie, wir, ihr, sie/Sie · haben'],
situacion:{title:'No Bürgeramt',npc:'Herr Becker',scene:'Você precisa registrar seu endereço novo no Bürgeramt (repartição pública) em Frankfurt.',role:'Du bist Herr Becker, Sachbearbeiter im Bürgeramt Frankfurt, höflich, etwas formell. Du siezt die Person. Frag nach: Familienname, Vorname, Geburtsdatum, Adresse (Straße, Hausnummer, Postleitzahl), Telefonnummer. Lass schwierige Namen buchstabieren. Sprich sehr einfaches Deutsch (A1), kurze Sätze.',goal:'Responda às perguntas do funcionário: nome, data de nascimento, endereço e telefone. Soletre seu sobrenome.'},
placement:[
 {t:'mc',q:'„21“ em alemão:',opts:['einundzwanzig','zwanzigeins','zweiundzwanzig'],a:0},
 {t:'mc',q:'„Quantos anos você tem?“',opts:['Wie alt bist du?','Wie viel bist du?','Wann bist du?'],a:0},
 {t:'gap',q:'___ wohnst du? – In Frankfurt.',a:['Wo']},
 {t:'mc',q:'Qual é a pergunta de sim/não correta?',opts:['Wohnst du in Frankfurt?','Du wohnst in Frankfurt?','Wohnst in Frankfurt du?'],a:0},
 {t:'gap',q:'Wir ___ in Berlin. (wohnen)',a:['wohnen']},
 {t:'gap',q:'Er ___ zwei Handys. (haben)',a:['hat']}],
lessons:[
{id:'l1',title:'Números de 0 a 20',desc:'null, eins, zwei … zwanzig · Telefonnummer',steps:[
 {t:'vocab',title:'Zahlen 0–12',items:[['null','zero'],['eins','um'],['zwei','dois'],['drei','três'],['vier','quatro'],['fünf','cinco'],['sechs','seis'],['sieben','sete'],['acht','oito'],['neun','nove'],['zehn','dez'],['elf','onze'],['zwölf','doze']]},
 {t:'info',title:'De 13 a 20',html:`<p>De 13 a 19 é <b>número + zehn</b>:</p>
 <table><tr><td class="es-t">dreizehn</td><td>13</td><td class="es-t">siebzehn</td><td>17 <span class="muted">(sem -en!)</span></td></tr>
 <tr><td class="es-t">vierzehn</td><td>14</td><td class="es-t">achtzehn</td><td>18</td></tr>
 <tr><td class="es-t">fünfzehn</td><td>15</td><td class="es-t">neunzehn</td><td>19</td></tr>
 <tr><td class="es-t">sechzehn</td><td>16 <span class="muted">(sem -s!)</span></td><td class="es-t">zwanzig</td><td>20</td></tr></table>
 <div class="ojo">Atenção às exceções: <span class="es-t">sechzehn</span> (não “sechszehn”) e <span class="es-t">siebzehn</span> (não “siebenzehn”).</div>
 <div class="ex">No telefone, os alemães costumam dizer <span class="es-t">zwo</span> em vez de <span class="es-t">zwei</span> – para não confundir com <span class="es-t">drei</span>.</div>`},
 {t:'vocab',title:'Telefone',items:[['die Telefonnummer','o número de telefone'],['die Handynummer','o número de celular'],['das Handy','o celular'],['die Nummer','o número'],['die Vorwahl','o código de área (DDD)'],['Wie ist deine Telefonnummer?','Qual é o seu telefone? (informal)'],['Wie ist Ihre Telefonnummer?','Qual é o seu telefone? (formal)'],['Meine Nummer ist …','Meu número é …']]},
 {t:'match',q:'Ligue os números.',pairs:[['sieben','7'],['zwölf','12'],['sechzehn','16'],['neun','9'],['dreizehn','13']]},
 {t:'mc',q:'Como se escreve 17?',opts:['siebzehn','siebenzehn','siebzen'],a:0},
 {t:'listen',es:'null eins sieben zwei',de:'0172'},
 {t:'listen',es:'achtzehn',de:'18'},
 {t:'gap',q:'Meine ___ ist 0171 234 56 78. (número de celular)',a:['Handynummer|Telefonnummer|Nummer']},
 {t:'tr',de:'Qual é o seu telefone? (informal)',a:['Wie ist deine Telefonnummer?','Wie ist deine Handynummer?','Wie ist deine Nummer?']},
 {t:'speak',es:'Meine Handynummer ist null eins sieben zwei, drei vier fünf, sechs sieben acht.',de:'Meu celular é 0172 345 678.',tip:'Diga os números de um em um ou em pares – ninguém espera números longos no telefone.'}
]},
{id:'l2',title:'Até 100 e mais · idade',desc:'einundzwanzig · Wie alt bist du?',steps:[
 {t:'info',title:'Os números “ao contrário”',html:`<p>De 21 a 99 o alemão diz primeiro a <b>unidade</b>, depois a <b>dezena</b> – com <b>und</b> no meio, tudo junto:</p>
 <table><tr><td>21</td><td class="es-t">einundzwanzig</td><td>“um-e-vinte”</td></tr>
 <tr><td>35</td><td class="es-t">fünfunddreißig</td><td>“cinco-e-trinta”</td></tr>
 <tr><td>48</td><td class="es-t">achtundvierzig</td><td>“oito-e-quarenta”</td></tr>
 <tr><td>99</td><td class="es-t">neunundneunzig</td><td>“nove-e-noventa”</td></tr></table>
 <table><tr><td class="es-t">zwanzig</td><td>20</td><td class="es-t">sechzig</td><td>60</td></tr><tr><td class="es-t">dreißig</td><td>30 <span class="muted">(com ß!)</span></td><td class="es-t">siebzig</td><td>70</td></tr><tr><td class="es-t">vierzig</td><td>40</td><td class="es-t">achtzig</td><td>80</td></tr><tr><td class="es-t">fünfzig</td><td>50</td><td class="es-t">neunzig</td><td>90</td></tr></table>
 <p><span class="es-t">hundert</span> = 100 · <span class="es-t">hunderteins</span> = 101 · <span class="es-t">zweihundert</span> = 200 · <span class="es-t">tausend</span> = 1000</p>
 <div class="ojo">Com 21, 31, 41 … é <span class="es-t">ein</span>und…, não “eins”: <span class="es-t">einundzwanzig</span>.</div>`},
 {t:'vocab',title:'Idade',items:[['Wie alt bist du?','Quantos anos você tem? (informal)'],['Wie alt sind Sie?','Quantos anos o senhor / a senhora tem?'],['Ich bin 28 Jahre alt.','Eu tenho 28 anos.'],['das Jahr, die Jahre','o ano, os anos'],['alt','velho / idoso; (idade)'],['jung','jovem'],['das Alter','a idade'],['der Geburtstag','o aniversário']]},
 {t:'info',title:'A idade com „sein“',html:`<p>Em português a gente <b>tem</b> anos. Em alemão a gente <b>é</b> anos “velho”:</p>
 <div class="ex"><span class="es-t">Ich bin 28 Jahre alt.</span> = Eu tenho 28 anos. <span class="muted">(literalmente: “eu sou 28 anos velho”)</span></div>
 <div class="ojo">Nunca “Ich habe 28 Jahre” – esse é o erro mais comum de quem fala português!</div>`},
 {t:'mc',q:'Como se diz 45?',opts:['fünfundvierzig','vierundfünfzig','vierzigfünf'],a:0,why:'Primeiro a unidade (fünf), depois <i>und</i>, depois a dezena (vierzig).'},
 {t:'mc',q:'„Eu tenho 30 anos.“',opts:['Ich bin dreißig Jahre alt.','Ich habe dreißig Jahre.','Ich habe dreißig Jahre alt.'],a:0,why:'Idade = <b>sein</b> + Jahre alt.'},
 {t:'match',q:'Ligue os números.',pairs:[['dreiundsechzig','63'],['sechsunddreißig','36'],['siebzig','70'],['einundachtzig','81'],['hundertzwanzig','120']]},
 {t:'gap',q:'Wie alt ___ Sie? – Ich ___ 52 Jahre alt.',a:['sind','bin']},
 {t:'listen',es:'siebenundvierzig',de:'47'},
 {t:'listen',es:'Ich bin zweiunddreißig Jahre alt.',de:'Eu tenho 32 anos.'},
 {t:'tr',de:'Quantos anos você tem? (informal)',a:['Wie alt bist du?']},
 {t:'tr',de:'Eu tenho 26 anos.',a:['Ich bin 26 Jahre alt.','Ich bin sechsundzwanzig Jahre alt.','Ich bin 26.','Ich bin sechsundzwanzig.']}
]},
{id:'l3',title:'Dados pessoais e formulário',desc:'Vorname, Familienname, Adresse … ein Formular ausfüllen',steps:[
 {t:'vocab',title:'Dados pessoais',items:[['der Name','o nome'],['der Vorname','o primeiro nome'],['der Familienname','o sobrenome'],['die Adresse','o endereço'],['die Straße','a rua'],['die Hausnummer','o número da casa'],['die Postleitzahl','o CEP'],['der Wohnort','a cidade onde mora'],['das Geburtsdatum','a data de nascimento'],['der Geburtsort','o local de nascimento'],['geboren','nascido'],['die E-Mail-Adresse','o e-mail'],['der Familienstand','o estado civil'],['ledig','solteiro / solteira'],['verheiratet','casado / casada'],['geschieden','divorciado / divorciada'],['das Formular','o formulário'],['ausfüllen','preencher'],['unterschreiben','assinar'],['die Unterschrift','a assinatura']]},
 {t:'info',title:'O endereço alemão',html:`<p>Na Alemanha, o número vem <b>depois</b> da rua, e o CEP (5 números) vem <b>antes</b> da cidade:</p>
 <div class="ex es-t">Lucas Souza<br>Bergerstraße 12<br>60316 Frankfurt am Main</div>
 <p><span class="es-t">Wo wohnen Sie? – In der Bergerstraße 12.</span></p>
 <div class="ojo"><span class="es-t">Straße</span> muitas vezes vira <b>str.</b> e se escreve junto com o nome: <span class="es-t">Bergerstraße</span>. Em formulários: <span class="es-t">Vorname</span> = primeiro nome, <span class="es-t">Familienname / Nachname</span> = sobrenome.</div>`},
 {t:'info',title:'Data de nascimento',html:`<p>Em formulários a data é escrita como no Brasil – <b>dia.mês.ano</b>, com pontos: <span class="es-t">14.03.1997</span>.</p>
 <p><span class="es-t">Wann sind Sie geboren? – Am 14. März 1997.</span> <span class="muted">(Os meses vêm no capítulo 6.)</span></p>
 <p><span class="es-t">Wo sind Sie geboren? – In São Paulo.</span></p>`},
 {t:'gap',q:'Formulário para a colega: Jana Wolf, Hamburger Allee 5, 60486 Frankfurt. Vorname: ___ · Familienname: ___ · Postleitzahl: ___',a:['Jana','Wolf','60486'],why:'<i>Vorname</i> = primeiro nome, <i>Familienname</i> = sobrenome, <i>Postleitzahl</i> = CEP.'},
 {t:'mc',q:'Lucas não é casado. No formulário, em „Familienstand“, ele escreve:',opts:['ledig','verheiratet','geboren'],a:0},
 {t:'mc',q:'„Unterschrift“ é …',opts:['a assinatura','o sobrenome','o endereço'],a:0},
 {t:'dialog',place:'Bürgeramt Frankfurt',title:'Registrar o endereço',scene:'Na Alemanha, quem se muda precisa se registrar no <b>Bürgeramt</b> em até duas semanas (<i>Anmeldung</i>). Aqui se usa <b>Sie</b>.',lines:[
  {n:'Herr Becker',es:'Guten Tag. Wie ist Ihr Familienname, bitte?',de:'Bom dia. Qual é o seu sobrenome, por favor?'},
  {you:true,opts:[{es:'Souza.',ok:true},{es:'Lucas.',ok:false,why:'<i>Familienname</i> é o <b>sobrenome</b>.'}]},
  {n:'Herr Becker',es:'Wie schreibt man das?',de:'Como se escreve isso?'},
  {you:true,opts:[{es:'S – O – U – Z – A.',ok:true},{es:'Ich wohne in Frankfurt.',ok:false,why:'Ele quer que você <b>soletre</b> o nome.'}]},
  {n:'Herr Becker',es:'Danke. Und Ihr Vorname?',de:'Obrigado. E o seu primeiro nome?'},
  {you:true,opts:[{es:'Lucas.',ok:true},{es:'Ledig.',ok:false,why:'<i>ledig</i> = solteiro. <i>Vorname</i> = primeiro nome.'}]},
  {n:'Herr Becker',es:'Und wo wohnen Sie jetzt?',de:'E onde o senhor mora agora?'},
  {you:true,opts:[{es:'In der Bergerstraße 12, in Frankfurt.',ok:true},{es:'Ich komme aus Brasilien.',ok:false,why:'Ele perguntou onde você <b>mora</b> (wo wohnen), não de onde você é.'}]},
  {n:'Herr Becker',es:'Gut. Bitte unterschreiben Sie hier.',de:'Bem. Por favor, assine aqui.'}]},
 {t:'tr',de:'Qual é o seu endereço? (formal)',a:['Wie ist Ihre Adresse?']},
 {t:'tr',de:'Eu moro na Bergerstraße 12.',a:['Ich wohne in der Bergerstraße 12.']},
 {t:'free',task:'Preencha um formulário com os seus dados, em frases: Vorname, Familienname, Alter, Wohnort, Telefonnummer, Familienstand.',hint:'Mein Vorname ist … Mein Familienname ist … Ich bin … Jahre alt. Ich wohne in … Meine Telefonnummer ist … Ich bin ledig / verheiratet.',focus:'persönliche Daten, sein, wohnen, Zahlen',model:'Mein Vorname ist Lucas, mein Familienname ist Souza. Ich bin 28 Jahre alt. Ich wohne in Frankfurt, in der Bergerstraße 12. Meine Telefonnummer ist 0172 345 678. Ich bin ledig.'}
]},
{id:'l4',title:'Fazer perguntas',desc:'wer, was, wo, wie, wann · Verb an Position 1 und 2',steps:[
 {t:'vocab',title:'Palavras interrogativas',items:[['wer?','quem?'],['was?','o quê?'],['wo?','onde?'],['woher?','de onde?'],['wohin?','para onde?'],['wie?','como?'],['wie alt?','quantos anos?'],['wann?','quando?'],['warum?','por quê?'],['wie viel?','quanto?']]},
 {t:'info',title:'O verbo na posição 2',html:`<p>Regra de ouro do alemão: na frase afirmativa e na pergunta com W, o <b>verbo está sempre na posição 2</b>.</p>
 <table><tr><th>1</th><th>2 (verbo)</th><th>resto</th></tr>
 <tr><td class="es-t">Ich</td><td class="es-t"><b>wohne</b></td><td class="es-t">jetzt in Frankfurt.</td></tr>
 <tr><td class="es-t">Jetzt</td><td class="es-t"><b>wohne</b></td><td class="es-t">ich in Frankfurt.</td></tr>
 <tr><td class="es-t">Wo</td><td class="es-t"><b>wohnst</b></td><td class="es-t">du?</td></tr></table>
 <p>Na pergunta de <b>sim/não</b>, o verbo vai para a <b>posição 1</b>:</p>
 <div class="ex"><span class="es-t"><b>Wohnst</b> du in Frankfurt?</span> – <span class="es-t">Ja.</span> / <span class="es-t">Nein, in Köln.</span></div>
 <div class="ojo">Em português basta mudar a entonação (“Você mora em Frankfurt?”). Em alemão é preciso <b>mudar a ordem</b>: nunca “Du wohnst in Frankfurt?”.</div>`},
 {t:'info',title:'Presente completo e „haben“',html:`<table><tr><th></th><th>wohnen</th><th>arbeiten</th><th>haben <span class="muted">(ter)</span></th></tr>
 <tr><td>ich</td><td class="es-t">wohne</td><td class="es-t">arbeite</td><td class="es-t">habe</td></tr>
 <tr><td>du</td><td class="es-t">wohnst</td><td class="es-t">arbeit<b>e</b>st</td><td class="es-t">ha<b>st</b></td></tr>
 <tr><td>er / sie / es</td><td class="es-t">wohnt</td><td class="es-t">arbeit<b>e</b>t</td><td class="es-t">ha<b>t</b></td></tr>
 <tr><td>wir</td><td class="es-t">wohnen</td><td class="es-t">arbeiten</td><td class="es-t">haben</td></tr>
 <tr><td>ihr</td><td class="es-t">wohnt</td><td class="es-t">arbeit<b>e</b>t</td><td class="es-t">habt</td></tr>
 <tr><td>sie / Sie</td><td class="es-t">wohnen</td><td class="es-t">arbeiten</td><td class="es-t">haben</td></tr></table>
 <p><b>ihr</b> = vocês (informal). <b>sie</b> (minúsculo) = eles/elas; <b>Sie</b> (maiúsculo) = o senhor / a senhora / os senhores.</p>
 <div class="ex">Radical terminado em <b>-t</b> ou <b>-d</b> ganha um <b>e</b>: <span class="es-t">du arbeitest, er arbeitet</span>.</div>`},
 {t:'mc',q:'Qual frase está correta?',opts:['Heute arbeite ich nicht.','Heute ich arbeite nicht.','Heute ich nicht arbeite.'],a:0,why:'O verbo fica na <b>posição 2</b>, mesmo quando a frase começa com <i>heute</i>.'},
 {t:'mc',q:'Pergunta de sim/não: „Você tem celular?“',opts:['Hast du ein Handy?','Du hast ein Handy?','Ein Handy hast du?'],a:0},
 {t:'order',es:'Wo arbeitet Jana',de:'Onde a Jana trabalha?'},
 {t:'order',es:'Jetzt wohnen wir in Frankfurt',de:'Agora nós moramos em Frankfurt.'},
 {t:'gap',q:'___ kommt Tom? – Aus Köln.',a:['Woher']},
 {t:'gap',q:'Wir ___ in Frankfurt. Und wo ___ ihr? (wohnen)',a:['wohnen','wohnt']},
 {t:'gap',q:'Jana ___ ein Auto. (haben)',a:['hat']},
 {t:'read',hideText:true,title:'Recado na secretária eletrônica',intro:'Ouça o recado. Depois responda às perguntas.',text:`Hallo Lucas, hier ist Jana. Wir haben morgen ein Meeting um zehn Uhr. Kannst du mich bitte zurückrufen? Meine Handynummer ist null eins sieben sechs, zwei acht drei, neun vier eins. Danke und tschüss!`,de:`Oi, Lucas, aqui é a Jana. Amanhã temos uma reunião às dez horas. Você pode me ligar de volta, por favor? Meu celular é 0176 283 941. Obrigada e tchau!`},
 {t:'mc',q:'Wer ruft an?',opts:['Jana','Tom','Herr Becker'],a:0},
 {t:'mc',q:'Wie ist Janas Handynummer?',opts:['0176 283 941','0167 283 914','0176 382 941'],a:0},
 {t:'mc',q:'Das Meeting ist um …',opts:['10 Uhr','12 Uhr','2 Uhr'],a:0},
 {t:'tr',de:'Vocês moram em Frankfurt? (informal)',a:['Wohnt ihr in Frankfurt?']},
 {t:'tr',de:'De onde o senhor é?',a:['Woher kommen Sie?']}
]}],
resumen:`<h3>Números</h3><p class="es-t">null · eins · zwei · drei · vier · fünf · sechs · sieben · acht · neun · zehn · elf · zwölf · dreizehn … sechzehn · siebzehn … zwanzig</p><p>21 = <span class="es-t">einundzwanzig</span> (unidade + und + dezena) · 30 = <span class="es-t">dreißig</span> · 100 = <span class="es-t">hundert</span> · 1000 = <span class="es-t">tausend</span></p>
<h3>Idade</h3><table><tr><td class="es-t">Wie alt bist du? / Wie alt sind Sie?</td><td class="es-t">Ich bin 28 Jahre alt.</td></tr></table><p>Nunca “Ich habe 28 Jahre”.</p>
<h3>Dados pessoais</h3><p><span class="es-t">Vorname · Familienname · Straße + Hausnummer · Postleitzahl + Wohnort · Geburtsdatum · Familienstand (ledig / verheiratet / geschieden) · Unterschrift</span></p>
<h3>Perguntas</h3><table><tr><td>W-Frage: verbo na posição 2</td><td class="es-t">Wo wohnst du?</td></tr><tr><td>sim/não: verbo na posição 1</td><td class="es-t">Wohnst du in Frankfurt?</td></tr><tr><td>afirmação: verbo na posição 2</td><td class="es-t">Jetzt wohne ich in Frankfurt.</td></tr></table>
<h3>Presente</h3><table><tr><th></th><th>wohnen</th><th>haben</th></tr><tr><td>ich</td><td class="es-t">wohne</td><td class="es-t">habe</td></tr><tr><td>du</td><td class="es-t">wohnst</td><td class="es-t">hast</td></tr><tr><td>er/sie/es</td><td class="es-t">wohnt</td><td class="es-t">hat</td></tr><tr><td>wir</td><td class="es-t">wohnen</td><td class="es-t">haben</td></tr><tr><td>ihr</td><td class="es-t">wohnt</td><td class="es-t">habt</td></tr><tr><td>sie / Sie</td><td class="es-t">wohnen</td><td class="es-t">haben</td></tr></table>`});

/* ================= KAPITEL 3 · FAMILIE & FREUNDE ================= */
LANGS.de.course.units.push({id:'k3',n:'3',level:'A1',title:'Familie & Freunde',sub:'Família · der/die/das · ein/kein · plural · meu, seu … · haben',
goals:['Familie: Vater, Mutter, Eltern, Geschwister …','der / die / das – jedes Nomen mit Artikel lernen','ein / eine · kein / keine','Plural: Kinder, Brüder, Schwestern …','mein / dein / sein / ihr / Ihr','Hast du Geschwister? – Ich habe einen Bruder.','Fotos zeigen: Das ist meine Mutter.','Eine kurze E-Mail schreiben'],
situacion:{title:'Fotos da família',npc:'Tom',scene:'À noite, na cozinha da WG. O Tom vê fotos no seu celular e faz perguntas sobre a sua família.',role:'Du bist Tom, 31, Mitbewohner in der WG in Frankfurt, neugierig und locker. Du duzt Lucas. Frag nach der Familie auf den Fotos: Wer ist das? Wie alt? Wo wohnt sie/er? Hast du Geschwister? Erzähl auch kurz von deiner Familie (eine Schwester in Köln, Eltern in Bonn). Sprich sehr einfaches Deutsch (A1).',goal:'Mostre suas “fotos”: diga quem é cada pessoa, quantos anos tem e onde mora. Pergunte também sobre a família do Tom.'},
placement:[
 {t:'mc',q:'„a mãe“:',opts:['die Mutter','der Mutter','das Mutter'],a:0},
 {t:'mc',q:'„Eu não tenho irmãos.“',opts:['Ich habe keine Geschwister.','Ich habe nicht Geschwister.','Ich habe kein Geschwister.'],a:0},
 {t:'gap',q:'Das ist ___ Bruder. (meu)',a:['mein']},
 {t:'gap',q:'Das ist ___ Schwester. (meu)',a:['meine']},
 {t:'mc',q:'Plural de „das Kind“:',opts:['die Kinder','die Kinds','die Kinden'],a:0},
 {t:'mc',q:'Anna hat ein Kind. Das ist … Sohn.',opts:['ihr','sein','dein'],a:0}],
lessons:[
{id:'l1',title:'A família',desc:'Vater, Mutter, Bruder, Schwester …',steps:[
 {t:'vocab',title:'Família',items:[['die Familie','a família'],['der Vater','o pai'],['die Mutter','a mãe'],['die Eltern (Pl.)','os pais'],['der Bruder','o irmão'],['die Schwester','a irmã'],['die Geschwister (Pl.)','os irmãos (irmãos e irmãs)'],['der Sohn','o filho'],['die Tochter','a filha'],['das Kind','a criança / o filho'],['die Oma','a avó'],['der Opa','o avô'],['die Großeltern (Pl.)','os avós'],['der Mann','o homem / o marido'],['die Frau','a mulher / a esposa'],['der Freund','o amigo / o namorado'],['die Freundin','a amiga / a namorada'],['der Partner / die Partnerin','o parceiro / a parceira']]},
 {t:'info',title:'Cores dos artigos',html:`<p>Nas listas de vocabulário, os artigos têm cores – assim fica mais fácil lembrar:</p>
 <table><tr><td><span class="art a-m">der</span></td><td>masculino</td><td class="es-t">der Vater, der Bruder</td></tr>
 <tr><td><span class="art a-f">die</span></td><td>feminino</td><td class="es-t">die Mutter, die Schwester</td></tr>
 <tr><td><span class="art a-n">das</span></td><td>neutro (não existe em português!)</td><td class="es-t">das Kind</td></tr>
 <tr><td><span class="art a-p">die</span> (Pl.)</td><td>plural – sempre <b>die</b></td><td class="es-t">die Eltern, die Kinder</td></tr></table>
 <div class="ojo">O gênero em alemão muitas vezes é <b>diferente</b> do português: <span class="es-t">das Mädchen</span> (a menina) é neutro, <span class="es-t">die Sonne</span> (o sol) é feminino. Por isso: aprenda <b>sempre</b> a palavra com o artigo.</div>`},
 {t:'mc',q:'„der Freund“ pode significar …',opts:['o amigo ou o namorado','só o amigo','o pai'],a:0,why:'<i>mein Freund</i> muitas vezes = meu namorado. Para “um amigo” se diz também <i>ein Freund von mir</i>.'},
 {t:'match',q:'Ligue.',pairs:[['die Eltern','os pais'],['die Geschwister','os irmãos'],['die Tochter','a filha'],['der Opa','o avô'],['die Großeltern','os avós']]},
 {t:'mc',q:'A mãe do seu pai é a sua …',opts:['Oma','Tochter','Schwester'],a:0},
 {t:'gap',q:'Mein Vater und meine Mutter sind meine ___.',a:['Eltern']},
 {t:'listen',es:'Das ist meine Familie.',de:'Esta é a minha família.'},
 {t:'listen',es:'Meine Schwester heißt Carla.',de:'Minha irmã se chama Carla.'}
]},
{id:'l2',title:'der/die/das · ein/kein · plural',desc:'Artikel, unbestimmter Artikel, Negation, Plural',steps:[
 {t:'info',title:'Artigo definido e indefinido',html:`<table><tr><th></th><th>definido</th><th>indefinido</th><th>negação</th></tr>
 <tr><td>masculino</td><td class="es-t"><span class="art a-m">der</span> Bruder</td><td class="es-t">ein Bruder</td><td class="es-t">kein Bruder</td></tr>
 <tr><td>feminino</td><td class="es-t"><span class="art a-f">die</span> Schwester</td><td class="es-t">eine Schwester</td><td class="es-t">keine Schwester</td></tr>
 <tr><td>neutro</td><td class="es-t"><span class="art a-n">das</span> Kind</td><td class="es-t">ein Kind</td><td class="es-t">kein Kind</td></tr>
 <tr><td>plural</td><td class="es-t"><span class="art a-p">die</span> Kinder</td><td class="es-t">– Kinder</td><td class="es-t">keine Kinder</td></tr></table>
 <p><b>kein / keine</b> = “nenhum / não … um”. Com substantivos se usa <b>kein</b>, não <i>nicht</i>:</p>
 <div class="ex"><span class="es-t">Ich habe keine Kinder.</span> = Eu não tenho filhos. · <span class="es-t">Das ist kein Problem.</span> = Isso não é problema.</div>`},
 {t:'info',title:'O plural',html:`<p>Em alemão há várias formas de plural – é preciso aprender com a palavra. As mais comuns:</p>
 <table><tr><th>forma</th><th>exemplo</th></tr>
 <tr><td>-er (às vezes com trema)</td><td class="es-t">das Kind → die Kinder · der Mann → die Männer</td></tr>
 <tr><td>-n / -en</td><td class="es-t">die Schwester → die Schwestern · die Frau → die Frauen</td></tr>
 <tr><td>-e (às vezes com trema)</td><td class="es-t">der Freund → die Freunde · der Sohn → die Söhne</td></tr>
 <tr><td>trema ou nada</td><td class="es-t">der Bruder → die Brüder · der Vater → die Väter</td></tr>
 <tr><td>-s (palavras estrangeiras)</td><td class="es-t">das Handy → die Handys · das Auto → die Autos</td></tr></table>
 <div class="ex">Dica: palavras femininas terminadas em <b>-e</b> fazem <b>-n</b> (<span class="es-t">die Tante → die Tanten</span>), terminadas em <b>-in</b> fazem <b>-nen</b> (<span class="es-t">die Freundin → die Freundinnen</span>).</div>`},
 {t:'vocab',title:'Plural',items:[['die Kinder (Pl.)','as crianças / os filhos'],['die Brüder (Pl.)','os irmãos (homens)'],['die Schwestern (Pl.)','as irmãs'],['die Söhne (Pl.)','os filhos (homens)'],['die Töchter (Pl.)','as filhas'],['die Freunde (Pl.)','os amigos'],['die Leute (Pl.)','as pessoas']]},
 {t:'mc',q:'„Eu não tenho carro.“ (das Auto)',opts:['Ich habe kein Auto.','Ich habe nicht Auto.','Ich habe keine Auto.'],a:0,why:'<i>das Auto</i> é neutro → <b>kein</b> Auto.'},
 {t:'gap',q:'Lucas hat ___ Schwester. (uma)',a:['eine']},
 {t:'gap',q:'Tom hat ___ Kinder. (nenhum)',a:['keine']},
 {t:'mc',q:'Plural de „der Bruder“:',opts:['die Brüder','die Bruders','die Brudern'],a:0},
 {t:'mc',q:'Qual artigo? ___ Kind',opts:['das','der','die'],a:0},
 {t:'mc',q:'Qual artigo? ___ Tochter',opts:['die','der','das'],a:0},
 {t:'tr',de:'Isso não é problema.',a:['Das ist kein Problem.']},
 {t:'tr',de:'Ela tem dois filhos.',a:['Sie hat zwei Kinder.','Sie hat zwei Söhne.']}
]},
{id:'l3',title:'meu, seu … · haben',desc:'mein, dein, sein, ihr, Ihr · Hast du Geschwister?',steps:[
 {t:'info',title:'Possessivos',html:`<table><tr><th></th><th>der / das</th><th>die / plural</th></tr>
 <tr><td>ich → meu</td><td class="es-t">mein Bruder / mein Kind</td><td class="es-t">meine Schwester / meine Eltern</td></tr>
 <tr><td>du → seu (informal)</td><td class="es-t">dein Vater</td><td class="es-t">deine Mutter</td></tr>
 <tr><td>er → dele</td><td class="es-t">sein Sohn</td><td class="es-t">seine Tochter</td></tr>
 <tr><td>sie → dela</td><td class="es-t">ihr Sohn</td><td class="es-t">ihre Tochter</td></tr>
 <tr><td>wir → nosso</td><td class="es-t">unser Opa</td><td class="es-t">unsere Oma</td></tr>
 <tr><td>Sie → seu (formal)</td><td class="es-t">Ihr Mann</td><td class="es-t">Ihre Frau</td></tr></table>
 <p>Como <b>ein/eine</b>: com feminino e plural se acrescenta <b>-e</b>.</p>
 <div class="ojo">Em português “seu filho” pode ser dele ou dela. Em alemão não: <span class="es-t">sein Sohn</span> = o filho <b>dele</b>, <span class="es-t">ihr Sohn</span> = o filho <b>dela</b>.</div>`},
 {t:'info',title:'Hast du Geschwister?',html:`<p>Com <b>haben</b> o artigo masculino muda: <b>ein → einen</b>, <b>kein → keinen</b>. (O porquê vem no capítulo 4 – por enquanto, aprenda as frases prontas.)</p>
 <table><tr><td class="es-t">Ich habe <b>einen</b> Bruder.</td><td>masculino</td></tr>
 <tr><td class="es-t">Ich habe eine Schwester.</td><td>feminino</td></tr>
 <tr><td class="es-t">Ich habe ein Kind.</td><td>neutro</td></tr>
 <tr><td class="es-t">Ich habe keine Geschwister.</td><td>plural</td></tr></table>`},
 {t:'mc',q:'Das ist Tom. Das ist … Schwester.',opts:['seine','ihre','sein'],a:0,why:'A irmã <b>dele</b> (Tom) → <i>seine</i> (feminino → -e).'},
 {t:'mc',q:'Das ist Jana. Das ist … Vater.',opts:['ihr','sein','ihre'],a:0,why:'O pai <b>dela</b> → <i>ihr</i>; <i>der Vater</i> é masculino → sem -e.'},
 {t:'gap',q:'Wie heißt ___ Mutter? (sua, informal)',a:['deine']},
 {t:'gap',q:'Frau Weber, ist das ___ Sohn? (seu, formal)',a:['Ihr']},
 {t:'gap',q:'Ich habe ___ Bruder und zwei Schwestern. (um)',a:['einen']},
 {t:'order',es:'Hast du Geschwister',de:'Você tem irmãos?'},
 {t:'dialog',place:'WG-Küche',title:'Fotos no celular',scene:'O Tom vê uma foto no seu celular.',lines:[
  {n:'Tom',es:'Oh, ein Foto! Wer ist das?',de:'Ah, uma foto! Quem é?'},
  {you:true,opts:[{es:'Das ist meine Mutter.',ok:true},{es:'Das ist mein Mutter.',ok:false,why:'<i>die Mutter</i> é feminino → <b>meine</b> Mutter.'},{es:'Das ist meine Mutters.',ok:false,why:'O plural não existe aqui – é só uma mãe 😉'}]},
  {n:'Tom',es:'Sie ist sehr jung! Wie alt ist sie?',de:'Ela é muito jovem! Quantos anos ela tem?'},
  {you:true,opts:[{es:'Sie ist 54 Jahre alt.',ok:true},{es:'Sie hat 54 Jahre.',ok:false,why:'Idade com <b>sein</b>: <i>Sie ist 54 Jahre alt.</i>'}]},
  {n:'Tom',es:'Und hast du Geschwister?',de:'E você tem irmãos?'},
  {you:true,opts:[{es:'Ja, ich habe einen Bruder.',ok:true},{es:'Ja, ich habe ein Bruder.',ok:false,why:'Com <i>haben</i>: <b>einen</b> Bruder (masculino).'},{es:'Nein, ich habe nicht Geschwister.',ok:false,why:'Com substantivo: <b>keine</b> Geschwister.'}]},
  {n:'Tom',es:'Cool. Ich habe eine Schwester. Sie wohnt in Köln.',de:'Legal. Eu tenho uma irmã. Ela mora em Colônia.'}]},
 {t:'tr',de:'Este é o meu irmão.',a:['Das ist mein Bruder.']},
 {t:'tr',de:'Você tem filhos? (informal)',a:['Hast du Kinder?']},
 {t:'speak',es:'Das ist meine Familie: mein Vater, meine Mutter und mein Bruder.',de:'Esta é a minha família: meu pai, minha mãe e meu irmão.',tip:'<i>Vater</i>: o <b>v</b> soa como “f” – “fáter”.'}
]},
{id:'l4',title:'Ler e escrever: uma e-mail',desc:'Lesen · Hören · eine kurze E-Mail schreiben',steps:[
 {t:'read',title:'Leitura: Eine E-Mail an Tom',intro:'O Lucas escreve para o Tom sobre a visita da família.',text:`Hallo Tom,
im Mai {kommen|vêm} meine Eltern nach Frankfurt! Mein Vater heißt Paulo, er ist 58 Jahre alt. Meine Mutter heißt Rita, sie ist 54. Sie wohnen in São Paulo. Mein Bruder Rafael kommt {leider|infelizmente} nicht. Er hat zwei Kinder und {keine Zeit|não tem tempo}.
Hast du am Samstag Zeit? Wir {grillen|fazemos churrasco} im Garten!
Viele Grüße
Lucas`,de:`Oi, Tom,
em maio meus pais vêm para Frankfurt! Meu pai se chama Paulo, ele tem 58 anos. Minha mãe se chama Rita, ela tem 54. Eles moram em São Paulo. Meu irmão Rafael infelizmente não vem. Ele tem dois filhos e não tem tempo.
Você tem tempo no sábado? Vamos fazer churrasco no jardim!
Abraços,
Lucas`},
 {t:'mc',q:'Richtig oder falsch? Die Eltern von Lucas wohnen in Frankfurt.',opts:['falsch','richtig'],a:0},
 {t:'mc',q:'Richtig oder falsch? Rafael hat Kinder.',opts:['richtig','falsch'],a:0},
 {t:'mc',q:'Wie alt ist der Vater?',opts:['58','54','28'],a:0},
 {t:'read',hideText:true,title:'Conversa no trabalho',intro:'Ouça a conversa entre a Jana e um colega.',text:`Jana, hast du Kinder? – Ja, ich habe eine Tochter. Sie heißt Mia und ist vier Jahre alt. – Oh, schön! Und hast du auch Geschwister? – Nein, ich habe keine Geschwister. Aber ich habe viele Freunde.`,de:`Jana, você tem filhos? – Sim, tenho uma filha. Ela se chama Mia e tem quatro anos. – Ah, que legal! E você também tem irmãos? – Não, não tenho irmãos. Mas tenho muitos amigos.`},
 {t:'mc',q:'Wie alt ist Mia?',opts:['vier','vierzehn','zwei'],a:0},
 {t:'mc',q:'Richtig oder falsch? Jana hat einen Bruder.',opts:['falsch','richtig'],a:0},
 {t:'info',title:'E-mail curta: começar e terminar',html:`<table><tr><th></th><th>informal (du)</th><th>formal (Sie)</th></tr>
 <tr><td>começo</td><td class="es-t">Hallo Tom, / Liebe Jana, / Lieber Tom,</td><td class="es-t">Sehr geehrte Frau Weber, / Sehr geehrter Herr Becker,</td></tr>
 <tr><td>fim</td><td class="es-t">Viele Grüße / Liebe Grüße</td><td class="es-t">Mit freundlichen Grüßen</td></tr></table>
 <div class="ex">Depois da saudação vem vírgula, e a frase seguinte começa com <b>letra minúscula</b>: <span class="es-t">Hallo Tom, im Mai kommen …</span></div>`},
 {t:'free',task:'Escreva uma e-mail curta (cerca de 30 palavras) para uma amiga alemã sobre a sua família: 1) quem é da sua família, 2) idade e onde moram, 3) pergunte sobre a família dela.',hint:'Liebe …, meine Familie ist … Mein Vater/Meine Mutter heißt … und ist … Jahre alt. Sie wohnen in … Hast du Geschwister? Viele Grüße …',focus:'Possessivartikel, haben, ein/kein, Zahlen, E-Mail-Anrede und Gruß',model:'Liebe Jana,\nmeine Familie wohnt in São Paulo. Mein Vater heißt Paulo, er ist 58. Meine Mutter Rita ist 54. Ich habe einen Bruder, er hat zwei Kinder. Hast du Geschwister?\nViele Grüße\nLucas'}
]}],
resumen:`<h3>Artigos</h3><table><tr><th></th><th>der (m)</th><th>die (f)</th><th>das (n)</th><th>die (Pl.)</th></tr><tr><td>definido</td><td class="es-t">der Bruder</td><td class="es-t">die Schwester</td><td class="es-t">das Kind</td><td class="es-t">die Kinder</td></tr><tr><td>indefinido</td><td class="es-t">ein</td><td class="es-t">eine</td><td class="es-t">ein</td><td>–</td></tr><tr><td>negação</td><td class="es-t">kein</td><td class="es-t">keine</td><td class="es-t">kein</td><td class="es-t">keine</td></tr><tr><td>com haben</td><td class="es-t">einen / keinen</td><td class="es-t">eine / keine</td><td class="es-t">ein / kein</td><td class="es-t">– / keine</td></tr></table>
<h3>Possessivos</h3><p class="es-t">mein/meine · dein/deine · sein/seine (dele) · ihr/ihre (dela) · unser/unsere · Ihr/Ihre (formal)</p>
<h3>Plural</h3><p class="es-t">Kind → Kinder · Bruder → Brüder · Schwester → Schwestern · Freund → Freunde · Handy → Handys</p>
<h3>E-mail</h3><p class="es-t">Hallo … / Liebe … / Lieber … – Viele Grüße · Sehr geehrte … – Mit freundlichen Grüßen</p>`});
