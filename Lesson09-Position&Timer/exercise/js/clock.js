//生成刻度
window.onload = () => {
  var N = 60
  var oBox = document.querySelector('#box')
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
}
