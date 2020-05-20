export default {
    methods: {
        selectMenu(e) {
            let name = e;
            let menu = this.$store.state.menu.menus.find(item => item.name === name);
            if (menu.to && this.$route.fullPath !== menu.to) {
                this.$router.push(menu.to);
            }
        }
    }
}