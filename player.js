// player.js

let movementSpeed = 2; // Set movement speed to 2px per key press

// Function to draw the player
function drawPlayer() {
    // Draw the main body of the player
    ctx.fillStyle = playerColor;
    ctx.fillRect(playerX - cameraX, playerY - cameraY, playerSize, playerSize);

    // Draw the "accessory" (either visor or eyes) based on the selected type
    ctx.fillStyle = visorColor; // Use customizable accessory color
    if (indicatorType === 'visor') {
        // Draw a wider visor
        switch (playerDirection) {
            case 'up':
                ctx.fillRect(playerX - cameraX + 2, playerY - cameraY, playerSize - 4, 5);
                break;
            case 'down':
                ctx.fillRect(playerX - cameraX + 2, playerY - cameraY + 15, playerSize - 4, 5);
                break;
            case 'left':
                ctx.fillRect(playerX - cameraX, playerY - cameraY + 5, 5, playerSize - 10); // Wider left visor
                break;
            case 'right':
                ctx.fillRect(playerX - cameraX + 15, playerY - cameraY + 5, 5, playerSize - 10); // Wider right visor
                break;
        }
    } else if (indicatorType === 'eyes') {
        // Draw two small eyes based on player direction
        switch (playerDirection) {
            case 'up':
                ctx.fillRect(playerX - cameraX + 5, playerY - cameraY + 4, 3, 3);
                ctx.fillRect(playerX - cameraX + 12, playerY - cameraY + 4, 3, 3);
                break;
            case 'down':
                ctx.fillRect(playerX - cameraX + 5, playerY - cameraY + 12, 3, 3);
                ctx.fillRect(playerX - cameraX + 12, playerY - cameraY + 12, 3, 3);
                break;
            case 'left':
                ctx.fillRect(playerX - cameraX + 4, playerY - cameraY + 5, 3, 3);
                ctx.fillRect(playerX - cameraX + 4, playerY - cameraY + 12, 3, 3);
                break;
            case 'right':
                ctx.fillRect(playerX - cameraX + 12, playerY - cameraY + 5, 3, 3);
                ctx.fillRect(playerX - cameraX + 12, playerY - cameraY + 12, 3, 3);
                break;
        }
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
