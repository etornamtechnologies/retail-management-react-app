import {createActions} from 'reduxsauce'

export const {Types, Creators} = createActions({
  login: ['payload'],
  loginSuccess: ['data'],
  loginFailure: ['error'],

  logout: null,

  resetAuth: null,
})