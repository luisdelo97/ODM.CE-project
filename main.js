const bsCollapse = new bootstrap.Collapse("#navbarNavDropdown", {
  toggle: false,
});

document.addEventListener("click", (e) => {
  // console.log(!e.target.matches(".navbar"));
  if (
    e.target.matches(".navbar-collapse a") ||
    !e.target.matches(".navbar *")
  ) {
    setTimeout(() => {
      bsCollapse.hide();
    }, 2000);
  }
  return false;
});
