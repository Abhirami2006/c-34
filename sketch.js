const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,690,1200,15);
    box1 = new Box(800,670,50,50);
    box2 = new Box(850,670,50,50);
    box3 = new Box(900,670,50,50);
    box4 = new Box(950,670,50,50);
    box5 = new Box(1000,670,50,50);
    box6 = new Box(800,600,50,50);
    box7 = new Box(850,600,50,50);
    box8 = new Box(900,600,50,50);
    box9 = new Box(950,600,50,50);
    box10 = new Box(1000,600,50,50);
    box11 = new Box(800,530,50,50);
    box12 = new Box(850,530,50,50);
    box13 = new Box(900,530,50,50);
    box14 = new Box(950,530,50,50);
    box15 = new Box(1000,530,50,50);
    box16 = new Box(800,460,50,50);
    box17 = new Box(850,460,50,50);
    box18 = new Box(900,460,50,50);
    box19 = new Box(950,460,50,50);
    box20 = new Box(1000,460,50,50);
    box21 = new Box(800,400,50,50);
    box22 = new Box(850,400,50,50);
    box23 = new Box(900,400,50,50);
    box24 = new Box(950,400,50,50);
    box25 = new Box(1000,400,50,50);
    box26 = new Box(800,330,50,50);
    box27 = new Box(850,330,50,50);
    box28 = new Box(900,330,50,50);
    box29 = new Box(950,330,50,50);
    box30 = new Box(1000,330,50,50);

    ball = new Ball(600,480,80);

    rope = new Rope(ball.body, {x:600,y:350});

}

function draw(){
    background("pink");
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();

    ball.display();

    rope.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

