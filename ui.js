function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerElement.textContent = formattedTime;
    document.title = `${formattedTime} - Lofi Pomodoro`;
}

function changeMode(mode) {
    clearInterval(timerInterval);
    currentMode = mode;
    if (currentMode === 'focus') {
        time = FOCUS_TIME;
        music.src = "";
    } else if (currentMode === 'pause') {
        time = PAUSE_TIME;
        music.src = "./songs/song1.mp3";
    } else {
        time = LONG_PAUSE_TIME;
        music.src = "./songs/song1.mp3";
    }
    if (currentMode != "focus") {
        playMusic(music);
    } else {
        pauseMusic(music);
    }
    updateDisplay(time);
}

function playNotification(audio) {
    audio.play();
}

function changeButtonView(mode) {
    if (mode) {
        play.style.display = "none";
        pause.style.display = "block";
    } else {
        play.style.display = "block";
        pause.style.display = "none";
    }
}

function playMusic(music) {
    music.play();
}

function pauseMusic(music) {
    music.pause();
}

const timerElement = document.getElementById('timer');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const longPause = document.getElementById('long-pause');
const focus = document.getElementById('focus');
const fullScreen = document.getElementById('full-screen');
const music = document.getElementById('music');
const notificationFocus = document.getElementById('notification-focus');
const notificationPause = document.getElementById('notification-pause');