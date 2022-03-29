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

//* >>  Switch theme/add to local storage =================*/
