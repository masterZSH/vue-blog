<template>
  <div class="main">
    <img :src="png" />
  </div>
</template>

<script>
export default {
  name: "CloudWorld",
  data() {
    return {
      png: "/imgs/cloud_world.png"
    };
  }
};
</script>
<style scoped>
    .main img{
        width: 400px;
        height: 400px;
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
</style>
