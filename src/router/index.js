import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'
import Main from '@/pages/main'
import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },{
      path:'/register',
      component: Register
    },
    {
      path: '/',
      component: Main,
      alias: '/main',
      children: [
        {
          path: 'home',
          component: Home
        }
      ]
    }
  ]
})
