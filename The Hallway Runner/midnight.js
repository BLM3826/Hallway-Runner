var z = 500;
var translate_z = 0;
var zL = -z / 2;
var zp = -z / 2;
var tp = 1
var zo = -250;

function light2() {
    if (zp > 250 || zp < -250) {
        tp = tp * -1;
    }
    pointLight(150, 150, 150, 0, 0, 100);
    pointLight(150, 150, 150, 0, 0, 100);

    zp = zp + tp;
}

function midnight() {
    document.getElementById("defaultCanvas0").style.background = "#222 url('assets/night_sky.jpg') no-repeat";
    strokeWeight(1);
    fill(50, 30, 60, 255);
    stroke(0);
    translate(-50, 0, 60);
    texture(panel_l);
    push();
    translate(0, 0, translate_z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    pop();

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

    fill(50, 30, 60, 255);
    stroke(0);
    translate(65, -60);
    texture(panel_r);
    push();
    translate(0, 0, translate_z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    translate(0, 0, -z);
    box(20, 100, z);
    pop();

    moveWalls();

}