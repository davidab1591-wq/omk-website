// Shared header + footer for every OMK page (edit links here once)
(function () {
  const here = (location.pathname.split('/').pop() || 'index.html');
  const LINKS = [['index.html', 'Home'], ['story.html', 'Our story'], ['outlets.html', 'Outlets & contact']];
  const FRANCHISE = true;   // set to false when the franchise page is removed
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
      <div><h4>Follow &amp; order</h4><a href="https://www.instagram.com/ondu_motteya_kathe/" target="_blank" rel="noopener">Instagram</a><a href="https://www.swiggy.com/city/bangalore/ondu-motteya-kathe-rajarajeshwari-nagar-rest1234140" target="_blank" rel="noopener">Swiggy</a><a href="https://www.zomato.com/bangalore/ondu-motteya-kathe-kengeri-bangalore/order" target="_blank" rel="noopener">Zomato</a><a href="tel:+919591146389">RR Nagar · +91 95911 46389</a><a href="tel:+919180256780">JP Nagar · +91 91802 56780</a></div>
      <div class="copy">© ${new Date().getFullYear()} Ondu Motteya Kathe. All rights reserved.</div></div>`;
  }
})();
