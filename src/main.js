import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/iview.js'
import router from './router/router'
import store from './store/index'

Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  router,
  store,
}).$mount('#app')
