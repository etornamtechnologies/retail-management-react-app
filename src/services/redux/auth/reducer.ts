import {createReducer} from 'reduxsauce'
import Types from './actionTypes'

const INITIAL_STATE: IAuthState = {
  user: null,
  accessToken: null,
  error: null,
  isLoading: false,
  isSuccess: false,
  isSubmitting: false,
}

export const login = (state: IAuthState = INITIAL_STATE, action: {payload: {username: string, password: string}}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: true,
    accessToken: null,
  }
}

export const loginSuccess = (state: IAuthState = INITIAL_STATE, action: {data: any}) => {
  const {data} = action
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    user: data.user,
    accessToken: data.accessToken,
  }
}

export const loginFailure = (state: IAuthState = INITIAL_STATE, action: {error: string}) => {
  const {error} = action
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error,
  }
}


export const logout = (state: IAuthState = INITIAL_STATE, action: null) => {
  return {
    ...state,
    accessToken: null,
  }
}

export const resetAuth = (state: IAuthState = INITIAL_STATE, action: null) => {
  return {
    ...state,
    user: null,
    accessToken: null,
    error: null,
    isLoading: false,
    isSuccess: false,
    isSubmitting: false,
  }
}


export const HANDLERS = {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT]: logout,

}

export default createReducer(INITIAL_STATE, HANDLERS)