import axios from 'axios'
import qs from 'qs'
export default function Fetch (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data)).then(res => {
      let outerStatus = res.status
      let innerStatus = res.data.ret
      if (outerStatus === 200 | innerStatus === 1002) {
        resolve(res)
      }
      if (outerStatus === 300) {
        location.href = 'profile.html'
      }
    }).catch(error => {
      reject(error)
    })
  })
}
