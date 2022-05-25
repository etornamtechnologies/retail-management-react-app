
import {createReducer} from 'reduxsauce';
import Types from './actionTypes';

const INITIAL_STATE: IUserState = {
  user: null,
  users: [],
  isLoading: false,
  error: '',
  isSuccess: false,
  isSubmitting: false
}

export const getUsers = (state: IUserState = INITIAL_STATE, action: {query: {['field']: string}}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const getUsersSuccess = (state: IUserState = INITIAL_STATE, action: {data: IUser[]}) => {
  return {
    ...state,
    isLoading: false,
    error: '',
    users: action.data
  }
}

export const getUsersFailure = (state: IUserState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    users: []
  }
}

export const getUser = (state: IUserState = INITIAL_STATE, action: {id: number | string}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const getUserSuccess = (state: IUserState = INITIAL_STATE, action: {data: IUser}) => {
  return {
    ...state,
    isLoading: false,
    error: '',
    user: action.data
  }
}

export const getUserFailure = (state: IUserState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    user: null
  }
}

export const createUser = (state: IUserState = INITIAL_STATE, action: {payload: IUser}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: true,
  }
}

export const createUserSuccess = (state: IUserState = INITIAL_STATE, action: {data: IUser}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    user: action.data
  }
}

export const createUserFailure = (state: IUserState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    user: null
  }
}

export const updateUser = (state: IUserState = INITIAL_STATE, action: {id: number | string, payload: IUser}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: true,
  }
}

export const updateUserSuccess = (state: IUserState = INITIAL_STATE, action: {data: IUser}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    user: action.data
  }
}

export const updateUserFailure = (state: IUserState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    user: null
  }
}

export const deleteUser = (state: IUserState = INITIAL_STATE, action: {id: number | string}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: true,
  }
}

export const deleteUserSuccess = (state: IUserState = INITIAL_STATE, action: {data: IUser}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    user: action.data
  }
}

export const deleteUserFailure = (state: IUserState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    user: null
  }
}

export const updateUserStatus = (state: IUserState = INITIAL_STATE, action: {id: number | string, status: boolean}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: true,
  }
}

export const updateUserStatusSuccess = (state: IUserState = INITIAL_STATE, action: {data: IUser}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    users: state.users.map(item => {
      if(item.id === action.data.id) {
        return action.data
      }
      return item
    })
  }
}

export const updateUserStatusFailure = (state: IUserState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
  }
}

export const changePassword = (state: IUserState = INITIAL_STATE, action: {id: number | string, payload: {oldPassword: string, newPassword: string}}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: true,
  }
}

export const changePasswordSuccess = (state: IUserState = INITIAL_STATE, action: {data: IUser}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    user: action.data
  }
}

export const changePasswordFailure = (state: IUserState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    user: null
  }
}

export const resetUser = (state: IUserState = INITIAL_STATE, action: any) => {
  return {
    ...state,
    users: [],
    user: null,
    isLoading: false,
    isSubmitting: false,
    isSuccess: false,
    error: ''
  }
}

export const HANDLERS = {
  [Types.GET_USERS]: getUsers,
  [Types.GET_USERS_SUCCESS]: getUsersSuccess,
  [Types.GET_USERS_FAILURE]: getUsersFailure,
  [Types.GET_USER]: getUser,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_FAILURE]: getUserFailure,
  [Types.CREATE_USER]: createUser,
  [Types.CREATE_USER_SUCCESS]: createUserSuccess,
  [Types.CREATE_USER_FAILURE]: createUserFailure,
  [Types.UPDATE_USER]: updateUser,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure,
  [Types.DELETE_USER]: deleteUser,
  [Types.DELETE_USER_SUCCESS]: deleteUserSuccess,
  [Types.DELETE_USER_FAILURE]: deleteUserFailure,
  [Types.CHANGE_PASSWORD]: changePassword,
  [Types.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [Types.CHANGE_PASSWORD_FAILURE]: changePasswordFailure,
  [Types.UPDATE_USER_STATUS]: updateUserStatus,
  [Types.UPDATE_USER_STATUS_SUCCESS]: updateUserStatusSuccess,
  [Types.UPDATE_USER_STATUS_FAILURE]: updateUserStatusFailure,
  [Types.RESET_USER]: resetUser,
};

export default createReducer(INITIAL_STATE, HANDLERS);

