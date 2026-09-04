(() => {
  // Small, dependency-free SVG interface icons. Decorative: the visible label remains the accessible name.
  const drawings = {
    home:'<path d="m3 10 9-7 9 7v10H3Z M9 20v-7h6v7"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6 M12 7h.01"/>',
    grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    bulb:'<path d="M9 18h6 M10 21h4 M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2Z"/>',
    building:'<path d="M4 21V5h10v16 M14 10h6v11 M2 21h20 M7 8h4 M7 12h4 M7 16h4 M17 13h.01 M17 17h.01"/>',
    factory:'<path d="M3 21V10l6 3V8l6 4V3h4l2 18Z M6 17h2 M11 17h2 M16 17h2"/>',
    phone:'<path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3v3c-8 4-22-10-18-17Z"/>',
    cart:'<path d="M2 3h3l3 12h11l3-9H6 M9 19h.01 M18 19h.01"/><circle cx="9" cy="19" r="1"/><circle cx="18" cy="19" r="1"/>',
    book:'<path d="M12 5v16 M3 3c4 0 7 0 9 2 2-2 5-2 9-2v16c-4 0-7 0-9 2-2-2-5-2-9-2Z"/>',
    cable:'<path d="M7 3v5 M13 3v5 M5 8h10v3a5 5 0 0 1-10 0Z M10 16v2a3 3 0 0 0 6 0v-3a3 3 0 0 1 6 0"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2 M12 20v2 M2 12h2 M20 12h2 M5 5l1.5 1.5 M17.5 17.5 19 19 M5 19l1.5-1.5 M17.5 6.5 19 5"/>',
    flood:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M6 7h12v6H6Z M7 16v4h10v-4"/>',
    street:'<path d="M5 22V6a3 3 0 0 1 3-3h8 M12 3v3 M8 10l2-4h8l2 4Z M12 13l-1 3 M16 13l1 3 M2 22h6"/>',
    pendant:'<path d="M12 2v7 M6 14l3-5h6l3 5Z M12 14v5 M4 9v7q0 3 8 3t8-3V9 M2 9h4 M18 9h4 M12 19v3"/>',
    wall:'<path d="M4 3v18 M4 12h5 M10 7h9l2 10H8Z M14 4V2 M14 20v2"/>',
    panel:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M6 7h12v8H6Z M8 21h8"/>',
    track:'<path d="M2 4h20 M6 4v5 M18 4v5 M3 9h6v7H3Z M15 9h6v7h-6Z M4 19v2 M8 19v2 M16 19v2 M20 19v2"/>',
    garden:'<path d="M12 22V12 M12 15C4 15 3 10 3 5c6 0 9 3 9 8 M12 18c8 0 9-5 9-10-6 0-9 3-9 8"/>',
    road:'<path d="m7 3-4 18 M17 3l4 18 M12 3v3 M12 10v3 M12 17v4"/>',
    mosque:'<path d="M5 21V10h14v11 M7 10c0-5 5-4 5-8 0 4 5 3 5 8 M10 21v-5h4v5 M2 21V7 M22 21V7 M1 7h2 M21 7h2"/>',
    hospital:'<path d="M4 21V6h16v15 M2 21h20 M12 8v6 M9 11h6 M10 21v-4h4v4"/>',
    hotel:'<path d="M3 21V3h18v18 M8 7h1 M15 7h1 M8 11h1 M15 11h1 M9 21v-6h6v6"/>',
    plane:'<path d="m2 12 8-2 1-7h2l1 7 8 2v2l-8-1-1 6 3 2H8l3-2-1-6-8 1Z"/>',
    school:'<path d="m2 8 10-5 10 5-10 5Z M6 11v6q6 4 12 0v-6 M22 8v9"/>',
    dining:'<path d="M4 3v7q3 3 6 0V3 M7 3v18 M17 3v8h3 M20 3v18"/>'
  };
  const nav = {'home.html':'home','about.html':'info','services.html':'bulb','products.html':'grid','projects.html':'building','manufacturers.html':'factory','contact.html':'phone','chandeliers.html':'pendant','power-cables-wires.html':'cable','rfq.html':'cart'};
  const select = value => {
    const s = value.toLowerCase();
    if(s==='all') return 'grid';
    if(/mosque/.test(s)) return 'mosque';
    if(/health/.test(s)) return 'hospital';
    if(/airport/.test(s)) return 'plane';
    if(/education/.test(s)) return 'school';
    if(/restaurant|f&b/.test(s)) return 'dining';
    if(/hospitality|hotel/.test(s)) return 'hotel';
    if(/solar/.test(s)) return 'sun';
    if(/street/.test(s)) return 'street';
    if(/road|infrastructure/.test(s)) return 'road';
    if(/flood/.test(s)) return 'flood';
    if(/chandelier|pendant|palace|vip/.test(s)) return 'pendant';
    if(/cable|wir|socket/.test(s)) return 'cable';
    if(/garden|lawn|bollard|outdoor|inground|underground/.test(s)) return 'garden';
    if(/track|strip/.test(s)) return 'track';
    if(/wall/.test(s)) return 'wall';
    if(/panel|ceiling|bulkhead|diffuser|office/.test(s)) return 'panel';
    if(/industrial|high bay/.test(s)) return 'factory';
    if(/residential|tower|building|commercial|mixed use|private/.test(s)) return 'building';
    return 'bulb';
  };
  const targets = '#siteNav>a,#siteNav .product-menu>summary,#siteNav .product-submenu a,[data-category],[data-sector],[data-collection],.classification-card h3';
  function decorate(el) {
    if(el.querySelector(':scope > .ui-icon')) return;
    const href = el.getAttribute('href') || el.closest('.classification-card')?.getAttribute('href') || '';
    const key = href.includes('#lightingCatalogsTitle') ? 'book' : nav[href] || (el.matches('summary') ? 'grid' : select(el.dataset.category || el.dataset.sector || el.dataset.collection || href));
    const icon = document.createElement('span');
    icon.className = 'ui-icon'; icon.setAttribute('aria-hidden','true'); icon.dataset.icon = key;
    icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" focusable="false">${drawings[key]}</svg>`;
    el.prepend(icon); el.classList.add('has-ui-icon');
  }
  function scan(root) {
    if(root.nodeType !== 1 || root.closest('.ui-icon')) return;
    if(root.matches(targets)) decorate(root);
    root.querySelectorAll(targets).forEach(decorate);
  }
  scan(document.body);
  new MutationObserver(records => records.forEach(r=>r.addedNodes.forEach(scan))).observe(document.body,{subtree:true,childList:true});
})();
