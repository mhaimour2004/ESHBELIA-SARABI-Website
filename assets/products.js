(() => {
  const imported = window.ESHBELIA_CATALOG || [];
  const controlled = (window.ESHBELIA_CONTENT.catalogProducts || []).map(item => ({
    id: item.id, name: item.name, category: item.category, categorySlug: "eshbelia-products", image: item.image,
    specs: Object.fromEntries((item.specs || []).map((value, index) => [`Specification ${index + 1}`, value])),
    price: null, currency: null, pricingMode: "rfq", offeredBy: "ESHBELIA SARABI", datasheet: item.datasheet
  }));
  const products = [...controlled, ...imported];
  const grid = document.querySelector("#catalogGrid"), search = document.querySelector("#catalogSearch"), filters = document.querySelector("#catalogFilters"), options = document.querySelector("#categoryOptions"), count = document.querySelector("#catalogCount"), loadMore = document.querySelector("#loadMore");
  const categoryToggle = document.querySelector("#categoryToggle"), categoryClose = document.querySelector("#categoryClose"), categoryBackdrop = document.querySelector("#categoryBackdrop"), activeCategory = document.querySelector("#activeCategory");
  let category = "All", visible = 24;
  const categories = ["All", ...new Set(products.map(product => product.category))];
  options.innerHTML = categories.map(item => `<button class="filter${item === "All" ? " active" : ""}" type="button" data-category="${item}">${item === "All" ? "All products" : item}</button>`).join("");
  const setDrawer = open => { filters.classList.toggle("open", open); filters.setAttribute("aria-hidden", String(!open)); categoryToggle.setAttribute("aria-expanded", String(open)); categoryBackdrop.hidden = !open; document.body.classList.toggle("category-open", open); };
  const filteredProducts = () => { const query = search.value.trim().toLowerCase(); return products.filter(product => { const specs = Object.values(product.specs || {}).join(" "); return (category === "All" || product.category === category) && `${product.id} ${product.name} ${product.category} ${specs}`.toLowerCase().includes(query); }); };
  const card = product => {
    const specs = Object.entries(product.specs || {}).slice(0, 6);
    const price = product.price != null ? `<strong>${product.currency || "AED"} ${Number(product.price).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</strong><span>Published product price</span>` : `<strong>Request price</strong><span>${product.pricingMode === "pending-price-list" ? "Price list pending verification" : "Quoted according to quantity and project"}</span>`;
    const message = encodeURIComponent(`Hello ESHBELIA SARABI, I would like to request a price for ${product.name} (${product.id}).`);
    return `<article class="shop-card"><div class="shop-card-media"><img src="${product.image}" alt="${product.name}" loading="lazy"></div><div class="shop-card-body"><div class="shop-card-meta"><span>${product.category}</span><strong>${product.id}</strong></div><h2>${product.name}</h2><details><summary>Technical information</summary><dl>${specs.map(([key,value])=>`<div><dt>${key}</dt><dd>${value}</dd></div>`).join("") || "<div><dt>Status</dt><dd>Available on request</dd></div>"}</dl></details><div class="price-line">${price}</div><div class="shop-actions"><button class="rfq-add" type="button" data-add="${product.id}">Add to RFQ</button><a class="shop-wa" href="https://wa.me/971565565774?text=${message}" target="_blank" rel="noopener" aria-label="WhatsApp enquiry">WA</a></div>${product.datasheet ? `<a class="text-link" href="${product.datasheet}" download>Download datasheet ↓</a>` : ""}</div></article>`;
  };
  const render = () => { const list = filteredProducts(); count.textContent = `${list.length} products`; grid.innerHTML = list.slice(0, visible).map(card).join("") || `<div class="rfq-empty"><h2>No matching products</h2><p>Try another category or search term.</p></div>`; loadMore.hidden = visible >= list.length; ESHBELIA_RFQ.updateBadges(); };
  filters.addEventListener("click", event => { const button = event.target.closest("[data-category]"); if (!button) return; category = button.dataset.category; activeCategory.textContent = category === "All" ? "All products" : category; visible = 24; filters.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button)); setDrawer(false); render(); });
  categoryToggle.addEventListener("click", () => setDrawer(!filters.classList.contains("open")));
  categoryClose.addEventListener("click", () => setDrawer(false));
  categoryBackdrop.addEventListener("click", () => setDrawer(false));
  document.addEventListener("keydown", event => { if (event.key === "Escape") setDrawer(false); });
  search.addEventListener("input", () => { visible = 24; render(); });
  loadMore.addEventListener("click", () => { visible += 24; render(); });
  grid.addEventListener("click", event => { const button = event.target.closest("[data-add]"); if (!button) return; const product = products.find(item => item.id === button.dataset.add); ESHBELIA_RFQ.add(product); button.textContent = "Added ✓"; button.classList.add("added"); setTimeout(() => { button.textContent = "Add to RFQ"; button.classList.remove("added"); }, 1400); });
  render();
})();
