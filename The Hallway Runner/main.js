var level;
var totalno = 0;


function preload() {
    //preperation.js
    needs(); // loading .obj files and initializing several variables
}

function setup() {
    createCanvas(567, 400, WEBGL);
    createSounds(); // loading sound assets
    pos = int(random(6));
    //Session Storage
    //used for storing coins, high score and uniform color until the browser is closed!
    hscore = parseInt(window.sessionStorage.getItem("hscore"));
    totalcoins = parseInt(window.sessionStorage.getItem("coins"));
    let uniform = document.getElementById("colorpick");
    uniform.value = window.sessionStorage.getItem("uniform");
    if (isNaN(hscore)) {
        window.sessionStorage.setItem("hscore", 0);
        hscore = 0;
    }
    if (isNaN(totalcoins)) {
        window.sessionStorage.setItem("coins", 0);
        totalcoins = 0;
    }
    if (window.sessionStorage.getItem("uniform") == null) {
        window.sessionStorage.setItem("uniform", '#ff0000');
        uniform.value = '#ff0000';
    }
    //printed in HTML
    setInterval(function() {
        if (score_msg.innerHTML == "New Highscore!") {
            score_msg.style.color = (score_msg.style.color == 'red' ? 'black' : 'red');
        }
    }, 1000);
}

function draw() {
    loadingScreen(); // used until the game is loaded, called from script.js
    background(0, 0);
    keyPressed(); // overriding the method for handling keyboard's interaction with the game
    align(); // align the scene based on movement (left or right arrow)
    score_coins(); // check coins and update HTML messages with the proper one!
    envPick(); // run the environment in the background based on user preference
    soundCheck(); // check whether to mute or not based on user preference
    addEnemies(); // render different kinds of enemies based on the enviroment and the position
    addcoins(); // render the coins created in coins.js
    stronguy(); // load our runner. Called from guy.js

}