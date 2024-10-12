// player.js

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
