import DragBall from './src/drag-ball.vue'

DragBall.install = function(Vue) {
  Vue.component(DragBall.name, DragBall)
}

export default DragBall
