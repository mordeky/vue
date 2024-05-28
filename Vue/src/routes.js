import Installation from "./Index/components/Installation.vue";
import BasicUsage from "./Index/components/BasicUsage.vue";
import Props from "./Index/components/Props.vue";
import Events from "./Index/components/Events.vue";
import Styling from "./Index/components/Styling.vue";
import Slots from "./Index/components/Slots.vue";

import {routes as ch07} from './Ch07/routes.js'


const routes = [
    ...ch07,
    {
        path: '/',
        name: 'Installation',
        component: Installation,
    },
    {
        path: '/basic-usage',
        name: 'BasicUsage',
        component: BasicUsage,
    },
    {
        path: '/props',
        name: 'Props',
        component: Props,
    },
    {
        path: '/events',
        name: 'Events',
        component: Events,
    },
    {
        path: '/styling',
        name: 'Styling',
        component: Styling,
    },
    {
        path: '/slots',
        name: 'Slots',
        component: Slots,
    },
    {
        path: '/:pathMatch(.*)',
        component: Installation,
    },
]

export default routes;
