<template>
  <Card icon="ios-bookmark" title="标签" class="tags">
    <Tag :key="key" v-for="(item,key) in tagList" class="tag" :title="item" :color="getColor()">{{item}}</Tag>
  </Card>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return {
       tagList:[
         "go","node.js","php","linux",
         "algorithm","network","css","js",
         "vue","react"
       ]
    };
  },
  mounted() {},
  methods: {
    getColor(){
      let colorList = [
        "success","error","warning",
        "magenta","red","volcano",
        "orange","gold","#FFA2D3",
        "#ccc"
      ]
      return colorList[Math.floor(10 * Math.random())]
    }
  },
  props: {},
  watch: {},
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


