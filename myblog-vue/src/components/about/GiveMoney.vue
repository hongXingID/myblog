<template>
  <div class="pic_box">
    <el-row>
      <h1>赞赏说明</h1>
      <hr>
      <p>
        如果没有特殊情况，赞赏<i class="el-icon-chicken"></i>用于补充大脑。嘻嘻
      </p>
    </el-row>
    <el-row>
      <el-col :span="24">
      </el-col>
      <el-col :sm="12" :xs="24">
        <p>微信</p>
        <img src="@/assets/img/give_money_style1.jpg" class="pic1" />
      </el-col>
      <el-col :sm="12" :xs="24">
        <p>支付宝</p>
        <img src="@/assets/img/give_money_style2.jpg" class="pic2" />
      </el-col>
    </el-row>
  </div>
</template>

<style lang='scss' scoped>
@import "@/assets/css/about/giveMoney.scss";
</style>