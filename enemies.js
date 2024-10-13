// enemies.js

// Function to spawn an enemy at a random location
function spawnEnemy() {
    if (enemies.length < maxEnemies) {
        enemies.push({
            x: Math.random() * worldWidth,
            y: Math.random() * worldHeight,
            speed: enemySpeed
        });
    }
}

// Function to update enemies' movement and handle their interactions
function updateEnemies() {
    enemies.forEach((enemy, index) => {
        let newX = enemy.x;
        let newY = enemy.y;

        // Move the enemy towards the player
        if (enemy.x < playerX) newX += enemy.speed;
        if (enemy.x > playerX) newX -= enemy.speed;
        if (enemy.y < playerY) newY += enemy.speed;
        if (enemy.y > playerY) newY -= enemy.speed;

        // Check if the new position is colliding with any barriers
        if (!isCollidingWithBarrier(newX, enemy.y, playerSize)) {
            enemy.x = newX;
        }
        if (!isCollidingWithBarrier(enemy.x, newY, playerSize)) {
            enemy.y = newY;
        }

        // Draw the enemy on the canvas
        ctx.fillStyle = '#FF0000'; // Red color for enemies
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
