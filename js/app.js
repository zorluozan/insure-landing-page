const link = document.querySelector(".header__intro__icon");
const navigation = document.querySelector(".nav");
const iconMenu = document.querySelector(".icon__menu");

link.addEventListener("click", function () {
  navigation.classList.toggle("show-menu");
  if (navigation.classList.contains("show-menu")) {
    iconMenu.src = "images/icon-close.svg";
  } else {
    iconMenu.src = "images/icon-hamburger.svg";
  }
});
