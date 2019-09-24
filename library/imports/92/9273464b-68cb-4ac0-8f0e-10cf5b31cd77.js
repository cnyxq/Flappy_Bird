"use strict";
cc._RF.push(module, '92734ZLaMtKwI8OEM9bMc13', 'Over');
// Script/Over.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        scoreL: cc.Label,
        maxScoreL: cc.Label,
        gold: cc.Node,
        silver: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.scoreL.string = cc.gameDt.score;
        this.maxScoreL.string = cc.sys.localStorage.getItem('score');
        if (cc.gameDt.score >= 100) {
            this.gold.active = true;
        } else if (cc.gameDt.score >= 50) {
            this.silver.active = true;
        }
    },
    start: function start() {},
    changeScene: function changeScene() {
        cc.director.loadScene('Game');
    }
    // update (dt) {},

});

cc._RF.pop();