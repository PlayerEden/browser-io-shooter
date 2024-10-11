// enemies.js

let enemies = [];

function spawnEnemy() {
    enemies.push({
        x: Math.random() * canvas.width,
        y: 0, // Start from the top
        speed: 1
    });
}

function updateEnemies() {
    enemies.forEach(enemy => {
        // Move the enemy downward
        enemy.y += enemy.speed;
        ctx.fillStyle = '#FF0000'; // Red enemy
        ctx.fillRect(enemy.x, enemy.y, playerSize, playerSize);

        // Check collision with player
        if (playerX < enemy.x + playerSize &&
            playerX + playerSize > enemy.x &&
            playerY < enemy.y + playerSize &&
            playerY + playerSize > enemy.y) {
            console.log('Game Over');
            resetGame();
        }
    });

    // Remove enemies that go off-screen
    enemies = enemies.filter(enemy => enemy.y < canvas.height);
}
