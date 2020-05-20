<template>
  <Card title="介绍" icon="ios-bookmark" :padding="0" class="intro">
    <CellGroup>
      <Cell title="昵称：xxxx" />
      <Cell title="年龄：xxxx" />
      <Cell title="性别：xxxx" />
    </CellGroup>
  </Card>
</template>

<script>
export default {
  name: "Intro",
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
.intro {
  width: 320px;
  margin: 10px auto;
}
</style>
