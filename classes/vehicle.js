class Vehicle{
    constructor(){
        this.pos = createVector(width/2, height/2);
        this.vel = createVector(0, 0);
        this.h = 90;
        this.col = color(0);
    }

    draw(){
        fill(this.col);
        noStroke();
        rect(this.pos.x, this.pos.y, 160, this.h);
    }

    update(){
        this.vel.y += 0.1;
        this.pos.y += this.vel.y;
    }
}