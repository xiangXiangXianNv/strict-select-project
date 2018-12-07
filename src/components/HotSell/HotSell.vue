<template>
  <div class="hot-sell">
    <div class="hot-header">
      <span class="title">{{categoryHotSell.title}}</span>
    </div>
    <div class="hot-content">
      <div class="content-top">
        <div class="top-left">
          <div class="left">
            <span class="text" v-if="categoryHotSell.title">{{categoryHotSellArr1[0].categoryName}}</span>
            <span class="line"></span>
          </div>
          <div class="right" v-if="categoryHotSell.title">
            <img :src="categoryHotSellArr1[0].picUrl" alt="">
          </div>
        </div>
        <div class="top-right">
          <div class="left">
            <span class="text" v-if="categoryHotSell.title">{{categoryHotSellArr1[1].categoryName}}</span>
            <span class="line"></span>
          </div>
          <div class="right"  v-if="categoryHotSell.title">
            <img :src="categoryHotSellArr1[1].picUrl" alt="">
          </div>
        </div>
      </div>
      <div class="content-down" v-if="categoryHotSell.title">
        <div class="down-item" v-for="(category,index) in categoryHotSellArr2" :key="index">
          <span class="item-text">{{category.categoryName}}</span>
          <img :src="category.picUrl" alt="">
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
          ...mapState(['categoryHotSell']),
          categoryHotSellArr1(){
            const arr = [];
            const {categoryHotSell} = this;
            let i=0;
            while(i<2){
              arr.push(categoryHotSell.categoryList[i]);
              i++;
            }
            return arr;
          },
          categoryHotSellArr2(){
            const arr = [];
            const {categoryHotSell} = this;
            let i=2;
            categoryHotSell.categoryList.forEach((ele,index)=>{
              if(index>1){
                arr.push(ele)
              }
            });
            return arr;
          }
        },
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
        clearFix()
        width 3.39rem
        height 2rem
        float left
        margin-right .1rem
        background-color rgb(249,243,228)
        margin-bottom .1rem
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
        clearFix()
        width 3.39rem
        height 2rem
        float left
        background-color rgb(235,239,246)
        margin-bottom .1rem
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
