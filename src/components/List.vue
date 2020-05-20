<template>
  <Scroll class="list" :height="500" :on-reach-bottom="handleReachBottom">
    <Card @click.prevent="article" :key="index" v-for="(item,index) in list" style="width:90%;margin:0 auto;margin-bottom:20px;cursor:pointer;">
            <p @click.prevent="article" slot="title">测试标题</p>
            <p >作者：xxxx</p>
            <p >时间：2020-05-20 10:10:10</p>
            <p @click.prevent="article">测试简介测试简介测试简介...........</p>
    </Card>
  </Scroll>
</template>

<script>
export default {
  name: "List",
  components: {},
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list1[this.list1.length - 1];
          for (let i = 1; i < 11; i++) {
            this.list1.push(last + i);
          }
          resolve();
        }, 2000);
      });
    },
    article(){
      console.log(1);
      this.$router.push(`article/${1}`);
    }
  }
};
</script>
<style scoped>

</style>
