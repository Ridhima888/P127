sound1= "";
sound2= "";

function preload(){
//    sound1= loadSound("");
  //  sound2= loadSound("");
}

function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function draw(){
    Image(video,0,0,600,500)
}