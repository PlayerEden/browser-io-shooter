// controls.js

// Track key presses for movement
let keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;

    // Shoot when the space bar is pressed
    if (e.key === ' ') {
        shootBullet();
    }
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});
