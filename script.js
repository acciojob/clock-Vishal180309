//your JS code here. If required.
const timerElement = document.getElementById("timer");

function updateTimer() {
    const currentTime = new Date();
    const timeString = currentTime.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
    timerElement.textContent = `Current Time: ${currentTime.toLocaleDateString()} ${timeString}`;
}

updateTimer();
setInterval(updateTimer, 1000);
