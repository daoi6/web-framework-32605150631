// ============================================================
// router/index.js —— ch05-routing 路由表（全章唯一，逐实验长大）
// ============================================================
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/01-basic/Home.vue'
import About from '../views/01-basic/About.vue'
import NotFound from '../views/02-redirect/NotFound.vue'
import Users from '../views/03-dynamic/Users.vue'
import User from '../views/03-dynamic/User.vue'
import Center from '../views/04-nested/Center.vue'
import CenterProfile from '../views/04-nested/CenterProfile.vue'
import CenterOrders from '../views/04-nested/CenterOrders.vue'
import NamedDemo from '../views/05-named/NamedDemo.vue'
import ProgramDemo from '../views/06-programmatic/ProgramDemo.vue'
import Search from '../views/06-programmatic/Search.vue'
import Login from '../views/07-guard/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),   // 已补全：hash 模式
  routes: [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/users', component: Users },
  { path: '/user/:id', name: 'user', component: User },
  { path: '/named', component: NamedDemo },
  { path: '/program', component: ProgramDemo },
  { path: '/search', component: Search },
  { path: '/login', component: Login },
  {
  path: '/center',
  component: Center,
  children: [ 
    { path: '', redirect: '/center/profile' },
    { path: 'profile', component: CenterProfile },
    { path: 'orders', component: CenterOrders }
  ]
},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]
})

router.beforeEach((to, from, next) => {
  // 目标是 /center 本身、或 /center/ 开头的子路由
  if (to.path === '/center' || to.path.startsWith('/center/')) {
    // 已补全：判断有没有 token
    if (localStorage.getItem('token')) {
      next() // 已补全：放行
    } else {
      next('/login') // 已补全：拦截去登录页
    }
  } else {
    next() // 已补全：非会员区，直接放行
  }
})
export default router