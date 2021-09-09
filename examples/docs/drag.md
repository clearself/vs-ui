# Drag 拖拽框

---

### 基础用法
#### 这是一款漂亮的 VUE 窗口拖拽效果(改变大小/最小化/最大化/关闭)

特点:
	1. 窗口可以拖动
	2. 窗口可以通过八个方向改变大小；
	3. 窗口可以最小化、最大化、还原、关闭；
	4. 限制窗口最小宽度/高度(默认限制宽高最小为300*200)

<div class="demo-block">
    <vs-drag title="聊天管理" :drag-min-width="500" :drag-min-height="500" v-if="isShow" @close="close"><div>内容区域</div></vs-drag>
    <vs-button @click="isShow = true" type="primary">显示</vs-button>
    
</div>

::: demo

```html
<template>
    <div>
        <vs-drag title="聊天管理" :drag-min-width="500" :drag-min-height="500" v-if="isShow" @close="close"><div>内容区域</div></vs-drag>
        <vs-button @click="isShow = true" type="primary">显示</vs-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isShow: false
            };
        },

        methods: {
            close(val) {
                this.isShow = val;
            }
        }
    };
</script>
```
:::

<script>

 export default {
        data() {
            return {
                isShow: false
            };
        },

        methods: {
            close(val) {
                this.isShow = val;
            }
        }
    };
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

## API

## Props

| 参数   | 说明                                     | 类型            | 默认值 |
| ------ | ---------------------------------------- | --------------- | ------ |
| title  | 标题|  String | 标题 |
| drag-min-width  | 限制最小宽度|  Number | 300 |
| drag-min-height | 限制最小高度| Number | 200  |
| width  | 宽度，单位任意，如果为数值，则为 px 单位 | String / Number | 1200px | 
| height | 高度，单位任意，如果为数值，则为 px 单位 | String / Number | 700px  |

## Drag 事件

| 事件名称  | 说明                   | 回调参数   |
| --------- | ---------------------- | ---------- |
| close | 点击关闭按钮触发的事件 | 拖拽框状态 |
