import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Profile from './Profile'
import NewsFeed from './NewsFeed'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/',
      component: NewsFeed
    }
  ]
})