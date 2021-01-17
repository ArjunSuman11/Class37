class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
        this.title = createElement("h2");
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 50, 0);

        this.input.position(displayWidth/2-40, displayHeight/2- 90);
        this.button.position(displayWidth/2+30, displayHeight/2);

        this.button.mousePressed(
            ()=>{
                this.input.hide(); //form.input
                this.button.hide();
                player.name = this.input.value();
                PC++;
                player.index = PC;
                player.update();
                player.updateCount(PC);

                this.greeting.html("Welcome " + player.name);
                this.greeting.position(displayWidth/2-70, displayHeight/4);
            });
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
}



/*
Arrow function
 - binds "this" to the original/root objects that calls it

 ()=>{}
*/