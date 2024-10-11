// enemies.js

let enemies = [];

function spawnEnemy() {
    enemies.push({
        x: Math.random() * canvas.width,
        y: 0,
        speed: 1
    });
}

function updateEnemies() {
    enemies.forEach(enemy => {
        enemy.y += enemy.speed;
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(enemy.x, enemy.y, playerSize, playerSize);

        // Check collision with player
        if (playerX < enemy.x + playerSize && playerX + playerSize > enemy.x &&
            playerY < enemy.y + playerSize && playerY + playerSize > enemy.y) {
            console.log('Game Over');
            resetGame();
        }
    });
    enemies = enemies.filter(enemy => enemy.y < canvas.height);
}

function spawnEnemy() {
    enemies.push({
        x: Math.random() * canvas.width,  // Random position on the canvas
        y: Math.random() * canvas.height, // Random position on the canvas
        speed: 1
    });
}

function updateEnemies() {
    enemies.forEach(enemy => {
        // Simple AI: Move enemy toward player
        if (enemy.x < playerX) enemy.x += enemy.speed;
        if (enemy.x > playerX) enemy.x -= enemy.speed;
        if (enemy.y < playerY) enemy.y += enemy.speed;
        if (enemy.y > playerY) enemy.y -= enemy.speed;

        // Draw enemy
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(enemy.x, enemy.y, playerSize, playerSize);

        // Check for collision with the player
        if (playerX < enemy.x + playerSize &&
            playerX + playerSize > enemy.x &&
            playerY < enemy.y + playerSize &&
            playerY + playerSize > enemy.y) {
            console.log('Game Over');
            resetGame(); // Placeholder function for resetting the game
        }
    });

    // Remove enemies off-screen (optional)
    enemies = enemies.filter(enemy => enemy.y < canvas.height && enemy.x < canvas.width);
}
