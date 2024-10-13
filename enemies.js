// enemies.js

// Function to spawn an enemy
function spawnEnemy() {
    if (enemies.length < maxEnemies) { // Ensure we do not exceed max enemy count
        enemies.push({
            x: Math.random() * worldWidth,
            y: Math.random() * worldHeight,
            speed: enemySpeed // Use saved enemy speed from settings
        });
    }
}

// Function to update enemies
function updateEnemies() {
    enemies.forEach(enemy => {
        let newX = enemy.x;
        let newY = enemy.y;

        // Move the enemy towards the player with the updated speed
        if (enemy.x < playerX) newX += enemySpeed;
        if (enemy.x > playerX) newX -= enemySpeed;
        if (enemy.y < playerY) newY += enemySpeed;
        if (enemy.y > playerY) newY -= enemySpeed;

        // Check if the new position is colliding with any barriers
        if (!isCollidingWithBarrier(newX, enemy.y, playerSize)) {
            enemy.x = newX;
        }
        if (!isCollidingWithBarrier(enemy.x, newY, playerSize)) {
            enemy.y = newY;
        }

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
}
