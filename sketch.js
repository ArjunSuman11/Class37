var db, GS=0, PC;
var form, player, game;
var allplayers;

function setup(){
    createCanvas(500,500);

    db = firebase.database();

    game= new Game();
    game.getState();
    game.start();

}

function draw(){
    if(PC === 4){
        game.update(1);
    }

    if(GS === 1){
        clear();
        game.play();
    }
}



/*
OOP
    Components of the code === real world objects
        1. Properties
        2. Functions

    Design (class) - objects

    3 objects:
        1. Form
            - input box - name
            - play button
            - player info to the db
            - new player object

        2. Player
            - player's info - name, rank, distance (code & db)
            - Number of players - playercount
        3. Game
            - GameStates
            WAIT (0)
            PLAY (1)
            END (2)
*/