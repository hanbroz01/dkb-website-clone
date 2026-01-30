let menuIsOpen = false;

const responsiveMenuImage = document.getElementById("responsive-menu-image");
const responsiveNavbar = document.getElementById("responsive-navbar");
const burgerBtn = document.querySelector(".burger-menu-btn");

function openMenu() {
  menuIsOpen = !menuIsOpen;

  if (menuIsOpen) {
    responsiveMenuImage.src = "./assets/images/close-menu.png";
    responsiveNavbar.style.transform = "translate(0,0)";
  } else {
    responsiveMenuImage.src = "./assets/images/burger-menu.png";
    responsiveNavbar.style.transform = "translate(-100%, 0)";
  }
}

// HOVER → show the correct hover icon
burgerBtn.addEventListener("mouseenter", () => {
  responsiveMenuImage.src = menuIsOpen
    ? "./assets/images/close-menu-blue.png" // hover close icon
    : "./assets/images/burger-menu-blue.png"; // hover burger icon
});

// UNHOVER → reset to normal icon
burgerBtn.addEventListener("mouseleave", () => {
  responsiveMenuImage.src = menuIsOpen
    ? "./assets/images/close-menu.png" // normal close
    : "./assets/images/burger-menu.png"; // normal burger
});
