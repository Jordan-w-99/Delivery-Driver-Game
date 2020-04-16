let worldWidth = 20000;
let terrain, vehicle, wall;
let world, engine;

function setup() {
  createCanvas(640, 480);

  engine = Matter.Engine.create();
  world = engine.world;

  terrain = new Terrain();
  //wall = new Wall(50, 400, 500, 100, PI/2, color(0,0,0));
  vehicle = new Vehicle(200, 10, 150, 20, 20, color(0,0,0, 70)); // x, y, w, h, wSize, col

}

function draw() {
  Matter.Engine.update(engine);
  background(color(170,220,255));
  push();
  
  let mapPos = map(vehicle.parts[0].position.x, 200, 20000, 100, 300);
  fill(200,200,160);
  rect(100, 0, 200, 20);
  fill(0);
  circle(mapPos, 10, 10);

  text("R Wheel angular Speed: " + vehicle.parts[1].angularSpeed,10,50);
  text("Vehicle speed: " + vehicle.parts[0].speed, 10, 65);

  pop();

  translate(-vehicle.parts[0].position.x + width/2, -vehicle.parts[0].position.y + height/2);

  if(keyIsDown(39)){
    vehicle.parts[1].torque = 0.1;
    console.log(vehicle.parts[0]);
    //vehicle.parts[2].torque = 0.1;

  }
  if(keyIsDown(37)){
    vehicle.parts[1].torque = -0.1;
    //vehicle.parts[2].torque = -0.1;

  }



  

  vehicle.draw();
  terrain.draw();
  //wall.draw();




}

function mousePressed(){
}

