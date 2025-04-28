ServerEvents.recipes(event => {
    const { runic_altar } = event.recipes.botania;

    const materialList = {
        "waystones:waystone": "minecraft:stone_bricks",
        "waystones:mossy_waystone": "minecraft:mossy_stone_bricks",
        "waystones:sandy_waystone": "minecraft:sandstone",
    };

    for (const key in materialList) {
        runic_altar(
            `2x ${key}`,
            [
                "#waystones:warp_stones",
                "botania:mana_pearl",
                "botania:rune_air",
                "occultism:wormhole_frame",
                "botania:rune_mana",
                materialList[key],
                "botania:rune_pride",
                "botania:mana_diamond"
            ],
            5000
        );
    }
});