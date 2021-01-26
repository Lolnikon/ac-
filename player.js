class Player {
    constructor() {
        //we leave this empty for now
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            //this playerCount is a variable in our code
            playerCount = data.val()
        })
    }

    updateCount(count) {
        database.ref("/").update({
            //this playerCount is the column in db
            playerCount: count
        })
    
    }

    update(name) {
        var playerIndex = "player" + playerCount;
        //
        database.ref(playerIndex).set({
            name: name
        })
    }


}