var xr = 0 / 360; // yy' rotate angle
var yr = -40 / 360; // xx' rotate angle
var k = 4; // jump speed per repeat

// platform angle 
function align() {
    rotateY(yr);
    rotateX(xr);
}

// keybinding orientation
function keyPressed() {
    if (loss === false) {
        if (keyCode === RIGHT_ARROW || keyCode === 68) {
            if (yr <= 11 / 360) {
                yr = yr + 4 / 360;
            }
            if (turn <= 0.8) {
                turn += 24 / 360;
            }
            if (side <= 65) {
                side += 10;
            }

        } else if (keyCode === LEFT_ARROW || keyCode === 65) {
            if (yr >= -39 / 360) {
                yr = yr - 4 / 360;
            }
            if (turn >= 0) {
                turn -= 24 / 360;
            }
            if (side > 0) {
                side -= 10;
            }
        } else if (keyCode === UP_ARROW || keyCode === 87) {
            if (keyIsPressed === true) {
                jflag = false;
                if (jump >= -70) {
                    jump -= k;
                    if (jump <= -60 || jump >= 0) {
                        k *= -1;
                    }
                }
            } else {
                jflag = true;
                if (jump <= 0) {
                    jump += 8; //downfall faster than k
                    k = 4;
                }
            }

        } else if (keyCode === ESCAPE) {
            loss = true;
            run.pause();
        }
    }
    if (keyCode === 32) {
        loss = false;
        if (!mute) run.play()
    }
    if (jump > 0) {
        jump = 0;
    }
}