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