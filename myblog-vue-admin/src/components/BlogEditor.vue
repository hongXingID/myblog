<template>
  <div>
    <div class="upload">
      <el-button @click="drawer = !drawer"
        ><i class="el-icon-refresh-left"></i
        >{{ drawer === false ? "上传博客文章" : "管理博客文章" }}</el-button
      >
    </div>
    <div v-if="drawer == true"><vue-quill-editor /></div>
    <div v-else>
      <div class="blogList">
        <ul>
          <li>
            <span>标题</span>
            <span>描述</span>
            <span>浏览量</span>
            <span>操作</span>
          </li>
          <li v-for="(item, index) in blogArticleList" :key="item.id">
            <span>{{ item.title }}</span>
            <span>{{ item.description }}</span>
            <span>{{ item.views }}</span>
            <span>
              <el-button @click="deleteBlog({ id: item.id, index: index })"
                >删除</el-button
              >
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import vueQuillEditor from "@/components/vue-quill-editor";
export default {
  components: {
    vueQuillEditor,
  },
  data() {
    return {
      page: 1,
      count: "",
      drawer: false,
      direction: "ttb",
      blogArticleList: "",
    };
  },
  methods: {
    deleteBlog(obj) {
      this.$axios({
        url: "http://8.136.1.191/api/api/blogArticle/" + obj.id,
        method: "delete",
      }).then(() => {
        window.alert("已提交删除");
        this.blogArticleList.splice(obj.index, 1);
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
            url:
              "http://8.136.1.191/api/api/blogArticle?limit=10&page=" +
              this.page,
            method: "get",
          })
            .then((res) => {
              return JSON.parse(res.data.data);
            })
            .then((res) => {
              this.count = res.total;
              this.blogArticleList = res.datas;
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
.blogList ul {
  padding: 0;
}
.blogList ul li {
  margin: 10px;
  display: flex;
  justify-content: space-around;
}
.blogList ul li:nth-of-type(1) span {
  font-size: 18px;
  font-weight: 600;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.blogList ul li > span {
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5em;
  width: 200px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 5px;
  white-space: nowrap;
}
.upload {
  text-align: center;
}
</style>