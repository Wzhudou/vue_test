<template>
    <div>
        <button @click="login" v-if="!isLogin">登录</button>
        <button @click="logout" v-else>注销</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        computed: {
            isLogin() {
                console.log('islll', window.isLogin);
                // 动态添加路由
                this.$router.addRoutes([
                    {
                        path: '/admin',
                        name: 'admin',
                        component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
                        children: [
                        {
                            path: '/admin/detail/:name',
                            name: 'detail',
                            component: () => import('../views/Detail.vue'),
                        }
                        ],
                        meta: {
                        auth: true,
                        },
                        // // 二、特定路由守卫
                        // beforeEnter(to, from, next) {
                        //   if(window.isLogin) {
                        //     next();
                        //   } else {
                        //     next('/login?redirect=' + to.fullPath)
                        //   }
                        // }
                    },
                ]);
                return window.isLogin;
            }
        },
        methods: {
            login() {
                window.isLogin = true;
                this.$router.push(this.$route.query.redirect);
            },
            logout() {
                window.isLogin = false;
                this.$router.push('/');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>