// weapons.js

// Define weapon types
const weapons = {
    pistol: {
        fireRate: 500, // 500 ms between shots
        maxAmmo: 10,
        reloadTime: 2000, // 2 seconds to reload
        automatic: false // No continuous fire
    },
    machineGun: {
        fireRate: 100, // 100 ms between shots
        maxAmmo: 30,
        reloadTime: 3000, // 3 seconds to reload
        automatic: true // Continuous fire allowed
    }
};

// Set default weapon to pistol
let currentWeapon = weapons.pistol;
let ammoCount = currentWeapon.maxAmmo;
let isReloading = false;
let lastFiredTime = 0;

// Function to shoot a bullet
function shootBullet() {
    const currentTime = Date.now();

    if (isReloading) {
        console.log("Reloading...");
        return;
    }

    if (currentTime - lastFiredTime < currentWeapon.fireRate) {
        // Prevent shooting before the fire rate delay
        return;
    }

    if (ammoCount <= 0) {
        reloadWeapon();
        return;
    }

    // Fire a bullet
    let bullet = {
        x: playerX + playerSize / 2 - 2.5,
        y: playerY + playerSize / 2 - 2.5,
        speed: 10,
        direction: playerDirection,
        size: 5
    };

    bullets.push(bullet);
    lastFiredTime = currentTime;
    ammoCount--;

    if (ammoCount === 0) {
        reloadWeapon();
    }
}

// Function to reload the weapon
function reloadWeapon() {
    if (isReloading) return;

    isReloading = true;
    console.log("Reloading...");

    setTimeout(() => {
        ammoCount = currentWeapon.maxAmmo;
        isReloading = false;
        console.log("Reload complete.");
    }, currentWeapon.reloadTime);
}

// Function to handle key press events for shooting
window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        if (!currentWeapon.automatic) {
            shootBullet(); // Fire once for non-automatic weapons
        }
    }
});

// Function to handle key hold events for automatic shooting
window.addEventListener('keyup', (e) => {
    if (e.key === ' ') {
        if (currentWeapon.automatic) {
            shootBullet(); // Fire continuously for automatic weapons
        }
    }
});

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
