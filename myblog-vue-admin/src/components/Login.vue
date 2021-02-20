<template>
  <div>
    <div class="box">
      <el-input placeholder="请输入用户名" v-model="username"  clearable>
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
      ></el-input>
    </div>
    <div class="btn">
        <el-button @click='handleClick'>登录授权</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods:{
      handleClick(){
          if(this.username === '' || this.password === null){
              window.alert('用户名不能为空')
          }else if(this.password === '' || this.password === null){
              window.alert('密码不能为空')
          }else{
              this.$axios({
                  url:'http://8.136.1.191/api/api/blogLogin',
                  method:'post',
                  data:{
                      loginId:this.username,
                      loginPwd:this.password,
                  }
              }).then(res =>{
               if(res.data.data.id){
                 this.$router.push({path:'BlogEditor'})
               }else{
                   window.alert('账号或者密码错误')
               }
              }).catch(()=>{
                  window.alert('登录失败')
              })
          }
      }
  }
};
</script>

<style scoped>
.box,.btn{
    margin: 50px 20px;
}
.box>.el-input{
    margin:20px
}
.btn{
  text-align: center;
}
</style>