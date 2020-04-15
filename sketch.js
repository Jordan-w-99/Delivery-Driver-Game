let terrain, vehicle;

function setup() {
  createCanvas(640, 480);
  terrain = new Terrain();
  vehicle = new Vehicle();
}

function draw() {
  background(color(170,220,255));
  

  vehicle.update();
  vehicle.draw();
  terrain.draw();

  if(terrain.collides(vehicle)){
    console.log(true);
    vehicle.vel.y = 0;
    vehicle.pos.y = terrain.y - vehicle.h;
  }
}