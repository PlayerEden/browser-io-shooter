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
var visorColor = '#0000FF'; // Default visor/indicator color (blue)
var indicatorType = 'visor'; // Default accessory type is visor

// Game settings (initial values)
var playerSpeed = 1; // Player speed
var enemySpeed = 0.5; // Enemy speed
var maxBarriers = 20; // Max number of barriers
var maxEnemies = 10; // Max number of enemies
var barrierColor = '#808080'; // Default barrier color
var backgroundColor = '#333333'; // Default background color

// Camera properties
var cameraX = 0;
var cameraY = 0;

// Flags for game state
var gameOver = false;
