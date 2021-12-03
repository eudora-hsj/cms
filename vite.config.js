const path = require('path')

module.exports = {
    // alias: {
    //     '/@/': path.resolve(__dirname, './src')
    // },
    hostname: '0.0.0.0', // 默認是 localhost
    // port: '8000', // 默認是 3000 端口
    open: true, // 瀏覽器自動打開
    https: false, // 是否開啟 https
    ssr: false, // 服務端渲染
    base: './', // 生產環境下的公共路徑
    outDir: 'dist', // 打包構建輸出路徑，默認 dist ，如果路徑存在，構建之前會被刪除
    proxy: { // 本地開發環境通過代理實現跨域，生產環境使用 nginx 轉發
    '/api': {
      target: 'http://127.0.0.1:7001', // 後端服務實際地址
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    },
  }
}