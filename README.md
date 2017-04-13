# single-gesture

## 安装
```bash
npm install --save single-gesture
```
或者在浏览器中引用 /dist/gesture.js 文件

## 使用示例
```javascript
var Gesture = require('single-gesture')

var el = document.getElementById('example')
new Gesture(el).ondrag(function(e){
  console.log(e.gesture)
})
// e 包含了原生的 mousemove 事件对象，并加上了 gesture 属性
```