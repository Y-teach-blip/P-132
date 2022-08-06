outcome = "";
living = "";

function preload()
{
    living = loadImage("drawing_room.jpg");
}

function back()
{
    window.location = "index.html";
}

function setup()
{
    canvas = createCanvas(400, 400)
    canvas.center();
}

function draw()
{
    image(living, 0, 0, 400, 400)
    fill('#FF0000')
    text("Plant and Sofa", 80, 299);
    noFill();
    rect(70, 140, 199, 199);
    stroke('#FF0000');
    strokeWeight(2);
    
    fill("#FF0000");
    text("Fan", 110, 120)
    noFill();
    rect(100, 10, 160, 120);
    stroke('#FF0000')
    strokeWeight(2)
}