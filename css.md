>问题：超链接访问过后hover 样式就不出现的问题 

解决方法：改变CSS 属性的排列顺序: L-V-H-A，强制重写
css 图形与排版：clip-path  shape-outside
CSS命名方案：BEM [块（block）、元素（element）、修饰符（modifier）]
@keyframe  
不能实现突变的状态变化,eg:display:none -> display:block不行
会增添/覆盖属性
动画性能优化（尤其在移动端）
eg:触发重新布局的属性有： width, height, margin, padding, border, display, top, right, bottom ,left, position, float, overflow等。应该尽量规避使用。
不会出发重新布局的属性有：transform(其中的translate, rotate, scale), color, background等。应该尽量用这些去取代

>纯 Css 的 tooltips[css库：Hint.css]

方法： 在 Html 代码的 data 属性中提供 tooltip 文本，data-tooltip = '...'
      在 CSS 中添加 .tooltip::after{content:attr(data-tooltip);}


>PostCss : 后处理器

工作原理： <img src='./postcss.png' width='200' />
<p>SASS等工具：源代码 -> 生产环境 CSS</p>
<p>PostCSS：源代码 -> 标准 CSS -> 生产环境 CSS</p>
eg:
```
// src/index.css 中的源码
* {
    transition: all .1s;
}
// 转换过后的代码 index.css
* {
    -webkit-transition: all .1s;
        transition: all .1s;
}
```
