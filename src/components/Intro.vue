<template>
  <Card title="介绍" icon="ios-contact"  :padding="0" class="intro">
    <CellGroup>
      <Cell>
        <span @click="backend">后端源码</span>
      </Cell>
      <Cell>
        <span @click="frontend">前端源码</span>
      </Cell>
      <Cell>
        <span @click="resources">by zsh</span>
      </Cell>
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
  methods: {
    resources(){
      window.open("https://github.com/masterZSH","__blank")
    },
    backend(){
      window.open("https://github.com/masterZSH/goBlog","__blank")
    },
    frontend(){
      window.open("https://github.com/masterZSH/vue-blog","__blank")
    }
  }
};
</script>

<style scoped>
.intro {
  width: 320px;
  margin: 10px auto;
}
</style>
