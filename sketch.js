let wall;
let floor;
//let tv;
//let couch;
let song;

function preload() {
  wall = loadImage("whitewall.jpg");
  floor = loadImage("woodfloor.jpg");
 // tv = loadImage('tv.gif');
 // couch = loadImage("couch.gif");
  song = loadSound('space.mp3');
  
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  song.loop();
}

function draw() {
  background(
155, 219, 242
);
  ambientLight(200, 241, 247);
   let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2
  pointLight(250, 250, 250, locX, locY, 50);

 // orbitControl();
  noStroke();
  
//floor
  push();
  translate(-30, 90, 300);
  texture(floor);
  rotateX(-1.6);
  plane(600,400);
  pop();

  //wall1
  push();
  translate(-30, -100, 100);
  texture(wall);
  plane(600,400);
  pop();
  
//wall2
  push();
  translate(265, -100, 300);
  texture(wall);
  rotateY(-1.58);
  plane(400);
  pop();

  //wall3
  push();
  translate(-330, -100, 300);
  texture(wall);
  rotateY(-1.58);
  plane(400);
  pop();
  
   
}
