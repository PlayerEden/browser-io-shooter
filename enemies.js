// enemies.js

let enemies = []; // Array to store enemies

// Function to spawn an enemy at a random location within the world
function spawnEnemy() {
    const enemy = {
        x: Math.random() * (worldWidth - 20), // Ensure enemy is within boundaries
        y: Math.random() * (worldHeight - 20),
        size: 20,
        speed: enemySpeed
    };
    enemies.push(enemy);
}

// Function to update enemies' movement and check for collisions
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
        if (!isCollidingWithBarrier(newX, enemy.y, enemy.size)) {
            enemy.x = newX;
        }
        if (!isCollidingWithBarrier(enemy.x, newY, enemy.size)) {
            enemy.y = newY;
        }

        // Draw the enemy on the canvas
        ctx.fillStyle = '#FF0000'; // Red color for enemies
        ctx.fillRect(enemy.x - cameraX, enemy.y - cameraY, enemy.size, enemy.size);

        // Check for collision with the player
        if (
            playerX < enemy.x + enemy.size &&
            playerX + playerSize > enemy.x &&
            playerY < enemy.y + enemy.size &&
            playerY + playerSize > enemy.y
        ) {
            if (!gameOver) {
                gameOver = true;
                resetGame(); // Call resetGame when a collision occurs
            }
        }
    });
}

// Function to reset enemies when restarting the game
function resetEnemies() {
    enemies = [];
}
