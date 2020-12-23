const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

function preload() {
    polygonIMG = loadImage("polygon.png")
}

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(395,295,220,10);
    stand2 = new Ground(800,150,140,10);

    //first row
    block1_1 = new Box(300,275,30,40);
    block2_1 = new Box(330,275,30,40);
    block3_1 = new Box(360,275,30,40);
    block4_1 = new Box(390,275,30,40);
    block5_1 = new Box(420,275,30,40);
    block6_1 = new Box(450,275,30,40);
    block7_1 = new Box(480,275,30,40);

    //second row
    block8_1 = new Box(330,235,30,40);
    block9_1 = new Box(360,235,30,40);
    block10_1 = new Box(390,235,30,40);
    block11_1 = new Box(420,235,30,40);
    block12_1 = new Box(450,235,30,40);

    //third row
    block13_1 = new Box(360,195,30,40);
    block14_1 = new Box(390,195,30,40);
    block15_1 = new Box(420,195,30,40);

    //forth row
    block16_1 = new Box(390,155,30,40);


    //first row
    block1_2 = new Box(735,130,30,40);
    block2_2 = new Box(765,130,30,40);
    block3_2 = new Box(795,130,30,40);
    block4_2 = new Box(825,130,30,40);
    block5_2 = new Box(855,130,30,40);

    //second row
    block6_2 = new Box(765,90,30,40);
    block7_2 = new Box(795,90,30,40);
    block8_2 = new Box(825,90,30,40);

    //third row
    block9_2 = new Box(795,50,30,40);

    polygon = Bodies.circle(150,200,20);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:150,y:200});
}

function draw() {
    background("gray");
    Engine.update(engine);
    
    fill(0);
    strokeWeight(4);
    textSize(32);
    text("SCORE: " + score, 100, 40)

    ground.display();
    stand1.display();
    stand2.display();

    block1_1.display();
    block2_1.display();
    block3_1.display();
    block4_1.display();
    block5_1.display();
    block6_1.display();
    block7_1.display();
    block8_1.display();
    block9_1.display();
    block10_1.display();
    block11_1.display();
    block12_1.display();
    block13_1.display();
    block14_1.display();
    block15_1.display();
    block16_1.display();

    block1_2.display();
    block2_2.display();
    block3_2.display();
    block4_2.display();
    block5_2.display();
    block6_2.display();
    block7_2.display();
    block8_2.display();
    block9_2.display();

    slingshot.display();

    block1_1.score();
    block2_1.score();
    block3_1.score();
    block4_1.score();
    block5_1.score();
    block6_1.score();
    block7_1.score();
    block8_1.score();
    block9_1.score();
    block10_1.score();
    block11_1.score();
    block12_1.score();
    block13_1.score();
    block14_1.score();
    block15_1.score();
    block16_1.score();
    block1_2.score();
    block2_2.score();
    block3_2.score();
    block4_2.score();
    block5_2.score();
    block6_2.score();
    block7_2.score();
    block8_2.score();
    block9_2.score();

    imageMode(CENTER)
    image(polygonIMG, polygon.position.x, polygon.position.y, 40, 40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if (keyCode == 32) {
        slingshot.attach(this.polygon);
    }
}