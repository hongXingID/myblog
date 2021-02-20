<template>
  <div class="aside_box hidden-sm-and-down">
    <section>
      <div class="top">
        <img :src="this.$store.state.themeObj.aside_title_pic" alt="" />
        <!-- <h1>
          <span>Eric</span>
        </h1> -->
      </div>
      <div class="bottom">
        <p><i class="el-icon-link"></i> 链接地址</p>
        <div class="call-me">
          <el-tooltip class="item" content="Github" placement="top">
            <a href="https://github.com/hongXingID" target="_blank"
              ><i class="iconfont icon-huaban88"></i
            ></a>
          </el-tooltip>
          <el-tooltip class="item" content="CSDN" placement="top">
            <a href="https://blog.csdn.net/Mr_RedStar" target="_blank"
              ><i class="iconfont icon-csdn"></i
            ></a>
          </el-tooltip>
          <el-tooltip class="item" content="更多" placement="top">
            <a href="#/About"><i class="el-icon-more"></i></a>
          </el-tooltip>
        </div>
      </div>
    </section>
    <section class="blog_share">
      <h2 class="blog_share_title">大家都看了啥？</h2>
      <ul>
        <li v-for="(item, index) in blogList" :key="item.id">
          {{ index + 1 + "." }}
          <a :href="'#/BlogDetails?id=' + item.id" target="_blank">{{ item.title }}</a>
          <span><i class="el-icon-view"></i> {{ item.views }}</span>
        </li>
      </ul>
    </section>
    <section class="blog_comment">
      <h2 class="blog_comment_title">大家都说了啥？</h2>
      <ul>
        <li v-for="(item, index) in commentList" :key="'commentList' + index">
          <a href="#/Home" >
            <div class="comment_pic">
              <img :src="$store.state.themeObj.aside_comment_pic" />
            </div>
            <div class="comment_content">
              <p class="author">
                <span>{{ item.username }}</span>  <span class="el-icon-thumb">评论了一句</span
                >:
              </p>
              <p class="content">{{ item.content }}</p>
              <p class="time">
                <i class="el-icon-time"></i>
                {{ changeTime(item.createdAt)}}
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogList: [],
      commentList: [],
    };
  },
  methods:{
changeTime(utc) {
      let data = new Date(utc);
      return data.toLocaleDateString();
    },
  },
  created(){
    this.$axios({
      url:'http://8.136.1.191/api/api/blogArticle/hotViews',
      method:'get'
    }).then(res=>{
     return JSON.parse(res.data.data)
    }).then(res=>{
     this.blogList =  res.rows
    })
    this.$axios({
      url:'http://8.136.1.191/api/api/comment/newComment',
      methods:'get'
    }).then(res=>{
      this.commentList = res.data.data.rows;
    })
  },

};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/aside.scss";
</style>