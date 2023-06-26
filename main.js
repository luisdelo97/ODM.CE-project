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
// document.addEventListener("DOMContentLoaded", function () {
//   const images = document.querySelectorAll("img");
//   const iframes = document.querySelectorAll("iframe");

//   images.forEach(function (img) {
//     img.setAttribute("loading", "lazy");
//   });

//   iframes.forEach(function (iframe) {
//     iframe.setAttribute("loading", "lazy");
//   });
// });
