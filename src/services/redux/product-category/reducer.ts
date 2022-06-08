import {createReducer} from 'reduxsauce'
import Types from './actionTypes'

const INITIAL_STATE: IProductCategoryState = {
  productCategories: [],
  productCategory: null,
  isLoading: false,
  error: '',
  isSuccess: false,
  isSubmitting: false,
  isUpdateSuccess: false
}

export const getProductCategories = (state: IProductCategoryState = INITIAL_STATE, action: {query: {['field']: string}}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const getProductCategoriesSuccess = (state: IProductCategoryState = INITIAL_STATE, action: {data: IProductCategory[]}) => {
  return {
    ...state,
    isLoading: false,
    error: '',
    productCategories: action.data
  }
}

export const getProductCategoriesFailure = (state: IProductCategoryState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    productCategories: []
  }
}

export const getProductCategory = (state: IProductCategoryState = INITIAL_STATE, action: {id: number | string}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const getProductCategorySuccess = (state: IProductCategoryState = INITIAL_STATE, action: {data: IProductCategory}) => {
  return {
    ...state,
    isLoading: false,
    error: '',
    productCategory: action.data
  }
}

export const getProductCategoryFailure = (state: IProductCategoryState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    productCategory: null
  }
}

export const createProductCategory = (state: IProductCategoryState = INITIAL_STATE, action: {data: IProductCategory}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
  }
}

export const createProductCategorySuccess = (state: IProductCategoryState = INITIAL_STATE, action: {data: IProductCategory}) => {
  return {
    ...state,
    isLoading: false,
    error: '',
    isSuccess: true,
    productCategories: state.productCategories.concat([action.data])
  }
}

export const createProductCategoryFailure = (state: IProductCategoryState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    productCategory: null
  }
}

export const updateProductCategory = (state: IProductCategoryState = INITIAL_STATE, action: {data: IProductCategory}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: false,
    isUpdateSuccess: false
  }
}

export const updateProductCategorySuccess = (state: IProductCategoryState = INITIAL_STATE, action: {data: IProductCategory}) => {
  const productCategories = state.productCategories.map(item => {
    if(item.id === action?.data?.id) {
      return action.data
    } else {
      return item;
    }
  })
  return {
    ...state,
    isLoading: false,
    error: '',
    productCategory: action.data,
    productCategories,
    isUpdateSuccess: true
  }
}

export const updateProductCategoryFailure = (state: IProductCategoryState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    productCategory: null,
    isUpdateSuccess: false
  }
}

export const deleteProductCategory = (state: IProductCategoryState = INITIAL_STATE, action: {id: number | string}) => {
  return {
    ...state,
    isLoading: true,
    error: '',
    isSuccess: false,
    isSubmitting: true,
  }
}

export const deleteProductCategorySuccess = (state: IProductCategoryState = INITIAL_STATE, action: {id: number | string}) => {
  const {id} = action;
  console.log('id', id)
  const productCategories = state.productCategories.filter(item => item.id !== id)
  return {
    ...state,
    isLoading: false,
    error: '',
    productCategories,
    isSubmitting: false,
    isSuccess: true
  }
}

export const deleteProductCategoryFailure = (state: IProductCategoryState = INITIAL_STATE, action: {error: string}) => {
  return {
    ...state,
    isLoading: false,
    error: action.error,
    isSuccess: false,
    isSubmitting: false,
    productCategory: null
  }
}


export const HANDLERS = {
  [Types.GET_PRODUCT_CATEGORIES]: getProductCategories,
  [Types.GET_PRODUCT_CATEGORIES_SUCCESS]: getProductCategoriesSuccess,
  [Types.GET_PRODUCT_CATEGORIES_FAILURE]: getProductCategoriesFailure,
  [Types.GET_PRODUCT_CATEGORY]: getProductCategory,
  [Types.GET_PRODUCT_CATEGORY_SUCCESS]: getProductCategorySuccess,
  [Types.GET_PRODUCT_CATEGORY_FAILURE]: getProductCategoryFailure,
  [Types.CREATE_PRODUCT_CATEGORY]: createProductCategory,
  [Types.CREATE_PRODUCT_CATEGORY_SUCCESS]: createProductCategorySuccess,
  [Types.CREATE_PRODUCT_CATEGORY_FAILURE]: createProductCategoryFailure,
  [Types.DELETE_PRODUCT_CATEGORY]: deleteProductCategory,
  [Types.DELETE_PRODUCT_CATEGORY_SUCCESS]: deleteProductCategorySuccess,
  [Types.DELETE_PRODUCT_CATEGORY_FAILURE]: deleteProductCategoryFailure,
}

export default createReducer(INITIAL_STATE, HANDLERS);