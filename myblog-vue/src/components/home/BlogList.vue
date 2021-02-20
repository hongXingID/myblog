<template>
  <div class="blogListBox">
    <div v-for="blog in showList" :key="'blog' + blog.id" class="blog">
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
    <el-pagination
      layout="prev, pager, next"
      hide-on-single-page
      :pager-count='5'
      :page-size="size"
      background
      @current-change="onlineCurrentage"
      :total="blogList.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 10,
      showList: [],
      blogList: [],
    };
  },
  methods: {
    changeTime(utc) {
      let data = new Date(utc);
      return data.toLocaleDateString();
    },

    onlineCurrentage(val) {
      let index = (val - 1) * this.size;
      this.showList = this.blogList.slice(index, index + this.size);
    },
  },
  created() {
    this.$axios({
      url: "http://8.136.1.191/api/api/blogArticle",
      method: "get",
    })
      .then((res) => {
        return JSON.parse(res.data.data);
      })
      .then((res) => {
        this.$store.commit("addBlogList", res.datas);
        this.blogList = res.datas;
        this.showList = this.blogList.slice(0, this.size);
      });
  },
};
</script>

<style lang='scss' >
@import "@/assets/css/home/blogList.scss";
</style>