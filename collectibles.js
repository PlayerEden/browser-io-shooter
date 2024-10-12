// collectibles.js

// Declare collectibles array in globals.js to avoid re-declaration
function spawnCollectible() {
    collectibles.push({
        x: Math.random() * (worldWidth - playerSize),
        y: Math.random() * (worldHeight - playerSize),
        collected: false
    });
}

function drawCollectibles() {
    collectibles.forEach(collectible => {
        if (!collectible.collected) {
            ctx.fillStyle = '#FFD700'; // Gold color for collectible
            ctx.fillRect(collectible.x - cameraX, collectible.y - cameraY, playerSize, playerSize);
        }
    });
}

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
