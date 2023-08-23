import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import Studies from './components/Studies.vue'
import Experiences from './components/Experiences.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Hobbies from './components/Hobbies.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/studies', component: Studies},
    { path: '/experiences', component: Experiences},
    { path: '/skills', component: Skills},
    { path: '/projects', component: Projects},
    { path: '/hobbies', component: Hobbies},
    { path: '/contact', component: Contact},
    { path: '/:pathMatch(.*)*', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount('#app')