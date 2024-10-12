// weapons.js

// Function to shoot a bullet in the direction the player is facing
function shootBullet() {
    let bullet = {
        x: playerX + playerSize / 2 - 2.5,
        y: playerY + playerSize / 2 - 2.5,
        speed: 10,
        direction: playerDirection
    };

    bullets.push(bullet);
}

// Function to draw bullets and update their positions
function drawBullets() {
    ctx.fillStyle = '#FF0000'; // Red bullets
    bullets.forEach((bullet, index) => {
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
        ctx.fillRect(bullet.x - cameraX, bullet.y - cameraY, 5, 5);

        // Remove bullets that go off-screen
        if (bullet.y < 0 || bullet.y > worldHeight || bullet.x < 0 || bullet.x > worldWidth) {
            bullets.splice(index, 1);
        }
    });
}
