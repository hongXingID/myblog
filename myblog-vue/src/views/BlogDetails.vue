<template>
  <div>
    <el-row class="blog">
      <el-col>
        <h1><i class="el-icon-position"></i>{{ blog.title }}</h1>
      </el-col>
      <el-col class="el-box">
        <div class="blogAbout">
          <span>
            <i class="el-icon-time"></i>{{ changeTime(blog.createdAt) }}</span
          >
          <span><i class="el-icon-view"></i>{{ blog.views }}</span>
          <span
            ><i class="el-icon-chat-dot-round"></i>{{ blog.commentNum }}</span
          >
          <!-- <span><i class="el-icon-postcard"></i>{{ blog.tags }}</span> -->
        </div>
      </el-col>
      <el-col>
        <el-divider></el-divider>
        <div class="content" v-html="blog.content"></div>
      </el-col>
    </el-row>
    <el-row>
      <comment-input />
    </el-row>
    <el-row>
      <show-comment />
    </el-row>
  </div>
</template>

<script>
import CommentInput from "@/components/blogDetails/CommentInput";
import ShowComment from "@/components/blogDetails/ShowComment";

export default {
  data() {
    return {
      blog: {},
    };
  },
  components: {
    CommentInput,
    ShowComment,
  },
  methods: {
    changeTime(utc) {
      let data = new Date(utc);
      return data.toLocaleDateString();
    },
  },
  created() {
    const id = this.$route.query.id;
    this.$axios({
      url: "http://8.136.1.191/api/api/blogArticle/" + id,
      method: "get",
    }).then((res) => {
      this.blog = res.data.data;
    });
  },
};
</script>

<style lang='scss' scop>
.blog {
  opacity: 0.8;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  position: relative;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 40px;
  .el-box{
    text-align: center;
    padding: 10px;
    font-size: 14px;
    .blogAbout {
    span{
      margin: 10px 20px;
    }
  }
  }
  h1 {
    text-align: center;
    border-radius: 15px;
    background: #fff;
    padding: 5px;
    font-size: 20px;
    font-weight: 600;
    a {
      &:hover {
        color: rgb(160, 106, 90);
      }
    }
  }

  p.content {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 2em;
    font-size: 16px;
    font-weight: 500;
  }
  .tags {
    display: flex;
    justify-content: flex-end;
    p {
      display: inline-block;
      margin: 5px 10px;
      padding: 5px 10px;
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>