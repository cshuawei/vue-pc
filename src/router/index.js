import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import AuthLayout from '@/views/AuthLayout'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const AuthRoutes = {
  path: '/',
  component: AuthLayout,
  children: [
    {
      path: 'login',
      name: 'pc端登录',
      components: { default: Login }
    }
  ]
}

const ExampleRoutes = {
  path: '/',
  component: Layout,
  children: [
    {
      path: 'home',
      name: 'pc端示例',
      components: { default: Home },
      meta: {
        breadcrumbs: [
          {
            text: '面板',
            disabled: false,
            href: '#/'
          }
        ]
      }
    }
  ]
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  AuthRoutes,
  ExampleRoutes
]

const router = new VueRouter({
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
