/* Im Browser auf http://localhost:8767/ in der Konsole ausführen (Aufbau siehe README.md).
   SNAP(ver)  – Fingerabdruck eines Builds ('old' | 'new') über mehrere Profile
   CMP()      – baut den Fingerabdruck von 'new' und vergleicht mit RES.old → Liste der Abweichungen (muss leer sein)
   DIFF(p,k)  – zeigt die erste abweichende Stelle, z. B. DIFF('x-LB','U1')
   XXTEST(g,ui) – lädt den Test-Kurs „Testisch“ (serve/xx/) und öffnet alle Seiten und Schritte → {bad, eb} müssen leer sein */
window.RES = window.RES || {};
window.SNAP = async function (ver) {
  const P = [{id:'m-DE',g:'m',o:null,ex:'de'},{id:'f-AT-Wien-sur',g:'f',o:{c:'AT',city:'Wien',other:''},sur:'Müller',ex:'de'},{id:'x-LB',g:'x',o:{c:'LB',city:'',other:''},ex:'de'},
    {id:'f-XX-Grecia',g:'f',o:{c:'',city:'',other:'Grecia'},ex:'de'},{id:'m-AR-en',g:'m',o:{c:'AR',city:'Córdoba',other:''},ex:'en'},{id:'f-PH-sur',g:'f',o:{c:'PH',city:'',other:''},sur:'Reyes',ex:'de'},
    {id:'m-DE-ui-en',g:'m',o:null,ex:'de',ui:'en'}];
  const hash = s => { let h = 2166136261 >>> 0; for (let k = 0; k < s.length; k++) { h ^= s.charCodeAt(k); h = Math.imul(h, 16777619) >>> 0; } return h.toString(36); };
  const R = {}, RAW = {};
  let fr = document.getElementById('fr'); if (!fr) { fr = document.createElement('iframe'); fr.id = 'fr'; fr.style.cssText = 'width:390px;height:844px'; document.body.append(fr); }
  for (const p of P) {
    const st = {lessons:{}, srs:{}}, sh = {lang:'es', settings:{}};
    st.gender = p.g; sh.gender = p.g; st.name = 'Alex'; sh.name = 'Alex'; if (p.sur) { st.surname = p.sur; sh.surname = p.sur; } if (p.o) st.origin = p.o; sh.ex = p.ex; sh.ui = p.ui || 'de';
    localStorage.clear(); localStorage.setItem('espanol-lehrer-v1', JSON.stringify(st)); localStorage.setItem('mi-profe-shared', JSON.stringify(sh));
    await new Promise(res => { fr.onload = res; fr.src = '/' + ver + '/?' + Math.random(); }); await new Promise(r => setTimeout(r, 1500));
    const w = fr.contentWindow, r = {}, raw = {};
    w.COURSE.units.forEach(u => { const j = JSON.stringify(u); r['U' + u.n] = hash(j); raw['U' + u.n] = j; });
    r.test = hash(JSON.stringify(w.PLACEMENT)); raw.test = JSON.stringify(w.PLACEMENT); r.stories = hash(JSON.stringify(w.STORIES));
    let seed = 7; const mr = w.Math.random; w.Math.random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    let nums = ''; try { nums = JSON.stringify(w.__app.numItems(80, true)); } catch (e) { nums = 'ERR ' + e.message; } w.Math.random = mr; r.nums = hash(nums); raw.nums = nums;
    const C = w.__app.compare; const cmp = JSON.stringify([['esta cansado','Está cansado.'],['comemos','comimos'],['estoy cansada','Estoy cansado.'],['si','Sí.'],['yo hablo','Hablo'],['el telefono','el teléfono']].map(([a, b]) => C(a, b)));
    r.cmp = hash(cmp); raw.cmp = cmp;
    r.conj = hash(JSON.stringify(['tener','pedir','conducir','reunirse','actuar','jugar','ser','huir'].map(v => w.LANG.conjugate(v))));
    const pages = {}; for (const rt of ['home','settings','origin','name','num','verbs','vocab']) { w.history.replaceState(null, '', '#' + rt); try { w.__app.route(); } catch (e) {} pages[rt] = (w.document.querySelector('main') || w.document.body).innerText.replace(/\d+:\d+|\d{4}-\d\d-\d\d/g, ''); }
    r.pages = hash(JSON.stringify(pages)); raw.pages = JSON.stringify(pages); r.title = w.document.title; R[p.id] = r; RAW[p.id] = raw;
  }
  return {R, RAW};
};
window.CMP = async function () { const n = await SNAP('new'); RES.new = n; const d = []; for (const p in RES.old.R) for (const k in RES.old.R[p]) if (RES.old.R[p][k] !== n.R[p][k]) d.push(p + ' ' + k); return d; };
window.DIFF = (p, k) => { const a = RES.old.RAW[p][k], b = RES.new.RAW[p][k]; let i = 0; while (i < a.length && a[i] === b[i]) i++; return ['ALT: ' + a.slice(Math.max(0, i - 80), i + 60), 'NEU: ' + b.slice(Math.max(0, i - 80), i + 60)]; };
window.XXTEST = async function (g, ui) {
  const fr = document.getElementById('fr') || document.body.appendChild(Object.assign(document.createElement('iframe'), {id: 'fr'}));
  localStorage.clear(); localStorage.setItem('xx-test-v1', JSON.stringify({name:'Alex', gender:g, lessons:{}, srs:{}, origin:{c:'AT', city:'Wien'}}));
  localStorage.setItem('mi-profe-shared', JSON.stringify({lang:'xx', name:'Alex', gender:g, ui, ex:'de', settings:{}}));
  await new Promise(res => { fr.onload = res; fr.src = '/xx/?' + Math.random(); }); await new Promise(r => setTimeout(r, 2000));
  const w = fr.contentWindow, errs = []; w.addEventListener('error', e => errs.push(e.message));
  const routes = ['home','units','placement','vocab','vocab/units','vocab/stats','vocab/mine','ref','ref/s','ref/w','ref/g','ref/r','mistakes','settings','settings/plan','settings/stimme','settings/ki','settings/sync','settings/backup','lang','origin','name','verbs','num','mix','unit/x1','unit/x1/x','resumen/x1','words/x1','check/x1','shadow/x1','lesson/x1/l1','lesson/x1/l2','round/x1/l1/2','round/x1/l1/3','story/t1'];
  const bad = []; for (const r of routes) { const b = errs.length; try { w.history.replaceState(null, '', '#' + r); w.__app.route(); } catch (e) { bad.push(r + ': ' + e.message); } if (errs.length > b) bad.push(r + ': ' + errs.slice(b).join('|')); try { w.speechSynthesis.cancel(); } catch (e) {} }
  const eb = []; for (const u of w.COURSE.units) for (const l of u.lessons) for (const s of l.steps) { const el = w.document.createElement('div'); w.document.body.append(el); try { w.__app.RENDER[s.t](el, s, {unit:u, ref:'x', done(){}, next(){}}); } catch (e) { eb.push(s.t + ': ' + e.message); } el.remove(); }
  return {code: w.LANG.code, bad, eb};
};
