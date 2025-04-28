//pority 5000
// Title system utilities for KubeJS
const TitleUtils = {
    /**
     * @description Get all online players
     * @returns {Internal.ServerPlayer[]} return
     */
    _getAllPlayers() {
        return Utils.server.getPlayers();
    },

    /**
     * @description Update component for specific player
     * @param {Internal.ServerPlayer} player
     * @param {Internal.Component} component
     * @returns {Internal.Component} return
     */
    _updateComponent(player, component) {
        const ComponentUtils = Java.loadClass("net.minecraft.network.chat.ComponentUtils");
        return ComponentUtils.updateForEntity(player.createCommandSourceStack(), component, player, 0);
    },

    /**
     * @description Clear titles for specific players
     * @param {Internal.ServerPlayer|Internal.ServerPlayer[]} players - Target player(s)
     * @param {boolean} reset - Whether to reset times
     */
    clear(players, reset) {
        const ClientboundClearTitlesPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundClearTitlesPacket");
        const packet = new ClientboundClearTitlesPacket(reset);

        if (Array.isArray(players)) {
            players.forEach(player => player.connection.send(packet));
        } else {
            players.connection.send(packet);
        }
    },

    /**
     * @description Reset title times for specific players
     * @param {Internal.ServerPlayer|Internal.ServerPlayer[]} players - Target player(s)
     */
    reset(players) {
        this.clear(players, true);
    },

    /**
     * @description Set title animation times
     * @param {Internal.ServerPlayer|Internal.ServerPlayer[]} players - Target player(s)
     * @param {number} fadeIn - Fade in time in ticks
     * @param {number} stay - Stay time in ticks
     * @param {number} fadeOut - Fade out time in ticks
     */
    setTimes(players, fadeIn, stay, fadeOut) {
        const ClientboundSetTitlesAnimationPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket");
        const packet = new ClientboundSetTitlesAnimationPacket(fadeIn, stay, fadeOut);

        if (Array.isArray(players)) {
            players.forEach(player => player.connection.send(packet));
        } else {
            players.connection.send(packet);
        }
    },

    /**
     * @description Show title text
     * @param {Internal.ServerPlayer|Internal.ServerPlayer[]} players - Target player(s)
     * @param {Internal.Component} title - Title text component
     */
    showTitle(players, title) {
        const ClientboundSetTitleTextPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket");

        if (Array.isArray(players)) {
            players.forEach(player => {
                let updatedTitle = this._updateComponent(player, title);
                player.connection.send(new ClientboundSetTitleTextPacket(updatedTitle));
            });
        } else {
            let updatedTitle = this._updateComponent(players, title);
            players.connection.send(new ClientboundSetTitleTextPacket(updatedTitle));
        }
    },

    /**
     * @description Show subtitle text
     * @param {Internal.ServerPlayer|Internal.ServerPlayer[]} players - Target player(s)
     * @param {Internal.Component} subtitle - Subtitle text component
     */
    showSubtitle(players, subtitle) {
        const ClientboundSetSubtitleTextPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket");

        if (Array.isArray(players)) {
            players.forEach(player => {
                let updatedSubtitle = this._updateComponent(player, subtitle);
                player.connection.send(new ClientboundSetSubtitleTextPacket(updatedSubtitle));
            });
        } else {
            let updatedSubtitle = this._updateComponent(players, subtitle);
            players.connection.send(new ClientboundSetSubtitleTextPacket(updatedSubtitle));
        }
    },

    /**
     * @description Show actionbar text
     * @param {Internal.ServerPlayer|Internal.ServerPlayer[]} players - Target player(s)
     * @param {Internal.Component} text - Actionbar text component
     */
    showActionBar(players, text) {
        const ClientboundSetActionBarTextPacket = Java.loadClass("net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket");

        if (Array.isArray(players)) {
            players.forEach(player => {
                let updatedText = this._updateComponent(player, text);
                player.connection.send(new ClientboundSetActionBarTextPacket(updatedText));
            });
        } else {
            let updatedText = this._updateComponent(players, text);
            players.connection.send(new ClientboundSetActionBarTextPacket(updatedText));
        }
    },

    /**
     * @description Show complete title (title + subtitle)
     * @param {Internal.ServerPlayer|Internal.ServerPlayer[]} players - Target player(s)
     * @param {Internal.Component} title - Title text component
     * @param {Internal.Component} subtitle - Subtitle text component
     * @param {number} fadeIn - Fade in time in ticks
     * @param {number} stay - Stay time in ticks
     * @param {number} fadeOut - Fade out time in ticks
     */
    show(players, title, subtitle, fadeIn, stay, fadeOut) {
        this.setTimes(players, fadeIn, stay, fadeOut);
        this.showTitle(players, title);
        if (subtitle) {
            this.showSubtitle(players, subtitle);
        }
    }
};

// Usage example:
/*
PlayerEvents.chat(event => {
    // Show simple title
    TitleUtils.show(
        event.player,
        Component.of('Main Title').red(),
        Component.of('Subtitle Text').gold(),
        10, 70, 20
    );

    // Show to all players
    const allPlayers = TitleUtils._getAllPlayers();
    TitleUtils.showTitle(allPlayers, Component.of('Title for everyone').yellow());
    TitleUtils.showActionBar(allPlayers, Component.of('Message to everyone').green());
    TitleUtils.showSubtitle(allPlayers, Component.of('Subtitle for everyone').gold());

    // Clear titles
    TitleUtils.clear(event.player, false);

    // Reset times
    TitleUtils.reset(event.player);

    // Set custom times
    TitleUtils.setTimes(event.player, 20, 100, 20);
});
*/