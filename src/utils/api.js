import swagger from './swagger.json'
const url = {}

// 开发环境和生产环境切换
let host
if (process.env.NODE_ENV === 'production') {
  host = 'https://abuapi.0577xiedu.net/v1'
} else {
  host = 'http://rap2api.taobao.org/app/mock/4173/POST'
}

for (let key in swagger.paths) {
  if (swagger.paths.hasOwnProperty(key)) {
    url[key.replace(/(^\/\w*\/)/g, '')] = host + key
  }
}

export default url
