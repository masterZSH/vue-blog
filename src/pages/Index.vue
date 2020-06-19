<template>
  <div>
    <Header @selectMenu="selectMenu"></Header>
    <Row class="content">
      <i-col span="17">
        <div class="list">
          <List></List>
        </div>
      </i-col>
      <i-col span="7">
        <Intro></Intro>
        <Tags></Tags>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Header from "../components/Header";
import List from "../components/List";
import Intro from "../components/Intro";
import Tags from "../components/Tags";
import { getTags } from "../api/tag";
export default {
  name: "Index",
  mounted() {
    this.getTags();
  },
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
    },
    async getTags() {
      let tags = await getTags();
      this.$store.dispatch("getTags", tags);
    }
  },
  watch: {
    
  }
};
</script>
<style scoped>
.content {
  height: 80vh;
  width: 94%;
  margin: 20px auto;
}
</style>
