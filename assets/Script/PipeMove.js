

cc.Class({
    extends: cc.Component,

    properties: {
        pipePre: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.schedule(this.addPipe,1);
    },

    start () {

    },

    addPipe() {
        let pipeN = cc.instantiate(this.pipePre);
        pipeN.parent = this.node;
        pipeN.x = 0 ;

        let moveTo = cc.moveTo(3,cc.v2(-2000,0));
        let removeSelf = cc.removeSelf();
        let seq = cc.sequence(moveTo, removeSelf)
        pipeN.runAction(seq);
    }

    // update (dt) {},
});
