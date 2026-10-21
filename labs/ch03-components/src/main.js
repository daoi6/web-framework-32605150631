import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GlobalDemo from './experiments/03-register/GlobalDemo.vue'

const app = createApp(App)
// 全局注册组件：整个项目任意地方直接写标签，不需要import
app.component('GlobalDemo', GlobalDemo)

app.mount('#app')