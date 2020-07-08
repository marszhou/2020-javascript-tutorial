# 原型链 Prototype Chain

## 创建对象的3种方法

### Object.create

```js
var Person = {name: '', say: function() { console.log("hello")}}
var p = Object.create(Person)
```

### 构造方法

```js
function Pet(name) {
  this.name = name
  this.action = "play"
}
Pet.prototype.move = function() {}
var pet = new Pet()
```

### class


```js
class Cat extends Pet {}

// class 只是语法糖，实际上是方法
Cat instanceof Function // true
```

## 对象原型链属性

* .\_\_proto\_\_
* .constructor

## Function原型链属性

* .prototype

构造方法的原型关系

![构造方法的原型关系](https://tva1.sinaimg.cn/large/007S8ZIlly1ggjky41q3fj30gp079q35.jpg)

实例的原型关系

![实例的原型关系](https://tva1.sinaimg.cn/large/007S8ZIlly1ggjle0zi42j30bp0a1wet.jpg)

## 例子

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ggjkzh8at0j30f109hq3a.jpg)
```js
var Person = {}
var p = Object.create(Person)
p.__proto__ === Person                    // true
Person.__proto__ === Object.prototype     // true
Person.isPrototypeOf(p)                   // true

new Person()                              // error，Person不是构造方法
```

![](https://tva1.sinaimg.cn/large/007S8ZIlly1ggjl0yqbimj30g50c9gm3.jpg)

```js
function Pet() {}
var pet = new Pet()
pet.constructor === Pet             // true
pet.__proto__ === Pet.prototype     // true
Pet.prototype.isPrototypeOf(pet)    // true

Pet() // undefined，因为它是函数可以运行，但没有意义

class Cat extends Pet {}
var cat = new Cat()
cat.__proto__ === Cat.prototype                 // true
cat.__proto__ === Pet.prototype                 // false
cat.__proto__.__proto__ === Pet.prototype       // true
Pet.prototype.__proto__ === Object.prototype    // true
```

```js
class Dog extends Pet {}
var d = new Dog()
d.constructor === Dog     // true
Dog instanceof Function   // true
Dog() // error，构造函数不能这样执行
d.__proto__ === Dog.prototype // true
```

得到一个对象的原型也可以用```Object.getPrototypeOf```方法


## 扩展原生对象方法

### 为原生对象添加新方法

```js
String.prototype.repeat = function(times) {
  return new Array(times+1).join(this)
}

alert( "a".repeat(3) ) // aaa
```

```js
Object.prototype.each = function(f) {
  for(var prop in this) {
    if (Object.prototype.hasOwnProperty(prop)) continue
    var value = this[prop]
    f.call(null, prop, value)
  }
}

var obj = { name: 'John', age: 25 }
obj.each(function(prop, val) {
  console.log(`${prop} = ${val}`) // name -> age
})
```

### 为兼容而扩展对象

```js
if (!Object.create) {
  Object.create = function(proto) {
    function F() {}
    F.prototype = proto
    return new F
  }
}
```

### 替换已有方法

```js
Array.prototype.join = (function(_super) {
    return function() {
        console.log("Hey, you called join!");
        return _super.apply(this, arguments);
    };
})(Array.prototype.join);
```

### mixin

```js
// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
```