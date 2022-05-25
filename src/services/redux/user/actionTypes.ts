import {createTypes} from 'reduxsauce'

export default createTypes(`
  GET_USERS
  GET_USERS_SUCCESS
  GET_USERS_FAILURE

  GET_USER
  GET_USER_SUCCESS
  GET_USER_FAILURE

  CREATE_USER
  CREATE_USER_SUCCESS
  CREATE_USER_FAILURE

  UPDATE_USER
  UPDATE_USER_SUCCESS
  UPDATE_USER_FAILURE

  UPDATE_USER_STATUS
  UPDATE_USER_STATUS_SUCCESS
  UPDATE_USER_STATUS_FAILURE

  DELETE_USER
  DELETE_USER_SUCCESS
  DELETE_USER_FAILURE

  CHANGE_PASSWORD
  CHANGE_PASSWORD_SUCCESS
  CHANGE_PASSWORD_FAILURE

  RESET_USER
`)