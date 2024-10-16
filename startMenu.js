// startMenu.js

// Set up the canvas and context globally
const canvas = document.getElementById('gameCanvas');
const ctx = canvas?.getContext('2d');

// Set canvas size to make the map larger
if (canvas) {
    canvas.width = 600; // Reduced width for a smaller playing area
    canvas.height = 400; // Reduced height
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
let playerSpeed = parseFloat(playerSpeedInput?.value || 1);
let enemySpeed = parseFloat(enemySpeedInput?.value || 1);
let maxBarriers = parseInt(barrierCountInput?.value || 10);
let maxEnemies = parseInt(maxEnemyCountInput?.value || 5);
let barrierColor = barrierColorInput?.value || '#808080';
let backgroundColor = backgroundColorInput?.value || '#333';

// Show the character customization menu
characterButton?.addEventListener('click', () => {
    document.getElementById('start-menu').style.display = 'none';
    characterMenu.style.display = 'block';
});

// Show the settings menu
settingsButton?.addEventListener('click', () => {
    document.getElementById('start-menu').style.display = 'none';
    settingsMenu.style.display = 'block';
});

// Save character customization and return to the start menu
saveCharacterButton?.addEventListener('click', () => {
    // Save character color, accessory type, and accessory color
    playerColor = colorPicker?.value;
    indicatorType = accessoryTypeSelect?.value;
    visorColor = accessoryColorPicker?.value;

    characterMenu.style.display = 'none';
    document.getElementById('start-menu').style.display = 'flex';
});

// Save settings and return to the start menu
saveSettingsButton?.addEventListener('click', () => {
    playerSpeed = parseFloat(playerSpeedInput?.value);
    enemySpeed = parseFloat(enemySpeedInput?.value);
    maxBarriers = parseInt(barrierCountInput?.value);
    maxEnemies = parseInt(maxEnemyCountInput?.value);
    barrierColor = barrierColorInput?.value;
    backgroundColor = backgroundColorInput?.value;

    settingsMenu.style.display = 'none';
    document.getElementById('start-menu').style.display = 'flex';
});

// Go back from character customization to start menu
backButtonCharacter?.addEventListener('click', () => {
    characterMenu.style.display = 'none';
    document.getElementById('start-menu').style.display = 'flex';
});

// Go back from settings to start menu
backButtonSettings?.addEventListener('click', () => {
    settingsMenu.style.display = 'none';
    document.getElementById('start-menu').style.display = 'flex';
});

// Start the game on button click
startButton?.addEventListener('click', () => {
    document.getElementById('start-menu').style.display = 'none';
    canvas.style.display = 'block';

    // Set the updated background color
    if (typeof drawBackground === 'function') {
        drawBackground();
    }

    // Start the game loop
    if (typeof startGame === 'function') {
        startGame();
    }
});

// Function to draw the background with the selected color
function drawBackground() {
    if (ctx) {
        ctx.fillStyle = backgroundColor; // Use customizable background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
