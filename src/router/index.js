import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {

      path: '/:id',
      name: 'book-detail',
      component: () => import('../views/BookDetailView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/booked',
      name: 'booked',
      component: () => import('../views/TaxesBooksView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/booked/taxes/:id',
      name: 'taxes',
      component: () => import('../views/TaxesView.vue')
    },
    {
      path: '/User',
      name: 'User',
      component: () => import('../views/UserView.vue')
    },
  ]
})

export default router
