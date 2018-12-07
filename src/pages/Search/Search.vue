<template>
    <div class="search">
       <header class="header-wrap">
          <div class="header-content">
            <div class="inp">
              <i class="icon"></i>
              <input type="text" placeholder="请输入内容" v-model="keyWord" >
            </div>
            <div class="cancel">
              <span class="text" @click="$router.replace('/find')">取消</span>
            </div>
          </div>
       </header>
       <div class="content" v-show="searchList.length>0">
          <ul class="list">
            <li class="item" v-for="(item,index) in searchList" :key="index">{{item}}</li>
          </ul>
       </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "search",
        data(){
          return {
            keyWord:''
          }
        },
        computed:{
          ...mapState(['searchList'])
        },
        watch:{
          keyWord(value){
            const url = '/xhr/search/searchAutoComplete.json';
            this.$store.dispatch('getSearchList',{url,keywordPrefix:value})
          }
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .search
    .header-wrap
        bottom-border-1px(#d9d9d9)
        height 0.87rem
        .header-content
            z-index: 1;
            width: 6.9rem
            margin: auto;
            overflow: hidden;
            position: relative;
            padding: 0 0.3rem
            height: 0.87rem
            display: flex;
            align-items: center;
            justify-content: space-between;
            .inp
              padding-top 0
              padding-left .2rem
              padding-bottom 0
              border 0
              background-color #f4f4f4
              height .56rem
              border-radius 2px
              display flex
              align-items center
              justify-content space-between
              flex 1
              .icon
                 width .27rem
                 height .27rem
                 background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
                 background-size 100% 100%
              input
                padding-left 0.2rem
                flex 1
                outline none
                background-color transparent
            .cancel
              margin-left .3rem

    .content
      .list
        display block
        padding-left .3rem
        background-color #fff
        .item
          bottom-border-1px(#d9d9d9)
          height 0.9rem
          line-height 0.9rem
</style>
