// game.js

let enemies = [];
let bullets = [];
let collectibles = [];

// Game world size (larger than the canvas)
const worldWidth = 1600;
const worldHeight = 1600;

// Camera properties
let cameraX = 0;
let cameraY = 0;

function startGame() {
    // Start spawning enemies and collectibles
    setInterval(spawnEnemy, 2000); // Spawn enemies every 2 seconds
    setInterval(spawnCollectible, 5000); // Spawn collectibles every 5 seconds

    // Start the game loop
    gameLoop();
}

function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update camera position to follow the player
    cameraX = Math.max(0, Math.min(worldWidth - canvas.width, playerX - canvas.width / 2));
    cameraY = Math.max(0, Math.min(worldHeight - canvas.height, playerY - canvas.height / 2));

    // Draw and update all game elements
    drawBackground(); // Draw the background (scrolling)
    drawBarriers(); // Draw barriers
    drawPlayer(); // Draw player
    drawBullets(); // Draw bullets
    updateEnemies(); // Move and draw enemies
    drawCollectibles(); // Draw collectibles
    checkCollectibleCollision(); // Check if player picks up any collectibles
    updatePlayerPosition(); // Update player movement

    // Continue the game loop
    requestAnimationFrame(gameLoop);
}

// Updated draw functions to use camera offsets

function drawBackground() {
    ctx.fillStyle = '#333'; // Dark gray background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines to indicate movement
    ctx.strokeStyle = '#555';
    for (let x = -cameraX % 50; x < canvas.width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = -cameraY % 50; y < canvas.height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

function drawPlayer() {
    ctx.fillStyle = playerColor;
    ctx.fillRect(playerX - cameraX, playerY - cameraY, playerSize, playerSize);
}

function drawCollectibles() {
    collectibles.forEach(collectible => {
        if (!collectible.collected) {
            ctx.fillStyle = '#FFD700'; // Gold color for collectible
            ctx.fillRect(collectible.x - cameraX, collectible.y - cameraY, playerSize, playerSize);
        }
    });
}

function updateEnemies() {
    enemies.forEach(enemy => {
        // Move the enemy toward the player
        if (enemy.x < playerX) enemy.x += enemy.speed;
        if (enemy.x > playerX) enemy.x -= enemy.speed;
        if (enemy.y < playerY) enemy.y += enemy.speed;
        if (enemy.y > playerY) enemy.y -= enemy.speed;

        // Draw the enemy
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(enemy.x - cameraX, enemy.y - cameraY, playerSize, playerSize);

        // Check collision with player
        if (
            playerX < enemy.x + playerSize &&
            playerX + playerSize > enemy.x &&
            playerY < enemy.y + playerSize &&
            playerY + playerSize > enemy.y
        ) {
            resetGame(); // Call resetGame when collision occurs
        }
    });

    // Remove enemies that go off-screen
    enemies = enemies.filter(enemy => enemy.y < worldHeight && enemy.x < worldWidth);
}

// Define resetGame to handle collision with enemy
function resetGame() {
    console.log("Game Over");

    // Reset player position to the starting point
    playerX = canvas.width / 2 - playerSize / 2;
    playerY = canvas.height / 2 - playerSize / 2;

    // Clear all enemies, bullets, and collectibles
    enemies = [];
    bullets = [];
    collectibles = [];
}
