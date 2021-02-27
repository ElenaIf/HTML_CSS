let button = document.querySelector("button");

function countingDown() {
  setInterval(function () {
    let userDate = new Date(document.getElementById("userDate").value);
    let dateName = document.getElementById("dateName").value;

    let currentDate = new Date();

    let distance = userDate.getTime() - currentDate.getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(
      "timer"
    ).textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left until the event named ${dateName}`;

    if (distance < 0) {
      clearInterval(countingDown);
      document.getElementById("timer").textContent = `Time is out`;
      document.getElementById("noWeekendsTimer").textContent = `Time is out`;
    }

    let userDateParsed = Date.parse(userDate);
    let currentDateParsed = Date.parse(currentDate);

    let workDays = [];
    let weekendDays = [];

    for (let i = currentDateParsed; i < userDateParsed; i = i + 24 * 60 * 60 * 1000) {
      let CheckingWeekDay = new Date(i).getDay();
      if (CheckingWeekDay >= 1 && CheckingWeekDay <= 5) {
        workDays.push(i);
      } else {
        weekendDays.push(i);
      }
    }

    document.getElementById(
      "noWeekendsTimer"
    ).textContent = `The number of work days unti the event (not includint the end date) is ${workDays.length}`;
  }, 1000);
}

button.addEventListener("click", countingDown);
