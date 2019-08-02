module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 将 target 的值改成 http://47.107.123.141
                target: 'https://fanyi.youdao.com', 
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}