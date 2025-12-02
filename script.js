const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const mobileMenu = document.getElementById("mobile-menu");

const mobileNavigationToggle = () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !isExpanded);
  closeButton.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.style.display = isExpanded ? "none" : "block";
};

menuButton.addEventListener("click", mobileNavigationToggle);
closeButton.addEventListener("click", mobileNavigationToggle);
