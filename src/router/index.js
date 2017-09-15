import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Header from '@/components/header'
import Auth from '../components/auth'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    }
  ]
})
