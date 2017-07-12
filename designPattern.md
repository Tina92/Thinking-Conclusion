JS创建对象
1. 对象字面量的方式
var person = { 'firstName': 'abc' }

2. 构造函数创建对象

function person(firstName) {
    this.firstName = firstName;
}
var newPerson = new person('abc');

3. 原型方式创建对象

function person(firstName) {}
person.prototype.firstName = 'abc';
var newPerson = new person();

4. 工厂模式创建对象（ 内置对象）
var person = new Object();
person.firstName = 'abc';

JS继承方式
1. 原型继承
subClass.prototype = new superClass();
2. 构造函数继承

function subClass(agruement) {
    superClass.call(this, agruement);
}
3. 组合继承

function superClass(name) {
    this.name = name;
}
superClass.prototype.getName = function() {
    console.log(this.name);
};

function subClass(name, time) {
    superClass.call(this, name);
    this.time = time;
};
subClass.prototype = new superClass();
subClass.prototype.getTime = function() {
    console.log(this.time);
};


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

外观模式（ Facade）【 提供更高级的同一接口 / 处理浏览器兼容】
    //为元素绑定事件
function addEvent(dom, type, fn) {
    //支持DOM2级事件处理 addEvenetListener 浏览器
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
        //不支持addEventListener但支持attachEvent方法的浏览器
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}
//阻止默认行为
var preventDefault = function(event) {
    var event = getEvent(event);
    //标准浏览器
    if (event.preventDefault) {
        event.preventDefault();
        //IE浏览器
    } else {
        event.returnValue = false;
    }
}


适配器模式（ Adapter）【 将一个类的接口转换为另一个接口， 适配异类框架， 适配参数， 适配数据， 适配服务端数据】
适配异类框架
//定义框架
var A = A || {};
//通过ID获取元素
A.g = function(id) {
        return document.getElementById(id);
    }
    //为元素绑定事件
A.on = function(id, type, fn) {
    //如果传递参数是字符串则以id处理，否则以元素对象处理
    var dom = typeof id === 'string' ? this.g(id) : id;
    //标准DOM2级添加事件方式
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);
        //IE DOM2级添加事件方式
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}
适配jQuery库
A.g = function(id) {
    //通过jQuery获取jQuery对象，然后返回第一个成员
    return $(id).get(0);
}
A.on = function(id, type, fn) {
    var dom = typeof id == 'string' ? $('#' + id) : $(id);
    dom.on(type, fn);
}


适配参数

function doSomeThing(obj) {
    var _adapter = {
        name: 'defalutName',
        title: 'defalutTitle',
        age: 'defalutAge',
        color: 'defalutColor'
    };
    for (var i in _adapter) {
        _adapter[i] = obj[i] || _adapter[i];
    }
    //或者 extend(_adapter,obj)注：此时可能会添加属性
}

数据适配

function arrToObjAdapter(arr) {
    return {
        name: arr[0],
        type: arr[1],
        title: arr[2],
        data: arr[3]
    }
}
var arr = ['Javascript', 'book', '前端编程语言'，
    '8月1日'
];
var adapterData = arrToObjAdapter(arr);

服务器端数据适配

function ajaxAdapter(data) {
    //处理数据并返回新数据
    return [data['key1'], data['key2']]
}
$.ajax({
    url: 'someAdress.php',
    success: function(data, status) {
        if (data) {
            //使用适配后的数据——返回的对象
            doSomeThing(ajaxAdapter(data));
        }
    }
})

代理模式（Proxy)【跨域问题，重定向】
X域中被代理页面A
<script type = 'text/javaScript'>
    function callback(data){
        console.log('成功接收数据',data);
    }
</script>
<iframe name='proxyIframe' id='proxyIframe' src='proxyIframe'>
</iframe>
<form action='http://localhost...' method='post' target=''>
    <input type='text' name='callback' value='callback'>
    <input type='text' name='proxy' value="http://....">
    <input type='submit' value='提交'>
</form>

X域中代理页面B
//将URL中searcher部分的数据解析并重组，传入回调函数
<script>
    //页面加载后执行
    window.onload = function(){
        //如果不在A页面中返回，不执行
        if(top == self) return;
        //获取并解析searcher中的数据
        var arr = location.search.substr(1).split('&'),fn,args;
        for (var i = 0, len=i < arr.length , item; i<len ; i++) {
            item = arr[i].split('=');
            if (item[0]=='callback') {
                
            } else if(item[0]=='arg'){
                args = item[1];
            }
        }
        try{
            eval('top.'+fn+'("' + args +'")');
        }catch(e){}
    }
</script>

Y域的接口文件C(后端接口文件)
<?php
    $proxy = $_POST["proxy"];
    $callback = $_POST["callback"];
    header("Location:".$proxy."?callback=".$callback."&arg=success");
?>


