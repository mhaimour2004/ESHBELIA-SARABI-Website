(() => {
  const products = window.ESHBELIA_CONTENT.chandeliers;
  const grid = document.querySelector("#chandelierGrid");
  const filters = document.querySelector("#chandelierFilters");
  const count = document.querySelector("#chandelierCount");
  const dialog = document.querySelector("#chandelierDialog");
  let selected = "All";
  const productLink = item => new URL(`chandeliers.html#${encodeURIComponent(item.code)}`, new URL(".", location.href)).href;
  const photoLink = item => new URL(item.image, location.href).href;
  const whatsappLink = (item, number) => `https://wa.me/${number}?text=${encodeURIComponent(`Hello ESHBELIA SARABI, I would like to enquire about ${item.name} (${item.code}).\n\nProduct: ${productLink(item)}\nPhoto: ${photoLink(item)}`)}`;

  const render = () => {
    const list = products.filter(item => selected === "All" || item.collection === selected);
    count.textContent = `${list.length} chandelier products`;
    grid.innerHTML = list.map(item => `<article id="${item.code}" class="chandelier-card"><button class="chandelier-image" data-code="${item.code}" aria-label="View ${item.name} catalogue sheet"><img src="${item.image}" alt="${item.name}, model ${item.code}" loading="lazy"><span>View catalogue sheet</span></button><div class="chandelier-copy"><div class="product-kicker"><span>${item.collection}</span><strong>${item.code}</strong></div><h3>${item.name}</h3><dl><div><dt>Finish</dt><dd>${item.finish}</dd></div><div><dt>Material</dt><dd>${item.material}</dd></div><div><dt>Dimensions</dt><dd>${item.size}</dd></div><div><dt>Light source</dt><dd>${item.lights}</dd></div></dl><p><strong>Request price</strong><br><small>Quoted according to dimensions, finish and quantity.</small></p><button class="rfq-add" type="button" data-rfq-code="${item.code}">Add to basket</button><div class="product-whatsapp-links"><a class="product-enquiry" href="${whatsappLink(item, "971555533432")}" target="_blank" rel="noopener">Order on WhatsApp</a></div></div></article>`).join("");
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
    const rfqButton = event.target.closest("[data-rfq-code]");
    if (rfqButton) {
      const product = products.find(item => item.code === rfqButton.dataset.rfqCode);
      ESHBELIA_RFQ.add({ id: product.code, name: product.name, category: "Chandeliers", image: product.image, price: null, currency: null });
      rfqButton.textContent = "Added ✓";
      setTimeout(() => { rfqButton.textContent = "Add to basket"; }, 1400);
      return;
    }
    const button = event.target.closest(".chandelier-image");
    if (!button) return;
    const item = products.find(product => product.code === button.dataset.code);
    document.querySelector("#dialogImage").src = item.image;
    document.querySelector("#dialogImage").alt = `${item.name} catalogue sheet`;
    document.querySelector("#dialogTitle").textContent = item.name;
    document.querySelector("#dialogCode").textContent = item.code;
    document.querySelector("#dialogWhatsApp").href = whatsappLink(item, "971555533432");
    dialog.showModal();
  });
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  render();
})();
