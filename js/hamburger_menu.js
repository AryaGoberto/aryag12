const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = mobileMenu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("-translate-y-5");
});
// menuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     mobileMenu.classList.add("-translate-y-full");
//   });
// });
