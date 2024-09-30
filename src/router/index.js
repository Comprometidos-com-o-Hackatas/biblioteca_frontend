import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/detail/:id',
      name: 'book-detail',
      component: () => import('../views/BookDetailView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/booked',
      name: 'booked',
      component: () => import('../views/TaxesBooksView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/booked/taxes/:id',
      name: 'taxes',
      component: () => import('../views/TaxesView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/config',
      name: 'config',
      component: () => import('../views/ConfigView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/User',
      name: 'User',
      component: () => import('../views/UserView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/saved-books',
      name: 'saved-books',
      component: () => import('../views/SavedBooksView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('../views/reportPDFView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/pagenotfound',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    }
  ]
})

router.beforeEach((to, from, next) =>{
  if (to.meta.requiresAuth && !localStorage.getItem('access')) {
    next({ path: '/pagenotfound' });
  }
  else if(!to.meta.requiresAuth && localStorage.getItem('access')){
    next({ path: '/pagenotfound' })
  }
  else{
    next()
  }
})

export default router
