// startMenu.js

const startMenu = document.getElementById('start-menu');
const startButton = document.getElementById('start-button');
const colorPicker = document.getElementById('color-picker');

startButton.addEventListener('click', () => {
    playerColor = colorPicker.value;
    startMenu.style.display = 'none';
    canvas.style.display = 'block';
    startGame(); // Start the game after customization
});
