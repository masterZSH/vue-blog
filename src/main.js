import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './plugins/iview.js'
import routes from './router/router'

Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:routes
})  

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
