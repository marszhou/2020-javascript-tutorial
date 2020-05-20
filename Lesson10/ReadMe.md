# 延时函数

形式

```
_.debounce(func, delay, options)
```

## _.debounce

生成一个新函数，在一段时间内多次调用，只运行一次

## _.throttle

生成一个新函数，在一段时间内多次调用，在相隔时间段内只运行一次

## options格式

```js
{
  leading: true / false, // 在时间点开头运行
  trailing: true / false // 在时间点结束运行
}
```

## 干涉执行(.cancel和.flush)

```js
var debouncer = _.debounce(...)
debouncer.cancel() // 在执行前取消
debouncer.flush() // 立即执行（清空堆栈）
```
