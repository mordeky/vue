import { createApp } from 'vue'
import App from './App.vue'
import axiosPlugin from './plugins/axios.js'

const app = createApp(App)

// flag++
// create_app = true
app.use(axiosPlugin)  // We can register a plugin using the `use` instance method
// app.mount('#app')

export default app
