console.log("Blog Web Animation");
// Grab Element =====================================>
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

//> Nav style on Scroll ================================>
const scrollHeader = () => {
  const navbarElement = selectElement(`#header`);
  if (this.scrollY >= 15) {
    navbarElement.classList.add("activated");
  } else {
    navbarElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// Menu ==> Open Menu & Search pop-up ===
const menuToggleIcon = selectElement("#menu-toggle-icon");
const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchContainer = selectElement("#search-form-container");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};
menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup ============== ==== =======>
formOpenBtn.addEventListener("click", () =>
  searchContainer.classList.add("activated")
);
formCloseBtn.addEventListener("click", () =>
  searchContainer.classList.remove("activated")
);
//> Close the search form popup on ESC Keypress ====>> ====>>
window.addEventListener("keyup", (event) => {
  if (event.key === "escape") searchContainer.classList.remove("activated");
});
