import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/iview.js'
import router from './router/router'
import store from './store/index'

Vue.use(VueRouter)
// 注册全局错误处理
Vue.config.errorHandler = function (err, vm, info) {
    console.log(err,vm,info);
}
Vue.config.productionTip = false
new Vue({
  router,
  store,
}).$mount('#app')
