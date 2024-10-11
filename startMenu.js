// Grab elements for start menu and game canvas
const startMenu = document.getElementById('start-menu');
const startButton = document.getElementById('start-button');
const colorPicker = document.getElementById('color-picker');
const canvas = document.getElementById('gameCanvas');

// Set up initial canvas properties
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext('2d');

// Start game when start button is clicked
startButton.addEventListener('click', () => {
    // Set player color based on input
    playerColor = colorPicker.value;
    
    // Hide the start menu and display the game canvas
    startMenu.style.display = 'none';
    canvas.style.display = 'block';

    // Start the game loop
    startGame();
});
