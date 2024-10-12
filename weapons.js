// weapons.js

const bulletSize = 5;
const bulletSpeed = 5;

// Function to shoot a bullet
function shootBullet() {
    bullets.push({
        x: playerX + playerSize / 2 - 2.5, // Start in front of the player, centered
        y: playerY + playerSize / 2 - 2.5,
        speed: 10 // Bullet speed
    });
}

// Function to draw bullets and update their positions
function drawBullets() {
    ctx.fillStyle = '#FF0000'; // Red bullets
    bullets.forEach((bullet, index) => {
        bullet.y -= bullet.speed; // Move the bullet upwards

        // Draw the bullet
        ctx.fillRect(bullet.x - cameraX, bullet.y - cameraY, 5, 5);

        // Remove bullets that go off-screen
        if (bullet.y < 0 || bullet.y > worldHeight || bullet.x < 0 || bullet.x > worldWidth) {
            bullets.splice(index, 1);
        }
    });
}


// Detect spacebar press to shoot
window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        shootBullet();
    }
});
