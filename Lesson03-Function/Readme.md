# 函数初探

[structure]: https://gitcdn.link/repo/marszhou/javascript-tutorials/master/lesson-03/demo/function-structure.png

## 函数是什么？

1. 函数是Javascript程序的基本组成部分。
2. 在Javascript中函数是用来执行一个过程或者运算一个数据结果的一堆语句的集合。
3. 如要使用函数，则需要在某个作用域中先定义它，然后再调用它。

**函数也是一个对象**

## 函数的定义方式

### 声明方式

![][structure]

### 表达式方式
```js
var e = new Function("a", "return a * 2")
e(2)
var f = function(a) { return a * 2}
f(3)
```

### Arrow Function
```js
var a = (a, b) => a+b
// 等价于
var b = function (a, b) { return a+b}

// 注意，如果箭头函数值只有一句语句内容的时候，不用写return，也不用写函数体的{}
// 但是如果超过一句就要写
var c = (a, b) => {
  var r = a+b
  return r
}

// 如果箭头函数只有一个参数，参数两侧的()可以省略
var d = n => n**4

// 但如果没有参数，则不能省略()
var e = () => console.log(new Date())
```
* 函数命名同变量名命名规则，英文字母阿拉伯数字_$组成，并且数字不能做第一个字符
* 没有任何参数也要写 ()
* return 不是必须有的
  * return 后面跟的是 返回值
  * 也可以直接写return，不返回任何东西，这时候只是意味着函数结束了

如正常返回值：

```js
function add(a, b) {
  return a + b
}

add(100, 200)

```
检查函数参数是否合法，发现不合法直接返回

```js
function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    console.warn('参数无效')
    return
  }
  return (+a) + (+b) // 变量前的+表示强制转换为数字
}

add(1)
add('a', '100')
add('2', '12')
```

### 声明和表达式区别

```js
var a = function() {
  console.log(2)
}

function a() {
  console.log(1)
}
```

如上例，我们以为后一个函数声明a会覆盖前一个，如果执行a()的话会打印1，其实实际上会打印2，因为**function声明总是被javascript解释器提到最前面运行**：

