const targetDateElement = document.getElementById("datetimeInput");
const countdownForm = document.getElementById("inputForm");
const countdownTimer = document.getElementById("timer");

let countdownInterval;

function startCountdown(event) {
  event.preventDefault();

  const targetDate = new Date(targetDateElement.value);

  if (isNaN(targetDate)) {
    countdownTimer.textContent = "Invalid date/time format";
    console.error("Invalid date/time format");
    return;
  }

  clearInterval(countdownInterval);

  updateTimer(targetDate);

  countdownInterval = setInterval(() => {
    updateTimer(targetDate);
  }, 1000);
}

function updateTimer(targetDate) {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference > 0) {
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `
      <span id="days">${formatTime(days)}</span> days
      <span id="hours">${formatTime(hours)}</span> hours
      <span id="minutes">${formatTime(minutes)}</span> minutes
      <span id="seconds">${formatTime(seconds)}</span> seconds
    `;
  } else {
    countdownTimer.textContent = "Countdown is over!";
    clearInterval(countdownInterval);
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdownForm.addEventListener("submit", startCountdown);
