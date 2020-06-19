<template>
  <Menu v-if="menus.length>0" v-on:on-select="selectMenu" mode="horizontal" :theme="theme" :active-name="activeMenu.name">
    <div class="in-block site">
      <router-link to="/">goBlog</router-link>
    </div>
    <MenuItem :key="key" :name="item.name" v-for="(item,key) in menus">
      <Icon :type="item.icon" />{{item.title}}
    </MenuItem>
  </Menu>
</template>

<script>
import configMenu from "../config/menu";
import menuMixIn from '../mixins/menu'


export default {
  name: "Header",
  mixins: [menuMixIn],
  mounted() {
    if (this.$store.state.menu.menus.length === 0) {
      this.$store.dispatch("initMenu", configMenu);
    }
    this.menus = this.$store.state.menu.menus;
    this.activeMenu = this.menus.find(item=>item.active === true);
  },
  data() {
    return {
      theme: "light",      // 主题
      menus: [],           // 菜单
      activeMenu: null     // 激活的菜单 
    };
  },
  methods: {
  }
};
</script>
<style scoped>
@import "../assets/common.css";

.site {
  font-size: 20px;
  color: #101010;
  cursor: pointer;
  text-align: center;
  margin-left: 40%;
}
</style>
