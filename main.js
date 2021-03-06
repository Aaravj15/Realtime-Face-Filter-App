NoseX = 0;
NoseY = 0;
function preload()
{
  clown_nose = loadImage('https://i.postimg.cc/pXRR3VRW/Clown-nose.png');
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modeLoaded);
    poseNet.on('pose', gotPoses);
}

function modeLoaded()
{
    console.log('poseNet is initialized');
}

function gotPoses(results)
{
     if(results.length > 0)
        {
             console.log(results); 
             NoseX = results[0].pose.nose.x-10; 
             NoseY = results[0].pose.nose.y-10;
             console.log("nose x = " + NoseX);
             console.log("nose y = " + NoseY);
        }
}

function draw()
{
    image(video,0,0,300,300);
    image(clown_nose, NoseX, NoseY, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}