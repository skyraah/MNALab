NetworkEvents.dataReceived("soundPlay", event => {
    const { player, data } = event;

    console.log(event.data);
    player.playSound(`${data.sound}`);
    console.log("sound played");
    // Client.gameRenderer
});