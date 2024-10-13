// game.js

function startGame() {
    // Spawn barriers with a max limit (e.g., 10 barriers)
    spawnBarriers(10);

    // Start spawning enemies and collectibles at specific intervals
    setInterval(spawnEnemy, 2000); // Spawn enemies every 2 seconds
    setInterval(spawnCollectible, 5000); // Spawn collectibles every 5 seconds

    // Start the main game loop
    gameLoop();
}

function gameLoop() {
    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update camera position to follow the player
    cameraX = Math.max(0, Math.min(worldWidth - canvas.width, playerX - canvas.width / 2));
    cameraY = Math.max(0, Math.min(worldHeight - canvas.height, playerY - canvas.height / 2));

    // Draw and update all game elements in correct order
    drawBackground(); // Draw the background (scrolling)
    drawBarriers(); // Draw barriers
    drawCollectibles(); // Draw collectibles
    updateEnemies(); // Move and draw enemies
    drawPlayer(); // Draw player
    drawBullets(); // Draw bullets

    checkCollectibleCollision(); // Check if player picks up any collectibles
    updatePlayerPosition(); // Update player movement

    // Continue the game loop
    requestAnimationFrame(gameLoop);
}

// Define drawBackground function to draw the game background
function drawBackground() {
    ctx.fillStyle = '#333'; // Dark gray background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Optionally, draw grid lines to provide visual cues of movement
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 0.5;

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

function resetGame() {
    console.log("Game Over");

    // Reset player position to the starting point
    playerX = worldWidth / 2 - playerSize / 2;
    playerY = worldHeight / 2 - playerSize / 2;

    // Clear all enemies, bullets, and collectibles arrays to reset game state
    enemies = [];
    bullets = [];
    collectibles = [];
}
