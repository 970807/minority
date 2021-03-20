import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  withCredentials: false
})

service.interceptors.response.use(response => response.data)

export default service

