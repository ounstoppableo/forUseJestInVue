import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import elementPlus from 'element-plus'

const app = createApp(App)
app.use(elementPlus)
app.mount('#app')
