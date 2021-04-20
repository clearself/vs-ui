<template>
  <div
  ref="div-editable"
    class="div-editable"
    contenteditable="true"
    v-bind="$props"
    v-html="innerText"
    @input="changeText"
    @focus="isChange = false"
    @blur="blur"></div>
</template>

<script>
  export default {
    name: 'DivEditable',
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: '请输入内容'
      },
    },
    data() {
      return {
        innerText: this.value,
        isChange: true
      }
    },
    watch: {
      value() {
        if (this.isChange) {
          this.innerText = this.value
        }
      }
    },
    methods: {
      changeText() {
        this.$emit('input', this.$el.innerHTML)
        this.$emit('change', this.$el.innerHTML)
      },
      blur() {
        this.isChange = true
        this.$emit('blur')
      }
    }
  }
</script>
