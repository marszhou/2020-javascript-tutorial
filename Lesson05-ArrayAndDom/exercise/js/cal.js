// 功能：模拟普通计算器的功能，C的作用是清除，请先观察windows自带的计算器的功能
// 提示：innerHTML也可以作为读取的属性
// 功能实现不代表就是完成了，不断的优化代码，使结构最优才是编程训练的目的
// 所以如果能实现这个功能后，要想办法检查是否存在繁琐的重复性代码，将它们变成可以重用的代码
// Your Code Please:

var calInfo

/**
 * 按C按钮
 */
function pressClear() {
  calInfo = {
    x: { i: '', f: '', hasFloat: false },
    y: { i: '', f: '', hasFloat: false },
    operator: null,
  }
  render()
}
/**
 * 按下切换正负号按钮
 */
function pressTogglePositive() {
  var current = calInfo.operator === null ? calInfo.x : calInfo.y
  var str = fieldToString(current)
  var field = stringToField(-+str + '')
  _.assign(current, field)
  render()
}
/**
 * 按下百分号按钮
 */
function pressPercent() {
  var current = calInfo.operator === null ? calInfo.x : calInfo.y
  var str = fieldToString(current)
  var field = stringToField(str / 100 + '')
  _.assign(current, field)
  render()
}
/**
 * 按符号按钮
 */
function pressOperator(o) {
  if (!fieldIsEmpty(calInfo.x) && !fieldIsEmpty(calInfo.y)) {
    pressEqual()
  }
  calInfo.operator = o
}
/**
 * 按浮点按钮
 */
function pressFloat() {
  var current = calInfo.operator === null ? calInfo.x : calInfo.y
  current.hasFloat = true
  render()
}
/**
 * 按等号按钮
 */
function pressEqual() {
  var value = getCalValue()
  var oldOperator = calInfo.operator
  pressClear()
  calInfo.x = stringToField(value.toString())
  calInfo.operator = oldOperator
  render()
}
/**
 * 按数字按钮
 */
function pressNum(n) {
  var current = calInfo.operator === null ? calInfo.x : calInfo.y
  if (current.hasFloat) {
    current.f += '' + n
  } else {
    if (n === 0) {
      if (parseInt(current.i) !== 0) {
        current.i += '' + n
      }
    } else {
      current.i += '' + n
    }
  }
  render()
}
/**
 * 测试输入数字是否为空
 * @param Object field - 输入框数据
 * @return Boolean
 */
function fieldIsEmpty(field) {
  return !field.i && !field.f && !field.hasFloat
}
/**
 * 将输入框数据转换为字符串
 * @param Object field
 * @return String
 */
function fieldToString(field) {
  var value = ''
  if (!fieldIsEmpty(field)) {
    if (field.i) {
      value += field.i
    }
    if (field.hasFloat) {
      value += '.'
    }
    if (field.f) {
      value += field.f
    }
  }
  return value || '0'
}
/**
 * 将字符串转为field格式
 * @param String str
 * @return field
 */
function stringToField(str) {
  var p = str.split('.')
  var field = { i: p[0], f: p[1] || '', hasFloat: p.length === 2 }
  return field
}
/**
 * 得到计算结果
 * @return Number
 */
function getCalValue() {
  var x = fieldIsEmpty(calInfo.x) ? 0 : parseFloat(fieldToString(calInfo.x))
  var y = fieldIsEmpty(calInfo.y) ? 0 : parseFloat(fieldToString(calInfo.y))

  return cal(x, y, calInfo.operator)
}
/**
 * 计算
 * @param Number x
 * @param Number y
 * @param String operator
 * @return Number
 */
function cal(x, y, operator) {
  var result = 0
  switch (operator) {
    case '+':
      result = x + y
      break
    case '-':
      result = x - y
      break
    case '*':
      result = x * y
      break
    case '/':
      result = x / y
      break
    default:
      result = x
      break
  }
  return result
}
/**
 * 渲染结果
 */
function render() {
  var showField = null
  if (!calInfo.operator) {
    showField = calInfo.x
  } else if (fieldIsEmpty(calInfo.y)) {
    showField = calInfo.x
  } else {
    showField = calInfo.y
  }

  var value = fieldToString(showField)
  var fontSize = value.length > 10 ? Math.floor((36 * 10) / value.length) : 36
  var result = document.getElementById('result')
  result.innerHTML = value
  result.style.fontSize = fontSize + 'px'
}

pressClear()
render()
