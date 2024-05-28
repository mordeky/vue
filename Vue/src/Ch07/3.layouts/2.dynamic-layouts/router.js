import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('./Level-0.vue'),
    },
    {
        path: '/update',
        component: () => import('./1-update.vue'),
    },
    {
        path: '/switch',
        component: () => import('./2-switch.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
