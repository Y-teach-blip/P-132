outcome = "";
bedroom = "";

function preload() {
    bedroom = loadImage("bedroom.jpg");
}

function back() {
    window.location = "index.html";
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
    document.getElementById("outcome").innerHTML = "Status = Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    outcome = true;
    objectDetecter.detect(bedroom, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(bedroom, 0, 0, 400, 400)
    fill('#FF0000')
    text("Bed", 80, 299);
    noFill();
    rect(70, 140, 199, 199);
    stroke('#FF0000');
    strokeWeight(2);

    fill("#FF0000");
    text("Light", 110, 120)
    noFill();
    rect(100, 14, 160, 120);
    stroke('#FF0000')
    strokeWeight(2)
}