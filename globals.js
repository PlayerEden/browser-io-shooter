// globals.js

// Global dimensions for the world
var worldWidth = 1600;
var worldHeight = 1600;

// Global arrays for game elements
var enemies = [];
var bullets = [];
var collectibles = [];

// Player properties
var playerSize = 20;
var playerX = worldWidth / 2 - playerSize / 2; // Initial player X-coordinate (centered)
var playerY = worldHeight / 2 - playerSize / 2; // Initial player Y-coordinate (centered)
var playerColor = '#00FF00'; // Default color

// Camera properties
var cameraX = 0;
var cameraY = 0;
