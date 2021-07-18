import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/store'

import '../src/css/main.scss'

createApp(App).use(router).use(store).mount('#app')
