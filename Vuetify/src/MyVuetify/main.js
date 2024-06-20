// import './assets/main.css'
import {createApp} from "vue";

import App from './App.vue'
// import App from './App-snackbar.vue'
// import App from './App-Navigation.vue'

// import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import 'vuetify/styles' // 引入 Vuetify 样式

/*
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify= createVuetify({
    components,
    directives
})
*/

const app = createApp(App)

app.use(vuetify)

export default app
