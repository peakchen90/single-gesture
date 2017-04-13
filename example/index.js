var box = document.getElementById('box')

var g = new Gesture(box)

g.ondrag(function (e) {
  var boxCss = window.getComputedStyle(box)
  var top = boxCss.top.replace(/px/, '') - 0
  var left = boxCss.left.replace(/px/, '') - 0
  var deltaX = e.gesture.deltaX
  var deltaY = e.gesture.deltaY
  box.style.top = top + deltaY + 'px'
  box.style.left = left + deltaX + 'px'
})
