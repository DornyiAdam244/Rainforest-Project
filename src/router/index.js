import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Quiz from '../pages/Quiz.vue';
import ELearning from '../pages/ELearning.vue';
import Registry from '../pages/Registry.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/quiz', name: 'quiz', component: Quiz },
    { path: '/elearning', name: 'elearning', component: ELearning },
    { path: '/:pathMatch(.*)*', redirect: '/' },
    {path: '/registry', name: 'registry', component: Registry}
  ],
  scrollBehavior: () => ({ top: 0 })
});

export default router;
