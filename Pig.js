class Pig {
    constructor(x,y){

       var abc = {
           restitution:1,
           density:1,
           friction:1
       }

        this.body = Bodies.rectangle(x,y,50,50,abc);
        this.width = 50;
        this.height = 50;
        World.add(myWorld,this.body);
    }

    display(){

       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);

       fill("green");
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
    }
}