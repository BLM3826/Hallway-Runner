//Environment assets
let trees_l, trees_r, soil;
let panel_l, panel_r;
let brick_l, brick_r, floor;
let wall, wall_r;

let coin;

//enemies
let doveObj, treeStumpObj;
let batObj, spiderObj;
let streetLightObj, zombieObj;
let parrotObj, skeletonObj, skeletonPirateObj;
var p_body, p_arm, p_l_f, p_r_f;

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

    //daylight enemies
    doveObj = loadModel('assets/Dove.obj', true);
    treeStumpObj = loadModel('assets/Tree Stump.obj', true);

    //midnight enemies
    batObj = loadModel('assets/Bat.obj', true);
    spiderObj = loadModel('assets/Spider.obj', true);

    //alley enemies
    streetLightObj = loadModel('assets/Street Light.obj', true);
    zombieObj = loadModel('assets/Male_Zombie.obj', true);

    //dungeon enemies
    parrotObj = loadModel('assets/parrot.obj', true);
    skeletonPirateObj = loadModel('assets/skeletonPirate.obj', true);
    p_body = loadModel('assets/pirate_body.obj', true);
    p_arm = loadModel('assets/pirate_arm.obj', true);
    p_l_f = loadModel('assets/pirate_left_foot.obj', true);
    p_r_f = loadModel('assets/pirate_right_foot.obj', true);
}

function createSounds() {
    run = createAudio('assets/step.wav');
    rain = createAudio('assets/rain.ogg');
    ltng = createAudio('assets/lightning.mp3');
    birds = createAudio('assets/birds.mp3');
    crickets = createAudio('assets/crickets.mp3');
    owl = createAudio('assets/owl.mp3');
    jail = createAudio('assets/dungeon.wav');
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
        if(!mute){
            birds.loop();
        }else{
            birds.pause();
        }
        crickets.pause();
        owl.pause();
        ltng.pause();
        jail.pause();
        fill(0);
        light1();
        daylight();
    } else if (level == 1) {
        if(!mute){
            crickets.loop();
            owl.loop();
        }else{
            crickets.pause();
            owl.pause();
        }
        birds.pause();
        ltng.pause();
        jail.pause();
        fill(0);
        light2();
        midnight();
    } else if (level == 2) {
        if(!mute){
            rain.loop();
            rain.volume(0.4);
            sounds();
        }else{
            rain.pause();
        }
        birds.pause();
        crickets.pause()
        owl.pause();
        jail.pause();
        fill(0);
        light3();
        alley();
    } else if (level == 3) {
        if(!mute){
            jail.loop();
            jail.volume(0.4);
        }else{
            jail.pause();
        }
        birds.pause();
        crickets.pause();
        owl.pause();
        ltng.pause();
        fill(255);
        light4();
        dungeon();
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