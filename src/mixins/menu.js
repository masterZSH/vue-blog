export default {
    methods: {

        /**
         * 选择菜单触发事件
         * 
         * @param {string} e -菜单名称 menu.name 
         */
        selectMenu(e) {
            let name = e,
                menu = this.$store.state.menu.menus.find(item => item.name === name);
            if (menu.to && this.$route.fullPath !== menu.to) {
                this.$router.push(menu.to);
                this.updateTitle(menu.title);
            }
        },

        /**
         * 更新页面标题
         * 
         * @param {string} title 
         */
        updateTitle(title) {
            document.title = title;
        }
    }
}