const path = require('path');
function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/styles/imports.scss')
            ]
        })
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
     ? '/cart/'
     : '/c',

     chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
     },
     devServer: {
        // 解决跨域
        proxy: 'http://localhost:3000',
        // 解决控制台出现如下报错
        // GET http://192.168.xx.xxx:xxxx/sockjs-node/info?t=1638719004722 net::ERR_CONNECTION_TIMED_OUT
        host: 'localhost',
        // mock数据
        // before(app) {
        //     // app是一个express实例
        //     app.get('/api/courses', (req, res) => {
        //         setTimeout(() => {
        //             res.json([{name: 'web全栈', price: 8999}, {name: 'web高级', price:8999}])
        //         }, 1000)
        //     });
        // },

        // proxyTable: {
        //     '/api': {
        //         target: 'http://localhost:3000',
        //         pathRewrite: {
        //             '^/api': '',
        //         },
        //         changeOrigin: true,
        //     }
        // }
     },

}