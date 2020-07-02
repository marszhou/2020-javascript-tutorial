# 面向对象编程 OOP —— Object-Oriented Programming

## 定义类（Class）

```js
class ClassName {
  constructor(...) {

  }

  // properties
  let foo = 123

  // methods
  bar () {
    return
  }
}

let x = new ClassName(...)
```

## 继承

```js
class Parent {}
class Child extends Parent {}

let c = new Child()
c instanceof Child    // true
c instanceof Parent   // true
c instanceof Object   // true

let p = new Parent()
p instanceof Child    // false
p instanceof Parent   // true
p instanceof Object   // true
```

使用父级方法

```js
class Shape {
  constructor(backgroundColor) {
    this.backgroundColor = backgroundColor
  }

  toString() {
    return `形状：颜色=${this.backgroundColor}`
  }
}

class Square extends Shape {
  constructor(backgroundColor, width, height) {
    super(backgroundColor)
    this.width = width
    this.height = height
  }

  toString() {
    return `${super.toString()}, 宽=${this.width}, 高=${this.height}`
  }

  area() {
    return this.width * this.height
  }
}
```

## 异常的处理 try...catch...finally

### 抛出异常

```js
throw <object>
```

### 捕捉异常

``` js
try {
   try_statements
}
[catch[(error)]{

}]
[finally {
   finally_statements
}]
```

例如

```js

class CustomError extends Error {
  toString() {
    return `${this.name}(${this.code})`
  }
}

function aError(input) {
  switch (input) {
    case 1:
      throw "太可怕了😨"
    case 2:
      throw new Error("An error occured!")
    case 3:
      let e = new CustomError()
      e.name = "NOT_FOUND"
      e.code = 404
      throw e
    default:
      console.log("Success!")
      break
  }
}

try {
  aError(3)
}
catch (e){
  if (e instanceof CustomError) {
    console.error("这是一个自定义错误: " + e.code)
    console.error(e)
  } else if (e instanceof Error) {
    console.error(e)
  } else {
    console.error('⚠️' + e)
  }
}
finally {
  console.log("结束了")
}
```


[What's a good way to extend Error in JavaScript?](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript)