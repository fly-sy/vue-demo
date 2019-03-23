import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/tabbar/Home'
import Meber from '../components/tabbar/Meber'
import Cart from '../components/tabbar/Cart'
import Search from '../components/tabbar/Search'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'
import PhotoList from '../components/photos/PhotoList'
import PhotoInfo from '../components/photos/PhotoInfo'

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
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    },
  ]
})
