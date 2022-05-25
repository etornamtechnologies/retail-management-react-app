import {all, call, put, takeLatest, takeLeading} from 'redux-saga/effects'
import {Creators, Types} from '../../redux/user/actions'
import {
  fetchUsers as getUsersApi,
  createUser as createUserApi,
  updateUser as updateUserApi,
  fetchUser as getUserApi,
  updateUserStatus as updateUserStatusApi
} from '../../api/user'
import { message } from 'antd';
import { AxiosError } from 'axios';
import { getErrorFromHttpResponse } from '../../../utils/common-helper';


export function* getUsers(action: ReduxAction) {
  console.log('get users action', action)
  const query = action.query;
  try {
    const response: ResponseData<IUser[]> = yield call(getUsersApi, query)
    console.log('response', response)
    if(response.code === 0) {
      const responseData = response?.data
      yield put(Creators.getUsersSuccess(responseData))
    }
  } catch (error: any) {
    const errMsg = error?.response?.data?.message || 'Failure';
    yield put(Creators.getUsersFailure(errMsg))
  }
}

export function* createUser(action: ReduxAction) {
  const {payload} = action
  try {
    const response: ResponseData<IUser> = yield call(createUserApi, payload)
    if(response.code === 0) {
      yield put(Creators.createUserSuccess(response?.data))
      message.info(response?.message);
    } else {
      yield put(Creators.createUserFailure(response.message));
    }
  } catch (error: any) {
    const errorMsg = getErrorFromHttpResponse(error)
    yield put(Creators.createUserFailure(errorMsg))
  }
}

export function* updateUser(action: ReduxAction) {
  const {id, payload} = action
  try {
    const response: ResponseData<IUser> = yield call(updateUserApi, id as number, payload)
    if(response.code === 0) {
      yield put(Creators.updateUserSuccess(response?.data))
      message.info(response?.message);
    } else {
      yield put(Creators.updateUserFailure(response.message));
    }
  } catch (error: any) {
    const errorMsg = getErrorFromHttpResponse(error)
    yield put(Creators.updateUserFailure(errorMsg))
  }
}

export function* getUser(action: ReduxAction) {
  const {id} = action
  try {
    const response: ResponseData<IUser> = yield call(getUserApi, id as number)
    if(response.code === 0) {
      yield put(Creators.getUserSuccess(response.data))
    } else {
      yield put(Creators.getUserFailure(response.message))
    }
  } catch (error: any) {
    yield put(Creators.getUserFailure(getErrorFromHttpResponse(error)))
  }
}

export function* updateUserStatus(action: ReduxAction) {
  const {id, status} = action
  //const msgTitle = status ? 'Activate User' : 'Deactivate User'
  try {
    const response: ResponseData<IUser> = yield call(updateUserStatusApi, id as number, status as boolean)
    if(response.code === 0) {
      yield put(Creators.updateUserStatusSuccess(response.data))
      
      message.success(response.message);
    } else {
      yield put(Creators.updateUserStatusFailure(response.message))
    }
  } catch (error: any) {
    yield put(Creators.updateUserStatusFailure(getErrorFromHttpResponse(error)))
  }
}



export default function* userSaga() {
  yield all([
    takeLatest(Types.GET_USERS, getUsers),
    takeLeading(Types.CREATE_USER, createUser),
    takeLeading(Types.UPDATE_USER, updateUser),
    takeLeading(Types.GET_USER, getUser),
    takeLeading(Types.UPDATE_USER_STATUS, updateUserStatus)
  ])
}