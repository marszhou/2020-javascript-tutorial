# 原型链 Prototype Chain

## 创建对象的3种方法

### Object.create

```js
var Person = {name: 'Guo', say: function() { console.log(`hello ${this.name}`)}}
var p = Object.create(Person)
```

### 构造方法

```js
function Pet(name) {
  // console.log(this)
  this.name = name
  this.action = "play"
}
Pet.prototype.move = function() { console.log("went a step")}
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
        return _super.call(this, ...arguments);
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

### mixin 继承

```js
let sayMixin = {
  say(phrase) {
    console.log(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin, // (或者，我们可以在这儿使用 Object.create 来设置原型)

  sayHi() {
    // 调用父类方法
    super.say(`Hello ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Bye ${this.name}`); // (*)
  }
};

class User {
  constructor(name) {
    this.name = name;
  }

  test() {
    return 'test'
  }
}

class Worker extends User {
  job = 'sit'
}

// 拷贝方法
Object.assign(Worker.prototype, sayHiMixin);

// 现在 User 可以打招呼了
new Worker("Dude").sayHi(); // Hello Dude!
```

### event mixins

```js
let eventMixin = {
  /**
   * 订阅事件，用法：
   *  menu.on('select', function(item) { ... }
  */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * 取消订阅，用法：
   *  menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * 生成具有给定名称和数据的事件
   *  this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // 该事件名称没有对应的事件处理程序（handler）
    }

    // 调用事件处理程序（handler）
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};
```

用法：

```js
// 创建一个 class
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// 添加带有事件相关方法的 mixin
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// 添加一个事件处理程序（handler），在被选择时被调用：
menu.on("select", value => alert(`Value selected: ${value}`));

// 触发事件 => 运行上述的事件处理程序（handler）并显示：
// 被选中的值：123
menu.choose("123");
```