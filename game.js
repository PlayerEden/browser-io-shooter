// game.js

function resetGame() {
    console.log("Game Over");

    // Display Game Over screen
    displayGameOverMenu();
}

function displayGameOverMenu() {
    // Hide the game canvas
    canvas.style.display = 'none';

    // Create a Game Over menu
    const gameOverMenu = document.createElement('div');
    gameOverMenu.id = 'game-over-menu';
    gameOverMenu.style.display = 'flex';
    gameOverMenu.style.flexDirection = 'column';
    gameOverMenu.style.alignItems = 'center';
    gameOverMenu.style.justifyContent = 'center';
    gameOverMenu.style.position = 'absolute';
    gameOverMenu.style.top = '50%';
    gameOverMenu.style.left = '50%';
    gameOverMenu.style.transform = 'translate(-50%, -50%)';
    gameOverMenu.style.backgroundColor = '#444';
    gameOverMenu.style.padding = '20px';
    gameOverMenu.style.borderRadius = '10px';
    gameOverMenu.style.color = 'white';

    // Add "Game Over" text
    const gameOverText = document.createElement('h1');
    gameOverText.innerText = 'Game Over';
    gameOverMenu.appendChild(gameOverText);

    // Add Restart button
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart';
    restartButton.style.margin = '10px';
    restartButton.onclick = () => {
        gameOverMenu.remove(); // Remove the Game Over menu
        restartGame(); // Restart the game
    };
    gameOverMenu.appendChild(restartButton);

    // Add Main Menu button
    const mainMenuButton = document.createElement('button');
    mainMenuButton.innerText = 'Main Menu';
    mainMenuButton.style.margin = '10px';
    mainMenuButton.onclick = () => {
        gameOverMenu.remove(); // Remove the Game Over menu
        showMainMenu(); // Return to the main menu
    };
    gameOverMenu.appendChild(mainMenuButton);

    // Add the Game Over menu to the document body
    document.body.appendChild(gameOverMenu);
}

function restartGame() {
    // Reset player position to the starting point
    playerX = worldWidth / 2 - playerSize / 2;
    playerY = worldHeight / 2 - playerSize / 2;

    // Clear all enemies, bullets, and collectibles arrays to reset game state
    enemies = [];
    bullets = [];
    collectibles = [];

    // Start the game loop again
    canvas.style.display = 'block';
    gameLoop();
}

function showMainMenu() {
    // Hide the game canvas
    canvas.style.display = 'none';

    // Show the start menu
    document.getElementById('start-menu').style.display = 'flex';
}
