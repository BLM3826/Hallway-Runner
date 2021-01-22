// .obj variables
var p_body;
var p_arm;
var p_l_f;
var p_r_f;
var x = -40; //variable for sword rotation
var y = -40; //variable for feet movement
var i = 10; // speed of rotation
var j = 10; //speed of movement

function pirateEnemy() {
    rotateX(PI); // rotating because model is loaded backwards
    fill(245); // coloring
    model(p_body);
    // different trial and error values for proper shaping the pirate
    translate(60, 25, -75);
    push();
    translate(0, 0, 100);
    rotateX(x / 360);
    translate(0, 0, -100);
    fill(55, 40, 160);
    model(p_arm);
    pop();
    scale(1 / 2);
    translate(-170, -250, 100);
    push(); //push() regarding left feet
    translate(0, 0, y);
    model(p_l_f);
    pop();
    translate(140, 0, 0);
    push(); //push() regarding right feet
    translate(0, 0, -y);
    model(p_r_f);
    pop();

    if (x === -50 || x === 500) {
        i *= -1; // reversing rotation
    }
    if (y === -50 || y === 50) {
        j *= -1; // reversing translation, making "walking" effect
    }
    if (loss === false) {
        x += i;
        y += j;
    }
    console.log("x =" + x);
    console.log("y =" + y);

}