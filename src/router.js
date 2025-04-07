import { createRouter, createWebHistory } from 'vue-router';
import Layout from './Layout.vue';
import HomePage from './HomePage.vue';
import InfoPage from './InfoPage.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', name: 'Home', component: HomePage },
      { path: 'infos', name: 'Infos', component: InfoPage }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
