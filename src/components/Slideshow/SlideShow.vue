<template>
  <nav class="msite_nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide,index) in slideShow" :key="index">
          <img :src="slide.picUrl" alt="图片">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </nav>
</template>

<script>
    import Swiper from "swiper"
    import "swiper/dist/css/swiper.min.css"
    import {mapState} from 'vuex'
    export default {
        name: "slide-show",
        mounted(){
          //请求轮播图数据
          this.$store.dispatch('getSlideShow',()=>{
            this.$nextTick(()=>{
              new Swiper(".swiper-container",{
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
                autoplay:true,
                delay:600,
              });
            })
          })
        },
        computed:{
          ...mapState(['slideShow'])
        }
    }
</script>

<style scoped lang="stylus">
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 1.46rem
    height 3.69rem
    background #fff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          img
            width 100%
            height 100%
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
</style>
