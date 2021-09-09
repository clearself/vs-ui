/**
 * @author monkeywang
 * Date: 17/11/9
 */
import vsButton from './button/index.js'
import vsRow from './row/index'
import vsCol from './col/index'
import vsTag from './tag/index'
import vsShowMore from './show-more/index'
import vsLimitTextArea from './limit-textarea/index'
import MetaInfo from './meta-info/index'
import vsAlert from './alert/index'
import vsLoadingBar from './loading-bar/index'
import vsSkeleton from './skeleton/index'

import vsFullScreen from './full-screen/index'
import vsDivEditable from './div-editable/index'
import vsDragBall from './drag-ball/index'
import vsDrag from './drag/index'

const components = [
  vsButton,
  vsRow,
  vsCol,
  vsTag,
  vsShowMore,
  vsLimitTextArea,
  vsAlert,
  vsSkeleton,
  vsDivEditable,
  vsDragBall,
  vsFullScreen,
  vsDrag
]

const install = function (Vue) {
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
  vsSkeleton,
  vsDivEditable,
  vsDragBall,
  vsFullScreen,
  vsDrag
}
