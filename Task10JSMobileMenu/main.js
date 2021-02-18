let header = document.querySelector("header");
let buttonTop = document.querySelector("#topButton");
let buttonMobile = document.querySelector("#mobileButton");
let navigation = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  headerFunction();
};

const headerFunction = () => {
  // One for old browsers and one for new browsers
  if (document.body.scrollTop > 82 || document.documentElement.scrollTop > 82) {
    header.classList.add("bg");
    buttonTop.style.display = "block";
  } else {
    header.classList.remove("bg");
    buttonTop.style.display = "none";
  }
};

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  navigation.classList.toggle("responsive");
};

buttonTop.addEventListener("click", topFunction);
buttonMobile.addEventListener("click", mobMenu);
