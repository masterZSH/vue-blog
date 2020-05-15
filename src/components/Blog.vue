<template>
<div class="blog">
  <div class="blog-header">
      <span>测试标题</span>
  </div>
  <div class="blog-main">    
  </div>
</div>
</template>

<script>
export default {
  name: "Blog",
  mounted() {
    
  },
  methods: {
    
  },
  props: {
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.blog {
    width: 800px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -400px;
    overflow-x: hidden;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    transition: 4.6s;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}

.blog .blog-header{
    position: absolute;
    top: 6%;
    width: 200px;
    height: 40px;
    left: 50%;
    margin-left: -100px;
    text-align: center;
    line-height: 40px;
}



</style>
