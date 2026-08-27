(() => {
  const products = window.ESHBELIA_CONTENT.catalogProducts;
  const grid = document.querySelector("#catalogGrid");
  const search = document.querySelector("#catalogSearch");
  const filters = document.querySelector("#catalogFilters");
  const count = document.querySelector("#catalogCount");
  let category = "All";
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  filters.innerHTML = categories.map((item) => `<button class="filter ${item === "All" ? "active" : ""}" data-category="${item}">${item}</button>`).join("");
  function render() {
    const query = search.value.trim().toLowerCase();
    const list = products.filter((p) => (category === "All" || p.category === category) && `${p.id} ${p.name} ${p.category} ${p.summary} ${p.specs.join(" ")}`.toLowerCase().includes(query));
    count.textContent = `${list.length} products`;
    grid.innerHTML = list.map((p) => `<article class="product-card"><img src="${p.image}" alt="${p.name}" loading="lazy"><div class="product-copy"><div class="product-meta"><span>${p.category}</span><strong>${p.id}</strong></div><h2>${p.name}</h2><span class="status ${p.status.includes("approval") ? "review" : ""}">${p.status}</span><p>${p.summary}</p><ul>${p.specs.map((s) => `<li>${s}</li>`).join("")}</ul><a class="text-link" target="_blank" rel="noopener" href="https://wa.me/971565565774?text=${encodeURIComponent(`Hello ESHBELIA SARABI, I would like to enquire about ${p.name} (${p.id}).`)}">Enquire on WhatsApp →</a></div></article>`).join("") || "<p>No matching products.</p>";
  }
  filters.addEventListener("click", (event) => { if (!event.target.matches(".filter")) return; category = event.target.dataset.category; filters.querySelectorAll(".filter").forEach((button) => button.classList.toggle("active", button === event.target)); render(); });
  search.addEventListener("input", render);
  render();
})();
