var pos = 3;
var speed = 6;
var depth = 250;
var no = 0; // Number of obstacles
var shape = 2; // Shape of obstacle
var filling = 0; //Fill obstacle

function obst() {
    push();
    if (int(pos) == 0) {
        translate(-30, -20, zo);
        if (zo >= 140 && zo <= 200 && side > 60 && jump <= -30) {
            lose();
        }
    } else if (int(pos) == 1) {
        translate(-30, 20, zo);
        if (zo >= 170 && zo <= 200 && side > 60 && jump > -20) {
            lose();
        }

    } else if (int(pos) == 2) {
        translate(-90, 20, zo);
        if (zo >= 170 && zo <= 200 && side < 40 && jump > -30) {
            lose();
        }
    } else {
        translate(-90, -20, zo);
        if (zo >= 170 && zo <= 200 && side < 40 && jump <= -30) {
            lose();
        }
    }

    if (zo > 270) {
        pos = random(4); //Starting obstacles from different positions
        zo = -270;
        no += 1;
        score += 1;
    }
    if (loss === false) {
        zo += speed;
    }
    if (loss === false && speed <= 12 && no == 5) {
        no = 0; //reset
        speed += 1; // increase speed every 5 obstacles
    }

    normalMaterial();
    //fill(255);
    rotate(PI);
    if (int(pos) == 0) {
        fill(230, 80, 0);
        scale(1 / 7);
        model(parrot);
    } else if (int(pos) == 1) {
        scale(1 / 5);
        fill(200);
        model(skeleton);
    } else if (int(pos) == 2) {
        scale(1 / 4);
        fill(150);
        model(skeletonPirate);
    } else {
        fill(230, 80, 0);
        scale(1 / 7);
        model(parrot);
    }

    //ellipsoid(40, 40, 40, 5, shape);
    pop();
}