/* eslint-disable */
module.exports = {
    //适配less
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    //取消eslint警告
    lintOnSave:false,
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    }
}
