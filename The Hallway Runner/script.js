var popup = document.getElementById("popup1");
var ctrlbtn = document.getElementById("ctrl");
var optbtn = document.getElementById("opts");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var start = document.getElementById("start");
var popup2 = document.getElementById("popup2");
var popup3 = document.getElementById("popup3");
var message = document.getElementById("message");
var charcolor = document.getElementById("colorpick").value;
var env1pick = document.getElementById("env1");
var env2pick = document.getElementById("env2");
var env3pick = document.getElementById("env3");
var env4pick = document.getElementById("env4");
var soundswitch = document.getElementById("soundsw");
var info = document.getElementById("info");
var span_score = document.getElementById("score");
var span_coins = document.getElementById("coins");
var score_msg = document.getElementById("score_msg");
var span_highscore = document.getElementById("highscore");
var span_total_coins = document.getElementById("total_coins");
var rr;
var coins = 0;
var totalcoins = 0;
var score = 0;
var hscore = 0;
var speed;


ctrlbtn.onclick = function() {
    popup.style.display = "block";
}

optbtn.onclick = function() {
    popup3.style.display = "block";
}

span1.onclick = function() {
    popup.style.display = "none";
}
span2.onclick = function() {
    popup3.style.display = "none";
    if (totalcoins < 20) {
        document.getElementById("colorpick").disabled = true;
    }
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
    if (event.target == popup3) {
        popup3.style.display = "none";
        if (totalcoins < 20) {
            document.getElementById("colorpick").disabled = true;
        }
    }
}

start.onclick = function() {
    run.loop();
    rr = true;
    loss = false;
    z = 500;
    translate_z = 0;
    zL = -z / 2;
    zp = -z / 2;
    tp = 1
    zo = -270;
    zc = -270;
    side = 0;
    turn = 0;
    yr = -40 / 360;
    xr = 0 / 360;
    speed = 7;
    speedc = 5;
    pos = random(4);
    cpos = random(4);
    popup2.style.display = "none";
    info.style.display = "block";
    // if (score > hscore) {
    //     hscore = score;
    // }
    span_highscore.classList.remove("newrecord");
    score = 0;
    no = 0;
    totalno = 0;
    // totalcoins += coins;
    coins = 0;
    addcoin = true;
}

function lose() {
    loss = true;
    popup2.style.display = "block";
    message.style.display = "block";
    run.pause();

    if (score > hscore) {
        hscore = score;
    }
    totalcoins += coins;
    coins = 0;

    //Session Storage
    window.sessionStorage.setItem("hscore", hscore);
    window.sessionStorage.setItem("coins", totalcoins);
}

function soundCheck() {
    if (soundswitch.checked) {
        masterVolume(1);
    } else {
        masterVolume(0);
    }

}