// Update score & coins messages
function score_coins() {
    totalno = score;
    if (totalno > 0) {
        if (score > hscore) { // New highscore message
            span_highscore.classList.add("newrecord");
            score_msg.innerHTML = "New Highscore!";          
        } else if (totalno % 30 == 0) { // Encouraging messages
            score_msg.innerHTML = "You are unstoppable!";
        } else if (totalno % 20 == 0) {
            score_msg.innerHTML = "Keep Going!";
        } else if (totalno % 10 == 0) {
            score_msg.innerHTML = "Good Job!";
        }
    } else {
        score_msg.innerHTML = "Have Fun!"; // Initial message
    }
    span_score.innerHTML = score; // Set score
    span_coins.innerHTML = coins; // Set coins
    span_highscore.innerHTML = hscore; // Set highscore
    span_total_coins.innerHTML = totalcoins; // Set total coins

}

// Update position of the walls
function moveWalls() {
    if (loss === false) {
        // Wall speed depends on the speed of the enemies
        translate_z += 3 * (1 + (speed - 4) / 10); 

        if (translate_z > 500) {
            translate_z = 0;
        }
    }
}