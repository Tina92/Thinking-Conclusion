### 作用域

1.1编译原理

<ul>
    <li>引擎： javascript程序的编译及执行</li>
    <li>编译器：语法分析及代码生成</li>
    <li>作用域：收集并维护由所有声明的标识符（变量）组成的一系列查询</li>
</ul>
LHS查询（赋值操作的目标是谁）和RHS查询（谁是赋值操作的源头）

词法作用域
eval(..) / with 欺骗词法

隐藏内部实现

在函数作用域内部声明变量和函数，规避同名标识符之间的冲突

立即执行函数（IIFE）
    (function(){ .. })();
    第一个（）将函数转为表达式，第二个（）执行这个函数

let关键字   1.垃圾收集  2.let循环

const关键字 固定常量

javascript的执行  先编译再执行，最后从上而下（先声明后赋值）

函数声明和变量声明都会提升，函数优先提升

闭包作用域

(当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包)。

在定时器，事件监听器，Ajax请求，跨窗口通信，Web Workers或者其他异步任务中，只要使用回调函数，实际上就是在使用闭包

循环和闭包
```javascript
for(var i=1; i<=5; i++) {
    setTimeout( function timer(){
        console.log(i);
    },i*1000);
}//6 6 6 6 6

for(var i=1; i<=5; i++) {
    (function() {
        setTimeout( function timer(){
            console.log(i);
        }, i*1000);
    })();
}//6 6 6 6 6 

for(var i=1; i<=5; i++) {
    (function(){
        var j=i;
        setTimeout( function timer() {
            console.log(j);
        },j*1000 );
    })();
}//1 2 3 4 5
```

模块

1.必须有外部的封闭函数，该函数必须至少被调用一次（每一次调用都会创建一个新的模块实例）；
2.封闭函数发安徽至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。

动态作用域

作用域链是基于调用栈的，而不是代码中的作用域嵌套。

第二部分 this和对象原型

this 是在运行时绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

默认绑定

直接使用不带任何修饰的函数进行的调用应用 this 的默认绑定，this 指向全局对象。严格模式（strict mode）下，全局对象将无法使用默认绑定，此时 this 会绑定到 undefined。

注意：用到第三方库时，其严格程度可能有所不同，注意此类兼容性细节。

隐式绑定

当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this绑定到这个上下文对象。对象属性引用链中只有最后一层会影响调用位置（就近原则）。

隐式丢失
```javascript
    function foo() {
        console.log(this.a);
    }
    function doFoo(fn) {
        // fn 其实引用的是foo
        fn();
    }
    var obj = {
        a:2,
        foo: foo
    };
    var a = "oops,global";
    doFoo( obj.foo ); //“oops, global”
```
显式绑定

call(..) 和 apply(...)

硬绑定  
```javascript
function foo() {
    console.log( this.a );
}
var obj = { a:2 };
var bar = function() {
    foo.call( obj );
}
bar(); //2
bar.call( window ); //2  硬绑定的bar不可能再修改它的this
```
硬绑定的典型应用场景就是创建一个包裹函数，传入所有的参数并返回接收到的所有值。 ES5 中提供的内置方法 Function.prototype.bind 就是一个硬绑定，forEach 之类的上下文绑定

new 绑定

使用 new 来调用函数时会自动执行下面的操作：
1. 创建（或者说构造）一个全新的对象；
2. 这个新对象会被执行 [[原型]] 连接；
3. 这个新对象会绑定到函数调用的this;
4. 如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。

this 绑定的优先级

new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定

绑定例外
1. 把 null 或者 undefined 作为 this 的绑定对象传入 call、 apply或者 bind, 这些值在调用时会被忽略，实际应用的是默认绑定规则。
2. “间接引用” ，调用时应用默认绑定规则
```javascript
function foo() {
    console.log( this.a );
}
var a = 2;
var o = {a:3, foo: foo};
var p = {a:4};
o.foo(); // 3
(p.foo = o.foo)(); // 2
```

软绑定
```javascript
function foo() {
    console.log("name:" + this.name);
}

var obj = { name:"obj" }, obj2 = { name:"obj2" }, obj3 = {name:"obj3"};

var fooOBJ = foo.softBind( obj );
fooOBJ(); //name: obj
obj2.foo = foo.softBind(obj);
obj2.foo(); //name: obj2 
fooOBJ.call(obj3); //name:obj3
setTimeout(obj2.foo, 10); //name: obj <-- 应用了软绑定
```

