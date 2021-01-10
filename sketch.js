var canvas;
var gameState = 0;
var playerCount;
var dataBase;
var form, player, game;

function setup(){
    canvas = createCanvas(700,700);
    dataBase = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){

}