import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AboutUs from '@/components/AboutUs'
import FamousContent from '@/components/FamousContent'
import ContentList from '@/components/ContentList'
import ContentDetail from '@/components/ContentDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/about_us',
      name: 'AboutUs',
      component: AboutUs
    }, {
      path: '/content',
      name: 'FamousContent',
      component: FamousContent,
      children: [
        {path: '/content/content_list', component: ContentList},
        {path: '/content/content_detail', component: ContentDetail}
      ]
    }
  ]
})
