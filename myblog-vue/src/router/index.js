import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component:Home,
  },  
  {
    path: '/Home',
    name: 'Home',
    component:Home,
  }, 
  {
    path:'/ArticleClass',
    name:'ArticleClass',
    component:()=>import('../views/ArticleClass.vue'),
  },
   {
     path:'/Share',
     name:'Share',
     component:()=>import('../views/Share.vue')
   },
   {
     path:'/Message',
     name:'Message',
     component:()=>import('../views/Message.vue')
   },
   {
     path:'/About',
     name:'About',
     component:()=>import('../views/About')
   },
   {
    path:'/BlogDetails',
    name:'BlogDetails',
    component:()=>import('../views/BlogDetails')
  },
  {
    path:'/Search',
    name:'Search',
    component:()=>import('../views/Search')
  }
]

const router = new VueRouter({
  routes,
})

export default router
