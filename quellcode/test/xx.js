/* Test-Lernsprache „Testisch“ – nur zum Prüfen, ob die Engine ohne Spanisch-Teile läuft (minimale Angaben, keine Zahlen/Verben/Formen) */
defineLang('xx',{name:'Testisch',flag:'🏳️',into:'ins Testische',onLang:'auf Testisch',adj:'testisch',voice:'it-IT',keys:['à','è'],unit:'Lektion',units:'Lektionen',
 greet:['Bun dì','Bun dì','Bona sera'],teacher:'Du bist Testlehrer.',sampleSay:['Bun dì.'],key:'xx-test-v1',gist:'xx.json',
 levels:[{id:'A1',label:'A1',title:'Anfang',sub:'Test'}],levelOf:{x1:'A1'},emoji:{'il cane':'🐕'},
 stories:[{id:'t1',title:'La prova',after:'x1',text:'Mario è a casa. Mario mangia.',de:'Mario ist zu Hause. Mario isst.',qs:[{q:'Dove è Mario?',opts:['a casa','a scuola'],a:0}]}]});
LANGS.xx.course.units.push({id:'x1',n:1,title:'Prima lezione',level:'A1',goals:['begrüßen'],resumen:'<p>Kurz.</p>',
 placement:[{t:'mc',q:'Ciao = ?',opts:['Hallo','Tschüss'],a:0},{t:'mc',q:'Grazie = ?',opts:['Danke','Bitte'],a:0},{t:'mc',q:'Sì = ?',opts:['Ja','Nein'],a:0}],
 lessons:[{id:'l1',title:'Begrüßen',desc:'Ciao!',steps:[
  {t:'info',title:'Hallo',html:'<p>Man sagt <span class="es-t">Ciao</span>.</p>'},
  {t:'vocab',items:[['ciao','hallo'],['grazie','danke'],['il cane','der Hund'],['la casa','das Haus']]},
  {t:'mc',q:'Was heißt „danke“?',opts:['grazie','ciao'],a:0},
  {t:'gap',q:'___ Mario!',a:['Ciao']},
  {t:'tr',de:'Hallo!',a:['Ciao!']},
  {t:'order',es:'Ciao Mario come stai',de:'Hallo Mario, wie geht es dir'},
  {t:'match',pairs:[['ciao','hallo'],['grazie','danke']]},
  {t:'listen',es:'grazie',de:'danke'},
  {t:'speak',es:'Ciao, sono Jonas.',de:'Hallo, ich bin Jonas.'},
  {t:'dialog',title:'Treffen',lines:[{n:'Mario',es:'Ciao! Come ti chiami?',de:'Hallo! Wie heißt du?'},{you:true,opts:[{es:'Mi chiamo Jonas.',ok:true},{es:'Ti chiami Jonas.',ok:false,why:'Über dich: mi chiamo.'}]}]},
  {t:'read',title:'Text',text:'Mario è di Roma. Abita a casa.',de:'Mario ist aus Rom.'},
  {t:'mc',q:'Di dove è Mario?',opts:['Roma','Milano'],a:0},
  {t:'free',task:'Stell dich vor.',model:'Ciao, sono Jonas.'}]},
  {id:'l2',title:'Danke',steps:[{t:'vocab',items:[['prego','bitte']]},{t:'mc',q:'prego = ?',opts:['bitte','danke'],a:0},{t:'tr',de:'Bitte.',a:['Prego.']}]}]});
