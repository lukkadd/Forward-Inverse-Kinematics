function setup(){
    createCanvas(640,480);
    background(0);
    a1 = new Arm(createVector(320,240),50,0);
    a2 = a1.addChild(50,QUARTER_PI);
    a3 = a1.addChild(50,-QUARTER_PI);
}

function draw(){
    background(0);
    a1.render();
    a1.update(PI*0.01);
    a2.update(-PI*0.005);
    a3.update(PI*0.0075);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      a1.addChild(20,0);
    } else if (keyCode === RIGHT_ARROW) {

    }
  }