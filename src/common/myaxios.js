//引入axios
import axios from "axios";
//配置公共的url
axios.defaults.baseURL = "http://tt.linweiqin.com/api/tt/";
//配置一个 请求 拦截器
axios.interceptors.request.use(
  function(config) {
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
