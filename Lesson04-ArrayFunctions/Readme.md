# 数组方法

## [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 类方法

* Array.isArray()

## 一般操作

* 插入 push, unshift
* 弹出 pop, shift
* 裁剪 slice, splice
* 合并 concat

```js
var a = [1,2,3]
var b = ['x', 'y']
c = a.concat(b) // [1,2,3,'x','y']
```

* 倒序 reverse
```js
var a = [1,2,3,4,5]
console.log(a.reverse())
console.log(a) // a 被改变了
```

* 查找 indexOf, lastIndexOf, includes
```js
var a = [1,2,3,4,5]
console.log(a.indexOf(3)) // 2
console.log(a.indexOf(100)) // -1
console.log(a.includes('a')) // false
```

## 与字符串互转

* 连接 Array.prototype.join
* 分割 String.prototype.split

```js
'1,2,3,4'.split(',') // [1,2,3,4]
'structure'.split('') // ['s', 't', 'r', 'u', 'c', 't', 'u', 'r', 'e']
['cat', 'dog', 'bat'].join(' and '); // cat and dog and bat
```

## 排序

* Array.prototype.sort

排序方法接受的参数是一个方法，这个方法用于比较，形式是：

```js
/**
 * 如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
 * 如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
 * 如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
 * compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。
 * /

function compareFunction(a, b) {
  if (a>b) return 1 // 并不是说a>b一定返回1，看你想要怎么样的排序
  if (a<b) return -1
  return 0
}
```

```js
['cat', 'dog', 'bat'].sort(compareFunction)
```

***注意*** sort 会改变原array的值

```js
var a =  ['duck', 'cat', 'dog', 'bat']
a.sort((a,b) => {
  var aa = a.substr(0,1)
  var bb = b.substr(0,1)
  return aa > bb ? 1 :
                  (aa < bb ? -1 : 0)
})
console.log(a)
```

## 迭代方法

相同点，都有一个参数是迭代函数，函数形式通常是这样

迭代方法和for，while循环相比，不能用break和continue

```js
(value, index, array) => {}
```

* 循环 forEach

forEach 的迭代函数没有返回值

```js
var array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
```

* 映射 map

迭代方法返回新的数组元素值，map运行后的结果返回一个和原数组一一对应关系的❤新数组

```js
var array1 = [1, 4, 9, 16];

// pass a function to map
var map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
* 查找 find, findIndex

迭代方法返回true代表找到了

***一旦找到就不继续运行了***

```js
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

var array2 = [5, 12, 8, 130, 44];

var isLargeNumber = (element) => element > 13;

console.log(array2.findIndex(isLargeNumber));
// expected output: 3

```

* 检查 some, every

迭代方法返回true代表找到了

some - 只要有某一个符合条件就返回true

every - 需要所有的元素都符合条件才返回true

```js

var array = [1, 2, 3, 4, 5];
// checks whether an element is even
var even = (element) => element % 2 === 0;
console.log(array.some(even));
// expected output: true

var isBelowThreshold = (currentValue) => currentValue < 40;
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));
// expected output: true
```

* 过滤 filter

迭代方法返回true或false，当为true的元素组成一个新数组

```js
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(element => element > 10);
console.log(found);
// expected output: 12
```

* 累加 reduce

reduce的迭代方法与其他迭代方法略有不同，它的第一个参数是累加值，迭代方法返回下一个累加值

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

## 外联JS文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src='./products.js'></script>
</head>
<body>
  <script>
    console.log(products)
  </script>
</body>
</html>
```