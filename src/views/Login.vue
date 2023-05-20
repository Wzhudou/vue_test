<template>
    <div>
        <button @click="login" v-if="!isLogin">登录</button>
        <button @click="logout" v-else>注销</button>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        name: 'Login',
        data() {
            return {
                loading: false,
            }
        },
        // computed: {
        //     isLogin() {
        //         // console.log('islll', window.isLogin);
        //         // 动态添加路由
        //         this.$router.addRoutes([
        //             {
        //                 path: '/admin',
        //                 name: 'admin',
        //                 component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
        //                 children: [
        //                 {
        //                     path: '/admin/detail/:name',
        //                     name: 'detail',
        //                     component: () => import('../views/Detail.vue'),
        //                 }
        //                 ],
        //                 meta: {
        //                 auth: true,
        //                 },
        //                 // // 二、特定路由守卫
        //                 // beforeEnter(to, from, next) {
        //                 //   if(window.isLogin) {
        //                 //     next();
        //                 //   } else {
        //                 //     next('/login?redirect=' + to.fullPath)
        //                 //   }
        //                 // }
        //             },
        //         ]);
        //         return window.isLogin;
        //     }
        // },
        computed: {
            // isLogin() {
            //     return this.$store.state.user.isLogin;
            // }
            // 映射方法
            // 因为user为子模块， 所以要加user
            ...mapState('user', ['isLogin'])
        },
        methods: {
            login() {
                // window.isLogin = true;
                // 提交mutation变更状态
                // this.$store.commit('login');
                // 派发动作触发action
                // this.$store.dispatch('user/login', 'admin').then(() => {
                // 映射方法
                this['user/login']('admin').then(() => {
                    this.$router.push(this.$route.query.redirect);
                }).catch(() => {
                    alert('用户名错误， 请重试');
                })
            },
            logout() {
                // window.isLogin = false;
                this.$store.commit('user/logout');
                this.$router.push('/');
            },
            // 映射方法
            ...mapActions(['user/login', 'user/logout'])
        },
    }
</script>

<style lang="scss" scoped>

</style>