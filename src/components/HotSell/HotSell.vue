<template>
  <div class="hot-sell">
    <div class="hot-header">
      <span class="title">{{categoryHotSell.title}}</span>
    </div>
    <div class="hot-content">
      <div class="content-top">
        <div class="top-left">
          <div class="left">
            <span class="text">服装榜</span>
            <span class="line"></span>
          </div>
          <div class="right">
            <img src="https://yanxuan.nosdn.127.net/6a690105c3f3dd2806264f3cc4aee54c.png?imageView&quality=65&thumbnail=200x200" alt="">
          </div>
        </div>
        <div class="top-right">
          <div class="left">
            <span class="text">饮食榜</span>
            <span class="line"></span>
          </div>
          <div class="right">
            <img src="https://yanxuan.nosdn.127.net/dc3ea0bf6df2e75dd9ec7fa8987be25a.png?imageView&quality=65&thumbnail=200x200" alt="">
          </div>
        </div>
      </div>
      <div class="content-down">
        <div class="down-item">
          <span class="item-text">电器榜</span>
          <img src="https://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="down-item">
          <span class="item-text">居家榜</span>
          <img src="https://yanxuan.nosdn.127.net/2eb0624b89d2cce1a5fb13187a0c10d8.jpg?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="down-item">
          <span class="item-text">鞋包配饰榜</span>
          <img src="https://yanxuan.nosdn.127.net/cbbdd7c5622a0eaab31e42247909c959.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="down-item">
          <span class="item-text">洗护榜</span>
          <img src="https://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="down-item">
          <span class="item-text">餐厨榜</span>
          <img src="https://yanxuan.nosdn.127.net/02da8bce2fa3a182d398f6a09e8ac2f5.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="down-item">
          <span class="item-text">文体榜</span>
          <img src="https://yanxuan.nosdn.127.net/4b72ba8cdcf9eccd3ed1e6be35b09ab8.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="down-item">
          <span class="item-text">婴宣榜</span>
          <img src="https://yanxuan.nosdn.127.net/ec64907077ca056b393d208792d4e4bb.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
        <div class="down-item">
          <span class="item-text">特色榜</span>
          <img src="https://yanxuan.nosdn.127.net/249ed54cd248f3e2f6950921e20d41ea.png?imageView&quality=65&thumbnail=200x200" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "hot-sell",
        mounted(){
          this.$store.dispatch('getCategoryHotSell')
        },
        computed:{
          ...mapState(['categoryHotSell'])
        }
    }
</script>

<style scoped lang="stylus">
  .hot-sell
    width 100%
    height 7.09rem
    background-color white
    margin-top .25rem
    margin-bottom  .2rem
    .hot-header
      width 6.9rem
      height 0.99rem
      padding 0 .3rem
      font-size .32rem
      line-height 0.99rem
    .hot-content
      width 7rem
      height 5.89rem
      padding 0 .2rem .2rem .3rem
      .content-top
        margin-bottom .1rem
        clearFix()
      .top-left
        width 3.39rem
        height 2rem
        float left
        clearFix()
        margin-right .1rem
        background-color rgb(249,243,228)
      .left
        float left
        position relative
        .text
          font-size .27rem
          margin-top 0.72rem
          display block
          padding-left 0.32rem
        .line
          display block
          width 0.48rem
          height 0.04rem
          background-color #333
          position absolute
          top 1.15rem
          left 0.3rem
      .right
        float right
        img
          width 2rem
          height 2rem
      .top-right
        width 3.39rem
        height 2rem
        float left
        clearFix()
        background-color rgb(235,239,246)
        .left
          float left
          position relative
          .text
            font-size .27rem
            margin-top 0.72rem
            display block
            padding-left 0.32rem
          .line
            display block
            width 0.48rem
            height 0.04rem
            background-color #333
            position absolute
            top 1.15rem
            left 0.3rem
      .content-down
        clearFix()
        .down-item
          width 1.65rem
          height 1.80rem
          background-color rgb(245,245,245)
          text-align center
          padding-top .15rem
          box-sizing border-box
          font-size 0.24rem
          float left
          margin-right .1rem
          margin-bottom .1rem
          .item-text
            zoom 1
          img
            width 1.2rem
            height 1.2rem
            margin-top .1rem
</style>
