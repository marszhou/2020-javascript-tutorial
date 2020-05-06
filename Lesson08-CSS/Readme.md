# CSS

- CSS 指层叠样式表 (Cascading Style Sheets)
- 样式定义如何显示 HTML 元素
- 样式通常存储在样式表中
- 把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
- 外部样式表可以极大提高工作效率
- 外部样式表通常存储在 CSS 文件中
- 多个样式定义可层叠为一

## 在HTML文档中的嵌入方式

**外部挂载**

使用[link](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link)标签

```html
<link rel="stylesheet" href="[url]">
```

**使用[@import](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import)**
```html
<style>
@import [url];
</style>
```

一般用link方式，效率更好

**内部样式表**

使用```<style>```标签

```html
<style>
p {font-size: 10.5pt}
</style>
```

**内联样式表（inline)**

```html
<div style='background-color: red; width:100px; height: 100px'></div>
```

## 优先级

1. 浏览器缺省设置
2. 外部样式表
3. 内部样式表（位于 ```<style>``` 标签内部）
4. 内联样式

数字越大优先级越高

## 语法

CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。

属性大小写不敏感，选择器名字大小写敏感

```css
selector {declaration1; declaration2; ... declarationN }
```

每条声明由一个属性和一个值组成。

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

```css
selector {property: value}
```

例如

```css
h1 {color:red; font-size:14px;}
```

