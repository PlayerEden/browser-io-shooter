// controls.js

// Object to track which keys are being pressed
let keys = {};

// Event listeners to handle keydown and keyup events
window.addEventListener('keydown', (event) => {
    keys[event.key] = true;

    // Prevent default scrolling behavior when arrow keys are pressed
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
    }
});

window.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

// Function to update player movement based on pressed keys
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
