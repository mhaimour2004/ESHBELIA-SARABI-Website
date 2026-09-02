(() => {
  const projects = window.ESHBELIA_CONTENT.projects;
  const grid = document.querySelector("#projectGrid");
  const search = document.querySelector("#projectSearch");
  const filters = document.querySelector("#filters");
  const count = document.querySelector("#projectCount");
  let sector = "All";
  const sectors = ["All", ...new Set(projects.map(project => project.sector))];

  filters.innerHTML = sectors.map(name => `<button class="filter ${name === "All" ? "active" : ""}" type="button" data-sector="${name}">${name}</button>`).join("");
  filters.tabIndex = 0;
  filters.setAttribute("aria-label", "Scroll project types horizontally");
  filters.addEventListener("wheel", event => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    filters.scrollLeft += event.deltaY;
    event.preventDefault();
  }, { passive: false });

  const render = () => {
    const query = search.value.toLowerCase();
    const list = projects.filter(project => (sector === "All" || project.sector === sector) && `${project.name} ${project.location} ${project.sector}`.toLowerCase().includes(query));
    count.textContent = `${list.length} / ${projects.length}`;
    grid.innerHTML = list.map(project => `<article class="project"><small>#${String(project.id).padStart(2, "0")} • ${project.sector}</small><h4>${project.name}</h4><p>${project.location}</p></article>`).join("") || "<p>No matching projects.</p>";
  };

  filters.addEventListener("click", event => {
    if (!event.target.matches(".filter")) return;
    sector = event.target.dataset.sector;
    filters.querySelectorAll(".filter").forEach(button => button.classList.toggle("active", button === event.target));
    event.target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    render();
  });
  search.addEventListener("input", render);
  render();
})();
