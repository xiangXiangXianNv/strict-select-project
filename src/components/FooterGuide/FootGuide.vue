<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on:isCurrent('/home')}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on:isCurrent('/sort')}" @click="goTo('/sort')">
      <span class="item_icon">
        <i class="iconfont icon-leimupinleifenleileibie"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on:isCurrent('/find')}" @click="goTo('/find')">
      <span class="item_icon">
        <i class="iconfont icon-faxian"></i>
      </span>
      <span>发现</span>
    </span>
    <span class="guide_item" :class="{on:isCurrent('/shopcart')}" @click="goTo('/shopcart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on:isCurrent('/profile')}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>

<script>
    export default {
        name: "foot-guide",
        methods:{
          isCurrent(path){
            return !this.$route.path.indexOf(path)
          },
          goTo(path){
            this.$router.replace(path)
          }
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 1rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color rgb(238,79,65)
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
