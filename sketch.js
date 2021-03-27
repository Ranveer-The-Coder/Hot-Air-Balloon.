

var balloon;
var database;
var balloonPosition;
var scenery;
var balloonImage,balloonImage1,balloonImage2;
var ground;

function preload(){
    scenery =loadImage("HotAirBallon-01.png");
        balloonImage1 =loadAnimation("HotAirBallon-02.png")
        balloonImage2=loadAnimation("HotAirBallon-02.png","HotAirBallon-03.png",
        "HotAirBallon-04.png");
    

   }

function setup(){
    createCanvas(1400,660);   
   
    
    database = firebase.database()
    balloon = createSprite(114,364,10,10);
    ground = createSprite(76,625,1400,5)
    balloon.addAnimation("hotAirBalloon",balloonImage2)
    var balloonPosition = database.ref('balloon/position')
    balloonPosition.on("value",read)



}

function draw(){
    background(scenery);
    ground.display();
     console.log("X: " + mouseX)
    console.log("Y: " + mouseY)

        if(keyDown(LEFT_ARROW)){
        write(-3,0)
    }
    else if(keyDown(RIGHT_ARROW)){
        write(3,0)
    }
    else if(keyDown(UP_ARROW)){
        write(0,-3)
        
        balloon.scale=balloon.scale-0.005;
       
    }
    else if(keyDown(DOWN_ARROW)){
        write(0,3)
        
        balloon.scale=balloon.scale+0.005;      
        
    }
    drawSprites();
}

function read (data){
position = data.val()
balloon.x = position.x
balloon.y = position.y
}

function write (x,y){
database.ref('balloon/position').set({
x: position.x+x,
y: position.y+y
})

}