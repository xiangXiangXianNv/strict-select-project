<template>
    <div class="not-found">
      <div class="text">您访问的界面不存在</div>
      <button class="btn" @click="$router.replace('/home')">返回首页</button>
    </div>
</template>

<script>
    export default {
        name: "not-found"
    }
</script>

<style scoped>

</style>
