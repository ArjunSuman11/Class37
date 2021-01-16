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

    }
    
//gameState=1
    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120 , 100);
        Player.getPlayerInfo(); //Static function being called by its class

        //GAME STARTS
        if(allplayers !== undefined){
            var text_Pos = 130;
            for(var i in allplayers){

                //Identifying the currently active player
                if(i === "Player" + player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                text_Pos += 20;
                textSize(15);
                text(allplayers [i].Name + ": " + allplayers[i].Distance, 120, text_Pos);
            }
            //Arjun: 1000
        }

        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance += 50;
            player.update();
        }
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