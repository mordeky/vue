import {createApp} from "vue"
import App from './App.vue'
import axios from './plugins/axios'

function usePlugins(){
    const BASE_URL = 'https://jsonplaceholder.typicode.com'

    app.use(axios)
    app.use({
        install(_app) {
            _app.config.globalProperties.$baseUrl = BASE_URL
        }
    })
}

// window.flag++
// console.log(window.flag)
// create_app = true
const app = createApp(App)
usePlugins(app)
// app.mount('#app')

export default app
