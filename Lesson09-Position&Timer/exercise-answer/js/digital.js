var digital

function createDigital(id) {
  document.getElementById(id).innerHTML = `<ul class='digital'>
  </ul>`
  digital = document.getElementById(id).querySelector('.digital')
  tick()
}

function formatNumber(n) {
  var s = n + ''
  if (s.length < 2) {
    s = '0' + s
  }
  return s
}

function getTimeLetters() {
  var d = new Date()
  var hh = formatNumber(d.getHours())
  var mm = formatNumber(d.getMinutes())
  var ss = formatNumber(d.getSeconds())
  return `${hh}c${mm}c${ss}`.split('')
}

function tick() {
  render(getTimeLetters())

  setTimeout(() => {
    tick()
  }, 1000)
}

function render(letters) {
  digital.innerHTML = letters
    .map((letter) => `<li class='d${letter}'></li>`)
    .join('')
}

window.addEventListener('load', () => createDigital('container'))
