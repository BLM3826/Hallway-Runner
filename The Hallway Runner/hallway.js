var z = 500;
var zL = -z / 2;
var zp = -z / 2;
var tp = 1
var zo = -250;

function light() {
    if (zp > 250 || zp < -250) {
        tp = tp * -1;
        // zp = -250
        ltng.play();
    }

    // pointLight(250, 250, 250, 0, 0, 250);
    // pointLight(250, 255, 20, 0, 0, 250);
    pointLight(250, 255, 20, 0, 0, 250);

    for (var i = 0; i <= 500; i = i + 125) {

        if (500 % abs(zp) == 0 || 500 % (250 - abs(zp)) == 0) {
            pointLight(250, 250, 250, 0, 0, zp + i);
            pointLight(250, 250, 250, 0, 0, zp + i);
            pointLight(250, 250, 250, 0, 0, zp + i);
        }
    }
    zp = zp + tp;
}

function hallway() {
    strokeWeight(1);
    fill(50, 30, 60, 255);
    stroke(0);
    translate(-50, 0, 60);
    box(20, 100, z);

    fill(5, 30, 200, 255);
    noStroke();
    translate(65, 60);
    box(150, 20, z);
    //lines
    stroke(0);
    strokeWeight(1);
    for (var i = 0; i < 500; i = i + 83) {
        line(-60, -10, zL + i, 60, -10, zL + i);
        line(-55, -110, zL + i, -55, -10, zL + i);
        line(55, -110, zL + i, 55, -10, zL + i);
        line(-55, -80, -250, -55, -80, 250);
        line(-55, -40, -250, -55, -40, 250);
        line(55, -80, -250, 55, -80, 250);
        line(55, -40, -250, 55, -40, 250);


    }
    if (loss === false) {
        zL += 3
    }
    if (zL > -166) {
        zL = -250;
    }

    // fill(60,40,20,0);
    // translate(0,0,-z/2)
    // plane(150,280);

    fill(50, 30, 60, 255);
    stroke(0);
    translate(65, -60);
    box(20, 100, z);
}