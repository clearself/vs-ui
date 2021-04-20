# DivEditable 输入框
----
### 基础用法
在div中输入文本及显示带标签的富文本，可进行数据双向绑定，自身高度可随内容高度而自适应，```placeholder``` 指定初始输入的提示文案
<div class="demo-block">
    <div-editable v-model="content" placeholder="请输入内容" @input="changeFun" @blur="blur"></div-editable>
</div>

::: demo
```html
<div-editable v-model="content" placeholder="请输入内容" @input="changeFun" @blur="blur"></div-editable>

<script>
    export default {
      data() {
        return {
          content: '<div>这是一段<span style="color:red">富文本</span>内容</div>'
        };
      },
      methods:{
          changeFun(val){
              console.log(val)
          },
          blur(){
              console.log('失去焦点')
          }
      }
    }
</script>
```
:::
<script>

export default {
  data() {
    return {
      content: '<div>这是一段<span style="color:red">富文本</span>内容</div>'
    };
  },
  methods:{
      changeFun(val){
          console.log(val)
      },
      blur(){
          console.log('失去焦点')
      }
  }
}
</script>

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value/v-model	 | 绑定值 | string/number | — | — |
| placeholder | 输入时需要显示的提示文案 | String | — | 请输入内容 |


## DivEditable 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| input | 在 Input 值改变时触发 | (value: string / number) |
| change | 在值改变时触发 | (value: string / number) |
| blur | 在失去焦点时触发| (event: Event) |
