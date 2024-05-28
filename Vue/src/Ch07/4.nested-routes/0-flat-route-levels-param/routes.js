export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./Level-0.vue'),
    },
    {
        path: '/1',
        name: 'level1',
        component: () => import('./Level-1.vue'),
    },
    {
        path: '/1.1',
        name: 'level2',
        component: () => import('./Level-2.vue'),
    }
]

import {normRoutesName} from "./norms.js";
normRoutesName(routes)
