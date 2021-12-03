import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus'
import App from './App.vue'
import './index.css'
import 'element-plus/dist/index.css';

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
