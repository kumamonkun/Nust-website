// Set target date and time
const targetDate = new Date("Oct 31, 2024 23:59:59").getTime();

// Function to update countdown every second
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display in HTML with classes for each time component
  document.getElementById("clock").innerHTML = `
    <div class="time-entry">
      <span>${days}</span> Days
    </div>
    <div class="time-entry">
      <span>${hours}</span> Hours
    </div>
    <div class="time-entry">
      <span>${minutes}</span> Minutes
    </div>
    <div class="time-entry">
      <span>${seconds}</span> Seconds
    </div>
  `;

  // If countdown is over, show a message and stop the timer
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("clock").innerHTML = "<div class='time-entry'>Event Started!</div>";
  }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
