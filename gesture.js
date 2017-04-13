/**
 * single-gesture.js
 */

var document = window.document

/**
 * 构造函数
 * @param {Element} el 元素节点
 */
function Gesture(el) {
  this.el = el
}

/**
 * 绑定原生事件
 */
Gesture.prototype.on = function (event, listener) {
  this.el.addEventListener.apply(this.el, arguments)
}

/**
 * 取消绑定原生事件
 */
Gesture.prototype.off = function (event, listener) {
  this.el.removeEventListener.apply(this.el, arguments)
}

/**
 * 拖动事件
 * @param {function} listener 监听函数
 */
Gesture.prototype.ondrag = function (listener) {
  var self = this
  var cache = {
    x: 0,
    y: 0,
    time: Date.now()
  }
  this.on('mousedown', function (e) {
    cache.x = e.pageX
    cache.y = e.pageY
    cache.time = Date.now
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', documentMouseUp)
  })

  /**
   * document鼠标弹起
   */
  function documentMouseUp(e) {
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', documentMouseUp)
  }

  /**
   * 鼠标移动
   */
  function mouseMove(e) {
    var detail = {
      deltaX: e.pageX - cache.x,
      deltaY: e.pageY - cache.y,
      interval: Date.now() - cache.time
    }

    cache.x = e.pageX
    cache.y = e.pageY
    cache.time = Date.now()
    listener.call(self.el, assign(e, { gesture: detail }))
  }

  return this
}


/**
 * 合并对象，类似 Object.assign 方法
 * @param {object} target 目标对象
 * @return {object}
 */
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      target[key] = arguments[i][key]
    }
  }
  return target
}