
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getAccessToken } from "../local-store/localstorage-service"
import { getErrorFromHttpResponse, history } from "../../utils/common-helper"
import { message } from "antd";
const baseUrl = process.env.REACT_APP_BASE_URL

// const apiConfig = {
//   timeout: 30000,
//   baseUrl: baseUrl,
//   headers: {
//     'Authorization': `Bearer ${getAccessToken()}`,
//     'Accept': "application/json",
//     "Content-Type": "application/json; charset=utf-8",
//   }
// }

// const request: Axios = axios.create(apiConfig)

// request.interceptors.request.use((config: AxiosRequestConfig) => {  
//   const accessToken = getAccessToken()
//   return config;
// })

// request.interceptors.response.use((response: AxiosResponse) => {
//   const status = response.status
//   const statusText = response.statusText
//   const data = response.data
//   if(status === 200) {
//     return Promise.resolve(data)
//   }
// }, (error: AxiosError) => {
//   const status = error?.response?.status
  
//   if(status === 401) {
//     history.push("/not-authorized")
//   } else if(status === 403) {
//     signOut()
//   }
//   return Promise.reject(error)
// })

// export default request;

export default class HttpRequest {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 30000
    })
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
      if(getAccessToken()) {
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${getAccessToken()}` 
      }
      return config;
    })

    // this.axiosInstance.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
    //   // const { status, data } = response
    //   console.log('response', response)
    //   const {status, data} = response
    //   return response?.data;
    // }, (error: AxiosError) => {
    //   const errStatus = error?.response?.status
    //   console.log('err status',errStatus)
    //   // if(errStatus === 401) {
    //   //   history.push('/sign-in')
    //   // }
    //   Promise.reject(error)
    // })
  }

  public async axiosCall<T>(config: AxiosRequestConfig): Promise<ResponseData<T>> {
    try {
      const response = await this.axiosInstance.request<ResponseData<T>>(config);
      return Promise.resolve(response?.data)
    } catch (error: any) {
      console.log('error ooo', error)
      const errorStatus = error?.response?.status
      if(errorStatus === 401) {
        window.localStorage.removeItem('access_token')
        window.localStorage.removeItem('token_type')
        window.localStorage.removeItem('token_expires_in')
        history.push('/sign-in')
      } else if(errorStatus === 403) {
        
      } else {
        
      }
      message.error(getErrorFromHttpResponse(error));
      return Promise.reject(error)
    }
  }
}


