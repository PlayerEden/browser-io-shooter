// player.js

let playerSize = 20;
let playerColor = '#00FF00'; // Default color, will be changed via startMenu.js

let playerX = canvas.width / 2 - playerSize / 2;
let playerY = canvas.height / 2 - playerSize / 2;

// Further adjust the movement speed to make it slower
let movementSpeed = 2; // Set movement speed to 2px per key press

// Function to draw the player
function drawPlayer() {
    ctx.fillStyle = playerColor;
    ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

// Function to update player position
function updatePlayerPosition() {
    if (keys.ArrowUp && playerY > 0) playerY -= movementSpeed;
    if (keys.ArrowDown && playerY < canvas.height - playerSize) playerY += movementSpeed;
    if (keys.ArrowLeft && playerX > 0) playerX -= movementSpeed;
    if (keys.ArrowRight && playerX < canvas.width - playerSize) playerX += movementSpeed;
}
