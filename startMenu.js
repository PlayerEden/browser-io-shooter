// startMenu.js

// Set up the canvas and context globally
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to make the map larger
canvas.width = 600; // Reduced width for a smaller playing area
canvas.height = 400; // Reduced height

// Start menu and character menu elements
const startButton = document.getElementById('start-button');
const characterButton = document.getElementById('character-button');
const characterMenu = document.getElementById('character-menu');
const backButton = document.getElementById('back-button');
const saveCharacterButton = document.getElementById('save-character-button');

// Character customization elements
const colorPicker = document.getElementById('color-picker');
const accessoryTypeSelect = document.getElementById('accessory-type');
const accessoryColorPicker = document.getElementById('accessory-color');

// Show the character customization menu
characterButton.addEventListener('click', () => {
    document.getElementById('start-menu').style.display = 'none';
    characterMenu.style.display = 'block';
});

// Save character customization and return to the start menu
saveCharacterButton.addEventListener('click', () => {
    // Save character color, accessory type, and accessory color
    playerColor = colorPicker.value;
    indicatorType = accessoryTypeSelect.value; // Updated name to accessoryType
    visorColor = accessoryColorPicker.value;

    characterMenu.style.display = 'none';
    document.getElementById('start-menu').style.display = 'flex';
});

// Go back from character customization to start menu
backButton.addEventListener('click', () => {
    characterMenu.style.display = 'none';
    document.getElementById('start-menu').style.display = 'flex';
});

// Start the game on button click
startButton.addEventListener('click', () => {
    document.getElementById('start-menu').style.display = 'none';
    canvas.style.display = 'block';

    // Start the game loop
    startGame();
});
