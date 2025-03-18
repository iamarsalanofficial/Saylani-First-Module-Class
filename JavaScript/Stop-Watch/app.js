// app.js

let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;

// Time Formatter Callback
function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

// Main Stopwatch function (callback)
function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    display.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Start Button
document.getElementById("start").addEventListener("click", function() {
    if (interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval(stopwatch, 1000); // callback every 1 sec
});

// Stop Button
document.getElementById("stop").addEventListener("click", function() {
    clearInterval(interval);
});

// Reset Button
document.getElementById("reset").addEventListener("click", function() {
    clearInterval(interval);
    [seconds, minutes, hours] = [0, 0, 0];
    display.innerHTML = "00:00:00";
});
