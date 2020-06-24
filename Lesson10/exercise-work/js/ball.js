function ballGenerator() {

  var balls = []

  function randomColor() {
    return `rgba(${_.random(0, 255)}, ${_.random(0, 255)}, ${_.random(
      0,
      255
    )}, ${_.random(0.3, 1)})`
  }

  function element(html) {
    var div = document.createElement('div')
    div.innerHTML = html
    return div.firstElementChild
  }

  function createBall(size) {
    return element(`
      <section class="stage"
               style='width:${size}px;height:${size}px'>
        <figure class="ball"
                style='background: radial-gradient(circle at 50% 120%, ${randomColor()}, ${randomColor()} 10%, ${randomColor()} 80%, ${randomColor()} 100%);'></figure>
      </section>`)
  }

  function initBall(x, y, options = {}) {
    var defaultOptions = {minSpeed:6, maxSpeed: 10}
    var size = _.random(10, 100)
    var {minSpeed, maxSpeed} = {...defaultOptions, ...options}

    var ball = {
      element: createBall(size),
      speed: _.random(minSpeed, maxSpeed),
      angle: _.random(0, Math.PI * 2),
    }

    ball.element.style.left = `${x - size / 2}px`
    ball.element.style.top = `${y - size / 2}px`
    document.body.appendChild(ball.element)
    return ball
  }

  function nextAngle(direction, angle) {
    var next
    if (direction === 'h') {
      switch (true) {
        case angle >= Math.PI * 0 && angle < Math.PI * 0.5:
          next = _.random(Math.PI * 0.5, Math.PI * 1)
          break
        case angle >= Math.PI * 0.5 && angle < Math.PI * 1:
          next = _.random(Math.PI * 0, Math.PI * 0.5)
          break
        case angle >= Math.PI * 1 && angle < Math.PI * 1.5:
          next = _.random(Math.PI * 1.5, Math.PI * 2)
          break
        case angle >= Math.PI * 1.5 && angle < Math.PI * 2:
          next = _.random(Math.PI * 1, Math.PI * 1.5)
          break
      }
    } else {
      switch (true) {
        case angle >= Math.PI * 0 && angle < Math.PI * 0.5:
          next = _.random(Math.PI * 1.5, Math.PI * 2)
          break
        case angle >= Math.PI * 0.5 && angle < Math.PI * 1:
          next = _.random(Math.PI * 1, Math.PI * 1.5)
          break
        case angle >= Math.PI * 1 && angle < Math.PI * 1.5:
          next = _.random(Math.PI * 0.5, Math.PI * 1)
          break
        case angle >= Math.PI * 1.5 && angle < Math.PI * 2:
          next = _.random(Math.PI * 0, Math.PI * 0.5)
          break
      }
    }

    return next
  }

  function move(ball) {
    var { x, y, width, height } = ball.element.getBoundingClientRect()

    if (x === 0 || x === maxWidth - width) {
      ball.angle = nextAngle('h', ball.angle) // horizontal
      // console.log(ball.angle/Math.PI * 180)
    } else if (y === 0 || y === maxHeight - height) {
      ball.angle = nextAngle('v', ball.angle) // vertical
      // console.log(ball.angle/Math.PI * 180)
    }
    var xx = x + ball.speed * Math.cos(ball.angle)
    var yy = y - ball.speed * Math.sin(ball.angle)
    xx = Math.min(Math.max(0, xx), maxWidth - width)
    yy = Math.min(Math.max(0, yy), maxHeight - height)

    ball.element.style.left = `${xx}px`
    ball.element.style.top = `${yy}px`
  }

  function render() {
    balls.forEach(move)
    setTimeout(() => render(), 1000 / 30)
  }

  var maxWidth = 0
  var maxHeight = 0
  function handleWindowResize() {
    maxWidth = document.documentElement.clientWidth
    maxHeight = document.documentElement.clientHeight
  }

  function handleClick(e) {
    balls.push(initBall(e.clientX, e.clientY, {
      maxSpeed: 30
    }))
  }

  function init() {
    console.log('init')
    document.documentElement.addEventListener('click', handleClick)
    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()
    render()
  }
  init()
}
