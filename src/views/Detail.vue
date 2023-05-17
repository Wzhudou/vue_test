<template>
    <div>
        <h2>detail page</h2>
        <p>{{$route.params.name}}</p>
    </div>
</template>

<script>
export default {
    created() {
        console.log('发送详情的请求');
    },
    watch: {
        $route: {
            handler() {
                console.log('发送详情的请求1');
            },
            immediate: true,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>