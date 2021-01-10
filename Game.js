class Game{
    constructor(){

    }
    getState(){
        var gameStateref = dataBase.ref("gameState");
        gameStateref.on("value", function(data){
            gameState = data.val();

        })
    }
    update(){
        dataBase.ref('/').update({
            gameState: state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}