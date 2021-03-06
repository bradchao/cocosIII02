
var Test41Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var bg = new cc.Sprite(res.scene);
        bg.attr({
            x: size.width/2,
            y: size.height/2
        });
        bg.scaleX = size.width / bg.width;
        bg.scaleY = size.height / bg.height;
        //cc.log(size.height + ":" + bg.height + ":" + bg.scaleY);
        this.addChild(bg,0);

        var hamster = new cc.Sprite(res.hamster_png);
        hamster.attr({
            x: 728,
            y: 218
        });
        this.addChild(hamster);



        var title = new cc.LabelTTF("Scene 4-1","", 36);
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
        var home = new cc.MenuItemFont("Goto MainMenu",this.home,this);

        var menu = new cc.Menu(home, backItem);
        menu.alignItemsVertically();    
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },
    home: function () {
        //cc.director.popScene();
        cc.director.popToRootScene();
    },

});

var Test41Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test41Layer();
        this.addChild(layer);
    }
});

