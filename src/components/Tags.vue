<template>
  <Card class="tags" icon="ios-bookmark">
    <p slot="title">标签</p>
    <Tag class="tag" title="go" color="primary">go</Tag>
    <Tag color="success">node.js</Tag>
    <Tag color="error">php</Tag>
    <Tag color="warning">linux</Tag>
    <Tag color="magenta">algorithm</Tag>
    <Tag color="red">netword</Tag>
    <Tag color="volcano">css</Tag>
    <Tag color="orange">js</Tag>
    <Tag color="gold">vue</Tag>
    <Tag color="#FFA2D3">react</Tag>
  </Card>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  props: {},
  watch: {}
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


