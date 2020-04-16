class Wall{
    constructor(x, y, w, h, rot, col){
        this.col = col;
        this.body = Matter.Bodies.rectangle(x, y, w, h, {angle: rot, friction: 0.6, isStatic: true});
        Matter.World.addBody(world, this.body);
    }

    draw(){
        fill(this.col);
        noStroke();
        rectMode(CORNERS);
        quad(this.body.vertices[0].x, this.body.vertices[0].y, this.body.vertices[1].x, this.body.vertices[1].y, this.body.vertices[2].x, this.body.vertices[2].y, this.body.vertices[3].x, this.body.vertices[3].y);
    }
}