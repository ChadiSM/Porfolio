import { createRouter, createWebHistory } from 'vue-router';
import Introduccion from './components/Introduccion.vue';
import Portfolio from './components/Portfolio.vue';
import Bocadillos from './components/bocadillo.vue';
import botones from './components/botones.vue';


const routes = [
  { path: '/', name: 'Introduccion', component: Introduccion },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/bocadillo', name: 'Bocadillos', component: Bocadillos },
  { path: '/botones', name: 'botones', component: botones },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
