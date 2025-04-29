// new Schema("eidolon:crucible")
//     .complexKey("steps", true, step => {
//         step.addKey("stirs", "intNumber")
//             .addKey("items", "inputItemArray");
//     })
//     .complexKey("result", false, res => {
//         res.addKey("item", "outputItem")
//             .addKey("count", "anyIntNumber");
//     });

new Schema("eidolon:crucible")
    .dynamicKey((components, componentBuilder) => {
        const stepBuilder = new componentBuilder(2);

        stepBuilder
            .add(components.get("intNumber")().key("stirs").defaultOptional())
            .add(components.get("inputItemArray")().key("items").defaultOptional());

        return stepBuilder.inputRole().asArray().key("steps");
    })
    // .dynamicKey((components, componentBuilder) => {
    //     const resultBuilder = new componentBuilder(2);

//     resultBuilder
//         .add(components.get("anyString")().key("item"))
//         .add(components.get("intNumber")().key("count").defaultOptional());

    //     return resultBuilder.outputRole().key("result");
    // })
    .simpleKey("result", "outputItem");
// new Schema("eidolon:worktable")
//     .dynamicKey((components, builder) =>
//         components.get("anyString")()
//             .map(
//                 value => {
//                     if (value.length > 3) {
//                         throw new Error("The length of each item in the pattern cannot exceed 3");
//                     }
//                     return value;
//                 },
//                 value => value
//             )
//             .asArray()
//             .key("pattern")
//     )
//     .dynamicKey((components, builder) =>
//         components.get("anyString")()
//             .map(
//                 value => {
//                     if (value.length !== 4) {
//                         throw new Error("reagents must be have 4 length");
//                     }
//                     return value;
//                 },
//                 value => value
//             )
//             .optional()
//             .defaulted("    ")
//             .key("reagents")
//     )
//     .dynamicKey((components, builder) => {
//         let ingredientComponent = components.get("inputItem")().or(
//             components.get("itemTag")());
//         return ingredientComponent.asMap(ingredientComponent).key("key");
//     })
//     .complexKey("result", false, res => {
//         res.addKey("item", "outputItem", undefined, false);
//         res.addKey("count", "anyIntNumber", null, false);
//     });