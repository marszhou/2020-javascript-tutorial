# 第2课 数组/对象/循环

## 目录

* 内容
  * 数组
  * 对象
  * [循环](#循环)
    * [while](#while)
    * [do ... while](#dowhile)
    * [for](#for)
    * [for ... in](#for--in)
    * [break和continue](#break和continue)

## 数组

数组初始化

```js
var arr = new Array(element0, element1, ..., elementN);
var arr = Array(element0, element1, ..., elementN);
var arr = [element0, element1, ..., elementN];
```

为了创建一个长度不为0，但是又没有任何元素的数组，可选以下任何一种方式：
```js
var arr = new Array(arrayLength);
var arr = Array(arrayLength);

// 这样有同样的效果
var arr = [];
arr.length = arrayLength;
```

填充数组
```js
var emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
```

**数组是对象!!**

值传递和引用传递

数组方法
```js
arr.push(1)   // 在最后插入
arr.pop()     // 弹出最后一个
arr.unshift(2)// 在前插入
arr.shift()   // 在前弹出

arr.slice(startIndex, toIndex) // 从数组提取一个片段,并作为一个新数组返回。
arr.splice(startIndex, lengthToRemove, a, b, c...) //从数组移出一些元素，（可选）并替换它们。
```

## 对象

对象和属性

```javascript
  objectName.propertyName
```

创建一个对象，给它3个属性赋值
```js
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
```

如果引用对象上不存在的属性，会返回undefined

```js
myCar.noProperty; // undefined
```

也可以用下标形式访问对象的属性
```js
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

一个对象的属性名可以是任何有效的 JavaScript 字符串，或者可以被转换为字符串的任何类型，包括空字符串。然而，一个属性的名称如果不是一个有效的 JavaScript 标识符（例如，一个由空格或连字符，或者以数字开头的属性名），就只能通过方括号标记访问。这个标记法在属性名称是动态判定（属性名只有到运行时才能判定）时非常有用。例如：
```js
// 同时创建四个变量，用逗号分隔
var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);
```

用变量访问对象的属性
```js
var propertyName = "make";
myCar[propertyName] = "Ford";

propertyName = "model";
myCar[propertyName] = "Mustang";
```

删除对象属性
```js
delete myObj.propertyName
```

字面量创建对象
```js
var obj = { property_1:   value_1,   // property_# 可以是一个标识符...
            2:            value_2,   // 或一个数字...
           ["property" +3]: value_3,  //  或一个可计算的key名...
            // ...,
            "property n": value_n }; // 或一个字符串
```

## 循环

### while

基本语法

```javascript
  while(条件) {
    语句...
    {break 或 continue}
  }
```

示例 寻找1到100,000以内能整除123的数

```javascript
  var i = 123
  var k = 0
  var b = null

  while(true) {
    b = parseInt(Math.random() * 100000)
    var f = b % i
    if (f === 0) {
      break
    }
    k = k + 1
  }

  console.log('b = ', b, ', 循环了', k, '次')
```

不用break的写法

```javascript
  var i = 123
  var k = 0
  var b = null
  var f = null
  while(f !== 0) {
    b = parseInt(Math.random() * 100000)
    f = b % i
    k = k + 1
  }

  console.log('b = ', b, ', 循环了', k, '次')
```

### do...while

基本语法

```javascript
  do {
    语句...
    {break 或 continue}
  } while(条件)
```

示例

```javascript
  var i = 123
  var k = 0
  var b = null
  var f = null
  do {
    b = parseInt(Math.random() * 100000)
    f = b % i
    k = k + 1
  } while(f !== 0)
  console.log('b = ', b, ', 循环了', k, '次')
```

### for

基本语法

```javascript
  for (#a始化条件; #b判断条件; #c条件值变化) {
    #d语句...
    {break 或 continue}
  }
```

其执行顺序是 #a -> #b (如果条件成立) -> #d -> #c -> #b (如果条件成立) -> #d ...

如我们有一个while 版本的求和语句

```javascript
  i = 0
  sum = 0
  while(i<=10) {
    sum = sum + i
    i = i + 1
  }
  console.log(sum)
```

用for版本写出来就是

```javascript
  var sum = 0
  for (
    var i=1;    // (1)
    i<=10;      // (2)(5)(8)
    ++i         // (4)(7)(10)...
  ) {           // (3)(6)(9)
    sum += i
  }
  console.log(sum)
```

用for循环遍历数组

```javascript

  a = [1,2,3,4]
  for(var i=0; i < a.length; ++i) {
    console.log(a[i])
  }

```

### for ... in

基本语法

```javascript
  for (var 变量1 in 变量2) {
    语句...
    {break 或 continue}
  }
```

变量2通常是对象（hash 哈希值或者散列值）

遍历散列对象的所有key并打印

```javascript
  mother = '母亲'
  studentA = {
    married: false,
    gender: 'male',
    name: 'Bob',
    age: 15,
    grade: 8,
    父亲: {           // 正常的文字都可以直接写这里！
      name: 'Adam'
    },
    [mother]: {      // key可以用变量代替
      name: 'Eva'
    },
    "01" : '...'     // 特殊的值做key要用引号包起来，去掉01的引号会报错
  }

  for (var i in studentA) {
    console.log(i, '=', studentA[i])
  }
```

### break和continue

* break的作用是跳出当前循环
* continue的作用是忽略本次循环后面的语句，进行下一次循环

循环的嵌套，说明break和continue指令的作用

```javascript
  for(var i=1; i<=100; i+=1) {
    var f = i % 3
    if (f !== 0) {
      while(i%2==0) {
        console.log('i不能被3整除，但能被2整除', i)
        break
      }
      continue
    }
    console.log(i)
  }
```

# 作业

1. 找出100－999之间的所有“[水仙花数](https://zh.wikipedia.org/wiki/%E6%B0%B4%E4%BB%99%E8%8A%B1%E6%95%B0)”，所谓水仙花数是指一个三位数，各位数字的立方和等于该数本身。（如153＝1^3＋5^3＋3^3）并输出这些数字，统计有多少个。并求出这些数字之和。


2. 打印一千位斐波那契数列 [斐波那契数列](https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)

3. 使用console.log打印一个99*99的菱形（用你喜欢的字符填充），比如这是一个5x5的菱形
```
  *
 ***
*****
 ***
  *
```

4. 打印100,000,000以内的素数（难度高）