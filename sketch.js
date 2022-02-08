var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player_img1;


function preload(){
  back_img = loadImage("images/fonditi.jpg");
  player_img = loadImage("images/niña.png");
  player_img1 = loadImage("images/niño.png");
  fruit1_img = loadImage("images/narutoram.png");
  fruit2_img = loadImage("images/aro.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/ru.png");
  fruit5_img = loadImage("images/sh.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
