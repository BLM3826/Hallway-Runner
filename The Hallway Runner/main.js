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
    hscore = parseInt(window.sessionStorage.getItem("hscore"));
    totalcoins = parseInt(window.sessionStorage.getItem("coins"));
    if(isNaN(hscore)){
        window.sessionStorage.setItem("hscore", 0);
        hscore = 0;
    }
    if(isNaN(totalcoins)) {
        window.sessionStorage.setItem("coins", 0);
        totalcoins = 0;
    }
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