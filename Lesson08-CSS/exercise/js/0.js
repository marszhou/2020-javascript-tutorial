// 全局变量
var c = 0
var button = null
var counter = null
// 入口函数，作用初始化环境
function main(id) {
  // 向容器里注射html
  var container = document.getElementById(id)
  container.innerHTML = '<button>+1</button><div class="counter"></div>'
  // 绑定事件
  button = container.querySelector('button') // 只在container下查询button，如果页面中container以外有其他button不被查询到
  counter = container.querySelector('.counter') // 在container下查询.counter
  button.addEventListener('click', onButtonClick)
  render(counter)
}
// 响应用户操作
function onButtonClick() {
  c = increment(c)
  render(counter)
}
// 计算数据
function increment(c) {
  c += 1
  return c
}
// 渲染结果
function render(counter) {
  counter.innerHTML = c
}

// 当页面完全载入时执行
window.onload = () => main('container')