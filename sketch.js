//declaring global variables
var canvas;
var music;
var box, pinkbox, whitebox, bluebox, greenbox;


//loading sounds
function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    //creating canvas
    canvas = createCanvas(800,600);

    
    
    //creating the surfaces and adding colour
    // and their positions to them
    pinkbox = createSprite(100,585,190,30);
    pinkbox.shapeColor = "pink";

    whitebox = createSprite(300,585,190,30);
    whitebox.shapeColor = "white";

    bluebox = createSprite(500,585,190,30);
    bluebox.shapeColor = "lightblue";

    greenbox = createSprite(700,585,190,30);
    greenbox.shapeColor = "lightgreen";

    //creating the box sprite and adding velocity, colour and it's position
    box = createSprite(random(20,750),40,40);
    box.shapeColor = "grey"
    box.velocityY = 4;
    box.velocityX = 4;
  
    //creating the edge sprite
    edges = createEdgeSprites();
}

function draw() 
{
    //adding the background and the color 
    background(rgb(200,200,400))
    
    //playing music
    //music.play();

    //these conditions check whether the box and the surfaces are
    //touching if so, the box will change its colour to 
    //the colour of the surface its on.
    if(box.isTouching(pinkbox))
    {
        box.shapeColor = "lightpink"
        //music.stop();
    }

    if(box.isTouching(whitebox))
    {
        box.shapeColor = "white"
    }

    if(box.isTouching(bluebox))
    {
      box.shapeColor = "lightblue"
    }
    
    if(box.isTouching(greenbox))
    {
      box.shapeColor = "lightgreen"
    }

    //declaring the box will bounce off the edges
    box.bounceOff(edges)

    //showing the sprites on screen
    drawSprites();
}
