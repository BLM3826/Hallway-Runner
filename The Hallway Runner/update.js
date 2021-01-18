// Update score & coins messages
function score_coins() {
    totalno = score;
    if (totalno > 0) {
        if (score > hscore) {
            span_highscore.classList.add("newrecord");
            score_msg.innerHTML = "New Highscore!";
        } else if (totalno % 30 == 0) {
            score_msg.innerHTML = "You are unstoppable!";
        } else if (totalno % 20 == 0) {
            score_msg.innerHTML = "Keep Going!";
        } else if (totalno % 10 == 0) {
            score_msg.innerHTML = "Good Job!";
        }
    } else {
        score_msg.innerHTML = "Have Fun!";
    }
    span_score.innerHTML = score;
    span_coins.innerHTML = coins;
    span_highscore.innerHTML = hscore;
    span_total_coins.innerHTML = totalcoins;

}

// Update position of the walls
function moveWalls() {
    if (loss === false) {
        translate_z += 3 * (1 + (speed - 4) / 10);

        if (translate_z > 500) {
            translate_z = 0;
        }
    }
}