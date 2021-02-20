<template>
  <div class="showMessageBox">
    <h1>
      <i class="el-icon-s-data"></i>
      总共有{{ count }}条评论
    </h1>

    <div class="messageList">
      <ul>
        <li v-for="message in showMessage" :key="message.id">
          <div class="title">
            <img src="https://p.qqan.com/up/2018-8/15350734334066663.jpg" />
            <div class="title_user">
              <span>{{ message.username }}</span>
              <span>{{ changeTime(message.createdAt) }}</span>
            </div>
          </div>
          <div class="content">{{ message.content }}</div>
        </li>
      </ul>
    </div>
    <div class="pageinationBox">
      <el-pagination
        layout="prev, pager, next"
        hide-on-single-page
        :pager-count="5"
        :page-size="size"
        background
        @current-change="onlineCurrentage"
        :total="count"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 5,
      showMessage: [],
      count: 1,
      messageList: [],
    };
  },
  methods: {
    changeTime(utc) {
      let data = new Date(utc);
      return data.toLocaleDateString();
    },
    onlineCurrentage(val) {
      let index = (val - 1) * this.size;
      this.showMessage = this.messageList.slice(index, index + this.size);
    },
  },
  created() {
    this.$axios({
      url:
        "http://8.136.1.191/api/api/comment/blogComment?id=" +
        this.$route.query.id,
      method: "get",
    }).then((res) => {
      this.messageList = res.data.data.datas;
      this.count = res.data.data.total;
      this.showMessage = this.messageList.slice(0, this.size);
    });
  },
};
</script>

<style lang='scss' >
@import "@/assets/css/message/showMessage.scss";
</style>