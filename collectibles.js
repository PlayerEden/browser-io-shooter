// collectibles.js

let collectibles = []; // Array to store collectibles

// Function to spawn a collectible at a random location within the world
function spawnCollectible() {
    const collectible = {
        x: Math.random() * worldWidth,
        y: Math.random() * worldHeight,
        size: 15,
        collected: false
    };
    collectibles.push(collectible);
}

// Function to draw collectibles on the canvas
function drawCollectibles() {
    ctx.fillStyle = '#FFD700'; // Gold color for collectibles
    collectibles.forEach(collectible => {
        if (!collectible.collected) {
            ctx.fillRect(collectible.x - cameraX, collectible.y - cameraY, collectible.size, collectible.size);
        }
    });
}

// Function to check if the player has collided with a collectible
function checkCollectibleCollision() {
    collectibles.forEach((collectible, index) => {
        if (!collectible.collected &&
            playerX < collectible.x + collectible.size &&
            playerX + playerSize > collectible.x &&
            playerY < collectible.y + collectible.size &&
            playerY + playerSize > collectible.y) {
            collectible.collected = true;
            console.log("Collectible found!");

            // Optional: Add some game effect, like increasing score or health
        }
    });
}

// Function to reset collectibles when restarting the game
function resetCollectibles() {
    collectibles = [];
}
