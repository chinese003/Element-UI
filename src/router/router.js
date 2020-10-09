import Vue from 'vue'
import Router from 'vue-router'

const Login=()=>import('@/views/login')
//1.安装插件
Vue.use(Router)

//2.创建对象
const routes=[
  {
    path:'/',
    redirect:'./src/views/login'
  },
  {
    path:'/login',
    component:Login,
    meta:{
      title:'登陆'
    }
  },
  {
    path:'/home',
    component:()=>import('@/views/home'),
    meta:{
      title:'首页'
    }
  },
]

const router=new Router({
  routes,
  mode:'history'
})

//3.导出
export default router
