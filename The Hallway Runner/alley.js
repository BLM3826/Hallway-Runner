var z = 500;
var translate_z = 0;
var zL = -z / 2;
var zp = -z / 2;
var tp = 1
var zo = -250;

function light3() {
    if (zp > 250 || zp < -250) {
        tp = tp * -1;
        // zp = -250
        ltng.play();
    }

    pointLight(250, 255, 250, 0, 0, 200);

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
    document.getElementById("defaultCanvas0").style.background = "#222 url('assets/black.jfif') repeat";
    strokeWeight(1);
    fill(50, 30, 60, 255);
    stroke(0);
    translate(-50, 0, 60);
    texture(brick_l);
    push();
    translate(0, 0, translate_z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    pop();

    fill(5, 30, 200, 255);
    noStroke();
    translate(65, 60);
    texture(floor);
    push();
    translate(0, 0, translate_z);
    box(150, 20, z);
    translate(0, 0, -z);
    box(150, 20, z);
    translate(0, 0, -z);
    box(150, 20, z);
    pop();


    fill(50, 30, 60, 255);
    stroke(0);
    translate(65, -60);
    texture(brick_r);
    push();
    translate(0, 0, translate_z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    pop();

    if (loss === false) {
        translate_z += 3 * (1 + (speed - 3) / 10);
        // console.log("translate_z");
        // console.log(translate_z);

        if (translate_z > 500) {
            translate_z = 0;
        }
    }
}
