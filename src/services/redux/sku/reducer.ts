import {createReducer} from 'reduxsauce'
import Types from './actionTypes'

const INITIAL_STATE: ISkuState = {
  sku: null,
  skus: [],
  isLoading: false,
  error: '',
  isSuccess: false,
  isSubmitting: false
}

export const getSkus = (state: ISkuState = INITIAL_STATE, action: {query: {['field']: string}}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const getSkusSuccess = (state: ISkuState = INITIAL_STATE, action: {data: ISku[]}) => {
  return {
    ...state,
    isLoading: false,
    error: '',
    skus: action.data
  }
}

export const getSkusFailure = (state: ISkuState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    skus: []
  }
}

export const getSku = (state: ISkuState = INITIAL_STATE, action: {id: number | string}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const getSkuSuccess = (state: ISkuState = INITIAL_STATE, action: {data: ISku}) => {
  return {
    ...state,
    isLoading: false,
    error: '',
    sku: action.data
  }
}

export const getSkuFailure = (state: ISkuState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    sku: null
  }
}


export const createSku = (state: ISkuState = INITIAL_STATE, action: {payload: ISku}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: true,
  }
}

export const createSkuSuccess = (state: ISkuState = INITIAL_STATE, action: {data: ISku}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    sku: action.data
  }
}

export const createSkuFailure = (state: ISkuState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    sku: null
  }
}


export const updateSku = (state: ISkuState = INITIAL_STATE, action: {id: string | number, payload: ISku}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: true,
  }
}

export const updateSkuSuccess = (state: ISkuState = INITIAL_STATE, action: {data: ISku}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    sku: action.data
  }
}

export const updateSkuFailure = (state: ISkuState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    sku: null
  }
}

export const deleteSku = (state: ISkuState = INITIAL_STATE, action: {id: string | number}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: true,
  }
}

export const deleteSkuSuccess = (state: ISkuState = INITIAL_STATE, action: {data: ISku}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    sku: action.data
  }
}

export const deleteSkuFailure = (state: ISkuState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    sku: null
  }
}

export const resetSkus = (state: ISkuState = INITIAL_STATE, action: {data: ISku}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: '',
    sku: null,
    skus: []
  }
}


export const HANDLERS = {
  [Types.GET_SKUS]: getSkus,
  [Types.GET_SKUS_SUCCESS]: getSkusSuccess,
  [Types.GET_SKUS_FAILURE]: getSkusFailure,
  [Types.GET_SKU]: getSku,
  [Types.GET_SKU_SUCCESS]: getSkuSuccess,
  [Types.GET_SKU_FAILURE]: getSkuFailure,
  [Types.CREATE_SKU]: createSku,
  [Types.CREATE_SKU_SUCCESS]: createSkuSuccess,
  [Types.CREATE_SKU_FAILURE]: createSkuFailure,
  [Types.UPDATE_SKU]: updateSku,
  [Types.UPDATE_SKU_SUCCESS]: updateSkuSuccess,
  [Types.UPDATE_SKU_FAILURE]: updateSkuFailure,
  [Types.DELETE_SKU]: deleteSku,
  [Types.DELETE_SKU_SUCCESS]: deleteSkuSuccess,
  [Types.DELETE_SKU_FAILURE]: deleteSkuFailure,
  [Types.RESET_SKUS]: resetSkus,
}

export default createReducer(INITIAL_STATE, HANDLERS);