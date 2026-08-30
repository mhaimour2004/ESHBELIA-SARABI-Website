(() => {
  const button = document.querySelector("#addCableRfq");
  if (!button) return;
  button.addEventListener("click", () => {
    ESHBELIA_RFQ.add({ id: "ESH-CB-RFQ", name: "Power Cables & Wires Requirement", category: "Cables & Wires", image: "assets/products/power-cables-general.png", price: null, currency: null });
    button.textContent = "Added to RFQ ✓";
    setTimeout(() => { button.textContent = "Add Cables & Wires to RFQ"; }, 1400);
  });
})();
