import {createTypes} from 'reduxsauce'

export default createTypes(`
  GET_PRODUCTS
  GET_PRODUCTS_SUCCESS
  GET_PRODUCTS_FAILURE

  GET_PRODUCT
  GET_PRODUCT_SUCCESS
  GET_PRODUCT_FAILURE

  CREATE_PRODUCT
  CREATE_PRODUCT_SUCCESS
  CREATE_PRODUCT_FAILURE

  UPDATE_PRODUCT
  UPDATE_PRODUCT_SUCCESS
  UPDATE_PRODUCT_FAILURE

  DELETE_PRODUCT
  DELETE_PRODUCT_SUCCESS
  DELETE_PRODUCT_FAILURE

  RESET_PRODUCTS
`)