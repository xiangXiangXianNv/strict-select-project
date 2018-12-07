<template>
    <div class="user">
      <FindHeader>
        <div class="header-center">
           <span>{{user.name}}</span>
        </div>
      </FindHeader>
      <div class="user-content">
        <button class="btn" @click="logout">退出登录</button>
      </div>
    </div>
</template>

<script>
    import FindHeader from '../Find/FindHeader/FindHeader'
    import {mapState} from 'vuex'
    export default {
        name: "user",
        computed:{
          ...mapState(['user'])
        },
        methods:{
          logout(){
            this.$store.dispatch('logout');
            this.$router.replace('/profile');
          }
        },
        components:{
          FindHeader
        }
    }
</script>

<style scoped lang="stylus">
    .user
      .user-content
        position absolute
        top 1rem
        left 0
</style>
