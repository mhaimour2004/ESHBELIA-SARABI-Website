(() => {
  const current = location.pathname.split("/").pop() || "index.html";
  const active = (files) => files.includes(current) ? " active" : "";
  const header = document.querySelector(".header");
  if (!header) return;
  header.innerHTML = `<div class="container nav"><a class="brand brand-logo" href="index.html" aria-label="ESHBELIA SARABI home"><img src="assets/brand/logo.png" alt="ESHBELIA SARABI - Lighting & Cable Solutions"></a><button class="menu-btn site-menu-btn" aria-expanded="false" aria-controls="siteNav">Menu</button><nav id="siteNav" class="navlinks site-nav" aria-label="Main navigation"><a class="${active(["index.html"])}" href="index.html">Home</a><details><summary>Company</summary><div class="nav-menu"><a class="${active(["about.html"])}" href="about.html">About Us</a><a href="downloads/ESHBELIA-SARABI-Company-Profile.pdf" download>Download Profile</a></div></details><details><summary>Solutions</summary><div class="nav-menu"><a class="${active(["services.html"])}" href="services.html">Services</a><a href="index.html#solutions">Product Classifications</a><a href="power-cables-wires.html">Cables & Wires</a></div></details><details><summary>Products</summary><div class="nav-menu"><a class="${active(["products.html"])}" href="products.html">Product Catalogue</a><a href="chandeliers.html">Chandeliers</a><a href="products.html#downloads">Datasheet Downloads</a></div></details><a class="${active(["projects.html"])}" href="projects.html">Projects</a><a class="${active(["contact.html"])}" href="contact.html">Contact</a></nav></div>`;
  const button = header.querySelector(".site-menu-btn");
  const nav = header.querySelector("#siteNav");
  button.addEventListener("click", () => { const open = nav.classList.toggle("open"); button.setAttribute("aria-expanded", String(open)); });
  document.addEventListener("click", (event) => { if (!header.contains(event.target)) { nav.classList.remove("open"); button.setAttribute("aria-expanded", "false"); header.querySelectorAll("details").forEach((item) => item.removeAttribute("open")); } });
})();
