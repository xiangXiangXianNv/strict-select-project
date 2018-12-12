<template>
  <div class="recommend">
    <div class="recommend-item"
         v-for="(rec,index) in arr"
         :key="index"
    >
      <div class="header-wrap" v-if="rec.ad">
        <div class="header">
          <img :src="rec.ad.picUrl" alt="">
        </div>
      </div>
      <div class="view-wrap" v-for="(topic,index) in content(rec)" :key="index" v-if="content(rec).length>0">
        <div class="item-1" v-if="topic.type===1||topic.type===2">
          <div class="item-info">
            <div class="name">
                <span class="span-img">
                  <img :src="topic.avatar" alt="">
                </span>
              <span class="span-text">{{topic.nickname}}</span>
            </div>
            <div class="title">{{topic.title}}</div>
            <div class="desc">{{topic.subTitle}}</div>
            <div class="read-count">
              <i class="iconfont icon-faxian1"></i>
              <span>{{(topic.readCount/1000).toFixed(2)}}k人看过</span>
            </div>
          </div>
          <div class="item-pic">
            <img :src="topic.picUrl" alt="">
          </div>
        </div>
        <div class="item-2" v-if="topic.type===0">
          <div class="name">
                <span class="span-img">
                  <img :src="topic.avatar" alt="">
                </span>
            <span class="span-text">{{topic.nickname}}</span>
          </div>
          <div class="title">{{topic.title}}</div>
          <div class="img">
            <img :src="topic.picUrl" alt="">
          </div>
          <div class="read-count">
            <i class="iconfont icon-faxian1"></i>
            <span>{{(topic.readCount/1000).toFixed(2)}}k人看过</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "tab",
    computed:{
      ...mapState(['findRecommend','tabList','navList']),
      arr(){
        if(this.$route.params.index==='0'){
          return this.tabList;
        }else if(this.$route.params.index==='1'){
          return [1]
        }
      }
    },
    methods:{
      content(rec){
        if(this.$route.params.index==='0'){
          return rec.topics;
        }else if(this.$route.params.index==='1'){
          return this.tabList;
        }
      },
    },
  }
</script>

<style scoped lang="stylus">
  .recommend
    padding-bottom 1rem
    .header-wrap
      width 100%
      background: #fff
      margin .2rem 0
      box-sizing border-box
      padding .36rem .3rem
      .header
        width 6.9rem
        height 3.76rem
        position relative
        overflow hidden
        border-radius .08rem
        img
          width 100%
          height 100%
  .recommend-item
    .item-1
      display flex
      flex-wrap wrap
      justify-content space-around
      position relative
      padding .32rem .3rem
      background-color white
      margin: .2rem 0;
      .item-info
        width 4rem
        position relative
        .name
          font-size 0.28rem
          color #333
          line-height .36rem
          white-space nowrap
          overflow hidden;
          text-overflow ellipsis
          .span-img
            display inline-block
            vertical-align middle
            width .56rem
            height .56rem
            overflow hidden
            border-radius 50%
            box-sizing border-box
            border .01rem solid #d9d9d9
            margin-right .12rem
            img
              width 100%
              height 100%
          .span-text
            display inline-block
            line-height .36rem
        .title
          width 100%
          font-size .36rem
          color #333
          line-height .44rem
          padding-top .32rem
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 2
          -webkit-box-orient vertical
        .desc
          width 100%
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          font-size .28rem
          line-height .4rem
          padding-top .08rem
          color #7f7f7f
        .read-count
          position absolute
          left 0
          bottom 0
          font-size .22rem
          color #999
          line-height .32rem
          margin-top .18rem
      .item-pic
        width 2.72rem
        height 2.72rem
        position relative
        overflow hidden
        border-radius .08rem
        img
          width 100%
          height 100%
          display block
    .item-2
      width 100%
      background: #fff
      margin .2rem 0
      box-sizing border-box
      padding .36rem .3rem
      .name
        font-size 0.28rem
        color #333
        line-height .36rem
        white-space nowrap
        overflow hidden;
        text-overflow ellipsis
        .span-img
          display inline-block
          vertical-align middle
          width .56rem
          height .56rem
          overflow hidden
          border-radius 50%
          box-sizing border-box
          border .01rem solid #d9d9d9
          margin-right .12rem
          img
            width 100%
            height 100%
        .span-text
          display inline-block
          line-height .36rem
      .title
        width 100%
        font-size .36rem
        color #333
        line-height .44rem
        overflow hidden
        padding-top .32rem
        margin -.08rem 0 .16rem 0
      .img
        width 6.9rem
        height 3.76rem
        position relative
        margin-bottom .2rem
        overflow hidden
        border-radius: .08rem
        img
          width 100%
          height 100%
</style>