![](https://www.w3school.com.cn/i/ct_css_selector.gif)

## 书写的规范

提示：如果要定义不止一个声明，则需要用分号将每个声明分开。下面的例子展示出如何定义一个红色文字的居中段落。最后一条规则是不需要加分号的，因为分号在英语中是一个分隔符号，不是结束符号。然而，大多数有经验的设计师会在每条声明的末尾都加上分号，这么做的好处是，当你从现有的规则中增减声明时，会尽可能地减少出错的可能性。就像这样：

```css
p {text-align:center; color:red;}
```

你应该在每行只描述一个属性，这样可以增强样式定义的可读性，就像这样：

```css
p {
  text-align: center;
  color: black;
  font-family: arial;
}
```

## 盒模型（Box Model）

* 内容区域
* 内边距区域 padding
* 边框区域 border
* 外边距区域 margin

## 你应该了解的一些css属性

- 文本相关：字体，段落...
- 背景相关
- 盒相关：布局，定位，轮廓边框
- 动画/过渡

## 简写属性

简写属性是可以让你同时设置其他几个 CSS 属性值的 CSS 属性。使用简写属性，Web 开发人员可以编写更简洁、更具可读性的样式表，节省时间和精力。

[文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Shorthand_properties)

两种典型的简写

多个大类属性简写成一行

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: top right;
```

```css
background: #000 url(images/bg.gif) no-repeat top right;
```

有关盒模型里的属性，顺序 top-right-bottom-left(从top开始的顺时针)

```css
border-width: 1px;
```
效果等于
```css
border-top-width: 1px;
border-right-width: 1px;
border-bottom-width: 1px;
border-left-width: 1px;
```

```css
border-width: 1px 2px 3px 4px;
```
效果等于
```css
border-top-width: 1px;
border-right-width: 2px;
border-bottom-width: 3px;
border-left-width: 4px;
```

```css
border-width: 1px 2px;
```
效果等于
```css
border-top-width: 1px;
border-right-width: 2px;
border-bottom-width: 1px;
border-left-width: 2px;
```

## 选择器（css selector）

### 基本选择器

#### 通用选择器（Universal selector）

选择所有元素。可以为它指定命名空间，指定时，也可以指定至所有命名空间。<br/>
语法：```*```<br/>
例子：```*``` 选择文档中所有元素。<br/>

#### 类型选择器（Type selector）

按照给定的节点名称，选择所有匹配的元素。<br/>
语法：elementname<br/>
例子：```input``` 匹配任何 ```<input>``` 元素。<br/>

#### 类选择器（Class selector）

按照给定的 class 属性的值，选择所有匹配的元素。<br/>
语法：```.classname```<br/>
例子：```.index``` 匹配任何 ```class``` 属性中含有 ```"index"``` 类的元素。<br/>

#### ID 选择器（ID selector）

按照 id 属性选择一个与之匹配的元素。需要注意的是，一个文档中，每个 ID 属性都应当是唯一的。<br/>
语法：```#idname```<br/>
例子：```#toc``` 匹配 ```ID``` 为 ```"toc"``` 的元素。<br/>

#### 属性选择器（Attribute selector）

按照给定的属性，选择所有匹配的元素。<br/>
语法：```[attr]``` ```[attr=value]``` ```[attr~=value]``` ```[attr|=value]``` ```[attr^=value]``` ```[attr$=value]``` ```[attr*=value]```<br/>
例子：```[autoplay]``` 选择所有具有 autoplay 属性的元素（不论这个属性的值是什么）。<br/>

### 组合选择器

#### 选择器列表（Selector list）

```,``` 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。<br/>
语法：```A, B```<br/>
示例：```div, span``` 会同时匹配 ```<span>``` 元素和 ```<div>``` 元素。<br/>

### 组合器（Combinators）

#### 后代组合器（Descendant combinator）

```（空格）```组合器选择前一个元素的后代节点。<br/>
语法：```A B```<br/>
例子：```div span``` 匹配所有位于任意 ```<div>``` 元素之内的 ```<span>``` 元素。<br/>

#### 子代组合器（Child combinator）

```>``` 组合器选择前一个元素的直接子节点。<br/>
语法：```A > B```<br/>
例子：```ul > li``` 匹配直接嵌套在 ```<ul>``` 元素内的所有 ```<li>``` 元素。<br/>

#### 一般兄弟组合器（General sibling combinator）

```~``` 组合器选择兄弟元素，也就是说，后一个节点在前一个节点后面的任意位置，并且共享同一个父节点。<br/>
语法：```A ~ B```<br/>
例子：```p ~ span``` 匹配同一父元素下，```<p>``` 元素后的所有 ```<span>``` 元素。<br/>

#### 紧邻兄弟组合器（Adjacent sibling combinator）

```+``` 组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点。<br/>
语法：```A + B```<br/>
例子：```h2 + p``` 会匹配所有紧邻在 ```<h2>``` 元素后的 ```<p>``` 元素。<br/>

#### 列组合器（Column combinator）

```||``` 组合器选择属于某个表格行的节点。<br/>
语法： ```A || B```<br/>
例子： ```col || td``` 会匹配所有 ```<col>``` 作用域内的 ```<td>``` 元素。<br/>

### 伪选择器（Pseudo）

#### 伪类

```:``` 伪选择器支持按照未被包含在文档树中的状态信息来选择元素。<br/>
例子：```a:visited``` 匹配所有曾被访问过的 ```<a>``` 元素。<br/>

#### 伪元素

```::``` 伪选择器用于表示无法用 HTML 语义表达的实体。<br/>
例子：```p::first-line``` 匹配所有 ```<p>``` 元素的第一行。<br/>

<table class="dataintable">
<tbody><tr>
<th>选择器</th>
<th>例子</th>
<th>例子描述</th>
<th style="width:5%;">CSS</th>
</tr>

<tr>
<td><a href="/cssref/selector_class.asp" title="CSS .class 选择器">.<i>class</i></a></td>
<td>.intro</td>
<td>选择 class="intro" 的所有元素。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_id.asp" title="CSS #id 选择器">#<i>id</i></a></td>
<td>#firstname</td>
<td>选择 id="firstname" 的所有元素。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_all.asp" title="CSS * 选择器">*</a></td>
<td>*</td>
<td>选择所有元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_element.asp" title="CSS element 选择器"><i>element</i></a></td>
<td>p</td>
<td>选择所有 &lt;p&gt; 元素。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_element_comma.asp" title="CSS element,element 选择器"><i>element</i>,<i>element</i></a></td>
<td>div,p</td>
<td>选择所有 &lt;div&gt; 元素和所有 &lt;p&gt; 元素。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_element_element.asp" title="CSS element element 选择器"><i>element</i> <i>element</i></a></td>
<td>div p</td>
<td>选择 &lt;div&gt; 元素内部的所有 &lt;p&gt; 元素。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_element_gt.asp" title="CSS element>element 选择器"><i>element</i>&gt;<i>element</i></a></td>
<td>div&gt;p</td>
<td>选择父元素为 &lt;div&gt; 元素的所有 &lt;p&gt; 元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_element_plus.asp" title="CSS element+element 选择器"><i>element</i>+<i>element</i></a></td>
<td>div+p</td>
<td>选择紧接在 &lt;div&gt; 元素之后的所有 &lt;p&gt; 元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_attribute.asp" title="CSS [attribute] 选择器">[<i>attribute</i>]</a></td>
<td>[target]</td>
<td>选择带有 target 属性所有元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_attribute_value.asp" title="CSS [attribute=value] 选择器">[<i>attribute</i>=<i>value</i>]</a></td>
<td>[target=_blank]</td>
<td>选择 target="_blank" 的所有元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_attribute_value_contain.asp" title="CSS [attribute~=value] 选择器">[<i>attribute</i>~=<i>value</i>]</a></td>
<td>[title~=flower]</td>
<td>选择 title 属性包含单词 "flower" 的所有元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_attribute_value_start.asp" title="CSS [attribute|=value] 选择器">[<i>attribute</i>|=<i>value</i>]</a></td>
<td>[lang|=en]</td>
<td>选择 lang 属性值以 "en" 开头的所有元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_link.asp" title="CSS :link 选择器">:link</a></td>
<td>a:link</td>
<td>选择所有未被访问的链接。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_visited.asp" title="CSS :visited 选择器">:visited</a></td>
<td>a:visited</td>
<td>选择所有已被访问的链接。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_active.asp" title="CSS :active 选择器">:active</a></td>
<td>a:active</td>
<td>选择活动链接。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_hover.asp" title="CSS :hover 选择器">:hover</a></td>
<td>a:hover</td>
<td>选择鼠标指针位于其上的链接。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_focus.asp" title="CSS :focus 选择器">:focus</a></td>
<td>input:focus</td>
<td>选择获得焦点的 input 元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_first-letter.asp" title="CSS :first-letter 选择器">:first-letter</a></td>
<td>p:first-letter</td>
<td>选择每个 &lt;p&gt; 元素的首字母。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_first-line.asp" title="CSS :first-line 选择器">:first-line</a></td>
<td>p:first-line</td>
<td>选择每个 &lt;p&gt; 元素的首行。</td>
<td>1</td>
</tr>

<tr>
<td><a href="/cssref/selector_first-child.asp" title="CSS :first-child 选择器">:first-child</a></td>
<td>p:first-child</td>
<td>选择属于父元素的第一个子元素的每个 &lt;p&gt; 元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_before.asp" title="CSS :before 选择器">:before</a></td>
<td>p:before</td>
<td>在每个 &lt;p&gt; 元素的内容之前插入内容。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_after.asp" title="CSS :after 选择器">:after</a></td>
<td>p:after</td>
<td>在每个 &lt;p&gt; 元素的内容之后插入内容。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_lang.asp" title="CSS :lang(language) 选择器">:lang(<i>language</i>)</a></td>
<td>p:lang(it)</td>
<td>选择带有以 "it" 开头的 lang 属性值的每个 &lt;p&gt; 元素。</td>
<td>2</td>
</tr>

<tr>
<td><a href="/cssref/selector_gen_sibling.asp" title="CSS element1~element2 选择器"><i>element1</i>~<i>element2</i></a></td>
<td>p~ul</td>
<td>选择前面有 &lt;p&gt; 元素的每个 &lt;ul&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_attr_begin.asp" title="CSS [attribute^=value] 选择器">[<i>attribute</i>^=<i>value</i>]</a></td>
<td>a[src^="https"]</td>
<td>选择其 src 属性值以 "https" 开头的每个 &lt;a&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_attr_end.asp" title="CSS [attribute$=value] 选择器">[<i>attribute</i>$=<i>value</i>]</a></td>
<td>a[src$=".pdf"]</td>
<td>选择其 src 属性以 ".pdf" 结尾的所有 &lt;a&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_attr_contain.asp" title="CSS [attribute*=value] 选择器">[<i>attribute</i>*=<i>value</i>]</a></td>
<td>a[src*="abc"]</td>
<td>选择其 src 属性中包含 "abc" 子串的每个 &lt;a&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_first-of-type.asp" title="CSS :first-of-type 选择器">:first-of-type</a></td>
<td>p:first-of-type</td>
<td>选择属于其父元素的首个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_last-of-type.asp" title="CSS :last-of-type 选择器">:last-of-type</a></td>
<td>p:last-of-type</td>
<td>选择属于其父元素的最后 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_only-of-type.asp" title="CSS :only-of-type 选择器">:only-of-type</a></td>
<td>p:only-of-type</td>
<td>选择属于其父元素唯一的 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_only-child.asp" title="CSS :only-child 选择器">:only-child</a></td>
<td>p:only-child</td>
<td>选择属于其父元素的唯一子元素的每个 &lt;p&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_nth-child.asp" title="CSS :nth-child(n) 选择器">:nth-child(<i>n</i>)</a></td>
<td>p:nth-child(2)</td>
<td>选择属于其父元素的第二个子元素的每个 &lt;p&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_nth-last-child.asp" title="CSS :nth-last-child(n) 选择器">:nth-last-child(<i>n</i>)</a></td>
<td>p:nth-last-child(2)</td>
<td>同上，从最后一个子元素开始计数。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_nth-of-type.asp" title="CSS :nth-of-type(n) 选择器">:nth-of-type(<i>n</i>)</a></td>
<td>p:nth-of-type(2)</td>
<td>选择属于其父元素第二个 &lt;p&gt; 元素的每个 &lt;p&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_nth-last-of-type.asp" title="CSS :nth-last-of-type(n) 选择器">:nth-last-of-type(<i>n</i>)</a></td>
<td>p:nth-last-of-type(2)</td>
<td>同上，但是从最后一个子元素开始计数。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_last-child.asp" title="CSS :last-child 选择器">:last-child</a></td>
<td>p:last-child</td>
<td>选择属于其父元素最后一个子元素每个 &lt;p&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_root.asp" title="CSS :root 选择器">:root</a></td>
<td>:root</td>
<td>选择文档的根元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_empty.asp" title="CSS :empty 选择器">:empty</a></td>
<td>p:empty</td>
<td>选择没有子元素的每个 &lt;p&gt; 元素（包括文本节点）。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_target.asp" title="CSS :target 选择器">:target</a></td>
<td>#news:target</td>
<td>选择当前活动的 #news 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_enabled.asp" title="CSS :enabled 选择器">:enabled</a></td>
<td>input:enabled</td>
<td>选择每个启用的 &lt;input&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_disabled.asp" title="CSS :disabled 选择器">:disabled</a></td>
<td>input:disabled</td>
<td>选择每个禁用的 &lt;input&gt; 元素</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_checked.asp" title="CSS :checked 选择器">:checked</a></td>
<td>input:checked</td>
<td>选择每个被选中的 &lt;input&gt; 元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_not.asp" title="CSS :not(selector) 选择器">:not(<i>selector</i>)</a></td>
<td>:not(p)</td>
<td>选择非 &lt;p&gt; 元素的每个元素。</td>
<td>3</td>
</tr>

<tr>
<td><a href="/cssref/selector_selection.asp" title="CSS ::selection 选择器">::selection</a></td>
<td>::selection</td>
<td>选择被用户选取的元素部分。</td>
<td>3</td>
</tr>
</tbody></table>

## Javascript 操作CSS

*class操作*

- .className属性
- .classList属性

*修改style值*

- .style.propertyName

**css属性的名字里的```-```替换成驼峰形式**

## 使用选择器选择元素

- document.querySelector()
- document.querySelectorAll()

