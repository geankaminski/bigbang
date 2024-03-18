import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/payments',
      name: 'payments',
      component: HomeView
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: HomeView
    },
    {
      path: '/insights',
      name: 'insights',
      component: HomeView
    }
  ]
})

export default router
