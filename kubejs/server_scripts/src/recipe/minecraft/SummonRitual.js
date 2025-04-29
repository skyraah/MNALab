ServerEvents.recipes(event => {
    const { altar } = event.recipes.summoningrituals;

    altar("eidolon:unholy_symbol")
        .id("mnalab:blaze_summon")
        .recipeTime(600)
        .blockBelow("occultism:spirit_fire")
        .input("4x malum:soulwood_log")
        .input("8x eidolon:sulfur")
        .input("eidolon:oanna_bloom")
        .input("malum:block_of_blazing_quartz")
        .input("2x malum:infernal_spirit")
        .input("8x malum:arcane_spirit")
        .input("8x malum:wicked_spirit")
        .input("4x embers:ember_crystal")
        .input("4x malum:malignant_lead")
        .mobOutput("blaze")
        .itemOutput(
            SummoningOutput.item("eidolon:unholy_symbol")
                .spread(3, 0, 3)
        );

    // altar("eidolon:unholy_symbol")
    //     .recipeTime(600)
    //     .blockBelow("occultism:spirit_fire")
    //     .input("eidolon:shadow_gem_block")
    //     .input(Ingredient.of("#forge:cobblestone/infested").withCount(16))
    //     .input("create:haunted_bell")
    //     .input("32x malum:blighted_gunk")
    //     .input("8x malum:arcane_spirit")
    //     .input("8x malum:wicked_spirit")
    //     .input("8x malum:null_slate")
    //     .input("8x malum:mnemonic_fragment")
    //     .dayTime("night")
    //     .weather("clear")
    //     .mobOutput(SummoningOutput.mob("endermite")
    //         .count(5)
    //         .spread(3, 0, 3))
    //     .itemOutput(
    //         SummoningOutput.item("eidolon:unholy_symbol")
    //             .spread(3, 0, 3)
    //     )
    //     .id("mnalab:endermite_summon");

    // altar("malum:fused_consciousness")
    //     .recipeTime(600)
    //     .blockBelow("occultism:spirit_fire")
    //     .input("eidolon:shadow_gem_block")
    //     .input("create:haunted_bell")
    //     .input("32x malum:blighted_gunk")
    //     .input("8x malum:arcane_spirit")
    //     .input("4x malum:eldritch_spirit")
    //     .input("8x malum:wicked_spirit")
    //     .input("8x malum:null_slate")
    //     .input("8x malum:mnemonic_fragment")
    //     .input("16x malum:living_flesh")
    //     .dayTime("night")
    //     .weather("clear")
    //     .mobOutput(SummoningOutput.mob("enderman")
    //         .spread(3, 0, 3))
    //     .itemOutput(
    //         SummoningOutput.item("malum:anomalous_design")
    //             .spread(3, 0, 3)
    //     )
    //     .id("mnalab:enderman_summon");
    event.recipes.kubejs.shaped("summoningrituals:altar", [
        "ACB",
        "DED",
        "FFF"
    ], {
        "A": "eidolon:candle",
        "B": "minecraft:wither_skeleton_skull",
        "C": "minecraft:red_carpet",
        "D": "minecraft:gold_ingot",
        "E": "minecraft:lectern",
        "F": "minecraft:crimson_stem"
    });
});