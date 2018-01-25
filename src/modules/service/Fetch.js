import axios from 'axios'
import qs from 'qs'
export default function Fetch (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data)).then(res => {
      let outerStatus = res.status
      if (outerStatus === 200) {
        resolve(res)
      }
      if (outerStatus === 300) {
        location.href = 'login.html'
      }
    }).catch(error => {
      reject(error)
    })
  })
}
