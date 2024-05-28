import {createRouter, createWebHistory} from 'vue-router'
// import {normRoutes} from "@/assets/norms.js";

function getRouter(routes) {
    // normRoutes(routes)
    return createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
    })
}

export default getRouter
