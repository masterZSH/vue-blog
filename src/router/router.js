import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from '../App.vue'
import Index from '../pages/Index.vue'
import Article from '../pages/Article.vue'
import Flow from '../pages/Flow.vue'
import Edit from '../pages/Edit.vue';

const routes = [
  {
  path: '/',
  component: App,
  children: [
    {
        path: '',
        redirect: '/index'
    },
    {
      path: 'article/:id',
      component: Article
    },
    {
      path: 'index',
      component: Index
    },
    {
      path: 'index/:tag',
      component: Index
    },
    {
      path: 'flow',
      component: Flow
    },
    {
      path: 'edit',
      component: Edit
    },
  ]
  },

]

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})