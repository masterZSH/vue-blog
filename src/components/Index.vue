<template>
  <div>
    <Header @selectMenu="selectMenu"></Header>
    <List></List>
  </div>
</template>

<script>
import Header from "./Header";
import List from "./List";
export default {
  name: "Index",
  mounted() {},
  components: {
    Header: Header,
    List: List
  },
  data() {
    return {};
  },
  methods: {
    selectMenu(e) {
      console.log(e);
    }
  }
};
</script>
<style scoped>
</style>
