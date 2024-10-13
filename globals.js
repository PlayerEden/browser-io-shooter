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
var movementSpeed = 1; // Set initial movement speed
var visorColor = '#0000FF'; // Default visor/indicator color (blue)
var indicatorType = 'visor'; // Default accessory type is visor

// Game settings (initial values)
var playerSpeed = 1;
var enemySpeed = 0.5;
var maxBarriers = 20;
var maxEnemies = 10;
var barrierColor = '#808080';
var backgroundColor = '#333333';

// Camera properties
var cameraX = 0;
var cameraY = 0;

// Flags for game state
let gameOver = false;
