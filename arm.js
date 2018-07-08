class Arm {
    constructor(posI, length, angle){
        this.posI = posI;
        this.length = length;
        this.angle = angle - HALF_PI;
        this.child = null;
    }

    render(){
        push();
        stroke(255);
        strokeWeight(4);
        line(this.posI.x,
            this.posI.y,
            this.getEndPoint().x,
            this.getEndPoint().y
        );
        pop();
        if(this.child != null){
            this.child.render();
        }
    }

    update(angle){
        this.angle = this.angle + angle;
        if(this.child != null){
            this.child.posI = this.getEndPoint();
            this.child.update(angle);
        }
    }

    getEndPoint(){
        return createVector(this.posI.x + cos(this.angle)*this.length,
                            this.posI.y + sin(this.angle)*this.length);
    }

    addChild(length, angle){
        if(this.child == null){
            this.child = new Arm(this.getEndPoint(),length,angle);
            return this.child;
        }
        else{
            return this.child.addChild(length,angle);
        }
    }
}