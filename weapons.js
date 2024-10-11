// weapons.js

let bullets = [];
const bulletSize = 5;
const bulletSpeed = 5;
let weaponType = 'standard';

function shootBullet() {
    if (weaponType === 'standard') {
        bullets.push({
            x: playerX + playerSize / 2 - bulletSize / 2,
            y: playerY,
            speed: bulletSpeed
        });
    } else if (weaponType === 'spread') {
        bullets.push({ x: playerX + playerSize / 2 - bulletSize / 2, y: playerY, speed: bulletSpeed });
        bullets.push({ x: playerX + playerSize / 2 - bulletSize / 2 - 10, y: playerY, speed: bulletSpeed });
        bullets.push({ x: playerX + playerSize / 2 - bulletSize / 2 + 10, y: playerY, speed: bulletSpeed });
    }
}

function drawBullets() {
    ctx.fillStyle = '#FF0000';
    bullets.forEach(bullet => {
        bullet.y -= bullet.speed;
        ctx.fillRect(bullet.x, bullet.y, bulletSize, bulletSize);
    });
    bullets = bullets.filter(bullet => bullet.y > 0); // Remove bullets off-screen
}
