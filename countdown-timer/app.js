const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const Christmas = "25 Dec 2021";

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countdown() {
  const ChristmasDate = new Date(Christmas);
  const currentDate = new Date();

  const totalSeconds = (ChristmasDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysElement.innerHTML = days;
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(mins);
  secondsElement.innerHTML = formatTime(seconds);
}

// initial call
countdown();

setInterval(countdown, 1000);
