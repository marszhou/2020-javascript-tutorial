var trail

function show(e) {
  trail.style.display = ''
  trail.style.left = e.clientX - trail.getBoundingClientRect().width / 2 + 'px'
  trail.style.top = e.clientY - trail.getBoundingClientRect().height / 2 + 'px'
}

function hide() {
  trail.style.display = 'none'
}

function onMousemove(e) {
  show(e)
}

function main() {
  // 插入跟随鼠标的div
  trail = document.createElement('div')
  trail.className = 'trail'
  hide()

  document.body.appendChild(trail)
  // 其他代码
  document.documentElement.addEventListener('mouseup', (e) => {
    hide()
    document.documentElement.removeEventListener('mousemove', onMousemove)
  })
  document.documentElement.addEventListener('mousedown', (e) => {
    show(e)
    document.documentElement.addEventListener('mousemove', onMousemove)
  })
}

window.onload = () => main()
