// barriers.js

// Function to spawn barriers with a maximum limit
function spawnBarriers(maxBarriers) {
    barriers = []; // Clear previous barriers
    for (let i = 0; i < maxBarriers; i++) {
        const barrier = {
            x: Math.random() * worldWidth,
            y: Math.random() * worldHeight,
            width: 50,
            height: 50
        };

        // Ensure barriers do not overlap by checking distance from existing barriers
        let isOverlapping = barriers.some(existingBarrier => {
            return (
                Math.abs(existingBarrier.x - barrier.x) < barrier.width &&
                Math.abs(existingBarrier.y - barrier.y) < barrier.height
            );
        });

        // Add the barrier only if it's not overlapping with others
        if (!isOverlapping) {
            barriers.push(barrier);
        }
    }
}

// Function to draw barriers with the selected color
function drawBarriers() {
    ctx.fillStyle = barrierColor; // Use customizable barrier color from settings
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
