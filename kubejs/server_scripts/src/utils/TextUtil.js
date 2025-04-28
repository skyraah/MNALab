// priority: 1000

/**
 * @author 真实Z
 * 文本工具类
 * 无需前置工具类
 */
const TextUtils = {
    /**
     * @description 文本打印机 返回数组
     * @param {String} text
     * @returns {String[]} return
     */
    textPrinter: function (text) {
        if(!text) {
            console.error(`非法文本:${text}`);
            return;
        }
        const textArr = [];
        for(let i = 1; i <= text.length; i++) {
            if(text.charAt(i - 1) === "§") {
                i += 1;
                continue;
            }
            textArr.push(text.slice(0, i));
        }
        return textArr;
    },
    /**
     * @description 文本打印机 返回二维数组
     * @param {String[]} textArr
     * @returns {String[][]} return
     */
    textArrPrinter: function (textArr) {
        if(!textArr) {
            console.error(`非法文本数组:${textArr}`);
            return;
        }
        const arr = [];
        textArr.forEach(text => {
            arr.push(textPrinter(text));
        });
        return arr;
    },
    /**
     * @description 用于mc复制粘贴坐标时有空格转成坐标麻烦而做的工具
     * @param {String} text
     * @returns {$Vec3_} return
     */
    textToPosArray: function (text) {
        const array = text.split(" ");
        const result = [];
        for(let i = 0; i < array.length; i++) {
            result.push(Number(array[i]));
        }
        return new $Vec3(result[0], result[1], result[2]);
    },
    /**
     * @description 获取一个字符串中一个字符的数量
     * @param {String} text
     * @param {String} char
     * @returns {number} return
     */
    countOccurrences: function (text, char) {
        return text.length - text.replace(new RegExp(char, "g"), "").length;
    },
    /**
     * @description 替换一个字符串中所有符合要求的字符串
     * @param {String} text
     * @param {String} searchValue
     * @param {String} replaceValue
     * @returns {String} return
     */
    replace: function (text, searchValue, replaceValue) {
        return Array.from(text).reduce((acc, char) => {
            return acc + (char === searchValue ? replaceValue : char);
        }, "");
    },
    /**
     * @description 延时生成文本展示实体 逐字生成
     * @param {$Vec3_} pos
     * @param {String} text
     * @param {Number} tick 每个字的间隔时间
     * @param {$Level_} level 生成的世界 默认为主世界
     */
    delayShowTextDisplay: function (pos, text, tick, level) {
        level = level === undefined ? Utils.getServer().getLevel("minecraft:overworld") : level;
        const textArr = this.textPrinter(text);

        const entity = level.createEntity("text_display");
        entity.mergeNbt(`{text:'[""]',billboard:center,background:16777215}`);
        entity.pos = pos;
        entity.spawn();

        textArr.forEach((t, i) => {
            Utils.getServer().scheduleInTicks(i * tick, () => {
                entity.mergeNbt(`{text:'["${t}"]'}`);
            });
        });
    },
    /**
     * @description 清空所有玩家的聊天栏历史记录
     */
    chatClear: function () {
        Utils.getServer().getPlayerList().players.forEach(player => {
            player.sendData("chatClear", {});
        });
    }
};