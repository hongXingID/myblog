import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



import Login from '@/components/Login'
const routes = [
  {
    path:'/',
    component:Login,
  },
  {
    path:'/Login',
    name:'Login',
    component:Login,
  },
  {
    path:'/BlogEditor',
    name:'BlogEditor',
    component:()=>import('../components/BlogEditor'),
  },
  {
    path:'/Common',
    name:'Common',
    component:()=>import('../components/Common'),
  },
  {
    path:'/Message',
    name:'Message',
    component:()=>import('../components/Message'),
  },
]

const router = new VueRouter({
  routes
})



export default router
