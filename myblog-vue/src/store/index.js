import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict:true,
  state: {
    themeObj:{
      header_bg:'https://iknow-pic.cdn.bcebos.com/2934349b033b5bb5811f10973fd3d539b700bc8a?x-bce-process=image/quality,q_85',
      description:'Welcome to my blog',
      aside_title_pic:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1906638514,167801353&fm=26&gp=0.jpg',
      aside_comment_pic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3820085319,1912685191&fm=26&gp=0.jpg',
    },
    aboutObj:{
      image:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1601064651,834704908&fm=26&gp=0.jpg',
    },
    blogList: [],
    messageList:[],
    articleClassActive:'技术',
  },
  getters:{
    filterBlogList(state){
            let blogList = state.blogList;
            let obj = {};
           obj.technology = blogList.filter(ele=>{
              return ele.tags == '技术'
            });
            obj.life = blogList.filter(ele=>{
              return ele.tags == '生活'
            });
            obj.food = blogList.filter(ele=>{
              return ele.tags == '美食'
            });
            obj.say = blogList.filter(ele=>{
              return ele.tags == '吐槽'
            });
            return obj
    }
  },
  mutations: {
    changeArticleClassActive(state,payload){
      state.articleClassActive=payload
    },
    addBlogList(state,payload){
     state.blogList = payload
   }
  },
  actions: {
   
  },
  modules: {
  }
})
