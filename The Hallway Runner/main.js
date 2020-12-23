let run;
let rain;
let ltng;
let birds;
let crickets;
let owl;
var loss = true;
let sec = 0;

var level = 0; //Change this to 0, 1 or 2 

let trees_l;
let trees_r;
var sky;
let fire, thorn, wood;

function preload() {
    trees_l = loadImage('assets/trees_l.jpg');
    trees_r = loadImage('assets/trees_r.jpg');
    sky = loadImage('assets/sky.jpg');
    fire = loadImage('assets/fire.jpg');
    thorn = loadImage('assets/thorn.jpg');
    wood = loadImage('assets/wood.jpg');
}

function setup() {

    createCanvas(567, 400, WEBGL);
    run = createAudio('assets/step.wav');
    rain = createAudio('assets/rain.ogg');
    ltng = createAudio('assets/lightning.mp3');
    birds = createAudio('assets/birds.mp3');
    crickets = createAudio('assets/crickets.mp3');
    owl = createAudio('assets/owl.mp3');
    run.pause();
    run.volume(0.5);
    run.speed(1.2);
    if (level == 0) {
        birds.loop();
        crickets.pause();
        owl.pause();
        ltng.pause();
    } else if (level == 1) {
        crickets.loop();
        owl.loop();
        birds.pause();
        ltng.pause();
    } else if (level == 2) {
        rain.loop();
        rain.volume(0.4);
        birds.pause();
        crickets.pause()
        owl.pause();
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
    }
    // hallway();
    // sounds();
    noStroke();
    scale(1 / 4);
    sec = millis() / 1000;
    modelGuy(pirate);
    // guyShape();
}