class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }

    getCount(){
        //reading playerCount from db
        var PCref=db.ref("PlayerCount");
        PCref.on("value", (data)=>{
            PC = data.val();
        });
    }
    
    //changing the playerCount
    updateCount(count){
        db.ref("/").update({
            PlayerCount : count
        })
    }

    //updating player's info
    update(){
        db.ref("Players/Player"+ this.index).set({
            Name : this.name,
            Distance : this.distance
        })
    }

    static getPlayerInfo(){
        db.ref("Players").on("value",(info)=>{
            allplayers = info.val();
        });


    }

}

/*
Static function
 - Common function
 - belongs to the class & not any particular object
*/