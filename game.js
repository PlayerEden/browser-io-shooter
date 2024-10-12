// game.js

let enemies = [];
let bullets = [];
let collectibles = [];

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

    // Draw and update all game elements
    drawBackground(); // Draw the background (scrolling)
    drawPlayer(); // Draw player
    drawBullets(); // Draw bullets
    updateEnemies(); // Move and draw enemies
    drawCollectibles(); // Draw collectibles
    checkCollectibleCollision(); // Check if player picks up any collectibles
    updatePlayerPosition(); // Update player movement

    // Continue the game loop
    requestAnimationFrame(gameLoop);
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
