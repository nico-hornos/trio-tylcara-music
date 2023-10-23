const menu = document.querySelector(".nav__menu");
const buttonOpen = document.querySelector(".menu-button-open");
const buttonClose = document.querySelector(".menu-button-close");
const links = document.querySelectorAll(".menu__link");

const openMenu = () => {
  menu.classList.add("menu-active");
};

const closeMenu = () => {
  menu.classList.remove("menu-active");
};

buttonOpen.addEventListener("click", openMenu);
buttonClose.addEventListener("click", closeMenu);

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("menu-active")) {
      menu.classList.remove("menu-active");
    }
  });
});
