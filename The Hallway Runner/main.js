var level;
var totalno = 0;

// //Responsive screen
// const perc = 567 / 400;
// let perc_x, perc_y;
// let width, height;

function preload() {
    needs();
}

function setup() {
    // resize();
    createCanvas(567, 400, WEBGL);
    createSounds();
    setSounds();

    //Session Storage
    hscore = window.sessionStorage.getItem("hscore");
    // totalcoins = window.sessionStorage.getItem("coins");
    // window.sessionStorage.setItem("coins", 0);
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


function windowResized() {
    // resize();
    // resizeCanvas(width, height, WEBGL);
}

function resize() {
    perc_x = (window.innerWidth) / 567;
    perc_y = (window.innerHeight) / 400;
    width = perc * window.innerHeight;
    height = window.innerHeight;
}

function draw() {
    // scale(perc_x + 1, perc_y + 1);
    background(0, 0);
    keyPressed();
    align();
    totalno = score + coins;
    if (totalno > 0) {
        if (totalno % 30 == 0) {
            // text('You are unstoppable!', 10, -150);
            score_msg.innerHTML = "You are unstoppable!";
        } else if (totalno % 20 == 0) {
            // text('Keep Going!', 10, -150);
            score_msg.innerHTML = "Keep Going!";
        } else if (totalno % 10 == 0) {
            // text('Good Job!', 10, -150);
            score_msg.innerHTML = "Good Job!";
        }
    } else {
        score_msg.innerHTML = "Have Fun!";
    }
    span_score.innerHTML = score;
    span_coins.innerHTML = coins;
    span_highscore.innerHTML = hscore;
    span_total_coins.innerHTML = totalcoins;

    if (score > hscore) {
        span_highscore.classList.add("newrecord");
    }

    // light();
    envPick();
    soundCheck();
    addEnemies();
    addcoins();
    noStroke();
    stronguy();

}