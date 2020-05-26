function clock() {
  var containerId = ''
  function main(id) {
    containerId = id
    document.getElementById(id).innerHTML = `<div class="box">
        <div class="hour"></div>
        <div class="min"></div>
        <div class="sec"></div>
        <div class="cap"></div>
      </div>`
    var box = renderClockPlate()
    var hourHand = box.querySelector('.hour')
    var minuteHand = box.querySelector('.min')
    var secondHand = box.querySelector('.sec')

    tick(hourHand, minuteHand, secondHand)
  }

  function tick(hourHand, minuteHand, secondHand) {
    var d = new Date()
    var h = d.getHours() % 12
    var m = d.getMinutes()
    var s = d.getSeconds()

    var sDegree = (s / 60) * 360
    var mDegree = ((m + sDegree / 360) / 60) * 360
    var hDegree = ((h + mDegree / 360) / 12) * 360

    hourHand.style.transform = `rotate(${hDegree}deg)`
    minuteHand.style.transform = `rotate(${mDegree}deg)`
    secondHand.style.transform = `rotate(${sDegree}deg)`

    setTimeout(() => {
      tick(...arguments)
    }, 1000)
  }

  function renderClockPlate() {
    var N = 60
    var oBox = document.querySelector('#'+containerId).querySelector('.box')
    for (var i = 0; i < N; i++) {
      var oSpan = document.createElement('span')
      //判断当前刻度是不是整时刻度，是的话加整时刻度的class；不是的话加一般刻度的class.
      if (i % 5 == 0) {
        oSpan.className = 'bs'
        //加整时刻度的数字，如果是0的话让其等于12.
        var num = i / 5
        num == 0 ? (num = 12) : num
        oSpan.innerHTML = '<em>' + num + '</em>'
        //60秒即60个小刻度将整个圆分成60份，换成角度即360/60=6度；
        //每隔6度放一个刻度.
        oSpan.children[0].style.transform = 'rotate(' + -i * 6 + 'deg)'
      } else {
        oSpan.className = 'scale'
      }
      oBox.appendChild(oSpan)
      oSpan.style.transform = 'rotate(' + 6 * i + 'deg)'
    }
    return oBox
  }

  return main
}
