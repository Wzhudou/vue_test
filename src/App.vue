<template>
  <div id="app">
    <!-- 导航链接 -->
    <nav id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/admin">管理</router-link>
    </nav>
    
    <!-- 组件缓存: include需要缓存的数据 max 表示最大缓存数 -->
    <keep-alive include="Admin">
        <!-- 路由出口-占位符 -->
        <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default{
   name: 'app', 
}
</script>
<style scoped lang="scss">
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
      
    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
<style  scoped>
</style>
