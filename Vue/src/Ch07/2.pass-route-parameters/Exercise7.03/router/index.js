import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import messages from '../assets/messages.js'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // path: '/about',
    path: '/about/:user',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    props: true,
    // props: route => ({ user: route.query.user || 'Adam XXX' })
    // props: { user: 'Adam Smith', age: 32 }
  },
  {
    // path: '/user',
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/AboutUser.vue'),
    props: true,
    // props: route => ({ user: route.query.user || 'Adam' })
    // props: { user: 'Adam Smith', age: 32 }
  },
  {
    path: '/messagesFeed',
    name: 'messageFeed',
    component: () => import('../views/MessageFeed.vue'),
    props: route => ({
        messages: route.query.messages?.length > 0 ? route.query.messages : [],
        // messages: route.params.messages
      }),
    beforeEnter: async (to, from, next) => {
      if (!to.query || !to.query.messages) {
        const module = await import ('../assets/messages.js');
        const messages = module.default;
        if (messages && messages.length > 0) {
          to.query.messages = messages;
          // to.params.messages = messages;
        }
      }
      next()
    }/**/
    // props: true,
    /*
    props: route => ({
      messages: route.query.messages
    }),
    props: {
      messages: messages
    }
    */
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/Message.vue'),
    props: route => ({ content: route.query.content })
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
