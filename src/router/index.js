import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Home.vue'
import City from '@/pages/city/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
