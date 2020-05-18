<template>
  <div class="containers">
      <div class="container">
        <textarea v-model="md"></textarea>
      </div>
      <div class="container" v-html="html">
      </div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "Blog",
  data() {
    return {
      html: "",
      md: ""
    };
  },
  mounted() {
  },
  methods: {},
  props: {},
  watch: {
    md:function(newValue){
      this.html = marked(newValue);
    }
  }
};
</script>

<style scoped>
.containers{
    display: flex;
    height: calc(100vh + 128px);
}

.containers .container{
    flex-basis: 50%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    margin-top: 5px;
    padding: 0.6em;
    border: 1px solid #ccc;
    overflow: auto;
    flex-grow: 1;
    flex-shrink: 1;
}

.containers .container textarea{
  margin-top: 5px;
    padding: 0.6em;
    border: 1px solid #ccc;
    overflow: auto;
    flex-grow: 1;
    flex-shrink: 1;
}
</style>


