const bsCollapse = new bootstrap.Collapse("#navbarNavDropdown", {
  toggle: false,
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".navbar-collapse a")) return false;
  setTimeout(() => {
    bsCollapse.hide();
  }, 1000);
});
