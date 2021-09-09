import FullScreen from './src/full-screen.vue'

FullScreen.install = function (Vue) {
  Vue.component(FullScreen.name, FullScreen)
}

export default FullScreen
