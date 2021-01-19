var no = 0; // Number of enemies

function addEnemies() {
    push();
  
    // Put enemy in the right place (according to the value of pos)   
    // Set when the player loses (different for each position)
  
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

    if (zo > 270) { // Enemy has disappeared from the screen
        pos = int(random(6)); //Starting enemies from 6 different positions
        zo = -270; // Start next enemy at maximum depth
        no += 1; // Increase number of enemies 
        score += 1; // Each successfully avoided enemy increases the score by one
    }
    if (loss === false) { // Move enemy
        zo += speed;
    }
  
    // Every 5 enemies: increase the speed by 1 until it reaches 12
    if (loss === false && speed <= 12 && no == 5) { 
        no = 0; // Reset number of enemies
        speed += 1; // Increase speed by one
    }

    // Choose suitable enemy
    normalMaterial();
    rotate(PI);
    chooseEnemy(pos);
    pop();
}