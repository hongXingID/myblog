<template>
  <div>
    <el-container>
      <el-header>
        <h1 class="header">博客管理系统</h1>
        </el-header>
   
      <el-row >
          <el-col :span='4'>
          <div class="aside">
            <my-aside />
          </div>
        </el-col>
        <el-col :span='20'>
          <router-view/>
        </el-col>
      </el-row>

    </el-container>
  </div>
</template>
<script>
import MyAside from "@/components/Aside";


export default {
  components: {
    MyAside,
  },
  data() {
    return {
      target: "",
    };
  },
  methods: {
    asideClick(e) {
      if (e.target.innerText === "文章管理") {
        this.target = "文章管理";
      } else if (e.target.innerText === "评论管理") {
        this.target = "评论管理";
      } else if (e.target.innerText === "留言管理") {
        this.target = "留言管理";
      }
    },
  },
};
</script>

<style>
.header {
  text-align: center;
}
.aside ul li {
  list-style: none;
  cursor: pointer;
  margin: 20px 0;
}
.aside ul li:hover {
  color: blueviolet;
}
</style>

