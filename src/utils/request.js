import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  withCredentials: false
})

service.interceptors.response.use(response => {
  if (response.data.code !== '2000') {
    return Promise.reject(response.data)
  } else {
    return response.data.data
  }
})

export default service

