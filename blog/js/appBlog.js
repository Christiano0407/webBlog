//** ==== Blog Web Javascript  === */
//**Import Swiper  >>> */
//import { Swiper } from "swiper";
//**Import Swiper Styles >>>  */
//import "swiper/css";

//**Create your swiper >>>  */
//const Swiper = new Swiper();

//** >>> ========== Blog Web Javascript  ===  ==================== <<<*/
//** // Grab elements y Podremos seleccionar por medio del Element*/
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

//** >> = Nav styles on scroll =  ====== =====> */
const scrollHeader = () => {
  const navBarElement = selectElement("#headerId");

  if (this.scrollY >= 15) {
    navBarElement.classList.add("activated");
  } else {
    navBarElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

//* >> Open menu & search pop-up >> === ======= >>> */
const menuToggleBurger = selectElement("#menu-toggle-icon");
const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchContainer = selectElement("#search-form-container");
console.log(menuToggleBurger);
console.log(formOpenBtn);
console.log(formCloseBtn);
console.log(searchContainer);

const activeToggleMenu = () => {
  const mobileMenu = selectElement("#menuId");

  mobileMenu.classList.toggle("activated");
  menuToggleBurger.classList.toggle("activated");
};

menuToggleBurger.addEventListener("click", activeToggleMenu);

//* >>  Open/Close search form popup ==================*/
formOpenBtn.addEventListener("click", () =>
  searchContainer.classList.add("activated")
);
formCloseBtn.addEventListener("click", () =>
  searchContainer.classList.remove("activated")
);
//* -- Close the search form popup on ESC keypress*/
window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") searchContainer.classList.remove("activated");
});

//* >>  Switch theme/add to local storage ===== Cambiar color Luz y Oscuro============ >>>>> >>>> >>>>> >>> */
const body = document.body;
console.log(body);
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");
//console.log(currentTheme);
console.log(themeToggleBtn);

//* =  Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body*/
if (currentTheme) {
  body.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", function () {
  // Add light theme on click
  body.classList.toggle("light-theme");
  // If the body has the class of light theme then add it to local Storage, if not remove it
  if (body.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

//* Swiper ===== === == >>> >>>  ============================== >>>>>>>>>>>*/
