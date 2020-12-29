var z = 500;
var zL = -z / 2;
var zp = -z / 2;
var tp = 1
var zo = -250;

function light2() {
  if (zp > 250 || zp < -250) {
    tp = tp * -1;
  }
  pointLight(150,150,20,0,0,250);

  zp = zp + tp;
}

function env2() {
  document.body.style.background = "#222 url('assets/night_sky.jpg') no-repeat";
  strokeWeight(1);
  fill(50, 30, 60, 255);
  stroke(0);
  translate(-50, 0, 60);
  texture(trees_l);
  box(20, 100, z);

  fill(60, 30, 0, 255)
  noStroke();
  translate(65, 60);
  box(150, 20, z);
  //lines
  stroke(0);
  strokeWeight(1);
  for (var i = 0; i < 500; i = i + 83) {
     line(-60, -10, zL + i, 60, -10, zL + i);
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
  texture(trees_r);
  box(20, 100, z);
  obst();
}