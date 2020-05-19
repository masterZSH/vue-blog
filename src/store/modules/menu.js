export default {
    state: () => ({
        menus: [],
    }),
    mutations: {
        setMenus(state, menus) {
            state.menus = menus
        }
    },
    actions: {
        initMenu: (context, menus) => {
            if (context.state.menus.length === 0) {
                context.commit('setMenus', menus)
            }
        }
    },
    getters: {

        // 菜单列表
        menus: (state) => {
            return state.menus
        },

        // 获取激活的菜单
        getActiveMenu: (state) => {
            return state.menus.find(
                item =>item.active === true
            )
        }
    }
}