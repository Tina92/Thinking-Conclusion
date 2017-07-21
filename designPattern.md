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


模板方法模式（Template Method）【归一化，创建基本类，继承】
eg: 提示框
var Alert = function (data) {
    //没有数据则返回，防止后面程序执行
    if (!data) {
        return;
    }
    //设置内容
    this.content = data.content;
    //创建提示框面板
    this.panel= document.createElement('div');
    //创建提示内容组件
    this.contentNode = document.createElement('p');
    //创建确定按钮组件
    this.confirmBtn = document.createElement('span');
    //创建关闭按钮组件
    this.closeBtn = document.createElement('b');
    //为提示框面板添加类
    this.panel.className = 'alert';
    //为关闭按钮添加类
    this.closeBtn.className = 'a-close';
    //为确定按钮添加类
    this.confirmBtn.className = 'a-confirm';
    //为确定按钮添加文案
    this.confirmBtn.innerHTML = data.confirm || '确认';
    //为提示内容添加文本
    this.contentNode.innerHTML = this.content;
    //点击确认按钮执行方法 如果data中有success方法则为 success 方法，否则为空函数
    this.success = data.success || function() {};
    //点击关闭按钮执行方法
    this.fail = data.fail || function() {};
}

//模板的原型方法，基本方法
//提示框原型方法
Alert.prototype = {
    //创建方法
    init : function () {
        //生成提示框
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);
        //插入页面中
        document.body.appendChild(this.panel);
        //绑定事件
        this.bindEvent();
        //显示提示框
        this.show();
    },
    bindEvent: function () {
        var me = this;
        //关闭按钮点击事件
        this.closeBtn.onclick = function () {
            //执行关闭取消方法
            me.fail();
            //隐藏弹层
            me.hide();
        }
        //确定按钮点击事件
        this.confirmBtn.onclick = function () {
            //执行关闭确认方法
            me.success();
            //隐藏弹层
            me.hide();
        }
    },
    //隐藏弹层方法
    hide : function () {
        this.panel.style.display = 'none';
    },
    //显示弹层方法
    show ： function () {
        this.panel.style.display = 'block';
    }
}

//根据模板基类，拓展其他类型
//右侧按钮提示框
var RightAlert = function (data) {
    //继承基本提示框构造函数
    Alert.call(this, data);
    //为确认按钮添加right类设置位置居右
    this.confirmBtn.className = this.confirmBtn.className + ' right';
}
//继承基本提示框方法
RightAlert.prototype = new Alert();

//标题提示框
var TitleAlert = function (data) {
    //继承基本提示框构造函数
    Alert.call(this, data);
    //设置标题内容
    this.title = data.title;
    //创建标题组件
    this.titleNode = document.createElement('h3');
    //标题组件中写入标题内容
    this.titleNode.innerHTML = this.title;
}
//继承基本提示框方法
TitleAlert.prototype = new Alert();
//对基本提示框创建方法拓展
TitleAlert.prototype.init = function () {
    //插入标题
    this.panel.insertBefore(this.titleNode, this.panel.firstName);
    //继承基本提示框 init 方法
    Alert.prototype.init.call(this);
}
//继承类也可以作为模板类，被继承
eg: new TitleAlert({
    title:'提示标题'
}).init();

观察者模式（Observer）【发布-订阅模式】
// 将观察者放在闭包中,当页面加载就立即执行
var Observer = ({
    //防止消息队列暴漏而被篡改故将消息容器作为静态私有变量保存
    var _messages = {};
    return{
        //注册信息接口
        regist : function (type, fn) {
            //如果此消息不存在则应该创建一个该消息类型
            if (typeof _messages[type] === 'undefined') {
                // 将动作推入到该消息对应的动作执行队列中
                _messages[type] = [fn];
            //如果此消息存在
            } else {
                // 将动作方法推入该消息对应的动作执行序列中
                _messages[type].push(fn);
            }
        },
        //发布信息接口
        fire : function (type, args) {
            //如果该消息没有被注册，则返回
            if(!_messages[type]) return;
            //定义消息信息
            var event = {
                type: type, //消息类型
                args: args || {} //消息携带数据
            },
            i = 0,                        //消息动作循环变量
            len = _messages[type].length; //消息动作长度
            //遍历消息动作
            for (; i < len; i++) {
                //依次执行注册的消息对应的动作序列
                _messages[type][i].call(this, events);
            }
        },
        //移除信息接口
        remove : function (type, fn) {
            //如果消息动作队列存在
            if(_messages[type] instanceof Array){
                //从最后一个消息动作遍历
                var i = _messages[type].length - 1;
                for(; i >= 0; i--){
                    // 如果存在该动作则在消息动作队列中移除相应动作
                    _messages[type][i] === fn && _messages[type].splice(i, 1);
                }
            }
        }
    }
})();
eg:
//学生类
var Student = function(result){
    var that = this;
    //学生回答结果
    that.result = result;
    //学生回答问题动作
    that.say = function () {
        console.log(that.result);
    }
}
//回答问题方法
Student.prototype.answer = function (question) {
    //注册参数问题
    Observer.regist(question, this.say);
}
//学生睡觉，无法回答问题
Student.prototype.sleep = function (question) {
    console.log(this.result + '' + question + ' 已被注销');
    //取消对老师问题的监听
    Observer.remove(question, this.say);
}
//教师类
var Teacher = function () { };
//教师提问问题的方法
Teacher.prototype.ask = function (question) {
    console.log('问题是： '+ question);
    //发布提问消息
    Observer.fire(question);
}

