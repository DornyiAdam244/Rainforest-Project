import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Quiz from '../pages/Quiz.vue';
import ELearning from '../pages/ELearning.vue';
import Registry from '../pages/Registry.vue';
import Map from '../pages/Map.vue';
import Progress from '../pages/Progress.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/quiz', name: 'quiz', component: Quiz },
    { path: '/elearning', name: 'elearning', component: ELearning },
    { path: '/map', name: 'map', component: Map },
    { path: '/progress', name: 'progress', component: Progress },
    { path: '/registry', name: 'registry', component: Registry, props: { register: true } },
    { path: '/log-in', name: 'log-in', component: Registry, props: { register: false } },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior: () => ({ top: 0 })
});

export default router;
