var pos = 0;
var speed = 4;
var depth = 250;
var no = 0; // Number of obstacles
var shape = 2; // Shape of obstacle
var filling = 0; //Fill obstacle

function obst() {
  push();
  if (int(pos) == 0) {
    translate(0, 0, zo);
    if (zo >= 160 && zo <= 200 && side > 200) {
      lose();
    }
  } else if (int(pos) == 1) {
    translate(-40, 60, zo);
    if (zo >= 150 && zo <= 200 && side > 130 && jump > -70) {
      lose();
    }

  } else if (int(pos) == 2) {
    translate(-90, 60, zo);
    if (zo >= 150 && zo <= 200 && side < 130 && jump > -70) {
      lose();
    }
  } else {
    translate(-120, 0, zo);
    if (zo >= 160 && zo <= 200 && side < 60) {
      lose();
    }
  }

  if (zo > 250) {
    pos = random(4); //Starting obstacles from different positions
    zo = -int(random(0, depth)); //Starting obstacles from different depths
    no += 1;
    shape = int(random(2,4));
    filling = int(random(4));
  }
  if (loss === false) {
    zo += speed;
  }
  if (loss === false && speed <= 9 && no == 5){
    no = 0; //reset
    speed += 0.5; // increase speed every 5 obstacles
  }
  
  switch(filling){ // change obstacle filling
    case 0:
      texture(trees_r);
      break;
    case 1:
      texture(fire);
      break;
    case 2:
      texture(thorn);
      break;
    case 3:
      texture(wood);
      break;
  }
  ellipsoid(40, 40, 40, 5, shape);
  pop();
}