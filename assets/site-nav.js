(() => {
  const current = location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector(".header");
  if (!header) return;
  const items = [["index.html","Home"],["about.html","About"],["services.html","Solutions"],["products.html","Products"],["chandeliers.html","Chandeliers"],["projects.html","Projects"],["manufacturers.html","Manufacturers"],["contact.html","Contact"]];
  const links = items.map(([href,label]) => `<a${current===href?' class="active" aria-current="page"':""} href="${href}">${label}</a>`).join("");
  header.innerHTML = `<div class="container nav"><a class="brand brand-logo" href="index.html" aria-label="ESHBELIA SARABI home"><img src="assets/brand/live-mark.png" alt=""><span><strong>ESHBELIA SARABI</strong><small>LIGHTING &amp; CABLE SOLUTIONS</small></span></a><button class="menu-btn site-menu-btn" type="button" aria-expanded="false" aria-controls="siteNav"><span></span><span></span><span></span><b>Menu</b></button><nav id="siteNav" class="navlinks site-nav" aria-label="Main navigation">${links}<button id="langBtn" class="lang" type="button">العربية</button><a class="nav-quote" href="contact.html">Request a Quote</a></nav></div>`;
  const button=header.querySelector(".site-menu-btn"), nav=header.querySelector("#siteNav");
  const close=()=>{nav.classList.remove("open");button.setAttribute("aria-expanded","false")};
  button.addEventListener("click",()=>{const open=nav.classList.toggle("open");button.setAttribute("aria-expanded",String(open))});
  nav.addEventListener("click",e=>{if(e.target.closest("a"))close()});
  document.addEventListener("click",e=>{if(!header.contains(e.target))close()});
  addEventListener("resize",()=>{if(innerWidth>980)close()});
  const langButton=header.querySelector("#langBtn");
  langButton.addEventListener("click",()=>{const next=(localStorage.getItem("eshbelia_lang")||"en")==="en"?"ar":"en";localStorage.setItem("eshbelia_lang",next);location.reload()});
  if((localStorage.getItem("eshbelia_lang")||"en")==="ar")langButton.textContent="English";
})();
