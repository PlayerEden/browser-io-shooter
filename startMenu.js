// startMenu.js

// Initialize the canvas and context globally
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 400;
canvas.height = 400;

// Start game on button click
const startButton = document.getElementById('start-button');
const colorPicker = document.getElementById('color-picker');

startButton.addEventListener('click', () => {
    // Set player color based on the picker
    playerColor = colorPicker.value;

    // Hide start menu and show the game canvas
    document.getElementById('start-menu').style.display = 'none';
    canvas.style.display = 'block';

    // Start the game loop
    startGame();
});
