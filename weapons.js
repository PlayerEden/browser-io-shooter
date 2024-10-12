// weapons.js

const bulletSize = 5;
const bulletSpeed = 5;

// Shoot a bullet
function shootBullet() {
    bullets.push({
        x: playerX + playerSize / 2 - bulletSize / 2,
        y: playerY,
        speed: bulletSpeed
    });
}

// Draw bullets on the canvas
function drawBullets() {
    ctx.fillStyle = '#FF0000'; // Red bullets
    bullets.forEach(bullet => {
        bullet.y -= bullet.speed;
        ctx.fillRect(bullet.x, bullet.y, bulletSize, bulletSize);
    });

    // Remove bullets that move off-screen
    bullets = bullets.filter(bullet => bullet.y > 0);
}

// Detect spacebar press to shoot
window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        shootBullet();
    }
});
