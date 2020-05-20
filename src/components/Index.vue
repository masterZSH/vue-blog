<template>
  <div>
    <Header @selectMenu="selectMenu"></Header>
    <Row class="content">
      <i-col span="16">
        <div class="list">
          <List></List>
        </div>
      </i-col>
      <i-col span="8" >
        <Intro></Intro>
        <Tags></Tags>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Header from "./Header";
import List from "./List";
import Intro from "./Intro";
import Tags from "./Tags";
export default {
  name: "Index",
  mounted() {},
  components: {
    Header: Header,
    List: List,
    Intro: Intro,
    Tags: Tags
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
@import "../assets/common.css";



.content {
  height: 80vh;
  width: 94%;
  margin: 20px auto;
}


</style>
