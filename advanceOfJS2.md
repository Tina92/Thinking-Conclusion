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

