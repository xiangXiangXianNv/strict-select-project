<template>
  <div id="app">
      <router-view></router-view>
      <FoodGuide></FoodGuide>
  </div>
</template>

<script>
  import FoodGuide from "./components/FooterGuide/FootGuide"
  export default {
    name: 'App',
    components:{
      FoodGuide
    }
  }
</script>

<style>
</style>
