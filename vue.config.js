module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 将 target 的值改成 http://47.107.123.141
                target: 'http://47.107.123.141', 
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}