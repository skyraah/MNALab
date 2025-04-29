//proity: 10000
ServerEvents.recipes(event => {
    // const { remove } = event;
    const removeList = [
        "waystones:portstone",
        "waystones:waystone",
        "waystones:mossy_waystone",
        "waystones:sandy_waystone",
        "waystones:sharestone",
    ];

    removeList.forEach(recipe => {
        event.remove(recipe);
    });
});