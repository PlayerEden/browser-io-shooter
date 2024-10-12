// Global dimensions for the world
var worldWidth = 1600;
var worldHeight = 1600;

// Global arrays for game elements
var enemies = [];
var bullets = [];
var collectibles = [];

// Player properties
var playerSize = 20;
var playerX = worldWidth / 2 - playerSize / 2;
var playerY = worldHeight / 2 - playerSize / 2;
var playerColor = '#00FF00'; // Default color
var playerDirection = 'up'; // Default direction
var movementSpeed = 2; // Set movement speed to 2px per key press

// Canvas and context properties
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

// Camera properties
var cameraX = 0;
var cameraY = 0;
