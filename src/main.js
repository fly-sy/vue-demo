// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { NavBar ,Tabbar, TabbarItem, Swipe, SwipeItem,Card ,Button} from 'vant'

Vue.use(NavBar)
   .use(Tabbar)
   .use(TabbarItem)
   .use(Swipe)
   .use(SwipeItem)
   .use(Card)
   .use(Button)


// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// 设置全局根路径
// Vue.http.options.root = "http://127.0.0.1:5000/"
// Vue.http.options.emulateJSON = true  



import axios from 'axios' 
Vue.prototype.$http = axios  
axios.defaults.baseURL = "http://127.0.0.1:5000/"


// 引入animate.css 
import 'animate.css/animate.css'


import moment from 'moment'
// 定义全局事件过滤器
Vue.filter('datefmt',function(date,str="YYYY-MM-DD hh:mm:ss"){
  return moment(date).format(str)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
