// startMenu.js

// Set up the canvas and context globally
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to make the map larger
canvas.width = 600; // Reduced width for a smaller playing area
canvas.height = 400; // Reduced height

// Start game on button click
const startButton = document.getElementById('start-button');
const colorPicker = document.getElementById('color-picker');

startButton.addEventListener('click', () => {
    // Set player color based on the color picker
    playerColor = colorPicker.value;

    // Hide the start menu and show the game canvas
    document.getElementById('start-menu').style.display = 'none';
    canvas.style.display = 'block';

    // Start the game loop
    startGame();
});
