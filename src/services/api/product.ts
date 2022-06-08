import { serializeQueryParams } from '../../utils/common-helper'
import HttpApi from './http-service'

const httpApi = new HttpApi()

export const fetchProducts = (query: any): Promise<ResponseData<IProduct[]>> => {
  const queryStr = serializeQueryParams(query)
  return httpApi.axiosCall({
    url: `/products${queryStr}`,
    method: 'GET'
  })
}

export const fetchProduct = (id: number): Promise<ResponseData<IProduct>> => {
  return httpApi.axiosCall({
    url: `/products${id}`,
    method: 'GET'
  })
}

export const createProduct = (payload: any): Promise<ResponseData<IProduct>> => {
  return httpApi.axiosCall({
    url: `/products`,
    method: 'POST'
  })
}

export const updateProduct = (id: number, payload: any): Promise<ResponseData<IProduct>> => {
  return httpApi.axiosCall({
    url: `/products${id}`,
    method: 'PUT',
    data: payload
  })
}

export const deleteProduct = (id: number): Promise<ResponseData<IProduct[]>> => {
  return httpApi.axiosCall({
    url: `/products${id}`,
    method: 'DELETE'
  })
}