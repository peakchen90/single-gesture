var box = document.getElementById('box')
var _deltaX = document.getElementById('deltaX')
var _deltaY = document.getElementById('deltaY')
var _interval = document.getElementById('interval')

function getStyle(el, attr) {
  if (el && el.currentStyle) {
    return el.currentStyle[attr]
  } else {
    return window.getComputedStyle(el)[attr]
  }
}

var g = new Gesture(box)

g.ondrag(function (e) {
  console.log(e.gesture)
  var top = getStyle(box, 'top').replace(/px/, '') - 0
  var left = getStyle(box, 'left').replace(/px/, '') - 0
  var deltaX = e.gesture.deltaX
  var deltaY = e.gesture.deltaY
  var interval = e.gesture.interval
  box.style.top = top + deltaY + 'px'
  box.style.left = left + deltaX + 'px'
  _deltaX.innerHTML = deltaX
  _deltaY.innerHTML = deltaY
  _interval.innerHTML = interval
})
