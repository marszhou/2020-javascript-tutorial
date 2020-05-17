function main() {
  document.documentElement.addEventListener('mousemove', onMouseMove);
}
var i = 0
var k = 0
function createRipple(x, y) {
  var div = document.createElement('div')
  div.className = 'trail'
  div.style.left = x +'px'
  div.style.top = y + 'px'
  document.body.append(div)
  // console.log(`k=${k++}`)
  setTimeout(() => div.classList.add('expand'))
  setTimeout(() => div.remove(), 1000)
  /* div.addEventListener('transitionend', () => {
    console.log(i++)
    div.remove()
  }) */
  return div
}

function onMouseMove(e) {
  createRipple(e.pageX, e.pageY)
}

window.addEventListener('load', () => main())