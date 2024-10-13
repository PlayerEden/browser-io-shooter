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

// Function to update bullets
function updateBullets() {
    bullets.forEach((bullet, index) => {
        // Move the bullet in its current direction
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

        // Check if bullet is off the map
        if (bullet.x < 0 || bullet.x > worldWidth || bullet.y < 0 || bullet.y > worldHeight) {
            bullets.splice(index, 1); // Remove bullet if off the map
            return;
        }

        // Check if bullet collides with any barriers
        if (isCollidingWithBarrier(bullet.x, bullet.y, bullet.size)) {
            bullets.splice(index, 1); // Remove bullet if it hits a barrier
            return;
        }

        // Check if bullet is beyond a certain distance from the player (for despawning)
        const distanceToPlayer = Math.sqrt(
            Math.pow(bullet.x - playerX, 2) + Math.pow(bullet.y - playerY, 2)
        );
        if (distanceToPlayer > 300) { // Adjust the distance as needed
            bullets.splice(index, 1); // Remove bullet if too far from player
            return;
        }

        // Draw the bullet on the canvas
        ctx.fillStyle = '#FFFF00'; // Yellow color for bullets
        ctx.fillRect(bullet.x - cameraX, bullet.y - cameraY, bullet.size, bullet.size);
    });
}
