
var Test3Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var title = new cc.LabelTTF("Scene 3","", 36);
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
            null,
            this.back,this);

        var next = new cc.MenuItemFont("Goto Scene 3-1",this.next,this);

        var menu = new cc.Menu(next, backItem);
        menu.alignItemsVertically();
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },
    next: function () {
        //cc.director.popScene();
        cc.director.pushScene(new Test31Scene());
    },

});

var Test3Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test3Layer();
        this.addChild(layer);
    }
});

