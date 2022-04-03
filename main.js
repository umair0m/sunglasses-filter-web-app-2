function preload() {
    
}
function setup() {
canvas = createCanvas(300,300);
canvas.center();  
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function gotPoses(result) {
if(result.length>0){
console.log("right Eye x = "+result[0].pose.rightEye.x);    
console.log("left Eye y = "+result[0].pose.leftEye.y);
    
} 
}
function modelLoaded() {
console.log("poseNet is initialized");    
}

function draw(){
image(video,0,0,300,300);
}
function take_snapshot() {
save('myFilterImage.png');    
}