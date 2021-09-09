# DivEditable 输入框
----
### 基础用法
在div中输入文本及显示带标签的富文本，可进行数据双向绑定，自身高度可随内容高度而自适应，```placeholder``` 指定初始输入的提示文案

<div class="demo-block">
    <div class="w100">
        <h4>绑定数据 content :</h4>
        <div style="height:24px;" v-html=content></div >
    </div>
    <vs-div-editable v-model="content" placeholder="请输入内容" @input="changeFun" @blur="blur"></vs-div-editable>
    <vs-button style="margin-top:10px;" size="small" @click="sure" type="primary">清空</vs-button>
</div>


::: demo
```html
<vs-div-editable v-model="content" placeholder="请输入内容" @input="changeFun" @blur="blur"></vs-div-editable>

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
      sure(){
          this.content = ''

      },
      changeFun(val){
          console.log(val)
      },
      blur(){
          console.log('失去焦点')
      }
  }
}
</script>
<style>
.w100{
    width:500px;
    padding-left:10px;
    margin-bottom:10px;
}
</style>
## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value/v-model	 | 绑定值 | string/number | — | — |
| placeholder | 输入前需要显示的提示文案 | String | — | 请输入内容 |
| disabled | 是否可编辑 | Boolean | — | true |


## DivEditable 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| input | 在 Input 值改变时触发 | (value: string / number) |
| blur | 在失去焦点时触发| (event: Event) |
| focus | 在得到焦点时触发| (event: Event) |
| keydown | 在键盘按下时触发| (event: Event) |
| keyup | 在按下键盘松开时触发| (event: Event) |
