<template>
  <Scroll class="list" :height="500" :on-reach-bottom="handleReachBottom">
    <Card
      :key="index"
      v-for="(item,index) in list"
      style="width:90%;margin:0 auto;margin-bottom:20px;cursor:pointer;"
    >
      <p @click="articleDetails(index)" slot="title">{{item.title}}</p>
      <div @click="articleDetails(index)">
        <p>作者：{{item.author}}</p>
        <p>时间：{{item.time}}</p>
        <p>{{description(item.content)}}</p>
      </div>
    </Card>
  </Scroll>
</template>

<script>
import articleConfig from "../config/article";
import { getArticles } from "../api/article";
import moment from "moment";

export default {
  name: "List",
  mounted() {
    let tag = this.$route.params.tag;
    if(tag){
      this.tag = tag;
    }
    this.getList();
  },
  components: {},
  data() {
    return {
      page: articleConfig.defaultPage,
      size: articleConfig.defaultPageSize,
      tag: "",
      list: [],
      noMore: false
    };
  },
  methods: {
    handleReachBottom() {
      return new Promise(resolve => {
        setTimeout(async () => {
          await this.getList();
          resolve();
        }, 2000);
      });
    },

    // 跳转详情页
    articleDetails(idx) {
      let id = this.list[idx]._id;
      this.$router.push(`article/${id}`);
    },

    async getList() {
      let data = await getArticles(this.page, this.size, this.tag);
      if (this.noMore) return;
      if (!data.list) {
        this.noMore = true;
        this.$Message.info("没有更多了");
        return;
      }
      data.list = this.mapList(data.list);
      if (this.list.length === 0) {
        this.list = data.list;
      }
      if (this.page > articleConfig.defaultPage) {
        this.list = this.list.concat(data.list);
      }
      if (data.list.length > 0) {
        this.page++;
      }
      this.$store.dispatch("getList", data.list);
    },

    mapList(list) {
      list.map(item => {
        item.time = moment(item.time * 1000).format("YYYY-MM-DD HH:mm:ss");
      });
      return list;
    },

    // 描述
    description(content) {
      let desc = content.substring(0, 20);
      if (desc.length == 20) {
        desc = `${desc}...`;
      }
      return `${desc}`;
    },

    // 初始化页面
    initPage() {
      this.page = 1;
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        if (val.params.tag) {
          let tag = val.params.tag;
          this.initPage();
          this.tag = tag;
          this.$store.dispatch("getList", []);
          this.list = [];
          this.getList();
        }
      },
      // 深度观察监听
      deep: true
    }
  }
};
</script>
<style scoped>
</style>
