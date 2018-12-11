<template>
    <div class="find">
      <FindHeader></FindHeader>
      <div class="nav-wrap">
        <div class="nav">
          <ul class="nav-list">
            <li class="nav-item" v-for="(item,index) in navList" :key="index">
              <router-link :to='`/find/tab/${index}`'>{{item.tabName}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    import FindHeader from './FindHeader/FindHeader'
    import {mapState} from 'vuex'
    export default {
        name: "find",
        mounted(){
          this.$store.dispatch('getNavList');
          let url;
          url = '/topic/v1/find/recAuto.json';
          this.$store.dispatch('getRecommend',{url:url,page:this.page})
        },
        data(){
          return {
            page:1
          }
        },
        computed:{
          ...mapState(['navList'])
        },
        components:{
          FindHeader
        },
        watch:{
          $route(route){
            this.$store.dispatch('resetShiWuList');
            let id;
            let url;
            if(route.params.index==="0"){
              url = '/topic/v1/find/recAuto.json';
              this.$store.dispatch('getRecommend',{url:url,page:this.page})
            }else if(route.params.index==='1'){
              id = this.navList[this.$route.params.index].tabId;
              url = "/topic/v1/find/getTabData.json";
              this.$store.dispatch('getDaRen',{index:id,url:url,page:this.page});
            }
          }
        },
    }
</script>

<style scoped lang="stylus">
  .find
    .nav-wrap
      padding 0.02rem 0 .98rem 0
      .nav
        width 100%
        height .72rem
        background #fafafa
        border-bottom .01rem solid #d9d9d9
        box-sizing: border-box
        overflow hidden
        position fixed
        top 1rem
        left 0
        z-index 20
        .nav-list
          width 100%
          height .72rem
          white-space nowrap
          overflow-y hidden
          overflow-x auto
          display flex
          justify-content space-around
         .nav-item
            display inline-block
            height .72rem
            line-height .72rem
            -webkit-box-sizing border-box
            box-sizing border-box
            font-size .28rem
            color: #7F7F7F
            padding 0 .08rem
            margin 0 .2rem
            vertical-align middle
            position relative
           .router-link-exact-active
             color rgb(189,64,69)
             &::after
               content ' '
               position: absolute
               left 0
               bottom 0
               width 100%
               height .05333rem
               background-color #b4282d
    .view
      background #f4f4f4
      height 13rem
      margin-top 1rem
</style>
