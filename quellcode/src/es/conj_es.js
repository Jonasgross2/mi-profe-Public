/* Spanisch: Präsens-Konjugation nach Regel + Liste der Unregelmäßigen (für den Verben-Trainer).
   LANGS.es.conjugate(infinitiv) → {forms:[yo,tú,él,nosotros,vosotros,ellos], why:'Muster-Hinweis'} oder null (= lieber nicht üben).
   Reflexiv (-arse/-erse/-irse): me/te/se/nos/os/se + Form. Neue Verben in den Vokabellisten: unregelmäßige hier eintragen! */
(function(){
var IE=['advertir','arrepentir','ascender','atender','comenzar','confesar','defender','despertar','desmentir','encender','encerrar','enterrar','herir','hervir','invertir','mentir','negar','quebrar','sobrentender','perder','pensar','empezar','entender','cerrar','preferir','querer','sentir','recomendar','divertir','convertir','sugerir','calentar','merendar','nevar','despedir_no'];
var UE=['absolver','acostar','apostar','colgar','comprobar','conmover','contar','devolver','encontrar','reencontrar','morder','morir','mostrar','mover','recordar','renovar','resolver','soltar','soñar','volar','volver','poder','dormir','costar','almorzar','probar','llover','doler','envolver','demostrar'];
var EI=['despedir','pedir','servir','vestir','repetir','medir','competir','impedir'];
var ZCO=['agradecer','aparecer','conocer','reconocer','crecer','desaparecer','enaltecer','enloquecer','establecer','fallecer','nacer','permanecer','pertenecer','producir','traducir','aducir','conducir','lucir','ofrecer','parecer','merecer','obedecer'];
var UIR=['concluir','construir','destruir','incluir','contribuir','distribuir','sustituir'];
var JO=['escoger','proteger','recoger','coger','dirigir','fingir','surgir','exigir','corregir_no'];
var ZO=['vencer','convencer','torcer_no'];
var ACC={actuar:'u',continuar:'u',insinuar:'u',confiar:'i',reenviar:'i',enviar:'i',variar:'i',reunir:'u'};
var FIX={
 ser:['soy','eres','es','somos','sois','son'],estar:['estoy','estás','está','estamos','estáis','están'],ir:['voy','vas','va','vamos','vais','van'],
 tener:['tengo','tienes','tiene','tenemos','tenéis','tienen'],venir:['vengo','vienes','viene','venimos','venís','vienen'],hacer:['hago','haces','hace','hacemos','hacéis','hacen'],
 poner:['pongo','pones','pone','ponemos','ponéis','ponen'],salir:['salgo','sales','sale','salimos','salís','salen'],decir:['digo','dices','dice','decimos','decís','dicen'],
 ver:['veo','ves','ve','vemos','veis','ven'],dar:['doy','das','da','damos','dais','dan'],saber:['sé','sabes','sabe','sabemos','sabéis','saben'],oír:['oigo','oyes','oye','oímos','oís','oyen'],
 traer:['traigo','traes','trae','traemos','traéis','traen'],caer:['caigo','caes','cae','caemos','caéis','caen'],atraer:['atraigo','atraes','atrae','atraemos','atraéis','atraen'],
 valer:['valgo','vales','vale','valemos','valéis','valen'],oler:['huelo','hueles','huele','olemos','oléis','huelen'],jugar:['juego','juegas','juega','jugamos','jugáis','juegan'],
 seguir:['sigo','sigues','sigue','seguimos','seguís','siguen'],conseguir:['consigo','consigues','consigue','conseguimos','conseguís','consiguen'],elegir:['elijo','eliges','elige','elegimos','elegís','eligen'],
 huir:['huyo','huyes','huye','huimos','huis','huyen'],haber:['he','has','ha','hemos','habéis','han']};
/* Ableitungen mit Präfix: tener (detener, mantener, obtener, sostener …), poner (proponer, suponer …), venir, hacer, decir */
var PRE=['tener','poner','venir','hacer','decir','traer'];
var SKIP=['nuclear','particular','similar','militar','solar','regular','amanecer','entrever','freír','criar','paliar'];
var PRON=['me','te','se','nos','os','se'];
function stemChange(stem,from,to){var i=stem.lastIndexOf(from);return i<0?stem:stem.slice(0,i)+to+stem.slice(i+from.length);}
function base(v){
  if(FIX[v])return{forms:FIX[v].slice(),why:'unregelmäßig – auswendig lernen'};
  for(var p=0;p<PRE.length;p++){var b=PRE[p];if(v.length>b.length&&v.slice(-b.length)===b){var pre=v.slice(0,-b.length);
    return{forms:FIX[b].map(function(f){return pre+f;}),why:'wie '+b+' ('+FIX[b].join(', ')+')'};}}
  var end=v.slice(-2),st=v.slice(0,-2);if(['ar','er','ir','ír'].indexOf(end)<0)return null;
  var E={ar:['o','as','a','amos','áis','an'],er:['o','es','e','emos','éis','en'],ir:['o','es','e','imos','ís','en'],'ír':['o','es','e','imos','ís','en']}[end];
  var f=E.map(function(e){return st+e;}),why='regelmäßig auf -'+end+': '+E.join(', ');
  var sh=function(a,b,lbl){[0,1,2,5].forEach(function(i){f[i]=stemChange(st,a,b)+E[i];});why='Stammwechsel '+lbl+' (nicht bei nosotros/vosotros)';};
  if(IE.indexOf(v)>=0)sh('e','ie','e→ie');else if(UE.indexOf(v)>=0)sh('o','ue','o→ue');else if(EI.indexOf(v)>=0)sh('e','i','e→i');
  if(ZCO.indexOf(v)>=0){f[0]=st.slice(0,-1)+'zco';why='1. Person auf -zco (sonst regelmäßig)';}
  if(UIR.indexOf(v)>=0){f=[st+'yo',st+'yes',st+'ye',st+'imos',st+'ís',st+'yen'];why='-uir: y vor o/e ('+f[0]+', '+f[1]+' …)';}
  if(JO.indexOf(v)>=0){f[0]=st.slice(0,-1)+'jo';why='g → j vor o ('+f[0]+'), sonst regelmäßig';}
  if(ZO.indexOf(v)>=0){f[0]=st.slice(0,-1)+'zo';why='c → z vor o ('+f[0]+'), sonst regelmäßig';}
  if(ACC[v]){var vow=ACC[v],acc=vow==='u'?'ú':'í',st2=stemChange(st,vow,acc);[0,1,2,5].forEach(function(i){f[i]=st2+E[i];});why='Akzent auf '+acc+' (außer nosotros/vosotros)';}
  return{forms:f,why:why};}
function conjugate(inf){var v=String(inf||'').trim().toLowerCase(),refl=false;
  if(SKIP.indexOf(v)>=0||!/^[a-záéíóúñü]+$/.test(v))return null;
  if(/(ar|er|ir|ír)se$/.test(v)){refl=true;v=v.slice(0,-2);}
  if(SKIP.indexOf(v)>=0)return null;var r=base(v);if(!r)return null;
  if(refl){r.forms=r.forms.map(function(x,i){return PRON[i]+' '+x;});r.why+=' · reflexiv: me, te, se, nos, os, se';}
  return r;}
/* Textbausteine der Hinweise – die Engine übersetzt sie einzeln (ui_tr.js) */
var WHY_PARTS=['unregelmäßig – auswendig lernen','regelmäßig auf -','Stammwechsel ','(nicht bei nosotros/vosotros)','1. Person auf -zco (sonst regelmäßig)','y vor o/e','g → j vor o','c → z vor o','sonst regelmäßig','Akzent auf ','(außer nosotros/vosotros)','reflexiv: ','wie '];
defineLang('es',{conjugate:conjugate,whyParts:WHY_PARTS,infinitive:/^[a-záéíóúñü]+(ar|er|ir|ír)(se)?$/});
})();
