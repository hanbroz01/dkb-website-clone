// ==================== Responsive Menu Toggle ====================

// Track whether the responsive menu is currently open
let menuIsOpen = false;

// Grab DOM elements
const responsiveMenuImage = document.getElementById("responsive-menu-image"); // burger/close icon
const responsiveNavbar = document.getElementById("responsive-navbar"); // side menu container
const burgerBtn = document.querySelector(".burger-menu-btn"); // button to open/close menu

// -------------------- Function: Toggle Menu --------------------
function openMenu() {
  menuIsOpen = !menuIsOpen;

  if (menuIsOpen) {
    // Show "close" icon and slide menu into view
    responsiveMenuImage.src = "./assets/images/close-menu.png";
    responsiveNavbar.style.transform = "translate(0,0)";
  } else {
    // Show "burger" icon and hide menu
    responsiveMenuImage.src = "./assets/images/burger-menu.png";
    responsiveNavbar.style.transform = "translate(-100%, 0)";
  }
}

// -------------------- Hover Effects for Menu Icon --------------------

// When hovering over the burger button, show the correct hover icon
burgerBtn.addEventListener("mouseenter", () => {
  responsiveMenuImage.src = menuIsOpen
    ? "./assets/images/close-menu-blue.png" // hover close icon
    : "./assets/images/burger-menu-blue.png"; // hover burger icon
});

// When mouse leaves, revert to the normal icon based on menu state
burgerBtn.addEventListener("mouseleave", () => {
  responsiveMenuImage.src = menuIsOpen
    ? "./assets/images/close-menu.png" // normal close
    : "./assets/images/burger-menu.png"; // normal burger
});
