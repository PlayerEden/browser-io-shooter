// globals.js

// Global dimensions for the world
const worldWidth = 1600;
const worldHeight = 1600;

// Set canvas size to make the map larger
const canvas = document.getElementById('gameCanvas');
const ctx = canvas?.getContext('2d');

if (canvas) {
    canvas.width = 600; // Reduced width for a smaller playing area
    canvas.height = 400; // Reduced height
} else {
    console.error('Canvas element not found. Please ensure the canvas element is available in the HTML.');
}

// Start menu and other elements
const startButton = document.getElementById('start-button');
const characterButton = document.getElementById('character-button');
const settingsButton = document.getElementById('settings-button');
const characterMenu = document.getElementById('character-menu');
const settingsMenu = document.getElementById('settings-menu');
const backButtonCharacter = document.getElementById('back-button-character');
const backButtonSettings = document.getElementById('back-button-settings');
const saveSettingsButton = document.getElementById('save-settings-button');
const saveCharacterButton = document.getElementById('save-character-button');

// Character customization elements
const colorPicker = document.getElementById('color-picker');
const accessoryTypeSelect = document.getElementById('accessory-type');
const accessoryColorPicker = document.getElementById('accessory-color');

// Settings inputs
const playerSpeedInput = document.getElementById('player-speed');
const enemySpeedInput = document.getElementById('enemy-speed');
const barrierCountInput = document.getElementById('barrier-count');
const maxEnemyCountInput = document.getElementById('max-enemy-count');
const barrierColorInput = document.getElementById('barrier-color');
const backgroundColorInput = document.getElementById('background-color');

// Default settings
let playerSpeed = playerSpeedInput ? parseFloat(playerSpeedInput.value) : 1;
let enemySpeed = enemySpeedInput ? parseFloat(enemySpeedInput.value) : 1;
let maxBarriers = barrierCountInput ? parseInt(barrierCountInput.value) : 10;
let maxEnemies = maxEnemyCountInput ? parseInt(maxEnemyCountInput.value) : 5;
let barrierColor = barrierColorInput ? barrierColorInput.value : '#808080';
let backgroundColor = backgroundColorInput ? backgroundColorInput.value : '#333333'; // Corrected to proper hex format

// Helper function to toggle menu visibility
function toggleMenuVisibility(menuToShow, menusToHide) {
    menusToHide.forEach(menu => menu.style.display = 'none');
    menuToShow.style.display = 'flex';
}

// Show the character customization menu
characterButton?.addEventListener('click', () => {
    toggleMenuVisibility(characterMenu, [document.getElementById('start-menu')]);
});

// Show the settings menu
settingsButton?.addEventListener('click', () => {
    toggleMenuVisibility(settingsMenu, [document.getElementById('start-menu')]);
});

// Save character customization and return to the start menu
saveCharacterButton?.addEventListener('click', () => {
    // Save character color, accessory type, and accessory color
    playerColor = colorPicker?.value;
    indicatorType = accessoryTypeSelect?.value;
    visorColor = accessoryColorPicker?.value;

    toggleMenuVisibility(document.getElementById('start-menu'), [characterMenu]);
});

// Save settings and return to the start menu
saveSettingsButton?.addEventListener('click', () => {
    playerSpeed = playerSpeedInput ? parseFloat(playerSpeedInput.value) : playerSpeed;
    enemySpeed = enemySpeedInput ? parseFloat(enemySpeedInput.value) : enemySpeed;
    maxBarriers = barrierCountInput ? parseInt(barrierCountInput.value) : maxBarriers;
    maxEnemies = maxEnemyCountInput ? parseInt(maxEnemyCountInput.value) : maxEnemies;
    barrierColor = barrierColorInput ? barrierColorInput.value : barrierColor;
    backgroundColor = backgroundColorInput ? backgroundColorInput.value : backgroundColor;

    toggleMenuVisibility(document.getElementById('start-menu'), [settingsMenu]);
});

// Go back from character customization to start menu
backButtonCharacter?.addEventListener('click', () => {
    toggleMenuVisibility(document.getElementById('start-menu'), [characterMenu]);
});

// Go back from settings to start menu
backButtonSettings?.addEventListener('click', () => {
    toggleMenuVisibility(document.getElementById('start-menu'), [settingsMenu]);
});

// Start the game on button click
startButton?.addEventListener('click', () => {
    if (!ctx) {
        console.error('Canvas context not found. Cannot start the game.');
        return;
    }
    if (canvas.width <= 0 || canvas.height <= 0) {
        console.error('Invalid canvas dimensions. Please ensure the canvas size is set correctly.');
        return;
    }
    document.getElementById('start-menu').style.display = 'none';
    canvas.style.display = 'block';

    // Set the updated background color
    drawBackground();

    // Start the game loop
    startGame();
});

// Function to draw the background with the selected color
function drawBackground() {
    if (ctx) {
        ctx.fillStyle = backgroundColor; // Use customizable background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
