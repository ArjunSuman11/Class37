class Game{
    constructor(){}
    
//reads gameState from the db
    getState(){
        var gsRef = db.ref("GameState");
        gsRef.on("value", function(data){   //local function
            GS = data.val();
        });    
    }

//writes gameState into the db
    update(state){
        db.ref("/").update({
            GameState : state
        });
    }

//gameState=0 
    async start(){
        if(GS === 0){
            //New player
            player = new Player();
            //playercount from db
            var Pcref = await db.ref("PlayerCount").once("value");
            if(Pcref.exists()){
                PC = Pcref.val();
                player.getCount();
            }
            //new form
            form = new Form();
            //form to be displayed
            form.display();
        }
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
        cars=[car1, car2, car3, car4];
    }
    
//gameState=1
    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120 , 100);
        Player.getPlayerInfo(); //Static function being called by its class
        
        //GAME STARTS
        if(allplayers !== undefined){
            var carsIndex = 0;
            var x = 0;
            var y;
            for(var i in allplayers){ 
                carsIndex++;
                x += 200;
                y = displayHeight - allplayers[i].Distance;
                cars[carsIndex - 1].x = x;
                cars[carsIndex - 1].y = y;

                //Identifying the currently active player
                if(carsIndex ===  player.index){
                    cars[carsIndex - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carsIndex - 1].y;
                }
            }
        }

        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance += 50;
            player.update();
        }
        drawSprites();
    }

//gameState=2
    end(){}
}

/*
"/" -- refers to the main/entire database

function name(){}

Local function
    
    function(){}


for/in loop 
Syntax:
    for(variable in array/object){}

*/