// player.js

let movementSpeed = 2; // Set movement speed to 2px per key press

// Function to draw the player
function drawPlayer() {
    // Draw the main body of the player
    ctx.fillStyle = playerColor;
    ctx.fillRect(playerX - cameraX, playerY - cameraY, playerSize, playerSize);

    // Draw the "visor" based on the direction the player is facing
    ctx.fillStyle = visorColor; // Use a customizable visor color
    switch (playerDirection) {
        case 'up':
            ctx.fillRect(playerX - cameraX + 2, playerY - cameraY, playerSize - 4, 5); // Wider visor
            break;
        case 'down':
            ctx.fillRect(playerX - cameraX + 2, playerY - cameraY + 15, playerSize - 4, 5); // Wider visor
            break;
        case 'left':
            ctx.fillRect(playerX - cameraX, playerY - cameraY + 2, 5, playerSize - 4); // Wider visor
            break;
        case 'right':
            ctx.fillRect(playerX - cameraX + 15, playerY - cameraY + 2, 5, playerSize - 4); // Wider visor
            break;
    }
}

// Function to update player position
function updatePlayerPosition() {
    if (keys.ArrowUp && playerY > 0) {
        playerY -= movementSpeed;
        playerDirection = 'up'; // Update direction
    }
    if (keys.ArrowDown && playerY < worldHeight - playerSize) {
        playerY += movementSpeed;
        playerDirection = 'down'; // Update direction
    }
    if (keys.ArrowLeft && playerX > 0) {
        playerX -= movementSpeed;
        playerDirection = 'left'; // Update direction
    }
    if (keys.ArrowRight && playerX < worldWidth - playerSize) {
        playerX += movementSpeed;
        playerDirection = 'right'; // Update direction
    }
}
