<template>
  <div>
    <my-header />
    <div class="container">
      <el-row :gutter="30">
        <el-col
          :sm="24"
          :md="16"
          style="transition: all 0.5s ease-out; margin-bottom: 30px"
        >
          <keep-alive>
            <transition mode="out-in">
              <router-view></router-view>
            </transition>
          </keep-alive>
        </el-col>
        <el-col :sm="24" :md="8">
          <my-aside />
        </el-col>
      </el-row>
    </div>
    <my-footer />
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Aside from "@/components/common/Aside";

export default {
  components: {
    "my-header": Header,
    "my-footer": Footer,
    "my-aside": Aside,
  },
};
</script>

<style lang='scss' scoped>
</style>