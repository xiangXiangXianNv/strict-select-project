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
    <Item01 :currentIndex="currentIndex" :categoryList="categoryList"
            v-if="categoryList.length>0&&categoryList[currentIndex].type===1"
    ></Item01>
    <Item02 :currentIndex="currentIndex" :categoryList="categoryList"
            v-if="categoryList.length>0&&categoryList[currentIndex].type===0"
    ></Item02>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Item01 from './SortItem/Item01'
  import Item02 from './SortItem/Item02'
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
    },
    components:{
      Item01,
      Item02
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
</style>
