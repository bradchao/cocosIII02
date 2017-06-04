
var Test1Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var title = new cc.LabelTTF("Sprite Menu","", 36);
        title.attr({
            x: size.width/2,
            y: size.height*9/10
        });
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu: function () {
        //var backItem = new cc.MenuItemImage(,,,,);
        var backItem = cc.MenuItemImage.create(
            res.back_normal_png,
            res.back_pressed_png,
            res.back_pressed_png,
            this.back,this);

        var menu = new cc.Menu(backItem);
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },

});

var Test1Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test1Layer();
        this.addChild(layer);
    }
});