箭头函数的 this
 this 在创建时绑定创建时的对象，不会被调用的对象所影响


##对象

对象的定义： 
JavaScript 中的对象有字面形式和构造形式。字面形式更常用，不过有时候构造形式可以提供更多选项。
声明形式
```javascript
    var myObj = {
        key: value
        //...
    };
```
构造形式
```javascript
    var myObj = new Object();
    myObj.key = value;
```
JavaScript 的类型

string / number / boolean/ null / undefined / object

JavaScript 的内置对象(内置函数)

String / Number / Boolean / Object / Function / Array / Date / RegExp / Error

```javascript
    var strPrimitive = "I am a string";
    typeof strPrimitive; // "string"
    strPrimitive instanceof String; // false

    var strObject = new String("I am a string");
    typeof strObject; //"object"
    strObject instanceof String; // true
```
ps:  引擎会自动把字面量转换为 String 对象

ES6 增加了可计算属性名，需使用 [] 包裹表达式
```javascript
    var prefix = "foo";
    var myObject = {
        [prefix+"bar"]: "hello"
    };
    myObject["foobar"]; //hello
```
数组也是对象，仍然可以给数组添加属性，但不影响length,但是如果你向数据添加的属性，属性名看起来像数字，则会成为数值下标，影响length
```javascript
    var myArray = ["foo", 42, "bar"];
    myArray.length; //3
    myArray.baz = "baz";    
    myArray.length; //3
    myArray["3"] = "baz";
    myArray.length; //4
```
```JSON.parse() //是从一个字符串中解析出json对象```
```JSON.stringfy() //是从一个对象解析出字符串```

属性描述符
```javascript
Object.getOwnPropertyDescriptor(objectName,attritude);
Object.defineProperty(objectName, attritude,{
    value: ,
    writable:true,  //是否可写
    configurable:true,  //是否可配置
    enumerable:true     //是否可枚取
});
```
对象禁止扩展,可修改
Object.preventExtensions(..)

对象密封，不可扩展也不可修改,configurable:false
Object.seal(..)

对象冻结，最高级别不可变性，writable:false
Object.freeze(..)

对象默认的控制属性值的设置和获取的是 [[Put]] 和 [[Get]]

对象隐藏属性 getter 和 setter , setter 覆盖单个属性默认 [[Put]]

#存在性
in in操作符会检查属性是否在对象及其 [[Prototype]] 原型链中。

hasOwnProperty(..) 只会检查属性是否在对象中，不会检查 [[Prototype]] 链，可以使用 Object.prototype.hasOwnProperty.call(myObject,"a") 显示绑定到对象上。

Object.keys(..) 返回一个数组，包含所有可枚举属性

Object.getOwnPropertyNames(..) 返回一个数组，包含所有属性，无论它们是否可枚举

#遍历

遍历数组下标  for ... in / forEach() / every() / some()

遍历数组值  for ... of / Symbol.iterator & next()

#混合对象 “类”

类/继承是一种建模方法，面向对象编程强调的是数据和操作数据的行为本质上是互相关联的。 在软件设计中类是一种可选的模式。

构造函数
```javascript
 class CoolGuy {
     specialTrick = nothing
     CoolGuy( trick ) {
         specialTrick = trick
     } //构造函数
     showOff() {
         output( "Here's my trick: ",specialTrick )
     }
 }
 Joe = new CoolGuy( "jumping rope" )
 Joe.showOff()//Here's my trick: jumping rope
 
 ```

 inherited: 继承，子类继承父类

 super: 调用父类引用，两者之间可以实现相对引用
 ```javascript
 class Vehicle {
     engines = 1;
     ignition() {
         output( "Turning on my engine." );
     }
     drive() {
         ignition();
         output( "Steering and moving forward!" );
     }
 }

 class Car inherits Vehicle {
     wheels = 4;
     drive() {
         inherited: drive()
         output( "Rolling on all ", wheels, " wheels!" );
     }
 }

 class SpeedBoat inherits Vehicle {
     engines = 2;
     ignition() {
         output( "Turning on my ", engines, " engines." )
     }
     pilot() {
         inherited: drive()
         output( "Speeding throught the water with ease!" )
     }
 }
```
上文中 ignition() 方法定义的多态性取决与你在哪个类的实例中引用它。


#原型

Object.create(..) 创建一个对象并把这个对象的 [[Prototype]] 关联到指定的对象
