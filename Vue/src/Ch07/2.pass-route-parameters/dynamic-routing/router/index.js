import {createRouter, createWebHistory} from 'vue-router'
import users from '../assets/users.js';

const routes = [
    {
        path: '/eg1/user/:id',
        name: 'eg1', // 参数在路径中，此时的`name`是不是就显得毫无意义？
        component: () => import('../views/User1.vue'),
    },
    {
        path: '/eg2/user/:id',
        name: 'eg2',
        component: () => import('../views/User2.vue'),
    },
    {
        path: '/eg3/user/:id',
        name: 'eg3',
        component: () => import('../views/User3.vue'),
        props: true,
    },
    {
        path: '/eg4/user/:id',
        name: 'eg4',
        component: () => import('../views/UserInfo1.vue'),
        props: true,
    },
    {
        path: '/eg5/user/:id',
        name: 'eg5',
        component: () => import('../views/UserInfo2.vue'),
        // props: true,
        props: route => ({
            id: route.params.id,
            name: users[route.params.id-1].name,
            age: users[route.params.id-1].age,
        }),
    },
    {
        path: '/eg6/user/:id',
        name: 'eg6',
        component: () => import('../views/UserInfo2.vue'),
        // props: true,
        props: route => ({
            id: route.params.id,
            name: route.params.name,
            age: route.params.age,
        }),
        beforeEnter: async (to, from, next) => {
            if (!to.query || !to.query.messages) {
                const module = await import ('../assets/users.js');
                const users = module.default;
                if (users && users.length > 0) {
                    const id = to.params.id
                    to.params.name = users[id-1].name
                    to.params.age = users[id-1].age
                }
            }
            next()
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
