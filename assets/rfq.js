(() => {
  const KEY = "eshbelia-rfq-v1";
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; } };
  const updateBadges = () => { const total = read().reduce((sum, item) => sum + Number(item.quantity || 1), 0); document.querySelectorAll("[data-rfq-count]").forEach(node => { node.textContent = total; }); };
  const write = (items) => { localStorage.setItem(KEY, JSON.stringify(items)); updateBadges(); document.dispatchEvent(new CustomEvent("eshbelia:rfq-updated", { detail: items })); };
  const add = (product) => { const items = read(); const existing = items.find(item => item.id === product.id); if (existing) existing.quantity += 1; else items.push({ id: product.id, name: product.name, category: product.category, image: product.image || "", quantity: 1, price: product.price ?? null, currency: product.currency ?? null }); write(items); return items; };
  const remove = (id) => write(read().filter(item => item.id !== id));
  const setQuantity = (id, quantity) => { const items = read(); const item = items.find(product => product.id === id); if (item) item.quantity = Math.max(1, Number(quantity) || 1); write(items); };
  window.ESHBELIA_RFQ = { get: read, add, remove, setQuantity, clear: () => write([]), updateBadges };
  document.addEventListener("DOMContentLoaded", updateBadges);
})();
