import {createActions} from 'reduxsauce';

export const {Types, Creators} = createActions({
  getUsers: ['query'],
  getUsersSuccess: ['data'],
  getUsersFailure: ['error'],

  getUser: ['id'],
  getUserSuccess: ['data'],
  getUserFailure: ['error'],

  createUser: ['payload'],
  createUserSuccess: ['data'],
  createUserFailure: ['error'],

  updateUser: ['id','payload'],
  updateUserSuccess: ['data'],
  updateUserFailure: ['error'],

  deleteUser: ['id'],
  deleteUserSuccess: ['data'],
  deleteUserFailure: ['error'],

  changePassword: ['id','payload'],
  changePasswordSuccess: ['data'],
  changePasswordFailure: ['error'],

  updateUserStatus: ['id', 'status'],
  updateUserStatusSuccess: ['data'],
  updateUserStatusFailure: ['error'],


  resetUser: null,
})