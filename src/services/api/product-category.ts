import { serializeQueryParams } from '../../utils/common-helper'
import HttpApi from './http-service'

const httpApi = new HttpApi()

export const fetchProductCategories = (query: string): Promise<ResponseData<IProductCategory[]>> => {
  const queryStr = serializeQueryParams(query)
  return httpApi.axiosCall({
    url: `/product-categories${queryStr}`,
    method: 'GET'
  })
}

export const createProductCategory = (payload: any): Promise<ResponseData<IProductCategory>> => {
  return httpApi.axiosCall({
    url: `/product-categories`,
    method: 'POST',
    data: payload
  })
}

export const updateProductCategory = (id: string | number, payload: any): Promise<ResponseData<IProductCategory>> => {
  return httpApi.axiosCall({
    url: `/product-categories/${id}`,
    method: 'PUT',
    data: payload
  })
}

export const deleteProductCategory = (id: string|number): Promise<ResponseData<any>> => {
  return httpApi.axiosCall({
    url: `/product-categories/${id}`,
    method: 'DELETE'
  })
}