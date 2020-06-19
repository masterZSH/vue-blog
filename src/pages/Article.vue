<template>
  <div>
    <Header></Header>
    <Row class="content">
      <i-col span="17">
        <div class="article" v-html="html"></div>
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
import Intro from "../components/Intro";
import Tags from "../components/Tags";
import markedMixIn from "../mixins/marked";
import {getArticle} from "../api/article"

export default {
  name: "Article",
  mixins: [markedMixIn],
  components: {
    Header: Header,
    Intro: Intro,
    Tags: Tags
  },
  data() {
    return {
      html: "", // html文档
      article: null , // 文章对象
    };
  },
  mounted() {
      this.getArticle()
  },
  methods: {
    async getArticle(){
      let id = this.$route.params.id;
      let article = await getArticle(id);
      this.article = article
      this.html = this.marked(article.content);
      document.title = article.title;
    }
  },
  props: {},
  watch: {}
};
</script>

<style scoped>

.article {
  width: 94%;
  border: 1px solid #dcdee2;
  border-color: #e8eaec;
  margin: 10px auto;
  padding: 15px 25px;
  overflow-x: scroll;
  border-radius: 4px;
}

.article:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}
</style>


