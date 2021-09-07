/**
 * @author monkeywang
 * Date: 17/11/9
 */
import vsButton from './button/index.js';
import vsRow from './row/index'
import vsCol from './col/index'
import vsTag from './tag/index'
import vsShowMore from './show-more/index'
import vsLimitTextArea from './limit-textarea/index'
import MetaInfo from './meta-info/index'
import vsAlert from './alert/index'
import vsLoadingBar from './loading-bar/index'
import Skeleton from './skeleton/index'

import DivEditable from './div-editable/index'
import DragBall from './drag-ball/index'

const components = [
  vsButton,
  vsRow,
  vsCol,
  vsTag,
  vsShowMore,
  vsLimitTextArea,
  vsAlert,
  Skeleton,
  DivEditable,
  DragBall
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
  Vue.prototype.$loading = vsLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  vsButton,
  vsRow,
  vsCol,
  vsTag,
  vsShowMore,
  vsLimitTextArea,
  MetaInfo,
  vsAlert,
  vsLoadingBar,
  Skeleton,
  DivEditable,
  DragBall
}
