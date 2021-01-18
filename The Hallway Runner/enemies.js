var depth = 250;
var no = 0; // Number of obstacles
var shape = 2; // Shape of obstacle
var filling = 0; // Fill obstacle

function addEnemies() {
    push();
    if (pos == 0) { // Up left
        translate(-90, -20, zo);
        if (zo >= 170 && zo <= 200 && side < 40 && jump <= -30) {
            lose();
        }
    } else if (pos == 1) { // Up right
        translate(-40, -20, zo);
        if (zo >= 170 && zo <= 200 && side > 60 && jump <= -30) {
            lose();
        }
    } else if (pos == 2) { // Middle left
        translate(-90, 10, zo);
        if (zo >= 170 && zo <= 200 && side < 40) {
            lose();
        } 
    } else if (pos == 3) { // Middle right
        translate(-40, 10, zo);
        if (zo >= 170 && zo <= 200 && side > 60) {
          lose();
        }
    } else if (pos == 4) { // Bottom left
        translate(-90, 40, zo);
        if (zo >= 170 && zo <= 200 && side < 40 && jump > -20) {
            lose();
        }
    } else { // Bottom right
        translate(-40, 40, zo);
        if (zo >= 170 && zo <= 200 && side > 60 && jump > -20) {
            lose();
        }
    }

    if (zo > 270) {
        pos = int(random(6)); //Starting obstacles from different positions
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
    chooseEnemy(pos);
    pop();
}