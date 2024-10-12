// game.js

function startGame() {
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
