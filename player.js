// player.js

// Define player properties
let playerSize = 20;
let playerColor = '#00FF00'; // This can be changed through the start menu
let playerX = canvas.width / 2 - playerSize / 2;
let playerY = canvas.height / 2 - playerSize / 2;

// Function to draw the player
function drawPlayer() {
    ctx.fillStyle = playerColor;
    ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

// Function to update the player's position
function updatePlayerPosition() {
    if (keys.ArrowUp && playerY > 0) playerY -= playerSize;
    if (keys.ArrowDown && playerY < canvas.height - playerSize) playerY += playerSize;
    if (keys.ArrowLeft && playerX > 0) playerX -= playerSize;
    if (keys.ArrowRight && playerX < canvas.width - playerSize) playerX += playerSize;
}
