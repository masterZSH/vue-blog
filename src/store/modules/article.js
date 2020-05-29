export default {
    state: () => ({
        list: [],
    }),
    mutations: {
        // 设置列表值
        setList(state, list) {
            state.list = list
        },

        // 追加列表
        appendList(state, list) {
            state.list = state.list.concat(list)
        }
    },
    actions: {
        // 获取列表
        getList: (context, list) => {
            if (context.state.list.length === 0) {
                context.commit('setList', list)
                return;
            }
            context.commit('appendList', list)
        }
    },
    getters: {
        // 菜单列表
        list: (state) => {
            return state.list
        }
    }
}