![](https://gitcdn.link/repo/marszhou/javascript-tutorials/master/lesson-03/demo/function-comp2.png?raw=true)

## arguments

当不确定函数究竟有多少个参数时我们可以使用arguments来获得当前被调用函数的参数列表

* arguments 是函数内部的特殊变量
* arguments 看起来像数组，但实际上不是
* 如果要转换arguments成为真正的数组可以使用 ```Array.prototype.slice.call(arguments)```（目前可死记）或[...arguments]来执行

```js
function c() {
  for(i in arguments) {
    console.log(arguments[i])
  }
}
```

## ES6新语法：函数参数的展开 ...（spread）

```js
function joinString(separator) {
  var strings = Array.prototype.slice.call(arguments, 1)
  return strings.join(separator)
}
```

我们来实现上面例子的spread版

```js
function joinStrings(sep, ...strings) {
  return strings.join(sep)
}

console.log(joinStrings("#", 'harry', 'potter', 'bran', 'stark'))

```

## 递归函数

循环版
```js
function fab(times) {
  var s = 1
  for(var i=1; i<=times; i++) {
    s = s*i
  }
  return s
}
```

递归版
```js
function fab2(times) {
  if (times <= 1) {
    return 1
  } else {
    return times * fab2(times - 1)
  }
}
```

## 匿名函数

```js
(function(s) {
  console.log("Hello " + s)
})('world')

(s=>console.log("Hello " + s))('世界')
```

## 函数的默认值

```js
function greetSomebody(s, p='world') {
  console.log(s + ' ' + p)
}
greetSomebody('Hello')
greetSomebody('Hey', 'you')

function joinString(sep=',', ...strings) {
  return strings.join(sep)
}
joinString(undefined,1,2,3) // undefined的时候会用默认值
```

## 闭包（Closure)

```js
function autoIncrement() {
  var i = 0;
  return () => i++
}

var ai = autoIncrement()
ai() // 0
ai() // 1
ai() // 2
```

## 好的编程习惯

* 一个函数只做一件事，太长的函数要拆分成更小的函数
* 尽量保持函数的纯度（不在函数内部改变外部变量的值，或做操作）
* 注意为函数写注释，解释函数作用，参数需要的类型，返回值的类型等

## 练习题

0. 例题写一个加法函数，参数个数不限，所有参数求和（非数字类型的认为是0）

```js
function sum(...numbers) {
  var ret = 0;
  for(int i; i<numbers.length; i++) {
    var n = parseFloat(numbers[i])
    if (isNaN(n)) {
      n = 0
    }
    ret += n
  }
  return ret
}

sum(1,2,"333", 4.5, 'a', 'some@qq.com')
```

1. 编写一个函数，计算三个数字的大小，按从小到大顺序输出
提示
```js
// 关于交换两个变量的值，有传统的写法，比如交换a，b
var t = a; a=b; b=t;
// 或者新语法的写法
[a, b] = [b, a]
```
2. 编写生成4位数字验证码的函数，并生成10次，同时将结果打印出来
```js
// 随机数可以用Math.floor(Math.random() * 10)生成
```
3. 编写一个函数，计算任意两个数字之间所能组成的奇数个数，数字必须是个位数
比如： 计算0-3之间能组成的奇数个是01、21、03、13、23、31

4. 某人A给某人B传递数据，数据是四位的整数，在传递过程中是加密的，
加密规则如下：每位数字都加上5,然后用除以10的余数代替该数字，再将第一位和第四位交换，
第二位和第三位交换，请编写一个函数，传入原文，输出密文，写出其加密的函数
```js
//如果想取字符串的第n个字符，可以用str.charAt(n)
// 比如
'abcd'.charAt(2) // "c"
```
5. 生成随机颜色
```js
// 计算机中的颜色由Red，Green，Blue组成
// 在html代码中颜色的值用 #RRGGBB的十六进制数据显示
// 比如红色是#FF
// 十进制数转十六进制可以用number.toString(16)
// 比如a=100; a.toString(16) 结果是“64”
// 注意不能写成 100.toString(16)
// 可以是(100).toString(16)
```
6. 通过函数创建表格,参数是行和列
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button onclick='run()'>运行</button>
  <div id='container'></div>
  <script>
    function run() {
      var cols = parseInt(prompt('输入列数：'))
      var rows = parseInt(prompt('输入行数：'))
      document.getElementById('container').innerHTML = createTable(cols, rows)
    }

    function createTable(cols, rows) {
      // your code
      return `
      <table border='1'>
        <tr>
          <td>0,1</td>
          <td>0,2</td>
          <td>0,3</td>
          <td>0,4</td>
        </tr>
        <tr>
          <td>1,1</td>
          <td>2,2</td>
          <td>3,3</td>
          <td>4,4</td>
        </tr>
      </table>
      `
    }
  </script>

</body>
</html>
```
7. 检查一个3位数字是否为水仙花数
8. 通过函数返回填充的数组，比如想生成1-100的数组序列就调用函数range(1,100)
9. 为第8题的函数添加第三个参数step，使得生成序列的步长可以自定义设置，默认值为1，比如range(1, 10, 3)返回[1, 4, 7, 10], range(1,10,4)返回[1, 5, 9]
10. 用递归函数方法计算参数为n位的斐波那契数字
11. 用函数方法实现第二课中的棱形打印，参数是行列数
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button onclick='run()'>运行</button>
  <div id='container'></div>
  <script>
    function run() {
      var size = parseInt(prompt('输入大小：'))

      document.getElementById('container').innerHTML = printGraph(size)
    }

    function  printGraph(size) {
      // Your Code
return `💀💀💀💀⭐️💀💀💀💀
💀💀💀⭐️⭐️⭐️💀💀💀
💀💀⭐️⭐️⭐️⭐️⭐️💀💀
💀⭐️⭐️⭐️⭐️⭐️⭐️⭐️💀
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
💀⭐️⭐️⭐️⭐️⭐️⭐️⭐️💀
💀💀⭐️⭐️⭐️⭐️⭐️💀💀
💀💀💀⭐️⭐️⭐️💀💀💀
💀💀💀💀⭐️💀💀💀💀`
    }
  </script>
</body>
</html>
```