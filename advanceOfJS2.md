### 类型和语法

#类型

JavaScript 有七种内置类型
<ul>
    <li>null</li>
    <li>undefined</li>
    <li>boolean</li>
    <li>number</li>
    <li>string</li>
    <li>object</li>
    <li>symbol</li>
</ul>

通过 `typeof` 查看值的类型

* typeof null === "object"; //true
* 检测 null 值的类型
* (!a && typeof a === "object"); //true

JavaScript 中的变量是没有类型额，只有值才有。

未定义 ： `undefined`
未声明 :  `undeclared`

typeof 的安全防范机制针对非全局变量和全局变量
```javascript
    function doSomethingCool() {
        var helper = (typeof FeatureXYZ !== "undefined") ?
            FeatureXYZ :
            function() { /*..default feature..*/ };
        var val = helper();
        // ..
    }
```
* delete 预算付可以将单元从数组中删除，单元删除后，数组的 length 属性不变

#数组
```javascript
    var a = [];
    a[0] = 1;
    a["foobar"] = 2;
    a.length; //1
    a["13"] = 42;
    a.length; // 14
```
* 如果字符串键值能够被强制类型转换为十进制数字的话，它就会被当作数字索引来处理

slice(..) 和 Array.from(..) 都可以将类数组转化为真正的数组

#数值
```javascript
    var a = 5E10;
    a;  // 50000000000
    a.toExponential(); //"5e+10"
    var c = 1/a;
    c;  //2e-11
```
* `tofixed(..)` 指定小数部分的显示位数
* `toPercision(..)` 指定有效数位的显示位数

* 机器精度
```javascript
    function numbersCloseEnoughToEqual(n1, n2) {
        return Math.abs( n1 - n2 ) < Number.EPSILON;
    }
```
小于机器精度则相等

* 整数的安全范围
 
最大整数 Number.MAX_SAFE_INTEGER = 2^53 - 1 = 9007199254740991
最小整数 Number.MIN_SAFE_INTEGER = -9007199254740991

* 整数检测
`Number.isInteger(..)`

* 32位有符号整数
a | 0 可以将变量a中的数值转换为32位有符号整数，数位运算符 | 只适用于32位整数

* 特殊数值

null & undefined

void 运算符 （表达式 void 没有返回值，返回结果是 undefined）

不是数字的数字  NaN    
```javascript
    typeof a === "number"; //true
    NaN != NaN;  //true
    Number.isNaN (NaN); //true
    window.isNaN('foo');//true
    Number.isNaN('foo');//false
```
NaN 是 Javascript 中唯一一个不等于自身的值

无穷数  Infinity
`var a = 1 / 0;  //Infinity`

零值
```javascript
    +"-0";  // -0
    Number("-0"); //-0
    JSON.stringify("-0"); //0
    JSON.parse("-0");//-0
```

特殊等式
    `Object.is(..)` 判断两个值是否绝对相等

值复制和引用复制
```javascript
    var a = 2;
    var b = a;// b是a的值的副本
    b++;
    a; //2
    b; //3  值复制
    var c = [1,2,3];
    var d = c; // d是[1,2,3]的一个引用
    d.push(4);
    c;  //[1,2,3,4]
    d; //[1,2,3,4] 引用复制
```
简单值通过值复制的方式来赋值/传递，包括 null、undefined、字符串、数字、布尔和 symbol;
复合值——对象和函数，则通过引用复制的方式来赋值/传递
```javascript
    function foo(x) {
        x = x + 1;
        x; //3
    }
    var a = 2;
    var b = new Number( a ); //Object(a) 是 a 的数字对象，是引用

    foo(b);
    console.log(b);    //是 2，不是 3
```

#原生函数

* String()
* Number()
* Boolean()
* Array()
* Object()
* Function()
* RegExp()
* Date()
* Error()
* Symbol()

构造函数创建出来的是封装了基本类型值的封装对象
```javascript
    var a = new String("abc");
    typeof a;       // 是"object"
    a instanceof String;    //true
    Obejct.prototype.toString.call(a);  //"[object String]"
```
#封装
所有 typeof 返回值为"object"的对象都包含一个内部属性[[Class]],这个属性一般通过 Object.prototype.toString.call(..)来查看。

由于浏览器为 `.length` 这样的常见情况做了性能优化，使用封装对象反而会降低执行效率，使用 "abc" 这样的字面量对象更合适

封装对象释疑
```javascript
    var a = new Boolean( false );
    !a; //false
```
#拆封
想要得到封装对象中的基本类型值，可以使用 valueOf() 函数

#原生函数作为构造函数
* Array(..)
 Array 构造函数中只带一个数字参数时，该参数会被作为数组的预设长度，而非充当数组中的一个元素，形成空元素数组

* Object(..)、Function(..)和RegExp(..)
 非必要情况，尽量少用

* Date(..)和Error(..)
 创建日期对象： `new Date();`

 获取时间戳： `(new Date()).getTime();`或者 `Date.now()`

 创建错误对象
```javascript
    function foo(x) {
        if(!x) {
            throw new Error("x wasn't provided");
        }
        //...
    }
```

* Symbol(..)
 具有唯一性的特殊值,符号并非对象，是一种简单标量的基本类型
 `var a = Symbol(..)`

