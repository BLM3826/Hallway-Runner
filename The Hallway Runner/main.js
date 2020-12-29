let run;
let rain, ltng;
let birds;
let crickets, owl;
let dungeon;
let collect;
var loss = true;

var level = 3; //Change this to 0, 1, 2 or 3

let trees_l,trees_r;
let panel_l, panel_r;
let wall, wall_r;
let fire, thorn, wood;
let arial;

let pirate, coin, monster, parrot;

function preload() {
    trees_l = loadImage('assets/trees_l.jpg');
    trees_r = loadImage('assets/trees_r.jpg');
    panel_l = loadImage('assets/panel_l.jpg');
    panel_r = loadImage('assets/panel_r.jpg');
    wall = loadImage('assets/wall.png');
    wall_r = loadImage('assets/wall_r.png');
    arial = loadFont('assets/arial.ttf');
    collect = createAudio('assets/gold.wav');

    pirate = loadModel('assets/pirate_body.obj', true);
    coin = loadModel('assets/coin.obj', true);
    monster = loadModel('assets/monster.obj', true);
    parrot = loadModel('assets/parrot.obj', true);
    skeleton = loadModel('assets/skeleton.obj', true);
    skeletonPirate = loadModel('assets/skeletonPirate.obj', true);
}

function setup() {

    createCanvas(567, 400, WEBGL);
    run = createAudio('assets/step.wav');
    rain = createAudio('assets/rain.ogg');
    ltng = createAudio('assets/lightning.mp3');
    birds = createAudio('assets/birds.mp3');
    crickets = createAudio('assets/crickets.mp3');
    owl = createAudio('assets/owl.mp3');
    dungeon = createAudio('assets/dungeon.wav');
    run.pause();
    run.volume(0.5);
    run.speed(1.2);
    if (level == 0) {
        birds.loop();
        crickets.pause();
        owl.pause();
        ltng.pause();
        dungeon.pause();
        fill(0);
    } else if (level == 1) {
        crickets.loop();
        owl.loop();
        birds.pause();
        ltng.pause();
        dungeon.pause();
        fill(0);
    } else if (level == 2) {
        rain.loop();
        rain.volume(0.4);
        birds.pause();
        crickets.pause()
        owl.pause();
        dungeon.pause();
        fill(0);
    }else if (level == 3){
        dungeon.loop();
        dungeon.volume(0.4);
        birds.pause();
        crickets.pause();
        owl.pause();
        ltng.pause();
        fill(255);
    }
    textFont(arial);
    textSize(5);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);

}


function sounds() {
    if (ltng.time() > 16) {
        ltng.volume(0);
        if (ltng.time() < 20) {
            ltng.time(20);
        }
    } else if (ltng.time() > 12) {
        ltng.volume(0.1);
    } else {
        ltng.volume(0.4);
    }
    if (rain.time() >= 15) {
        rain.time(1);
    }
}


function draw() {
    background(0, 0);
    keyPressed();
    align();
    /*text('S: ' + score + ' Highscore: ' + hscore+ ' C: ' + coins + ' Total C: ' + totalcoins, 10, -170);*/
    text('Score: ' + score + ' Coins: ' + coins, 10, -170);  
    textSize(20);
    if (totalno > 0){
      if(totalno % 30 == 0){
        text('You are unstoppable!', 10, -150);
      } else if (totalno % 20 == 0){
        text('Keep Going!', 10, -150);
      }else if (totalno % 10 == 0){
        text('Good Job!', 10, -150);
      }
    }
    
    // light();
    if (level == 0) {
        light1();
        env1();
    } else if (level == 1) {
        light2();
        env2();
    } else if (level == 2) {
        light();
        hallway();
        sounds();
    }else if(level == 3){
        light3();
        env3();
    }
    obst();
    addcoins();
    noStroke();
    // scale(1 / 4);
    //sec = millis() / 1000;
    modelGuy(pirate);
    // guyShape();
}