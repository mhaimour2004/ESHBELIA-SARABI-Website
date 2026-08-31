(() => {
  const imported = window.ESHBELIA_CATALOG || [];
  const additions = window.ESHBELIA_CATALOG_ADDITIONS || [];
  const controlled = (window.ESHBELIA_CONTENT.catalogProducts || []).map(item => ({
    id: item.id, name: item.name, category: item.category, categorySlug: "eshbelia-products", image: item.image,
    specs: Object.fromEntries((item.specs || []).map((value, index) => [`Specification ${index + 1}`, value])),
    price: null, currency: null, pricingMode: "rfq", offeredBy: "ESHBELIA SARABI", datasheet: item.datasheet
  }));
  const chandeliers = (window.ESHBELIA_CONTENT.chandeliers || []).map(item => ({
    id: item.code, name: item.name, category: "Chandeliers", categorySlug: "chandeliers", image: item.image,
    specs: { Collection: item.collection, Finish: item.finish, Material: item.material, Size: item.size, Lighting: item.lights },
    price: null, currency: null, pricingMode: "rfq", offeredBy: "ESHBELIA SARABI"
  }));
  const categoryMap = {"Switches & Controls":"Wiring Accessories","Floodlights":"Flood Lighting","Street Lights":"Street Lighting","Underground Lights":"Inground Lighting"};
  const normalize = product => ({ ...product, category: categoryMap[product.category] || product.category });
  // Products whose source photography exposes a back-office supplier identity stay in the private inventory only.
  const privateOnlyIds = new Set(["ESH-AC-0103"]);
  const products = [...new Map([...controlled, ...chandeliers, ...additions, ...imported].map(item => { const product = normalize({...item, brand:item.brand || "SEVILLA"}); return [product.id, product]; })).values()].filter(product => !privateOnlyIds.has(product.id));
  const language = (localStorage.getItem("eshbelia_lang") || "en") === "ar" ? "ar" : "en";
  const grid = document.querySelector("#catalogGrid"), search = document.querySelector("#catalogSearch"), filters = document.querySelector("#catalogFilters"), options = document.querySelector("#categoryOptions"), count = document.querySelector("#catalogCount"), loadMore = document.querySelector("#loadMore");
  const categoryToggle = document.querySelector("#categoryToggle"), categoryClose = document.querySelector("#categoryClose"), categoryBackdrop = document.querySelector("#categoryBackdrop"), activeCategory = document.querySelector("#activeCategory");
  const productDialog = document.querySelector("#productDialog"), dialogClose = document.querySelector("#productDialogClose"), dialogImageButton = document.querySelector("#productDialogImageButton"), dialogImage = document.querySelector("#productDialogImage"), dialogCategory = document.querySelector("#productDialogCategory"), dialogTitle = document.querySelector("#productDialogTitle"), dialogCode = document.querySelector("#productDialogCode"), dialogSpecs = document.querySelector("#productDialogSpecs"), dialogPrice = document.querySelector("#productDialogPrice"), dialogAdd = document.querySelector("#productDialogAdd"), dialogWhatsapp = document.querySelector("#productDialogWhatsapp"), dialogDatasheet = document.querySelector("#productDialogDatasheet");
  let category = "All", visible = 60;
  const categories = ["All", ...new Set(products.map(product => product.category))];
  options.innerHTML = categories.map(item => `<button class="filter${item === "All" ? " active" : ""}" type="button" data-category="${item}">${item === "All" ? "All products" : item}</button>`).join("");
  const fixedMenu = () => matchMedia("(min-width: 1100px)").matches;
  const setDrawer = open => {
    const visible = fixedMenu() || open;
    filters.classList.toggle("open", visible);
    filters.setAttribute("aria-hidden", String(!visible));
    filters.inert = !visible;
    categoryToggle.setAttribute("aria-expanded", String(visible));
    categoryBackdrop.hidden = fixedMenu() || !open;
    document.body.classList.toggle("category-open", !fixedMenu() && open);
    if (!fixedMenu()) (open ? categoryClose : categoryToggle).focus();
  };
  const filteredProducts = () => { const query = search.value.trim().toLowerCase(); return products.filter(product => { const specs = Object.values(product.specs || {}).join(" "); return (category === "All" || product.category === category) && `${product.id} ${product.name} ${product.category} ${specs}`.toLowerCase().includes(query); }); };
  const productLink = product => { const url = new URL("products.html", new URL(".", location.href)); url.searchParams.set("product", product.id); url.hash = product.id; return url.href; };
  const imageLink = product => new URL(product.image, location.href).href;
  const card = product => {
    const specs = Object.entries(product.specs || {}).slice(0, 6);
    const price = product.price != null ? `<strong>${product.currency || "AED"} ${Number(product.price).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</strong><span>Published product price</span>` : `<strong>Request price</strong><span>${product.pricingMode === "pending-price-list" ? "Price list pending verification" : "Quoted according to quantity and project"}</span>`;
    const message = encodeURIComponent(`Hello ESHBELIA SARABI, I would like to request a price for ${product.name} (${product.id}).\n\nProduct: ${productLink(product)}\nPhoto: ${imageLink(product)}`);
    return `<article id="${product.id}" class="shop-card"><a class="shop-card-media" href="${productLink(product)}" data-view="${product.id}" aria-label="View ${product.name}"><img src="${product.image}" alt="${product.name}" loading="lazy"></a><div class="shop-card-body"><div class="shop-card-meta"><span>${product.brand} · ${product.category}</span><strong>${product.id}</strong></div><h2><a href="${productLink(product)}" data-view="${product.id}">${product.name}</a></h2><details><summary>Details</summary><dl>${specs.map(([key,value])=>`<div><dt>${key}</dt><dd>${value}</dd></div>`).join("") || "<div><dt>Status</dt><dd>Available on request</dd></div>"}</dl></details><div class="price-line">${price}</div><div class="shop-actions"><button class="rfq-add" type="button" data-add="${product.id}">Add to basket</button><a class="shop-wa" href="https://wa.me/971555533432?text=${message}" target="_blank" rel="noopener" aria-label="Order ${product.name} on WhatsApp">Order on WhatsApp</a></div>${product.datasheet ? `<a class="text-link" href="${product.datasheet}" download>Datasheet ↓</a>` : ""}</div></article>`;
  };
  const openProduct = product => {
    dialogImage.src = product.image; dialogImage.alt = product.name; dialogImage.classList.remove("enlarged");
    dialogCategory.textContent = product.category; dialogTitle.textContent = product.name; dialogCode.textContent = product.id;
    dialogSpecs.innerHTML = Object.entries(product.specs || {}).map(([key,value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("") || "<div><dt>Status</dt><dd>Available on request</dd></div>";
    dialogPrice.innerHTML = product.price != null ? `<strong>${product.currency || "AED"} ${Number(product.price).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</strong><span>Published product price</span>` : "<strong>Request price</strong><span>Quoted according to quantity and project</span>";
    const message = encodeURIComponent(`Hello ESHBELIA SARABI, I would like to request a price for ${product.name} (${product.id}).\n\nProduct: ${productLink(product)}\nPhoto: ${imageLink(product)}`);
    dialogWhatsapp.href = `https://wa.me/971555533432?text=${message}`; dialogAdd.dataset.add = product.id;
    dialogDatasheet.hidden = !product.datasheet; if (product.datasheet) dialogDatasheet.href = product.datasheet;
    history.replaceState(null, "", productLink(product)); productDialog.showModal();
  };
  const render = () => { const list = filteredProducts(); count.textContent = `${list.length} products`; grid.innerHTML = list.slice(0, visible).map(card).join("") || `<div class="rfq-empty"><h2>No matching products</h2><p>Try another category or search term.</p></div>`; loadMore.hidden = visible >= list.length; ESHBELIA_RFQ.updateBadges(); };
  filters.addEventListener("click", event => { const button = event.target.closest("[data-category]"); if (!button) return; category = button.dataset.category; search.value = ""; activeCategory.textContent = category === "All" ? "All products" : category; visible = 60; filters.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button)); if (!fixedMenu()) setDrawer(false); render(); });
  categoryToggle.addEventListener("click", () => setDrawer(!filters.classList.contains("open")));
  categoryClose.addEventListener("click", () => setDrawer(false));
  categoryBackdrop.addEventListener("click", () => setDrawer(false));
  document.addEventListener("keydown", event => { if (event.key === "Escape") setDrawer(false); });
  addEventListener("resize", () => setDrawer(false));
  search.addEventListener("input", () => {
    if (search.value.trim()) {
      category = "All";
      activeCategory.textContent = language === "ar" ? "جميع التصنيفات" : "All products";
      filters.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item.dataset.category === "All"));
    }
    visible = 60;
    render();
  });
  loadMore.addEventListener("click", () => { visible += 60; render(); });
  document.addEventListener("click", event => { const button = event.target.closest("[data-add]"); if (!button) return; const product = products.find(item => item.id === button.dataset.add); if (!product) return; ESHBELIA_RFQ.add(product); button.textContent = "Added ✓"; button.classList.add("added"); setTimeout(() => { button.textContent = "Add to basket"; button.classList.remove("added"); }, 1400); });
  grid.addEventListener("click", event => { const link = event.target.closest("[data-view]"); if (!link) return; event.preventDefault(); const product = products.find(item => item.id === link.dataset.view); if (product) openProduct(product); });
  dialogClose.addEventListener("click", () => productDialog.close());
  productDialog.addEventListener("click", event => { if (event.target === productDialog) productDialog.close(); });
  dialogImageButton.addEventListener("click", () => dialogImage.classList.toggle("enlarged"));
  const requestedProduct = new URLSearchParams(location.search).get("product");
  if (requestedProduct && products.some(product => product.id === requestedProduct)) search.value = requestedProduct;
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting) && !loadMore.hidden) { visible += 60; render(); } }, { rootMargin: "700px 0px" });
    observer.observe(loadMore);
  }
  if (language === "ar") {
    categoryToggle.querySelector("span").textContent = "المنتجات";
    categoryToggle.querySelector("b").textContent = "جميع التصنيفات";
    filters.querySelector(".category-drawer-head strong").textContent = "تصنيفات المنتجات";
    categoryClose.setAttribute("aria-label", "إغلاق التصنيفات");
    search.placeholder = "ابحث باسم المنتج أو رقم ESHBELIA أو المواصفات";
  }
  setDrawer(false);
  render();
  if (requestedProduct) requestAnimationFrame(() => { const product = products.find(item => item.id === requestedProduct); if (product) openProduct(product); });
})();
