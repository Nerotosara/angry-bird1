class pig{
    constructor(x,y){
        var pig={
    restitution:0.9,
    friction:0.3,
    density:1.0
        }
        
        this.body = Bodies.rectangle(x,y,50,50,pig);

        this.width = 50;
        this.height = 50;  
    
        World.add (world,this.body);
    }

    display(){
        var pos = this.body.position;
    var angle = this.body.angle;
    push();
      translate(pos.x,pos.y);
      rotate(angle);
        fill("blue")
       rectMode(CENTER)
       rect(0,0,this.width,this.height);
    
       pop ();
      }
    }