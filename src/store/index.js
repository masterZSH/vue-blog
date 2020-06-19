import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import article from './modules/article'
import tag from './modules/tag'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        menu,
        article,
        tag
    },
    strict: process.env.NODE_ENV !== 'production'
})