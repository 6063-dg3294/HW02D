function setup() {

createCanvas(600, 600);
background(240,240,240);
} 

function draw() {
fill(0)
beginShape();
vertex(0,0);
vertex(145, 0);
vertex(0,298);
endShape(CLOSE);
describe("the top left triangle")

beginShape();
vertex(0,298);
vertex(148,298);
vertex(148,148);
vertex(225,148);
vertex(300,300);
vertex(149,600);
vertex(0,600);
endShape(CLOSE);
describe("The left half shape")

beginShape();
vertex(300,300);
vertex(455,0);
vertex(600,0);
vertex(600,300);
vertex(455,300);
vertex(455,455);
vertex(380,455);
vertex(300,300);
endShape(CLOSE);
describe("The right half shape")


beginShape();
vertex(600,300);
vertex(600,600);
vertex(455,600);
endShape(CLOSE);
describe("the bottom right triangle")




}
