// enemies.js

// Function to spawn an enemy
function spawnEnemy() {
    enemies.push({
        x: Math.random() * worldWidth,
        y: Math.random() * worldHeight,
        speed: 1
    });
}

// Function to update enemies
function updateEnemies() {
    enemies.forEach(enemy => {
        // Move the enemy towards the player
        if (enemy.x < playerX) enemy.x += enemy.speed;
        if (enemy.x > playerX) enemy.x -= enemy.speed;
        if (enemy.y < playerY) enemy.y += enemy.speed;
        if (enemy.y > playerY) enemy.y -= enemy.speed;

        // Draw the enemy on the canvas
        ctx.fillStyle = '#FF0000'; // Red enemy color
        ctx.fillRect(enemy.x - cameraX, enemy.y - cameraY, playerSize, playerSize);

        // Check for collision with the player
        if (
            playerX < enemy.x + playerSize &&
            playerX + playerSize > enemy.x &&
            playerY < enemy.y + playerSize &&
            playerY + playerSize > enemy.y
        ) {
            resetGame(); // Call resetGame when a collision occurs
        }
    });

    // Remove enemies that go off-screen (optional)
    enemies = enemies.filter(enemy => enemy.y < worldHeight && enemy.x < worldWidth);
}
