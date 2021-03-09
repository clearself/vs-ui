<template>
  <transition name="vs-zoom-in-center">
    <div class="vs__tag" :class="'vs__tag--'+color">
      <span class="vs__tag--desc"><slot></slot></span>
      <i class="vs-icon-close2 vs__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'vsTag',
    props: {
      closable: Boolean,
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        isclosed: false
      }
    },
    methods: {
      hiddenTag () {
        this.isclosed = true
        this.$emit('close')
      }
    }
  }
</script>
