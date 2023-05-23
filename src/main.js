import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api';

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
// 注册全局接口
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
