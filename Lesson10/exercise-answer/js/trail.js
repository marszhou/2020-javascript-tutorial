function trail() {
  var p
  function element(html) {
    var d = document.createElement('div')
    d.innerHTML = html
    return d.firstChild
  }
  function player() {
    return element(`<div class="flip-box" style='position:absolute; left:0px; top:0px; transition: all 0.5s ease-in;'>
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <img
          src="./images/d8r3ey3-80cde9f5-15c1-4208-8822-036895dbf829.gif"
          class="player"
        />
      </div>
    </div>
  </div>`)
  }

  function handleMouseMove(e) {
    var nextX = e.clientX - 75
    var nextY = e.clientY - 75
    if (nextX > p.getBoundingClientRect().x) {
      p.querySelector('.player').classList.add('right')
    } else if (nextX < p.getBoundingClientRect().x) {
      p.querySelector('.player').classList.remove('right')
    }
    p.style.left = `${e.clientX - 75}px`
    p.style.top = `${e.clientY - 75}px`
  }
  function init() {
    p = player()
    document.body.appendChild(p)

    document.documentElement.addEventListener(
      'mousemove',
      _.debounce(handleMouseMove, 300)
    )
  }

  init()
}
