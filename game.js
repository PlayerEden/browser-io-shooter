// game.js

function startGame() {
    gameOver = false; // Reset the gameOver flag

    // Increase the barrier limit
    spawnBarriers(maxBarriers);

    // Start spawning enemies and collectibles at specific intervals
    setInterval(spawnEnemy, 2000); // Spawn enemies every 2 seconds
    setInterval(spawnCollectible, 5000); // Spawn collectibles every 5 seconds

    // Start the main game loop
    gameLoop();
}

function gameLoop() {
    if (gameOver) return; // Stop the game loop if the game is over

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
    updateBullets(); // Move and draw bullets
    drawPlayer(); // Draw player

    checkCollectibleCollision(); // Check if player picks up any collectibles
    updatePlayerPosition(); // Update player movement

    // Continue the game loop
    requestAnimationFrame(gameLoop);
}

function resetGame() {
    console.log("Game Over");
    gameOver = true; // Set game over flag to true to stop the game loop

    // Display Game Over screen
    displayGameOverMenu();
}

function displayGameOverMenu() {
    // Hide the game canvas
    canvas.style.display = 'none';

    // Create a Game Over menu if it doesn't exist
    let gameOverMenu = document.getElementById('game-over-menu');
    if (!gameOverMenu) {
        gameOverMenu = document.createElement('div');
        gameOverMenu.id = 'game-over-menu';
        gameOverMenu.innerHTML = `
            <h1>Game Over</h1>
            <button id="restart-button">Restart</button>
            <button id="main-menu-button">Main Menu</button>
        `;
        document.body.appendChild(gameOverMenu);
    }

    // Show Game Over menu
    gameOverMenu.style.display = 'flex';

    // Set button actions
    document.getElementById('restart-button').onclick = restartGame;
    document.getElementById('main-menu-button').onclick = showMainMenu;
}

function restartGame() {
    gameOver = false; // Reset gameOver flag

    // Reset player position to the starting point
    playerX = worldWidth / 2 - playerSize / 2;
    playerY = worldHeight / 2 - playerSize / 2;

    // Clear all enemies, bullets, and collectibles arrays to reset game state
    enemies = [];
    bullets = [];
    collectibles = [];

    // Hide the Game Over menu
    document.getElementById('game-over-menu').style.display = 'none';

    // Show the canvas again and start the game loop
    canvas.style.display = 'block';
    gameLoop();
}

function showMainMenu() {
    gameOver = true; // Ensure game loop does not run

    // Hide the game canvas
    canvas.style.display = 'none';

    // Show the start menu
    document.getElementById('start-menu').style.display = 'flex';
}
