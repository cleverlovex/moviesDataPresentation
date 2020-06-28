import Vue from 'vue'
import Router from "vue-router"
const China = () => import('views/china/China.vue')
const Japan = () => import('views/japan/Japan.vue')
const America = () => import('views/america/America.vue')

Vue.use(Router)

export default new Router({
  name: 'history',
  routes: [
    {
      path: '',
      redirect: '/china'
    },
    {
      path: '/china',
      component: China,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/japan',
      component: Japan
    },
    {
      path: '/america',
      component: America
    }
  ]
})