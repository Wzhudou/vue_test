import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
  //   children: [
  //     {
  //       path: '/admin/detail/:name',
  //       name: 'detail',
  //       component: () => import('../views/Detail.vue'),
  //     }
  //   ],
  //   meta: {
  //     auth: true,
  //   },
  //   // // 二、特定路由守卫
  //   // beforeEnter(to, from, next) {
  //   //   if(window.isLogin) {
  //   //     next();
  //   //   } else {
  //   //     next('/login?redirect=' + to.fullPath)
  //   //   }
  //   // }
  // },
  // 动态路由匹配
  {
    path: '/detail/:name',
    name: 'detail1',
    component: () => import('../views/Detail.vue'),
  },
  // 通配符 --- 匹配所有路径
  {
    path: '*',
    component: () => import('../views/404.vue'),
  }

];

// 解决控制台报错：Avoided redundant navigation to current location…
let originPush =  VueRouter.prototype.push;  //备份原push方法
 
VueRouter.prototype.push = function (location, resolve, reject){
    if (resolve && reject) {    //如果传了回调函数，直接使用
        originPush.call(this, location, resolve, reject);
    }else {                     //如果没有传回调函数，手动添加
        originPush.call(this, location, ()=>{}, ()=>{}); 
    }
}



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// // 一、全局路由守卫
// router.beforeEach((to, from, next) => {
//   // console.log('123', to, from, next);
//   // 判断路由是否需要守卫
//   // 方式一： meta数据的守卫
//   if (to.meta.auth) {
//     // 是否登录
//     if(window.isLogin) {
//       next();
//     } else {
//       next('/login?redirect=' + to.fullPath)
//     }
//   } else { // 不需要登录
//     next();
//   }
// })
// 三、路由组件内守卫---在admin.vue中

// 动态路由
router.beforeEach((to, from, next) => {
   // 是否登录
   if(window.isLogin) {
    // 已登录，去登录页后定位到首页
    if (to.path === '/login') {
      next('/')
    } else {
      next();
    }
  } else {
    // 没有登录
    if (to.path === '/login') {
      next();
    } else {
      next('/login?redirect=' + to.fullPath)
    }
  }
})

export default router
