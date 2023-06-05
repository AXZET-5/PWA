import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import NewPage from './views/NewPage.vue'
import AboutPage from './views/AboutPage.vue'
import OptionsPage from './views/OptionsPage.vue'
import LogsPage from './views/LogsPage.vue'
import ProfilePage from './views/ProfilePage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'NewPage', component: NewPage },
      { path: '/about', name: 'AboutPage', component: AboutPage },
      { path: '/options', name: 'OptionsPage', component: OptionsPage },
      { path: '/logs', name: 'LogsPage', component: LogsPage },
      { path: '/profile', name: 'ProfilePage', component: ProfilePage },
    ]
  });

const app = createApp(App)
app.use(router)
app.mount('#app')