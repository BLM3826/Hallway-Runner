let run;
let rain;
let ltng;
let birds;
let crickets;
let owl;
let dungeon;
var loss = true;

var level = 3; //Change this to 0, 1, 2 or 3

let trees_l;
let trees_r;
let sky;
let panel_l, panel_r; 
let wall, wall_r;
function preload() {
  trees_l = loadImage('assets/trees_l.jpg');
  trees_r = loadImage('assets/trees_r.jpg');
  sky = loadImage('assets/sky.jpg');
  panel_l = loadImage('assets/panel_l.jpg');
  panel_r = loadImage('assets/panel_r.jpg');
  wall = loadImage('assets/wall.png');
  wall_r = loadImage('assets/wall_r.png');
}

function setup() {

  createCanvas(567, 400, WEBGL);
  run = createAudio('assets/step.mp3');
  rain = createAudio('assets/rain.ogg');
  ltng = createAudio('assets/lightning.mp3');
  birds = createAudio('assets/birds.mp3');
  crickets = createAudio('assets/crickets.mp3');
  owl = createAudio('assets/owl.mp3');
  dungeon = createAudio('assets/dungeon.wav');
  run.pause();
  run.volume(0.5);
  run.speed(1.2);
  if(level == 0){
    birds.loop();
    crickets.pause();
    owl.pause();
    ltng.pause();
    dungeon.pause();
  }else if(level == 1){
    crickets.loop();
    owl.loop();
    birds.pause();
    ltng.pause();
    dungeon.pause();
  }else if(level == 2){
    rain.loop();
    rain.volume(0.4);
    birds.pause();
    crickets.pause()
    owl.pause();
    dungeon.pause();
  }else if(level == 3){
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
  background(0,0);
  if (loss === false) {
    keyPressed();
  }
  align();
  // light();
  if(level == 0){
    light1();
    env1();
  }else if(level == 1){
    light2();
    env2();
  }else if(level == 2){
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
  scale(1 / 4);
  guyShape();
}