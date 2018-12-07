<template>
    <div class="find">
      <FindHeader></FindHeader>
      <div class="nav-wrap">
        <div class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/find/recommend">推荐</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/find/expert">达人</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/find/topnew">上新</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/find/showlist">晒单</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/find/find-home">HOME</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    import FindHeader from './FindHeader/FindHeader'
    export default {
        name: "find",
        components:{
          FindHeader
        }
    }
</script>

<style scoped lang="stylus">
  .find
    .nav-wrap
      padding: 0.02rem 0 .98rem 0;
      .nav
        width: 100%;
        height: .72rem;
        background: #fafafa;
        border-bottom: .01rem solid #d9d9d9;
        box-sizing: border-box;
        overflow: hidden;
        position: fixed;
        top: 1rem;
        left: 0;
        z-index: 20;
        .nav-list
          width: 100%;
          height: .72rem;
          padding-bottom: .2rem;
          white-space: nowrap;
          overflow-y: hidden;
          overflow-x: auto;
          display flex
          justify-content space-around
         .nav-item
            display: inline-block;
            height: .72rem;
            line-height: .72rem;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-size: .28rem;
            color: #7F7F7F;
            padding: 0 .08rem;
            margin: 0 .2rem;
            vertical-align: middle;
            position relative
           .router-link-exact-active
             color rgb(189,64,69)
             &::after
               content: ' ';
               position: absolute;
               left: 0;
               bottom: 0;
               width: 100%;
               height: .05333rem;
               background-color: #b4282d;
    .view
      padding: .72rem 0 .98rem 0;
      background #f4f4f4
</style>
