import axios from 'axios'
import { Toast } from 'vant'
import { getItem } from './auth'
const tokens = getItem('user')
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

http.interceptors.request.use(
  config => {
    const token = tokens?.token
    if (token) config.headers.Authorization = 'Bearer ' + token
    return config
  },
  error => Promise.reject(error)
)

http.interceptors.response.use(
  res => res.data,
  error => {
    const status = error.response.status
    if (status === 500) {
      Toast.fail('服务器错误')
    }
    return Promise.reject(error)
  }
)

export default http
