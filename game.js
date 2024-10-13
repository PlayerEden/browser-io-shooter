// weapons.js

// Function to shoot a bullet in the direction the player is facing
function shootBullet() {
    let bullet = {
        x: playerX + playerSize / 2 - 2.5,
        y: playerY + playerSize / 2 - 2.5,
        speed: 10,
        direction: playerDirection,
        size: 5
    };

    bullets.push(bullet);
}

// Function to update bullets and handle their interactions
function updateBullets() {
    ctx.fillStyle = '#FFFF00'; // Yellow bullets
    bullets.forEach((bullet, bulletIndex) => {
        // Move the bullet in the direction it was shot
        switch (bullet.direction) {
            case 'up':
                bullet.y -= bullet.speed;
                break;
            case 'down':
                bullet.y += bullet.speed;
                break;
            case 'left':
                bullet.x -= bullet.speed;
                break;
            case 'right':
                bullet.x += bullet.speed;
                break;
        }

        // Draw the bullet
        ctx.fillRect(bullet.x - cameraX, bullet.y - cameraY, bullet.size, bullet.size);

        // Remove bullets that go off-screen
        if (bullet.y < 0 || bullet.y > worldHeight || bullet.x < 0 || bullet.x > worldWidth) {
            bullets.splice(bulletIndex, 1);
            return;
        }

        // Check if bullet collides with any barriers
        if (isCollidingWithBarrier(bullet.x, bullet.y, bullet.size)) {
            bullets.splice(bulletIndex, 1); // Remove bullet if it hits a barrier
            return;
        }

        // Check if bullet collides with any enemies
        enemies.forEach((enemy, enemyIndex) => {
            if (
                bullet.x < enemy.x + playerSize &&
                bullet.x + bullet.size > enemy.x &&
                bullet.y < enemy.y + playerSize &&
                bullet.y + bullet.size > enemy.y
            ) {
                // Remove both the bullet and the enemy
                bullets.splice(bulletIndex, 1);
                enemies.splice(enemyIndex, 1);
                return;
            }
        });
    });
}
