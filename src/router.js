import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Profile from './Profile'
import Test from './Test'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/test',
      component: Test
    }
  ]
})