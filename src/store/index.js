import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import persist from './plugins/persist'

Vue.use(Vuex)

export default new Vuex.Store({
  // 模块化
  modules: {
    user,
  },
  strict: true, // 防止用户修改状态
  // 注册插件
  plugins: [persist],
})
