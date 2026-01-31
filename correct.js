function getProject(id) {
  openProject = limite.indexOf(Number(id));

  // 1) historial + url shareable
  history.pushState({ id }, "", `/proyecto/${id}/index.html`);

  // 2) tu lógica actual (sin depender del hash)
  // ... render ...
}

window.addEventListener("popstate", (e) => {
  const id = e.state?.id;
  if (id) getProject(String(id));
  else getClose(); // o volver a home
});