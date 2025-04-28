ServerEvents.recipes(event => {
    const { altar } = event.recipes.summoningrituals;

    altar("eidolon:unholy_symbol")
        .id("mnalab:blazeSummon")
        .mobOutput("blaze")
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
        .itemOutput(
            SummoningOutput.item("eidolon:unholy_symbol")
                .spread(3, 0, 3)
        );
});