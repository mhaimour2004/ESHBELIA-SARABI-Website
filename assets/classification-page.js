(() => {
  const slug = location.pathname.split("/").pop().replace(/\.html$/i, "") || "power-cables-wires";
  const item = window.ESHBELIA_CONTENT.classifications.find((x) => x.slug === slug) || window.ESHBELIA_CONTENT.classifications[0];
  const specific = {
    "power-cables-wires": {
      heading:"Power cable and wire solutions for project requirements",
      intro:"ESHBELIA SARABI supports building, infrastructure, commercial and industrial requirements with coordinated cable and wire selection. Product proposals are aligned to the project specification, installation environment, conductor and insulation requirements, fire performance, quantities and delivery programme.",
      title:"Power cable & wire range",
      scope:[
        ["LV Power Cables","Single-core and multi-core options for low-voltage power distribution."],
        ["Building Wires","Wires for residential, commercial and general building installations."],
        ["Armoured Cables","Mechanical-protection options for demanding routes and installations."],
        ["Unarmoured Cables","Flexible project options for protected routes and suitable environments."],
        ["Control Cables","Multi-core control and auxiliary circuit applications."],
        ["Fire Performance","Fire-resistant, flame-retardant and LSZH options where specified."]
      ],
      technical:[
        ["Conductor options","Copper or aluminium conductor options can be coordinated subject to the project specification."],
        ["Insulation & sheath","PVC, XLPE and low-smoke zero-halogen constructions can be proposed where required."],
        ["Voltage & cores","Selection is coordinated around voltage grade, number of cores, cross-sectional area and installation method."],
        ["Armour & protection","Armoured or unarmoured construction is selected to suit mechanical and routing requirements."],
        ["Fire requirements","Fire-resistant or flame-retardant performance is reviewed against the required submittal criteria."],
        ["Project documentation","Datasheets, compliance information, commercial offers and delivery coordination are handled per RFQ."]
      ]
    },
    chandeliers:{heading:"Signature and custom chandelier solutions",intro:"Explore architectural chandeliers for mosques, palaces, villas, hospitality and landmark interiors, supported by design, dimensional and project coordination.",title:"Chandelier applications",scope:[["Mosques","Grand domes, prayer halls and mihrab zones."],["Palaces & Villas","Statement pieces for majlis, halls and private interiors."],["Hospitality","Lobby, ballroom, atrium and reception applications."],["Custom Design","Project-specific dimensions, finishes and detailing."]],technical:[["Signature collection","Browse the curated Top 20 chandelier products below."],["Dimensional coordination","Diameter, height and suspension are coordinated around the space."],["Finish selection","Gold, crystal, etched glass and bespoke finish directions."],["RFQ support","Share drawings or dimensions for project-specific review."]]},
    "modern-chandeliers":{heading:"Modern chandelier collection",intro:"This collection is restricted to products explicitly classified as Architectural in the approved catalogue data. Mosque, palace and heritage products remain in their dedicated collections.",title:"Modern chandelier criteria",scope:[["Architectural classification","Only products with an explicit Architectural collection label are included."],["Contemporary applications","Suitable for atriums, lobbies, hospitality and modern residential interiors when coordinated to the brief."],["Dimensional review","Diameter, height, suspension and access requirements must be confirmed per project."],["Finish review","Finish, diffuser and lamp details remain subject to the approved product record."]],technical:[["Evidence boundary","No product is labelled Modern from appearance alone."],["Project coordination","Ceiling structure, suspension and maintenance access require project review."],["Visual evidence","Use only the approved catalogue artwork or authorized product photography."],["RFQ support","Request the current product record and project-specific quotation."]]},
    "street-lighting-poles-fixtures":{heading:"Street lighting poles and fixtures",intro:"A coordinated range of pole configurations and LED road-luminaire families for roads, urban areas and infrastructure projects. Final selection depends on the project schedule and lighting design.",title:"Street-lighting selection guide",scope:[["Pole configurations","Post-top, single-arm, double-arm, curved, solar and high-mast configurations."],["LED road luminaires","Compact, medium and high-output road-luminaire families."],["Project coordination","Mounting height, arm arrangement, foundation and interface details are coordinated per project."],["Lighting design","Photometry, wattage, CCT, controls and spacing require the approved lighting design."]],technical:[["Public category","Street Lighting Poles & Fixtures is the public website category."],["No inferred photometry","Wattage, optics, CCT and control interface are not inferred when absent from the source family record."],["Application evidence","Use the approved road-lighting catalogue and project documents."],["RFQ support","Submit the road layout, pole schedule and luminaire requirements for selection."]]},
    "power-supplies":{heading:"Power supplies",intro:"A dedicated category for SEVILLA power-supply products. Electrical values are shown only where supported by the approved catalogue or comparison evidence; unconfirmed values remain clearly withheld.",title:"Power-supply selection guide",scope:[["DALI power supplies","DALI remains a lighting-control-system designation and is preserved in the technical record."],["Input and output","Input voltage, output current, output voltage and power must be checked against the selected item row."],["Application fit","Select the driver or supply for the luminaire, control method and installation environment."],["RFQ support","Confirm current, output, dimensions and emergency/control requirements before order."]],technical:[["Data integrity","Item numbers, power and voltage are kept on the same product row."],["Source boundary","No missing value is estimated or copied from another variant."],["Engineering status","Commercial Preview does not mean engineering approval."],["Document control","Use the current SEVILLA-branded catalog or datasheet revision."]]},
    default:{heading:"A coordinated product range for project applications",intro:"This classification is supported through product selection, technical review, value engineering, submittal coordination and commercial follow-up according to the project requirement.",title:"Classification scope",scope:[["Application review","Selection aligned to the intended space and operating environment."],["Product selection","Suitable families and alternatives coordinated around the brief."],["Technical support","Available technical information prepared for project review."],["Commercial follow-up","RFQ, quantity and delivery requirements coordinated with the team."]],technical:[["Project selection","Product choices are aligned to BOQ, drawings and specifications."],["Options & finishes","Available sizes, finishes and performance options vary by product family."],["Submittal support","Technical documentation can be coordinated for selected products."],["Supply coordination","Commercial and delivery follow-up is handled per project."]]}
  };
  const page = specific[slug] || specific.default;
  const title = item.title.en;
  document.title = `${title} | ESHBELIA SARABI`;
  document.querySelector('meta[name="description"]').content = item.text.en;
  document.querySelector("#classHeroImage").src = item.image;
  document.querySelector("#classHeroImage").alt = title;
  const heroImage = document.querySelector("#classHeroImage");
  heroImage.tabIndex = 0;
  heroImage.setAttribute("role", "button");
  heroImage.setAttribute("aria-label", "Open " + title + " image");
  const imageDialog = document.createElement("dialog");
  imageDialog.className = "classification-image-dialog";
  const imageClose = document.createElement("button");
  imageClose.type = "button";
  imageClose.setAttribute("aria-label", "Close image");
  imageClose.textContent = "×";
  const largeImage = document.createElement("img");
  largeImage.src = item.image;
  largeImage.alt = title;
  const imageTitle = document.createElement("strong");
  imageTitle.textContent = title;
  imageDialog.append(imageClose, largeImage, imageTitle);
  document.body.append(imageDialog);
  const openImage = () => imageDialog.showModal();
  heroImage.addEventListener("click", openImage);
  heroImage.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openImage(); } });
  imageClose.addEventListener("click", () => imageDialog.close());
  imageDialog.addEventListener("click", event => { if (event.target === imageDialog) imageDialog.close(); });
  document.querySelector("#classTitle").textContent = title;
  document.querySelector("#classSummary").textContent = item.text.en;
  document.querySelector("#classHeading").textContent = page.heading;
  document.querySelector("#classIntro").textContent = page.intro;
  document.querySelector("#technicalTitle").textContent = page.title;
  const scopeImages = slug === "chandeliers" ? {
    "Mosques":"assets/chandeliers/msq-ch-004.jpg",
    "Palaces & Villas":"assets/chandeliers/es-pl-030.jpg",
    "Hospitality":"assets/chandeliers/es-ch-117.jpg",
    "Custom Design":"assets/chandeliers/es-ch-004.jpg"
  } : {};
  document.querySelector("#scopeList").innerHTML = page.scope.map(([a,b]) => { const image = scopeImages[a] || item.image; return `<button class="scope-item" type="button" aria-label="Open ${a} image" data-scope-title="${a}" data-scope-image="${image}"><div><strong>${a}</strong><span>${b}</span></div><img src="${image}" alt="${a} product example" loading="lazy"><span class="scope-open" aria-hidden="true">View image</span></button>`; }).join("");
  document.querySelectorAll(".scope-item").forEach(scopeItem => {
    scopeItem.addEventListener("click", () => {
      imageTitle.textContent = `${title} — ${scopeItem.dataset.scopeTitle}`;
      largeImage.src = scopeItem.dataset.scopeImage || item.image;
      largeImage.alt = `${scopeItem.dataset.scopeTitle} chandelier example`;
      openImage();
    });
  });
  document.querySelector("#technicalGrid").innerHTML = page.technical.map(([a,b]) => `<article><h3>${a}</h3><p>${b}</p></article>`).join("");
  const productCategories = {"ceiling-lighting":["Downlights & Spotlights"],"wall-lights":["Wall Lighting"],"outdoor-lighting":["Inground Lighting","Flood Lighting","Street Lighting"],"street-lighting-poles-fixtures":["Street Lighting Poles & Fixtures"],"power-supplies":["Power Supplies"],"modern-chandeliers":["Modern Chandeliers"]};
  const relatedSource = [...(window.ESHBELIA_CONTENT.catalogProducts || []), ...(window.SEVILLA_LIGHTING_CATALOG_R01_PRODUCTS || []), ...(window.SEVILLA_UAE_STREET_LIGHTING_R08 || [])];
  const related = relatedSource.filter((product) => (productCategories[slug] || []).includes(product.category));
  if (related.length) {
    const section = document.createElement("section");
    section.className = "related-products";
    section.innerHTML = `<div class="eyebrow">Controlled Catalogue R01</div><h2>Registered products in this classification</h2><div class="related-product-grid">${related.map((product) => `<article><div><span>${product.category}</span><strong>${product.id}</strong></div><h3>${product.name}</h3><p>${product.summary}</p><small class="status ${product.status.includes("approval") ? "review" : ""}">${product.status}</small></article>`).join("")}</div><a class="text-link" href="products.html">Browse the complete product catalogue →</a>`;
    document.querySelector("#technicalBand").insertAdjacentElement("afterend", section);
  }
  const message = encodeURIComponent(`Hello ESHBELIA SARABI, I would like to enquire about ${title}.`);
  document.querySelector("#heroWhatsApp").href = `https://wa.me/971565565774?text=${message}`;
  document.querySelector("#waOne").href = `https://wa.me/971565565774?text=${message}`;
  document.querySelector("#waTwo").href = `https://wa.me/971555533432?text=${message}`;
})();
