
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        // ask the window size
        var size = cc.winSize;

        if( 'touches' in cc.sys.capabilities ) {
            cc.eventManager.addListener(cc.EventListener.create({
                event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                onTouchesEnded:function (touches, event) {
                    if (touches.length <= 0)
                        return;
                    event.getCurrentTarget().moveSprite(touches[0].getLocation());
                }
            }), this);
        }
        else if ('mouse' in cc.sys.capabilities ) {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseUp: function (event) {
                    event.getCurrentTarget().moveSprite(event.getLocation());
                }
            }, this);
        }

        var bg_sprite = new cc.Sprite(res.BG_Sprite_png);
        bg_sprite.setAnchorPoint(cc.p(0.5,0.5));
        bg_sprite.setPosition(cc.p(size.width / 2, size.height / 2));
		this.addChild(bg_sprite, 0);

        var sprite = new cc.Sprite(res.PandaSprite_png);
        sprite.setAnchorPoint(cc.p(0.5,0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite, 1, 1);

        var sprite_action = cc.MoveTo.create(2, cc.p(50, 100));

        var sprite_action2 = cc.MoveBy.create(2, cc.p(50, 100));

        var sequence_action = cc.Sequence.create(sprite_action, sprite_action2);
        sprite.runAction(sequence_action);

        cc.audioEngine.playMusic(res.Song1_ogg, true);

       
        return true;
    },
    moveSprite:function(position) {
    	cc.audioEngine.playEffect(res.ClickFX1_wav, false);
	    var sprite = this.getChildByTag(1);
	    sprite.stopAllActions();
	    sprite.runAction(cc.moveTo(1, position));
	}
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

