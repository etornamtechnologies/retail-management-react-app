import {createActions} from 'reduxsauce'

export const {Types, Creators} = createActions({
  getProducts: ['query'],
  getProductsSuccess: ['data'],
  getProductsFailure: ['error'],

  getProduct: ['id'],
  getProductSuccess: ['data'],
  getProductFailure: ['error'],

  createProduct: ['payload'],
  createProductSuccess: ['data'],
  createProductFailure: ['error'],

  updateProduct: ['id','payload'],
  updateProductSuccess: ['data'],
  updateProductFailure: ['error'],

  deleteProduct: ['id'],
  deleteProductSuccess: ['data'],
  deleteProductFailure: ['error'],

  resetProducts: null,
})