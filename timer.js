// timer.js
let timerInterval;
let startTime;
let elapsedTime = 0; // Total elapsed time in seconds
let isRunning = false;
let isLongPause = false;
let isFocus = false;

// Timer durations for focus, short pause, and long pause
let timerDuration = {
    focus: 25 * 60,
    pause: 5 * 60,
    longPause: 15 * 60,
};

// Formats time in seconds to MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
}

// Updates the timer display with the given time
function updateDisplay(time) {
    const display = document.getElementById('timer');
    display.textContent = formatTime(time);
}

// Starts the timer with the given duration (default: focus duration)
function startTimer(duration = timerDuration.focus) {
    if (!isRunning) {
        isRunning = true;
        // Calculate the start time, subtracting any elapsed time from the current time
        startTime = performance.now() - elapsedTime;
        // Start the animation loop
        timerInterval = requestAnimationFrame(updateTimer);
        changeStatus();
    }
}

// Stops the timer and resets elapsed time
function stopTimer() {
    if (isRunning) {
        isRunning = false;
        elapsedTime = 0;
        // Cancel the animation loop
        cancelAnimationFrame(timerInterval);
        changeStatus();
    }
}

// Updates the timer logic
function updateTimer(timestamp) {
    if (!isRunning) return;

    // Calculate the current time
    const currentTime = performance.now();
    // Calculate the elapsed time in seconds
    const deltaTime = Math.floor((currentTime - startTime) / 1000);
    // Update the elapsed time by adding the change.
    elapsedTime = deltaTime;

    // Calculate the remaining time based on the current mode
    let remainingTime = (isFocus ? timerDuration.focus : isLongPause ? timerDuration.longPause : timerDuration.pause) - deltaTime;
    // If the remaining time is negative, set it to zero
    if (remainingTime < 0) {
        remainingTime = 0;
        isRunning = false;
        stopTimer();
        elapsedTime = 0; // Reset the elapsed time when the timer finishes
    }

    updateDisplay(remainingTime);

    if (isRunning) {
        timerInterval = requestAnimationFrame(updateTimer);
    }

}

// Change the status of the buttons
function changeStatus() {
    const live = document.getElementById('live');
    const play = document.getElementById('play');
    const pause = document.getElementById('pause');
    if (isRunning) {
        live.style.display = 'block';
        play.style.display = 'none';
        pause.style.display = 'block';
    } else {
        live.style.display = 'none';
        play.style.display = 'block';
        pause.style.display = 'none';
    }
}

// Pause or resume the timer
function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        // Cancel the animation loop
        cancelAnimationFrame(timerInterval);
        changeStatus();
    } else if (!isRunning && elapsedTime > 0){
        isRunning = true;
        // Calculate the start time, subtracting the total elapsed time in milliseconds from the current time
        startTime = performance.now() - elapsedTime * 1000;
        // Start the animation loop
        timerInterval = requestAnimationFrame(updateTimer);
        changeStatus();
    }
}

// Set the timer to focus mode
function setFocusTime() {
    isFocus = true;
    isLongPause = false;
    // Reset the elapsed time
    elapsedTime = 0;
    updateDisplay(timerDuration.focus);
}

function setPauseTime() {
    isFocus = false;
    isLongPause = false;
    // Reset the elapsed time
    elapsedTime = 0;
    updateDisplay(timerDuration.pause);
}

function setLongPauseTime() {
    isFocus = false;
    isLongPause = true;
    // Reset the elapsed time
    elapsedTime = 0;
    updateDisplay(timerDuration.longPause);
}

// Change the view to full screen
function setFullScreen() {
    if (document.fullscreenElement) { // Exit full screen
        document.exitFullscreen();
        document.getElementById('fullScreen').style.display = 'block';
        document.getElementById('exitFullScreen').style.display = 'none';
    } else {
        document.documentElement.requestFullscreen();
        document.getElementById('fullScreen').style.display = 'none';
        document.getElementById('exitFullScreen').style.display = 'block';
    }
}

setFocusTime();

export { startTimer, stopTimer, pauseTimer, setFocusTime, setPauseTime, setLongPauseTime, setFullScreen};