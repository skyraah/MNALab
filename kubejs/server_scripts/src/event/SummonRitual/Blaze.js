SummoningRituals.start(event => {
    const { player, recipe } = event;
    if(recipe.id == "mnalab:blazeSummon") {
        if(player.getDimensions != "minecraft:the_nether") {
            player.sendData("dimensionError_Nether", {
                info: "来自地狱的火焰从虚空中蔓延而出，你感受到了热浪袭来，但很快这种感觉就消散了",
                music: "minecraft:block.portal.trigger",
            });
            event.cancel();
        }
    }
});