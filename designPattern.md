Simply Factory(简单工厂模式)
eg: function popFactory(type, text) {
        //创建一个对象， 并对对象拓展属性和方法
        var o = new Object();
        o.content = text;
        o.show = function() {
            //显示相似的特征，例如关闭按钮，提示文案
        };
        if (type == 'alert') {
            //只有一个按钮
        }
        if (type == 'promot') {
            //显示输入框
        }
        if (type == 'confirm') {
            //显示两个按钮
        }
        return o;
    }
    //创建
var userNameAlert = popFactory('alert', '用户');

安全模式类
var Demo = function() {
    if (!this instanceof Demo) {
        return new Demo();
    }
}

Factory Method(工厂方法模式)
eg: var Factory = function(type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
}
Factory.prototype = {
    Java: function(content) {... },
    JavaScript: function(content) {... },
    UI: function(content) {
        this.content = content;
        (function(content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px soild red';
            document.getElementById('container').appendChild(div);
        })(content)
    }
}

Abstract Factory(抽象工厂模式)
var VehicleFactory = function(subType, superType) {
    //判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === 'function') {
        //缓存类
        function F() {};
        //继承父类属性和方法
        F.prototype = new VehicleFactory[superType]();
        //将子类constructor 指向子类
        subType.constructor = subType;
        //子类原型继承“父类”
        subType.prototype = new F();
    } else {
        //不存在该抽象类抛出错误
        throw new Error('未创建该抽象类');
    }
}

Builder(建造者模式)
    //创建一位人类
var Human = function(param) {
        //技能
        this.skill = param && param.skill || '保密'；
            //兴趣爱好
        this.hobby = param && param.hobby || '保密';
    }
    //类人原型方法
Human.prototype = {
        getSkill: function() {
            return this.skill;
        },
        getHobby: function() {
            return this.hobby;
        }
    }
    //实例化姓名类
var Named = function(name) {
        var that = this;
        //构造器
        (function(name, that) {... })(name, that);
    }
    //创建应聘者
var Person = function(name, work) {
    var _person = new Human();
    _person.name = new Named(name);
    return _person;
}
var person = new Person('xiao ming', 'code');

Prototype(原型模式)
var LoopImages = functin(imgArr, container) {
    this.imageArray = imgArr; //轮播图片数组
    this.container = container; //轮播图片容器
}
LoopImages.prototype = {
    createImage: function() {
        //创建图片的方法
    }
    changeImage: function() {
        //切换图片的方法
    }
}
var SlideLoopImg = function(imgArr, container) {
    //构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
}
SlideLoopImg.prototype = new LoopImages();
SlideLoopImg.prototype.changeImage = function() {
    //重写继承下来的切换图片的方法
}

Singleton(单例模式)【 提供命名空间】
var LazySingle = (function() {
    //单例实例引用
    var _instance = null;
    //单例
    function Single() {
        return {
            publicMethod: function() {},
            publicProperty: '1.0'
        }
    }
    //获取单例对象接口
    return function() {
        //如果为创建单例将创建单例
        if (!_instance) {
            _instance = Single();
        }
        //返回单例
        return _instance;
    }
})();