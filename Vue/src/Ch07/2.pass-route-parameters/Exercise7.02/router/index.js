import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/messagesFeed',
    name: 'messageFeed_xxx',
    component: () => import('../views/MessageFeed.vue')
  }
]

// Setting up the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
