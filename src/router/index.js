import { createRouter, createWebHashHistory } from 'vue-router';
//  ^^^^^^^^^^^^^^^^^^^

import Home from '../pages/Home.vue';
import Quiz from '../pages/Quiz.vue';
import ELearning from '../pages/ELearning.vue';

const router = createRouter({
  history: createWebHashHistory(), // <= EZZEL A FRISSÍTÉS NEM FOG ELTÖRNI
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/quiz', name: 'quiz', component: Quiz },
    { path: '/elearning', name: 'elearning', component: ELearning },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior: () => ({ top: 0 })
});

export default router;
