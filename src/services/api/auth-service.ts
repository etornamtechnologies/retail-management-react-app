import { history } from "../../utils/common-helper"
import { removeAccessToken } from "../local-store/localstorage-service"
import HttpApi from './http-service'

const httpApi = new HttpApi()

export const signOut = () => {
  removeAccessToken()
  history.push('/sign-in')
}


export function signIn(data: {username: string, password: string}): Promise<ResponseData<SignInDTO>> {
  return httpApi.axiosCall({
    url: '/login',
    method: 'post',
    data
  })
}