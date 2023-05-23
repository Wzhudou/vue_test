export default store => {
    // 持久化
    // store初始化的时候，将存储在localStorage的状态还原
    if (localStorage) {
        const user = JSON.parse(localStorage.getItem('user'));
        // console.log('3444', user);
        if (user) {
            store.commit('user/login', user.username);
        }
    }

    // 如果用户相关状态发生变化，自动存入localStorage
    store.subscribe((mutation, state) => {
        // {type: 'user/login'}
        // {type: 'user/logout'}
        // {type: 'cart/addCart'}
        if(mutation.type === 'user/login') {
            // console.log('123', state);
            const user = JSON.stringify(state.user);
            localStorage.setItem('user', user);
        } else if (mutation.type === 'user/logout') {
            // console.log('222', mutation.type);
            localStorage.removeItem('user');
        }
    })
}