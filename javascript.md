基本类型：undefined/null/boolean/number/string   typeof

引用类型(值都是对象）：array/object/Date/RegExp/function         instanceof

array.length 数组长度

array.toLocaleString()/array.toString()/array.valueOf()  数组转为字符串

array.join(",")  使用不同的分隔符来构建字符串

array.push("a");array.pop()（移除最后一项）; 栈方法

array.push("a"); array.shift()（移除第一项）; array.unshift() (添加第一项)队列方法

array.reverse();array.sort();  重排序方法 

arraynew = array.concat(string,array2);  //返回arraynew=array+string+array2

array.slice($index)  //移除第index个元素，不影响array

array.splice($index, num) 删除第$index位置开始的num项的项数
array.splice($index,0,"A") 在第$index位置插入“A”
array.splice($index,1,"A") 将第$index项的元素替换为"A"    影响原数组，返回删除的数组

array.indexOf($index)/array.lastIndexOf($index) 查找项在数组中的位置

array.every(function(item,index,array){return ture;})
array.some(function(item,index,array){return true;})
every()传入的函数必须所有都是true,返回值才为true;some()传入的函数只要有一个为true，返回值即为true

array.forEach(function(item,index,array){return true;})
array.map(function(item,index,array){return true;})
array.filter(function(item,index,array){return true;})

array.reduce(function(prev, current, index, array){})/array.reduceRight(function(prev, current, index, array){})

ES6: array.from() 将类似数组对象和可遍历对象转为真正的数组
     array.of(a,b,c)  返回[a,b,c] 将一组值转为数组
     array.copyWithin(target，start，end) 修改当前数组，将start位置到end位置的数组复制到target位置
     array.find()/array.findIndex()  找出第一个符合条件的数组成员/成员位置
     array.fill() 使用定值填充数组
     array.entires()/keys()/values() 遍历数组
     array.includes() 是否包含

RegExp的实例方法
pattern.exec( string ) //返回包含第一个匹配项信息的数组，或者null 

pattern.test( string ) //返回true或者false


Function 

call(函数运行的作用域， 单个传入的参数)  call(this,array[0],array[1]...)
apply(函数运行的作用域， 传入的参数数组) apply(this,arrays)   扩充函数运行的作用域
bind()  functionA.bind(a) functionA的作用域为a，其中的functionA的this指向a
bind(函数，环境) 函数绑定 （用一个闭包返回一个函数，函数不需要传入参数）
函数柯里化（使用一个闭包返回一个函数，函数需要传入参数）
ES6:  箭头函数
        var f = (num1, num2) => num1 + num2
    注意： this是指定义时所在的对象，不可以当构造函数，不能使用anguments对象，不能使用yield
    可以嵌套
    函数绑定： foo::bar(...arguments) bar.apply(foo,arguments) 

String
string.length 字符串长度

string.charAt($index）/string.charCodeAt($index) 输出字符/输出字符编码

string.concat(string1) 返回string+string1 不影响string本身

string.slice(开始位置，结束位置) 参数为负数，所有负参数都加上字符串的长度
string.substr(开始位置，字符串长度) 参数为负数，第一个负参数加上字符串的长度，第二个转为零
string.substring(开始位置，结束位置) 参数为负数，所有负数转为零

string.indexOf(substring)/string.lastIndexOf(substring) 查找字符串中子字符串的位置

string.trim() 删除前置及后缀的所有空格 不影响原有字符串

string.toLowerCase()/string.toUpperCase() 字符串小写/大写的转换

string.match(pattern)  字符串模式匹配，返回数组[与整个模式匹配的字符串， 与模式中的捕获组匹配的字符串]
string.search(pattern) 返回字符串中第一个匹配项的$index,没有匹配项返回-1
string.replace(字符串或者正则， 字符串或者函数) 替换字符串
string.split() 将字符串分割成数组

string.localeCompare(string2) 比较，大于返回1，等于返回0，小于返回-1

string.fromCharCode() 接收字符编码转为字符或字符串

ES6: string.codePointAt() 返回32位的UTF-16字符的码值
     string.fromCodePoint() 识别大于0xFFFF的码值
     string.at() 返回字符串指定位置的字符
     string.normalize()  将字符的不同表示方式统一为同样的形式
     string.includes()/startsWith()/endsWith() 返回布尔值是否包含/在字符串头部/在字符串尾部
     string.repeat(N) 返回一个新字符串，表示将原字符串重复N次
     string.padStart(最小长度，用来补全的字符串)/padEnd() 字符串补全
     模板字符串 用`（反引号）标识，变量使用${a}

Global
URI encodeURI()/encodeURIComponent()
    decodeURI()/decodeURIComponent()

eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码

Math.ceil() 进一法 Math.round() 四舍五入法  Math.floor() 去尾法

对象
数据属性：Configurable Enumberable  Writable Value 

方法
Object.defineProperties()  定义属性
Object.getOwnPropertyDescriptor() 读取属性
Object.getPrototypeOf() 获取对象的原型
Object.hasOwnProperty() 检测属性是存在原型还是实例中
Object.keys() 取得对象上所有的可枚举的实例属性
Object.getOwnPropertyNames() 获取对象上所有的实例属性
Object.create(用作新对象原型的对象，新对象定义额外属性的对象) 原型继承
防篡改对象  Object.preventExtensions() 不可拓展对象
           Object.seal() 密封对象
           Object.freeze() 冻结对象

ES6: Object.is() 用来比较两个值是否相等
     Object.assign(target, source1,source2) 将source的所有可枚举对象都复制到目标对象

函数
递归函数
function factorial(num){
    if(num <= 1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}
闭包
一个函数访问另一个函数作用域中的变量

BOM
window.resizeTo() 接收浏览器的新宽度和高度
window.resizeBy() 接收新窗口和原窗口的宽度差和高度差

var win = window.open(url,target);打开窗口
win.close();关闭窗口

延时函数
var timeout = setTimeout(function(){},1000);
clearTimeout( timeout );
var intervalId = setInterval(function(){},1000);
clearInterval( intervalId );

系统对话框
alert(),confirm(),promt()

location.replace(url) 不能后退
location.reload() 重新加载（可能从缓存中加载）
location.reload(true) 重新加载（从服务器重新加载）

history.go();
history.back();
history.forward();

DOM
someNode.insertBefore()
someNode.appendChild()
someNode.replaceChild()
someNode.cloneNode()
someNode.normalize()   规范化文本节点
someNode.splitText() 分割文本节点

document.querySelector() 选择一个css选择符
document.querySelectorAll() 返回List
document.matchesSelector() 返回true或者false

document.readyState 'loading'或'loaded'或'interactive'或'complete'
someNode.innerHTML()
someNode.insertAdjacentHTML() 插入位置和要插入的HTML文本 
someNode.scrollIntoView()
someNode.scrollIntoViewIfNeeded(alignCenter)
someNode.scrollByLines(lineCount) 将元素的内容滚动指定行高
someNode.scrollByPages(pageCount)
document.documentElement.contains()
document.documentElement.compareDocumentPosition()


事件流
事件捕获 -> 目标 -> 事件冒泡

someNode.addEventListener/removeEventListener(事件， 事件处理函数， 布尔值) 布尔值为true 在捕获阶段调用事件处理程序， 布尔值为false 在冒泡阶段调用事件处理程序

addHandler/removeHandler(element, 事件, 事件处理函数)

someNode.stopPropagation() 停止冒泡

HTML5事件： contextmenu(右键菜单) beforeunload(卸载页面之前控制事件) DOMContentLoaded(完成DOM树后直接触发)  readystatechange(uninitializes, loading, loaded, interactive, complete)   hashchange(URL中“#”后字符发生变化时通知开发人员)

移动设备:  orientationchange事件（90，0，-90）MozOrientation/deviceOrientation (设备方向改变触发)
devicemotion事件 （设备是否下落）

触摸事件： touchstart/touchmove/touchend/touchcancel/toughes/tartgetTouchs/changeTouches

手势事件
gesturestart/gesturechange/gestureend


XDM 跨文档消息传送
postMessage(一条消息，消息来自哪个域)

拖放事件
1) dragstart  2) drag  3) dragend  4) dragenter  5) dragover  6) dragleave/drop
可拖动属性 draggable

JSON语法
1.简单值(JSON里的字符串必须为双引号)
2.对象
3.数组
JSON.stringify()输出的JSON字符串不包含空格字符和缩进
JSON.stringify(JSON对象， 过滤器， 是否含有缩进/最大缩进10个字符)
JSON.parse()将JSON字符串转为对象
JSON.parse(string, function(key, value){})
对象上可以有toJSON()方法

Ajax
Ajax的核心是XMLHttpRequest对象
xhr.open("get",url, false)
xhr.send(data/null)
服务器返回： responseText,responseXML,
status:200 成功 304 请求资源未被修改，可以使用缓存
statusText。
xhr.readyState 
0:未初始化；尚未调用open()方法
1：启动； 已经调用open() 未调用send()
2：发送； 已经调用send(),但尚未收到响应
3：接收； 接收到部分响应数据
4：完成；接收全部响应数据

xhr.abort() 取消异步请求

xhr.setRequestHeader() 设置自定义的请求头部信息
Accept/Accept-Charset/Accept-Encoding/Accept-Language/Connection/Cookie/Host/Referer/User-Agent
xhr.getResponseHeader()/xhr.getAllResponeHeaders()
get(消耗资源少)/post
FormData()不用明确设置XHR对象上请求头部
xhr.ontimeout = function(){} 超时设定

Progress Events: loadstart/progress/error/abort/load/loadend
cors跨域：url为绝对路径，不能使用setRequestHeader()设置自定义头部，不能发送接收cookie，调用getAllResponseHeaders()返回为空
图像Ping:浏览器和服务器间的单向通信
JSONP: 回调函数和数据，双向通信
Comet: 服务器推送，长轮询（一次返回数据）和流（周期性向浏览器发送数据）
SSE: 服务器端的发送事件 new EventSource()
Web Sockets:全双工，双向通信。自定义协议在客户端和服务器端发送非常少量的数据  ws://  wss://

离线应用和客户端存储
离线检测：navigator.onLine = false 离线 window.ononline/onoffline
应用缓存：<html manifest = "/offline.appcache"></html>
        update() - checking() - cached()/updateready() - swapCache()
数据存储：cookie 1.浏览器限制cookie条数和cookie大小（4KB）
                2.cookie = 名称+值+域+路径+失效时间+安全标志 
                eg: Set-Cookie: name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; domain = .wrox.com; secure
                3. document.cookie CookieUtil.get()/set()
Web 存储机制：sessionStorage
             只针对特定对话的数据，可以跨越页面刷新而存在（只要浏览器不关闭）
             globalStorage
             针对的是域的存储空间
             localStorage = globalStorage[location.host]
             数据保存至通过js删除或者清除浏览器缓存
            Storage.clear()/getItem()/key(index)/removeItem(name)/setItem(name, value)


http报文： 请求报文
            请求行+请求头部+空行+请求数据
            请求行：请求方法（GET/POST/HEAD/PUT/DELETE/CONNECT/OPTIONS/TRACE）+' '+ URL+' ' + 协议版本
                GET方法：参数和对应值附加在URL
            请求头部（关键字：值）【通用头，请求头，响应头，实体头】
                eg:User-Agent:产生请求的浏览器类型
                Accept:客户端可识别的内容类型列表
                Accept-Charset:
                Accept- Encoding:
                Accept-Language:
                Authorization:
                From:
                Host:请求的主机名
                If-Range：
                Referer：
                Range：
                Connection:
                Origin:
                通用头：Cache-Control(no-cache,no-store,max-age)
                        Date(消息发送时间)
                        Pragma(实现特定的指令，eg:Pragma:no-cache)

             空行 
             最后一个请求头之后是一个空行，发送回车符和换行符，通知服务器以下不再有请求头。
             请求数据
             请求数据不在GET方法中使用，而是在POST方法中使用。POST方法适用于需要客户填写表单的场合。与请求数据相关的最常使用的请求头是Content-Type和Content-Length

          响应报文
            状态行+消息报头+响应正文
            状态行：HTTP协议版本+响应状态+状态代码的文本描述
            状态码：状态代码由三位数字组成，第一个数字定义了响应的类别，且有五种可能取值。
                1xx：指示信息--表示请求已接收，继续处理。
                2xx：成功--表示请求已被成功接收、理解、接受。
                3xx：重定向--要完成请求必须进行更进一步的操作。
                4xx：客户端错误--请求有语法错误或请求无法实现。
                5xx：服务器端错误--服务器未能实现合法的请求。
                常见状态代码、状态描述的说明如下。

                200 OK：客户端请求成功。
                300 （多种选择） 针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择。 
                301 （永久移动） 请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。
                302 （临时移动） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。
                303 （查看其他位置） 请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码。
                304 （未修改） 自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。 
                305 （使用代理） 请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理。 
                307 （临时重定向） 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。 
                400 Bad Request：客户端请求有语法错误，不能被服务器所理解。
                401 Unauthorized：请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用。
                403 Forbidden：服务器收到请求，但是拒绝提供服务。
                404 Not Found：请求资源不存在，举个例子：输入了错误的URL。
                500 Internal Server Error：服务器发生不可预期的错误。
                503 Server Unavailable：服务器当前不能处理客户端的请求，一段时间后可能恢复正常，举个例子：HTTP/1.1 200 OK（CRLF）。
            消息报头：【通用头，请求头，响应头，实体头】
                通用头：Cache-Control（public,private,no-cache）
                        Date(消息发送时间)
                        Pragma(实现特定的指令，eg:Pragma:no-cache)

CommonJS是同步加载模块 
require命令
模块书写：
{ id: '...',
  exports: { ... },
  loaded: true,
  ...}
  
AMD采用异步方式加载模块，模块的加载不影响它后面语句的运行。这里异步指的是不堵塞浏览器其他任务（dom构建，css渲染等），而加载内部是同步的（加载完模块后立即执行回调）。 
require([module], callback);
模块书写：define(id?, dependencies?, factory);

CMD推崇依赖就近，延迟执行
模块书写：require
define(function(require, exports, module) {
  var a = require('./a');
  a.doSomething();
  var b = require('./b');
  b.doSomething();
})

ES6 import/export实现模块的输入输出。其中import命令用于输入其他模块提供的功能，export命令用于规定模块的对外接口。

* 延长作用域链
 <ul>
    <li>try-catch语句的catch块</li>
    <li>with</li>
 </ul>