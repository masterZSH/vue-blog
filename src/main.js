import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/iview.js'
import routes from './router/router'
import store from './store/index'
import App from './App.vue'


Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:routes
})  

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