* 原生原型
 原生构造函数都有自己的 .prototype 对象，这些对象包含其对应子类型所特有的行为特征

 将原型作为默认值
 ```javascript
  function isThisCool(vals, fn, rx) {
      vals = vals || Array.prototype;
      fn = fn || Function.prototype;
      rx = rx || RegExp.prototype;
      return rx.test(
          vals.map( fn ).join("")
      );
  }
  isThisCool();     //true
  isThisCool(
      ["a","b","c"],
      function(v){ return v.toUpperCase(); }
      /D/
  );            //false
 ```
 这种方法的一个好处是 .prototypes 已被创建并且仅创建一次，Function.prototype 是一个空函数， RegExp.prototype 是一个“空”的正则表达式，而 Array.prototype 是一个空数组。如果默认值随后被更改，就不要使用 .prototype。

#强制类型转换
```javascript
 var a = 42;
 var b = a + ""; // 隐式强制类型转换
 var c = String(a); // 显式强制类型转换
```

* 抽象值操作
 ToString
   基本类型值的字符串化规则为：null 转换为 "null"，undefined 转换为 "undefined"，true转换为 "true"。
 JSON 字符串化
 ```javascript
    JSON.stringify(42); //"42"
    JSON.stringify("42");   //""42""
    JSON.stringify(null);   //"null"
    JSON.stringify(true);   //"true"
    JSON.stringify(undefined);  //undefined
    JSON.stringify( function(){} ); //undefined
    JSON.stringify([1,undefined,function(){},4]);   //"[1,null,null,4]"
    JSON.stringify({a:2, b:function(){}});  //"{"a":2}"
    var a = {
        b:42,
        c:"42",
        d:[1,2,3]
    };
    JSON.stringify(a, ["b","c"]);   //"{"b":42,"c":"42"}"
    JSON.stringify(a,null,3);
    // "{
    //      "b": 42,
    //      "c": "42",
    //      "d": [
    //          1, 
    //          2,
    //          3
    //        ]
    // }"
    JSON.stringify( a, null, "-----" );
    // "{
    // -----"b": 42,
    // -----"c": "42",
    // -----"d": [
    // ----------1,
    // ----------2,
    // ----------3
    // -----]
    // }
 ```  
 JSON.stringify(..)传递一个可选参数 replacer，它可以是数组或者函数，用来指定对象序列化过程中哪些属性应该被处理，哪些应该被排除。

 JSON.stringify(..)传递一个可选参数 space。space 为正整数时是指定每一级缩进的字符数，它还可以是字符串，此时最前面的十个字符被用于每一级的缩进。

 ToNumber
 toNumber(): true 转换为 1，false 转换为 0。undefined 转换为 NaN，null 转换为 0。

 ToBoolean
 * 假值（falsy value）
    undefined / null / false / +0、-0 和 NaN / ""
    布尔强制类型转换结果为 false
    document.all 为假值
 * 真值（truthy value）
    真值就是假值列表之外的值

显式强制类型转换
 * 字符串和数字之间的显式转换
 ```javascript
    var a = 42;
    var b = String(a); //转换为字符串
    var b = a.toString();
    var c = "3.14";
    var d = Number(c); //转换为数值
    var d = +c;
    - -"3.14"; //3.14
 ```
 * 日期显式转换为数字
 ```javascript
    var d = new Date();
    +d; //1408369986000,获得时间戳
    d.getTime();//获得指定时间的时间戳
    Date.now();//获得当前时间的时间戳
 ```
 注：构造函数没有参数时可以不带()。
 * ~ 运算符
 ~ 运算符（即字位操作“非”），执行 ToInt32 转换，然后执行字位操作“非”
 | 运算符（即字位操作“或”），仅执行 ToInt32 转换

 ~x 大致等同于 -(x+1)，例如 `~42; //-43`

 作用：强制转换真假值，-1为假值
 * 字位截除
 ~~ 截除数字值的小数部分
 * 显示解析数字字符串
 ```javascript
    var  a = "42";
    var  b = "42px";
    Number( a );//42
    parseInt( a );//42
    Number( b );//NaN
    parseInt( b ); 42
 ```
 解析允许字符串中含有非数字字符，解析按从左到右的顺序，如果遇到非数字字符就停止。而转换不允许出现非数字字符，否则会失败则返回 NaN。

 `parseInt(..) `第二个参数指定转换的基数，几进制
 思考：parseInt(1/0, 19); //18

 * 显式转换为布尔值
  Boolean(..) 和 !! 进行显式转换

 * 字符串和数字之间的隐式强制类型转换
 ```javascript
    var a = [1,2];
    var b = [3,4];
    a + b; //"1,23,4"
 ```

 * 布尔值到数字的隐式强制类型转换
   eg: `Number(true);//1`

 * 隐式强制类型转换为布尔值
   eg: (1)if(..)语句中的条件判断表达式
       (2)for(..;..;..)语句中的条件判断表达式
       (3)while(..)和do.while(..)循环中的条件判断表达式
       (4)? : 中的条件判断表达式
       (5)逻辑运算符 || (逻辑或) 和 && (逻辑与)左边的操作数
 
 * || 与 &&

 * 符号的强制类型转换
  ```javascript
    var s1 = Symbol("cool");
    String( s1 ); //"Symbol(cool)"
    var s2 = Symbol("not cool");
    s2+""; // TypeError
  ```
  `Symbol`类型只能是显式转换，不能隐式转换

 * 宽松相等和严格相等
 `==`和`===`的区别：`==`允许在相等比较中进行强制类型转换，而`===`不允许