var student3 = new Student('学生3回答问题');
var teacher = new Teacher();
teacher.ask('什么是设计模式');
student3.answer('简述观察者模式');
student3.sleep('简述观察者模式');
//输出结果：什么是设计模式 学生3回答问题 简述观察者模式 已被注销

状态模式（State）【每一种条件作为对象内部的一种状态，面对不同判断结果，其实选择对象内的一种状态】
eg://创建超级玛丽状态类
var MarryState = function () {
    //内部状态私有变量
    var _currentState = {},
        //动作与状态方法映射
        states = {
            jump ： function () {
                //跳跃
                console.log('jump');
            },
            move : function () {
                //移动
                console.log('move');
            },
            shoot : function () {
                //射击
                console.log('shoot');
            },
            squat : function () {
                //蹲下
                console.log('squat');
            }
        };
    //动作控制类
    var Action = {
        //改变状态方法
        changeState ：function () {
            //组合动作通过传递多个参数实现
            var _arg = arguments;
            //重置内部状态
            _currentState = { };
            //如果有动作则添加动作
            if (arg.length) {
                //遍历动作
                for(var i = 0, len = arg.length; i < len; i++){
                    //向内部状态中添加动作
                    _currentState[arg[i]] = true;
                }
            }
            //返回动作控制类
            return this;
        },
        //执行动作
        goes : function () {
            console.log('触发一次动作');
            //遍历内部状态保存的动作
            for(var i in currentState){
                //如果该动作存在则执行
                states[i] && states[i]();
            }
            return this;
        }
    }
    //返回接口方法 change/gose
    return{
        change: Action.changeState,
        goes: Action.goes
    }
}
var marry = new MarryState();
marry.change('jump', 'shoot')  //添加跳跃与射击动作
     .goes()                   //执行动作
     .goes()                   //执行动作
     .change('shoot')          //添加射击动作
     .goes();                  //执行动作


策略模式（Strategy）【优化分支语句，封装】
eg://表单正则验证策略对象
var InputStrategy = function () {
    var strategy = {
        //是否为空
        notNull : function (value) {
            return /\s+/.test(value) ? '请输入内容' : '';
        },
        //是否是一个数字
        number : function (value) {
            return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字';
        },
        //是否是本地电话
        phone : function (value) {
            return /^\d{3}\-\d{8}$|^\d{4}\-\d{7}$/.test(value) ? '' : '请输入正确的电话号码格式，如：010-12345678';
        }
    }
    return {
        // 验证接口 type 算法 value 表单值
        check : function (type, value) {
            //去除收尾空白符
            value = value.replace(/^\s+|\s+$/g, '');
            return strategy[type] ? strategy[type](value) : '没有该类型的检测方法'
        },
        // 添加策略
        addStrategy : function (type, fn) {
            strategy[type] = fn;
        }
    }
}();
//拓展 可以延伸算法
InputStrategy.addStrategy('nickname', function (value) {
    return /^[a-zA-Z]\w{3,4}$/.test(value) ? '' : '请输入4-8位昵称，如：YYQH';
})

//算法调用
//外观模式简化元素的获取
function $tag(tag, context) {
    Context = Context || document;
    return context.getElementByTagName(tag);
}
//提交按钮点击
$tag('input')[1].onclick = function () {
    //获取输入框内的内容
    var value = $tag('input')[0].value;
    //获取日期格式验证结果
    $tag('span')[0].innerHTML = InputStrategy.check('nickname',value);
}


