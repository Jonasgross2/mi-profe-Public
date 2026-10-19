/* Rundum-Test der echten Kurse (vor einer Veröffentlichung): im Browser auf http://localhost:8765/ (Server „app“) in der Konsole ausführen.
   SMOKE(profile) öffnet für jedes Profil {lang, ex, ui, g} alle Seiten, alle Unidades/Lektionen/Runden/Tests/Geschichten/Lesetexte und zeichnet jeden Übungsschritt.
   Ergebnis: window.SMOKE_RES = [{p, bad:[Route: Fehler], eb:[Schritt: Fehler], n:{routes, steps}}] – bad und eb müssen leer sein. */
window.SMOKE = async function (profiles) {
  profiles = profiles || [{lang:'es',ex:'de',ui:'de',g:'m'},{lang:'es',ex:'en',ui:'en',g:'f'},{lang:'de',ex:'pt',ui:'pt',g:'f'},{lang:'de',ex:'pt',ui:'de',g:'x'},{lang:'es',ex:'de',ui:'es',g:'x'}];
  const out = window.SMOKE_RES = [];
  const fr = document.getElementById('fr') || document.body.appendChild(Object.assign(document.createElement('iframe'), {id:'fr', style:'width:390px;height:844px'}));
  for (const p of profiles) {
    const key = p.lang === 'es' ? 'espanol-lehrer-v1' : null;
    localStorage.clear();
    localStorage.setItem('mi-profe-shared', JSON.stringify({lang:p.lang, name:'Alex', gender:p.g, ui:p.ui, ex:p.ex, settings:{}}));
    localStorage.setItem('mi-profe-inst', '1');
    await new Promise(res => { fr.onload = res; fr.src = '/index.html?' + Math.random(); }); await new Promise(r => setTimeout(r, 2500));
    const w = fr.contentWindow, errs = [], A = w.__app;
    w.addEventListener('error', e => errs.push(e.message)); w.addEventListener('unhandledrejection', e => errs.push('promise: ' + (e.reason && e.reason.message || e.reason)));
    w.speechSynthesis && (w.speechSynthesis.speak = () => {});
    const routes = ['home','units','placement','vocab','vocab/units','vocab/stats','vocab/stats/kurs','vocab/stats/mine','vocab/mine','vocab/hidden','ref','ref/s','ref/w','ref/g','ref/r','mistakes',
      'settings','settings/plan','settings/stimme','settings/ki','settings/sync','settings/backup','lang','origin','name','verbs','num','mix'];
    (w.LEVELS || []).forEach(L => routes.push('units/' + L.id));
    w.COURSE.units.forEach(u => { routes.push('unit/' + u.id, 'unit/' + u.id + '/x', 'resumen/' + u.id, 'words/' + u.id, 'check/' + u.id, 'shadow/' + u.id);
      u.lessons.forEach(l => routes.push('lesson/' + u.id + '/' + l.id, 'round/' + u.id + '/' + l.id + '/2', 'round/' + u.id + '/' + l.id + '/3')); });
    (w.STORIES || []).forEach(s => routes.push('story/' + s.id));
    (w.READINGS || []).forEach(r => routes.push('reading/' + r.id));
    const bad = [];
    for (const r of routes) { const b = errs.length; try { w.history.replaceState(null, '', '#' + r); A.route(); } catch (e) { bad.push(r + ': ' + e.message); }
      await new Promise(x => setTimeout(x, 0)); if (errs.length > b) bad.push(r + ': ' + errs.slice(b).join(' | '));
      const txt = (w.document.querySelector('main') || w.document.body).innerText; if (/undefined|NaN|\[object Object\]/.test(txt)) bad.push(r + ': Text enthält ' + txt.match(/.{0,30}(undefined|NaN|\[object Object\]).{0,30}/)[0]); }
    const eb = []; let steps = 0;
    for (const u of w.COURSE.units) for (const l of u.lessons) for (const s of l.steps) { steps++; const el = w.document.createElement('div'); w.document.body.append(el);
      try { if (!A.RENDER[s.t]) eb.push(u.id + '/' + l.id + ' ' + s.t + ': unbekannter Schritt'); else A.RENDER[s.t](el, s, {unit:u, ref:u.id + '|' + l.id, done(){}, next(){}});
        if (/undefined|NaN|\[object Object\]/.test(el.innerText)) eb.push(u.id + '/' + l.id + ' ' + s.t + ': ' + el.innerText.match(/.{0,30}(undefined|NaN|\[object Object\]).{0,30}/)[0]); }
      catch (e) { eb.push(u.id + '/' + l.id + ' ' + s.t + ': ' + e.message); } el.remove(); }
    out.push({p:JSON.stringify(p), bad, eb, n:{routes:routes.length, steps}});
  }
  return out.map(o => o.p + ' → Seiten ' + o.n.routes + ', Schritte ' + o.n.steps + ', Fehler ' + (o.bad.length + o.eb.length));
};
