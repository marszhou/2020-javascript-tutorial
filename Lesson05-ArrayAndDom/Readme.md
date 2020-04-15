# 第5课 - 数组和DOM

## 目录
- [Lodash](#lodash)
- [DOM - Document Object Model](#dom---document-object-model)
  - [DOM树（Tree）](#dom树tree)
  - [DOM的操作](#dom的操作)
  - [查询document中的element](#查询document中的element)
  - [修改 element](#修改-element)
  - [增减element](#增减element)
  - [DOM事件](#dom事件)
- [html相关元素](#html相关元素)

## Lodash

学习使用Lodash，这是接触的第一个第三方类库(框架Framework)

- [官网](https://lodash.com/docs)
- [中文文档](https://www.lodashjs.com/)

嵌入外部js文件的方法

```html
<script src='[url]'></script>
```

如

```html
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>

<!-- 或载入本地文件 -->

<script src="./lodash.min.js"></script>
```

## DOM - Document Object Model

JS 能怎样操作DOM

- 操作DOM中的所有HTML元素
- 操作DOM中的所有CSS样式
- 可以管理DOM中所有的事件

DOM是API的一部分，不是Javascript语言的一部分，属于Javascript的应用层面，DOM提供给JS API接口使得它可以操纵DOM中的一切资源。

在浏览器页面中运行的JS运行在浏览器的沙盒中（Sandbox），也受到一些限制。

![沙盒](https://images-na.ssl-images-amazon.com/images/I/918bGtR7MOL._AC_SX679_.jpg)

## DOM树（Tree）

```html
<html>
<head>
  <title>My title</title>
</head>
<body>
  <a href='somewhere'>My Link</a>
  <h1>My header</h1>
</body>
</html>
```

![](https://www.w3schools.com/js/pic_htmltree.gif)

## DOM的操作

```html
<html>
<body>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>
```

document对象是页面中的一个内置对象

- [document.getElementById](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById)

element指html中的一个元素

- [element.innerHTML](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML)

### 查询document中的element

- [getElementsByTagName()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementsByTagName) - 通过标签名获取element集合
- [getElementsByClassName()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementsByClassName) - 通过css className获取element集合
- [getElementById()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getElementById) - 通过element id获得一个element
- [querySelector()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector) - 通过css selector获得首个匹配的element
- [querySelectorAll()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll) - 通过css selector获得所有匹配的element集合

### 修改 element

- [element.innerHTML](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML) = ... 修改element标签内包含的html代码
- element.attribute = ...修改element标签上的属性
- element.style.property = ... 修改css属性
- [element.setAttribute()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute) 用方法设置element的属性

### 增减element

- [document.createElement()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement)
- [document.removeChild()](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild)
- [document.appendChild()](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild)
- [document.replaceChild()](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/replaceChild)
- [document.write()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/write)
注意: 因为 document.write 需要向文档流中写入内容，所以，若在一个已关闭（例如，已完成加载）的文档上调用 document.write，就会自动调用 document.open，这将清空该文档的内容。

### DOM事件

实例

```html
<!DOCTYPE html>
<html>
<body>

<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

</body>
</html>
```

- 鼠标事件
- 键盘事件
- 生命周期事件
- 交互事件
- ...

事件的绑定方式

```html
<script>
function doClick() {
  alert('Hello!')
}
</script>
<button onclick='doClick()'>点我</button>
```

或 [onclick属性](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onclick)

```html
<button id='btn1'>点我</button>
<script>
  function doClick() {
   alert('Hello!')
  }
  document.getElementById('btn1').onclick=doClick
</script>
```

## html相关元素
* [区域div](https://www.w3school.com.cn/tags/tag_div.asp)
* [table](https://www.w3school.com.cn/tags/tag_table.asp)
* [列表](https://www.w3school.com.cn/html/html_lists.asp)
* [表单](http://www.w3school.com.cn/html/html_forms.asp)
  * [form](http://www.w3school.com.cn/tags/tag_form.asp)
* [表单元素](http://www.w3school.com.cn/html/html_form_elements.asp)/[表单输入类型](http://www.w3school.com.cn/html/html_form_input_types.asp)/[表单输入属性](http://www.w3school.com.cn/html/html_form_attributes.asp)
  * [input](http://www.w3school.com.cn/tags/tag_input.asp)
    * type=text
    * type=password
    * type=checkbox
    * type=radio
    * type=button
    * type=reset
    * type=submit
    * more type=number、type=color 等等
    * type=file
  * [textarea](http://www.w3school.com.cn/tags/tag_textarea.asp)
  * [select](http://www.w3school.com.cn/tags/tag_select.asp)
  * [button](http://www.w3school.com.cn/tags/tag_button.asp)
    * type=button
    * type=reset
    * type=submit
* [label](http://www.w3school.com.cn/tags/tag_label.asp)