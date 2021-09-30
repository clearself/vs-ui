<style type="text/less" lang="less">
  @import "../assets/less/index";
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
      a.link{
          float:left;
          display: block;
          color:#fff;
          margin:0 10px;
          line-height: 22px;
      }
      a.link:hover{
          color:#1989fa;
          opacity: 1;
      }
    }
  }
  .page-header.no-index{
     .header-container{
       a.link{
           opacity: .5;
           color:#409eff;
       }
       a.link.active{
           color:#1989fa;
           opacity: 1;
           border-bottom: 1px solid #1989fa;
       }
       a.link:hover{
           color:#1989fa;
           opacity: 1;
           border-bottom: 1px solid #1989fa;
       }
     }
 }
</style>
<template>
  <header class="page-header" :class="{'no-index':$route.name !== 'index'}" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="header-container">
      <div>
          <router-link :to="{name: 'index'}"><div class="icon"><i class="iconfont icon-vuejs"></i></div></router-link>
      </div>
      <div style="overflow: hidden;">
          <router-link class="link active" :to="{name: 'giud'}">组件</router-link>
          <a class="link" target="_blank" href="https://clearself.github.io/">微前端</a>
          <a class="link" target="_blank" href=" https://clearself.github.io/scan/">H5扫一扫</a>
          <a class="link" target="_blank" href="https://www.showdoc.com.cn/998330411274906/7518571525063957">干货分享</a>
          <a class="link" target="_blank" href="https://ysc.dnscn.site/#/login">易收藏</a>
          <a class="link" target="_blank" href="https://ysc.dnscn.site/#/login">话题</a>
          <a class="link" target="_blank" href="https://github.com/clearself/vs-ui">Github</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style scoped>
    .icon i{
        font-size:60px;
        color:#00965e;
    }
</style>
