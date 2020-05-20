import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/iview.js'
import router from './router/router'
import store from './store/index'
import App from './App.vue'


Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
