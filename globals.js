// globals.js

// Global dimensions for the world
var worldWidth = 1600;
var worldHeight = 1600;

// Global arrays for game elements
var enemies = [];
var bullets = [];
var collectibles = [];
var barriers = [];

// Player properties
var playerSize = 20;
var playerX = worldWidth / 2 - playerSize / 2;
var playerY = worldHeight / 2 - playerSize / 2;
var playerColor = '#00FF00'; // Default player color (green)
var playerDirection = 'up'; // Default direction
var movementSpeed = 1; // Set movement speed to 1px per key press
var visorColor = '#0000FF'; // Default visor/indicator color (blue)
var indicatorType = 'visor'; // Default accessory type is visor

// Canvas and context properties
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

// Set the canvas size to create a more zoomed-in view
canvas.width = 400; // Smaller width for a more zoomed-in view
canvas.height = 300; // Smaller height for a more zoomed-in view

// Camera properties
var cameraX = 0;
var cameraY = 0;

// Game settings (set from settings menu)
var playerSpeed = 1; // Default player speed
var enemySpeed = 0.5; // Default enemy speed
var maxBarriers = 20; // Default barrier count
var maxEnemies = 10; // Default max enemy count
var barrierColor = '#808080'; // Default barrier color (gray)
var backgroundColor = '#333'; // Default background color (dark gray)
