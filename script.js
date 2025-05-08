import {
  countdownInterval, timeLeft, pomodoroIndex, phases, updateCountdownDisplay, startPomodoro, pausePomodoro, resetPomodoro, switchToNextPhase, showRestartButton, restartPomodoro, updateBackground, updatePhaseStyles, playNotificationSound,
} from './timer.js';
import {
  minuteTens, minuteUnits, secondTens, secondUnits, updateDigit, pomodoroListItems, updateMusicIcon, updateFullscreenIcon, resetPomodoroList, playMusic, pauseMusic, resetMusic, toggleFullScreen, isPlaying,
} from './ui.js';

const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const musicButton = document.getElementById('music-btn');
const fullscreenButton = document.getElementById('fullscreen-btn');

// Mantén las demás funciones existentes (showRestartButton, restartPomodoro, etc.)
/*function showRestartButton() {
    // Ocultar los botones existentes con una transición suave
    startButton.style.opacity = '0';
    resetButton.style.opacity = '0';
    setTimeout(() => {
      startButton.style.display = 'none';
      resetButton.style.display = 'none';
  
      // Crear el botón "Restart"
      const restartButton = document.createElement('button');
      restartButton.id = 'restart-btn';
      restartButton.className = 'button restart-button';
      restartButton.textContent = 'Restart';
      // Añadir evento al botón
      restartButton.addEventListener('click', restartPomodoro);
  
      // Añadir el botón al contenedor de controles
      document.querySelector('.controls').appendChild(restartButton);
      // Mostrar el botón con transición
      setTimeout(() => {
        restartButton.style.opacity = '1';
      }, 10);
    }, 500); // Coincidir con la duración de la transición CSS
  }
  
  function restartPomodoro() {
    // Restablecer todo al estado inicial
    resetPomodoro();
  
    // Eliminar el botón "Restart"
    const restartButton = document.getElementById('restart-btn');
    restartButton.style.opacity = '0';
    setTimeout(() => {
      restartButton.remove();
  
      // Mostrar nuevamente los botones "Start" y "Reset"
      startButton.style.display = '';
      resetButton.style.display = '';
      setTimeout(() => {
        startButton.style.opacity = '1';
        resetButton.style.opacity = '1';
  
        // Iniciar automáticamente el temporizador en la fase "Focus"
        startPomodoro();
      }, 10);
    }, 500); // Coincidir con la duración de la transición CSS
  }*/

//Listeners
fullscreenButton.addEventListener('click', toggleFullScreen);
startButton.addEventListener('click', () => {
  if (countdownInterval) {
    pausePomodoro();
  } else {
    startPomodoro(playNotificationSound,playMusic);
  }
});
resetButton.addEventListener('click', resetPomodoro);
musicButton.addEventListener('click', () => {
  if (isPlaying) {
    pauseMusic(updateMusicIcon);
  } else {
    playMusic(updateMusicIcon);
  }
});

// Actualización inicial
updateCountdownDisplay();
updateBackground();
updatePhaseStyles();
updateMusicIcon();
updateFullscreenIcon();

