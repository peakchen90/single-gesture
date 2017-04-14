; (function () {

  function getStyle(el, attr) {
    if (el && el.currentStyle) {
      return el.currentStyle[attr]
    } else {
      return window.getComputedStyle(el)[attr]
    }
  }

  var box = document.getElementById('box')
  var _deltaX = document.getElementById('deltaX')
  var _deltaY = document.getElementById('deltaY')
  var _interval = document.getElementById('interval')

  var bodyWidth = document.body.clientWidth
  var bodyHeight = document.body.clientHeight
  var boxWidth = getStyle(box, 'width').replace(/px/, '') - 0
  var boxHeight = getStyle(box, 'height').replace(/px/, '') - 0

  window.addEventListener('resize', function (e) {
    bodyWidth = document.body.clientWidth
    bodyHeight = document.body.clientHeight
  })

  new Gesture(box).ondrag(function (e) {
    console.log(e.gesture)

    var top = getStyle(box, 'top').replace(/px/, '') - 0
    var left = getStyle(box, 'left').replace(/px/, '') - 0
    var deltaX = e.gesture.deltaX
    var deltaY = e.gesture.deltaY
    var interval = e.gesture.interval
    if (top + deltaY < 0 || top + deltaY > bodyHeight - boxHeight || left + deltaX < 0 || left + deltaX > bodyWidth - boxWidth) {
      return
    }
    box.style.top = top + deltaY + 'px'
    box.style.left = left + deltaX + 'px'
    _deltaX.innerHTML = deltaX
    _deltaY.innerHTML = deltaY
    _interval.innerHTML = interval
  })


})()