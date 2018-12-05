<template>
  <div class="newPeople">
    <div class="new-top">
      <span class="line left"></span>
      <span class="text">新人专享礼</span>
      <span class="line right"></span>
    </div>
    <div class="new-bottom">
      <div class="new-left">
        <div class="name">新人专享礼包</div>
        <img src="http://yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
      </div>
      <div class="new-right" v-if="activityModule.length>0">
        <div class="right-top">
          <div class="text">
            <div class="title">{{activityModule[0].title}}</div>
            <div class="name">{{activityModule[0].subTitle}}</div>
          </div>
          <div class="price-content">
            <div class="price-new">{{activityModule[0].activityPrice}}</div>
            <div class="price-old">{{activityModule[0].originPrice}}</div>
          </div>
          <div class="img">
            <img :src="activityModule[0].picUrl" alt="">
          </div>
        </div>
        <div class="right-bottom">
          <div class="text">
            <div class="title">{{activityModule[1].title}}</div>
            <div class="name">{{activityModule[1].tag}}</div>
          </div>
          <div class="price-content">
            <div class="price-new">{{activityModule[1].activityPrice}}</div>
            <div class="price-old">{{activityModule[1].originPrice}}</div>
          </div>
          <div class="img">
            <img :src="activityModule[1].picUrl" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "new-people",
        mounted(){
          this.$store.dispatch('getActivity')
        },
        computed:{
          ...mapState(['activityModule'])
        }
    }
</script>

<style scoped lang="stylus">
  .newPeople
    margin .2rem 0
    padding-bottom .2rem
    background-color white
    .new-top
      width 100%
      height 0.9rem
      text-align center
      line-height 0.9rem
      position relative
      display flex
      justify-content center
      align-content center
      .text
        font-size 0.32rem
      .line
        position relative
        top 21px
        display block
        width 0.24rem
        height 0.03rem
        background-color black
        &.left
          margin-right 10px
        &.right
          margin-left 10px
    .new-bottom
      width 7.2rem
      height 4.37rem
      padding-left .3rem
      clearFix()
      .new-left
        width 3.42rem
        height 4.34rem
        float left
        background-color rgb(249,233,207)
        font-size .32rem
        position relative
        margin-right 0.03rem
        .name
          margin 0.4rem 0 0 0.3rem
        img
          display block
          width 2.28rem
          height 2.28rem
          margin 30px auto
      .new-right
        width 3.42rem
        height 4.34rem
        float left
        font-size 0.32rem
        .right-top
          width 100%
          height 50%
          background-color rgb(251,226,211)
          position relative
          .text
            padding .3rem 0 0 .3rem
            .title
              font-size 0.32rem
              margin-bottom .1rem
            .name
              font-size 0.24rem
          .price-content
            width .8rem
            height .7rem
            background-color rgb(234,150,59)
            border-radius 50%
            text-align center
            position absolute
            right .3rem
            top .3rem
            color white
            font-size 0.24rem
            .price-new
              margin-bottom .05rem
            .price-old
              text-decoration line-through
          .img
            width 2rem
            height 2rem
            position absolute
            left 1.42rem
            top .2rem
            img
              width 100%
              height 100%
        .right-bottom
          width 100%
          height 50%
          background-color rgb(255,236,194)
          position relative
          .text
            padding .3rem 0 0 .3rem
            .title
              font-size 0.32rem
              margin-bottom .1rem
            .name
              font-size 0.21rem
              color white
              width 1.3rem
              height .32rem
              background-color rgb(203,182,147)
              text-align center
              line-height .32rem
        .price-content
          width .8rem
          height .7rem
          background-color rgb(234,150,59)
          border-radius 50%
          text-align center
          position absolute
          right .3rem
          top .3rem
          color white
          font-size 0.24rem
          z-index 1
          .price-new
            margin-bottom .05rem
          .price-old
            text-decoration line-through
        .img
          width 2rem
          height 2rem
          position absolute
          left 1.42rem
          top .2rem
          img
            width 100%
            height 100%

</style>
