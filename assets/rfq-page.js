(() => {
  const list = document.querySelector("#rfqItems"), summary = document.querySelector("#rfqSummary"), form = document.querySelector("#rfqForm");
  const render = () => { const items = ESHBELIA_RFQ.get(); summary.textContent = `${items.length} product${items.length === 1 ? "" : "s"}`; list.innerHTML = items.length ? items.map(item => `<article class="rfq-item"><img src="${item.image || 'assets/brand/live-mark.png'}" alt=""><div><small>${item.category}</small><h3>${item.name}</h3><strong>${item.id}</strong></div><div class="rfq-item-controls"><label>Qty <input data-qty="${item.id}" type="number" min="1" value="${item.quantity}"></label><button class="rfq-remove" data-remove="${item.id}" type="button">Remove</button></div></article>`).join("") : `<div class="rfq-empty"><h2>Your basket is empty</h2><p>Add products, chandeliers, cables or wires before sending your request.</p><a class="btn btn-gold" href="products.html">Browse products</a></div>`; };
  list.addEventListener("change", event => { if (event.target.matches("[data-qty]")) ESHBELIA_RFQ.setQuantity(event.target.dataset.qty, event.target.value); });
  list.addEventListener("click", event => { const button = event.target.closest("[data-remove]"); if (button) ESHBELIA_RFQ.remove(button.dataset.remove); });
  document.addEventListener("eshbelia:rfq-updated", render);
  const itemLink = item => {
    const base = new URL(".", location.href);
    if (item.category === "Chandeliers") return new URL(`chandeliers.html#${encodeURIComponent(item.id)}`, base).href;
    if (item.category === "Cables & Wires") return new URL("power-cables-wires.html", base).href;
    const url = new URL("products.html", base); url.searchParams.set("product", item.id); url.hash = item.id; return url.href;
  };
  const photoLink = item => item.image ? new URL(item.image, location.href).href : "";
  form.addEventListener("submit", event => { event.preventDefault(); const items = ESHBELIA_RFQ.get(); if (!items.length) return; const data = new FormData(form); const lines = items.flatMap(item => [`• ${item.id} — ${item.name} — Qty ${item.quantity}`,`  Product: ${itemLink(item)}`,photoLink(item) ? `  Photo: ${photoLink(item)}` : ""]).filter(Boolean); const message = [`Hello ESHBELIA SARABI, I would like to request a quotation.`,`Name: ${data.get("name")}`,`Company: ${data.get("company") || "—"}`,`Country: ${data.get("country")}`,`Preferred currency: ${data.get("currency")}`,`Project / notes: ${data.get("notes") || "—"}`,"","Products:",...lines].join("\n"); window.open(`https://wa.me/971565565774?text=${encodeURIComponent(message)}`, "_blank", "noopener"); });
  render();
})();
