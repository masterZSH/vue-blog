<template>
  <Scroll class="list" :on-reach-bottom="handleReachBottom">
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
    <Spin fix v-if="loading">
      <Icon type="ios-loading" size="18" class="spin-icon-load"></Icon>
      <div>加载中</div>
  </Spin>
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
      noMore: false,
      loading:false, 
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
      this.$router.push(`/article/${id}`);
    },

    async getList() {
      this.loading = true;
      setTimeout(()=>this.loading = false,800)
      let data = await getArticles.call(this,this.page, this.size, this.tag);
      this.loading = false;
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
          let tag = val.params.tag;
          if(undefined === tag){
            tag = ""
          }
          this.initPage();
          this.tag = tag;
          this.$store.dispatch("getList", []);
          this.list = [];
          this.getList();
      },
      // 深度观察监听
      deep: true
    }
  }
};
</script>
<style scoped>
.spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
