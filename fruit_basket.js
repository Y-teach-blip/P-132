outcome = "";
fruit = "";

function preload()
{
    fruit = loadImage("fruit_basket.jpg");
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
    image(fruit, 0, 0, 400, 400)
    fill('#FF0000')
    text("Fruit Basket", 80, 299);
    noFill();
    rect(37, 140, 300, 199);
    stroke('#FF0000');
    strokeWeight(2);
}