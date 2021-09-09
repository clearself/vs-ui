<template>
  <div
  ref="div-editable"
    :style="{'-webkit-user-modify': disabled ? '' : 'read-only', '-moz-user-modify': disabled ? '' : 'read-only'}"
    class="div-editable"
    :contenteditable="disabled"
    :placeholder="placeholder"
    @focus="focus($event)"
    @blur="blur($event)"
    @keydown="$emit('keydown', $event)"
    @keyup="$emit('keyup', $event)"
    @input="domInput"
    ></div>
</template>

<script>
   import EventUtil from './EventUtil.js'
  export default {
    name: 'vsDivEditable',
    props: {
        value: {
           type: String,
           default: ''
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        disabled: {
          type: Boolean,
          default: true
        }
    },
    data(){
        return {
            isInput:false
        }
    },
    watch:{
        value(newVal){
            if(!this.isInput){
                this.$el.innerHTML = this.value
            }
        }
    },
    mounted () {
        // 组件初始化，对innerHTML赋值
        this.$el.innerHTML = this.value
        // 一旦div的dom发生插入值的操作，调用domChange()方法传递值至父组件
        EventUtil.addHandler(this.$el, 'DOMNodeInserted', this.domChange)
      },
      beforeDestroy () {
        // 销毁
        EventUtil.removeHandler(this.$el, 'DOMNodeInserted', this.domChange)
      },
      methods: {
          focus($event){
              this.isInput = true
              this.$emit('focus', $event)
          },
          blur($event){
              this.isInput = false
              this.$emit('blur', $event)
          },
        domChange (event) {
          this.$emit('input', this.$el.innerHTML, this.$el.dataset.index, event)
        },
        emptyInnerHTML () {
          this.$el.innerHTML = ''
          this.$emit('input', this.$el.innerHTML, this.$el.dataset.index, event)
        },
        domInput (event) {
            if(this.$el.innerHTML=="<br>"){
                this.$el.innerHTML="";
            }
          this.$emit('input', this.$el.innerHTML, this.$el.dataset.index, event)
        }
    }
  }
</script>
