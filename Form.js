class Form{
    constructor(){

    }
    display(){
        var Title = createElement('h2');
        Title.html("Car Racing Game");
        Title.position(130, 0);
        var input = createInput("NAME");
        input.position(130, 160);
        var button = createButton("PLAY");
        button.position(250, 200);
        button.mousePressed(function (){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.updateCount(playerCount);
            player.update(name);

            var greeting = createElement('h3');
            greeting.html("HELLO " + name);
            greeting.position(130, 160);
        })
    }
}