<template>
  <div>
    <div class="home-header">
      <span>头条</span>
    </div>
    <div class="home-content">
      <div class="home-content-left">
        <Navigator></Navigator>
      </div>
      <div class="home-content-middle">
        <div class="content-middle-top">
          <section class="middle-top-tab">
            <section
              v-for="item in tabs"
              @click="handleTabChange(item.type)"
              :key="item.id"
              :class="['top-tab-item', { active: activeTab === item.type }]"
            >
              {{ item.text }}
            </section>
          </section>
        </div>
        <div class="content-middle-mid">
          <section v-show="activeTab == 'tt'">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="写点什么吧"
            ></textarea>
            <section class="mid-bottom">
              <section class="left">
                <span class="title">图片</span>
              </section>
              <section class="right" @click.stop="publishTT">发布</section>
            </section>
          </section>
          <section class="article-content" v-show="activeTab == 'article'">
            <input class="article-input" v-model="title" type="text" />
            <vue-editor id="editor" v-model="html_content"></vue-editor>
            <section class="article-publish">
              <span class="publish-title" @click="publishArticle">发布</span>
            </section>
          </section>
        </div>
        <div class="content-middle-bottom"></div>
      </div>
      <div class="home-content-right">右边</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { VueEditor } from "vue2-editor";
import Navigator from "../components/Navigator";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Navigator,
    VueEditor,
  },
  data() {
    return {
      content: "", //头条里面的内容
      //tab栏数据
      tabs: [
        { id: 1, text: "发微头条", type: "tt" },
        { id: 1, text: "写文章", type: "article" },
      ],
      title: "", //标题
      html_content: "", //富文本编辑器内容
      //当前激活的tab
      activeTab: "tt",
    };
  },
  //方法集合
  methods: {
    publishArticle: function() {
      let title = this.title;
      let html_content = this.html_content;
      if (!title || !html_content) {
        // 内容为空的情况下
        // todo  换成 elementUI message
        this.$message({
          message: "输入不能为空！",
          type: "warning",
        });
        return false;
      }
      this.$axios
        .post("/createArticle", {
          content: html_content,
          img: "",
          title: title,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
    // auth_token KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS
    publishTT: function() {
      let content = this.content;
      if (!content) {
        // 内容为空的情况下
        // todo  换成 elementUI message
        this.$message({
          message: "输入不能为空！",
          type: "warning",
        });
        return false;
      }
      this.$axios
        .post("/createTT", {
          content: content,
          imgs: "",
          // oauth_token:"KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS"
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.content = "";
    },
    handleTabChange: function(activeTab) {
      this.activeTab = activeTab;
    },
  },

  //   mounted: function () {
  //     // http://tt.linweiqin.com/api/tt/getArticles?lastid=0&&type="TT"&&page=1&&number=20
  //     this.$axios
  //       .get("http://tt.linweiqin.com/api/tt/getArticles", {
  //         params: {
  //           lastid: 0,
  //           type: "TT",
  //           page: 1,
  //           number: 20,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  // };
  //改同步
  async mounted() {
    // http://tt.linweiqin.com/api/tt/getArticles?lastid=0&&type="TT"&&page=1&&number=20
    let res = await this.$axios
      .get("http://tt.linweiqin.com/api/tt/getArticles", {
        params: {
          lastid: 0,
          type: "TT",
          page: 1,
          number: 20,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang="less" scoped>
.home-header {
  height: 30px;
  background-color: #000000;
  line-height: 30px;
  padding-left: 5px;
  span {
    color: white;
  }
}
.home-content {
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
  display: flex;
  .home-content-left {
    flex: 1;
  }

  .home-content-middle {
    flex: 3;
    .content-middle-top {
      section.middle-top-tab {
        display: flex;
        section.top-tab-item {
          height: 50px;
          width: 150px;
          line-height: 50px;
          text-align: center;
        }
        .active {
          color: #b1e5ff;
          border-bottom: 2px solid #f1545a;
        }
      }
    }
    .content-middle-mid {
      section {
        textarea {
          width: 100%;
        }

        section.mid-bottom {
          display: flex;
          height: 40px;
          align-items: center;
          justify-content: space-between;
          section.left {
            span.title {
            }
          }
          section.right {
            height: 30px;
            line-height: 30px;
            text-align: center;
            width: 100px;
            background-color: #ea4245;
            color: white;
          }
        }
      }
      .article-content {
        margin-top: 10px;
        input.article-input {
          width: 100%;
          height: 30px;
        }

        #editor {
          width: 100%;
        }

        .article-publish {
          display: flex;
          justify-content: flex-end;
          .publish-title {
            display: inline-block;
            width: 120px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: white;
            background-color: #ea4245;
          }
        }
      }
    }

    .content-middle-bottom {
    }
  }

  .home-content-right {
    flex: 2;
  }
}
</style>
