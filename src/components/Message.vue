<template>
   <div class="message-box" v-if="show">
        <!-- 具名插槽 -->
        <slot name="title">
            默认标题
        </slot>
        <!-- 通过slot获取传入的内容 -->
        <slot></slot>
        <span class="message-box-close" @click="toggle">X</span>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        data() {
                return {
                    show: false,
                }
            },
            // mixins: [helloMixin],
            mounted() {
                this.$bus.$on('message-close', () => {
                    this.toggle();
                })
            },
            methods: {
                toggle() {
                    this.show = !this.show;
                }
            }
    }
</script>

<style scoped>
.message-box {
    padding: 10px 20px;
}
.success {
    background: #4fc08d;
    border: 1px solid #42b983;
}
.warning {
    background: #f66;
    border: 1px solid #d63200;
}
.message-box-close {
    float: right;
    cursor: pointer;
}
</style>