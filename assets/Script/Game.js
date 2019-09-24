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
        player: cc.Node, // 小鸟
        accel: 0, // 向下加速度
        speed: 0, //速度
        riseSpeed: 0 // 向上加速度
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('touchstart', this.onTouchStart, this);
        cc.gameDt = {};
        cc.gameDt.score = 0;
        cc.gameDt.maxScore = 0;
    },

    start () {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
    },

    onTouchStart(event) {
        this.speed = this.riseSpeed;
    },

    update (dt) {
        this.speed = this.speed + this.accel * dt;
        this.player.y = this.player.y + this.speed * dt;

        if(this.speed > 0) {
            this.player.rotation = -45;
        }else if(this.speed < 0) {
            this.player.rotation = 45;
        }
    },
});
