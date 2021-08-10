import Vue from 'vue'
import VueRouter from 'vue-router'
import Nous from '../views/Nous.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Nous',
    component: Nous
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '@/components/NosClients.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
