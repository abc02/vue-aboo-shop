module.exports = {
  proxy: {
    '/v1': {    //将www.exaple.com印射为/apis
      target: 'http://abuapi.0577xiedu.net',  // 接口域名
      secure: true,      // 如果是https接口，需要配置这个参数
      changeOrigin: true,     // 如果接口跨域，需要进行这个参数配置
      pathRewrite: {
        '^/v1': ''   //需要rewrite的,
      }
    }
  }
}