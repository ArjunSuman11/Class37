var ball, db, position;

function setup(){
    createCanvas(500,500);

    db = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var locBall = db.ref("Ball/Position");
    locBall.on("value", readPos, showErr);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(X,Y){
    db.ref("Ball/Position").set({
        x:position.x+X,
        y:position.y+Y
    });
}

function readPos(data){
    position = data.val();  //copies everything from data to position

    ball.x = position.x;
    ball.y = position.y;

}

function showErr(){
    console.log("ERROR!!!")
}

/*
.ref() - refers to the location of value that we want

READ
.on() - turns on a listener which listens to new changes in the field
        - 2 functions 
            1. Reads the value - necessary
            2. Tells us error

WRITE
.set() - updates/writes that field


*/