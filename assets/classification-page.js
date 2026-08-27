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
    chandeliers:{heading:"Signature and custom chandelier solutions",intro:"Explore architectural chandeliers for mosques, palaces, villas, hospitality and landmark interiors, supported by design, dimensional and project coordination.",title:"Chandelier applications",scope:[["Mosques","Grand domes, prayer halls and mihrab zones."],["Palaces & Villas","Statement pieces for majlis, halls and private interiors."],["Hospitality","Lobby, ballroom, atrium and reception applications."],["Custom Design","Project-specific dimensions, finishes and detailing."]],technical:[["Signature collection","View the curated Top 20 catalogue on the main website."],["Dimensional coordination","Diameter, height and suspension are coordinated around the space."],["Finish selection","Gold, crystal, etched glass and bespoke finish directions."],["RFQ support","Share drawings or dimensions for project-specific review."]]},
    default:{heading:"A coordinated product range for project applications",intro:"This classification is supported through product selection, technical review, value engineering, submittal coordination and commercial follow-up according to the project requirement.",title:"Classification scope",scope:[["Application review","Selection aligned to the intended space and operating environment."],["Product selection","Suitable families and alternatives coordinated around the brief."],["Technical support","Available technical information prepared for project review."],["Commercial follow-up","RFQ, quantity and delivery requirements coordinated with the team."]],technical:[["Project selection","Product choices are aligned to BOQ, drawings and specifications."],["Options & finishes","Available sizes, finishes and performance options vary by product family."],["Submittal support","Technical documentation can be coordinated for selected products."],["Supply coordination","Commercial and delivery follow-up is handled per project."]]}
  };
  const page = specific[slug] || specific.default;
  const title = item.title.en;
  document.title = `${title} | ESHBELIA SARABI`;
  document.querySelector('meta[name="description"]').content = item.text.en;
  document.querySelector("#classHeroImage").src = item.image;
  document.querySelector("#classHeroImage").alt = title;
  document.querySelector("#classTitle").textContent = title;
  document.querySelector("#classSummary").textContent = item.text.en;
  document.querySelector("#classHeading").textContent = page.heading;
  document.querySelector("#classIntro").textContent = page.intro;
  document.querySelector("#technicalTitle").textContent = page.title;
  document.querySelector("#scopeList").innerHTML = page.scope.map(([a,b]) => `<article class="scope-item"><strong>${a}</strong><span>${b}</span></article>`).join("");
  document.querySelector("#technicalGrid").innerHTML = page.technical.map(([a,b]) => `<article><h3>${a}</h3><p>${b}</p></article>`).join("");
  const message = encodeURIComponent(`Hello ESHBELIA SARABI, I would like to enquire about ${title}.`);
  document.querySelector("#heroWhatsApp").href = `https://wa.me/971565565774?text=${message}`;
  document.querySelector("#waOne").href = `https://wa.me/971565565774?text=${message}`;
  document.querySelector("#waTwo").href = `https://wa.me/971555533432?text=${message}`;
})();
