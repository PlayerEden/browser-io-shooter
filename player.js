// player.js

let playerX = canvas.width / 2 - playerSize / 2;
let playerY = canvas.height / 2 - playerSize / 2;
let playerColor = '#00FF00';
let playerSize = 20;

function drawPlayer() {
    ctx.fillStyle = playerColor;
    ctx.fillRect(playerX, playerY, playerSize, playerSize);
}

function updatePlayerPosition() {
    if (keys.ArrowUp && playerY > 0) playerY -= playerSize;
    if (keys.ArrowDown && playerY < canvas.height - playerSize) playerY += playerSize;
    if (keys.ArrowLeft && playerX > 0) playerX -= playerSize;
    if (keys.ArrowRight && playerX < canvas.width - playerSize) playerX += playerSize;
}
