let button = document.querySelector("button");

function countingDown() {
  setInterval(function () {
    let userDate = new Date(document.getElementById("userDate").value);
    let startDate = new Date(document.getElementById("startDate").value);
    let dateName = document.getElementById("dateName").value;

    let currentDate = new Date();

    let distanceWithStartDate = userDate.getTime() - startDate.getTime();
    let distance = userDate.getTime() - currentDate.getTime();

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let daysWithStartingDate = Math.floor(distanceWithStartDate / (1000 * 60 * 60 * 24));
    let hoursWithStartingDate = Math.floor(
      (distanceWithStartDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesWithStartingDate = Math.floor(
      (distanceWithStartDate % (1000 * 60 * 60)) / (1000 * 60)
    );
    let secondsWithStartingDate = Math.floor((distanceWithStartDate % (1000 * 60)) / 1000);

    document.getElementById(
      "timer"
    ).textContent = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left until the event named ${dateName}`;

    document.getElementById(
      "timerWithStartDate"
    ).textContent = `There are ${daysWithStartingDate} days between the starting date and the event`;

    if (distance < 0) {
      clearInterval(countingDown);
      document.getElementById("timer").textContent = `Time is out`;
      document.getElementById("noWeekendsTimer").textContent = `Time is out`;
    }

    if (distanceWithStartDate < 0) {
      document.getElementById("timerWithStartDate").textContent = `Time is out`;
    }

    let userDateParsed = Date.parse(userDate);
    let currentDateParsed = Date.parse(currentDate);
    let startDateParsed = Date.parse(startDate);

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
    let workDay = 0;
    for (let j = startDateParsed; j < userDateParsed; j = j + 24 * 60 * 60 * 1000) {
      let CheckingWeekDay = new Date(j).getDay();

      if (CheckingWeekDay >= 1 && CheckingWeekDay <= 5) {
        workDay++;
      }
    }

    document.getElementById(
      "noWeekendsTimer"
    ).textContent = `The number of work days from today unti the event ${dateName} (not including the end date) is ${workDays.length}`;
    document.getElementById(
      "timerWithStartDate"
    ).textContent = `The number of work days between the start date and the event is ${workDay}`;
  }, 1000);
}

button.addEventListener("click", countingDown);
