<template>
  <div class="vs__loading-bar">
    <div
      class="vs__loading-bar--bar"
      :class="isError ? 'vs__loading-bar--error' : ''"
      role="bar"
      :style="{transform: 'translate3d(-'+(100-totalProgress)+'%, 0, 0)'}">
      <div class="vs__loading-bar--peg"></div>
    </div>
    <div class="vs__loading-bar--spinner" role="spinner" v-if="showSpinner">
      <div class="spinner-icon" :class="isError ? 'spinner-icon--error' : ''"
           :style="{'animation': 'vs-spinner 400ms '+easing+' infinite'}"></div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'vsLoadingBar',
    props: {
      type: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        speed: 5,
        easing: 'linear',
        percentNum: 0,
        totalProgress: 0,
        showSpinner: true,
        isError: false
      }
    }
  }
</script>
