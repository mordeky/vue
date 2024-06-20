// import './assets/main.css'
import {createApp} from "vue";

// import App from './Ch01/AppWelcome.vue'
// import App from './Ch01/App.vue'
// import App from './Ch02/main.js'
// import App from './Ch04/main.js'
// import App from './Ch06/main.js'
// import App from './Ch07/main.js'
// import App from './Ch09/main.js'
// import App from './Ch10/main.js'

// import App from './Exam/main.js'

import App from './Lec10-StateManagement/Pinia/main.js'
// import App from './Lec10-StateManagement/Vuex/main.js'

// import App from './Express/App.vue'

// import App from './Vuetify/main.js'
// console.log(typeof(App))

if ('_uid' in App)
    App.mount('#app')
else {
    const app = createApp(App)
    app.mount('#app')
}
