尾调用（最后一部调用其他函数，只保留内层函数的调用帧，节省内存）
尾递归（最后一步调用自身）

对象属性的遍历
```javascript
for...in...
Object.keys(obj)
Object.getOwnPropertyNames(obj)
Object.getOwnPropertySymbols(obj)
Reflect.ownKeys(obj)
Reflect.enumerate(obj)
```

Symbol(原始数据类型，表示独一无二的值)
使用同一的Symbol值，用Symbol.for()

Proxy对象
```javascript
var proxy = new Proxy(target/拦截目标,handler/拦截行为)
```
Reflect对象


数据结构（Array, Object, Map, Set ）
Set 类似于数组，但是成员的值都是唯一的，没有重复 WeakSet不可遍历
```javascript
var s = new Set();
s.add(value)/s.delete(value)/s.has(value)/s.clear()/s.size
```
遍历：s.keys()/s.values()/s.entires()/s.forEach()

Map 类似于对象，但是键名不仅限于字符串 WeakMap不可遍历/不可清空
```javascript
let m = new Map()
m.size/m.set(key,value)/m.get(key)/m.has(key)/m.delete(key)/m.clear()
```
遍历：m.keys()/m.values()/m.entires()/m.forEach()

新增遍历方法： for...of(读取键值)   【 for...in(读取键名)  for循环   forEach  for...in】

Iterator对象 next()/return()/throw()

Generator函数
```javascript
function* generator(){
    yield ...
    return ...
}
```
for...of 循环可以遍历Generator函数

yeild* 语句可以在Generator函数里调用Generator函数

Promise对象
1.Promise对象的状态不受外界影响，promise的状态有：Pending/Resolved/Rejected
2.状态一旦改变就不会再变，promise对象状态改变 1.Pending -> Resolved 2.Pending -> Rejected
Promise一旦建立了就 无法取消，无法得知进行到哪个阶段，如果事件不断发生，使用stream 模式更好
```javascript
Promise.prototype.then()
Promise.then(Resolved).catch(Rejected)
Promise.all()/Promise.race()/Promise.resolve()/Promise.reject()
Promise.done()[捕捉任何错误]/Promise.finally()[一定会执行]
```
应用： 加载图片/Ajax请求

异步编程：回调函数/事件监听/发布订阅/Promise对象/async函数

c语言 传值调用  Haskell/Thunk函数 传名调用 
javascript 是传值调用，它的Thunk函数是将多函数替换为单函数，只接受回调函数作为参数，用于Generator函数的自动流程管理
co模块 自动执行generator函数，返回一个promise对象，支持并发的异步
async函数 async function fn(){await ...}
async函数 有内置执行器/自动执行/语义化/返回值是promise对象

Class 
```javascript
class point{
    constructor(){
        ...
    }
    toString(){
        ...
    }
    toValue(){...}
    static classMethod(){return 'hello';}
}
class line extends point{super..}//继承，用extends进行继承,子类加入super关键字
let p = new Point();
p.toString();
line._proto_ === point //true
```
static关键字：静态方法，直接通过类调用，不会被实例继承
静态属性：point.prop=1，class内部没有静态属性
类里面的所有对象都是不可枚取的,类不存在变量提升

修饰器
```javascript
function decorator(target){}
@decorator
class A{}  修改类的行为
修改类的属性
function decorator(target,name,descriptor){}
class A{
    @decorator
    classMethod(){}
}
```
修饰器只能用于类和类的方法，因为存在函数提升

Module
export和import
```javascript
export{a as b} as 关键字重命名
import {area} from './circle'
module circle form './circle' //整体输入模块的作用
export default function crc32(){} 默认输出的函数
import crc32 from 'crc32';
export function crc32(){}
import {crc32} from 'crc32';
```
CommonJS：一旦输出一个值，模块内部的变化不影响这个值，ES6的动态引用

严格模式：
<ul>
<li>变量必须在声明后使用</li>
<li>函数的参数不能有同名属性</li>
<li>不能使用with语句</li>
<li>不能对只读属性赋值</li>
<li>不能使用前缀0表示八进制</li>
<li>不能删除不可删除的属性</li>
<li>不能删除变量，只能删除属性（delete）</li>
<li>eval不会在其外层作用域引入变量</li>
<li>eval和arguments不能被重新赋值</li>
<li>arguments不会自动反映函数参数的变化</li>
<li>不能使用argument.callee</li>
<li>不能使用argument.caller</li>
<li>禁止this指向全局对象</li>
<li>不能使用fn.caller和fn.arguments获取函数调用的堆栈</li>
<li>增加了保留字（比如protected,static和interface）</li>
</ul>