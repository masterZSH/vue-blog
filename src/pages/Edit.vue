<template>
  <div>
    <div class="top">
      <i-input
        v-model="title"
        type="text"
        class="title"
        maxlength="999"
        clearable
        size="large"
        placeholder="输入标题"
      ></i-input>
      <Button  class="btn-save" type="primary" size="large">保存</Button>
    </div>

    <div class="tag">
      <Tag
        class="tag-item"
        closable
        @on-close="closeTag(key)"
        color="default"
        :key="key"
        v-for="(item,key) in tags"
      >{{item}}</Tag>

      <i-input
        @on-keydown="enterTag"
        v-model="tag"
        type="text"
        class="tag-input"
        maxlength="999"
        clearable
        placeholder="标签"
      ></i-input>
    </div>

    <div class="containers">
      <Row>
        <i-col span="12">
          <textarea class="markdown" v-model="md"></textarea>
        </i-col>
        <i-col span="12">
          <div class="container" v-html="html"></div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script>
import markedMixIn from "../mixins/marked";
import articleConfig from "../config/article";

export default {
  name: "Edit",
  mixins: [markedMixIn],
  data() {
    return {
      title: "",
      tags: [],
      tag: "",
      html: "",
      md: ""
    };
  },
  mounted() {},
  methods: {
    /**
     * 确认标签
     */
    enterTag(e) {
      if (e.key === "Enter") {
        this.appendTag(this.tag);
        this.tag = "";
      }
    },

    appendTag(tag) {
      // 最大标签数不超过5个
      let maxTagNum = articleConfig.maxTagNum || 5;
      if (this.tags.length > maxTagNum - 1) {
        this.$Message.error(`最多只能添加${maxTagNum}个标签`);
        return;
      }
      this.tags.push(tag);
    },

    /**
     * 关闭标签
     */
    closeTag(key) {
      this.tags.splice(key, 1);
    }
  },
  props: {},
  watch: {
    md(newValue) {
      this.html = this.marked(newValue);
    },
    tag() {}
  }
};
</script>

<style scoped>

.top{
  width: 90%;
  margin: 10px auto;
  display: block;
}

.title {
  width: 80%;
}

.btn-save{
    margin-left: 20px;
    width: 120px;
}

.tag {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.tag .tag-item {
  margin-right: 5px;
}

.tag .tag-input {
  width: 40%;
}

.containers {
}

.containers .markdown {
  height: 80vh;
  margin-top: 10px;
  width: 94%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border-radius: 5px;
  border-color: #ddd;
  padding: 5px;
  resize: none;
}

.containers .markdown:focus {
  border: none;
}

.containers .container {
  min-height: 80vh;
  border:1px solid #eee;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0.6em;
  width: 94%;
  overflow: auto;
  flex-shrink: 1;
}

.containers .container:hover{
    border-color: #ccc;
}


.containers .container textarea {
  margin-top: 5px;
  padding: 0.6em;
  border: 1px solid #ccc;
  overflow: auto;
  flex-grow: 1;
  flex-shrink: 1;
}

.containers .container textarea:hover {
  border-color: #a33991;
}


</style>


