�������ͣ�undefined/null/boolean/number/string   typeof

��������(ֵ���Ƕ��󣩣�array/object/Date/RegExp/function         instanceof

array.length ���鳤��

array.toLocaleString()/array.toString()/array.valueOf()  ����תΪ�ַ���

array.join(",")  ʹ�ò�ͬ�ķָ����������ַ���

array.push("a");array.pop()���Ƴ����һ�; ջ����

array.push("a"); array.shift()���Ƴ���һ�; array.unshift() (��ӵ�һ��)���з���

array.reverse();array.sort();  �����򷽷� 

arraynew = array.concat(string,array2);  //����arraynew=array+string+array2

array.slice($index)  //�Ƴ���index��Ԫ�أ���Ӱ��array

array.splice($index, num) ɾ����$indexλ�ÿ�ʼ��num�������
array.splice($index,0,"A") �ڵ�$indexλ�ò��롰A��
array.splice($index,1,"A") ����$index���Ԫ���滻Ϊ"A"    Ӱ��ԭ���飬����ɾ��������

array.indexOf($index)/array.lastIndexOf($index) �������������е�λ��

array.every(function(item,index,array){return ture;})
array.some(function(item,index,array){return true;})
every()����ĺ����������ж���true,����ֵ��Ϊtrue;some()����ĺ���ֻҪ��һ��Ϊtrue������ֵ��Ϊtrue

array.forEach(function(item,index,array){return true;})
array.map(function(item,index,array){return true;})
array.filter(function(item,index,array){return true;})

array.reduce(function(prev, current, index, array){})/array.reduceRight(function(prev, current, index, array){})

ES6: array.from() �������������Ϳɱ�������תΪ����������
     array.of(a,b,c)  ����[a,b,c] ��һ��ֵתΪ����
     array.copyWithin(target��start��end) �޸ĵ�ǰ���飬��startλ�õ�endλ�õ����鸴�Ƶ�targetλ��
     array.find()/array.findIndex()  �ҳ���һ�����������������Ա/��Աλ��
     array.fill() ʹ�ö�ֵ�������
     array.entires()/keys()/values() ��������
     array.includes() �Ƿ����

RegExp��ʵ������
pattern.exec( string ) //���ذ�����һ��ƥ������Ϣ�����飬����null 

pattern.test( string ) //����true����false


Function 

call(�������е������� ��������Ĳ���)  call(this,array[0],array[1]...)
apply(�������е������� ����Ĳ�������) apply(this,arrays)   ���亯�����е�������
bind()  functionA.bind(a) functionA��������Ϊa�����е�functionA��thisָ��a
bind(����������) ������ ����һ���հ�����һ����������������Ҫ���������
�������ﻯ��ʹ��һ���հ�����һ��������������Ҫ���������
ES6:  ��ͷ����
        var f = (num1, num2) => num1 + num2
    ע�⣺ this��ָ����ʱ���ڵĶ��󣬲����Ե����캯��������ʹ��anguments���󣬲���ʹ��yield
    ����Ƕ��
    �����󶨣� foo::bar(...arguments) bar.apply(foo,arguments) 

String
string.length �ַ�������

string.charAt($index��/string.charCodeAt($index) ����ַ�/����ַ�����

string.concat(string1) ����string+string1 ��Ӱ��string����

string.slice(��ʼλ�ã�����λ��) ����Ϊ���������и������������ַ����ĳ���
string.substr(��ʼλ�ã��ַ�������) ����Ϊ��������һ�������������ַ����ĳ��ȣ��ڶ���תΪ��
string.substring(��ʼλ�ã�����λ��) ����Ϊ���������и���תΪ��

string.indexOf(substring)/string.lastIndexOf(substring) �����ַ��������ַ�����λ��

string.trim() ɾ��ǰ�ü���׺�����пո� ��Ӱ��ԭ���ַ���

string.toLowerCase()/string.toUpperCase() �ַ���Сд/��д��ת��

string.match(pattern)  �ַ���ģʽƥ�䣬��������[������ģʽƥ����ַ����� ��ģʽ�еĲ�����ƥ����ַ���]
string.search(pattern) �����ַ����е�һ��ƥ�����$index,û��ƥ�����-1
string.replace(�ַ����������� �ַ������ߺ���) �滻�ַ���
string.split() ���ַ����ָ������

string.localeCompare(string2) �Ƚϣ����ڷ���1�����ڷ���0��С�ڷ���-1

string.fromCharCode() �����ַ�����תΪ�ַ����ַ���

ES6: string.codePointAt() ����32λ��UTF-16�ַ�����ֵ
     string.fromCodePoint() ʶ�����0xFFFF����ֵ
     string.at() �����ַ���ָ��λ�õ��ַ�
     string.normalize()  ���ַ��Ĳ�ͬ��ʾ��ʽͳһΪͬ������ʽ
     string.includes()/startsWith()/endsWith() ���ز���ֵ�Ƿ����/���ַ���ͷ��/���ַ���β��
     string.repeat(N) ����һ�����ַ�������ʾ��ԭ�ַ����ظ�N��
     string.padStart(��С���ȣ�������ȫ���ַ���)/padEnd() �ַ�����ȫ
     ģ���ַ��� ��`�������ţ���ʶ������ʹ��${a}

Global
URI encodeURI()/encodeURIComponent()
    decodeURI()/decodeURIComponent()

eval() �����ɼ���ĳ���ַ�������ִ�����еĵ� JavaScript ����

Math.ceil() ��һ�� Math.round() �������뷨  Math.floor() ȥβ��

����
�������ԣ�Configurable Enumberable  Writable Value 

����
Object.defineProperties()  ��������
Object.getOwnPropertyDescriptor() ��ȡ����
Object.getPrototypeOf() ��ȡ�����ԭ��
Object.hasOwnProperty() ��������Ǵ���ԭ�ͻ���ʵ����
Object.keys() ȡ�ö��������еĿ�ö�ٵ�ʵ������
Object.getOwnPropertyNames() ��ȡ���������е�ʵ������
Object.create(�����¶���ԭ�͵Ķ����¶�����������ԵĶ���) ԭ�ͼ̳�
���۸Ķ���  Object.preventExtensions() ������չ����
           Object.seal() �ܷ����
           Object.freeze() �������

ES6: Object.is() �����Ƚ�����ֵ�Ƿ����
     Object.assign(target, source1,source2) ��source�����п�ö�ٶ��󶼸��Ƶ�Ŀ�����

����
�ݹ麯��
function factorial(num){
    if(num <= 1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}
�հ�
һ������������һ�������������еı���

BOM
window.resizeTo() ������������¿�Ⱥ͸߶�
window.resizeBy() �����´��ں�ԭ���ڵĿ�Ȳ�͸߶Ȳ�

var win = window.open(url,target);�򿪴���
win.close();�رմ���

��ʱ����
var timeout = setTimeout(function(){},1000);
clearTimeout( timeout );
var intervalId = setInterval(function(){},1000);
clearInterval( intervalId );

ϵͳ�Ի���
alert(),confirm(),promt()

location.replace(url) ���ܺ���
location.reload() ���¼��أ����ܴӻ����м��أ�
location.reload(true) ���¼��أ��ӷ��������¼��أ�

history.go();
history.back();
history.forward();

DOM
someNode.insertBefore()
someNode.appendChild()
someNode.replaceChild()
someNode.cloneNode()
someNode.normalize()   �淶���ı��ڵ�
someNode.splitText() �ָ��ı��ڵ�

document.querySelector() ѡ��һ��cssѡ���
document.querySelectorAll() ����List
document.matchesSelector() ����true����false

document.readyState 'loading'��'loaded'��'interactive'��'complete'
someNode.innerHTML()
someNode.insertAdjacentHTML() ����λ�ú�Ҫ�����HTML�ı� 
someNode.scrollIntoView()
someNode.scrollIntoViewIfNeeded(alignCenter)
someNode.scrollByLines(lineCount) ��Ԫ�ص����ݹ���ָ���и�
someNode.scrollByPages(pageCount)
document.documentElement.contains()
document.documentElement.compareDocumentPosition()


�¼���
�¼����� -> Ŀ�� -> �¼�ð��

someNode.addEventListener/removeEventListener(�¼��� �¼��������� ����ֵ) ����ֵΪtrue �ڲ���׶ε����¼�������� ����ֵΪfalse ��ð�ݽ׶ε����¼��������

addHandler/removeHandler(element, �¼�, �¼�������)

someNode.stopPropagation() ֹͣð��

HTML5�¼��� contextmenu(�Ҽ��˵�) beforeunload(ж��ҳ��֮ǰ�����¼�) DOMContentLoaded(���DOM����ֱ�Ӵ���)  readystatechange(uninitializes, loading, loaded, interactive, complete)   hashchange(URL�С�#�����ַ������仯ʱ֪ͨ������Ա)

�ƶ��豸:  orientationchange�¼���90��0��-90��MozOrientation/deviceOrientation (�豸����ı䴥��)
devicemotion�¼� ���豸�Ƿ����䣩

�����¼��� touchstart/touchmove/touchend/touchcancel/toughes/tartgetTouchs/changeTouches

�����¼�
gesturestart/gesturechange/gestureend


XDM ���ĵ���Ϣ����
postMessage(һ����Ϣ����Ϣ�����ĸ���)

�Ϸ��¼�
1) dragstart  2) drag  3) dragend  4) dragenter  5) dragover  6) dragleave/drop
���϶����� draggable

JSON�﷨
1.��ֵ(JSON����ַ�������Ϊ˫����)
2.����
3.����
JSON.stringify()�����JSON�ַ����������ո��ַ�������
JSON.stringify(JSON���� �������� �Ƿ�������/�������10���ַ�)
JSON.parse()��JSON�ַ���תΪ����
JSON.parse(string, function(key, value){})
�����Ͽ�����toJSON()����

Ajax
Ajax�ĺ�����XMLHttpRequest����
xhr.open("get",url, false)
xhr.send(data/null)
���������أ� responseText,responseXML,
status:200 �ɹ� 304 ������Դδ���޸ģ�����ʹ�û���
statusText��
xhr.readyState 
0:δ��ʼ������δ����open()����
1�������� �Ѿ�����open() δ����send()
2�����ͣ� �Ѿ�����send(),����δ�յ���Ӧ
3�����գ� ���յ�������Ӧ����
4����ɣ�����ȫ����Ӧ����

xhr.abort() ȡ���첽����

xhr.setRequestHeader() �����Զ��������ͷ����Ϣ
Accept/Accept-Charset/Accept-Encoding/Accept-Language/Connection/Cookie/Host/Referer/User-Agent
xhr.getResponseHeader()/xhr.getAllResponeHeaders()
get(������Դ��)/post
FormData()������ȷ����XHR����������ͷ��
xhr.ontimeout = function(){} ��ʱ�趨

Progress Events: loadstart/progress/error/abort/load/loadend
cors����urlΪ����·��������ʹ��setRequestHeader()�����Զ���ͷ�������ܷ��ͽ���cookie������getAllResponseHeaders()����Ϊ��
ͼ��Ping:������ͷ�������ĵ���ͨ��
JSONP: �ص����������ݣ�˫��ͨ��
Comet: ���������ͣ�����ѯ��һ�η������ݣ���������������������������ݣ�
SSE: �������˵ķ����¼� new EventSource()
Web Sockets:ȫ˫����˫��ͨ�š��Զ���Э���ڿͻ��˺ͷ������˷��ͷǳ�����������  ws://  wss://

����Ӧ�úͿͻ��˴洢
���߼�⣺navigator.onLine = false ���� window.ononline/onoffline
Ӧ�û��棺<html manifest = "/offline.appcache"></html>
        update() - checking() - cached()/updateready() - swapCache()
���ݴ洢��cookie 1.���������cookie������cookie��С��4KB��
                2.cookie = ����+ֵ+��+·��+ʧЧʱ��+��ȫ��־ 
                eg: Set-Cookie: name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; domain = .wrox.com; secure
                3. document.cookie CookieUtil.get()/set()
Web �洢���ƣ�sessionStorage
             ֻ����ض��Ի������ݣ����Կ�Խҳ��ˢ�¶����ڣ�ֻҪ��������رգ�
             globalStorage
             ��Ե�����Ĵ洢�ռ�
             localStorage = globalStorage[location.host]
             ���ݱ�����ͨ��jsɾ������������������
            Storage.clear()/getItem()/key(index)/removeItem(name)/setItem(name, value)


http���ģ� ������
            ������+����ͷ��+����+��������
            �����У����󷽷���GET/POST/HEAD/PUT/DELETE/CONNECT/OPTIONS/TRACE��+' '+ URL+' ' + Э��汾
                GET�����������Ͷ�Ӧֵ������URL
            ����ͷ�����ؼ��֣�ֵ����ͨ��ͷ������ͷ����Ӧͷ��ʵ��ͷ��
                eg:User-Agent:������������������
                Accept:�ͻ��˿�ʶ������������б�
                Accept-Charset:
                Accept- Encoding:
                Accept-Language:
                Authorization:
                From:
                Host:�����������
                If-Range��
                Referer��
                Range��
                Connection:
                Origin:
                ͨ��ͷ��Cache-Control(no-cache,no-store,max-age)
                        Date(��Ϣ����ʱ��)
                        Pragma(ʵ���ض���ָ�eg:Pragma:no-cache)

             ���� 
             ���һ������ͷ֮����һ�����У����ͻس����ͻ��з���֪ͨ���������²���������ͷ��
             ��������
             �������ݲ���GET������ʹ�ã�������POST������ʹ�á�POST������������Ҫ�ͻ���д���ĳ��ϡ�������������ص��ʹ�õ�����ͷ��Content-Type��Content-Length

          ��Ӧ����
            ״̬��+��Ϣ��ͷ+��Ӧ����
            ״̬�У�HTTPЭ��汾+��Ӧ״̬+״̬������ı�����
            ״̬�룺״̬��������λ������ɣ���һ�����ֶ�������Ӧ������������ֿ���ȡֵ��
                1xx��ָʾ��Ϣ--��ʾ�����ѽ��գ���������
                2xx���ɹ�--��ʾ�����ѱ��ɹ����ա���⡢���ܡ�
                3xx���ض���--Ҫ������������и���һ���Ĳ�����
                4xx���ͻ��˴���--�������﷨����������޷�ʵ�֡�
                5xx���������˴���--������δ��ʵ�ֺϷ�������
                ����״̬���롢״̬������˵�����¡�

                200 OK���ͻ�������ɹ���
                300 ������ѡ�� ������󣬷�������ִ�ж��ֲ����� �������ɸ��������� (user agent) ѡ��һ����������ṩ�����б�������ѡ�� 
                301 �������ƶ��� �������ҳ�������ƶ�����λ�á� ���������ش���Ӧ���� GET �� HEAD �������Ӧ��ʱ�����Զ���������ת����λ�á�
                302 ����ʱ�ƶ��� ������Ŀǰ�Ӳ�ͬλ�õ���ҳ��Ӧ���󣬵�������Ӧ����ʹ��ԭ��λ���������Ժ������
                303 ���鿴����λ�ã� ������Ӧ���Բ�ͬ��λ��ʹ�õ����� GET ������������Ӧʱ�����������ش˴��롣
                304 ��δ�޸ģ� �Դ��ϴ�������������ҳδ�޸Ĺ��� ���������ش���Ӧʱ�����᷵����ҳ���ݡ� 
                305 ��ʹ�ô��� ������ֻ��ʹ�ô�������������ҳ�� ������������ش���Ӧ������ʾ������Ӧʹ�ô��� 
                307 ����ʱ�ض��� ������Ŀǰ�Ӳ�ͬλ�õ���ҳ��Ӧ���󣬵�������Ӧ����ʹ��ԭ��λ���������Ժ������ 
                400 Bad Request���ͻ����������﷨���󣬲��ܱ�����������⡣
                401 Unauthorized������δ����Ȩ�����״̬��������WWW-Authenticate��ͷ��һ��ʹ�á�
                403 Forbidden���������յ����󣬵��Ǿܾ��ṩ����
                404 Not Found��������Դ�����ڣ��ٸ����ӣ������˴����URL��
                500 Internal Server Error����������������Ԥ�ڵĴ���
                503 Server Unavailable����������ǰ���ܴ���ͻ��˵�����һ��ʱ�����ָܻ��������ٸ����ӣ�HTTP/1.1 200 OK��CRLF����
            ��Ϣ��ͷ����ͨ��ͷ������ͷ����Ӧͷ��ʵ��ͷ��
                ͨ��ͷ��Cache-Control��public,private,no-cache��
                        Date(��Ϣ����ʱ��)
                        Pragma(ʵ���ض���ָ�eg:Pragma:no-cache)

CommonJS��ͬ������ģ�� 
require����
ģ����д��
{ id: '...',
  exports: { ... },
  loaded: true,
  ...}
  
AMD�����첽��ʽ����ģ�飬ģ��ļ��ز�Ӱ���������������С������첽ָ���ǲ������������������dom������css��Ⱦ�ȣ����������ڲ���ͬ���ģ�������ģ�������ִ�лص����� 
require([module], callback);
ģ����д��define(id?, dependencies?, factory);

CMD�Ƴ������ͽ����ӳ�ִ��
ģ����д��require
define(function(require, exports, module) {
  var a = require('./a');
  a.doSomething();
  var b = require('./b');
  b.doSomething();
})

ES6 import/exportʵ��ģ����������������import����������������ģ���ṩ�Ĺ��ܣ�export�������ڹ涨ģ��Ķ���ӿڡ�

* �ӳ���������
 <ul>
    <li>try-catch����catch��</li>
    <li>with</li>
 </ul>