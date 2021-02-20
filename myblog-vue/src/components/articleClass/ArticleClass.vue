<template>
  <div class="blogListBox">
    <div class="header">
      <div class="flexBox">
        <ul>
          <li :class="{ active:  this.$store.state.articleClassActive == '技术' }" @click="handleClick">
            技术
          </li>
          <li :class="{ active:  this.$store.state.articleClassActive == '生活' }" @click="handleClick">
            生活
          </li>
          <li :class="{ active:  this.$store.state.articleClassActive== '美食' }" @click="handleClick">
            美食
          </li>
          <li :class="{ active:  this.$store.state.articleClassActive == '吐槽' }" @click="handleClick">
            吐槽
          </li>
        </ul>
      </div>
    </div>
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
      :pager-count="5"
      :page-size="size"
      background
      @current-change="onlineCurrentage"
      :total="targetList.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 10,
      showList:[],
      targetList: [],
      blogClass: this.$store.getters.filterBlogList,
      blogList: [],
    };
  },
  methods: {
       changeTime(utc) {
      let data = new Date(utc);
      return data.toLocaleDateString();
    },
    onlineCurrentage(val) {
    this.targetList = this.blogList.filter((ele) => {
          return ele.tags === this.$store.state.articleClassActive;
        });
      let index = (val - 1) * this.size;
      this.showList = this.targetList.slice(index, index + this.size);
    },
    handleClick(e) {
      if (e.target.innerText == "技术") {
        this.$store.commit("changeArticleClassActive", "技术");
      } else if (e.target.innerText == "生活") {
        this.$store.commit("changeArticleClassActive", "生活");
      } else if (e.target.innerText == "美食") {
        this.$store.commit("changeArticleClassActive", "美食");
      } else if (e.target.innerText == "吐槽") {
        this.$store.commit("changeArticleClassActive", "吐槽");
      }
      this.targetList= this.blogList.filter((ele) => {
        return ele.tags === this.$store.state.articleClassActive;
      });
       this.showList = this.targetList.slice(0,this.size)
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
        this.blogList = res.datas;
        this.targetList = this.blogList.filter((ele) => {
          return ele.tags === this.$store.state.articleClassActive;
        });
        this.showList = this.targetList.slice(0,this.size)
      });
  },
};
</script>

<style lang='scss' >
@import "@/assets/css/articleClass/articleClassHeader.scss";
@import "@/assets/css/home/blogList.scss";
</style>