// controls.js

// Track key presses for movement and actions
let keys = {};

// Event listeners for movement keys
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;

    // Shoot bullet when space bar is pressed
    if (e.key === ' ') {
        shootBullet();
    }
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});
