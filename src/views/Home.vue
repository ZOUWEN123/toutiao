<template>
  <div>
    <div class="home-header">
      <span>头条</span>
    </div>
    <div class="home-content">
      <div class="home-content-left">
        <Navigator></Navigator>
      </div>
      <div class="home-content-middle">中间</div>
      <div class="home-content-right">右边</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navigator from "../components/Navigator";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Navigator,
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
<style lang='less' scoped>
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
  }

  .home-content-right {
    flex: 2;
  }
}
</style>
