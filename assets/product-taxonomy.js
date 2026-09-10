(() => {
  // Navigation divisions follow the ESHBELIA 5M master taxonomy (2026-09-09).
  // Existing categories remain intact. No unsupported leaf-level engineering
  // classification or external standard code is inferred from a product name.
  const divisions = [
    {id:'IND',en:'Indoor Architectural',ar:'الإنارة الداخلية المعمارية',categories:['Ceiling Lights','Downlights & Spotlights','COB Downlights','Downlights','Recessed Downlights','Recessed Trimless Spots','Surface-Mounted Downlights','Recessed Modular Luminaires','Surface-Mounted Modular Luminaires','Magnetic Track Lights','Track Lights','Modern Electric Track','Linear Lighting','Panel Lights','Surface Panel Lights','Office Lights','Surface Lighting','LED Directional Lights','Staircase Lights']},
    {id:'DEC',en:'Decorative Lighting',ar:'الإنارة الديكورية',categories:['Chandeliers','Bedside Chandeliers','Fan Lights','French Decorative Lighting','Wall Lighting','Wall Lights','LED Mirror Lights']},
    {id:'OUT',en:'Outdoor & Landscape',ar:'الإنارة الخارجية واللاندسكيب',categories:['Outdoor Wall Lights','French Wall Lighting','Bulkhead Lights','Garden & Landscape Lighting','Linear Wall Lights','Solar Lawn Lights','Solar Wall Lights','Solar Bollard Lights','Solar Garden Lights','Portable Solar Lights','Solar Lighting','Garden Spike Lights','Inground Lighting','Bollard Lights','Flood Lighting','Solar Floodlights','Pool Lighting']},
    {id:'URB',en:'Road & Urban',ar:'إنارة الطرق والمدن',categories:['Street Lighting','Solar Street Lights','Integrated Solar Street Lights','French Street & Post Lighting']},
    {id:'IDU',en:'Industrial Lighting',ar:'الإنارة الصناعية',categories:['High Bay Lights','High-Bay Lights','LED Tubes & Fixtures','Waterproof Diffusers','Waterproof Lighting']},
    {id:'EMG',en:'Emergency & Safety',ar:'إنارة الطوارئ والسلامة',categories:['LED Emergency Units','Emergency Lighting','Exit Signs']},
    {id:'CTL',en:'Controls & Smart',ar:'التحكم والإنارة الذكية',categories:['LED Drivers','Lighting Controls','Sensors']},
    {id:'CMP',en:'Components & Light Sources',ar:'المكونات ومصادر الضوء',categories:['LED Strip Lights','LED Bulbs','LED Lamps','LED Tubes','Clear Diffusers','Frosted Diffusers']},
    // Retained ranges from the website: outside the lighting-only master list.
    {id:'ELE',en:'Electrical Accessories',ar:'الملحقات الكهربائية',categories:['Switches & Sockets','Wiring Accessories','Distribution Equipment','Extension Sockets','Desktop Popup Sockets','Door Bells','Electrical Accessories']},
    {id:'CAB',en:'Cables & Wires',ar:'الكوابل والأسلاك',categories:['Cables','Cables & Wires']},
    {id:'OTHER',en:'Other Products',ar:'منتجات أخرى',categories:['Lighting','Pest Control Appliances','Drainage Accessories','Ventilation']}
  ];
  const snapshot = [["Ceiling Lights",383],["Outdoor Wall Lights",83],["Bulkhead Lights",51],["French Wall Lighting",42],["Magnetic Track Lights",42],["Switches & Sockets",39],["LED Strip Lights",38],["Chandeliers",36],["LED Drivers",35],["Recessed Downlights",35],["LED Bulbs",34],["Flood Lighting",33],["Bedside Chandeliers",31],["Wiring Accessories",29],["French Street & Post Lighting",28],["Garden & Landscape Lighting",22],["Fan Lights",17],["Linear Wall Lights",16],["Solar Lawn Lights",16],["Street Lighting",16],["LED Tubes & Fixtures",15],["Recessed Trimless Spots",15],["Surface-Mounted Downlights",15],["Downlights & Spotlights",12],["Solar Lighting",12],["Distribution Equipment",11],["French Decorative Lighting",11],["Portable Solar Lights",11],["Inground Lighting",10],["Panel Lights",10],["Cables",9],["High Bay Lights",9],["Solar Wall Lights",9],["LED Emergency Units",8],["Solar Bollard Lights",8],["Track Lights",8],["Garden Spike Lights",7],["Solar Floodlights",7],["Solar Street Lights",7],["Bollard Lights",6],["Staircase Lights",6],["COB Downlights",5],["Downlights",5],["Lighting",5],["Modern Electric Track",5],["Recessed Modular Luminaires",5],["Solar Garden Lights",5],["Surface Panel Lights",5],["LED Directional Lights",4],["LED Lamps",4],["LED Mirror Lights",4],["Pest Control Appliances",4],["Pool Lighting",4],["Clear Diffusers",3],["Extension Sockets",3],["Desktop Popup Sockets",2],["Drainage Accessories",2],["Frosted Diffusers",2],["Linear Lighting",2],["Surface-Mounted Modular Luminaires",2],["Door Bells",1],["Electrical Accessories",1],["High-Bay Lights",1],["LED Tubes",1],["Office Lights",1],["Surface Lighting",1],["Ventilation",1],["Wall Lighting",1],["Wall Lights",1],["Waterproof Diffusers",1],["Waterproof Lighting",1]];
  const owner = new Map(divisions.flatMap(group=>group.categories.map(category=>[category,group.id])));
  const divisionFor = category => owner.get(category) || 'OTHER';
  const label = (item,lang=document.documentElement.lang) => lang==='ar' ? item.ar : item.en;
  const groups = (counts=snapshot) => divisions.map(group=>{
    const children=counts.filter(([category,total])=>total>0&&divisionFor(category)===group.id).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));
    return {...group,children,total:children.reduce((sum,item)=>sum+item[1],0)};
  }).filter(group=>group.total>0).sort((a,b)=>b.total-a.total||a.en.localeCompare(b.en));
  window.ESHBELIA_TAXONOMY={divisions,snapshot,divisionFor,label,groups};
})();
