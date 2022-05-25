import {createActions} from 'reduxsauce'

export const {Types, Creators} = createActions({
  getSkus: ['query'],
  getSkusSuccess: ['data'],
  getSkusFailure: ['error'],

  getSku: ['id'],
  getSkuSuccess: ['data'],
  getSkuFailure: ['error'],

  createSku: ['payload'],
  createSkuSuccess: ['data'],
  createSkuFailure: ['error'],

  updateSku: ['id','payload'],
  updateSkuSuccess: ['data'],
  updateSkuFailure: ['error'],

  deleteSku: ['id'],
  deleteSkuSuccess: ['data'],
  deleteSkuFailure: ['error'],

  resetSkus: null,
})