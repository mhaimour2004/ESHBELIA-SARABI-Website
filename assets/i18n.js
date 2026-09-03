(() => {
  // Translate presentation text only. Product IDs, URLs, source records and technical
  // values remain untouched, so filtering, enquiries and specifications keep their identity.
  const arabic = document.documentElement.lang === 'ar';
  const pairs = {
    'Home':'الرئيسية', 'About':'عن الشركة', 'About Us':'عن الشركة', 'Solutions':'الحلول', 'Services':'الخدمات',
    'Products':'المنتجات', 'Projects':'المشاريع', 'Manufacturers':'المصنّعون', 'Contact':'تواصل معنا', 'Contact Us':'تواصل معنا',
    'Menu':'القائمة', 'Main navigation':'القائمة الرئيسية', 'Product Catalogue':'كتالوج المنتجات', 'Basket':'السلة',
    'Chandeliers':'الثريات', 'Cables & Wires':'الكوابل والأسلاك', 'Lighting Catalogs':'كتالوجات الإنارة',
    'Lighting & Cable Solutions':'حلول الإنارة والكوابل', 'LIGHTING & CABLE SOLUTIONS':'حلول الإنارة والكوابل',
    'Sharjah • Dubai, United Arab Emirates':'الشارقة • دبي، الإمارات العربية المتحدة',
    'Sharjah • Dubai, UAE':'الشارقة • دبي، الإمارات', 'UAE • China • Oman • Jordan':'الإمارات • الصين • عُمان • الأردن',
    'United Arab Emirates • China • Oman • Jordan':'الإمارات العربية المتحدة • الصين • عُمان • الأردن',
    'United Arab Emirates':'الإمارات العربية المتحدة', 'Jordan':'الأردن', 'Oman':'عُمان', 'Other':'أخرى',
    '© 2026 ESHBELIA SARABI. All rights reserved.':'© 2026 ESHBELIA SARABI. جميع الحقوق محفوظة.',
    'Illuminating Spaces, Enhancing Lives':'نضيء المساحات، ونرتقي بالحياة',
    'Lighting & cable solutions':'حلول الإنارة والكوابل', 'built around the projects —':'مصممة لمتطلبات المشاريع —',
    'Design development, supply and installation.':'تطوير التصاميم والتوريد والتركيب.',
    'Request a Quote':'اطلب عرض سعر', 'Explore Products':'استكشف المنتجات', 'Explore ESHBELIA SARABI':'استكشف إشبيلية سرابي',
    'Products and project experience':'المنتجات والخبرة في المشاريع',
    'Start with the product collection or see how our team supports landmark projects across the region.':'استعرض مجموعة المنتجات أو تعرّف على دعم فريقنا للمشاريع المميزة في المنطقة.',
    'Dedicated Collection':'مجموعة متخصصة', 'Regional Experience':'خبرة إقليمية',
    'Browse signature designs for mosques, palaces, hospitality and landmark interiors.':'استعرض تصاميم مميزة للمساجد والقصور والضيافة والمساحات الداخلية البارزة.',
    'Explore our searchable project reference register across multiple sectors.':'استكشف سجل مشاريعنا القابل للبحث في مختلف القطاعات.',
    'Corporate Overview':'نبذة عن الشركة', 'Product Index':'فهرس المنتجات', 'Browse the verified product catalogue →':'استعرض كتالوج المنتجات الموثقة ←',
    'Official Format • Edition 01':'القالب الرسمي • الإصدار 01', 'Signature chandeliers':'الثريات المميزة',
    '36 verified catalogue models':'36 موديلاً موثقاً في الكتالوج', 'View catalogue sheet':'عرض صفحة الكتالوج',
    'Project Experience':'خبرة المشاريع', 'Enquire on WhatsApp':'استفسر عبر واتساب',
    'RFQ':'طلب عرض سعر', 'Technical Review':'المراجعة الفنية', 'Product Selection':'اختيار المنتجات',
    'Commercial Proposal':'العرض التجاري', 'Technical Submittal':'التقديم الفني', 'Approval':'الاعتماد', 'Procurement':'المشتريات',
    'Delivery':'التسليم', 'Warranty Coordination':'تنسيق الضمان',
    'Corporate Profile':'التعريف بالشركة', 'Built around project requirements':'حلول مبنية على متطلبات المشروع',
    'ESHBELIA SARABI is a UAE-based lighting, cable and electrical-solutions company supporting project teams from RFQ and selection through technical coordination and delivery.':'إشبيلية سرابي شركة مقرها الإمارات لحلول الإنارة والكوابل والمنتجات الكهربائية، تدعم فرق المشاريع من طلب العرض واختيار المنتجات إلى التنسيق الفني والتسليم.',
    'Since 1998':'منذ عام 1998', 'Lighting and cable solutions with practical project support':'حلول إنارة وكوابل مع دعم عملي للمشاريع',
    'We work with developers, consultants, contractors, MEP contractors and procurement teams. Our role is to connect design intent and technical requirements with suitable products, documentation, commercial proposals and coordinated supply.':'نعمل مع المطورين والاستشاريين والمقاولين ومقاولي الأعمال الكهروميكانيكية وفرق المشتريات. نربط أهداف التصميم والمتطلبات الفنية بالمنتجات المناسبة والوثائق والعروض التجارية والتوريد المنسّق.',
    'Our portfolio covers architectural, decorative, outdoor, industrial and emergency lighting, signature chandeliers, power cables and building wires.':'تشمل مجموعتنا الإنارة المعمارية والديكورية والخارجية والصناعية والطوارئ، والثريات المميزة وكوابل الطاقة وأسلاك المباني.',
    'Download Company Profile':'تحميل الملف التعريفي للشركة', 'Download Company Profile ↓':'تحميل الملف التعريفي للشركة ↓',
    'Regional reach':'نطاق عملنا الإقليمي', 'Project workflow':'مراحل المشروع',
    'RFQ → Technical review → Selection → Proposal → Submittal → Approval → Procurement → Delivery':'طلب العرض ← المراجعة الفنية ← الاختيار ← العرض ← التقديم ← الاعتماد ← المشتريات ← التسليم',
    'How we add value':'كيف نضيف قيمة', 'Technical coordination':'التنسيق الفني',
    'BOQ, drawing and specification review with project-oriented product selection.':'مراجعة جداول الكميات والمخططات والمواصفات واختيار المنتجات المناسبة للمشروع.',
    'Value engineering':'الهندسة القيمية', 'Alternatives coordinated around performance, design intent, programme and budget.':'بدائل تراعي الأداء وأهداف التصميم والبرنامج الزمني والميزانية.',
    'Supply follow-up':'متابعة التوريد', 'Commercial, procurement, delivery and warranty coordination across the project lifecycle.':'تنسيق العروض والمشتريات والتسليم والضمان خلال مراحل المشروع.',
    'Services & Solutions':'الخدمات والحلول', 'From specification to delivery':'من المواصفات إلى التسليم',
    'Project-focused support for lighting, chandeliers, cables and electrical requirements.':'دعم متخصص لمتطلبات المشاريع من الإنارة والثريات والكوابل والمنتجات الكهربائية.',
    'Product selection':'اختيار المنتجات', 'Suitable product families selected around application, drawings, specifications and intended performance.':'اختيار مجموعات المنتجات المناسبة للتطبيق والمخططات والمواصفات والأداء المطلوب.',
    'Tender support':'دعم العطاءات', 'BOQ review, tender clarifications, commercial proposals and structured alternatives.':'مراجعة جداول الكميات وإيضاحات العطاءات والعروض التجارية والبدائل المنظّمة.',
    'Practical alternatives evaluated against design intent, budget and programme.':'تقييم البدائل العملية وفق أهداف التصميم والميزانية والبرنامج الزمني.',
    'Technical submittals':'التقديمات الفنية', 'Available datasheets and supported compliance information coordinated for review.':'تنسيق صفحات البيانات المتاحة ومعلومات المطابقة المدعومة للمراجعة.',
    'Procurement coordination':'تنسيق المشتريات', 'Quantities, lead times, sourcing and delivery follow-up organized per project.':'تنظيم الكميات ومدد التوريد والمصادر ومتابعة التسليم لكل مشروع.',
    'After-sales coordination':'تنسيق خدمات ما بعد البيع', 'Warranty and post-delivery matters routed through the project team.':'متابعة الضمان وشؤون ما بعد التسليم من خلال فريق المشروع.',
    'Product scope':'نطاق المنتجات', 'Explore the classified collection':'استكشف المنتجات المصنّفة',
    'Browse the controlled product register for switches, downlights, inground, wall, flood and street-lighting families, or view the ten broader website classifications.':'استعرض سجل منتجات المفاتيح والداون لايت والإنارة الأرضية والجدارية والكشافات وإنارة الشوارع، أو تصفّح التصنيفات العشرة الرئيسية للموقع.',
    'View products':'عرض المنتجات', 'All classifications':'جميع التصنيفات', 'Start an RFQ':'ابدأ طلب عرض سعر',
    'Send your BOQ, drawings, specification, required quantities and delivery location for review.':'أرسل جدول الكميات والمخططات والمواصفات والكميات المطلوبة وموقع التسليم للمراجعة.',
    'Contact our team →':'تواصل مع فريقنا ←', 'Contact our team':'تواصل مع فريقنا', 'Request for Quotation':'طلب عرض سعر',
    'Share your application, BOQ, drawings, specification, quantities and delivery location for a project-focused response.':'شاركنا التطبيق وجدول الكميات والمخططات والمواصفات والكميات وموقع التسليم للحصول على رد مناسب لمشروعك.',
    'WhatsApp':'واتساب', 'Email':'البريد الإلكتروني', 'Name':'الاسم', 'Name*':'الاسم*', 'Company':'الشركة',
    'Phone / WhatsApp':'الهاتف / واتساب', 'Phone or WhatsApp':'الهاتف أو واتساب',
    'Describe your RFQ or project requirement':'اكتب طلب عرض السعر أو متطلبات المشروع', 'RFQ or project requirement':'طلب عرض السعر أو متطلبات المشروع',
    'Please describe your RFQ / project requirement':'يرجى وصف طلب عرض السعر / متطلبات المشروع',
    'Prepare Email Enquiry':'تحضير الاستفسار بالبريد الإلكتروني',
    'The form validates your details and prepares an email in your device mail application. No information is stored by this static website.':'يتحقق النموذج من بياناتك ويُعد رسالة في تطبيق البريد على جهازك. لا يخزّن هذا الموقع بياناتك.',
    'This form prepares an email in your device mail application. No information is stored on the website.':'يُعد هذا النموذج رسالة في تطبيق البريد على جهازك. لا تُخزّن معلومات على الموقع.',
    'International sourcing network':'شبكة توريد دولية', 'Project-specific manufacturer selection for lighting, custom chandeliers, cables and coordinated electrical solutions.':'اختيار المصنّعين حسب المشروع للإنارة والثريات المخصصة والكوابل والحلول الكهربائية المتكاملة.',
    'Qualified to the project':'مناسب لمتطلبات المشروع', 'Brands and factories selected around the specification':'اختيار العلامات والمصانع وفق المواصفات',
    'ESHBELIA SARABI coordinates with international manufacturers and specialist workshops according to design intent, consultant requirements, technical compliance, quantities and delivery programme.':'تنسّق إشبيلية سرابي مع المصنّعين الدوليين والورش المتخصصة وفق أهداف التصميم ومتطلبات الاستشاري والمطابقة الفنية والكميات وبرنامج التسليم.',
    'Manufacturer selection is confirmed for each enquiry. Brand availability, approvals and country of origin remain subject to the project specification and the final commercial proposal.':'يُؤكّد اختيار المصنّع لكل استفسار. ويخضع توفر العلامات والاعتمادات وبلد المنشأ لمواصفات المشروع والعرض التجاري النهائي.',
    'Discuss your manufacturer list':'ناقش قائمة المصنّعين المطلوبة', 'Supply capabilities':'قدرات التوريد', 'Manufacturer categories':'تصنيفات المصنّعين',
    'Architectural lighting':'الإنارة المعمارية', 'Interior, exterior, façade, landscape and specialist lighting partners.':'شركاء للإنارة الداخلية والخارجية والواجهات والحدائق والتطبيقات المتخصصة.',
    'Custom chandeliers':'الثريات المخصصة', 'Specialist workshops for mosques, palaces, hospitality and landmark interiors.':'ورش متخصصة للمساجد والقصور والضيافة والمساحات الداخلية المميزة.',
    'Cables & electrical':'الكوابل والمنتجات الكهربائية', 'Power, control, fire-performance cable and coordinated electrical product manufacturers.':'مصنّعو كوابل الطاقة والتحكم والكوابل ذات خصائص الأداء عند الحريق والمنتجات الكهربائية المتكاملة.',
    'Reference register':'سجل المشاريع المرجعية', 'Historical project references across mosques, hospitality, residential, education, infrastructure, industrial and commercial applications.':'مراجع مشاريع سابقة تشمل المساجد والضيافة والمساكن والتعليم والبنية التحتية والتطبيقات الصناعية والتجارية.',
    'Discuss your project':'ناقش مشروعك', 'Search project, location or sector':'ابحث عن مشروع أو موقع أو قطاع', 'No matching projects.':'لا توجد مشاريع مطابقة.',
    'All':'الكل', 'Mosque':'مسجد', 'Healthcare':'الرعاية الصحية', 'Tower / Residential':'أبراج / سكني', 'Hospitality':'الضيافة',
    'Residential Villas':'فلل سكنية', 'Airport / Retail':'مطار / تجزئة', 'Infrastructure / Road Lighting':'بنية تحتية / إنارة طرق',
    'Tower / Mixed Use':'أبراج / متعدد الاستخدامات', 'Commercial / Other':'تجاري / أخرى', 'Private Project':'مشروع خاص',
    'Residential Development':'تطوير سكني', 'Palace / Private':'قصر / خاص', 'Education':'التعليم', 'Mixed Use / Retail':'متعدد الاستخدامات / تجزئة',
    'Building / Mixed Use':'مبنى / متعدد الاستخدامات', 'Industrial':'صناعي', 'Restaurant / F&B':'مطاعم / أغذية ومشروبات',
    'Products for every project':'منتجات لكل مشروع',
    'Browse lighting, electrical products, chandeliers, cables and wires. Add products to your basket, then send the complete list to our team.':'تصفّح الإنارة والمنتجات الكهربائية والثريات والكوابل والأسلاك. أضف المنتجات إلى السلة ثم أرسل القائمة كاملة إلى فريقنا.',
    'One catalogue. One basket.':'كتالوج واحد. سلة واحدة.',
    'Published prices appear only when supported by an approved current price list. Chandeliers, cables, wires and project products are priced according to specifications and quantities.':'تُعرض الأسعار فقط عند توفر قائمة أسعار سارية ومعتمدة. تُسعّر الثريات والكوابل والأسلاك ومنتجات المشاريع وفق المواصفات والكميات.',
    'verified catalogue records available for selection':'سجلات منتجات موثقة متاحة للاختيار', 'Product publications':'إصدارات المنتجات',
    'SEVILLA product sheets are undergoing technical-content and image-quality review before release.':'تخضع صفحات منتجات SEVILLA لمراجعة المحتوى الفني وجودة الصور قبل الإصدار.',
    'SEVILLA A4 Product Sheets — Batch 01':'صفحات منتجات SEVILLA بحجم A4 — الدفعة 01',
    '32 product pages • A4 portrait • Revision in progress':'32 صفحة منتج • A4 عمودي • المراجعة قيد التنفيذ',
    'Download temporarily unavailable while technical details are corrected.':'التنزيل غير متاح مؤقتاً لحين تصحيح التفاصيل الفنية.',
    'Individual legacy datasheets are being revalidated before they are presented as approved Lighting Catalogs.':'تُراجع صفحات البيانات السابقة قبل تقديمها ككتالوجات إنارة معتمدة.',
    'Categories':'التصنيفات', 'All products':'جميع المنتجات', 'Product categories':'تصنيفات المنتجات', 'Load more':'عرض المزيد',
    'Search product, ESHBELIA ID or specification':'ابحث بالمنتج أو كود ESHBELIA أو المواصفات', 'Search products':'البحث عن المنتجات',
    'Product category filters':'تصفية تصنيفات المنتجات', 'Details':'التفاصيل', 'Request price':'اطلب السعر',
    'Published product price':'السعر المنشور للمنتج', 'Price list pending verification':'قائمة الأسعار قيد التحقق',
    'Quoted according to quantity and project':'التسعير حسب الكمية والمشروع', 'Add to basket':'أضف إلى السلة', 'Added ✓':'تمت الإضافة ✓',
    'Order on WhatsApp':'اطلب عبر واتساب', 'Datasheet ↓':'صفحة البيانات ↓', 'Available on request':'متوفر عند الطلب',
    'No matching products':'لا توجد منتجات مطابقة', 'Try another category or search term.':'جرّب تصنيفاً آخر أو كلمة بحث مختلفة.',
    'Offered by ESHBELIA SARABI':'مقدم من إشبيلية سرابي', 'Previous':'السابق', 'Next':'التالي',
    'Zoom in':'تكبير', 'Zoom out':'تصغير', 'Fit':'ملاءمة', 'Full':'ملء العرض', 'Toggle full image view':'تبديل عرض الصورة الكامل',
    'Close product view':'إغلاق عرض المنتج', 'Enlarge product image':'تكبير صورة المنتج', 'Close catalogue sheet':'إغلاق صفحة الكتالوج',
    'Available options':'الخيارات المتاحة', 'Material':'الخامة', 'Finish / colour':'التشطيب / اللون', 'Colour temperature':'درجة حرارة اللون',
    'CRI':'مؤشر تجسيد اللون (CRI)', 'Luminous efficacy':'الفعالية الضوئية', 'IP rating':'درجة الحماية (IP)', 'Voltage':'الجهد',
    'Power factor':'معامل القدرة', 'Function':'الوظيفة', 'Finishes':'التشطيبات', 'Family':'مجموعة المنتج', 'Rating':'التصنيف',
    'Size':'المقاس', 'Power':'القدرة', 'Output':'الخرج', 'Dimmable':'قابلية التعتيم', 'Housing':'الهيكل', 'CCT':'درجة حرارة اللون (CCT)',
    'Cutout':'فتحة التركيب', 'IP':'درجة الحماية (IP)', 'Beam':'زاوية الشعاع', 'PowerOptions':'خيارات القدرة', 'Positioning':'موضع التركيب',
    'Status':'الحالة', 'Finish':'التشطيب', 'Dimensions':'الأبعاد', 'Light source':'مصدر الضوء',
    'Floodlights':'الكشافات', 'Solar Floodlights':'كشافات شمسية', 'Street Lights':'إنارة الشوارع', 'Integrated Solar Street Lights':'إنارة شوارع شمسية مدمجة',
    'Solar Street Lights':'إنارة شوارع شمسية', 'Bulkhead Lights':'إنارة بولكهيد', 'COB Downlights':'داون لايت COB',
    'Waterproof Diffusers':'ناشرات ضوء مقاومة للماء', 'Clear Diffusers':'ناشرات ضوء شفافة', 'Frosted Diffusers':'ناشرات ضوء معتمة',
    'Solar Lawn Lights':'إنارة مسطحات خضراء شمسية', 'Bollard Lights':'إنارة بولارد', 'Solar Bollard Lights':'إنارة بولارد شمسية',
    'Solar Garden Lights':'إنارة حدائق شمسية', 'Garden Spike Lights':'كشافات حدائق بوَتد', 'High Bay Lights':'إنارة هاي باي', 'LED Bulbs':'لمبات LED',
    'Linear Wall Lights':'إنارة جدارية خطية', 'Outdoor Wall Lights':'إنارة جدارية خارجية', 'Panel Lights':'بانلات إنارة',
    'Portable Solar Lights':'مصابيح شمسية محمولة', 'Staircase Lights':'إنارة الدرج', 'Solar Wall Lights':'إنارة جدارية شمسية',
    'Surface Panel Lights':'بانلات إنارة سطحية', 'Magnetic Track Lights':'إنارة مسارات مغناطيسية', 'Track Lights':'إنارة مسارات',
    'Underground Lights':'إنارة أرضية غاطسة', 'Fan Lights':'مراوح بإضاءة', 'LED Strip Lights':'شرائط LED', 'Ceiling Lights':'إنارة السقف',
    'Office Lights':'إنارة المكاتب', 'Bedside Chandeliers':'ثريات بجانب السرير', 'Wiring Accessories':'ملحقات التمديدات الكهربائية',
    'Downlights & Spotlights':'داون لايت وسبوت لايت', 'Inground Lighting':'إنارة أرضية غاطسة', 'Flood Lighting':'إنارة الكشافات',
    'Street Lighting':'إنارة الشوارع', 'Wall Lighting':'الإنارة الجدارية',
    'Economical LED Flood Light':'كشاف LED اقتصادي', 'LED Street Light':'مصباح شارع LED', 'Type A':'النوع A', 'Type B':'النوع B', 'Type C':'النوع C', 'Type D':'النوع D',
    'Modular Switch and Socket Collection':'مجموعة مفاتيح ومقابس معيارية', 'Multi-Wattage Recessed Spotlight':'سبوت لايت غاطس متعدد القدرات',
    'Anti-Glare Recessed Spotlight':'سبوت لايت غاطس مضاد للوهج', 'Compact Recessed Spotlight':'سبوت لايت غاطس صغير',
    'IP54 Water-Resistant Spotlight':'سبوت لايت مقاوم للماء IP54', 'Curved-Trim Recessed Spotlight':'سبوت لايت غاطس بحافة منحنية',
    '55 mm Cut-Out Spotlight':'سبوت لايت بفتحة تركيب 55 mm', 'IP67 Inground Light Family':'مجموعة إنارة أرضية IP67',
    'IP67 Inground Light':'مصباح أرضي IP67', 'IP66 Linear Wall Washer':'إنارة خطية لغسل الجدران IP66',
    'LED Flood Light Family':'مجموعة كشافات LED', 'LED Street Light Family':'مجموعة إنارة شوارع LED',
    'Mosque & Grand Dome':'المساجد والقباب الكبرى', 'Palace & VIP':'القصور وكبار الشخصيات', 'Architectural':'معمارية',
    'Your basket':'سلتك', 'Review your products':'راجع منتجاتك', 'Basket & Quotation':'السلة وطلب عرض السعر',
    'Check products and quantities, then send your complete quotation request to our team through WhatsApp.':'راجع المنتجات والكميات ثم أرسل طلب عرض السعر كاملاً إلى فريقنا عبر واتساب.',
    'Basket items':'منتجات السلة', 'Quote details':'تفاصيل عرض السعر', 'Send your request':'أرسل طلبك', 'Country*':'الدولة*', 'Choose country':'اختر الدولة',
    'Preferred quotation currency':'عملة عرض السعر المطلوبة', 'Project / notes':'المشروع / ملاحظات',
    'Project name, delivery location, required date or specifications':'اسم المشروع أو موقع التسليم أو التاريخ المطلوب أو المواصفات',
    'Send by WhatsApp':'أرسل عبر واتساب', 'Send order by WhatsApp':'أرسل الطلب عبر واتساب', 'Send to Procurement WhatsApp':'أرسل إلى واتساب المشتريات',
    'No payment is collected on this website. Prices and availability are confirmed in the formal quotation.':'لا تُحصّل مدفوعات عبر هذا الموقع. تُؤكّد الأسعار والتوفر في عرض السعر الرسمي.',
    'Qty':'الكمية', 'Remove':'إزالة', 'Your basket is empty':'سلتك فارغة',
    'Add products, chandeliers, cables or wires before sending your request.':'أضف المنتجات أو الثريات أو الكوابل أو الأسلاك قبل إرسال طلبك.', 'Browse products':'تصفح المنتجات'
  };
  Object.assign(pairs, {
    'Product Classification':'تصنيف المنتجات', 'Chandelier Collection':'مجموعة الثريات', 'All Products':'جميع المنتجات',
    'All Classifications':'جميع التصنيفات', '← All classifications':'جميع التصنيفات →', 'Explore Scope':'استكشف النطاق',
    'Request a Quotation':'اطلب عرض سعر', 'Project-focused selection':'اختيار مناسب للمشروع', 'Product Range':'نطاق المنتجات',
    'How we support your project':'كيف ندعم مشروعك',
    'Share the BOQ, drawings, specification or application requirements. Our team can coordinate selection, alternatives, technical information and commercial follow-up around the project.':'شاركنا جدول الكميات والمخططات والمواصفات أو متطلبات التطبيق. ينسّق فريقنا الاختيار والبدائل والمعلومات الفنية والمتابعة التجارية حسب المشروع.',
    'Discuss this classification with our team':'ناقش هذا التصنيف مع فريقنا', 'Discuss these products with our team':'ناقش هذه المنتجات مع فريقنا',
    'Send the application, specification, BOQ or required quantities by WhatsApp.':'أرسل التطبيق والمواصفات وجدول الكميات أو الكميات المطلوبة عبر واتساب.',
    'Send the model code, project drawings or required quantities by WhatsApp.':'أرسل كود الموديل أو مخططات المشروع أو الكميات المطلوبة عبر واتساب.',
    'A coordinated product range for project applications':'مجموعة منتجات متكاملة لتطبيقات المشاريع',
    'This classification is supported through product selection, technical review, value engineering, submittal coordination and commercial follow-up according to the project requirement.':'يشمل دعم هذا التصنيف اختيار المنتجات والمراجعة الفنية والهندسة القيمية وتنسيق التقديمات والمتابعة التجارية وفق متطلبات المشروع.',
    'Classification scope':'نطاق التصنيف', 'Application review':'مراجعة التطبيق', 'Selection aligned to the intended space and operating environment.':'اختيار يناسب المساحة المستهدفة وبيئة التشغيل.',
    'Suitable families and alternatives coordinated around the brief.':'تنسيق مجموعات المنتجات والبدائل المناسبة للمتطلبات.', 'Technical support':'الدعم الفني',
    'Available technical information prepared for project review.':'إعداد المعلومات الفنية المتاحة لمراجعة المشروع.', 'Commercial follow-up':'المتابعة التجارية',
    'RFQ, quantity and delivery requirements coordinated with the team.':'تنسيق طلب العرض والكميات ومتطلبات التسليم مع الفريق.',
    'Project selection':'اختيار المنتجات للمشروع', 'Product choices are aligned to BOQ, drawings and specifications.':'مواءمة اختيار المنتجات مع جداول الكميات والمخططات والمواصفات.',
    'Options & finishes':'الخيارات والتشطيبات', 'Available sizes, finishes and performance options vary by product family.':'تختلف المقاسات والتشطيبات وخيارات الأداء المتاحة حسب مجموعة المنتج.',
    'Submittal support':'دعم التقديمات الفنية', 'Technical documentation can be coordinated for selected products.':'يمكن تنسيق الوثائق الفنية للمنتجات المختارة.',
    'Supply coordination':'تنسيق التوريد', 'Commercial and delivery follow-up is handled per project.':'تُنفّذ المتابعة التجارية ومتابعة التسليم لكل مشروع.',
    'Signature and custom chandelier solutions':'حلول الثريات المميزة والمخصصة',
    'Explore architectural chandeliers for mosques, palaces, villas, hospitality and landmark interiors, supported by design, dimensional and project coordination.':'استكشف الثريات المعمارية للمساجد والقصور والفلل والضيافة والمساحات الداخلية المميزة، مع تنسيق التصميم والأبعاد ومتطلبات المشروع.',
    'Chandelier applications':'تطبيقات الثريات', 'Mosques':'المساجد', 'Palaces & Villas':'القصور والفلل', 'Custom Design':'تصميم مخصص',
    'Grand domes, prayer halls and mihrab zones.':'القباب الكبرى وقاعات الصلاة ومناطق المحراب.', 'Statement pieces for majlis, halls and private interiors.':'قطع مميزة للمجالس والقاعات والمساحات الداخلية الخاصة.',
    'Lobby, ballroom, atrium and reception applications.':'تطبيقات الردهات وقاعات الاحتفالات والأتريوم والاستقبال.', 'Project-specific dimensions, finishes and detailing.':'أبعاد وتشطيبات وتفاصيل مخصصة للمشروع.',
    'Signature collection':'المجموعة المميزة', 'Browse the curated Top 20 chandelier products below.':'استعرض أدناه المجموعة المختارة من أفضل 20 منتجاً من الثريات.',
    'Dimensional coordination':'تنسيق الأبعاد', 'Diameter, height and suspension are coordinated around the space.':'تنسيق القطر والارتفاع والتعليق بما يناسب المساحة.',
    'Finish selection':'اختيار التشطيب', 'Gold, crystal, etched glass and bespoke finish directions.':'خيارات الذهب والكريستال والزجاج المحفور والتشطيبات المخصصة.',
    'RFQ support':'دعم طلب عرض السعر', 'Share drawings or dimensions for project-specific review.':'شارك المخططات أو الأبعاد لمراجعة متطلبات المشروع.',
    'Signature chandelier products':'منتجات الثريات المميزة', 'Verified models presented only in the official ESHBELIA SARABI black-and-gold catalogue format.':'موديلات موثقة معروضة بالقالب الرسمي الأسود والذهبي لكتالوج إشبيلية سرابي.',
    'View image':'عرض الصورة', 'Close image':'إغلاق الصورة', 'Filter chandelier products':'تصفية منتجات الثريات', 'Filter chandelier collection':'تصفية مجموعة الثريات',
    'Power cable and wire solutions for project requirements':'حلول كوابل وأسلاك الطاقة لمتطلبات المشاريع',
    'ESHBELIA SARABI supports building, infrastructure, commercial and industrial requirements with coordinated cable and wire selection. Product proposals are aligned to the project specification, installation environment, conductor and insulation requirements, fire performance, quantities and delivery programme.':'تدعم إشبيلية سرابي احتياجات المباني والبنية التحتية والتطبيقات التجارية والصناعية باختيار منسّق للكوابل والأسلاك. تُعد مقترحات المنتجات وفق مواصفات المشروع وبيئة التركيب ومتطلبات الموصل والعزل والأداء عند الحريق والكميات وبرنامج التسليم.',
    'Power cable & wire range':'مجموعة كوابل وأسلاك الطاقة', 'LV Power Cables':'كوابل طاقة منخفضة الجهد',
    'Single-core and multi-core options for low-voltage power distribution.':'خيارات أحادية ومتعددة النوى لتوزيع الطاقة منخفضة الجهد.',
    'Building Wires':'أسلاك المباني', 'Wires for residential, commercial and general building installations.':'أسلاك للتركيبات السكنية والتجارية والمباني العامة.',
    'Armoured Cables':'كوابل مدرعة', 'Mechanical-protection options for demanding routes and installations.':'خيارات حماية ميكانيكية للمسارات والتركيبات ذات المتطلبات العالية.',
    'Unarmoured Cables':'كوابل غير مدرعة', 'Flexible project options for protected routes and suitable environments.':'خيارات مرنة للمشاريع في المسارات المحمية والبيئات المناسبة.',
    'Control Cables':'كوابل التحكم', 'Multi-core control and auxiliary circuit applications.':'تطبيقات التحكم والدوائر المساعدة متعددة النوى.',
    'Fire Performance':'الأداء عند الحريق', 'Fire-resistant, flame-retardant and LSZH options where specified.':'خيارات مقاومة للحريق ومثبطة للهب وLSZH عندما تنص عليها المواصفات.',
    'Conductor options':'خيارات الموصل', 'Copper or aluminium conductor options can be coordinated subject to the project specification.':'يمكن تنسيق خيارات الموصل النحاسي أو الألومنيوم وفق مواصفات المشروع.',
    'Insulation & sheath':'العزل والغلاف', 'PVC, XLPE and low-smoke zero-halogen constructions can be proposed where required.':'يمكن اقتراح تركيبات PVC وXLPE وقليلة الدخان والخالية من الهالوجين عند الحاجة.',
    'Voltage & cores':'الجهد والنوى', 'Selection is coordinated around voltage grade, number of cores, cross-sectional area and installation method.':'يُنسّق الاختيار وفق فئة الجهد وعدد النوى ومساحة المقطع وطريقة التركيب.',
    'Armour & protection':'التدريع والحماية', 'Armoured or unarmoured construction is selected to suit mechanical and routing requirements.':'يُختار التركيب المدرع أو غير المدرع حسب المتطلبات الميكانيكية والمسارات.',
    'Fire requirements':'متطلبات الحريق', 'Fire-resistant or flame-retardant performance is reviewed against the required submittal criteria.':'تُراجع خصائص مقاومة الحريق أو تثبيط اللهب وفق معايير التقديم المطلوبة.',
    'Project documentation':'وثائق المشروع', 'Datasheets, compliance information, commercial offers and delivery coordination are handled per RFQ.':'تُعالج صفحات البيانات ومعلومات المطابقة والعروض التجارية وتنسيق التسليم حسب كل طلب عرض سعر.',
    'Controlled Catalogue R01':'الكتالوج المنضبط R01', 'Registered products in this classification':'المنتجات المسجلة في هذا التصنيف',
    'Browse the complete product catalogue →':'تصفح كتالوج المنتجات الكامل ←', 'Location to be confirmed':'الموقع قيد التأكيد', 'As provided':'حسب المعلومات المقدمة',
    '1-Gang 2-Way Plate Switch':'مفتاح مفرد ثنائي الاتجاه', '2-Gang 2-Way Plate Switch':'مفتاح مزدوج ثنائي الاتجاه',
    '3-Gang 2-Way Plate Switch':'مفتاح ثلاثي ثنائي الاتجاه', '4-Gang 2-Way Plate Switch':'مفتاح رباعي ثنائي الاتجاه',
    'Doorbell Switch':'مفتاح جرس الباب', 'TV Socket':'مقبس تلفزيون', 'Satellite Socket':'مقبس قمر صناعي', 'CAT6 Computer Socket':'مقبس حاسوب CAT6',
    '6-Core Telephone Socket':'مقبس هاتف بستة أطراف', 'Double CAT6 Computer Socket':'مقبس حاسوب مزدوج CAT6', 'Telephone and CAT6 Combination Socket':'مقبس هاتف وحاسوب CAT6 مشترك',
    '13A Switched Socket with Neon':'مقبس بمفتاح ومؤشر نيون 13A', '13A Multi-Function Switched Socket':'مقبس متعدد الوظائف بمفتاح 13A',
    'Multi-Function Socket with USB and Type-C':'مقبس متعدد الوظائف مع USB وType-C', '15A Switched Socket with Neon':'مقبس بمفتاح ومؤشر نيون 15A',
    '20A Switch with Neon':'مفتاح بمؤشر نيون 20A', '45A Switch with Neon':'مفتاح بمؤشر نيون 45A', '3×3 Blank Plate':'غطاء فارغ 3×3',
    '500W Fan Speed Regulator':'منظّم سرعة مروحة 500W', '1000W Light Dimmer Switch':'مفتاح تعتيم إنارة 1000W', '25A Outlet':'مخرج كهربائي 25A', '45A Outlet':'مخرج كهربائي 45A',
    'Double 13A Switched Socket with Neon':'مقبس مزدوج بمفتاح ومؤشر نيون 13A', '3×6 Blank Plate':'غطاء فارغ 3×6',
    'Double Universal Switched Socket with Neon':'مقبس عالمي مزدوج بمفتاح ومؤشر نيون', 'Double Universal Socket with USB and Type-C':'مقبس عالمي مزدوج مع USB وType-C',
    '3×6 45A Switch with Neon':'مفتاح بمؤشر نيون 45A بمقاس 3×6', '45A Cooker and 13A Socket Unit':'وحدة مفتاح طباخ 45A ومقبس 13A'
  });
  // Reuse the existing approved bilingual classification descriptions.
  function addPairs(value) {
    if (!value || typeof value !== 'object') return;
    if (typeof value.en === 'string' && typeof value.ar === 'string') pairs[value.en] = value.ar;
    else Object.values(value).forEach(addPairs);
  }
  addPairs(window.ESHBELIA_CONTENT);
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  const dictionary = new Map(Object.entries(pairs).map(([en, ar]) => [normalize(en), ar]));
  function translate(value) {
    if (!arabic || !value) return value;
    const key = normalize(value);
    let result = dictionary.get(key);
    if (!result && /^\d+ products?$/.test(key)) result = `${key.split(' ')[0]} منتج`;
    // Only split explicit UI separators; never replace arbitrary substrings in codes/specs.
    if (!result && / (?:·|•|—|\||-) /.test(key)) result = key.split(/( (?:·|•|—|\||-) )/).map((part, i) => i % 2 ? part : translate(part)).join('');
    if (!result && /^View .+/.test(key)) result = `عرض ${translate(key.slice(5))}`;
    if (!result && /^Order .+ on WhatsApp$/.test(key)) result = `اطلب ${translate(key.slice(6, -12))} عبر واتساب`;
    return result && result !== key ? value.replace(key, result) : value;
  }
  window.ESHBELIA_I18N = {t:translate};
  if (!arabic) return;
  const skip = 'script,style,code,pre,textarea,dd,[data-no-translate],#langBtn';
  const attributes = ['placeholder','aria-label','title','alt'];
  function visit(root) {
    if (root.nodeType === 3) {
      if (!root.parentElement?.closest(skip)) { const next = translate(root.data); if (next !== root.data) root.data = next; }
      return;
    }
    if (root.nodeType !== 1 || root.closest(skip)) return;
    // The translated country label must not change its value in an enquiry.
    if (root.tagName === 'OPTION' && !root.hasAttribute('value')) root.setAttribute('value', root.textContent);
    for (const attr of attributes) {
      const value = root.getAttribute(attr); if (value) { const next = translate(value); if(next !== value) root.setAttribute(attr,next); }
    }
    for (const child of root.childNodes) visit(child);
  }
  const observer = new MutationObserver(records => {
    observer.disconnect();
    for (const record of records) {
      if (record.type === 'childList') record.addedNodes.forEach(visit);
      else visit(record.target);
    }
    observe();
  });
  function observe() { observer.observe(document.body, {subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes}); }
  visit(document.body);
  document.title = translate(document.title);
  observe();
})();
