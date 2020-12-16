var x = 30;
var y = 90;
var rnee = 20;
var lnee = -10;
var rbow = 35;
var lbow = 40;
var arm = 20;
var i = 3;
var jflag = true;
var jump = 0;
var turn=1;
var side=0;

function guyShape() {


  beginShape();
  // texture(guyCanv);
  translate(-400+side, 50+jump, 800);
  // translate(0, jump, 0);
  // plane(110,100);
  // translate(-100, -80, 50);
  rotateY(turn);
  fill(50);
  noStroke();
  // strokeWeight(5);
  // pointLight(random(255), random(255), random(255),
  // random(-400, 400), random(-400, 400), random(-500, 500));
  ellipsoid(20, 20, 10, 5, 5);
  stroke(200, 100, 0);
  // stroke(255);
  strokeWeight(2);
  vertex(0, 0, 0);
  vertex(0, 60, 0);
  vertex(lnee, y, 0);
  vertex(-x, 120, 0);
  vertex(-x + 30, 120, 0);
  vertex(-x, 120, 0);
  vertex(lnee, y, 0);
  vertex(0, 60, 0);
  vertex(rnee, y, 0);
  vertex(x, 120, 0);
  vertex(x + 30, 120, 0);
  vertex(x, 120, 0);
  vertex(rnee, y, 0);
  vertex(0, 60, 0);
  vertex(0, 30, 0);
  vertex(x - 10, rbow, 0);
  vertex(x, rbow - arm, 0);
  vertex(x - 10, rbow, 0);
  vertex(0, 30, 0);
  vertex(-x + arm / 2, lbow, 0);
  vertex(-x, lbow + arm, 0);
  if (jflag === true && loss===false) {
    if (x == 30) {
      i = i * -1;
    } else if (x == -30) {
      i *= -1;
    }

    if (rnee < 0 || lnee < 0) {
      if (rnee < x + 10) {
        rnee = -x + 20;
      } else if (lnee < -x + 10) {
        lnee = x + 10;
      }
    }

    x += i;
    rnee = rnee + i;
    lnee = lnee - i;

    rbow = rbow - i / 4;
    lbow = lbow + i / 4;
    arm = arm + i / 1.5;
    
    if(rr===false){
      run.play();
      rr=true;
    }
    
    
  }else{
    run.pause();
    rr=false;
  }

  endShape();
}