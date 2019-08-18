import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import axios from 'axios'

// 引入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 挂载到Vue上
Vue.use(ElementUI);
//挂载axios到vue上面并配置axios全局设置
Vue.prototype.$http = axios.create({
  baseURL: 'http://blog/api/'
});



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')