function race() {
  var container
  var computedStyle
  var players = []
  var timer = null

  function element(html) {
    var d = document.createElement('div')
    d.innerHTML = html
    return d.firstChild
  }

  function controls() {
    return element(`<div class="controls">
      <div class="pane">
        <input type="text" class='count'/>
        <div class="button">
          <a
            href="javascript: void(0)"
            class='next'
            >Players</a
          >
        </div>
      </div>

      <div class="pane">
        <div class="button">
          <a href="javascript: void(0)" class='play'>Play</a>
        </div>
        <div class="button">
          <a
            href="javascript: void(0)"
            class='quit'
            >Quit</a
          >
        </div>
      </div>
    </div>`)
  }

  function player() {
    return element(`<div class="flip-box" style='filter:${randomFilter()}'>
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <img
          src="./images/d8r3ey3-80cde9f5-15c1-4208-8822-036895dbf829.gif"
          class="player right"
        />
      </div>
      <div class="flip-box-back">
        <img
          src="./images/d8r3ey3-80cde9f5-15c1-4208-8822-036895dbf829.gif"
          class="player"
        />
      </div>
    </div>
  </div>`)
  }

  function handleNextClick() {
    var eCount = container.querySelector('.count')
    var count = parseInt(eCount.value)
    if (_.isNaN(count) || count <= 2 || count > 100) {
      alert('请输入正确的数字(2-100)')
      eCount.value = ''
      eCount.focus()
      return
    }

    container.querySelector('.controls').classList.add('pane2')
    initPlayers(count)
  }

  function handleQuitClick() {
    players.forEach((player) => player.remove())
    players = []
    container.querySelector('.count').value = ''
    container.querySelector('.count').focus()
    container.querySelector('.controls').classList.remove('pane2')
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  function handlePlayClick() {
    if (!timer) {
      render()
    }
  }

  function fastest() {
    return players.reduce((fastest, player) => {
      if (!fastest) {
        fastest = player
      } else {
        var r1 = fastest.getBoundingClientRect()
        var r2 = player.getBoundingClientRect()
        if (r1.x < r2.x) {
          fastest = player
        }
      }
      return fastest
    }, null)
  }

  function isFinished(player) {
    var pRect = player.getBoundingClientRect()
    var rRect = raceRect()
    if (pRect.x + pRect.width > rRect.width) {
      return player
    }
  }

  function render() {
    timer = setTimeout(() => {
      players.forEach((player) => {
        var speed = _.random(1, 10)
        var x = player.getBoundingClientRect().left + speed
        player.style.left = `${x}px`
      })

      var player
      if ((player = isFinished(fastest()))) {
        players.forEach((p, index) => {
          if (p === player) {
            console.log(`第${index + 1}位玩家获胜！`)
          } else {
            p.style.opacity = 0.3
          }
        })
      } else {
        render()
      }
    }, 1000 / 30)
  }

  function bindEventListeners() {
    container.querySelector('.next').addEventListener('click', handleNextClick)
    container.querySelector('.quit').addEventListener('click', handleQuitClick)
    container.querySelector('.play').addEventListener('click', handlePlayClick)
  }

  function raceRect() {
    return {
      width: document.documentElement.clientWidth,
      height:
        document.documentElement.clientHeight -
        container.querySelector('.nav').getBoundingClientRect().height,
    }
  }

  function initPlayers(count) {
    players = _.range(count).map((_) => player())

    var playerSize = Math.min(150, raceRect().height / players.length)
    computedStyle.innerText = `.flip-box .player {height: ${playerSize}px}`
    players.forEach((player, index) => {
      container.querySelector('.players').append(player)
      player.style.top = `${index * playerSize}px`
    })
  }

  function init() {
    computedStyle = element('<style></style>')
    document.head.append(computedStyle)
    container = element(
      '<div><div class="nav"></div><div class="players"></div></div>'
    )
    document.body.append(container)
    container.querySelector('.nav').append(controls())

    bindEventListeners()
  }

  init()
}
