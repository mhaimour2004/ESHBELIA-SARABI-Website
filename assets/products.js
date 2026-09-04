(() => {

 const pendingPublicationPhotos={"ESH-WL-0007":"assets/sevilla-final-20260904/ESH-WL-0007.webp","ESH-WL-0003":"assets/sevilla-final-20260904/ESH-WL-0003.webp","ESH-WL-0064":"assets/sevilla-final-20260904/ESH-WL-0064.webp","ESH-WL-0076":"assets/sevilla-final-20260904/ESH-WL-0076.webp","ESH-WL-0011":"assets/sevilla-final-20260904/ESH-WL-0011.webp","ESH-FL-0035":"assets/sevilla-final-20260904/ESH-FL-0035.webp","ESH-FL-0022":"assets/sevilla-final-20260904/ESH-FL-0022.webp","ESH-DL-0395":"assets/sevilla-final-20260904/ESH-DL-0395.webp","ESH-AC-0182":"assets/sevilla-final-20260904/ESH-AC-0182.webp","ESH-SW-0001":"assets/sevilla-final-20260904/ESH-SW-0001.webp"};

 const customerApprovedPhotos={"ESH-DL-0001-A":"assets/product-sheets/full-quality/ESH-CAT-0001_page-11.jpg","ESH-DL-0001-B":"assets/product-sheets/full-quality/ESH-CAT-0001_page-11.jpg","ESH-DL-0001-C":"assets/product-sheets/full-quality/ESH-CAT-0001_page-11.jpg","ESH-DL-0001-D":"assets/product-sheets/full-quality/ESH-CAT-0001_page-11.jpg","ESH-SL-0001-A":"assets/product-sheets/full-quality/ESH-CAT-0001_page-34.jpg","ESH-SL-0001-B":"assets/product-sheets/full-quality/ESH-CAT-0001_page-34.jpg","ESH-SL-0001-C":"assets/product-sheets/full-quality/ESH-CAT-0001_page-34.jpg","ESH-SL-0001-D":"assets/product-sheets/full-quality/ESH-CAT-0001_page-34.jpg","ESH-DL-0002":"assets/products/ESH-DL-0002.jpg"};
 const customerRejectedPhotos=new Set(["ESH-SW-0001","ESH-WL-0007","ESH-WL-0003","ESH-FL-0035","ESH-FL-0022","ESH-DL-0395","ESH-DL-0373","ESH-WL-0076","ESH-WL-0075","ESH-WL-0064","ESH-WL-0063","ESH-WL-0017","ESH-WL-0011","ESH-AC-0182"]);
    // Local approval-only photo update. Source files and product specifications are unchanged.
    const reviewedPhotoUpdates = {"ESH-FL-0009":"assets/sevilla-priority-review/ESH-FL-0009.webp","ESH-FL-0010":"assets/sevilla-priority-review/ESH-FL-0010.webp","ESH-FL-0011":"assets/sevilla-priority-review/ESH-FL-0011.webp","ESH-FL-0012":"assets/sevilla-priority-review/ESH-FL-0012.webp","ESH-FL-0013":"assets/sevilla-priority-review/ESH-FL-0013.webp","ESH-FL-0014":"assets/sevilla-priority-review/ESH-FL-0014.webp","ESH-FL-0015":"assets/sevilla-priority-review/ESH-FL-0015.webp","ESH-FL-0016":"assets/sevilla-priority-review/ESH-FL-0016.webp","ESH-FL-0017":"assets/sevilla-priority-review/ESH-FL-0017.webp","ESH-FL-0018":"assets/sevilla-priority-review/ESH-FL-0018.webp","ESH-FL-0020":"assets/sevilla-priority-review/ESH-FL-0020.webp","ESH-FL-0021":"assets/sevilla-priority-review/ESH-FL-0021.webp","ESH-FL-0023":"assets/sevilla-priority-review/ESH-FL-0023.webp","ESH-FL-0025":"assets/sevilla-priority-review/ESH-FL-0025.webp","ESH-FL-0027":"assets/sevilla-priority-review/ESH-FL-0027.webp","ESH-FL-0030":"assets/sevilla-priority-review/ESH-FL-0030.webp","ESH-FL-0031":"assets/sevilla-priority-review/ESH-FL-0031.webp","ESH-FL-0037":"assets/sevilla-priority-review/ESH-FL-0037.webp","ESH-AC-0008":"assets/sevilla-priority-review/ESH-AC-0008.webp","ESH-AC-0019":"assets/sevilla-priority-review/ESH-AC-0019.webp","ESH-AC-0021":"assets/sevilla-priority-review/ESH-AC-0021.webp","ESH-AC-0022":"assets/sevilla-priority-review/ESH-AC-0022.webp","ESH-AC-0023":"assets/sevilla-priority-review/ESH-AC-0023.webp","ESH-AC-0028":"assets/sevilla-priority-review/ESH-AC-0028.webp","ESH-AC-0030":"assets/sevilla-priority-review/ESH-AC-0030.webp","ESH-AC-0038":"assets/sevilla-priority-review/ESH-AC-0038.webp","ESH-AC-0040":"assets/sevilla-priority-review/ESH-AC-0040.webp","ESH-AC-0047":"assets/sevilla-priority-review/ESH-AC-0047.webp","ESH-AC-0070":"assets/sevilla-priority-review/ESH-AC-0070.webp","ESH-AC-0076":"assets/sevilla-priority-review/ESH-AC-0076.webp","ESH-AC-0079":"assets/sevilla-priority-review/ESH-AC-0079.webp","ESH-AC-0080":"assets/sevilla-priority-review/ESH-AC-0080.webp","ESH-AC-0081":"assets/sevilla-priority-review/ESH-AC-0081.webp","ESH-AC-0082":"assets/sevilla-priority-review/ESH-AC-0082.webp","ESH-AC-0098":"assets/sevilla-priority-review/ESH-AC-0098.webp","ESH-AC-0099":"assets/sevilla-priority-review/ESH-AC-0099.webp","ESH-AC-0100":"assets/sevilla-priority-review/ESH-AC-0100.webp","ESH-AC-0112":"assets/sevilla-priority-review/ESH-AC-0112.webp","ESH-AC-0113":"assets/sevilla-priority-review/ESH-AC-0113.webp","ESH-AC-0131":"assets/sevilla-priority-review/ESH-AC-0131.webp","ESH-AC-0132":"assets/sevilla-priority-review/ESH-AC-0132.webp","ESH-DL-0012":"assets/sevilla-priority-review/ESH-DL-0012.webp","ESH-DL-0013":"assets/sevilla-priority-review/ESH-DL-0013.webp","ESH-DL-0023":"assets/sevilla-priority-review/ESH-DL-0023.webp","ESH-DL-0025":"assets/sevilla-priority-review/ESH-DL-0025.webp","ESH-DL-0026":"assets/sevilla-priority-review/ESH-DL-0026.webp","ESH-AC-0136":"assets/sevilla-priority-review/ESH-AC-0136.webp","ESH-AC-0137":"assets/sevilla-priority-review/ESH-AC-0137.webp","ESH-AC-0138":"assets/sevilla-priority-review/ESH-AC-0138.webp","ESH-AC-0145":"assets/sevilla-priority-review/ESH-AC-0145.webp","ESH-AC-0146":"assets/sevilla-priority-review/ESH-AC-0146.webp","ESH-AC-0147":"assets/sevilla-priority-review/ESH-AC-0147.webp","ESH-AC-0148":"assets/sevilla-priority-review/ESH-AC-0148.webp","ESH-AC-0153":"assets/sevilla-priority-review/ESH-AC-0153.webp","ESH-AC-0154":"assets/sevilla-priority-review/ESH-AC-0154.webp","ESH-DL-0030":"assets/sevilla-priority-review/ESH-DL-0030.webp","ESH-DL-0031":"assets/sevilla-priority-review/ESH-DL-0031.webp","ESH-DL-0032":"assets/sevilla-priority-review/ESH-DL-0032.webp","ESH-DL-0033":"assets/sevilla-priority-review/ESH-DL-0033.webp","ESH-DL-0034":"assets/sevilla-priority-review/ESH-DL-0034.webp","ESH-DL-0035":"assets/sevilla-priority-review/ESH-DL-0035.webp","ESH-DL-0036":"assets/sevilla-priority-review/ESH-DL-0036.webp","ESH-DL-0037":"assets/sevilla-priority-review/ESH-DL-0037.webp","ESH-DL-0038":"assets/sevilla-priority-review/ESH-DL-0038.webp","ESH-DL-0039":"assets/sevilla-priority-review/ESH-DL-0039.webp","ESH-DL-0040":"assets/sevilla-priority-review/ESH-DL-0040.webp","ESH-DL-0041":"assets/sevilla-priority-review/ESH-DL-0041.webp","ESH-DL-0056":"assets/sevilla-priority-review/ESH-DL-0056.webp","ESH-DL-0057":"assets/sevilla-priority-review/ESH-DL-0057.webp","ESH-DL-0058":"assets/sevilla-priority-review/ESH-DL-0058.webp","ESH-DL-0064":"assets/sevilla-priority-review/ESH-DL-0064.webp","ESH-DL-0071":"assets/sevilla-priority-review/ESH-DL-0071.webp","ESH-DL-0078":"assets/sevilla-priority-review/ESH-DL-0078.webp","ESH-DL-0081":"assets/sevilla-priority-review/ESH-DL-0081.webp","ESH-DL-0084":"assets/sevilla-priority-review/ESH-DL-0084.webp","ESH-DL-0085":"assets/sevilla-priority-review/ESH-DL-0085.webp","ESH-DL-0091":"assets/sevilla-priority-review/ESH-DL-0091.webp","ESH-DL-0096":"assets/sevilla-priority-review/ESH-DL-0096.webp","ESH-DL-0103":"assets/sevilla-priority-review/ESH-DL-0103.webp","ESH-DL-0104":"assets/sevilla-priority-review/ESH-DL-0104.webp","ESH-DL-0106":"assets/sevilla-priority-review/ESH-DL-0106.webp","ESH-DL-0123":"assets/sevilla-priority-review/ESH-DL-0123.webp","ESH-DL-0126":"assets/sevilla-priority-review/ESH-DL-0126.webp","ESH-DL-0127":"assets/sevilla-priority-review/ESH-DL-0127.webp","ESH-DL-0128":"assets/sevilla-priority-review/ESH-DL-0128.webp","ESH-DL-0132":"assets/sevilla-priority-review/ESH-DL-0132.webp","ESH-DL-0157":"assets/sevilla-priority-review/ESH-DL-0157.webp","ESH-DL-0161":"assets/sevilla-priority-review/ESH-DL-0161.webp","ESH-DL-0162":"assets/sevilla-priority-review/ESH-DL-0162.webp","ESH-DL-0163":"assets/sevilla-priority-review/ESH-DL-0163.webp","ESH-DL-0168":"assets/sevilla-priority-review/ESH-DL-0168.webp","ESH-DL-0171":"assets/sevilla-priority-review/ESH-DL-0171.webp","ESH-DL-0173":"assets/sevilla-priority-review/ESH-DL-0173.webp","ESH-DL-0174":"assets/sevilla-priority-review/ESH-DL-0174.webp","ESH-DL-0211":"assets/sevilla-priority-review/ESH-DL-0211.webp","ESH-DL-0217":"assets/sevilla-priority-review/ESH-DL-0217.webp","ESH-DL-0219":"assets/sevilla-priority-review/ESH-DL-0219.webp","ESH-DL-0221":"assets/sevilla-priority-review/ESH-DL-0221.webp","ESH-DL-0222":"assets/sevilla-priority-review/ESH-DL-0222.webp","ESH-DL-0225":"assets/sevilla-priority-review/ESH-DL-0225.webp","ESH-DL-0226":"assets/sevilla-priority-review/ESH-DL-0226.webp","ESH-DL-0237":"assets/sevilla-priority-review/ESH-DL-0237.webp","ESH-DL-0241":"assets/sevilla-priority-review/ESH-DL-0241.webp","ESH-DL-0245":"assets/sevilla-priority-review/ESH-DL-0245.webp","ESH-DL-0247":"assets/sevilla-priority-review/ESH-DL-0247.webp","ESH-DL-0248":"assets/sevilla-priority-review/ESH-DL-0248.webp","ESH-DL-0249":"assets/sevilla-priority-review/ESH-DL-0249.webp","ESH-DL-0250":"assets/sevilla-priority-review/ESH-DL-0250.webp","ESH-DL-0251":"assets/sevilla-priority-review/ESH-DL-0251.webp","ESH-DL-0252":"assets/sevilla-priority-review/ESH-DL-0252.webp","ESH-DL-0253":"assets/sevilla-priority-review/ESH-DL-0253.webp","ESH-DL-0254":"assets/sevilla-priority-review/ESH-DL-0254.webp","ESH-DL-0255":"assets/sevilla-priority-review/ESH-DL-0255.webp","ESH-DL-0256":"assets/sevilla-priority-review/ESH-DL-0256.webp","ESH-DL-0257":"assets/sevilla-priority-review/ESH-DL-0257.webp","ESH-DL-0258":"assets/sevilla-priority-review/ESH-DL-0258.webp","ESH-DL-0259":"assets/sevilla-priority-review/ESH-DL-0259.webp","ESH-DL-0260":"assets/sevilla-priority-review/ESH-DL-0260.webp","ESH-DL-0261":"assets/sevilla-priority-review/ESH-DL-0261.webp","ESH-DL-0262":"assets/sevilla-priority-review/ESH-DL-0262.webp","ESH-DL-0263":"assets/sevilla-priority-review/ESH-DL-0263.webp","ESH-DL-0264":"assets/sevilla-priority-review/ESH-DL-0264.webp","ESH-DL-0265":"assets/sevilla-priority-review/ESH-DL-0265.webp","ESH-DL-0266":"assets/sevilla-priority-review/ESH-DL-0266.webp","ESH-DL-0267":"assets/sevilla-priority-review/ESH-DL-0267.webp","ESH-DL-0268":"assets/sevilla-priority-review/ESH-DL-0268.webp","ESH-DL-0269":"assets/sevilla-priority-review/ESH-DL-0269.webp","ESH-DL-0270":"assets/sevilla-priority-review/ESH-DL-0270.webp","ESH-DL-0271":"assets/sevilla-priority-review/ESH-DL-0271.webp","ESH-DL-0272":"assets/sevilla-priority-review/ESH-DL-0272.webp","ESH-DL-0273":"assets/sevilla-priority-review/ESH-DL-0273.webp","ESH-DL-0274":"assets/sevilla-priority-review/ESH-DL-0274.webp","ESH-DL-0275":"assets/sevilla-priority-review/ESH-DL-0275.webp","ESH-DL-0276":"assets/sevilla-priority-review/ESH-DL-0276.webp","ESH-DL-0277":"assets/sevilla-priority-review/ESH-DL-0277.webp","ESH-DL-0278":"assets/sevilla-priority-review/ESH-DL-0278.webp","ESH-DL-0279":"assets/sevilla-priority-review/ESH-DL-0279.webp","ESH-DL-0280":"assets/sevilla-priority-review/ESH-DL-0280.webp","ESH-DL-0281":"assets/sevilla-priority-review/ESH-DL-0281.webp","ESH-DL-0282":"assets/sevilla-priority-review/ESH-DL-0282.webp","ESH-DL-0286":"assets/sevilla-priority-review/ESH-DL-0286.webp","ESH-DL-0291":"assets/sevilla-priority-review/ESH-DL-0291.webp","ESH-DL-0293":"assets/sevilla-priority-review/ESH-DL-0293.webp","ESH-DL-0294":"assets/sevilla-priority-review/ESH-DL-0294.webp","ESH-DL-0295":"assets/sevilla-priority-review/ESH-DL-0295.webp","ESH-DL-0296":"assets/sevilla-priority-review/ESH-DL-0296.webp","ESH-DL-0299":"assets/sevilla-priority-review/ESH-DL-0299.webp","ESH-DL-0300":"assets/sevilla-priority-review/ESH-DL-0300.webp","ESH-DL-0301":"assets/sevilla-priority-review/ESH-DL-0301.webp","ESH-DL-0302":"assets/sevilla-priority-review/ESH-DL-0302.webp","ESH-DL-0321":"assets/sevilla-priority-review/ESH-DL-0321.webp","ESH-DL-0326":"assets/sevilla-priority-review/ESH-DL-0326.webp","ESH-DL-0333":"assets/sevilla-priority-review/ESH-DL-0333.webp","ESH-DL-0334":"assets/sevilla-priority-review/ESH-DL-0334.webp","ESH-DL-0337":"assets/sevilla-priority-review/ESH-DL-0337.webp","ESH-DL-0339":"assets/sevilla-priority-review/ESH-DL-0339.webp","ESH-DL-0345":"assets/sevilla-priority-review/ESH-DL-0345.webp","ESH-DL-0348":"assets/sevilla-priority-review/ESH-DL-0348.webp","ESH-DL-0349":"assets/sevilla-priority-review/ESH-DL-0349.webp","ESH-DL-0350":"assets/sevilla-priority-review/ESH-DL-0350.webp","ESH-DL-0368":"assets/sevilla-priority-review/ESH-DL-0368.webp","ESH-DL-0369":"assets/sevilla-priority-review/ESH-DL-0369.webp","ESH-DL-0389":"assets/sevilla-priority-review/ESH-DL-0389.webp","ESH-DL-0396":"assets/sevilla-priority-review/ESH-DL-0396.webp","ESH-AC-0171":"assets/sevilla-priority-review/ESH-AC-0171.webp","ESH-AC-0173":"assets/sevilla-priority-review/ESH-AC-0173.webp","ESH-AC-0178":"assets/sevilla-priority-review/ESH-AC-0178.webp","ESH-AC-0180":"assets/sevilla-priority-review/ESH-AC-0180.webp","ESH-AC-0181":"assets/sevilla-priority-review/ESH-AC-0181.webp","ESH-AC-0187":"assets/sevilla-priority-review/ESH-AC-0187.webp","ESH-AC-0192":"assets/sevilla-priority-review/ESH-AC-0192.webp","ESH-AC-0193":"assets/sevilla-priority-review/ESH-AC-0193.webp","ESH-AC-0198":"assets/sevilla-priority-review/ESH-AC-0198.webp","ESH-AC-0199":"assets/sevilla-priority-review/ESH-AC-0199.webp","ESH-AC-0001":"assets/sevilla-reviewed-20260904/ESH-AC-0001.png","ESH-WL-0030":"assets/sevilla-reviewed-20260904/ESH-WL-0030.png","ESH-WL-0032":"assets/sevilla-reviewed-20260904/ESH-WL-0032.png","ESH-WL-0034":"assets/sevilla-reviewed-20260904/ESH-WL-0034.png","ESH-WL-0035":"assets/sevilla-reviewed-20260904/ESH-WL-0035.png","ESH-WL-0036":"assets/sevilla-reviewed-20260904/ESH-WL-0036.png","ESH-WL-0041":"assets/sevilla-reviewed-20260904/ESH-WL-0041.png","ESH-WL-0045":"assets/sevilla-reviewed-20260904/ESH-WL-0045.png","ESH-WL-0049":"assets/sevilla-reviewed-20260904/ESH-WL-0049.png","ESH-WL-0060":"assets/sevilla-reviewed-20260904/ESH-WL-0060.png","ESH-WL-0054":"assets/sevilla-reviewed-20260904/ESH-WL-0054.png","ESH-WL-0065":"assets/sevilla-reviewed-20260904/ESH-WL-0065.png","ESH-WL-0071":"assets/sevilla-reviewed-20260904/ESH-WL-0071.png","ESH-WL-0084":"assets/sevilla-reviewed-20260904/ESH-WL-0084.png","ESH-WL-0085":"assets/sevilla-reviewed-20260904/ESH-WL-0085.png","ESH-WL-0072":"assets/sevilla-reviewed-20260904/ESH-WL-0072.png","ESH-WL-0074":"assets/sevilla-reviewed-20260904/ESH-WL-0074.png","ESH-WL-0077":"assets/sevilla-reviewed-20260904/ESH-WL-0077.png","ESH-AC-0041":"assets/sevilla-reviewed-20260904/ESH-AC-0041.png","ESH-AC-0042":"assets/sevilla-reviewed-20260904/ESH-AC-0042.png","ESH-WL-0005":"assets/sevilla-reviewed-20260904/ESH-WL-0005.png","ESH-FL-0024":"assets/sevilla-reviewed-20260904/ESH-FL-0024.png","ESH-WL-0004":"assets/sevilla-reviewed-20260904/ESH-WL-0004.png","ESH-WL-0006":"assets/sevilla-reviewed-20260904/ESH-WL-0006.png","ESH-WL-0014":"assets/sevilla-reviewed-20260904/ESH-WL-0014.png","ESH-WL-0015":"assets/sevilla-reviewed-20260904/ESH-WL-0015.png","ESH-FL-0026":"assets/sevilla-reviewed-20260904/ESH-FL-0026.png","ESH-FL-0028":"assets/sevilla-reviewed-20260904/ESH-FL-0028.png","ESH-FL-0029":"assets/sevilla-reviewed-20260904/ESH-FL-0029.png","ESH-FL-0034":"assets/sevilla-reviewed-20260904/ESH-FL-0034.png","ESH-FL-0036":"assets/sevilla-reviewed-20260904/ESH-FL-0036.png","ESH-WL-0002":"assets/sevilla-reviewed-20260904/ESH-WL-0002.png","ESH-WL-0009":"assets/sevilla-reviewed-20260904/ESH-WL-0009.png","ESH-WL-0010":"assets/sevilla-reviewed-20260904/ESH-WL-0010.png","ESH-WL-0013":"assets/sevilla-reviewed-20260904/ESH-WL-0013.png","ESH-WL-0016":"assets/sevilla-reviewed-20260904/ESH-WL-0016.png"};
    const presentationHolds = ["ESH-DL-0001-A","ESH-DL-0001-B","ESH-DL-0001-C","ESH-DL-0001-D","ESH-SL-0001-A","ESH-SL-0001-B","ESH-SL-0001-C","ESH-SL-0001-D","ESH-SW-0001","ESH-DL-0002"];

  const withheldImageIds = new Set([
    "ESH-AC-0006", "ESH-AC-0007", "ESH-AC-0089", "ESH-AC-0090", "ESH-AC-0091", "ESH-AC-0092",
    "ESH-AC-0101", "ESH-AC-0102", "ESH-AC-0103", "ESH-AC-0104", "ESH-AC-0105", "ESH-AC-0106",
    "ESH-AC-0107", "ESH-AC-0108", "ESH-AC-0109", "ESH-AC-0115", "ESH-AC-0116", "ESH-AC-0117"
  ]);
  const priorityPhotoIds = new Set([
    "ES-CH-004", "ES-CH-006", "ES-CH-009", "ES-CH-011", "ES-CH-013", "ES-CH-014", "ES-CH-015", "ES-CH-016",
    "ES-CH-017", "ES-CH-020", "ES-CH-021", "ES-CH-023", "ES-CH-026", "ES-CH-027", "ES-CH-028", "ES-CH-029",
    "ES-CH-030", "ES-CH-098", "ES-CH-108", "ES-CH-111", "ES-CH-112", "ES-CH-114", "ES-CH-115", "ES-CH-117",
    "ES-MSQ-013", "ES-PL-021", "ES-PL-023", "ES-PL-027", "ES-PL-030", "MSQ-CH-001", "MSQ-CH-004", "MSQ-CH-017",
    "MSQ-CH-019", "MSQ-CH-020", "MSQ-CH-024", "MSQ-CH-025",
    "ESH-AC-0006", "ESH-AC-0007", "ESH-AC-0089", "ESH-AC-0090", "ESH-AC-0091", "ESH-AC-0092",
    "ESH-AC-0101", "ESH-AC-0102", "ESH-AC-0103", "ESH-AC-0104", "ESH-AC-0105", "ESH-AC-0106",
    "ESH-AC-0107", "ESH-AC-0108", "ESH-AC-0109", "ESH-AC-0115", "ESH-AC-0116", "ESH-AC-0117",
    "ESH-FL-0001", "ESH-FL-0001-A", "ESH-FL-0001-B",
    "ESH-SW-0002", "ESH-SW-0003", "ESH-SW-0004", "ESH-SW-0005", "ESH-SW-0006", "ESH-SW-0007", "ESH-SW-0008",
    "ESH-SW-0009", "ESH-SW-0010", "ESH-SW-0011", "ESH-SW-0012", "ESH-SW-0013", "ESH-SW-0014", "ESH-SW-0015",
    "ESH-SW-0016", "ESH-SW-0017", "ESH-SW-0018", "ESH-SW-0019", "ESH-SW-0020", "ESH-SW-0021", "ESH-SW-0022",
    "ESH-SW-0023", "ESH-SW-0024", "ESH-SW-0025", "ESH-SW-0026", "ESH-SW-0027", "ESH-SW-0028", "ESH-SW-0029"
  ]);
  const transientPhotoIds = new Set(window.ESHBELIA_TRANSIENT_PHOTO_IDS || []);
  const rejectedTransientPhotoIds = new Set(window.ESHBELIA_REJECTED_TRANSIENT_PHOTO_IDS || []);
  const imported = (window.ESHBELIA_CATALOG || []).map(item => ({
    ...item,
    sourceImage: item.image,
    image: withheldImageIds.has(item.id) ? "assets/brand/product-image-under-review.svg" : `assets/sevilla-stage1/${item.id}.webp`,
    imageWithheld: withheldImageIds.has(item.id),
    approvalStage: "Stage 1 review"
  }));
  const additions = window.ESHBELIA_CATALOG_ADDITIONS || [];
  const controlled = (window.ESHBELIA_CONTENT.catalogProducts || []).map(item => ({
    id: item.id, name: item.name, category: item.category, categorySlug: "eshbelia-products", image: item.image,
    specs: Object.fromEntries((item.specs || []).map((value, index) => [`Specification ${index + 1}`, value])),
    price: null, currency: null, pricingMode: "rfq", offeredBy: "ESHBELIA SARABI", datasheet: null
  }));
  const chandeliers = (window.ESHBELIA_CONTENT.chandeliers || []).map(item => ({
    id: item.code, name: item.name, category: "Chandeliers", categorySlug: "chandeliers", image: item.image,
    specs: { Collection: item.collection, Finish: item.finish, Material: item.material, Size: item.size, Lighting: item.lights },
    price: null, currency: null, pricingMode: "rfq", offeredBy: "ESHBELIA SARABI"
  }));
  const categoryMap = {"Switches & Controls":"Wiring Accessories","Floodlights":"Flood Lighting","Street Lights":"Street Lighting","Underground Lights":"Inground Lighting"};
  const normalize = product => ({ ...product, category: categoryMap[product.category] || product.category });
  // Imported draft sheets have the lowest priority. Approved ESHBELIA sheets and chandelier pages always win on duplicate IDs.
  const products = [...new Map([...imported, ...additions, ...controlled, ...chandeliers].map(item => { const product = normalize({...item, brand:item.brand || "SEVILLA"}); return [product.id, product]; })).values()].map(product => {
    if (pendingPublicationPhotos[product.id]) return {...product,image:pendingPublicationPhotos[product.id],imageWithheld:false,approvalStage:'New commercial rendering - local preview; publication pending'};
    if (customerApprovedPhotos[product.id]) return {...product,image:customerApprovedPhotos[product.id],imageWithheld:false,approvalStage:'Customer-approved catalog image'};
    if (customerRejectedPhotos.has(product.id)) return {...product,image:'assets/brand/product-image-under-review.svg',imageWithheld:true,approvalStage:'Image not approved by customer'};
    if (presentationHolds.includes(product.id)) return {...product, image: 'assets/brand/product-image-under-review.svg', imageWithheld: true, approvalStage: 'Image presentation under review'};
    if (reviewedPhotoUpdates[product.id]) return {...product, image: reviewedPhotoUpdates[product.id], imageWithheld: false, approvalStage: 'White product photo - local approval preview'};
    if (priorityPhotoIds.has(product.id)) return {
      ...product,
      image: `assets/sevilla-priority-review/${product.id}.webp`,
      imageWithheld: false,
      approvalStage: "Offline priority photo review"
    };
    if (rejectedTransientPhotoIds.has(product.id)) return {
      ...product,
      image: "assets/brand/product-image-under-review.svg",
      imageWithheld: true,
      approvalStage: "Image withheld after supplier and clarity review"
    };
    if (transientPhotoIds.has(product.id)) return {
      ...product,
      image: `assets/sevilla-transient/${product.id}.webp`,
      imageWithheld: false,
      approvalStage: "Transient white-background website review"
    };
    return product;
  });
  const language = (localStorage.getItem("eshbelia_lang") || "en") === "ar" ? "ar" : "en";
  const grid = document.querySelector("#catalogGrid"), search = document.querySelector("#catalogSearch"), filters = document.querySelector("#catalogFilters"), options = document.querySelector("#categoryOptions"), count = document.querySelector("#catalogCount"), loadMore = document.querySelector("#loadMore");
  const categoryToggle = document.querySelector("#categoryToggle"), categoryClose = document.querySelector("#categoryClose"), categoryBackdrop = document.querySelector("#categoryBackdrop"), activeCategory = document.querySelector("#activeCategory"), categoryRailPrev = document.querySelector("#categoryRailPrev"), categoryRailNext = document.querySelector("#categoryRailNext");
  const productDialog = document.querySelector("#productDialog"), dialogClose = document.querySelector("#productDialogClose"), dialogPrev = document.querySelector("#productDialogPrev"), dialogNext = document.querySelector("#productDialogNext"), dialogImageButton = document.querySelector("#productDialogImageButton"), dialogImage = document.querySelector("#productDialogImage"), dialogImageHint = document.querySelector("#productDialogImageHint"), dialogCategory = document.querySelector("#productDialogCategory"), dialogTitle = document.querySelector("#productDialogTitle"), dialogCode = document.querySelector("#productDialogCode"), dialogSpecs = document.querySelector("#productDialogSpecs"), dialogPrice = document.querySelector("#productDialogPrice"), dialogAdd = document.querySelector("#productDialogAdd"), dialogWhatsapp = document.querySelector("#productDialogWhatsapp"), dialogDatasheet = document.querySelector("#productDialogDatasheet");
  let category = "All", visible = 60, currentProductIndex = -1, dragActive = false, dragMoved = false, dragStartX = 0, dragStartY = 0, dragStartLeft = 0, dragStartTop = 0;
  const catalogPublications = document.querySelector('.lighting-catalogs');
  if (catalogPublications) loadMore.parentElement.after(catalogPublications);
  const motion = () => matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  const viewerControls = document.createElement('div');
  viewerControls.className = 'viewer-controls';
  viewerControls.innerHTML = '<button type="button" data-zoom="out" aria-label="Zoom out">−</button><output aria-live="polite">100%</output><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="fit">Fit</button><button type="button" data-zoom="full" aria-label="Toggle full image view">Full</button>';
  productDialog.append(viewerControls);
  let imageZoom = 1, fitWidth = 0, fitHeight = 0, swipeStart = null, pinchDistance = 0;
  const imagePointers = new Map();
  const setZoom = value => {
    imageZoom = Math.max(1, Math.min(4, value));
    const css = getComputedStyle(dialogImageButton);
    const availableW = dialogImageButton.clientWidth - parseFloat(css.paddingLeft) - parseFloat(css.paddingRight);
    const availableH = dialogImageButton.clientHeight - parseFloat(css.paddingTop) - parseFloat(css.paddingBottom) - 24;
    if (!dialogImage.naturalWidth || availableW <= 0 || availableH <= 0) return;
    const fit = Math.min(availableW / dialogImage.naturalWidth, availableH / dialogImage.naturalHeight);
    fitWidth = dialogImage.naturalWidth * fit; fitHeight = dialogImage.naturalHeight * fit;
    dialogImage.style.width = `${fitWidth * imageZoom}px`; dialogImage.style.height = `${fitHeight * imageZoom}px`;
    dialogImage.style.maxHeight = 'none';
    dialogImage.classList.toggle('enlarged', imageZoom > 1);
    if (imageZoom === 1) dialogImageButton.scrollTo(0, 0);
    viewerControls.querySelector('output').textContent = `${Math.round(imageZoom * 100)}%`;
    viewerControls.querySelector('[data-zoom=out]').disabled = imageZoom === 1;
    viewerControls.querySelector('[data-zoom=in]').disabled = imageZoom === 4;
    dialogImageHint.textContent = imageZoom === 1
      ? (language === 'ar' ? 'مرر أو اسحب لأعلى/أسفل لتبديل المنتج • استخدم + للتكبير' : 'Scroll or swipe up/down to change product • use + to zoom')
      : (language === 'ar' ? 'اسحب أو مرر لتحريك الصورة • اختر ملاءمة لتبديل المنتجات' : 'Drag or scroll to pan • choose Fit to browse products');
  };
  dialogImage.addEventListener('load', () => setZoom(imageZoom));
  new ResizeObserver(() => { if(productDialog.open) setZoom(imageZoom); }).observe(dialogImageButton);
  viewerControls.addEventListener('click', event => {
    const action = event.target.closest('[data-zoom]')?.dataset.zoom;
    if (action === 'full') { productDialog.classList.toggle('image-only'); requestAnimationFrame(() => setZoom(1)); }
    else if(action) setZoom(action === 'fit' ? 1 : imageZoom + (action === 'in' ? .5 : -.5));
  });
  const categories = ["All", ...new Set(products.map(product => product.category))];
  options.innerHTML = categories.map(item => `<button class="filter${item === "All" ? " active" : ""}" type="button" data-category="${item}">${item === "All" ? "All products" : item}</button>`).join("");
  options.tabIndex = 0;
  options.setAttribute("aria-label", language === "ar" ? "مرر تصنيفات المنتجات أفقياً" : "Scroll product categories horizontally");
  let categoryDrag = false, categoryStartX = 0, categoryStartLeft = 0;
  const categoryScrollAmount = () => Math.max(260, Math.round(options.clientWidth * .72));
  const updateCategoryRailControls = () => {
    const maxScroll = Math.max(0, options.scrollWidth - options.clientWidth);
    const position = Math.abs(options.scrollLeft);
    categoryRailPrev.disabled = position <= 4;
    categoryRailNext.disabled = position >= maxScroll - 4;
  };
  const moveCategoryRail = direction => options.scrollBy({left: direction * (language === 'ar' ? -1 : 1) * categoryScrollAmount(), behavior: motion()});
  categoryRailPrev.addEventListener("click", () => moveCategoryRail(-1));
  categoryRailNext.addEventListener("click", () => moveCategoryRail(1));
  options.addEventListener("scroll", updateCategoryRailControls, {passive:true});
  options.addEventListener("wheel", event => {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (!delta) return;
    options.scrollLeft += delta;
    event.preventDefault();
  }, { passive: false });
  options.addEventListener("pointerdown", event => {
    if (event.pointerType === "touch" || event.target.closest("[data-category]")) return;
    categoryDrag = true; categoryStartX = event.clientX; categoryStartLeft = options.scrollLeft;
    options.setPointerCapture(event.pointerId); options.classList.add("is-dragging");
  });
  options.addEventListener("pointermove", event => {
    if (!categoryDrag) return;
    const distance = event.clientX - categoryStartX;
    options.scrollLeft = categoryStartLeft - distance;
  });
  const stopCategoryDrag = event => {
    if (!categoryDrag) return;
    categoryDrag = false; options.classList.remove("is-dragging");
    if (options.hasPointerCapture(event.pointerId)) options.releasePointerCapture(event.pointerId);
  };
  options.addEventListener("pointerup", stopCategoryDrag);
  options.addEventListener("pointercancel", stopCategoryDrag);
  const fixedMenu = () => true;
  const setDrawer = open => {
    const visible = fixedMenu() || open;
    filters.classList.toggle("open", visible);
    filters.setAttribute("aria-hidden", String(!visible));
    filters.inert = !visible;
    categoryToggle.setAttribute("aria-expanded", String(visible));
    categoryBackdrop.hidden = fixedMenu() || !open;
    document.body.classList.toggle("category-open", !fixedMenu() && open);
    if (!fixedMenu()) (open ? categoryClose : categoryToggle).focus();
  };
  const filteredProducts = () => { const query = search.value.trim().toLowerCase(); const t = window.ESHBELIA_I18N?.t || (value => value); return products.filter(product => { const specs = Object.values(product.specs || {}).join(" "); return (category === "All" || product.category === category) && `${product.id} ${product.name} ${product.category} ${t(product.name)} ${t(product.category)} ${specs}`.toLowerCase().includes(query); }); };
  const productLink = product => { const url = new URL("products.html", new URL(".", location.href)); url.searchParams.set("product", product.id); url.hash = product.id; return url.href; };
  const imageLink = product => product.imageWithheld ? null : new URL(product.image, location.href).href;
  const whatsappMessage = product => {
    const lines = [`Hello ESHBELIA SARABI, I would like to request a price for ${product.name} (${product.id}).`, "", `Product: ${productLink(product)}`];
    const photo = imageLink(product); if (photo) lines.push(`Photo: ${photo}`);
    return lines.join("\n");
  };
  const card = product => {
    const specs = Object.entries(product.specs || {}).slice(0, 6);
    const price = product.price != null ? `<strong>${product.currency || "AED"} ${Number(product.price).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</strong><span>Published product price</span>` : `<strong>Request price</strong><span>${product.pricingMode === "pending-price-list" ? "Price list pending verification" : "Quoted according to quantity and project"}</span>`;
    const message = encodeURIComponent(whatsappMessage(product));
    return `<article id="${product.id}" class="shop-card"><a class="shop-card-media" href="${productLink(product)}" data-view="${product.id}" aria-label="View ${product.name}"><img src="${product.image}" alt="${product.name}" loading="lazy"></a><div class="shop-card-body"><div class="shop-card-meta"><span>${product.brand} · ${product.category}</span><strong>${product.id}</strong></div><h2><a href="${productLink(product)}" data-view="${product.id}">${product.name}</a></h2><details><summary>Details</summary><dl>${specs.map(([key,value])=>`<div><dt>${key}</dt><dd>${value}</dd></div>`).join("") || "<div><dt>Status</dt><dd>Available on request</dd></div>"}</dl></details><div class="price-line">${price}</div><div class="shop-actions"><button class="rfq-add" type="button" data-add="${product.id}">Add to basket</button><a class="shop-wa" href="https://wa.me/971555533432?text=${message}" target="_blank" rel="noopener" aria-label="Order ${product.name} on WhatsApp">Order on WhatsApp</a></div>${product.datasheet ? `<a class="text-link" href="${product.datasheet}" download>Datasheet ↓</a>` : ""}</div></article>`;
  };
  const openProduct = product => {
    imageZoom = 1; imagePointers.clear(); pinchDistance = 0; dragActive = false; dragMoved = false;
    currentProductIndex = products.findIndex(item => item.id === product.id);
    dialogImage.src = product.image; dialogImage.alt = product.name; dialogImage.classList.remove("enlarged");
    dialogImageButton.classList.remove("dragging"); dialogImageButton.scrollTo({left:0,top:0}); dialogImageHint.textContent = language === "ar" ? "اضغط للتكبير • اسحب لتحريك الصورة" : "Click to enlarge • drag to move";
    dialogCategory.textContent = product.category; dialogTitle.textContent = product.name; dialogCode.textContent = product.id;
    dialogSpecs.innerHTML = Object.entries(product.specs || {}).map(([key,value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("") || "<div><dt>Status</dt><dd>Available on request</dd></div>";
    dialogPrice.innerHTML = product.price != null ? `<strong>${product.currency || "AED"} ${Number(product.price).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}</strong><span>Published product price</span>` : "<strong>Request price</strong><span>Quoted according to quantity and project</span>";
    const message = encodeURIComponent(whatsappMessage(product));
    dialogWhatsapp.href = `https://wa.me/971555533432?text=${message}`; dialogAdd.dataset.add = product.id;
    dialogDatasheet.hidden = !product.datasheet; if (product.datasheet) dialogDatasheet.href = product.datasheet;
    dialogPrev.textContent = language === 'ar' ? '↑ السابق' : '↑ Previous'; dialogNext.textContent = language === 'ar' ? 'التالي ↓' : 'Next ↓';
    dialogPrev.setAttribute("aria-label", language === "ar" ? "المنتج السابق" : "Previous product"); dialogNext.setAttribute("aria-label", language === "ar" ? "المنتج التالي" : "Next product");
    history.replaceState(null, "", productLink(product)); if (!productDialog.open) productDialog.showModal();
    document.querySelector('.product-dialog-copy').scrollTop = 0;
    requestAnimationFrame(() => setZoom(1));
  };
  const moveProduct = offset => {
    const list = filteredProducts();
    if (!list.length) return;
    const start = list.findIndex(item => item.id === products[currentProductIndex]?.id);
    openProduct(list[(Math.max(0, start) + offset + list.length) % list.length]);
  };
  const render = (preserveFeedPosition = false) => { const priorScroll = preserveFeedPosition ? grid.scrollTop : 0; const list = filteredProducts(); count.textContent = `${list.length} products`; grid.innerHTML = list.slice(0, visible).map(card).join("") || `<div class="rfq-empty"><h2>No matching products</h2><p>Try another category or search term.</p></div>`; loadMore.hidden = visible >= list.length; if (preserveFeedPosition) grid.scrollTop = priorScroll; ESHBELIA_RFQ.updateBadges(); };
  options.addEventListener("click", event => { const button = event.target.closest("[data-category]"); if (!button) return; category = button.dataset.category; search.value = ""; activeCategory.textContent = category === "All" ? "All products" : category; visible = 60; options.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button)); button.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}); grid.scrollTo({top:0,behavior:"auto"}); if (!fixedMenu()) setDrawer(false); render(); });
  categoryToggle.addEventListener("click", () => setDrawer(!filters.classList.contains("open")));
  categoryClose.addEventListener("click", () => setDrawer(false));
  categoryBackdrop.addEventListener("click", () => setDrawer(false));
  document.addEventListener("keydown", event => { if (event.key === "Escape") setDrawer(false); });
  addEventListener("resize", () => setDrawer(false));
  search.addEventListener("input", () => {
    if (search.value.trim()) {
      category = "All";
      activeCategory.textContent = language === "ar" ? "جميع التصنيفات" : "All products";
      filters.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item.dataset.category === "All"));
    }
    visible = 60;
    render();
  });
  loadMore.addEventListener("click", () => { visible += 60; render(); });
  let feedLoading = false;
  grid.addEventListener("scroll", () => {
    if (innerWidth > 620 || feedLoading || grid.scrollTop + grid.clientHeight < grid.scrollHeight - 900) return;
    const total = filteredProducts().length;
    if (visible >= total) return;
    feedLoading = true; visible += 60; render(true); requestAnimationFrame(() => { feedLoading = false; });
  }, { passive: true });
  document.addEventListener("click", event => { const button = event.target.closest("[data-add]"); if (!button) return; const product = products.find(item => item.id === button.dataset.add); if (!product) return; ESHBELIA_RFQ.add(product); button.textContent = "Added ✓"; button.classList.add("added"); setTimeout(() => { button.textContent = "Add to basket"; button.classList.remove("added"); }, 1400); });
  grid.addEventListener("click", event => { const link = event.target.closest("[data-view]"); if (!link) return; event.preventDefault(); const product = products.find(item => item.id === link.dataset.view); if (product) openProduct(product); });
  dialogClose.addEventListener("click", () => productDialog.close());
  productDialog.addEventListener("click", event => { if (event.target === productDialog) productDialog.close(); });
  dialogPrev.addEventListener("click", () => moveProduct(-1));
  dialogNext.addEventListener("click", () => moveProduct(1));
  dialogImageButton.addEventListener("click", () => {
    if (dragMoved) { dragMoved = false; return; }
    setZoom(imageZoom > 1 ? 1 : 2);
  });
  dialogImageButton.addEventListener("pointerdown", event => {
    imagePointers.set(event.pointerId, {x:event.clientX,y:event.clientY});
    swipeStart = {x:event.clientX,y:event.clientY};
    dialogImageButton.setPointerCapture(event.pointerId);
    if (imagePointers.size === 2) { const [a,b] = [...imagePointers.values()]; pinchDistance = Math.hypot(a.x-b.x,a.y-b.y); dragActive = false; return; }
    if (imageZoom === 1) { dragMoved = false; return; }
    dragActive = true; dragMoved = false; dragStartX = event.clientX; dragStartY = event.clientY; dragStartLeft = dialogImageButton.scrollLeft; dragStartTop = dialogImageButton.scrollTop;
    dialogImageButton.classList.add("dragging"); dialogImageButton.setPointerCapture(event.pointerId); event.preventDefault();
  });
  dialogImageButton.addEventListener("pointermove", event => {
    if(!imagePointers.has(event.pointerId)) return;
    imagePointers.set(event.pointerId, {x:event.clientX,y:event.clientY});
    if(imagePointers.size === 2) { const [a,b] = [...imagePointers.values()]; const distance = Math.hypot(a.x-b.x,a.y-b.y); if(pinchDistance) setZoom(imageZoom * distance/pinchDistance); pinchDistance = distance; dragMoved = true; swipeStart = null; return; }
    if (!dragActive) return;
    const dx = event.clientX - dragStartX, dy = event.clientY - dragStartY;
    if (Math.abs(dx) + Math.abs(dy) > 5) dragMoved = true;
    dialogImageButton.scrollLeft = dragStartLeft - dx; dialogImageButton.scrollTop = dragStartTop - dy;
  });
  const stopImageDrag = event => {
    if(event.type === 'pointerup' && imageZoom === 1 && swipeStart && imagePointers.size === 1) {
      const dy = event.clientY - swipeStart.y, dx = event.clientX - swipeStart.x;
      if(Math.abs(dy) > 70 && Math.abs(dy) > Math.abs(dx)*1.3) {moveProduct(dy < 0 ? 1 : -1); dragMoved = true;}
    }
    imagePointers.delete(event.pointerId); pinchDistance = 0; swipeStart = null; dragActive = false;
    dialogImageButton.classList.remove('dragging'); if(dialogImageButton.hasPointerCapture(event.pointerId)) dialogImageButton.releasePointerCapture(event.pointerId);
  };
  // One product per wheel/trackpad gesture, including its momentum tail.
  // Technical details retain their own native scrolling; enlarged images pan.
  let wheelTotal = 0, wheelLast = 0, wheelHandled = false;
  dialogImageButton.addEventListener('wheel', event => {
    if (event.ctrlKey) return; // Preserve the browser's accessibility zoom gesture.
    event.preventDefault();
    if (imageZoom > 1) {
      dialogImageButton.scrollLeft += event.deltaX;
      dialogImageButton.scrollTop += event.deltaY;
      wheelTotal = 0; wheelHandled = false; wheelLast = performance.now();
      return;
    }
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    const now = performance.now();
    if (now - wheelLast > 220) { wheelTotal = 0; wheelHandled = false; }
    wheelLast = now;
    if (wheelHandled) return;
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? dialogImageButton.clientHeight : 1);
    if (Math.sign(delta) !== Math.sign(wheelTotal)) wheelTotal = 0;
    wheelTotal += delta;
    if (Math.abs(wheelTotal) >= 40) { wheelHandled = true; moveProduct(wheelTotal > 0 ? 1 : -1); }
  }, {passive:false});
  dialogImageButton.addEventListener("pointerup", stopImageDrag); dialogImageButton.addEventListener("pointercancel", stopImageDrag); dialogImage.addEventListener("dragstart", event => event.preventDefault());
  document.addEventListener("keydown", event => { if (!productDialog.open) return; if (event.key === "ArrowLeft") { event.preventDefault(); moveProduct(language === "ar" ? 1 : -1); } if (event.key === "ArrowRight") { event.preventDefault(); moveProduct(language === "ar" ? -1 : 1); } });
  productDialog.addEventListener("close", () => { productDialog.classList.remove('image-only'); imagePointers.clear(); dialogImage.classList.remove("enlarged"); dialogImageButton.classList.remove("dragging"); dragActive = false; history.replaceState(null, "", "products.html"); });
  const requestedProduct = new URLSearchParams(location.search).get("product");
  // A deep link opens its product without narrowing subsequent browsing to one item.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting) && !loadMore.hidden) { visible += 60; render(); } }, { rootMargin: "700px 0px" });
    observer.observe(loadMore);
  }
  if (language === "ar") {
    categoryToggle.querySelector("span").textContent = "المنتجات";
    categoryToggle.querySelector("b").textContent = "جميع التصنيفات";
    filters.querySelector(".category-drawer-head strong").textContent = "تصنيفات المنتجات";
    categoryClose.setAttribute("aria-label", "إغلاق التصنيفات");
    categoryRailPrev.textContent = "السابق";
    categoryRailNext.textContent = "التالي";
    categoryRailPrev.setAttribute("aria-label", "تمرير تصنيفات المنتجات إلى اليمين");
    categoryRailNext.setAttribute("aria-label", "تمرير تصنيفات المنتجات إلى اليسار");
    search.placeholder = "ابحث باسم المنتج أو رقم ESHBELIA أو المواصفات";
  }
  setDrawer(false);
  render();
  requestAnimationFrame(updateCategoryRailControls);
  if (requestedProduct) requestAnimationFrame(() => { const product = products.find(item => item.id === requestedProduct); if (product) openProduct(product); });
})();
