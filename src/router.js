import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/offer',
      name: 'offer',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "about" */ './views/Offer.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "about" */ './views/Gallery.vue'),
    },
  ],
});
