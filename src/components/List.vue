<template>
  <Scroll class="list" :height="500" :on-reach-bottom="handleReachBottom">
    <Card :key="index" v-for="(item,index) in list" style="width:90%;margin:0 auto;margin-bottom:20px;cursor:pointer;">
            <p @click="articleDetails" slot="title">测试标题</p>
            <div @click="articleDetails">
              <p>作者：xxxx</p>
              <p>时间：2020-05-20 10:10:10</p>
              <p>测试简介测试简介测试简介...........</p>
            </div>
    </Card>
  </Scroll>
</template>

<script>
import articleConfig from "../config/article"
import {getArticles}    from "../api/article"

export default {
  name: "List",
  mounted () {
     this.getList();
  },
  components: {},
  data() {
    return {
      page: articleConfig.defaultPage,
      size: articleConfig.defaultPageSize,
      list: []
    };
  },
  methods: {

    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list[this.list.length - 1];
          for (let i = 1; i < 11; i++) {
            this.list.push(last + i);
          }
          resolve();
        }, 2000);
      });
    },

    // 跳转详情页
    articleDetails(){
      console.log(1);
      this.$router.push(`article/${1}`);
    },
    
    getList:async function(){
      let list = await getArticles(this.page,this.size);
           this.$store.dispatch("getList");

      console.log(list);
    }
  }
};
</script>
<style scoped>
</style>
