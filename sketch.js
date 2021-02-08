var canvas;
var music;
var  box1,box2,box3,box4;
var bouncerBox;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(100,600,100,20);
box1.shapeColor="red";
box2=createSprite(300,600,100,20);
box2.shapeColor="blue";
box3=createSprite(500,600,100,20);
box3.shapeColor="green";
box4=createSprite(700,600,100,20);
box4.shapeColor="yellow";





    //create box sprite and give velocity
bouncerBox=createSprite(400,100,50,50)
bouncerBox.velocityY=-5
bouncerBox.velocityX=5

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprite



    //add condition to check if box touching surface and make it box
    if(box1.isTouching("bouncerBox")){
        play.music
    }
    if(box2.isTouching("bouncerBox")){
        play.music
    }
    if(box3.isTouching("bouncerBox")){
        play.music
    }
    if(box4.isTouching("bouncerBox")){
        play.music
    }
    drawSprites();
}
