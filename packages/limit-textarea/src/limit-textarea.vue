<template>
  <div style="position: relative">
    <textarea
      @input="handleInput"
      v-bind="$props"
      class="vs__limit--textarea"
      :class="{'vs__limit-over': isOver}"
      :value="currentValue"
      >
    </textarea>
    <span class="vs__limit--text">
      {{isOver ? '已超出' : '还可以输入'}}<span class="vs__limit--num" :class="{'vs__limit--num-over': isOver}">{{num}}</span>个字
    </span>
  </div>
</template>
<script>
  export default{

    name: 'vsLimit',

    props: {
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      rows: {
        type: Number,
        default: 4
      },
      maxLen: {
        type: Number,
        default: 20
      },
      isCut: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number],
        default: ''
      }
    },
    data () {
      return {
        isOver: false,
        num: this.maxLen,
        currentValue: ''
      }
    },
    methods: {
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.currentValue = value
        if (this.currentValue.length <= this.maxLen) {
          this.isOver = false
          this.num = this.maxLen - this.currentValue.length
        } else {
          if (this.isCut) {
            this.currentValue = this.currentValue.substring(0, this.maxLen)
            this.num = this.currentValue.length - this.maxLen
            return
          }
          this.isOver = true
          this.num = this.currentValue.length - this.maxLen
          this.$emit('overText', this.currentValue)
        }
      }
    },
    watch: {
    }
  }
</script>
