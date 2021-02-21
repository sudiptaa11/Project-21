var canvas;

var music;

var surface1, surface2, surface3, surface4;

var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100, 580, 180, 20);
    surface1.shapeColor = "Yellow";

    surface2 = createSprite(300,580,180,20);
    surface2.shapeColor = "Red";

    surface3 = createSprite(500,580,180,20);
    surface3.shapeColor = "Blue";

    surface4 = createSprite(700,580,180,20);
    surface4.shapeColor = "Green";

    //create box sprite and give velocity
    box = createSprite(Math.round(random(20,750)), 30, 50, 50);
    box.velocityY = 5;
    box.shapeColor = "White";

    music.play();
}

function draw() {
    background(rgb(169,169,169));

    if(isTouching(surface1,box)) {
        box.shapeColor = "Yellow";
        box.velocityY = 0;
        music.stop();
    }

    if(isTouching(surface2,box)) {
        box.shapeColor = "Red";
        box.velocityY = 0;
        music.stop();
    }

    if(isTouching(surface3,box)) {
        box.shapeColor = "Blue";
        box.velocityY = 0;
        music.stop();
    }

    if(isTouching(surface4,box)) {
        box.shapeColor = "Green";
        box.velocityY = 0;
        music.stop();
    }

    //create edgeSprite
    edges = createEdgeSprites();
    box.collide(edges);


    //add condition to check if box touching surface and make it box
    drawSprites();
}

function isTouching(obj1,obj2) {
    if(obj1.y - obj2.y < obj1.height/2 + obj2.height/2 && obj1.x - obj2.x < obj1.width/2 + obj2.width/2) {
        return true;
    } else{
        false;
    }
}