职责链模式（Chain of Responsibility）【需求颗粒化】
eg: 提交表单需求 请求模块 — 响应数据适配模块 - 创建组件模块 - 单元测试
① 请求模块
var sendData = function (data, dealType, dom) {
    // XHR 对象 简化版本 IE另行处理
    var xhr = new XMLHttpRequest(),
        //请求路径
        url = 'getData.php?mod=userInfo';
    //请求返回事件
    xhr.onload = function (event) {
        //请求成功
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            dealData(xhr.responseText, dealType, dom);
        }else{
            //请求失败
        }
    }
    //拼接请求字符串
    for(var i in data){
        url += '&' + i + '=' + data[i];
    }
    //发送异步请求
    xhr.open("get", url, true);
    xhr.send(null);
}
② 响应数据适配模块
var dealData = function (data, dealType, dom) {
    //对象toString 方法简化引用
    var dataType = Object.prototype.toString.call(data);
    //判断相应数据处理对象
    switch(dealType){
        //输入框提示功能
        case 'sug':
            //如果数据为数组
            if(dataType === '[object Array]'){
                //创建提示框组件
                return createSug(data, dom);
            }
            //将响应的对象数据转化为数组
            if(dataType === '[object Object]'){
                var newData = [];
                for(var i in data)
                    newData.push(data[i]);
                //创建提示框组件
                return createSug(newData,dom);
            }
            //将响应的其他数据转化为数组
            return createSug([data],dom);
            break;
        case 'validate':
            //创建校验组件
            return createValidataResult(data, dom);
            break;
    }
}

③ 创建组件模块
var createSug = function (data, dom) {
    var i = 0, len = data.length, html = '';
    //拼接每一条提示语句
    for(; i<len; i++){
        html += '<li>'+ data[i] +'</li>';
    }
    //显示提示框
    dom.parentNode.getElementByTagName('ul')[0].innerHTML = html;
}
//创建校验组件
var createValidataResult = functin(data, dom){
    //显示校验结果
    dom.parentNode.getElementByTagName('span')[0].innerHTML = data;
}

④ 单元测试
dealData('用户名不正确', 'validate',input[0]);
dealData(123, 'sug', input[1]);

命令模式（Command）【将创建模块的逻辑封装在一个对象里】
// 模块实现模块
var viewCommand = (function () {
    //视图创建
    var tpl = {}
    //方法集合
    var Action = {
        //创建方法
        create : function () { },
        //展示方法
        display: function () { }
    }
    // 命令接口
    return function excute(msg) { 
        // 解析命令，如果msg.param不是数组则将其转化为数组（apply 方法要求第二个参数为数组 ）
        msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
        //Action 内部调用的方法引用this,所以此处为保证作用域this执行传入Action
        Action[msg.command].apply(Action, msg.param)
    }
}) ();

eg: 绘图命令
//实现对象
var CanvasCommand = (function() {
    //获取 canvas
    var canvas = document.getElementById('canvas'),
    //canvas 元素的上下文引用对象缓存在命令对象的内部
    ctx = canvas.getContext('2d');
    //内部方法对象
    var Action = {
        //填充色彩
        fillStyle : function (c) {
            ctx.fillStyle = c;
        },
        //填充矩形
        fillRect : function (x, y, width, height) {
            ctx.fillRect(x, y, width, height);
        },
        //描边色彩
        strokeStyle : function (c) {
            ctx.strokeStyle = c;
        },
        //描边矩形
        strokeRect ：function (x, y, width, height) {
            ctx.strokeRect(x, y, width, height);
        },
        //填充字体
        fillText : function (text, x, y) {
            ctx.fillText(text, x, y)
        },
        //开启路径
        beginPath : function () {
            ctx.beginPath();
        },
        //移动画笔触电
        moveTo : function (x, y) {
            ctx.moveTo(x, y)
        },
        //画笔连线
        lineTo : function (x, y) {
            ctx.lineTo(x, y);
        }
    }
    return {
        //命令接口
        excute : function (msg) {
            //如果没有指令返回
            if(!msg) return;
            //如果命令是一个数组
            if(msg.length) {
                //遍历执行多个命令
                for(var i=0, len = msg.length; i<len;i++)
                    arguments.callee(mag[i]);
            }else{
                //如果msg.param 不是一个数组，将其转化为数组， apply第二个参数要求格式
                msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
                //Action内部调用的方法可能引用this, 为保证作用域中this指向正确，故传入Action
                Action[msg.command].apply(Action, msg,param);
            }
        }
    }
})();
//设置填充色为红色，并绘制一个矩形
CanvasCommand.excute([
    {command: 'fillStyle', param:'red'},
    {command: 'fillRect', param: [20,20,100,100]}
]);

