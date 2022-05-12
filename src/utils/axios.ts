import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import { config } from "process"
const service = axios.create()

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  async (response: AxiosResponse) => {

  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service