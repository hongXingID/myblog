<template>
  <div id="app">
    <default />
    


  </div>
</template>

<script>
import Default from '@/views/Default.vue';
export default {
  components:{
    default:Default,
  },
  created() {
 
document.getElementById("dong").classList.remove("loader-inner");
    document.getElementById("dong").classList.remove("ball-beat");
  },//移除载入动画
};
</script>

<style lang="scss">
@import "./assets/css/App-css/default.scss";
@import "./assets/css/App-css/reset.scss";
@import "./assets/css/App-css/font.scss";
</style>
