var x = 30;
var y = 90;
var jflag = true;
var jump = 0;
var turn = 0;
var side = 0;
var firstPick;
var tenn = 0;
var tenflip = 40;

function stronguy() {
    /*
    checking if uniform's color can change whether we have 20 coins available
    */
    charcolor = document.getElementById("colorpick").value;
    if (totalcoins >= 20) {
        document.getElementById("colorpick").disabled = false;
        if ((document.getElementById("colorpick").defaultValue) != charcolor) {
            if (firstPick === true) {
                totalcoins -= 20;
                firstPick = false;
                if(!mute) collect.play();
                window.sessionStorage.setItem("coins", totalcoins);
            }
            //Save uniform color
            document.getElementById("colorpick").defaultValue = charcolor;
            window.sessionStorage.setItem("uniform", charcolor);
        }
    }
    /* 
    in the following section the .obj files are loaded
    transformations using p5's functions take place in order to create the final player that will be in the game
    values were used based on trial and error until the result was visually good 
    */
    translate(-100 + side, 15 + jump, 200); //topothetisi
    scale(1 / 9);
    rotateY(PI - PI / 12);
    rotateY(turn); //    peristrofh
    rotateX(PI);
    normalMaterial();
    fill(charcolor);
    model(torso);
    push();
    translate(0, 120, 0);
    scale(1 / 3);
    rotateY(PI);
    fill(255, 153, 153);
    model(head);
    pop();
    push();
    translate(0, -70, -10);
    rotateY(PI / 2);
    rotateZ(PI / 8);
    push();
    rotateZ(-tenn / 360);
    translate(-25, -80, 25);
    model(leg);
    scale(1 / 2.2);
    translate(-80, -250, 0);
    rotateY(PI / 2);
    rotateX(PI / 4);
    fill(50);
    model(l_shoe);
    pop();
    push();
    rotateZ(tenn / 360);
    translate(-25, -80, -25);
    model(leg);
    scale(1 / 2.2);
    translate(-80, -250, 0);
    rotateY(PI / 2);
    rotateX(PI / 4);
    fill(50);
    model(r_shoe);
    pop();
    pop();
    push();
    translate(0, 50, 5);
    rotate(PI);
    rotateX(PI / 3);
    scale(1 / 1.5);
    push();
    rotateX(tenn / 360);
    translate(120, -23, -60);
    rotateY(-PI / 8);
    model(arm);
    scale(1 / 3);
    translate(-40, -200, -320);
    rotateX(PI + PI / 4);
    rotateY(-PI / 2);
    fill(255, 153, 153);
    model(hand)
    pop();
    push();
    rotateX(-tenn / 360);
    translate(-120, -23, -60);
    rotateY(PI / 8);
    model(arm);
    push();
    translate(0, -130, -70);
    rotateX(PI / 1.25);
    normalMaterial();
    model(weapon);
    pop();
    scale(1 / 4);
    translate(0, -250, -400);
    rotateX(PI);
    rotateY(PI / 2);
    rotateZ(PI / 6);
    fill(255, 153, 153);
    model(fist);
    pop();
    pop();
    // rotation movements
    if (tenn === 360 || tenn === -360) {
        tenflip *= -1;
    } else if (tenn >= 400) {
        tenn = 360;
        tenflip *= -1;
    } else if (tenn <= -400) {
        tenn = -360;
        tenflip *= -1;
    }
    if (jflag === true && loss === false) {
        tenn += tenflip * (1 + (speed - 3) / 10);
    }
}
