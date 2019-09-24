"use strict";
cc._RF.push(module, 'd170dNYkgJCr6Uk7JCKXBxe', 'PipeMove');
// Script/PipeMove.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        pipePre: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.schedule(this.addPipe, 1);
    },
    start: function start() {},
    addPipe: function addPipe() {
        var pipeN = cc.instantiate(this.pipePre);
        pipeN.parent = this.node;
        pipeN.x = 0;

        var moveTo = cc.moveTo(3, cc.v2(-2000, 0));
        var removeSelf = cc.removeSelf();
        var seq = cc.sequence(moveTo, removeSelf);
        pipeN.runAction(seq);
    }

    // update (dt) {},

});

cc._RF.pop();