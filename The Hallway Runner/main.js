var level;
var totalno = 0;

function preload() {
    needs();
}

function setup() {
    createCanvas(567, 400, WEBGL);
    createSounds();
    setSounds();

    //Session Storage
    hscore = window.sessionStorage.getItem("hscore");
    // totalcoins = window.sessionStorage.getItem("coins");
    // window.sessionStorage.setItem("coins", 0);
}

function draw() {
    loadingScreen();
    background(0, 0);
    keyPressed();
    align();
    score_coins();
    envPick();
    soundCheck();
    addEnemies();
    addcoins();
    stronguy();

}