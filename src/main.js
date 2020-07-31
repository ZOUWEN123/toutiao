import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
import axios from "./common/myaxios";
//引入element-ui组件库
import { Message } from "element-ui";

Vue.prototype.$message = Message;
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
