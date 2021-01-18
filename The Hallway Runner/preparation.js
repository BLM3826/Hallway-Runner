//Environment assets
let trees_l, trees_r, soil;
let panel_l, panel_r;
let brick_l, brick_r, floor;
let wall, wall_r;
let fire, thorn, wood;

//Obstacles and enemies
let coin, monster, parrot;
var pirate;

//Enemies env1
let squirrel;

//Player assets
var torso, head, hair;
var leg, r_shoe, l_shoe;
var fist, hard, arm, weapon;

//Sounds
let run;
let rain, ltng;
let birds;
let crickets, owl;
let jail;
let collect;
var loss = true;

function needs() {
    torso = loadModel('assets/Male_Diver_Torso.obj', true);
    head = loadModel('assets/Male_head1.obj', true);
    hand = loadModel('assets/Hand.obj', true);
    weapon = loadModel('assets/Club.obj', true);
    leg = loadModel('assets/Male_Bend_Leg.obj', true);
    arm = loadModel('assets/Male_Knight_Arm.obj', true);
    r_shoe = loadModel('assets/Running_ShoeR.obj', true);
    l_shoe = loadModel('assets/Running_ShoeL.obj', true);
    fist = loadModel('assets/c_hand.obj', true);

    trees_r = loadImage('assets/trees_r.jpg');
    soil = loadImage('assets/soil.jpg');
    panel_l = loadImage('assets/panel_l.jpg');
    panel_r = loadImage('assets/panel_r.jpg');
    trees_l = loadImage('assets/trees_l.jpg'); // me trees_l exei error
    wall_r = loadImage('assets/wall_r.png');
    brick_r = loadImage('assets/brick_r.jpeg');
    floor = loadImage('assets/floor.jpg');
    wall = loadImage('assets/wall_r.png'); // me wall exei error
    brick_l = loadImage('assets/brick_r.jpeg');

    collect = createAudio('assets/gold.wav');
  
    coin = loadModel('assets/coin.obj', true);
  
    //env1 enemies 
    // squirrel = loadModel('assets/Squirrel.obj', true);
    monster = loadModel('assets/monster.obj', true);
    parrot = loadModel('assets/parrot.obj', true);
    skeleton = loadModel('assets/skeleton.obj', true);
    skeletonPirate = loadModel('assets/skeletonPirate.obj', true);
}

function createSounds(){
  run = createAudio('assets/step.wav');
  rain = createAudio('assets/rain.ogg');
  ltng = createAudio('assets/lightning.mp3');
  birds = createAudio('assets/birds.mp3');
  crickets = createAudio('assets/crickets.mp3');
  owl = createAudio('assets/owl.mp3');
  jail = createAudio('assets/dungeon.wav');
}

function setSounds(){
  run.pause();
  run.volume(0.5);
  run.speed(1.2);
  if (level == 0) {
        birds.loop();
        crickets.pause();
        owl.pause();
        ltng.pause();
        jail.pause();
        fill(0);
    } else if (level == 1) {
        crickets.loop();
        owl.loop();
        birds.pause();
        ltng.pause();
        jail.pause();
        fill(0);
    } else if (level == 2) {
        rain.loop();
        rain.volume(0.4);
        birds.pause();
        crickets.pause()
        owl.pause();
        jail.pause();
        fill(0);
    } else if (level == 3) {
        jail.loop();
        jail.volume(0.4);
        birds.pause();
        crickets.pause();
        owl.pause();
        ltng.pause();
        fill(255);
    }
}

function envPick() {
    if (env1pick.checked) {
        level = 0;
    } else if (env2pick.checked) {
        level = 1;
    } else if (env3pick.checked) {
        level = 2;
    } else if (env4pick.checked) {
        level = 3;
    } else {
        console.log("no Env picked");
    }
    if (level == 0) {
        birds.loop();
        crickets.pause();
        owl.pause();
        ltng.pause();
        jail.pause();
        fill(0);
        light1();
        daylight();
    } else if (level == 1) {
        crickets.loop();
        owl.loop();
        birds.pause();
        ltng.pause();
        jail.pause();
        fill(0);
        light2();
        midnight();
    } else if (level == 2) {
        rain.loop();
        rain.volume(0.4);
        birds.pause();
        crickets.pause()
        owl.pause();
        jail.pause();
        fill(0);
        light3();
        hallway();
        sounds();
    } else if (level == 3) {
        jail.loop();
        jail.volume(0.4);
        birds.pause();
        crickets.pause();
        owl.pause();
        ltng.pause();
        fill(255);
        light4();
        dungeon();
    }
}

function addEnemies(){
  obst();
  /*if (level == 0) {
        enemies1();
    } else if (level == 1) {
        enemies2();
    } else if (level == 2) {
        enemiesh();
    } else if (level == 3) {
        enemies3();
    }
    */
}