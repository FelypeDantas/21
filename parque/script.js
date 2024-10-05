let offset = 0;
let x;
let y;
let rad = 20;
let doffest = 0.01;

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    translate(100, 100);
    x = noise(rad * cos(offset)) * width;
    y = noise(rad * sin(offset)) * height;

    strokeWeight(2);
    stroke(random(255), random(255), random(255));
    point(x, y);
    point(200 - x, y);
    point(x, 200 - y);
    point(200 - x, 200 - y);
    offset += doffest;

    if (offset > 17) {
        doffest = 0;
    }
}

function mousePressed() {
    console.log(offset);
}
