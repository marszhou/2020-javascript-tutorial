function ballGenerator() {
  var fps = 30
  var balls = []

  function randomColor() {
    return `rgba(${_.random(0, 255)}, ${_.random(0, 255)}, ${_.random(
      0,
      255
    )}, ${_.random(0, 1, true)})`
  }

  function createBall(x, y) {
    var element = document.createElement('section')
    element.className = 'stage'
    element.innerHTML = '<figure class="ball"></figure>'
    var size = _.random(20, 100)
    element.style.width = `${size}px`
    element.style.height = `${size}px`
    element.querySelector(
      '.ball'
    ).style.background = `radial-gradient(circle at 50% 120%, ${randomColor()}, ${randomColor()} 10%, ${randomColor()} 80%, ${randomColor()} 100%)`
    element.style.position = 'absolute'
    element.style.left = `${x - size / 2}px`
    element.style.top = `${y - size / 2}px`
    element.style.transition = `all ${1 / fps}s linear`
    return element
  }

  function initBall(x, y) {
    var ball = {}
    ball.element = createBall(x, y)
    ball.speed = _.random(5, 20)
    ball.angle = Math.random() * 2 * Math.PI
    return ball
  }

  function move(ball, spaceWidth, spaceHeight) {
    var rect = ball.element.getBoundingClientRect()
    var x = rect.x
    var y = rect.y
    if (x <= 0 || x + rect.width >= spaceWidth) {
      switch (true) {
        case ball.angle >= 0 && ball.angle < Math.PI * 0.5:
          ball.angle = _.random(Math.PI * 0.5, Math.PI * 1, true)
          break
        case ball.angle >= Math.PI * 0.5 && ball.angle < Math.PI * 1:
          ball.angle = _.random(Math.PI * 0, Math.PI * 0.5, true)
          break
        case ball.angle >= Math.PI * 1 && ball.angle < Math.PI * 1.5:
          ball.angle = _.random(Math.PI * 1.5, Math.PI * 2, true)
          break
        case ball.angle >= Math.PI * 1.5 && ball.angle < Math.PI * 2:
          ball.angle = _.random(Math.PI * 1, Math.PI * 1.5, true)
          break
      }
    } else if (y <= 0 || y + rect.height >= spaceHeight) {
      switch (true) {
        case ball.angle >= 0 && ball.angle < Math.PI * 0.5:
          ball.angle = _.random(Math.PI * 1.5, Math.PI * 2, true)
          break
        case ball.angle >= Math.PI * 0.5 && ball.angle < Math.PI * 1:
          ball.angle = _.random(Math.PI * 1, Math.PI * 1.5, true)
          break
        case ball.angle >= Math.PI * 1 && ball.angle < Math.PI * 1.5:
          ball.angle = _.random(Math.PI * 0.5, Math.PI * 1, true)
          break
        case ball.angle >= Math.PI * 1.5 && ball.angle < Math.PI * 2:
          ball.angle = _.random(Math.PI * 0, Math.PI * 0.5, true)
          break
      }
    }

    var xx = x + ball.speed * Math.cos(ball.angle)
    var yy = y - ball.speed * Math.sin(ball.angle)
    xx =
      xx < 0 ? 0 : xx + rect.width > spaceWidth ? spaceWidth - rect.width : xx
    yy =
      yy < 0
        ? 0
        : yy + rect.height > spaceHeight
        ? spaceHeight - rect.height
        : yy
    ball.element.style.left = `${xx}px`
    ball.element.style.top = `${yy}px`
  }
  function render() {
    var spaceWidth = document.documentElement.clientWidth
    var spaceHeight = document.documentElement.clientHeight
    balls.forEach((ball) => move(ball, spaceWidth, spaceHeight))

    setTimeout(() => {
      render()
    }, 1000 / fps)
  }
  function handleClick(e) {
    var ball = initBall(e.clientX, e.clientY)
    balls.push(ball)
    document.body.appendChild(ball.element)
  }
  document.documentElement.addEventListener('click', handleClick)
  render()
}
