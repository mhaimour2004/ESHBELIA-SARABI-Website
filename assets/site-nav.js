(async () => {
  const addStyle = (name,version='') => {
    if (document.querySelector('link[href^="assets/'+name+'"]')) return;
    const link=document.createElement('link'); link.rel='stylesheet'; link.href='assets/'+name+(version?'?v='+version:''); document.head.append(link);
  };
  addStyle('mobile-compact.css','20260904-language-scroll');
  addStyle('multipage.css'); addStyle('storefront-refresh.css');
  addStyle('efficient-layout.css','20260910-classification-menu-r02');
  addStyle('navigation-taxonomy.css','20260910-r01');
  const language=localStorage.getItem('eshbelia_lang')==='ar'?'ar':'en';
  const ar=language==='ar', t=(en,arabic)=>ar?arabic:en;
  document.documentElement.lang=language; document.documentElement.dir=ar?'rtl':'ltr';
  const header=document.querySelector('.header'); if(!header)return;
  if(!window.ESHBELIA_TAXONOMY) {
    await new Promise(resolve=>{
      const script=document.createElement('script'); script.src='assets/product-taxonomy.js?v=20260910-r01';
      script.onload=resolve; script.onerror=resolve; document.head.append(script);
    });
  }
  const taxonomy=window.ESHBELIA_TAXONOMY;
  const counts=window.ESHBELIA_PRODUCT_CLASSIFICATIONS||taxonomy?.snapshot||[];
  const groups=taxonomy?.groups(counts)||[];
  const total=counts.reduce((n,item)=>n+item[1],0);
  const current=location.pathname.split('/').pop()||'home.html';
  const esc=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const url=(key,value)=>'products.html?'+key+'='+encodeURIComponent(value)+'#catalogGrid';
  const items=[['home.html','Home'],['about.html','About'],['services.html','Solutions'],['projects.html','Projects'],['manufacturers.html','Manufacturers'],['contact.html','Contact']];
  const links=items.map(([href,name])=>'<a'+(current===href?' class="active" aria-current="page"':'')+' href="'+href+'">'+name+'</a>');
  const groupMarkup=groups.map(group=>'<details class="catalog-nav-group" data-division="'+group.id+'"><summary><span>'+esc(taxonomy.label(group,language))+'</span><b>'+group.total+'</b></summary><div class="catalog-nav-children"><a class="catalog-nav-view-all" href="'+url('division',group.id)+'">'+t('View all','عرض الكل')+' <b>'+group.total+'</b></a>'+group.children.map(([name,num])=>'<a href="'+url('category',name)+'"><span>'+esc(name)+'</span><b>'+num+'</b></a>').join('')+'</div></details>').join('');
  const productMenu='<details class="product-menu"'+(current==='products.html'?' data-active="true"':'')+'><summary aria-controls="productNavigationPanel">Products</summary><div class="product-submenu" id="productNavigationPanel"><div class="catalog-nav-heading"><div><strong>'+t('Explore products','تصفح المنتجات')+'</strong><small>'+total+' '+t('products','منتج')+'</small></div><button type="button" class="catalog-nav-close" aria-label="'+t('Close product menu','إغلاق قائمة المنتجات')+'">×</button></div><div class="catalog-nav-shortcuts"><a href="products.html">Product Catalogue</a><a href="products.html?solar=1#catalogGrid">'+t('Solar Lighting','الإنارة الشمسية')+'</a><a href="products.html#lightingCatalogsTitle">Lighting Catalogs</a><a href="rfq.html">Basket <span data-rfq-count>0</span></a></div><label class="catalog-nav-search"><span>'+t('Find a category','ابحث عن تصنيف')+'</span><input type="search" id="navigationSearch" placeholder="'+t('Search categories…','ابحث في التصنيفات…')+'"></label><div class="catalog-nav-groups">'+groupMarkup+'</div><p id="navigationEmpty" hidden>'+t('No matching categories. Try another name.','لا توجد تصنيفات مطابقة. جرّب اسماً آخر.')+'</p></div></details>';
  links.splice(3,0,productMenu);
  header.innerHTML='<div class="container nav"><a class="brand brand-logo" href="home.html" aria-label="ESHBELIA SARABI home"><span class="brand-mark-crop"><img src="assets/brand/live-mark.png" alt=""></span><span><strong>ESHBELIA SARABI</strong><small>LIGHTING &amp; CABLE SOLUTIONS</small></span></a><button class="menu-btn site-menu-btn" type="button" aria-expanded="false" aria-controls="siteNav"><span></span><span></span><span></span><b>Menu</b></button><nav id="siteNav" class="navlinks site-nav" aria-label="Main navigation">'+links.join('')+'<button id="langBtn" class="lang" type="button">'+(ar?'English':'العربية')+'</button><a class="nav-quote" href="rfq.html">Basket <span data-rfq-count>0</span></a></nav></div>';
  const button=header.querySelector('.site-menu-btn'),nav=header.querySelector('#siteNav'),product=nav.querySelector('.product-menu'),summary=product.querySelector(':scope > summary'),panel=product.querySelector('.product-submenu');
  const mobile=()=>matchMedia('(max-width:1180px)').matches;
  const closeProducts=(restore=false)=>{product.open=false;if(restore)summary.focus();};
  const close=(restore=false)=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');closeProducts();if(restore)button.focus();};
  button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));if(!open)closeProducts();});
  panel.querySelector('.catalog-nav-close').addEventListener('click',()=>closeProducts(true));
  nav.addEventListener('click',event=>{if(event.target.closest('a'))close();});
  document.addEventListener('click',event=>{if(!header.contains(event.target))close();});
  product.addEventListener('toggle',()=>summary.setAttribute('aria-expanded',String(product.open)));
  panel.addEventListener('toggle',event=>{
    if(event.target.matches('.catalog-nav-group')&&event.target.open&&!panel.querySelector('#navigationSearch').value.trim())
      panel.querySelectorAll('.catalog-nav-group[open]').forEach(group=>{if(group!==event.target)group.open=false;});
  },true);
  const normalize=value=>value.normalize('NFKC').toLowerCase().replace(/[\u064B-\u065F\u0670]/g,'').replace(/[أإآ]/g,'ا').trim();
  panel.querySelector('#navigationSearch').addEventListener('input',event=>{
    const query=normalize(event.target.value);let matches=0;
    panel.querySelectorAll('.catalog-nav-group').forEach(group=>{
      const definition=groups.find(item=>item.id===group.dataset.division);
      const groupMatch=normalize(definition.en+' '+definition.ar).includes(query);
      let children=0;
      group.querySelectorAll('.catalog-nav-children a').forEach((link,index)=>{
        const source=index===0?'':definition.children[index-1]?.[0]||'';
        const show=!query||groupMatch||normalize(link.textContent+' '+source).includes(query);
        link.hidden=!show;if(show)children++;
      });
      group.hidden=children===0;group.open=Boolean(query)&&children>0;if(!group.hidden)matches++;
    });
    panel.querySelector('#navigationEmpty').hidden=matches>0;
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){if(product.open){closeProducts(true);event.preventDefault();}else if(nav.classList.contains('open')){close(true);event.preventDefault();}}
    if(event.key==='Tab'&&mobile()&&nav.classList.contains('open')){
      const controls=[button,...nav.querySelectorAll('a,button,input,summary')].filter(el=>el.getClientRects().length&&!el.closest('[hidden]'));
      const first=controls[0],last=controls.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
  const updateOffsets=()=>{
    const bounds=header.getBoundingClientRect();
    document.documentElement.style.setProperty('--header-height',bounds.height+'px');
    document.documentElement.style.setProperty('--nav-panel-top',Math.max(0,bounds.bottom)+8+'px');
    const tools=document.querySelector('.catalog-tools');if(tools)document.documentElement.style.setProperty('--tools-height',tools.getBoundingClientRect().height+'px');
  };
  const observer=new ResizeObserver(updateOffsets);observer.observe(header);
  if(document.querySelector('.catalog-tools'))observer.observe(document.querySelector('.catalog-tools'));
  addEventListener('scroll',updateOffsets,{passive:true}); addEventListener('resize',()=>{updateOffsets();if(!mobile())close();});updateOffsets();
  if(window.ESHBELIA_RFQ)window.ESHBELIA_RFQ.updateBadges();
  else{try{const amount=JSON.parse(localStorage.getItem('eshbelia-rfq-v1')||'[]').reduce((n,item)=>n+Number(item.quantity||1),0);nav.querySelectorAll('[data-rfq-count]').forEach(node=>node.textContent=amount);}catch{}}
  header.querySelector('#langBtn').addEventListener('click',()=>{localStorage.setItem('eshbelia_lang',ar?'en':'ar');location.reload();});
  const translations=document.createElement('script');translations.src='assets/i18n.js?v=20260910-navigation-r01';document.body.append(translations);
  const icons=document.createElement('script');icons.src='assets/ui-icons.js?v=20260904-icons-preview';document.body.append(icons);
})();
