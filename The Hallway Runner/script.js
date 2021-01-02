var popup = document.getElementById("popup1");
var ctrlbtn = document.getElementById("ctrl");
var optbtn = document.getElementById("opts");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var start = document.getElementById("start");
var popup2 = document.getElementById("popup2");
var popup3 = document.getElementById("popup3");
var message = document.getElementById("message");
var rr;

var env1pick = document.getElementById("env1");
var env2pick = document.getElementById("env2");
var env3pick = document.getElementById("env3");
var env4pick = document.getElementById("env4");
var soundswitch = document.getElementById("soundsw");;


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
}
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
    if (event.target == popup3) {
        popup3.style.display = "none";
    }
}

start.onclick = function() {
    run.loop();
    rr = true;
    loss = false;
    pos = random(4);
    z = 500;
    zL = -z / 2;
    zp = -z / 2;
    tp = 1
    zo = -250;
    side = 0;
    turn = 1;
    yr = -40 / 360;
    xr = 0 / 360;
    speed = 4;
    popup2.style.display = "none";
}

function lose() {
    loss = true;
    popup2.style.display = "block";
    message.style.display = "block";
    run.pause();
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
}

function soundCheck() {
    if (soundswitch.checked) {
        masterVolume(1);
    } else {
        masterVolume(0);
    }

}