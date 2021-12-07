import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'
// HomeビューとAboutビューのインポート
import Home from '@v/Home.vue';
import About from '@v/About.vue';
import Hoge from '@v/Hoge.vue';
import Family2 from '@v/Family2.vue';
import RenderKatex from '@v/RenderKatex.vue';

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
  {
    path: '/about/family2',
    component: Family2  // Family2ビュールーティング
  },
  {
    path: '/render-katex',
    component: RenderKatex  // RenderKatexビュールーティング
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
