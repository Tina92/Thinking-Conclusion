问题：超链接访问过后hover 样式就不出现的问题 
解决方法：改变CSS 属性的排列顺序: L-V-H-A，强制重写
css 图形与排版：clip-path  shape-outside
CSS命名方案：BEM [块（block）、元素（element）、修饰符（modifier）]
@keyframe  
不能实现突变的状态变化,eg:display:none -> display:block不行
会增添/覆盖属性
动画性能优化（尤其在移动端）
eg:触发重新布局的属性有： width, height, margin, padding, border, display, top, right, bottom ,left, position, float, overflow等。应该尽量规避使用。
不会出发重新布局的属性有：transform(其中的translate, rotate, scale), color, background等。应该尽量用这些去取代