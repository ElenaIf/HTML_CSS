let header = document.querySelector("header");

const changeHeader = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.className = "newHeader";
  } else {
    header.className = "";
  }
};

window.addEventListener("scroll", changeHeader);

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
