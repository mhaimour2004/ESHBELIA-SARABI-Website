(() => {
  const list=document.querySelector('#rfqItems'),summary=document.querySelector('#rfqSummary'),form=document.querySelector('#rfqForm');
  const ar=localStorage.getItem('eshbelia_lang')==='ar',t=(en,arabic)=>ar?arabic:en;
  const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const submit=form.querySelector('button[type="submit"]');
  submit.textContent=t('Send quotation request by WhatsApp','إرسال طلب عرض السعر عبر واتساب');
  const render=()=>{
    const items=ESHBELIA_RFQ.get();summary.textContent=items.length+' '+t('products','منتج');
    list.innerHTML=items.length?items.map(item=>`<article class="rfq-item"><img src="${esc(item.image||'assets/brand/live-mark.png')}" alt="${esc(item.name)}"><div><small>${esc(item.category)}</small><h3>${esc(item.name)}</h3><strong>${esc(item.id)}</strong></div><div class="rfq-item-controls"><label>${t('Qty','الكمية')} <input data-qty="${esc(item.id)}" type="number" min="1" step="1" value="${esc(item.quantity)}"></label><button class="rfq-remove" data-remove="${esc(item.id)}" type="button">${t('Remove','إزالة')}</button></div></article>`).join(''):`<div class="rfq-empty"><h2>${t('Your basket is empty','سلتك فارغة')}</h2><p>${t('Add products before sending your quotation request.','أضف المنتجات قبل إرسال طلب عرض السعر.')}</p><a class="btn btn-gold" href="products.html">${t('Browse products','تصفح المنتجات')}</a></div>`;
    submit.disabled=!items.length;
  };
  list.addEventListener('change',event=>{if(event.target.matches('[data-qty]')){const quantity=Number(event.target.value);ESHBELIA_RFQ.setQuantity(event.target.dataset.qty,Number.isSafeInteger(quantity)&&quantity>0?quantity:1);}});
  list.addEventListener('click',event=>{const button=event.target.closest('[data-remove]');if(button)ESHBELIA_RFQ.remove(button.dataset.remove);});
  document.addEventListener('eshbelia:rfq-updated',render);
  form.addEventListener('submit',event=>{
    event.preventDefault();const items=ESHBELIA_RFQ.get();if(!items.length||!form.reportValidity())return;
    const data=new FormData(form),official=location.protocol==='https:'&&['eshbeliatrading.com','www.eshbeliatrading.com'].includes(location.hostname);
    const lines=items.flatMap(item=>{
      const result=[`${item.id} — ${item.name} — ${t('Qty','الكمية')} ${item.quantity}`];
      if(official){const url=new URL('products.html',location.href);url.searchParams.set('product',item.id);url.hash=item.id;result.push(url.href);}
      return result;
    });
    const message=[t('Hello ESHBELIA SARABI, I would like to request a quotation.','مرحباً إشبيلية سرابي، أود طلب عرض سعر.'),`${t('Name','الاسم')}: ${data.get('name')}`,`${t('Company','الشركة')}: ${data.get('company')||'—'}`,`${t('Country','الدولة')}: ${data.get('country')}`,`${t('Currency','العملة')}: ${data.get('currency')}`,`${t('Project / notes','المشروع / ملاحظات')}: ${data.get('notes')||'—'}`,...(!official?[t('Preview enquiry; please confirm product details and availability.','طلب من نسخة المعاينة؛ يرجى تأكيد تفاصيل المنتجات وتوفرها.')]:[]),'',...lines].join('\n');
    window.open('https://wa.me/971555533432?text='+encodeURIComponent(message),'_blank','noopener');
  });
  render();
})();
