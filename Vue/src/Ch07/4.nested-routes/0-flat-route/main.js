import { createApp } from 'vue'
import App from './App.vue'

import {routes} from './routes.js'
// import {routes} from './routes-nested.js'
import getRouter from '@/assets/router'

import '../assets/main.css'

const app = createApp(App)

app.use(getRouter(routes))

// app.mount('#app')
export default app
