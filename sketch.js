let s;
let m;
let h;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  s = new ClockUnit(10, 80, 3, color(255, 100, 150), 1);
  m = new ClockUnit(5, 100, 4, color(100, 100, 150), 2);
  h = new ClockUnit(0, 120, 5, color(100, 150, 180), 3);
}

function draw() {
  background(color(30, 30, 30));

  let hr = hour();
  let mn = minute();
  let sc = second();

  let scAngle = map(sc, 0, 60, 0, 360);
  let mnAngle = map(mn, 0, 60, 0, 360);
  let hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();

    translate(200, 200);
    rotate(-90);

    h.show(hrAngle);
    m.show(mnAngle);
    s.show(scAngle);

  pop();
}


class ClockUnit {
  constructor(offset, handLength, strokeWeight, strokeColor, arcLayer) {
    this.offset = offset;
    this.handLength = handLength;
    this.strokeWeight = strokeWeight;
    this.strokeColor = strokeColor;  
    this.arcLayer = arcLayer;
  }

  show(angle) {
    noFill();
    strokeWeight(this.strokeWeight);
    stroke(this.strokeColor);
    arc(0, 0, 200 + this.arcLayer*30, 200 + this.arcLayer*30, 0 + this.offset, angle + this.offset);

    push();
      rotate(angle);
      strokeWeight(this.strokeWeight-1);
      stroke(this.strokeColor);
      line(0, 0, this.handLength, 0);
    pop();
  }
}