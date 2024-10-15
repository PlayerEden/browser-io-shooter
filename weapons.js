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
