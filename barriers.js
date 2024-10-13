// barriers.js

// Initialize an empty array for barriers
let barriers = [];

// Function to randomly spawn barriers
function spawnBarriers(maxBarriers) {
    barriers = []; // Clear any existing barriers
    for (let i = 0; i < maxBarriers; i++) {
        // Random x and y positions within the bounds of the world
        let barrierX = Math.floor(Math.random() * (worldWidth - 50));
        let barrierY = Math.floor(Math.random() * (worldHeight - 50));

        // Barrier size between 30 and 60 pixels
        let barrierWidth = Math.floor(Math.random() * 30) + 30;
        let barrierHeight = Math.floor(Math.random() * 30) + 30;

        barriers.push({ x: barrierX, y: barrierY, width: barrierWidth, height: barrierHeight });
    }
}

// Function to draw barriers
function drawBarriers() {
    ctx.fillStyle = '#808080'; // Gray color for barriers
    barriers.forEach(barrier => {
        ctx.fillRect(barrier.x - cameraX, barrier.y - cameraY, barrier.width, barrier.height);
    });
}

// Function to check collision with barriers
function isCollidingWithBarrier(x, y, size) {
    return barriers.some(barrier => {
        return (
            x < barrier.x + barrier.width &&
            x + size > barrier.x &&
            y < barrier.y + barrier.height &&
            y + size > barrier.y
        );
    });
}
