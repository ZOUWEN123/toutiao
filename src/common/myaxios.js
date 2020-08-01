//引入axios
import axios from "axios";
// 配置公共的ulr
// process.env.VUE_APP_URL 如果是运行 npm run serve
// 是从 .env.development 文件中读取
axios.defaults.baseURL = process.env.VUE_APP_URL;
//配置一个 请求 拦截器
axios.interceptors.request.use(
  function(config) {
    // KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS
    let data = config.data || {};
    data["oauth_token"] = "KwiVWLCxXax3rRcVsmgX7shQGhtBtXnS";
    config.data = data;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
//响应的拦截器
axios.interceptors.response.use(
  function(response) {
    //返回数据中的data
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);
//导出自定义的axios
export default axios;