装饰者模式（Decorator）【给已有的功能对象添加属性和方法】
//装饰者
var decorator = function(input,fn){
    //获取事件源
    var input = document.getElementById(input);
    //若事件源已经绑定事件
    if(typeof of input.onclick === 'function'){
        //缓存事件源原有回调函数
        var oldClickFn = input.onclick;
        //为事件源定义新的事件
        input.onclick = function(){
            //事件源原有回调函数
            oldClickFn();
            //执行事件源新增回调函数
            fn();
        }
    }else{
        //事件源未绑定事件，直接为事件源添加新增回调函数
        input.onclick = fn;
    }
}

桥接模式（Bridge）【先抽象提取共用部分，然后将现实与抽象通过桥接方法链接在一起，解耦】
//抽象
function commonFn(agruement){
    //共同方法
}
//链接
var tag = document.getElementByTagName('input');
tag[0].onclick = function(){commonFn(this);}

组合模式（Composite）【】
//虚拟父类Forms
var Forms = function(){
    //子组件容器
    this.children = [];
    //当前组件元素
    this.element = null;
}
Forms.prototype = {
    init: function() {
        throw new Error('请重写你的方法');
    },
    add: function() {
        throw new Error('请重写你的方法');
    },
    getElement: function() {
        throw new Error('请重写你的方法');
    }
}
//容器类
var Container = function(id, parent) {
    //构造函数继承父类
    Forms.call(this);
    //模块id
    this.id = id;
    //模块的父容器
    this.parent = parent;
    //构建方法
    this.init();
}
//寄生式继承父类原型方法
inheritPrototype(Container,Forms);
//建构方法
Container.prototype.init = function(){
    this.element = document.createElement('form');
    this.element.id = this.id;
    this.element.className = 'new-container';
};
//添加子元素方法
Container.prototype.add = function(child){
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素
    this.element.appendChild(child.getElement());
    return this;
}
//获取当前元素方法
Container.prototype.getElement = function(){
    return this.element;
}
//显示方法
Container.prototype.show = function(){
    this.parent.appendChild(this.element);
}

var Item = function(className){
    Forms.call(this);
    this.className = className || '';
    this.init();
}
inheritPrototype(Item, Forms);
Item.prototype.init = function() {
    this.element= document.createElement('div');
    this.element.className = this.className;
}
Item.prototype.add = function(child){
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}
Item.prototype.getElement = function(){
    return this.element;
}

var FormsGroup = function(className){
    Forms.call(this);
    this.className = className || '';
    this.init();
}
inheritPrototype(FormsGroup, Forms);
FormsGroup.prototype.init = function() {
    this.element= document.createElement('div');
    this.element.className = this.className;
}
FormsGroup.prototype.add = function(child){
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendChild(child.getElement());
    return this;
}
FormsGroup.prototype.getElement = function(){
    return this.element;
}

var LabelItem = function(className,labelName) {
    Forms.call(this);
    this.className = className || 'labelItem';
    this.init();
}
inheritPrototype(LabelItem, Forms);
LabelItem.prototype.init = function(){
    this.element = document.createElement('label');
    this.element.className = this.className;
    this.element.innerHTML = this.labelItem;
}
LabelItem.prototype.add = function () {}
LabelItem.prototype.getElement = function () {
    return this.element;
}

var InputItem = function(id) {
    Forms.call(this);
    this.id = id;
    this.init();
}
inheritPrototype(InputItem, Forms);
InputItem.prototype.init = function(){
    this.element = document.createElement('input');
    this.element.id = this.id;
    this.element.type = 'text';
}
InputItem.prototype.add = function () {}
InputItem.prototype.getElement = function () {
    return this.element;
}

var SpanItem = function(text) {
    Forms.call(this);
    this.text = text || '';
    this.init();
}
inheritPrototype(SpanItem, Forms);
SpanItem.prototype.init = function(){
    this.element = document.createElement('span');
    this.element.innerHTML = this.text;
}
SpanItem.prototype.add = function () {}
SpanItem.prototype.getElement = function () {
    return this.element;
}

eg:
var form = new Container('Container',document.body);
form.add(
    new Item('account','账号').add(
        new FormsGroup().add(
            new LabelItem('user_name','用户名：')
        ).add(
            new InputItem('user_name')
        ).add(
            new SpanItem('4到6位数字或字母')
        )
    ).add(
        new FormsGroup().add(
            new LabelItem('user_name','用户名：')
        ).add(
            new InputItem('user_name')
        ).add(
            new SpanItem('4到6位数字或字母')
        )
    )
).show();

享元模式（Flyweight）【提取共同数据和方法作为内部数据，内部方法】
var Flyweight = function(){
    moveX : function (x) {
        this.x = x;
    },
    moveY : function (x) {
        this.y = y;
    }
}
eg:
    var Player = function (x, y, c) {
        this.x = x;
        this.y = y;
        this.color = c;
    }
    Player.prototype = Flyweight;
    Player.prototype.changeC = function (c) {
        this.color = c;
    }
    var Spirit = function (x,y,r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    Spirit.prototype = Flyweight;
    Player.prototype.changR = function (r) {
        this.r = r;
    }


模板方法模式（Template Method）【】