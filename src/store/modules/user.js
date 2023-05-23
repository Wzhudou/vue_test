export default {
    namespaced: true, // 设置独立的命名空间，避免命名冲突
    state: {
        isLogin: false,
        username: '',
      },
      mutations: {
        // commit 提交修改
        login(state, username) {
          state.isLogin = true;
          state.username = username;
        },
        logout(state) {
          state.isLogin = false;
          state.username = '';
          sessionStorage.removeItem('token');
        },
      },
      // 派生状态
      getters: {
        welcome: state => state.username + ', 欢迎回来',
      },
      // 
      actions: {
        // 参数一： vuex传递的上下文context - {commit, dispatch,}
        login({commit}, username) {
          // 模拟登录api调用，1s以后如果用户名是admin则登录成功
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if(username === 'admin') {
                commit('login', username);
                resolve();
              } else {
                reject();
              }
            }, 1000)
          })
        }
      },
}