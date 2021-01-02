let run;
let rain, ltng;
let birds;
let crickets, owl;
let dungeon;
var loss = true;
let sec = 0;

var level = 2; //Change this to 0, 1, 2 or 3

let trees_l,trees_r;
let panel_l, panel_r;
let brick_l, brick_r, floor;
let wall, wall_r;
let fire, thorn, wood;

let pirate;

const perc = 567/400;
let perc_x, perc_y;
let width, height;

function preload() {
    trees_l = loadImage('assets/trees_l.jpg');
    trees_r = loadImage('assets/trees_r.jpg');
    panel_l = loadImage('assets/panel_l.jpg');
    panel_r = loadImage('assets/panel_r.jpg');
    brick_l = loadImage('assets/brick_l.jpeg');
    brick_r = loadImage('assets/brick_r.jpeg');
    floor = loadImage('assets/floor.jpg');
    wall = loadImage('assets/wall.png');
    wall_r = loadImage('assets/wall_r.png');
    fire = loadImage('assets/fire.jpg');
    thorn = loadImage('assets/thorn.jpg');
    wood = loadImage('assets/wood.jpg');

    pirate = loadModel('assets/pirate_body.obj', true);
}

function setup() {
    resize();
    createCanvas(width, height, WEBGL);
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
    } else if (level == 1) {
        crickets.loop();
        owl.loop();
        birds.pause();
        ltng.pause();
        dungeon.pause();
    } else if (level == 2) {
        rain.loop();
        rain.volume(0.4);
        birds.pause();
        crickets.pause()
        owl.pause();
        dungeon.pause();
    }else if (level == 3){
        dungeon.loop();
        dungeon.volume(0.4);
        birds.pause();
        crickets.pause();
        owl.pause();
        ltng.pause();
    }
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
    scale(perc_x+1, perc_y+1);
    background(0, 0);
    keyPressed();
    align();
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
    // hallway();
    // sounds();
    noStroke();
    // scale(1 / 4);
    sec = millis() / 1000;
    modelGuy(pirate);
    // guyShape();
}

function windowResized(){
    resize();
    resizeCanvas(width, height, WEBGL);
}

function resize(){
    perc_x = (window.innerWidth)/567;
    perc_y = (window.innerHeight)/400;
    width = perc*window.innerHeight;
    height = window.innerHeight;
}