import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from '../App.vue'
import Index from '../components/Index.vue'
import Article from '../components/Article.vue'
import Flow from '../components/Flow.vue'

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
      path: 'flow',
      component: Flow
    },
  ]
  },

]

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})