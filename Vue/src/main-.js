// import './assets/main.css'
import {createApp} from "vue";

// import App from './Ch01/AppWelcome.vue'
// import App from './Ch01/App.vue'
// import App from './Ch02/main.js'
// import App from './Ch04/main.js'
// import App from './Ch06/main.js'
import App from './Ch07/main.js'

// console.log(typeof(App))

if ('_uid' in App)
    App.mount('#app')
else {
    const app = createApp(App)
    app.mount('#app')
}
