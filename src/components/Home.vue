<template>
  <div class="container">
    <Header></Header>
    <Blog></Blog>
  </div>
</template>

<script>
import Header from "./Header";
import Blog from "./Blog";

export default {
  name: "Home",
  components: {
    Header: Header,
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
