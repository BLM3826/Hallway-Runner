var z = 500;
var translate_z = 0;
var zL = -z / 2;
var zp = -z / 2;
var tp = 1
var zo = -250;


function light1() {
    if (zp > 250 || zp < -250) {
        tp = tp * -1;
        // zp = -250
        // ltng.play();
    }

    // pointLight(250, 250, 250, 0, 0, 250);
    pointLight(250, 255, 120, 0, 0, 250);
    //   pointLight(150,150,20,0,0,250);
    pointLight(250, 255, 120, 0, 0, 250);

    zp = zp + tp;
}

function daylight() {
    document.getElementById("defaultCanvas0").style.background = "#222 url('assets/sky.jpg') no-repeat";
    strokeWeight(1);
    fill(50, 30, 60, 255);
    stroke(0);
    translate(-50, 0, 60);
    texture(trees_l);
    push();
    translate(0, 0, translate_z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    pop();

    // fill(5, 30, 200, 255);
    fill(60, 30, 0, 255)
    noStroke();
    translate(65, 60);
    texture(soil);
    push();
    translate(0, 0, translate_z);
    box(150, 20, z);
    translate(0, 0, -z);
    box(150, 20, z);
    translate(0, 0, -z);
    box(150, 20, z);
    pop();
    //lines
    stroke(0);
    strokeWeight(1);

    for (var i = 0; i < 500; i = i + 83) {
        // line(-60, -10, zL + i, 60, -10, zL + i);
    }

    if (loss === false) {
        zL += 3
    }
    if (zL > -166) {
        zL = -250;
    }

    fill(50, 30, 60, 255);
    stroke(0);
    translate(65, -60);
    texture(trees_r);
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