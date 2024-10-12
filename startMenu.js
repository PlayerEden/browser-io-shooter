// Wrap everything in a DOMContentLoaded event listener to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set up the canvas and context globally
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to make the map larger
    canvas.width = 600; // Reduced width for a smaller playing area
    canvas.height = 400; // Reduced height

    // Start menu and character menu elements
    const startButton = document.getElementById('start-button');
    const characterButton = document.getElementById('character-button');
    const characterMenu = document.getElementById('character-menu');
    const backButton = document.getElementById('back-button');
    const saveCharacterButton = document.getElementById('save-character-button');

    // Character customization elements
    const colorPicker = document.getElementById('color-picker');
    const accessoryTypeSelect = document.getElementById('accessory-type');
    const accessoryColorPicker = document.getElementById('accessory-color');
    const previewCanvas = document.getElementById('character-preview');
    const previewCtx = previewCanvas.getContext('2d');

    // Show the character customization menu
    characterButton.addEventListener('click', () => {
        document.getElementById('start-menu').style.display = 'none';
        characterMenu.style.display = 'block';
        updateCharacterPreview(); // Update preview on open
    });

    // Save character customization and return to the start menu
    saveCharacterButton.addEventListener('click', () => {
        // Save character color, accessory type, and accessory color
        playerColor = colorPicker.value;
        indicatorType = accessoryTypeSelect.value; // Updated name to accessoryType
        visorColor = accessoryColorPicker.value;

        characterMenu.style.display = 'none';
        document.getElementById('start-menu').style.display = 'flex';
    });

    // Go back from character customization to start menu
    backButton.addEventListener('click', () => {
        characterMenu.style.display = 'none';
        document.getElementById('start-menu').style.display = 'flex';
    });

    // Update the preview when character properties change
    colorPicker.addEventListener('input', updateCharacterPreview);
    accessoryTypeSelect.addEventListener('change', updateCharacterPreview);
    accessoryColorPicker.addEventListener('input', updateCharacterPreview);

    // Function to update character preview
    function updateCharacterPreview() {
        // Clear the preview canvas
        previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

        // Draw the character body
        previewCtx.fillStyle = colorPicker.value;
        previewCtx.fillRect(20, 20, 60, 60); // Draw a 60x60 character body in the center

        // Draw the "accessory" based on the selected type
        previewCtx.fillStyle = accessoryColorPicker.value;
        if (accessoryTypeSelect.value === 'visor') {
            // Draw a wider visor
            previewCtx.fillRect(22, 20, 56, 10); // Wider visor across the front
        } else if (accessoryTypeSelect.value === 'eyes') {
            // Draw two small eyes
            previewCtx.fillRect(30, 35, 5, 5); // Left eye
            previewCtx.fillRect(55, 35, 5, 5); // Right eye
        }
    }

    // Start the game on button click
    startButton.addEventListener('click', () => {
        document.getElementById('start-menu').style.display = 'none';
        canvas.style.display = 'block';

        // Start the game loop
        startGame();
    });
});
