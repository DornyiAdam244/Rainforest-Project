import { createRouter, createWebHistory } from 'vue-router';

// relatív importok, hogy az aliasok miatt ne legyen gond:
import Home from '../pages/Home.vue';
import Quiz from '../pages/Quiz.vue';
import ELearning from '../pages/ELearning.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/quiz', name: 'quiz', component: Quiz },
  { path: '/elearning', name: 'elearning', component: ELearning },
  { path: '/:pathMatch(.*)*', redirect: '/' } // opcionális 404 → főoldal
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
});

export default router;
