let run;
let rain;
let ltng;
var loss = true;

// function preload() {}

function setup() {

    createCanvas(567, 400, WEBGL);
    run = createAudio('assets/step.wav');
    rain = createAudio('assets/rain.ogg');
    ltng = createAudio('assets/lightning.mp3');
    run.pause();
    run.volume(0.5);
    run.speed(1.2);
    rain.loop();
    rain.volume(0.4);
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
    background(0);
    keyPressed();
    align();
    light();
    hallway();
    sounds();
    noStroke();
    scale(1 / 4);
    guyShape();
}