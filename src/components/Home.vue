<template>
  <div class="container">
    <Header></Header>
    <CloudWorld></CloudWorld>
    <Blog></Blog>
  </div>
</template>

<script>
import Header from "./Header";
import CloudWorld from "./CloudWorld";
import Blog from "./Blog";

export default {
  name: "Home",
  components: {
    Header: Header,
    CloudWorld: CloudWorld,
    Blog:Blog
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>
