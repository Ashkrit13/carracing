class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing");
        title.position(130,0);
        var imput = createElement("name");
        var button = createButton("PLAY");
        var greetings = createElement('h3');
        imput.position(600,150);
        button.position(250,200);
        button.mousePressed(function(){
            imput.hide();
            button.hide();
            var Name = imput.value();
            playerCount += 1;
            player.update(Name);
            player.updateCount(playerCount);
            greetings.html("HELLO" + Name);
            greetings.position(130,150);
        })
    }
}