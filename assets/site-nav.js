(() => {
  if (!document.querySelector('link[href="assets/multipage.css"]')) {
    const multipageStyles = document.createElement("link");
    multipageStyles.rel = "stylesheet";
    multipageStyles.href = "assets/multipage.css";
    document.head.append(multipageStyles);
  }
  if (!document.querySelector('link[href="assets/storefront-refresh.css"]')) {
    const refreshStyles = document.createElement("link");
    refreshStyles.rel = "stylesheet";
    refreshStyles.href = "assets/storefront-refresh.css";
    document.head.append(refreshStyles);
  }
  const language = localStorage.getItem("eshbelia_lang") || "en";
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  const current = location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector(".header");
  if (!header) return;
  const items = [["index.html","Home"],["about.html","About"],["services.html","Solutions"],["projects.html","Projects"],["manufacturers.html","Manufacturers"],["contact.html","Contact"]];
  const links = items.map(([href,label]) => `<a${current===href?' class="active" aria-current="page"':""} href="${href}">${label}</a>`);
  const productMenu = `<details class="product-menu"${["products.html","chandeliers.html","rfq.html"].includes(current)?' data-active="true"':""}><summary>Products</summary><div class="product-submenu"><a${current==="products.html"?' class="active" aria-current="page"':""} href="products.html">Product Catalogue</a><a${current==="chandeliers.html"?' class="active" aria-current="page"':""} href="chandeliers.html">Chandeliers</a><a href="power-cables-wires.html">Cables &amp; Wires</a><a href="products.html#downloads">Datasheet Downloads</a><a${current==="rfq.html"?' class="active" aria-current="page"':""} href="rfq.html">Basket <span data-rfq-count>0</span></a></div></details>`;
  links.splice(3,0,productMenu);
  header.innerHTML = `<div class="container nav"><a class="brand brand-logo" href="index.html" aria-label="ESHBELIA SARABI home"><span class="brand-mark-crop"><img src="assets/brand/live-mark.png" alt=""></span><span><strong>ESHBELIA SARABI</strong><small>LIGHTING &amp; CABLE SOLUTIONS</small></span></a><button class="menu-btn site-menu-btn" type="button" aria-expanded="false" aria-controls="siteNav"><span></span><span></span><span></span><b>Menu</b></button><nav id="siteNav" class="navlinks site-nav" aria-label="Main navigation">${links.join("")}<button id="langBtn" class="lang" type="button">العربية</button><a class="nav-quote" href="rfq.html">Basket <span data-rfq-count>0</span></a></nav></div>`;
  const button=header.querySelector(".site-menu-btn"), nav=header.querySelector("#siteNav");
  const close=()=>{nav.classList.remove("open");button.setAttribute("aria-expanded","false");nav.querySelectorAll("details").forEach(item=>item.removeAttribute("open"))};
  button.addEventListener("click",()=>{const open=nav.classList.toggle("open");button.setAttribute("aria-expanded",String(open))});
  nav.addEventListener("click",e=>{if(e.target.closest("a"))close()});
  document.addEventListener("click",e=>{if(!header.contains(e.target))close()});
  if(window.ESHBELIA_RFQ) window.ESHBELIA_RFQ.updateBadges();
  else { try { const total=JSON.parse(localStorage.getItem("eshbelia-rfq-v1")||"[]").reduce((sum,item)=>sum+Number(item.quantity||1),0); header.querySelectorAll("[data-rfq-count]").forEach(node=>{node.textContent=total}); } catch {} }
  addEventListener("resize",()=>{if(innerWidth>980)close()});
  const langButton=header.querySelector("#langBtn");
  langButton.addEventListener("click",()=>{const next=(localStorage.getItem("eshbelia_lang")||"en")==="en"?"ar":"en";localStorage.setItem("eshbelia_lang",next);location.reload()});
  if(language==="ar")langButton.textContent="English";
})();
