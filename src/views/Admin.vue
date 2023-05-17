<template>
  <div class="admin">
    <img src="@/assets/logo.png" alt="">
    <a href="https://www.baidu.com/">test</a>
    <!-- 当assets存放在public下然后c目录下时， -->
    <!-- <img :src="`${publicPath}assets/logo.png`" alt=""> -->
    <!-- 弹窗组件 -->
    <!-- @close="isShow=$event" -->
    <!-- :show.sync 实现内容分发 -->
    <message ref="msgSuccess" class="success">
        <!-- 具名插槽 命名为title的插槽内容-->
        <template v-slot:title>
            <strong>恭喜</strong>
        </template>
        <!-- 默认插槽 -->
        <template>
            新增课程成功
        </template>
    </message>
    <message ref="msgWarning" class="warning">
        <!-- 具名插槽 命名为title的插槽内容-->
        <template v-slot:title>
            <strong>警告</strong>
        </template>
        <!-- 默认插槽 -->
        <template>
            请输入课程的名称
        </template>
    </message>

    <!-- 新增课程 -->
    <course-add v-model="course" @add-course="addCourse"></course-add>

    <!-- 批量更新商品价格 -->
    <p>
        <input type="text" v-model.number="price">
        <button @click="batchUpdate">批量更新价格</button>
    </p>

    <!-- 列表组件 -->
    <course-list :courses="courses"></course-list>

    <!-- 商品总数 -->
    <p>
        课程总数： {{total}}
    </p>

    <!-- 嵌套路由的出口 -->
    <router-view></router-view>
  </div>
</template>
<script>
import CourseList from '@/components/CourseList';
import CourseAdd from '@/components/CourseAdd';
import Message from '@/components/Message';
import { getCourses } from "@/api/course";
export default {
    name: 'Admin',
    components: {
      CourseList,
      CourseAdd,
      Message
    },
    data() {
      return {
          title: '插件',
          course: '',
          courses: [],
          selectedCourse: 'bsbsbbs',
          totalCount: 0,
          // isShow: false,
          // isShowWarn: false,
          price: 0,
          publicPath: process.env.BASE_URL
      }
    },
    // 默认情况下watch初始化时不执行
    watch: {
        courses: {
            handler(newValue) {
                this.totalCount = newValue.length;
            },
            immediate: true, // 立即执行
            // deep: true  // 深度监听
        }
    },
    computed: {
        total() {
            // console.log('111', process.env.BASE_URL);
            return this.courses.length 
        }
    },
    // 在初始化阶段，页面首次加载只会出发beforeCreate create beforeMounted, mounted
    // created 组件实例已创建，但未挂载，因此dom元素还未存在
    async created() {
        this.courses = await getCourses();

        // 批量更新商品价格
        // this.batchUpdate();
    },
    // mounted dom元素已存在
    mounted() {
        
    },
    methods: {
        addCourse() {
            if (this.course) {
                this.courses.push({name: this.course});
                this.course = '';
                // 显示提示信息
                // this.isShow = true;
                this.$refs.msgSuccess.toggle();
            } else {
                this.$refs.msgWarning.toggle();
            }
        },

        batchUpdate() {
            this.courses.forEach(item => {
                // item.price = this.price;
                // 响应式数据 --- 向响应式对象中添加一个属性，
                // 并确保这个新属性同样是响应式的，且触发视图更新
                // Vue.set(item, 'price', this.price);
                this.$set(item, 'price', this.price);
            });
        },
    },

    // 加上keep-alive后，路由来回切换时，触发
    activated() {
        console.log('activated');
    },
    deactivated() {
        console.log('deactivated');
    }
    // // 路由组件内守卫
    // beforeRouteEnter(to, from, next) {
    //     // 是否登录
    //     if(window.isLogin) {
    //     next();
    //     } else {
    //     next('/login?redirect=' + to.fullPath)
    //     }
    // }
}
</script>
<style lang="scss" scoped>
  a {
        color: $color;
    }
</style>
