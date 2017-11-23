import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import Repositories from '@/components/pages/Repositories'
import Stars from '@/components/pages/Stars'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/repositories',
      name: 'Repositories',
      component: Repositories
    },
    {
      path: '/stars',
      name: 'Stars',
      component: Stars
    }
  ]
})
