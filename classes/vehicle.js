class Vehicle{
    constructor(x, y, w, h, wSize, col){
        this.col = col;
        this.tyreGrip = 0.9;
        this.springStiffness = 0.1;
        this.springDamping = 0.01;
        this.springHeight = 50;

        this.parts = [];
        this.parts.push(Matter.Bodies.rectangle(x, y, w + w/2, h));

        this.options = {
            friction: this.tyreGrip,
            restitution: 0.8,
        }

        this.parts.push(Matter.Bodies.circle(x - w/2 + wSize, y + h*2, wSize, this.options));
        this.parts.push(Matter.Bodies.circle(x + w/2 - wSize, y + h*2, wSize, this.options));

        Matter.World.add(world, this.parts);

        this.suspension = [];

        this.options = {
            bodyA: this.parts[0],
            pointA: {
                x: -w/2 + wSize,
                y: 0
            },
            bodyB: this.parts[1],
            length: this.springHeight,
            stiffness: this.springStiffness,
            damping: this.springDamping,
        }

        this.suspension.push(Matter.Constraint.create(this.options));

        this.options = {
            bodyA: this.parts[0],
            pointA: {
                x: w/2 - wSize,
                y: 0
            },
            bodyB: this.parts[2],
            length: this.springHeight,
            stiffness: this.springStiffness,
            damping: this.springDamping,
        }

        this.suspension.push(Matter.Constraint.create(this.options));

        // this.options = {
        //     bodyA: this.parts[1],
        //     bodyB: this.parts[2],
        //     stiffness: 1,
        //     damping: 0,
        // }

        // this.suspension.push(Matter.Constraint.create(this.options));

        // this.options = {
        //     bodyA: this.parts[0],
        //     bodyB: this.parts[1],
        //     stiffness: this.springStiffness,
        //     damping: this.springDamping,
        // }

        // this.suspension.push(Matter.Constraint.create(this.options));

        // this.options = {
        //     bodyA: this.parts[0],
        //     bodyB: this.parts[2],
        //     stiffness: this.springStiffness,
        //     damping: this.springDamping,
        // }

        // this.suspension.push(Matter.Constraint.create(this.options));

        this.options = {
            bodyA: this.parts[0],
            pointA: {
                x: -(3*w)/4,
                y: 0
            },
            length: sqrt(sq(wSize*3) + sq(this.springHeight)),

            bodyB: this.parts[1],
            stiffness: 1,
            damping: 0,
        }

        this.suspension.push(Matter.Constraint.create(this.options));

        this.options = {
            bodyA: this.parts[0],
            pointA: {
                x: (3*w)/4,
                y: 0
            },
            length: sqrt(sq(wSize*3) + sq(this.springHeight)),
            bodyB: this.parts[2],
            stiffness: 1,
            damping: 0,
        }

        this.suspension.push(Matter.Constraint.create(this.options));

        //console.log(this.suspension);
        Matter.World.add(world, this.suspension);
    }

    draw(){
        fill(this.col);
        noStroke(); 
     

        for(let i = 0; i < this.parts.length; i++){
            beginShape();
            for(let j = 0; j < this.parts[i].vertices.length; j++){
                vertex(this.parts[i].vertices[j].x, this.parts[i].vertices[j].y);
            }

            endShape(CLOSE);

        }

        stroke(0);
        strokeWeight(2);
        line(this.parts[1].position.x, this.parts[1].position.y, this.parts[1].vertices[0].x, this.parts[1].vertices[0].y);
        line(this.parts[2].position.x, this.parts[2].position.y, this.parts[2].vertices[0].x, this.parts[2].vertices[0].y);


        stroke(255,0,0);
        strokeWeight(3);
        for(let i = 0; i < this.suspension.length; i++){
            line(this.suspension[i].bodyA.position.x + this.suspension[i].pointA.x, this.suspension[i].bodyA.position.y + this.suspension[i].pointA.y, this.suspension[i].bodyB.position.x + this.suspension[i].pointB.x, this.suspension[i].bodyB.position.y + this.suspension[i].pointB.y)
        }
    }
}