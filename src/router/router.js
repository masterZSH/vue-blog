import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


import Index from '../components/Index.vue'
import Home from '../components/Home.vue'


const routes = [{
  path: '/',
  component: Index,
  children: [
    // {
    //     path: '',
    //     redirect: '/home'
    // },
    {
      path: '/home',
      component: Home
    },

  ]
}]

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})