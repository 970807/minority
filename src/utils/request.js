import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? '//localhost:3003'
    : '//monority.ggh0807.cn'
const service = axios.create({
  baseURL,
  timeout: 5000,
  withCredentials: false
})

service.interceptors.response.use((response) => response.data)

export default service
