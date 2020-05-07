## 元素对话框`<dialog>`
`<dialog open>`显示
```html
 <dialog>
  <h2>title</h2>
  <p>content</p>
 </dialog>
```
操作方法：show(),close(),showModal()

## 属性allowpaymentrequest
允许`<iframe>`内部网页使用 Payment Request API

## 属性 rel="apple-touch-icon"
`<link rel="apple-touch-icon" sizes="16x16" href="path/to/icon16.png">  `指定网页icon，支持使用sizes属性

## 多个`<main>`标签
一个页面可以同时存在多个`<main>`标签，只能一个显示，其余都需要使用`hidden`属性隐藏

## `<body>`内可以使用`<style>`标签，可以就近定义结构样式
```html
  <body>
     <p>test123</p>
     <style>
        p{color:red}
     </style>
  </body>
```

## `<legend>`在`<filedset>`标签中做标题使用
```html
<!-- See: https://www.w3schools.com/tags/tag_fieldset.asp -->
<form action="/action_page.php">
 <fieldset>
  <legend>Personalia:</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"><br><br>
  <input type="submit" value="Submit">
 </fieldset>
</form>

```