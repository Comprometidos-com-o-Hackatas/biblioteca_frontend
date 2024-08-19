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

      path: '/login',
      name: 'login',
      component: LoginView

    }
  ]
})

export default router
