import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/Home'
import Meber from '../components/tabbar/Meber'
import Cart from '../components/tabbar/Cart'
import Search from '../components/tabbar/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/meber',
      component: Meber
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
  ]
})
