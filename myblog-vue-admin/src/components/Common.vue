<template>
  <div>
    <div class="messageList">
      <ul>
        <li>
          <span>博客ID</span>
          <span>用户名</span>
          <span>评论内容</span>
          <span>评论时间</span>
          <span>操作</span>
        </li>
        <li v-for="(item, index) in messageList" :key="item.id">
          <span>{{ item.blogId }}</span>
          <span>{{ item.username }}</span>
          <span>{{ item.content }}</span>
          <span>{{ changeTime(item.createdAt) }}</span>
          <span>
            <el-button @click="deleteBlog({ id: item.id, index: index })"
              >删除</el-button
            >
          </span>
        </li>
      </ul>
    </div>
    <div class="footer">
      <el-button plain :disabled="prev" @click="handlePrev">上一页</el-button>
      <el-button plain :disabled="next" @click="handleNext">下一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      count: "",
      messageList: [],
      next: false,
      prev: true,
    };
  },
  methods: {
    changeTime(utc) {
      let data = new Date(utc);
      return data.toLocaleDateString();
    },
    deleteBlog(obj) {
      this.$axios({
        url: "http://8.136.1.191/api/api/comment/" + obj.id,
        method: "delete",
      }).then(() => {
        window.alert("已提交删除");
        this.messageList.splice(obj.index, 1);
      });
    },
    handlePrev() {
      this.page--;
      this.next = false;
      if (this.page <= 1) {
        this.page = 1;
        this.prev = true;
      } else {
        this.prev = false;
      }
      this.$axios({
        url:
          "http://8.136.1.191/api/api/comment/newComment?limit=10&page=" +
          this.page,
        method: "get",
      }).then((res) => {
        this.messageList = res.data.data.rows;
      });
    },
    handleNext() {
      this.page++;
      this.prev = false;
      const max = Math.ceil(this.count % 10) + 1;
      if (this.page >= max) {
        this.page = max;
        this.next = true;
      } else {
        this.next = false;
      }
      this.$axios({
        url:
          "http://8.136.1.191/api/api/comment/newComment?limit=10&page=" +
          this.page,
        method: "get",
      }).then((res) => {
        this.messageList = res.data.data.rows;
      });
    },
  },
  created() {
    this.$axios({
      url: "http://8.136.1.191/api/api/blogLogin/whoami",
      method: "get",
    })
      .then((res) => {
        if (res.data.data.id) {
          this.$axios({
            url: "http://8.136.1.191/api/api/comment/newComment",
            method: "get",
          }).then((res) => {
            this.messageList = res.data.data.rows;
            this.count = res.data.data.count;
            if (this.count <= 10) {
              this.next = true;
            }
          });
        } else {
          this.$router.push({ path: "Login" });
        }
      })
      .catch(() => {
        this.$router.push({ path: "Login" });
      });
  },
};
</script>

<style scoped>
.messageList > ul > li {
  display: flex;
  margin: 15px;
  justify-content: space-around;
}
li > span {
  width: 200px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.footer {
  display: flex;
  justify-content: space-around;
}
</style>