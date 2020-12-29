var cpos; // coin position
var zc; // z of coin
var speedc; // speed of coin
var depth = 250;
var totalno = 0;
var shape = 2; // Shape of obstacle
var filling = 0; //Fill obstacle
var addcoin = true;

function addcoins() {
  push();
  if (int(cpos) == 0) {
    translate(-25, -20, zc);
    if (zc >= 180 && zc <= 200 && side > 60 && jump <= -30) {
      if(addcoin){
        collect.play();
        coins += 1;
        //totalcoins += 1;
        addcoin = false;
      }
    }
  } else if (int(cpos) == 1) {
    translate(-25, 30, zc);
    if (zc >= 180 && zc <= 200 && side > 60 && jump >= -10) {
      if(addcoin){
        collect.play();
        coins += 1;
        //totalcoins += 1;
        addcoin = false;
      }
    }
  } else if (int(cpos) == 2) {
    translate(-90, 30, zc);
    if (zc >= 180 && zc <= 200 && side < 40 && jump >= -10) {
      if(addcoin){
        collect.play();
        coins += 1;
        //totalcoins += 1;
        addcoin = false;
      }
    }
  } else {
    translate(-90, -20, zc);
    if (zc >= 180 && zc <= 200 && side < 40 && jump <= -30) {
      if(addcoin){
        collect.play();
        coins += 1;
        //totalcoins += 1;
        addcoin = false;
      }
    }
  }

  if (zc > 250) {
    //cpos = random(4); //Starting obstacles from different positions
    cpos = random(4);
    zc = -250;
    addcoin = true;
  }
  if (loss === false) {
    zc += speedc;
  }
  /*if (loss === false && speed <= 10 && no == 5){
    nc = 0; //reset
    speedc += 1; // increase speed every 5 obstacles
  }*/
  
  /*normalMaterial();
  //texture(coin);
  if(addcoin){
    fill(255, 255, 0);
  }else{
    noFill();
  }
  //sphere(6);
  scale(1 / 5);
  model(coin);*/
  if(addcoin){
    normalMaterial();
    fill(255, 200, 0);
    //fill(255);
    scale(1 / 12);
    model(coin);
  }
  pop();
}