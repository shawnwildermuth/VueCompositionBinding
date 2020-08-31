import { createRouter, createWebHashHistory } from 'vue-router';
import Factory from "../views/Factory";
import Vuex from "../views/Vuex";
import Shared from "../views/Shared";

const routes = [
  {
    path: '/',
    name: 'Factory',
    component: Factory
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/shared',
    name: 'Shared',
    component: Shared
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
