import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/home',
    children: [
      { path: '/home', name: 'Home', component: () => import('@/views/home') },
      { path: '/qa', name: 'Qa', component: () => import('@/views/qa') },
      {
        path: '/video',
        name: 'Video',
        component: () => import('@/views/video')
      },
      { path: '/my', name: 'My', component: () => import('@/views/my') }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/editUserInfo',
    name: 'EditUserInfo',
    component: () => import('@/views/user')
  }
]

const router = new VueRouter({
  routes
})

export default router
