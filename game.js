// game.js

let gameOver = false; // Flag to track whether the game is over

function startGame() {
    gameOver = false; // Reset the gameOver flag

    // Increase the barrier limit (e.g., 20 barriers instead of 10)
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

    // Create a Game Over menu
    const gameOverMenu = document.createElement('div');
    gameOverMenu.id = 'game-over-menu';
    gameOverMenu.style.display = 'flex';
    gameOverMenu.style.flexDirection = 'column';
    gameOverMenu.style.alignItems = 'center';
    gameOverMenu.style.justifyContent = 'center';
    gameOverMenu.style.position = 'absolute';
    gameOverMenu.style.top = '50%';
    gameOverMenu.style.left = '50%';
    gameOverMenu.style.transform = 'translate(-50%, -50%)';
    gameOverMenu.style.backgroundColor = '#444';
    gameOverMenu.style.padding = '20px';
    gameOverMenu.style.borderRadius = '10px';
    gameOverMenu.style.color = 'white';

    // Add "Game Over" text
    const gameOverText = document.createElement('h1');
    gameOverText.innerText = 'Game Over';
    gameOverMenu.appendChild(gameOverText);

    // Add Restart button
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart';
    restartButton.style.margin = '10px';
    restartButton.onclick = () => {
        gameOverMenu.remove(); // Remove the Game Over menu
        restartGame(); // Restart the game
    };
    gameOverMenu.appendChild(restartButton);

    // Add Main Menu button
    const mainMenuButton = document.createElement('button');
    mainMenuButton.innerText = 'Main Menu';
    mainMenuButton.style.margin = '10px';
    mainMenuButton.onclick = () => {
        gameOverMenu.remove(); // Remove the Game Over menu
        showMainMenu(); // Return to the main menu
    };
    gameOverMenu.appendChild(mainMenuButton);

    // Add the Game Over menu to the document body
    document.body.appendChild(gameOverMenu);
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

// Define drawBackground function to draw the game background
function drawBackground() {
    ctx.fillStyle = backgroundColor; // Use customizable background color
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
