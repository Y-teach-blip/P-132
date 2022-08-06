outcome = "";
bottle = "";

function preload()
{
    bottle = loadImage("glass_water_bottle.webp");
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
    image(bottle, 0, 0, 400, 400)
    fill('#FF0000')
    text("Bottle and Glass", 80, 299);
    noFill();
    rect(70, 70, 199, 299);
    stroke('#FF0000');
    strokeWeight(2);
}