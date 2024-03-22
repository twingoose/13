Webcam.set({
    width:350
    ,height:300
    ,image_format : "png",
    png_quality:90
});

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()
{ 
     Webcam.snap(function(data_uri) {
document.getElementById("results").innerHTML  ='<img id="captured_image" src="'+data_uri+ '"/> ';
});  save("my_Filter_Image.png")
}


function setup(){
    canvas = createCanvas(300,300);
canvas.center();
video = createCapure(VIDEO);
video.size(300,300);
video.hide();   

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}




    function draw() {
        ctx.beginPath();
        ctx.strokeStyle = "grey";
        ctx.lineWidth = 1;
        ctx.rect(150, 143, 430, 200);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;
        ctx.arc(250, 210, 40 ,0 , 2 * Math.PI);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.arc(350, 210, 40 ,0 , 2 * Math.PI);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.arc(450, 210, 40 ,0 , 2 * Math.PI);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = "orange";
        ctx.lineWidth = 5;
        ctx.arc(300, 250, 40 ,0 , 2 * Math.PI);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 5;
        ctx.arc(400, 250, 40 ,0 , 2 * Math.PI);
        ctx.stroke();
        

    }



