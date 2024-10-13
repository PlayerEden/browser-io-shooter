// controls.js

// Track key presses for movement
let keys = {};

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Track key presses for shooting
window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        // Shoot bullet when spacebar is pressed
        shootBullet();
    }
});
