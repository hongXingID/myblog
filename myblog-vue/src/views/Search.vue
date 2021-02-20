<template>
  <div class="blogListBox">
    <div v-if="searchList.length === 0">
      <h1>搜索不到您想要的博客文章，请重新输入</h1>
    </div>

    <div v-else v-for="blog in searchList" :key="'blog' + blog.id" class="blog">
      <el-row>
        <el-col>
          <h1>
            <a :href="'#/BlogDetails?id=' + blog.id"
              ><i class="el-icon-position"></i>{{ blog.title }}</a
            >
          </h1>
        </el-col>
        <el-col>
          <el-divider></el-divider>
          <p class="description">
            {{ blog.description }}
          </p>
        </el-col>
        <el-col>
          <div class="tags">
            <p>
              <i class="el-icon-time"></i>
              {{ changeTime(blog.createdAt) }}
            </p>
            <p>
              <i class="el-icon-chat-round"></i>
              {{ blog.commentNum }}
            </p>
            <p>
              <i class="el-icon-view"></i>
              {{ blog.views }}
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchList: [],
    };
  },
  methods:{
      changeTime(utc) {
      let data = new Date(utc);
      return data.toLocaleDateString();
    },
  },
  created() {
    this.$axios({
      url: "http://8.136.1.191/api/api/searchBlog?title=" + this.$route.query.title,
      method: "get",
    }).then((res) => {
      this.searchList = res.data.data;
    });
  },
};
</script>

<style lang='scss' >
@import "@/assets/css/home/blogList.scss";
</style>