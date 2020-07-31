import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import axios from "axios";
import axios from "./common/myaxios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
