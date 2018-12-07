<template>
  <div class="home">
    <HomeHeader></HomeHeader>  <!--首页头部组件-->
    <SlideShow></SlideShow>  <!--首页轮播图组件-->
    <div class="home-content">
    <div class="service">
      <ul class="service-wrap">
        <li class="service-item" v-for="(policy,index) in policys" :key="index">
          <a href="#">
            <i class="iconfont icon icon-kongxinduigou"></i>
            <span class="text">{{policy.desc}}</span>
          </a>
        </li>
      </ul>
    </div>
    <SortList></SortList> <!--首页分类组件-->
    <div class="rob">
      <img src="https://yanxuan.nosdn.127.net/15435902145614507.gif" alt=""></div>
    <div class="place">
        <div class="img-left">
          <img src="https://yanxuan.nosdn.127.net/15435902383484509.png" alt="">
        </div>
        <div class="img-right">
            <div class="right-top">
              <img src="https://yanxuan.nosdn.127.net/15435902616394510.png" alt="">
            </div>
            <div class="right-bottom">
              <img src="https://yanxuan.nosdn.127.net/15439064549673720.png" alt="">
            </div>
        </div>
    </div>
    <div class="preference">
      <div class="img-left">
        <img src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="">
      </div>
      <div class="img-right">
        <img src="https://yanxuan.nosdn.127.net/15435903918604513.png" alt="">
      </div>
      <div class="img-bottom">
        <img src="https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1404_750_15" alt="">
      </div>
    </div>
    <NewPeople></NewPeople> <!--首页新人专享礼组件-->
    <div class="brand">
        <div class="brand-header">
           <span class="title">品牌制造商直供</span>
           <div class="more">
             <span class="more-text">更多</span>
             <span class="icon-jiantouarrow487 iconfont"></span>
           </div>
        </div>
        <ul class="brand-content">
          <li class="content-item one">
            <div class="title">海外制造商</div>
            <div class="price">9.9元起</div>
          </li>
          <li class="content-item two">
            <div class="title">海外制造商</div>
            <div class="price">9.9元起</div>
          </li>
          <li class="content-item three">
            <div class="title">海外制造商</div>
            <div class="price">9.9元起</div>
          </li>
          <li class="content-item four">
            <div class="title">海外制造商</div>
            <div class="price">9.9元起</div>
          </li>
        </ul>
    </div>
    <HotSell></HotSell>  <!--首页热销组件-->
    <div class="recommend">
      <div class="recommend-header">
        <span class="title">人气推荐</span>
        <div class="more">
          <span class="more-text">更多</span>
          <span class="icon-jiantouarrow487 iconfont"></span>
        </div>
      </div>
      <div class="recommend-content">
         <div class="content-top">
           <div class="top-left">
             <img src="https://yanxuan.nosdn.127.net/06e5818658707bc182acabe92cae3d34.png?imageView&quality=65&thumbnail=280x280" alt="">
           </div>
           <div class="top-right">
             <span class="ticket">券</span>
             <div class="title">30包 谷风一木软抽面巾纸囤货装</div>
             <div class="desc">环保取材，安全天然更亲肤</div>
             <div class="price">$75</div>
           </div>
         </div>
         <div class="content-down">
            <div class="each-recommend">
              <div class="item">
                <div class="item-img">
                  <img src="https://yanxuan.nosdn.127.net/97719f5e6bbca639cdab6b50591c0689.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <span class="item-title">大牌特调 严选椒香鲜辣小龙...</span>
                <span class="item-price">$29.9</span>
                <span class="item-desc">开天辟地价</span>
              </div>
              <div class="item">
                <div class="item-img">
                  <img src="https://yanxuan.nosdn.127.net/9ecf58a52dc6acf31b0c920cc0b3ff36.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <span class="item-title">保温电水壶</span>
                <span class="item-price">$29.9</span>
                <span class="item-desc">限时购</span>
              </div>
              <div class="item">
                <div class="item-img">
                  <img src="https://yanxuan.nosdn.127.net/73a065d6fc8c32197b54421808c54788.png?imageView&quality=65&thumbnail=330x330" alt="">
                </div>
                <span class="item-title">智能马桶盖</span>
                <span class="item-price">$29.9</span>
                <span class="item-desc">爆品</span>
              </div>
            </div>
         </div>
      </div>
    </div>
    <i class="toUp" v-show="isShow" @click="up"></i>
    </div>
  </div>
</template>

