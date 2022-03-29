//** ==== Blog Web Javascript  === */
//**Import Swiper  >>> */
//import { Swiper } from "swiper";
//**Import Swiper Styles >>>  */
//import "swiper/css";

//**Create your swiper >>>  */
//const Swiper = new Swiper();

//** ==== Blog Web Javascript  === */
//** // Grab elements y Podremos seleccionar por medio del Element*/
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

//** = Nav styles on scroll =  ====== =====> */
const scrollHeader = () => {
  const navBarElement = selectElement("#headerId");

  if (this.scrollY >= 15) {
    navBarElement.classList.add("activated");
  } else {
    navBarElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

//* Open menu & search pop-up >> === >>> */
