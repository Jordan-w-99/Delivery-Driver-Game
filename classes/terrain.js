class Terrain{
    constructor(){
        this.x = 0;
        this.y = height-50;
        this.col = color(30, 200, 40);
    }

    draw(){
        fill(this.col);
        noStroke();
        rect(this.x, this.y, width, height);
    }

    collides(object){
        if(object.pos.y + object.h >= this.y){
            return true;
        }
        else{
            return false;
        }
    }
}