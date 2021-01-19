var cpos; // coin position
var zc = -270; // z of coin
var speedc; // speed of coin
var addcoin = true;

function addcoins() {
    push();
    
    // Put coin in the right place (according to the value of cpos)   
    // Set when the player takes the coin (different for each position)
  
    if (int(cpos) == 0) { // Up right
        translate(-25, -20, zc);
        if (zc >= 180 && zc <= 250 && side > 60 && jump <= -30) {
            if (addcoin) {
                if(!mute) collect.play(); // Mute sound (when the player has muted the game from the menu)
                coins += 1; // Increase coins by one
                addcoin = false; // Do not increase again for this coin
            }
        }
    } else if (int(cpos) == 1) { // Bottom right
        translate(-25, 30, zc);
        if (zc >= 180 && zc <= 250 && side > 60 && jump >= -10) {
            if (addcoin) {
                if(!mute) collect.play();
                coins += 1;
                addcoin = false;
            }
        }
    } else if (int(cpos) == 2) { // Bottom left
        translate(-90, 30, zc);
        if (zc >= 180 && zc <= 250 && side < 40 && jump >= -10) {
            if (addcoin) {
                if(!mute) collect.play();
                coins += 1;
                addcoin = false;
            }
        }
    } else { // Up left
        translate(-90, -20, zc);
        if (zc >= 180 && zc <= 250 && side < 40 && jump <= -30) {
            if (addcoin) {
                if(!mute) collect.play();
                coins += 1;
                addcoin = false;
            }
        }
    }

    if (zc > 270) { // Coin has disappeared from the screen
        cpos = random(4);// Starting coins from 4 different positions
        zc = -270; // Start next coin at maximum depth
        addcoin = true; // Next coin will be able to increase coins
    }
    if (loss === false) { // Move coin 
        zc += speedc;
    }

    // Create coin
    if (addcoin) {
        normalMaterial();
        fill(255, 200, 0);
        scale(1 / 12);
        model(coin);
    }
    pop();
}