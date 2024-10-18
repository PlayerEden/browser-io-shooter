// player.js

// Function to draw the player
function drawPlayer() {
    // Draw the main body of the player with "rounded" corners by skipping each corner
    ctx.fillStyle = playerColor;

    // Draw the main body, excluding the corners
    // Top row (excluding corners)
    ctx.fillRect(playerX - cameraX + 1, playerY - cameraY, playerSize - 2, 1);
    // Middle rows (full width)
    ctx.fillRect(playerX - cameraX, playerY - cameraY + 1, playerSize, playerSize - 2);
    // Bottom row (excluding corners)
    ctx.fillRect(playerX - cameraX + 1, playerY - cameraY + playerSize - 1, playerSize - 2, 1);

    // Draw the "accessory" (either visor or eyes) based on the selected type
    ctx.fillStyle = visorColor; // Use customizable accessory color
    if (indicatorType === 'visor') {
        // Draw a wider visor in all directions
        switch (playerDirection) {
            case 'up':
                ctx.fillRect(playerX - cameraX + 2, playerY - cameraY, playerSize - 4, 5); // Wide visor across the top
                break;
            case 'down':
                ctx.fillRect(playerX - cameraX + 2, playerY - cameraY + playerSize - 5, playerSize - 4, 5); // Wide visor across the bottom
                break;
            case 'left':
                ctx.fillRect(playerX - cameraX, playerY - cameraY + 5, 5, playerSize - 10); // Wide visor on the left side
                break;
            case 'right':
                ctx.fillRect(playerX - cameraX + playerSize - 5, playerY - cameraY + 5, 5, playerSize - 10); // Wide visor on the right side
                break;
        }
    } else if (indicatorType === 'eyes') {
        // Draw two small eyes based on player direction, evenly spaced towards the front
        switch (playerDirection) {
            case 'up':
                ctx.fillRect(playerX - cameraX + 5, playerY - cameraY + 3, 3, 3); // Left eye
                ctx.fillRect(playerX - cameraX + 12, playerY - cameraY + 3, 3, 3); // Right eye
                break;
            case 'down':
                ctx.fillRect(playerX - cameraX + 5, playerY - cameraY + playerSize - 6, 3, 3); // Left eye
                ctx.fillRect(playerX - cameraX + 12, playerY - cameraY + playerSize - 6, 3, 3); // Right eye
                break;
            case 'left':
                ctx.fillRect(playerX - cameraX + 3, playerY - cameraY + 5, 3, 3); // Top eye
                ctx.fillRect(playerX - cameraX + 3, playerY - cameraY + 12, 3, 3); // Bottom eye
                break;
            case 'right':
                ctx.fillRect(playerX - cameraX + playerSize - 6, playerY - cameraY + 5, 3, 3); // Top eye
                ctx.fillRect(playerX - cameraX + playerSize - 6, playerY - cameraY + 12, 3, 3); // Bottom eye
                break;
        }
    }
}

// Function to update player position
function updatePlayerPosition() {
    if (keys['ArrowUp'] && playerY > 0) {
        playerY -= playerSpeed;
        playerDirection = 'up';
    }
    if (keys['ArrowDown'] && playerY < worldHeight - playerSize) {
        playerY += playerSpeed;
        playerDirection = 'down';
    }
    if (keys['ArrowLeft'] && playerX > 0) {
        playerX -= playerSpeed;
        playerDirection = 'left';
    }
    if (keys['ArrowRight'] && playerX < worldWidth - playerSize) {
        playerX += playerSpeed;
        playerDirection = 'right';
    }
}

// Function to reset player position when restarting the game
function resetPlayerPosition() {
    playerX = worldWidth / 2 - playerSize / 2;
    playerY = worldHeight / 2 - playerSize / 2;
}
