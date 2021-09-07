<template>
  <div id="app">
    <mainSkeleton v-if="!init"></mainSkeleton>
    <div v-else :class="{'bg':isIndex}">
      <mainHeader :class="{'header-bg':isIndex}"></mainHeader>
      <div class="container" v-if="!isIndex">
        <sideNav class="nav"></sideNav>
        <router-view class="view"></router-view>
      </div>

      <router-view class="page" v-else></router-view>
      <!-- <mainFooter v-if="!isIndex"></mainFooter> -->
    </div>
  </div>
</template>

<script>
  import mainHeader from './components/header.vue'
  import mainFooter from './components/footer.vue'
  import sideNav from './components/side-nav.vue'
  import mainSkeleton from './main.skeleton.vue'

  export default {
    name: 'app',
    data () {
      return {
        init: false,
        isIndex: true
      }
    },
    watch: {
      $route () {

        this.isIndex = this.$route.name === 'index'
        if(this.isIndex){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'inherit'
        }
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
      mainHeader,
      sideNav,
      mainFooter,
      mainSkeleton
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
  #app{
      min-height: 100vh;
  }
  .bg{
      width:100%;
      height:100%;
      background-image: url(./assets/img/index_bg.jpg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      .header-bg{
          background-color: rgba(255,255,255,.0);
      }
  }
  .container {
    margin: 0px auto;
    width: 100%;
    height:calc(100vh - 80px);
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      float: left;
      width: 210px;
    }
    .view {
      float: left;
      width: calc(~'100% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
