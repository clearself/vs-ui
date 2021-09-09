<p align="center">
  <a href="https://clearself.github.io/vs-ui/dist/index.html">
    <div class="icon"><i style="font-size:60px;color:#00965e;" class="iconfont icon-vuejs"></i></div>
  </a>
</p>

# VS UI

`vns-ui` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 PC 网站中后台产品
[演示地址](https://clearself.github.io/vs-ui/dist/index.html)

## 特性

- 基于 `Vue` 开发的 UI 组件
- 使用 npm + webpack + babel 的工作流，支持 ES2015
- 提供友好的 API，可灵活的使用组件

## 安装

- yarn

```bash
yarn add vns-ui
```

- npm

```bash
npm install vns-ui --save
```

## 使用

```js
import VNSUI from 'vns-ui' // 引入组件库
import 'vns-ui/packages/theme-default/lib/index.css' // 引入样式库

Vue.use(VNSUI)
```
