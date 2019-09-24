"use strict";
cc._RF.push(module, '98d88SiSf5Pa4Owqc2Yuc6F', 'Pipe');
// Script/Pipe.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        topPipe: cc.Node,
        bottomPipe: cc.Node,
        medal: cc.Node,
        topMaxY: 0,
        topMinY: 0,
        maxSpace: 0,
        minSpace: 0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.topPipe.y = Math.floor(Math.random() * (this.topMaxY - this.topMinY) + this.topMinY);
        var space = Math.floor(Math.random() * (this.maxSpace - this.minSpace) + this.minSpace);
        this.bottomPipe.y = this.topPipe.y - space;
        this.medal.y = this.topPipe.y - (this.topPipe.y - this.bottomPipe.y) / 2;
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();