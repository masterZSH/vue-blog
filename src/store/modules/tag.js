export default {
    state: () => ({
        tags: [],
    }),
    mutations: {
        // 设置标签
        setTags(state, tags) {
            state.tags = tags
        }
    },
    actions: {
        // 获取列表
        getTags: (context, tags) => {
            context.commit('setTags', tags)   
        }
    },
    getters: {
        // 菜单列表
        tags: (state) => {
            return state.tags
        }
    }
}