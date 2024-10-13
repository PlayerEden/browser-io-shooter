// startMenu.js

// Start menu and other elements
const startButton = document.getElementById('start-button');
const characterButton = document.getElementById('character-button');
const settingsButton = document.getElementById('settings-button');
const characterMenu = document.getElementById('character-menu');
const settingsMenu = document.getElementById('settings-menu');
const backButton = document.querySelectorAll('.back-button'); // Select all buttons with class 'back-button'
const saveSettingsButton = document.getElementById('save-settings-button');
const saveCharacterButton = document.getElementById('save-character-button');
const colorPicker = document.getElementById('color-picker');

// Settings inputs
const playerSpeedInput = document.getElementById('player-speed');
const enemySpeedInput = document.getElementById('enemy-speed');
const barrierCountInput = document.getElementById('barrier-count');
const maxEnemyCountInput = document.getElementById('max-enemy-count');
const barrierColorInput = document.getElementById('barrier-color');
const backgroundColorInput = document.getElementById('background-color');

// Default settings (initialization)
let playerSpeed = parseFloat(playerSpeedInput.value);
let enemySpeed = parseFloat(enemySpeedInput.value);
let maxBarriers = parseInt(barrierCountInput.value);
let maxEnemies = parseInt(maxEnemyCountInput.value);
let barrierColor = barrierColorInput.value;
let backgroundColor = backgroundColorInput.value;

// Function to hide all menus
function hideAllMenus() {
    document.getElementById('start-menu').style.display = 'none';
    characterMenu.style.display = 'none';
    settingsMenu.style.display = 'none';
    canvas.style.display = 'none';
}

// Function to show the start menu
function showStartMenu() {
    hideAllMenus();
    document.getElementById('start-menu').style.display = 'flex';
}

// Show the character customization menu
characterButton.addEventListener('click', () => {
    hideAllMenus();
    characterMenu.style.display = 'block';
});

// Show the settings menu
settingsButton.addEventListener('click', () => {
    hideAllMenus();
    settingsMenu.style.display = 'block';
});

// Save character customization and return to the start menu
saveCharacterButton.addEventListener('click', () => {
    // Save character color, accessory type, and accessory color
    playerColor = colorPicker.value;
    indicatorType = accessoryTypeSelect.value;
    visorColor = accessoryColorPicker.value;

    showStartMenu();
});

// Save settings and return to the start menu
saveSettingsButton.addEventListener('click', () => {
    playerSpeed = parseFloat(playerSpeedInput.value);
    enemySpeed = parseFloat(enemySpeedInput.value);
    maxBarriers = parseInt(barrierCountInput.value);
    maxEnemies = parseInt(maxEnemyCountInput.value);
    barrierColor = barrierColorInput.value;
    backgroundColor = backgroundColorInput.value;

    showStartMenu();
});

// Go back from settings or character customization to start menu
backButton.forEach(button => {
    button.addEventListener('click', () => {
        showStartMenu();
    });
});

// Start the game on button click
startButton.addEventListener('click', () => {
    hideAllMenus();
    canvas.style.display = 'block';

    // Set the updated background color
    drawBackground();

    // Start the game loop
    startGame();
});

// Function to draw the background with the selected color
function drawBackground() {
    ctx.fillStyle = backgroundColor; // Use customizable background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
