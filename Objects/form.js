class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130, 0);

        this.input.position(130, 160);
        this.button.position(250, 200);

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
                this.greeting.position(130, 160);
            });
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}



/*
Arrow function
 - binds "this" to the original/root objects that calls it

 ()=>{}
*/