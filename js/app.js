const link = document.querySelector(".header__intro__icon");
const mobileMenu = document.querySelector(".mobile__nav");
const iconMenu = document.querySelector(".icon__menu");

link.addEventListener("click", function () {
  mobileMenu.classList.toggle("show-menu");
  if (mobileMenu.classList.contains("show-menu")) {
    iconMenu.src = "images/icon-close.svg";
  } else {
    iconMenu.src = "images/icon-hamburger.svg";
  }
});
