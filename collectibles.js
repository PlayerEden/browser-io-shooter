// collectibles.js

let collectibles = [];

function spawnCollectible() {
    collectibles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
    });
}

function drawCollectibles() {
    collectibles.forEach(collectible => {
        ctx.fillStyle = '#FFD700'; // Gold color for collectible
        ctx.fillRect(collectible.x, collectible.y, playerSize, playerSize);
    });
}

function checkCollectibleCollision() {
    collectibles.forEach((collectible, index) => {
        if (playerX < collectible.x + playerSize &&
            playerX + playerSize > collectible.x &&
            playerY < collectible.y + playerSize &&
            playerY + playerSize > collectible.y) {
            console.log('Collected!');
            collectibles.splice(index, 1); // Remove collectible once collected
        }
    });
}

// Call spawnCollectible periodically
setInterval(spawnCollectible, 5000); // Spawns a collectible every 5 seconds

// Add collectibles to the game loop
function gameLoop() {
    drawBackground();
    drawPlayer();
    drawBullets();
    updateEnemies();
    drawCollectibles();   // Draw collectibles
    checkCollectibleCollision();  // Check for collisions with collectibles
    updatePlayerPosition();
    requestAnimationFrame(gameLoop);
}
