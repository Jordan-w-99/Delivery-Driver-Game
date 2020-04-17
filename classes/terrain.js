class Terrain{
    constructor(){
        this.body = Matter.Bodies.rectangle(worldWidth/2, 40, worldWidth, 80, {restitution: 0.1, friction: 1, staticFriction: 1,isStatic: true});
        
        Matter.World.addBody(world, this.body);
        
        this.terrain = [];
        this.newTerrain = [];

        for(let xOff = 0; xOff < 100; xOff ++){
            this.newTerrain.push({
                x: map(xOff, 0, 99, 0, worldWidth),
                y: map(noise(xOff), 0, 1, 0, -200)
            });
        }

        for(let i = 1; i < this.newTerrain.length; i ++){
            let vertices = [
                createVector(this.newTerrain[i-1].x, this.newTerrain[i-1].y),
                createVector(this.newTerrain[i].x, this.newTerrain[i].y),
                createVector(this.newTerrain[i].x, 0),
                createVector(this.newTerrain[i-1].x, 0),
            ]

            let COM = Matter.Vertices.centre(vertices);

            // this.terrain.push(Matter.Bodies.polygon(COM.x, COM.y, 4, 100, {isStatic: true}));
            
            //     for(let j = 0; j<4; j++){
            //         this.terrain[i-1].vertices[j].x = vertices[j].x
            //         this.terrain[i-1].vertices[j].y = vertices[j].y
            //     }

            
            this.terrain.push(Matter.Bodies.fromVertices(COM.x, COM.y, vertices, {isStatic: true}));
        }

        Matter.World.add(world, this.terrain);

        this.col = color(0,0,0);

        console.log(this.terrain);
    }

    draw(){
        fill(this.col);
        noStroke();

        beginShape();
        for(let i=0; i<this.body.vertices.length;i++){
            vertex(this.body.vertices[i].x, this.body.vertices[i].y);
        }
        endShape(CLOSE);

        noFill();
        stroke(0);
        for(let i=0; i< this.terrain.length; i++){
            beginShape(QUADS);
            for(let j=0; j<this.terrain[i].vertices.length;j++){
                vertex(this.terrain[i].vertices[j].x, this.terrain[i].vertices[j].y);
            }
            endShape();
        }
        noStroke();

        // beginShape();
        // for(let i=0; i<this.newTerrain.length;i++){
        //         vertex(this.newTerrain.x, this.newTerrain.y);
        // }
        // endShape(CLOSE);
    }

    // generate(){
    //     let newTerrain = [];

    //     for(let xOff = 0; xOff < 100; xOff ++){
    //         newTerrain.push(createVector(xOff,noise(xOff)));
    //     }

    //     for(let i = 0; i < newTerrain.length; i ++){
    //         this.terrain.push(createVector(map(newTerrain[i].x, 0, 100, 0, worldWidth), map(newTerrain[i].y, 0, 1,height-40, height-90)));
    //     }
    // }
}