import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'
import { authorize } from '@/router/guard';
// HomeビューとAboutビューのインポート
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Hoge from '@/views/Hoge.vue';

const routes = [
  {
    path: '/',
    component: Home  // Homeビュールーティング
  },
  {
    path: '/about',
    component: About  // Aboutビュールーティング
  },
  {
    path: '/about/hoge',
    component: Hoge  // Hogeビュールーティング
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
