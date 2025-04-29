ServerEvents.recipes(event => {
    const { shaped, shapeless } = event.recipes.kubejs;

    event.replaceInput({ mod: "waystones" }, "ender_pearl", "botania:mana_pearl");
    event.replaceInput({ mod: "waystones" }, "minecraft:gold_nugget", "embers:dawnstone_nugget");

    shaped("waystones:portstone", [
        " A ",
        "ABA",
        "CDC"
    ], {
        "A": "minecraft:stone_bricks",
        "B": "#waystones:warp_stones",
        "C": "polished_andesite",
        "D": "occultism:wormhole_frame"
    });

    shapeless("waystones:sharestone", ["waystones:waystone"]);
    shapeless("waystones:waystone", ["#waystones:sharestone"]);
});