<script>
  import HomeHeader from '../../components/Home-header/HomeHeader'
  import SlideShow from '../../components/Slideshow/SlideShow'
  import SortList from '../../components/SortList/SortList'
  import NewPeople from '../../components/NewPeople/NewPeople'
  import HotSell from '../../components/HotSell/HotSell'
  import {mapState} from 'vuex'
  export default {
    name : 'home',
    mounted(){
      this.$store.dispatch('getPolicy',()=>{
        this.$nextTick(()=>{
          this.scroll();
        })
      })
    },
    data(){
      return {
        isShow:false
      }
    },
    computed:{
      ...mapState(['policys'])
    },
    methods:{
      scroll(){
        window.addEventListener("scroll", ()=>{
           let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
           if(scrollTop>500){
              this.isShow = true;
           }else{
             this.isShow = false;
           }
        });
      },
      up(){
        window.scrollTo({
          top:0,
          behavior:'smooth'
        })
      }
    },
    components:{
      HomeHeader,
      SlideShow,
      SortList,
      NewPeople,
      HotSell
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home
    width 100%
    margin-bottom 50px
    background-color rgb(244,244,244)
    .home-content
      .service
        height 0.72rem
        line-height 0.72rem
        background-color rgb(255,237,219)
        .service-wrap
          clearFix()
          display flex
          align-items center
          flex-flow: row nowrap;
          padding 0 0.3rem
          .service-item
             float left
             flex 1
             font-size 0.03rem
             a
              .icon
                position relative
                top 2px
                color rgb(180,40,45)
              .text
                color rgb(180,40,45)
                font-size 0.24rem

      .rob
        img
          width 100%
          display block
          height 3.3rem
      .place
        width 100%
        background url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_496_750_588)
        background-size 100% 100%
        clearFix()
        .img-left
           width 50%
           float left
           img
             width 100%
             height 3.92rem
        .img-right
           float left
           width 50%
           height 3.92rem
          .right-top
             img
               width 100%
               height 50%
          .right-bottom
             img
               width 100%
               height 50%
      .preference
        width 100%
        background url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1084_750_305)
        background-size 100% 100%
        clearFix()
        .img-left
          width 50%
          height 2.03rem
          float left
          img
            width 100%
            height 100%
        .img-right
          float left
          width 50%
          img
            width 100%
            height 100%
            display block
        .img-bottom
            width 100%
            height 0.2rem
            float left
            img
              width 100%
              height 100%
              display block
      .brand
        width 100%
        height 6.48rem
        background-color white
        padding-top .08rem
        .brand-header
          width 6.9rem
          height 0.9rem
          padding 0 .3rem
          font-size .32rem
          line-height 0.9rem
          clearFix()
          .title
             float left
          .more
             float right
             font-size .27rem
          .more-text
             float left
        .brand-content
          width 6.94rem
          height 5.27rem
          position: relative;
          overflow: hidden;
          margin-left .3rem
          clearFix()
          .content-item
            width 3.42rem
            height 2.6rem
            margin 0 .04rem .04rem 0
            background url('http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1')
            background-size 100% 100%
            float left
            text-align center
            &.two
              background url(http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png?imageView&thumbnail=343y260&enlarge=1)
              background-size 100% 100%
            &.three
              background url(http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1)
              background-size 100% 100%
            &.four
              background url(http://yanxuan.nosdn.127.net/053ecfefd033a9acd2cb95483e14fcb6.jpg?imageView&thumbnail=343y260&enlarge=1)
              background-size 100% 100%
            .title
              padding-top .24rem
            .price
              font-size 0.24rem
              color rgb(134,134,134)
      .recommend
        width 100%
        height 7.50rem
        background-color white
        padding-top .08rem
        .recommend-header
          width 6.9rem
          height 0.9rem
          padding 0 .3rem
          font-size .32rem
          line-height 0.9rem
          clearFix()
          .title
            float left
          .more
            float right
            font-size .27rem
          .more-text
            float left
        .recommend-content
          width 6.9rem
          height 2.79rem
          margin 0 .3rem .2rem .3rem
          .content-top
              width 100%
              background-color rgb(254,240,223)
              display flex
              align-items center
              margin-bottom .15rem
              clearFix()
             .top-left
                margin-right .3rem
                width 2.79rem
                height 2.79rem
                background-image url(http://yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
                background-size 100% 100%
                img
                  width 100%
                  height 100%
             .top-right
                .ticket
                  display inline-block
                  height 0.3rem
                  margin-bottom 0.09rem
                  background-image linear-gradient(-135deg,#EA8989 0,#E57B7B 100%)
                  color white
                  padding 0 0.05rem
                  font-size .12rem
                .title
                  font-size 0.27rem
                  width 3.5rem
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
                  margin .1rem 0
                .desc
                  font-size 0.24rem
                  color rgb(170,166,160)
                  margin-bottom .1rem
                .price
                  ont-size 0.27rem
                  color rgb(180,40,45)
          .content-down
             width 100%
             height 3.5rem
             .each-recommend
                width 100%
                height 100%
                clearFix()
                .item
                  width 2.16rem
                  height 3.38rem
                  margin-right .2rem
                  float left
                  &:last-child
                    margin-right 0
                  .item-img
                     width 2.16rem
                     height 2.16rem
                     background-color rgb(245,245,245)
                     img
                      width 100%
                  .item-title
                    font-size .24rem
                  .item-price
                    color rgb(186,57,61)
                    font-size 0.24rem
                  .item-desc
                    display inline-block
                    height 0.19rem
                    line-height 0.19rem
                    background-color rgb(244,143,24)
                    color white
                    margin-top .2rem
                    font-size .24rem
                    padding .05rem .16rem

    .toUp
      position fixed
      right .23rem
      bottom 1.6rem
      vertical-align middle
      width 0.81rem
      height 0.81rem
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png);
      background-size 100% 100%
      z-index 2
</style>
