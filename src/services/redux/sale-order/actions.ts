import {createActions} from 'reduxsauce'

export const {Types, Creators} = createActions({
  getSaleOrders: ['query'],
  getSaleOrdersSuccess: ['data'],
  getSaleOrdersFailure: ['error'],

  getSaleOrder: ['id'],
  getSaleOrderSuccess: ['data'],
  getSaleOrderFailure: ['error'],

  createSaleOrder: ['payload'],
  createSaleOrderSuccess: ['data'],
  createSaleOrderFailure: ['error'],

  resetSaleOrders: null,
})