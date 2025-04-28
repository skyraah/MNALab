SummoningRituals.start(event => {
    const { player, recipe } = event;

    if (recipe.id == "mnalab:blazeSummon") {
        if (player.getDimensions != "minecraft:the_nether") {
            player.sendData("soundPlay", {
                sound: "minecraft:block.portal.trigger",
            });

            TitleUtils.showActionBar(player, Component.translate("info.ritualFatal.blaze").red());
            event.cancel();
        } else {
            player.sendData("soundPlay", {
                sound: "minecraft:block.portal.trigger",
            });

            TitleUtils.showActionBar(player, Component.translate("info.ritualSuccess.blaze").gold());
        }
    }
});