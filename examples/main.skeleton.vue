<template>
  <div class="main-skeleton">
    <vs-skeleton height="80px"></vs-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <vs-skeleton height="300px"></vs-skeleton>
        </div>
        <vs-skeleton height="45px"></vs-skeleton>
      </div>
      <div class="skeleton-bottom">
        <vs-skeleton height="45px"></vs-skeleton>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style lang="less">
  .skeleton-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
  }
  .skeleton-bottom {
    width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .skeleton {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 56px;
  }
</style>
