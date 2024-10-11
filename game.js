// game.js

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawBullets();
    updateEnemies();
    updatePlayerPosition();
    requestAnimationFrame(gameLoop);
}

// Initialize the game (e.g., start the loop after the start menu)
function startGame() {
    setInterval(spawnEnemy, 2000); // Spawns an enemy every 2 seconds
    gameLoop(); // Start the main game loop
}
