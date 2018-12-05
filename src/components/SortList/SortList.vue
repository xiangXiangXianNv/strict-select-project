<template>
  <nav class="sort">
    <div class="sort-wrap">
      <div class="sort-content">
        <div class="sort-item" v-for="(sort,index) in sortList" :key="index">
          <a href="javascript:" class="item-a">
            <div class="item-img">
              <img :src="sort.picUrl">
            </div>
            <span>{{sort.text}}</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "sort-list",
        mounted(){
          this.$store.dispatch('getSortList')
        },
        computed:{
          ...mapState(['sortList'])
        }
    }
</script>

<style scoped lang="stylus">
  .sort
    width 100%
    height 3.92rem
    background-color rgb(255,237,219)
    .sort-wrap
      height 3.4rem
    .sort-content
      width 100%
      height 100%
    .sort-item
      .item-a
        float left
        margin 0.1rem  0.2rem 0.2rem 0.18rem
        text-align center
        font-size 0.24rem
        .item-img
          width 1.1rem
          height 1.1rem
          img
            width 100%
            height 100%
        span
          color black
          display inline-block
          margin-top 0.1rem
</style>
