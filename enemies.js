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
