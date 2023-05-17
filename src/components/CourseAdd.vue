<template>
    <div>
        <!-- 用户输入 -->
        <input 
            type="text" 
            :value="value" 
            @input="onInput"
            v-on:keydown.enter="addCourse">
        <button @click="addCourse">新增</button>
    </div>
</template>

<script>
    export default {
        name: 'CourseAdd',
        props: ['value'],
        mounted() {
            // this.$refs.inp.focus();
        },
        methods: {
            addCourse() {
                // 派发事件，通知父组件新增课程
                this.$emit('add-course');
                // this.course = '';
            },
            onInput(e) {
                this.$emit('input', e.target.value);
            },
        }
    }
</script>

<style lang="scss" scoped>
    input {
        
    }
</style>