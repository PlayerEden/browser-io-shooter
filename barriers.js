// barriers.js

let barriers = [];

// Function to spawn barriers with a maximum limit
function spawnBarriers(maxBarriers) {
    barriers = [];
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

        if (!isOverlapping) {
            barriers.push(barrier);
        }
    }
}

function drawBarriers() {
    ctx.fillStyle = '#808080'; // Gray for barriers
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
