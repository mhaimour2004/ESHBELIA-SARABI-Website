(() => {
  const c = window.ESHBELIA_CONTENT;
  let lang = localStorage.getItem("eshbelia_lang") || "en";
  let projectSector = "All";
  let chandelierCollection = "All";
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const t = (o) => o?.[lang] || o?.en || o || "";
  document.body.classList.add('home-page');
  document.querySelector('.hero-brand-name br')?.replaceWith(document.createTextNode(' '));
  // The homepage previews each collection. Dedicated pages retain all records.
  const addPreviewLink = (grid, href, en, ar) => {
    const link = document.createElement('a');
    link.className = 'preview-link'; link.href = href; link.textContent = lang === 'ar' ? ar : en;
    grid.after(link);
  };
  addPreviewLink($('#chandelierGrid'),'chandeliers.html','View all chandeliers →','عرض جميع الثريات ←');
  addPreviewLink($('#projectGrid'),'projects.html','View all projects →','عرض جميع المشاريع ←');

  const translations = {
    about:{en:"About",ar:"عن الشركة"}, solutions:{en:"Classifications",ar:"التصنيفات"}, chandeliers:{en:"Chandeliers",ar:"الثريات"}, projects:{en:"Projects",ar:"المشاريع"}, contact:{en:"Contact",ar:"تواصل"},
    heroey:{en:"Engineering & Trading • UAE",ar:"هندسة وتجارة • الإمارات"}, herotitle:{en:"LIGHTING. CABLES. <span>PROJECT SOLUTIONS.</span>",ar:"إنارة. كوابل. <span>حلول مشاريع.</span>"}, herodesc:{en:"Project-focused lighting, custom chandelier, cable and electrical solutions with technical, tender and procurement support.",ar:"حلول متخصصة للمشاريع في الإنارة والثريات المخصصة والكوابل والأنظمة الكهربائية مع الدعم الفني والعطاءات والتوريد."},
    cta1:{en:"View Signature Chandeliers",ar:"شاهد مجموعة الثريات"}, cta2:{en:"Request a Quotation",ar:"طلب عرض سعر"}, abouth:{en:"Built around project requirements",ar:"حلول مبنية على متطلبات المشروع"}, aboutp:{en:"ESHBELIA SARABI supports developers, consultants, contractors, MEP contractors and procurement teams through product selection, tender support, value engineering, sourcing, technical coordination and supply follow-up.",ar:"تدعم إشبيلية سرابي المطورين والاستشاريين والمقاولين ومقاولي MEP وفرق المشتريات من خلال اختيار المنتجات ودعم العطاءات والهندسة القيمية والتوريد والتنسيق الفني ومتابعة التوريد."},
    solutionh:{en:"Explore our 10 product classifications",ar:"استكشف تصنيفات منتجاتنا العشرة"}, classificationp:{en:"Each classification opens a dedicated page with its own key photo, scope and enquiry route.",ar:"يفتح كل تصنيف صفحة مستقلة تحتوي على صورته الرئيسية ونطاقه ومسار الاستفسار الخاص به."}, chandelierh:{en:"36 signature chandeliers",ar:"36 ثريا مميزة"}, chandelierp:{en:"Verified models presented only in the official ESHBELIA SARABI black-and-gold format. Select any model to enlarge its catalogue sheet.",ar:"موديلات موثقة معروضة حصراً بقالب إشبيلية سرابي الرسمي الأسود والذهبي. اختر أي موديل لتكبير صفحة الكتالوج."},
    projecth:{en:"Project reference register",ar:"سجل المشاريع المرجعية"}, projectp:{en:"Search and filter the management-supplied historical project register.",ar:"ابحث وصنف سجل المشاريع التاريخي المقدم من الإدارة."}, contacth:{en:"Send your RFQ",ar:"أرسل طلب العرض RFQ"}, contactp:{en:"Share your RFQ and our team will review the lighting or cable requirements and respond with a project-specific proposal.",ar:"أرسل RFQ وسيقوم فريقنا بمراجعة متطلبات الإنارة أو الكوابل والرد بعرض مخصص للمشروع."}
  };

  function setText() {
    document.body.classList.toggle("rtl", lang === "ar");
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$('[data-i18n]').forEach((el) => { const item = translations[el.dataset.i18n]; if (item) el.innerHTML = item[lang]; });
    $("#langBtn").textContent = lang === "en" ? "العربية" : "English";
    renderSolutions();
    renderChandeliers();
    renderProjects();
  }

  function renderSolutions() {
    $("#solutionsGrid").innerHTML = c.classifications.map((x, index) => `<a class="classification-card" href="${x.slug}.html"><img src="${x.image}" alt="${t(x.title)}" loading="lazy"><span class="classification-number">${String(index + 1).padStart(2,"0")}</span><div><h3>${t(x.title)}</h3><p>${t(x.text)}</p><strong>${lang === "ar" ? "عرض التصنيف" : "View classification"} →</strong></div></a>`).join("");
    $("#process").innerHTML = c.process.map((x) => `<span class="step">${x}</span>`).join("");
  }

  function renderChandeliers() {
    const list = c.chandeliers.filter((x) => chandelierCollection === "All" || x.collection === chandelierCollection).slice(0, 8);
    $("#chandelierGrid").innerHTML = list.map((x) => `<article class="chandelier-card"><button class="chandelier-image" data-code="${x.code}" aria-label="View ${x.name} catalogue sheet"><img src="${x.image}" alt="${x.name}, model ${x.code}" loading="lazy"><span>View catalogue sheet</span></button><div class="chandelier-copy"><div class="product-kicker"><span>${x.collection}</span><strong>${x.code}</strong></div><h3>${x.name}</h3><dl><div><dt>Finish</dt><dd>${x.finish}</dd></div><div><dt>Material</dt><dd>${x.material}</dd></div><div><dt>Dimensions</dt><dd>${x.size}</dd></div><div><dt>Light source</dt><dd>${x.lights}</dd></div></dl><a class="product-enquiry" href="https://wa.me/971555533432?text=${encodeURIComponent(`Hello ESHBELIA SARABI, I would like to enquire about ${x.name} (${x.code}).`)}" target="_blank" rel="noopener">Enquire on WhatsApp</a></div></article>`).join("");
  }

  function initChandelierFilters() {
    const collections = ["All", ...new Set(c.chandeliers.map((x) => x.collection))];
    $("#chandelierFilters").innerHTML = collections.map((name) => `<button class="filter ${name === "All" ? "active" : ""}" data-collection="${name}">${name}</button>`).join("");
    $("#chandelierFilters").addEventListener("click", (event) => {
      if (!event.target.matches(".filter")) return;
      chandelierCollection = event.target.dataset.collection;
      $$("#chandelierFilters .filter").forEach((button) => button.classList.toggle("active", button === event.target));
      renderChandeliers();
    });
  }

  function initCatalogueDialog() {
    const dialog = $("#chandelierDialog");
    $("#chandelierGrid").addEventListener("click", (event) => {
      const button = event.target.closest(".chandelier-image");
      if (!button) return;
      const item = c.chandeliers.find((x) => x.code === button.dataset.code);
      $("#dialogImage").src = item.image;
      $("#dialogImage").alt = `${item.name} catalogue sheet`;
      $("#dialogTitle").textContent = item.name;
      $("#dialogCode").textContent = item.code;
      $("#dialogWhatsApp").href = `https://wa.me/971555533432?text=${encodeURIComponent(`Hello ESHBELIA SARABI, I would like to enquire about ${item.name} (${item.code}).`)}`;
      dialog.showModal();
    });
    $(".dialog-close").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  }

  function renderProjects() {
    const q = ($("#projectSearch")?.value || "").toLowerCase();
    const matches = c.projects.filter((p) => (projectSector === "All" || p.sector === projectSector) && `${p.name} ${p.location} ${p.sector} ${window.ESHBELIA_I18N?.t(p.sector) || ''}`.toLowerCase().includes(q));
    const list = matches.slice(0, 8);
    $("#projectGrid").innerHTML = list.map((p) => `<article class="project"><small>#${String(p.id).padStart(2,"0")} • ${p.sector}</small><h4>${p.name}</h4><p>${p.location}</p></article>`).join("") || "<p>No matching projects.</p>";
    $("#projectCount").textContent = lang === 'ar' ? `معاينة ${list.length} من ${matches.length}` : `Preview ${list.length} of ${matches.length}`;
  }

  function initProjectFilters() {
    const sectors = ["All", ...new Set(c.projects.map((p) => p.sector))];
    $("#filters").innerHTML = sectors.map((s) => `<button class="filter ${s === "All" ? "active" : ""}" data-sector="${s}">${s}</button>`).join("");
    $("#filters").addEventListener("click", (event) => {
      if (!event.target.matches(".filter")) return;
      projectSector = event.target.dataset.sector;
      $$("#filters .filter").forEach((button) => button.classList.toggle("active", button === event.target));
      renderProjects();
    });
  }

  $("#rfqForm").addEventListener("submit", (event) => { event.preventDefault(); const d = new FormData(event.currentTarget); const subject = encodeURIComponent(`RFQ / Website Enquiry - ${d.get("company") || d.get("name")}`); const body = encodeURIComponent(`Name: ${d.get("name")}\nCompany: ${d.get("company")}\nPhone: ${d.get("phone")}\n\n${d.get("message")}`); location.href = `mailto:${c.company.emails[0]}?subject=${subject}&body=${body}`; });
  $("#langBtn").addEventListener("click", () => { lang = lang === "en" ? "ar" : "en"; localStorage.setItem("eshbelia_lang", lang); setText(); });
  $("#menuBtn").addEventListener("click", (event) => { const open = $("#navlinks").classList.toggle("open"); event.currentTarget.setAttribute("aria-expanded", String(open)); });
  $$("#navlinks a").forEach((link) => link.addEventListener("click", () => { $("#navlinks").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded", "false"); }));
  $("#projectSearch").addEventListener("input", renderProjects);
  initProjectFilters(); initChandelierFilters(); initCatalogueDialog(); setText();
})();
