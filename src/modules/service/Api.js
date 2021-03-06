import swagger from './swagger.json'
const url = {}

// 开发环境和生产环境切换
let host
if (process.env.NODE_ENV === 'production') {
  host = 'https://datainterface.abpao.com/v1'
} else {
  host = 'http://localhost:8090/v1'
}

for (let key in swagger.paths) {
  if (swagger.paths.hasOwnProperty(key)) {
    url[key.replace(/(^\/\w*\/)/g, '')] = host + key
  }
}
// console.log(url)
export default url
