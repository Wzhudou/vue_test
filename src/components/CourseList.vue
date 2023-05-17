<template>
    <div>
        <div :class="['course-list', $style.red]">
            <div
                v-for="(item, index) in courses" 
                :key="index" 
                ref="course" 
                @click="onClick(item)"
                :class="{[$style.active]: selectedCourse === item.name, [$style.courselist]: true}">
                {{item.name}} - {{item.price | currency}}
                <!-- <router-link :to="`/admin/detail/${item.name}`">
                    {{item.name}} - {{item.price | currency}}
                </router-link> -->
            </div> 
        </div>
    </div>
</template>

<script>
    export default {
         name: 'CourseList',
         props: {
                courses: {
                    type: Array,
                    default: () => [],
                },
            },
            data() {
                return {
                    selectedCourse: 'test123',
                }
            },
            // 方式二：局部过滤器
            filters: {
                currency(value, symbol = '¥') {
                    return symbol + value
                }
            },
            watch: {
                courses(newVal) {
                    if (newVal.length) {
                        this.$nextTick(() => {
                            // console.log('test', this.$refs.course);
                        })
                    }
                }
            },
            methods: {
                onClick(item) {
                    // 编程式导航
                    // this.$router.push(`/admin/detail/${item.name}`);
                    this.$router.push({
                        name: 'detail',
                        params: {
                            name: item.name
                        }
                    });

                }
            }
        
    }
</script>

<style module >
.active {
    background-color: rgb(54, 196, 18);
}
.red {
    color: #f00;
}
.courselist {
    cursor: pointer;
}
</style>