// script.js

// Selecting clock hands and digital time
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const digitalTime = document.getElementById("digital-time");

// Function to update both analog and digital time
function updateClock() {
    const now = new Date();

    // Get hours, minutes, seconds
    const hrs = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    // Analog rotations
    const hourDeg = (hrs % 12) * 30 + mins * 0.5;
    const minuteDeg = mins * 6;
    const secondDeg = secs * 6;

    // Apply rotations
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    // Digital clock display (HH:MM:SS)
    const formattedTime = `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    digitalTime.textContent = formattedTime;
}

// Call function every second
setInterval(updateClock, 1000);
updateClock(); // initial call