// 当复选框选中或未选中
function onCheckChange(fieldName) {
  render(currentPage, pageSize)
}
// 当文本框内容改变
function onTextChange(fieldName) {}
// 得到表格的字段名
// @return []
function getTableFields() {
  return [
    'id', // id是默认展示字段
    ...fields.filter((f) => f.check.checked).map((f) => f.fieldName),
  ]
}
// 计算页数
// @return Number
function getPageCount(pageSize) {
  var products = filterProducts()
  return Math.ceil(products.length / pageSize)
}
// 得到过滤后的产品数组
// @return []
function filterProducts() {
  return products
}
// 得到某一页的产品数组
// @return []
function getPageProducts(current, pageSize) {
  var products = filterProducts()
  return products.slice((current - 1) * pageSize, current * pageSize)
}
// 访问某一页
function gotoPage(page) {
  currentPage = page
  render(page, pageSize)
}
// 渲染分页
function renderPaginate(current, pageSize) {
  var pageCount = getPageCount(pageSize)
  var previous =
    current > 1
      ? `<a href="#" onclick='gotoPage(${current - 1})'>&laquo;</a> `
      : ''
  var next =
    current < pageCount
      ? ` <a href="#" onclick='gotoPage(${current + 1})'>&raquo;</a>`
      : ''

  var html =
    previous +
    _.range(1, pageCount)
      .map(
        (p) =>
          `<a class="${
            current === p ? 'active' : ''
          }" href="#" onclick='gotoPage(${p})'>${p}</a>`
      )
      .join(' ') +
    next
  document.getElementById('paginate').innerHTML = html
  document
    .getElementById('paginateTd')
    .setAttribute('colspan', getTableFields().length)
}
// 渲染列表
function renderList(current, pageSize) {
  var products = getPageProducts(current, pageSize)
  console.log(products)
  var fields = getTableFields()
  document.getElementById('head').innerHTML = fields
    .map((f) => `<th>${f}</th>`)
    .join('')
  document.getElementById('body').innerHTML = products
    .map((p) => {
      return `<tr>${fields.map((f) => `<td>${p[f]}</td>`).join('')}</tr>`
    })
    .join('')
}
// 渲染整体
function render(current, pageSize) {
  renderList(current, pageSize)
  renderPaginate(current, pageSize)
}

// main process
// 分组 input
// 并绑定事件
var inputs = document.getElementsByTagName('input')
var fields = []
for (var i = 0; i < inputs.length; i += 2) {
  var check = inputs[i]
  var text = inputs[i + 1]
  var fieldName = check.value
  fields.push({ fieldName, check, text })

  check.setAttribute('onchange', `onCheckChange('${fieldName}', this)`)
  text.setAttribute('onchange', `onTextChange('${fieldName}', this)`)
}
var currentPage = 1 // 当前页
var pageSize = 30   // 每页数据条数
// 初次渲染
render(currentPage, pageSize)
