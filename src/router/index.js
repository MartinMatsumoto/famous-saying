import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AboutUs from '@/components/AboutUs'
import FamousContent from '@/components/FamousContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/about_us',
      name: 'AboutUs',
      component: AboutUs
    },{
      path: '/content',
      name: 'FamousContent',
      component: FamousContent
    }
  ]
})
