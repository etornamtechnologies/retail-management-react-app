import {createActions} from 'reduxsauce'

export const {Types, Creators} = createActions({
  getProductCategories: ['query'],
  getProductCategoriesSuccess: ['data'],
  getProductCategoriesFailure: ['error'],

  getProductCategory: ['id'],
  getProductCategorySuccess: ['data'],
  getProductCategoryFailure: ['error'],

  createProductCategory: ['payload'],
  createProductCategorySuccess: ['data'],
  createProductCategoryFailure: ['error'],

  updateProductCategory: ['id','payload'],
  updateProductCategorySuccess: ['data'],
  updateProductCategoryFailure: ['error'],

  deleteProductCategory: ['id'],
  deleteProductCategorySuccess: ['id'],
  deleteProductCategoryFailure: ['error'],

  resetProductCategories: null,
})