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
var movementSpeed = 1; // Default player speed
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

// Game settings
var playerSpeed = 1; // Initial player speed (updated by settings menu)
var enemySpeed = 0.5; // Initial enemy speed (updated by settings menu)
var maxBarriers = 20; // Maximum number of barriers (updated by settings menu)
var maxEnemies = 10; // Maximum number of enemies (updated by settings menu)
var barrierColor = '#808080'; // Default barrier color (updated by settings menu)
var backgroundColor = '#333'; // Default background color (updated by settings menu)

// Flag to track whether the game is over
var gameOver = false;
