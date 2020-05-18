<template>
    <Menu v-on:on-select="selectMenu" mode="horizontal" :theme="theme1" active-name="1">
        <div class="in-block site">
            我的站点
        </div>

        <MenuItem name="1">
            <Icon type="ios-paper" />
            首页
        </MenuItem>

        <MenuItem name="2">
            <Icon type="ios-people" />
            测试
        </MenuItem>

        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
</template>

<script>
    export default {
        name:"Header",
        data () {
            return {
                theme1: 'light'
            }
        },
        methods: {
            selectMenu:function(e){
                console.log(e);
            }
        }
    }
</script>
<style scoped>
    @import "../assets/common.css";
    
    .site{
        font-size: 20px;
        color: #101010;
        cursor: pointer;
    }
</style>
