var xr = 0 / 360;
var yr = -40 / 360;
var yrtest = -40 / 360;
var zr = 0 / 360;
var d = true;
var f = true;
var fx, fy, ly, lx = 0;
var mdo = false;
var k = 4;
var p = false;

function mousePressed() {
    mdo = true;
}

function mouseReleased() {
    mdo = false;
}


function align() {

    rotateY(yr);
    rotateX(xr);
}

function senseMouse() {
    if (mdo) {
        if (f) {
            fx = (-(mouseY - 200) * 0.01);
            fy = ((mouseX - 200) * 0.01);
            f = false;
        }
        d = true;
        adjx = (-(mouseY - 200) * 0.01);
        adjy = ((mouseX - 200) * 0.01);
        adjx -= fx;
        adjy -= fy;
        yr = ly + adjy;
        xr = lx + adjx;
    } else if (d) {
        lx = xr;
        ly = yr;
        d = false;
        f = true;
    }
}

function keyPressed() {
    if (keyCode === CONTROL) {
        if (keyIsPressed === true) {
            senseMouse();
        }
    }
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
        } else if (keyCode === DELETE) {


            if (yr > -39.5 / 360) {
                yr = yr - 1 / 360;
                rotateY(yr);
            } else if (yr < -40.5 / 360) {
                yr = yr + 1 / 360;
                rotateY(yr);
            } else {
                rotateY(0);
            }
            if (xr > 0.5 / 360) {
                xr = xr - 1 / 360;
                rotateX(xr);
            } else if (xr < -0.5 / 360) {
                xr = xr + 1 / 360;
                rotateX(xr);
            } else {
                rotateX(0);
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
                    jump += 8;
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
        run.play()
    }
    if (jump > 0) {
        jump = 0;
    }
}