let userDate = document.getElementById("userDate").value;
let dateName = document.getElementById("dateName").value;
let form = document.querySelector("form");
let currentDate = new Date().getTime();

let daysLeft = userDate - currentDate;

const test = () => {
  console.log(currentDate);
};
