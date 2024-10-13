// controls.js

// Track key presses for movement
let keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Function to update player position based on key presses
function updatePlayerPosition() {
    let newX = playerX;
    let newY = playerY;

    if (keys.ArrowUp && playerY > 0) {
        newY -= playerSpeed;
        playerDirection = 'up'; // Update direction
    }
    if (keys.ArrowDown && playerY < worldHeight - playerSize) {
        newY += playerSpeed;
        playerDirection = 'down'; // Update direction
    }
    if (keys.ArrowLeft && playerX > 0) {
        newX -= playerSpeed;
        playerDirection = 'left'; // Update direction
    }
    if (keys.ArrowRight && playerX < worldWidth - playerSize) {
        newX += playerSpeed;
        playerDirection = 'right'; // Update direction
    }

    // Check for collision with barriers before updating position
    if (!isCollidingWithBarrier(newX, playerY, playerSize)) {
        playerX = newX;
    }
    if (!isCollidingWithBarrier(playerX, newY, playerSize)) {
        playerY = newY;
    }
}
