# DragBall 悬浮球
----
### 基础用法
鼠标拖动悬浮球可在整个可视区范围内，并伴有边界吸附效果。
<div class="demo-block">
    鼠标拖动悬浮球
    <vs-drag-ball @click="fun1">
        <i class="vs-icon-remind font"></i>
    </vs-drag-ball>
</div>

::: demo
```html
    <vs-drag-ball></vs-drag-ball>
```
:::
### 自定义显示内容
<div class="demo-block">
    自定义显示内容
</div>

::: demo
```html
    <vs-drag-ball>
        <i class="vs-icon-remind font"></i>
    </vs-drag-ball>
    .font{
        font-size:30px;
        color:#fff;
    }
```
:::

<script>
    export default {
        methods:{
            fun1(){
                alert(1)
            }
        }
    }
</script>
<style>
.font{
    font-size:30px;
    color:#fff;
}
</style>
<!--  ## API -->

<!-- | 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value/v-model	 | 绑定值 | string/number | — | — |
| placeholder | 输入前需要显示的提示文案 | String | — | 请输入内容 |
| disabled | 是否可编辑 | Boolean | — | true | -->


## DragBall 事件

| 事件名称      | 说明          | 回调参数  |
|---------- |-------------- |---------- |
| click | 点击按钮触发的事件 | 点击事件 |
