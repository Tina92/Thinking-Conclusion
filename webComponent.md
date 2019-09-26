# webComponent

## custom elements
 自定义元素必须包含连字符，eg: `<user-card></user-card>`
* Autonomous custom elements 是独立的元素，它不继承其他内建的HTML元素。你可以直接把它们写成HTML标签的形式，来在页面上使用。例如 `<popup-info>`，或者是document.createElement("popup-info")这样。
* Customized built-in elements 继承自基本的HTML元素。在创建时，你必须指定所需扩展的元素（`customElements.define('word-count', WordCount, { extends: 'p' });`），使用时，需要先写出基本的元素标签，并通过 is 属性指定custom element的名称。例如`<p is="word-count">`, 或者 document.createElement("p", { is: "word-count" })。
### customElements.define()
使用浏览器原生的customElements.define()方法，告诉浏览器自定义元素与这个类关联

CustomElementRegistry.define() 方法用来注册一个 custom element，该方法接受以下参数：

* 表示所创建的元素名称的符合 DOMString 标准的字符串。注意custom element 的名称不能是单个单词，且其中必须要有短横线。
* 用于定义元素行为的类 。
* 可选参数，一个包含 extends 属性的配置对象，是可选参数。它指定了所创建的元素继承自哪个内置元素，可以继承任何内置元素。
```javascript
class UserCard extends HTMLElement {
  constructor() {
    super();

    var image = document.createElement('img');
    image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
    image.classList.add('image');

    var container = document.createElement('div');
    container.classList.add('container');

    var name = document.createElement('p');
    name.classList.add('name');
    name.innerText = 'User Name';

    var email = document.createElement('p');
    email.classList.add('email');
    email.innerText = 'yourmail@some-email.com';

    var button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Follow';

    container.append(name, email, button);
    this.append(image, container);
  }
}
window.customElements.define('user-card', UserCard);
```
## shawdow Dom
用户无法操控的DOM结构，保证`<template>`的稳定

自定义元素 `var shadow = this.attachShadow( { mode: 'closed' } );`来开启

需要了解的 Shadow DOM相关技术：
* Shadow host： 一个常规 DOM节点，Shadow DOM会被添加到这个节点上。
* Shadow tree：Shadow DOM内部的DOM树。
* Shadow boundary：Shadow DOM结束的地方，也是常规 DOM开始的地方。
* Shadow root: Shadow tree的根节点。

## HTML templates
### `<template>`
避免在js里写一节的DOM结构

样式：组件的样式应该与代码封装在一起，只对自定义元素生效，不影响外部的全局样式

`<template>`样式里面的:host伪类，指代自定义元素本身

<p>自定义元素的传参</p>

```javascript
    var templateElem = document.getElementById('userCardTemplate');
    var content = templateElem.content.cloneNode(true);
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.container>.name').innerText = this.getAttribute('name');
    content.querySelector('.container>.email').innerText = this.getAttribute('email');
    this.appendChild(content);
```
eg: 
```javascript

class UserCard extends HTMLElement {
  constructor() {
    super();
    var templateElem = document.getElementById('userCardTemplate');
    var content = templateElem.content.cloneNode(true);
    this.appendChild(content);
  }
}
window.customElements.define('user-card', UserCard);
```
```html
    <user-card name='123'></user-card>
    <template id="userCardTemplate">
        <style>
            :host{}
            .image{}
        </style>
        <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" class="image">
        <div class="container">
            <p class="name">User Name</p>
            <p class="email">yourmail@some-email.com</p>
            <button class="button">Follow</button>
        </div>
    </template>
```
## 生命周期回调函数
* connectedCallback：当 custom element首次被插入文档DOM时，被调用。
* disconnectedCallback：当 custom element从文档DOM中删除时，被调用。
* adoptedCallback：当 custom element被移动到新的文档时，被调用。
* attributeChangedCallback: 当 custom element增加、删除、修改自身属性时，被调用。
