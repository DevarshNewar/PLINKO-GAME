const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var divisionHeight = 300;

var particle;

// Display variables
var p; // Plinko


// Create the arrays
var plinkos = [];
var divisions = [];
var particles = [];

var score = 0;


function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;


  Engine.run(engine);


  ground = new Ground(240, 790, 480, 20);

}

function draw() {
  background(0);

  ground.display();

  fill(255);
  textSize(32);
  text("Score: " + score, 40, 100);

  if (particle !== undefined) {
    particle.display();

    if (particle.body.position.y >= 523 && particle.body.position.y <= 550) {

      score += 300;

    }

  }

  drawPlinkos();
  drawDividers();
  drawParticles();




}


function drawPlinkos() {

  for (var i = 10; i <= width; i += 50) {

    // Push a new plinko
    plinkos.push(p = new Plinko(i, 20, 10));

    // Display the new plinko
    p.display();
  }


  for (var h = 30; h <= width - 10; h += 50) {

    // Push a new plinko
    plinkos.push(p = new Plinko(h, 60, 10));

    // Display the new plinko
    p.display();
  }


  for (var n = 15; n <= width - 10; n += 60) {

    // Push a new plinko
    plinkos.push(p = new Plinko(n, 100, 10));

    // Display the new plinko
    p.display();
  }

  for (var j = 15; j <= width + 5; j += 50) {

    // Push a new plinko
    plinkos.push(p = new Plinko(j, 140, 10));

    // Display the new plinko
    p.display();
  }


  for (var a = 15; a <= width; a += 55) {

    // Push a new plinko
    plinkos.push(p = new Plinko(a, 180, 10));

    // Display the new plinko
    p.display();
  }


  for (var q = 15; q <= width - 5; q += 60) {

    // Push a new plinko
    plinkos.push(p = new Plinko(q, 220, 10));

    // Display the new plinko
    p.display();
  }



}


function drawDividers() {

  // Create a divider
  for (var g = 10; g <= width; g += 77.5) {

    // Push a new divider
    divisions.push(new Division(g, height - divisionHeight / 2, 10, divisionHeight));


  }

  for (var k = 0; k < divisions.length; k++) {

    // Display the divider
    divisions[k].display();


  }



}



function drawParticles() {

  // Spawn the particles






}





function keyPressed() {

  if (keyCode === 32) {

    particle = new Particle(mouseX, 10, 10, 10);

  }
}
