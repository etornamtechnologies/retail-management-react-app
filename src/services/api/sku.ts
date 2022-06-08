import { serializeQueryParams } from '../../utils/common-helper'
import HttpApi from './http-service'

const httpApi = new HttpApi()

export const fetchSkus = (query: any): Promise<ResponseData<ISku[]>> => {
  const queryStr = serializeQueryParams(query)
  return httpApi.axiosCall({
    url: `/skus${queryStr}`,
    method: 'GET'
  })
}

export const createSku = (payload: any): Promise<ResponseData<ISku>> => {
  return httpApi.axiosCall({
    url: `/skus`,
    method: 'POST'
  })
}

export const updateSku = (id: number, payload: any): Promise<ResponseData<ISku>> => {
  return httpApi.axiosCall({
    url: `/skus${id}`,
    method: 'PUT',
    data: payload
  })
}

export const deleteSku = (id: number): Promise<ResponseData<ISku[]>> => {
  return httpApi.axiosCall({
    url: `/skus${id}`,
    method: 'DELETE'
  })
}