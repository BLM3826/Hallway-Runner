// Choose enemies based on the enviroment and the position
function chooseEnemy(p) {
    if (level == 0) { // daylight 
        if (p == 0 || p == 1) {
            dove();
        } else if (p == 2 || p == 3) {
            texture(trees_r);
            if (p == 2) {
                translate(30, 0, 0);
            } else {
                translate(-40, 0, 0);
            }
            bush();
        } else {
            treeStump();
        }
    } else if (level == 1) { // midnight
        if (p == 0 || p == 1) {
            bat();
        } else if (p == 2 || p == 3) {
            texture(panel_l);
            if (p == 2) {
                translate(30, 0, 0);
            } else {
                translate(-40, 0, 0);
            }
            bush();
        } else {
            spider();
        }
    } else if (level == 2) { // alley
        if (p == 0 || p == 1) {
            streetLight(p);
        } else if (p == 2 || p == 3) {
            zombie();
        } else {
            texture(brick_l);
            translate(0, -20, 0);
            bush();
        }
    } else { // dungeon
        if (p == 0 || p == 1) {
            parrot();
        } else if (p == 2 || p == 3) {
            skeletonPirate();
        } else {
            movingPirate();
        }
    }
}

// Set wanted color, scale, rotation for each enemy

function dove() {
    fill(255);
    scale(1 / 5);
    model(doveObj);
}

function treeStump() {
    fill(128, 64, 0);
    scale(1 / 5);
    model(treeStumpObj);
}

function bat() {
    fill(50);
    scale(1 / 5);
    model(batObj);
}

function spider() {
    fill(128, 64, 0);
    scale(1 / 5);
    model(spiderObj);
}

function streetLight(p) {
    rotateX(PI / 2);
    if (p == 0) {
        rotateZ(PI / 2);
    } else {
        rotateZ(3 * PI / 2);
    }
    translate(0, -17, 0);
    fill(255);
    scale(1 / 5);
    model(streetLightObj);
}

function zombie() {
    fill(0, 51, 0);
    scale(1 / 3);
    rotateX(-PI / 2);
    model(zombieObj);
}

function parrot() {
    fill(230, 80, 0);
    scale(1 / 7);
    model(parrotObj);
}

function skeletonPirate() {
    scale(1 / 4);
    fill(150);
    model(skeletonPirateObj);
}

function movingPirate() {
    rotate(-PI);
    scale(1 / 5);
    translate(0, -50, 0);
    pirateEnemy();
}

function bush() {
    ellipsoid(40, 40, 40, 24, 2);
}