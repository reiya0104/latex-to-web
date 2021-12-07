import { createApp } from 'vue'
import router from '@/router/router'
import App from '@/App.vue'
import 'katex/dist/katex.min.css';
import '@/index.scss'


createApp(App).use(router)
  .mount('#app')
