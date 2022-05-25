import { serializeQueryParams } from '../../utils/common-helper'
import HttpApi from './http-service'

const httpApi = new HttpApi()

export const fetchUsers = (query: string) => {
  const queryStr = serializeQueryParams(query)
  return httpApi.axiosCall({
    url: `/users${queryStr}`,
    method: 'GET'
  })
}

export const fetchUser = (id: string | number) => {
  return httpApi.axiosCall({
    url: `/users/${id}`,
    method: 'GET'
  })
}

export const createUser = (payload: any) => {
  return httpApi.axiosCall({
    url: `/users`,
    method: 'POST',
    data: payload
  })
}

export const updateUser = (id: string | number, payload: any): Promise<ResponseData<IUser>> => {
  return httpApi.axiosCall({
    url: `/users/${id}`,
    method: 'PUT',
    data: payload
  })
}

export const deleteUser = (id: string|number) => {
  return httpApi.axiosCall({
    url: `/users/${id}`,
    method: 'DELETE'
  })
}

export const updateUserStatus = (id: string|number, status: boolean): Promise<ResponseData<IUser>> => {
  const url = status ? `/users/${id}/activate` : `/users/${id}/deactivate`
  return httpApi.axiosCall({
    url,
    method: 'GET'
  })
}