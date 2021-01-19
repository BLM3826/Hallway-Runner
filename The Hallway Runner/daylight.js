var z = 500;
var translate_z = 0;
var zL = -z / 2;
var zp = -z / 2;
var tp = 1
var zo = -250;

//Lighting for Daylight
function light1() {
    pointLight(250, 255, 120, 0, 0, 250);
    pointLight(250, 255, 120, 0, 0, 250);
}

function daylight() {
    //set background
    document.getElementById("defaultCanvas0").style.background = "#222 url('assets/sky.jpg') no-repeat";
    
    //Left wall
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

    //Floor
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

    //Right wall
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

    moveWalls();

}