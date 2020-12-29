var popup = document.getElementById("popup1");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
var start = document.getElementById("start");
var popup2 = document.getElementById("popup2");
var message = document.getElementById("message");
var score = document.getElementById("score");
var rr;
var coins = 0;
var totalcoins = 0;
var hscore = 0;


btn.onclick = function() {
    popup.style.display = "block";
}

span.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

start.onclick = function() {
    run.loop();
    rr = true;
    loss = false;
    z = 500;
    zL = -z / 2;
    zp = -z / 2;
    tp = 1
    zo = -250;
    zc = -250;
    side = 0;
    turn = 1;
    yr = -40 / 360;
    xr = 0 / 360;
    speed = 4;
    speedc = 3;
    pos = random(4);
    cpos = random(4);
    popup2.style.display = "none";
    if (score > hscore){
      hscore = score;
    }
    score = 0;
    no = 0;
    totalcoins += coins;
    coins = 0;
    addcoin = true;
}

function lose() {
    loss = true;
    popup2.style.display = "block";
    message.style.display = "block";
    run.pause();
}