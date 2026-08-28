(() => {
  const products = window.ESHBELIA_CONTENT.chandeliers;
  const grid = document.querySelector("#chandelierGrid");
  const filters = document.querySelector("#chandelierFilters");
  const count = document.querySelector("#chandelierCount");
  const dialog = document.querySelector("#chandelierDialog");
  let selected = "All";

  const render = () => {
    const list = products.filter(item => selected === "All" || item.collection === selected);
    count.textContent = `${list.length} chandelier products`;
    grid.innerHTML = list.map(item => `<article class="chandelier-card"><button class="chandelier-image" data-code="${item.code}" aria-label="View ${item.name} catalogue sheet"><img src="${item.image}" alt="${item.name}, model ${item.code}" loading="lazy"><span>View catalogue sheet</span></button><div class="chandelier-copy"><div class="product-kicker"><span>${item.collection}</span><strong>${item.code}</strong></div><h3>${item.name}</h3><dl><div><dt>Finish</dt><dd>${item.finish}</dd></div><div><dt>Material</dt><dd>${item.material}</dd></div><div><dt>Dimensions</dt><dd>${item.size}</dd></div><div><dt>Light source</dt><dd>${item.lights}</dd></div></dl><a class="product-enquiry" href="https://wa.me/971565565774?text=${encodeURIComponent(`Hello ESHBELIA SARABI, I would like to enquire about ${item.name} (${item.code}).`)}" target="_blank" rel="noopener">Enquire on WhatsApp</a></div></article>`).join("");
  };

  const collections = ["All", ...new Set(products.map(item => item.collection))];
  filters.innerHTML = collections.map(name => `<button class="filter${name === "All" ? " active" : ""}" type="button" data-collection="${name}">${name}</button>`).join("");
  filters.addEventListener("click", event => {
    const button = event.target.closest("button[data-collection]");
    if (!button) return;
    selected = button.dataset.collection;
    filters.querySelectorAll("button").forEach(item => item.classList.toggle("active", item === button));
    render();
  });
  grid.addEventListener("click", event => {
    const button = event.target.closest(".chandelier-image");
    if (!button) return;
    const item = products.find(product => product.code === button.dataset.code);
    document.querySelector("#dialogImage").src = item.image;
    document.querySelector("#dialogImage").alt = `${item.name} catalogue sheet`;
    document.querySelector("#dialogTitle").textContent = item.name;
    document.querySelector("#dialogCode").textContent = item.code;
    document.querySelector("#dialogWhatsApp").href = `https://wa.me/971565565774?text=${encodeURIComponent(`Hello ESHBELIA SARABI, I would like to enquire about ${item.name} (${item.code}).`)}`;
    dialog.showModal();
  });
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  render();
})();