访问者模式（Visitor）【不改变操作对象的同时，为它添加新的操作方法】
对象访问器
//访问器
var Visitor = (function () {
    return {
        //截取方法
        splice ： function () {
            //splice 方法参数，从原参数的第二个参数开始算法
            var args = Array.prototype.splice.call(arguments, 1);
            //对第一个参数对象执行splice方法
            return Array.prototype.splice.apply(arguments[0],args);
        },
        //追加数据方法
        push : function () {
            //强化类数组对象，使他拥有length属性
            var len = arguments[0].length || 0;
            //添加的数据从原参数的第二个参数算起
            var args = this.splice(arguments, 1);
            //校正length属性
            arguments[0].length = len + arguments.length -1;
            //对第一个参数对象执行push方法
            return Array.prototype.push.apply(arguments[0], args);
        },
        //弹出最后一次添加的元素
        pop : function () {
            //对第一个参数对象执行pop方法
            return Array.prototype.pop.apply(arguments[0]);
        }
    }
})();
var a = new Object();   //a.length = undefined
Visitor.push(a, 1,2,3,4); //a={0:1,1:2,2:3,3:4}

中介者模式（Mediator）【单向通信】
//中介者对象
var Mediator = function () {
    // 消息对象
    var _msg = {};
    return {
        /**
         * 订阅消息方法
         * 参数 type   消息名称
         * 参数 action 消息回调函数
         */
         register : function (type, action) {
             //如果该消息存在
             if(_msg[type])
                // 存入回调函数
                _msg[type].push(action);
            else{
                //不存在 则建立该消息
                _msg[type] = [];
                //存入新消息回调函数
                _msg[type].push(action);
            }
         },
         /**
          * 发布消息方法
          * 参数 type 消息名称
          */
          send : function (type) {
              //如果该消息已经被订阅
              if(_msg[type]){
                  //遍历已存储的消息回调函数
                  for (var i = 0, len = _msg[type].length; i < len; i++) {
                      // 执行该回调函数
                      _msg[type][i] && _msg[type][i]();
                  }
              }
          }
    }
} ();
//设置层模块
(function  () {
    //消息提醒选框
    var hideNum = document.getElementById('hide_num'),
        //网址选框
        hideUrl = document.getElementById('hide_url');
    // 消息提醒选框事件
    hideNum.onchange = function () {
        //如果勾选
        if(hideNum.checked){
            //中介者发布隐藏消息提醒功能消息
            Mediator.send('hideAllNavNum');
        }else{
            //中介者发布显示消息提醒功能消息
            Mediator.send('showAllNavNum');
        }
    }
    //网址选框事件
    hideUrl.onchange = function () {
        //如果勾选
        if(hideUrl.checked){
            //中介者发布隐藏所有网址功能消息
            Mediator.send('hideAllNavUrl');
        }else{
            // 中介者发布显示所有网址功能消息
            Mediator.send('showAllNavUrl');
        }
    }
})();

备忘录模式（Memento）【缓存数据】
eg: 新闻缓存类
// Page 备忘录类
var Page = function () {
    //信息缓存对象
    var cache = {};
    /**
     * 主函数
     * 参数 page 页码
     * 参数 fn 成功回调函数
     */
     return function (page, fn) {
         //判断该页数据是否在缓存中
         if (cache[page]) {
             //恢复到该页状态，显示该页内容
             showPage(page, cache[page]);
             //执行成功回调函数
             fn && fn();
         }else{
             //若缓存 Cache 中无该页数据
             $.post('./data/getNewsData.php',{
                 //请求携带数据 page 页码
                 page: page
             }, function (res) {
                 //成功返回
                 if (res.errNo == 0) {
                     //显示该页数据
                     showPage(page, res.data);
                     //将该页数据存入缓存中
                     cache[page] = res.data;
                     //执行成功回调函数
                     fn && fn();
                 }else{
                     //处理异常
                 }
             })
         }
     }
}()

迭代器模式（Iterator）【顺序一次访问聚合对象内部的元素】
//迭代器
var Iterator = function (item, container) {
    //获取父容器，若container参数存在，并且可以获取该元素则获取，否则获取 document
    var container = container && document.getElementById(container) || document,
        // 获取元素
        items = container.getElementByTagName(items),
        // 获取元素长度
        length = items.length,
        // 当前索引值，默认：0
        index = 0;
        // 缓存源生数组 splice 方法
    var splice = [].splice;
    return {
        // 获取第一个元素
        first : function () {},
        // 获取最后一个元素
        second : function () {},
        // 获取前一个元素
        pre : function () {},
        // 获取后一个元素
        next : function () {},
        // 获取某一个元素
        get　: function () {},
        // 对某一个元素执行某一个方法
        dealItem : function () {},
        // 排他方式处理某一个元素
        exclusive : function () {}
    }
}
var  demo = new Iterator('li', 'container');
console.log(demo.first());
demo.dealEach(function (text, color) {
    ...
},'test', 'pink');