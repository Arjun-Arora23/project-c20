var tom, jerry, tomimg,tomimg2,tomimg3,jerryimg,jerryimg2,jerryimg3,bg,bgimg
function preload() {
    //load the images here
    tomimg = loadAnimation("images/cat1.png");
    jerryimg = loadAnimation("images/mouse1.png");
    bgimg = loadImage("images/garden.png");
    tomimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    tomimg3 = loadAnimation("images/cat4.png")
    jerryimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryimg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
bg = createSprite(500,400)
bg.addImage(bgimg)
tom = createSprite(900,700)
tom.addAnimation("tom",tomimg)
tom.scale = 0.1
jerry = createSprite(100,700)
jerry.addAnimation("jerry",jerryimg)
jerry.scale=0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
   
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5
    tom.addAnimation("tomrunning",tomimg2)
    tom.changeAnimation(tomrunning)

    jerry.addAnimation("jerryteasing",jerryimg2)
    jerry.changeAnimation(jerryteasing)
}

}
