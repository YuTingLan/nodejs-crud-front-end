import { createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'

const routes = [
  {
    path: '/books',
    name: 'Books',
    component: BooksView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
