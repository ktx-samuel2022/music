
var som1;
var som2;
function preload(){
som1 = loadSound("vagalume (1).mp3");
som2 = loadSound("osol.mp3")
}

function setup(){
    canvas = createCanvas(450,450)

    video = createCapture(VIDEO)
    video.hide()
    video.size(450,450)
}

function draw(){
    canvas.position(windowWidth/2-225,windowHeight/2)
    image(video,0,0,450,450)
}