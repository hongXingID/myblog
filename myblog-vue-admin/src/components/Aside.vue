<template>

<el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true">
    
      <el-menu-item index="/BlogEditor">
        <i class="el-icon-menu"></i>
       <span slot="title">博客文章</span>
      </el-menu-item>
      <el-menu-item index="/Common">
        <i class="el-icon-document"></i>
        <span slot="title">博客评论</span>
      </el-menu-item>
       <el-menu-item index="/Message">
        <i class="el-icon-document"></i>
        <span slot="title">博客留言</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>