// Customer-facing datasheet links for products whose approved product-information sheet is available.
(function () {
  const product = (window.SEVILLA_NEW_PRODUCTS_PUBLIC || []).find((item) => item.id === 'ESH-AC-0205');
  if (product) product.datasheet = 'downloads/datasheets/ESH-AC-0205_Recessed-COB-downlight_Product-Information-Sheet_R01.pdf';
  const spotlight = (window.ESHBELIA_CATALOG_ADDITIONS || []).find((item) => item.id === 'ESH-DL-0004-B');
  if (spotlight) spotlight.datasheet = 'downloads/datasheets/ESH-DL-0004-B_IP54-Water-Resistant-Spotlight_Datasheet_R02.pdf';
})();
