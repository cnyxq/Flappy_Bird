"use strict";
cc._RF.push(module, '5366c+a2dFG3pj29FQIJjjx', 'Player');
// Script/Player.js

'use strict';

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
        scoreL: cc.Label,
        medal: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.tag === 1) {
            cc.director.loadScene('Over');
        } else if (other.tag === 2) {
            cc.gameDt.score++;
            this.scoreL.string = 'Score:' + cc.gameDt.score;
            if (cc.sys.localStorage.getItem('score')) {
                if (cc.gameDt.score > cc.sys.localStorage.getItem('score')) {
                    cc.sys.localStorage.setItem('score', cc.gameDt.score);
                }
            } else {
                cc.sys.localStorage.setItem('score', cc.gameDt.score);
            }
        } else if (other.tag === 3) {
            cc.gameDt.score = cc.gameDt.score + 10;
        }
    }
}

// update (dt) {},
);

cc._RF.pop();