(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/PipeMove.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd170dNYkgJCr6Uk7JCKXBxe', 'PipeMove', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=PipeMove.js.map
        