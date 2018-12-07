<template>
  <div class="sort">
    <div class="sort-header">
      <div class="header-wrap">
        <i class="search"></i>
        <span class="text">搜索商品,共1212件好物</span>
      </div>
    </div>
    <div class="sort-left">
      <ul class="cateNav">
        <li class="item"
            v-for="(category,index) in categoryList"
            :key="index"
            :class="{active:currentIndex===index}"
            @click="handleCurrentIndex(index)"
        >
          <a class="txt">{{category.name}}</a>
        </li>
      </ul>
    </div>
    <div class="sort-right" v-if="categoryList.length>0&&categoryList[currentIndex].type===1">
      <div class="top-img" :style="{backgroundImage:`url('${categoryList[currentIndex].wapBannerUrl } ')`}">
      </div>
      <div class="sort-list">
        <ul class="list">
          <li class="list-item"
                v-for="subcate in categoryList[currentIndex].subCateList">
            <div class="img-wrap">
              <img :src="subcate.wapBannerUrl">
            </div>
            <div class="name">{{subcate.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="sort-right-2" v-if="categoryList.length>0&&categoryList[currentIndex].type===0">
      <div class="top-img" :style="{backgroundImage:`url(' ${categoryList[currentIndex].wapBannerUrl } ')`}">
      </div>
      <div class="sort-list" v-for="(subcate,index) in categoryList[currentIndex].subCateList" :key="index">
        <div class="name1">{{subcate.name}}</div>
        <ul class="list">
          <li class="list-item" v-for="(cate,index) in subcate.categoryList" :key="index">
            <div class="img-wrap">
              <img :src="cate.wapBannerUrl">
            </div>
            <div class="name">{{cate.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "sort",
    mounted(){
      this.$store.dispatch('getCategoryList',()=>{
        this.$nextTick(()=>{
          new BScroll('.sort-left',{
            scrollY: true,
            click: true
          })
        })
      });
    },
    data(){
      return {
        currentIndex : 0
      }
    },
    computed:{
      ...mapState(['categoryList']),
    },
    methods:{
      handleCurrentIndex(index){
        this.currentIndex=index
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .sort
    margin-bottom 1rem
    .sort-header
      width 6.9rem
      height .88rem
      display flex
      align-items center
      padding 0 .3rem
      bottom-border-1px(rgb(249,249,249))
      background-color white
      position fixed
      left 0
      top 0
      .header-wrap
          width 6.9rem
          height .56rem
          display flex
          justify-content center
          align-items center
          font-size .27rem
          background-color rgb(237,237,237)
          border-radius 0.07rem
          .search
            width .27rem
            height .27rem
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
            background-size 100% 100%
            margin-right .1rem

    .sort-left
      width 1.62rem
      height 12.56rem
      overflow hidden
      position fixed
      &::after
        content ''
        position absolute
        background-color rgba(0,0,0,.15)
        top 0
        bottom 0
        width 0.02rem
        right 0
      .cateNav
          width 100%
          padding-bottom 1.38rem
          padding-top .1rem
          .item
            width 100%
            height .5rem
            font-size .27rem
            text-align center
            line-height .5rem
            margin-top .4rem
            position relative
            &.active
              a
                color #ab2b2b
              &::before
                content ' '
                position absolute
                top 0
                left 0
                bottom 0
                width .06rem
                background-color #ab2b2b

    .sort-right
      width 5.28rem
      margin-left: 1.62rem;
      margin-top 0.88rem
      padding: .3rem .3rem .21rem .3rem
      .top-img
         background url(https://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75)
         background-size 100% 100%
         width 5.28rem
         height 1.92rem
         margin-bottom 0.32rem
      .sort-list
         .list
             clearFix()
            .list-item
                text-align center
                width 1.44rem
                float left
                margin-right .34rem
                &:nth-child(3n)
                  margin-right 0
                .img-wrap
                   width 100%
                   height 1.44rem
                   img
                      width 100%
                      height 100%
                .name
                  width 100%
                  height 0.72rem
                  font-size 0.27rem
    .sort-right-2
      width 5.28rem
      margin-left 1.62rem
      margin-top 0.88rem
      padding .3rem .3rem .21rem .3rem
      .top-img
        background url(https://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75)
        background-size 100% 100%
        width 5.28rem
        height 1.92rem
        margin-bottom 0.32rem
      .sort-list
        .name1
          white-space nowrap
          padding-bottom .10667rem
          margin-bottom .32rem
          text-align left
          font-size .27rem
          font-weight 700
          border-bottom 1px solid #d9d9d9
        .list
          clearFix()
        .list-item
          text-align center
          width 1.44rem
          float left
          margin-right .34rem
          &:nth-child(3n)
            margin-right 0
          .img-wrap
            width 100%
            height 1.44rem
            img
              width 100%
              height 100%
          .name
            width 100%
            height 0.72rem
            font-size 0.27rem
</style>
