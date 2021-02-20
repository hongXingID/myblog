<template>
  <div>

    <el-row class="pc_header">
      <div class="headerBack">
        <el-row class="container">
          <el-col :span="24">
            <div class="headerBox">
              <el-menu
                :router="true"
                text-color="#bfbec9"
                :default-active="$route.path"
                class="el-menu-demo"
                mode="horizontal"
              >
                <el-menu-item index="/Home">
                  <i class="el-icon-house"></i>首页
                </el-menu-item>
                <el-menu-item index="/ArticleClass">
                  <i class="el-icon-tickets"></i>文章分类
                </el-menu-item>
                <el-menu-item index="/Share">
                  <i class="el-icon-date"></i>日历分享
                </el-menu-item>
                <el-menu-item index="/Message">
                  <i class="el-icon-edit-outline"></i>留言
                </el-menu-item>
                <el-menu-item index="/About">
                  <i class="el-icon-user"></i>关于
                </el-menu-item>
                <div class="searchBox">
                  <i class="el-icon-search search_icon"></i>
                  <div class="searchInput">
                    <el-input
                      placeholder="搜博客文章"
                      icon="search"
                      v-model="input"
                      @keyup.enter.native="searchEnterFun"
                    >
                    </el-input>
                  </div>
                </div>
              </el-menu>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="headerImgBox"
        :style="{
          backgroundImage: this.$store.state.themeObj.header_bg
            ? 'url(' + this.$store.state.themeObj.header_bg + ')'
            : 'url(static/image/header_bg.jpg)',
        }"
      >
        <div class="title">
          <h1>Hello,World!</h1>
        </div>
        <div class="header_pic">
          <a href="#/About">
            <img src="../../assets/img/header_pic.jpg" alt="" />
          </a>
          <h2 class="header_pic_description">
            <a href="#/About">
              {{
                this.$store.state.themeObj.description
                  ? this.$store.state.themeObj.description
                  : "Never get up"
              }}
            </a>
          </h2>
        </div>
      </div>
    </el-row>
     
    <el-row class="phone_header container"> 
      <div class="hideMenu" @click="handleClick">
        <i  class="el-icon-menu"></i>
        <el-collapse-transition>
          <el-menu
            class="phone_menu"
            v-show="pMenu"
            theme="dark"  
            :unique-opened="true"
            :router="true"
          >
             <el-menu-item index="/Home">
                  <i class="el-icon-house"></i>首页
                </el-menu-item>
                <el-menu-item index="/ArticleClass">
                  <i class="el-icon-tickets"></i>文章分类
                </el-menu-item>
                <el-menu-item index="/Share">
                  <i class="el-icon-date"></i>日历分享
                </el-menu-item>
                <el-menu-item index="/Message">
                  <i class="el-icon-edit-outline"></i>留言
                </el-menu-item>
                <el-menu-item index="/About">
                  <i class="el-icon-user"></i>关于
                </el-menu-item>
          </el-menu>
        </el-collapse-transition>
        <div class="searchBox">
          <el-input
            placeholder="搜博客文章"
            prefix-icon="el-icon-search"
            v-model="input"
            @keyup.enter.native="searchEnterFun"
            :on-icon-click="searchEnterFun"
          >
          </el-input>
        </div>
      </div>
    </el-row>

    <el-row class="phone_top container">
      <div class="phone_top_box">
        <div class="title">
          <a href="#/About">
            <img src="../../assets/img/header_pic.jpg" alt="" />
          </a>
          <h1>Hello,World!</h1>
        </div>
      </div>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
  return {
    pMenu:false,
    input:'',
  }
  },
  methods: {
    searchEnterFun() {
     this.$router.push({path:'/Search',query:{title:this.input}})
    },
    handleClick(e){
      if(e.target.tagName == 'I'){
        if(this.pMenu){
          this.pMenu=false;
        }else{
          this.pMenu=true;
        }
      }else{
        
        this.pMenu=false;
      }
    }
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/common/header.scss";
</style>