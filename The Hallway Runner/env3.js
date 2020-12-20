var z = 500;
var zL = -z / 2;
var zp = -z / 2;
var tp = 1
var zo = -250;

function light3() {
  if (zp > 250 || zp < -250) {
    tp = tp * -1;
  }
  pointLight(150,150,150,0,0,250);
  pointLight(150,150,150,0,0,250);

  zp = zp + tp;
  for (var i = 0; i <= 500; i = i + 125) {

    if (500 % abs(zp) == 0 || 500 % (250 - abs(zp)) == 0) {
      pointLight(250, 250, 250, 0, 0, zp + i);
      pointLight(250, 250, 250, 0, 0, zp + i);
    //   pointLight(250, 250, 250, 0, 0, zp + i);
    }
  }
}

function env3() {
  document.body.style.background = "#000000 no-repeat";
  strokeWeight(1);
  fill(50, 30, 60, 255);
  stroke(0);
  translate(-50, 0, 60);
  texture(wall);
  box(20, 100, z);

  fill(60, 30, 0, 255)
  noStroke();
  translate(65, 60);
  texture(wall);
  box(150, 20, z);
  //lines
  stroke(0);
  strokeWeight(1);
  for (var i = 0; i < 500; i = i + 83) {
    line(-60, -10, zL + i, 60, -10, zL + i);
    line(-55, -110, zL + i, -55, -10, zL + i);
    line(55, -110, zL + i, 55, -10, zL + i);
  }
  if (loss === false) {
    zL += 3
  }
  if (zL > -166) {
    zL = -250;
  }

  fill(50, 30, 60, 255);
  stroke(0);
  translate(65, -60);
  texture(wall_r);
  box(20, 100, z);
  obst();
}
var pos = 0;

function obst() {
  push();
  if (int(pos) == 0) {
    translate(0, 0, zo);
    if (zo >= 160 && zo <= 200 && side > 200) {
      lose();
    }
  } else if (int(pos) == 1) {
    translate(-40, 60, zo);
    if (zo >= 160 && zo <= 200 && side > 200 && jump > -40) {
      lose();
    }

  } else if (int(pos) == 2) {
    translate(-90, 60, zo);
    if (zo >= 160 && zo <= 200 && side < 50 && jump > -40) {
      lose();
    }
  } else {
    translate(-120, 0, zo);
    if (zo >= 160 && zo <= 200 && side < 50) {
      lose();
    }
  }

  if (zo > 250) {
    pos = random(4);
    zo = -250;
  }
  if (loss === false) {
    zo += 5;
  }
  fill(50);
  ellipsoid(40, 40, 40, 24, 2);

  pop();
}