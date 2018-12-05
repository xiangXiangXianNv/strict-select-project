<template>
  <header class="header">
    <div class="header-top">
      <span class="logo"></span>
      <a class="header-input">
        <i class="iconfont icon-sousuo icon"></i>
        <span class="header-input-text">搜索商品,共6666件商品</span>
      </a>
      <a class="header-login">
        <span class="header-login-text">登录</span>
      </a>
    </div>
    <div class="header-bottom">
      <div class="tab" ref="tab">
        <div class="tab-item" v-for="(headerItem,index) in cateList" :key="index">
          <span class="text" @click="handleActive(index)" :class="{active:currentIndex===index}">{{headerItem.name}}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
    import {mapState} from 'vuex'
    import BScroll from "better-scroll"
    export default {
        name: "home-header",
        mounted(){
          this.$store.dispatch('getCateList',()=>{
            //计算滑动区域包含块的宽度
            const tab = this.$refs.tab;
            const tabItemW = 1.2;
            const space = 0.1;
            const count = this.cateList.length;
            const width = (tabItemW + space) * count - space;
            tab.style.width = width + "rem";
            new BScroll('.header-bottom', {
              click:true,
              scrollX:true
            });
          })
        },
        data(){
          return {
            currentIndex:0
          }
        },
        computed:{
          ...mapState(['cateList'])
        },
        methods:{
          handleActive(index){
            this.currentIndex = index;
          }
        }
    }
</script>

<style scoped lang="stylus">
  .header
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 1.46rem
    background-color white
    .header-top
      position: relative;
      z-index 2;
      display flex;
      flex-flow row nowrap
      align-items center
      background #fff;
      padding: .16rem .3rem
      .logo
        display inline-block
        width 1.38rem
        height .39rem
        background-image url("./images/logo.png")
        background-size cover
        margin-right .2rem
        background-position center
      .header-input
        display flex
        flex-flow row nowrap
        align-items center
        justify-content center
        width 4.42rem
        height .56rem
        background-color #ededed
        border-radius .10667rem
        text-align center
        .icon
          display inline-block
          width .37333rem
          height .37333rem
          margin-right .1rem
          position relative
          left -3px
          top 2px
        .header-input-text
          font-size 14px
          color #666
          font-weight normal
      .header-login
        width 0.72rem
        height 0.37rem
        line-height .37rem
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius .10667rem
        margin-left .21333rem
        font-size 0.24rem
    .header-bottom
      width 100%
      .tab
        display flex
        height .6rem
        width 12.51rem
        .tab-item
          display flex
          justify-content center
          align-items center
          font-size 14px
          margin-left .1rem
          position relative
          span
            display block
            width 1.2rem
            text-align center
            &.active
              color rgb(189,64,69)
              &::after
                content: ' ';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: .05333rem;
                background-color: #b4282d;
</style>
