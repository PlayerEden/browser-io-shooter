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

// game.js

// Draw the game background (a grid for simplicity)
function drawBackground() {
    ctx.fillStyle = '#333'; // Dark gray background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid lines
    ctx.strokeStyle = '#555';
    for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// Update game loop to draw background
function gameLoop() {
    drawBackground(); // Draw the grid background
    drawPlayer();     // Draw player
    drawBullets();    // Draw bullets
    updateEnemies();  // Move and draw enemies
    updatePlayerPosition(); // Update player movement
    requestAnimationFrame(gameLoop);
}
