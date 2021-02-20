<template>
  <div class="message_input_box">
    <h1><i class="el-icon-edit-outline"></i>留言信息</h1>
    <div class="username_input">
      <el-input v-model="input" placeholder="请输入昵称"></el-input>
    </div>

    <div class="message_input">
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="textarea"
        :rows="10"
      >
      </el-input>
    </div>

    <div class="btn">
      <el-button @click="handleClick" type="primary">点击提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      textarea: "",
    };
  },
  methods: {
    handleClick() {
      if (this.input === "" || this.input === null) {
        window.alert("用户名不能为空");
      } else if (this.textarea === "" || this.textarea === null) {
        window.alert("内容不能为空");
      } else {
        this.$axios({
          url: "http://8.136.1.191/api/api/comment/",
          method: "post",
          data: {
            blogId: -1,
            username: this.input,
            content: this.textarea,
          },
        }).then(() => {
          window.alert("留言已提交");
          let NewPage = "_empty" + "?time=" + new Date().getTime() / 500;
          this.$router.push(NewPage);
          this.$router.go(-1);
        });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/message/messageInput.scss";
</style>