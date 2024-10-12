// barriers.js

let barriers = [
    { x: 300, y: 400, width: 100, height: 20 },
    { x: 800, y: 600, width: 50, height: 100 },
    { x: 1200, y: 200, width: 150, height: 20 },
];

function drawBarriers() {
    ctx.fillStyle = '#808080'; // Gray for barriers
    barriers.forEach(barrier => {
        ctx.fillRect(barrier.x - cameraX, barrier.y - cameraY, barrier.width, barrier.height);
    });
}
