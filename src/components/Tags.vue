<template>
  <Card icon="ios-bookmark" title="标签" class="tags">
    <Tag  :key="key" v-for="(item,key) in tags" class="tag" :title="item" :color="getColor()">
      <span @click.prevent="chooseTag(key)">{{item}}</span>
    </Tag>
  </Card>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return {
       
    };
  },
  mounted() {},
  methods: {
    // 获取颜色
    getColor(){
      let colorList = [
        "success","error","warning",
        "magenta","red","volcano",
        "orange","gold","#FFA2D3",
      ]
      return colorList[Math.floor(10 * Math.random())]
    },

    // 选择标签
    chooseTag(key)  {
      let tag = this.tags[key]
      this.$router.push({ path: `/index/${tag}`})
    }
  },
  props: {},
  watch: {},
  computed:{
    tags(){
      return this.$store.getters.tags;
    }
  }
};
</script>

<style scoped>
.tags {
  width: 320px;
  margin: 20px auto;
  height: 250px;
}

.tags .tag {
  cursor: pointer;
}
</style>


