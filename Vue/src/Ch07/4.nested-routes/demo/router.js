import {createRouter, createWebHistory} from 'vue-router'
import messages from './messages.js'

async function beforeEnterMessage(to, from, next) {
    const id = to.params.id;
    to.params.message_xx = messages[id];
    next()
}

const routes = [
    {
        path: '/messagesFeed',
        name: 'messageFeed',
        component: () => import('./MessageFeed.vue'),
        props: route => ({messages: messages}),

        children: [{
            path: '/message/:id', // 特别注意！！！！
            name: 'message',
            component: () => import('./Message.vue'),
            // beforeEnter: beforeEnterMessage,
            // props: true,  // 必须设置`props`为 true，才能把路由参数映射到Vue组件的`属性`。
            props: route =>({
                message_xx: messages[route.params.id]
            }),

            children: [{
                path: 'author',
                name: 'messageAuthor',
                props: true,
                component: () => import('./MessageAuthor.vue'),
                beforeEnter: beforeEnterMessage
            }, {
                path: 'info',
                props: true,
                name: 'messageInfo',
                component: () => import('./MessageInfo.vue'),
                beforeEnter: beforeEnterMessage
            }]
        }]
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
