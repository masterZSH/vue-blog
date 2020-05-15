<template>
  <div id="app">
    <Flow></Flow>
    <Blog></Blog>
  </div>
</template>

<script>
import Flow from "./components/Flow";
import Blog from "./components/Blog";

export default {
  name: "App",
  components: {
    Flow: Flow,
    Blog: Blog
  }
};
</script>

<style>
</style>
