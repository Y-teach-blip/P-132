outcome = "";
tv = "";

function preload()
{
    tv = loadImage("T.V.jpg");
}

function back()
{
    window.location = "index.html";
}

function setup()
{
    canvas = createCanvas(450, 420)
    canvas.center();
}

function draw()
{
    image(tv, 0, 0, 450, 420)
    fill('#FF0000')
    text("TV", 170, 123);
    noFill();
    rect(140, 92, 170, 123);
    stroke('#FF0000');
    strokeWeight(2);
}