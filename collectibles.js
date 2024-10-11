// collectibles.js

let collectibles = [];

// Function to spawn a collectible at a random position
function spawnCollectible() {
    collectibles.push({
        x: Math.random() * (canvas.width - playerSize),
        y: Math.random() * (canvas.height - playerSize),
        collected: false
    });
}

// Function to draw collectibles on the canvas
function drawCollectibles() {
    collectibles.forEach(collectible => {
        if (!collectible.collected) {
            ctx.fillStyle = '#FFD700'; // Gold color for collectible
            ctx.fillRect(collectible.x, collectible.y, playerSize, playerSize);
        }
    });
}

// Function to check if player collides with a collectible
function checkCollectibleCollision() {
    collectibles.forEach((collectible, index) => {
        if (!collectible.collected &&
            playerX < collectible.x + playerSize &&
            playerX + playerSize > collectible.x &&
            playerY < collectible.y + playerSize &&
            playerY + playerSize > collectible.y) {
            collectible.collected = true;
            console.log("Collectible found!");
        }
    });
}

// Call this function periodically to spawn collectibles
setInterval(spawnCollectible, 5000); // Spawns a collectible every 5 seconds
