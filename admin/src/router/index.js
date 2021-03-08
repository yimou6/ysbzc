import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/layout/index.vue'),
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('../views/article/index.vue')
      },
      {
        path: 'write',
        name: 'Write',
        component: () => import('../views/write/index.vue')
      },
      {
        path: 'tag',
        name: 'Tag',
        component: () => import('../views/tag/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
