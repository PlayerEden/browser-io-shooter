// collectibles.js

function spawnCollectible() {
    collectibles.push({
        x: Math.random() * (canvas.width - playerSize),
        y: Math.random() * (canvas.height - playerSize),
        collected: false
    });
}

function drawCollectibles() {
    collectibles.forEach(collectible => {
        if (!collectible.collected) {
            ctx.fillStyle = '#FFD700'; // Gold color for collectible
            ctx.fillRect(collectible.x, collectible.y, playerSize, playerSize);
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
