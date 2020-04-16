class Terrain{
    constructor(){
        this.body = Matter.Bodies.rectangle(worldWidth/2, height - 40, worldWidth, 80, {firction: 0.8,isStatic: true});
        
        this.col = color(0,0,0);
        Matter.World.addBody(world, this.body);

        //console.log(this.body);
    }

    draw(){
        fill(this.col);
        noStroke();

        beginShape();
        for(let i=0; i<this.body.vertices.length;i++){
            vertex(this.body.vertices[i].x, this.body.vertices[i].y);
        }
        endShape(CLOSE);
    }
}