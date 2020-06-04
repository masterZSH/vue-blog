<template>
  <Scroll class="list" :height="500" :on-reach-bottom="handleReachBottom">
    <Card :key="index" v-for="(item,index) in list" style="width:90%;margin:0 auto;margin-bottom:20px;cursor:pointer;">
            <p @click="articleDetails" slot="title">{{item.title}}</p>
            <div @click="articleDetails">
              <p>作者：{{item.author}}</p>
              <p>时间：{{item.time}}</p>
              <p>{{item.content}}</p>
            </div>
    </Card>
  </Scroll>
</template>

<script>
import articleConfig from "../config/article"
import {getArticles}    from "../api/article"
import moment from 'moment'

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
      this.$router.push(`article/${1}`);
    },
    
    async getList(){
      let data = await getArticles(this.page,this.size);
      this.$store.dispatch("getList",data.list);
      this.list = this.mapList(data.list);
      console.log( data.list);
    },

    mapList(list){
       list.map(item=>{
          item.time = moment(item.time).format("YYYY-MM-DD HH:mm:ss")
       })
       return list;
    }
  }
};
</script>
<style scoped>
</style>
