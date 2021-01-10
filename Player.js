class Player{
    constructor(){

    }
    getCount(){
        var playerCountref = dataBase.ref("playerCount");
        playerCountref.on("value", function(data){
            playerCount = data.val();

        })
    }
    updateCount(){
        dataBase.ref('/').update({
            playerCount: count
        })
    }
    update(){
        var playerIndex = "player" + playerCount;
        dataBase.ref(playerIndex).set({
            Name: name
        })
    }
}