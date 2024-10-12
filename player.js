// player.js

let playerSize = 20;
let playerColor = '#00FF00'; // Default color, will be changed via startMenu.js

// Initialize player in the center of the game world (not just the canvas)
let playerX = worldWidth / 2 - playerSize / 2;
let playerY = worldHeight / 2 - playerSize / 2;

let movementSpeed = 2; // Set movement speed to 2px per key press

// Function to draw the player
function drawPlayer() {
    ctx.fillStyle = playerColor;
    ctx.fillRect(playerX - cameraX, playerY - cameraY, playerSize, playerSize);
}

// Function to update player position
function updatePlayerPosition() {
    if (keys.ArrowUp && playerY > 0) playerY -= movementSpeed;
    if (keys.ArrowDown && playerY < worldHeight - playerSize) playerY += movementSpeed;
    if (keys.ArrowLeft && playerX > 0) playerX -= movementSpeed;
    if (keys.ArrowRight && playerX < worldWidth - playerSize) playerX += movementSpeed;
}
