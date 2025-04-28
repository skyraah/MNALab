// priority: 1000

/**
 * @author 真实Z
 * Title工具类
 * 前置工具类 TextUtils
 */

const titleUtils = {
    /**
     * @description 修改component
     * @param {$ServerPlayer_} player
     * @param {$Component} component
     * @returns
     */
    updateComponent(player, component) {
        return $ComponentUtils.updateForEntity(player.createCommandSourceStack(), component, player, 0);
    },
    /**
     * @description title
     * @param {$ServerPlayer_[] || $ServerPlayer_} players
     * @param {String} title
     */
    showTitle: function (players, title) {
        if(!Array.isArray(players)) { players = [players]; }
        players.forEach(player => {
            player.connection.send(new $ClientboundSetTitleTextPacket(this.updateComponent(player, title)));
        });
    },
    /**
     * @description subtitle
     * @param {$ServerPlayer_[] || $ServerPlayer_} players
     * @param {String} subtitle
     */
    showSubtitle: function (players, subtitle) {
        if(!Array.isArray(players)) { players = [players]; }
        players.forEach(player => {
            player.connection.send(new $ClientboundSetSubtitleTextPacket(this.updateComponent(player, subtitle)));
        });
    },
    /**
     * @description actionBar
     * @param {$ServerPlayer_[] || $ServerPlayer_} players
     * @param {String} actionBar
     */
    showActionBar: function (players, actionBar) {
        if(!Array.isArray(players)) { players = [players]; }
        players.forEach(player => {
            player.connection.send(new $ClientboundSetActionBarTextPacket(this.updateComponent(player, subtitle)));
        });
    },
    /**
     * @description 设置淡入展示淡出时间
     * @param {$ServerPlayer_[] || $ServerPlayer_} players
     * @param {Number} fadeIn
     * @param {Number} stay
     * @param {Number} fadeOut
     */
    setTimes: function (players, fadeIn, stay, fadeOut) {
        if(!Array.isArray(players)) { players = [players]; }
        players.forEach(player => {
            player.connection.send(new $ClientboundSetTitlesAnimationPacket(fadeIn, stay, fadeOut));
        });
    },
    /**
     * @description reset为true，将指定玩家的副标题清空，同时将淡入、持续、淡出时间设为默认值;reset为false，清除指定玩家屏幕标题。
     * @param {$ServerPlayer_[] || $ServerPlayer_} players
     * @param {Boolean} reset
     */
    clear: function (players, reset) {
        if(!Array.isArray(players)) { players = [players]; }
        players.forEach(player => {
            player.connection.send(new $ClientboundClearTitlesPacket(reset));
        });
    },
    /**
      * @description title延时显示文字
      * @param {$ServerPlayer_[] | $ServerPlayer_} players
      * @param {String} text
      * @param {String} type title or subtitle or actionbar
      * @param {Number} tick 每次显示的间隔 不要大于70
      */
    delayShowTitle: function (players, text, type, tick) {
        const textArr = TextUtils.textPrinter(text);

        if(!Array.isArray(players)) { players = [players]; }
        players.forEach(player => {
            this.setTimes(player, 0, 70, 0);
            textArr.forEach((t, i) => {
                player.server.scheduleInTicks(i * tick, () => {
                    this.showTitle(player, t, type);
                });
            });
            player.server.scheduleInTicks((textArr.length + 1) * tick, () => this.clear(player, true));
        });
    },
};