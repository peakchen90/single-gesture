var box = document.getElementById('box')

var g = new Gesture(box)

function getStyle(el, attr) {
  if (el && el.currentStyle) {
    return el.currentStyle[attr]
  } else {
    return window.getComputedStyle(el)[attr]
  }
}

g.ondrag(function (e) {
  console.log(e.gesture)
  var top = getStyle(box, 'top').replace(/px/, '') - 0
  var left = getStyle(box, 'left').replace(/px/, '') - 0
  var deltaX = e.gesture.deltaX
  var deltaY = e.gesture.deltaY
  box.style.top = top + deltaY + 'px'
  box.style.left = left + deltaX + 'px'
})
