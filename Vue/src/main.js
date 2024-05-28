import {createApp} from 'vue'
import App from './Index/App.vue'
import {createRouter, createWebHistory} from 'vue-router'

// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueSidebarMenu from './Index/vue-sidebar-menu/src'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import PrismCode from './Index/components/PrismCode.vue'
import './Index/fontawesome'

import './assets/main.css'
import {getMenuRoutes} from './menu-routes.js'

async function main() {
    const {routes} = await getMenuRoutes()
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: routes,
    })

    createApp(App)
        .use(router)
        .use(VueSidebarMenu)
        .component('prism-code', PrismCode)
        .component('font-awesome-icon', FontAwesomeIcon)
        .mount('#app')
}


main().catch(error => {
    console.error('Error message:', error)
})
