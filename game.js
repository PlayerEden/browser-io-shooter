// game.js

function startGame() {
    setInterval(spawnEnemy, 2000); // Start spawning enemies every 2 seconds
    setInterval(spawnCollectible, 5000); // Start spawning collectibles every 5 seconds
    gameLoop(); // Start the main game loop
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    
    drawBackground(); // Draw the grid background
    drawPlayer();     // Draw the player
    drawBullets();    // Draw and update bullets
    updateEnemies();  // Move and draw enemies
    drawCollectibles(); // Draw collectibles
    checkCollectibleCollision(); // Check if player picks up any collectibles
    updatePlayerPosition(); // Handle player movement

    requestAnimationFrame(gameLoop); // Continue the game loop
}


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
