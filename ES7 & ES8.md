ES7:

Array

includes() 数组中是否包含某个值
```javascript
Array.prototype.includes(value : any) : boolean
eg:['a', 'b', 'c'].includes('a') //true
```

运算符（**）

x ** y   //x^y, Math.pow(x, y)

ES8:

String

padStart() 从字符串左边开始填充 / padEnd() 从字符串右边开始填充
```javascript
eg: 'cat'.padStart(8, 'abc'); // => 'abcabcat'
    'cat'.padEnd(8, 'abc'); // => 'catabcab'
```