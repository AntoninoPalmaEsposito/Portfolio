import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Gg from '../views/Gg.vue'
import Welcome from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gg',
      name: 'gg',
      component: Gg
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    }
  ]
})

export default router
