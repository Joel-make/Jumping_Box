var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;
var edge1;
var edge2;
var edge3;
var edge4;
var edge_3

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   

    //create 4 different surfaces
    surface1=createSprite(100,550,180,30);
    surface1.shapeColor="blue";

    surface2=createSprite(300,550,180,30);
    surface2.shapeColor="orange";

    surface3=createSprite(500,550,180,30);
    surface3.shapeColor="red";
    surface3.debug=false;

    surface4=createSprite(700,550,180,30);
    surface4.shapeColor="green";

    edge1=createSprite(400,0,800,20);
    edge1.debug=false;
    edge1.visible=false;

    edge2=createSprite(400,600,800,20);
    edge2.debug=false;
    edge2.visible=false;

    edge3=createSprite(0,300,20,600);
    edge3.debug=false;
    edge3.visible=false;

    edge_3=createSprite(0,300,20,600);
    edge_3.debug=false;
    edge_3.visible=false;

    edge4=createSprite(800,300,20,600);
    edge4.debug=false;
    edge4.visible=false;
    
    //create box sprite and give velocity
     box=createSprite(Math.round(random(50,500)), 200,30,30);
     box.shapeColor="white";
     box.velocityX=3;
     box.velocityY=4;
     box.debug=false;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

if(isTouching(box,surface3))
{
    box. velocityY=-4;
    box.velocityX=-3;
    box.shapeColor= "red";
    music.play();
}
if(isTouching(surface1,box))
{
    box. velocityY=0;
    box.velocityX= 0;
    box.shapeColor= "blue";
    music.stop();
}
if(isTouching(box,surface2))
{
    box. velocityY=-5;
    box.velocityX=6;
    box.shapeColor= "orange";
    music.play();
}
if(isTouching(box,surface4))
{
    box. velocityY=-5;
    box.velocityX=4;
    box.shapeColor= "green";
    music.play();
}
if(isTouching(edge1,box))
{
    box. velocityY=5;
    box.velocityX=-7;
}
if(isTouching(box,edge2))
{
    box. velocityY=-5;
    box.velocityX=4;
}

if(isTouching(box,edge4))
{
    box. velocityY=-7;
    box.velocityX=-4;
}
if(isTouching(edge3,box))
{
    box. velocityY=7;
    box.velocityX=4;
}
if(isTouching(box,edge_3))
{
    box. velocityY=7;
    box.velocityX=4;
}

    //add condition to check if box touching surface and make it box
    drawSprites();
}

