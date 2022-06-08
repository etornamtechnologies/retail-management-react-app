import {createReducer} from 'reduxsauce'
import Types from './actionTypes'

const INITIAL_STATE: IProductState = {
  products: [],
  product: null,
  isLoading: false,
  error: '',
  isSuccess: false,
  isSubmitting: false
}

export const getProducts = (state: IProductState = INITIAL_STATE, action: {query: {['field']: string}}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const getProductsSuccess = (state: IProductState = INITIAL_STATE, action: {data: IProduct[]}) => {
  return {
    ...state,
    isLoading: false,
    error: '',
    products: action.data
  }
}

export const getProductsFailure = (state: IProductState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    products: []
  }
}

export const getProduct = (state: IProductState = INITIAL_STATE, action: {id: number | string}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const getProductSuccess = (state: IProductState = INITIAL_STATE, action: {data: IProduct}) => {
  return {
    ...state,
    isLoading: false,
    error: '',
    product: action.data
  }
}

export const getProductFailure = (state: IProductState = INITIAL_STATE, action: {error: any}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    product: null
  }
}

export const createProduct = (state: IProductState = INITIAL_STATE, action: {payload: IProduct}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const createProductSuccess = (state: IProductState = INITIAL_STATE, action: {data: IProduct}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    products: [...state.products, action.data]
  }
}

export const createProductFailure = (state: IProductState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    product: null
  }
}

export const updateProduct = (state: IProductState = INITIAL_STATE, action: {id: number | string, payload: IProduct}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const updateProductSuccess = (state: IProductState = INITIAL_STATE, action: {data: IProduct}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    products: state.products.map(product => product.id === action.data.id ? action.data : product)
  }
}

export const updateProductFailure = (state: IProductState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    product: null
  }
}

export const deleteProduct = (state: IProductState = INITIAL_STATE, action: {id: number | string}) => {
  return {
    ...state,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const deleteProductSuccess = (state: IProductState = INITIAL_STATE, action: {data: IProduct}) => {
  return {
    ...state,
    isSuccess: true,
    isSubmitting: false,
    products: state.products.filter(product => product.id !== action.data.id)
  }
}

export const deleteProductFailure = (state: IProductState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: action.error,
    product: null
  }
}

export const resetProducts = (state: IProductState = INITIAL_STATE, action: {type: string}) => {
  return {
    ...state,
    isSuccess: false,
    isSubmitting: false,
    error: '',
    products: [],
    product: null
  }
}


export const HANDLERS = {
  [Types.GET_PRODUCTS]: getProducts,
  [Types.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [Types.GET_PRODUCTS_FAILURE]: getProductsFailure,

  [Types.GET_PRODUCT]: getProduct,
  [Types.GET_PRODUCT_SUCCESS]: getProductSuccess,
  [Types.GET_PRODUCT_FAILURE]: getProductFailure,

  [Types.CREATE_PRODUCT]: createProduct,
  [Types.CREATE_PRODUCT_SUCCESS]: createProductSuccess,
  [Types.CREATE_PRODUCT_FAILURE]: createProductFailure,

  [Types.UPDATE_PRODUCT]: updateProduct,
  [Types.UPDATE_PRODUCT_SUCCESS]: updateProductSuccess,
  [Types.UPDATE_PRODUCT_FAILURE]: updateProductFailure,

  [Types.DELETE_PRODUCT]: deleteProduct,
  [Types.DELETE_PRODUCT_SUCCESS]: deleteProductSuccess,
  [Types.DELETE_PRODUCT_FAILURE]: deleteProductFailure,
  
  [Types.RESET_PRODUCTS]: resetProducts
}

export default createReducer(INITIAL_STATE, HANDLERS);