let player, playerIMG;
let object;
let windowX = 0.8*window.innerWidth;
let windowY = 0.4*window.innerHeight;
function preload() {
    playerIMG = loadImage('./img/trex.png');
}
function setup() {
    createCanvas(windowX,windowY);
    player = new Player();
    object = new Object();
}
function keyPressed() {
    if(key == ' ')
        player.jump();   
}
function draw() {
    background('#fdc');
    player.show();
    player.move();
    object.show();
    object.move();
    
//    if(keyIsDown(32))
//        player.jump();
    
    
}