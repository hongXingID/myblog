<template>
  <div class="shareBox">
 <el-calendar v-model="value">
</el-calendar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>


<style lang='scss' scoped>
 @import "@/assets/css/share/share.scss"
</style>