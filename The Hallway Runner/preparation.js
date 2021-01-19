//Environment assets
let trees_l, trees_r, soil;
let panel_l, panel_r;
let brick_l, brick_r, floor;
let wall, wall_r;

let coin;

//Enemies
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
let damage;

var loss = true;

function needs() {
    //Load player objects
    torso = loadModel('assets/Male_Diver_Torso.obj', true);
    head = loadModel('assets/Male_head1.obj', true);
    hand = loadModel('assets/Hand.obj', true);
    weapon = loadModel('assets/Club.obj', true);
    leg = loadModel('assets/Male_Bend_Leg.obj', true);
    arm = loadModel('assets/Male_Knight_Arm.obj', true);
    r_shoe = loadModel('assets/Running_ShoeR.obj', true);
    l_shoe = loadModel('assets/Running_ShoeL.obj', true);
    fist = loadModel('assets/c_hand.obj', true);

    //Load Images
    trees_r = loadImage('assets/trees_r.jpg');
    soil = loadImage('assets/soil.jpg');
    panel_l = loadImage('assets/panel_l.jpg');
    panel_r = loadImage('assets/panel_r.jpg');
    trees_l = loadImage('assets/trees_l.jpg'); 
    wall_r = loadImage('assets/wall_r.png');
    brick_r = loadImage('assets/brick_r.jpeg');
    floor = loadImage('assets/floor.jpg');
    wall = loadImage('assets/wall_r.png');
    brick_l = loadImage('assets/brick_r.jpeg');

    //Load coin
    coin = loadModel('assets/coin.obj', true);

    //Daylight enemies
    doveObj = loadModel('assets/Dove.obj', true);
    treeStumpObj = loadModel('assets/Tree Stump.obj', true);

    //Midnight enemies
    batObj = loadModel('assets/Bat.obj', true);
    spiderObj = loadModel('assets/Spider.obj', true);

    //Alley enemies
    streetLightObj = loadModel('assets/Street Light.obj', true);
    zombieObj = loadModel('assets/Male_Zombie.obj', true);

    //Dungeon enemies
    parrotObj = loadModel('assets/parrot.obj', true);
    skeletonPirateObj = loadModel('assets/skeletonPirate.obj', true);
    p_body = loadModel('assets/pirate_body.obj', true);
    p_arm = loadModel('assets/pirate_arm.obj', true);
    p_l_f = loadModel('assets/pirate_left_foot.obj', true);
    p_r_f = loadModel('assets/pirate_right_foot.obj', true);
}

function createSounds() {
    //Main sounds
    run = createAudio('assets/step.wav');
    collect = createAudio('assets/gold.wav');
    damage = createAudio('assets/damage.wav');
    //Daylight sounds
    birds = createAudio('assets/birds.mp3');
    //Midnight sounds
    crickets = createAudio('assets/crickets.mp3');
    owl = createAudio('assets/owl.mp3');
    //Alley sounds
    rain = createAudio('assets/rain.ogg');
    ltng = createAudio('assets/lightning.mp3');
    //Dungeon sounds
    jail = createAudio('assets/dungeon.wav');
}

//Resolve picked environment
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
    if (level == 0) { //Daylight
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
    } else if (level == 1) { //Midnight
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
    } else if (level == 2) { //Alley
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
    } else if (level == 3) { //Dungeon
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
    //Timing for lightning
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