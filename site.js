// Shared header + footer for every OMK page (edit links here once)
(function () {
  const here = (location.pathname.split('/').pop() || 'index.html');
  const LINKS = [['index.html', 'Home'], ['story.html', 'Our story'], ['outlets.html', 'Outlets & contact']];
  const FRANCHISE = true;   // set to false when the franchise page is removed

  // Online ordering: each Swiggy / Zomato link opens the OMK outlet nearest to the customer
  const OUTLETS = { rr: { name: 'RR Nagar', lat: 12.9178, lng: 77.5160 }, jp: { name: 'JP Nagar', lat: 12.9105, lng: 77.5860 } };
  const ORDER = {
    swiggy: { rr: 'https://www.swiggy.com/city/bangalore/ondu-motteya-kathe-rajarajeshwari-nagar-rest1234140' },   // only RR Nagar is on Swiggy (add jp: '…' when JP Nagar is listed)
    zomato: { rr: 'https://www.zomato.com/bangalore/ondu-motteya-kathe-kengeri-bangalore/order',
              jp: 'https://www.zomato.com/bangalore/ondu-motteya-kathe-cafe-jp-nagar-bangalore' }
  };
  window.OMK_ORDER = ORDER;
  const km = (a, b) => { const r = Math.PI / 180, x = (b.lng - a.lng) * r * Math.cos((a.lat + b.lat) * r / 2), y = (b.lat - a.lat) * r; return Math.sqrt(x * x + y * y) * 6371; };
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[data-order]');
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey) return;
    const app = ORDER[a.dataset.order]; if (!app || !app.jp) return;   // one outlet only: plain link, no location needed
    e.preventDefault();
    const label = a.dataset.order === 'swiggy' ? 'Swiggy' : 'Zomato';
    // Open the new tab straight away (so it isn't blocked), then send it to the nearest outlet
    const w = window.open('', '_blank');
    const go = (key) => { const url = app[key]; if (w) { w.opener = null; w.location.replace(url); } else location.href = url; };
    const choose = () => {   // no location: let them pick
      if (!w) { go('rr'); return; }
      w.document.title = 'Order OMK on ' + label;
      w.document.body.innerHTML = '<div style="font:16px system-ui,sans-serif;max-width:420px;margin:12vh auto;padding:0 20px;text-align:center">' +
        '<h2 style="margin:0 0 8px">Order OMK on ' + label + '</h2><p style="color:#555;margin:0 0 20px">Choose the outlet nearest to you</p>' +
        Object.keys(OUTLETS).map(k => '<a href="' + app[k] + '" style="display:block;margin:10px 0;padding:14px;border-radius:12px;background:#FDBD03;color:#141414;font-weight:700;text-decoration:none">OMK ' + OUTLETS[k].name + '</a>').join('') + '</div>';
    };
    if (w) w.document.write('<p style="font:16px system-ui,sans-serif;text-align:center;margin-top:20vh">Finding your nearest OMK…</p>');
    if (!navigator.geolocation) { choose(); return; }
    let done = false;
    const t = setTimeout(() => { if (!done) { done = true; choose(); } }, 8000);
    navigator.geolocation.getCurrentPosition((p) => {
      if (done) return; done = true; clearTimeout(t);
      const me = { lat: p.coords.latitude, lng: p.coords.longitude };
      go(km(me, OUTLETS.rr) <= km(me, OUTLETS.jp) ? 'rr' : 'jp');
    }, () => { if (!done) { done = true; clearTimeout(t); choose(); } }, { maximumAge: 600000, timeout: 7000 });
  });
  const h = document.getElementById('siteHeader');
  if (h) {
    h.className = 'bar';
    h.innerHTML = `<div class="wrap">
      <a href="index.html" aria-label="OMK home" style="display:flex;align-items:center;gap:14px;text-decoration:none">
        <img src="logo.png" alt="Ondu Motteya Kathe logo"><span class="div" aria-hidden="true"></span><span class="brand">ONDU MOTTEYA KATHE</span></a>
      <button class="menu-btn" id="menuBtn" type="button" aria-label="Menu" aria-expanded="false">☰</button>
      <nav class="nav-links" id="navLinks" aria-label="Main">
        ${LINKS.map(([u, t]) => `<a href="${u}" ${u === here ? 'aria-current="page"' : ''}>${t}</a>`).join('')}
        ${FRANCHISE ? `<a class="btn btn-dark" href="franchise.html" ${here === 'franchise.html' ? 'aria-current="page"' : ''}>Franchise</a>` : ''}
      </nav></div>`;
    const b = document.getElementById('menuBtn'), n = document.getElementById('navLinks');
    b.onclick = () => { const o = n.classList.toggle('open'); b.setAttribute('aria-expanded', o); };
  }
  const f = document.getElementById('siteFooter');
  if (f) {
    f.className = 'site-foot';
    f.innerHTML = `<div class="wrap">
      <div><img src="logo.png" alt=""><p style="margin:10px 0 0">Ondu Motteya Kathe · Crack. Cook. Chuckle.</p><p class="kn" lang="kn" style="margin:6px 0 0;color:var(--y)">ನಮ್ಮ ನೆಲದಿಂದ. ನಮ್ಮ ಜನರ ಪ್ರೀತಿಯಿಂದ. ಜಗತ್ತಿನತ್ತ.</p><p style="margin:4px 0 0">Born in Karnataka · RR Nagar · JP Nagar, Bengaluru</p></div>
      <div><h4>Visit</h4>${LINKS.map(([u, t]) => `<a href="${u}">${t}</a>`).join('')}${FRANCHISE ? '<a href="franchise.html">Become a franchise partner</a>' : ''}</div>
      <div><h4>Follow &amp; order</h4><a href="https://www.instagram.com/ondu_motteya_kathe/" target="_blank" rel="noopener">Instagram</a><a href="${ORDER.swiggy.rr}" data-order="swiggy" target="_blank" rel="noopener">Swiggy</a><a href="${ORDER.zomato.rr}" data-order="zomato" target="_blank" rel="noopener">Zomato</a><a href="tel:+919591146389">RR Nagar · +91 95911 46389</a><a href="tel:+919180256780">JP Nagar · +91 91802 56780</a></div>
      <div class="copy">© ${new Date().getFullYear()} Ondu Motteya Kathe. All rights reserved.</div></div>`;
  }
})();
