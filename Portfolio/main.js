let header = document.querySelector("header");
let buttonTop = document.querySelector("#topButton");
let buttonMobile = document.querySelector("#mobileButton");
let navigation = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");

const changeHeader = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.className = "newHeader";
    buttonTop.style.display = "block";
  } else {
    header.className = "";
    buttonTop.style.display = "none";
  }
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  navigation.classList.toggle("responsive");
  header.classList.toggle("bgWhite");
};

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.addEventListener("scroll", changeHeader);
buttonMobile.addEventListener("click", mobMenu);
buttonTop.addEventListener("click", topFunction);

/* window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = "newHeader";
  } else {
    document.getElementById("header").className = "";
  }
}
*/
