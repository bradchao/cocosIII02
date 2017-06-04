
var Test2Layer = cc.Layer.extend({
    sprite:null,
    ctor:function (data, vars) {
        this._super();
        var size = cc.winSize;

        cc.log("layer data = " + data++);

        var title = new cc.LabelTTF("Parameter Test:" + vars.var1,"", 36);
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

var Test2Scene = cc.Scene.extend({
    ctor:function (data, vars) {
        this._super();

        //cc.log("data = " + data++);
        vars.var1++;
        cc.log("vars.var1 = " + vars.var1);
        cc.log("vars.var2 = " + vars.var2);
        var layer = new Test2Layer(data, vars);
        this.addChild(layer);
    },

    // onEnter:function () {
    //     this._super();
    //     var layer = new Test2Layer();
    //     this.addChild(layer);
    // }
});

