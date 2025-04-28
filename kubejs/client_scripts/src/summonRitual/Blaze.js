NetworkEvents.dataReceived("dimensionError_Nether", event => {
    const { player, data } = event;

    console.log(event.data);
    player.paint({
        dimensionErrorNether: {
            type: "text",
            text: `${data.info}`,
            alignX: "center",
            alignY: "center",
        }
    });
    player.playSound(`${data.music}`);
    console.log("music played");
    // Client.gameRenderer
});