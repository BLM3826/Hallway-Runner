var p_body;
var p_arm;
var p_l_f;
var p_r_f;
var x=-50;
var y=-50;
var i=5;
var j=10;

function pirateEnemy() {
  // translate(-90 + side, 20 + jump, 150);
  rotateX(PI);
  // scale(1 / 5);
  fill(255,140,60);
  model(p_body);
  translate(60,25,-75);
  push();
  rotateX(x/360);
  fill(55,40,160);
  model(p_arm);
  pop();
  scale(1/2);
  translate(-170,-250,100);
  push();
  translate(0,0, y)
  model(p_l_f);
  pop();
  translate(140,0,0);
  push();
  translate(0, 0, -y)
  model(p_r_f);
  pop();
  x += i;
  y += j;
  if(x===-50|| x===50){
    i*=-1;
  }
  if(y===-50 || y===50){
    j *= -1;
  }
  
}